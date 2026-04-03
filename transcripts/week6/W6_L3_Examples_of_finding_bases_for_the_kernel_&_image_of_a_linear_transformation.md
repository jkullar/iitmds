# W6_L3: Examples of finding bases for the kernel & image of a linear transformation

**Week:** Week 6
**YouTube URL:** https://www.youtube.com/watch?v=5slY2FjErkc

---

## Transcript

[00:14] Hello, and welcome to the Maths 2 component of the online B.Sc. program on data science
[00:18] and programming. In this video, we are going to continue from the previous video where
[00:23] we discussed the theory about the relationship between images and kernels for a linear transformation
[00:33] with the column space and null space of the matrix that we obtain after we fix ordered
[00:41] basis for the domain and the codomain.
[00:45] So, we are going to do a bunch of examples, where we implement what we have seen earlier
[00:50] and we will find basis for the kernel and the image using the fact that we can find
[00:57] basis for the column space and the null space using row reduction.
[01:03] Let us just recall first what I just said. So, we have defined in the previous video
[01:11] what is the kernel of a linear transformation. For a linear transformation f V to W, let
[01:16] A be the matrix corresponding to f after choosing ordered basis, beta which is v1, v2, vn and
[01:22] gamma which is w1, w2, wm for V and W, respectively. How do I get this matrix?
[01:29] Well, you apply f on vi and express that in terms of the w1, w2, wm and then the coefficients
[01:39] that you get, you put all of them together and you get your m by n matrix. Once we choose
[01:43] the basis v1, v2, vn we have this isomorphism Rn to V. And what is the isomorphism. If you
[01:49] have a column vector in Rn, c1, c2, cn then that corresponds to the vector summation cjvj.
[01:57] You take the corresponding linear combination that is the isomorphism from Rn to V.
[02:03] And in the previous video, what we have discussed is that, if you consider the null space of
[02:09] the matrix A, which is a subspace of Rn, then under this above isomorphism, that gives you
[02:20] an isomorphism with the kernel of f. This was the import of the first part of the previous
[02:26] video. So, in particular, if we can get a basis of the null space of A, then using this
[02:32] isomorphism, we can translate it to a basis of the kernel of f. That is one of the things
[02:37] we will do in this video for concrete examples.
[02:41] Similarly, we define the image of a linear transformation. And once again, we can choose
[02:47] ordered basis and then we get the matrix A. And now we have an isomorphism from Rm to
[02:55] W. This is because of the choice of ordered bases w1 to wm. So, if you have a vector d1,
[03:02] d2, dm, corresponding to that vector, you have the linear combination summation djwj.
[03:08] The main point here is that, if you look at the column space of A, which notice is a subspace
[03:16] of Rm, then under this isomorphism, its image will be exactly the image of f. So, that is
[03:26] what we discussed in the previous video when we talked about the relation between image
[03:32] and column space.
[03:34] And in particular, what this will do is, it will tell you that if you can get a basis
[03:39] of the column space, then by using this isomorphism, you can also get a basis for the image of
[03:45] f and we will implement this in some examples now.
[03:49] So, let us do this example. Consider the linear transformation from R4 to R3 defined by T
[03:57] of x1, x2, x3, x4, which is 2 times x1 plus 4 times x2 plus 6 times x3 plus 8x4, x1 plus
[04:05] 3x2, 5x4 and x1 plus x2 plus 6x3 plus 3x1. So, the first thing we have to do is choose
[04:15] ordered basis. So, let us choose the ordered basis to be the standard basis for R4 and
[04:20] R3. So, once we do that, what is a corresponding matrix where it is exactly the coefficients
[04:28] of, that are appearing this in this linear transformation. The first row is the coefficients
[04:35] appearing the first equation. So, those are 2, 4, 6, 8 and then a 1, 3, 0, 5 and then
[04:43] 1, 1, 6, 3.
[04:45] So, let us row reduce. So, if you row reduce, well, what do I want to do? Maybe before I
[04:51] row reduce, let us ask, we want to get the basis for the image and the kernel of f of
[04:59] T and to do that, we have to get basis for the null space and the column space. And we
[05:08] know how to do that that is why row reduction. So, that is why we are row reducing. So, if
[05:13] you row reduce, well, we have a 2 in 1, 1 place, so we divide by 2. So, we get this
[05:17] matrix 1, 2, 3, 4; 1, 3, 0, 5; 1, 1, 6, 3.
[05:22] Sweep out the first column below the one. So, that is R2 minus R1 and R3 minus R1. So,
[05:28] if we do that, we get the first row is unchanged 1, 2, 3, 4 and in the second row, we will
[05:33] get 0, 1, minus 3, 1 and in the third row, we will get 0, minus 1, 3 and minus 1. So,
[05:44] already you can see that the third row is a multiple of the second row. So, it is going
[05:49] to get knocked out in one more step.
[05:55] Well, in the one, so we are done with the first column. So, now we look at the 2, 2th
[06:00] entry. It is conveniently 1. And so we can knock out the entry below that. So, that in
[06:07] fact knocks out the entire third row by doing R3 plus R2. So, now this is already in pretty
[06:16] good shape. But let us do one more step and convert it into reduced row echelon form.
[06:21] So, to do that, we do R1 minus 2R2 and then that gives us 1, 0, 9 and 2 in the first row,
[06:31] and then 0, 1, minus 3, 1, 0, 0, 0, 0.
[06:35] So, that is the reduced row echelon form, so 1, 0, 9, 2, 0, 1, minus 3, 1, 0, 0, 0,
[06:43] 0. And from here, we can read off the basis for the null space and the column space. So,
[06:53] let us look at first what are the non-pivot and the pivot element elements. So, the pivot
[06:57] elements are in the 1, 1 and 2, 2 place. So, the non-pivot columns which will correspond
[07:04] to independent variables are in the third and fourth columns. And that tells us that
[07:10] x3 and x4 are the independent variables, x1 and x2 are dependent variables. And if we
[07:16] put x3 is s and x4 is t, then we can use the first row and the second row to get the corresponding
[07:24] equations. And from there, we will get that x1 is minus 9s minus 2t and x2 is 3s minus
[07:32] t.
[07:33] So, just to be clear, this is in order to get the basis for the null space. So, for
[07:39] that, we have to look at the homogeneous equation. So, that is what, that is how we are getting
[07:44] these equations for x1 and x2. And what that means is, if you substitute s is 1 and t 0
[07:53] or s is 0 and t is 1 this give you two basis vectors and that will contribute the basis
[08:00] for the null space. So, if we do that, what do we get? So, if s is 1 and t 0, we get minus
[08:06] 9, comma 9, comma 1, comma 0. And if s is 0 and t is 1, we get minus 2 comma, minus
[08:17] 1 comma, 0 comma, 1. So, that is a basis for the null space.
[08:24] And since we have chosen beta to be the standard ordered basis, the basis for the kernel of
[08:30] t is exactly the same. So, it is minus 9 comma 3 comma 1 comma 0. How do I get that? That
[08:37] is because we take the linear combination of the corresponding ordered basis. And in
[08:42] this case, that is minus 9 times e1 plus 3 times e2 plus 1 times e3 plus 0 times e4,
[08:47] which is the same as the vector you started with and similarly for the second one. So,
[08:51] we have got a basis for the kernel of t.
[08:54] To get a basis for the column space, note that the pivot columns are the first and second
[09:04] columns. So, that means from the original matrix, if we look at the first two columns,
[09:12] those will be a basis for the column space. So, that is the vectors 2, 1, 1, and 4, 3,
[09:17] 1. So, just to remind you, here is the matrix. So, the first two columns are, in the first
[09:25] column we had 2, 1, 1, in the second column we had 4, 3, 1. That is a basis for the column
[09:31] space.
[09:33] So, that tells us that again, that since we choose the standard basis, the standard ordered
[09:43] basis, the image of t also has the same basis. So, 2 times e1 plus 1 times e2 plus 1 times
[09:51] e3 which is 2, 1, 1 and 4 times e1 plus 3 times e2 plus 1 times e3 which is 4, 3, 1.
[09:59] So, I hope this example demonstrated how to implement what we studied in the previous
[10:06] video.
[10:07] Let us do one more example, where we will use basis which are not the standard basis
[10:12] and so we will have to actually compute what the, what those linear combinations. So, let
[10:21] us look at V is R2 and W is this subspace of R3, x, y, z, such that x plus y plus z
[10:30] is 0. So, let us look at respective ordered pieces. So, beta is 1, 1 and 1, minus 1 for
[10:37] R2. So, notice I am not using the standard ordered basis here, but the ordered basis
[10:42] 1, 1, 1, minus 1. So, for gamma, let us choose the ordered basis minus 1, 1, 0 and minus
[10:48] 1, 0, 1.
[10:52] Let us look at the linear transformation, T of x, y is 0 comma x plus 2y comma minus
[10:57] x minus 2y. So, of course, we know this is a linear transformation from R2 to R3. How
[11:05] do I know it is a linear transformation to W? Well, if you look at the image, that is
[11:11] inside W, because the vectors 0 comma x plus 2y comma minus x minus 2y satisfies that the
[11:19] sum of these three is 0. So, 0 plus x plus 2y plus minus x minus 2y is indeed 0. So,
[11:26] this is a linear transformation from V to W.
[11:30] So, now let us write down the corresponding matrix. So, here, we will have to do some
[11:36] work. So, here, we have to take the first vector in the basis, which is 1 comma 1, and
[11:44] then apply T to that, if you apply T to that, you get, so T of 1, 1 is a 0 comma 3 comma
[11:52] minus 3, and then we have to  express that in terms of the basis gamma.
[12:03] So, 0 comma 3 comma minus 3 is 3 times minus 1 comma 1 comma 0 plus minus 3 times minus
[12:14] 1 comma 0 comma 1. This is something you can take. And that gives us our first column,
[12:17] which is 3, minus 3.
[12:19] Similarly, for the second basis vector, we have T of 1 comma minus 1, so that will give
[12:24] us 1 minus 2, which is minus 1 and then minus 1 plus 2, which is 1. So, we get 0 comma minus
[12:33] 1 comma 1 and again it is a check that this leads to the column minus 1, 1 in the second
[12:41] column. So, this is our corresponding matrix. This is something we have done this in the
[12:47] previous videos. So, I will encourage you to check this.
[12:51] So, now, we want to get the basis for the column space and the null space of this matrix.
[12:59] So, to do that, we will put it into reduced row echelon form. This is a particularly easy
[13:03] matrix. So, you divide the first row by 3. So, you get 1, minus one-third, minus 3, 1
[13:10] and then sweep out this is actually clearly the second row is a multiple of the first.
[13:16] So, you will get 1, minus 1 by 3, 0, 0. So, this is in reduced row echelon form already.
[13:23] So, now, let us check out what are the pivot and non-pivot columns. So, the pivot column
[13:29] is the first column. The non-pivot column is the second column. So, x1 is the corresponding
[13:35] variables x1 is the dependent variable, x2 is the independent variable. And for the homogeneous
[13:41] equation, x1 satisfies, so x1 minus one-third x2 is 0, so x1 is equal to one-third times
[13:49] x2.
[13:50] So, if you put x2 is t, then x1 is going to be given by t by 3. So, a basis for the null
[13:58] space is we can obtain that by putting t is 1. So, if you do that, we get the singleton
[14:04] set, which is a basis namely, one-third comma 1. So, this is a basis for the null space
[14:14] of A. Now, from here, I want to get the basis for the kernel of t. So, remember, we have
[14:24] chosen the basis 1 comma 1 and minus 1 comma 1, I just, sorry, 1 comma minus 1, beta is
[14:32] 1 comma 1, 1 comma minus 1. So, now, we have to take that linear combination one-third
[14:40] times 1 comma 1 plus 1 times 1 comma minus 1. So, if you evaluate that, that gives us
[14:47] 4 by 3 comma minus 2 by 3. So, that is a basis for kernel of t.
[14:52] Now, of course, you can simplify this basis. So, you can pull out the one-third or you
[15:01] can pull out the two-third if you want and instead of this basis you can write this as
[15:06] 2 comma minus 1, so that is another basis for kernel of t. So, similarly, let us go
[15:13] about what happens to the column space. Let us see what happens to the column space of
[15:18] A. So, that is, so to do that, we have to see what is the pivot column. So, the pivot
[15:27] column was the first column. So, that means the first column of the original matrix which
[15:32] was 3 minus 3 is a basis for the column space.
[15:38] So, now, we have 3 comma minus 3. And so what we should do is take the linear combination
[15:45] 3 times the first basis vector in gamma plus minus 3 times the second basis vector in comma.
[15:50] So, if you do that, we get 3 times minus 1, 1, 0 plus minus 3 times minus 1 comma 0 comma
[15:56] 1, and that gives us 0 comma 3 comma minus 3. So, this is a basis for the image of the
[16:04] linear transformation t. So, I hope this example has again shed more light on the calculations
[16:12] that we, the theory that we saw in the previous video.
[16:14] So, let us end this video with the rank nullity theorem for linear transformations. We have
[16:20] actually studied this theorem for matrices. So, now, because we have this very nice connection
[16:27] between the null spaces and the kernel and image and the column space, we can convert
[16:37] the rank nullity theorem for matrices into a theorem for linear transformations. So,
[16:44] suppose T V to W is a linear transformation then the rank of T is the dimension of the
[16:50] image of T. This is the definition. And the nullity of T is the dimension of kernel of
[16:56] T.
[16:57] So, based on what we have studied earlier, notice that in order to compute the rank,
[17:04] we can choose ordered basis for the domain and codomain and using that we can get a matrix
[17:11] and the rank of T will be exactly the rank of that matrix. And similarly, the nullity
[17:18] of T will be exactly the nullity of that matrix.
[17:23] So, if we reinterpret the rank nullity theorem for matrices, we will thus obtain rank of
[17:29] T plus nullity of T is dimension of V. Why dimension of V, because remember that what
[17:36] we will get is rank of the matrix plus nullity of the matrix is equal to n. What was n? N
[17:43] was the number of columns in that matrix. But what is that number of columns? That number
[17:49] of columns is corresponding to the dimension of V. So, hence we get dimension of V here.
[17:57] So, I guess that ends this video. Thank you.