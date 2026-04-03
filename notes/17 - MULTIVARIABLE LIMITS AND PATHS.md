# MULTIVARIABLE LIMITS AND PATH TESTS

This file develops the rigorous theory of limits for multivariable functions, with a particular focus on **path-based techniques** for evaluating limits and proving their non-existence. We then connect limits to continuity and build towards the directional derivative from first principles, culminating in the gradient dot product theorem. These ideas form the analytical backbone of multivariable calculus: without a solid understanding of when limits exist (and when they fail to exist), the entire differential calculus of several variables rests on shaky ground.

Prerequisites: familiarity with multivariable functions, domains, and basic limit laws (see [[13 - MULTIVARIABLE FUNCTIONS]]), and an informal understanding of partial derivatives (see [[14 - PARTIAL AND DIRECTIONAL DERIVATIVES]]).

---

## 1. Partial Derivatives from First Principles

### 1.1 The Limit Definition

Recall from [[14 - PARTIAL AND DIRECTIONAL DERIVATIVES]] that the partial derivative of $f$ with respect to $x_i$ measures the rate of change of $f$ when only the $i$-th variable is allowed to vary. The formal definition is built entirely on the concept of a one-variable limit.

**Definition (Partial Derivative via Limit).** Let $f : \mathbb{R}^n \to \mathbb{R}$ be a scalar-valued function. The **partial derivative of $f$ with respect to $x_i$** at the point $\mathbf{a} = (a_1, \dots, a_n)$ is

$$\frac{\partial f}{\partial x_i}(\mathbf{a}) = \lim_{h \to 0} \frac{f(a_1, \dots, a_i + h, \dots, a_n) - f(a_1, \dots, a_i, \dots, a_n)}{h}$$

provided this limit exists.

For a function of two variables $f(x,y)$, this specialises to:

$$f_x(x,y) = \frac{\partial f}{\partial x}(x,y) = \lim_{h \to 0} \frac{f(x+h,\, y) - f(x,\, y)}{h}$$

$$f_y(x,y) = \frac{\partial f}{\partial y}(x,y) = \lim_{h \to 0} \frac{f(x,\, y+h) - f(x,\, y)}{h}$$

The key observation is that when computing $f_x$, the variable $y$ is held fixed — it acts as a **constant** throughout the limit process. Similarly, when computing $f_y$, the variable $x$ is held fixed.

### 1.2 Worked Example: Partial Derivatives of $e^{xy}$

**Example:** Let $f(x,y) = e^{xy}$. Compute $f_x(x,y)$ and $f_y(x,y)$ using the limit definition.

**Solution (computing $f_x$):**

$$f_x(x,y) = \lim_{h \to 0} \frac{f(x+h,\, y) - f(x,\, y)}{h} = \lim_{h \to 0} \frac{e^{(x+h)y} - e^{xy}}{h}$$

Expand the exponent: $(x+h)y = xy + hy$. Factor out $e^{xy}$:

$$= \lim_{h \to 0} \frac{e^{xy} \cdot e^{hy} - e^{xy}}{h} = e^{xy} \lim_{h \to 0} \frac{e^{hy} - 1}{h}$$

The factor $e^{xy}$ does not depend on $h$, so it passes through the limit. To evaluate the remaining limit, multiply numerator and denominator by $y$ (assuming $y \neq 0$):

$$e^{xy} \lim_{h \to 0} \frac{e^{hy} - 1}{h} = e^{xy} \cdot y \lim_{h \to 0} \frac{e^{hy} - 1}{hy}$$

Let $u = hy$. As $h \to 0$, we have $u \to 0$, and the standard single-variable limit gives:

$$\lim_{u \to 0} \frac{e^u - 1}{u} = 1$$

Therefore:

$$f_x(x,y) = y \, e^{xy}$$

(When $y = 0$, the numerator $e^{hy} - 1 = e^0 - 1 = 0$ for all $h$, so the limit is $0 = y \, e^{xy}$, and the formula still holds.)

**Solution (computing $f_y$):**

By the same method, incrementing $y$ instead of $x$:

$$f_y(x,y) = \lim_{h \to 0} \frac{e^{x(y+h)} - e^{xy}}{h} = e^{xy} \lim_{h \to 0} \frac{e^{hx} - 1}{h} = x \, e^{xy}$$

The roles of $x$ and $y$ are exactly interchanged.

