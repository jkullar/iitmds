# W8_T3: Tutorial 3

**Week:** Week 8
**YouTube URL:** https://www.youtube.com/watch?v=P6tBnX1CdZo

---

## Transcript

[00:00] [Music]
[00:15] hello everyone
[00:16] in this video we will try to visualize
[00:18] how solution of non-homogeneous system
[00:20] of equations are related with
[00:22] reference bases so let us consider a
[00:25] system of
[00:26] non-homogeneous system of linear
[00:28] equation ax equal to b
[00:30] where a is given by the matrix
[00:34] suppose let us consider this matrix 1 0
[00:37] 1
[00:38] 0 1 1 and 1
[00:42] 1 so let we consider this matrix as our
[00:46] a
[00:46] the coefficient matrix and x is
[00:50] 3 variables so it is x 1 x 2 and x 3
[00:54] and let us consider b to be
[01:00] 2 to 4 2
[01:03] and 4. now
[01:06] if we just try to find the null space of
[01:09] a
[01:11] null space of a what we will do
[01:15] we will do the row reduction row
[01:17] operations on a
[01:18] to find the reduced row matrix of a
[01:21] reduced row estimate form of the matrix
[01:23] a so
[01:25] we start with 1 0 the given matrix 1 0 1
[01:29] 0 1 1 and 1 1
[01:32] 2 so
[01:36] if we do r 3 minus r1
[01:41] will get
[01:44] 1 0 1 0 1
[01:47] 1 and 0 1
[01:51] 1 now we will do
[01:55] r 3 minus r 2
[01:59] so we will get 1 0
[02:02] 1 0 1
[02:05] 1 0 zero zero
[02:08] so in the first two columns or
[02:12] first two rows we have uh p hot elements
[02:15] uh i mean that's these columns are non
[02:17] zero columns
[02:18] and these two has two rows are non-zero
[02:20] rows so
[02:21] there are only one independent variable
[02:24] and
[02:25] so if we write this we will get x 1 plus
[02:28] x
[02:29] 3 is 0 and x 2 plus x 3 is 0
[02:34] so x 3 is our independent variable
[02:38] so we can write it as minus x 3
[02:42] comma minus x 3 comma x 3
[02:47] so where x 3 is coming from
[02:51] set of real number so this is our
[02:54] null space of a so let us denote this at
[02:58] n of a so this is our null space of a
[03:02] so the basis of this space so this is
[03:05] nothing but the
[03:06] spanning set of the vector
[03:10] minus 1 minus 1 1
[03:14] so minus 1 comma minus 1 comma one is
[03:18] a basis for this null space so that's
[03:21] what we got
[03:23] so basically uh whenever we take any
[03:25] vector from the null space
[03:26] if we compose uh if that is v that
[03:30] if v is from the null space of a then a
[03:32] v
[03:33] is equal to 0 so
[03:36] this elements of null space are nothing
[03:39] but the solution of the homogeneous
[03:40] system of equation ax equal to 0
[03:42] but we want to find the solution for the
[03:45] system application a x equal to b
[03:48] so for finding the solution a x equal to
[03:51] b
[03:51] what we have to do we use the gaussian
[03:54] elimination method again
[03:56] so this is our augmented matrix and we
[03:59] do the row operation
[04:00] so let us write the augmented matrix for
[04:03] this is 1
[04:03] 0 1 0 1 1
[04:08] 1 1 2 and the
[04:11] b matrix is 2 2 4
[04:15] so if we do the same similar row
[04:17] operations as we have done here
[04:20] so at the end we will get back to
[04:23] 1 0 1 and here we have 2
[04:28] and this is 0 1 1 here we have 2
[04:31] and this is 0 0 0 0
[04:35] so at the end we will get this this
[04:38] reduce system form
[04:40] and from here we can find that x 1 plus
[04:43] x 3
[04:44] is equal to 2 and x 2 plus x 3
[04:48] is again 2 and x 3 is our independent
[04:51] variable
[04:52] so the solution set is nothing but
[04:56] we can write it as 2 minus x
[05:00] 3 2 minus x 3
[05:05] comma x 3 so this is
[05:09] our solution set where x3 comes from
[05:12] real number
[05:16] so all these vectors are in the
[05:17] solutions of ax minus b
[05:20] so we can write we can express it
[05:24] so this is our solution we have written
[05:26] so we can express it
[05:28] in terms of 2 comma 2 comma 0
[05:32] this vector plus
[05:35] minus x 3 minus x 3
[05:39] x 3
[05:43] this set x 3 belongs to r
[05:47] so this is our null space
[05:50] this is nothing but the null space of a
[05:53] and this we got
[05:54] some vector which is let us denote this
[05:56] by u
[05:57] and if we can calculate a u so our a is
[06:01] the matrix
[06:02] 1 0 1 0 1 1
[06:06] 1 1 2 and if we multiply it with
[06:10] u that is 2 2 0 so what we will get
[06:14] we will get 2
[06:17] 2 and 4 so this u is a solution of this
[06:21] system of equation so u is one solution
[06:23] of the system of equation
[06:25] and this u plus this null space this is
[06:28] the set of all solutions this is the
[06:29] solution set of our
[06:30] system of equation so this is nothing
[06:33] but an affine space this
[06:34] n a n a is a vector space n is a
[06:37] subspace
[06:38] rather you can say it is a subspace
[06:43] subspace of r 3 here as we are
[06:45] considering everything in r3 so
[06:47] n a is a one-dimensional subspace as we
[06:49] can see here
[06:50] and u plus that subspace is giving us an
[06:54] affine set
[06:55] and this this is nothing but the
[06:57] solution set of this system of linear
[06:59] equation
[07:00] non-homogeneous system linear equation a
[07:02] x equal to b
[07:04] so solution set of this non-homogeneous
[07:07] system of
[07:07] uh linear equation is nothing but a
[07:10] refined space
[07:11] u plus null space of a where u is a
[07:17] solution
[07:20] of a x equal to p so
[07:24] this we can uh get from this example
[07:29] thank you