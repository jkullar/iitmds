

# INNER PRODUCTS AND NORMS

This file develops the machinery for measuring **lengths**, **angles**, and **distances** in vector spaces. We begin with the familiar dot product in $\mathbb{R}^n$, use it to define lengths and angles via the Pythagorean theorem and trigonometry, then abstract these ideas to arbitrary vector spaces through the notions of **inner products** and **norms**. The central result is the **Cauchy–Schwarz inequality**, which guarantees that the angle formula always makes sense and which underpins the triangle inequality for every inner-product-induced norm.

Prerequisites: vector spaces, linear combinations, and basic matrix operations (see [[5 - VECTORS AND SPACES]] and [[6 - INDEPENDENCE]]).

---

## 1. The Dot Product in $\mathbb{R}^n$

### Definition

Let $\mathbf{u} = (u_1, u_2, \dots, u_n)$ and $\mathbf{v} = (v_1, v_2, \dots, v_n)$ be vectors in $\mathbb{R}^n$. The **dot product** (also called the **Euclidean inner product** or **standard inner product**) is the scalar

$$\mathbf{u} \cdot \mathbf{v} \;=\; u_1 v_1 + u_2 v_2 + \cdots + u_n v_n \;=\; \sum_{i=1}^{n} u_i v_i.$$

Equivalently, if we treat $\mathbf{u}$ and $\mathbf{v}$ as column vectors, then $\mathbf{u} \cdot \mathbf{v} = \mathbf{u}^\top \mathbf{v}$.

### Key Properties of the Dot Product

For all $\mathbf{u}, \mathbf{v}, \mathbf{w} \in \mathbb{R}^n$ and $c \in \mathbb{R}$:

| Property | Statement |
|---|---|
| **Commutativity** | $\mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}$ |
| **Linearity in 1st argument** | $(\mathbf{u} + \mathbf{v}) \cdot \mathbf{w} = \mathbf{u} \cdot \mathbf{w} + \mathbf{v} \cdot \mathbf{w}$ |
| **Scalar factoring** | $(c\,\mathbf{u}) \cdot \mathbf{v} = c\,(\mathbf{u} \cdot \mathbf{v})$ |
| **Positive-definiteness** | $\mathbf{u} \cdot \mathbf{u} \geq 0$, with equality if and only if $\mathbf{u} = \mathbf{0}$ |

Each of these follows immediately from the component-wise definition and the commutativity of real-number multiplication.

### Worked Examples

**Example 1 (in $\mathbb{R}^2$):** Compute $\begin{bmatrix}3\\4\end{bmatrix} \cdot \begin{bmatrix}2\\7\end{bmatrix}$.

**Solution:**

$$\begin{bmatrix}3\\4\end{bmatrix} \cdot \begin{bmatrix}2\\7\end{bmatrix} = 3 \cdot 2 + 4 \cdot 7 = 6 + 28 = 34.$$

**Example 2 (in $\mathbb{R}^3$):** Compute $\begin{bmatrix}1\\2\\3\end{bmatrix} \cdot \begin{bmatrix}2\\0\\1\end{bmatrix}$.

**Solution:**

$$\begin{bmatrix}1\\2\\3\end{bmatrix} \cdot \begin{bmatrix}2\\0\\1\end{bmatrix} = 1 \cdot 2 + 2 \cdot 0 + 3 \cdot 1 = 2 + 0 + 3 = 5.$$

---

## 2. Length (Euclidean Norm) in $\mathbb{R}^n$

### Motivation from the Pythagorean Theorem

**In $\mathbb{R}^2$:** Given a vector $\mathbf{v} = (x, y)$, picture it as an arrow from the origin to the point $(x,y)$. Dropping a perpendicular to the $x$-axis creates a right triangle with legs $|x|$ and $|y|$. By the Pythagorean theorem the length of the hypotenuse — the **length** of $\mathbf{v}$ — is

$$\|\mathbf{v}\| = \sqrt{x^2 + y^2}.$$

**Example:** $\left\|\begin{bmatrix}3\\4\end{bmatrix}\right\| = \sqrt{9 + 16} = \sqrt{25} = 5.$

