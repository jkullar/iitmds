# INDEPENDENCE

## 1. Linear Combinations (Recap)

A **linear combination** of vectors $v_1, v_2, \ldots, v_n$ with **coefficients** $a_1, a_2, \ldots, a_n$ is:

$$a_1 v_1 + a_2 v_2 + \cdots + a_n v_n = \sum_{i=1}^n a_i v_i$$

This produces a new vector by scaling each $v_i$ and adding the results.

### Examples

**In $\mathbb{R}^2$:**
$$3(1, 0) + 2(0, 1) = (3, 2)$$

**In $\mathbb{R}^3$:**
$$2(1, 0, 1) - 1(0, 1, 0) + 4(0, 0, 1) = (2, -1, 4)$$

**In $\mathbb{R}^5$:**
$$0.5(1.5, -3.3, 7.2, 0.5, 1) = (0.75, -1.65, 3.6, 0.25, 0.5)$$

### Geometric Interpretation
- In $\mathbb{R}^2$: linear combinations of two non-parallel vectors cover the **entire plane**
- In $\mathbb{R}^3$: linear combinations of two vectors lie in a **plane through the origin**; three non-coplanar vectors cover all of $\mathbb{R}^3$

---

## 2. Linear Dependence

### Definition
A set of vectors $\{v_1, v_2, \ldots, v_n\}$ is **linearly dependent** if there exist scalars $a_1, a_2, \ldots, a_n$, **not all zero**, such that:

$$a_1 v_1 + a_2 v_2 + \cdots + a_n v_n = 0$$

In other words, the zero vector can be written as a **nontrivial** linear combination.

### Equivalent Characterization
$\{v_1, \ldots, v_n\}$ is linearly dependent **if and only if** at least one vector can be expressed as a linear combination of the others.

**Proof sketch:** If $a_k \neq 0$ in the dependency relation, then:
$$v_k = -\frac{a_1}{a_k}v_1 - \cdots - \frac{a_{k-1}}{a_k}v_{k-1} - \frac{a_{k+1}}{a_k}v_{k+1} - \cdots - \frac{a_n}{a_k}v_n$$

### Example 1: Dependent in $\mathbb{R}^2$
$v_1 = (1, 2)$, $v_2 = (2, 4)$

These are dependent because $v_2 = 2v_1$, so $2v_1 - v_2 = 0$ (with coefficients $2, -1$, not all zero).

### Example 2: Dependent in $\mathbb{R}^3$
$v_1 = (1, 0, 0)$, $v_2 = (0, 1, 0)$, $v_3 = (1, 1, 0)$

Dependent: $v_1 + v_2 - v_3 = 0$. Geometrically, all three vectors lie in the same plane (the xy-plane).

### Key Fact: Supersets of Dependent Sets
If $\{v_1, \ldots, v_n\}$ is linearly dependent, then any **larger set** containing these vectors is also linearly dependent. (Just use the same coefficients and set the extra ones to 0.)

---

## 3. Linear Independence

### Definition
A set of vectors $\{v_1, v_2, \ldots, v_n\}$ is **linearly independent** if the **only** solution to:

$$a_1 v_1 + a_2 v_2 + \cdots + a_n v_n = 0$$

is the **trivial solution** $a_1 = a_2 = \cdots = a_n = 0$.

In other words: **no vector** in the set can be written as a linear combination of the others.

### Quick Tests

| Situation | Conclusion |
|-----------|-----------|
| The zero vector is in the set | Always **dependent** (set its coefficient to 1, rest to 0) |
| Two nonzero vectors | Independent **iff** neither is a scalar multiple of the other |
| Three vectors in $\mathbb{R}^3$ | Independent iff they are **not coplanar** |
| More than m vectors in $\mathbb{R}^m$ | Always **dependent** |

### Example: Independent in $\mathbb{R}^3$

$v_1 = (1, 1, 2)$, $v_2 = (1, 2, 0)$, $v_3 = (0, 2, 1)$

