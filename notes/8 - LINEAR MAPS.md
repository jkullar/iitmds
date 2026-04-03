# LINEAR MAPS AND NULL SPACE

This file develops two deeply connected ideas in linear algebra. First, we study the **null space** of a matrix — the set of all solutions to the homogeneous system $Ax = 0$ — and learn how to compute its dimension (the **nullity**) and a basis using row reduction. Second, we define **linear mappings** and **linear transformations**, functions that preserve the vector space operations of addition and scalar multiplication. The connection between these topics is profound: the null space is the key to understanding when a linear transformation is injective, and the **rank–nullity theorem** ties together the column space and null space into a single elegant equation. Prerequisites include familiarity with row reduction ([[2 - SOLVING SYSTEMS]]), vector spaces and subspaces ([[5 - VECTORS AND SPACES]]), and bases, dimension, and rank ([[7 - BASIS AND RANK]]).

---

## 1. The Null Space of a Matrix

### Definition

Let $A$ be an $m \times n$ matrix with real entries. The **null space** (also called the **kernel**) of $A$ is the set

$$\text{null}(A) = \{ \mathbf{x} \in \mathbb{R}^n : A\mathbf{x} = \mathbf{0} \}.$$

Equivalently, $\text{null}(A)$ is the **solution space** of the homogeneous system of linear equations $A\mathbf{x} = \mathbf{0}$.

Key observations:

- The null space lives in $\mathbb{R}^n$ (the domain space), **not** in $\mathbb{R}^m$.
- The zero vector $\mathbf{0} \in \mathbb{R}^n$ always belongs to $\text{null}(A)$, so the null space is never empty.
- The word "null" refers to the zero vector: we seek vectors $\mathbf{x}$ that $A$ sends to $\mathbf{0}$.

### The Null Space Is a Subspace

**Theorem.** For any $m \times n$ matrix $A$, the set $\text{null}(A)$ is a subspace of $\mathbb{R}^n$.

*Proof sketch.* We verify the two subspace conditions (see [[5 - VECTORS AND SPACES]] for the subspace test):

1. **Closure under addition.** Suppose $\mathbf{x}, \mathbf{y} \in \text{null}(A)$. Then $A\mathbf{x} = \mathbf{0}$ and $A\mathbf{y} = \mathbf{0}$. By distributivity of matrix multiplication over addition,
$$A(\mathbf{x} + \mathbf{y}) = A\mathbf{x} + A\mathbf{y} = \mathbf{0} + \mathbf{0} = \mathbf{0}.$$
Hence $\mathbf{x} + \mathbf{y} \in \text{null}(A)$.

2. **Closure under scalar multiplication.** Suppose $\mathbf{x} \in \text{null}(A)$ and $\lambda \in \mathbb{R}$. Then
$$A(\lambda \mathbf{x}) = \lambda (A\mathbf{x}) = \lambda \mathbf{0} = \mathbf{0}.$$
Hence $\lambda \mathbf{x} \in \text{null}(A)$.

Since $\text{null}(A)$ is a subspace, it is a vector space in its own right, and we may speak of its dimension and basis. $\blacksquare$

### Nullity

The **nullity** of $A$ is the dimension of the null space:

$$\text{nullity}(A) = \dim(\text{null}(A)).$$

> **Clarification:** Nullity counts the number of "degrees of freedom" in the solution set of $A\mathbf{x} = \mathbf{0}$. A nullity of $0$ means the only solution is $\mathbf{x} = \mathbf{0}$ (the trivial solution). A nullity of $k > 0$ means the solution set is a $k$-dimensional subspace of $\mathbb{R}^n$.

---

## 2. Finding the Null Space via Row Reduction

### The Algorithm

To find $\text{null}(A)$, its nullity, and a basis, follow these steps:

**Step 1.** Row reduce $A$ to its reduced row echelon form (RREF) $R$. Since the system is homogeneous, the augmented column of zeros never changes during row reduction, so we may work with $A$ alone and remember that we are solving $R\mathbf{x} = \mathbf{0}$.

