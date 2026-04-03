# LINEAR TRANSFORMATIONS AND MATRICES

This file develops the matrix machinery underlying linear transformations. Given a linear transformation $T: V \to W$ between finite-dimensional vector spaces, we show how to represent $T$ as a matrix once **ordered bases** are chosen for $V$ and $W$. We then define the **kernel** and **image** of $T$, connect them to the **null space** and **column space** of the representing matrix, and use row reduction to find bases for each. The key results are: (i) there is a bijection between linear transformations and matrices (once bases are fixed), (ii) injectivity of $T$ is equivalent to $\ker(T) = \{0\}$, (iii) surjectivity is equivalent to $\text{im}(T) = W$, and (iv) the rank–nullity theorem for linear transformations: $\dim(\text{im}(T)) + \dim(\ker(T)) = \dim(V)$.

Prerequisites: [[1 - MATRICES]], [[7 - BASIS AND RANK]], [[8 - LINEAR MAPS]].

---

## 1. Every Finite-Dimensional Vector Space Is Isomorphic to $\mathbb{R}^n$

Before discussing matrix representations, we establish a foundational fact: every $n$-dimensional vector space over $\mathbb{R}$ "looks like" $\mathbb{R}^n$.

### Statement

Let $V$ be a vector space with $\dim(V) = n$, and let $\{v_1, v_2, \dots, v_n\}$ be a basis for $V$. Define $\varphi: V \to \mathbb{R}^n$ by

$$\varphi\!\left(\sum_{i=1}^n c_i\, v_i\right) = \begin{bmatrix} c_1 \\ c_2 \\ \vdots \\ c_n \end{bmatrix}.$$

Then $\varphi$ is an **isomorphism** (a linear transformation that is also a bijection).

### Proof sketch

- **Well-defined:** Every $v \in V$ has a *unique* expression $v = \sum c_i v_i$ because $\{v_1, \dots, v_n\}$ is a basis. So $\varphi$ assigns a single output to each input.
- **Linear:** If $v = \sum c_i v_i$ and $u = \sum d_i v_i$, then $v + \alpha u = \sum (c_i + \alpha d_i) v_i$, so $\varphi(v + \alpha u) = \varphi(v) + \alpha\,\varphi(u)$.
- **Injective:** If $\varphi(v) = 0$, then every $c_i = 0$, so $v = 0$.
- **Surjective:** Given any $(x_1, \dots, x_n)^\top \in \mathbb{R}^n$, set $v = \sum x_i v_i$. Then $\varphi(v) = (x_1, \dots, x_n)^\top$.

The vector $\varphi(v) = (c_1, \dots, c_n)^\top$ is called the **coordinate vector** of $v$ with respect to the basis $\{v_1, \dots, v_n\}$.

### Example

**Example:** Let $W = \{(x, y, z) \in \mathbb{R}^3 : x + y + z = 0\}$. This is a 2-dimensional subspace of $\mathbb{R}^3$ with basis $\{(-1, 1, 0),\; (-1, 0, 1)\}$ (see [[7 - BASIS AND RANK]]).

**Solution:** Define $\varphi: W \to \mathbb{R}^2$ by $\varphi(x, y, z) = (y, z)$.

Why? Every $(x, y, z) \in W$ satisfies $x = -y - z$, so

$$(x, y, z) = y(-1, 1, 0) + z(-1, 0, 1).$$

Thus $\varphi$ sends the vector to its coordinates with respect to the chosen basis. This is an isomorphism: it is linear, injective (if $y = z = 0$ then $x = 0$), and surjective (given any $(y, z) \in \mathbb{R}^2$, choose $x = -y - z$).

> **Clarification:** The isomorphism $\varphi$ depends on the choice of basis. A different basis for $V$ gives a different isomorphism $V \to \mathbb{R}^n$. The coordinate vector of $v$ changes when you change the basis.

---

## 2. Ordered Bases

### Definition

An **ordered basis** for a vector space $V$ is a basis in which the order of the vectors is specified. Formally, it is a tuple $\beta = (v_1, v_2, \dots, v_n)$ rather than a set $\{v_1, \dots, v_n\}$.

### Why Order Matters

