# BASIS AND RANK

## 1. Span and Spanning Sets

### Definition of Span

The **span** of a set of vectors $S = \{v_1, v_2, \ldots, v_k\}$ is the set of **all possible linear combinations** of vectors in $S$:

$$\text{span}(S) = \{a_1 v_1 + a_2 v_2 + \cdots + a_k v_k \mid a_1, a_2, \ldots, a_k \in \mathbb{R}\}$$

**Convention:** $\text{span}(\emptyset) = \{0\}$ (the span of the empty set is just the zero vector).

**Key property:** $\text{span}(S)$ is always a **subspace** of the vector space $V$. If you add two vectors in the span, the result is still in the span; if you scale a vector in the span, the result is still in the span.

### Examples

**In $\mathbb{R}^2$:**
- $\text{span}\{(1, 0)\} = \{(a, 0) \mid a \in \mathbb{R}\}$ = the x-axis (a line)
- $\text{span}\{(1, 1)\} = \{(a, a) \mid a \in \mathbb{R}\}$ = the line $y = x$
- $\text{span}\{(1, 0), (0, 1)\} = \mathbb{R}^2$ (the entire plane)

**In $\mathbb{R}^3$:**
- $\text{span}\{(1, 0, 0), (0, 1, 0)\} = \{(a, b, 0) \mid a, b \in \mathbb{R}\}$ = the xy-plane
- $\text{span}\{(1, 0, 0), (0, 1, 0), (0, 0, 1)\} = \mathbb{R}^3$

### Spanning Sets

A set $S$ is a **spanning set** for a vector space $V$ if $\text{span}(S) = V$, meaning every vector in $V$ can be written as a linear combination of vectors from $S$.

**Key facts about spanning sets:**
- If $S$ is a spanning set for $V$ and $S \subseteq T$, then $T$ is also a spanning set for $V$ (supersets of spanning sets are spanning)
- If $T \subseteq \text{span}(S)$, then $\text{span}(T) \subseteq \text{span}(S)$

### Building a Spanning Set by Appending

You can construct a spanning set for $\mathbb{R}^n$ by starting with the empty set and repeatedly **appending** vectors that lie **outside** the current span:

**Example for $\mathbb{R}^3$:**

1. $S_0 = \emptyset$, $\text{span}(S_0) = \{(0,0,0)\}$ — not all of $\mathbb{R}^3$
2. Append $(0, 2, 1)$ (outside $\text{span}(S_0)$): $S_1 = \{(0,2,1)\}$, $\text{span}(S_1)$ = a line
3. Append $(2, 2, 0)$ (outside $\text{span}(S_1)$): $S_2 = \{(0,2,1), (2,2,0)\}$, $\text{span}(S_2)$ = a plane
4. Append $(0, 0, 5)$ (outside $\text{span}(S_2)$): $S_3 = \{(0,2,1), (2,2,0), (0,0,5)\}$, $\text{span}(S_3) = \mathbb{R}^3$ ✓

Any vector $(x, y, z)$ can be written as a linear combination:
$$(x,y,z) = \frac{y-x}{2}(0,2,1) + \frac{x}{2}(2,2,0) + \frac{x-y+2z}{10}(0,0,5)$$

---

## 2. Basis

### Definition

A **basis** $B$ of a vector space $V$ is a set of vectors that is:
1. **Linearly independent** — the only combination giving zero is the trivial one
2. **Spanning** — every vector in $V$ can be written as a linear combination of vectors in $B$

A basis achieves an **optimal balance**: large enough to span $V$, but small enough to remain linearly independent.

### Unique Representation

If $B = \{v_1, v_2, \ldots, v_n\}$ is a basis for $V$, then every vector $v \in V$ can be written **uniquely** as:

$$v = a_1 v_1 + a_2 v_2 + \cdots + a_n v_n$$

- **Spanning** guarantees that such a representation **exists**
- **Linear independence** guarantees that the coefficients $a_1, \ldots, a_n$ are **unique**

### Equivalent Characterizations

The following conditions on a subset $B$ of $V$ are equivalent:

| Condition | Description |
|-----------|-------------|
| Basis | Linearly independent and spanning |
| Maximal linearly independent set | Linearly independent, and appending any vector makes it dependent |
| Minimal spanning set | Spanning, and removing any vector makes it no longer spanning |