**Step 2.** Identify pivot and free variables:
- If column $i$ contains a leading 1 (pivot) of some row of $R$, then $x_i$ is a **dependent (pivot) variable**.
- If column $i$ does **not** contain a leading 1, then $x_i$ is an **independent (free) variable**.

**Step 3.** The nullity equals the number of free variables:

$$\text{nullity}(A) = \text{number of free variables} = n - \text{number of pivots}.$$

**Step 4.** Express each dependent variable in terms of the free variables using the equations from $R\mathbf{x} = \mathbf{0}$.

**Step 5.** Assign parameters $t_1, t_2, \ldots, t_k$ to the free variables (where $k = \text{nullity}(A)$). Write the general solution as a vector depending on these parameters.

**Step 6.** To obtain a **basis** for $\text{null}(A)$: for each $i \in \{1, 2, \ldots, k\}$, set $t_i = 1$ and all other $t_j = 0$. The resulting $k$ vectors form a basis for $\text{null}(A)$.

> **Clarification:** Why does Step 6 produce linearly independent vectors? Each basis vector has a 1 in the position corresponding to one particular free variable and 0 in the positions of all other free variables. Because these 1's appear in different positions across the $k$ vectors, no vector in the set can be written as a linear combination of the others.

### Example 1: A $3 \times 3$ Matrix

**Example:** Find the nullity and a basis for the null space of

$$A = \begin{bmatrix} 1 & 1 & 1 \\ 2 & 2 & 2 \\ 3 & 3 & 3 \end{bmatrix}.$$

**Solution:**

**Step 1 — Row reduce.** Subtract $2R_1$ from $R_2$ and $3R_1$ from $R_3$:

$$A \xrightarrow{R_2 - 2R_1,\; R_3 - 3R_1} \begin{bmatrix} 1 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} = R.$$

This is already in RREF.

**Step 2 — Identify variables.** The only pivot is in column 1. So:
- Dependent variable: $x_1$.
- Free (independent) variables: $x_2$, $x_3$.

**Step 3 — Nullity.** $\text{nullity}(A) = 2$ (two free variables).

**Step 4 — Solve.** The equation from $R$ is:

$$x_1 + x_2 + x_3 = 0 \implies x_1 = -x_2 - x_3.$$

**Step 5 — General solution.** Set $x_2 = t_1$, $x_3 = t_2$:

$$\mathbf{x} = \begin{bmatrix} -t_1 - t_2 \\ t_1 \\ t_2 \end{bmatrix} = t_1 \begin{bmatrix} -1 \\ 1 \\ 0 \end{bmatrix} + t_2 \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix}, \quad t_1, t_2 \in \mathbb{R}.$$

**Step 6 — Basis.** Setting $(t_1, t_2) = (1, 0)$ and $(t_1, t_2) = (0, 1)$:

$$\text{Basis for } \text{null}(A) = \left\{ \begin{bmatrix} -1 \\ 1 \\ 0 \end{bmatrix},\; \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix} \right\}.$$

**Verification.** Any vector in the null space has the form $(-t_1 - t_2,\; t_1,\; t_2)^T$, which is clearly $t_1$ times the first basis vector plus $t_2$ times the second. The two basis vectors are linearly independent (neither is a scalar multiple of the other). Moreover, one can verify directly:

$$A \begin{bmatrix} -1 \\ 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}, \qquad A \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}.$$

**Geometric interpretation.** The null space is the plane $x_1 + x_2 + x_3 = 0$ passing through the origin in $\mathbb{R}^3$.

### Example 2: A $3 \times 4$ Matrix

**Example:** Find the nullity and a basis for the null space of

$$A = \begin{bmatrix} 1 & 2 & 0 & 3 \\ 2 & 3 & 0 & 3 \\ 1 & 1 & 1 & 2 \end{bmatrix}.$$

**Solution:**

**Step 1 — Row reduce.** We perform the following sequence of row operations:

$$\begin{bmatrix} 1 & 2 & 0 & 3 \\ 2 & 3 & 0 & 3 \\ 1 & 1 & 1 & 2 \end{bmatrix} \xrightarrow{R_2 - 2R_1,\; R_3 - R_1} \begin{bmatrix} 1 & 2 & 0 & 3 \\ 0 & -1 & 0 & -3 \\ 0 & -1 & 1 & -1 \end{bmatrix}$$

$$\xrightarrow{-R_2} \begin{bmatrix} 1 & 2 & 0 & 3 \\ 0 & 1 & 0 & 3 \\ 0 & -1 & 1 & -1 \end{bmatrix} \xrightarrow{R_3 + R_2} \begin{bmatrix} 1 & 2 & 0 & 3 \\ 0 & 1 & 0 & 3 \\ 0 & 0 & 1 & 2 \end{bmatrix}$$

$$\xrightarrow{R_1 - 2R_2} \begin{bmatrix} 1 & 0 & 0 & -3 \\ 0 & 1 & 0 & 3 \\ 0 & 0 & 1 & 2 \end{bmatrix} = R.$$

**Step 2 — Identify variables.** Pivots are in columns 1, 2, 3.
- Dependent variables: $x_1, x_2, x_3$.
- Free variable: $x_4$.

**Step 3 — Nullity.** $\text{nullity}(A) = 1$.

**Step 4 — Solve.** The equations from $R\mathbf{x} = \mathbf{0}$ are:

$$\begin{cases} x_1 - 3x_4 = 0 \\ x_2 + 3x_4 = 0 \\ x_3 + 2x_4 = 0 \end{cases} \implies \begin{cases} x_1 = 3x_4 \\ x_2 = -3x_4 \\ x_3 = -2x_4 \end{cases}$$

**Step 5 — General solution.** Set $x_4 = t$:

$$\mathbf{x} = \begin{bmatrix} 3t \\ -3t \\ -2t \\ t \end{bmatrix} = t \begin{bmatrix} 3 \\ -3 \\ -2 \\ 1 \end{bmatrix}, \quad t \in \mathbb{R}.$$

**Step 6 — Basis.** Setting $t = 1$:

$$\text{Basis for } \text{null}(A) = \left\{ \begin{bmatrix} 3 \\ -3 \\ -2 \\ 1 \end{bmatrix} \right\}.$$

**Verification.** Multiply $A$ by the basis vector:

$$\begin{bmatrix} 1 & 2 & 0 & 3 \\ 2 & 3 & 0 & 3 \\ 1 & 1 & 1 & 2 \end{bmatrix} \begin{bmatrix} 3 \\ -3 \\ -2 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 - 6 + 0 + 3 \\ 6 - 9 + 0 + 3 \\ 3 - 3 - 2 + 2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}. \checkmark$$

**Geometric interpretation.** The null space is a line through the origin in $\mathbb{R}^4$.

> **Clarification:** Any nonzero scalar multiple of the basis vector (e.g., $(15, -15, -10, 5)^T$ or $(300, -300, -200, 100)^T$) could equally serve as a basis vector. The convention of setting $t = 1$ simply produces the simplest representative.

---

## 3. The Rank–Nullity Theorem

### Statement

**Theorem (Rank–Nullity Theorem).** Let $A$ be an $m \times n$ matrix. Then

$$\text{rank}(A) + \text{nullity}(A) = n$$

where $n$ is the number of columns of $A$.

Equivalently, since $\text{rank}(A) = \dim(\text{col}(A)) = \dim(\text{row}(A))$ (see [[7 - BASIS AND RANK]]):

$$\dim(\text{col}(A)) + \dim(\text{null}(A)) = n.$$

### Why It Is True

Row reduce $A$ to its row echelon form $R$. Each column of $R$ either:
- contains a pivot (leading 1) — corresponding to a **dependent variable**, or
- does not contain a pivot — corresponding to a **free variable**.

Every column falls into exactly one of these two categories. Therefore:

$$\underbrace{\text{number of pivots}}_{\text{rank}(A)} + \underbrace{\text{number of free variables}}_{\text{nullity}(A)} = \underbrace{\text{total number of columns}}_{n}.$$

