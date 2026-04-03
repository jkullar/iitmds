# ORTHOGONALITY AND THE GRAM-SCHMIDT PROCESS

This file develops the theory of orthogonality in inner product spaces: when vectors are perpendicular, how to build bases of mutually perpendicular unit vectors, how to project vectors onto subspaces, and how to systematically convert any basis into an orthonormal one via the Gram-Schmidt process. The final section treats orthogonal matrices and rotations — linear transformations that preserve lengths and angles. These ideas are central to data science (least-squares fitting, principal component analysis, QR decomposition) and to the geometric understanding of linear algebra more broadly.

**Prerequisites.** Familiarity with inner products, norms, and the dot product ([[11 - INNER PRODUCTS]]), as well as bases and dimension ([[7 - BASIS AND RANK]]) and linear independence ([[6 - INDEPENDENCE]]).

---

## 1. Orthogonal Vectors

### Definition

Let $V$ be an inner product space with inner product $\langle \cdot, \cdot \rangle$. Two vectors $\mathbf{u}, \mathbf{v} \in V$ are **orthogonal** if

$$\langle \mathbf{u}, \mathbf{v} \rangle = 0.$$

We write $\mathbf{u} \perp \mathbf{v}$.

### Geometric Motivation

In $\mathbb{R}^n$ with the standard dot product, the angle $\theta$ between nonzero vectors satisfies

$$\cos\theta = \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\|\,\|\mathbf{v}\|}.$$

A right angle ($\theta = 90°$) forces $\cos\theta = 0$, hence $\mathbf{u} \cdot \mathbf{v} = 0$. The algebraic definition above generalises this geometric intuition to arbitrary inner product spaces.

> **Clarification:** Orthogonality depends on the chosen inner product. Two vectors that are orthogonal under one inner product need not be orthogonal under a different inner product on the same vector space.

**Convention.** When no inner product is explicitly specified and the ambient space is $\mathbb{R}^n$, orthogonality is with respect to the standard dot product.

### Worked Examples

**Example 1 (Standard dot product on $\mathbb{R}^3$):** Show that $\mathbf{u} = \begin{bmatrix}1\\2\\3\end{bmatrix}$ and $\mathbf{v} = \begin{bmatrix}2\\2\\-2\end{bmatrix}$ are orthogonal.

**Solution:**

$$\mathbf{u} \cdot \mathbf{v} = 1(2) + 2(2) + 3(-2) = 2 + 4 - 6 = 0.$$

Since the dot product is zero, $\mathbf{u} \perp \mathbf{v}$.

**Example 2 (Non-standard inner product on $\mathbb{R}^2$):** Define the inner product on $\mathbb{R}^2$ by

$$\langle \mathbf{u}, \mathbf{v} \rangle = x_1 y_1 - x_1 y_2 - x_2 y_1 + 2x_2 y_2,$$

where $\mathbf{u} = \begin{bmatrix}x_1\\x_2\end{bmatrix}$, $\mathbf{v} = \begin{bmatrix}y_1\\y_2\end{bmatrix}$. Show that $\begin{bmatrix}1\\1\end{bmatrix}$ and $\begin{bmatrix}1\\0\end{bmatrix}$ are orthogonal in this inner product.

**Solution:**

$$\langle \mathbf{u}, \mathbf{v} \rangle = 1(1) - 1(0) - 1(1) + 2(1)(0) = 1 - 0 - 1 + 0 = 0.$$

Note that under the standard dot product $\begin{bmatrix}1\\1\end{bmatrix} \cdot \begin{bmatrix}1\\0\end{bmatrix} = 1 \neq 0$, so these vectors are *not* orthogonal with respect to the dot product — confirming that orthogonality depends on the inner product.

### The Zero Vector

The zero vector is orthogonal to every vector, since $\langle \mathbf{0}, \mathbf{v} \rangle = 0$ for all $\mathbf{v}$ (this follows from linearity of the inner product in the first argument).

---

## 2. Orthogonal Sets and Linear Independence

### Definition

An **orthogonal set** of vectors in an inner product space $V$ is a set $S = \{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k\}$ whose elements are **mutually orthogonal** (pairwise orthogonal):

$$\langle \mathbf{v}_i, \mathbf{v}_j \rangle = 0 \quad \text{for all } i \neq j.$$

**Example:** In $\mathbb{R}^3$ with the dot product, the set

