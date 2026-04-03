# APPLYING DETERMINANTS

This topic covers how determinants are used to find matrix inverses and solve systems of linear equations.

## 1. The Inverse of a Matrix

> **Definition, uniqueness, existence condition, and properties** of the matrix inverse are covered in [[1 - MATRICES]], Section 13. Here we focus on **methods for computing** the inverse using determinants.

**Key fact (from [[1 - MATRICES]]):** $A$ is invertible $\iff$ $\det(A) \neq 0$.

---

## 2. The Adjugate Method for Finding the Inverse

### Step 1: Compute the Cofactor Matrix

For each entry position $(i,j)$, compute the cofactor:
$$C_{ij} = (-1)^{i+j} M_{ij}$$

where $M_{ij}$ is the minor (determinant of the submatrix with row i and column j deleted).

Arrange all cofactors into the **cofactor matrix**.

### Step 2: Transpose to Get the Adjugate

$$\text{adj}(A) = (\text{cofactor matrix})^T$$

The adjugate is the **transpose** of the cofactor matrix.

### Step 3: Divide by the Determinant

$$A^{-1} = \frac{1}{\det(A)} \text{adj}(A)$$

### 2×2 Inverse Formula

For $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$ with $\det(A) = ad - bc \neq 0$:

$$A^{-1} = \frac{1}{ad - bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$

**Recipe:** Swap diagonal entries, negate off-diagonal entries, divide by determinant.

**Example:**
$$A = \begin{bmatrix} 4 & 7 \\ 2 & 6 \end{bmatrix}, \quad \det(A) = 24 - 14 = 10$$

$$A^{-1} = \frac{1}{10}\begin{bmatrix} 6 & -7 \\ -2 & 4 \end{bmatrix} = \begin{bmatrix} 0.6 & -0.7 \\ -0.2 & 0.4 \end{bmatrix}$$

**Verification:** $AA^{-1} = \begin{bmatrix} 4 & 7 \\ 2 & 6 \end{bmatrix}\begin{bmatrix} 0.6 & -0.7 \\ -0.2 & 0.4 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$ ✓

### 3×3 Worked Example

$$A = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 2 & 8 \\ 5 & 6 & 0 \end{bmatrix}$$

**Determinant:** $\det(A) = 1(0-48) - 2(0-40) + 3(0-10) = -48 + 80 - 30 = 2$

**Minors:**

| | j=1 | j=2 | j=3 |
|---|---|---|---|
| i=1 | $M_{11} = 0-48 = -48$ | $M_{12} = 0-40 = -40$ | $M_{13} = 0-10 = -10$ |
| i=2 | $M_{21} = 0-18 = -18$ | $M_{22} = 0-15 = -15$ | $M_{23} = 6-10 = -4$ |
| i=3 | $M_{31} = 16-6 = 10$ | $M_{32} = 8-0 = 8$ | $M_{33} = 2-0 = 2$ |

**Cofactor matrix** (apply $(-1)^{i+j}$ signs):
$$\begin{bmatrix} -48 & 40 & -10 \\ 18 & -15 & 4 \\ 10 & -8 & 2 \end{bmatrix}$$

**Adjugate** (transpose of cofactor matrix):
$$\text{adj}(A) = \begin{bmatrix} -48 & 18 & 10 \\ 40 & -15 & -8 \\ -10 & 4 & 2 \end{bmatrix}$$

**Inverse:**
$$A^{-1} = \frac{1}{2}\begin{bmatrix} -48 & 18 & 10 \\ 40 & -15 & -8 \\ -10 & 4 & 2 \end{bmatrix} = \begin{bmatrix} -24 & 9 & 5 \\ 20 & -\frac{15}{2} & -4 \\ -5 & 2 & 1 \end{bmatrix}$$

---

## 3. Solving Systems Using the Inverse

If A is invertible and $Ax = b$, then the **unique solution** is:

$$x = A^{-1}b$$

**Derivation:** Multiply both sides of $Ax = b$ by $A^{-1}$:
$$A^{-1}(Ax) = A^{-1}b \implies (A^{-1}A)x = A^{-1}b \implies Ix = A^{-1}b \implies x = A^{-1}b$$

### Worked Example

Solve: $8x_1 + 8x_2 + 4x_3 = 1960$, $12x_1 + 5x_2 + 7x_3 = 2215$, $3x_1 + 2x_2 + 5x_3 = 1135$

$$A = \begin{bmatrix} 8 & 8 & 4 \\ 12 & 5 & 7 \\ 3 & 2 & 5 \end{bmatrix}, \quad b = \begin{bmatrix} 1960 \\ 2215 \\ 1135 \end{bmatrix}$$

$\det(A) = -188 \neq 0$, so A is invertible.

Computing $A^{-1}$ via the adjugate method and then multiplying $A^{-1}b$:

$$x = A^{-1}b = \begin{bmatrix} 45 \\ 125 \\ 150 \end{bmatrix}$$

So $x_1 = 45, \; x_2 = 125, \; x_3 = 150$.

---

## 4. Cramer's Rule

Cramer's rule provides an explicit formula for each variable using determinants.

### Setup
Given $Ax = b$ where A is an n×n **invertible** matrix ($\det(A) \neq 0$):

Define $A_{x_i}$ = the matrix obtained by **replacing the i-th column of A** with the vector b.

### The Formula
$$x_i = \frac{\det(A_{x_i})}{\det(A)}$$

### 2×2 Cramer's Rule

For: $a_{11}x_1 + a_{12}x_2 = b_1$, $a_{21}x_1 + a_{22}x_2 = b_2$

$$x_1 = \frac{\det\begin{bmatrix} b_1 & a_{12} \\ b_2 & a_{22} \end{bmatrix}}{\det(A)} = \frac{b_1 a_{22} - a_{12} b_2}{a_{11} a_{22} - a_{12} a_{21}}$$

$$x_2 = \frac{\det\begin{bmatrix} a_{11} & b_1 \\ a_{21} & b_2 \end{bmatrix}}{\det(A)} = \frac{a_{11} b_2 - b_1 a_{21}}{a_{11} a_{22} - a_{12} a_{21}}$$

> **NOTE (ERROR FIX):** The denominator is $a_{11}a_{22} - a_{12}a_{21}$ (diagonal minus off-diagonal). A common mistake is writing $a_{11}a_{22} - a_{21}a_{22}$, which is incorrect.

### 2×2 Worked Example

Solve: $4x_1 - 3x_2 = 11$, $6x_1 + 5x_2 = 7$

$$A = \begin{bmatrix} 4 & -3 \\ 6 & 5 \end{bmatrix}, \quad \det(A) = 20 + 18 = 38$$

$$A_{x_1} = \begin{bmatrix} 11 & -3 \\ 7 & 5 \end{bmatrix}, \quad \det(A_{x_1}) = 55 + 21 = 76$$

$$A_{x_2} = \begin{bmatrix} 4 & 11 \\ 6 & 7 \end{bmatrix}, \quad \det(A_{x_2}) = 28 - 66 = -38$$

$$x_1 = \frac{76}{38} = 2, \qquad x_2 = \frac{-38}{38} = -1$$

### 3×3 Cramer's Rule

For three equations in three unknowns, define:
- $A_{x_1}$: replace column 1 of A with b
- $A_{x_2}$: replace column 2 of A with b
- $A_{x_3}$: replace column 3 of A with b

$$x_1 = \frac{\det(A_{x_1})}{\det(A)}, \quad x_2 = \frac{\det(A_{x_2})}{\det(A)}, \quad x_3 = \frac{\det(A_{x_3})}{\det(A)}$$

### 3×3 Worked Example

$$A = \begin{bmatrix} 1 & 0 & 3 \\ 0 & 2 & 5 \\ 4 & 3 & 1 \end{bmatrix}, \quad b = \begin{bmatrix} 0 \\ 2 \\ 1 \end{bmatrix}$$

$\det(A) = -37$

$\det(A_{x_1}) = \det\begin{bmatrix} 0 & 0 & 3 \\ 2 & 2 & 5 \\ 1 & 3 & 1 \end{bmatrix} = 12$

$\det(A_{x_2}) = \det\begin{bmatrix} 1 & 0 & 3 \\ 0 & 2 & 5 \\ 4 & 1 & 1 \end{bmatrix} = -27$

$\det(A_{x_3}) = \det\begin{bmatrix} 1 & 0 & 0 \\ 0 & 2 & 2 \\ 4 & 3 & 1 \end{bmatrix} = -4$

$$x_1 = \frac{12}{-37} = -\frac{12}{37}, \quad x_2 = \frac{-27}{-37} = \frac{27}{37}, \quad x_3 = \frac{-4}{-37} = \frac{4}{37}$$

### General n×n Cramer's Rule

For a system of n equations in n unknowns with $\det(A) \neq 0$:
$$x_i = \frac{\det(A_{x_i})}{\det(A)}, \quad i = 1, 2, \ldots, n$$

**Requirements:**
1. Must have exactly **n equations in n unknowns** (A is square)
2. $\det(A) \neq 0$ (A is invertible)

---

## 5. Homogeneous Systems with Invertible Coefficient Matrix

For $Ax = 0$ where A is an n×n invertible matrix:

$$x = A^{-1} \cdot 0 = 0$$

The **only solution** is the trivial solution $x = 0$.

**Contrapositive:** If $Ax = 0$ has a nontrivial solution, then $\det(A) = 0$ (A is not invertible).

| Condition | Homogeneous $Ax = 0$ |
|-----------|---------------------|
| $\det(A) \neq 0$ | Only the trivial solution $x = 0$ |
| $\det(A) = 0$ | Infinitely many solutions (including nontrivial ones) |

---

## 6. Comparing Methods

| Method | When to Use | Pros | Cons |
|--------|------------|------|------|
| **Inverse ($x = A^{-1}b$)** | A is square, invertible, and you need to solve for multiple b's | Reusable inverse | Expensive to compute inverse |
| **Cramer's Rule** | Small systems (2×2, 3×3) | Explicit formula, elegant | Very expensive for large n |
| **Gaussian Elimination** | Any system (rectangular or square) | Most efficient, handles all cases | No closed-form formula |

**Practical note:** Gaussian elimination is by far the most efficient method for solving systems. Cramer's rule and the inverse method require computing many determinants, which becomes extremely expensive as n grows. Gaussian elimination is $O(n^3)$ while Cramer's rule is roughly $O(n!)$.

---

## 7. Summary

| Concept | Key Point |
|---|---|
| Inverse exists | iff $\det(A) \neq 0$ |
| Inverse is unique | Proved via associativity of matrix multiplication |
| 2×2 inverse | Swap diagonal, negate off-diagonal, divide by det |
| General inverse | $A^{-1} = \frac{1}{\det(A)}\text{adj}(A)$ |
| Adjugate | Transpose of cofactor matrix |
| $Ax = b$ solution | $x = A^{-1}b$ when A is invertible |
| Cramer's rule | $x_i = \det(A_{x_i})/\det(A)$ |
| Homogeneous + invertible | Only trivial solution $x = 0$ |
| Best method in practice | Gaussian elimination |
