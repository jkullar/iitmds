# TANGENT PLANES AND CRITICAL POINTS

This file brings together several closely related ideas that extend single-variable differential calculus to functions of several variables. We begin by identifying the **direction of steepest ascent and descent** using the gradient, then develop the notion of **tangent lines in the multivariable setting**, show how the collection of all such tangent lines sweeps out a **tangent plane** (or, more generally, a **tangent hyperplane**), and use the hyperplane equation to define the **linear approximation** of a function near a point. Finally, we define **critical points** for multivariable functions, explain how to find them, and preview how they are classified as local maxima, local minima, or saddle points. These ideas are foundational for optimisation and appear directly in algorithms such as gradient descent.

Prerequisites: familiarity with the gradient vector, partial derivatives, and directional derivatives as developed in [[14 - PARTIAL AND DIRECTIONAL DERIVATIVES]], and with multivariable functions, domains, and limits as covered in [[13 - MULTIVARIABLE FUNCTIONS]].

---

## 1. The Direction of Steepest Ascent and Descent

### 1.1 Motivation

Consider a hill whose altitude is described by a function $h(x, y)$. Water flowing downhill always moves in the direction where the altitude **decreases most rapidly**. In one variable, the sign of $h'(x)$ tells us whether the function is increasing or decreasing; for several variables we need a tool that selects the **best direction** from the infinitely many available. That tool is the **gradient**.

### 1.2 Setup and Assumptions

Let $f : D \to \mathbb{R}$ with $D \subseteq \mathbb{R}^n$, and let $\tilde{a} \in D$ be a point such that some open ball $B(\tilde{a}, r) \subseteq D$. We assume throughout this section that:

> $\nabla f$ **exists and is continuous** on an open ball around $\tilde{a}$.

Under this hypothesis, for every unit vector $\mathbf{u} \in \mathbb{R}^n$ (i.e. $\|\mathbf{u}\| = 1$), the directional derivative satisfies

$$f_{\mathbf{u}}(\tilde{a}) = \nabla f(\tilde{a}) \cdot \mathbf{u}.$$

See [[14 - PARTIAL AND DIRECTIONAL DERIVATIVES]] §5 for the proof. This formula is the starting point for everything that follows.

### 1.3 Maximising and Minimising the Directional Derivative

Using the geometric form of the dot product,

$$f_{\mathbf{u}}(\tilde{a}) = \|\nabla f(\tilde{a})\| \, \|\mathbf{u}\| \, \cos\theta = \|\nabla f(\tilde{a})\| \cos\theta,$$

where $\theta$ is the angle between $\nabla f(\tilde{a})$ and $\mathbf{u}$. Since $\|\nabla f(\tilde{a})\|$ is a fixed non-negative constant, the behaviour of $f_{\mathbf{u}}(\tilde{a})$ as $\mathbf{u}$ varies depends entirely on $\cos\theta$.

| Condition | Value of $\theta$ | Value of $\cos\theta$ | Direction $\mathbf{u}$ | $f_{\mathbf{u}}(\tilde{a})$ |
|---|---|---|---|---|
| **Steepest ascent** (maximum $f_{\mathbf{u}}$) | $0$ | $1$ | $\displaystyle\mathbf{u} = \frac{\nabla f(\tilde{a})}{\|\nabla f(\tilde{a})\|}$ | $\|\nabla f(\tilde{a})\|$ |
| **Steepest descent** (minimum $f_{\mathbf{u}}$) | $\pi$ | $-1$ | $\displaystyle\mathbf{u} = -\frac{\nabla f(\tilde{a})}{\|\nabla f(\tilde{a})\|}$ | $-\|\nabla f(\tilde{a})\|$ |
| **No change** ($f_{\mathbf{u}} = 0$) | $\pi/2$ | $0$ | $\mathbf{u} \perp \nabla f(\tilde{a})$ | $0$ |

These results assume $\nabla f(\tilde{a}) \neq \mathbf{0}$. If $\nabla f(\tilde{a}) = \mathbf{0}$, then $f_{\mathbf{u}}(\tilde{a}) = 0$ in every direction—the function is momentarily flat.

> **Clarification:** The "no change" directions form an $(n-1)$-dimensional subspace (a hyperplane through the origin in $\mathbb{R}^n$), not a single direction. In $\mathbb{R}^2$ there are exactly two unit vectors perpendicular to the gradient; in $\mathbb{R}^3$ there is a whole plane of perpendicular directions.

