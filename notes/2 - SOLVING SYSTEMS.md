# SOLVING SYSTEMS OF LINEAR EQUATIONS

## 1. Systems of Linear Equations

A **system of m linear equations in n unknowns** is:
$$a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1$$
$$a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b_2$$
$$\vdots$$
$$a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = b_m$$

**Matrix form:** $Ax = b$, where:
- $A$ is the m × n **coefficient matrix**
- $x$ is the n × 1 column of unknowns
- $b$ is the m × 1 column of constants

**Reading the matrix dimensions:**
- **Number of rows** ($m$) = number of **equations**
- **Number of columns** ($n$) = number of **variables (unknowns)**

A **solution** is an assignment of values to $x_1, x_2, \ldots, x_n$ that satisfies all equations simultaneously.

### Three Possible Outcomes
1. **Unique solution** — exactly one set of values works
2. **Infinitely many solutions** — a family of solutions (with free parameters)
3. **No solution** — the system is inconsistent

**Geometric interpretation (2 variables):**
- Unique solution = two lines intersect at one point
- Infinitely many = two lines are coincident (same line)
- No solution = two lines are parallel

---

## 2. Elementary Row Operations

There are **three types** of elementary row operations. These operations **do not change the solution set** of the system.

| Type | Operation | Notation | Example |
|------|-----------|----------|---------|
| 1 | Interchange two rows | $R_i \leftrightarrow R_j$ | Swap rows 1 and 2 |
| 2 | Multiply a row by a nonzero constant | $R_i \to tR_i$ | $R_1 \to \frac{1}{3}R_1$ |
| 3 | Add a multiple of one row to another | $R_i \to R_i + tR_j$ | $R_2 \to R_2 - 3R_1$ |

### Why Row Operations Preserve Solutions (NEW)

Each row of $[A \mid b]$ represents an equation. The row operations correspond to:

1. **Interchange:** Reordering equations doesn't change the solution set
2. **Scaling:** Multiplying both sides of an equation by a nonzero constant gives an equivalent equation
3. **Row addition:** Adding a multiple of one equation to another is like substitution — the solution set is unchanged

Because each operation is **reversible** (each has an inverse operation), the original and transformed systems always have exactly the same solutions.

---

## 3. Row Echelon Form (REF) and RREF

> **Definitions:** REF and RREF are defined in [[1 - MATRICES]], Section 12. Here we focus on how to **achieve** these forms and how to **use** them for solving systems.

### Gaussian Elimination vs Gauss-Jordan Elimination (Clarification)

**Gaussian Elimination** = row reduce until **REF** (eliminate **below** pivots)
- Produces a triangular form
- Followed by back substitution to find solutions

**Gauss-Jordan Elimination** = row reduce until **RREF** (eliminate **below and above** pivots)
- Produces the simplest form
- Solutions can be read directly without back substitution

Both can be applied to:
1. A coefficient matrix $A$ alone (for finding rank, basis, etc.)
2. An augmented matrix $[A \mid b]$ (for solving systems)

The choice depends on your goal: REF is more efficient computationally; RREF is easier to read solutions from.

---

## 4. Row Reduction Algorithm

### Step 1: Reduce to REF

1. Find the **leftmost nonzero column**
2. Use row operations to get a **1** in the top position of that column
   - If the top entry is 0, swap with a row below that has a nonzero entry
   - Then scale the row to make it 1
3. Use **Type 3 operations** to make all entries **below** that 1 equal to 0
4. Repeat for the submatrix below the current row

### Step 2: Reduce REF to RREF

Starting from the **rightmost** pivot column and working left:

5. Use each leading 1 to eliminate all nonzero entries **above** it (Type 3 operations)

### Worked Example

Reduce $A = \begin{bmatrix} 3 & 2 & 1 & 1 \\ 1 & 1 & 0 & 0 \\ 0 & 7 & 1 & 1 \end{bmatrix}$

**Step 1:** Get 1 in position (1,1)
$$R_1 \to \frac{1}{3}R_1: \quad \begin{bmatrix} 1 & \frac{2}{3} & \frac{1}{3} & \frac{1}{3} \\ 1 & 1 & 0 & 0 \\ 0 & 7 & 1 & 1 \end{bmatrix}$$

**Step 2:** Eliminate below pivot in column 1
$$R_2 \to R_2 - R_1: \quad \begin{bmatrix} 1 & \frac{2}{3} & \frac{1}{3} & \frac{1}{3} \\ 0 & \frac{1}{3} & -\frac{1}{3} & -\frac{1}{3} \\ 0 & 7 & 1 & 1 \end{bmatrix}$$

**Step 3:** Get 1 in position (2,2)
$$R_2 \to 3R_2: \quad \begin{bmatrix} 1 & \frac{2}{3} & \frac{1}{3} & \frac{1}{3} \\ 0 & 1 & -1 & -1 \\ 0 & 7 & 1 & 1 \end{bmatrix}$$

**Step 4:** Eliminate below pivot in column 2
$$R_3 \to R_3 - 7R_2: \quad \begin{bmatrix} 1 & \frac{2}{3} & \frac{1}{3} & \frac{1}{3} \\ 0 & 1 & -1 & -1 \\ 0 & 0 & 8 & 8 \end{bmatrix}$$

