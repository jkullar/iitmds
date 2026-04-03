# MULTIVARIABLE FUNCTIONS

This file introduces **multivariable functions** — functions whose inputs live in $\mathbb{R}^n$ rather than on the real line $\mathbb{R}$. These are the central objects of multivariable calculus. We define scalar-valued and vector-valued multivariable functions, examine their domains and ranges, develop tools for visualisation (level curves, level surfaces), and extend the notions of **limits** and **continuity** from single-variable calculus to higher dimensions. Mastery of this material is essential for everything that follows: partial derivatives, gradients, optimisation, and integration over regions in $\mathbb{R}^n$.

For background on vectors, vector spaces, and linear transformations, see [[5 - VECTORS AND SPACES]].

---

## 1. From One Variable to Many

### 1.1 Recap: Functions of One Variable

A **function of one variable** is a map $f: D \to \mathbb{R}$ where $D \subseteq \mathbb{R}$. Familiar families include:

| Family | Form | Domain |
|---|---|---|
| Linear | $f(x) = ax + b$ | $\mathbb{R}$ |
| Polynomial | $f(x) = a_n x^n + \cdots + a_1 x + a_0$ | $\mathbb{R}$ |
| Rational | $f(x) = p(x)/q(x)$, polynomials $p,q$ | $\{x \in \mathbb{R} : q(x) \neq 0\}$ |
| Trigonometric | $\sin x,\;\cos x,\;\tan x, \ldots$ | varies |
| Exponential | $f(x) = e^x$ | $\mathbb{R}$ |
| Logarithmic | $f(x) = \ln x$ | $(0, \infty)$ |

New functions are built from these via **arithmetic operations** (addition, subtraction, multiplication, division where the denominator is nonzero) and **composition** (applying one function to the output of another, provided the range of the inner function lies in the domain of the outer function).

**Example:** $f(x) = \ln(x^2 + 1)$ is the composition $g \circ h$ where $h(x) = x^2 + 1$ and $g(u) = \ln u$. Since the range of $h$ is $[1, \infty) \subset (0, \infty) = \text{dom}(g)$, the composition is well-defined on all of $\mathbb{R}$.

### 1.2 Why Move to Several Variables?

In applications — physics, statistics, machine learning, economics — quantities almost always depend on **multiple** inputs simultaneously. Temperature depends on three spatial coordinates and time. A joint probability density for two random variables is a function of two variables. A loss function in machine learning depends on all model parameters at once. Single-variable calculus is insufficient for these settings; we need the theory of multivariable functions.

---

## 2. Scalar-Valued Multivariable Functions

### 2.1 Definition

A **scalar-valued multivariable function** is a function

$$f: D \to \mathbb{R}, \qquad D \subseteq \mathbb{R}^n, \quad n \geq 2.$$

The input is an $n$-tuple $(x_1, x_2, \ldots, x_n) \in \mathbb{R}^n$ and the output is a single real number. We often write $f(x_1, x_2, \ldots, x_n)$ or, when we do not need to reference individual coordinates, $f(\tilde{x})$, where $\tilde{x} = (x_1, \ldots, x_n)$.

> **Clarification:** The tilde notation $\tilde{x}$ is a shorthand emphasising that $\tilde{x}$ is a **vector** in $\mathbb{R}^n$, not a single real number. Some texts use bold $\mathbf{x}$ instead.

### 2.2 Domain and Range

The **domain** $D$ is the largest subset of $\mathbb{R}^n$ on which the expression defining $f$ makes sense (unless a smaller domain is specified explicitly). The **range** (or image) is

$$\text{range}(f) = \{f(\tilde{x}) : \tilde{x} \in D\} \subseteq \mathbb{R}.$$

**Example:** Let $f(x, y) = \dfrac{xy}{x^2 + y^2}$.

**Solution:** The expression is undefined when $x^2 + y^2 = 0$, i.e., at the origin $(0, 0)$. Therefore

$$D = \mathbb{R}^2 \setminus \{(0,0)\} = \{(x,y) \in \mathbb{R}^2 : (x,y) \neq (0,0)\}.$$

**Example:** Let $f(x, y, z) = \ln(x^2 + y^2 + z^2)$.

**Solution:** We need $x^2 + y^2 + z^2 > 0$, so $D = \mathbb{R}^3 \setminus \{(0,0,0)\}$.