The number of pivots equals the number of nonzero rows of $R$, which equals $\text{rank}(A)$ (see [[7 - BASIS AND RANK]]). The number of free variables equals $\text{nullity}(A)$ as established in Section 2.

### Examples

| Matrix | Size | Rank | Nullity | Check: $\text{rank} + \text{nullity} = n$ |
|--------|------|------|---------|--------------------------------------------|
| Example 1 above | $3 \times 3$ | $1$ | $2$ | $1 + 2 = 3$ ✓ |
| Example 2 above | $3 \times 4$ | $3$ | $1$ | $3 + 1 = 4$ ✓ |
| $I_n$ (identity) | $n \times n$ | $n$ | $0$ | $n + 0 = n$ ✓ |
| Zero matrix $O_{m \times n}$ | $m \times n$ | $0$ | $n$ | $0 + n = n$ ✓ |

### Consequences

1. **Full column rank and trivial null space.** If $A$ is $m \times n$ with $\text{rank}(A) = n$, then $\text{nullity}(A) = 0$, meaning $A\mathbf{x} = \mathbf{0}$ has only the trivial solution.

2. **Square invertible matrices.** If $A$ is $n \times n$ and invertible, then $\text{rank}(A) = n$ and $\text{nullity}(A) = 0$.

3. **Underdetermined systems always have nontrivial null vectors.** If $A$ is $m \times n$ with $m < n$ (more unknowns than equations), then $\text{rank}(A) \le m < n$, so $\text{nullity}(A) \ge n - m > 0$. The homogeneous system $A\mathbf{x} = \mathbf{0}$ always has a nonzero solution.

4. **Dimension bound for null space.** $\text{nullity}(A) \le n$, with equality if and only if $A = O$ (the zero matrix).

A deeper treatment of rank and its computation appears in [[7 - BASIS AND RANK]].

---

## 4. Using Determinants to Check if Vectors Form a Basis

When testing whether $n$ vectors in $\mathbb{R}^n$ form a basis, we can use determinants as a shortcut.

### The Method

Given $n$ vectors $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n \in \mathbb{R}^n$:

1. Form the $n \times n$ matrix $A$ whose columns are $\mathbf{v}_1, \ldots, \mathbf{v}_n$.
2. Compute $\det(A)$.
3. **If $\det(A) \neq 0$:** the vectors form a basis for $\mathbb{R}^n$.
4. **If $\det(A) = 0$:** the vectors do **not** form a basis.

**Why this works:**
- $\det(A) \neq 0$ $\iff$ $A$ is invertible $\iff$ $\text{rank}(A) = n$ $\iff$ $\text{nullity}(A) = 0$ $\iff$ the columns are linearly independent.
- $n$ linearly independent vectors in $\mathbb{R}^n$ automatically span $\mathbb{R}^n$ (since $\dim(\mathbb{R}^n) = n$), hence they form a basis.

> **Clarification:** This determinant test works **only** when you have exactly $n$ vectors in $\mathbb{R}^n$. If the number of vectors differs from $n$, the matrix is not square, and you must use other methods (e.g., row reduction).

### Example 3: Basis Check in $\mathbb{R}^3$

**Example:** Do the vectors $(1, 2, 3)^T$, $(0, 1, 2)^T$, $(1, 3, 0)^T$ form a basis for $\mathbb{R}^3$?

**Solution:** Form the matrix and compute its determinant:

$$A = \begin{bmatrix} 1 & 0 & 1 \\ 2 & 1 & 3 \\ 3 & 2 & 0 \end{bmatrix}.$$

Expanding along the first row:

$$\det(A) = 1 \cdot \det\begin{bmatrix} 1 & 3 \\ 2 & 0 \end{bmatrix} - 0 \cdot \det\begin{bmatrix} 2 & 3 \\ 3 & 0 \end{bmatrix} + 1 \cdot \det\begin{bmatrix} 2 & 1 \\ 3 & 2 \end{bmatrix}$$

$$= 1(0 - 6) - 0 + 1(4 - 3) = -6 + 1 = -5 \neq 0.$$

