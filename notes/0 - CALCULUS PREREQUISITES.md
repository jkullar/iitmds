# SINGLE-VARIABLE CALCULUS PREREQUISITES

This file reviews the essential single-variable calculus concepts required before beginning the study of linear algebra and multivariable calculus. The focus is on **limits** (left-hand, right-hand, and two-sided), **limit laws**, **continuity at a point**, **types of discontinuity**, and important function classes including the **floor function** and **piecewise functions**. Mastery of these ideas is critical: limits underpin the definitions of derivatives and integrals, while continuity is the foundation upon which multivariable generalisations (partial derivatives, continuity in $\mathbb{R}^n$) are built.

---

## 1. Intuitive Idea of a Limit

Suppose $f$ is a function defined on some open interval containing $a$, except possibly at $a$ itself. We ask: as $x$ gets closer and closer to $a$, does $f(x)$ approach a single definite value?

### Informal Description

The statement

$$\lim_{x \to a} f(x) = L$$

means that the values $f(x)$ can be made **arbitrarily close** to $L$ by taking $x$ **sufficiently close** to $a$ (but $x \neq a$). Crucially, we never require the function to be defined at $a$, nor do we care what $f(a)$ equals — the limit describes the **behaviour near** $a$, not **at** $a$.

### Formal ($\varepsilon$–$\delta$) Definition

> For every $\varepsilon > 0$ there exists $\delta > 0$ such that
> $$0 < |x - a| < \delta \implies |f(x) - L| < \varepsilon.$$

This precision will become indispensable when we later handle limits in $\mathbb{R}^n$.

---

## 2. One-Sided Limits

When studying limits, we must consider from **which direction** $x$ approaches $a$.

### 2.1 Left-Hand Limit

The **left-hand limit** (or **limit from the left**) of $f$ at $a$ is denoted

$$\lim_{x \to a^{-}} f(x) \quad \text{(equivalently written } \lim_{x \to a^{-}} f(x)\text{)}$$

and equals $L^{-}$ if, for every $\varepsilon > 0$, there exists $\delta > 0$ such that

$$a - \delta < x < a \implies |f(x) - L^{-}| < \varepsilon.$$

Here $x$ approaches $a$ **only through values less than** $a$ (i.e., from the left on the number line).

### 2.2 Right-Hand Limit

The **right-hand limit** (or **limit from the right**) of $f$ at $a$ is denoted

$$\lim_{x \to a^{+}} f(x)$$

and equals $L^{+}$ if, for every $\varepsilon > 0$, there exists $\delta > 0$ such that

$$a < x < a + \delta \implies |f(x) - L^{+}| < \varepsilon.$$

Here $x$ approaches $a$ **only through values greater than** $a$.

### 2.3 Existence of the Two-Sided Limit

The following theorem connects one-sided limits with the ordinary (two-sided) limit:

> **Theorem (Existence of a Limit).** The two-sided limit $\displaystyle\lim_{x \to a} f(x)$ exists and equals $L$ **if and only if** both one-sided limits exist and are equal:
>
> $$\lim_{x \to a^{-}} f(x) = \lim_{x \to a^{+}} f(x) = L.$$

If $\displaystyle\lim_{x \to a^{-}} f(x) \neq \lim_{x \to a^{+}} f(x)$, then $\displaystyle\lim_{x \to a} f(x)$ **does not exist** (DNE).

> **Clarification:** "The limit does not exist" is a precise mathematical conclusion, not an expression of ignorance. It means no single real number $L$ can serve as the common value approached from both sides.

---

## 3. The Floor Function — A Key Example

### 3.1 Definition

The **floor function** (also called the **greatest integer function**) is defined by

$$\lfloor x \rfloor = \max\{ n \in \mathbb{Z} : n \leq x \}.$$

In words, $\lfloor x \rfloor$ is the **largest integer less than or equal to** $x$.

| $x$ | $\lfloor x \rfloor$ |
|---|---|
| $0.5$ | $0$ |
| $0.75$ | $0$ |
| $1.0$ | $1$ |
| $1.25$ | $1$ |
| $-0.3$ | $-1$ |
| $-1.0$ | $-1$ |
| $2.99$ | $2$ |

