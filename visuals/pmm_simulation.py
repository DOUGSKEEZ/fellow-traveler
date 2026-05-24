#!/usr/bin/env python3
"""
Pathway Mixture Model (PMM) — simulation of the Fellow Traveler Hypothesis.

A two-regime mixture:
  - BULK ("the plains"):  X, Y independent N(0,1).
  - PATHWAY ("the trail"): a hidden common factor P co-generates X, Y, and an
    UN-SELECTED co-effect W. The trail is rare (prevalence PI) and offset into the tail.

What the four figures show:
  1. Scatter + topographic density: the bulk cannot reach the joint-tail corner; the trail can.
  2. Conditional exceedance lambda(q): the fork rises into the tail, a Berkson collider sinks
     below the independence baseline. Opposite signatures.
  3. Co-effect elevation: conditioning on the joint tail lifts W under the fork, but NOT under
     the collider (no common cause to reach an un-selected trait). This is the demarcation test.
  4. The deception sweep: as the pathway gets rarer (PI -> 0), the aggregate correlation goes
     quiet while the tail enrichment stays loud. Faint cause, loud symptom.

Slide PI down (line below) to watch the cause go quiet and the collision get louder.
"""

import numpy as np
from scipy import stats
import matplotlib.pyplot as plt
from matplotlib.colors import LogNorm
from matplotlib.patches import Rectangle

# ----------------------------------------------------------------------------------
#  PARAMETERS  (illustrative — not fitted to any data)
# ----------------------------------------------------------------------------------
PI       = 0.01     # <-- pathway prevalence. THE KNOB. Try 0.001, 0.01, 0.05.
A, B     = 1.2, 1.2 # loadings of the pathway factor P onto X and Y
C        = 1.0      # loading of P onto the un-selected co-effect W
MU_X     = 2.5      # tail offset: how far up the trail climbs the X axis
MU_Y     = 2.5      # tail offset on Y
MU_W     = 1.5      # tail offset on the co-effect W
SIGMA_E  = 0.5      # idiosyncratic noise sd on each trait
NU       = 4        # Student-t dof for the heavy-tailed pathway variant
N        = 1_000_000
SEED     = 7
rng = np.random.default_rng(SEED)


# ----------------------------------------------------------------------------------
#  SAMPLERS
# ----------------------------------------------------------------------------------
def sample_pmm(n, pi, heavy=False, rng=rng):
    """Pathway Mixture Model. Returns X, Y, W, Z (hidden regime)."""
    Z = rng.random(n) < pi                      # True == on the trail
    nP = int(Z.sum())
    # bulk
    X = rng.standard_normal(n)
    Y = rng.standard_normal(n)
    W = rng.standard_normal(n)
    # pathway: shared latent factor P
    if heavy:
        P = stats.t.rvs(NU, size=nP, random_state=rng) * np.sqrt((NU - 2) / NU)  # unit-variance t
    else:
        P = rng.standard_normal(nP)
    ex = rng.normal(0, SIGMA_E, nP)
    ey = rng.normal(0, SIGMA_E, nP)
    ew = rng.normal(0, SIGMA_E, nP)
    X[Z] = MU_X + A * P + ex
    Y[Z] = MU_Y + B * P + ey
    W[Z] = MU_W + C * P + ew
    return X, Y, W, Z


def sample_additive_collider(n, rng=rng):
    """Compensatory Berkson foil: independent X,Y,W; gate S = (X+Y>tau). Negative corr within S."""
    X = rng.standard_normal(n)
    Y = rng.standard_normal(n)
    W = rng.standard_normal(n)              # un-selected, independent of everything
    tau = np.quantile(X + Y, 0.90)          # select the top ~10% by X+Y
    S = (X + Y) > tau
    return X, Y, W, S


def sample_conjunctive_collider(n, ax_q=0.85, rng=rng):
    """Conjunctive Berkson foil: independent X,Y,W; gate S = (X>a AND Y>b).
    Populates the joint-tail corner (unlike the additive gate) WITHOUT a common cause,
    so the un-selected co-effect W must stay flat — the clean demarcation contrast."""
    X = rng.standard_normal(n)
    Y = rng.standard_normal(n)
    W = rng.standard_normal(n)
    a, b = np.quantile(X, ax_q), np.quantile(Y, ax_q)
    S = (X > a) & (Y > b)
    return X, Y, W, S