**Example:** Let $f(x, y) = \sqrt{1 - x^2 - y^2}$.

**Solution:** We need $1 - x^2 - y^2 \geq 0$, i.e., $x^2 + y^2 \leq 1$. So $D$ is the closed unit disk in $\mathbb{R}^2$, and the range is $[0, 1]$.

### 2.3 Families and Examples

Just as for one variable, the principal families are:

**Linear functions.** $f(x_1, \ldots, x_n) = a_1 x_1 + a_2 x_2 + \cdots + a_n x_n + b$ where $a_i, b \in \mathbb{R}$. When $b = 0$ this is a linear transformation $\mathbb{R}^n \to \mathbb{R}$ (a $1 \times n$ matrix acting on a column vector — see [[5 - VECTORS AND SPACES]]).

**Example:** $f(x, y) = 2.5x - 3.9y$. Domain: $\mathbb{R}^2$. Range: $\mathbb{R}$.

**Polynomial functions.** Sums of terms of the form $c\, x_1^{k_1} x_2^{k_2} \cdots x_n^{k_n}$ where $c \in \mathbb{R}$ and $k_i \in \mathbb{Z}_{\geq 0}$. The **degree** of a monomial term is $k_1 + k_2 + \cdots + k_n$.

**Example:** $f(x, y) = 2x^3 - 3y^2 + 4.8x^2 - x^2 y - 9.9xy + \pi$ is a polynomial in two variables. Domain: $\mathbb{R}^2$.

**Example:** $f(x_1, x_2, x_3) = x_1 x_2 x_3 + x_1^2 x_2^3 x_3^4 - x_1^5 x_3^6$ is a polynomial in three variables.

**Rational functions.** Quotients $p(\tilde{x})/q(\tilde{x})$ of polynomials, defined wherever $q(\tilde{x}) \neq 0$.

**Compositions and combinations.** By composing multivariable polynomials with single-variable functions ($\sin$, $\cos$, $\exp$, $\ln$, etc.) and taking arithmetic combinations, we obtain rich families of functions.

**Example (Composition):** $f(x, y) = \sin(x^2 + y^2)$. Here $h(x,y) = x^2 + y^2$ maps $\mathbb{R}^2 \to [0, \infty)$ and $g(u) = \sin u$ maps $\mathbb{R} \to [-1, 1]$. Then $f = g \circ h$.

**Example (Bivariate normal density):**

$$f(x, y) = \frac{1}{2\pi}\, e^{-(x^2 + y^2)/2}.$$

Domain: $\mathbb{R}^2$. Range: $(0, \frac{1}{2\pi}]$. This arises as the joint density of two independent standard normal random variables.

**Example (Bivariate exponential density):**

$$f(x, y) = \lambda_1 \lambda_2\, e^{-\lambda_1 x - \lambda_2 y}, \qquad x > 0,\; y > 0.$$

**Piecewise-defined functions.** The "pieces" are now **subsets of $\mathbb{R}^n$**, not intervals of $\mathbb{R}$.

**Example (Uniform density on the unit square):**

$$f(x, y) = \begin{cases} 1 & \text{if } 0 \leq x \leq 1 \text{ and } 0 \leq y \leq 1, \\ 0 & \text{otherwise.} \end{cases}$$

---

## 3. Vector-Valued Multivariable Functions

### 3.1 Definition

A **vector-valued multivariable function** is a function

$$\mathbf{f}: D \to \mathbb{R}^m, \qquad D \subseteq \mathbb{R}^n, \quad n \geq 2,\; m \geq 2.$$

Each output is a vector with $m$ components. We can always decompose $\mathbf{f}$ into its **component functions**:

$$\mathbf{f}(\tilde{x}) = \bigl(f_1(\tilde{x}),\; f_2(\tilde{x}),\; \ldots,\; f_m(\tilde{x})\bigr),$$

where each $f_i: D \to \mathbb{R}$ is a scalar-valued multivariable function.

> **Clarification:** A vector-valued multivariable function is nothing more than a **vector of scalar-valued multivariable functions** bundled together.

### 3.2 Examples

**Example:** $\mathbf{f}(x, y, z) = (x^2 + y^2,\; y^2 + z^2,\; z^2 + x^2)$ maps $\mathbb{R}^3 \to \mathbb{R}^3$. This is **not** a linear transformation.