The graph of $\lfloor x \rfloor$ is a **step function**: on each interval $[n, n+1)$ for $n \in \mathbb{Z}$, the function takes the constant value $n$, then **jumps** up by $1$ at each integer.

### 3.2 Limits of the Floor Function at an Integer

Let us examine $\displaystyle\lim_{x \to 0} \lfloor x \rfloor$.

**Right-hand limit.** For $x \in [0, 1)$, we have $\lfloor x \rfloor = 0$. As $x \to 0^{+}$, the function value is constantly $0$, so

$$\lim_{x \to 0^{+}} \lfloor x \rfloor = 0.$$

**Left-hand limit.** For $x \in [-1, 0)$, we have $\lfloor x \rfloor = -1$. As $x \to 0^{-}$, the function value is constantly $-1$, so

$$\lim_{x \to 0^{-}} \lfloor x \rfloor = -1.$$

**Conclusion.** Since $\lim_{x \to 0^{+}} \lfloor x \rfloor = 0 \neq -1 = \lim_{x \to 0^{-}} \lfloor x \rfloor$, the two-sided limit

$$\lim_{x \to 0} \lfloor x \rfloor \quad \text{does not exist.}$$

> **Clarification:** The same argument applies at **every** integer $n$: the left-hand limit is $n - 1$ while the right-hand limit is $n$, so $\displaystyle\lim_{x \to n}\lfloor x \rfloor$ does not exist for any $n \in \mathbb{Z}$. At non-integer points, however, the floor function is constant in a neighbourhood, so the limit exists and equals the function value — the floor function is continuous at every non-integer.

---

## 4. Limit Laws

When individual limits exist, they can be combined using the following standard rules. Suppose

$$\lim_{x \to a} f(x) = L \quad \text{and} \quad \lim_{x \to a} g(x) = M$$

both exist and are finite. Then:

| Law | Statement |
|---|---|
| **Sum / Difference** | $\displaystyle\lim_{x \to a}[f(x) \pm g(x)] = L \pm M$ |
| **Constant Multiple** | $\displaystyle\lim_{x \to a}[c \cdot f(x)] = c \cdot L$ for any constant $c$ |
| **Product** | $\displaystyle\lim_{x \to a}[f(x) \cdot g(x)] = L \cdot M$ |
| **Quotient** | $\displaystyle\lim_{x \to a}\frac{f(x)}{g(x)} = \frac{L}{M}$, provided $M \neq 0$ |
| **Power** | $\displaystyle\lim_{x \to a}[f(x)]^n = L^n$ for any positive integer $n$ |
| **Root** | $\displaystyle\lim_{x \to a}\sqrt[n]{f(x)} = \sqrt[n]{L}$, provided $L > 0$ when $n$ is even |
| **Composition** | If $g$ is continuous at $L$, then $\displaystyle\lim_{x \to a} g(f(x)) = g(L)$ |

### Important Consequences

1. **Polynomial functions** $p(x) = a_n x^n + \cdots + a_1 x + a_0$ are continuous everywhere, so $\displaystyle\lim_{x \to a} p(x) = p(a)$.

2. **Rational functions** $\dfrac{p(x)}{q(x)}$ are continuous wherever $q(a) \neq 0$, so $\displaystyle\lim_{x \to a} \frac{p(x)}{q(x)} = \frac{p(a)}{q(a)}$ when $q(a) \neq 0$.

3. All limit laws apply equally to **one-sided limits** — simply restrict attention to $x > a$ or $x < a$.

### A Classical Limit

One limit that cannot be computed by direct substitution is

$$\lim_{x \to 0} \frac{\sin x}{x} = 1.$$

This is typically proved via the **Squeeze (Sandwich) Theorem** and is used frequently. Note that the limit exists as a two-sided limit, which means both one-sided limits equal $1$:

$$\lim_{x \to 0^{+}} \frac{\sin x}{x} = 1 \quad \text{and} \quad \lim_{x \to 0^{-}} \frac{\sin x}{x} = 1.$$

---

## 5. Continuity at a Point

### 5.1 Definition

A function $f$ is **continuous at** $x = a$ if the following **three conditions** all hold:

1. $f(a)$ **is defined** (i.e., $a$ is in the domain of $f$).
2. $\displaystyle\lim_{x \to a} f(x)$ **exists** (i.e., left-hand and right-hand limits are equal).
3. $\displaystyle\lim_{x \to a} f(x) = f(a)$ (the limit equals the function value).

