# THE HESSIAN MATRIX AND DIFFERENTIABILITY

This file develops the theory of higher-order partial derivatives, culminating in the **Hessian matrix** — the multivariable analogue of the second derivative. The Hessian matrix is the central tool for classifying critical points of multivariable functions as local minima, local maxima, or saddle points. We also formalise what it means for a multivariable function to be **differentiable**, connecting this notion to the existence of tangent hyperplanes and best linear approximations developed in [[15 - TANGENTS AND CRITICAL POINTS]].

Prerequisites: partial derivatives and the gradient vector ([[14 - PARTIAL AND DIRECTIONAL DERIVATIVES]]), critical points ([[15 - TANGENTS AND CRITICAL POINTS]]), determinants and matrix theory ([[1 - MATRICES]]).

---

## 1. Higher-Order Partial Derivatives

### 1.1 Motivation

For a single-variable function $f$, the first derivative $f'$ measures the rate of change, and the second derivative $f''$ measures how that rate of change itself varies — it captures **concavity**. In one-variable calculus, the second derivative test uses $f''(a)$ to classify critical points: $f''(a) > 0$ implies a local minimum, $f''(a) < 0$ implies a local maximum.

We seek an analogous test for functions of several variables. To build it, we must first understand what "second derivatives" mean when there are multiple variables.

### 1.2 Recall: Partial Derivatives

Let $f(x_1, x_2, \ldots, x_n)$ be a scalar-valued function defined on a domain $D \subseteq \mathbb{R}^n$. The **partial derivative** of $f$ with respect to $x_i$ is

$$\frac{\partial f}{\partial x_i}(\tilde{a}) = \lim_{h \to 0} \frac{f(\tilde{a} + h\mathbf{e}_i) - f(\tilde{a})}{h},$$

where $\mathbf{e}_i$ is the $i$-th standard basis vector in $\mathbb{R}^n$. This measures the rate of change of $f$ in the direction of the $x_i$-axis at $\tilde{a}$. See [[14 - PARTIAL AND DIRECTIONAL DERIVATIVES]] for a full treatment.

### 1.3 Second-Order Partial Derivatives for $f(x, y)$

Since each partial derivative $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$ is itself a scalar-valued function of $(x, y)$, we can differentiate it again. This produces four **second-order partial derivatives**:

| Notation (subscript) | Notation (Leibniz) | Meaning |
|---|---|---|
| $f_{xx}$ | $\dfrac{\partial^2 f}{\partial x^2}$ | Differentiate w.r.t. $x$, then again w.r.t. $x$ |
| $f_{yy}$ | $\dfrac{\partial^2 f}{\partial y^2}$ | Differentiate w.r.t. $y$, then again w.r.t. $y$ |
| $f_{xy}$ | $\dfrac{\partial^2 f}{\partial y \, \partial x}$ | Differentiate w.r.t. $x$ first, then w.r.t. $y$ |
| $f_{yx}$ | $\dfrac{\partial^2 f}{\partial x \, \partial y}$ | Differentiate w.r.t. $y$ first, then w.r.t. $x$ |

The last two are called the **mixed partial derivatives**.

> **Clarification:** There is an important notational subtlety between the subscript and Leibniz forms. In the **subscript notation** $f_{xy}$, the order of differentiation reads **left to right**: first differentiate with respect to $x$, then with respect to $y$. In the **Leibniz notation** $\frac{\partial^2 f}{\partial y \, \partial x}$, the order reads **right to left** (innermost first): first $\frac{\partial}{\partial x}$, then $\frac{\partial}{\partial y}$. Thus:
> $$f_{xy} = \frac{\partial}{\partial y}\!\left(\frac{\partial f}{\partial x}\right) = \frac{\partial^2 f}{\partial y \, \partial x}.$$
> This reversal is a common source of errors. Remember: the subscript notation and the Leibniz denominator list variables in **opposite order**.

### 1.4 Worked Examples (Second-Order Partials)

**Example 1:** Let $f(x, y) = x + y$.

**Solution:** The first-order partials are $f_x = 1$ and $f_y = 1$. Since these are constants:

$$f_{xx} = 0, \quad f_{yy} = 0, \quad f_{xy} = 0, \quad f_{yx} = 0.$$

Note that $f_{xy} = f_{yx}$.

---