**Why basis $\implies$ maximal linearly independent:**
If $B$ is a basis and you append any vector $v$, then $v \in \text{span}(B)$ (since $B$ spans $V$). So $v$ is a linear combination of vectors in $B$, making $B \cup \{v\}$ linearly dependent.

**Why basis $\implies$ minimal spanning:**
If $B$ is a basis and you remove a vector $v_k$, then $v_k$ cannot be a linear combination of the remaining vectors (since $B$ is linearly independent). So $v_k \notin \text{span}(B \setminus \{v_k\})$, meaning $B \setminus \{v_k\}$ no longer spans $V$.

**Why maximal linearly independent $\implies$ basis:**
Suppose $B$ is maximal linearly independent. Take any $v \in V$. Since $B \cup \{v\}$ is linearly dependent, $v$ must be a linear combination of vectors in $B$ (otherwise $B$ itself would be dependent, contradicting the assumption). So $B$ spans $V$.

### The Standard Basis

For $\mathbb{R}^n$, the **standard basis** is $\{e_1, e_2, \ldots, e_n\}$ where:

$$e_i = (0, \ldots, 0, \underbrace{1}_{i\text{-th}}, 0, \ldots, 0)$$

**Why it's a basis:**
- **Spanning:** Any $(x_1, x_2, \ldots, x_n) = x_1 e_1 + x_2 e_2 + \cdots + x_n e_n$ ✓
- **Independent:** If $a_1 e_1 + \cdots + a_n e_n = 0$, then $(a_1, a_2, \ldots, a_n) = (0, 0, \ldots, 0)$, so all $a_i = 0$ ✓

**Examples:**
- Standard basis for $\mathbb{R}^2$: $\{(1,0), (0,1)\}$
- Standard basis for $\mathbb{R}^3$: $\{(1,0,0), (0,1,0), (0,0,1)\}$

### Non-Standard Bases

The standard basis is not the only basis! For example:
- $\{(1, 1), (0, 1)\}$ is also a basis for $\mathbb{R}^2$ (linearly independent and spanning)
- $\{(1, 2), (2, 3)\}$ is also a basis for $\mathbb{R}^2$

---

## 3. Finding Bases

### Method 1: Append (Build Up)

Start with the empty set and keep appending vectors that are **not in the span** of the current set:

1. Start with $S_0 = \emptyset$
2. Choose any nonzero vector $v_1$; set $S_1 = \{v_1\}$
3. Choose $v_2 \notin \text{span}(S_1)$; set $S_2 = \{v_1, v_2\}$
4. Continue until $\text{span}(S_k) = V$

The resulting set is a basis (linearly independent by construction, spanning by termination).

**Example:** Find a basis for $\mathbb{R}^2$ starting from scratch:
1. Choose $(1, 2)$: $\text{span}\{(1,2)\}$ = line $y = 2x$, not all of $\mathbb{R}^2$
2. Choose $(2, 3) \notin \text{span}\{(1,2)\}$: $\text{span}\{(1,2), (2,3)\} = \mathbb{R}^2$ ✓

So $\{(1,2), (2,3)\}$ is a basis for $\mathbb{R}^2$.

### Method 2: Delete (Trim Down)

Start with a spanning set and keep **removing** vectors that are linear combinations of the others:

1. Start with a spanning set $S$
2. Find a vector $v \in S$ that is a linear combination of the others
3. Remove $v$ from $S$
4. Repeat until no vector can be removed

The resulting set is a basis (spanning is maintained, linear independence is achieved at termination).

> **ERROR FIX:** In the lectures, "spending set" appears in place of "spanning set" — the correct term is **spanning set**.

**Example:** Find a basis for $\mathbb{R}^3$ from the spanning set $S = \{(1,0,0), (1,2,0), (1,0,3), (0,2,3), (0,4,2)\}$:

1. Observe: $(0,4,2) = 2(1,2,0) + \frac{2}{3}(1,0,3) - \frac{8}{3}(1,0,0)$ → delete $(0,4,2)$
2. Observe: $(0,2,3) = (1,2,0) + (1,0,3) - 2(1,0,0)$ → delete $(0,2,3)$
3. Remaining: $\{(1,0,0), (1,2,0), (1,0,3)\}$ — none is a combination of the others ✓

So $\{(1,0,0), (1,2,0), (1,0,3)\}$ is a basis for $\mathbb{R}^3$.

---

## 4. Dimension

### Definition