If any one of these conditions fails, $f$ is **discontinuous at** $x = a$.

### 5.2 Two-Step Procedure for Checking Continuity

In practice (especially for piecewise functions), use the following systematic approach:

**Step 1 — Check existence of the limit.**

Compute $\displaystyle\lim_{x \to a^{-}} f(x)$ and $\displaystyle\lim_{x \to a^{+}} f(x)$.
- **Case 1 (limit DNE):** If the one-sided limits are not equal, then $\displaystyle\lim_{x \to a} f(x)$ does not exist, and $f$ is **not continuous** at $a$. Stop here.
- **Case 2 (limit exists):** If both one-sided limits equal $L$, proceed to Step 2.

**Step 2 — Compare limit with function value.**

Check whether $f(a) = L$.
- If $f(a) = L$, then $f$ is **continuous** at $x = a$.
- If $f(a) \neq L$ (or $f(a)$ is undefined), then $f$ is **not continuous** at $x = a$.

> **Clarification:** Step 1 failing and Step 2 failing represent **different types** of discontinuity (see Section 6 below). Always perform the steps in order.

---

## 6. Types of Discontinuity

When a function fails to be continuous at a point $a$, the nature of the failure falls into one of three categories.

### 6.1 Jump Discontinuity

A **jump discontinuity** occurs at $x = a$ when both one-sided limits exist but are **not equal**:

$$\lim_{x \to a^{-}} f(x) = L^{-}, \quad \lim_{x \to a^{+}} f(x) = L^{+}, \quad L^{-} \neq L^{+}.$$

The "jump" has size $|L^{+} - L^{-}|$.

**Example:** The floor function $\lfloor x \rfloor$ at every integer $n$. As shown in Section 3.2, the left-hand limit is $n-1$ and the right-hand limit is $n$, giving a jump of size $1$.

### 6.2 Removable Discontinuity

A **removable discontinuity** occurs at $x = a$ when the two-sided limit exists but either $f(a)$ is not defined, or $f(a)$ does not equal the limit:

$$\lim_{x \to a} f(x) = L \quad \text{but} \quad f(a) \neq L \text{ (or } f(a) \text{ undefined)}.$$

The discontinuity is called "removable" because we can **redefine** $f(a) = L$ to make $f$ continuous at $a$.

**Example:** Consider $g(x) = \dfrac{x^2 - 1}{x - 1}$ for $x \neq 1$. We can simplify:

$$g(x) = \frac{(x-1)(x+1)}{x-1} = x + 1 \quad (x \neq 1).$$

Then $\displaystyle\lim_{x \to 1} g(x) = 2$, but $g(1)$ is undefined. Defining $g(1) = 2$ removes the discontinuity.

### 6.3 Essential (Infinite or Oscillatory) Discontinuity

An **essential discontinuity** occurs when one or both one-sided limits **fail to exist** (they may tend to $\pm\infty$ or oscillate without settling). These cannot be "fixed" by redefining the function at a single point.

**Examples:**
- $f(x) = \dfrac{1}{x}$ at $x = 0$: $\displaystyle\lim_{x \to 0^{+}} f(x) = +\infty$ and $\displaystyle\lim_{x \to 0^{-}} f(x) = -\infty$ (infinite discontinuity).
- $f(x) = \sin\!\left(\dfrac{1}{x}\right)$ at $x = 0$: the function oscillates between $-1$ and $1$ infinitely often as $x \to 0$; neither one-sided limit exists (oscillatory discontinuity).

### Summary Table: Types of Discontinuity

| Type | One-sided limits | Two-sided limit | Relation to $f(a)$ |
|---|---|---|---|
| **Continuous** | Both exist and are equal to $L$ | Exists, equals $L$ | $f(a) = L$ |
| **Removable** | Both exist and are equal to $L$ | Exists, equals $L$ | $f(a) \neq L$ or undefined |
| **Jump** | Both exist, $L^{-} \neq L^{+}$ | Does not exist | — |
| **Essential** | At least one DNE (infinite/oscillatory) | Does not exist | — |

---

## 7. Piecewise Functions — Worked Examples