$$S = \left\{ \begin{bmatrix}4\\3\\-2\end{bmatrix},\; \begin{bmatrix}-3\\2\\-3\end{bmatrix},\; \begin{bmatrix}-5\\18\\17\end{bmatrix} \right\}$$

is an orthogonal set. One verifies:

$$\begin{bmatrix}4\\3\\-2\end{bmatrix} \cdot \begin{bmatrix}-3\\2\\-3\end{bmatrix} = -12 + 6 + 6 = 0, \qquad \begin{bmatrix}4\\3\\-2\end{bmatrix} \cdot \begin{bmatrix}-5\\18\\17\end{bmatrix} = -20 + 54 - 34 = 0,$$

$$\begin{bmatrix}-3\\2\\-3\end{bmatrix} \cdot \begin{bmatrix}-5\\18\\17\end{bmatrix} = 15 + 36 - 51 = 0.$$

### The Fundamental Theorem: Orthogonality Implies Independence

> **Theorem.** Let $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k\}$ be an orthogonal set of **nonzero** vectors in an inner product space $V$. Then $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k\}$ is linearly independent.

**Proof sketch.** Suppose $c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots + c_k\mathbf{v}_k = \mathbf{0}$. Take the inner product of both sides with $\mathbf{v}_j$ (for an arbitrary index $j$):

$$\left\langle \sum_{i=1}^{k} c_i \mathbf{v}_i,\; \mathbf{v}_j \right\rangle = \langle \mathbf{0}, \mathbf{v}_j \rangle = 0.$$

By linearity of the inner product:

$$\sum_{i=1}^{k} c_i \langle \mathbf{v}_i, \mathbf{v}_j \rangle = 0.$$

Since the set is orthogonal, $\langle \mathbf{v}_i, \mathbf{v}_j \rangle = 0$ for all $i \neq j$. Only the $i = j$ term survives:

$$c_j \langle \mathbf{v}_j, \mathbf{v}_j \rangle = 0.$$

Because $\mathbf{v}_j \neq \mathbf{0}$, we have $\langle \mathbf{v}_j, \mathbf{v}_j \rangle > 0$ (positive-definiteness of the inner product), so $c_j = 0$. This holds for every $j$, establishing linear independence. $\blacksquare$

> **Clarification:** The requirement that each vector be nonzero is essential. The set $\{\mathbf{0}, \mathbf{v}\}$ is trivially "orthogonal" (since $\langle \mathbf{0}, \mathbf{v}\rangle = 0$), but it is linearly dependent. When we speak of an orthogonal set in practice, we almost always mean a set of nonzero vectors.

### Why This Matters

Checking linear independence via the definition requires solving a homogeneous system — an $O(n^3)$ process. Checking orthogonality requires only computing $\binom{k}{2}$ inner products and verifying each is zero. If you can exhibit an orthogonal set, linear independence is *free*.

---

## 3. Orthogonal Bases

### Definition

Let $V$ be a finite-dimensional inner product space. An **orthogonal basis** for $V$ is a basis that is also an orthogonal set:

$$\langle \mathbf{v}_i, \mathbf{v}_j \rangle = 0 \quad \text{for all } i \neq j.$$

Since an orthogonal set of nonzero vectors is linearly independent (§2), a set is an orthogonal basis for $V$ if and only if it is an orthogonal set of $n = \dim(V)$ nonzero vectors.

### Examples

| Orthogonal basis | Space | Inner product |
|---|---|---|
| $\{e_1, e_2, \ldots, e_n\}$ (standard basis) | $\mathbb{R}^n$ | Dot product |
| $\left\{\begin{bmatrix}4\\3\\-2\end{bmatrix}, \begin{bmatrix}-3\\2\\-3\end{bmatrix}, \begin{bmatrix}-5\\18\\17\end{bmatrix}\right\}$ | $\mathbb{R}^3$ | Dot product |
| $\left\{\begin{bmatrix}1\\1\end{bmatrix}, \begin{bmatrix}1\\0\end{bmatrix}\right\}$ | $\mathbb{R}^2$ | $x_1y_1 - x_1y_2 - x_2y_1 + 2x_2y_2$ |

---

## 4. Orthonormal Sets and Orthonormal Bases

### Definition

An **orthonormal set** in an inner product space $V$ is an orthogonal set of vectors each having norm 1:

$$\langle \mathbf{v}_i, \mathbf{v}_j \rangle = \begin{cases} 0 & \text{if } i \neq j, \\ 1 & \text{if } i = j. \end{cases}$$

This condition is often written compactly using the **Kronecker delta**: $\langle \mathbf{v}_i, \mathbf{v}_j \rangle = \delta_{ij}$.

An **orthonormal basis** is a basis that is an orthonormal set — equivalently, an orthogonal basis in which every vector has unit norm — equivalently, a maximal orthonormal set.

### Converting Orthogonal to Orthonormal (Normalisation)

Given an orthogonal set $\{\mathbf{v}_1, \ldots, \mathbf{v}_k\}$ of nonzero vectors, the set

$$\left\{\frac{\mathbf{v}_1}{\|\mathbf{v}_1\|},\; \frac{\mathbf{v}_2}{\|\mathbf{v}_2\|},\; \ldots,\; \frac{\mathbf{v}_k}{\|\mathbf{v}_k\|}\right\}$$

is an orthonormal set. This process is called **normalisation**.

**Why it works:**
- **Orthogonality is preserved:** $\left\langle \frac{\mathbf{v}_i}{\|\mathbf{v}_i\|}, \frac{\mathbf{v}_j}{\|\mathbf{v}_j\|} \right\rangle = \frac{1}{\|\mathbf{v}_i\|\,\|\mathbf{v}_j\|}\langle \mathbf{v}_i, \mathbf{v}_j \rangle = 0$ for $i \neq j$.
- **Unit norm:** $\left\|\frac{\mathbf{v}_i}{\|\mathbf{v}_i\|}\right\| = \frac{\|\mathbf{v}_i\|}{\|\mathbf{v}_i\|} = 1$.

### Example: Standard Basis

The standard basis $\{\mathbf{e}_1, \ldots, \mathbf{e}_n\}$ of $\mathbb{R}^n$ (with the dot product) is orthonormal:

$$\mathbf{e}_i \cdot \mathbf{e}_j = \delta_{ij}.$$

### Example: Orthonormal Basis for $\mathbb{R}^3$

The set

$$\beta = \left\{ \frac{1}{3}\begin{bmatrix}1\\2\\2\end{bmatrix},\; \frac{1}{3}\begin{bmatrix}-2\\-1\\2\end{bmatrix},\; \frac{1}{3}\begin{bmatrix}2\\-2\\1\end{bmatrix} \right\}$$

is an orthonormal basis for $\mathbb{R}^3$ with the dot product.

**Verification (norms):**

$$\left\|\frac{1}{3}\begin{bmatrix}1\\2\\2\end{bmatrix}\right\|^2 = \frac{1}{9}(1 + 4 + 4) = \frac{9}{9} = 1. \quad \checkmark$$

(The same computation gives $\|\mathbf{v}_2\|^2 = \frac{1}{9}(4+1+4) = 1$ and $\|\mathbf{v}_3\|^2 = \frac{1}{9}(4+4+1) = 1$.)

**Verification (orthogonality):**

$$\frac{1}{9}\begin{bmatrix}1\\2\\2\end{bmatrix} \cdot \begin{bmatrix}-2\\-1\\2\end{bmatrix} = \frac{1}{9}(-2 - 2 + 4) = 0. \quad \checkmark$$

(Similarly for the other pairs.)

Since $\beta$ is an orthonormal set of 3 vectors in a 3-dimensional space, it is an orthonormal basis.

### Example: Normalisation in $\mathbb{R}^2$

Start with the orthogonal basis $\gamma = \left\{\begin{bmatrix}1\\3\end{bmatrix}, \begin{bmatrix}-3\\1\end{bmatrix}\right\}$ for $\mathbb{R}^2$.

Both vectors have norm $\sqrt{1+9} = \sqrt{10}$, so normalising gives the orthonormal basis:

$$\beta = \left\{\frac{1}{\sqrt{10}}\begin{bmatrix}1\\3\end{bmatrix},\; \frac{1}{\sqrt{10}}\begin{bmatrix}-3\\1\end{bmatrix}\right\}.$$

---

## 5. Coordinates with Respect to an Orthonormal Basis

### The Key Formula

> **Theorem (Fourier coefficients).** Let $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n\}$ be an orthonormal basis for an inner product space $V$. Then every $\mathbf{v} \in V$ can be written as
>
> $$\mathbf{v} = c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots + c_n\mathbf{v}_n, \qquad \text{where } c_i = \langle \mathbf{v}, \mathbf{v}_i \rangle.$$