### 1.4 Interpretation: Why "Gradient" Means Steepest Slope

The word *gradient* in everyday language refers to the slope or steepness of a hill. The mathematical gradient $\nabla f(\tilde{a})$ points in the direction of the **steepest uphill slope** at $\tilde{a}$, and its magnitude $\|\nabla f(\tilde{a})\|$ equals the rate of ascent in that direction. This is precisely why the gradient descent algorithm in machine learning updates a parameter vector by stepping in the direction $-\nabla f$: it seeks the direction of fastest decrease in a cost function.

### 1.5 Worked Examples

**Example 1.** Let $f(x, y) = \sin(xy)$. Find the direction of steepest descent at the point $(\pi, 1)$.

**Solution.**

$$\nabla f(x,y) = \bigl(y\cos(xy),\; x\cos(xy)\bigr).$$

At $(\pi, 1)$:

$$\nabla f(\pi, 1) = \bigl(\cos\pi,\; \pi\cos\pi\bigr) = (-1, -\pi).$$

The direction of steepest descent is opposite to the gradient:

$$\mathbf{u} = -\frac{\nabla f(\pi,1)}{\|\nabla f(\pi,1)\|} = \frac{(1, \pi)}{\sqrt{1 + \pi^2}}.$$

The maximum rate of decrease is $-\|\nabla f(\pi,1)\| = -\sqrt{1+\pi^2}$.

A direction of **no change** is any unit vector perpendicular to $(-1,-\pi)$, for instance $\displaystyle\frac{(\pi, -1)}{\sqrt{1+\pi^2}}$.

---

**Example 2.** Let $f(x, y, z) = x^2 + y^2 + z^2$. At the point $(1,1,1)$, find (a) the direction of steepest ascent and (b) directions along which $f$ does not change.

**Solution.**

$$\nabla f(x,y,z) = (2x, 2y, 2z), \qquad \nabla f(1,1,1) = (2,2,2).$$

**(a)** Direction of steepest ascent:

$$\mathbf{u} = \frac{(2,2,2)}{\|(2,2,2)\|} = \frac{(2,2,2)}{2\sqrt{3}} = \frac{1}{\sqrt{3}}(1,1,1).$$

**(b)** Directions of no change satisfy $(2,2,2) \cdot \mathbf{v} = 0$, i.e. $x + y + z = 0$. This is a two-dimensional subspace. A basis is

$$\left\{\frac{1}{\sqrt{2}}(1,-1,0),\;\; \frac{1}{\sqrt{2}}(1,0,-1)\right\},$$

and any unit-length linear combination of these basis vectors gives a direction of no change.

### 1.6 Cautionary Note: Continuity of the Gradient is Essential

Recall from [[14 - PARTIAL AND DIRECTIONAL DERIVATIVES]] the function

$$f(x,y) = \begin{cases} \dfrac{xy}{x^2+y^2}, & (x,y)\neq(0,0),\\[6pt] 0, & (x,y)=(0,0). \end{cases}$$

At the origin, the partial derivatives exist and $\nabla f(0,0) = (0,0)$, but the directional derivative $f_{\mathbf{u}}(0,0)$ **does not exist** for most directions $\mathbf{u}$. The formula $f_{\mathbf{u}} = \nabla f \cdot \mathbf{u}$ is **invalid** here because the gradient is not continuous in any neighbourhood of the origin. Always verify the continuity hypothesis before applying the results of this section.

---

## 2. Tangent Lines in the Multivariable Setting

### 2.1 Recap: Tangent Lines for One Variable

For a differentiable function $f : \mathbb{R} \to \mathbb{R}$, the **tangent line** to the graph at $x = a$ is

$$y - f(a) = f'(a)(x - a).$$

It is the unique line through $(a, f(a))$ whose slope equals the derivative $f'(a)$, and it represents the instantaneous direction in which the graph moves at that point.

### 2.2 Restricting to a Line Through $\tilde{a}$

Let $f : D \to \mathbb{R}$ with $D \subseteq \mathbb{R}^2$ (we treat two variables first for visualisation; the general case follows in §2.5). Fix a point $\tilde{a} = (a, b) \in D$ and a unit vector $\mathbf{u} = (u_1, u_2)$.

