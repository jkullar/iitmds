# W4_L3: What is the rank/dimension for a vector space

**Week:** Week 4
**YouTube URL:** https://www.youtube.com/watch?v=oATXqim4F5Q

---

## Transcript

[00:00] [Music]
[00:14] hello and welcome to the match 2
[00:15] component of
[00:16] the online bsc degree
[00:19] on data science in this video we are
[00:22] going to talk about what is the rank or
[00:24] the dimension of a vector space
[00:25] so let us recall before we have defined
[00:28] what is called the basis for a vector
[00:30] space right what is the basis
[00:32] a basis for a vector space is a linearly
[00:34] independent subset
[00:35] which spans that vector space what does
[00:38] that mean
[00:38] that means we can write every vector
[00:43] uniquely as a linear combination of
[00:45] vectors from this
[00:46] set b so just to ah
[00:49] make that last remark clear if b is v 1
[00:52] v 2 v
[00:53] n then for every v in v there is a
[00:56] unique set of scalars
[00:57] again the emphasis on unique a 1 a 2 a n
[01:01] so that v is summation a i b i so
[01:04] spanning says that there is a set of
[01:05] vectors
[01:06] right and linear independence says that
[01:09] that set of vectors is
[01:10] sorry there is a set of scalars so that
[01:12] v is summation a i v i
[01:14] and linear independence says that that
[01:17] set of scalars must be unique
[01:18] no other scalars will give you this ah
[01:21] vector v
[01:23] only a one a two n this is the only
[01:25] possible choice which gives you v
[01:26] okay that's if if set b satisfies this
[01:30] property
[01:30] then it's called a basis and if it is a
[01:33] basis it satisfies this property
[01:36] so what is the rank or the dimension of
[01:37] a vector space
[01:39] ah it's the size of a basis or the
[01:42] cardinality of a basis
[01:43] so for this course
[01:47] what that means is it is the number of
[01:48] elements in in a basis
[01:50] b what is the difference in the two
[01:52] statements even in the previous
[01:54] slide i had a slight difference in how i
[01:57] put
[01:57] put it down so the point is
[02:00] in general your vectors could have an
[02:02] infinite number of
[02:04] ah your basis size could be infinite and
[02:07] that is why we we have to talk about
[02:09] cardinality and
[02:10] size and so on so for the for those who
[02:14] want to do more
[02:16] serious or rigorous mathematics we have
[02:17] to bother about such things but for this
[02:19] course
[02:20] we are we want to use all these ideas to
[02:22] analyze data
[02:24] and of course we there is no notion of
[02:26] an infinite amount of data
[02:28] it can be very large still finite so we
[02:31] will be content with
[02:35] sizes which are finite so what this
[02:38] means is if
[02:38] b is the basis of of vector space v
[02:41] you just count the number of elements in
[02:43] b for example in the standard basis
[02:46] if you have rn we have the standard
[02:49] basis e1
[02:50] e to n the number of elements in that
[02:52] basis is
[02:53] n okay and that is exactly the dimension
[02:56] or the rank
[02:57] of the vector space rn
[03:02] so first of all we have to ask various
[03:04] questions for
[03:05] because we have made this definition
[03:07] does every vector space have a basis
[03:09] indeed that is true again as i said
[03:13] we'll restrict ourselves to easy
[03:16] examples
[03:17] where they are subspaces of rn and
[03:22] we for such things we can go about doing
[03:25] it in the way we did in the previous
[03:26] video
[03:27] namely we can start with the empty set
[03:29] and keep appending vectors
[03:31] ah so that the the set that you have at
[03:33] every stage remains linearly independent
[03:35] and at some stage you will get a maximal
[03:37] linearly independent
[03:39] set and that will be your basis so that
[03:41] happens in the finite number of
[03:43] steps so the number of steps tells you
[03:45] what is the
[03:47] number of basis vectors ah so indeed
[03:50] every vector space has a basis and
[03:53] indeed we can count it
[03:54] using that method that we had in the
[03:56] previous video
[03:59] now of course you might say that you can
[04:01] use that method but
[04:03] you know we had various choices of of
[04:06] applying that method we saw various
[04:09] different
[04:10] bases for a single vector space
[04:14] how do we know that the different bases
[04:17] have the same size
[04:18] that's a fact ah this is a fact that we
[04:20] are not going to prove
[04:22] um we may indicate a proof at some point
[04:25] but we will not give a formal proof so
[04:29] the point we are trying to make here is
[04:32] every vector space has a basis
[04:34] every basis has the same number of
[04:36] elements in it
[04:37] and that number is called the dimension
[04:39] or the rank of that vector space
[04:43] so the dimension of a vector space is
[04:46] uniquely defined
[04:47] its meaning is well defined because
[04:50] every basis has the same number of
[04:53] elements and bases do exist
[04:55] so it is denoted by dim of v or rank of
[04:58] v
[04:59] so the reason for the slight
[05:03] haziness and nomenclature meaning we
[05:05] have two different names
[05:06] is because um
[05:10] when you do higher algebra dimension
[05:12] starts
[05:13] having a different meaning but for this
[05:15] course
[05:16] we are going to stick to dimension of v
[05:18] however the notion of rank will come
[05:21] and that will come for a matrix
[05:24] at the end of this video and to
[05:26] reconcile this
[05:27] it's a good idea to remember that
[05:29] dimension of v is the same as rank of e
[05:31] yeah they are the same they have the
[05:33] same meaning
[05:35] fine ah with that kv at let us go ahead
[05:39] so let us recall the standard basis
[05:40] vector in rn ei is 0
[05:42] 0 0 up till the is vector ith coordinate
[05:45] which is 1 and then
[05:47] again a bunch of zeros in the other
[05:49] coordinates
[05:51] so the set e1 into n was called the
[05:54] standard basis
[05:56] and that means that the dimension of rn
[05:58] is n
[06:00] so we noted this idea in a pre in some
[06:03] previous video right we said
[06:05] the largest if you have n plus one
[06:07] vectors in rn
[06:09] they cannot be linearly independent they
[06:12] have to be linearly dependent
[06:13] yeah so n seem like the optimal size
[06:16] yeah this was
[06:17] what we talked about in the in our
[06:20] previous video
[06:21] that having linear independence and
[06:23] spanning
[06:24] means that in some sense your the size
[06:26] has to meet in
[06:27] in some place that is exactly the
[06:29] dimension ok so here the dimension is n
[06:32] for rn the dimension is n let us
[06:35] calculate the dimension of the subspace
[06:36] w
[06:37] of r three spanned by ah one zero zero
[06:40] zero one zero and three five zero
[06:44] so observe that the third vector 3 5 0
[06:48] is a linear combination of the first two
[06:49] vectors
[06:51] so this set is not linearly independent
[06:53] but we can
[06:54] do the following so this was a method
[06:57] that we discussed in the previous video
[07:00] if you have a spanning set how to get a
[07:01] basis from that spanning set
[07:03] namely to remove or delete vectors which
[07:06] are linear combinations of the other
[07:08] vectors
[07:09] so we delete the vector 3 5 0 from this
[07:11] set the remaining two vectors
[07:13] 1 0 0 and 0 1 0 do form a linearly
[07:16] independent set you can check this
[07:18] it is a subset of the standard basis so
[07:21] remember that if you have a set of
[07:22] vectors which are linearly independent
[07:24] then every subset is also linearly
[07:26] independent okay
[07:27] something you have either already done
[07:30] in your tutorials or will do soon
[07:34] so the set 1 0 0 and 0 1 0 we know it's
[07:37] a spanning set
[07:38] because we obtained it
[07:42] by deleting um vector 350 i'll warn you
[07:45] it's a spanning set for
[07:47] the subspace w not for r3 we are not
[07:50] saying it's a spanning set for r3
[07:52] we are saying it's a spanning set for
[07:53] the subspace w
[07:55] okay so it's a so
[07:58] and we know it's linearly independent
[08:00] the set 1 0 0 and 0 1 0
[08:03] that means its linearly independent plus
[08:05] spanning for w
[08:06] that means it forms a basis for w
[08:10] and what is w w is spanned by these
[08:12] three vectors that's what we started
[08:13] with
[08:14] so what we are really saying is that
[08:16] well we have a spanning set for w
[08:18] we started with
[08:23] these three vectors but we actually
[08:25] found that
[08:27] a basis for for w which is 1 0 0 and 0 1
[08:31] 0
[08:32] and now we know exactly what w is that
[08:34] means w
[08:35] is exactly the x y plane yeah w is
[08:38] points on the xy plane
[08:42] so in particular this also tells us that
[08:44] the dimension of w
[08:45] is 2 why is it 2
[08:49] because the basis of w has size 2
[08:52] what is the basis 1 0 0 and 0 1 0
[08:56] ok so as i noted this is the x y plane
[09:00] let us do the same example in terms of
[09:02] matrices
[09:04] and this is important because we are
[09:05] going to you know use
[09:07] these ideas in the next video and
[09:10] we are going to demonstrate explicitly
[09:12] how to find bases and how to find
[09:15] ah the dimension
[09:18] so write the vectors with span w as rows
[09:21] of a matrix
[09:22] so in this case that matrix is going to
[09:24] be 1 0 0 0 1 0 3 5
[09:26] 0 apply row reduction to this matrix aha
[09:30] this is something we have studied in the
[09:33] last week or maybe two weeks ago
[09:36] so if we do that this is a very easy row
[09:39] reduction
[09:40] so the it's written here but i
[09:43] suggest you quickly check this so you
[09:45] subtract three times
[09:46] the first row from the third row and you
[09:48] subtract five times the second row from
[09:50] the third row
[09:51] and what you get is the last matrix
[09:53] which is in
[09:54] a reduced row echelon form
[09:58] so we get the matrix one zero zero zero
[09:59] one zero and zero zero zero
[10:02] so this is in row each learn form
[10:04] actually reduced to each line form
[10:07] and its rows form a basis of the
[10:09] subspace w
[10:10] right so what are the rows the rows are
[10:12] one zero zero and zero one zero which is
[10:14] exactly
[10:15] what we saw was a basis for w so in
[10:18] particular
[10:19] what that means is if you want to know
[10:21] only what is the dimension you do not
[10:23] care about what is the basis but just
[10:24] the dimension
[10:25] we could have read it off as the number
[10:28] of non-zero rows
[10:29] in this last matrix one zero zero zero
[10:32] one zero
[10:33] zero zero zero here the number of
[10:35] non-zero rows
[10:36] in this matrix is two and that is the
[10:38] dimension of w
[10:39] okay so this is just an example but this
[10:42] is a fact
[10:44] uh that we will use later that this
[10:46] always happens
[10:49] let's use this idea i mean so so somehow
[10:52] this is related to
[10:53] ah matrices so let us define rank of a
[10:56] matrix this is one of the reasons as i
[10:58] mentioned earlier that
[11:00] there are these two i specifically
[11:03] talked about rank of v or dimension of v
[11:06] which
[11:06] which are both the same things but
[11:08] remember that both are the same
[11:11] because we are going to use that to
[11:13] define what is the rank of a matrix
[11:16] let a be an m by n matrix the column
[11:18] space of a
[11:19] is the subspace of r m so remember that
[11:23] the columns have m components
[11:27] so they are subspaces of sorry sub
[11:30] they are elements of rm they are vectors
[11:32] in rm
[11:33] so the column space of a is the subspace
[11:35] of rm generated by the column vectors of
[11:38] a those generated mean span spined by
[11:40] the column
[11:41] vectors of a so you take all the column
[11:43] vectors and take span of that set
[11:46] that is the column space of a
[11:50] similarly we can talk about the row
[11:51] space this is a sub
[11:54] space of r n
[11:57] so you take the rows of a and you
[12:02] take the span of that so that's the row
[12:05] space
[12:06] so the dimension of the column space of
[12:07] a is defined as the column rank of a
[12:10] the dimension of the row space of a is
[12:13] defined as the row rank of a
[12:16] and here is a fact which we will not
[12:18] prove very important fact
[12:20] and this is at the heart of that
[12:21] previous
[12:23] fact also that i stated which i did not
[12:25] prove that
[12:26] ah two different bases have the same
[12:29] size
[12:31] so the fact is that the column rank is
[12:33] the same as the row rank
[12:35] that previous fact we can prove directly
[12:37] but this is another way of proving it
[12:40] so column rank is the same as row rank
[12:43] and we call this number
[12:45] as the rank of a
[12:48] so let us find the rank of a ah this is
[12:52] an example
[12:53] i am not going to justify why this is
[12:56] used that will come later
[12:59] so what we do is we take this matrix and
[13:02] we do again the same thing that we did
[13:04] before
[13:04] you reduce it to row echelon form okay
[13:06] so i am this is a rather
[13:08] ah this is these are the kinds of
[13:10] computations we have done before
[13:11] so i will run through this quickly so
[13:14] this is one zero zero minus two minus
[13:16] three one
[13:17] three three zero so we want to make the
[13:20] first
[13:20] column there is a one already in the one
[13:22] one position so make everything else in
[13:24] the
[13:25] first column as zero that means we add
[13:27] two times the first row
[13:29] to ah to the second row and we add three
[13:32] times sorry subtract 3 times
[13:34] the first row from the third row that
[13:36] gives us
[13:37] the matrix 1 0 1 0 minus 3
[13:40] 3 and 0 3 minus 3
[13:45] so now let's get the 2 to 8th element
[13:49] make it what we call the pivot so
[13:53] this minus 3 we want to make 1 so we
[13:56] divide
[13:57] r 2 by minus 3. so if you do that you
[14:01] get
[14:01] the row 0 1 minus 1 in place of the as
[14:04] the second row in place of what we have
[14:05] as the second row
[14:07] and then use the one in the two to the
[14:08] position to
[14:10] sweep out the second
[14:13] column below that one and if we do that
[14:16] actually the third column becomes zero
[14:18] so
[14:18] you you subtract three times the second
[14:20] row from the third row
[14:22] and that gives you the final matrix one
[14:25] zero one
[14:26] zero one minus one zero zero zero
[14:31] and this matrix has 2 non-zero rows
[14:34] and therefore rank of this matrix is 2.
[14:37] so the point here is
[14:39] here i mean what what did we use in
[14:41] order to prove this
[14:42] remember that our definition was that
[14:44] the rank of
[14:47] the matrix a so rank of a
[14:51] is the rank of the row space of a
[14:58] or column space of a right but what we
[15:01] are saying is
[15:02] that if you reduce it to reduced earth's
[15:05] landform or row etcetera form
[15:08] so if you change a to r via
[15:11] row operations
[15:15] then the rank remains unaffected
[15:24] okay
[15:26] so the rank does not change under
[15:28] elementary row operations this is really
[15:29] the main point
[15:31] and hence what i can do is i can
[15:34] put the matrix into a matrix in the
[15:36] reduced echelon form or rows long form
[15:39] and
[15:40] then i can just look at how many rows
[15:43] are non zero because here
[15:44] what i really have is that these two
[15:47] rows
[15:48] one zero one and zero one minus one
[15:52] they span the row space of a and
[15:55] because of the special nature of these
[15:57] rows that
[15:58] they form a matrix which is reduced to
[16:01] etched lawn form
[16:02] they are also linearly independent which
[16:04] means it's a basis
[16:06] so that's why rank of a is 2.
[16:12] okay so let us recall quickly what we
[16:14] have
[16:15] seen in this video so in this video we
[16:17] have talked about the dimension or the
[16:19] rank of a vector space
[16:21] ah so what is the dimension of the rank
[16:23] of vector space
[16:24] it's the number of elements in the basis
[16:28] why does this statement even make sense
[16:30] it makes sense because
[16:31] every vector space has a basis and
[16:34] all possible bases have the same size
[16:38] these are statements we have to prove
[16:40] they are not
[16:41] entirely trivial not hard either but
[16:44] they need some proof
[16:45] and maybe this is not we won't be
[16:48] studying that in this course but these
[16:51] are important
[16:52] statements okay so now that we know what
[16:55] is the dimension we can go ahead and ask
[16:58] how do we compute it so one way of
[17:00] computing it is to
[17:02] find the basis how do we find the basis
[17:04] well in the previous video we have seen
[17:07] one method is to keep choosing linearly
[17:09] independent vectors
[17:11] ah appending linearly independent
[17:12] vectors to your set
[17:14] and well i have to be careful when i say
[17:16] linearly independent vectors that means
[17:18] you have a set which is linearly
[17:20] independent and you append a vector
[17:22] which maintains the linear independence
[17:24] of that
[17:26] ok and you keep doing this until this is
[17:27] no longer possible
[17:29] that was a one way of finding a basis
[17:31] and then you ask how many
[17:33] what is the size of such a pieces the
[17:35] other way is to
[17:36] have a spanning set and go the other way
[17:38] keep throwing out elements deleting
[17:41] but right now we saw a slightly simpler
[17:44] method which was that if you have a
[17:46] spanning set
[17:47] you put that into a matrix form
[17:50] you take the reduced row echelon form of
[17:53] that matrix or even just the row echelon
[17:55] form
[17:57] and then what is whatever is the number
[17:59] of
[18:00] non-zero rows that is the dimension of
[18:02] your
[18:04] vector space v now
[18:08] ah the idea here is sort of dependent on
[18:13] on matrices so we can talk about the
[18:16] rank of a matrix
[18:17] which we defined as the column
[18:20] the dimension of the column space
[18:24] or equally as a dimension of the row
[18:25] space because both of them match
[18:27] that is again a theorem which we are not
[18:28] proved but which
[18:30] i suggest you can prove
[18:34] by yourself may be a bit hard but you
[18:37] can at least check on some examples
[18:39] check the ah
[18:42] row rank and the column rank and so see
[18:45] that they match
[18:47] and how do i get row rank or column rank
[18:49] again it is by reducing to the
[18:51] etch lon form in the next video we are
[18:54] going to
[18:55] take this up more systematically and
[18:58] do much many more examples of computing
[19:02] dimensions and bases thank you