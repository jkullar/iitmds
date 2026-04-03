# VECTORS AND SPACES

## 1. Vectors as Lists

A **vector** is a list of numbers. Vectors in $\mathbb{R}^n$ are n-tuples of real numbers:

$$v = (v_1, v_2, \ldots, v_n)$$

Vectors can be written as **row vectors** or **column vectors** depending on context.

### Real-World Motivation

Vectors naturally arise from data tables:
- **GDP data:** $(total, agriculture, industry, mining, \ldots)$ — a vector in $\mathbb{R}^7$
- **Cricket averages:** $(avg_{AUS}, avg_{ENG}, avg_{NZ}, \ldots)$ — a vector in $\mathbb{R}^6$
- **Grocery stock:** $(rice_{kg}, dal_{kg}, oil_{L}, biscuits, soap)$ — a vector in $\mathbb{R}^5$

### Vector Addition

Addition is **coordinate-wise**: add corresponding entries.

$$(x_1, x_2, \ldots, x_n) + (y_1, y_2, \ldots, y_n) = (x_1+y_1, x_2+y_2, \ldots, x_n+y_n)$$

**Example:** $(1.5, -3.3, 7.2) + (-4, 5.8, 10) = (-2.5, 2.5, 17.2)$

### Scalar Multiplication

Multiply **every entry** by the scalar:

$$c \cdot (v_1, v_2, \ldots, v_n) = (cv_1, cv_2, \ldots, cv_n)$$

**Example:** $3 \cdot (2, -1, 4) = (6, -3, 12)$

### Visualization in R² and R³

In $\mathbb{R}^2$, a vector $(a, b)$ is represented as an **arrow from the origin** to the point $(a, b)$.

- **Addition** follows the **parallelogram law**: place vectors head-to-tail
- **Example:** $(1, 2) + (2, 1) = (3, 3)$ — the diagonal of the parallelogram

In $\mathbb{R}^3$, vectors are arrows in 3D space with components along $i, j, k$ axes.

### Beyond R³ (EXPANDED)

For $n \geq 4$, we lose geometric visualization but the algebra works identically:
- $\mathbb{R}^4$: $(1, 0, -2, 3)$ — a 4-component list
- $\mathbb{R}^5$: $(3.2, 1, 0, -1, 7)$ — a 5-component list
- $\mathbb{R}^{100}$: common in data science (100 features per data point)

The arithmetic rules (coordinate-wise addition and scalar multiplication) apply regardless of dimension. This is the power of thinking of vectors as **lists** rather than arrows.

---

## 2. Vector Spaces: The Abstract Framework

### Definition

A **vector space** over $\mathbb{R}$ is a set $V$ with two operations:
1. **Addition:** $V \times V \to V$ (takes two vectors, returns a vector)
2. **Scalar multiplication:** $\mathbb{R} \times V \to V$ (takes a number and a vector, returns a vector)

🧠A **vector space** is a set of objects where you can: 1️⃣ **Add two elements**  2️⃣ **Multiply an element by a scalar (number)** and the result **stays inside the same set**.

satisfying **8 axioms** for all vectors $v, w, v'$ in $V$ and all scalars $a, b$ in $\mathbb{R}$:

| # | Axiom | Name |
|---|-------|------|
| 1 | $v + w = w + v$ | Commutativity of addition |
| 2 | $(v + w) + v' = v + (w + v')$ | Associativity of addition |
| 3 | There exists $0 \in V$ such that $v + 0 = v$ | Existence of zero vector |
| 4 | For each $v$, there exists $-v$ such that $v + (-v) = 0$ | Existence of additive inverse |
| 5 | $1 \cdot v = v$ | Scalar multiplication identity |
| 6 | $(ab)v = a(bv)$ | Compatibility of scalar multiplication |
| 7 | $a(v + w) = av + aw$ | Distributivity over vector addition |
| 8 | $(a + b)v = av + bv$ | Distributivity over scalar addition |