**Example:** $\mathbf{f}(x, y, z) = (2x,\; 2y,\; 2z)$ maps $\mathbb{R}^3 \to \mathbb{R}^3$. This **is** a linear transformation (scalar multiplication by 2).

**Example:** $\mathbf{f}(x, y, z) = \bigl(\sin x \cos y,\; \tan(y+z),\; \ln(x^2+y^2+z^2),\; e^{xyz}\bigr)$ maps a domain $D \subset \mathbb{R}^3$ to $\mathbb{R}^4$. The domain excludes the origin (for the logarithm) and points where $y + z$ is an odd multiple of $\pi/2$ (for the tangent).

### 3.3 Terminology Summary

| Name | Domain | Codomain | Constraint |
|---|---|---|---|
| Single-variable function | $D \subseteq \mathbb{R}$ | $\mathbb{R}$ | $n=1, m=1$ |
| Scalar-valued multivariable function | $D \subseteq \mathbb{R}^n$ | $\mathbb{R}$ | $n \geq 2, m=1$ |
| Vector-valued multivariable function | $D \subseteq \mathbb{R}^n$ | $\mathbb{R}^m$ | $n \geq 2, m \geq 2$ |
| Curve in $\mathbb{R}^m$ | $D \subseteq \mathbb{R}$ | $\mathbb{R}^m$ | $n=1, m \geq 2$ |

A **multivariable function** (or **function of several variables**) refers to any function with $n \geq 2$, regardless of whether $m = 1$ or $m \geq 2$.

---

## 4. Arithmetic Operations and Composition

### 4.1 Arithmetic on Multivariable Functions

Let $f, g: D \to \mathbb{R}^m$ be multivariable functions on the same domain $D \subseteq \mathbb{R}^n$.

| Operation | Definition | Conditions |
|---|---|---|
| **Sum** | $(f + g)(\tilde{x}) = f(\tilde{x}) + g(\tilde{x})$ | Vector addition in $\mathbb{R}^m$ |
| **Scalar multiple** | $(cf)(\tilde{x}) = c \cdot f(\tilde{x})$ | Scalar multiplication in $\mathbb{R}^m$ |
| **Product** (scalar-valued only, $m=1$) | $(fg)(\tilde{x}) = f(\tilde{x})\, g(\tilde{x})$ | Ordinary multiplication in $\mathbb{R}$ |
| **Quotient** (scalar-valued only, $m=1$) | $\displaystyle\left(\frac{f}{g}\right)(\tilde{x}) = \frac{f(\tilde{x})}{g(\tilde{x})}$ | Defined on $\{\tilde{x} \in D : g(\tilde{x}) \neq 0\}$ |

> **Clarification:** Multiplication and division of function **values** require those values to be real numbers (scalars), which is why we restrict to $m = 1$. For vector-valued functions, pointwise product is not defined in the same way.

### 4.2 Composition

If $f: D \to \mathbb{R}^m$ (with $D \subseteq \mathbb{R}^n$) and $g: E \to \mathbb{R}^p$ (with $E \subseteq \mathbb{R}^m$) are such that $\text{range}(f) \subseteq E$, then the **composition** $g \circ f: D \to \mathbb{R}^p$ is defined by

$$(g \circ f)(\tilde{x}) = g\bigl(f(\tilde{x})\bigr).$$

**Example:** Let $f(x,y) = x^2 + y^2$ (a map $\mathbb{R}^2 \to [0, \infty)$) and $g(u) = \sqrt{u}$ (a map $[0, \infty) \to [0, \infty)$). Then

$$(g \circ f)(x, y) = \sqrt{x^2 + y^2},$$

which is the Euclidean distance from $(x, y)$ to the origin.

**Example:** Let $f(x,y,z) = xyz$ and $g(u) = e^u$. Then $(g \circ f)(x,y,z) = e^{xyz}$.

---

## 5. Visualisation

### 5.1 Graphs

For a function $f: D \to \mathbb{R}$ with $D \subseteq \mathbb{R}^n$, the **graph** of $f$ is

$$\Gamma_f = \{(\tilde{x}, f(\tilde{x})) : \tilde{x} \in D\} \subseteq \mathbb{R}^{n+1}.$$

