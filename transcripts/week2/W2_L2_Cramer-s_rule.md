# W2_L2: Cramer's rule

**Week:** Week 2
**YouTube URL:** https://www.youtube.com/watch?v=sOFHgNXXRFM

---

## Transcript

[00:00] [Music]
[00:14] hello and welcome to the
[00:15] maths 2 component of the online bsc
[00:18] degree
[00:19] on data science in today's video we are
[00:22] going to look at cramer's rule
[00:24] which employs the determinant in order
[00:27] to find
[00:28] the solutions of a system of linear
[00:30] equations
[00:32] when the coefficient matrix is
[00:34] invertible
[00:37] let us go on and do an example
[00:41] so let us look at this linear system so
[00:44] 4 x 1 minus 3 x 2 is
[00:46] 11 and 6 x 1 plus 5 x 2 is 7
[00:52] so let's recall what was the matrix
[00:54] representation
[00:55] so that's a x is b so
[00:58] the matrix a is given by the
[01:00] coefficients
[01:01] so 4 minus 3 6 5
[01:04] and b is the constants on the right so
[01:07] it is a column
[01:08] vector or column matrix 11 7
[01:12] and x is the unknowns x 1 x 2
[01:16] so this it's easy to compute this
[01:19] solution it has a unique solution x 1 is
[01:21] 2 and x 2 is minus 1
[01:23] let us quickly go through how so we can
[01:26] multiply
[01:29] the first one by three to get twelve x
[01:32] one minus
[01:33] nine x two is uh thirty three
[01:36] we can multiply the second one by two to
[01:39] get twelve x one plus ten
[01:41] x two is fourteen and then we subtract
[01:46] let us say the first one from the second
[01:48] one
[01:49] so in that case we get nineteen x two
[01:52] is um
[01:56] so what should we get so 14
[02:01] minus 33
[02:04] so that is minus 19 that tells us x 2 is
[02:08] minus 1 and then
[02:12] we can substitute in one of these
[02:14] expressions
[02:15] and get that x 1 is 2 one of these
[02:17] equations
[02:18] and get that x 1 is 2. ok
[02:21] so we can easily check that this is a
[02:24] unique solution
[02:26] ah so now let us do something
[02:29] slightly different and reinterpret this
[02:32] using
[02:33] determinants so here is
[02:36] the same example and here is how how we
[02:39] will apply kremer's rule
[02:41] so we look at the coefficient matrix a
[02:43] so that was 6 minus 3 sorry 4 minus 3
[02:46] 6 and 5 let us compute the determinant
[02:49] of a
[02:50] so if we do that that's 4 times 5
[02:57] minus negative 3 times 6
[03:02] ah so that's 20 plus 18 which is
[03:07] 38 let us keep that value in mind so the
[03:09] determinant of a is 38.
[03:12] so replace the first column of a by the
[03:16] column vector b and we'll call that
[03:19] matrix
[03:19] a subscript x 1 because
[03:23] the first column are the coefficients
[03:25] corresponding to x 1 in the two
[03:28] equations so a subscript x 1 is
[03:32] 11 minus 3 7 5. so we have replaced
[03:36] the 4 6 over here by 11 7
[03:40] okay replace the second column of
[03:43] a by the column vector b and call it x 2
[03:46] a x 2 so
[03:47] a subscript x 2. so we are doing the
[03:49] same thing
[03:50] for the second column so now the first
[03:54] column is the same as the first column
[03:57] of a
[03:58] and the second column is replaced by
[04:00] eleven seven so we get
[04:01] four eleven six seven let's say
[04:03] subscript x two
[04:05] let's calculate determinant of a x one
[04:06] so you can do this ah
[04:09] this is eleven times five minus ah
[04:12] negative three times seven
[04:14] so that works out to seventy six
[04:18] ah and then let's
[04:22] calculate the determinant of x two sorry
[04:24] a x two
[04:25] a subscript x two so if you do that
[04:28] that's
[04:28] 4 times 7 minus 11 times 6 that's minus
[04:32] 38
[04:33] so remember that the determinant of
[04:36] a was calculated to be 38
[04:40] so let us keep this in mind 38 76 and
[04:43] minus 38
[04:44] okay so now what do we do
[04:47] so cramer's rule will say let's
[04:51] calculate determinant of a subscript x 1
[04:54] by determinant of a
[04:56] and determinant of a subscript x 2
[04:59] by determinant of a so
[05:03] let us do that so this is
[05:06] 76 by 38
[05:10] and this is
[05:14] minus 38 by 38
[05:19] and these are exactly the
[05:22] solutions so x 1 is
[05:30] 2 remember that is what we got
[05:33] in the first slide and x 2 is
[05:36] minus one which is exactly what this is
[05:40] ok so at least in this example we have
[05:43] this strange method using
[05:45] determinants and it gives us the
[05:46] solutions that we
[05:50] require
[05:52] that we should have got not required ok
[05:55] so let us study what is cramer's rule in
[05:58] general
[06:00] so this is for when the coefficient
[06:03] matrix
[06:04] is an invertible matrix fine so what do
[06:07] you mean by invertible invertible means
[06:08] that the inverse exists
[06:12] ah okay so consider the following system
[06:15] of linear equations of
[06:17] two variables a one one x one plus a one
[06:20] two x two is b one a two one x one plus
[06:22] a two two x two is b
[06:23] two so the matrix representation here is
[06:27] uh
[06:28] is a one one a one two a two one a two
[06:31] two
[06:32] and b is b 1 the column vector b b 1 b 2
[06:36] and the assumption here is that the
[06:38] matrix a is invertible meaning its
[06:40] inverse exists
[06:42] and because its inverse exists
[06:46] remember that in the in the previous
[06:50] video
[06:50] with determinants we have seen that
[06:52] determinant of a inverse is 1 by
[06:54] determinant of a
[06:55] which in particular means that
[06:58] determinant of a
[06:59] is non-zero okay so one by determinant
[07:01] of a exists
[07:04] ok so let us define these two matrix
[07:06] matrices as in the previous
[07:08] example so we replace the first
[07:11] column by the vector b1 b2 and we call
[07:14] that new matrix a
[07:15] subscript x1 and we replace the second
[07:18] column
[07:19] by the column vector b and we call that
[07:23] new matrix a subscript x2
[07:27] okay and then cramer's rule says
[07:31] the solution of the system of equations
[07:34] and i am saying d
[07:35] which means it is a unique solution ah
[07:39] in two variables so this is determinant
[07:42] of a
[07:43] subscript x 1 by determinant of a note
[07:46] that
[07:47] this division makes sense because its
[07:50] invertible and x 2 is determinant of a
[07:53] subscript
[07:54] x 2 by determinant of a again makes
[07:58] sense
[07:59] and we know explicitly what these
[08:01] expressions are
[08:03] ah for two by two matrices the
[08:04] determinant is easy to compute so this
[08:06] is
[08:07] ah the numerator on for the first
[08:10] expression is
[08:12] ah b one a two two minus a one two b two
[08:15] and ah the numerator for the second
[08:17] expression is a one one b two minus b
[08:19] one a two one
[08:21] and the determinant of the matrix a is a
[08:24] one one a two two minus a two one
[08:26] a one two
[08:29] fine so that's ah the algorithm you have
[08:33] to follow
[08:34] for cramer's rule ah to find the
[08:38] solutions of a system of equations where
[08:41] the
[08:43] coefficient matrix a has non-zero
[08:46] determinant
[08:49] ok we can make this more general so let
[08:51] us do a 3 by three
[08:53] ah c crema's rule for three by three
[08:56] matrices
[08:57] so again here the coefficient matrix
[08:59] must be invertible
[09:01] so the determinant of a must be non zero
[09:04] because we divide by the determinant so
[09:06] here's
[09:07] the system of linear equations in three
[09:09] variables
[09:11] so recall that its matrix representation
[09:13] is a x is b where a is the coefficient
[09:15] matrix
[09:16] and b is this column vector of constants
[09:19] b one b two b three
[09:22] ok so in that case ah
[09:26] what is cramer's rule so we will have to
[09:28] define these new
[09:30] matrices ah again three by three
[09:32] matrices
[09:33] so a subscript is where you replace the
[09:36] first column of
[09:38] a by the column vector b a subscript x2
[09:41] is where you replace the second column
[09:43] vector
[09:44] sorry the second column of a by
[09:47] b and a subscript x3 is where you
[09:50] replace the third column vector
[09:54] third column of a by b
[09:58] okay and then how do we get the
[10:02] solution so the solution meaning again
[10:05] its unique
[10:06] of the system of equations that we saw
[10:09] is x 1 is determinant of a subscript x 1
[10:12] by determinant of a
[10:14] x 2 is determinant of a subscript x 2 by
[10:17] determinant of
[10:18] a and x3 is determinant of a subscript
[10:19] x3 by determinant of a
[10:21] again very important is that
[10:24] the determinant here must be non-zero
[10:26] otherwise of course we cannot divide
[10:28] and assuming that a
[10:32] has an inverse ensures this or
[10:34] explicitly we can say that determinant
[10:36] of a is non-zero
[10:39] so ah how did we define these a
[10:42] subscript x one a subscript x two a
[10:44] subscript x3
[10:46] so in the first one we the first column
[10:48] was replaced in the second one the
[10:49] second column was replaced and in the
[10:51] third
[10:51] third one the third column was replaced
[10:54] so these
[10:55] and the notations should tell you which
[10:57] columns are replaced because x
[10:59] one means the coefficients corresponding
[11:01] to
[11:02] x one that's the column which is
[11:04] replaced so those were a one one a two
[11:05] one and a three one
[11:07] ah similarly for x two and x three ok so
[11:09] this is cramer's rule
[11:11] for uh three by three
[11:15] matrices or for a system of linear
[11:18] equations in three variables
[11:20] fine maybe lets do a quick example
[11:26] so consider this system of equations um
[11:31] where the coefficient matrix so i am
[11:33] instead of writing down the
[11:36] system i am writing down the coefficient
[11:38] matrix and the constants
[11:39] so the coefficient matrix is one zero
[11:42] three zero two five
[11:43] four three one and the constants
[11:47] are zero two and one respectively for
[11:50] the three
[11:51] equations ah so to use screamers rule
[11:55] first let us look at the determinant
[11:57] so the determinant of a so we will have
[11:59] to compute this
[12:00] so the determinant is minus 37
[12:06] so i encourage you to compute this
[12:10] so since it is non-zero we can apply
[12:12] kremer's rule
[12:16] so let us follow the next steps in the
[12:18] procedure for cramer's rule
[12:20] so we have to compute these matrices a
[12:23] subscript
[12:24] x1 is subscript x2 and a subscript x3
[12:27] so how do we compute these matrices we
[12:30] replace
[12:31] the corresponding columns by the
[12:35] the column b so here we get
[12:38] 0 to 1 so b this is b
[12:42] and the other things remain same here we
[12:45] get
[12:46] 0 to 1 in the second in place of the
[12:48] second column
[12:50] and here we get 0 to 1 in place of the
[12:52] third column
[12:53] okay so these are our matrices
[12:59] a subscript x1 a subscript x2 and a
[13:01] subscript x3
[13:02] and then we compute their determinants
[13:04] so the determinant of a subscript x 1 is
[13:06] 12 you can check this
[13:08] so here we have first row has two 0s so
[13:11] this is an easy computation similarly
[13:14] for
[13:15] a subscript x 2 you can check this is
[13:17] minus 27 and a subsequent x3
[13:20] the determinant is minus 4 and then by
[13:22] cramer's rule
[13:25] we get that the solution to this system
[13:28] of equations
[13:29] is x 1 is minus 12 by 37 x 2 is 27 by 37
[13:34] and x 3 is 4 by 37
[13:36] okay so uh i'll encourage you to
[13:40] substitute these exp these x 1 x 2 x 3
[13:44] and check that indeed this is the
[13:46] solution and you can
[13:49] you know do a usual method of solving
[13:52] equations and check that indeed this is
[13:53] the solution
[13:55] okay so finally let's end with cramer's
[13:57] rule for
[13:58] the n by n k so now if you have
[14:02] n systems in a system of n linear
[14:05] equations in
[14:06] n unknowns so remember here that we
[14:09] should have
[14:11] the coefficient matrix has to be square
[14:13] first of all so we need
[14:15] n equations in n unknowns yeah this
[14:18] won't work otherwise
[14:20] and the second thing we need here is
[14:22] that
[14:23] the coefficient matrix is invertible uh
[14:27] or that the determinant is non zero
[14:32] okay so this is the general system of
[14:35] equations a is this matrix of
[14:37] coefficients a i j
[14:39] ah a one one a one two a etcetera and
[14:42] then b
[14:42] is the constant so column vector with b
[14:45] 1 b 2 b
[14:46] n then you define a
[14:49] x i that is a subscript x i
[14:52] this is a new n by n matrix and how do
[14:55] we obtain this
[14:56] we obtain this by for the
[15:01] ith column you substitute the you
[15:04] replace it by
[15:05] ah the column vector b
[15:09] okay so if you do that
[15:12] then you compute its determinant and
[15:14] then the
[15:16] ah solution to the system of linear
[15:19] equations
[15:20] ah so cramer's rule states that it is
[15:23] given by
[15:24] x i is determinant of a subscript x i by
[15:27] determinant of a
[15:28] right so we compute for each i so
[15:31] x 1 is determinant of a subscript x 1 by
[15:33] determinant of a x 2 is determinant of a
[15:35] subscript x 2 by determinant of a
[15:37] and so on up till x n is determinant of
[15:39] a subscript x
[15:40] n by determinant of a that's what
[15:44] kramer's rule states
[15:47] ah so in cramer's rule
[15:50] remember that ah
[15:54] you we need this is very important n
[15:56] equations in
[15:58] n unknowns yeah that is when we can
[16:00] apply it
[16:01] and further we need that the determinant
[16:03] of the coefficient matrix
[16:05] a is non-zero okay and then
[16:09] we can explicitly work out uh
[16:14] what the solution is
[16:17] thank you
[16:22] you