**In $\mathbb{R}^3$:** For $\mathbf{v} = (x, y, z)$, first project onto the $xy$-plane to get a leg of length $\sqrt{x^2 + y^2}$, then form a second right triangle with legs $\sqrt{x^2 + y^2}$ and $|z|$. Applying the Pythagorean theorem again gives

$$\|\mathbf{v}\| = \sqrt{x^2 + y^2 + z^2}.$$

**Example:** $\left\|\begin{bmatrix}4\\3\\3\end{bmatrix}\right\| = \sqrt{16 + 9 + 9} = \sqrt{34}.$

### General Definition

For $\mathbf{u} = (u_1, u_2, \dots, u_n) \in \mathbb{R}^n$, the **Euclidean length** (or **Euclidean norm**, or **$2$-norm**) is

$$\|\mathbf{u}\| = \sqrt{u_1^2 + u_2^2 + \cdots + u_n^2} = \sqrt{\mathbf{u} \cdot \mathbf{u}}.$$

### The Fundamental Link: Length via Dot Product

The Euclidean norm is recovered entirely from the dot product:

$$\|\mathbf{u}\|^2 = \mathbf{u} \cdot \mathbf{u}.$$

This relationship is the template for the general theory: in any inner product space, we will define the norm as the square root of the inner product of a vector with itself.

> **Clarification:** The notation $\|\mathbf{u}\|$ (double bars) is standard for norms, whereas $|\cdot|$ (single bars) is reserved for the absolute value of a scalar or, occasionally, the determinant of a matrix. Do not confuse the two.

### Unit Vectors

A vector $\mathbf{u}$ with $\|\mathbf{u}\| = 1$ is called a **unit vector**. Any nonzero vector $\mathbf{v}$ can be **normalized** to produce a unit vector in the same direction:

$$\hat{\mathbf{v}} = \frac{\mathbf{v}}{\|\mathbf{v}\|}.$$

---

## 3. Angles in $\mathbb{R}^n$

### The Angle Formula

Given two nonzero vectors $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$, the **angle** $\theta$ between them (with $0 \leq \theta \leq \pi$) is defined by

$$\cos\theta = \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\|\;\|\mathbf{v}\|}.$$

Equivalently,

$$\theta = \cos^{-1}\!\left(\frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\|\;\|\mathbf{v}\|}\right).$$

> **Clarification:** This formula is valid in $\mathbb{R}^n$ for any $n \geq 2$. The geometric intuition is that $\mathbf{u}$ and $\mathbf{v}$ span a two-dimensional plane (assuming they are not parallel); within that plane the situation reduces to $\mathbb{R}^2$ and ordinary trigonometry applies. The Cauchy–Schwarz inequality (Section 6) guarantees that the quantity $\frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\|\|\mathbf{v}\|}$ always lies in $[-1, 1]$, so $\cos^{-1}$ is well-defined.

### Orthogonality

Two vectors $\mathbf{u}$ and $\mathbf{v}$ are **orthogonal** (perpendicular) if and only if $\theta = \pi/2$, which happens precisely when

$$\mathbf{u} \cdot \mathbf{v} = 0.$$

### Worked Examples

**Example 1:** Find the angle between $\mathbf{u} = \begin{bmatrix}1\\0\\0\end{bmatrix}$ and $\mathbf{v} = \begin{bmatrix}1\\0\\1\end{bmatrix}$ in $\mathbb{R}^3$.

**Solution:** Both vectors lie in the $xz$-plane (their $y$-components are zero). We compute:

$$\mathbf{u} \cdot \mathbf{v} = 1 \cdot 1 + 0 \cdot 0 + 0 \cdot 1 = 1,$$

$$\|\mathbf{u}\| = \sqrt{1} = 1, \qquad \|\mathbf{v}\| = \sqrt{1 + 0 + 1} = \sqrt{2}.$$

Therefore,

$$\cos\theta = \frac{1}{1 \cdot \sqrt{2}} = \frac{1}{\sqrt{2}}, \qquad \theta = \cos^{-1}\!\left(\frac{1}{\sqrt{2}}\right) = \frac{\pi}{4} \;\text{radians} = 45^\circ.$$

**Example 2:** Find the angle between $\mathbf{u} = \begin{bmatrix}1\\0\\0\end{bmatrix}$ and $\mathbf{v} = \begin{bmatrix}1\\1\\1\end{bmatrix}$ in $\mathbb{R}^3$.