Since humans can visualise at most three dimensions, we can directly graph only functions $f: D \subseteq \mathbb{R}^2 \to \mathbb{R}$. The graph lives in $\mathbb{R}^3$ and is a **surface** above (or below) the $xy$-plane.

**Example:** The graph of $f(x,y) = ax + by$ is the plane $z = ax + by$ in $\mathbb{R}^3$. As $a$ and $b$ vary, the plane tilts in different directions.

**Example:** The graph of $f(x,y) = \sin(x^2 + y^2)$ is a surface with circular oscillations radiating outward from the origin. Along any circle $x^2 + y^2 = r^2$ the function value is the constant $\sin(r^2)$, so the surface has **circular symmetry**. The first peak occurs at $r = \sqrt{\pi/2}$ (where $\sin(\pi/2) = 1$), and the first zero after the origin is at $r = \sqrt{\pi}$.

**Example:** The bivariate normal density $f(x,y) = \frac{1}{2\pi} e^{-(x^2+y^2)/2}$ has a single "bell-shaped hill" centred at the origin, decaying rapidly to zero in all directions.

For functions $f: \mathbb{R}^n \to \mathbb{R}$ with $n \geq 3$, the graph lives in $\mathbb{R}^{n+1}$ and cannot be directly plotted. We use the alternative techniques below.

### 5.2 Level Curves

For a function $f: D \subseteq \mathbb{R}^2 \to \mathbb{R}$ and a constant $c \in \mathbb{R}$, the **level curve** (or **contour**) at height $c$ is

$$L_c = \{(x, y) \in D : f(x, y) = c\}.$$

A **contour plot** displays several level curves for different values of $c$ in the $xy$-plane.

**Example:** For $f(x, y) = x^2 + y^2$, the level curve $f(x,y) = c$ is:
- empty if $c < 0$,
- the single point $(0,0)$ if $c = 0$,
- the circle $x^2 + y^2 = c$ of radius $\sqrt{c}$ if $c > 0$.

The contour plot consists of concentric circles centred at the origin.

**Example:** For $f(x, y) = x^2 - y^2$, the level curves $x^2 - y^2 = c$ are hyperbolas (for $c \neq 0$) and the pair of lines $y = \pm x$ (for $c = 0$).

**Example:** For a linear function $f(x, y) = ax + by$, the level curves $ax + by = c$ are parallel straight lines with slope $-a/b$ (assuming $b \neq 0$).

> **Clarification:** Level curves are subsets of the **domain** $\mathbb{R}^2$, not of $\mathbb{R}^3$. They represent "horizontal slices" of the graph at height $z = c$, projected down onto the $xy$-plane. Think of them as contour lines on a topographic map.

### 5.3 Level Surfaces

For a function $f: D \subseteq \mathbb{R}^3 \to \mathbb{R}$ and a constant $c \in \mathbb{R}$, the **level surface** at value $c$ is

$$S_c = \{(x, y, z) \in D : f(x, y, z) = c\}.$$

Since the domain is $\mathbb{R}^3$, each level surface is a two-dimensional surface sitting inside three-dimensional space, which **can** be visualised.

**Example:** For $f(x, y, z) = x^2 + y^2 + z^2$, the level surface $f = c$ is:
- empty if $c < 0$,
- the single point $(0,0,0)$ if $c = 0$,
- the sphere $x^2 + y^2 + z^2 = c$ of radius $\sqrt{c}$ if $c > 0$.

**Example:** For $f(x, y, z) = x + 2y + 3z$, the level surfaces are parallel planes $x + 2y + 3z = c$.

### 5.4 Summary of Visualisation Strategies

| Input dimension $n$ | Output dimension $m$ | Graph dimension | Visualisation method |
|---|---|---|---|
| 2 | 1 | 3 | Surface plot in $\mathbb{R}^3$; contour plot (level curves) in $\mathbb{R}^2$ |
| 3 | 1 | 4 | Cannot plot graph; use level surfaces in $\mathbb{R}^3$ |
| $n \geq 4$ | 1 | $n + 1 \geq 5$ | Cannot directly visualise; rely on level sets, cross-sections, numerical methods |

---

## 6. Curves in $\mathbb{R}^m$