The ordered basis $\beta_1 = (e_1, e_2) = \bigl((1,0),\; (0,1)\bigr)$ and $\beta_2 = (e_2, e_1) = \bigl((0,1),\; (1,0)\bigr)$ contain the same vectors but are **different** ordered bases. The coordinate vector of $v = (3, 5)$ is:

- With respect to $\beta_1$: $\begin{bmatrix} 3 \\ 5 \end{bmatrix}$ since $v = 3e_1 + 5e_2$.
- With respect to $\beta_2$: $\begin{bmatrix} 5 \\ 3 \end{bmatrix}$ since $v = 5e_2 + 3e_1$.

Throughout this file, the symbol $\beta$ will always denote an ordered basis for the domain $V$ and $\gamma$ an ordered basis for the codomain $W$.

### The Standard Ordered Basis

The **standard ordered basis** for $\mathbb{R}^n$ is $\beta = (e_1, e_2, \dots, e_n)$, where $e_i$ has a 1 in position $i$ and 0 elsewhere. When we say "the standard basis" without further qualification, we always mean this ordering.

---

## 3. Matrix Representation of a Linear Transformation

### Construction

Let $T: V \to W$ be a linear transformation where $\dim(V) = n$ and $\dim(W) = m$. Let

$$\beta = (v_1, v_2, \dots, v_n) \quad \text{and} \quad \gamma = (w_1, w_2, \dots, w_m)$$

be ordered bases for $V$ and $W$ respectively. Since $T(v_j) \in W$ and $\gamma$ is a basis for $W$, we can write

$$T(v_j) = a_{1j}\, w_1 + a_{2j}\, w_2 + \cdots + a_{mj}\, w_m = \sum_{i=1}^{m} a_{ij}\, w_i, \qquad j = 1, 2, \dots, n.$$

The **matrix of** $T$ **with respect to** $\beta$ **and** $\gamma$ is the $m \times n$ matrix