> **Clarification:** The limit definition always reduces the partial derivative computation to a single-variable limit in $h$. All other variables are frozen constants. This is why every standard single-variable limit result (such as $\lim_{u \to 0} \frac{e^u - 1}{u} = 1$) remains available.

### 1.3 Summary: Partial Derivatives from First Principles

| Quantity | Definition | Key Idea |
|---|---|---|
| $f_x(x,y)$ | $\displaystyle\lim_{h\to 0}\frac{f(x+h,y)-f(x,y)}{h}$ | Increment $x$, hold $y$ fixed |
| $f_y(x,y)$ | $\displaystyle\lim_{h\to 0}\frac{f(x,y+h)-f(x,y)}{h}$ | Increment $y$, hold $x$ fixed |
| $f_{x_i}(\mathbf{a})$ | $\displaystyle\lim_{h\to 0}\frac{f(\mathbf{a}+h\mathbf{e}_i)-f(\mathbf{a})}{h}$ | Increment along the $i$-th standard basis vector |

---

## 2. Multivariable Limits — Formal Setting

### 2.1 Recall of the Definition

A fuller treatment of multivariable limits appears in [[13 - MULTIVARIABLE FUNCTIONS]]. We restate the core definition here for convenience.

**Definition (Limit of a Multivariable Function).** Let $f : D \subseteq \mathbb{R}^n \to \mathbb{R}$ and let $\mathbf{a}$ be a limit point of $D$. We write

$$\lim_{\mathbf{x} \to \mathbf{a}} f(\mathbf{x}) = L$$

if for every $\varepsilon > 0$ there exists $\delta > 0$ such that

$$0 < \|\mathbf{x} - \mathbf{a}\| < \delta \implies |f(\mathbf{x}) - L| < \varepsilon$$

### 2.2 The Fundamental Difficulty

In single-variable calculus, $x \to a$ can approach $a$ from only **two directions**: left and right. If both one-sided limits agree, the limit exists.

In $\mathbb{R}^2$, the point $(x,y)$ can approach $(a,b)$ along **infinitely many paths**: straight lines of every slope, parabolas, spirals, cubic curves, and so on. For the limit to exist, $f$ must approach the **same value $L$** along *every* path. This is what makes multivariable limits fundamentally harder.

> **Clarification:** Checking finitely many paths and getting the same value does **not** prove the limit exists. It only fails to disprove existence. To *prove* a limit exists, one generally needs an $\varepsilon$-$\delta$ argument, the squeeze theorem, or conversion to polar coordinates. The path test is a tool for **disproving** existence.

---

## 3. The Path Test for Non-Existence of Limits

### 3.1 Statement of the Path Test

**Theorem (Path Test for Non-Existence).** Let $f : D \subseteq \mathbb{R}^n \to \mathbb{R}$ and let $\mathbf{a}$ be a limit point of $D$. If there exist two paths $\boldsymbol{\gamma}_1(t)$ and $\boldsymbol{\gamma}_2(t)$ with

$$\lim_{t \to t_0} \boldsymbol{\gamma}_1(t) = \mathbf{a}, \qquad \lim_{t \to t_0} \boldsymbol{\gamma}_2(t) = \mathbf{a}$$

such that

$$\lim_{t \to t_0} f(\boldsymbol{\gamma}_1(t)) \neq \lim_{t \to t_0} f(\boldsymbol{\gamma}_2(t))$$

(or one of these single-variable limits does not exist), then $\displaystyle\lim_{\mathbf{x} \to \mathbf{a}} f(\mathbf{x})$ **does not exist**.

The contrapositive is equally important: if the multivariable limit *does* exist and equals $L$, then $f$ must tend to $L$ along **every** path approaching $\mathbf{a}$.

### 3.2 Strategy: Choosing Paths

When investigating $\displaystyle\lim_{(x,y) \to (0,0)} f(x,y)$, the standard strategy is:

1. **Step 1 — Check coordinate axes.** Set $y = 0$ (approach along the $x$-axis) and then $x = 0$ (approach along the $y$-axis).
2. **Step 2 — Check general straight lines.** Substitute $y = mx$ and compute the limit as $x \to 0$. If the result depends on $m$, the limit does not exist.
3. **Step 3 — Check curved paths.** If all straight lines give the same value, try curves such as $y = x^2$, $x = y^2$, $y = x^{2/3}$, etc.

A useful **heuristic for choosing paths**: examine the degrees of the numerator and denominator.