The **dimension** (or **rank**) of a vector space $V$, denoted $\dim(V)$, is the **number of elements in any basis** of $V$.

### Why This Is Well-Defined (NEW)

This definition only makes sense because of the following theorem:

> **Theorem:** All bases of a vector space $V$ have the **same number of elements**.

**Proof sketch:** Suppose $B = \{v_1, \ldots, v_m\}$ and $B' = \{w_1, \ldots, w_n\}$ are both bases for $V$. Since $B$ is linearly independent and $B'$ spans $V$, we must have $m \leq n$ (a linearly independent set cannot be larger than a spanning set — this follows from the fact that more than $n$ vectors in $\mathbb{R}^n$ are always dependent). By symmetry (swapping the roles of $B$ and $B'$), $n \leq m$. Therefore $m = n$.

### Key Examples

| Vector Space | Standard Basis | Dimension |
|---|---|---|
| $\mathbb{R}^n$ | $\{e_1, e_2, \ldots, e_n\}$ | $n$ |
| $\mathbb{R}^2$ | $\{(1,0), (0,1)\}$ | 2 |
| $\mathbb{R}^3$ | $\{(1,0,0), (0,1,0), (0,0,1)\}$ | 3 |
| $\{0\}$ (zero space) | $\emptyset$ | 0 |

### Dimension of Subspaces

**Example:** Find $\dim(W)$ where $W = \text{span}\{(1,0,0), (0,1,0), (3,5,0)\}$ in $\mathbb{R}^3$.

Since $(3,5,0) = 3(1,0,0) + 5(0,1,0)$, delete it. The remaining $\{(1,0,0), (0,1,0)\}$ is linearly independent and spans $W$.

So $\dim(W) = 2$. Geometrically, $W$ is the xy-plane.

---

## 5. Column Space and Row Space

### Column Space

The **column space** of a matrix $A$ (denoted $\text{Col}(A)$) is the subspace of $\mathbb{R}^m$ spanned by the **columns** of $A$:

$$\text{Col}(A) = \text{span}\{\text{columns of } A\} = \{Ax \mid x \in \mathbb{R}^n\}$$

### Row Space

The **row space** of a matrix $A$ (denoted $\text{Row}(A)$) is the subspace of $\mathbb{R}^n$ spanned by the **rows** of $A$:

$$\text{Row}(A) = \text{span}\{\text{rows of } A\}$$

### Column Rank and Row Rank

| Concept | Definition |
|---------|-----------|
| **Column rank** | $\dim(\text{Col}(A))$ = dimension of the column space |
| **Row rank** | $\dim(\text{Row}(A))$ = dimension of the row space |

### Column Rank Equals Row Rank (NEW)

> **Theorem:** For any matrix $A$, the column rank equals the row rank.

This is a fundamental result. We call this common value the **rank of A**.

**Why this is true (intuitive justification):**
When you row reduce $A$ to REF, the number of pivots equals:
- The number of nonzero rows (which determines the row rank)
- The number of pivot columns (which determines the column rank)

Since both are counted by the same set of pivots, they must be equal.

**More precisely:** Row operations do not change the row space (each new row is a linear combination of the old rows). After row reduction to REF, the nonzero rows are linearly independent (due to the staircase pattern of pivots), so their count gives the row rank. Meanwhile, the pivot columns of the RREF identify which original columns of $A$ are linearly independent, and their count gives the column rank. Both counts equal the number of pivots.

---

## 6. Prerequisites

The computations below use **elementary row operations** (defined in [[1 - MATRICES]], Section 8) to reduce matrices to **REF/RREF** (defined in [[1 - MATRICES]], Section 12). The full row reduction algorithm is covered in [[2 - SOLVING SYSTEMS]].

**Key fact:** Row operations preserve the row space and linear dependency relations among columns, which is why they can be used to find bases and compute rank.

---

## 7. Rank of a Matrix

> **Basic definition and properties** of matrix rank are covered in [[1 - MATRICES]], Section 14. Here we connect rank to the column space, row space, and basis-finding methods developed in this file.

The rank of $A$ equals:
- The dimension of $\text{Col}(A)$ (column rank)
- The dimension of $\text{Row}(A)$ (row rank)
- The number of pivots in the REF of $A$
- The number of nonzero rows after row reduction

---

## 8. Finding Bases Using Gaussian Elimination

### The Row Method

Place the spanning vectors as **rows** of a matrix, row reduce, and take the **nonzero rows** as a basis.

**Procedure:**
1. Form matrix $A$ with spanning vectors as rows
2. Row reduce to REF (or RREF)
3. **Dimension** = number of nonzero rows
4. **Basis** = the nonzero rows of the reduced matrix

**Example:** Find a basis for $W = \text{span}\{(1,0,1), (-2,-3,1), (3,3,0)\}$.

$$A = \begin{bmatrix} 1 & 0 & 1 \\ -2 & -3 & 1 \\ 3 & 3 & 0 \end{bmatrix}$$

Row reduce:
- $R_2 \to R_2 + 2R_1$, $R_3 \to R_3 - 3R_1$:

$$\begin{bmatrix} 1 & 0 & 1 \\ 0 & -3 & 3 \\ 0 & 3 & -3 \end{bmatrix}$$

- $R_2 \to -\frac{1}{3}R_2$:

$$\begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & -1 \\ 0 & 3 & -3 \end{bmatrix}$$

- $R_3 \to R_3 - 3R_2$:

$$\begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{bmatrix}$$

Two nonzero rows → $\dim(W) = 2$.

Basis: $\{(1, 0, 1), (0, 1, -1)\}$.

**Note:** The row method produces basis vectors that may **differ** from the original spanning vectors.

### The Column Method (NEW)

Place the spanning vectors as **columns** of a matrix, row reduce, and identify the **pivot columns**. The corresponding **original vectors** form a basis.

**Procedure:**
1. Form matrix $A$ with spanning vectors as **columns**
2. Row reduce to REF (or RREF)
3. Identify which columns contain **pivots**
4. The corresponding columns of the **original** matrix $A$ form a basis

### Why Pivot Columns Form a Basis (NEW)

This is a key fact that deserves explanation:

> **Theorem:** The pivot columns of $A$ (i.e., the columns of the original matrix $A$ corresponding to pivot positions in the RREF) form a basis for $\text{Col}(A)$.

**Why it works:**
- **Linear independence:** If the pivot columns of $A$ were linearly dependent, say $\sum a_i c_i = 0$ (nontrivially), then the same coefficients would give a nontrivial solution to $Ax = 0$ with nonzero entries only in pivot positions. But in the RREF, each pivot variable is determined uniquely — the system $Rx = 0$ forces all pivot variables to zero when free variables are zero. Contradiction.
- **Spanning:** Any non-pivot column of the RREF can be written as a linear combination of the pivot columns (read off the RREF). Because row reduction preserves linear dependency relations among columns, the same relationship holds for the original columns. So every column of $A$ is a linear combination of the pivot columns, and thus the pivot columns span $\text{Col}(A)$.

**Important:** Use the columns of the **original** matrix $A$, not the RREF! Row reduction changes the actual column vectors but preserves which columns are linearly independent.

### Column Method Example 1

Find a basis for $W = \text{span}\{(1,0,1), (-2,-3,1), (3,3,0)\}$ using the column method.

Form matrix with vectors as **columns**:

$$A = \begin{bmatrix} 1 & -2 & 3 \\ 0 & -3 & 3 \\ 1 & 1 & 0 \end{bmatrix}$$

Row reduce:
- $R_3 \to R_3 - R_1$:

$$\begin{bmatrix} 1 & -2 & 3 \\ 0 & -3 & 3 \\ 0 & 3 & -3 \end{bmatrix}$$

- $R_2 \to -\frac{1}{3}R_2$:

$$\begin{bmatrix} 1 & -2 & 3 \\ 0 & 1 & -1 \\ 0 & 3 & -3 \end{bmatrix}$$

- $R_3 \to R_3 - 3R_2$:

$$\begin{bmatrix} 1 & -2 & 3 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{bmatrix}$$

Pivots in columns 1 and 2. So the **original** vectors corresponding to columns 1 and 2 form a basis:

$$\text{Basis} = \{(1, 0, 1), (-2, -3, 1)\}$$

$\dim(W) = 2$.

### Column Method Example 2

Find a basis for $W = \text{span}\{(1,-2,0,4), (3,1,1,0), (-1,-5,-1,8), (3,8,2,-12)\}$ in $\mathbb{R}^4$.

Form matrix with vectors as columns:

$$A = \begin{bmatrix} 1 & 3 & -1 & 3 \\ -2 & 1 & -5 & 8 \\ 0 & 1 & -1 & 2 \\ 4 & 0 & 8 & -12 \end{bmatrix}$$

Row reduce:
- $R_2 \to R_2 + 2R_1$, $R_4 \to R_4 - 4R_1$:

$$\begin{bmatrix} 1 & 3 & -1 & 3 \\ 0 & 7 & -7 & 14 \\ 0 & 1 & -1 & 2 \\ 0 & -12 & 12 & -24 \end{bmatrix}$$

- $R_2 \to \frac{1}{7}R_2$:

$$\begin{bmatrix} 1 & 3 & -1 & 3 \\ 0 & 1 & -1 & 2 \\ 0 & 1 & -1 & 2 \\ 0 & -12 & 12 & -24 \end{bmatrix}$$

- $R_3 \to R_3 - R_2$, $R_4 \to R_4 + 12R_2$:

$$\begin{bmatrix} 1 & 3 & -1 & 3 \\ 0 & 1 & -1 & 2 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}$$