**Step 5:** Get 1 in position (3,3)
$$R_3 \to \frac{1}{8}R_3: \quad \begin{bmatrix} 1 & \frac{2}{3} & \frac{1}{3} & \frac{1}{3} \\ 0 & 1 & -1 & -1 \\ 0 & 0 & 1 & 1 \end{bmatrix} \quad \text{(REF achieved)}$$

**Step 6:** Back-substitute to get RREF (eliminate above pivots, right to left)
$$R_2 \to R_2 + R_3, \quad R_1 \to R_1 - \frac{1}{3}R_3: \quad \begin{bmatrix} 1 & \frac{2}{3} & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 1 \end{bmatrix}$$

$$R_1 \to R_1 - \frac{2}{3}R_2: \quad \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 1 \end{bmatrix} \quad \text{(RREF achieved)}$$

---

## 5. Reading Solutions from RREF

### Dependent and Independent Variables

- **Dependent variables** (also called **pivot variables**): correspond to columns containing a leading 1
- **Independent variables** (also called **free variables**): correspond to all other columns

**In the example above:** Columns 1, 2, 3 have pivots → $x_1, x_2, x_3$ are dependent. Column 4 has no pivot → $x_4$ is free.

### The Procedure

1. Identify dependent and independent variables
2. Set each independent variable to an **arbitrary parameter** (e.g., $c, t, s$)
3. **Back-substitute** to express each dependent variable in terms of the free variables

### Understanding Free Variables (EXPANDED)

Free variables represent **degrees of freedom** in the solution. When a variable is free, it means the system of equations does not constrain it — you can choose any value for it, and the dependent variables adjust accordingly.

- **0 free variables** → unique solution
- **1 free variable** → solutions form a line (1-parameter family)
- **2 free variables** → solutions form a plane (2-parameter family)
- **k free variables** → k-parameter family of solutions

**Example:** From the RREF above, $x_4$ is free. Set $x_4 = c$:

The equations from RREF are: $x_1 = 0$, $x_2 = 0$, $x_3 + x_4 = 0$

So: $x_1 = 0, \quad x_2 = 0, \quad x_3 = -c, \quad x_4 = c$

The solution set: $\{(0, 0, -c, c) \mid c \in \mathbb{R}\}$

---

## 6. Gaussian Elimination (Full Method)

### The Complete Algorithm

Given a system $Ax = b$:

1. **Form the augmented matrix** $[A \mid b]$
2. **Row reduce** $[A \mid b]$ to RREF using elementary row operations
3. The result is $[R \mid c]$ where R is in RREF
4. **Check for inconsistency:** If any row has the form $[0 \; 0 \; \cdots \; 0 \mid d]$ with $d \neq 0$, then **no solution** exists (the equation $0 = d$ is impossible)
5. If consistent, **read off solutions** using dependent/independent variable analysis

### Key Fact
The solutions of $Ax = b$ are **exactly** the solutions of $Rx = c$.

### Example 1: System with Infinitely Many Solutions

System: $3x_1 + 2x_2 + x_3 + x_4 = 6$, $x_1 + x_2 = 2$, $7x_2 + x_3 + x_4 = 8$

Augmented matrix:
$$\left[\begin{array}{cccc|c} 3 & 2 & 1 & 1 & 6 \\ 1 & 1 & 0 & 0 & 2 \\ 0 & 7 & 1 & 1 & 8 \end{array}\right]$$

After row reduction to RREF:
$$\left[\begin{array}{cccc|c} 1 & 0 & 0 & 0 & 1 \\ 0 & 1 & 0 & 0 & 1 \\ 0 & 0 & 1 & 1 & 1 \end{array}\right]$$

Reading off: $x_1 = 1, \; x_2 = 1, \; x_3 = 1 - x_4$, with $x_4 = c$ (free).

**Solution set:** $(1, 1, 1-c, c)$ where $c \in \mathbb{R}$

### Example 2: System with No Solution

System: $x_1 + x_2 + x_3 = 2$, $x_2 - 3x_3 = 1$, $2x_1 + x_2 + 5x_3 = 0$

Augmented matrix:
$$\left[\begin{array}{ccc|c} 1 & 1 & 1 & 2 \\ 0 & 1 & -3 & 1 \\ 2 & 1 & 5 & 0 \end{array}\right]$$

After $R_3 \to R_3 - 2R_1$: $\left[\begin{array}{ccc|c} 1 & 1 & 1 & 2 \\ 0 & 1 & -3 & 1 \\ 0 & -1 & 3 & -4 \end{array}\right]$

After $R_3 \to R_3 + R_2$: $\left[\begin{array}{ccc|c} 1 & 1 & 1 & 2 \\ 0 & 1 & -3 & 1 \\ 0 & 0 & 0 & -3 \end{array}\right]$

The last row says $0 = -3$, which is impossible. **No solution exists.**

---

## 7. Homogeneous Systems

A system $Ax = 0$ (where $b = 0$) is called **homogeneous**.

### Trivial and Nontrivial Solutions