- If $\deg(\text{numerator}) = \deg(\text{denominator})$, try $y = mx$ (straight lines).
- If straight lines all give $0$ but you suspect the limit does not exist, try a curve that **balances** the dominant terms in the denominator, e.g., if the denominator contains $x^2 + y^4$, try $x = y^2$ so that both terms become the same power.

### 3.3 Worked Example: Straight-Line Path Test

**Example:** Determine whether the following limit exists:

$$\lim_{(x,y) \to (0,0)} \frac{x^2 y}{x^3 + y^3}$$

**Solution:**

**Degree analysis.** The numerator has degree $3$ and the denominator has degree $3$. Equal degrees suggest that straight-line paths $y = mx$ may yield an $m$-dependent result.

**Substitute $y = mx$:**

$$\frac{x^2(mx)}{x^3 + (mx)^3} = \frac{m x^3}{x^3(1 + m^3)} = \frac{m}{1 + m^3}$$

(valid for $1 + m^3 \neq 0$, i.e., $m \neq -1$). This expression is **independent of $x$**, so:

$$\lim_{x \to 0} \frac{m}{1 + m^3} = \frac{m}{1 + m^3}$$

Now test specific values of $m$:

- Along $y = 0$ (i.e., $m = 0$): limit $= \dfrac{0}{1} = 0$.
- Along $y = x$ (i.e., $m = 1$): limit $= \dfrac{1}{2}$.

Since $0 \neq \dfrac{1}{2}$, the limit along two different paths disagrees.

$$\boxed{\lim_{(x,y) \to (0,0)} \frac{x^2 y}{x^3 + y^3} \text{ does not exist.}}$$

### 3.4 Worked Example: When Straight Lines Are Not Enough

**Example:** Determine whether the following limit exists:

$$\lim_{(x,y) \to (0,0)} \frac{xy^2}{x^2 + y^4}$$

**Solution:**

**Step 1 — Coordinate axes.**

- Along $y = 0$: $\dfrac{x \cdot 0}{x^2 + 0} = 0$. Limit is $0$.
- Along $x = 0$: $\dfrac{0 \cdot y^2}{0 + y^4} = 0$. Limit is $0$.

**Step 2 — General straight lines $y = mx$.**

$$\frac{x(mx)^2}{x^2 + (mx)^4} = \frac{m^2 x^3}{x^2 + m^4 x^4} = \frac{m^2 x^3}{x^2(1 + m^4 x^2)} = \frac{m^2 x}{1 + m^4 x^2}$$

As $x \to 0$:

$$\lim_{x \to 0} \frac{m^2 x}{1 + m^4 x^2} = 0$$

So along **every** straight line through the origin, the limit is $0$.

**Step 3 — Try a curved path.** The denominator is $x^2 + y^4$. To balance these terms, set $x = y^2$:

$$\frac{y^2 \cdot y^2}{(y^2)^2 + y^4} = \frac{y^4}{y^4 + y^4} = \frac{y^4}{2y^4} = \frac{1}{2}$$

for all $y \neq 0$. Therefore:

$$\lim_{y \to 0} \frac{1}{2} = \frac{1}{2}$$

We have found two paths giving different limits ($0$ along any straight line vs. $\frac{1}{2}$ along the parabola $x = y^2$).

$$\boxed{\lim_{(x,y) \to (0,0)} \frac{xy^2}{x^2 + y^4} \text{ does not exist.}}$$

> **Clarification:** This example is critical. It shows that **agreement along all straight lines is insufficient** to conclude that a limit exists. You must always consider the possibility that a curved path produces a different limiting value. The path test is a one-way tool: disagreement proves non-existence, but agreement (even along infinitely many straight lines) does not prove existence.

### 3.5 Summary Table: Path Test Strategy

| Step | Path(s) | What to Check | Conclusion if Values Differ |
|---|---|---|---|
| 1 | $y = 0$, then $x = 0$ | Limits along coordinate axes | Limit DNE |
| 2 | $y = mx$ for general $m$ | Whether result depends on $m$ | Limit DNE |
| 3 | $x = y^k$, $y = x^k$, or paths chosen to balance denominator terms | Whether result differs from Step 2 | Limit DNE |
| — | All paths agree | *Cannot conclude limit exists from paths alone* | Need $\varepsilon$-$\delta$ or squeeze argument |

---

## 4. Continuity at a Point for Multivariable Functions

### 4.1 Definition

