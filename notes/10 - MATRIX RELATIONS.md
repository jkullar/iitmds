# MATRIX EQUIVALENCE, SIMILARITY AND AFFINE MAPS

This file covers three closely related ideas that connect the algebra of matrices to the geometry of linear transformations and solution sets. **Matrix equivalence** captures when two matrices represent the same linear map under (possibly different) changes of basis in the domain and codomain. **Matrix similarity** is the important special case where domain and codomain coincide and we use the *same* change of basis on both sides — this preserves deep structural invariants such as the determinant and eigenvalues. **Affine subspaces** and **affine mappings** extend the language of linear algebra to handle objects (like solution sets of non-homogeneous systems) that are *translates* of vector subspaces. Together, these topics answer the questions: *When do two matrices encode the same underlying transformation? How do we pass between different matrix representations? What geometric object does a general solution set form?*

Prerequisites: [[1 - MATRICES]], [[5 - VECTORS AND SPACES]], [[9 - TRANSFORMATIONS]].

---

## 1. Equivalence Relations (Review)

Before defining equivalence and similarity of matrices, we recall the abstract notion that underlies both.

### Definition

An **equivalence relation** on a set $S$ is a relation $\sim$ satisfying three axioms:

| Property | Statement | Meaning |
|---|---|---|
| **Reflexivity** | $a \sim a$ for all $a \in S$ | Every element is related to itself |
| **Symmetry** | $a \sim b \implies b \sim a$ | The relation is bidirectional |
| **Transitivity** | $a \sim b$ and $b \sim c \implies a \sim c$ | The relation chains |

An equivalence relation partitions $S$ into disjoint **equivalence classes**: every element belongs to exactly one class, and two elements are in the same class if and only if they are related.

> **Clarification:** Both "equivalence of matrices" and "similarity of matrices" are equivalence relations in this abstract sense. We verify the three axioms explicitly for each.

---

## 2. Matrix Equivalence

### Definition

Let $A, B \in \mathbb{R}^{m \times n}$ (both $m \times n$). We say $A$ is **equivalent** to $B$, written $A \sim B$, if there exist invertible matrices $Q \in \mathbb{R}^{m \times m}$ and $P \in \mathbb{R}^{n \times n}$ such that

$$B = QAP.$$

Equivalently, $B$ can be obtained from $A$ by a sequence of elementary row operations (encoded by $Q$) and elementary column operations (encoded by $P$). See [[1 - MATRICES]] for elementary matrices.

### Equivalence Is an Equivalence Relation

We verify the three axioms.

**Reflexivity.** For any $A \in \mathbb{R}^{m \times n}$,

$$A = I_m \, A \, I_n,$$

where $I_m$ and $I_n$ are the identity matrices of appropriate sizes. Both are invertible, so $A \sim A$.

**Symmetry.** Suppose $A \sim B$, so $B = QAP$ with $Q, P$ invertible. Then

$$A = Q^{-1} B \, P^{-1}.$$

Since $Q^{-1}$ and $P^{-1}$ are invertible, this shows $B \sim A$.

**Transitivity.** Suppose $A \sim B$ and $B \sim C$. Then $B = Q_1 A P_1$ and $C = Q_2 B P_2$. Substituting:

$$C = Q_2 (Q_1 A P_1) P_2 = (Q_2 Q_1) A (P_1 P_2).$$

The products $Q_2 Q_1$ and $P_1 P_2$ are invertible (the product of invertible matrices is invertible), so $A \sim C$.

Because the relation is symmetric, we may simply say "$A$ and $B$ are equivalent" without specifying direction.

### The Rank Characterisation

**Theorem.** Two matrices $A, B \in \mathbb{R}^{m \times n}$ are equivalent if and only if $\text{rank}(A) = \text{rank}(B)$.

**Proof sketch.** By performing row and column operations, any $m \times n$ matrix of rank $r$ can be reduced to the **canonical form**

$$D_r = \begin{bmatrix} I_r & 0 \\ 0 & 0 \end{bmatrix} \in \mathbb{R}^{m \times n},$$