# ----------------------------------------------------------------------------------
#  DIAGNOSTICS
# ----------------------------------------------------------------------------------
def lambda_curve(X, Y, qs):
    """Conditional exceedance lambda(q) = P(Y>y_q | X>x_q) using empirical marginal quantiles."""
    out = np.empty_like(qs, dtype=float)
    for i, q in enumerate(qs):
        xq, yq = np.quantile(X, q), np.quantile(Y, q)
        hi = X > xq
        out[i] = np.nan if hi.sum() == 0 else (Y[hi] > yq).mean()
    return out


def tail_enrichment(X, Y, q=0.99):
    """P(both > q-quantile) / [P(X>q)P(Y>q)]. ==1 under independence, >>1 under a fork."""
    xq, yq = np.quantile(X, q), np.quantile(Y, q)
    joint = ((X > xq) & (Y > yq)).mean()
    return joint / ((1 - q) * (1 - q))


# ----------------------------------------------------------------------------------
#  GENERATE
# ----------------------------------------------------------------------------------
X, Y, W, Z = sample_pmm(N, PI, heavy=False)
Xh, Yh, Wh, Zh = sample_pmm(N, PI, heavy=True)
Xc, Yc, Wc, Sc = sample_additive_collider(2 * N)           # for the lambda(q) sink
Xj, Yj, Wj, Sj = sample_conjunctive_collider(3 * N)         # for the co-effect contrast

agg_corr = np.corrcoef(X, Y)[0, 1]
enr_99   = tail_enrichment(X, Y, 0.99)

print(f"PI = {PI}")
print(f"aggregate corr(X,Y)         = {agg_corr:+.4f}   (faint)")
print(f"tail enrichment @ q=0.99    = {enr_99:6.1f}x    (loud)")
print(f"deception ratio enr/|corr|  = {enr_99/abs(agg_corr):6.1f}")

# co-effect elevation
xq99, yq99 = np.quantile(X, 0.99), np.quantile(Y, 0.99)
in_tail = (X > xq99) & (Y > yq99)
# conjunctive collider: condition on its populated joint-tail corner (the selected set itself)
coll_tail = Sj
print(f"E[W]                        = {W.mean():+.3f}")
print(f"E[W | joint tail], FORK     = {W[in_tail].mean():+.3f}   (lifted)")
print(f"E[W | joint tail], COLLIDER = {Wj[coll_tail].mean():+.3f}   (flat)")


# ----------------------------------------------------------------------------------
#  FIGURE 1 — the phenomenon (2x2)
# ----------------------------------------------------------------------------------
plt.rcParams.update({"figure.dpi": 110, "font.size": 10, "axes.titlesize": 11})
fig, ax = plt.subplots(2, 2, figsize=(12, 10))
fig.suptitle("Pathway Mixture Model — the Fellow Traveler collision", fontsize=14, weight="bold")

# (1) scatter colored by hidden regime
s = rng.choice(N, 40_000, replace=False)
ax[0, 0].scatter(X[s][~Z[s]], Y[s][~Z[s]], s=2, alpha=0.25, color="#3b6ea5", label="bulk (plains)")
ax[0, 0].scatter(X[s][Z[s]],  Y[s][Z[s]],  s=6, alpha=0.7,  color="#e07b39", label="pathway (trail)")
ax[0, 0].add_patch(Rectangle((xq99, yq99), 10, 10, fill=False, ec="black", lw=1.5, ls="--"))
ax[0, 0].text(xq99 + 0.1, yq99 + 0.5, "joint tail", fontsize=9)
ax[0, 0].set(xlim=(-4, 7), ylim=(-4, 7), xlabel="X", ylabel="Y",
             title="Who reaches the corner?")
ax[0, 0].legend(loc="upper left", framealpha=0.9)

# (2) topographic joint density (log) — reveals the faint trail ridge against the tall bulk peak
h, xe, ye = np.histogram2d(X, Y, bins=240, range=[[-4, 7], [-4, 7]])
cf = ax[0, 1].contourf(0.5 * (xe[:-1] + xe[1:]), 0.5 * (ye[:-1] + ye[1:]), (h.T + 1),
                       levels=np.logspace(0, np.log10(h.max() + 1), 18),
                       norm=LogNorm(), cmap="magma")