**Solution:**

$$\mathbf{u} \cdot \mathbf{v} = 1, \qquad \|\mathbf{u}\| = 1, \qquad \|\mathbf{v}\| = \sqrt{3}.$$

$$\cos\theta = \frac{1}{\sqrt{3}}, \qquad \theta = \cos^{-1}\!\left(\frac{1}{\sqrt{3}}\right) \approx 54.74^\circ.$$

### Summary Table — Dot Product, Length, Angle

| Concept | Formula in $\mathbb{R}^n$ |
|---|---|
| Dot product | $\mathbf{u} \cdot \mathbf{v} = \sum_{i=1}^n u_i v_i$ |
| Length / Euclidean norm | $\|\mathbf{u}\| = \sqrt{\mathbf{u} \cdot \mathbf{u}}$ |
| Angle | $\cos\theta = \dfrac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\|\,\|\mathbf{v}\|}$ |
| Orthogonality test | $\mathbf{u} \cdot \mathbf{v} = 0$ |

---

## 4. Abstract Inner Products

The dot product is just one way to measure "inner-product-like" quantities in $\mathbb{R}^n$. We now abstract its essential properties so that we can define lengths and angles in **any** vector space — including spaces of functions, polynomials, or matrices.

### Definition

Let $V$ be a real vector space. An **inner product** on $V$ is a function

$$\langle \cdot\,,\, \cdot \rangle : V \times V \to \mathbb{R}$$

satisfying the following axioms for all $\mathbf{v}, \mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3 \in V$ and all $c \in \mathbb{R}$:

| # | Axiom | Statement |
|---|---|---|
| (IP1) | **Positive-definiteness** | $\langle \mathbf{v}, \mathbf{v} \rangle \geq 0$, with $\langle \mathbf{v}, \mathbf{v} \rangle = 0$ if and only if $\mathbf{v} = \mathbf{0}$ |
| (IP2) | **Symmetry** | $\langle \mathbf{v}_1, \mathbf{v}_2 \rangle = \langle \mathbf{v}_2, \mathbf{v}_1 \rangle$ |
| (IP3) | **Additivity** | $\langle \mathbf{v}_1 + \mathbf{v}_2,\, \mathbf{v}_3 \rangle = \langle \mathbf{v}_1, \mathbf{v}_3 \rangle + \langle \mathbf{v}_2, \mathbf{v}_3 \rangle$ |
| (IP4) | **Homogeneity** | $\langle c\,\mathbf{v}_1,\, \mathbf{v}_2 \rangle = c\,\langle \mathbf{v}_1, \mathbf{v}_2 \rangle$ |

Axioms (IP3) and (IP4) together say the inner product is **linear in its first argument**. Combined with symmetry (IP2), we immediately obtain linearity in the second argument as well:

$$\langle \mathbf{v}_1,\, \mathbf{v}_2 + \mathbf{v}_3 \rangle = \langle \mathbf{v}_1, \mathbf{v}_2 \rangle + \langle \mathbf{v}_1, \mathbf{v}_3 \rangle,$$

$$\langle \mathbf{v}_1,\, c\,\mathbf{v}_2 \rangle = c\,\langle \mathbf{v}_1, \mathbf{v}_2 \rangle.$$

A function that is linear in each argument separately is called **bilinear**. Thus an inner product is a **symmetric, positive-definite, bilinear form**.

### Inner Product Spaces

A vector space $V$ equipped with a chosen inner product $\langle \cdot, \cdot \rangle$ is called an **inner product space**.

### Example 1: The Standard Inner Product on $\mathbb{R}^n$

Define $\langle \mathbf{u}, \mathbf{v} \rangle = \mathbf{u} \cdot \mathbf{v} = \sum_{i=1}^n u_i v_i$.

We verify the axioms:

- **(IP1):** $\langle \mathbf{u}, \mathbf{u} \rangle = u_1^2 + u_2^2 + \cdots + u_n^2$. This is a sum of squares of real numbers, hence $\geq 0$. It equals $0$ exactly when every $u_i = 0$, i.e., $\mathbf{u} = \mathbf{0}$. ✓
- **(IP2):** $\langle \mathbf{u}, \mathbf{v} \rangle = \sum u_i v_i = \sum v_i u_i = \langle \mathbf{v}, \mathbf{u} \rangle$, since multiplication of real numbers commutes. ✓
- **(IP3):** $\langle \mathbf{u} + \mathbf{u}', \mathbf{v} \rangle = \sum (u_i + u_i')v_i = \sum u_i v_i + \sum u_i' v_i = \langle \mathbf{u}, \mathbf{v}\rangle + \langle \mathbf{u}', \mathbf{v}\rangle$. ✓
- **(IP4):** $\langle c\,\mathbf{u}, \mathbf{v}\rangle = \sum (c\,u_i)v_i = c\sum u_i v_i = c\,\langle \mathbf{u}, \mathbf{v}\rangle$. ✓

### Example 2: A Non-Standard Inner Product on $\mathbb{R}^2$

Let $\mathbf{u} = \begin{bmatrix}x_1\\x_2\end{bmatrix}$, $\mathbf{v} = \begin{bmatrix}y_1\\y_2\end{bmatrix}$. Define

$$\langle \mathbf{u}, \mathbf{v} \rangle = x_1 y_1 - x_1 y_2 - x_2 y_1 + 2\,x_2 y_2.$$

This can be written compactly in matrix form:

$$\langle \mathbf{u}, \mathbf{v} \rangle = \mathbf{u}^\top A\, \mathbf{v}, \qquad A = \begin{bmatrix} 1 & -1 \\ -1 & 2 \end{bmatrix}.$$

**Verification of (IP2)–(IP4) via the matrix form.** Since $\langle \mathbf{u}, \mathbf{v} \rangle = \mathbf{u}^\top A\, \mathbf{v}$ and $A^\top = A$ (the matrix $A$ is symmetric), we have

$$\langle \mathbf{v}, \mathbf{u} \rangle = \mathbf{v}^\top A\, \mathbf{u} = (\mathbf{u}^\top A\, \mathbf{v})^\top = \mathbf{u}^\top A\, \mathbf{v} = \langle \mathbf{u}, \mathbf{v}\rangle,$$

where we used the fact that a $1 \times 1$ matrix equals its own transpose. Additivity and homogeneity follow from the linearity of matrix multiplication.

**Verification of (IP1):** We compute

$$\langle \mathbf{u}, \mathbf{u} \rangle = x_1^2 - 2x_1 x_2 + 2x_2^2 = (x_1 - x_2)^2 + x_2^2.$$

This is a sum of two squares, hence $\geq 0$. It equals $0$ only when $x_1 - x_2 = 0$ and $x_2 = 0$, which forces $x_1 = x_2 = 0$, i.e., $\mathbf{u} = \mathbf{0}$. ✓

> **Clarification:** Not every symmetric matrix $A$ yields an inner product via $\langle \mathbf{u}, \mathbf{v} \rangle = \mathbf{u}^\top A\, \mathbf{v}$. The matrix must also be **positive-definite** (all eigenvalues strictly positive) to ensure axiom (IP1). For example, $A = \begin{bmatrix}1 & 0\\0 & -1\end{bmatrix}$ is symmetric but $\langle \mathbf{e}_2, \mathbf{e}_2 \rangle = -1 < 0$, violating (IP1).

### General Construction: Matrix Inner Products on $\mathbb{R}^n$

**Theorem.** Let $A$ be a real symmetric $n \times n$ matrix with all eigenvalues strictly positive (i.e., $A$ is positive-definite). Then

$$\langle \mathbf{u}, \mathbf{v} \rangle_A = \mathbf{u}^\top A\, \mathbf{v}$$

defines an inner product on $\mathbb{R}^n$. The standard dot product is the special case $A = I_n$.

### Example 3: Inner Product on a Function Space

Let $V = C[0,1]$, the vector space of continuous real-valued functions on $[0,1]$. Define

$$\langle f, g \rangle = \int_0^1 f(t)\,g(t)\,dt.$$

One can verify all four axioms; positive-definiteness uses the fact that if $f$ is continuous and $\int_0^1 f(t)^2\,dt = 0$, then $f \equiv 0$.

This example demonstrates the power of the abstract framework: the notion of "length" and "angle" extends to infinite-dimensional spaces of functions.

---

## 5. Norms on a Vector Space

### Definition