**Proof.** Since the $\mathbf{v}_i$ form a basis, unique scalars $c_1, \ldots, c_n$ exist. Take the inner product of both sides with $\mathbf{v}_j$:

$$\langle \mathbf{v}, \mathbf{v}_j \rangle = \sum_{i=1}^{n} c_i \langle \mathbf{v}_i, \mathbf{v}_j \rangle = c_j \cdot 1 = c_j,$$

using orthonormality ($\langle \mathbf{v}_i, \mathbf{v}_j\rangle = \delta_{ij}$). $\blacksquare$

### Why This Is Important

For a general basis, finding the coefficients $c_i$ requires solving an $n \times n$ linear system. For an orthonormal basis, each coefficient is computed independently by a single inner product — no system-solving is needed.

### Worked Example

Write $\mathbf{v} = \begin{bmatrix}2\\5\end{bmatrix}$ as a linear combination of the orthonormal basis $\beta = \left\{\frac{1}{\sqrt{10}}\begin{bmatrix}1\\3\end{bmatrix},\; \frac{1}{\sqrt{10}}\begin{bmatrix}-3\\1\end{bmatrix}\right\}$ for $\mathbb{R}^2$.

**Solution:**

$$c_1 = \left\langle \begin{bmatrix}2\\5\end{bmatrix},\; \frac{1}{\sqrt{10}}\begin{bmatrix}1\\3\end{bmatrix} \right\rangle = \frac{1}{\sqrt{10}}(2 \cdot 1 + 5 \cdot 3) = \frac{17}{\sqrt{10}},$$

$$c_2 = \left\langle \begin{bmatrix}2\\5\end{bmatrix},\; \frac{1}{\sqrt{10}}\begin{bmatrix}-3\\1\end{bmatrix} \right\rangle = \frac{1}{\sqrt{10}}(2(-3) + 5 \cdot 1) = \frac{-1}{\sqrt{10}}.$$

Therefore:

$$\begin{bmatrix}2\\5\end{bmatrix} = \frac{17}{\sqrt{10}} \cdot \frac{1}{\sqrt{10}}\begin{bmatrix}1\\3\end{bmatrix} + \frac{-1}{\sqrt{10}} \cdot \frac{1}{\sqrt{10}}\begin{bmatrix}-3\\1\end{bmatrix} = \frac{17}{10}\begin{bmatrix}1\\3\end{bmatrix} - \frac{1}{10}\begin{bmatrix}-3\\1\end{bmatrix} = \begin{bmatrix}\frac{17+3}{10}\\ \frac{51-1}{10}\end{bmatrix} = \begin{bmatrix}2\\5\end{bmatrix}. \;\checkmark$$

---

## 6. Projections onto Subspaces

### Projection onto a Single Vector

Let $V$ be an inner product space and let $\mathbf{w} \neq \mathbf{0}$. The **projection of $\mathbf{v}$ onto $\mathbf{w}$** is

$$\text{proj}_{\mathbf{w}}(\mathbf{v}) = \frac{\langle \mathbf{v}, \mathbf{w} \rangle}{\langle \mathbf{w}, \mathbf{w} \rangle}\,\mathbf{w}.$$

This is the vector in $\text{span}\{\mathbf{w}\}$ closest to $\mathbf{v}$.

**Geometric picture (in $\mathbb{R}^n$ with dot product).** Drop a perpendicular from the tip of $\mathbf{v}$ onto the line through the origin in the direction of $\mathbf{w}$. The foot of the perpendicular is $\text{proj}_{\mathbf{w}}(\mathbf{v})$.

#### Derivation

On the line through the origin in the direction of $\mathbf{w}$, every point has the form $\alpha\mathbf{w}$. We seek $\alpha$ such that $\mathbf{v} - \alpha\mathbf{w}$ is perpendicular to $\mathbf{w}$:

$$\langle \mathbf{v} - \alpha\mathbf{w},\; \mathbf{w}\rangle = 0 \implies \langle\mathbf{v},\mathbf{w}\rangle - \alpha\langle\mathbf{w},\mathbf{w}\rangle = 0 \implies \alpha = \frac{\langle\mathbf{v},\mathbf{w}\rangle}{\langle\mathbf{w},\mathbf{w}\rangle}.$$

