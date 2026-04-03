# DETERMINANTS

Every square matrix A has an associated number called its **determinant**, denoted $\det(A)$ or $|A|$.

## 1. Determinant of Small Matrices

### 1×1 Matrix
$$A = [a] \implies \det(A) = a$$

### 2×2 Matrix
$$A = \begin{bmatrix} a & b \\ c & d \end{bmatrix} \implies \det(A) = ad - bc$$

Multiply the diagonal entries, subtract the product of the off-diagonal entries.

**Example 1:**
$$\det\begin{bmatrix} 2 & 3 \\ 6 & 10 \end{bmatrix} = 2 \times 10 - 3 \times 6 = 20 - 18 = 2$$

**Example 2:**
$$\det\begin{bmatrix} 5 & \frac{2}{3} \\ 6 & \frac{3}{7} \end{bmatrix} = 5 \times \frac{3}{7} - \frac{2}{3} \times 6 = \frac{15}{7} - 4 = -\frac{13}{7}$$

### 3×3 Matrix: Expansion Along the First Row

$$\det(A) = a_{11}\det\begin{bmatrix} a_{22} & a_{23} \\ a_{32} & a_{33} \end{bmatrix} - a_{12}\det\begin{bmatrix} a_{21} & a_{23} \\ a_{31} & a_{33} \end{bmatrix} + a_{13}\det\begin{bmatrix} a_{21} & a_{22} \\ a_{31} & a_{32} \end{bmatrix}$$

**The pattern:** Take each entry in the first row, multiply by the determinant of the 2×2 submatrix obtained by **deleting that entry's row and column**. Signs alternate: $+, -, +$.

**Example:**
$$A = \begin{bmatrix} 2 & 4 & 1 \\ 3 & 8 & 7 \\ 5 & 6 & 9 \end{bmatrix}$$

$$\det(A) = 2\det\begin{bmatrix} 8 & 7 \\ 6 & 9 \end{bmatrix} - 4\det\begin{bmatrix} 3 & 7 \\ 5 & 9 \end{bmatrix} + 1\det\begin{bmatrix} 3 & 8 \\ 5 & 6 \end{bmatrix}$$

$$= 2(72 - 42) - 4(27 - 35) + 1(18 - 40)$$
$$= 2(30) - 4(-8) + 1(-22) = 60 + 32 - 22 = 70$$

---

## 2. Minors and Cofactors

### Minor $M_{ij}$
The **ij-th minor** is the determinant of the submatrix formed by **deleting the i-th row and j-th column**.

