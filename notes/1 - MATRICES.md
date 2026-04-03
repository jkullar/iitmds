# MATRICES

## 1. What is a Matrix?

A **matrix** is a rectangular array of numbers arranged in **rows** and **columns**.

**Example:**
$$A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 3 & 4 \end{bmatrix}$$

This is a **2 × 3 matrix** — 2 rows, 3 columns.

**General notation:** An **m × n matrix** has m rows and n columns.

**Entry notation:** The **ij-th entry** of matrix A (written $a_{ij}$) is the entry in the **i-th row** and **j-th column**.

**Example:** For the matrix above:
- $a_{12} = 2$ (row 1, column 2)
- $a_{23} = 4$ (row 2, column 3)

---

## 2. Column Matrices and Row Matrices

Matrices with only one column or one row are common special cases:

A **column matrix** is an $n \times 1$ matrix (a single column of entries):

$$x = \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} \quad (3 \times 1 \text{ matrix})$$

A **row matrix** is a $1 \times n$ matrix (a single row of entries):

$$y = \begin{bmatrix} y_1 & y_2 & y_3 \end{bmatrix} \quad (1 \times 3 \text{ matrix})$$

**Relationship:** Transposing a column matrix gives a row matrix, and vice versa:

$$x^T = \begin{bmatrix} x_1 & x_2 & x_3 \end{bmatrix}$$

When solving systems $Ax = b$, both $x$ and $b$ are column matrices.

> **Note:** Column matrices and row matrices are also called **column vectors** and **row vectors** — the connection to the formal concept of vectors is developed in [[5 - VECTORS AND SPACES]].

---

## 3. Special Types of Matrices

### Square Matrix
A matrix where the **number of rows equals the number of columns** (n × n).

$$A = \begin{bmatrix} 2 & 1 & 0 \\ 3 & 5 & 1 \\ 4 & 7 & 3 \end{bmatrix} \quad \text{(3 × 3 square matrix)}$$

The **diagonal entries** of a square matrix are the entries $a_{ii}$ (same row and column index): $a_{11}, a_{22}, a_{33}, \ldots$

### Diagonal Matrix
A square matrix where **all non-diagonal entries are zero**.

$$D = \begin{bmatrix} 1 & 0 & 0 \\ 0 & -3 & 0 \\ 0 & 0 & 4.2 \end{bmatrix}$$

### Scalar Matrix
A diagonal matrix where **all diagonal entries are equal**.

$$S = \begin{bmatrix} -3 & 0 & 0 \\ 0 & -3 & 0 \\ 0 & 0 & -3 \end{bmatrix}$$

A scalar matrix behaves like multiplication by that scalar (here, −3).

### Identity Matrix
A scalar matrix where **all diagonal entries are 1**. Denoted by **I** (or $I_n$ for size n).

$$I_3 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}, \qquad I_4 = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

**Key property:** $IA = AI = A$ for any compatible matrix A. The identity matrix acts like the number 1.

### Zero Matrix
A matrix where **all entries are 0**. Denoted by **O** (or $O_{m \times n}$).

**Key property:** $A + O = O + A = A$ for any matrix A of the same size.

### Upper Triangular Matrix
A square matrix where all entries **below** the diagonal are zero: $a_{ij} = 0$ when $i > j$.

$$U = \begin{bmatrix} 2 & 4 & 3 \\ 0 & 8 & 7 \\ 0 & 0 & 9 \end{bmatrix}$$

### Lower Triangular Matrix
A square matrix where all entries **above** the diagonal are zero: $a_{ij} = 0$ when $i < j$.

$$L = \begin{bmatrix} 5 & 0 & 0 \\ 3 & 2 & 0 \\ 1 & 4 & 7 \end{bmatrix}$$

---

## 4. Matrix Addition

Two matrices can be added **only if they have the same dimensions**. Addition is done **entry-wise**.

$$(A + B)_{ij} = a_{ij} + b_{ij}$$