> **ERROR FIX:** In axiom 4, the additive inverse of $v = (v_1, v_2, \ldots, v_n)$ is $-v = (-v_1, -v_2, \ldots, -v_n)$. Note that the last component is $-v_n$ (not $-v_1$ repeated).

### Examples of Vector Spaces

1. **$\mathbb{R}^n$** with standard addition and scalar multiplication — the most familiar example
2. **$M_{m \times n}$** — the set of all m×n matrices with entry-wise addition and scalar multiplication
3. **$P_n$** — the set of all polynomials of degree ≤ n
4. **$C[a,b]$** — the set of all continuous functions on $[a,b]$

### Concrete Axiom-Checking Example (NEW)

**Verify that $M_{2 \times 2}$ (the set of 2×2 matrices) is a vector space:**

Let $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$, $B = \begin{bmatrix} e & f \\ g & h \end{bmatrix}$

1. **Commutativity:** $A + B = B + A$ ✓ (entry-wise addition is commutative)
2. **Associativity:** $(A + B) + C = A + (B + C)$ ✓
3. **Zero vector:** $O = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}$, and $A + O = A$ ✓
4. **Additive inverse:** $-A = \begin{bmatrix} -a & -b \\ -c & -d \end{bmatrix}$, and $A + (-A) = O$ ✓
5. **Scalar identity:** $1 \cdot A = A$ ✓
6. **Compatibility:** $(rs)A = r(sA)$ ✓
7. **Distributivity 1:** $r(A + B) = rA + rB$ ✓
8. **Distributivity 2:** $(r + s)A = rA + sA$ ✓

All 8 axioms satisfied → $M_{2 \times 2}$ is a vector space. ✓

---

## 3. Properties of Vector Spaces

These are **consequences** of the 8 axioms (not additional axioms):

### Cancellation Law
If $v + w = v + w'$, then $w = w'$.

**Proof:** Add $-v$ to both sides:
$$-v + (v + w) = -v + (v + w')$$
$$(-v + v) + w = (-v + v) + w' \quad \text{(associativity)}$$
$$0 + w = 0 + w' \quad \text{(additive inverse)}$$
$$w = w' \quad \text{(identity)} \quad \checkmark$$

### Uniqueness of the Zero Vector
The zero vector is unique.

**Proof:** Suppose $0$ and $0'$ are both zero vectors. Then:
$$0 = 0 + 0' = 0'$$
The first equality uses that $0'$ is a zero vector; the second uses that $0$ is. ✓

### Uniqueness of Additive Inverse
Each vector has exactly one additive inverse.

### $0 \cdot v = 0$ (zero scalar times any vector = zero vector)

**Proof:**
$$0 \cdot v = (0 + 0) \cdot v = 0 \cdot v + 0 \cdot v$$
Add $-(0 \cdot v)$ to both sides:
$$0 = 0 \cdot v \quad \checkmark$$

### $c \cdot 0 = 0$ (any scalar times zero vector = zero vector) (EXPANDED)

**Proof:**
$$c \cdot 0 = c \cdot (0 + 0) = c \cdot 0 + c \cdot 0$$
Add $-(c \cdot 0)$ to both sides:
$$0 = c \cdot 0 \quad \checkmark$$

### $(-c)v = -(cv) = c(-v)$

All three expressions give the same vector. This follows from the axioms by showing each is the additive inverse of $cv$.

---

## 4. Subspaces

A **subspace** W of a vector space V is a subset of V that is itself a vector space under the same operations.

### Subspace Test (Shortcut)

A nonempty subset $W \subseteq V$ is a subspace if and only if:
1. **Closed under addition:** $u, w \in W \implies u + w \in W$
2. **Closed under scalar multiplication:** $w \in W, \; c \in \mathbb{R} \implies cw \in W$

(These two conditions automatically guarantee the zero vector is in W, since $0 \cdot w = 0 \in W$.)

### Important Example: Solution Set of $Ax = 0$ is a Subspace

The set of all solutions to the homogeneous system $Ax = 0$ forms a subspace of $\mathbb{R}^n$.

**Proof:**
- $0$ is a solution (plug in: $A \cdot 0 = 0$) ✓
- If $Au = 0$ and $Av = 0$, then $A(u + v) = Au + Av = 0 + 0 = 0$ ✓
- If $Au = 0$, then $A(cu) = c(Au) = c \cdot 0 = 0$ ✓

This subspace is the **null space** of A (covered in Topic 2).

### Non-Example: Affine Flats

The solution set of $Ax = b$ (with $b \neq 0$) is **not** a subspace, because it does not contain the zero vector. It is called an **affine flat** — a subspace translated away from the origin.

---

## 5. Linear Transformations (NEW)

A **linear transformation** is a function $T: V \to W$ between vector spaces that preserves the vector space structure:

1. $T(u + v) = T(u) + T(v)$ for all $u, v \in V$
2. $T(cu) = cT(u)$ for all $c \in \mathbb{R}$, $u \in V$

Equivalently (combining both): $T(au + bv) = aT(u) + bT(v)$

### Connection to Matrices

Every linear transformation $T: \mathbb{R}^n \to \mathbb{R}^m$ can be represented by an m×n matrix A:

$$T(x) = Ax$$

Conversely, every m×n matrix defines a linear transformation.

**Verification that $T(x) = Ax$ is linear:**
- $T(u + v) = A(u + v) = Au + Av = T(u) + T(v)$ ✓
- $T(cu) = A(cu) = c(Au) = cT(u)$ ✓

### Examples

1. **Rotation by 90°** in $\mathbb{R}^2$: $T(x, y) = (-y, x)$, represented by $\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$

2. **Projection onto x-axis** in $\mathbb{R}^2$: $T(x, y) = (x, 0)$, represented by $\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}$