**Definition (Continuity).** A function $f : D \subseteq \mathbb{R}^n \to \mathbb{R}$ is **continuous at the point $\mathbf{a} \in D$** if the following three conditions all hold:

1. $f(\mathbf{a})$ is defined (i.e., $\mathbf{a} \in D$).
2. $\displaystyle\lim_{\mathbf{x} \to \mathbf{a}} f(\mathbf{x})$ exists.
3. $\displaystyle\lim_{\mathbf{x} \to \mathbf{a}} f(\mathbf{x}) = f(\mathbf{a})$.

If any one of these conditions fails, $f$ is **discontinuous at $\mathbf{a}$**.

$f$ is **continuous on $D$** if it is continuous at every point of $D$.

### 4.2 Testing Continuity of Piecewise Functions

Many interesting continuity questions arise from **piecewise-defined functions**, where the function has one formula at the point $\mathbf{a}$ and a different formula elsewhere. The path test then becomes a tool to investigate condition (2).

### 4.3 Worked Example: Continuity at the Origin

**Example:** Determine whether the following function is continuous at the origin:

$$f(x,y) = \begin{cases} \dfrac{xy^2}{x^2 + y^4} & \text{if } (x,y) \neq (0,0) \\[6pt] 0 & \text{if } (x,y) = (0,0) \end{cases}$$

**Solution:**

**Condition (1):** $f(0,0) = 0$ is defined. ✓

**Condition (2):** We must check whether $\displaystyle\lim_{(x,y) \to (0,0)} f(x,y)$ exists.

From the worked example in Section 3.4, we showed:

- Along every straight line $y = mx$: limit $= 0$.
- Along the parabola $x = y^2$: limit $= \frac{1}{2}$.

Since two paths give different values, $\displaystyle\lim_{(x,y) \to (0,0)} f(x,y)$ **does not exist**. ✗

**Conclusion:** Since condition (2) fails, $f$ is **not continuous at the origin**. $\square$

> **Clarification:** The value assigned at the origin ($f(0,0) = 0$) is irrelevant once we know the limit does not exist. No choice of value at the origin can rescue continuity — the function intrinsically fails to have a well-defined limiting behaviour near $(0,0)$.

### 4.4 When the Limit Does Exist

If you can show (e.g., via squeeze theorem or polar coordinates) that $\displaystyle\lim_{\mathbf{x}\to\mathbf{a}} f(\mathbf{x}) = L$ and $f(\mathbf{a}) = L$, then $f$ is continuous at $\mathbf{a}$.

**Example:** Show that $g(x,y) = \begin{cases} \dfrac{x^2 y^2}{x^2+y^2} & (x,y)\neq(0,0) \\ 0 & (x,y)=(0,0) \end{cases}$ is continuous at the origin.

**Solution:** We use the squeeze theorem. Since $x^2 \leq x^2 + y^2$, we have $\dfrac{x^2}{x^2+y^2} \leq 1$. Therefore:

$$0 \leq \frac{x^2 y^2}{x^2 + y^2} \leq y^2$$

As $(x,y) \to (0,0)$, we have $y^2 \to 0$, so by the squeeze theorem:

$$\lim_{(x,y)\to(0,0)} \frac{x^2 y^2}{x^2+y^2} = 0 = g(0,0)$$

Hence $g$ is continuous at the origin. $\square$

---

## 5. Directional Derivatives for Three-Variable Functions

### 5.1 Recall of the Definition

A full treatment of directional derivatives appears in [[14 - PARTIAL AND DIRECTIONAL DERIVATIVES]]. Here we apply the **limit definition** directly to a three-variable function and verify it against the gradient formula.

**Definition (Directional Derivative).** Let $f : \mathbb{R}^n \to \mathbb{R}$ and let $\hat{\mathbf{u}}$ be a **unit vector** in $\mathbb{R}^n$. The **directional derivative** of $f$ at $\mathbf{a}$ in the direction $\hat{\mathbf{u}}$ is

$$D_{\hat{\mathbf{u}}}\, f(\mathbf{a}) = \lim_{h \to 0} \frac{f(\mathbf{a} + h\hat{\mathbf{u}}) - f(\mathbf{a})}{h}$$

provided this limit exists.

> **Clarification:** The direction must be specified by a **unit vector**. If a non-unit vector $\mathbf{v}$ is given, normalise it first:
> $$\hat{\mathbf{u}} = \frac{\mathbf{v}}{\|\mathbf{v}\|}$$