In mathematics, **trivial** means the obvious, uninteresting case — the one that works "for free" without any effort.

- The **trivial solution** of $Ax = 0$ is $x = 0$ (all variables equal zero). It always works because $A \cdot 0 = 0$ regardless of what $A$ is — that's why it's "trivial."
- A **nontrivial solution** is any solution where **at least one variable is nonzero** — these are the interesting ones that tell us something about $A$.

### Key Properties

1. **Always has at least one solution:** $x = 0$ (the trivial solution)
2. Either $x = 0$ is the **only** solution, or there are **infinitely many** solutions
3. If there are more variables than equations ($n > m$), the system is **guaranteed** to have nontrivial solutions

**Why property 3?** With $n$ columns and at most $m$ pivots (where $m < n$), at least one column has no pivot, giving at least one free variable. Free variables → infinitely many solutions.

### Scaling Property
If $w = (w_1, w_2, \ldots, w_n)$ is a solution of $Ax = 0$, then $tw = (tw_1, tw_2, \ldots, tw_n)$ is also a solution for any scalar $t$.

**Proof:** $A(tw) = t(Aw) = t \cdot 0 = 0$ ✓

---

## 8. Null Space / Kernel (NEW)

The **null space** (or **kernel**) of a matrix A is the set of all solutions to $Ax = 0$:

$$\text{Null}(A) = \ker(A) = \{x \in \mathbb{R}^n \mid Ax = 0\}$$

### Properties
- The null space always contains the zero vector
- If $u$ and $v$ are in $\text{Null}(A)$, then $u + v$ is also in $\text{Null}(A)$ (closed under addition)
- If $u \in \text{Null}(A)$ and $c \in \mathbb{R}$, then $cu \in \text{Null}(A)$ (closed under scalar multiplication)

This means the null space is a **subspace** (we'll formalize this in Topic 5: Vectors and Spaces).

### How to Find the Null Space

1. Set up the augmented matrix $[A \mid 0]$
2. Row reduce to RREF
3. Express dependent variables in terms of free variables
4. Write the general solution as a linear combination of basic vectors

**Example:**
$$A = \begin{bmatrix} 1 & 0 & 2 \\ 0 & 1 & 3 \end{bmatrix}$$

RREF is already achieved. From $x_1 + 2x_3 = 0$ and $x_2 + 3x_3 = 0$:

Set $x_3 = t$: $x_1 = -2t, \; x_2 = -3t$

$$\text{Null}(A) = \left\{ t\begin{bmatrix} -2 \\ -3 \\ 1 \end{bmatrix} \;\middle|\; t \in \mathbb{R} \right\}$$

The null space is a line through the origin in $\mathbb{R}^3$.

---

## 9. Computing the Inverse via Row Reduction

For a square matrix A, we can find $A^{-1}$ by row reducing the augmented matrix $[A \mid I]$:

$$[A \mid I] \xrightarrow{\text{row reduce}} [I \mid A^{-1}]$$

If A reduces to the identity, then the right side gives $A^{-1}$. If A cannot be reduced to I (a zero row appears on the left), then A is **not invertible**.

**Example:**
$$\left[\begin{array}{cc|cc} 2 & 4 & 1 & 0 \\ 3 & 8 & 0 & 1 \end{array}\right] \xrightarrow{R_1 \to \frac{1}{2}R_1} \left[\begin{array}{cc|cc} 1 & 2 & \frac{1}{2} & 0 \\ 3 & 8 & 0 & 1 \end{array}\right]$$

$$\xrightarrow{R_2 \to R_2 - 3R_1} \left[\begin{array}{cc|cc} 1 & 2 & \frac{1}{2} & 0 \\ 0 & 2 & -\frac{3}{2} & 1 \end{array}\right] \xrightarrow{R_2 \to \frac{1}{2}R_2} \left[\begin{array}{cc|cc} 1 & 2 & \frac{1}{2} & 0 \\ 0 & 1 & -\frac{3}{4} & \frac{1}{2} \end{array}\right]$$

$$\xrightarrow{R_1 \to R_1 - 2R_2} \left[\begin{array}{cc|cc} 1 & 0 & 2 & -1 \\ 0 & 1 & -\frac{3}{4} & \frac{1}{2} \end{array}\right]$$

So $A^{-1} = \begin{bmatrix} 2 & -1 \\ -\frac{3}{4} & \frac{1}{2} \end{bmatrix}$.

---

## 10. Summary

| Concept | Key Point |
|---|---|
| System $Ax = b$ | m equations, n unknowns |
| Row operations | Interchange, scale, add — preserve solutions |
| REF / RREF | Defined in [[1 - MATRICES]]; used here for solving systems |
| Free variables | Columns without pivots → parameters in solution |
| Gaussian elimination | Augment $[A\mid b]$, reduce to RREF, read solutions |
| No solution | Zero row on left, nonzero on right |
| Homogeneous $Ax=0$ | Always has $x=0$; $n>m$ guarantees nontrivial solutions |
| Null space | $\{x : Ax = 0\}$ — always a subspace |
| Inverse via row reduction | $[A \mid I] \to [I \mid A^{-1}]$ |
