# W7_T3: Tutorial 3

**Week:** Week 7
**YouTube URL:** https://www.youtube.com/watch?v=fnrOwu-Veoc

---

## Transcript

[00:00] [Music]
[00:15] hello everyone in this tutorial video we
[00:17] will
[00:17] take a matrix and find its rank and led
[00:21] and also
[00:22] we'll find its null space using gauss
[00:24] elimination method
[00:25] so in the in this week's content
[00:28] you have seen that sar has taught us how
[00:31] to
[00:32] find the rank and idea of a matrix using
[00:34] gauss elimination
[00:36] so let us work with an example
[00:39] so let us consider a matrix a
[00:44] follows
[00:47] 2 4 0 2
[00:50] 1 0 3 1
[00:53] 3 2 1 0
[00:56] so you are saying that this is a 3 cross
[00:59] 4 matrix
[01:01] so there are 3 rows and
[01:05] 4 columns so
[01:08] we can see this matrix as a coefficient
[01:11] matrix of
[01:13] the system of linear equation x equal to
[01:16] 0
[01:17] where a is the coefficient matrix so our
[01:20] what will be our system
[01:22] our system will be 2 4 0 2
[01:25] 1 0 3 1 3 2 1
[01:28] 0 and there should be this is 3 cross 4
[01:32] so this x should be 4 cross 1
[01:35] so x 1 x 2 x 3 and x
[01:39] 4. so this is a 4 cross 1 matrix
[01:42] and this will be 3 cross
[01:46] 1
[01:50] so our system will be 2
[01:53] x 1 plus 4 x 2
[01:57] plus 2 x 4 equal to 0
[02:01] x 1 plus 3 x 3 plus
[02:04] x 4 equal to 0
[02:08] 3 x 1 plus 2 x 2
[02:11] plus x 3 equal to 0 so
[02:14] this is our system of linear equation
[02:23] so this is basically homogeneous system
[02:25] of linear equation
[02:27] so for homogeneous system of linear
[02:29] equation we always know that
[02:31] 0 is a solution but is there any other
[02:34] solution
[02:35] we have to find it so what we will do
[02:39] uh in gauss elimination we know that we
[02:41] have to
[02:42] transform this matrix a in
[02:47] row echelon form
[02:53] or reduce flows
[03:03] so we will use uh row operations uh to
[03:06] ah find this uh row estimate from our
[03:09] reduced solution form of the matrix a so
[03:12] let us start doing that
[03:16] so we have 2 4 0 2 1
[03:20] 0 3 1 3 2 1
[03:23] 0 so at first what we have to do we have
[03:25] to make this
[03:26] element to be 1 the first
[03:30] element the element in the first row and
[03:32] first column to be
[03:34] one so how we can do it we have to take
[03:37] half into r one so we will get
[03:41] one two zero one
[03:44] and the remaining rows will be
[03:48] the same will be unchanged
[03:51] now what we have to do we have to make
[03:54] the
[03:55] elements below the pivot element what we
[03:58] have changed already to be one
[04:00] the element below that to be
[04:03] zero so we have to make all the elements
[04:07] in the first column to be zero except
[04:09] the
[04:10] leading one the leading element which is
[04:13] one here
[04:15] so to make the element in the second row
[04:17] and first column to be zero what we have
[04:19] to do
[04:19] we have to just do r2 minus
[04:24] r1 we have to subtract row one from row
[04:27] 2
[04:27] which will give us so the first row will
[04:30] be
[04:30] same the second row will become 0
[04:34] minus 2 3 0
[04:38] and the third row will remain
[04:42] the same now we have to make
[04:46] this element to be zero
[04:49] so what we have to do we have to do r3
[04:53] minus 3 r1 and this will give us
[04:58] the first two row will be the same
[05:04] and the third row will become this will
[05:05] become 0 this is 2 minus 6
[05:09] that is minus 4 1 minus
[05:12] 0 that is 1 and 0 minus 1
[05:15] 3 is minus 3
[05:18] so we get this matrix now let us write
[05:22] this matrix on the
[05:23] next page and do the arrow operations
[05:26] further
[05:28] so now we have to make this element this
[05:30] element at the second row the leading
[05:32] element of the second row to be
[05:34] 1 so we will do minus half
[05:38] into r2 so this will give us
[05:42] the first row will be the same this will
[05:45] become
[05:47] 1 minus 3 by 2 0
[05:51] and the third row will remain as it is
[05:55] so now we have to make the elements in
[05:57] the second column to be 0
[05:59] except the leading one so at first we
[06:02] make the element
[06:03] at first row second column that to be 0
[06:07] so we will do r1 minus
[06:11] 2 r2
[06:14] so it will give us 1 0
[06:18] three one the second row will remain
[06:23] as it is and the third row will also
[06:28] remain the same now we have to make the
[06:31] this element to be zero which is at the
[06:34] 3 2 position so we will do
[06:38] uh r3 minus
[06:42] sorry r3 plus 4 r2
[06:45] so this will give us the first two row
[06:48] will
[06:49] be the same
[06:52] and this will become 0 0
[06:56] minus 5
[06:59] and minus 3.
[07:05] now the leading element in the third row
[07:09] is minus 5 so we have to make this as 1
[07:12] so we will do minus 1 by 5 into
[07:16] r3 so this will give us
[07:20] the first two row will be the same
[07:25] the third row will become this will
[07:28] become 1 and this will become
[07:30] three by five
[07:34] and this is already in
[07:38] low echelon form
[07:44] but we can proceed further to make it
[07:46] reduce rational form
[07:47] so we have to make this and this element
[07:50] to be zero
[07:51] so to make make the element in the first
[07:54] row to be zero
[07:56] first one third column to be zero what
[07:58] we have to do
[07:59] we have to do ah
[08:02] r one minus three r
[08:07] three so this will give us one
[08:10] zero 0 1 minus
[08:15] 3 r 3 means 9 by 5
[08:19] so this will give us
[08:22] minus 4 by 5 so let me write it minus
[08:25] four by
[08:26] five and the second
[08:29] row will remain same
[08:36] now we have to make this element to be
[08:38] zero
[08:39] so what we will do we will do r2 minus
[08:45] sorry plus 3 by 2 r3 so this will give
[08:49] us
[08:50] 1 0 0 minus 4 by 5.
[08:54] 0 1 0
[08:57] this will be
[09:00] 9 by 10
[09:05] and this row will remain the same
[09:11] so this is in reduced
[09:15] row echelon form
[09:21] so this is the matrix in reducer
[09:23] estimate form which we have obtained
[09:24] let me name it as r so our
[09:28] new system of equation will be rx equal
[09:30] to 0
[09:31] and this will give us
[09:35] x 1 minus 4 by 5 x 4
[09:38] equal to 0 x 2
[09:42] minus sorry plus 9 by 10 x 4
[09:45] equal to 0 x 3
[09:48] plus 3 by 5 x 4 equal to 0
[09:52] so from this reduced rotational form we
[09:54] can see that
[09:56] uh in this first column the
[09:59] leading coefficient is 1 and all the
[10:00] other elements is
[10:02] 0 so x 1 is
[10:05] dependent variable
[10:12] in the second column also
[10:15] it is the case so it is also dependent
[10:18] variable
[10:24] third column also the leading is one and
[10:26] all the others are zero
[10:28] so x three is also dependent variable
[10:36] but in the fourth column there is no
[10:38] leading element
[10:39] so x4 is independent variable
[10:48] or free variable
[10:54] so we have this system of equations so
[10:57] from it we get x 1 equal to 4 by 5
[11:01] x 4 x 2 equal to
[11:04] minus 9 by 10 x 4 x
[11:07] 3 equal to 3 by 5 minus 3 by 5 x 4
[11:11] so we are seeing that x 1 x 2 and x 3
[11:13] are dependent on
[11:14] x 4 whereas x 4 is free so the solution
[11:18] of the system
[11:18] we can write it as 4 by 5 x 4
[11:23] minus 9 by 10 x 4 minus 3 by 5
[11:27] x 4 and x 4 x 4 is 3
[11:31] so if we take x 4 as t
[11:35] as x 4 is our free variable so
[11:38] any vector of this form four by five t
[11:42] minus nine by ten t minus three by five
[11:46] t
[11:47] and t where t is any real number
[11:50] this kind of vectors are solution of
[11:53] this system of linear equation ax equal
[11:55] to 0
[12:00] so what we get this
[12:04] type of vector are in the null space of
[12:07] this matrix
[12:08] because what is the null space of a
[12:10] matrix
[12:11] null space of a matrix is all such
[12:13] vector x
[12:14] such that ax equal to 0 this is the null
[12:18] space of
[12:18] a
[12:22] so basically it is the solution of the
[12:24] system of linear equation for which
[12:27] the matrix given matrix a is the
[12:29] coefficient matrix
[12:31] so we get in this case the null space of
[12:33] the matrix is
[12:36] the vector of this form
[12:45] where t is in r so
[12:49] we can see that this this vectors
[12:53] are basically expressed if we know the t
[12:55] value of t
[12:56] then all the other values this four by
[12:58] five t minus nine by ten t
[13:01] minus three by five t these all are
[13:02] known so it depends only on one
[13:04] parameter that is
[13:06] t so if we put t equal to 1
[13:09] then we get the vector 4 by 5
[13:13] minus 9 by 10 minus 3 by 5
[13:16] and 1 this vector is in the null space
[13:19] of t
[13:20] null space of a
[13:24] so this single term set
[13:29] 4 by 5 minus 9 by 10 minus 3 by 5
[13:34] 1 this singleton set
[13:38] forms a basis of this null space this is
[13:40] basis
[13:42] of null space of a
[13:48] because the null space is spanned by
[13:50] this vector
[13:51] because any uh scalar multiplication of
[13:54] this vector is in the null space and
[13:55] that's the all
[13:57] that's the those are all the vectors
[13:59] which are in the null space
[14:00] so this form say this spans the null
[14:02] space and this is the single tensor so
[14:04] it is linear obviously nearly
[14:05] independent
[14:06] so this forms a uh basis of the null
[14:09] space
[14:10] of a so you can see that
[14:13] nullity of this nullity of a
[14:18] is 1 and
[14:21] you can see in this reduced session form
[14:24] that the rank of this matrix as there
[14:27] are no non-zero row
[14:28] in the reduced rational form so rank of
[14:32] this r is 3
[14:35] which is same as rank of a
[14:39] because r is the reduced rational form
[14:41] of a
[14:42] so rank of a is 3 nullity of
[14:45] a is 1 and this is a
[14:49] 3 cross 4 matrix so rank plus nullity
[14:53] is nothing but 3 plus 1 equal to 4
[14:56] this is the rank plus 90 theorem
[14:59] so in this example you have seen that we
[15:02] have find the rank of the matrix
[15:04] which is 3 the nullity of this matrix
[15:06] which is 1
[15:07] we have also find the null space of this
[15:09] matrix
[15:10] which is given by this vector and we
[15:13] have find a
[15:14] basis for this null space
[15:17] and we have also verified we have also
[15:19] verified the rank 90 theorem
[15:21] which state that if a is
[15:25] m cross n matrix then rank of
[15:28] a plus
[15:31] nullity of a is equal to n
[15:35] here n is 4 in this case
[15:42] thank you