**Example:**
$$\begin{bmatrix} 1 & 2 \\ 5 & 7 \\ 3 & 4 \end{bmatrix} + \begin{bmatrix} 0 & 3 \\ 1 & -7 \\ 2 & 5 \end{bmatrix} = \begin{bmatrix} 1 & 5 \\ 6 & 0 \\ 5 & 9 \end{bmatrix}$$

**Example with fractions:**
$$\begin{bmatrix} \frac{1}{2} & -\frac{3}{4} & 3 \end{bmatrix} + \begin{bmatrix} 2 & -3 & -1 \end{bmatrix} = \begin{bmatrix} \frac{5}{2} & -\frac{15}{4} & 2 \end{bmatrix}$$

---

## 5. Scalar Multiplication

To multiply a matrix by a scalar (number), **multiply every entry** by that scalar.

$$(cA)_{ij} = c \cdot a_{ij}$$

**Example:**
$$3 \times \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix} = \begin{bmatrix} 3 & 6 & 9 \\ 12 & 15 & 18 \end{bmatrix}$$

**Connection to scalar matrices:** Scalar multiplication by c is the same as matrix multiplication by the scalar matrix $cI$:
$$cA = (cI)A$$

---

## 6. Matrix Multiplication

### The Rule
For matrices A (size m × n) and B (size n × p), the product AB has size **m × p**.

**Critical requirement:** The number of **columns of A** must equal the number of **rows of B**.

$$(AB)_{ij} = \sum_{k=1}^{n} a_{ik} \cdot b_{kj}$$

In words: to find entry $(i,j)$ of AB, take the **i-th row of A** and the **j-th column of B**, multiply corresponding entries, and **add** them.

### Example 1: (2×2) × (2×3)
$$\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \begin{bmatrix} 1 & 2 & 3 \\ 3 & 4 & 5 \end{bmatrix} = \begin{bmatrix} 7 & 10 & 13 \\ 15 & 22 & 29 \end{bmatrix}$$

**How to get 7 (position 1,1):** Row 1 of A = [1, 2], Column 1 of B = [1, 3]
$$1 \times 1 + 2 \times 3 = 1 + 6 = 7$$

**How to get 22 (position 2,2):** Row 2 of A = [3, 4], Column 2 of B = [2, 4]
$$3 \times 2 + 4 \times 4 = 6 + 16 = 22$$

### Example 2: (2×2) × (2×1)
$$\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \begin{bmatrix} 5 \\ 6 \end{bmatrix} = \begin{bmatrix} 17 \\ 39 \end{bmatrix}$$

- $1 \times 5 + 2 \times 6 = 17$
- $3 \times 5 + 4 \times 6 = 39$

### Example 3: (1×3) × (3×2)
$$\begin{bmatrix} 1 & 2 & 3 \end{bmatrix} \begin{bmatrix} 2 & 0.8 \\ 5 & 0.7 \\ 0.5 & -2 \end{bmatrix} = \begin{bmatrix} 13.5 & -3.8 \end{bmatrix}$$

---

## 7. Matrix Transpose (NEW)

### Definition
The **transpose** of an m × n matrix A, denoted $A^T$, is the **n × m matrix** obtained by flipping rows and columns:

$$(A^T)_{ij} = a_{ji}$$

The i-th row of A becomes the i-th column of $A^T$.

