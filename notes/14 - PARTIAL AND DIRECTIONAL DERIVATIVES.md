# PARTIAL DERIVATIVES AND THE GRADIENT

This file develops the machinery for measuring how a function of several variables changes. In single-variable calculus, the derivative captures the rate of change of a function at a point. For a function $f : \mathbb{R}^n \to \mathbb{R}$ with $n > 1$, there is no single "direction" in which to measure change — there are infinitely many. We begin with **partial derivatives**, which measure the rate of change along each coordinate axis, then generalise to **directional derivatives**, which measure the rate of change in an arbitrary direction. The **gradient vector** ties everything together: it packages all partial derivatives into a single vector that both determines every directional derivative and points in the direction of steepest ascent. These ideas are foundational to optimisation, differential geometry, and machine learning.

Prerequisites: familiarity with single-variable differentiation, vectors and dot products ([[11 - INNER PRODUCTS]]), and multivariable functions and limits ([[13 - MULTIVARIABLE FUNCTIONS]]).

---

## 1. Preliminaries and Notation

Throughout this file, the following conventions are in force unless stated otherwise.

| Symbol | Meaning |
|---|---|
| $f$ | A **scalar-valued multivariable function** $f : D \subseteq \mathbb{R}^n \to \mathbb{R}$, $n \geq 2$ |
| $\tilde{a} = (a_1, a_2, \dots, a_n)$ | A point in $\mathbb{R}^n$ |
| $B_r(\tilde{a})$ | The **open ball** of radius $r > 0$ centred at $\tilde{a}$: $B_r(\tilde{a}) = \{\tilde{x} \in \mathbb{R}^n : \|\tilde{x} - \tilde{a}\| < r\}$ |
| $e_1, e_2, \dots, e_n$ | The **standard ordered basis** of $\mathbb{R}^n$ (see [[11 - INNER PRODUCTS]]) |
| $\|v\|$ | The Euclidean norm of $v \in \mathbb{R}^n$ |

The requirement that the domain $D$ contains an open ball around the point $\tilde{a}$ ensures that we can approach $\tilde{a}$ from every direction — a necessary condition for limits defining derivatives.

---

## 2. Partial Derivatives

### 2.1 Motivation: Rate of Change Along One Variable

Recall from single-variable calculus: if $f : \mathbb{R} \to \mathbb{R}$ is defined on an open interval containing $a$, the **derivative** of $f$ at $a$ is

$$f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h},$$

provided this limit exists. This number measures the instantaneous rate of change of $f$ at $a$.

For a function $f(x_1, x_2, \dots, x_n)$ of several variables, we can ask a simpler question first: *what is the rate of change of $f$ at a point $\tilde{a}$ when only the variable $x_i$ changes and all other variables are held fixed?* This is exactly what a partial derivative computes.

### 2.2 Definition of the Partial Derivative

Let $f(x_1, x_2, \dots, x_n)$ be defined on a domain $D \subseteq \mathbb{R}^n$ containing the point $\tilde{a} = (a_1, \dots, a_n)$ and an open ball around it.

**Definition.** The **partial derivative of $f$ with respect to $x_i$** at $\tilde{a}$ is

$$\frac{\partial f}{\partial x_i}(\tilde{a}) = \lim_{h \to 0} \frac{f(\tilde{a} + h\,e_i) - f(\tilde{a})}{h},$$

provided this limit exists. Equivalently, writing out coordinates:

$$\frac{\partial f}{\partial x_i}(\tilde{a}) = \lim_{h \to 0} \frac{f(a_1, \dots, a_{i-1},\; a_i + h,\; a_{i+1}, \dots, a_n) - f(a_1, \dots, a_n)}{h}.$$

Common notations include $f_{x_i}(\tilde{a})$, $\partial_{x_i} f(\tilde{a})$, and $\frac{\partial f}{\partial x_i}\big|_{\tilde{a}}$.

By letting the point $\tilde{a}$ vary, we obtain the **partial derivative function**

$$\frac{\partial f}{\partial x_i} : D_i \to \mathbb{R},$$

where $D_i \subseteq D$ is the set of all points at which the limit exists.

### 2.3 Reduction to Single-Variable Calculus

The key insight is that computing a partial derivative reduces to a problem in single-variable calculus. Define the auxiliary function

