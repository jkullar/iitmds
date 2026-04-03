# W5_T5: Tutorial 5

**Week:** Week 5
**YouTube URL:** https://www.youtube.com/watch?v=_O0yZXIWWv0

---

## Transcript

[00:00] [Music]
[00:14] ah
[00:15] so finally let's come to computing the
[00:17] inverse ah
[00:19] so gaussian elimination can also help
[00:20] you in computing the inverse
[00:22] how is this well let's recall what we
[00:24] did in computing the inverse right so
[00:26] the inverse
[00:27] what what is the inverse of a matrix its
[00:29] a matrix a in
[00:31] b such that a times b is identity and b
[00:34] times a is identity if i can arrange
[00:35] that a times b
[00:36] b's identity it kind of forces that b
[00:39] times a is identity
[00:41] okay so i just have to get a matrix b so
[00:44] that a times b
[00:45] is identity okay but how do i get a
[00:48] times b is identity
[00:50] so ah let's do it for the three by three
[00:53] k so suppose
[00:55] um ah a is a three by three matrix
[00:59] so then to say a times b is identity is
[01:02] the same as saying that a times
[01:04] the first column of b is one zero zero
[01:08] a times the second column of b is zero
[01:10] one 0
[01:11] and a times the third column of b is 0 0
[01:14] 1.
[01:14] so suppose i have solutions for ax
[01:17] equals 1 0 0
[01:18] a y equals 0 1 0 and a 0 equals 0 0 1
[01:21] okay
[01:22] so suppose those solutions are given by
[01:25] x prime y prime and z prime respectively
[01:29] so then i make my matrix x prime y prime
[01:33] and z prime remember x prime y prime z
[01:35] prime are columns
[01:37] so this gives me a 3 by 3 matrix
[01:41] and now when i multiply this a on the
[01:43] left
[01:44] what do i get i get a x prime a y
[01:47] prime
[01:51] a z prime but
[01:54] these are solutions 2 ax is 1 0 0 a y is
[01:58] 0 1 0 and a z is 0 0 1
[02:01] so this is exactly 1 0 0 this is exactly
[02:05] 0 1 0 and this is exactly 0 0 1 which is
[02:07] exactly the identity matrix
[02:09] okay so if i solve this if i solve these
[02:12] three equations
[02:14] i can find a matrix b so that a times b
[02:16] is identity
[02:19] and that will say that b is the inverse
[02:22] of a
[02:24] conversely if i know a times b's
[02:27] identity then you can take
[02:28] the first column of b that will be a
[02:31] solution of a x is one zero zero
[02:33] the second column of v that will be a
[02:35] solution of a y is one zero one zero
[02:37] and the third column of ah b and that
[02:40] will be a solution of a z equals zero
[02:42] one zero
[02:43] zero zero one okay so what is the
[02:45] procedure
[02:46] so well you can already see that finding
[02:49] solutions
[02:50] is exactly what gaussian elimination
[02:51] does for us so i can find this
[02:54] but i want to show you the algorithm for
[02:57] doing this
[02:58] which some of you may have seen before
[03:00] so what you do is
[03:02] instead of so i want to find the
[03:03] solution of let us say a
[03:05] and one zero zero right so i write it
[03:08] like this and then i want to find the
[03:09] solution of a
[03:11] and zero zero one so i also write that
[03:14] sorry
[03:14] zero one zero
[03:19] so i write it like this and also of zero
[03:21] zero one so i write it like this
[03:23] so instead of taking one column at a
[03:25] time i take all three columns together
[03:27] and because the procedure is the same
[03:29] right i have to apply the
[03:31] elementary row operations you you which
[03:34] i am going to use to reduce
[03:35] a to the reduced to echelon form
[03:39] and so so i
[03:42] take these all three and i put it like
[03:44] this so in other words
[03:45] what i do is i take a much bigger
[03:49] augmented matrix i take a
[03:51] and i augment all these three columns so
[03:54] 1 0 0 0 1 0 and 0 0 1. so i
[03:57] essentially put a and i beside each
[03:59] other
[04:00] then i reduce so
[04:08] so i let me say reduction to
[04:14] rho h reduced to epsilon form
[04:32] okay and if i do this and i know that a
[04:35] is invertible
[04:36] well if a is invertible then
[04:40] the reduced echelon form of a must be i
[04:44] and then whatever you get over here that
[04:47] is exactly
[04:48] a inverse okay that is the procedure
[04:51] okay let me maybe do a very fast example
[04:55] so maybe my matrix here is
[05:00] so let us see 1 1 1
[05:04] 2 4
[05:08] 8 and 3 9
[05:12] 27 okay let's reduce this to
[05:16] ah reduced to estron form probably this
[05:19] is not going to give me a very good
[05:21] inverse but let me do it anyway
[05:25] so how do i do this so for the first
[05:27] column i i have a 1 already
[05:29] so i do r 2 minus 2 r 1 r 3 minus
[05:34] ah and i have of course i have to
[05:37] augment the
[05:39] identity matrix sorry so before i do
[05:40] this
[05:48] i have to augment the identity matrix so
[05:51] let us do that
[05:58] okay so i reduce this so r two minus
[06:02] two r one r three minus three r 1
[06:07] ok what do i get so i get
[06:12] 1 1 1 and then
[06:16] ah 2 sorry 0
[06:21] 2 6 and then
[06:25] 0 6
[06:28] 24 and then over here i get
[06:32] ah 1 minus 2
[06:36] minus 3 and then 0 1
[06:39] 0 and then 0 0 1 okay
[06:42] and i i continue this procedure so now i
[06:45] do r 2 by 2 so what do i get
[06:49] so one one one zero one three
[06:53] ah zero six twenty four
[06:58] ah one zero zero minus one
[07:01] half zero minus three zero one
[07:05] ok i use my one to
[07:09] ah make make the sixth entry zero
[07:14] so that is r three minus six r two
[07:18] so one one one zero one three
[07:22] ah zero zero
[07:26] ah so twenty four minus eighteen
[07:30] is six ok so
[07:34] one zero zero ah minus one half
[07:38] zero and then r three so minus three
[07:41] minus six times minus also 3 plus 6
[07:44] that is 3 and then 0 minus
[07:49] 6 times half which is
[07:52] minus 3 and then
[07:56] just a 1. ok
[07:59] i i hope you understand what is
[08:00] happening so i want to reduce this
[08:02] further so i will do r three
[08:04] by six i am probably not optimized my
[08:08] space well
[08:10] ah nevertheless so i have one one
[08:13] one zero one three zero zero one
[08:18] now one zero zero minus one half
[08:21] zero half minus half
[08:29] okay and then i so this is already in
[08:31] row echelon form
[08:32] and maybe there is two more steps and
[08:34] you will get into
[08:36] ah reduced storage loan form
[08:39] and whatever matrix you have on the
[08:42] right hand side that three by three
[08:43] matrix
[08:44] that will be the inverse of the original
[08:45] matrix so i hope the process is clear
[08:51] so depending on the idea what sad has
[08:53] discussed in now
[08:55] so we will take an example of a matrix
[08:57] and try to calculate
[08:59] the inverse of a matrix using gaussian
[09:02] elimination or using row operation
[09:04] so let us take an example let us take
[09:08] this matrix
[09:09] 2 4 6 minus 1
[09:12] 3 minus 3 0 4
[09:15] 2 let us consider this matrix and try to
[09:18] find its inverse
[09:19] so this is our a matrix question is to
[09:23] find
[09:23] a inverse
[09:26] so we start with this matrix 2 4
[09:30] 6 minus 1 3 minus 3
[09:33] 0 4 2. and in the other side we are
[09:37] taking
[09:38] identity matrix which is 1 0
[09:41] 0 0 1 0 0 0 1
[09:44] and we are doing row 1 column operation
[09:47] and we'll try to make this side as
[09:49] identity matrix then whatever the matrix
[09:52] will be on this side this frequency that
[09:54] will be our
[09:55] inverse so to begin with
[09:59] at first uh there is two
[10:02] in the first element as a first row and
[10:05] first column
[10:06] so we have to multiply with
[10:10] half so half of r1 that will give us
[10:14] 1 2 3
[10:17] half 0 0
[10:20] this is minus 1 3 minus 3 0
[10:24] 1 0 this rows will remain unchanged
[10:28] and this is 0 0 1 so this is our
[10:32] first operation this is what we get
[10:35] after the
[10:36] first operation so
[10:41] now we just we want to make this one as
[10:43] 0
[10:44] so we add r1
[10:47] to r2 so we'll get 1
[10:51] 2 3 half 0
[10:54] 0 that is the first row that will remain
[10:56] unchanged
[10:57] and in the second will get 0 3 plus
[11:01] 2 it will be 5 minus 3 plus 3 that will
[11:05] be 0
[11:06] this will be half 1 0
[11:10] and the third row will remain unchanged
[11:16] so our first row first column is
[11:18] complete this is one zero zero
[11:20] now what we have to do we have to make
[11:22] this one
[11:23] as one so
[11:27] we'll do 1 by 5
[11:30] of r2 so that will give us
[11:34] 1 2 3 half
[11:37] 0 0 0 1 0 this will be 1 by 10 this will
[11:43] be 1 by 5
[11:45] 0 0 4 2
[11:48] 0 0 1 ok
[11:53] now what we have to do we have to make
[11:55] this and this
[11:56] to be 0 so to make
[12:00] this 4 to be 0 we have to do
[12:06] r 3 minus 4 r two
[12:10] then we will get this one as zero so let
[12:12] us write it
[12:14] one two three half zero zero
[12:18] zero one zero this first two rows will
[12:21] remain
[12:22] unchanged and the third row will be
[12:24] changed to 0
[12:26] 0 this is 2
[12:29] now we are making 4 into r2
[12:33] so it will be 4 by 10 so it is minus 4
[12:36] by 10
[12:38] it is uh 4 by 5
[12:41] so it will be minus 4 by 5 and
[12:44] 1 and to make
[12:48] this one as 0 we have to do
[12:51] r1 minus 2r2
[12:54] so what we have got here so we will get
[12:58] 1 0 3 and half
[13:01] minus 2 by 10 that is basically
[13:05] three by ten and this is minus two by
[13:09] five
[13:10] zero zero one zero and this two row
[13:15] will be unchanged
[13:23] okay
[13:26] so now what we have to do here we have
[13:29] two in the third
[13:31] row and third column so we have to make
[13:34] it one
[13:35] so basically we will do half into r3
[13:38] so that will give us the first two rows
[13:41] will remain unchanged
[13:50] and here we get is
[13:54] 2 by 10 and
[13:57] minus 4 by 10 half
[14:03] now we have to make this one to be zero
[14:05] so this is the last step basically then
[14:07] we will get the identity matrix so
[14:10] identity matrix in this side so we'll we
[14:13] have to
[14:14] do r1 minus 3 r
[14:18] 3 so it will give us 1
[14:21] 0 0
[14:24] 3 by 10 minus
[14:27] 3 r 3 that is 6
[14:30] by 10 and here minus 2 by 5
[14:36] plus 12 by 10
[14:41] 0 sorry not 0
[14:44] 0 plus minus 3 by 2 this is minus 3 by 2
[14:49] and the remaining two rows will remain
[14:56] unchanged
[15:01] so this is the matrix so let us
[15:03] calculate this thing so this will give
[15:05] us 9 by 10
[15:07] so this will give us 12 by
[15:10] 10 minus 2 by 5 that is
[15:14] 10 12 minus 5 2
[15:17] 4 so it is 8 by 10
[15:20] so this will give us 8 by 10
[15:24] and this is minus 3 by 2 so the inverse
[15:27] so in this side we have
[15:29] identity matrix of order 3 and
[15:32] this is the 3 cross 3 matrix which is
[15:35] our a inverse so this is 9 by 10 8 by 10
[15:39] is basically
[15:40] 4 by 5 minus 3 by 2
[15:43] 1 by 10 1 by 5 0
[15:47] uh minus 1 by 5 minus 2 by 5
[15:52] half so this is our inverse so you can
[15:55] check that
[15:56] a inverse is equal to identity equal to
[15:59] a inverse
[16:00] a thank you