A **piecewise function** is defined by different formulas on different parts of its domain. Continuity questions arise precisely at the **boundary points** where the formula changes, since away from these points each piece is typically a standard continuous function (polynomial, trigonometric, etc.).

### Example 1: Continuous Piecewise Function

**Example:** Let

$$f(x) = \begin{cases} \dfrac{\sin x}{x}, & x > 0, \\[6pt] 1, & x = 0, \\[4pt] x + 1, & x < 0. \end{cases}$$

Is $f$ continuous at $x = 0$?

**Solution:**

**Step 1 — Compute one-sided limits.**

*Right-hand limit ($x \to 0^{+}$):* For $x > 0$, the function is $\dfrac{\sin x}{x}$. Using the classical limit:

$$\lim_{x \to 0^{+}} \frac{\sin x}{x} = 1.$$

*Left-hand limit ($x \to 0^{-}$):* For $x < 0$, the function is $x + 1$. This is a polynomial, so:

$$\lim_{x \to 0^{-}} (x + 1) = 0 + 1 = 1.$$

Since both one-sided limits equal $1$, the two-sided limit exists:

$$\lim_{x \to 0} f(x) = 1.$$

**Step 2 — Compare with $f(0)$.**

By definition, $f(0) = 1$. Since

$$\lim_{x \to 0} f(x) = 1 = f(0),$$

we conclude that $f$ **is continuous at** $x = 0$. $\square$

> **Clarification:** The key insight is that $\sin x / x$ is not defined at $x = 0$, but the piecewise definition fills in the value $f(0) = 1$, which matches the limit. This is precisely how one "removes" what would otherwise be a removable discontinuity.

---

### Example 2: Another Continuous Piecewise Function

**Example:** Let

$$f(x) = \begin{cases} x^2, & x \geq 1, \\ x^3, & x < 1. \end{cases}$$

Is $f$ continuous at $x = 1$?

**Solution:**

For $x > 1$ and $x < 1$ separately, $f$ is a polynomial and hence continuous. The only point requiring investigation is $x = 1$.

**Step 1 — Compute one-sided limits.**

*Right-hand limit ($x \to 1^{+}$):* For $x \geq 1$, the function is $x^2$:

$$\lim_{x \to 1^{+}} x^2 = 1^2 = 1.$$

*Left-hand limit ($x \to 1^{-}$):* For $x < 1$, the function is $x^3$:

$$\lim_{x \to 1^{-}} x^3 = 1^3 = 1.$$

Since both one-sided limits equal $1$:

$$\lim_{x \to 1} f(x) = 1.$$

**Step 2 — Compare with $f(1)$.**

By the first piece of the definition (since $x = 1$ satisfies $x \geq 1$):

$$f(1) = 1^2 = 1.$$

Therefore $\displaystyle\lim_{x \to 1} f(x) = 1 = f(1)$, and $f$ **is continuous at** $x = 1$. $\square$

> **Clarification:** This example illustrates that a piecewise function **can** be continuous at its breakpoint. The fact that $x^2$ and $x^3$ happen to agree at $x = 1$ (both equal $1$) is what makes this work. If, for instance, the second piece were $2x^3$, the left-hand limit would be $2$, producing a jump discontinuity.

---

### Example 3: A Piecewise Function with a Jump

**Example:** Let

$$g(x) = \begin{cases} x^2, & x \geq 1, \\ 3 - x, & x < 1. \end{cases}$$

Is $g$ continuous at $x = 1$?

**Solution:**

**Step 1 — Compute one-sided limits.**

*Right-hand limit:*

$$\lim_{x \to 1^{+}} x^2 = 1.$$

*Left-hand limit:*

$$\lim_{x \to 1^{-}} (3 - x) = 3 - 1 = 2.$$

Since $1 \neq 2$, the two-sided limit **does not exist**.

**Conclusion:** By Step 1 (Case 1), $g$ is **not continuous at** $x = 1$. This is a **jump discontinuity** with jump size $|2 - 1| = 1$. $\square$

---

### Example 4: Removable Discontinuity in a Piecewise Function

**Example:** Let

$$h(x) = \begin{cases} x + 2, & x \neq 3, \\ 10, & x = 3. \end{cases}$$

Is $h$ continuous at $x = 3$?