**Example:** For $A = \begin{bmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{bmatrix}$:

$$M_{11} = \det\begin{bmatrix} a_{22} & a_{23} \\ a_{32} & a_{33} \end{bmatrix}, \qquad M_{23} = \det\begin{bmatrix} a_{11} & a_{12} \\ a_{31} & a_{32} \end{bmatrix}$$

### Cofactor $C_{ij}$
The **ij-th cofactor** includes a sign factor:

$$C_{ij} = (-1)^{i+j} M_{ij}$$

The sign pattern for a 3×3 matrix:
$$\begin{bmatrix} + & - & + \\ - & + & - \\ + & - & + \end{bmatrix}$$

**Examples:**
- $C_{11} = (-1)^{1+1}M_{11} = +M_{11} = M_{11}$
- $C_{12} = (-1)^{1+2}M_{12} = -M_{12}$
- $C_{23} = (-1)^{2+3}M_{23} = -M_{23}$

---

## 3. Expansion Along Any Row or Column

The determinant can be computed by expanding along **any** row or column (not just the first row):

**Expansion along the i-th row:**
$$\det(A) = \sum_{j=1}^{n} a_{ij} C_{ij} = \sum_{j=1}^{n} (-1)^{i+j} a_{ij} M_{ij}$$

**Expansion along the j-th column:**
$$\det(A) = \sum_{i=1}^{n} a_{ij} C_{ij} = \sum_{i=1}^{n} (-1)^{i+j} a_{ij} M_{ij}$$

### Example: Expansion Along the Second Row

$$A = \begin{bmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{bmatrix}$$

$$\det(A) = -a_{21}\det\begin{bmatrix} a_{12} & a_{13} \\ a_{32} & a_{33} \end{bmatrix} + a_{22}\det\begin{bmatrix} a_{11} & a_{13} \\ a_{31} & a_{33} \end{bmatrix} - a_{23}\det\begin{bmatrix} a_{11} & a_{12} \\ a_{31} & a_{32} \end{bmatrix}$$

**Computational tip:** Choose the row or column with the **most zeros** — each zero entry eliminates a whole term from the calculation!

### Worked Example with Strategic Expansion

$$A = \begin{bmatrix} 2 & 4 & 3 \\ 0 & 8 & 7 \\ 0 & 0 & 9 \end{bmatrix}$$

Expanding along the **first column** (two zeros!):

$$\det(A) = 2 \cdot \det\begin{bmatrix} 8 & 7 \\ 0 & 9 \end{bmatrix} - 0(\cdots) + 0(\cdots) = 2(72 - 0) = 144$$

Note: $144 = 2 \times 8 \times 9$ = product of diagonal entries. This is always true for triangular matrices.

---

## 4. The Inductive (General n×n) Definition

For an n×n matrix, the determinant is defined **inductively**:

$$\det(A) = \sum_{j=1}^{n} (-1)^{1+j} a_{1j} M_{1j}$$

This reduces computing an n×n determinant to computing n determinants of size (n−1)×(n−1).

**Chain:** n×n → (n−1)×(n−1) → ... → 3×3 → 2×2 → direct formula

### Proof Sketch for n×n (EXPANDED)

The definition works by **mathematical induction**:
- **Base case:** The 1×1 determinant is defined directly
- **Inductive step:** Assume we know how to compute determinants for (n−1)×(n−1) matrices. Then the formula $\det(A) = \sum_{j=1}^n (-1)^{1+j}a_{1j}M_{1j}$ involves only (n−1)×(n−1) determinants (the minors), so it is well-defined.

One then proves that this definition satisfies key properties (multilinearity, alternating in rows, det(I) = 1), and that expanding along any other row or column gives the same value.

---

## 5. Special Determinants

### Determinant of the Identity Matrix
$$\det(I_n) = 1 \quad \text{for any } n$$

**Proof (by induction):** $\det(I_1) = 1$. For $I_n$, expand along the first row: $1 \cdot \det(I_{n-1}) + 0 + \cdots + 0 = \det(I_{n-1}) = 1$.

### Determinant of Triangular Matrices
For any upper or lower triangular matrix, the determinant equals the **product of the diagonal entries**:

$$\det(A) = a_{11} \cdot a_{22} \cdots a_{nn}$$

**Example:**
$$\det\begin{bmatrix} 2 & 4 & 3 \\ 0 & 8 & 7 \\ 0 & 0 & 9 \end{bmatrix} = 2 \times 8 \times 9 = 144$$

### Determinant of Transpose
$$\det(A^T) = \det(A)$$

This means every property that holds for rows also holds for columns.

---

## 6. Properties of Determinants

### Effect of Row Operations on Determinants

| Operation | Effect on det |
|-----------|--------------|
| Swap two rows: $R_i \leftrightarrow R_j$ | $\det \to -\det$ (sign flips) |
| Scale a row: $R_i \to tR_i$ | $\det \to t \cdot \det$ |
| Add multiple: $R_i \to R_i + tR_j$ | $\det$ unchanged |

The same rules apply for **column** operations.

### Multiplicative Property
$$\det(AB) = \det(A) \cdot \det(B)$$

This was proved for 2×2 matrices by direct computation and holds for all n×n matrices.

**Consequences:**
- $\det(A^n) = [\det(A)]^n$
- $\det(A^{-1}) = \frac{1}{\det(A)}$ (assuming A is invertible)
- $\det(P^{-1}AP) = \det(A)$ (similarity preserves determinant)
- $\det(AB) = \det(BA)$ (even though $AB \neq BA$ in general!)
- $\det(A^T A) = [\det(A)]^2$

### Scaling the Entire Matrix
$$\det(tA) = t^n \det(A) \quad \text{(for n×n matrix A)}$$

**Warning:** $\det(tA) \neq t\det(A)$! Every row gets multiplied by $t$, so $t$ comes out $n$ times.

### Zero Determinant Conditions
$\det(A) = 0$ if:
- A has a **zero row** or **zero column**
- A has **two identical rows** (or columns)
- One row is a **linear combination** of the other rows

---

## 7. Computing Determinants via Row Reduction

This method is **far more efficient** than expansion for large matrices.

### The Algorithm
1. Row reduce A to **Row Echelon Form** (upper triangular)
2. Track how each row operation affects the determinant
3. The determinant of the REF matrix is the product of diagonal entries
4. Adjust for the row operations performed

### Worked Example

$$A = \begin{bmatrix} 2 & 4 & 1 \\ 3 & 8 & 7 \\ 5 & 6 & 9 \end{bmatrix}$$

We know $\det(A) = 70$ from direct computation. Let's verify via row reduction:

**Step 1:** $R_1 \to \frac{1}{2}R_1$ → det gets multiplied by $\frac{1}{2}$, so original det = 2 × (new det)

$$\begin{bmatrix} 1 & 2 & \frac{1}{2} \\ 3 & 8 & 7 \\ 5 & 6 & 9 \end{bmatrix}$$

**Step 2:** $R_2 \to R_2 - 3R_1$, $R_3 \to R_3 - 5R_1$ → Type 3, det unchanged

$$\begin{bmatrix} 1 & 2 & \frac{1}{2} \\ 0 & 2 & \frac{11}{2} \\ 0 & -4 & \frac{13}{2} \end{bmatrix}$$

**Step 3:** $R_2 \to \frac{1}{2}R_2$ → det multiplied by $\frac{1}{2}$

$$\begin{bmatrix} 1 & 2 & \frac{1}{2} \\ 0 & 1 & \frac{11}{4} \\ 0 & -4 & \frac{13}{2} \end{bmatrix}$$

**Step 4:** $R_3 \to R_3 + 4R_2$ → unchanged

$$\begin{bmatrix} 1 & 2 & \frac{1}{2} \\ 0 & 1 & \frac{11}{4} \\ 0 & 0 & \frac{35}{2} \end{bmatrix}$$

REF determinant = $1 \times 1 \times \frac{35}{2} = \frac{35}{2}$

Tracing back: $\det(A) = 2 \times 2 \times \frac{35}{2} = 70$ ✓

---

## 8. Geometric Interpretation of Determinants (NEW)

The determinant has a beautiful geometric meaning:

### In 2D
For a 2×2 matrix $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$:

$|\det(A)|$ = **area** of the parallelogram formed by the column vectors $(a,c)$ and $(b,d)$.

The **sign** of the determinant indicates **orientation**:
- Positive: the second vector is counterclockwise from the first
- Negative: the second vector is clockwise from the first

**Example:** $A = \begin{bmatrix} 3 & 0 \\ 0 & 2 \end{bmatrix}$

$\det(A) = 6$. The columns $(3,0)$ and $(0,2)$ form a rectangle of area $3 \times 2 = 6$. ✓

### In 3D
For a 3×3 matrix, $|\det(A)|$ = **volume** of the parallelepiped (3D parallelogram) formed by the three column vectors.

### In General
For an n×n matrix, $|\det(A)|$ gives the **n-dimensional volume** scaling factor of the linear transformation represented by A.

### Key Geometric Consequences
- $\det(A) = 0$ means the columns are **coplanar** (in 3D) or linearly dependent — the parallelogram/parallelepiped is **flat** (zero volume)
- $|\det(A)| > 1$ means the transformation **expands** volume
- $|\det(A)| < 1$ means the transformation **contracts** volume
- $|\det(A)| = 1$ means the transformation **preserves** volume

---

## 9. Summary

| Concept | Formula/Key Point |
|---|---|
| 2×2 det | $ad - bc$ |
| 3×3 det | Expand along first row with alternating signs |
| n×n det | Inductive: reduce to (n−1)×(n−1) minors |
| Cofactor | $C_{ij} = (-1)^{i+j}M_{ij}$ |
| Expand any row/col | Choose row/column with most zeros |
| Triangular matrix | det = product of diagonal entries |
| $\det(AB)$ | $= \det(A)\det(B)$ |
| $\det(A^T)$ | $= \det(A)$ |
| Row swap | Flips sign of det |
| Row scaling by $t$ | Multiplies det by $t$ |
| Row addition | Does not change det |
| Geometric meaning | $|\det|$ = volume scaling factor |
