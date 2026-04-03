# W5_L1: The null space of a matrix - finding nullity and a basis - part 1

**Week:** Week 5
**YouTube URL:** https://www.youtube.com/watch?v=3_U6oMJeklc

---

## Transcript

[00:14] Transcriber's Name: Crescendo Transcription Pvt. Ltd.
[00:15] Mathematics for Data Science - 2 Professor Sarang Sane
[00:16] Department of Mathematics, Indian Institute of Technology Madras
[00:17] The null space of a matrix finding nullity and a basis - Part 1
[00:18] Hello, and welcome to the Maths 2 component of the online B.Sc. program on data science.
[00:20] In this video, we are going to study the idea of the null space of a matrix.
[00:25] And once we define what the null space is, we will also study, so it will be a subspace
[00:30] of of some vector space.
[00:33] So, in particular, it will be a vector space.
[00:35] We will also study what is its dimension and we will study how to find a basis for it.
[00:42] This is what we have studied in the previous video.
[00:46] And we will use that to, similar ideas to find the basis and the dimension of whatever
[00:56] the null space is.
[00:58] So, let us begin by quickly going over the contents of this video.
[01:03] So, we are going to study what is the null space of a matrix.
[01:06] This is equivalent to asking what is the solution space corresponding to a homogeneous system
[01:11] of linear equations.
[01:12] Now, that second question is something you already have seen in previous videos.
[01:17] But I am going to refresh that and that is what is exactly going to correspond to the
[01:22] null space of a matrix.
[01:23] What is the nullity of a matrix?
[01:25] So, once we define what is null space, we will study what is nullity.
[01:28] It is nothing but the dimension of the null space.
[01:32] How do we find the basis for the null space?
[01:34] Let us look at a few examples.
[01:37] We will study what is called the rank nullity theorem.
[01:40] So, I am not going to give any proofs.
[01:43] But I am going to state this theorem and stated in some sort of computational way.
[01:48] And then finally, this is a somewhat standalone topic.
[01:51] We will use determinants to check if a given set of vectors is a basis for a vector space,
[01:58] okay.
[01:59] So, let us start with the beginning.
[02:04] Of course, we will also do examples of, using determinants to check if something is a basis.
[02:09] So, let us start with what is the null space.
[02:13] But before that, let us recall what we have done in that previous video that I just mentioned,
[02:17] that we can find the dimension and a basis for a vector space spanned by a set of vectors
[02:24] using Gaussian elimination or row reduction.
[02:26] So, we are going to use this idea again, but in a slightly different way, ok.
[02:33] So, the solution space or the null space of a homogeneous system of linear equations.
[02:39] So, let A be an m by n matrix.
[02:42] The subspace W consisting of x in Rn, such that Ax is 0.
[02:51] So, this is a subset of Rn and it is a subspace, meaning it is a vector space in its own.
[02:58] This is called the solution space of the homogeneous system of linear equations Ax equals 0, my
[03:03] bad, this is a typo here, it should have been equations, or it is called the null space
[03:08] of A.
[03:09] So, when we say null space of A, there is no reference to any system of linear equations,
[03:16] but you just have a matrix.
[03:19] But what do you have to do is in your mind you have to form this system Ax equals 0 and
[03:24] then ask what are all the solutions that is exactly the null space.
[03:27] Why null, because we are finding those vectors x such that Ax equals 0.
[03:34] So, as we know, null is another name for 0, fine.
[03:40] So, note that the null space is a subspace of Rn.
[03:44] The dimension of the null space is called the nullity of A. So, let me justify this
[03:50] statement about a subspace.
[03:52] So, remember, what is a subspace?
[03:54] It is a vector space in its own right.
[03:56] But to check that something is a subspace, all I have to do is, remember, for a vector
[04:01] space there is a large number of axioms.
[04:03] But if it is a subspace that means many of those axioms are already satisfied, because
[04:08] any subset will satisfy those axioms.
[04:10] For example, we know that if you have x in the subspace W and you have lambda in the
[04:23] real numbers and let us say lambda 1 and lambda 2.
[04:28] So, I have lambda 1 and lambda 2 in R, then lambda 1, lambda 2 multiplied by x is equal
[04:42] to lambda 1 times, lambda 1 multiplied by lambda 2 times x.
[04:47] So, this equation we know already, because this is true in the entire space Rn.
[04:52] So, if you want to take something is a subspace, we need not take all the axioms of a vector
[04:58] space.
[04:59] We have to take only a couple of them.
[05:02] Namely, we have to check that if you have x and y belonging to W, so I will just erase
[05:10] this, then x plus y belongs to W. Indeed, that is true in this case.
[05:16] So, if x and y belong to W, that means Ax is, Ay is 0.
[05:24] That also means that A times x plus y, we know that this is Ax plus Ay, this is 0 plus
[05:31] 0, which is 0.
[05:33] So, what does that mean?
[05:35] That means x plus y is also in W, because, remember, W consists of all those vectors,
[05:42] so that when you operate A on that vector, you get 0.
[05:46] When you multiply A to that vector, we get 0.
[05:50] And similarly, if you take x in W and lambda in R, then if you do A times lambda x, well,
[06:02] lambda is a scalar it is a constant.
[06:05] So, we can take that lambda out.
[06:08] This was one of the things that we have seen in matrix multiplication.
[06:14] One way of doing this is to recall that lambda can be, lambda times anything can be thought
[06:18] of as the scalar matrix lambda, meaning you have a diagonal matrix with lambda on the
[06:24] diagonals.
[06:26] And then you can flip that around in any way you want, except that you have to bother about
[06:30] size.
[06:31] But, so you can pull out that lambda.
[06:33] So, this is lambda times Ax, but Ax is 0, because x is in W. So, this is lambda times
[06:40] the 0 vector, which we know is a 0 vector.
[06:42] So, the upshot is that if x and y are in W, then so is x plus y.
[06:47] And if lambda is in, is a scalar, meaning a real number, and x is in W, then lambda
[06:53] times x is also in W.
[06:54] So, that is enough to say that this is a subspace.
[06:58] That means it is a vector space in its own right.
[07:01] So, W is a vector space in its own right.
[07:03] So, we can talk about, now we can talk about what is the dimension of W or we can talk
[07:08] about what is the basis for W. And indeed, this dimension is what is defined as a nullity.
[07:13] So, this justifies what is written here as the nullity.
[07:16] So, let us see how to do that.
[07:19] Let us try to see how we can find a basis for the null space and of course, along with
[07:29] that the nullity, meaning the dimension.
[07:30] So, we have seen how to find the dimension and the basis for the row space of A using
[07:35] row reduction.
[07:36] So, we will use a row reduction to also find the nullity and a basis for the null space
[07:43] of A.
[07:46] Only thing is you have to be slightly, I mean, there is a slight difference in the two, which
[07:52] I am going to come to in a few few slides.
[07:55] So, first, let us recall how to do this idea of Gaussian elimination.
[08:01] Why do we, why are we bothering about the Gaussian elimination, because after all what
[08:06] is the null space?
[08:08] The null space is the set of solutions of Ax equals 0.
[08:11] So, really, we want to ask what is the set of solutions, and then once we know what is
[08:16] the set of solutions, we can try and answer the question about what is its dimension or
[08:22] what is a basis for that.
[08:23] So, first, we have to try and find a way to describe the set of solutions.
[08:28] And we know that to describe a set of solutions the method that we have studied is the Gaussian
[08:36] elimination method.
[08:37] So, let us recall the Gaussian elimination method.
[08:39] So, you have a system Ax is b.
[08:41] In our case, we actually have a system Ax is 0, but let us do the general case.
[08:45] So, you form the augmented matrix A augmented with B. Apply the same row reduction operations
[08:51] on the augmented matrix that are used to row reduce A to obtain the augmented matrix Rc.
[08:57] C is the rightmost column, where R is in reduced row echelon form and that is the matrix that
[09:07] you obtain by applying row reduction on A.
[09:12] Now, if the i-th column has the leading entry of some row, recall what is reduced row echelon
[09:20] form or row echelon form, so that means you have a bunch of rows, where you have a 1 in
[09:28] the leading position, the first non-zero entry is 1 and after that you could have other entries.
[09:36] But the next row has a 1 which is after the 1 in the previous rows.
[09:42] So yeah so, keep that in mind.
[09:45] As we go ahead that is crucial to what is going to happen.
[09:51] If the i-th column has the leading entry of some row, the i-th column, remember, then
[09:56] we call xi a dependent variable.
[10:00] And if the i-th column does not have the leading entry of some row, we call xi an independent
[10:05] variable.
[10:06] By leading entry, we mean the first 1, right?
[10:09] It starts with the 1, leading entry is always a 1.
[10:12] So, that particular 1, whichever column has that 1 those columns, the corresponding variables
[10:23] are called dependent variables and the others are called independent variables.
[10:28] And then how do we find the solutions?
[10:32] Well, before that, let us make a computational remark.
[10:38] From here we already know what is the nullity.
[10:41] The nullity of A is the number of independent variables.
[10:44] So, already this method is going to tell you what is the what is the nullity of A, so the
[10:50] dimension of the null space.
[10:52] And we will explore why that is the case later.
[10:55] So, now let us recall how we got the solution space.
[11:01] So, assign arbitrary values ti to the i-th independent variable.
[11:06] So, there are some independent variables and some dependent variables, you take the independent
[11:12] variables.
[11:13] The first independent variable you assign the value t1, the second one you assign the
[11:18] value t2 and so on.
[11:21] And then for the dependent variables, you use the equations left from R. You have Rc
[11:29] which is the augmented matrix that you get at the end of the process.
[11:33] So, that corresponds to Rx equals c.
[11:36] And each dependent variable appears in exactly one of these equations.
[11:43] And all the other variables occurring in that equation are independent variables.
[11:49] So, you can back, you can push the independent ones to the other side, substitute ti for
[11:54] that and compute the value of the dependent variable.
[11:59] So, compute the value of each dependent variable in terms of tis from the unique row it occurs
[12:05] in.
[12:06] And every solution is obtained by letting tis vary in R. So, as t1 varies over R, t2
[12:12] varies over R, and so on, all the tis vary over R, you get all possible solutions.
[12:18] This was how we found the solution space for Ax equals 0.
[12:25] So, now how do we find a basis?
[12:33] So to find a basis, we substitute ti equals 1.
[12:37] You fix an i, substitute ti equals 1, and substitute tj equals 0 for all j which are
[12:43] not equal to i.
[12:45] And you let i vary, of course, over all possible integers where it is defined, so as many independent
[12:54] variables as there are.
[12:56] And the vectors that you get are exactly the basis for the null space or the basis for
[13:05] the solution space of Ax equals 0.
[13:09] Let us do this.
[13:10] This is slightly, I mean, I have written all this, but it might be difficult to visualize
[13:13] what is going on.
[13:14] So, let us do this in an example or a couple of examples.
[13:17] So, let us do a three by three example.
[13:19] So, consider the matrix representation of the homogeneous system of linear equations
[13:24] of the form Ax equals 0, where A is 1, 1, 1, 2, 2, 2, 3, 3, 3, so rather easy matrix.
[13:30] We do not really need to do all this to find the solution space.
[13:37] You can directly write down the equations and find it yourself.
[13:40] But let us do it the way that we have described and you will see it is it is a one or two
[13:45] step process.
[13:46] So, what was the method?
[13:48] We find the augmented matrix.
[13:50] So, remember, here we are always solving for the homogeneous system.
[13:54] So, always on the right, you will have 0, 0, 0.
[13:58] So, you have 1, 1, 1, 0, 2, 2, 2, 0, 3, 3, 3, 0.
[14:04] Let us do row reduction.
[14:05] So, if you row reduce, well, in this case, row reduction is very easy.
[14:09] You subtract 2 times the first row from the second row and 3 times the first row from
[14:14] the third row.
[14:15] So, you are going to get 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0.
[14:23] So, now, how many independent variables are there, how many dependent variables are there?
[14:28] So, for that we have to look for the non-zero rows.
[14:32] There is one non-zero row.
[14:35] And within that row, look for the leading 1.
[14:37] So, the leading 1 is in the first column.
[14:40] That means x1 is a dependent variable and everything else is independent.
[14:45] That means x2 and x3 are independent variables.
[14:48] So, the independent variables are x2 and x3.
[14:51] The dependent variable is x1.
[14:54] That already tells me what is the nullity.
[14:55] So, the nullity of A is 2.
[14:58] Now, let us find a basis for this for this vector space, namely the null space.
[15:06] So, to find a basis, let us recall how to find the solution space in the first place.
[15:12] So, to find the solution space, we put x2 as t1 and x3 is t2, right.
[15:17] You look for the independent variables and the first independent variable you call t1,
[15:22] you assign the value t1, the second independent variable, you assign the value t2, and you
[15:26] allow t1 and t2 to vary over R.
[15:29] Of course, what is x1?
[15:31] X1 you can obtain from the equation that we had for the reduced echelon form.
[15:39] So, remember that the reduced echelon form was 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, that
[15:46] corresponds to the equation x1 plus x2 plus x3 is 0, which gives me x1 is equal to minus
[15:53] x2 minus x3.
[15:54] So, if you substitute t1 and t2 in place of x2 and x3, you get x1 is minus t1 minus t2.
[15:59] So, the null space of A is the set of vectors minus t1 minus t2 comma t1 comma t2 as t1,
[16:08] t2 vary over R. So, what are examples of solution vectors?
[16:13] For example, one possible solution is minus 5 comma 2 comma 3.
[16:20] Another possible solution is minus 20 comma 10 comma 10.
[16:25] I hope you understand how we are getting these solutions.
[16:29] Now, I want a basis for this vector space.
[16:32] So, how do I get a basis?
[16:34] You put t1 equals 0 and see what, and t2 equals, let us do it the other way.
[16:40] Let us put t1 equals 1 and t2 equals 0 and see what that gives you.
[16:46] If you do that, you get the basis vector minus 1 comma 1 comma 0.
[16:52] You interchange their roles, put t1 is 0 and t2 is 1 that uses the basis vector minus 1,
[16:58] 0, 1.
[17:00] And so basis for this null space is minus 1, 1, 0, minus 1, 0, 1.
[17:06] These two vectors are clearly linearly independent.
[17:08] You can check that.
[17:10] And they also span this vector space.
[17:12] Why do they span?
[17:15] They span because if you have any vector in this vector space, it looks like minus t1,
[17:20] minus t2 comma t1 comma t2.
[17:22] So, any such vector can be written as a linear combination of these two.
[17:27] How, it is exactly t1 times the first vector plus t2 times the second vector.
[17:33] So, you can see that this method very easily tells you a spanning set for for your solution
[17:42] space.
[17:44] And the main point is that because of all of this, the independence property, namely
[17:50] the 0 and 0s will occur in different positions, it will be forced to be linearly independent.
[17:56] So, I am not proving this, but I will suggest you try to prove this yourself.
[18:01] It is very doable from this point on.
[18:05] So, what do we have geometrically?
[18:08] Geometrically, this is what we get.
[18:10] This is the plane x plus y plus z is equal to 0.
[18:17] So, I will just make a remark before we do another example.
[18:24] So, notice that in our computation, when we did our computation, we did Gaussian elimination
[18:30] on Ax equals B, sorry, Ax equals 0, so that B was 0.
[18:35] So, in the procedure for row reduction, 0, that 0 vector, means that 0 column never changes,
[18:43] because you keep adding multiples of 0s to each other and that is not going to change
[18:48] the 0.
[18:51] So, in this process, we can actually drop that 0, 0, 0.
[18:56] Where did we need that 0 augmented column, we needed it to find the basis.
[19:01] Over there, we said, let us do Rx equals 0 and back calculate to compute what are the
[19:08] values for the dependent variable.
[19:09] That is where we need it.
[19:11] So, to reduce our computations, remember, after all this is a data science course and
[19:18] we are interested in things like efficient calculation.
[19:23] So, we would like to do things as efficiently as possible.
[19:27] So, we need not write that 0, 0, 0.
[19:30] So, what we will do from, in the next example is we will not create the augmented matrix
[19:36] or rather we would not row reduce the augmented matrix, we will reduce just the original matrix.
[19:42] But at the end, we will remember that we have to solve for Rx equals 0.
[19:47] So, that is what this slide is saying that notice that in our computation since the system
[19:54] is homogeneous, that is exactly, that exactly means we have Ax equals 0.
[19:58] So, we have a 0 column.
[20:00] The augmented 0 vector remains unchanged.
[20:02] So, we will drop the 0 column augmented to the matrix while performing the row reduction
[20:06] computations and use it only for solving for the dependent variables.