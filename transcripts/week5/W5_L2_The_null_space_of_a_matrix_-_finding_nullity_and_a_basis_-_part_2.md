# W5_L2: The null space of a matrix - finding nullity and a basis - part 2

**Week:** Week 5
**YouTube URL:** https://www.youtube.com/watch?v=sDKAGDJlSAE

---

## Transcript

[00:00] [Music]
[00:14] okay so let's do a three by four example
[00:17] so here your matrix is
[00:20] one two zero three two three zero three
[00:22] and one one one two
[00:24] so in this example ah what do we want to
[00:28] do we want to
[00:30] get what is the nullity
[00:33] and a basis for the null space that is
[00:35] what we want to do
[00:38] okay so the augmented matrix is this
[00:42] so let's see water reduction yields so
[00:45] reduction is going to give me
[00:47] ah 1 2 0 3 2 3 0 3 1 1 1 2 i wrote that
[00:50] matrix and
[00:51] as i commented in my previous slide i am
[00:54] going to drop
[00:55] the augmented part okay so if we do that
[00:59] ah we have swept out our first column
[01:02] everything below
[01:02] that one now let's continue with
[01:06] the process so we get we want a one
[01:09] in the two two place if possible and
[01:11] indeed we can multiply the second row by
[01:13] minus
[01:14] one and obtain that so we get zero one
[01:18] ah zero three in the second row
[01:20] everything else remains the same
[01:23] so let us continue the process this is
[01:25] the same matrix we had in the previous
[01:26] slide so now let us sweep everything
[01:30] below the second
[01:31] in the second column below the one so if
[01:34] you do that we get 1 2 0 3 0 1 0
[01:36] 3 0 0 1 2
[01:42] and this is already in reduced not
[01:45] reduced
[01:45] in the row echelon form but we can go
[01:49] ahead one step and do reduce to echelon
[01:51] form and if we do that
[01:52] we get one zero zero minus three zero
[01:55] one zero
[01:56] three zero zero one two okay so we have
[02:00] reached our
[02:01] matrix which is in reduced to echelon
[02:03] form now let us ask what are the
[02:05] dependent and independent variables
[02:07] the leading ones are in the first second
[02:09] and third column that means x 1 x 2 x 3
[02:11] are dependent variables
[02:12] that means x 4 is an independent
[02:14] variable
[02:16] ok so the independent variables x 4
[02:18] dependent variables are x 1 x 2 x 3
[02:21] so the nullity of a is 1 right the
[02:24] nullity of a
[02:25] is 1
[02:28] because the analytic corresponds to the
[02:31] number of independent variables
[02:34] and what is the null space
[02:38] of a so for the null space we put the
[02:41] independent variables to be the ti's in
[02:44] this case there's only one independent
[02:45] variable so instead of putting t
[02:46] one i have put just called t so put x
[02:49] four equals t
[02:51] so the equations from the row reduced
[02:53] echelon form are x one minus three x
[02:55] four
[02:56] zero so here i am i am using the
[03:00] augmented matrix right
[03:01] so i have this matrix one zero zero
[03:03] minus three zero one zero three and zero
[03:05] zero
[03:05] one two and i am using the augmented
[03:08] matrix
[03:09] ah so if i call this r i am using the
[03:12] augmented matrix
[03:13] r zero and from there i am getting these
[03:16] equations
[03:17] so i get x one minus three x four zero x
[03:20] two plus three x four is zero
[03:22] and x three plus two x four zero y band
[03:25] ok
[03:25] so from here we get that x one must be
[03:27] three t
[03:29] by putting x four is t x 1 must be 3 t
[03:32] x 2 is minus 3 t and x 3 is actually
[03:35] minus 2 t
[03:36] i a so now we know what is the general
[03:38] form of a solution
[03:40] it is of the form so 3 t minus 3 t minus
[03:43] 2 t
[03:44] and t and t varies over r so some
[03:46] possible
[03:48] solutions are given by ah let us say if
[03:51] you put
[03:52] t equals 5 you get 15 comma minus 15
[03:56] comma
[03:57] minus 10 comma 5
[04:00] or if you put t equals 100 you get 300
[04:03] comma minus 300 comma minus 200 comma
[04:06] 100
[04:06] okay or you could of course put t equals
[04:09] 0 also that is also solution
[04:11] that is the trivial solution 0 0 0 0
[04:14] okay so actually other than the last one
[04:18] the 0 0 0 0
[04:19] any of these we could have chosen as a
[04:22] basis vector
[04:24] but just to follow a procedure we put t
[04:27] equals 1. so t equals 1 yields the basis
[04:30] vector
[04:30] 3 minus 3 minus 2 1. so basis for the
[04:34] null space of this
[04:35] matrix is just the single basis vector
[04:39] 3 minus 3 minus 2 1.
[04:43] so you can check that this this is
[04:44] actually inside your
[04:48] null space by multiplying this 2 a
[04:51] on the right of course as a column and
[04:54] seeing that the result is 0.
[04:58] fine so we have done these two examples
[05:00] of
[05:02] of computing the nullity of a matrix
[05:05] and the null space of a matrix and its
[05:08] basis fine so now let us
[05:12] take a step back and and and ask
[05:16] what did we exactly do so we found a
[05:18] general solution for
[05:20] the system of linear equations ax equals
[05:22] 0 and then we
[05:25] put the ti's to be
[05:28] 1 and everything all the other tjs to be
[05:30] 0 and each such will give you
[05:34] a basis vector this is the main point
[05:37] the main idea
[05:39] fine so let's do some observations
[05:42] and these observations are going to
[05:44] yield a theorem which is called the rank
[05:47] nullity theorem
[05:49] so what's the ranking reality theorem so
[05:51] let a be an m by n matrix
[05:54] so recall that the row rank of a is the
[05:56] dimension of the row space of a
[05:58] and the column rank of a is the
[05:59] dimension of the column space of a
[06:01] so what do we mean by the row space of a
[06:04] it's the
[06:05] vector space or the subspace of
[06:08] rn if it's a m by n matrix of rn
[06:12] which is spanned by the rows of a
[06:15] which we treat as vectors and what is
[06:18] the column space of
[06:20] a it's a subspace it's the subspace of
[06:23] rm which is given as the
[06:28] span of the columns of a meaning you
[06:31] treat each column as a vector in rf
[06:34] and that span is going to give you the
[06:36] column
[06:37] space so recall that these are equal
[06:41] something i stated but did not prove and
[06:44] they are denoted by rank of a so the
[06:46] rank of a is any one of these two
[06:48] either the row rank or the column rank
[06:51] because they are both the same
[06:55] so we used in the previous video we used
[07:00] the fact that rank of a is the same as
[07:02] the row rank
[07:03] to compute this rank how did we do that
[07:07] we said you take this matrix a you do
[07:10] row reduction
[07:12] and once you do row reduction you look
[07:14] at the non zero rows of this matrix
[07:17] and the number of non-zero rows is
[07:19] exactly the rank of a
[07:22] so re recall this if you do not remember
[07:27] so now this is the important point so
[07:30] note that for a matrix r
[07:32] in the row echelon form so suppose you
[07:33] have a matrix which is in row echelon
[07:35] form
[07:36] the number of non-zero rows is the same
[07:40] as the number of
[07:41] dependent variables ok how do we get
[07:44] this
[07:45] each nonzero row has a leading one
[07:47] because it is in row echelon form
[07:50] and each leading one that corresponding
[07:52] column
[07:53] corresponds to a dependent variable
[07:56] so the non-zero rows
[08:00] correspond to the leading ones
[08:02] correspond to the non
[08:04] the columns with leading ones
[08:07] correspond to the dependent variables
[08:09] okay that is how
[08:10] this correspondence is so the number of
[08:13] non-zero rows
[08:14] is the same as the number of dependent
[08:16] variables ah
[08:18] of course dependent variables where
[08:20] because there is no system of equations
[08:22] in this place
[08:23] so as i said here you think of the in
[08:26] your mind you think of the system of
[08:28] linear
[08:28] the homogeneous system of linear
[08:30] equations r x equals zero
[08:32] so you have this matrix a you row reduce
[08:35] it to r
[08:36] think of the system of equations r x
[08:39] equals 0
[08:40] think of how many dependent variables
[08:43] there are
[08:43] that is exactly the same as the number
[08:45] of non-zero rows that is what we are
[08:47] seeing
[08:48] and what is the number of non-zero rows
[08:49] that is the same as the rank of the
[08:51] matrix a
[08:55] why is that the case by the way because
[08:57] remember that in the previous video we
[08:59] have seen that
[09:00] if you have a spanning set for a vector
[09:03] space
[09:04] you put those in into your matrix as a
[09:07] as rows
[09:08] but in this case we have already done
[09:10] that that matrix is
[09:12] is by by construction
[09:15] that we started with the rows are the
[09:18] vectors which
[09:19] span the row space right so that is how
[09:21] we
[09:22] obtain this statement so the moral of
[09:25] the story is
[09:27] the rank of a is the number of non-zero
[09:29] rows of r
[09:30] r was remember obtained as from a by
[09:33] doing row reduction which is the number
[09:36] of dependent variables of rx is 0
[09:40] okay how is this related to nullity
[09:44] remember that the nullity of a is the
[09:46] number of independent variables of rx is
[09:49] 0
[09:49] okay so rank is the number of dependent
[09:52] variables
[09:53] nullity is the number of independent
[09:55] variables but well
[09:57] if you have a variable either it is a
[09:59] dependent variable or an independent
[10:01] variable
[10:02] so the number of of dependent variables
[10:06] plus the number of independent
[10:07] variables is the total number of
[10:09] variables which is exactly n
[10:11] remember it is an m by n matrix so this
[10:14] gives us the rank nullity theorem
[10:16] that the rank of a plus the nullity of a
[10:18] is n why because the rank is the number
[10:20] of
[10:21] dependent variables and the nullity is
[10:23] the number of independent variable and
[10:24] we just saw that
[10:26] this sum is the total number of
[10:28] variables which is
[10:29] n okay so this is a
[10:33] heuristic proof of the or
[10:36] i let me remove the word proof this is a
[10:39] heuristic for this theorem
[10:42] so this is a useful and and
[10:45] often quoted theorem in linear algebra
[10:47] okay
[10:48] so with that let's do the final
[10:52] ah topic that we want to do in this
[10:54] video how do we check if a set of n
[10:56] vectors is the basis for iron
[10:59] so remember that for rn we have a
[11:00] standard basis namely
[11:02] um the eis which is
[11:06] one in the ith place ith coordinate and
[11:08] zero is everywhere else
[11:10] this is the standard basis for rn and we
[11:12] know that the size of any basis is the
[11:14] same
[11:15] so the that was what we had called
[11:16] dimension so we know that the dimension
[11:19] of rn
[11:19] is n so we know that if at all
[11:23] you have a basis it must consist of n
[11:26] vectors
[11:26] so now suppose we are given n vectors
[11:28] how do i check whether or not this is
[11:30] the basis
[11:32] so here we use the idea from a previous
[11:37] video about linear independence and
[11:38] dependence namely that
[11:41] if you have a set of vectors and you
[11:42] want to check whether or not
[11:44] they are linearly independent so if you
[11:46] have for example
[11:48] n vectors in rn
[11:51] you look at the determinant and that is
[11:53] exactly what we are going to do now
[11:55] so that will that will tell you whether
[11:57] or not they are linearly independent
[11:59] but then the point is if you have if
[12:02] they are independent
[12:03] then you have n linearly independent
[12:05] vectors
[12:06] and they must form a basis because if
[12:09] not one so there will be some vector
[12:10] which is not in the span of
[12:12] these vectors which is linearly
[12:13] independent so you add that
[12:15] and you can keep doing this process as
[12:16] we did and in the end you
[12:18] after appending a bunch of vectors you
[12:20] will get a basis
[12:22] but then remember that the dimension
[12:24] will be strictly bigger than that
[12:26] so the only way that this is possible is
[12:29] if your original
[12:30] uh set was itself a basis so what is the
[12:34] moral
[12:34] the upshot is that if you have n vectors
[12:37] it's enough to check that
[12:40] they are linearly independent other
[12:43] way of doing this is to say its enough
[12:45] to check that they are a spanning set
[12:47] in either of these two cases they must
[12:49] be
[12:50] a basis ok so how do i check that in
[12:54] this case in this case it so happens
[12:56] that since you have n and n
[12:59] the corresponding matrix is a square
[13:01] matrix and i can look for its
[13:02] determinant
[13:05] so lets ah lets see how to check this
[13:08] so the short answer is use determinants
[13:11] and i sketched out how
[13:12] suppose we are given n vectors of r n we
[13:15] write them as columns of a matrix
[13:17] so we will obtain an n by n square
[13:20] matrix
[13:22] if the determinant of the matrix is 0
[13:24] then the given set of vectors does not
[13:26] form
[13:26] bases otherwise it forms a basis so
[13:29] what it is saying is that in a very
[13:31] large number of cases
[13:34] almost always which has a precise
[13:37] meaning but we won't
[13:38] say what that is now almost always they
[13:42] do form a basis ok so what do you have
[13:44] to do to check
[13:45] you have to compute its determinant
[13:48] so let us do examples the quick examples
[13:50] are
[13:51] in r2 you would take the standard bases
[13:54] 1 0 and 0 1 we already know its a basis
[13:56] so let us just check that the statement
[13:57] is correct
[13:58] so what is the corresponding matrix is
[14:00] the identity matrix
[14:02] the determinant is 1 and indeed this
[14:04] forms a basis okay so
[14:05] the determinant is non-zero and let us
[14:08] look at the vectors let us say 1 minus 2
[14:10] and 5 minus 10.
[14:11] so this yields a matrix 1 minus 2 in the
[14:13] first column 5 minus 10 in the second
[14:15] column
[14:17] and if you look at its determinant it is
[14:19] 0. of course we know this because they
[14:21] are
[14:22] linear multiples of each other and
[14:25] as a result this is not linearly
[14:26] independent and so it cannot form a
[14:28] basis
[14:30] ok let us do this for a slightly more
[14:35] larger example and maybe a more involved
[14:38] example
[14:39] so is the set one two three zero one two
[14:41] one three zero basis for r3
[14:43] okay let's form the matrix so form a
[14:46] matrix a with columns given by these
[14:48] vectors so that's
[14:51] the first column is 1 2 3 the second
[14:52] column is 0 1 2 the third column is 1 3
[14:55] 0.
[14:56] let's find its determinant well we know
[14:58] how to do this so i am i have just
[15:00] directly done this
[15:01] so its 1 times minus 6
[15:04] minus 0 times minus 9 which
[15:08] anyway does not count plus 1 times
[15:11] 4 minus 3 so that's minus 6 plus 0
[15:15] plus 1 which is minus 5 and that's
[15:18] non-zero
[15:19] so this does give you a set of vectors
[15:22] which form a basis
[15:23] let me directly show you that this is
[15:25] indeed
[15:26] a basis by proving that this is a
[15:29] spanning
[15:30] set for r3 so that b belong to r3
[15:34] so i want to get a bunch of scalars
[15:37] such that a1 times if i call these
[15:40] vectors x 1 x 2 x 3 so this is x 1
[15:43] this is x 2 this is x 3
[15:48] so i want to get so need
[15:52] a 1 a two a three
[15:55] belonging to r such that
[15:59] ah summation a i x i is b right i want
[16:02] this
[16:04] so in other words i want to solve
[16:07] a times a one a two a three
[16:12] is equal to b yeah why is that because
[16:15] the first column remember
[16:16] is one two three which corresponds to x
[16:18] one the second column is
[16:22] 0 1 2 which corresponds to x 2 and the
[16:25] third column is
[16:26] 1 3 0 which corresponds to x 3. so if
[16:29] you write out this equation
[16:30] in terms of the columns you will exactly
[16:32] have a 1 x 1 plus a 2 x 2 plus x
[16:34] a 3 x 3 so we want to solve this for
[16:38] a 1 into a 3 but now we know a is
[16:40] invertible
[16:41] so we know a solution in fact there is a
[16:43] unique solution
[16:45] so unique solution is
[16:51] ah a one a two a three is equal to a
[16:55] inverse b and why do we ah i mean where
[16:58] am i getting a inverse form
[16:59] well because the determinant is non-zero
[17:02] so
[17:03] the inverse exists in fact we know
[17:05] explicitly how to compute it
[17:06] the point is uh that there is a solution
[17:09] right so
[17:10] that means a 1 a 2 a 3 exists so scalars
[17:12] a 1 a 2 a 3 exist
[17:14] such that summation a i x i is equal to
[17:16] b for any b
[17:18] in r3 that means it is a spanning set
[17:20] for r3
[17:21] already the fact that determinant is
[17:22] non-zero tells you it is linearly
[17:24] independent
[17:24] that means it is a basis okay so that is
[17:27] why it is enough to check
[17:28] for the determinant let us do one last
[17:31] example
[17:32] in r four ah so
[17:35] let us have these four vectors one two
[17:36] three zero zero one two one one three
[17:38] zero two two six five
[17:39] three is this a basis for r four ah what
[17:42] do i do i
[17:43] make the matrix with these columns put
[17:46] these vectors in the columns so in the
[17:47] first column i have 1 2 3 0 in the
[17:49] second column i have 0 1 2
[17:50] 1 and third column i have 1 3 0 2 in the
[17:53] fourth column i have 2 6 5
[17:55] 3 compute is determinant we know how to
[17:58] compute determinants
[17:59] the ah we will do this by well
[18:02] the easiest way would have been by doing
[18:04] gaussian elimination
[18:05] or row reduction rather but let me do it
[18:08] by hand
[18:09] so by hand let's do by expansion along
[18:12] the first row
[18:14] so i get 1 times the determinant of the
[18:16] 1 1
[18:18] minor
[18:22] minus 0 times the 1 2 minor
[18:26] plus 1 times the
[18:29] 1 3 minor minus 2 times the
[18:32] 1 4 minor so the 0 times part i have
[18:35] removed because anyway i am going to get
[18:37] the
[18:37] on that will contribute nothing
[18:41] ah and the rest are written down here so
[18:44] you can compute this
[18:45] the first term is eleven second is zero
[18:47] so i have removed it all together
[18:49] the third term is eleven and the fourth
[18:52] term is two times eleven
[18:54] and so this is 0 and as a result
[18:57] the given set of vectors do not form a
[18:59] basis of r4
[19:01] thank you