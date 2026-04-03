# W4_L4: Rank and dimension using gaussian elimination

**Week:** Week 4
**YouTube URL:** https://www.youtube.com/watch?v=0yEKEavVQJE

---

## Transcript

[00:00] [Music]
[00:14] hello and welcome to the match2
[00:16] component of the online degree program
[00:17] in data science
[00:19] in this short video we are going to talk
[00:20] about how to compute rank and dimension
[00:23] using gaussian elimination so in a
[00:26] previous
[00:27] in the previous videos we have seen
[00:30] the notions of
[00:34] a basis and we have seen the notion of
[00:37] the
[00:37] rank of a matrix and the dimension of a
[00:41] vector space
[00:42] so we are going to see how to compute
[00:44] these using gaussian elimination
[00:46] so lets start finding dimension and
[00:48] bases
[00:49] with a given spanning set so the
[00:52] assumption here is that
[00:53] we know spanning set for our vector
[00:57] space v
[00:58] and we are going to try using this
[01:00] spanning set we are going to try and get
[01:02] a
[01:03] set of basis elements
[01:06] so we will try to make that spanning set
[01:09] linearly independent of course this will
[01:11] involve
[01:13] maybe reducing the size throwing away a
[01:15] few things or changing them all together
[01:17] so we have seen some ideas of how to do
[01:21] this
[01:22] in the previous videos where we saw that
[01:25] we could throw away things which were
[01:26] linear combinations of each other
[01:29] but that was kind of an ad hoc method
[01:31] and this is a formal rigorous method
[01:34] which is not computationally intensive
[01:36] or uses
[01:37] any tricks any observation skills it's a
[01:42] very direct algebraic method to find
[01:46] the dimension and the basis
[01:50] and it uses the notion of gaussian
[01:52] elimination yeah so let us recall that
[01:54] we have done gaussian elimination
[01:56] in the previous weeks where we used it
[01:58] to find the
[02:01] solutions to a system of linear
[02:04] equations
[02:05] right so gaussian elimination was that
[02:07] you
[02:08] uh you have ax equals b and then you
[02:10] look at
[02:11] the augmented matrix and then we
[02:14] performed the row operations on
[02:16] a reduced it to reduce to estron form
[02:19] ah and allowed the same operations on b
[02:23] and then the idea is that we know how to
[02:25] read solutions of
[02:26] for a matrix which is in reduced rows
[02:29] long form or rows long form
[02:31] and then the point is that this process
[02:34] does not change the solutions
[02:36] yeah this was the idea and uh we are
[02:38] going to use this idea again
[02:40] uh in order to find the basis okay
[02:43] so let's start so consider a vector
[02:46] space w
[02:47] which is spanned by a set v sorry sorry
[02:49] by set s
[02:51] for example so i am going to have this
[02:52] running example
[02:54] i will describe the method and each step
[02:57] that i do
[02:58] we will we will run it on this
[03:01] particular example so what is the
[03:02] example
[03:03] you consider the vector space w spanned
[03:05] by the set s
[03:06] consisting of the vectors 1 0 1
[03:10] minus 2 minus 3 1 and 3 3 0
[03:14] so we are looking at w which is spanned
[03:16] by these three vectors
[03:19] okay so we will use the following steps
[03:20] to find the dimension and the basis for
[03:22] w
[03:23] and we as i said we will carry out the
[03:24] steps on this particular example
[03:27] so form a matrix with the vectors in the
[03:29] spanning set as the rows
[03:31] so you take these vectors and put them
[03:34] in the rows
[03:35] so form a matrix so this will be a 3 by
[03:38] 3 matrix in this case
[03:40] so in general it will depend on how many
[03:42] vectors are given to you
[03:44] so if there are m vectors given and each
[03:46] of them is of length
[03:47] n then this will be an m by n matrix
[03:53] so in this case you get a three by three
[03:54] matrix uh which is one zero one minus
[03:57] two minus three one and three 3 0
[04:01] reduce this matrix to a matrix in the
[04:04] row echelon form so we know how to do
[04:06] this
[04:06] this is a row reduction so you
[04:09] have to use elementary row operations so
[04:11] let us do that
[04:12] so the first thing to do is get a one in
[04:15] the
[04:16] earliest possible position so here we
[04:19] have a one in the one one position
[04:22] so use that one to sweep out
[04:27] all the entries in the first column
[04:30] so that is below 1. so for this we will
[04:34] do r 2 plus 2 times r 1 since we have a
[04:36] minus 2 over there
[04:38] so that gives us the matrix 1 0 1 0
[04:40] minus 3 3 3 three zero
[04:42] and then we will do r three minus three
[04:43] times r one
[04:45] ah so that will sweep out the three in
[04:47] the
[04:48] ah one three eighth place or rather the
[04:52] three one at place and then we get the
[04:55] matrix one zero one zero minus three
[04:57] three and zero three minus three and
[04:59] you can see this matrix is already in
[05:01] pretty good shape
[05:02] so we don't have to do a lot of further
[05:04] steps
[05:06] so we want now uh one in the
[05:10] ah two two position if possible and
[05:12] indeed it is possible
[05:14] by dividing by minus three so the second
[05:17] row by minus three
[05:18] so we get one zero one zero one minus
[05:20] one and zero three minus three
[05:23] and then we sweep out
[05:27] the remaining column remaining entries
[05:30] in the second
[05:31] column below 1 so that is r 3 minus
[05:35] 3 r 2 and that gives us one zero one
[05:37] zero one minus one and zero zero zero
[05:40] and this is in ah reduced to each lawn
[05:44] form it's
[05:44] so usually at this stage we reach
[05:48] a row echelon form but in this case we
[05:51] are lucky and that it is already in
[05:52] reduced row echelon form and there is a
[05:55] zero row in this
[05:56] at the bottom so why why did i
[06:00] talk about the zero row because the
[06:03] number of non-zero rows
[06:04] is exactly the dimension of the vector
[06:06] space w
[06:08] so this method of computation
[06:12] is already going to tell us what is the
[06:14] dimension without we do not even have to
[06:16] know what the basis is although we are
[06:19] going to get the basis
[06:21] very shortly but we already know what is
[06:24] the dimension namely the number of
[06:26] non-zero rows so in this example
[06:29] the number of non-zero rows is two so
[06:31] that is the dimension of w
[06:33] and the rows themselves those vectors
[06:39] the non-zero rules that is vectors
[06:41] corresponding to those
[06:42] those exactly are the ones which form
[06:44] the basis so in the example the final
[06:46] matrix was
[06:47] one zero one zero one minus one zero
[06:49] zero zero
[06:51] so the dimension of the vector space
[06:54] spanned by ah the three vectors we
[06:57] started with one zero one
[06:59] minus two minus three one three three
[07:01] zero
[07:02] that dimension is two and a basis is
[07:05] given by
[07:06] the vectors corresponding to these two
[07:08] rows one zero one
[07:10] and zero one minus one
[07:13] so i hope the method is clear it is a
[07:15] very easy
[07:17] and fairly short method as short as
[07:19] gaussian elimination is
[07:22] so let us do an example in r4
[07:25] to find the dimension and
[07:30] basis for the vector space spanned by
[07:32] the vectors
[07:33] 1 minus 2 0 4 3 1 1 0
[07:36] minus 1 minus 5 minus 1 8 and 3 8 to
[07:40] minus 12.
[07:41] now i've written rank here usually i use
[07:44] the word dimension
[07:45] but as i commented in that previous
[07:47] video
[07:48] they are often interchanged and
[07:52] this ambiguity is there depending on
[07:54] which source or text or person you
[07:58] interact with okay so let us construct
[08:01] the matrix with rows corresponding to
[08:03] these vectors so it is a 4 by 4 matrix
[08:06] now
[08:08] that matrix is 1 minus 2 0 4 3 1 1 0
[08:11] minus 1 minus 5 minus 1 8 and 3
[08:14] 8 2 minus 12. so what do we have to do
[08:17] next we have to row reduce this
[08:19] let's do that apply row reduction so
[08:21] here is your vector that
[08:23] the matrix you start with so the
[08:28] ah i see that i've already given away
[08:30] the answer
[08:31] but anyway let us go through the row
[08:33] reduction so for row reduction you need
[08:35] a one
[08:36] to start with well there is a one in the
[08:37] one one place so i sweep out everything
[08:40] in the column
[08:44] below that we have to do r 2 minus 3 r 1
[08:47] and then we have r 3 plus r 1 which
[08:50] knocks out the 3 1 entry
[08:54] ah so it sweeps out the
[08:57] third entry in the first column
[09:00] and then we have r four minus three r
[09:02] one and now we have indeed swept out the
[09:05] first column
[09:07] so now we continue our process so now we
[09:10] want
[09:11] we want to look at this smaller matrix
[09:13] ah consisting of the three by three part
[09:15] and we'll try to row reduce that so we
[09:18] already have a seven so i will divide
[09:20] our two by 7 so if we do that
[09:25] i get 1 minus 2 0 4 0 1 1 by 7 12 by 7
[09:31] and the other two rows remain the same
[09:33] and then we use that one to sweep out
[09:35] the
[09:35] second the third and the fourth entries
[09:38] in
[09:39] in the uh
[09:42] [Music]
[09:45] in the second column so that that means
[09:47] we have to do
[09:48] r three plus 7 times r2 and r4 minus 14
[09:52] times r3
[09:53] and it turns out that if you do that we
[09:55] will actually
[09:56] uh the entire third row and the fourth
[09:59] row
[10:00] become zero so
[10:03] so you have to check that of course
[10:06] so this is in ah row etched long form
[10:10] note that this is not in reduced closed
[10:12] load form because
[10:13] the entry minus two above the one is not
[10:16] zero
[10:17] but that's okay we don't need to put it
[10:19] into reduced row echelon form
[10:21] row echelon form is good enough for our
[10:22] purpose
[10:24] so if you put it into row echelon form
[10:26] the number of non-zero
[10:28] rows tells you the dimension of this
[10:31] vector space
[10:32] so this dimension is 2 as we saw right
[10:36] at the start of the slide
[10:37] and now we have a justification for that
[10:39] because there are two non-zero rows
[10:42] and what are the basis so the basis
[10:45] consists
[10:46] of the vectors corresponding to the
[10:47] non-zero rows so the basis is
[10:50] one minus two zero four and zero one one
[10:53] seventh
[10:53] twelve seventh you could of course if
[10:56] you prefer having
[10:58] um not fractional entries you could
[11:01] multiply this second vector by 7
[11:04] and instead of this basis you could
[11:06] write the same first vector
[11:08] and you could write the second vector as
[11:10] 7 1 0 7
[11:12] 1 12. but again that that's
[11:16] up to you okay so
[11:20] i hope the idea is clear so the point
[11:22] one was trying to make here is that
[11:24] we do not have to go all the way till
[11:25] the reduced echelon form
[11:27] although you could and
[11:31] that might be easier for some purposes
[11:33] but
[11:34] if you just want a basis and the
[11:35] dimension then you can
[11:37] end at a matrix which is in just in row
[11:41] echelon form
[11:42] and that that will be sufficient
[11:46] okay so now that we have seen the row
[11:48] based method
[11:49] let's take a step back and ask the
[11:52] following question
[11:55] so the row based method that we have
[11:56] discussed produces a basis
[11:59] from the spanning set but note that it
[12:01] may not contain
[12:02] the vectors in the spanning set right so
[12:04] if we we started with some spanning set
[12:07] and then we put it into the rows of a
[12:10] matrix
[12:11] and then we did row operations and then
[12:14] we got
[12:15] a matrix in rows long form and then we
[12:17] took the
[12:19] rows non-zero rows in that
[12:22] matrix so note that the rows must have
[12:24] gotten changed in this
[12:26] they may have and so the new vectors
[12:29] that you got
[12:30] that are your basis vectors may not be
[12:33] from the original set of vectors that
[12:34] you started with
[12:36] can we get a basis consisting of vectors
[12:39] which actually
[12:40] lie in the set you start with yeah in
[12:43] that spanning set
[12:44] yeah so if you remember we have done
[12:46] this
[12:48] before ah but in an
[12:51] ad hoc way so we discussed this
[12:54] where you have a spanning set and then
[12:56] you write
[12:57] one of the vectors as a linear
[12:59] combination of the others then you throw
[13:01] it out if it can be written
[13:02] and then you continue this process until
[13:05] you reach a point where you can't do
[13:06] do it ah the only thing is that process
[13:09] was kind of an ad hoc process
[13:11] so we didn't know which vector could be
[13:13] written as a linear combination of the
[13:15] other vectors
[13:17] and so there was a little bit of a trial
[13:19] and error involved
[13:20] so instead we can make it a more
[13:24] algorithmic process
[13:25] and to do it we can use again the idea
[13:29] of
[13:29] the roach loan form and the following
[13:32] fact helps us
[13:33] in doing so so if r is the matrix
[13:37] obtained by row reducing
[13:38] a where a is a matrix then the columns
[13:41] of
[13:42] a corresponding to the columns of r
[13:44] containing the pivot elements
[13:46] yeah so pivot elements are remember the
[13:48] uh places where you
[13:50] get one so those are the pivots where
[13:53] there are zeros in that row before
[13:55] right so you have a one and before that
[13:57] there are zeros those are your pivot
[13:59] elements
[14:00] and those corresponding columns so if
[14:03] you look at those columns
[14:04] from the matrix a then
[14:08] ah they form a basis for the column
[14:11] space of a
[14:12] okay so this fact is now going to help
[14:15] us
[14:15] to actually get vectors
[14:18] which are in the original spanning set
[14:21] which will
[14:22] form a basis okay so let us see this
[14:24] method so i will call it the column
[14:25] method
[14:26] and we will do it on examples and you
[14:28] will see
[14:29] how it works so let w be the subspace of
[14:32] r3 spanned by the set s
[14:34] consisting of these three vectors one
[14:36] zero one minus two minus three one
[14:38] and three three zero so we will use the
[14:42] fact in the previous slide to find a
[14:43] basis
[14:44] for w which is a subset of s form the
[14:47] matrix with the vectors in s as the
[14:49] columns okay not the rows so in the
[14:51] previous method
[14:52] we put them in the rows and then we row
[14:54] reduced yeah here you want to put them
[14:56] as columns
[14:58] ok so here is your matrix 1 minus 2 3
[15:02] which are all the first entries of your
[15:05] vectors
[15:05] 0 minus 3 3 and 1 1 0.
[15:09] so notice that the first vector went
[15:10] into the first column the second vector
[15:12] went
[15:12] into the second column and the third
[15:14] vector went into the third column
[15:18] row reduce this matrix so you have one
[15:21] minus two three zero minus three three
[15:23] one one zero so if you do that
[15:27] let's see how to go about this so for
[15:29] the first column you
[15:30] subtract
[15:34] 3 times sorry you subtract the first row
[15:37] from the third row
[15:38] so as to make the one in that
[15:41] in the three one position zero
[15:44] so you get one minus two three zero
[15:46] minus three three so no change there
[15:49] and then one minus one is zero one minus
[15:52] minus two is
[15:53] one plus two which is three and then
[15:57] zero minus three is minus three so you
[15:59] get
[16:00] zero three minus three as the third row
[16:04] okay you ah so your first column is
[16:07] set up in the way you want so now you go
[16:10] to the second column and look at the
[16:12] two two with position and if you divide
[16:14] by minus three
[16:15] you will get a one there so that is
[16:17] indeed what you do so then your second
[16:19] row becomes
[16:21] 0 1 minus 1 everything else remains the
[16:23] same
[16:24] and the final step in the row reduction
[16:26] is so this is this is the
[16:28] matrix that we had gotten to 1 minus 2 3
[16:30] 0 1 minus 1
[16:32] 0 3 minus 3 right so you add minus three
[16:35] times the
[16:36] second row to the third row or you
[16:39] subtract three times the second row from
[16:41] the
[16:41] third row and you will get in the last
[16:44] row you will get zero zero zero so now
[16:46] your
[16:47] ah matrix is in ah
[16:51] row echelon form not in reduced row
[16:52] external form but this is good enough
[16:54] for our purposes
[16:56] and so your matrix is one minus two
[16:57] three zero one minus one
[16:59] zero zero zero and so we know now where
[17:01] the pivot elements are
[17:03] the pivot elements are the one in the
[17:05] one one place and the one the two to
[17:06] eighth place
[17:07] so the columns containing the pivot
[17:09] elements are the first column and the
[17:11] second column
[17:12] so what that means is that
[17:15] the first uh vector and the second
[17:19] vector in your original
[17:20] spanning set form a basis so your first
[17:23] two vectors were 1 0
[17:24] 1 and minus 2 minus 3 minus 1 sorry
[17:27] minus 2 minus 3 1
[17:29] so these are your ah first and second
[17:33] vectors and they form a basis for w
[17:35] so i hope the method is clear let's do
[17:37] one more example
[17:38] so let's find the basis for the vector
[17:40] space point expanded by the vectors
[17:42] one minus two zero four three one one
[17:45] zero minus one minus five minus one
[17:47] eight
[17:47] three eight two minus twelve so we have
[17:50] seen this example before
[17:52] ah so to start with you have to put
[17:54] these into the columns not the rows
[17:57] so you get one three minus one three
[18:00] which are the
[18:01] first entries of each of these vectors
[18:03] minus two one minus five eight which are
[18:05] the entries of the
[18:07] second entries of each of these vectors
[18:09] and so on
[18:10] so the first vector went into the first
[18:12] column the second vector went into the
[18:14] second column
[18:15] and so on okay so let's row reduce this
[18:17] matrix
[18:18] so you have a one conveniently in the
[18:20] one one position so you
[18:23] add two times the first row to the
[18:26] second row
[18:28] so if you do that your second row
[18:30] changes to
[18:32] 0 then 1 plus 2 times 3 which is 7
[18:37] and then minus 5 plus 2 times minus one
[18:42] which is minus seven and then
[18:45] ah eight plus two times three which is
[18:48] fourteen
[18:49] third row remains the same and the
[18:50] fourth row you subtract four times
[18:53] the first row so that becomes
[18:56] 0 minus 12
[19:00] 8 plus 4 which is 12 and then minus 12
[19:05] minus 12 which is minus 24 so this is
[19:08] what you get ok this is a
[19:10] nice ah looking matrix ah each
[19:14] each of the second third fourth rows has
[19:15] a nice form
[19:17] so you can divide by ah seven in the
[19:20] second row
[19:21] so in the two two eighth place you get
[19:22] one so the second row becomes zero one
[19:25] minus one two
[19:26] and now you can see that the third and
[19:28] fourth rows are multiples of the second
[19:30] row
[19:31] so in the last step you
[19:36] use multiple suitable multiples to
[19:38] cancel
[19:39] those entries so you do r3 minus r2 that
[19:42] gives you 0
[19:42] in this third row and then you do r4
[19:45] plus 12 times r2 that gives you 0 in the
[19:48] 4th row
[19:50] so this matrix is now in row etch long
[19:52] form
[19:53] and the pivot elements the that is the
[19:55] leading ones are in the one one
[19:56] and the two to the positions ah so
[19:59] in particular they are in the first and
[20:02] the second columns respectively
[20:04] and so what we got is that the first
[20:07] vector and the second vector in
[20:08] your original spanning set which was one
[20:12] minus two zero four
[20:13] and three one one zero they form a basis
[20:17] for w
[20:18] ok so this is the method the column
[20:21] method of doing it
[20:22] so let's recall what we have done in
[20:26] this video
[20:27] in this video we have seen two methods
[20:28] to obtain two algorithmic methods i'll
[20:31] stress the fact that these are
[20:32] algorithmic methods
[20:34] to obtain a basis from a spanning set
[20:37] the first one was
[20:38] the what i call the row method so in the
[20:40] row method you take the vectors that you
[20:42] have
[20:43] put them into ah
[20:46] rows of a matrix convert it to rows long
[20:50] form or
[20:50] ah redistro's loan form and then the non
[20:53] zero rows that you get
[20:56] the number of non zero rows is the
[20:59] dimension of of the space spanned by
[21:02] these vectors
[21:03] and the non-zero rows are actually a
[21:06] basis for
[21:07] for this vector space okay
[21:11] in the second method which was which i
[21:13] called the column method
[21:15] ah also you obtain a basis and the
[21:17] dimension but there is an additional
[21:19] advantage
[21:19] namely you obtain vectors in the basis
[21:23] which are from your original
[21:26] spanning set so sometimes if you want
[21:30] ah vectors from your original spanning
[21:32] set
[21:33] which form a basis you can apply the
[21:36] second method so the second method is in
[21:38] in some sense
[21:39] ah more general and what was the second
[21:41] method instead of
[21:43] writing the vectors as the rows of a
[21:45] matrix you write them as
[21:47] the columns of a matrix then you row
[21:49] reduce
[21:51] and you look at the pivot elements so
[21:53] again first of all the non-zero rows
[21:55] number of non-zero rows or which is the
[21:57] same as the number of pivot elements
[21:59] that's going to tell you the dimension
[22:01] of this uh
[22:03] of the subspace spanned by this
[22:07] set of vectors and now if you look at
[22:10] the columns which
[22:13] which the pivot elements belong to and
[22:16] look at the
[22:17] corresponding vectors in your basis
[22:20] so for example if the pivots are in the
[22:22] first and the fourth column
[22:23] or if they are in the third and the
[22:26] fifth column
[22:27] then those corresponding vectors will
[22:29] give you
[22:30] ah a basis
[22:34] for your vector space this this is the
[22:36] ah
[22:38] this is what we have seen in this video
[22:40] thank you