**Example 2:** Let $f(x, y) = \sin(xy)$.

**Solution:** The first-order partials are:

$$f_x = y\cos(xy), \qquad f_y = x\cos(xy).$$

Now compute each second-order partial:

$$f_{xx} = \frac{\partial}{\partial x}\bigl[y\cos(xy)\bigr] = y \cdot (-\sin(xy)) \cdot y = -y^2 \sin(xy).$$

$$f_{yy} = \frac{\partial}{\partial y}\bigl[x\cos(xy)\bigr] = x \cdot (-\sin(xy)) \cdot x = -x^2 \sin(xy).$$

For the mixed partials, compute $f_{xy}$: differentiate $f_x = y\cos(xy)$ with respect to $y$:

$$f_{xy} = \frac{\partial}{\partial y}\bigl[y\cos(xy)\bigr] = 1 \cdot \cos(xy) + y \cdot (-\sin(xy)) \cdot x = \cos(xy) - xy\sin(xy).$$

Similarly, $f_{yx}$: differentiate $f_y = x\cos(xy)$ with respect to $x$:

$$f_{yx} = \frac{\partial}{\partial x}\bigl[x\cos(xy)\bigr] = 1 \cdot \cos(xy) + x \cdot (-\sin(xy)) \cdot y = \cos(xy) - xy\sin(xy).$$

Again, $f_{xy} = f_{yx}$. This equality is not a coincidence — it is guaranteed by Clairaut's theorem whenever the mixed partials are continuous.

### 1.5 Second-Order Partial Derivatives for $f(x_1, x_2, \ldots, x_n)$

For a function of $n$ variables, the second-order partial derivatives are defined analogously. There are $n^2$ of them:

$$f_{x_i x_j} = \frac{\partial^2 f}{\partial x_j \, \partial x_i} = \frac{\partial}{\partial x_j}\!\left(\frac{\partial f}{\partial x_i}\right), \qquad 1 \leq i, j \leq n.$$

When $i = j$, we write $f_{x_i x_i} = \frac{\partial^2 f}{\partial x_i^2}$. When $i \neq j$, these are the mixed partial derivatives.

**Example 3:** Let $f(x, y, z) = xy + yz + zx$.

**Solution:** First-order partials:

$$f_x = y + z, \quad f_y = x + z, \quad f_z = x + y.$$

Second-order partials: all the "pure" second partials vanish:

$$f_{xx} = 0, \quad f_{yy} = 0, \quad f_{zz} = 0.$$

All six mixed partials equal $1$:

$$f_{xy} = \frac{\partial}{\partial y}(y + z) = 1, \quad f_{xz} = \frac{\partial}{\partial z}(y + z) = 1, \quad f_{yz} = \frac{\partial}{\partial z}(x + z) = 1.$$

By Clairaut's theorem, $f_{yx} = f_{xy} = 1$, $f_{zx} = f_{xz} = 1$, and $f_{zy} = f_{yz} = 1$.

### 1.6 Higher-Order Partial Derivatives

One can iterate the process indefinitely. The **$k$-th order partial derivative** is defined by taking $k$ successive partial derivatives:

$$f_{x_{i_1} x_{i_2} \cdots x_{i_k}} = \frac{\partial}{\partial x_{i_k}} \cdots \frac{\partial}{\partial x_{i_2}} \frac{\partial f}{\partial x_{i_1}}.$$

The subscript notation reads left-to-right; the Leibniz notation reads right-to-left (innermost operator acts first). As with first-order partials, there is no guarantee that higher-order partials exist — the domain of the $k$-th order partial consists of precisely those points where the requisite limit exists.

---

## 2. Symmetry of Mixed Partials: Clairaut's Theorem

### 2.1 Statement of the Theorem

The examples above exhibited the equality $f_{xy} = f_{yx}$. This is guaranteed under a mild continuity condition.