> **Clarification:** If $\mathbf{w}$ is a unit vector ($\|\mathbf{w}\| = 1$), the formula simplifies to $\text{proj}_{\mathbf{w}}(\mathbf{v}) = \langle \mathbf{v}, \mathbf{w} \rangle\,\mathbf{w}$.

### Projection onto a Subspace (General)

Let $W$ be a finite-dimensional subspace of an inner product space $V$, and let $\mathbf{v} \in V$.

**Procedure:**
1. Find an orthonormal basis $\{\mathbf{w}_1, \ldots, \mathbf{w}_m\}$ for $W$.
2. Compute

$$\text{proj}_{W}(\mathbf{v}) = \sum_{i=1}^{m} \langle \mathbf{v}, \mathbf{w}_i \rangle\,\mathbf{w}_i.$$

> **Key fact:** This expression is independent of the particular orthonormal basis chosen for $W$.

If instead you have an **orthogonal** (but not necessarily orthonormal) basis $\{\mathbf{v}_1, \ldots, \mathbf{v}_m\}$ for $W$, the projection is:

$$\text{proj}_{W}(\mathbf{v}) = \sum_{i=1}^{m} \frac{\langle \mathbf{v}, \mathbf{v}_i \rangle}{\langle \mathbf{v}_i, \mathbf{v}_i \rangle}\,\mathbf{v}_i = \sum_{i=1}^{m}\text{proj}_{\mathbf{v}_i}(\mathbf{v}).$$

That is, the projection onto a subspace equals the sum of the projections onto each orthogonal basis vector.

### Worked Examples

**Example 1 ($\mathbb{R}^2$, projection onto a line).** Let $W = \text{span}\left\{\begin{bmatrix}3\\1\end{bmatrix}\right\}$ and $\mathbf{v} = \begin{bmatrix}1\\3\end{bmatrix}$.

Orthonormal basis for $W$: $\left\{\frac{1}{\sqrt{10}}\begin{bmatrix}3\\1\end{bmatrix}\right\}$.

$$\text{proj}_W(\mathbf{v}) = \left\langle \begin{bmatrix}1\\3\end{bmatrix},\frac{1}{\sqrt{10}}\begin{bmatrix}3\\1\end{bmatrix}\right\rangle \cdot \frac{1}{\sqrt{10}}\begin{bmatrix}3\\1\end{bmatrix} = \frac{6}{\sqrt{10}}\cdot\frac{1}{\sqrt{10}}\begin{bmatrix}3\\1\end{bmatrix} = \frac{6}{10}\begin{bmatrix}3\\1\end{bmatrix} = \begin{bmatrix}1.8\\0.6\end{bmatrix}.$$

**Example 2 ($\mathbb{R}^3$, projection onto the $xy$-plane).** Let $W = \text{span}\left\{\begin{bmatrix}1\\0\\0\end{bmatrix}, \begin{bmatrix}0\\1\\0\end{bmatrix}\right\}$ and $\mathbf{v} = \begin{bmatrix}2\\3\\5\end{bmatrix}$.

The standard basis vectors $\mathbf{e}_1, \mathbf{e}_2$ already form an orthonormal basis for $W$.

$$\text{proj}_W(\mathbf{v}) = (\mathbf{v}\cdot\mathbf{e}_1)\mathbf{e}_1 + (\mathbf{v}\cdot\mathbf{e}_2)\mathbf{e}_2 = 2\begin{bmatrix}1\\0\\0\end{bmatrix} + 3\begin{bmatrix}0\\1\\0\end{bmatrix} = \begin{bmatrix}2\\3\\0\end{bmatrix}.$$

The projection "drops" the $z$-component, as expected geometrically.

**Example 3 ($\mathbb{R}^3$, projection onto a 2D subspace using orthogonal basis).** Let $W = \text{span}\left\{\begin{bmatrix}1\\2\\1\end{bmatrix}, \begin{bmatrix}1\\-1\\1\end{bmatrix}\right\}$ (verify these are orthogonal: $1-2+1=0$) and $\mathbf{v} = \begin{bmatrix}-2\\2\\2\end{bmatrix}$.

$$\text{proj}_{\mathbf{v}_1}(\mathbf{v}) = \frac{\langle\mathbf{v},\mathbf{v}_1\rangle}{\langle\mathbf{v}_1,\mathbf{v}_1\rangle}\mathbf{v}_1 = \frac{-2+4+2}{1+4+1}\begin{bmatrix}1\\2\\1\end{bmatrix} = \frac{4}{6}\begin{bmatrix}1\\2\\1\end{bmatrix} = \frac{2}{3}\begin{bmatrix}1\\2\\1\end{bmatrix}.$$