Let $V$ be a real vector space. A **norm** on $V$ is a function

$$\|\cdot\| : V \to \mathbb{R}$$

satisfying the following axioms for all $\mathbf{x}, \mathbf{y} \in V$ and $c \in \mathbb{R}$:

| # | Axiom | Statement |
|---|---|---|
| (N1) | **Triangle inequality** | $\|\mathbf{x} + \mathbf{y}\| \leq \|\mathbf{x}\| + \|\mathbf{y}\|$ |
| (N2) | **Absolute homogeneity** | $\|c\,\mathbf{x}\| = |c|\;\|\mathbf{x}\|$ |
| (N3) | **Positive-definiteness** | $\|\mathbf{x}\| \geq 0$, with $\|\mathbf{x}\| = 0$ if and only if $\mathbf{x} = \mathbf{0}$ |

A vector space together with a norm is called a **normed vector space** (or simply a **normed space**).

> **Clarification:** Every inner product gives rise to a norm (Section 7 below), but **not** every norm comes from an inner product. A norm comes from an inner product if and only if it satisfies the **parallelogram law**: $\|\mathbf{u}+\mathbf{v}\|^2 + \|\mathbf{u}-\mathbf{v}\|^2 = 2\|\mathbf{u}\|^2 + 2\|\mathbf{v}\|^2$.

### Example 1: The Euclidean Norm ($2$-norm) on $\mathbb{R}^n$

$$\|\mathbf{u}\|_2 = \sqrt{u_1^2 + u_2^2 + \cdots + u_n^2}.$$

This is the norm induced by the standard dot product. We verify:

**(N3):** $\|\mathbf{u}\|_2 = 0 \iff u_1^2 + \cdots + u_n^2 = 0 \iff$ each $u_i = 0 \iff \mathbf{u} = \mathbf{0}$. ✓

**(N2):**

$$\|c\,\mathbf{u}\|_2 = \sqrt{(cu_1)^2 + \cdots + (cu_n)^2} = \sqrt{c^2(u_1^2 + \cdots + u_n^2)} = |c|\sqrt{u_1^2 + \cdots + u_n^2} = |c|\,\|\mathbf{u}\|_2. \; \checkmark$$

**(N1):** The triangle inequality for the Euclidean norm follows from the Cauchy–Schwarz inequality (see Section 6).

### Example 2: The $1$-norm (Taxicab / Manhattan norm) on $\mathbb{R}^n$

$$\|\mathbf{u}\|_1 = |u_1| + |u_2| + \cdots + |u_n|.$$

We verify each axiom:

**(N3):** $\|\mathbf{u}\|_1 = 0$ implies each $|u_i| = 0$, hence each $u_i = 0$, so $\mathbf{u} = \mathbf{0}$. Conversely, $\|\mathbf{0}\|_1 = 0$. ✓

**(N2):**

$$\|c\,\mathbf{u}\|_1 = |cu_1| + \cdots + |cu_n| = |c||u_1| + \cdots + |c||u_n| = |c|\,(|u_1| + \cdots + |u_n|) = |c|\,\|\mathbf{u}\|_1. \; \checkmark$$

**(N1):** Using the ordinary triangle inequality for real numbers, $|u_i + v_i| \leq |u_i| + |v_i|$, we sum over $i$:

$$\|\mathbf{u} + \mathbf{v}\|_1 = \sum_{i=1}^n |u_i + v_i| \leq \sum_{i=1}^n (|u_i| + |v_i|) = \|\mathbf{u}\|_1 + \|\mathbf{v}\|_1. \; \checkmark$$

### Example 3: The $\infty$-norm (Max norm) on $\mathbb{R}^n$

$$\|\mathbf{u}\|_\infty = \max\{|u_1|, |u_2|, \dots, |u_n|\}.$$

Verification of the norm axioms is a useful exercise.

### Geometric Comparison

In $\mathbb{R}^2$, the "unit ball" $\{\mathbf{x} : \|\mathbf{x}\| \leq 1\}$ looks different for each norm:

- **$2$-norm:** a circle (the familiar unit disc).
- **$1$-norm:** a diamond (square rotated $45°$).
- **$\infty$-norm:** a square aligned with the axes.

---

## 6. The Cauchy–Schwarz Inequality