$$g(t) = f(a_1, \dots, a_{i-1},\; t,\; a_{i+1}, \dots, a_n).$$

Then $g$ is a function of the single variable $t$, and

$$\frac{\partial f}{\partial x_i}(\tilde{a}) = g'(a_i).$$

This means: **to compute $\frac{\partial f}{\partial x_i}$, treat $f$ as a function of $x_i$ alone, regarding all other variables as constants, and differentiate using the ordinary rules of single-variable calculus.**

> **Clarification:** The symbol $\partial$ (read "del" or "partial") is used instead of $d$ to emphasise that we are differentiating with respect to one variable while holding the others fixed. It does *not* denote a different kind of limit — the underlying limit definition is identical to that of the single-variable derivative.

### 2.4 Geometric Interpretation

Consider $f : \mathbb{R}^2 \to \mathbb{R}$ and a point $(a, b)$. The graph of $f$ is a surface $z = f(x, y)$ in $\mathbb{R}^3$.

- **$\frac{\partial f}{\partial x}(a, b)$:** Intersect the surface with the plane $y = b$ (a vertical plane parallel to the $xz$-plane). The intersection is a curve $z = f(x, b)$. The partial derivative is the slope of the tangent line to this curve at $x = a$.

- **$\frac{\partial f}{\partial y}(a, b)$:** Intersect the surface with the plane $x = a$. The intersection is a curve $z = f(a, y)$. The partial derivative is the slope of the tangent line to this curve at $y = b$.

### 2.5 Worked Examples

**Example 1.** Let $f(x, y) = x + y$. Compute $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$.

**Solution.** *Using the limit definition for* $\frac{\partial f}{\partial x}$ *at the point* $(x, y)$:

$$\frac{\partial f}{\partial x}(x, y) = \lim_{h \to 0} \frac{f(x + h, y) - f(x, y)}{h} = \lim_{h \to 0} \frac{(x + h + y) - (x + y)}{h} = \lim_{h \to 0} \frac{h}{h} = 1.$$

By the shortcut: treat $y$ as a constant and differentiate $x + y$ with respect to $x$. The derivative of $x$ is $1$; the derivative of the constant $y$ is $0$. So $\frac{\partial f}{\partial x} = 1$. By symmetry, $\frac{\partial f}{\partial y} = 1$.

---

**Example 2.** Let $f(x, y, z) = xy + yz + zx$. Compute all three partial derivatives.

**Solution.** Treat two variables as constants in each case:

$$\frac{\partial f}{\partial x}(x,y,z) = y + z, \qquad \frac{\partial f}{\partial y}(x,y,z) = x + z, \qquad \frac{\partial f}{\partial z}(x,y,z) = x + y.$$

*Verification from the limit definition for $\frac{\partial f}{\partial y}$ at $(1, 2, 3)$:*

$$\frac{\partial f}{\partial y}(1,2,3) = \lim_{h \to 0} \frac{f(1,\, 2+h,\, 3) - f(1,2,3)}{h}.$$

We compute $f(1, 2+h, 3) = 1 \cdot (2+h) + (2+h) \cdot 3 + 3 \cdot 1 = 2 + h + 6 + 3h + 3 = 11 + 4h$ and $f(1,2,3) = 2 + 6 + 3 = 11$. Therefore

$$\frac{\partial f}{\partial y}(1,2,3) = \lim_{h \to 0} \frac{11 + 4h - 11}{h} = \lim_{h \to 0} \frac{4h}{h} = 4.$$

This matches $x + z = 1 + 3 = 4$. $\checkmark$

---

**Example 3.** Let $f(x, y) = \sin(xy)$. Compute $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$.

**Solution.** By the chain rule (treating $y$ as a constant):

$$\frac{\partial f}{\partial x}(x, y) = \cos(xy) \cdot y = y\cos(xy).$$

Similarly, treating $x$ as a constant:

$$\frac{\partial f}{\partial y}(x, y) = \cos(xy) \cdot x = x\cos(xy).$$

*Verification at $(1, 0)$:*

- $\frac{\partial f}{\partial x}(1, 0) = 0 \cdot \cos(0) = 0.$

Using the limit definition directly: $\lim_{h \to 0} \frac{\sin((1+h)\cdot 0) - \sin(0)}{h} = \lim_{h \to 0} \frac{0}{h} = 0$. $\checkmark$