$$[T]_\beta^\gamma = A = \begin{bmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{bmatrix}.$$

**Key rule:** The $j$-th column of $A$ consists of the coefficients obtained when $T(v_j)$ is expressed as a linear combination of the vectors in $\gamma$.

### How the Matrix Acts on Coordinate Vectors

If $v = c_1 v_1 + c_2 v_2 + \cdots + c_n v_n$, then by linearity of $T$:

$$T(v) = \sum_{j=1}^{n} c_j\, T(v_j) = \sum_{j=1}^{n} c_j \sum_{i=1}^{m} a_{ij}\, w_i = \sum_{i=1}^{m} \left(\sum_{j=1}^{n} a_{ij}\, c_j\right) w_i.$$

The coefficient of $w_i$ in $T(v)$ is $\sum_{j=1}^{n} a_{ij}\, c_j$, which is the $i$-th entry of the matrix product $A \mathbf{c}$, where $\mathbf{c} = (c_1, \dots, c_n)^\top$. In short:

$$[\,T(v)\,]_\gamma = A \, [\,v\,]_\beta$$

where $[v]_\beta$ denotes the coordinate vector of $v$ with respect to $\beta$.

### Example 1: Standard Bases

**Example:** Let $T: \mathbb{R}^2 \to \mathbb{R}^2$ be defined by $T(x, y) = (2x,\; y)$. Find the matrix of $T$ with respect to the standard ordered basis $\beta = \gamma = (e_1, e_2)$.

**Solution:**

$$T(e_1) = T(1, 0) = (2, 0) = 2e_1 + 0e_2, \qquad T(e_2) = T(0, 1) = (0, 1) = 0e_1 + 1e_2.$$

So the matrix is:

$$[T]_\beta^\gamma = \begin{bmatrix} 2 & 0 \\ 0 & 1 \end{bmatrix}.$$

This confirms the familiar fact: when $V = \mathbb{R}^n$, $W = \mathbb{R}^m$, and both bases are standard, the matrix representation is simply the matrix whose entries are the coefficients appearing in the definition of $T$.

### Example 2: Non-Standard Basis

**Example:** Same $T(x, y) = (2x, y)$, but now use $\beta = \gamma = \bigl((1,0),\; (1,1)\bigr)$.

**Solution:** Evaluate $T$ on each basis vector:

$$T(1, 0) = (2, 0), \qquad T(1, 1) = (2, 1).$$

Express each in terms of $\gamma = \bigl((1,0),\; (1,1)\bigr)$:

- $(2, 0) = 2(1,0) + 0(1,1)$, so the first column is $\begin{bmatrix} 2 \\ 0 \end{bmatrix}$.
- $(2, 1) = 1(1,0) + 1(1,1)$, so the second column is $\begin{bmatrix} 1 \\ 1 \end{bmatrix}$.

$$[T]_\beta^\gamma = \begin{bmatrix} 2 & 1 \\ 0 & 1 \end{bmatrix}.$$

> **Clarification:** The same linear transformation $T$ can be represented by **different matrices** depending on the choice of ordered bases. Compare the two matrices $\begin{bmatrix} 2 & 0 \\ 0 & 1 \end{bmatrix}$ and $\begin{bmatrix} 2 & 1 \\ 0 & 1 \end{bmatrix}$ above — they represent the **same** function $T$.

### Example 3: Different Domain and Codomain

**Example:** Let $W = \{(x,y,z) \in \mathbb{R}^3 : x + y + z = 0\}$ and $V = \mathbb{R}^2$. Define the isomorphism $T: W \to V$ by $T(x,y,z) = (y,z)$. Use $\beta = \bigl((-1,1,0),\; (-1,0,1)\bigr)$ and $\gamma = (e_1, e_2)$ (the standard basis for $\mathbb{R}^2$).

**Solution:**

$$T(-1,1,0) = (1,0) = 1 \cdot e_1 + 0 \cdot e_2, \qquad T(-1,0,1) = (0,1) = 0 \cdot e_1 + 1 \cdot e_2.$$

$$[T]_\beta^\gamma = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = I_2.$$

The identity matrix arises because the basis $\beta$ was chosen to align perfectly with $\gamma$ through $T$.

Now change $\gamma$ to $\gamma' = \bigl((1,0),\; (1,1)\bigr)$:

$$T(-1,1,0) = (1,0) = 1(1,0) + 0(1,1), \qquad T(-1,0,1) = (0,1) = -1(1,0) + 1(1,1).$$

$$[T]_\beta^{\gamma'} = \begin{bmatrix} 1 & -1 \\ 0 & 1 \end{bmatrix}.$$

---

## 4. The Bijection Between Linear Transformations and Matrices

### Theorem

Let $V$ and $W$ be vector spaces with $\dim(V) = n$ and $\dim(W) = m$. Fix ordered bases $\beta$ for $V$ and $\gamma$ for $W$. Then the map

$$T \;\longmapsto\; [T]_\beta^\gamma$$

is a **bijection** between the set of all linear transformations $T: V \to W$ and the set $\mathbb{R}^{m \times n}$ of all $m \times n$ real matrices.

### Direction 1: Transformation $\to$ Matrix

Given $T$, compute $T(v_j)$ for each basis vector $v_j \in \beta$, express $T(v_j) = \sum_i a_{ij} w_i$, and form $A = (a_{ij})$. This was described in Section 3.

### Direction 2: Matrix $\to$ Transformation

Given an $m \times n$ matrix $A = (a_{ij})$, define $T: V \to W$ by specifying:

$$T(v_j) = \sum_{i=1}^{m} a_{ij}\, w_i, \qquad j = 1, 2, \dots, n,$$

then extend to all of $V$ by linearity: for $v = \sum_j c_j v_j$,

$$T(v) = \sum_{j=1}^{n} c_j\, T(v_j) = \sum_{j=1}^{n} c_j \sum_{i=1}^{m} a_{ij}\, w_i.$$

The extension principle guarantees that this defines a unique linear transformation (see [[8 - LINEAR MAPS]]), and one can verify that the matrix of this $T$ with respect to $\beta, \gamma$ is exactly $A$.

### Why This Matters

This bijection means that **every question about linear transformations between finite-dimensional spaces can be translated into a question about matrices**, and vice versa. Once bases are fixed, the two frameworks are interchangeable.

| **Given** | **Procedure** | **Obtain** |
|---|---|---|
| $T: V \to W$, ordered bases $\beta, \gamma$ | Express each $T(v_j)$ in terms of $\gamma$ | Matrix $A = [T]_\beta^\gamma$ |
| Matrix $A \in \mathbb{R}^{m \times n}$, ordered bases $\beta, \gamma$ | Define $T(v_j) = \sum_i a_{ij} w_i$, extend by linearity | $T: V \to W$ with $[T]_\beta^\gamma = A$ |

---

## 5. Kernel of a Linear Transformation

### Definition

Let $T: V \to W$ be a linear transformation. The **kernel** (or **null space**) of $T$ is

$$\ker(T) = \{ v \in V : T(v) = 0_W \},$$

where $0_W$ denotes the zero vector in $W$.

### The Kernel Is a Subspace

$\ker(T)$ is a subspace of $V$:

1. **Contains zero:** $T(0_V) = 0_W$ (a basic property of linear maps), so $0_V \in \ker(T)$.
2. **Closed under addition:** If $T(v_1) = 0_W$ and $T(v_2) = 0_W$, then $T(v_1 + v_2) = T(v_1) + T(v_2) = 0_W$.
3. **Closed under scalar multiplication:** If $T(v) = 0_W$, then $T(\alpha v) = \alpha\, T(v) = 0_W$.

### Example 1

**Example:** $T: \mathbb{R}^2 \to \mathbb{R}^2$, $T(x,y) = (2x,\; y)$.

**Solution:** We need $T(x,y) = (0,0)$, i.e., $2x = 0$ and $y = 0$. Thus $x = 0, y = 0$, so

$$\ker(T) = \{(0,0)\}.$$

### Example 2

**Example:** $T: \mathbb{R}^2 \to \mathbb{R}^2$, $T(x,y) = (2x,\; 0)$.

**Solution:** We need $(2x, 0) = (0,0)$, so $2x = 0$ gives $x = 0$, while $y$ is unrestricted. Thus

$$\ker(T) = \{(0, y) : y \in \mathbb{R}\} = \text{span}\{(0,1)\},$$

which is the $y$-axis. This is a 1-dimensional subspace of $\mathbb{R}^2$.

---

## 6. Image of a Linear Transformation

### Definition

Let $T: V \to W$ be a linear transformation. The **image** (or **range**) of $T$ is

$$\text{im}(T) = \{ w \in W : w = T(v) \text{ for some } v \in V \} = \{ T(v) : v \in V \}.$$

### The Image Is a Subspace

$\text{im}(T)$ is a subspace of $W$:

1. **Contains zero:** $T(0_V) = 0_W \in \text{im}(T)$.
2. **Closed under addition:** If $w_1 = T(v_1)$ and $w_2 = T(v_2)$, then $w_1 + w_2 = T(v_1 + v_2) \in \text{im}(T)$.
3. **Closed under scalar multiplication:** If $w = T(v)$, then $\alpha w = T(\alpha v) \in \text{im}(T)$.

> **Clarification:** Both closure properties use linearity of $T$ in an essential way. For a general (non-linear) function, the range need not be a subspace.

### Example 1

**Example:** $T(x,y) = (2x,\; y)$ from $\mathbb{R}^2$ to $\mathbb{R}^2$.

**Solution:** Given any $(u, v) \in \mathbb{R}^2$, choose $(x, y) = (u/2,\; v)$. Then $T(u/2, v) = (u, v)$. So $\text{im}(T) = \mathbb{R}^2$.

### Example 2

**Example:** $T(x,y) = (2x,\; 0)$ from $\mathbb{R}^2$ to $\mathbb{R}^2$.

**Solution:** Every output has the form $(2x, 0)$, which lies on the $x$-axis. Conversely, any $(u, 0)$ is achieved by choosing $x = u/2$. So

$$\text{im}(T) = \{(u, 0) : u \in \mathbb{R}\} = \text{span}\{(1,0)\},$$

the $x$-axis. This is a 1-dimensional subspace of $\mathbb{R}^2$.

---

## 7. Injectivity, Surjectivity, and Their Characterisations

### Injectivity and the Kernel

Recall from [[8 - LINEAR MAPS]] that a linear transformation $T: V \to W$ is **injective** (one-to-one) if $T(v_1) = T(v_2)$ implies $v_1 = v_2$.

**Theorem.** A linear transformation $T: V \to W$ is injective if and only if $\ker(T) = \{0_V\}$.

*Proof.*

$(\Rightarrow)$ Suppose $T$ is injective. Let $v \in \ker(T)$, so $T(v) = 0_W$. But also $T(0_V) = 0_W$. By injectivity, $v = 0_V$. Hence $\ker(T) = \{0_V\}$.

$(\Leftarrow)$ Suppose $\ker(T) = \{0_V\}$. If $T(v_1) = T(v_2)$, then $T(v_1 - v_2) = T(v_1) - T(v_2) = 0_W$, so $v_1 - v_2 \in \ker(T) = \{0_V\}$, giving $v_1 = v_2$. Hence $T$ is injective. $\blacksquare$

> **Clarification:** For general functions, checking injectivity requires comparing all pairs of inputs. For linear transformations, you only need to check that the zero vector is the unique element mapping to zero. This is a significant simplification.

### Surjectivity and the Image

A linear transformation $T: V \to W$ is **surjective** (onto) if for every $w \in W$ there exists $v \in V$ with $T(v) = w$.

**Theorem.** $T$ is surjective if and only if $\text{im}(T) = W$.

This follows directly from the definitions: the image is the set of all values $T$ takes, so $T$ is surjective precisely when this set is all of $W$.

### Summary Table

| **Property** | **Definition** | **Equivalent condition** |
|---|---|---|
| Injective (one-to-one) | $T(v_1) = T(v_2) \Rightarrow v_1 = v_2$ | $\ker(T) = \{0\}$ |
| Surjective (onto) | $\forall\, w \in W,\; \exists\, v \in V: T(v) = w$ | $\text{im}(T) = W$ |
| Bijective (isomorphism) | Both injective and surjective | $\ker(T) = \{0\}$ and $\text{im}(T) = W$ |

---

## 8. Connecting the Kernel and Image to the Matrix

Having fixed ordered bases $\beta = (v_1, \dots, v_n)$ for $V$ and $\gamma = (w_1, \dots, w_m)$ for $W$, we obtain a matrix $A = [T]_\beta^\gamma$. We now relate $\ker(T)$ to $\text{null}(A)$ and $\text{im}(T)$ to $\text{col}(A)$.

### Kernel $\longleftrightarrow$ Null Space

**Theorem.** Let $v = c_1 v_1 + \cdots + c_n v_n \in V$ and let $\mathbf{c} = (c_1, \dots, c_n)^\top$ be its coordinate vector. Then

$$v \in \ker(T) \quad \Longleftrightarrow \quad \mathbf{c} \in \text{null}(A).$$

*Proof sketch.* Write $T(v) = \sum_{j=1}^n c_j\, T(v_j) = \sum_{j=1}^n c_j \sum_{i=1}^m a_{ij} w_i = \sum_{i=1}^m \left(\sum_{j=1}^n a_{ij} c_j \right) w_i.$ Since $\gamma$ is a basis (hence linearly independent), $T(v) = 0_W$ if and only if every coefficient $\sum_{j=1}^n a_{ij} c_j = 0$ for $i = 1, \dots, m$. This is exactly the condition $A\mathbf{c} = 0$, i.e., $\mathbf{c} \in \text{null}(A)$. $\blacksquare$

The map $v \mapsto [v]_\beta = \mathbf{c}$ defines an isomorphism $\ker(T) \cong \text{null}(A)$. In particular, **a basis for $\text{null}(A)$ translates directly into a basis for $\ker(T)$** by forming the corresponding linear combinations of $v_1, \dots, v_n$.

### Image $\longleftrightarrow$ Column Space

**Theorem.** Let $w = d_1 w_1 + \cdots + d_m w_m \in W$ and let $\mathbf{d} = (d_1, \dots, d_m)^\top$. Then

$$w \in \text{im}(T) \quad \Longleftrightarrow \quad \mathbf{d} \in \text{col}(A).$$

*Proof sketch.* $w \in \text{im}(T)$ means there exists $v = \sum_j c_j v_j$ with $T(v) = w$. By the computation above, the coordinate vector of $T(v)$ with respect to $\gamma$ is $A\mathbf{c}$. So $\mathbf{d} = A\mathbf{c}$ for some $\mathbf{c} \in \mathbb{R}^n$, which is exactly the condition $\mathbf{d} \in \text{col}(A)$. $\blacksquare$

The map $w \mapsto [w]_\gamma = \mathbf{d}$ gives an isomorphism $\text{im}(T) \cong \text{col}(A)$.

Also note: the columns of $A$ are the coordinate vectors of $T(v_1), T(v_2), \dots, T(v_n)$ with respect to $\gamma$. Since $\text{im}(T) = \text{span}\{T(v_1), \dots, T(v_n)\}$ (by linearity), finding a basis for $\text{col}(A)$ immediately identifies which $T(v_j)$ form a basis for $\text{im}(T)$.

### Summary of Correspondences

| **Object for $T$** | **Object for $A = [T]_\beta^\gamma$** | **Subspace of** |
|---|---|---|
| $\ker(T)$ | $\text{null}(A)$ | $V \longleftrightarrow \mathbb{R}^n$ |
| $\text{im}(T)$ | $\text{col}(A)$ | $W \longleftrightarrow \mathbb{R}^m$ |

---

## 9. Finding Bases for the Kernel and Image

The correspondences in Section 8 reduce the problem to finding bases for $\text{null}(A)$ and $\text{col}(A)$ via row reduction. The procedure is discussed in detail in [[7 - BASIS AND RANK]] and [[8 - LINEAR MAPS]]; here we recall it and show how to translate back.

### Algorithm: Basis for $\ker(T)$

1. Choose ordered bases $\beta, \gamma$ and form the matrix $A = [T]_\beta^\gamma$.
2. Row-reduce $A$ to reduced row echelon form (RREF).
3. Identify the **free (non-pivot) variables** and express the general solution of $A\mathbf{c} = 0$ in parametric form.
4. Extract basis vectors $\mathbf{c}^{(1)}, \dots, \mathbf{c}^{(k)}$ for $\text{null}(A)$ (one per free variable).
5. For each $\mathbf{c}^{(\ell)} = (c_1^{(\ell)}, \dots, c_n^{(\ell)})^\top$, form

$$u_\ell = c_1^{(\ell)} v_1 + c_2^{(\ell)} v_2 + \cdots + c_n^{(\ell)} v_n.$$

Then $\{u_1, \dots, u_k\}$ is a basis for $\ker(T)$.

### Algorithm: Basis for $\text{im}(T)$

1. Form the same matrix $A = [T]_\beta^\gamma$.
2. Row-reduce $A$ to RREF.
3. Identify the **pivot columns** (say columns $j_1, j_2, \dots, j_r$).
4. The original (un-reduced) columns $j_1, j_2, \dots, j_r$ of $A$ form a basis for $\text{col}(A)$.
5. For each pivot column $\mathbf{a}_{j_s} = (a_{1,j_s}, \dots, a_{m,j_s})^\top$, form

$$\tilde{w}_s = a_{1,j_s}\, w_1 + a_{2,j_s}\, w_2 + \cdots + a_{m,j_s}\, w_m.$$

Then $\{\tilde{w}_1, \dots, \tilde{w}_r\}$ is a basis for $\text{im}(T)$.

Alternatively (and equivalently), the vectors $T(v_{j_1}), T(v_{j_2}), \dots, T(v_{j_r})$ form a basis for $\text{im}(T)$, since $T(v_{j_s})$ is the vector in $W$ whose coordinate vector with respect to $\gamma$ is column $j_s$ of $A$.

> **Clarification (standard basis shortcut):** When $\beta$ and $\gamma$ are the standard ordered bases, the coordinate vector of any $v \in \mathbb{R}^n$ is $v$ itself. So the null space basis vectors *are* the kernel basis vectors, and the pivot columns *are* the image basis vectors, with no additional translation step. This is why Example 1 below looks particularly clean.

---

## 10. Worked Examples

### Example 1: Standard Bases ($\mathbb{R}^4 \to \mathbb{R}^3$)

**Example:** Let $T: \mathbb{R}^4 \to \mathbb{R}^3$ be defined by

$$T(x_1, x_2, x_3, x_4) = (2x_1 + 4x_2 + 6x_3 + 8x_4,\; x_1 + 3x_2 + 5x_4,\;