The line $L$ through $(a,b)$ in the direction $\mathbf{u}$ (in the $xy$-plane) is parametrised by

$$L : \quad x(t) = a + tu_1, \quad y(t) = b + tu_2, \quad z(t) = 0.$$

Restricting $f$ to $L$ yields a function of one variable $t$, and its derivative at $t=0$ is the directional derivative $f_{\mathbf{u}}(a,b)$. If this derivative exists, we can define the tangent to $f$ at $(a,b)$ **along the direction** $\mathbf{u}$.

### 2.3 The Tangent Line Above a Direction $\mathbf{u}$ (Two Variables)

The tangent line to $f$ at $(a,b)$ in the direction $\mathbf{u}$ lies in the vertical plane $P$ above $L$ and has:

- **slope** (rate of change of $z$ per unit displacement along $L$): $f_{\mathbf{u}}(a,b)$,
- **base point**: $(a, b, f(a,b))$.

**Parametric equations:**

$$\boxed{x(t) = a + tu_1, \qquad y(t) = b + tu_2, \qquad z(t) = f(a,b) + t\,f_{\mathbf{u}}(a,b).}$$

**Vector form:**

$$\bigl(x(t),\, y(t),\, z(t)\bigr) = (a,\, b,\, f(a,b)) + t\,\bigl(u_1,\, u_2,\, f_{\mathbf{u}}(a,b)\bigr).$$

This is an **affine flat** (a translate of a one-dimensional subspace) in $\mathbb{R}^3$.

**Symmetric equations** (when denominators are non-zero):

$$\frac{x-a}{u_1} = \frac{y-b}{u_2} = \frac{z-f(a,b)}{f_{\mathbf{u}}(a,b)}.$$

### 2.4 Worked Examples (Two Variables)

**Example 3.** $f(x,y) = x + y$. Find the tangent line at $(1,1)$ in the direction $\mathbf{u} = (1,0)$.

**Solution.** Here $\frac{\partial f}{\partial x} = 1$ everywhere, so $f_{\mathbf{u}}(1,1) = \nabla f(1,1) \cdot (1,0) = (1,1)\cdot(1,0) = 1$. Also $f(1,1) = 2$.

$$\bigl(x(t), y(t), z(t)\bigr) = (1, 1, 2) + t(1, 0, 1).$$

In parametric form: $x(t)=1+t$, $y(t)=1$, $z(t)=2+t$.

---

**Example 4.** $f(x,y) = xy$. Find the tangent line at $(1,1)$ in the direction of $(3,4)$.

**Solution.** Unit vector: $\mathbf{u} = \frac{1}{5}(3,4)$. Gradient: $\nabla f(x,y) = (y, x)$, so $\nabla f(1,1) = (1,1)$.

$$f_{\mathbf{u}}(1,1) = (1,1) \cdot \tfrac{1}{5}(3,4) = \tfrac{7}{5}.$$

Also $f(1,1) = 1$.

$$\bigl(x(t), y(t), z(t)\bigr) = \left(1,\, 1,\, 1\right) + t\left(\tfrac{3}{5},\, \tfrac{4}{5},\, \tfrac{7}{5}\right).$$

---

**Example 5.** $f(x,y) = \sin(xy)$. Find the tangent line at $(\pi, 1)$ in the direction of $(1,2)$.

**Solution.** Unit vector: $\mathbf{u} = \frac{1}{\sqrt{5}}(1, 2)$. We computed $\nabla f(\pi,1) = (-1, -\pi)$ in Example 1.

$$f_{\mathbf{u}}(\pi,1) = (-1,-\pi) \cdot \tfrac{1}{\sqrt{5}}(1,2) = \frac{-1-2\pi}{\sqrt{5}}.$$

Also $f(\pi,1) = \sin(\pi) = 0$.

$$\bigl(x(t), y(t), z(t)\bigr) = \left(\pi,\, 1,\, 0\right) + t\left(\tfrac{1}{\sqrt{5}},\, \tfrac{2}{\sqrt{5}},\, \tfrac{-1-2\pi}{\sqrt{5}}\right).$$

### 2.5 Tangent Lines for $n$ Variables

For $f : D \to \mathbb{R}$ with $D \subseteq \mathbb{R}^n$, a point $\tilde{a} = (a_1, \ldots, a_n)$, and a unit vector $\mathbf{u} = (u_1, \ldots, u_n)$, we work in $\mathbb{R}^{n+1}$ with coordinates $(x_1, \ldots, x_n, z)$ where $z$ represents the function value. The tangent line is:

**Vector form:**

$$\bigl(\tilde{x}(t),\, z(t)\bigr) = \bigl(\tilde{a},\, f(\tilde{a})\bigr) + t\,\bigl(\mathbf{u},\, f_{\mathbf{u}}(\tilde{a})\bigr).$$

**Parametric form:**

$$x_i(t) = a_i + tu_i \quad (i = 1, \ldots, n), \qquad z(t) = f(\tilde{a}) + t\,f_{\mathbf{u}}(\tilde{a}).$$

**Example 6.** $f(x,y,z) = xy + yz + zx$ at $(1,1,1)$ in the direction of $(-1,-2,2)$.

**Solution.** Unit vector: $\mathbf{u} = \frac{1}{3}(-1,-2,2)$. Gradient: $\nabla f = (y+z,\; z+x,\; x+y)$, so $\nabla f(1,1,1) = (2,2,2)$.

$$f_{\mathbf{u}}(1,1,1) = (2,2,2) \cdot \tfrac{1}{3}(-1,-2,2) = \tfrac{1}{3}(-2-4+4) = -\tfrac{2}{3}.$$

Also $f(1,1,1) = 3$. Using $w$ for the function-value coordinate:

$$\bigl(x(t), y(t), z(t), w(t)\bigr) = (1, 1, 1, 3) + t\!\left(-\tfrac{1}{3},\, -\tfrac{2}{3},\, \tfrac{2}{3},\, -\tfrac{2}{3}\right).$$

### 2.6 When Tangent Lines Fail to Exist

Tangent lines do not exist for every function in every direction. Two instructive examples:

1. **$f(x,y) = \frac{xy}{x^2+y^2}$ for $(x,y)\neq(0,0)$, $f(0,0)=0$.** The directional derivative at the origin exists only along the coordinate axes ($\pm\mathbf{e}_1$, $\pm\mathbf{e}_2$). In all other directions, the directional derivative does not exist, so no tangent line can be defined.

2. **$f(x,y) = |x| + |y|$.** This function has "ridges" and "corners" along the coordinate axes. At many points (e.g. the origin), the restriction to a generic line through that point has a corner, so the one-variable derivative does not exist and no tangent line exists in that direction.

> **Clarification:** A sufficient condition for **all** tangent lines at $\tilde{a}$ to exist is that $\nabla f$ exists and is continuous on an open ball around $\tilde{a}$. Under this condition, $f_{\mathbf{u}}(\tilde{a}) = \nabla f(\tilde{a}) \cdot \mathbf{u}$ for every unit vector $\mathbf{u}$.

---

## 3. Tangent Planes and Tangent Hyperplanes

### 3.1 From Tangent Lines to the Tangent Plane (Two Variables)

Suppose $f(x,y)$ satisfies the gradient-continuity hypothesis at $(a,b)$. Then for every unit vector $\mathbf{u} = (u_1, u_2)$, the tangent line at $(a,b)$ in direction $\mathbf{u}$ has parametric equation

$$z(t) = f(a,b) + t\,f_{\mathbf{u}}(a,b) = f(a,b) + t\!\left(\frac{\partial f}{\partial x}(a,b)\,u_1 + \frac{\partial f}{\partial y}(a,b)\,u_2\right).$$

Substituting $x - a = tu_1$ and $y - b = tu_2$ (from the parametric equations for the line $L$), we obtain:

$$z - f(a,b) = \frac{\partial f}{\partial x}(a,b)\,(x-a) + \frac{\partial f}{\partial y}(a,b)\,(y-b).$$

This equation is **independent of** $\mathbf{u}$. Therefore, every tangent line—regardless of the direction $\mathbf{u}$—lies on the **single plane** defined by this equation.

### 3.2 Definition: Tangent Plane

Let $f(x,y)$ be defined on a domain $D \subseteq \mathbb{R}^2$ containing an open ball around $(a,b)$, and suppose $\nabla f$ exists and is continuous on that ball. The **tangent plane** to $f$ at $(a,b)$ is the plane in $\mathbb{R}^3$ with equation

$$\boxed{z = f(a,b) + \frac{\partial f}{\partial x}(a,b)\,(x-a) + \frac{\partial f}{\partial y}(a,b)\,(y-b).}$$