- $\frac{\partial f}{\partial y}(1, 0) = 1 \cdot \cos(0) = 1.$

Using the limit definition: $\lim_{h \to 0} \frac{\sin(1 \cdot h) - \sin(0)}{h} = \lim_{h \to 0} \frac{\sin h}{h} = 1$. $\checkmark$

---

**Example 4 (Piecewise-defined function).** Let

$$f(x,y) = \begin{cases} \dfrac{xy}{x^2 + y^2} & \text{if } (x,y) \neq (0,0), \\[6pt] 0 & \text{if } (x,y) = (0,0). \end{cases}$$

Compute $\frac{\partial f}{\partial x}(0,0)$ and $\frac{\partial f}{\partial y}(0,0)$.

**Solution.** Away from the origin, the function is a quotient of polynomials with nonzero denominator, so standard differentiation rules apply. At the origin, we must use the limit definition:

$$\frac{\partial f}{\partial x}(0,0) = \lim_{h \to 0} \frac{f(h,0) - f(0,0)}{h} = \lim_{h \to 0} \frac{\frac{h \cdot 0}{h^2 + 0} - 0}{h} = \lim_{h \to 0} \frac{0}{h} = 0.$$

By symmetry, $\frac{\partial f}{\partial y}(0,0) = 0$. Both partial derivatives exist at the origin and equal zero.

> **Clarification:** For piecewise-defined functions (especially those with a special definition at a single point), the shortcut of "treat other variables as constants and differentiate" may not apply at the special point. Always fall back on the limit definition in such cases.

### 2.6 Summary Table — Partial Derivatives

| Aspect | Detail |
|---|---|
| **What it measures** | Rate of change of $f$ with respect to $x_i$, all other variables held fixed |
| **Definition** | $\displaystyle \frac{\partial f}{\partial x_i}(\tilde{a}) = \lim_{h \to 0} \frac{f(\tilde{a} + he_i) - f(\tilde{a})}{h}$ |
| **Shortcut** | Treat all variables except $x_i$ as constants; differentiate with respect to $x_i$ |
| **Output** | A scalar (at a point) or a scalar-valued function (as the point varies) |
| **Notation** | $f_{x_i}$, $\partial_{x_i}f$, $\frac{\partial f}{\partial x_i}$ |

---

## 3. Directional Derivatives

### 3.1 Motivation

Partial derivatives measure the rate of change along the coordinate axes only. But in $\mathbb{R}^n$ there are infinitely many directions. If we stand at a point $\tilde{a}$ and walk in some direction $u$ that is not aligned with any axis, how fast does $f$ change?

### 3.2 Definition

Let $f(x_1, \dots, x_n)$ be defined on a domain $D \subseteq \mathbb{R}^n$ containing $\tilde{a}$ and an open ball around it. Let $u = (u_1, u_2, \dots, u_n)$ be a **unit vector** (i.e., $\|u\| = 1$).

**Definition.** The **directional derivative of $f$ at $\tilde{a}$ in the direction of $u$** is

$$f_u(\tilde{a}) = D_u f(\tilde{a}) = \lim_{h \to 0} \frac{f(\tilde{a} + hu) - f(\tilde{a})}{h},$$

provided this limit exists. Writing out coordinates:

$$f_u(\tilde{a}) = \lim_{h \to 0} \frac{f(a_1 + hu_1,\; a_2 + hu_2,\; \dots,\; a_n + hu_n) - f(a_1, a_2, \dots, a_n)}{h}.$$

As with partial derivatives, letting $\tilde{a}$ vary produces the **directional derivative function** $f_u : D_u \to \mathbb{R}$, where $D_u$ is the set of points at which the limit exists.

> **Clarification:** We insist that $u$ is a unit vector so that $h$ measures actual distance traveled in the direction of $u$. If you are given a non-unit vector $v$, first normalise: $u = \frac{v}{\|v\|}$.

### 3.3 Partial Derivatives as Special Directional Derivatives

When $u = e_i$ (the $i$-th standard basis vector), the directional derivative reduces to the partial derivative:

$$f_{e_i}(\tilde{a}) = \frac{\partial f}{\partial x_i}(\tilde{a}).$$

Thus partial derivatives are directional derivatives in the coordinate directions. The directional derivative is the natural generalisation.

### 3.4 Reduction to a Single-Variable Derivative

Define