Set up $a v_1 + b v_2 + c v_3 = 0$:
$$a + b = 0$$
$$a + 2b + 2c = 0$$
$$2a + c = 0$$

From equation 1: $a = -b$. Substituting into equation 3: $-2b + c = 0 \implies c = 2b$.
Substituting into equation 2: $-b + 2b + 4b = 5b = 0 \implies b = 0$.

Therefore $a = b = c = 0$. The vectors are **linearly independent**. ✓

---

## 4. The Homogeneous System Method

Checking linear independence of vectors $v_1, \ldots, v_n \in \mathbb{R}^m$ is equivalent to solving a **homogeneous system** $Ax = 0$.

### Procedure

1. Form the matrix A whose **columns** are the vectors: $A = [v_1 \mid v_2 \mid \cdots \mid v_n]$
2. The equation $a_1v_1 + a_2v_2 + \cdots + a_nv_n = 0$ is the same as $Ax = 0$
3. Row reduce A to RREF
4. If the only solution is $x = 0$ → **independent**; if there are free variables → **dependent**

### Example

Are $(1, 0, 2)$, $(0, 1, 1)$, $(1, 1, 3)$ independent?

$$A = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 2 & 1 & 3 \end{bmatrix}$$

Row reduce: $R_3 \to R_3 - 2R_1$:
$$\begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 0 & 1 & 1 \end{bmatrix}$$

$R_3 \to R_3 - R_2$:
$$\begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{bmatrix}$$

Column 3 has no pivot → $a_3$ is a free variable → **dependent**.

Setting $a_3 = 1$: $a_1 = -1$, $a_2 = -1$, confirming $-v_1 - v_2 + v_3 = 0$, i.e., $v_3 = v_1 + v_2$.

---

## 5. The Determinant Test (for Square Systems)

When you have exactly **n vectors in $\mathbb{R}^n$**, form the n×n matrix A with these vectors as columns.

> **CORRECT RULE:** The vectors are **linearly independent** if and only if $\det(A) \neq 0$.

| Determinant | Conclusion |
|-------------|-----------|
| $\det(A) \neq 0$ | **Linearly independent** |
| $\det(A) = 0$ | **Linearly dependent** |

> ⚠️ **CRITICAL NOTE:** A common error is stating this backwards. Remember: $\det(A) = 0$ means dependent (the columns can be combined to give zero). $\det(A) \neq 0$ means independent (the only combination giving zero is the trivial one).

**Why this works:** $\det(A) \neq 0 \iff A$ is invertible $\iff Ax = 0$ has only the trivial solution $\iff$ the columns are independent.

### Example

Are $(1, 2)$ and $(3, 7)$ independent?

$$\det\begin{bmatrix} 1 & 3 \\ 2 & 7 \end{bmatrix} = 7 - 6 = 1 \neq 0$$

Yes, they are **linearly independent**. ✓

### Limitation
The determinant test only works when the number of vectors equals the dimension of the space ($n$ vectors in $\mathbb{R}^n$). For other cases, use row reduction.

---

## 5.5 Clarification: Rows vs Columns in Linear (In)Dependence

This section clarifies a common confusion about what "one row/column being a multiple of another" means.

### Row Multiples → Dependent Equations

When **rows** of a matrix are multiples of each other, the corresponding equations are **redundant** (they describe the same geometric line, not necessarily through the origin).

**Example:**
$$\begin{cases} x + 2y = 3 \\ 2x + 4y = 6 \end{cases}$$

Row 2 $= 2 \times$ Row 1 means the second equation is just $2$ times the first.

Both equations describe the **same line** (shifted away from the origin).

**Meaning:** No new information; dependent equations; rank decreases.

### Column Multiples → Linearly Dependent Vectors

When **columns** of a matrix are multiples of each other, the corresponding vectors are **linearly dependent** (they point in the same direction through the origin).

**Example:**
$$v_1 = \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \quad v_2 = \begin{bmatrix} 2 \\ 4 \end{bmatrix}$$