**Solution:**

**Step 1 — Compute the limit.**

For $x \neq 3$, $h(x) = x + 2$. Therefore:

$$\lim_{x \to 3} h(x) = \lim_{x \to 3}(x+2) = 5.$$

The limit exists (both one-sided limits equal $5$).

**Step 2 — Compare with $h(3)$.**

$$h(3) = 10 \neq 5 = \lim_{x \to 3} h(x).$$

Therefore $h$ is **not continuous at** $x = 3$. This is a **removable discontinuity**: redefining $h(3) = 5$ would restore continuity. $\square$

---

## 8. Continuity on an Interval and Standard Continuous Functions

### 8.1 Continuity on an Interval

A function $f$ is **continuous on an open interval** $(a, b)$ if it is continuous at every point in $(a, b)$.

For a **closed interval** $[a, b]$, we additionally require:
- **Right-continuity** at $a$: $\displaystyle\lim_{x \to a^{+}} f(x) = f(a)$.
- **Left-continuity** at $b$: $\displaystyle\lim_{x \to b^{-}} f(x) = f(b)$.

### 8.2 Functions Known to Be Continuous

The following families of functions are continuous on their natural domains. This fact, combined with limit laws, allows rapid computation of many limits.

| Function type | Domain of continuity |
|---|---|
| Polynomial $p(x)$ | All of $\mathbb{R}$ |
| Rational $p(x)/q(x)$ | $\{x \in \mathbb{R} : q(x) \neq 0\}$ |
| $\sin x$, $\cos x$ | All of $\mathbb{R}$ |
| $e^x$ | All of $\mathbb{R}$ |
| $\ln x$ | $(0, \infty)$ |
| $\sqrt[n]{x}$ ($n$ odd) | All of $\mathbb{R}$ |
| $\sqrt[n]{x}$ ($n$ even) | $[0, \infty)$ |
| $\lfloor x \rfloor$ | $\mathbb{R} \setminus \mathbb{Z}$ |

The continuity of these standard functions, together with the **sum**, **product**, **quotient**, and **composition** rules from Section 4, means that any algebraic or transcendental expression built from them is continuous wherever it is defined.

---

## 9. Strategy for Limit and Continuity Problems

When faced with a limit or continuity problem, follow this systematic approach:

### For computing $\displaystyle\lim_{x \to a} f(x)$:

1. **Direct substitution:** If $f$ is continuous at $a$ (polynomial, rational with non-zero denominator, etc.), then $\displaystyle\lim_{x \to a} f(x) = f(a)$. Done.

2. **Algebraic simplification:** If direct substitution gives an indeterminate form $\frac{0}{0}$, try factoring, rationalising, or simplifying before substituting again.

3. **Known limits:** Use classical results like $\displaystyle\lim_{x \to 0} \frac{\sin x}{x} = 1$.

4. **Squeeze Theorem:** If $g(x) \leq f(x) \leq h(x)$ near $a$ and $\displaystyle\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L$, then $\displaystyle\lim_{x \to a} f(x) = L$.

5. **One-sided limits:** For piecewise functions or functions with different behaviour on each side, compute left-hand and right-hand limits **separately**.

### For checking continuity at $x = a$:

1. Identify the relevant **pieces** of the function definition on each side of $a$.
2. Compute $\displaystyle\lim_{x \to a^{-}} f(x)$ and $\displaystyle\lim_{x \to a^{+}} f(x)$.
3. If they differ → **not continuous** (jump discontinuity). Stop.
4. If they agree → the limit $L$ exists. Check whether $f(a) = L$.
5. If $f(a) = L$ → **continuous**. If not → **not continuous** (removable discontinuity).

---

## 10. Extended Example: Combining Multiple Concepts

**Example:** Let

$$f(x) = \begin{cases} \dfrac{x^2 - 4}{x - 2}, & x > 2, \\[6pt] \lfloor x \rfloor + 2, & 0 \leq x \leq 2, \\[4pt] \sin(\pi x) + 1, & x < 0. \end{cases}$$

Determine the continuity of $f$ at $x = 0$ and $x = 2$.

**Solution:**

**At $x = 0$:**