$$g(t) = f(\tilde{a} + tu).$$

Then $g : \mathbb{R} \to \mathbb{R}$ is a function of one variable, and

$$f_u(\tilde{a}) = g'(0).$$

Geometrically, $g$ describes how $f$ behaves along the line through $\tilde{a}$ in the direction of $u$. The directional derivative is the derivative of this restriction at $t = 0$.

### 3.5 Geometric Interpretation (Two Variables)

For $f : \mathbb{R}^2 \to \mathbb{R}$ with graph $z = f(x, y)$:

1. Draw the line through $(a, b)$ in the $xy$-plane in the direction of $u$.
2. Erect the vertical plane containing this line (perpendicular to the $xy$-plane).
3. Intersect this plane with the surface $z = f(x, y)$ to obtain a curve.
4. $f_u(a, b)$ is the slope of the tangent line to this curve at the point $(a, b, f(a, b))$.

### 3.6 Worked Examples

**Example 5.** Find the rate of change of $f(x, y) = x + y$ at $(0, 0)$ in the direction of the line $y = x$.

**Solution.** The line $y = x$ makes an angle of $45°$ with the positive $x$-axis. A unit vector in this direction is

$$u = (\cos 45°,\, \sin 45°) = \left(\frac{1}{\sqrt{2}},\, \frac{1}{\sqrt{2}}\right).$$

Using the limit definition:

$$f_u(0,0) = \lim_{h \to 0} \frac{f\!\left(\frac{h}{\sqrt{2}},\, \frac{h}{\sqrt{2}}\right) - f(0,0)}{h} = \lim_{h \to 0} \frac{\frac{h}{\sqrt{2}} + \frac{h}{\sqrt{2}}}{h} = \lim_{h \to 0} \frac{\sqrt{2}\,h}{h} = \sqrt{2}.$$

---

**Example 6.** Find the directional derivative of $f(x, y, z) = xy + yz + zx$ at $(1, 2, 3)$ in the direction of the vector $v = (4, 3, 0)$.

**Solution.** First, normalise: $\|v\| = \sqrt{16 + 9 + 0} = 5$, so $u = \frac{1}{5}(4, 3, 0)$.