$v_2 = 2v_1$ means both vectors lie on the **same line through the origin**.

**Meaning:** No new direction added; dependent vectors.

### Key Difference

| Concept | Rows | Columns |
|---------|------|---------|
| Represent | Equations | Vectors/directions |
| Multiple means | Duplicate equation | Same direction (dependent) |
| Line location | Anywhere in space | Must pass through origin |

---

## 6. More Than m Vectors in $\mathbb{R}^m$

**Theorem:** Any set of more than $m$ vectors in $\mathbb{R}^m$ is **linearly dependent**.

**Proof:** Form the m×n matrix $A = [v_1 \mid \cdots \mid v_n]$ with $n > m$. The system $Ax = 0$ has $n$ unknowns and $m$ equations with $n > m$. After row reduction, there are at most $m$ pivots but $n$ variables, so at least $n - m \geq 1$ free variables. Free variables mean nontrivial solutions, so the vectors are dependent.

**Consequences:**
- 4 or more vectors in $\mathbb{R}^3$ are always dependent
- 3 or more vectors in $\mathbb{R}^2$ are always dependent
- In $\mathbb{R}^n$, you can have **at most n** linearly independent vectors

---

## 7. Column Space (NEW)

### Definition
The **column space** of a matrix A (denoted $\text{Col}(A)$ or $C(A)$) is the set of all possible linear combinations of the columns of A:

$$\text{Col}(A) = \{Ax \mid x \in \mathbb{R}^n\} = \text{span of columns of A}$$

### Why It Matters

The column space answers the question: **for which vectors b does $Ax = b$ have a solution?**

$Ax = b$ has a solution **if and only if** $b \in \text{Col}(A)$.

This is because $Ax = x_1(\text{col}_1) + x_2(\text{col}_2) + \cdots + x_n(\text{col}_n)$, so $Ax = b$ asks: "is b a linear combination of the columns of A?"

### Finding the Column Space

1. Row reduce A to RREF
2. Identify the **pivot columns** (columns containing leading 1s)
3. The corresponding columns **of the original matrix A** form a basis for $\text{Col}(A)$

**Important:** Use the columns of A, not the columns of the RREF! Row reduction changes the column space but preserves which columns are independent.

### Example

$$A = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 2 & 1 & 3 \end{bmatrix} \xrightarrow{\text{RREF}} \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{bmatrix}$$

Pivots in columns 1 and 2. So $\text{Col}(A)$ is spanned by columns 1 and 2 of the **original** A:

$$\text{Col}(A) = \text{span}\left\{\begin{bmatrix}1\\0\\2\end{bmatrix}, \begin{bmatrix}0\\1\\1\end{bmatrix}\right\}$$

Column 3 $(1, 1, 3)^T$ is a linear combination of the first two: $(1,0,2)^T + (0,1,1)^T = (1,1,3)^T$.

### Relationship to Other Concepts

| Concept | Definition | Question it answers |
|---------|-----------|-------------------|
| Column space | $\{Ax : x \in \mathbb{R}^n\}$ | For which b does $Ax = b$ have a solution? |
| Null space | $\{x : Ax = 0\}$ | What are the solutions to $Ax = 0$? |

---

## 8. Summary

| Concept | Key Point |
|---|---|
| Linear combination | $a_1v_1 + \cdots + a_nv_n$ |
| Linearly dependent | Nontrivial combination gives zero; some vector is a combo of others |
| Linearly independent | Only trivial combination gives zero |
| Zero vector in set | Always dependent |
| Homogeneous system test | Form $A = [v_1 \cdots v_n]$, solve $Ax = 0$ |
| Determinant test | n vectors in $\mathbb{R}^n$: independent iff $\det \neq 0$ |
| >m vectors in $\mathbb{R}^m$ | Always dependent |
| Column space $\text{Col}(A)$ | All possible $Ax$; determines solvability of $Ax = b$ |
| Pivot columns of A | Form a basis for $\text{Col}(A)$ |