### 5.2 Worked Example: Directional Derivative from First Principles

**Example:** Let $f(x,y,z) = x^2 y + y^2 z$. Compute the directional derivative of $f$ in the direction of $\mathbf{v} = (-1, 0, 1)$ using the limit definition.

**Solution:**

**Step 1 — Normalise the direction vector.**

$$\|\mathbf{v}\| = \sqrt{(-1)^2 + 0^2 + 1^2} = \sqrt{2}$$

$$\hat{\mathbf{u}} = \frac{1}{\sqrt{2}} \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix}$$

**Step 2 — Form $f(\mathbf{a} + h\hat{\mathbf{u}})$.**

The shifted point is:

$$(x,y,z) + h\hat{\mathbf{u}} = \left(x - \frac{h}{\sqrt{2}},\; y,\; z + \frac{h}{\sqrt{2}}\right)$$

Evaluate $f$ at this point:

$$f\!\left(x - \frac{h}{\sqrt{2}},\; y,\; z + \frac{h}{\sqrt{2}}\right) = \left(x - \frac{h}{\sqrt{2}}\right)^2 y \;+\; y^2\!\left(z + \frac{h}{\sqrt{2}}\right)$$

**Step 3 — Expand.**

$$\left(x - \frac{h}{\sqrt{2}}\right)^2 y = \left(x^2 - \frac{2xh}{\sqrt{2}} + \frac{h^2}{2}\right) y = x^2 y - \frac{2xyh}{\sqrt{2}} + \frac{yh^2}{2}$$

$$y^2\!\left(z + \frac{h}{\sqrt{2}}\right) = y^2 z + \frac{y^2 h}{\sqrt{2}}$$

**Step 4 — Subtract $f(x,y,z) = x^2 y + y^2 z$ and divide by $h$.**

$$f(\mathbf{a}+h\hat{\mathbf{u}}) - f(\mathbf{a}) = \cancel{x^2 y} - \frac{2xyh}{\sqrt{2}} + \frac{yh^2}{2} + \cancel{y^2 z} + \frac{y^2 h}{\sqrt{2}} - \cancel{x^2 y} - \cancel{y^2 z}$$

$$= -\frac{2xyh}{\sqrt{2}} + \frac{yh^2}{2} + \frac{y^2 h}{\sqrt{2}}$$

Divide by $h$:

$$\frac{f(\mathbf{a}+h\hat{\mathbf{u}}) - f(\mathbf{a})}{h} = -\frac{2xy}{\sqrt{2}} + \frac{yh}{2} + \frac{y^2}{\sqrt{2}}$$

**Step 5 — Take the limit as $h \to 0$.**

$$D_{\hat{\mathbf{u}}}\, f = \lim_{h \to 0}\left(-\frac{2xy}{\sqrt{2}} + \frac{yh}{2} + \frac{y^2}{\sqrt{2}}\right) = -\frac{2xy}{\sqrt{2}} + \frac{y^2}{\sqrt{2}}$$

$$\boxed{D_{\hat{\mathbf{u}}}\, f(x,y,z) = \frac{-2xy + y^2}{\sqrt{2}}}$$

---

## 6. The Gradient Dot Product Theorem

### 6.1 The Gradient Vector (Recap)

For $f : \mathbb{R}^n \to \mathbb{R}$ differentiable at $\mathbf{a}$, the **gradient** of $f$ at $\mathbf{a}$ is

$$\nabla f(\mathbf{a}) = \begin{bmatrix} f_{x_1}(\mathbf{a}) \\ f_{x_2}(\mathbf{a}) \\ \vdots \\ f_{x_n}(\mathbf{a}) \end{bmatrix}$$

Deeper treatment in [[14 - PARTIAL AND DIRECTIONAL DERIVATIVES]].

### 6.2 Statement of the Theorem

**Theorem (Directional Derivative via the Gradient).** If $f : \mathbb{R}^n \to \mathbb{R}$ is differentiable at $\mathbf{a}$, then for every unit vector $\hat{\mathbf{u}} \in \mathbb{R}^n$:

$$D_{\hat{\mathbf{u}}}\, f(\mathbf{a}) = \nabla f(\mathbf{a}) \cdot \hat{\mathbf{u}}$$

This theorem converts the limit definition of the directional derivative into a simple **dot product** — an enormous computational simplification.