where $I_r$ is the $r \times r$ identity. If $\text{rank}(A) = \text{rank}(B) = r$, then both $A$ and $B$ are equivalent to $D_r$, and by transitivity, $A \sim B$. Conversely, multiplying by invertible matrices does not change rank (see [[1 - MATRICES]]), so equivalent matrices must share the same rank. $\blacksquare$

> **Clarification:** The canonical form $D_r$ is the *simplest* representative of each equivalence class. Every equivalence class is uniquely determined by a single integer $r$ with $0 \le r \le \min(m, n)$.

### Connection to Linear Transformations

Let $T: V \to W$ be a linear transformation. Choose ordered bases $\beta_1$ for $V$ and $\gamma_1$ for $W$; the matrix of $T$ with respect to these bases is $A = [T]_{\beta_1}^{\gamma_1}$. Now choose different ordered bases $\beta_2$ and $\gamma_2$; the matrix becomes $B = [T]_{\beta_2}^{\gamma_2}$. Then

$$B = QAP,$$

where:

- $P$ is the **change-of-basis matrix** from $\beta_2$ to $\beta_1$ (express each vector in $\beta_2$ as a linear combination of vectors in $\beta_1$; the coefficients form the columns of $P$),
- $Q$ is the **change-of-basis matrix** from $\gamma_1$ to $\gamma_2$ (express each vector in $\gamma_1$ as a linear combination of vectors in $\gamma_2$; the coefficients form the columns of $Q$).

Thus **two matrices are equivalent if and only if they represent the same linear transformation (between possibly different pairs of bases)**.

### Worked Example

**Example:** Let $f: \mathbb{R}^3 \to \mathbb{R}^2$ be defined by $f(x, y, z) = (x + y,\; y + z)$.

Consider the ordered bases:

- $\beta_1 = \{e_1, e_2, e_3\}$ (standard basis of $\mathbb{R}^3$), $\quad \gamma_1 = \{e_1, e_2\}$ (standard basis of $\mathbb{R}^2$).
- $\beta_2 = \{(1,1,0),\; (0,1,1),\; (0,0,1)\}$, $\quad \gamma_2 = \{(1,0),\; (1,1)\}$.

**Solution — Matrix $A$ (with respect to $\beta_1, \gamma_1$):**

$$f(1,0,0) = (1,0) = 1 \cdot e_1 + 0 \cdot e_2$$
$$f(0,1,0) = (1,1) = 1 \cdot e_1 + 1 \cdot e_2$$
$$f(0,0,1) = (0,1) = 0 \cdot e_1 + 1 \cdot e_2$$

