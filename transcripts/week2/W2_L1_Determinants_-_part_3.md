# W2_L1: Determinants - part 3

**Week:** Week 2
**YouTube URL:** https://www.youtube.com/watch?v=uO3mocPU9Q4

---

## Transcript

[00:00] [Music]
[00:14] hello and welcome to the max 2 component
[00:16] of the
[00:17] online bsc course on data science
[00:21] today's video is a continuation of the
[00:25] determinants topic that we have been
[00:28] studying so this part three of that same
[00:30] topic
[00:31] so let us recall quickly what we did in
[00:32] the previous ah
[00:34] so far in this topic so we have defined
[00:36] for a one by one matrix
[00:38] that the determinant of the matrix a is
[00:41] just the number
[00:42] a and then we have seen that for an n by
[00:45] n matrix
[00:46] the determinant is defined inductively
[00:48] so we did the definition explicitly for
[00:50] two by two and three by three
[00:52] and then i showed by for four by four
[00:54] how i can use a three by three
[00:55] definition
[00:56] and then you we said that in general
[01:00] ah we use the minus or cofactors
[01:03] corresponding to the
[01:04] first row in order to define the
[01:09] determinant so that means if so the idea
[01:12] is if you know how to determine
[01:14] to define the determinant for n n minus
[01:16] 1 by n minus 1
[01:18] matrix then you can use this procedure
[01:20] to get it for the n by n matrix
[01:23] ok so just to recall the ijth minor
[01:26] is the determinant of the sub matrix
[01:28] formed by deleting the iso and jth
[01:30] column so you have
[01:32] n rows and n columns you delete the ith
[01:34] row and the jth column
[01:36] and then you are left with an n minus 1
[01:38] by n minus 1 matrix
[01:41] and then you take the determinant of
[01:42] that
[01:44] okay and the ijth cofactor is
[01:48] minus 1 to the power i plus j times
[01:51] the ijth minor
[01:56] okay and just to recall again this was
[01:59] the final thing that we did
[02:01] in the previous video we have seen that
[02:03] the determinant of a is
[02:05] minus 1 to the power 1 plus j
[02:08] a 1 j m 1 j so this was given by what i
[02:11] called
[02:11] expansion along the first row
[02:14] okay and then you can take this minus 1
[02:16] to the power 1 plus j
[02:19] inside along with m one j and then you
[02:22] can replace it by c
[02:23] one j yeah that is why we define the
[02:25] cofactor so that we can
[02:26] get rid of the signs coming here
[02:29] ok so this is what we have studied so
[02:32] far
[02:33] so why did we um
[02:36] study the ijth minor or the ijth
[02:40] cofactor because it is not
[02:42] occurred so far so that is one of the
[02:44] things we will see in this video
[02:45] and we will also see some other
[02:48] properties of the determinant
[02:50] so why did we define the ijth minor or
[02:54] the ijth
[02:55] cofactor so the reason is because
[02:59] we had a formula for the determinant in
[03:01] fact the definition
[03:03] in terms of expanding for any row or
[03:06] any sorry with respect to the first row
[03:10] and now what we are going to see is that
[03:12] you can actually do this with any row or
[03:14] any column
[03:15] and there is nothing um
[03:18] very special about the first row
[03:22] okay so this is called expansion along
[03:23] any row or column
[03:25] ok so here's what happens when we
[03:28] do expansion along the i-th row
[03:32] so in that case we can write the
[03:34] expression for the determinant
[03:36] as the sum of the
[03:40] ijth entry of a times
[03:43] the ijth ah
[03:48] minor multiplied by minus 1 to the power
[03:50] i plus j okay
[03:52] so remember when when i was 1 that was
[03:55] the definition
[03:55] right so when i was 1 we had minus 1 to
[03:58] the power
[03:59] 1 plus j a 1 j m
[04:02] 1 j yeah so now what we are saying is we
[04:04] can replace that 1 by i
[04:07] and the formula works equally well okay
[04:10] so the expansion along the first row was
[04:12] the definition that we are going to use
[04:14] and what we are saying is it does not
[04:16] matter whether you use 1 there
[04:18] or any other row you can expand along
[04:20] any other row
[04:22] ok
[04:26] and the fact is you can even use a
[04:28] column
[04:29] to do the same thing so you can expand
[04:31] along any column
[04:32] so here notice that
[04:37] the j was what was varying and the i was
[04:39] fixed so this is expansion
[04:42] along the ith row
[04:51] and this is expansion so now
[04:56] the j is fixed
[04:59] and the i is varying
[05:04] ok here i is varying and j is fixed
[05:07] okay so that is expansion along the jth
[05:09] column okay
[05:11] so so maybe let's let's do
[05:15] an explicit expression let us write down
[05:18] one explicit expression here
[05:20] so suppose i have a three by three
[05:22] matrix and i want to
[05:24] expand along the second row okay
[05:27] so what is this term telling me so this
[05:30] is expansion along second row
[05:33] so this is saying what what you have to
[05:34] do is you have to take
[05:36] minus 1 to the power so now i is two
[05:40] and now j varies so minus one to the
[05:42] power two plus one
[05:43] times a two one times the
[05:46] two one at cofactor sorry the two one is
[05:50] minor
[05:52] plus minus 1 to the power 2 plus 2
[05:56] a 2 2 times the 2 to the minor
[06:00] plus minus 1 to the power
[06:03] 2 plus 3 a two three
[06:06] times the
[06:09] two three f minor ah my bad this should
[06:11] be
[06:12] two two ok so that is the expression so
[06:16] if you write it out concretely this is
[06:19] minus a two one times
[06:21] determinant of ah
[06:25] so you have to drop the second row and
[06:27] first column so you get a one
[06:29] two ah a one three
[06:34] a 3 2 a 3 3
[06:39] plus a 2 2 times determinant of
[06:45] [Music]
[06:47] a one one a one three a three one
[06:51] a three three minus
[06:55] ah a two three times determinant of
[07:00] um a one one a one
[07:04] two a three one
[07:07] a three two
[07:11] ok so i hope ah its clear what we mean
[07:13] by expanding along
[07:15] the ith row okay this is an example of
[07:18] how to do this you can do this for an n
[07:19] by n matrix also
[07:21] it's correct the proof is slightly
[07:25] involved i mean it's not hard but it it
[07:28] involves manipulation of
[07:30] a lot of expression so if you if you
[07:32] like your algebra i
[07:33] suggest you go ahead and let me do maybe
[07:36] a similar example for expansion along
[07:38] the second row
[07:39] sorry the second column okay so this is
[07:41] expansion along second column
[07:43] so what this is saying is that this is
[07:45] minus one to the power
[07:48] ah one plus two
[07:52] ah a one two
[07:56] times determinant of um
[08:02] a two one a two three
[08:05] a three one a three three
[08:09] plus minus one to the power two plus two
[08:12] a two two times a similar
[08:16] determinant i i encourage you to write
[08:18] this down
[08:19] plus minus one to the power two plus
[08:21] three
[08:23] [Music]
[08:24] ah sorry this is what the
[08:27] second column so my bad this is a
[08:30] three two times the determinant of
[08:33] the corresponding ah matrix you obtain
[08:36] namely
[08:37] so that is the minor okay so this is
[08:39] what we mean by
[08:40] expansion along any row or column and
[08:44] it's a fact that the determinant can be
[08:47] computed in any of these ways
[08:49] and it remains the same so there is no
[08:52] nothing special about the first row
[08:56] of the matrix that's how we define it so
[08:58] now that we have seen that
[09:00] the determinant can be computed in terms
[09:04] of
[09:04] any row or column meaning by expanding
[09:07] along any
[09:08] row or column ah we see that in
[09:11] particular there is nothing special
[09:12] about the first row
[09:13] and we see that the expression that we
[09:15] are getting there's some kind of
[09:16] symmetry about them
[09:18] but of course with some negative signs
[09:20] thrown in and so on
[09:22] ah okay so keeping that in mind let's uh
[09:26] now look at some properties of the
[09:29] determinant
[09:30] so we already saw in the first video
[09:33] that the determinant of a product
[09:36] is the product of determinants and
[09:40] we could do various operations on
[09:41] matrices and the determinant
[09:45] either remain the same or change sign so
[09:48] we did all of those for two by two and
[09:49] three by three matrices
[09:51] so let's see now what happens for uh the
[09:54] general case
[09:55] so i will make these statements but i
[09:57] won't really
[09:59] prove too many of these
[10:03] yeah okay so the first property that
[10:07] we want to look at is the product so the
[10:10] same thing that
[10:11] holds earlier uh that we saw earlier
[10:14] still holds namely that a determinant of
[10:17] a product is
[10:18] the product of determinants so what we
[10:21] mean by that is ah determinant of a b
[10:24] is determinant of a times determinant of
[10:27] b
[10:28] ah okay so
[10:32] we explicitly checked this when they
[10:35] were of
[10:36] size 2 by 2 and i i said you can try to
[10:39] check this for 3 by 3.
[10:41] if you did you must have seen that the
[10:43] expression start becoming
[10:45] rather complicated it's not difficult
[10:48] but
[10:48] you have to be careful with your algebra
[10:51] and
[10:52] so you can imagine that for three by
[10:54] three
[10:55] sorry beyond three by three if you uh
[10:59] [Music]
[11:01] work it out in terms of the explicit
[11:04] expressions
[11:05] it's going to be slightly hard
[11:07] [Music]
[11:09] so so i won't we won't really get into
[11:12] the proof of the statement
[11:14] but
[11:17] we have seen it for two by two and
[11:19] hopefully you have checked it for three
[11:20] by three so this is believable
[11:22] okay so let's use this instead and
[11:26] derive some interesting formulae so the
[11:29] first thing that
[11:30] we can do is we can ask if you
[11:34] take the
[11:36] [Music]
[11:37] power of a matrix of a square matrix of
[11:40] course
[11:41] namely you do a squared a cube take a to
[11:43] the power 4
[11:44] e to the power n in general
[11:47] then what happens to the determinant
[11:50] and what this identity tells you is that
[11:55] you can take this power out so
[11:58] determinant of
[11:59] e to the power n is determinant of
[12:03] a to the power n okay
[12:06] the second thing that you get out of
[12:09] this identity
[12:11] is if you take the determinant of the
[12:13] inverse
[12:14] then that's just the reciprocal of the
[12:17] determinant of a okay so i can
[12:19] [Music]
[12:20] write this in more fancy language as
[12:22] determinant of a
[12:25] to the power minus 1 right so
[12:28] the proof of this is exactly the same as
[12:31] we did for the 2 by 2 and 3 by 3 k so
[12:33] i'll
[12:34] suggest that you go back and look at it
[12:37] another
[12:38] very useful
[12:41] formula is that when you take
[12:44] determinant of
[12:44] p inverse a p ok so you
[12:48] have a matrix p you take its inverse
[12:52] um so a and p are both of size square
[12:54] matrices of size n by n
[12:56] and p has an inverse so you take
[12:59] determinant of
[13:00] p inverse ap then
[13:04] you can use this formula and the
[13:07] what we derived just above to get that
[13:11] the determinant is the same as the
[13:13] determinant of
[13:14] a and then another thing to note
[13:18] very easy fact remember that we saw
[13:21] that the product of two matrices need
[13:24] not be
[13:25] uh even defined if you
[13:29] don't if you take the opposite order and
[13:31] even if it is
[13:33] they may be of completely different size
[13:35] and even if they are of the same size
[13:37] a b and b a may not be the same but
[13:41] the determinant must be the same because
[13:43] the determinant is the product of
[13:45] determinants
[13:47] ok this is of course remember if a and b
[13:49] are of square matrices of size n
[13:52] okay and the final identity that maybe
[13:56] one can write down
[13:58] so determinant of a transpose
[14:01] um so
[14:06] so maybe before i even do this i should
[14:08] ask
[14:09] what is determinant of a transpose so
[14:11] determinant of a transpose
[14:14] ah so now given that
[14:17] we can expand along any row or column
[14:20] so for a transpose instead of expanding
[14:22] along the first row
[14:24] we expand along the first column yeah so
[14:27] expand along the first column
[14:32] okay so i'll say expand along
[14:35] first column
[14:39] so i strongly suggest you do this
[14:44] okay and if you do that
[14:47] the expressions you are going to get
[14:49] will
[14:50] allow you to conclude that this is
[14:53] determinant of
[14:54] a so i
[14:58] leave this to you so along with so i
[15:01] have i should
[15:03] use this so this plus
[15:06] what i call induction okay namely
[15:10] assume that this formula is correct for
[15:12] n minus 1 by n minus 1 matrices
[15:14] that the transpose of a matrix has the
[15:17] same determinant
[15:18] then expand along the first column and
[15:21] in the minus remember there are
[15:22] determinants of
[15:23] n minus 1 by n minus 1 matrices
[15:26] so think of those as transpose of
[15:30] something
[15:30] and you will see that you can you can
[15:34] equate these two expressions
[15:37] ok so once we know this uh determinant
[15:41] of a transpose is
[15:43] ah determinant of a so determinant of a
[15:45] transpose a
[15:47] is determinant of a squared okay uh this
[15:50] might not
[15:51] be very um seem very interesting right
[15:53] now
[15:54] but maybe at some later point you might
[15:58] find expressions of this type coming up
[16:03] okay so with this long list of
[16:05] interesting
[16:06] observations let's go on to
[16:09] another property so again we have
[16:12] checked this property for
[16:14] two by two and three by three matrices
[16:17] uh or rather i have checked it for two
[16:18] by two and i hope you have for three by
[16:21] three
[16:21] so switching to rows or columns changes
[16:24] the sign of the determinant
[16:30] so what do we mean by
[16:34] switching to rows of columns let me
[16:36] recall what that was so
[16:38] it is like this
[16:41] this is the ith row this is the
[16:45] jth row so this is a
[16:49] i 1 e i 2
[16:52] a i n this is a j 1
[16:55] a j 2 a j
[16:59] n so we
[17:02] switch these two rows to get this new
[17:04] matrix
[17:06] eight till so now its ith row will be
[17:10] aj1 ej2
[17:13] ajn this is the ith row
[17:17] of the of eighteen and the
[17:21] jth row will be a i one ai two up to a i
[17:24] n this is the jth row okay so we have
[17:27] switched these two columns
[17:28] rows and everything else in a tilde is
[17:31] exactly the same as it was for a
[17:33] yeah all the other entries are exactly
[17:34] the same okay
[17:36] so then determinant of eight
[17:41] is minus determinant of a okay how do we
[17:43] get this
[17:46] so the again the idea is
[17:50] [Music]
[17:51] expand along the ith row
[17:55] and then use induction so
[18:01] expand
[18:04] along its row
[18:11] and use induction
[18:16] okay so if you do that you will see a
[18:18] minus sign coming up
[18:24] fine uh
[18:29] okay let us move on to the next property
[18:31] that we want to
[18:34] discuss i should have said in the
[18:36] previous slide that
[18:38] similarly if you interchange columns
[18:42] you get the same result so adding
[18:45] multiples of a
[18:46] row to another row leaves the
[18:48] determinant unchanged okay so what does
[18:50] this mean
[18:51] so here's a which was
[18:54] like in the previous slide and uh
[18:58] what do they do so let's say i add
[19:01] t times the jth row to the ith row
[19:04] so then here i get a i 1 plus t
[19:08] times a j 1 a i
[19:11] 2 plus t times a j 2
[19:15] and so on a i n plus t times
[19:19] a j n okay and the j 3 remains the same
[19:22] a j 1 a aj2
[19:25] ajm okay so the only thing that has
[19:27] changed
[19:28] is the ith rule
[19:34] fine and what happens in that case so
[19:37] the
[19:38] claim is the determinant of a tilde is
[19:41] the same as the
[19:43] determinant of a
[19:50] so again one has to prove this so the
[19:53] proof is uh
[19:55] so one way of proving this is to
[19:58] um expand along the ith row
[20:04] and then you will get two different
[20:06] expressions one is just determinant of a
[20:08] and the other is a determinant of
[20:12] uh of a matrix
[20:16] which has two rows which are the same
[20:19] and then one will have to prove that
[20:21] that is
[20:23] zero okay so that's how you get this
[20:26] okay so one can do this also for columns
[20:29] so for columns let's say if i want to
[20:32] add the kth column to the
[20:33] left sorry
[20:36] t times the let's column to the kth
[20:38] column then
[20:40] we get
[20:42] [Music]
[20:44] a 1 k plus t times a 1 l
[20:47] a 2 k plus t times a 2 l
[20:52] and so on a n k plus t times
[20:55] a n l this is the new kth
[21:00] column okay
[21:02] and the same thing will work determinant
[21:05] of a
[21:06] double tilt is determinant of a
[21:10] okay so um
[21:14] adding multiples of a column to another
[21:15] column leaves the determinant unchanged
[21:20] fine so then um
[21:23] another property so again we have seen
[21:25] this for two by two and i left it to you
[21:27] to check for three by three
[21:28] if you multiply a particular row by a
[21:30] constant t
[21:31] then the determinant gets multiplied by
[21:33] t
[21:36] so the same thing holds for columns if
[21:39] you multiply
[21:40] a column by t then the determinant
[21:43] gets multiplied by t so what is this
[21:45] saying so you have your matrix a
[21:47] and let us say in a tilde you multiplied
[21:51] diathro by t so you have t a i 1
[21:54] t a i 2 and so on t a i
[21:58] n everything else is the same
[22:01] so then what you do is you
[22:04] expand using the ith row okay so if you
[22:08] expand using the ith row
[22:10] you get t times a i
[22:13] 1
[22:17] before that there's a minus sign which i
[22:19] should have
[22:20] included meaning sine i should have
[22:22] included
[22:25] so determinant of it so expansion along
[22:27] the ith row gives us
[22:29] summation minus 1 to the power i plus j
[22:33] j runs from 1 to n yeah so maybe let me
[22:36] do this proof so that you get an idea of
[22:38] how to
[22:39] prove such things so t times a i
[22:43] j
[22:46] m i j okay
[22:50] but now you can take t out and
[22:54] [Music]
[22:56] so you get minus 1 to the power i plus j
[22:59] a i j m i j
[23:03] so now so you have to be very careful
[23:05] here because
[23:06] when you write down the minus that with
[23:08] respect to
[23:10] a particular matrix so let me put this
[23:12] till here so this is the minor
[23:14] the ijth minor of the matrix
[23:18] a tilde okay so this is the ijth minor
[23:20] of the matrix 8
[23:22] but if you delete the ith row and
[23:25] whatever column then the
[23:28] remaining matrix remember a tilde and a
[23:31] have the same entries
[23:32] so m tilde i j for for this particular
[23:35] row i
[23:36] is the same as mij okay so this is just
[23:39] t times summation
[23:41] j is 1 through n minus 1 to the power i
[23:44] plus j
[23:45] a i j m i j where this is the ijth minor
[23:48] corresponding to the matrix a
[23:51] and now this is exactly the expression
[23:53] for the determinant of a okay so we have
[23:56] actually proved this
[23:58] fine so what is up short the upshot is
[24:00] that if you multiply a particular row by
[24:02] t then in the determinant it comes out
[24:05] okay the same thing holds for columns
[24:07] so i i'll suggest that you check this
[24:11] so that you will have to expand along
[24:13] columns
[24:14] okay so i'll also put in a warning here
[24:16] because this is something
[24:19] that often students make mistakes with
[24:25] so warning
[24:29] if you multiply the entire matrix by a
[24:31] constant
[24:33] remember that we have we have
[24:36] studied multiplying
[24:39] matrices by scalars so scalar
[24:42] multiplication of matrices that means
[24:43] you multiply each entry of that matrix
[24:46] by that scalar okay so if you do that
[24:49] and this is an
[24:49] n by n matrix so just to keep track of
[24:53] that this is an n by n matrix
[24:55] then this is like multiplying not just
[24:58] one particular row or one particular
[25:00] column by t
[25:01] but every row or every column by t okay
[25:04] so you will pick up a t in the
[25:07] determinant
[25:09] from each row so what you will get is t
[25:12] to the power
[25:13] n times determinant of a
[25:16] okay where what is this n this n is uh
[25:19] [Music]
[25:20] exactly
[25:24] uh the the size of a meaning the number
[25:28] of rows or number of columns in a
[25:30] okay so t to the power n times
[25:32] determinant of a yeah you won't get
[25:34] t times determinant of a right so be
[25:36] careful of
[25:37] of this property it says you multiply a
[25:40] row by a constant t
[25:42] then that t comes out in the determinant
[25:44] yeah if you multiply the entire matrix
[25:46] by t
[25:47] then t to the power n comes out of the
[25:49] determinant okay
[25:51] this is something students often make
[25:53] mistakes so be careful
[25:55] with this okay so finally let me end
[25:57] with some computational tips
[25:59] okay so if you have uh
[26:04] a zero row or a zero column in a matrix
[26:07] then the determinant is zero how do you
[26:09] get this you expand along that
[26:10] particular row or column
[26:12] okay the determinant of a matrix in
[26:14] which one row or
[26:16] column is a linear linear combination of
[26:19] the
[26:19] other rows respectively columns is 0.
[26:22] why is that because you can
[26:24] remember we can add multiples of a row
[26:26] to a
[26:28] another row and the determinant remains
[26:30] unchanged so you keep adding
[26:34] the correct expressions of the other
[26:36] rows to that particular row
[26:39] and you make it zero so once you make it
[26:40] zero remember the determinant remained
[26:42] unchanged and then
[26:43] you have a zero row or column and that's
[26:45] how you get that the determinant is zero
[26:49] so the second property we will be using
[26:51] later on
[26:52] so we'll come back to this if you didn't
[26:53] understand this the third one is what we
[26:56] just saw scalar multiplication of a row
[26:57] by a constant t multiplies the
[26:59] determinant by t and
[27:03] the fourth is a general sort of tip
[27:06] while computing the determinant you can
[27:08] choose to compute it
[27:09] using whatever row or column is most
[27:12] convenient yeah for example
[27:14] as we saw in the first thing here
[27:17] we used that row or column which is
[27:21] 0 okay so this is a general statement
[27:25] it may may be of use okay so what have
[27:28] we done in this video we have seen how
[27:29] to compute
[27:30] determinants first of all we define
[27:32] determinants for
[27:34] square matrices and then we saw that you
[27:36] can compute them
[27:38] using expansion along any row or column
[27:41] in terms of minors
[27:43] and then we used that to
[27:49] look at some other properties so most
[27:52] importantly
[27:52] determinant of a product is product of
[27:54] determinants yeah very important so keep
[27:56] this in mind
[27:57] and then we also saw that if you do some
[27:59] particular operations
[28:01] namely adding two rows meaning adding a
[28:03] multiple of one row to another
[28:05] or multiplying a particular row by a
[28:09] constant
[28:10] or swapping rows we saw how the
[28:12] determinant
[28:13] behaves so that's it for now
[28:16] in the next video we'll see how to use
[28:18] determinants to compute
[28:21] solutions to inverses sorry solutions
[28:25] to systems of linear equations
[28:32] you