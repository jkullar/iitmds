# W11_L5: Review of maths - 2

**Week:** Week 11
**YouTube URL:** https://www.youtube.com/watch?v=_hLYDPQtDKY

---

## Transcript

[00:14] Hello, and welcome to the Maths 2 component of the online BSc program on Data Science
[00:18] and Programming. This is the final video of this course. So, let us do a review of whatever
[00:24] we have studied in this course, I am going to do a week-by-week review. But I will take
[00:29] bunches of weeks, depending on the topic. So, topics which are sort of clustered together,
[00:35] I will try to address them in one shot.
[00:38] So, this is a very brief review, it is not meant to exhaust the entire course, in the
[00:45] sense of I would not be able to cover all the ideas or all the details of what we have
[00:49] done in the course. But this is a broad outline of what we have learned. And yeah, it is my
[00:56] hope that if not the details, at least the words and the topics that we have learned
[01:03] are something that you can keep in your mind as you go ahead, especially for the upcoming
[01:09] courses of Machine Learning, and other courses also, where they may not use the same ideas
[01:15] that, the exact same ideas that you have learned in this course, but they will use the maturity
[01:20] that you have gained while studying this course.
[01:23] So, let us start with weeks 1 to 3 where we function, where we studied functions of one
[01:30] variable. So, the broad outlines of what we studied were the notions of limit and continuity,
[01:38] differentiability and tangents, and then integration and anti-derivatives, so just as, just to
[01:43] recall within this, what did we do.
[01:46] So, first, we did limits of real numbers, so limits of real numbers. So, that means
[02:00] limits of sequences of real numbers, maybe I should write limits of sequences of real
[02:08] numbers or limits of sequences in R. So, the idea here was that the sequence comes closer
[02:18] and closer to a point as your sequence increases, as n increases.
[02:24] So, we use this idea to talk about limits of a function. So, we said, if you have a
[02:31] limit, if you have a sequence, which approaches some real number x, then the function value
[02:39] at the sequence points must approach the function value at that number x, and if that happens
[02:47] for all sequences, which converge to x, then the function is said to be continuous at that
[02:54] point.
[02:55] So, we made several intermediate steps. So, we had the notions of left limit and right
[03:02] limit, which is when we said, we look at what happens when we come from the left, from the
[03:10] right. Sometimes it happened that both sides there were limits, then we demanded that the
[03:15] limit matches and if they, if it did, left and right matched, then we set the limit as
[03:22] x tends to some point A that exists.
[03:27] So, limit exists at a point. And then finally, we add continuity, which said that the limit
[03:38] must exist, and that limiting value at the point must match the function value. So, the
[03:45] function evaluated at A is the same as the limit of x tends to A f of x. So, in other
[03:54] words, you can interchange limit and function that was the idea of continuity. So, this
[04:00] was a brief outline of what you did for limits and continuity.
[04:04] Then we studied the notions of differentiability and tangents. So, we saw that limits. The
[04:12] notion of continuity allows us to talk about the existence of limits, but it does not guarantee
[04:19] that the function behaves well. So, what do we mean by behaves well? That the graph of
[04:23] the function does not have corners. And somehow, we wanted to avoid corners, because wherever
[04:29] we have corners, it becomes difficult to talk about rate of change.
[04:33] So, the main or underlying theme here was that we want to study the rate of change of
[04:40] a function at a point. So, we saw that this rate of change is captured, provided the function
[04:47] is differentiable at that point. Which meant that as you take limit h tends to 0 f of a
[05:02] plus h minus f of a divided by h, this should converge somewhere and whatever that value
[05:09] is. So, it should exist and whatever that value is we call f prime a. So, that was called,
[05:14] so f prime is a function that is created in this way, so, that is the derivative function.
[05:20] So, f prime is the derivative function of f. And we saw that the derivative function
[05:36] is or the idea of differentiability is very, very, very closely related to the idea of
[05:45] the existence of the tangent line. So, the key point here was tangent so the tangent
[05:53] line at a point a exists. So, this was the same as f prime a exists. And this is the
[06:08] same as the linear approximation, best linear approximation at a exists. This was the idea
[06:25] of tangents and the idea of rate of change, fine.
[06:30] So, then the third topic sort of that we studied here was integration. And so, the integral
[06:42] computes the area under the graph of a curve, sorry the area under the graph of a function
[06:58] so the way we do this is to take what are called Riemann sums, which means you take
[07:09] rectangles, which sort of cover the part that you want to find the area of and then you
[07:17] sum up the area of those rectangles, and then you make those rectangles, you make your,
[07:23] the length or the height of the rectangle is measured by the function value at some
[07:29] point within the interval.
[07:31] So, you have to first take a partition of your interval, then for some one of the sub
[07:38] intervals in that partition, there is a point that you choose whose function value you take
[07:44] that is the height of your rectangle, and then the sub interval length is the width
[07:51] of your rectangle, and then you multiply height by width.
[07:53] So, that gives you an approximation for the part around the, above that particular sub
[08:02] interval, and then you sum these up. And that is what the Riemann sum is. And then as you
[08:08] make your partition smaller and smaller, so limit over partition size tends to 0 of the
[08:24] Riemann sums is the integral, this was how we defined the integral.
[08:37] And then we said, well, you can extend this, sometimes you can do 0 to infinity as well,
[08:41] you can do minus infinity to infinity for depending on how the function is etc. And
[08:47] then we also saw that this is a very difficult way to compute actually. And that is where
[08:53] Newton's theorem comes in very, very, very handy.
[08:55] So, Newton's theorem says that if your function is continuous, then first of all the integral
[09:04] exists. And you can find it by finding the anti-derivative. So, that means you find a
[09:10] function, so that its derivative is the function that you have. And then if you can find such
[09:16] a function, so then suppose that function is g, then integral fx dx from a to b is equal
[09:22] to g of b minus g of a, so you evaluate it at the endpoints of the interval that you
[09:27] have, and then take the difference of the larger one from the smaller one, meaning the
[09:32] larger endpoint from the smaller endpoint.
[09:35] So, integral f prime x, or integral f x dx a to b is equal to g of b minus g of a where
[09:49] g prime is equal f this is in a nutshell what Newton's theorem said and this is what allows
[09:57] us to compute our integrals. And you already saw applications of the integrals in this
[10:03] statistics course, you will see more applications of all these things as you go on ahead, fine.
[10:09] So, this was a brief summary of what we did in weeks 1 to 3, where we studied functions
[10:15] of one variable.
[10:17] Next, we started looking at a system of linear equations. And then we started asking how
[10:24] do we solve such a thing? So, the main thrust here was that given a system of linear equations,
[10:31] you can find a corresponding matrix. So, you change your question about solving a system
[10:38] of linear equations, instead do a question about matrices. And this allowed us to use
[10:43] the theory of matrices in order to solve these equations. So, this was the main, the big
[10:49] idea in these two weeks was you can rewrite your system of linear equations in the form
[10:55] a x is equal to b. And then you can use the matrix a and column vector b, to solve for
[11:02] this.
[11:03] So, in order to solve of course, we had to define the various things about matrices.
[11:08] So, in particular, we had to define determinants. And once we define determinants for a square
[11:15] matrix, we saw that there were two methods to solve an equation of the form a x is equal
[11:21] to b for a square matrix if the determinant is nonzero.
[11:25] So, the determinant being nonzero was the same as the matrix being invertible. This
[11:30] was a key point. And the first method was what was called Kramer's rule, which was where
[11:38] you took your column vector B, and you placed it in appropriate columns, you replace the
[11:46] appropriate columns of have a and then you found the determinant of that, and then you
[11:54] divided that by the determinant of a. And that was the ith, so if you replace the ith
[12:00] column, then this process gave you the value of xi, which was a solution. And in this case,
[12:07] there is a unique solution. So, this completely solves the problem of finding the solutions.
[12:16] The other way was to find a inverse, the inverse matrix. So, to do that, we had to compute
[12:21] what the inverse was. And to do that, there was a formula wherein we define what was called
[12:27] the ad joint. So, to do that, we defined the notions of the minors and so on, then you
[12:36] have to place all these, you have to multiply by a suitable plus or minus 1, and then you
[12:43] have to place them in appropriate places. And then that divide the whole thing by determinant
[12:48] of a, and that gives you your inverse matrix. And so that that is the solution via ad joints.
[12:55] So, these were the two methods we saw for square matrices where the determinant is nonzero.
[13:01] After that, we studied extensively, what was called the reduced epsilon form. And the idea
[13:07] of row reduction for matrices, here the matrices were not square, you could have any kind of
[13:13] matrices.
[13:14] And the really big point in this study was, at the end, we had something called the Gaussian
[13:23] elimination method, which in short, some people called GEM, because it really is a gem. And
[13:29] the Gaussian elimination method allows you to solve equations by taking a matrix a here,
[13:39] putting your column vector here, and then doing row reduction.
[13:44] So, this was the method, so where you row reduce a and carry out those same operations
[13:51] on b. And at the end, you get a matrix in reduced epsilon form. And then we know how
[13:58] to write down those solutions. And then those set of solutions are the same for the original
[14:02] system a x equal to b, this was the main point.
[14:07] And the Gaussian elimination method or row reduction was the really outstanding idea
[14:15] that we studied in these weeks. And this idea was later used as well, which we will come
[14:20] to in a minute. So, just to reiterate, we studied matrices over here and we studied
[14:28] row operations. Specifically, how to row reduce and how to use it via Gauss elimination to
[14:36] get solutions of system of linear equations, fine.
[14:40] So, after this, we had weeks 6 and one video in week 7, which dealt with the basics of
[14:52] linear algebra. So, here we studied for the first time what is an abstract vector space,
[14:58] for a vector space we studied what are subspaces? So, just to recall, a subspace is a subset
[15:08] of the vector space V of a vector space, which is itself a vector space. What does that mean?
[15:22] That means it is closed under the operations of scalar multiplication and addition. So,
[15:30] once that happens, it will become a vector space in its own, because all the other properties
[15:35] are already derived from the fact that it is a subset of this vector space. So, this
[15:41] was one of the things we studied, we studied the notion of linear dependence and independence
[15:47] of vectors. So, this was where you took a bunch of vectors. You said, well, let us see
[15:55] if I can solve this equation.
[15:57] So, if you can solve this equation in a non-trivial way, then it is they are linearly dependent.
[16:05] And if it is the only solution is the trivial solution, meaning all the constants CIR 0,
[16:15] then this is linearly independent. So, this is linearly independent, this is what we mean
[16:25] by linearly independent. And one of the ideas behind linear independence
[16:31] is that linear independence allows you to write any vector in the span of the vectors
[16:40] that you have in a very easy form or in a sort of the most compact form. So, of course,
[16:48] before that, we had to talk about spans. So, span means the collection of those vectors
[16:54] that you can obtain from the vectors that are given to you by taking all possible linear
[16:59] combinations.
[17:01] So, span of a set S is set of linear combinations of vectors in S. And then we saw that if you
[17:23] have a set S such that it is both spanning and linearly independent, then that is called
[17:31] a basis. So, basis means spanning plus linearly independent, and then we had various ways
[17:39] of characterizing this. Namely, it is a maximal linearly independent set or a minimal spanning
[17:48] set, etc and the number of elements, the number of vectors that you need in order to form
[17:55] a basis that is exactly dimension.
[17:57] So, dimension is the cardinality of basis. And this is well defined, because any two
[18:04] basis have the same cardinality. And we used all these ideas that we had studied for matrices
[18:15] in order to make computations for this. So, we saw how to if you have a spanning set,
[18:22] how to throw away vectors in order to get a basis, we saw if you have a linearly independent
[18:28] set, how to take in more vectors in order to make it a basis, and in general, how to
[18:39] see whether a set of vectors forms a basis or not. So, all of these were things that
[18:43] we did using matrices.
[18:45] So, maybe I should say here that so checking for linear independence means so checking
[18:56] involves solving equations, so we are solving this equation, solving equations. Checking
[19:11] something is a basis means, again, we have to solve a bunch of equations or you can,
[19:18] if you, if it is in Rn, then you must have n vectors first of all, if it is more than
[19:27] n, then it cannot be a basis. Because they will not be linearly independent. If it is
[19:32] less than n, then they will not be a basis because they cannot be spanning. So, it must
[19:37] be n.
[19:38] And then we saw that checking n vectors in Rn form a basis is the same as them as columns
[19:56] in a matrix and the determinant should be nonzero, should be nonzero. So, if it is nonzero
[20:16] then we know they form a basis, if it is 0 then they do not form a basis. So, our previous
[20:23] theory of matrices, all the operations that we did on matrices helped us with solving
[20:30] these kinds of problems.
[20:35] Then we did a little bit more of linear algebra, where we connected linear algebra with matrices
[20:41] in the sense that first of all, we studied matrices by themselves. So, we studied the
[20:46] notion of column spaces and row spaces for a matrix, so that is the span of the columns
[20:54] of the matrix or the span of the rows of the matrix, so they will be if the matrix has
[20:58] size m by n, so that means it has m rows. So, each row is an element of Rn. And so,
[21:09] the row space will be a sub space of Rn, and the column space will be a subspace of Rm.
[21:16] And so, then we studied these column and row spaces, and we saw how to get a basis for
[21:25] the column space and the row space again, the underlying idea was Gaussian elimination
[21:30] because you have a spanning set already, so, you can use Gaussian elimination to throw
[21:35] out some vectors, some of these columns or rows, and then you can get a basis for the
[21:43] column space and the row space.
[21:44] So, similarly, we define something called the null space of a matrix. So, the null space
[21:51] means all those vectors x such that a x is equal to 0. So, again this means solving equations,
[22:00] and we know how to do this using Gaussian elimination. So, using Gaussian elimination,
[22:05] we could tackle the problem of the null space. And in fact, the Gaussian elimination method
[22:11] also gave us what are the basis vectors for the null space.
[22:18] And putting these two together, we could find the rank of the matrix which is the dimension
[22:23] of the column space or the row space, which happened to be the same and the nullity of
[22:28] the matrix which is the dimension of the null space. And it also showed us that something
[22:38] called the rank nullity theorem was true, which meant that rank plus nullity is equal
[22:42] to n, where this matrix is of size m by n.
[22:46] So, all of these are the checking part is a byproduct of Gaussian elimination. So, this
[22:55] is a really powerful method as I commented earlier, which is why it is often called GEM.
[23:05] And finally, we studied the notion of equivalence and similarity of matrices. So, this came
[23:11] towards the end of the 8th week after we had also studied linear transformations, which
[23:16] I will do in the next slide. And after which it made me a little bit more sense.
[23:22] So, the idea of equivalence is not so difficult to understand. So, B is equal to Q inverse
[23:32] AP or Q A P, so this is equivalence. Similarity is a much, much deeper idea. So, the idea
[23:47] of equivalence is just to say that when do two matrices have the same rank, once two
[23:52] matrices have the same rank, they are going to be equivalent. So, it is a precise condition.
[23:59] And where do we need this?
[24:01] Well, if you change your basis on both sides, then you change your matrix that is coming
[24:06] to linear transformations. And that is why this is defined in the first place. Similarity,
[24:11] though, is much, much more involved idea, because here what we are doing is we are changing
[24:18] our basis simultaneously on both sides. And that is why we had similarity and the idea
[24:27] of similarity is going to come in again, it will come when you study machine learning
[24:30] and foundations and you will study things like Eigen values and characteristic polynomials
[24:38] and so on. So, although we had only one video on this, this idea is going to come again.
[24:45] So, I would encourage you to pay attention to this, do it once more before your ML course
[24:52] if you want.
[24:55] So, the same set of weeks. We also studied linear transformations. So, linear transformations
[25:03] essentially functions from vector spaces to vector spaces. Well, of course, we know, the
[25:10] idea of functions already. If you have two sets, a function takes something in here and
[25:15] says I will associate to this element of the set, I will associate some element of that
[25:23] set. This is what a function does.
[25:25] But when you have extra structure on those sets, then you will often like to preserve
[25:30] that structure. So, here for vector spaces, what is the main structure that you have?
[25:35] It is coming from addition and scalar multiplication. So, you would like to preserve that structure
[25:41] and linear transformations are exactly what do that.
[25:43] So, linear transformations are defined by the fact that if you have a linear combination,
[25:50] and you apply the linear transformation, then you get a linear combination on the other
[25:55] side, where you can take your transformation inside the linear combination. So, linear
[26:03] transformation means when you apply your function to a linear combination, you can take your
[26:10] function inside the linear combination. This is exactly what is a linear transformation.
[26:16] Now, again, the punch line in this entire set of videos was, once you fix a ordered
[26:23] basis for V and W, you fix an ordered and remember here it has to be an ordered basis,
[26:28] not just a basis, yeah, you fix a set of vectors V1, V2, Vn, and W1, W2, Wm, then you get a
[26:40] matrix. How do I get a matrix, if I express f of one of the basis vectors of W in terms
[26:50] of the basis vectors for V, so I have V to W sorry, so if I take a basis vector for V,
[27:00] and apply the transformation and express that in terms of the basis vectors of W, the ordered
[27:05] basis of W that we have chosen.
[27:07] So, those coefficients are what come into your matrix, that gives you a matrix and essentially,
[27:12] this entire thing said, well, I have this linear transformation, but what I am going
[27:17] to do is I am going to choose ordered bases on both sides convert it to a matrix, then
[27:21] whatever I want to find about that linear transformation, I am going to use my matrix,
[27:26] which we developed a lot of theory for in order to find it. So, what are some of the
[27:30] things that we could find, the image of the linear transformation, this goes to the column
[27:35] space of the matrix, this corresponds to the column space of the matrix.
[27:38] So, in particular, if I want the dimension of the image of the linear transformation,
[27:45] then so sometimes that is called the rank of the linear transformation, then that is
[27:51] exactly the dimension of the column space or the row space of the matrix, and that can
[27:56] be found by finding the rank of the matrix, which we have seen before can be done using
[28:02] Gaussian elimination.
[28:03] Similarly, we define something called the kernel of the linear transformation that is
[28:07] exactly what corresponds to the null space of the matrix. So, again, you find, you can
[28:12] find the nullity or a basis for the null space using Gaussian elimination and then use that
[28:17] to get the basis or the dimension of the kernel of the linear transformation. So, that was
[28:25] again called nullity of the linear transformation.
[28:27] And then because we had this very nice formula for matrices that rank plus nullity is n,
[28:31] you get the same thing for linear transformations, this was broadly what we did. So, the key
[28:37] point here is this thing of how we did this and I think this is a fairly if you are seeing
[28:48] it for the first time this is a fairly involved process, it is not difficult but you have
[28:53] to keep it in mind that what are you doing, so how do you get your matrix, this is what
[28:58] you have to keep in mind.
[28:59] So, express the basis vector of V in terms of the apply your linear transformation and
[29:07] express that in terms of the basis vectors for W and those coefficients are what you
[29:12] should take and that put them in the appropriate places in your matrix. This is exactly how
[29:17] you get this matrix. Yeah. So, a large part of linear algebra as you have seen so far
[29:25] is to convert your problems from abstract vector spaces into a tangible thing that we
[29:33] understand like matrices. This is exactly what linear algebra does for you.
[29:39] And then finally, we had one last video in week 8, which is called, which was on affine
[29:45] spaces and affine transformations in linear algebra. Now, I want to warn you, some of
[29:51] you might have studied mathematics before and you may have come across the term affine
[29:57] space. It is used in different context. So, this is the context in linear algebra, there
[30:02] is a different context in higher if you have done more mathematics, and that is not what
[30:07] we are talking about in this set of videos, fine.
[30:10] So, what are affine spaces, they are very easy, you take now vector subspaces, you have
[30:16] a vector space, then you take vector subspaces, and you translate them. See, remember that
[30:22] vector subspace means it must pass through 0 when you take it as a geometrical object,
[30:28] like a plane or a hyperplane, or something like that, it must pass through the 0 vector.
[30:34] So, if you translate it, it will not pass through the 0 vector. But that still has some
[30:40] nice structure. After all, it is still a plane, or it is still a hyperplane, although it is
[30:44] not passing through 0. So, you would want, you want to study such things. And indeed,
[30:48] later on, we saw why we want to study such things, because we studied the notion of tangent
[30:53] planes, or tangent hyperplane. So, those are affine spaces.
[30:56] So, that is one of the reasons to study affine spaces. So, they are just translates of subspaces,
[31:02] nothing really at all deep happening in this, only a lot of notation, so you have to get
[31:08] used to it. So, as I said, one of the good reasons for studying this course is to develop
[31:14] your mathematical maturity, that is really what, many of these things are for that reason,
[31:20] fine.
[31:22] So, the vector space corresponding to an affine subspace is unique. So, this is a, it is very
[31:30] intuitive, because you have translated it, if you translate it back to 0 parallelly,
[31:35] then you get something unique. So, that is a unique vector of space that you get. And
[31:41] then how, what are affine transformations? Again, this was a lot of notation when we
[31:47] defined this, but what they are really doing is very simple, you translate your, you have
[31:53] two affine subspaces, translate this to pass through the origin, that translation means
[31:58] already you have a function. So, you map some vector your to the vector on this thing. Similarly,
[32:06] you have a affine subspace here, you transfer it to the origin, meaning passing through
[32:13] 0. So, now you have two vector subspaces.
[32:16] Here, you can talk about linear transformation. So, you have a linear transformation here.
[32:20] So, what you are doing is you are saying affine transformation means what, you are first asking
[32:25] for this map, then you are asking for this linear transformation, and then you are asking
[32:29] for this translation, natural, once you put these three together, that is exactly what
[32:34] is an affine transformation. So, writing it down in terms of algebra is a little tedious,
[32:39] but the idea is not at all difficult, it is exactly what is happening, translate, taken
[32:46] in your transformation, translate back that is all.
[32:53] Then week nine was very studied a little bit of geometry allied with linear algebra. So,
[33:01] linear algebra, as we saw is mainly about, so the word linear has something to do with
[33:07] it, so it talks about linear combinations and things like that. So, now we also want
[33:13] to do geometry, because after all, much of this is happening in Rn, Rn has many good
[33:17] property. So, if you have two lines, you can talk about the angle between them and so on.
[33:21] So, how do you capture that in terms of linear algebra? And to do that, we talked about norms
[33:27] and inner products. So, norms were the general version of lengths and inner products was
[33:34] the general version of dot products or scalar products. And just to remind you, we saw norms
[33:43] and inner products coming in later, the inner products came for example, when we talked
[33:48] about directional derivative, so the directional derivative was the inner product of the gradient
[33:52] vector with the unit vector in whatever direction you are, you want to find the directional
[33:59] derivative.
[34:00] And the norm came about when we talked about tangents and the best linear approximation
[34:07] because, after all, when we start talking about best linear approximation, in many dimensions,
[34:11] we have to talk about how close it is. And once we say how close that means, we need
[34:17] to know some notion of distance or length. So, that is where norms came in.
[34:22] So, of course, we did not talk about gender norms when we went ahead, we talked only about
[34:29] the dot products and the usual distance metric, but again, you can think about maybe in some
[34:38] world, there may be a different way of computing distance and there, you may want to do all
[34:45] of this but with a different notion of distance.
[34:48] And I need such things do occur, for example, in physics and so on. Anyway, so that is why
[34:55] we studied norms and inner products, so the main emphasis even if you may not have understood,
[35:03] general norms or general inner products is on the dot product and the length that at
[35:07] least you must know very well.
[35:10] So, once we talked about the norms and inner products, we talked about orthogonality of
[35:14] vectors. So, essentially, remember that the dot product picks up the angle between vectors,
[35:21] that is one of the things that the dot product does. And orthogonality is saying, when are
[35:27] two vectors perpendicular to each other, at least for the usual inner product, that is
[35:33] what it means that they are perpendicular to each other.
[35:37] So, sometimes instead of perpendicular, we say orthogonal. That is the standard language
[35:41] when we do linear algebra. So, if you have an orthogonal set of vectors, then it is linearly
[35:48] independent. This was really the punch line of whatever we did. And the point here is
[35:54] that this allows you, this idea of inner products allows you to easily find nice basis, this
[36:05] is one of the main reasons why we study orthogonality. Or why we would like that things are orthogonal,
[36:14] fine.
[36:15] And the way we did this was to use projections. So, projections is like shadows. This is a
[36:21] very easy idea. If you have something like this, you want to project it down, depending
[36:26] on where your light source is, it will cast a shadow. And that is exactly what the projection
[36:30] did. So, the projection we wrote down concretely as a linear transformation, what it was, so
[36:39] it projects a vector from its original vector to some subspace, this is what a projection
[36:46] does.
[36:47] And if you have an orthogonal set of vectors, then you can use these projections in a very
[36:53] nice way. It is a very beautiful, clear cut formula that you can use. In order to make
[37:02] it into an, if you have a general set of vectors, in order to get a basis, so we have a spanning
[37:10] set, you can create a basis out of that, by using the Gram Schmidt process.
[37:17] So, the Gram Schmidt process sequentially created vectors wherein it said well, what
[37:25] I will keep doing is I will take projections and subtract those out. So, whatever extra
[37:31] things remaining, that is not already there in my previous subspace. So, I will take that
[37:39] in. And that will actually be orthogonal to whatever I already have. And that way it created
[37:43] a orthogonal, in fact, an orthonormal basis.
[37:50] And the reason we prefer orthogonality is because it makes computations easier, so you
[37:54] do not have to keep dividing by the length of the vectors in all. So, it is computationally
[38:00] easier process, I should have, yeah, since we have come to computationally easy process
[38:04] I should also mentioned from the previous slide on matrices, that Gram Schmidt sorry,
[38:11] that the Gaussian elimination method was computationally the fastest method amongst the various methods
[38:17] to solve equations, fine. So, this is a overview of what we did in week 9.
[38:24] Yeah, maybe I should also say, in the middle, we had a break of one week, so I am just doing
[38:30] this according to the weeks in which we had videos coming in. So, you have to delete that
[38:38] week when we had a break, otherwise, some weeks will get shifted by one.
[38:43] And then finally, in weeks 10 to 12 we studied vector calculus, this is exactly where the
[38:48] one variable calculus that we studied in the first three weeks, at least the first two
[38:53] topics, and the linear algebra that we studied in the subsequent weeks came together and
[38:58] we could study functions of several variables. So, the main themes here were limits and continuity
[39:08] again, from similar to one variable calculus, then partial and directional derivatives.
[39:14] And then gradients, differentiability and the tangent plane and then critical points
[39:19] and local extrema.
[39:20] So, let us, let me quickly recall, what we did about limits and continuity. So, the notion
[39:28] of a limit in several variables is slightly deeper than the notion of a limit in one variable.
[39:39] Because in one variable essentially, there are only two directions in which you can come
[39:42] in, there is nothing more that can happen.
[39:44] Whereas in many variables, there are many different possible ways you can come, not
[39:50] just along straight lines, but even along curves. And that makes it a little difficult
[39:57] to understand the notion of limits. So first we had limits of sequences in Rn, then using
[40:11] this idea, we defined the limits of functions. Or let me say a limit of a function at a point,
[40:24] limit of a function at a point.
[40:32] So, the idea here was that, you if there is a point you are interested in, you have a
[40:39] scalar valued multivariable function, you allow all possible sequences which come to
[40:44] that point, find how the function values at along that sequence behave, and you hope that
[40:54] it converges to some point, meaning to some number.
[40:58] And then if you obtain the same number, independent of what sequence you choose, which has limit
[41:06] as that point, then we will say the limit of the function at that point exists. And
[41:11] then if that limit happens to be the same as the value of the function at that point,
[41:15] then we say that the function is continuous at that point. So, using this we could talk
[41:22] about continuity of functions.
[41:23] So, again the idea is the same that limit x tilde tends to a tilde f of x tilde is equal
[41:31] to f of you can take that f outside, f limit of x tilde tends to a tilde x tilde which
[41:39] is a tilde. So, that is f of a tilde. So, you can interchange the limit and the function
[41:44] that is exactly what is continuity. And yeah, so, we studied the notion of continuity.
[41:53] So, this was more or less what we did for limits and continuity, and then we studied
[41:59] the notion of partial and directional derivatives. So, this we did in a fair amount of detail.
[42:03] So, the partial derivatives was so what, maybe before describing what they are, I should
[42:10] say, what was the main punch line of partial and directional derivatives.
[42:14] So, the punch line is, I have a function of several variables. So, one way of studying
[42:20] that function is let me see what how the function changes, when I change just one variable,
[42:27] keep all other things constant. And let me see how it changes when I change one variable.
[42:36] So, the underlying theme here is restrict the function
[42:50] to a line in the domain and observe its behavior there. This was the main thrust of much of
[43:11] this.
[43:12] And so, first we restricted to all the axes and then we found the rate of change along
[43:22] that axis. So, rate of change along the parallel to the Xi axis maybe, so rate of change of
[43:41] f parallel to the Xi axis at the point a tilde. So, this was exactly the partial derivative
[43:49] of f at a tilde, this is exactly what it is, I mean, we wrote down the formula for this,
[43:57] meaning expression for this.
[43:59] And instead of the axes, if you take a general line, which need not be the axis, so you have
[44:04] to take some direction, and you take the line in that direction. So, rate of change of f
[44:14] parallel to a line in some direction at a tilde, this is exactly what was the directional
[44:25] derivative. So, in order to compute it you have to choose a unit vector.
[44:31] So, if u is a unit vector in that direction, that direction in the direction of the line.
[44:44] So, then we had this thing called Du of a tilde. And we defined it as a limit h tends
[44:53] to 0, f of a tilde plus h times u minus f of a tilde divided by h. And, of course, there
[45:04] is no guarantee that this limit exists, but if it does, then the directional derivative
[45:07] does exist. And if you take some particular values of u, meaning if you take the standard,
[45:12] which is vectors, if I take Ei, then I get exactly my partial derivative.
[45:17] So, essentially, what we are saying is, in order to study a function of several variables,
[45:22] I will try to study it along one particular variable. So, if I have a plane, and I want
[45:25] to understand what is happening above the plane, what I will try to do is I will cut
[45:29] that plane, meaning I will take particular lines, see how it behaves on those lines,
[45:33] and then the hope is that I can put together all that information and understand the global
[45:38] behavior of that function.
[45:41] Now, the directional derivative started becoming harder to compute as we went ahead. And so,
[45:49] we hope that there is some easy way of doing this and indeed there is provided your partial
[45:58] derivatives are continuous in the neighborhood. So, one of the key hypotheses in this entire
[46:06] business is this thing about the partial derivatives being continuous.
[46:09] So, del f del x, del or maybe I should say all partials, all partial derivatives. So,
[46:22] key hypotheses I will write it here, all partial derivatives are continuous in a neighborhood
[46:38] or in a ball around the point a, this was really what this hypothesis was what drove
[46:47] all the theorems and computationally efficient methods of finding the directional derivative,
[46:53] etc.
[46:54] So, if this happens, then we, first we define the gradient vector and this was easy, so
[47:00] the or the gradient function. So, this is you put together all your partial derivatives
[47:04] into a vector. So, put together all the partials in a vector, so first one, second one, third
[47:17] one, nth one. And then under this hypothesis, with u as a unit vector, we found that you
[47:29] can compute the directional derivative very easily using the gradient vector. And this
[47:33] was very important, first of all note here that we have, as I remarked earlier that we
[47:39] have used dot products. So, dot products that we studied earlier in linear algebra, this
[47:44] was one of the reasons why we did that.
[47:46] And the second thing that we want to observe is that so the dot product we can write in
[47:51] terms of angle and because we, well angle and norm, angle and length, and because we
[47:57] can do that, we know that the minimum value and the maximum value, so this happens in
[48:08] the direction opposite the gradient. And this happened in the direction of the gradient.
[48:21] And this is very, very important as I remarked, even in the video there, this is what you
[48:25] are going to use in order to do gradient descent which you will learn more, in a more streamlined
[48:33] way when you do machine learning basics, fine. And maybe I should also say that the that
[48:42] no change happens when you are orthogonal to the gradient vector. So, the notion of
[48:49] norms and lengths was used over here from, coming from linear algebra, fine. And of course,
[48:54] we use the vectors in general because the gradient is a vector, fine.
[49:02] And then, we studied the notion of the tangent plane, we wrote down its equation using the
[49:07] gradient vector. And most importantly, we saw that, well in my slide I should have written
[49:15] tangent hyperplane. So, we saw that whatever we had seen first, earlier in the one variable
[49:22] situation namely the existence of the tangent plane, this happens exactly when the best
[49:32] linear approximation to f at a exists.
[49:43] So, for both of these cases, we wrote down explicit equations, the equation to the tangent
[49:50] hyperplane was z is equal to f of a tilde plus gradient of f at a tilde dot with x tilde
[50:00] minus a tilde. So again, you can express that in terms of a dot product. But we had not
[50:07] really talked about differentiability here. And then later, we saw that or I remarked,
[50:13] actually, that this is the same as the function, f is differentiable at a, f is differentiable
[50:20] at a.
[50:22] So, differentiability exactly means that the tangent hyperplane exists, which is the same
[50:28] as saying that the best linear approximation exists, fine. So, this is a general summary
[50:34] of gradients differentiability and the tangent hyperplane. And, yeah, I should have, again,
[50:38] I remind you that, for all of this, this was the key hypothesis. So, this hypothesis is
[50:44] what will often be used in when you want to do this.
[50:49] Now, when you do courses outside of mathematics, often the theory involved, this hypothesis
[51:00] may not be checked. But you should know from looking at the function that this will work
[51:05] on that. For example, if it is a polynomial function, immediately you should say, this
[51:08] hypothesis works. So, there is no problem with using any of these things. Or if it involves
[51:13] a sin function, cosine function, you have good functions that you understand, and where
[51:17] you do not have denominators, or you maybe have denominators, but they are not becoming
[51:22] 0, etc. So, such cases, we can use all of this with impunity, because now this hypothesis
[51:29] is going to hold.
[51:31] So, this you should remember as you go ahead, because in the further courses, remember that
[51:37] they are not going to do mathematics. So, they will not, they may not emphasize this
[51:40] hypothesis, so that you should mentally do if you are, if you have questions about how
[51:46] do I use this formula, etc, fine.
[51:49] And finally, we also studied critical points and local extrema. So, critical points means
[51:56] this is again, something that we did for the one variable situation where we studied. Yeah,
[52:01] so I think maybe I did not mention that when we went there. So, here I should have said
[52:10] it here as well. So, when we did differentiability and tangents, we also did.
[52:16] So, we also did a critical points and local extrema. And how did we find this? We had
[52:31] a critical point means you set your derivative to 0 and those points are called critical
[52:36] points, well, they also include those points where the function is not differentiable,
[52:40] but in our examples, usually it was differentiable. So, those are the kinds of functions you are
[52:45] likely to see when as you go ahead.
[52:50] And then out of those, some are going to be local extrema, meaning local minimum or local
[52:55] maximum, and then we had the second derivative test in order to check for local maximum and
[53:02] we also saw that it could be inconclusive, fine. And there was also the optimization
[53:09] part where we had a closed interval, and there we know that the global minimum or global
[53:16] maximum exists.
[53:17] And we saw that in order to find it, we have to find all the critical points include the
[53:21] neighboring sorry, the points, the endpoints of the interval, or if there is a function
[53:28] which is broken, then you include all those points at which there are breaks in the function.
[53:35] And meaning broken in the sense piecewise defined, so you choose all those points where
[53:43] the end of the pieces, and then add each of those values, points you check the values,
[53:48] and that will give you your maximum or minimum.
[53:50] So, the same thing happened when we did vector calculus. So, critical point here, instead
[53:55] of the derivative, we now have the gradient vector, so set gradient to 0. So, that gives
[54:03] you your critical points. And out of these, some of them are going to be local, some or
[54:09] all are going to be local extrema.
[54:10] So, the set of local extrema is a subset of the critical points. Here also, I should add
[54:21] the caveat that if the gradient exists, then you set it to 0 and find the critical point,
[54:28] there will be some vectors for which or some points for which the gradient does not exist,
[54:39] meaning some partial derivative is not defined. So, those are also critical points. So, in
[54:43] general, you have to take those also. Of course, in our examples, we did not really see examples
[54:49] of that type.
[54:50] So, your local extrema is a subset of the critical points. And so, we had a hessian
[54:56] test in order to find this. So, this was what was the analog of the second derivative test
[55:03] in the one variable calculus case. And so, from the hessian test we could find the nature
[55:10] of the critical ones, of course, the hessian test is not a absolute test, meaning it could
[55:17] be inconclusive. So that is, that is part of how it works. So, if it is inconclusive,
[55:23] we have to find other ways of finding out whether they are local extrema.
[55:30] Yeah, and then finally, we did all of this for closed bounded domains. So, again, as
[55:40] in the one variable case, the global extrema exist. And so, you have to find the critical
[55:51] point, also find the points on the boundary, find critical points there, then maybe you
[55:58] have boundary of boundary, and you have to keep doing that process, collect together
[56:01] all those points, find the function value at all these points. And whichever point it
[56:07] is maximum, that is your global maximum, whichever point is minimum that is your global minimum,
[56:11] this is how you find them.
[56:14] Yeah, so you have to again use the gradient function. So, this is the overall summary
[56:19] of what we have done in these 12 weeks. This is a fairly fast course, it was, it went at
[56:27] quite high speed. So, I am aware of the fact that some of you may have had trouble keeping
[56:34] on. But really, there is you really do need to know, many of these things, or at least
[56:43] be familiar with many of these things, in order to appreciate the courses that are coming
[56:49] next.
[56:50] So, this material is something that you do have to study. And well, in a way, it is my
[57:01] personal opinion is that if you are climbing up a mountain, the steepest part is best when
[57:08] it is at the beginning, then it becomes more gradually incline, and towards the top, it
[57:16] might actually become like a plateau.
[57:17] So, if you have gone trekking, this is often something that happens. And so often in a
[57:27] lecture series or a degree program, the steepest claims are in the beginning, and then slowly,
[57:35] actually starts easing out. So, the moral of what I am trying to say is that, if you
[57:41] found this course difficult, do not worry, keep going, you will understand it. And it
[57:47] will actually I feel like if you understand this, well, right now, it will actually become
[57:52] easier as you go ahead, you will be very well prepared for what is coming next.
[57:55] It is been a challenging time for all of us, especially in this last year, to do a lot
[58:02] of things. And this is one of the more challenging courses that I have given because it was very
[58:08] different from any course that I have taught before. In terms of both what has happened
[58:15] in the past year, as well as the fact that it is an online course, it is the first time,
[58:21] it is happening, at least in IITM or in the Indian setup. And also, it is a lot of material,
[58:29] which we usually teach in separate courses.
[58:31] So, sort of bring it together was a little bit of a challenge. Of course, this course
[58:37] would not have been possible without all the team that has made these contents possible.
[58:46] I am just the face sort of I think many of you have also interacted with the team, especially
[58:51] in the live sessions. And then there is many others, those who edit and so on. So, I want
[58:58] to thank all of them. And thank all of you for your attention. Thank you.