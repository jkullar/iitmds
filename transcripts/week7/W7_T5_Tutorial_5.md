# W7_T5: Tutorial 5

**Week:** Week 7
**YouTube URL:** https://www.youtube.com/watch?v=pX5LCYHDJKY

---

## Transcript

[00:00] [Music]
[00:15] hello all uh in this uh tutorial uh we
[00:19] will solve a simple problem related to
[00:21] dimension
[00:22] of a vector space
[00:24] okay so uh let us consider this set s
[00:27] which is the set of
[00:29] 4 vectors 1 2 0 0 3 1 3 3 minus 1 3 0
[00:35] minus 2 this is clearly a subset of r 3
[00:38] so all these vectors are elements of r 3
[00:42] and s is the set of these four vectors
[00:45] now let us consider the set b which is
[00:48] span of these two elements one two zero
[00:51] and zero three one
[00:53] what is the dimension of v
[00:56] v can be represented as alpha times 1 2
[00:59] 0 plus beta times 0 3 1
[01:05] where alpha and beta are real numbers
[01:08] so this is nothing but
[01:11] alpha
[01:12] comma 2 alpha
[01:14] plus 3 beta
[01:17] comma beta such that alpha comma beta
[01:20] belong to r
[01:22] so now we need to find the dimension of
[01:24] v so
[01:26] one thing we already know is that v is
[01:29] spanned by two vectors so dimension of v
[01:33] is less than or equal to two
[01:37] so uh if these two vectors are linearly
[01:39] independent then the dimension of v is
[01:42] going to be equal to 2. let's see if
[01:44] these two vectors are linearly
[01:46] independent or not for that we need to
[01:48] consider this equation a times the first
[01:51] vector plus b times the second vector
[01:54] is equal to 0
[01:56] if we get a is equal to b is equal to 0
[01:59] then these two vectors are linearly
[02:01] independent
[02:02] so let's check that so this reduces to
[02:07] a comma 2a plus 3b
[02:10] comma b is equal to 0. so this is a
[02:13] vector and the right hand side is also a
[02:16] vector it's actually the element 0 comma
[02:18] 0 comma
[02:19] 0.
[02:21] so equating the components we have a is
[02:23] equal to 0
[02:25] 2 a plus 3 b is equal to 0 and b is
[02:28] equal to 0 so from the first and the
[02:30] third we already have a is equal to b is
[02:33] equal to 0 so this implies a is equal to
[02:36] 0
[02:37] b is also equal to 0 which means that
[02:40] the vectors
[02:42] 1 comma 2 comma 0
[02:44] and 0 comma 3 comma 1
[02:47] are
[02:48] linearly independent
[02:51] since these two vectors are linearly
[02:53] independent and these two vectors span v
[02:58] the basis of b is nothing but this set
[03:01] so dimension of v is equal to 2 since
[03:05] there are two elements in the basis of
[03:08] b
[03:12] now the next thing question is
[03:14] if the vectors in s are written as
[03:17] columns of a matrix a what will be the
[03:20] rank and nullity of a
[03:22] so let's write down a
[03:26] the vectors in s are written as columns
[03:29] of the matrix a so that's going to be
[03:31] 1 2
[03:33] 0
[03:34] 0 3 1
[03:36] 3 3
[03:38] 1
[03:39] 3 0 -2
[03:43] so once you have a matrix you know how
[03:45] to use gaussian elimination and find the
[03:47] rank of the matrix so let us just do
[03:50] that let me quickly do it so the first
[03:53] entry is already 1 so that's nice
[03:56] let's make this entry 0 for that we will
[04:00] do r2 minus
[04:02] 2 r1 the second row is replaced with the
[04:05] second row minus 2 times the first row
[04:08] that's going to be 0
[04:10] 3 minus 0 is 3
[04:12] 3 minus 6 is minus 3
[04:15] 0 minus 6 is minus 6
[04:19] and the third row as it is
[04:25] now we want to make
[04:26] this entry to be equal to
[04:30] 1 so let's divide the second row
[04:32] by 3
[04:35] so that's going to give me 1 0 3 3 first
[04:39] row remains as it is second row we
[04:41] divide by 3
[04:43] so we get this and the third row remains
[04:46] as it is
[04:48] in the next step i want to make this
[04:50] entry 0 for that i will do
[04:52] r3
[04:54] is r3 minus r2
[04:57] so that's going to give me 1 0 3 3
[05:00] second row remains as it is
[05:02] and the third row is third row minus the
[05:04] second row
[05:06] that's going to give me 0.
[05:08] so this there is a completely zero row
[05:11] here and there are two non-zero rows in
[05:14] the
[05:15] reduced form
[05:17] so
[05:18] the rank of
[05:20] a
[05:21] is equal to two
[05:24] and this a is a
[05:27] 3 cross 4 matrix
[05:29] so by the rank nullity dimension theorem
[05:32] we know rank of a
[05:34] plus
[05:36] nullity of a
[05:38] is equal to
[05:40] 4
[05:41] which means that
[05:42] nullity of a
[05:45] is equal to 2.
[05:48] so yes we have found out the rank and
[05:51] nullity of
[05:52] a
[05:54] and a is nothing but
[05:56] the set of vectors in s
[05:58] written as columns of a
[06:01] okay
[06:02] so what does this say rank of a is equal
[06:05] to 2 and a is again
[06:08] the vectors in s written as columns of a
[06:11] which says that there are only two
[06:13] linearly independent columns for the
[06:16] matrix a that is why rank of a is equal
[06:19] to 2 and if there are two linearly
[06:21] independent columns it means that out of
[06:24] these four vectors there are only two
[06:27] vectors that are linearly independent
[06:29] with each other that is
[06:32] if i consider the vector space spanned
[06:35] by the vectors of s
[06:38] let's call it w
[06:40] if w is the vector space spanned by the
[06:44] vectors of s
[06:46] then since there are only two linearly
[06:48] independent vectors in s
[06:50] dimension of w
[06:53] is equal to 2.
[06:54] w is already span of those four vectors
[06:58] and
[06:59] out of that there are only two linearly
[07:02] independent vectors so the dimension of
[07:04] w is going to be 2
[07:07] thank you