ax[0, 1].add_patch(Rectangle((xq99, yq99), 10, 10, fill=False, ec="cyan", lw=1.5, ls="--"))
ax[0, 1].set(xlim=(-4, 7), ylim=(-4, 7), xlabel="X", ylabel="Y",
             title="Topographic density (log): bulk peak + trail ridge")
fig.colorbar(cf, ax=ax[0, 1], label="count (log)")

# (3) conditional exceedance lambda(q)
qs = np.linspace(0.50, 0.995, 60)
ax[1, 0].plot(qs, 1 - qs, "k--", lw=1.5, label="independence baseline")
ax[1, 0].plot(qs, lambda_curve(X, Y, qs),  color="#e07b39", lw=2.2, label="fork (Gaussian P)")
ax[1, 0].plot(qs, lambda_curve(Xh, Yh, qs), color="#b3402a", lw=2.2, label="fork (heavy-tail P)")
qs_c = np.linspace(0.50, 0.98, 40)
ax[1, 0].plot(qs_c, lambda_curve(Xc[Sc], Yc[Sc], qs_c), color="#3b6ea5", lw=2.2,
              label="Berkson collider (within S)")
ax[1, 0].set(xlabel="quantile q", ylabel=r"$\lambda(q)=P(Y>y_q\,|\,X>x_q)$",
             title="Fork rises, collider sinks, independence decays")
ax[1, 0].legend()

# (4) co-effect elevation — the demarcation test
bins = np.linspace(-4, 6, 80)
ax[1, 1].hist(W, bins=bins, density=True, alpha=0.45, color="gray", label="W, whole population")
ax[1, 1].hist(W[in_tail], bins=bins, density=True, histtype="step", lw=2.4, color="#e07b39",
              label="W | joint tail (FORK) — lifted")
ax[1, 1].hist(Wj[coll_tail], bins=bins, density=True, histtype="step", lw=2.4, ls="--",
              color="#3b6ea5", label="W | joint tail (COLLIDER) — flat")
ax[1, 1].set(xlabel="un-selected co-effect W", ylabel="density",
             title="Conditioning on the tail lifts an UN-SELECTED trait\n(only the fork can)")
ax[1, 1].legend(fontsize=8)

fig.tight_layout(rect=[0, 0, 1, 0.97])
fig.savefig("/home/claude/fig1_phenomenon.png", bbox_inches="tight")

# ----------------------------------------------------------------------------------
#  FIGURE 2 — the deception (rarity sweep): cause goes quiet, symptom stays loud
# ----------------------------------------------------------------------------------
pis = np.array([0.001, 0.002, 0.005, 0.01, 0.02, 0.05, 0.10])
corrs, enrich = [], []
for p in pis:
    xs, ys, _, _ = sample_pmm(N, p, heavy=False, rng=np.random.default_rng(100 + int(p * 1e5)))
    corrs.append(abs(np.corrcoef(xs, ys)[0, 1]))
    enrich.append(tail_enrichment(xs, ys, 0.99))
corrs, enrich = np.array(corrs), np.array(enrich)

fig2, axd = plt.subplots(1, 2, figsize=(13, 5))
fig2.suptitle("The deception: rarer pathway → fainter cause, louder symptom", fontsize=13, weight="bold")

axd[0].loglog(pis, corrs, "o-", color="#3b6ea5", lw=2, label="|aggregate corr(X,Y)|  (the cause)")
axd[0].loglog(pis, enrich, "s-", color="#e07b39", lw=2, label="tail enrichment @0.99  (the symptom)")
axd[0].set(xlabel="pathway prevalence  π", title="Cause vs. symptom across rarity")
axd[0].axhline(1, color="k", ls=":", lw=1)
axd[0].legend()

axd[1].loglog(pis, enrich / corrs, "d-", color="#b3402a", lw=2.4)
axd[1].set(xlabel="pathway prevalence  π", ylabel="enrichment / |corr|  (deceptiveness)",
           title="Deceptiveness diverges as π → 0\n(Result 3 of the model)")

fig2.tight_layout(rect=[0, 0, 1, 0.94])
fig2.savefig("/home/claude/fig2_deception.png", bbox_inches="tight")
print("\nsaved fig1_phenomenon.png and fig2_deception.png")