By the limit definition (or computing $g'(0)$ where $g(h) = f(1 + \tfrac{4h}{5},\; 2 + \tfrac{3h}{5},\; 3)$), expanding and cancelling:

$$f_u(1,2,3) = \lim_{h \to 0} \frac{f\!\left(1 + \tfrac{4h}{5},\; 2 + \tfrac{3h}{5},\; 3\right) - f(1,2,3)}{h}.$$

Computing $f\!\left(1 + \tfrac{4h}{5},\; 2 + \tfrac{3h}{5},\; 3\right)$:

$$= \left(1 + \tfrac{4h}{5}\right)\!\left(2 + \tfrac{3h}{5}\right) + \left(2 + \tfrac{3h}{5}\right)(3) + (3)\!\left(1 + \tfrac{4h}{5}\right).$$

Expanding and subtracting $f(1,2,3) = 2 + 6 + 3 = 11$:

$$= 2 + \tfrac{3h}{5} + \tfrac{8h}{5} + \tfrac{12h^2}{25} + 6 + \tfrac{9h}{5} + 3 + \tfrac{12h}{5} - 11 = \tfrac{32h}{5} + \tfrac{12h^2}{25}.$$

Dividing by $h$ and taking $h \to 0$:

$$f_u(1,2,3) = \frac{32}{5}.$$

---

**Example 7.** Find the directional derivative of $f(x,y) = \sin(xy)$ at $(1, 0)$ in the direction making $60°$ with the positive $x$-axis.

**Solution.** The unit vector is $u = (\cos 60°,\, \sin 60°) = \left(\frac{1}{2},\, \frac{\sqrt{3}}{2}\right)$.

Define $g(h) = f\!\left(1 + \frac{h}{2},\; \frac{\sqrt{3}}{2}h\right) = \sin\!\left(\left(1 + \frac{h}{2}\right)\frac{\sqrt{3}}{2}h\right)$.

Then

$$f_u(1,0) = g'(0).$$

Using the chain rule: $g(h) = \sin\!\left(\frac{\sqrt{3}}{2}h + \frac{\sqrt{3}}{4}h^2\right)$. Set $\phi(h) = \frac{\sqrt{3}}{2}h + \frac{\sqrt{3}}{4}h^2$. Then $\phi(0) = 0$ and $\phi'(h) = \frac{\sqrt{3}}{2} + \frac{\sqrt{3}}{2}h$, so $\phi'(0) = \frac{\sqrt{3}}{2}$.

By the chain rule: $g'(h) = \cos(\phi(h)) \cdot \phi'(h)$, hence

$$g'(0) = \cos(0) \cdot \frac{\sqrt{3}}{2} = \frac{\sqrt{3}}{2}.$$

---

**Example 8 (A cautionary example).** Consider the piecewise function from Example 4:

$$f(x,y) = \begin{cases} \frac{xy}{x^2 + y^2} & (x,y) \neq (0,0), \\ 0 & (x,y) = (0,0). \end{cases}$$

Compute the directional derivative at $(0,0)$ in the direction of a general unit vector $u = (u_1, u_2)$.

**Solution.**

$$f_u(0,0) = \lim_{h \to 0} \frac{f(hu_1,\, hu_2) - 0}{h} = \lim_{h \to 0} \frac{1}{h} \cdot \frac{h^2 u_1 u_2}{h^2(u_1^2 + u_2^2)} = \lim_{h \to 0} \frac{u_1 u_2}{h \cdot 1} = \lim_{h \to 0} \frac{u_1 u_2}{h}.$$

(We used $u_1^2 + u_2^2 = 1$ since $u$ is a unit vector.)

- If $u_1 = 0$ or $u_2 = 0$ (i.e., along a coordinate axis), the limit equals $0$. These are the partial derivatives.
- If $u_1 \neq 0$ and $u_2 \neq 0$, the limit $\frac{u_1 u_2}{h}$ **does not exist**.

**Conclusion:** The partial derivatives exist at the origin, but the directional derivative fails to exist in every non-axis direction. This shows that existence of all partial derivatives does *not* guarantee existence of all directional derivatives.

### 3.7 Properties of Directional Derivatives

Suppose $f_u(\tilde{a})$ and $g_u(\tilde{a})$ both exist, $c \in \mathbb{R}$, and $u$ is a unit vector. Then:

| Rule | Formula |
|---|---|
| **Linearity** | $(cf + g)_u(\tilde{a}) = c \cdot f_u(\tilde{a}) + g_u(\tilde{a})$ |
| **Product rule** | $(fg)_u(\tilde{a}) = f_u(\tilde{a})\, g(\tilde{a}) + f(\tilde{a})\, g_u(\tilde{a})$ |
| **Quotient rule** ($g(\tilde{a}) \neq 0$) | $\displaystyle\left(\frac{f}{g}\right)_{\!u}(\tilde{a}) = \frac{f_u(\tilde{a})\, g(\tilde{a}) - f(\tilde{a})\, g_u(\tilde{a})}{[g(\tilde{a})]^2}$ |

These follow immediately from the corresponding single-variable rules applied to $\phi(t) = f(\tilde{a} + tu)$ and $\psi(t) = g(\tilde{a} + tu)$.

---

## 4. The Gradient Vector

### 4.1 Definition

Let $f(x_1, x_2, \dots, x_n)$ be defined on $D \subseteq \mathbb{R}^n$ and suppose all partial derivatives of $f$ exist at $\tilde{a}$.

**Definition.** The **gradient vector of $f$ at $\tilde{a}$** is

$$\nabla f(\tilde{a}) = \left(\frac{\partial f}{\partial x_1}(\tilde{a}),\; \frac{\partial f}{\partial x_2}(\tilde{a}),\; \dots,\; \frac{\partial f}{\partial x_n}(\tilde{a})\right).$$

This is a vector in $\mathbb{R}^n$. The symbol $\nabla$ is called **nabla** (or **del**). Alternative notations include $\text{grad}\, f(\tilde{a})$.

The **gradient function** $\nabla f : D' \to \mathbb{R}^n$ is defined by associating to each point $\tilde{x} \in D'$ its gradient vector $\nabla f(\tilde{x})$, where $D' \subseteq D$ is the set of points at which all partial derivatives exist.

> **Clarification:** Note the type change: $f$ is a *scalar*-valued function ($f : \mathbb{R}^n \to \mathbb{R}$), while $\nabla f$ is a *vector*-valued function ($\nabla f : \mathbb{R}^n \to \mathbb{R}^n$). The gradient assembles $n$ scalar functions (the partial derivatives) into a single vector-valued function.

### 4.2 Worked Examples

**Example 9.** $f(x, y) = \sin(xy)$.

**Solution.** We computed $\frac{\partial f}{\partial x} = y\cos(xy)$ and $\frac{\partial f}{\partial y} = x\cos(xy)$. Therefore

$$\nabla f(x, y) = \big(y\cos(xy),\; x\cos(xy)\big).$$

Evaluating: $\nabla f(0, 0) = (0, 0)$; $\nabla f(\pi, 1) = (\cos \pi,\; \pi \cos \pi) = (-1, -\pi)$.

---

**Example 10.** $f(x, y, z) = x^2 + y^2 + z^2$.

**Solution.** $\frac{\partial f}{\partial x} = 2x$, $\frac{\partial f}{\partial y} = 2y$, $\frac{\partial f}{\partial z} = 2z$. Therefore

$$\nabla f(x,y,z) = (2x,\, 2y,\, 2z).$$

At $(1, 2, 3)$: $\nabla f(1,2,3) = (2, 4, 6)$.

Note that $\nabla f = 2(x, y, z) = 2\tilde{x}$: the gradient points radially outward from the origin, which makes sense since $f$ measures the squared distance from the origin.

---

**Example 11.** $f(x, y, z) = xy + yz + zx$.

**Solution.**

$$\nabla f(x,y,z) = (y + z,\; x + z,\; x + y).$$

---

**Example 12 (Piecewise function).** The function from Example 4:

$$\nabla f(x,y) = \begin{cases} \displaystyle \frac{1}{(x^2+y^2)^2}\big(x^3 - xy^2,\; y^3 - x^2 y\big) & (x,y) \neq (0,0), \\[6pt] (0,\, 0) & (x,y) = (0,0). \end{cases}$$

Away from the origin, this is a quotient of polynomials with nonzero denominator, hence continuous. At the origin, the component functions are *not* continuous (this can be verified by approaching $(0,0)$ along different paths — see [[13 - MULTIVARIABLE FUNCTIONS]] for the path-testing technique). This discontinuity has important consequences, as we shall see.

### 4.3 Properties of the Gradient

Let $f, g : D \subseteq \mathbb{R}^n \to \mathbb{R}$ be functions whose gradients exist, and let $c \in \mathbb{R}$.

| Rule | Formula |
|---|---|
| **Linearity** | $\nabla(cf + g) = c\,\nabla f + \nabla g$ |
| **Product rule** | $\nabla(fg) = g\,\nabla f + f\,\nabla g$ |
| **Quotient rule** ($g \neq 0$) | $\displaystyle \nabla\!\left(\frac{f}{g}\right) = \frac{g\,\nabla f - f\,\nabla g}{g^2}$ |

These are the direct vector analogues of the familiar single-variable differentiation rules. Each identity should be understood component-by-component; the $i$-th component of $\nabla(fg)$ is $g \cdot \frac{\partial f}{\partial x_i} + f \cdot \frac{\partial g}{\partial x_i}$, which is precisely the product rule for $\frac{\partial}{\partial x_i}$.

> **Clarification:** In the product rule $\nabla(fg) = g\,\nabla f + f\,\nabla g$, the terms $g\,\nabla f$ and $f\,\nabla g$ are scalar–vector multiplications: $g(\tilde{x})$ is a scalar and $\nabla f(\tilde{x})$ is a vector. We write the scalar first by convention.

---

## 5. Directional Derivatives in Terms of the Gradient

### 5.1 The Central Theorem

This is the key result connecting the gradient to directional derivatives, and the principal reason the gradient is so important.

**Theorem (Directional derivative via the gradient).** Let $f(x_1, \dots, x_n)$ be defined on a domain $D \subseteq \mathbb{R}^n$ containing an open ball around $\tilde{a}$. Suppose $\nabla f$ exists and is **continuous** on some open ball around $\tilde{a}$. Then for every unit vector $u \in \mathbb{R}^n$, the directional derivative $f_u(\tilde{a})$ exists and

$$\boxed{f_u(\tilde{a}) = \nabla f(\tilde{a}) \cdot u}$$

where $\cdot$ denotes the dot product (see [[11 - INNER