**Theorem (Clairaut's Theorem).** Let $f(x, y)$ be defined on a domain $D \subseteq \mathbb{R}^2$ containing a point $(a, b)$ and an open ball around it. If the mixed partial derivatives $f_{xy}$ and $f_{yx}$ are both **continuous** in an open ball around $(a, b)$, then

$$f_{xy}(a, b) = f_{yx}(a, b).$$

The theorem generalises to $n$ variables: if $f_{x_i x_j}$ and $f_{x_j x_i}$ are continuous in a neighbourhood of $\tilde{a}$, then $f_{x_i x_j}(\tilde{a}) = f_{x_j x_i}(\tilde{a})$.

More generally, under suitable continuity hypotheses on all $k$-th order partials, the order of differentiation in a $k$-th order partial derivative can be **freely rearranged**:

$$f_{x_{i_1} x_{i_2} \cdots x_{i_k}} = f_{x_{i_{\sigma(1)}} x_{i_{\sigma(2)}} \cdots x_{i_{\sigma(k)}}}$$

for any permutation $\sigma$ of $\{1, 2, \ldots, k\}$.

### 2.2 Why the Hypothesis Matters

The continuity hypothesis in Clairaut's theorem is **essential**. Without it, mixed partials can differ.

**Example 4 (Mixed partials are not always equal):** Define

$$f(x, y) = \begin{cases} \dfrac{xy(x^2 - y^2)}{x^2 + y^2} & (x, y) \neq (0, 0), \\[6pt] 0 & (x, y) = (0, 0). \end{cases}$$

**Solution:** We compute the partial derivatives at the origin from the definition.

**Step 1:** $f_x(0, 0)$ and $f_y(0, 0)$.

$$f_x(0, 0) = \lim_{h \to 0} \frac{f(h, 0) - f(0, 0)}{h} = \lim_{h \to 0} \frac{0 - 0}{h} = 0.$$

By symmetry, $f_y(0, 0) = 0$.

**Step 2:** Away from the origin, one computes (via the quotient rule) that:

$$f_x(x, y) = \frac{y(x^4 - y^4 + 4x^2 y^2)}{(x^2 + y^2)^2}, \qquad f_y(x, y) = \frac{x(x^4 - y^4 - 4x^2 y^2)}{(x^2 + y^2)^2}$$

for $(x, y) \neq (0, 0)$.

**Step 3:** Compute $f_{xy}(0, 0)$ from the definition:

$$f_{xy}(0, 0) = \lim_{h \to 0} \frac{f_x(0, h) - f_x(0, 0)}{h}.$$

From the formula for $f_x$, setting $x = 0$: $f_x(0, h) = \frac{h \cdot(-h^4)}{h^4} = -h$. Thus:

$$f_{xy}(0, 0) = \lim_{h \to 0} \frac{-h - 0}{h} = -1.$$

**Step 4:** Compute $f_{yx}(0, 0)$:

$$f_{yx}(0, 0) = \lim_{h \to 0} \frac{f_y(h, 0) - f_y(0, 0)}{h}.$$

Setting $y = 0$: $f_y(h, 0) = \frac{h \cdot h^4}{h^4} = h$. Thus:

$$f_{yx}(0, 0) = \lim_{h \to 0} \frac{h - 0}{h} = 1.$$

**Conclusion:** $f_{xy}(0, 0) = -1 \neq 1 = f_{yx}(0, 0)$. The mixed partial derivatives are **not** continuous at the origin, so Clairaut's theorem does not apply, and indeed the mixed partials differ.

### 2.3 Practical Consequence

For all "standard" functions encountered in applications — polynomials, rational functions (away from zeros of the denominator), trigonometric, exponential, and logarithmic functions — the mixed partials are continuous wherever they exist. Thus **Clairaut's theorem applies in virtually every practical computation**, and you may freely interchange the order of mixed partial differentiation.

For the remainder of these notes, we assume that all functions satisfy the hypotheses of Clairaut's theorem unless stated otherwise.

---

## 3. The Hessian Matrix

### 3.1 Definition

Let $f(x_1, x_2, \ldots, x_n)$ be a function defined on a domain $D \subseteq \mathbb{R}^n$ whose second-order partial derivatives all exist. The **Hessian matrix** of $f$ is the $n \times n$ matrix

$$H_f = \begin{bmatrix} \dfrac{\partial^2 f}{\partial x_1^2} & \dfrac{\partial^2 f}{\partial x_1 \, \partial x_2} & \cdots & \dfrac{\partial^2 f}{\partial x_1 \, \partial x_n} \\[8pt] \dfrac{\partial^2 f}{\partial x_2 \, \partial x_1} & \dfrac{\partial^2 f}{\partial x_2^2} & \cdots & \dfrac{\partial^2 f}{\partial x_2 \, \partial x_n} \\[8pt] \vdots & \vdots & \ddots & \vdots \\[8pt] \dfrac{\partial^2 f}{\partial x_n \, \partial x_1} & \dfrac{\partial^2 f}{\partial x_n \, \partial x_2} & \cdots & \dfrac{\partial^2 f}{\partial x_n^2} \end{bmatrix}.$$

The $(i, j)$-entry is:

$$(H_f)_{ij} = \frac{\partial^2 f}{\partial x_i \, \partial x_j} = f_{x_i x_j}.$$

When evaluated at a specific point $\tilde{a}$, we write $H_f(\tilde{a})$; this is a matrix of **numbers**.

> **Clarification:** The Hessian matrix is constructed by taking the gradient vector $\nabla f = (f_{x_1}, f_{x_2}, \ldots, f_{x_n})$ and differentiating each component with respect to every variable. The $i$-th row of $H_f$ consists of all partial derivatives of $f_{x_i}$.

### 3.2 Symmetry of the Hessian

By Clairaut's theorem, whenever the second-order partials are continuous:

$$(H_f)_{ij} = f_{x_i x_j} = f_{x_j x_i} = (H_f)_{ji}.$$

Therefore, **the Hessian matrix is symmetric** under the standard hypotheses. This is an important structural property: the Hessian is always a real symmetric matrix.

### 3.3 Worked Examples

**Example 5:** $f(x, y) = x + y$.

**Solution:** All second-order partials are zero, so:

$$H_f = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}.$$