### Example
$$A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix} \implies A^T = \begin{bmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{bmatrix}$$

For a square matrix:
$$A = \begin{bmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{bmatrix} \implies A^T = \begin{bmatrix} a_{11} & a_{21} & a_{31} \\ a_{12} & a_{22} & a_{32} \\ a_{13} & a_{23} & a_{33} \end{bmatrix}$$

The diagonal stays the same; entries **reflect about the diagonal**.

### Properties of Transpose
1. $(A^T)^T = A$ — transposing twice gives back the original
2. $(A + B)^T = A^T + B^T$ — transpose distributes over addition
3. $(cA)^T = cA^T$ — scalars pass through transpose
4. $(AB)^T = B^T A^T$ — **order reverses** for products
5. $\det(A^T) = \det(A)$ — transpose does not change determinant

### Symmetric and Skew-Symmetric Matrices
- A matrix is **symmetric** if $A^T = A$ (i.e., $a_{ij} = a_{ji}$ for all i, j)
- A matrix is **skew-symmetric** if $A^T = -A$ (i.e., $a_{ij} = -a_{ji}$, diagonal must be 0)

**Example (symmetric):**
$$\begin{bmatrix} 1 & 3 & 5 \\ 3 & 2 & 4 \\ 5 & 4 & 7 \end{bmatrix}$$

---

## 8. Elementary Matrices (NEW)

An **elementary matrix** is a matrix obtained by performing **one elementary row operation** on the identity matrix.

There are three types, matching the three elementary row operations:

### Type 1: Row Interchange
Swap two rows of I.

**Example:** Swapping rows 1 and 2 of $I_3$:
$$E_1 = \begin{bmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

Multiplying $E_1 A$ swaps rows 1 and 2 of A.

### Type 2: Row Scaling
Multiply one row of I by a nonzero scalar.

**Example:** Multiplying row 2 of $I_3$ by 5:
$$E_2 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 5 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

Multiplying $E_2 A$ multiplies row 2 of A by 5.

### Type 3: Row Addition
Add a multiple of one row to another in I.

**Example:** Adding 3 times row 2 to row 1 of $I_3$:
$$E_3 = \begin{bmatrix} 1 & 3 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

Multiplying $E_3 A$ replaces row 1 of A with (row 1 + 3 × row 2).

### Why Elementary Matrices Matter
1. Every elementary matrix is **invertible** (its inverse is another elementary matrix)
2. Any invertible matrix can be written as a **product of elementary matrices**
3. Row reduction is equivalent to **left-multiplying by a sequence of elementary matrices**:

$$E_k \cdots E_2 E_1 A = R \quad \text{(reduced form)}$$

This means: $A = E_1^{-1} E_2^{-1} \cdots E_k^{-1} R$

---

## 9. Minors, Cofactors, and the Adjugate Matrix

These matrix constructions are closely tied to determinants (see [[3 - DETERMINANTS]] and [[4 - APPLYING DETERMINANTS]] for full details), but they are fundamentally matrix definitions.

### Minor

The **minor** $M_{ij}$ of an $n \times n$ matrix $A$ is the **determinant** of the $(n-1) \times (n-1)$ matrix obtained by **deleting row $i$ and column $j$** from $A$.

**Example:** For $A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{bmatrix}$:

$$M_{12} = \det\begin{bmatrix} 4 & 6 \\ 7 & 9 \end{bmatrix} = 4 \cdot 9 - 6 \cdot 7 = 36 - 42 = -6$$

### Cofactor

The **cofactor** $C_{ij}$ is the minor with a **sign adjustment**:

$$C_{ij} = (-1)^{i+j} \cdot M_{ij}$$

The sign follows a **checkerboard pattern**:

$$\begin{bmatrix} + & - & + & \cdots \\ - & + & - & \cdots \\ + & - & + & \cdots \\ \vdots & & & \ddots \end{bmatrix}$$

From the example above: $C_{12} = (-1)^{1+2} \cdot (-6) = -1 \cdot (-6) = 6$.

### Cofactor Matrix

The **cofactor matrix** of an $n \times n$ matrix $A$ is the $n \times n$ matrix whose $(i,j)$ entry is the cofactor $C_{ij}$:

$$\text{cof}(A) = \begin{bmatrix} C_{11} & C_{12} & \cdots & C_{1n} \\ C_{21} & C_{22} & \cdots & C_{2n} \\ \vdots & & \ddots & \vdots \\ C_{n1} & C_{n2} & \cdots & C_{nn} \end{bmatrix}$$

**Example:** For $A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$:

$$\text{cof}(A) = \begin{bmatrix} +4 & -3 \\ -2 & +1 \end{bmatrix}$$

(Each entry is the minor of that position, with the checkerboard sign applied.)

### Adjugate (Classical Adjoint)

The **adjugate** of $A$ (written $\text{adj}(A)$) is the **transpose of the cofactor matrix**:

$$\text{adj}(A) = [C_{ij}]^T$$

That is, the $(i,j)$ entry of $\text{adj}(A)$ is $C_{ji}$ (note the swapped indices).

**Why it matters:** The adjugate gives a formula for the inverse (see Section 13):

$$A^{-1} = \frac{1}{\det(A)} \cdot \text{adj}(A) \quad (\text{when } \det(A) \neq 0)$$

---

## 10. The Augmented Matrix

When solving a system of linear equations $Ax = b$, we form the **augmented matrix** by placing b as an extra column:

$$[A \mid b] = \begin{bmatrix} a_{11} & a_{12} & \cdots & a_{1n} & b_1 \\ a_{21} & a_{22} & \cdots & a_{2n} & b_2 \\ \vdots & & & \vdots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} & b_m \end{bmatrix}$$

The vertical line separates the coefficient part (A) from the constants (b). This notation is crucial for **Gaussian elimination** (covered in Topic 2: Solving Systems).

**Example:** For the system $3x_1 + 2x_2 = 5$ and $4x_1 + 6x_2 = 10$:

$$A = \begin{bmatrix} 3 & 2 \\ 4 & 6 \end{bmatrix}, \quad b = \begin{bmatrix} 5 \\ 10 \end{bmatrix}, \quad [A \mid b] = \left[\begin{array}{cc|c} 3 & 2 & 5 \\ 4 & 6 & 10 \end{array}\right]$$

---

## 11. Properties of Matrix Operations

### Addition Properties
- **Commutative:** $A + B = B + A$
- **Associative:** $(A + B) + C = A + (B + C)$
- **Additive identity:** $A + O = A$
- **Additive inverse:** $A + (-A) = O$

### Multiplication Properties
- **Associative:** $(AB)C = A(BC)$ — order must be preserved
- **NOT commutative:** $AB \neq BA$ in general. In fact, BA may not even be defined!
- **Identity:** $IA = AI = A$
- **Distributive:** $A(B + C) = AB + AC$ and $(A + B)C = AC + BC$
- **Scalar compatibility:** $\lambda(AB) = (\lambda A)B = A(\lambda B)$
- **Distributive with scalars:** $\lambda(A + B) = \lambda A + \lambda B$

### Why AB ≠ BA
Consider:
$$A = \begin{bmatrix} 1 & 2 \end{bmatrix}_{1 \times 2}, \quad B = \begin{bmatrix} 3 \\ 4 \end{bmatrix}_{2 \times 1}$$

- $AB = [1 \times 3 + 2 \times 4] = [11]$ — a 1×1 matrix
- $BA = \begin{bmatrix} 3 \\ 4 \end{bmatrix}\begin{bmatrix} 1 & 2 \end{bmatrix} = \begin{bmatrix} 3 & 6 \\ 4 & 8 \end{bmatrix}$ — a 2×2 matrix

Even when both products exist, they can be completely different!

---

## 12. Row Echelon Form (REF) and Reduced Row Echelon Form (RREF)

### Pivots

The **pivot** (or **leading entry**) of a row is the **first nonzero entry** in that row.

A **pivot position** is the location (row, column) where a pivot sits after row reduction.

A **pivot column** is any column that contains a pivot position.

These concepts are central to row reduction, rank, and solving systems.

### Row Echelon Form (REF)

A matrix is in **Row Echelon Form** if:

1. All **zero rows** are at the bottom
2. The first nonzero entry (pivot) in each nonzero row is **to the right** of the pivot in the row above
3. All entries **below** a pivot are **zero**

The pivots form a "staircase" pattern going down and to the right.

**Example (REF):**
$$\begin{bmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 0 & 0 & 6 \end{bmatrix}$$

Here the pivots are 1, 4, and 6. The staircase pattern is clear: each pivot is further right than the one above.

### Reduced Row Echelon Form (RREF)

A matrix in REF that additionally satisfies:

4. Every pivot is **1**
5. Each pivot is the **only nonzero entry** in its column (zeros above and below)

**Example (RREF):**
$$\begin{bmatrix} 1 & 0 & 3 \\ 0 & 1 & -2 \\ 0 & 0 & 0 \end{bmatrix}$$

Pivots are in columns 1 and 2 (both equal to 1, with zeros in the rest of the column). Column 3 has no pivot — it is a **non-pivot (free) column**.

**Key difference:** In REF, we only need zeros **below** each pivot. In RREF, we need zeros **both above and below**, and every pivot must be 1.

---

## 13. Matrix Inverse

### Definition

For a square matrix $A$, the **inverse** $A^{-1}$ is the matrix satisfying:

$$AA^{-1} = A^{-1}A = I$$

- A matrix that has an inverse is called **invertible** (or **nonsingular**)
- A matrix with **no inverse** is called **singular**

**Not every matrix has an inverse.** Only square matrices can be invertible, and even then, not all are.

### Existence Condition

$$A \text{ is invertible} \iff \det(A) \neq 0$$

If $\det(A) = 0$, the matrix is **singular** and no inverse exists.

### Uniqueness

If an inverse exists, it is **unique**.

**Proof:** Suppose both $B$ and $C$ are inverses of $A$. Then:
$$C = CI = C(AB) = (CA)B = IB = B$$

### Properties

1. $(A^{-1})^{-1} = A$ — inverting twice gives back the original
2. $(AB)^{-1} = B^{-1}A^{-1}$ — **order reverses** for products (just like transpose)
3. $(A^T)^{-1} = (A^{-1})^T$ — inverse and transpose commute
4. $\det(A^{-1}) = \frac{1}{\det(A)}$
5. $(cA)^{-1} = \frac{1}{c}A^{-1}$ for $c \neq 0$

### Computing the Inverse

Two methods:
1. **Adjugate method:** $A^{-1} = \frac{1}{\det(A)} \text{adj}(A)$ (see Section 9)
2. **Row reduction method:** Row reduce $[A \mid I]$ to $[I \mid A^{-1}]$ (see [[2 - SOLVING SYSTEMS]])

### 2×2 Inverse Formula

$$A = \begin{bmatrix} a & b \\ c & d \end{bmatrix} \implies A^{-1} = \frac{1}{ad - bc}\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$

**Recipe:** Swap diagonal, negate off-diagonal, divide by determinant.

---

## 14. Rank of a Matrix

### Definition

The **rank** of a matrix $A$ is the **number of pivots** (leading 1s) after row reducing $A$ to REF:

$$\text{rank}(A) = \text{number of nonzero rows in the REF of } A$$

Intuitively, the rank measures how many "truly different" rows or columns the matrix has — rows that are not just multiples or combinations of other rows.

### How to Compute

1. Row reduce $A$ to REF (or RREF)
2. Count the nonzero rows

That count is the rank.

### Key Facts

- $\text{rank}(A) \leq \min(m, n)$ for an $m \times n$ matrix
- For a square $n \times n$ matrix: $A$ is invertible $\iff$ $\text{rank}(A) = n$
- $\text{rank}(A) = 0$ only when $A$ is the zero matrix
- $\text{Rank}(AB) \leq \min(Rank(A),Rank(B))$ 

> **Note:** The rank has a deeper meaning in terms of **linear independence**, **column space**, and **row space** — these connections are developed in [[6 - INDEPENDENCE]] and [[7 - BASIS AND RANK]].

### Example

$$A = \begin{bmatrix} 1 & 2 \\ 2 & 4 \end{bmatrix} \xrightarrow{R_2 \to R_2 - 2R_1} \begin{bmatrix} 1 & 2 \\ 0 & 0 \end{bmatrix}$$

One nonzero row → $\text{rank}(A) = 1$. (Row 2 is a multiple of row 1 — they are linearly dependent.)

---

## 15. Trace of a Matrix

### Definition

The **trace** of an $n \times n$ square matrix $A$ is the sum of its diagonal entries:

$$\text{tr}(A) = a_{11} + a_{22} + \cdots + a_{nn} = \sum_{i=1}^{n} a_{ii}$$

### Example

$$A = \begin{bmatrix} 2 & 5 \\ 3 & 7 \end{bmatrix}, \quad \text{tr}(A) = 2 + 7 = 9$$

$$B = \begin{bmatrix} 1 & 0 & 4 \\ 2 & -3 & 5 \\ 7 & 8 & 6 \end{bmatrix}, \quad \text{tr}(B) = 1 + (-3) + 6 = 4$$

### Properties

1. $\text{tr}(A + B) = \text{tr}(A) + \text{tr}(B)$
2. $\text{tr}(cA) = c \cdot \text{tr}(A)$
3. $\text{tr}(A^T) = \text{tr}(A)$
4. $\text{tr}(AB) = \text{tr}(BA)$ — **cyclic property** (even though $AB \neq BA$ in general!)
5. $\text{tr}(I_n) = n$
### Key significance:

1. **Sum of diagonal elements** of a matrix.
2. **Equal to the sum of eigenvalues** of the matrix. Tr(A)=λ1​+λ2​+...+λn​
3. **Invariant under similarity transformations** (doesn't change under change of basis).
4. Useful in **linear algebra, physics, statistics, and machine learning**.

✅ **In one line:**  
Trace represents the **total of a matrix’s diagonal entries and equals the sum of its eigenvalues.**

---

## 16. Summary

| Concept | Key Point |
|---|---|
| Matrix | Rectangular array of numbers (m × n) |
| Column / row matrix | $n \times 1$ column; $1 \times n$ row; related by transpose |
| Square matrix | rows = columns |
| Diagonal matrix | Only diagonal entries nonzero |
| Identity matrix | Diagonal = all 1s, acts like "1" |
| Addition | Entry-wise, same dimensions required |
| Scalar multiplication | Multiply every entry by the scalar |
| Matrix multiplication | Columns of A = Rows of B; use dot products |
| Transpose | Flip rows ↔ columns; $(AB)^T = B^T A^T$ |
| Elementary matrices | Row operations encoded as matrix multiplication |
| Minor $M_{ij}$ | Determinant of matrix with row $i$, column $j$ deleted |
| Cofactor $C_{ij}$ | $(-1)^{i+j} \cdot M_{ij}$; sign-adjusted minor |
| Cofactor matrix | Matrix of all cofactors $[C_{ij}]$ |
| Adjugate $\text{adj}(A)$ | Transpose of cofactor matrix; used for $A^{-1} = \frac{1}{\det(A)}\text{adj}(A)$ |
| Augmented matrix | $[A \mid b]$ for solving $Ax = b$ |
| Pivot | First nonzero entry in a row; pivot column = column containing a pivot |
| REF | Staircase of pivots; zeros below each pivot |
| RREF | Pivots are 1; zeros above and below each pivot |
| Inverse $A^{-1}$ | $AA^{-1} = I$; exists iff $\det(A) \neq 0$; $(AB)^{-1} = B^{-1}A^{-1}$ |
| Rank | Number of pivots in REF; deeper connections in [[7 - BASIS AND RANK]] |
| Trace | Sum of diagonal entries; $\text{tr}(AB) = \text{tr}(BA)$ |