Since $\det(A) \neq 0$, these vectors **do** form a basis for $\mathbb{R}^3$.

**Why spanning follows from independence.** Given any $\mathbf{b} \in \mathbb{R}^3$, we need scalars $a_1, a_2, a_3$ such that $a_1 \mathbf{v}_1 + a_2 \mathbf{v}_2 + a_3 \mathbf{v}_3 = \mathbf{b}$, i.e., $A\mathbf{a} = \mathbf{b}$. Since $\det(A) \neq 0$, the matrix $A$ is invertible, so $\mathbf{a} = A^{-1}\mathbf{b}$ exists and is unique. Hence the vectors span $\mathbb{R}^3$.

### Example 4: Non-Basis in $\mathbb{R}^4$

**Example:** Do the vectors $(1,2,3,0)^T$, $(0,1,2,1)^T$, $(1,3,0,2)^T$, $(2,6,5,3)^T$ form a basis for $\mathbb{R}^4$?

**Solution:** Form the $4 \times 4$ matrix and compute:

$$A = \begin{bmatrix} 1 & 0 & 1 & 2 \\ 2 & 1 & 3 & 6 \\ 3 & 2 & 0 & 5 \\ 0 & 1 & 2 & 3 \end{bmatrix}.$$

Expanding along the first row:

$$\det(A) = 1 \cdot M_{11} - 0 \cdot M_{12} + 1 \cdot M_{13} - 2 \cdot M_{14}$$

where each $M_{1j}$ is the corresponding $3 \times 3$ minor. Computing:
- $M_{11} = 11$
- $M_{13} = 11$
- $M_{14} = 11$

$$\det(A) = 1(11) + 1(11) - 2(11) = 11 + 11 - 22 = 0.$$

Since $\det(A) = 0$, these vectors do **not** form a basis for $\mathbb{R}^4$.

---

## 5. Linear Mappings

### Motivation

Consider a grocery shop with prices $p_1 = 45$, $p_2 = 125$, $p_3 = 150$ (rupees per unit for rice, dal, and oil). The cost of buying $x_1$ units of rice, $x_2$ units of dal, and $x_3$ units of oil is

$$c_A(x_1, x_2, x_3) = 45x_1 + 125x_2 + 150x_3.$$

This is a **linear combination** of the quantities $x_1, x_2, x_3$ — no powers, products of variables, logarithms, or other nonlinear terms appear. Such a function is called a **linear function**, and it can be written as matrix multiplication:

$$c_A(\mathbf{x}) = \begin{bmatrix} 45 & 125 & 150 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix}.$$

If we have three shops $A$, $B$, $C$ with different prices, we can combine their cost functions into a single vector-valued function:

$$C(\mathbf{x}) = \begin{bmatrix} c_A(\mathbf{x}) \\ c_B(\mathbf{x}) \\ c_C(\mathbf{x}) \end{bmatrix} = \begin{bmatrix} 45 & 125 & 150 \\ 40 & 120 & 170 \\ 50 & 130 & 160 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix}.$$

This is a function $C : \mathbb{R}^3 \to \mathbb{R}^3$, and it is an example of a **linear mapping**.

### The Linearity Property

The key property that makes such cost functions useful is **linearity**. Concretely, if on Monday the demand is $\mathbf{x} = (20, 10, 4)^T$ and on Tuesday it is $\mathbf{y} = (40, 12, 2)^T$, and on Wednesday we need $\frac{1}{2}\mathbf{x} + \frac{5}{4}\mathbf{y}$, then:

$$C\!\left(\tfrac{1}{2}\mathbf{x} + \tfrac{5}{4}\mathbf{y}\right) = \tfrac{1}{2}\, C(\mathbf{x}) + \tfrac{5}{4}\, C(\mathbf{y}).$$

We can compute Wednesday's cost from Monday's and Tuesday's costs without recalculating from scratch. This is precisely what linearity means.

### Definition of a Linear Mapping

A **linear mapping** (or **linear map**) $f : \mathbb{R}^n \to \mathbb{R}^m$ is a function of the form