Pivots in columns 1 and 2. So the basis consists of the **original** vectors from columns 1 and 2:

$$\text{Basis} = \{(1, -2, 0, 4), (3, 1, 1, 0)\}$$

$\dim(W) = 2$.

### Row Method vs Column Method

| Feature | Row Method | Column Method |
|---------|-----------|---------------|
| Vector placement | Vectors as **rows** | Vectors as **columns** |
| Basis vectors | Nonzero rows of REF (new vectors) | Original vectors at pivot columns |
| Preserves original vectors? | **No** | **Yes** |
| Gives dimension? | Yes (count nonzero rows) | Yes (count pivots) |

---

## 9. The Rank-Nullity Theorem (NEW)

### Statement

For an $m \times n$ matrix $A$:

$$\text{rank}(A) + \text{nullity}(A) = n$$

where:
- $\text{rank}(A)$ = number of pivot columns = dimension of column space
- $\text{nullity}(A)$ = number of free variables = dimension of null space
- $n$ = number of columns = number of unknowns

### Why It's True

After row reducing $A$, every column is either a **pivot column** or a **free column**:
- Pivot columns correspond to **dependent (pivot) variables** → contribute to rank
- Free columns correspond to **free variables** → contribute to nullity

Since every column is one or the other:

$$\underbrace{\text{pivot columns}}_{\text{rank}} + \underbrace{\text{free columns}}_{\text{nullity}} = \underbrace{\text{total columns}}_{n}$$