$$A = [f]_{\beta_1}^{\gamma_1} = \begin{bmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \end{bmatrix}.$$

**Solution — Matrix $B$ (with respect to $\beta_2, \gamma_2$):**

$$f(1,1,0) = (2,1) = 1 \cdot (1,0) + 1 \cdot (1,1)$$
$$f(0,1,1) = (1,2) = -1 \cdot (1,0) + 2 \cdot (1,1)$$
$$f(0,0,1) = (0,1) = -1 \cdot (1,0) + 1 \cdot (1,1)$$

$$B = [f]_{\beta_2}^{\gamma_2} = \begin{bmatrix} 1 & -1 & -1 \\ 1 & 2 & 1 \end{bmatrix}.$$

**Finding $P$ and $Q$:**

For $P$: express each vector of $\beta_2$ in terms of $\beta_1$ (the standard basis, so coordinates are immediate):

$$P = \begin{bmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 0 & 1 & 1 \end{bmatrix}.$$

For $Q$: express each vector of $\gamma_1$ in terms of $\gamma_2$. We need $(1,0)$ and $(0,1)$ in terms of $\{(1,0),\;(1,1)\}$:

$$(1,0) = 1 \cdot (1,0) + 0 \cdot (1,1), \qquad (0,1) = -1 \cdot (1,0) + 1 \cdot (1,1).$$

$$Q = \begin{bmatrix} 1 & -1 \\ 0 & 1 \end{bmatrix}.$$

**Verification:** Compute $QAP$:

$$QAP = \begin{bmatrix} 1 & -1 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 0 & 1 & 1 \end{bmatrix}.$$

First, $QA$:

$$QA = \begin{bmatrix} 1 & 0 & -1 \\ 0 & 1 & 1 \end{bmatrix}.$$

Then $(QA)P$:

$$\begin{bmatrix} 1 & 0 & -1 \\ 0 & 1 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 0 & 1 & 1 \end{bmatrix} = \begin{bmatrix} 1 & -1 & -1 \\ 1 & 2 & 1 \end{bmatrix} = B. \checkmark$$

---

## 3. Matrix Similarity

### Definition

Let $A, B \in \mathbb{R}^{n \times n}$ (both square, same size). We say $A$ is **similar** to $B$, written $A \sim B$, if there exists an invertible matrix $P \in \mathbb{R}^{n \times n}$ such that

$$B = P^{-1}AP.$$

Equivalently, $A = PBP^{-1}$.

> **Clarification:** Similarity is a *special case* of equivalence where $Q = P^{-1}$. This is a much stronger requirement: whereas equivalence allows independent row and column operations, similarity ties them together through a single invertible matrix $P$.

### Similarity Is an Equivalence Relation

**Reflexivity.** $A = I^{-1}AI$, so $A$ is similar to itself.

**Symmetry.** Suppose $B = P^{-1}AP$. Multiplying on the left by $P$ and on the right by $P^{-1}$:

$$A = PBP^{-1} = (P^{-1})^{-1} B (P^{-1}).$$

Setting $P' = P^{-1}$ (which is invertible), we get $A = P'^{-1}BP'$, so $B$ is similar to $A$.

**Transitivity.** Suppose $B = P^{-1}AP$ and $C = Q^{-1}BQ$. Then

$$C = Q^{-1}(P^{-1}AP)Q = (PQ)^{-1} A (PQ).$$

Setting $R = PQ$, we get $C = R^{-1}AR$, so $A$ is similar to $C$.

Since the relation is symmetric, we simply say "$A$ and $B$ are **similar matrices**."

### Invariants of Similar Matrices

If $A$ and $B$ are similar, they share all of the following properties:

| Invariant | Reason |
|---|---|
| **Rank** | Similar $\implies$ equivalent, and equivalent matrices have the same rank |
| **Determinant** | $\det(P^{-1}AP) = \det(P^{-1})\det(A)\det(P) = \frac{1}{\det(P)}\det(A)\det(P) = \det(A)$ |
| **Trace** | $\text{tr}(P^{-1}AP) = \text{tr}(A P P^{-1}) = \text{tr}(A)$ (using the cyclic property of trace) |
| **Eigenvalues** | The characteristic polynomial is preserved (deeper treatment in a subsequent course) |
| **Characteristic polynomial** | $\det(B - \lambda I) = \det(P^{-1}AP - \lambda I) = \det(P^{-1}(A - \lambda I)P) = \det(A - \lambda I)$ |

> **Clarification:** Two matrices can have the same rank, determinant, and trace without being similar. Similarity is a finer relation than having the same individual invariants; the *entire* characteristic polynomial must agree.

### Connection to Linear Transformations

Let $T: V \to V$ be a linear transformation (note: the *same* vector space on both sides). Let $\beta$ and $\gamma$ be two ordered bases for $V$. Set

$$A = [T]_\beta, \qquad B = [T]_\gamma.$$

Then $A$ and $B$ are similar:

$$B = P^{-1}AP,$$

where $P$ is the **change-of-basis matrix from $\gamma$ to $\beta$**: the $j$-th column of $P$ is the coordinate vector of the $j$-th element of $\gamma$ expressed in the basis $\beta$.

> **Clarification:** For equivalence (Section 2), we had two potentially different vector spaces $V$ and $W$ with independent basis choices. For similarity, $V = W$ and we use the *same* basis on both sides. This forces $Q = P^{-1}$ rather than allowing $Q$ and $P$ to be unrelated.

### Constructing $P$ in Practice

To find $P$ such that $B = P^{-1}AP$:

1. Express each vector of the new basis $\gamma$ as a linear combination of the vectors in the old basis $\beta$.
2. Place the coefficients as columns: column $j$ of $P$ contains the coordinates of $\gamma_j$ relative to $\beta$.
3. Compute $P^{-1}$ (by row reduction or the adjugate formula for small matrices).
4. Verify $P^{-1}AP = B$.

### Worked Example 1: $\mathbb{R}^3 \to \mathbb{R}^3$

**Example:** Let $f: \mathbb{R}^3 \to \mathbb{R}^3$ be defined by

$$f(x, y, z) = (-x + y + z,\; x - y + z,\; x + y - z).$$

**Solution — Matrix $A$ (standard basis $\beta = \{e_1, e_2, e_3\}$):**

$$f(e_1) = (-1,1,1), \quad f(e_2) = (1,-1,1), \quad f(e_3) = (1,1,-1).$$

$$A = \begin{bmatrix} -1 & 1 & 1 \\ 1 & -1 & 1 \\ 1 & 1 & -1 \end{bmatrix}.$$

**Matrix $B$ (basis $\beta' = \{(1,1,1),\; (-1,1,0),\; (-1,0,1)\}$):**

$$f(1,1,1) = (1,1,1) = 1 \cdot (1,1,1) + 0 \cdot (-1,1,0) + 0 \cdot (-1,0,1)$$
$$f(-1,1,0) = (2,-2,0) = 0 \cdot (1,1,1) + (-2) \cdot (-1,1,0) + 0 \cdot (-1,0,1)$$
$$f(-1,0,1) = (2,0,-2) = 0 \cdot (1,1,1) + 0 \cdot (-1,1,0) + (-2) \cdot (-1,0,1)$$

$$B = \begin{bmatrix} 1 & 0 & 0 \\ 0 & -2 & 0 \\ 0 & 0 & -2 \end{bmatrix}.$$

This is a **diagonal matrix**! Each basis vector is simply scaled by $f$: the vector $(1,1,1)$ is scaled by $1$, while $(-1,1,0)$ and $(-1,0,1)$ are each scaled by $-2$.

**The change-of-basis matrix $P$:** Express each vector of $\beta'$ in terms of $\beta$ (which is the standard basis, so coordinates are immediate):

$$P = \begin{bmatrix} 1 & -1 & -1 \\ 1 & 1 & 0 \\ 1 & 0 & 1 \end{bmatrix}.$$

**Computing $P^{-1}$:** By row reduction (or cofactor expansion):

$$P^{-1} = \frac{1}{3}\begin{bmatrix} 1 & 1 & 1 \\ -1 & 2 & -1 \\ -1 & -1 & 2 \end{bmatrix}.$$

**Verification:** One can check that

$$P^{-1}AP = \frac{1}{3}\begin{bmatrix} 1 & 1 & 1 \\ -1 & 2 & -1 \\ -1 & -1 & 2 \end{bmatrix} \begin{bmatrix} -1 & 1 & 1 \\ 1 & -1 & 1 \\ 1 & 1 & -1 \end{bmatrix} \begin{bmatrix} 1 & -1 & -1 \\ 1 & 1 & 0 \\ 1 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & -2 & 0 \\ 0 & 0 & -2 \end{bmatrix} = B. \checkmark$$

### Worked Example 2: $\mathbb{R}^2 \to \mathbb{R}^2$

**Example:** Let $f: \mathbb{R}^2 \to \mathbb{R}^2$ be defined by $f(x,y) = (2x, y)$.

**Solution — Matrix $A$ (basis $\beta = \{(1,0),\;(1,1)\}$):**

$$f(1,0) = (2,0) = 2(1,0) + 0(1,1) \qquad f(1,1) = (2,1) = 1(1,0) + 1(1,1)$$

$$A = \begin{bmatrix} 2 & 1 \\ 0 & 1 \end{bmatrix}.$$

**Matrix $B$ (standard basis $\beta' = \{e_1, e_2\}$):**

$$f(1,0) = (2,0), \quad f(0,1) = (0,1).$$

$$B = \begin{bmatrix} 2 & 0 \\ 0 & 1 \end{bmatrix}.$$

Again $B$ is diagonal — $f$ scales the standard basis vectors.

**Change-of-basis matrix $P$:** Express each vector of $\beta'$ in terms of $\beta = \{(1,0),\;(1,1)\}$:

$$(1,0) = 1 \cdot (1,0) + 0 \cdot (1,1), \qquad (0,1) = -1 \cdot (1,0) + 1 \cdot (1,1).$$

$$P = \begin{bmatrix} 1 & -1 \\ 0 & 1 \end{bmatrix}, \qquad P^{-1} = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}.$$

**Verification:**

$$P^{-1}AP = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}\begin{bmatrix} 2 & 1 \\ 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & -1 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 2 & 2 \\ 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & -1 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 2 & 0 \\ 0 & 1 \end{bmatrix} = B. \checkmark$$

### Why Similarity Matters: Diagonalisation

The central motivation for studying similarity is the hope that a given matrix $A$ is similar to a **diagonal matrix** $D$. If $A = PDP^{-1}$, then:

- **Powers are easy:** $A^k = PD^kP^{-1}$, and $D^k$ is computed by raising each diagonal entry to the $k$-th power.
- **Geometric understanding:** The basis $\gamma$ (whose vectors form the columns of $P$) consists of directions that are merely *scaled* by the transformation.
- **Invariants are visible:** The diagonal entries of $D$ are the **eigenvalues** of $A$ (a concept explored in depth in subsequent courses).

Not every matrix is diagonalisable, but when it is, similarity provides the bridge between the "messy" representation and the "clean" diagonal one.

### Summary: Equivalence vs. Similarity

| | Equivalence | Similarity |
|---|---|---|
| **Applies to** | $m \times n$ matrices | $n \times n$ matrices only |
| **Relation** | $B = QAP$, $\;Q \in GL_m,\; P \in GL_n$ | $B = P^{-1}AP$, $\;P \in GL_n$ |
| **Basis interpretation** | Different bases for domain and codomain | Same basis change for domain = codomain |
| **Complete invariant** | Rank | Characteristic polynomial (and more) |
| **Every class contains** | A canonical form $D_r$ | A diagonal matrix (when diagonalisable) |

---

## 4. Affine Subspaces

### Definition

Let $V$ be a vector space over $\mathbb{R}$. An **affine subspace** of $V$ is a subset $L \subseteq V$ of the form

$$L = v + U = \{v + u : u \in U\},$$

where $v \in V$ is a fixed vector and $U \subseteq V$ is a vector subspace. We call $v$ the **support point** (or **translation vector**) and $U$ the **direction space** of $L$.

Geometrically, $L$ is obtained by taking the subspace $U$ and **translating** (shifting) it by $v$.

> **Clarification:** An affine subspace is generally *not* a subspace (it need not contain the zero vector). It is a subspace if and only if $v \in U$ (equivalently, if and only if $0 \in L$). In particular, every vector subspace is an affine subspace (take $v = 0$).

### Dimension

The **dimension** of an affine subspace $L = v + U$ is defined to be $\dim(U)$.

### Uniqueness of the Direction Space

**Theorem.** If $L = v + U = v' + U'$ for vectors $v, v'$ and subspaces $U, U'$, then $U = U'$.

*Proof sketch.* Since $v, v' \in L$, we have $v' = v + u_1$ for some $u_1 \in U$. Take any $u \in U$; then $v + u \in L = v' + U'$, so $v + u = v' + u'$ for some $u' \in U'$. This gives $u = (v' - v) + u' = u_1 + u'$, hence $u - u_1 = u' \in U'$. Since $u_1 \in U$ and $U$ is a subspace, $u - u_1 \in U$ implies $u' \in U$... Continuing this argument symmetrically shows $U \subseteq U'$ and $U' \subseteq U$, so $U = U'$. $\blacksquare$

> **Clarification:** While the direction space $U$ is unique, the translation vector $v$ is **not** unique: any vector $v' \in L$ can serve as the translation vector (since $L = v' + U$ as well). Specifically, $v$ can be replaced by $v + u$ for any $u \in U$.

### Affine Subspaces in $\mathbb{R}^2$

| Dimension | Geometric object | Form |
|---|---|---|
| $0$ | Point | $L = \{v\} = v + \{0\}$ |
| $1$ | Line (possibly not through origin) | $L = v + \text{span}\{w\}$ |
| $2$ | The entire plane $\mathbb{R}^2$ | $L = \mathbb{R}^2 = 0 + \mathbb{R}^2$ |

**Example (line in $\mathbb{R}^2$):** The line $y = 3x + 2$ is an affine subspace. We write:

$$L = (0, 2) + \{(t, 3t) : t \in \mathbb{R}\} = (0,2) + \text{span}\{(1,3)\}.$$

Here $v = (0,2)$ and $U = \text{span}\{(1,3)\}$ (the line $y = 3x$ through the origin).

**Non-example:** The parabola $\{(x, x^2) : x \in \mathbb{R}\}$ is not an affine subspace — it cannot be expressed as a translate of any subspace (it is curved, not flat).

### Affine Subspaces in $\mathbb{R}^3$

| Dimension | Geometric object | Parametric form |
|---|---|---|
| $0$ | Point | $L = \{v\}$ |
| $1$ | Line | $L = v + \text{span}\{w_1\}$ |
| $2$ | Plane (possibly not through origin) | $L = v + \text{span}\{w_1, w_2\}$ |
| $3$ | The entire space $\mathbb{R}^3$ | $L = \mathbb{R}^3$ |

**Example (plane in $\mathbb{R}^3$):** The plane $x + y + z = 1$ is an affine subspace. A particular point on it is $v = (1, 0, 0)$. The corresponding homogeneous equation $x + y + z = 0$ defines the direction space:

$$U = \{(x,y,z) : x + y + z = 0\} = \text{span}\{(-1,1,0),\; (-1,0,1)\}.$$

So $L = (1,0,0) + U$.

---

## 5. Solution Sets as Affine Subspaces

This is the most important application of affine subspaces in this course.

### Setup

Consider the linear system $Ax = b$ where $A \in \mathbb{R}^{m \times n}$, $x \in \mathbb{R}^n$, $b \in \mathbb{R}^m$.

There are three cases:

| Case | Condition | Solution set |
|---|---|---|
| **Homogeneous** ($b = 0$) | Always consistent | $\text{null}(A) = \{x : Ax = 0\}$, a subspace of $\mathbb{R}^n$ |
| **Inconsistent** | $b \notin \text{col}(A)$ | $\emptyset$ (empty set) |
| **Consistent, $b \neq 0$** | $b \in \text{col}(A)$, $b \neq 0$ | An affine subspace of $\mathbb{R}^n$ |

### The Structure Theorem

**Theorem.** If the system $Ax = b$ is consistent and $x_p$ is any **particular solution** (i.e., $Ax_p = b$), then the complete solution set is

$$L = x_p + \text{null}(A) = \{x_p + h : h \in \mathbb{R}^n,\; Ah = 0\}.$$

*Proof.* ($\supseteq$) If $h \in \text{null}(A)$, then $A(x_p + h) = Ax_p + Ah = b + 0 = b$, so $x_p + h$ is a solution.

($\subseteq$) If $x$ is any solution, then $A(x - x_p) = Ax - Ax_p = b - b = 0$, so $h = x - x_p \in \text{null}(A)$, hence $x = x_p + h \in x_p + \text{null}(A)$. $\blacksquare$

> **Clarification:** The "general solution = particular solution + homogeneous solution" principle is one of the most widely used ideas in all of applied mathematics. It appears again in differential equations, signal processing, optimisation, and elsewhere.

### Recipe for Finding the Complete Solution Set

1. **Find a particular solution $x_p$** by any method (e.g., row reduction of $[A \mid b]$, then read off a solution by setting free variables to zero).
2. **Find $\text{null}(A)$** by solving $Ax = 0$ (row reduce $[A \mid 0]$, express solution in terms of free variables).
3. **Write the general solution** as $x = x_p + h$, where $h$ ranges over $\text{null}(A)$.

### Worked Example

**Example:** Solve the system $Ax = b$ where

$$A = \begin{bmatrix} 1 & 2 & 1 \\ 2 & 4 & 3 \end{bmatrix}, \qquad b = \begin{bmatrix} 1 \\ 3 \end{bmatrix}.$$

**Solution.**

**Step 1: Find a particular solution.** Row reduce the augmented matrix:

$$