---

**Example 6:** $f(x, y) = \sin(xy)$.

**Solution:** From Example 2:

$$H_f = \begin{bmatrix} -y^2 \sin(xy) & \cos(xy) - xy\sin(xy) \\ \cos(xy) - xy\sin(xy) & -x^2 \sin(xy) \end{bmatrix}.$$

Note the symmetry: the off-diagonal entries are equal, confirming Clairaut's theorem.

---

**Example 7:** $f(x, y, z) = xy + yz + zx$.

**Solution:** From Example 3, the Hessian is the $3 \times 3$ matrix:

$$H_f = \begin{bmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{bmatrix}.$$

This is a constant matrix (independent of the point), and is symmetric.

---

## 4. The Hessian Test for $f(x, y)$

### 4.1 Review: The Second Derivative Test in One Variable

For a function $f$ of one variable with a critical point at $x = a$ (so $f'(a) = 0$), the **second derivative test** states:

| Condition | Conclusion |
|---|---|
| $f''(a) > 0$ | $a$ is a **local minimum** |
| $f''(a) < 0$ | $a$ is a **local maximum** |
| $f''(a) = 0$ | **Inconclusive** |

We seek an analogous test using the Hessian matrix.

### 4.2 Statement of the Hessian Test ($n = 2$)

Let $f(x, y)$ be defined on a domain $D \subseteq \mathbb{R}^2$. Suppose $\tilde{a} = (a, b)$ is a **critical point** (i.e., $\nabla f(\tilde{a}) = \mathbf{0}$ or $\nabla f$ does not exist), and suppose the first and second-order partial derivatives of $f$ are **continuous** in an open ball around $\tilde{a}$.

Compute the Hessian matrix at $\tilde{a}$:

$$H_f(\tilde{a}) = \begin{bmatrix} f_{xx}(\tilde{a}) & f_{xy}(\tilde{a}) \\ f_{xy}(\tilde{a}) & f_{yy}(\tilde{a}) \end{bmatrix}$$

and its determinant (sometimes called the **Hessian determinant** or **discriminant**):

$$D = \det\bigl(H_f(\tilde{a})\bigr) = f_{xx}(\tilde{a}) \cdot f_{yy}(\tilde{a}) - \bigl[f_{xy}(\tilde{a})\bigr]^2.$$

Then:

| Condition | Conclusion |
|---|---|
| $D > 0$ and $f_{xx}(\tilde{a}) > 0$ | $\tilde{a}$ is a **local minimum** |
| $D > 0$ and $f_{xx}(\tilde{a}) < 0$ | $\tilde{a}$ is a **local maximum** |
| $D < 0$ | $\tilde{a}$ is a **saddle point** |
| $D = 0$ | **Inconclusive** (degenerate case) |

> **Clarification:** When $D > 0$, the sign of $f_{xx}(\tilde{a})$ determines whether we have a minimum or maximum. One could equivalently check $f_{yy}(\tilde{a})$: since $D = f_{xx}f_{yy} - f_{xy}^2 > 0$, the signs of $f_{xx}$ and $f_{yy}$ must agree (they have the same sign). So the test is symmetric in $x$ and $y$.

### 4.3 Prototype Examples

These four functions illustrate each case of the test and serve as mnemonics.

**Prototype 1 — Local minimum:** $f(x, y) = x^2 + y^2$.

$$\nabla f = (2x, 2y), \quad H_f = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}.$$

Critical point: $(0, 0)$. At $(0, 0)$: $D = 4 > 0$ and $f_{xx} = 2 > 0$. **Conclusion:** local minimum. ✓ (The function is a bowl opening upward.)

---

**Prototype 2 — Local maximum:** $f(x, y) = -x^2 - y^2$.

$$\nabla f = (-2x, -2y), \quad H_f = \begin{bmatrix} -2 & 0 \\ 0 & -2 \end{bmatrix}.$$

Critical point: $(0, 0)$. At $(0, 0)$: $D = 4 > 0$ and $f_{xx} = -2 < 0$. **Conclusion:** local maximum. ✓ (An inverted bowl.)

---

**Prototype 3 — Saddle point:** $f(x, y) = x^2 - y^2$.

$$\nabla f = (2x, -2y), \quad H_f = \begin{bmatrix} 2 & 0 \\ 0 & -2 \end{bmatrix}.$$

Critical point: $(0, 0)$. At $(0, 0)$: $D = (2)(-2) - 0 = -4 < 0$. **Conclusion:** saddle point. ✓ (The classic saddle shape.)

---

**Prototype 4 — Inconclusive:** $f(x, y) = x^4 + y^4$.

$$\nabla f = (4x^3, 4y^3), \quad H_f = \begin{bmatrix} 12x^2 & 0 \\ 0 & 12y^2 \end{bmatrix}.$$

Critical point: $(0, 0)$. At $(0, 0)$: $H_f(0,0) = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}$, so $D = 0$. **Conclusion:** inconclusive. Yet $(0, 0)$ is clearly a global minimum (since $x^4 + y^4 \geq 0$ with equality only at the origin).