$$f(x_1, x_2, \ldots, x_n) = \begin{pmatrix} a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n \\ a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n \\ \vdots \\ a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n \end{pmatrix}$$

where $a_{ij} \in \mathbb{R}$. Each coordinate of the output is a **linear combination** of the input variables.

In matrix form:

$$f(\mathbf{x}) = A\mathbf{x}, \qquad A = \begin{bmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{bmatrix}.$$

> **Clarification: Expressions vs. Equations.** The formula $45x_1 + 125x_2 + 150x_3$ is an **expression** (it defines a function). It becomes an **equation** only when set equal to something, e.g., $45x_1 + 125x_2 + 150x_3 = 500$.

### Non-Examples

The following functions are **not** linear mappings:
- $f(x) = x^2$ (contains a power of $x$)
- $f(x) = \log(x)$ (logarithm is not a linear combination)
- $f(x) = e^x$ (exponential function)
- $f(x, y) = xy$ (product of variables, not a linear combination)
- $f(x) = x + 1$ (the constant term $1$ violates linearity; $f(0) \neq 0$)

---

## 6. Linear Transformations

### Definition

Linear mappings are defined between $\mathbb{R}^n$ and $\mathbb{R}^m$. To work with arbitrary vector spaces, we generalize to **linear transformations**.

A function $f : V \to W$ between vector spaces $V$ and $W$ (over $\mathbb{R}$) is called a **linear transformation** if for all $\mathbf{v}_1, \mathbf{v}_2 \in V$ and all $c \in \mathbb{R}$:

1. **Preservation of addition:** $f(\mathbf{v}_1 + \mathbf{v}_2) = f(\mathbf{v}_1) + f(\mathbf{v}_2)$
2. **Preservation of scalar multiplication:** $f(c\,\mathbf{v}_1) = c\,f(\mathbf{v}_1)$

### Equivalent Single-Condition Form

Conditions (1) and (2) are equivalent to the single condition:

$$f(\mathbf{v}_1 + c\,\mathbf{v}_2) = f(\mathbf{v}_1) + c\,f(\mathbf{v}_2) \quad \text{for all } \mathbf{v}_1, \mathbf{v}_2 \in V,\; c \in \mathbb{R}.$$

*Proof of equivalence:*

- **(1) + (2) $\Rightarrow$ single condition:** Treat $c\,\mathbf{v}_2$ as a single vector and apply (1), then use (2) on the second term.
- **Single condition $\Rightarrow$ (1):** Set $c = 1$.
- **Single condition $\Rightarrow$ (2):** Set $\mathbf{v}_1 = \mathbf{0}$ and rename $\mathbf{v}_2$ as $\mathbf{v}_1$.

More generally, linearity extends to arbitrary finite linear combinations:

$$f\!\left(\sum_{i=1}^k c_i \mathbf{v}_i\right) = \sum_{i=1}^k c_i\, f(\mathbf{v}_i).$$

This is proved by applying conditions (1) and (2) repeatedly.

### Every Linear Mapping Is a Linear Transformation

Since we showed in Section 5 that linear mappings (functions of the form $f(\mathbf{x}) = A\mathbf{x}$) satisfy the linearity conditions — using properties of matrix multiplication (distributivity and scalar factoring) — every linear mapping is a linear transformation. Conversely, every linear transformation $T : \mathbb{R}^n \to \mathbb{R}^m$ can be represented as $T(\mathbf{x}) = A\mathbf{x}$ for some matrix $A$ (this is shown in Section 8).

### Basic Properties of Linear Transformations

**Proposition.** Let $f : V \to W$ be a linear transformation. Then:

(a) $f(\mathbf{0}_V) = \mathbf{0}_W$.

(b) $f(-\mathbf{v}) = -f(\mathbf{v})$ for all $\mathbf{v} \in V$.

*Proof of (a):* $f(\mathbf{0}) = f(\mathbf{0} + \mathbf{0}) = f(\mathbf{0}) + f(\mathbf{0})$. Subtracting $f(\mathbf{