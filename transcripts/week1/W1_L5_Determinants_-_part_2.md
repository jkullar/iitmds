# W1_L5: Determinants - part 2

**Week:** Week 1
**YouTube URL:** https://www.youtube.com/watch?v=wejxX0YYYg4

---

## Transcript

[00:00] [Music]
[00:14] hello and welcome to the
[00:16] max 2 component of the online bac
[00:18] program
[00:19] on data science today's video is on
[00:23] determinants this is the second part of
[00:26] the videos on determinants
[00:29] let's recall first what we did in part
[00:31] one so recall from part one
[00:34] that we defined the determinant of an of
[00:37] a one by one matrix
[00:38] so if a is singleton a then determinant
[00:42] of a is just that number a
[00:45] if a is the two by two matrix abcd
[00:48] then determinant of a is a d minus b
[00:51] c you multiply the diagonal terms
[00:55] and subtract out the off diagonal terms
[00:59] and if you have a 3 by 3 matrix
[01:02] then we defined the determinant by
[01:06] what we call expanding with respect to
[01:08] the first row
[01:10] so what that meant was you take the
[01:12] first the one one entry of the
[01:14] first row the first entry of the first
[01:16] row
[01:17] and then disregard everything in the
[01:19] first row and the first column
[01:22] you get a two by two matrix remaining
[01:24] take its determinant and multiply that
[01:26] with a 1 1
[01:28] that is the first term for the second
[01:30] term you look at a 1 2
[01:31] and do the same process disregard
[01:33] everything in the first row and the
[01:35] second column
[01:36] multiply the determinant of the
[01:38] resulting 2 by 2 matrix with a one two
[01:40] and for the third term
[01:43] you look at a one three disregard
[01:45] everything in the first row and the
[01:46] third column
[01:48] take the determinant of the resulting
[01:50] two by two matrix
[01:52] and multiply it with a one three and
[01:55] then
[01:55] you alternately add these meaning take
[01:58] the first expression minus the second
[02:00] expression
[02:01] plus the third expression so that was
[02:03] the determinant of a
[02:05] so the determinant of the three by three
[02:07] matrix was defined in terms of
[02:08] determinants for two by two matrices
[02:11] and then we can expand this out we can
[02:13] ah
[02:15] work out explicitly what the expression
[02:17] is and you get some
[02:19] rather long and nasty six term
[02:21] expression
[02:24] okay so let us do an example just to
[02:27] refresh ourselves maybe a 3 by 3 example
[02:30] so here is a 3x3 matrix 243087009
[02:36] so maybe i i should mention that such a
[02:38] matrix is called an upper triangular
[02:39] matrix
[02:41] because it has zeros below the diagonal
[02:46] ok so let us compute its determinant so
[02:48] determinant of a is two times
[02:50] the matrix eight seven zero nine which
[02:53] is what's remaining if you
[02:55] disregard everything in the first row
[02:56] and column minus four times determinant
[02:59] of
[02:59] zero seven zero nine plus three times
[03:02] determinant of zero 8 0 0
[03:04] okay and then if we work out what these
[03:07] are
[03:08] using the determinants of 2 by 2
[03:09] matrices we will get 2 times
[03:12] 8 times 9 minus 7 times 0 which is 72
[03:15] minus 0
[03:16] minus 4 times 0 minus 0
[03:20] plus 3 times 0 minus 0
[03:25] so this is just 2 times 72 minus
[03:28] 4 times 0 plus 3 times 0 which is just 2
[03:31] times 72 which is 144
[03:33] and i'll ask you to notice something
[03:37] important which is that this is 2 times
[03:39] 8 times 9
[03:40] which is exactly what we have on the
[03:43] diagonal
[03:44] so these are the diagonal entries over
[03:46] here and
[03:47] that's what we got so the determinant of
[03:50] this matrix a
[03:51] is the product of the diagonal entries
[03:54] so i hope you followed both the
[03:56] computation and the fact that its
[03:58] the product of the diagonal entries so
[04:00] this is not some
[04:03] fact specific to this example this is a
[04:06] general fact for what we call
[04:08] any upper triangular matrix or any lower
[04:10] triangular matrix
[04:12] so for such matrices the determinant is
[04:14] the product of the diagonal
[04:16] elements so i just quickly ah recall
[04:19] what is an upper triangular matrix ah as
[04:22] i said in the beginning
[04:23] so an upper triangular matrix means
[04:29] if you so this is a general matrix of
[04:31] size n by n
[04:34] so this is called upper triangular if
[04:37] you look at the diagonal and everything
[04:40] below the diagonal is zero so all these
[04:42] entries are zeros
[04:44] ok so we are going to write this as
[04:48] a i j is zero
[04:51] if i is greater than j
[04:55] right so if the matrix satisfies this
[04:58] property it is an upper triangular
[04:59] matrix and this is how it looks like
[05:01] similarly so then so this is upper
[05:04] triangular
[05:05] so similarly we have lower triangular so
[05:08] lower
[05:10] triangular matrix
[05:14] so this is again n by n that is if a i j
[05:17] is 0
[05:19] if now this time i is strictly less than
[05:23] j
[05:23] okay so how does that look like
[05:27] oops not a table but a matrix
[05:35] so this part must be zero ok and these
[05:38] these elements can be anything
[05:40] ah that any
[05:43] numbers okay so for such matrices
[05:47] the determinant is the product of
[05:51] the diagonal elements yeah so of course
[05:53] we know this only for three by three
[05:55] and i'll suggest that you check this for
[05:58] three by three and two by two matrices
[06:00] okay so let's move on ah to
[06:04] a special kind of matrix
[06:07] ah namely if you have a matrix then its
[06:10] transpose
[06:11] so let us define the transpose and
[06:12] compute its determinant
[06:14] so in general if you have an m by n
[06:16] matrix
[06:18] the ah transpose of
[06:22] this matrix is a new matrix
[06:25] of size n by m so it has n rows and
[06:28] m columns so remember the first one had
[06:29] m rows and n columns a and
[06:31] m rows in columns so a transpose has
[06:34] n rows and m columns and its ijth entry
[06:38] is aji okay so the ijth entry of a
[06:42] transpose
[06:43] is whatever was the gif entry of a
[06:47] ok ah so just
[06:52] so this is the notation it is called a
[06:54] superscript t
[06:56] so t is for transpose and its definition
[06:58] as we noted is
[06:59] a transpose i j is aji
[07:03] so just for example if a is a 3 by 3
[07:07] matrix
[07:08] then a transpose is again 3 by 3. so
[07:12] square matrices the transpose has the
[07:15] same size it is also a square matrix of
[07:16] the same size
[07:18] and what happens to the entries so if a
[07:20] is like this a 1 1 a 1 2 a 1 3 and so on
[07:23] then a transpose is a 1 1
[07:26] 8 2 1 a 3 1 a 1 2
[07:31] 8 2 2 a 3 2 a 1 3 8 2 3 8 3 3. so ok so
[07:35] what happened here
[07:36] this these two entries got interchanged
[07:40] these two entries got interchanged these
[07:42] two entries are integer so the diagonal
[07:44] remains the same
[07:45] okay so it reflects about the diagonal
[07:48] if if you prefer a more geometric
[07:50] way of thinking about it okay so that's
[07:52] what happens
[07:54] in the transpose okay so what do we want
[07:56] to do now we want to compute what is the
[07:58] determinant of the transpose
[08:00] so let's work this out so determinant of
[08:03] a transpose
[08:04] so we have a clear formula for the
[08:07] determinant so let us use that
[08:09] so we look at the 1 1 term of a
[08:12] transpose
[08:13] and we multiply by the determinant of
[08:15] what's left when we drop the first row
[08:17] and column
[08:18] and minus the 1 2 term of the
[08:21] transpose times determinant of whatever
[08:24] is left when we drop the first row and
[08:27] ah second column of a transpose
[08:30] and plus the 1 3 term of a transpose
[08:33] times determinant of whatever is left
[08:35] when you drop the first row and the
[08:36] third column of
[08:38] a transpose ok so if we do that then
[08:41] this is exactly the expression we get
[08:43] and now we can work out explicitly what
[08:46] happens
[08:46] and you will see that the final
[08:47] expression you get is just some
[08:52] ah
[08:54] is just the same as the expression for
[08:56] determinant of a except that the
[08:58] terms have changed places but it is the
[09:01] same expression
[09:02] so this is just determinant of a so what
[09:05] is the upshot if you take the transpose
[09:07] of a square
[09:08] matrix then its determinant remains
[09:10] unchanged
[09:11] okay and we have in fact proved this in
[09:14] the three by three case i'll
[09:16] request that you do it for the two by
[09:18] two as well one by one there's of course
[09:20] nothing to do
[09:22] ok so now let us move on to minors and
[09:24] cofactors so this is a very important
[09:26] idea and this is what is going to help
[09:28] us to generalize the determinant
[09:30] to the n by n
[09:34] situation meaning where the size of the
[09:35] square matrix is n by n
[09:38] ok so now suppose a is an n by n square
[09:41] matrix where n
[09:42] is at most four okay we will do it in
[09:45] this particular case
[09:46] so n is so either it's a two by two
[09:48] matrix or a three by three matrix or a
[09:50] four by four matrix
[09:52] okay then the minor of the entry in the
[09:54] ith row and jth column
[09:56] is the determinant of the sub matrix
[09:57] formed by deleting the ith row and the
[10:00] jth column
[10:00] okay so we have been doing this process
[10:02] in computing the determinant
[10:04] right so to compute the determinant of
[10:06] the 3 by 3 matrix
[10:09] for the first expression
[10:12] in the in the determinant we take a 1 1
[10:14] times
[10:15] determinant of the 2 by two matrix which
[10:18] is obtained by
[10:19] deleting the first row and first column
[10:21] okay so now we are talking about
[10:23] just that part okay just that operation
[10:25] so you look at
[10:26] the ith row and the jth column and you
[10:29] delete those
[10:30] and then you get a matrix of size n
[10:32] minus 1 by n minus 1
[10:34] ok and then you look at its determinant
[10:37] okay
[10:37] so now this makes sense because we have
[10:39] defined determinants for
[10:41] 2 by 2 1 by 1 2 by 2 and 3 by 3 matrices
[10:45] okay so if you take a matrix of size
[10:47] four by four
[10:49] and you delete the ith row and the jth
[10:51] column you will get matrix of
[10:53] size three by three and then you take
[10:55] its determinant
[10:56] okay so this is called the ijth minor
[10:59] and its
[10:59] denoted by mij so here is an example
[11:03] ah i said a lot of words so here is a
[11:06] explicit example
[11:07] ah so if a is a three by three matrix as
[11:10] written here
[11:11] a one one a one two a one three a two
[11:14] one a two two a two three and a three
[11:15] one a three two a three three
[11:17] then the one one minor the one one h
[11:20] minor
[11:21] is nothing but determinant of a two two
[11:23] a two three a three two a three three
[11:26] okay so this is what you obtain by
[11:27] dropping the first row and first column
[11:29] this is exactly
[11:30] the kind of operation we have been using
[11:33] in computing determinants
[11:35] by expansion along the first
[11:38] row ok and
[11:43] let's go ahead and first define
[11:46] what is the ijth cofactor so the ijth
[11:48] cofactor is
[11:49] where you take the ijth
[11:54] minor and multiply it by a minus 1 to
[11:56] the power i plus j
[11:59] okay why is the sign coming so as we saw
[12:01] in the
[12:02] expression for the determinant there was
[12:05] an alternating sign
[12:06] right the first term was with a plus
[12:10] then you subtracted the second term then
[12:11] you added the third term yeah so so
[12:13] it was alternating so somehow this minus
[12:16] one to the i plus j is supposed to take
[12:18] care of that sign
[12:19] okay that is why we have the sign over
[12:22] here okay
[12:24] so it's the same number but but it could
[12:26] be with a minus sign
[12:27] depending on what is i and what is j
[12:30] okay so for example c one one
[12:33] is just minus one to the power one plus
[12:35] one which is minus one to the power two
[12:37] so minus one squared is one
[12:39] times m one one so it's minus one square
[12:42] times m one one
[12:43] which is just m one one okay so as a
[12:46] similar
[12:48] in similar light if we have c two three
[12:51] then this is minus one to the two plus
[12:54] three
[12:55] times m two three but now two plus three
[12:58] is five which is odd so minus one to the
[13:00] power five
[13:01] is minus one so this is minus m two
[13:04] three
[13:05] ok so it depends on what is i and j
[13:07] accordingly we will pick up a minus sign
[13:12] so i hope it is clear what the
[13:16] what cofactors and minors are
[13:19] so let us now try to rewrite the
[13:21] determinant in terms of
[13:23] minus and cofactors ok
[13:27] so for a three by three matrix so we
[13:30] have determinant of a is
[13:31] this is expansion along the first row
[13:33] this is the definition
[13:35] a11 times determinant of the matrix
[13:38] obtained by
[13:39] deleting the first row and column aha
[13:42] and then you take its determinant
[13:43] but that's exactly what we called the
[13:46] minor
[13:46] right and then minus a one two times
[13:48] determinant of
[13:50] a two one a two three a three one a
[13:52] three three so you deleted the first row
[13:54] and second column
[13:55] and then took the determinant but that
[13:56] is exactly what what we call the one two
[13:59] with minor
[14:00] and then similarly for the third term
[14:04] so we can rewrite it now in terms of our
[14:07] minus as a one one times m one one
[14:10] minus a one two times m one two plus a
[14:13] one three times
[14:14] m one three ok so we are just rewriting
[14:18] these determinants
[14:20] ah as minus this this was the definition
[14:22] if you remember from the previous slide
[14:25] okay and then if i want to take care of
[14:27] this sign right there is a minus sign
[14:29] here
[14:29] and i want to write everything as a plus
[14:32] so then i can rewrite this as
[14:34] a one one times the one one with
[14:36] cofactor plus a one two times the one
[14:38] two with cofactor plus a one three times
[14:40] the
[14:40] one three cofactor okay so that is why
[14:43] we introduce cofactors if we want to
[14:45] not re remember the signs then we
[14:48] will take care of those signs using the
[14:50] cofactors okay so this is
[14:53] the expression for the determinant of a
[14:57] three by
[14:58] three matrix in terms of the minors
[15:01] and remember the minors meant we or the
[15:03] cofactors
[15:04] the minors meant that you compute
[15:07] determinants of
[15:08] two by two matrices ok
[15:11] so now we can go
[15:14] beyond so maybe first we should remark
[15:17] that
[15:18] this formula works even for a two by two
[15:20] matrix
[15:21] so if you take a two by two matrix ah
[15:24] say
[15:24] say abcd then the determinant is
[15:27] a d minus b c so we can rewrite that as
[15:30] a times m one one minus b
[15:34] times m one two right so c is exactly
[15:38] ah m one two and d is exactly m one one
[15:42] or if you want a plus sign then we can
[15:44] write it as a times c one one plus b
[15:46] times c one two
[15:47] ok so check this so now we can use this
[15:52] to generalize
[15:53] beyond n is three so let's generalize
[15:55] this to a four
[15:56] by four so suppose you have a four by
[15:58] four matrix now
[16:00] then how do we define the
[16:03] ah determinant so the determinant is
[16:06] this is expansion along the first
[16:08] row so the determinant is
[16:11] you take minus 1 to the power 1 plus j
[16:15] because we have the first row here
[16:18] a 1 j times m 1 j yeah this is
[16:22] exactly the expression that we have up
[16:25] here
[16:25] right this is exactly this expression
[16:27] here yeah except that this is for 3 by 3
[16:30] i am writing the same expression for 4
[16:32] by 4.
[16:34] and if you want to take care of the
[16:36] signs not bother about the signs
[16:38] then you can write it just as a sum of a
[16:41] one j
[16:42] times the corresponding cofactor for the
[16:45] one jth
[16:46] term ok so let us
[16:49] maybe write this expression down
[16:51] explicitly so
[16:53] what does this mean this means that the
[16:55] determinant of
[16:56] so for a four by four matrix so a one
[17:00] one times determinant of
[17:03] whatever you you get after dropping the
[17:05] first row and the first column
[17:07] so a 2 2 sorry yeah a 2 2 a 2
[17:11] 3 a 2 4
[17:14] a 3 2 a 3 3
[17:18] a 3 4 and then a
[17:23] 4 2 a 4
[17:26] 3 a 4 4 right that's your first
[17:29] expression
[17:31] the first term in this sum and then
[17:33] minus
[17:35] a one two and i will maybe write one
[17:38] more term
[17:39] sorry there should be a determinant here
[17:41] ah determinant of
[17:44] ah so now we drop the first row and the
[17:47] second column
[17:48] so now we get ah
[17:50] [Music]
[17:51] a 2 1 a 2 3 a
[17:55] 2 4 a 3 1
[17:58] a three three a three four
[18:01] and then a four one a four three
[18:05] a four four ok that is the second term
[18:08] in this expression
[18:09] and note we have a minus sign here and
[18:12] then plus
[18:12] a one three and i hope now you can write
[18:14] down these two determinants
[18:15] so check out what this is and then minus
[18:19] a one four times determinant of
[18:23] whatever we get here yeah ok so check
[18:25] these two terms see see if you can write
[18:26] down these two terms
[18:28] ah that will mean you have understood
[18:30] what is going on so what is the point
[18:31] here
[18:32] the point is we could write the
[18:34] determinant of a we defined it
[18:36] this is a four by four matrix in terms
[18:39] of
[18:39] determinants for three by three matrices
[18:42] right so
[18:43] in other words if i know how to define
[18:45] the determinant for a
[18:46] matrix of smaller size then i can sort
[18:49] of use this process inductively and
[18:51] generalize
[18:52] okay and that is exactly what we do so
[18:55] here's the inductive definition of the
[18:57] determinant so suppose you have a matrix
[18:59] of size n by n
[19:01] and we know how to define determinants
[19:03] for size n minus one so n minus one by n
[19:05] minus one matrices we know how to define
[19:07] the determinant
[19:08] ok so then we will define miners and
[19:11] cofactors as before
[19:14] so what does that mean the ijth minor is
[19:16] the determinant of the sub matrix formed
[19:18] by deleting the i throw in the jth
[19:19] column right so we delete the ith row
[19:21] and the jth column
[19:23] we get a matrix of size n minus 1 by n
[19:25] minus 1
[19:26] and we look at its determinant that is
[19:29] called the ijth minor
[19:31] okay this makes sense because we have
[19:34] assumed that we know how to define
[19:36] matrices sorry determinants for n minus
[19:39] 1 by n minus 1 matrices
[19:41] ok and then if you want to ah
[19:44] again we are going to do something
[19:45] similar to what we did earlier so if you
[19:47] do not want to bother about science
[19:49] going ahead you define the ijth cofactor
[19:52] as minus 1 to the power i plus j times
[19:55] the
[19:56] ijth minor and then we define the
[20:00] determinant of a as the again this is by
[20:03] expansion along the first row
[20:06] as minus 1 to the power 1 plus j now the
[20:08] sum runs from 1 to n because remember
[20:10] there are n
[20:11] entries in the first row so minus 1 to
[20:13] the power 1 plus j
[20:15] a 1 j times m 1 j and again if you do
[20:18] not want to bother about signs
[20:20] and you just want a simple sum
[20:25] then you absorb that sign into the minor
[20:28] and you can write it in terms of
[20:29] cofactor so summation a1j
[20:32] c1j okay so maybe let us
[20:36] write down this expression let me write
[20:39] down the first term
[20:40] so now suppose let us say i have a
[20:45] n by n matrix so this determinant of a
[20:47] is
[20:48] a 1 1 times determinant of whatever you
[20:52] get
[20:52] by deleting the first row and the first
[20:55] column
[20:56] so you will get a 2 2 a 2 3 and it will
[20:59] run all the way till
[21:00] a to n ok and then below you will have
[21:04] a three two a three three and all the
[21:07] way up to a three n
[21:08] and if you complete this you get up go
[21:11] all the way up to a n n
[21:12] ok and then the second term is going to
[21:14] be minus
[21:16] a one two times determinant of
[21:20] a one ah sorry not a one
[21:25] a two one a two three and then
[21:29] you keep going up till a to n and then
[21:32] you have a three one
[21:33] a three three going up till a three n
[21:37] and you keep doing this here you will
[21:38] get the first column here you will get
[21:41] the
[21:41] ah third column meaning all the entries
[21:44] remaining in third column
[21:46] and here you will get the nth column
[21:50] and then you keep going right you have a
[21:52] 1 2 then you have a 1
[21:53] 3 times determinant see if you can write
[21:56] down this term
[21:58] and then minus a 1 4 times some
[22:01] determinant
[22:02] and note what is happening these
[22:04] determinants are of smaller size
[22:05] okay so now if i want to do this for a 5
[22:08] by 5 matrix
[22:09] i will need to compute of the
[22:12] determinant of a four by four matrix but
[22:14] i know how to do that
[22:15] okay which means i now know how to
[22:16] compute the determinant of a
[22:18] five by five matrix ah but then i can
[22:20] use the same
[22:22] inductive definition and go for a six by
[22:24] six matrix
[22:25] and then using six by six to seven by
[22:26] seven and then so on
[22:28] to eight by eight and then using that to
[22:30] nine by nine and you can see that
[22:33] inductively for any number i can
[22:36] i can do this process ok so that that's
[22:39] the idea of the determinant
[22:40] so this is a very complicated looking
[22:43] definition
[22:44] uh and um
[22:48] yeah it's it's kind of a quirk that it's
[22:50] indeed very useful i
[22:51] in fact i can't emphasize how useful you
[22:54] will see it
[22:54] later when we solve equations and later
[22:57] on when we do vector calculus
[22:59] ok so
[23:03] may be as a as a as a
[23:06] as an example let us compute the
[23:08] determinant of the
[23:09] identity matrix of size n okay
[23:15] so remember the identity matrix had one
[23:19] on the diagonal so and everything else
[23:22] is zero
[23:23] ok so i am this is shorthand to say that
[23:25] everything else is zero
[23:29] ok so let us use the definition so by
[23:33] definition
[23:34] this is one times determinant of
[23:36] whatever
[23:37] the one one is minor okay one times the
[23:41] one one is minus so determinant of you
[23:44] drop the first row and first column
[23:46] so you get ones on the diagonal and zero
[23:47] is on the off diagonal ah so this is
[23:49] again
[23:50] a identity matrix of size n minus 1 by n
[23:53] minus 1
[23:56] and then minus 0 times
[23:59] the 1 2 minor
[24:02] but i do not want to i do not really
[24:04] care about computing it because it is 0
[24:06] times something it is going to be 0
[24:07] anyway
[24:08] plus 0 times the
[24:14] 1 3 minor and so on so all these terms
[24:17] are going to be 0 because
[24:18] in the rest of the first row all the
[24:21] terms you have are 0
[24:22] so what do you get
[24:26] you are left only with 1 times
[24:29] determinant of
[24:30] the identity matrix of smaller size
[24:33] okay so determinant of i n is ah
[24:38] determinant of i n
[24:41] minus 1 that is what we obtained in by
[24:44] this process
[24:45] okay and then i can keep doing this
[24:47] right so this is determinant of i n
[24:49] minus 2 and so on so the correct way of
[24:50] doing this is what is called
[24:52] induction and doing this will reach all
[24:55] the way down till
[24:58] maybe i 3 which in in or i 2
[25:02] whichever you prefer and both of these
[25:04] we computed in the previous video to be
[25:06] 1.
[25:07] so let us recall what we have done in
[25:08] this video we started by
[25:10] defining recalling the definition of the
[25:13] determinant for the one by one two by
[25:14] two and three by three cases
[25:17] and we saw that for the four by four ah
[25:20] matrix we can define the determinant by
[25:23] using the three by three
[25:25] ah definition right because we can do
[25:27] that for the three by three
[25:29] using the two by two and for the two by
[25:30] two using the one by one
[25:32] so it follows that for the four by four
[25:34] we can use a three by three definition
[25:36] and then we generalize this to the n by
[25:38] n matrix
[25:39] so we said that if we can define the
[25:42] determinant for n minus 1 by n minus 1
[25:44] matrix
[25:45] then we can define it for an n by n
[25:46] matrix so this is called the inductive
[25:48] definition of the determinant
[25:50] and finally we have computed we did one
[25:53] example
[25:54] which was we computed that the
[25:56] determinant of the identity matrix
[25:59] of any size ah three by three four by
[26:02] four
[26:03] five by five ten by ten any n by n
[26:06] is one thank you