> **Clarification:** The inconclusive case does **not** mean the point is not an extremum — it means the Hessian test cannot determine its nature. Other methods (direct analysis, higher-order tests) must be used.

### 4.4 Further Worked Examples

**Example 8:** $f(x, y) = x^2 + 6xy + 4y^2 + 2x - 4y$.

**Solution:**

**Step 1 — Gradient:**

$$\nabla f = (2x + 6y + 2, \; 6x + 8y - 4).$$

**Step 2 — Critical points:** Set $\nabla f = \mathbf{0}$:

$$\begin{cases} 2x + 6y + 2 = 0 \\ 6x + 8y - 4 = 0 \end{cases}$$

From the first equation: $x = -3y - 1$. Substituting into the second: $6(-3y - 1) + 8y - 4 = 0 \implies -18y - 6 + 8y - 4 = 0 \implies -10y = 10 \implies y = -1$. Then $x = -3(-1) - 1 = 2$.

Critical point: $(2, -1)$.

**Step 3 — Hessian:**

$$H_f = \begin{bmatrix} 2 & 6 \\ 6 & 8 \end{bmatrix}.$$

(This is constant — independent of the point.)

**Step 4 — Hessian test at $(2, -1)$:**

$$D = \det\begin{bmatrix} 2 & 6 \\ 6 & 8 \end{bmatrix} = 16 - 36 = -20 < 0.$$

**Conclusion:** $(2, -1)$ is a **saddle point**.

---

**Example 9:** $f(x, y) = xy - x^3 - y^2$.

**Solution:**

**Step 1 — Gradient:**

$$\nabla f = (y - 3x^2, \; x - 2y).$$

**Step 2 — Critical points:** Set $\nabla f = \mathbf{0}$:

$$\begin{cases} y - 3x^2 = 0 \\ x - 2y = 0 \end{cases}$$

From the second equation: $x = 2y$. Substituting into the first: $y = 3(2y)^2 = 12y^2$, so $y(1 - 12y) = 0$.