Equivalently, using gradient notation:

$$z = f(a,b) + \nabla f(a,b) \cdot \bigl((x,y) - (a,b)\bigr).$$

### 3.3 Affine-Flat Interpretation

In the language of linear algebra, the tangent plane is an **affine flat** of dimension $2$ in $\mathbb{R}^3$:

$$\text{Tangent plane} = \bigl(a,\, b,\, f(a,b)\bigr) + P,$$

where $P$ is the subspace (a plane through the origin) defined by

$$P = \left\{(x,y,z) \in \mathbb{R}^3 : z = \frac{\partial f}{\partial x}(a,b)\,x + \frac{\partial f}{\partial y}(a,b)\,y\right\}.$$

Every tangent-line subspace $W_{\mathbf{u}} = \text{span}\bigl(u_1, u_2, f_{\mathbf{u}}(a,b)\bigr)$ is a one-dimensional subspace of $P$, confirming that all tangent lines lie within the tangent plane.

### 3.4 Worked Examples (Tangent Planes)

**Example 7.** $f(x,y) = x + y$ at $(1,1)$.

**Solution.** $\nabla f = (1,1)$ everywhere. $f(1,1) = 2$.

$$z = 2 + 1\cdot(x-1) + 1\cdot(y-1) = x + y.$$

The tangent plane to a linear function is the function's own graph—exactly as expected.

---

**Example 8.** $f(x,y) = xy$ at $(1,1)$.

**Solution.** $\nabla f(x,y) = (y, x)$, so $\nabla f(1,1) = (1,1)$. $f(1,1)=1$.

$$z = 1 + 1\cdot(x-1) + 1\cdot(y-1) = x + y - 1.$$

---

**Example 9.** $f(x,y) = \sin(xy)$ at $(1, 0)$.

**Solution.** $\nabla f(x,y) = \bigl(y\cos(xy),\; x\cos(xy)\bigr)$, so $\nabla f(1,0) = (0\cdot\cos 0,\; 1\cdot\cos 0) = (0, 1)$. $f(1,0) = \sin 0 = 0$.

$$z = 0 + 0\cdot(x-1) + 1\cdot(y-0) = y.$$

### 3.5 The Tangent Hyperplane ($n$ Variables)

For $f : D \to \mathbb{R}$ with $D \subseteq \mathbb{R}^n$, the same argument extends. If $\nabla f$ exists and is continuous on an open ball around $\tilde{a} = (a_1, \ldots, a_n)$, then every tangent line at $\tilde{a}$ lies on the **tangent hyperplane** whose equation is

$$\boxed{z = f(\tilde{a}) + \sum_{i=1}^{n} \frac{\partial f}{\partial x_i}(\tilde{a})\,(x_i - a_i) = f(\tilde{a}) + \nabla f(\tilde{a}) \cdot (\tilde{x} - \tilde{a}).}$$

This is an $n$-dimensional affine flat in $\mathbb{R}^{n+1}$ (the solution set of a single linear equation in $n+1$ unknowns, translated to pass through $(\tilde{a}, f(\tilde{a}))$).

### 3.6 Worked Examples (Tangent Hyperplanes)

**Example 10.** $f(x,y,z) = xy + yz + zx$ at $(1,1,1)$.

**Solution.** $\nabla f = (y+z,\; z+x,\; x+y)$, so $\nabla f(1,1,1) = (2,2,2)$. $f(1,1,1) = 3$. Using $w$ for the function-value coordinate:

$$w = 3 + 2(x-1) + 2(y-1) + 2(z-1) = 2x + 2y + 2z - 3.$$

---

**Example 11.** $f(x,y,z) = x^2 + y^2 + z^2$ at $(2, 3, -1)$.

**Solution.** $\nabla f = (2x, 2y, 2z)$, so $\nabla f(2,3,-1) = (4, 6, -2)$. $f(2,3,-1) = 4+9+1 = 14$.

$$w = 14 + 4(x-2) + 6(y-3) - 2(z+1) = 4x + 6y - 2z - 14 + 14 - 2 = 4x + 6y - 2z - 2.$$

Let us verify more carefully: $14 + 4x - 8 + 6y - 18 - 2z - 2 = 4x + 6y - 2z - 14$. So $w = 4x + 6y - 2z - 14$.