3. **Scaling by factor 3**: $T(v) = 3v$, represented by $3I$

### Key Properties
- $T(0) = 0$ (linear transformations always map zero to zero)
- The **kernel** of T = $\{v : T(v) = 0\}$ = null space of the matrix
- The **image** (range) of T = $\{T(v) : v \in V\}$ = column space of the matrix

---

## 6. Linear Combinations

A **linear combination** of vectors $v_1, v_2, \ldots, v_k$ is any expression:

$$a_1 v_1 + a_2 v_2 + \cdots + a_k v_k$$

where $a_1, a_2, \ldots, a_k$ are scalars (the **coefficients**).

### Examples in $\mathbb{R}^3$

$2(1, 0, 1) + 3(0, 1, -1) = (2, 3, -1)$

So $(2, 3, -1)$ is a linear combination of $(1, 0, 1)$ and $(0, 1, -1)$.

### Geometric Meaning
- Linear combinations of **one vector** trace out a **line** through the origin
- Linear combinations of **two non-parallel vectors** trace out a **plane** through the origin
- Linear combinations of **three non-coplanar vectors** fill all of $\mathbb{R}^3$

---

## 7. Summary

| Concept | Key Point |
|---|---|
| Vector | A list of numbers $(v_1, \ldots, v_n) \in \mathbb{R}^n$ |
| Addition | Coordinate-wise |
| Scalar multiplication | Multiply every entry |
| Vector space | Set with addition + scalar multiplication satisfying 8 axioms |
| Examples | $\mathbb{R}^n$, matrices, polynomials, continuous functions |
| Key properties | $0 \cdot v = 0$, $c \cdot 0 = 0$, cancellation law |
| Subspace | Subset closed under addition and scalar multiplication |
| $\text{Null}(A)$ | Solution set of $Ax = 0$ — always a subspace |
| Linear transformation | Structure-preserving map; represented by a matrix |
| Linear combination | $a_1v_1 + \cdots + a_kv_k$ |