Although curves are not multivariable functions (their domain is one-dimensional), they appear naturally alongside multivariable functions — for instance, when studying limits along paths. We include a brief treatment for completeness.

### 6.1 Definition

A **curve** in $\mathbb{R}^m$ is the range of a function $\mathbf{r}: D \to \mathbb{R}^m$ where $D \subseteq \mathbb{R}$. The function $\mathbf{r}$ is called a **parametrisation** of the curve, and the variable (often $t$) is the **parameter**.

### 6.2 Examples

**Lines.** $\mathbf{r}(t) = \mathbf{a} + t\,\mathbf{d}$, where $\mathbf{a}$ is a point and $\mathbf{d}$ is a direction vector.

**Circles/Ellipses.** The ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ has the parametrisation $\mathbf{r}(t) = (a\cos t,\; b\sin t)$ for $t \in [0, 2\pi)$. Setting $a = b$ yields a circle.

**Helix.** $\mathbf{r}(t) = (\cos t,\; \sin t,\; t)$ for $t \in \mathbb{R}$. The curve spirals upward, projecting onto a circle in the $xy$-plane while increasing linearly in the $z$-direction.

**Graph of a single-variable function.** For $y = f(x)$, the parametrisation is $\mathbf{r}(t) = (t, f(t))$, giving a curve in $\mathbb{R}^2$.

> **Clarification:** A curve can be described either **parametrically** (e.g., $\mathbf{r}(t) = (a\cos t, a\sin t)$) or **implicitly** by an equation (e.g., $x^2 + y^2 = a^2$). Parametric descriptions are more flexible and work in any dimension $m$.

---

## 7. Limits of Multivariable Functions

### 7.1 Sequences in $\mathbb{R}^p$

Before defining limits of functions, we need limits of **sequences** in higher-dimensional spaces.

**Definition.** Let $\{\tilde{a}_n\}$ be a sequence in $\mathbb{R}^p$, with coordinates $\tilde{a}_n = (a_{n1}, a_{n2}, \ldots, a_{np})$. We say

$$\lim_{n \to \infty} \tilde{a}_n = \tilde{a} = (a_1, a_2, \ldots, a_p)$$

if and only if, **for each coordinate** $i = 1, 2, \ldots, p$,

$$\lim_{n \to \infty} a_{ni} = a_i.$$

In other words, convergence in $\mathbb{R}^p$ is **coordinate-wise convergence**.

A sequence is **convergent** if it has a limit, and **divergent** otherwise.

**Example:** $\tilde{a}_n = \left(\frac{1}{n},\; n\sin\frac{1}{n}\right)$ in $\mathbb{R}^2$.

**Solution:**
- First coordinate: $\frac{1}{n} \to 0$.
- Second coordinate: $n \sin\frac{1}{n} = \frac{\sin(1/n)}{1/n} \to 1$ (using the standard limit $\lim_{u \to 0} \frac{\sin u}{u} = 1$).

Therefore $\lim_{n \to \infty} \tilde{a}_n = (0, 1)$.

**Example:** $\tilde{b}_n = \left((-1)^n,\; n\sin\frac{1}{n}\right)$ in $\mathbb{R}^2$.

**Solution:**
- First coordinate: $(-1)^n$ oscillates between $-1$ and $1$; it does not converge.
- Since one coordinate sequence diverges, the sequence $\tilde{b}_n$ in $\mathbb{R}^2$ **diverges**.

**Example:** $\tilde{c}_n = \left(\frac{\cos n}{n},\; 5\sum_{i=1}^{n}\frac{1}{i!},\; \sum_{i=0}^{n}\frac{1}{i!},\; n\cos\frac{1}{n}\right)$ in $\mathbb{R}^4$.

**Solution:**
- $\frac{\cos n}{n} \to 0$ (by the squeeze theorem, since $|\cos n| \leq 1$).
- $5\sum_{i=1}^{n}\frac{1}{i!} \to 5(e - 1)$.
- $\sum_{i=0}^{n}\frac{1}{i!} \to e$.
- $n\cos\frac{1}{n}$: as $n \to \infty$, $\cos(1/n) \to 1$ but $n \to \infty$, so $n\cos(1/n) \to \infty$ (diverges).

Since the fourth coordinate diverges, the limit **does not exist** in $\mathbb{R}^4$.