- If $y = 0$: then $x = 0$. Critical point: $(0, 0)$.
- If $y = \frac{1}{12}$: then $x = \frac{1}{6}$. Critical point: $\left(\frac{1}{6}, \frac{1}{12}\right)$.

**Step 3 — Hessian:**

$$H_f = \begin{bmatrix} -6x & 1 \\ 1 & -2 \end{bmatrix}.$$

**Step 4 — Test at $(0, 0)$:**

$$H_f(0, 0) = \begin{bmatrix} 0 & 1 \\ 1 & -2 \end{bmatrix}, \quad D = (0)(-2) - 1^2 = -1 < 0.$$

**Conclusion:** $(0, 0)$ is a **saddle point**.

**Step 5 — Test at $\left(\frac{1}{6}, \frac{1}{12}\right)$:**

$$H_f\!\left(\tfrac{1}{6}, \tfrac{1}{12}\right) = \begin{bmatrix} -1 & 1 \\ 1 & -2 \end{bmatrix}, \quad D = (-1)(-2) - 1^2 = 2 - 1 = 1 > 0.$$

Since $D > 0$ and $f_{xx} = -1 < 0$: **Conclusion:** $\left(\frac{1}{6}, \frac{1}{12}\right)$ is a **local maximum**.

---

**Example 10:** $f(x, y) = \sin(xy)$.

**Solution:** From earlier work, the critical points where $\nabla f = \mathbf{0}$ satisfy either:

- $\cos(xy) = 0$ (which forces $\sin(xy) = \pm 1$), giving curves of global maxima and minima, or
- $\cos(xy) \neq 0$, which requires both $x = 0$ and $y = 0$, giving the isolated critical point $(0, 0)$.

**Test at $(0, 0)$:**

$$H_f(0, 0) = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}, \quad D = 0 - 1 = -1 < 0.$$

**Conclusion:** $(0, 0)$ is a **saddle point**.

**Test at points where $\sin(xy) = \pm 1$:** In both cases, $\cos(xy) = 0$, and the Hessian becomes:

$$H_f = \begin{bmatrix} \mp y^2 & -xy\sin(xy) \\ -xy\sin(xy) & \mp x^2 \end{bmatrix} = \begin{bmatrix} \mp y^2 & 0 \\ 0 & \mp x^2 \end{bmatrix}$$

(since $\cos(xy) = 0$ kills the non-$\sin$ terms in the off-diagonal entries, leaving only $-xy\sin(xy)$ which, noting that $xy = \frac{\pi}{2} + k\pi$ and cancellations, actually gives): In fact, the off-diagonal is $\cos(xy) - xy\sin(xy) = 0 - xy(\pm 1)$. So the Hessian at such a point is:

$$H_f = \begin{bmatrix} \mp y^2 & \mp xy \\ \mp xy & \mp x^2 \end{bmatrix}$$

where the upper sign corresponds to $\sin(xy) = 1$ and the lower to $\sin(xy) = -1$.

The determinant is $(\mp y^2)(\mp x^2) - (\mp xy)^2 = x^2 y^2 - x^2 y^2 = 0$.

**Conclusion:** The Hessian test is **inconclusive** at all points where $\sin(xy) = \pm 1$, even though these are clearly global extrema. This demonstrates that the test can fail even at obvious extrema.

---

## 5. Leading Principal Minors and the Hessian Test for $f(x, y, z)$

### 5.1 Leading Principal Minors

To state the Hessian test for three or more variables, we need the concept of **leading principal minors**.

**Definition.** Let $A$ be an $n \times n$ matrix. The **$k$-th leading principal minor** of $A$, denoted $\Delta_k$, is the determinant of the $k \times k$ submatrix in the **top-left corner** of $A$:

$$\Delta_k = \det\bigl(A_{[1..k, \, 1..k]}\bigr), \qquad k = 1, 2, \ldots, n.$$

For the $3 \times 3$ Hessian matrix

$$H_f(\tilde{a}) = \begin{bmatrix} f_{xx} & f_{xy} & f_{xz} \\ f_{xy} & f_{yy} & f_{yz} \\ f_{xz} & f_{yz} & f_{zz} \end{bmatrix}$$

(all evaluated at $\tilde{a}$), the