> **Clarification:** The theorem requires $f$ to be **differentiable** at $\mathbf{a}$, which is a stronger condition than merely having partial derivatives at $\mathbf{a}$. A function can have all partial derivatives at a point without being differentiable there (see [[14 - PARTIAL AND DIRECTIONAL DERIVATIVES]] for details).

### 6.3 Verification: Gradient Method Applied to the Previous Example

**Example (continued):** For $f(x,y,z) = x^2 y + y^2 z$ and $\hat{\mathbf{u}} = \frac{1}{\sqrt{2}}(-1,0,1)$, verify the directional derivative using $\nabla f \cdot \hat{\mathbf{u}}$.

**Solution:**

**Compute the partial derivatives:**

$$f_x = \frac{\partial}{\partial x}(x^2 y + y^2 z) = 2xy$$

$$f_y = \frac{\partial}{\partial y}(x^2 y + y^2 z) = x^2 + 2yz$$

$$f_z = \frac{\partial}{\partial z}(x^2 y + y^2 z) = y^2$$

**Form the gradient:**

$$\nabla f = \begin{bmatrix} 2xy \\ x^2 + 2yz \\ y^2 \end{bmatrix}$$

**Compute the dot product:**

$$\nabla f \cdot \hat{\mathbf{u}} = \begin{bmatrix} 2xy \\ x^2 + 2yz \\ y^2 \end{bmatrix} \cdot \begin{bmatrix} -1/\sqrt{2} \\ 0 \\ 1/\sqrt{2} \end{bmatrix} = \frac{-2xy}{\sqrt{2}} + 0 + \frac{y^2}{\sqrt{2}} = \frac{-2xy + y^2}{\sqrt{2}}$$

This is **exactly** the result obtained from the limit definition in Section 5.2. ✓

### 6.4 Why the Theorem Matters

The gradient dot product theorem has several far-reaching consequences:

1. **Computational efficiency.** Computing $\nabla f$ once gives the directional derivative in *any* direction via a dot product, avoiding the limit calculation each time.

2. **Maximum rate of change.** Since $\nabla f \cdot \hat{\mathbf{u}} = \|\nabla f\| \cos\theta$ (where $\theta$ is the angle between $\nabla f$ and $\hat{\mathbf{u}}$):
   - $D_{\hat{\mathbf{u}}} f$ is **maximised** when $\hat{\mathbf{u}}$ points in the direction of $\nabla f$, giving $D_{\hat{\mathbf{u}}} f = \|\nabla f\|$.
   - $D_{\hat{\mathbf{u}}} f$ is **minimised** (most negative) when $\hat{\mathbf{u}}$ points opposite to $\nabla f$.
   - $D_{\hat{\mathbf{u}}} f = 0$ when $\hat{\mathbf{u}}$ is **perpendicular** to $\nabla f$ (i.e., tangent to a level set).

3. **Geometric interpretation.** The gradient $\nabla f(\mathbf{a})$ is **normal** to the level set $f(\mathbf{x}) = f(\mathbf{a})$ at the point $\mathbf{a}$.

---

## 7. Proof Sketch: Gradient Dot Product Theorem

For completeness, we outline why $D_{\hat{\mathbf{u}}} f = \nabla f \cdot \hat{\mathbf{u}}$ when $f$ is differentiable.

**Proof sketch.** The definition of differentiability at $\mathbf{a}$ states that there exists a linear map $L : \mathbb{R}^n \to \mathbb{R}$ such that

$$f(\mathbf{a} + \mathbf{h}) = f(\mathbf{a}) + L(\mathbf{h}) + r(\mathbf{h})$$

where $\dfrac{|r(\mathbf{h})|}{\|\mathbf{h}\|} \to 0$ as $\mathbf{h} \to \mathbf{0}$.

The linear map $L$ is represented by the gradient: $L(\mathbf{h}) = \nabla f(\mathbf{a}) \cdot \mathbf{h}$.

Setting $\mathbf{h} = h\hat{\mathbf{u}}$:

$$\frac{f(\mathbf{a} + h\hat{\mathbf{u}}) - f(\mathbf{a})}{h} = \frac{\nabla f(\mathbf{a}) \cdot (h\hat{\mathbf{u}}) + r(h\hat{\mathbf{u}})}{h} = \nabla f(\mathbf{a}) \cdot \hat{\mathbf{u}} + \frac{r(h\hat{\mathbf{u}})}{h}$$

Since $\|h\hat{\mathbf{u}}\| = |h|$ and