### 7.2 Limit of a Scalar-Valued Multivariable Function at a Point

**Definition.** Let $f: D \to \mathbb{R}$ with $D \subseteq \mathbb{R}^k$, and let $\tilde{a}$ be a point such that there exists a sequence in $D$ converging to $\tilde{a}$. We say

$$\lim_{\tilde{x} \to \tilde{a}} f(\tilde{x}) = L \qquad (L \in \mathbb{R})$$

if for **every** sequence $\{\tilde{a}_n\}$ in $D$ with $\tilde{a}_n \to \tilde{a}$, we have $f(\tilde{a}_n) \to L$.

If no such $L$ exists, we say the limit **does not exist**.

> **Clarification:** The definition requires $f(\tilde{a}_n) \to L$ for **all** sequences approaching $\tilde{a}$, not just for one particular sequence. This is the source of much of the subtlety in multivariable limits — there are infinitely many directions (and curves) along which one can approach $\tilde{a}$.

### 7.3 Basic Limits

The following limits hold as $\tilde{x} \to \tilde{a}$ (with appropriate domain restrictions):

| Function | Limit |
|---|---|
| $x_i^k$ ($k \in \mathbb{Z}_{>0}$) | $a_i^k$ |
| $x_i^k$ ($k < 0$, $a_i \neq 0$) | $a_i^k$ |
| $e^{x_i}$ | $e^{a_i}$ |
| $\ln x_i$ ($a_i > 0$) | $\ln a_i$ |
| $\sin x_i$ | $\sin a_i$ |
| $\cos x_i$ | $\cos a_i$ |
| $\tan x_i$ ($a_i \neq \pm\frac{\pi}{2} + k\pi$) | $\tan a_i$ |

These follow directly from the corresponding single-variable limits and the fact that $\tilde{x} \to \tilde{a}$ implies $x_i \to a_i$.

### 7.4 Limit Laws

Let $f, g: D \to \mathbb{R}$ with $\lim_{\tilde{x} \to \tilde{a}} f(\tilde{x}) = F$ and $\lim_{\tilde{x} \to \tilde{a}} g(\tilde{x}) = G$, and let $c \in \mathbb{R}$.

| Rule | Statement |
|---|---|
| **Linearity** | $\lim_{\tilde{x} \to \tilde{a}} \bigl[c\,f(\tilde{x}) + g(\tilde{x})\bigr] = cF + G$ |
| **Product** | $\lim_{\tilde{x} \to \tilde{a}} \bigl[f(\tilde{x})\, g(\tilde{x})\bigr] = F \cdot G$ |
| **Quotient** | $\lim_{\tilde{x} \to \tilde{a}} \dfrac{f(\tilde{x})}{g(\tilde{x})} = \dfrac{F}{G}$, provided $G \neq 0$ |
| **Composition** | If $g$ is single-variable with $\lim_{u \to F} g(u) = L$, then $\lim_{\tilde{x} \to \tilde{a}} g(f(\tilde{x})) = L$ |
| **Squeeze (Sandwich)** | If $f(\tilde{x}) \leq h(\tilde{x}) \leq g(\tilde{x})$ near $\tilde{a}$ and $F = G = L$, then $\lim_{\tilde{x} \to \tilde{a}} h(\tilde{x}) = L$ |

### 7.5 Worked Examples: Computing Limits

**Example:** Find $\displaystyle\lim_{(x,y,z) \to (1,2,3)} \bigl(x^2 y^3 + y^3 z^2 + xyz\bigr)$.

**Solution:** This is a polynomial, so we may substitute directly:

$$1^2 \cdot 2^3 + 2^3 \cdot 3^2 + 1 \cdot 2 \cdot 3 = 8 + 72 + 6 = 86.$$

**Example:** Find $\displaystyle\lim_{(x,y,z) \to (1,2,3)} e^{xyz}$.

**Solution:** Write $e^{xyz} = g(f(x,y,z))$ where $f(x,y,z) = xyz$ and $g(u) = e^u$. By the product rule, $\lim f = 1 \cdot 2 \cdot 3 = 6$. By the composition rule, $\lim e^{xyz} = e^6$.

**Example:** Find $\displaystyle\lim_{(x,y) \to (1,1)} \frac{x}{y}$.

**Solution:** The denominator's limit is $1 \neq 0