The **Cauchy–Schwarz inequality** is arguably the single most important inequality in linear algebra and analysis. It is the key fact that makes the angle formula well-defined and the triangle inequality provable.

### Statement

Let $V$ be an inner product space with inner product $\langle \cdot, \cdot \rangle$. For all $\mathbf{u}, \mathbf{v} \in V$,

$$|\langle \mathbf{u}, \mathbf{v} \rangle| \leq \|\mathbf{u}\|\;\|\mathbf{v}\|,$$

where $\|\mathbf{u}\| = \sqrt{\langle \mathbf{u}, \mathbf{u}\rangle}$. Equality holds if and only if $\mathbf{u}$ and $\mathbf{v}$ are **linearly dependent** (one is a scalar multiple of the other, or one is the zero vector).

In the special case of the Euclidean dot product on $\mathbb{R}^n$ this reads:

$$|u_1 v_1 + u_2 v_2 + \cdots + u_n v_n| \leq \sqrt{u_1^2 + \cdots + u_n^2}\;\sqrt{v_1^2 + \cdots + v_n^2}.$$

### Proof Sketch

Fix $\mathbf{u}, \mathbf{v} \in V$. If $\mathbf{v} = \mathbf{0}$ both sides are $0$ and the inequality holds trivially. Assume $\mathbf{v} \neq \mathbf{0}$ and let $t \in \mathbb{R}$ be arbitrary. By positive-definiteness:

$$0 \leq \langle \mathbf{u} - t\,\mathbf{v},\; \mathbf{u} - t\,\mathbf{v} \rangle = \langle \mathbf{u}, \mathbf{u}\rangle - 2t\,\langle \mathbf{u}, \mathbf{v}\rangle + t^2\langle \mathbf{v}, \mathbf{v}\rangle.$$

This is a quadratic in $t$ that is never negative. A quadratic $at^2 + bt + c \geq 0$ for all $t$ requires its discriminant to be $\leq 0$:

$$b^2 - 4ac \leq 0 \;\;\Longrightarrow\;\; 4\langle \mathbf{u}, \mathbf{v}\rangle^2 - 4\langle \mathbf{u}, \mathbf{u}\rangle\langle \mathbf{v}, \mathbf{v}\rangle \leq 0.$$

Dividing by $4$:

$$\langle \mathbf{u}, \mathbf{v}\rangle^2 \leq \langle \mathbf{u}, \mathbf{u}\rangle\,\langle \mathbf{v}, \mathbf{v}\rangle = \|\mathbf{u}\|^2\,\|\mathbf{v}\|^2.$$

Taking square roots of both sides yields $|\langle \mathbf{u}, \mathbf{v}\rangle| \leq \|\mathbf{u}\|\,\|\mathbf{v}\|$. $\square$

### Why Cauchy–Schwarz Matters

1. **The angle formula is well-defined.** Since $|\langle \mathbf{u}, \mathbf{v}\rangle| \leq \|\mathbf{u}\|\|\mathbf{v}\|$, we have

$$-1 \leq \frac{\langle \mathbf{u}, \mathbf{v}\rangle}{\|\mathbf{u}\|\,\|\mathbf{v}\|} \leq 1,$$

so $\cos^{-1}$ of this quantity always exists.

2. **Triangle inequality follows.** We use Cauchy–Schwarz to prove that every inner-product norm satisfies (N1) — see Section 7.

### Worked Example

**Example:** Verify Cauchy–Schwarz for $\mathbf{u} = \begin{bmatrix}1\\2\\3\end{bmatrix}$ and $\mathbf{v} = \begin{bmatrix}2\\0\\1\end{bmatrix}$.

**Solution:**

$$|\mathbf{u} \cdot \mathbf{v}| = |1 \cdot 2 + 2 \cdot 0 + 3 \cdot 1| = |5| = 5.$$

$$\|\mathbf{u}\|\,\|\mathbf{v}\| = \sqrt{1+4+9}\;\sqrt{4+0+1} = \sqrt{14}\;\sqrt{5} = \sqrt{70} \approx 8.37.$$

Indeed $5 \leq \sqrt{70}$. ✓ (Equality does not hold because $\mathbf{u}$ and $\mathbf{v}$ are linearly independent.)

---

## 7. From Inner Products to Norms

###