### 3.7 When Tangent Planes Fail to Exist

If the gradient is not continuous near $\tilde{a}$, the tangent plane may not exist. The examples from §2.6 apply: for $f(x,y) = \frac{xy}{x^2+y^2}$ at the origin, not even all tangent lines exist, so there can be no tangent plane. For $f(x,y) = |x| + |y|$, the graph consists of flat faces meeting at sharp edges and a vertex; there is no single plane that captures the behaviour at such points.

> **Clarification:** Even when all directional derivatives exist at a point, the tangent plane may fail to exist if those directional derivatives do not arise from a linear function of $\mathbf{u}$ (i.e. if $f_{\mathbf{u}} \neq \nabla f \cdot \mathbf{u}$). Continuity of the gradient is the standard sufficient condition that prevents this pathology.

---

## 4. Linear Approximation

### 4.1 Definition

The tangent hyperplane equation immediately yields a **linear approximation** to $f$ near $\tilde{a}$. Define

$$\boxed{L_f(\tilde{x}) = f(\tilde{a}) + \nabla f(\tilde{a}) \cdot (\tilde{x} - \tilde{a}).}$$

The function $L_f : \mathbb{R}^n \to \mathbb{R}$ is called the **linear approximation** (or **linearisation**) of $f$ at $\tilde{a}$. It is the best approximation to $f$ by an affine function near $\tilde{a}$, in the sense that

$$f(\tilde{x}) - L_f(\tilde{x}) \to 0 \quad \text{faster than} \quad \|\tilde{x} - \tilde{a}\| \to 0.$$

More precisely, $\displaystyle\lim_{\tilde{x}\to\tilde{a}} \frac{f(\tilde{x}) - L_f(\tilde{x})}{\|\tilde{x}-\tilde{a}\|} = 0$.

This generalises the one-variable idea $f(x) \approx f(a) + f'(a)(x-a)$.

### 4.2 Worked Examples

**Example 12.** $f(x,y) = xy$ near $(1,1)$.

**Solution.** From Example 8, $L_f(x,y) = 1 + (x-1) + (y-1) = x + y - 1$.

Check: $f(1.01, 0.99) = 1.01 \times 0.99 = 0.9999$. $L_f(1.01, 0.99) = 1.01 + 0.99 - 1 = 1.00$. The error is $0.0001$, which is small compared to the displacement $\|(\Delta x, \Delta y)\| = \sqrt{0.01^2 + 0.01^2} \approx 0.0141$.

---

**Example 13.** $f(x,y,z) = x^2 + y^2 + z^2$ near $(2,3,-1)$.

**Solution.** From Example 11, $\nabla f(2,3,-1) = (4,6,-2)$ and $f(2,3,-1) = 14$.

$$L_f(x,y,z) = 14 + 4(x-2) + 6(y-3) - 2(z+1) = 4x + 6y - 2z - 14.$$

---

## 5. Critical Points

### 5.1 Review: Critical Points in One Variable

For $f : \mathbb{R} \to \mathbb{R}$, a point $a$ is a **critical point** if either $f$ is not differentiable at $a$ or $f'(a) = 0$. Every local extremum where $f'$ exists is a critical point. However, not every critical point is a local extremum (e.g. $f(x) = x^3$ at $x = 0$ is a saddle point).

### 5.2 Local Extrema for Multivariable Functions

Let $f : D \to \mathbb{R}$ with $D \subseteq \mathbb{R}^n$ and $\tilde{a} \in D$.

- $\tilde{a}$ is a **local maximum** of $f$ if there exists an open ball $B$ containing $\tilde{a}$ such that $f(\tilde{x}) \leq f(\tilde{a})$ for all $\tilde{x} \in B \cap D$.
- $\tilde{a}$ is a **local minimum** of $f$ if there exists an open ball $B$ containing $\tilde{a}$ such that $f(\tilde{x}) \geq f(\tilde{a})$ for all $\tilde{x} \in B \cap D$.
- A **local extremum** is either a local maximum or a local minimum.

### 5.3 The Gradient Vanishes at Interior Local Extrema

**Theorem (Necessary condition for local extrema).** Let $f : D \to \mathbb{R}$ and suppose $\tilde{a}$ is a local extremum of $f$ lying in the interior of $D$. If $\nabla f(\tilde{a})$ exists, then

$$\nabla f(\t