$$\text{proj}_{\mathbf{v}_2}(\mathbf{v}) = \frac{\langle\mathbf{v},\mathbf{v}_2\rangle}{\langle\mathbf{v}_2,\mathbf{v}_2\rangle}\mathbf{v}_2 = \frac{-2-2+2}{1+1+1}\begin{bmatrix}1\\-1\\1\end{bmatrix} = \frac{-2}{3}\begin{bmatrix}1\\-1\\1\end{bmatrix}.$$

$$\text{proj}_W(\mathbf{v}) = \frac{2}{3}\begin{bmatrix}1\\2\\1\end{bmatrix} - \frac{2}{3}\begin{bmatrix}1\\-1\\1\end{bmatrix} = \begin{bmatrix}\frac{2}{3}-\frac{2}{3}\\ \frac{4}{3}+\frac{2}{3}\\ \frac{2}{3}-\frac{2}{3}\end{bmatrix} = \begin{bmatrix}0\\2\\0\end{bmatrix}.$$

### The Orthogonal Complement

For a subspace $W$ of an inner product space $V$, the **orthogonal complement** of $W$ is

$$W^{\perp} = \{\mathbf{v} \in V : \langle \mathbf{v}, \mathbf{w} \rangle = 0 \text{ for all } \mathbf{w} \in W\}.$$

$W^{\perp}$ is itself a subspace of $V$.

The vector $\mathbf{v} - \text{proj}_W(\mathbf{v})$ lies in $W^{\perp}$. Thus every vector $\mathbf{v} \in V$ decomposes uniquely as

$$\mathbf{v} = \underbrace{\text{proj}_W(\mathbf{v})}_{\in\, W} + \underbrace{(\mathbf{v} - \text{proj}_W(\mathbf{v}))}_{\in\, W^{\perp}}.$$

### Projection as a Linear Transformation

> **Theorem.** Let $W$ be a subspace of an inner product space $V$. The map $P_W: V \to V$ defined by $P_W(\mathbf{v}) = \text{proj}_W(\mathbf{v})$ is a linear transformation.

**Proof sketch.** Using an orthonormal basis $\{\mathbf{w}_1,\ldots,\mathbf{w}_m\}$ for $W$:

$$P_W(\mathbf{v}_1 + \mathbf{v}_2) = \sum_{i}\langle\mathbf{v}_1+\mathbf{v}_2,\mathbf{w}_i\rangle\,\mathbf{w}_i = \sum_i\langle\mathbf{v}_1,\mathbf{w}_i\rangle\,\mathbf{w}_i + \sum_i\langle\mathbf{v}_2,\mathbf{w}_i\rangle\,\mathbf{w}_i = P_W(\mathbf{v}_1)+P_W(\mathbf{v}_2).$$

Similarly, $P_W(c\mathbf{v}) = cP_W(\mathbf{v})$ by linearity of the inner product. $\blacksquare$

### Properties of $P_W$

| Property | Statement | Interpretation |
|---|---|---|
| Idempotent | $P_W^2 = P_W$ (i.e. $P_W \circ P_W = P_W$) | Projecting twice is the same as projecting once |
| Fixes $W$ | $P_W(\mathbf{v}) = \mathbf{v}$ for all $\mathbf{v} \in W$ | Vectors already in $W$ are unchanged |
| Image | $\text{im}(P_W) = W$ | The projection maps onto $W$ |
| Kernel | $\ker(P_W) = W^{\perp}$ | Vectors orthogonal to $W$ project to $\mathbf{0}$ |
| Norm-reducing | $\|P_W(\mathbf{v})\| \leq \|\mathbf{v}\|$ | The "shadow" is never longer than the original |

---

## 7. The Gram-Schmidt Process

### Motivation

Every finite-dimensional inner product space has an orthonormal basis, but one is not always handed to you. The **Gram-Schmidt process** is an explicit algorithm that converts any basis into an orthonormal basis.

### The Algorithm

**Input:** A basis $\{\mathbf{x}_1, \mathbf{x}_2, \ldots, \mathbf{x}_n\}$ for an inner product space $V$.

**Output:** An orthonormal basis $\{\mathbf{w}_1, \mathb