### Example

$$A = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 2 & 1 & 3 \end{bmatrix} \xrightarrow{\text{RREF}} \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{bmatrix}$$

- Pivots in columns 1 and 2 → $\text{rank}(A) = 2$
- Column 3 is free → $\text{nullity}(A) = 1$
- Check: $2 + 1 = 3 = n$ ✓

### Consequences

| If... | Then... |
|-------|---------|
| $\text{rank}(A) = n$ | Nullity = 0, so $Ax = 0$ has only the trivial solution |
| $\text{rank}(A) < n$ | There are free variables, so $Ax = 0$ has infinitely many solutions |
| $\text{rank}(A) = m$ (full row rank) | Every $b$ gives a solvable system $Ax = b$ |
| $\text{rank}(A) = m = n$ | $A$ is invertible |

---

## 10. Summary

| Concept | Key Point |
|---|---|
| Span | Set of all linear combinations; always a subspace |
| Spanning set | A set whose span equals the full vector space $V$ |
| Basis | Linearly independent spanning set |
| Equivalent conditions | Basis = maximal independent = minimal spanning |
| Standard basis for $\mathbb{R}^n$ | $\{e_1, e_2, \ldots, e_n\}$ |
| Unique representation | Every vector has a unique expression in terms of a basis |
| Dimension | Number of elements in any basis; well-defined because all bases have the same size |
| $\dim(\mathbb{R}^n)$ | $n$ |
| Column space | $\text{span}$ of columns of $A$; equals $\{Ax : x \in \mathbb{R}^n\}$ |
| Row space | $\text{span}$ of rows of $A$ |
| Rank of a matrix | $\dim(\text{Col}(A)) = \dim(\text{Row}(A))$ = number of pivots |
| Row method | Vectors as rows → row reduce → nonzero rows = basis |
| Column method | Vectors as columns → row reduce → pivot columns of **original** matrix = basis |
| Rank-Nullity | $\text{rank}(A) + \text{nullity}(A) = n$ (number of columns) |