*Right-hand limit ($x \to 0^{+}$):* For $x \in (0, 2]$, $f(x) = \lfloor x \rfloor + 2$. For $x \in (0, 1)$, $\lfloor x \rfloor = 0$, so $f(x) = 2$. Thus:

$$\lim_{x \to 0^{+}} f(x) = 2.$$

*Left-hand limit ($x \to 0^{-}$):* For $x < 0$, $f(x) = \sin(\pi x) + 1$:

$$\lim_{x \to 0^{-}} [\sin(\pi x) + 1] = \sin(0) + 1 = 1.$$

Since $2 \neq 1$, the two-sided limit does not exist. Therefore $f$ has a **jump discontinuity** at $x = 0$.

**At $x = 2$:**

*Right-hand limit ($x \to 2^{+}$):* For $x > 2$, $f(x) = \dfrac{x^2 - 4}{x - 2} = \dfrac{(x-2)(x+2)}{x-2} = x + 2$ (valid since $x \neq 2$):

$$\lim_{x \to 2^{+}} (x + 2) = 4.$$

*Left-hand limit ($x \to 2^{-}$):* For $x \in [0, 2]$, $f(x) = \lfloor x \rfloor + 2$. For $x \in [1, 2)$, $\lfloor x \rfloor = 1$, so $f(x) = 3$. Thus:

$$\lim_{x \to 2^{-}} f(x) = 3.$$

Since $4 \neq 3$, the limit does not exist at $x = 2$. Therefore $f$ has a **jump discontinuity** at $x = 2$. $\square$

> **Clarification:** Notice that even though $\dfrac{x^2 - 4}{x-2}$ has a removable discontinuity at $x = 2$ when considered alone, the overall piecewise function has a **jump** discontinuity there because the left piece approaches a different value.

---

## 11. The Squeeze Theorem

For completeness, we state one of the most powerful tools for evaluating limits:

> **Theorem (Squeeze / Sandwich Theorem).** Suppose that in some open interval containing $a$ (except possibly at $a$ itself):
>
> $$g(x) \leq f(x) \leq h(x),$$
>
> and
>
> $$\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L.$$
>
> Then $\displaystyle\lim_{x \to a} f(x) = L$.

**Example:** Show that $\displaystyle\lim_{x \to 0} x^2 \sin\!\left(\frac{1}{x}\right) = 0$.

**Solution:** For all $x \neq 0$:

$$-1 \leq \sin\!\left(\frac{1}{x}\right) \leq 1 \implies -x^2 \leq x^2 \sin\!\left(\frac{1}{x}\right) \leq x^2.$$

Since $\displaystyle\lim_{x \to 0}(-x^2) = 0$ and $\displaystyle\lim_{x \to 0} x^2 = 0$, the Squeeze Theorem gives

$$\lim_{x \to 0} x^2 \sin\!\left(\frac{1}{x}\right) = 0. \quad \square$$

---

## 12. Comprehensive Summary

| Concept | Key Idea |
|---|---|
| **Left-hand limit** $\displaystyle\lim_{x \to a^{-}} f(x)$ | Value $f(x)$ approaches as $x$ increases toward $a$ from below |
| **Right-hand limit** $\displaystyle\lim_{x \to a^{+}} f(x)$ | Value $f(x)$ approaches as $x$ decreases toward $a$ from above |
| **Two-sided limit exists** | $\iff$ both one-sided limits exist and are equal |
| **Limit laws** | Sum, product, quotient, power, composition rules for combining known limits |
| **Continuity at $a$** | (1) $f(a)$ defined; (2) limit exists; (3) limit $= f(a)$ |
| **Jump discontinuity** | One-sided limits exist but differ |
| **Removable discontinuity** | Limit exists but $\neq f(a)$ (or $f(a)$ undefined) |
| **Essential discontinuity** | At least one one-sided limit DNE (infinite or oscillatory) |
| **Floor function** $\lfloor x \rfloor$ | Continuous on $\mathbb{R} \setminus \mathbb{Z}$; jump discontinuity at every integer |
| **Piecewise functions** | Check continuity only at breakpoints; use one-sided limits |
| **Squeeze Theorem** | Bounding $f$ between two functions with the same limit forces $f$ to share that limit |
| **$\displaystyle\lim_{x \to 0} \frac{\sin x}{x} = 1$** | Classical limit; essential for trigonometric limit problems |