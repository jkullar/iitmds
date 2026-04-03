# W1_L4: Determinants - part 1

**Week:** Week 1
**YouTube URL:** https://www.youtube.com/watch?v=A3fxp49I4U8

---

## Transcript

[00:00] [Music]
[00:14] today we are going to study
[00:15] meaning in this video we are going to
[00:16] study something called the determinant
[00:18] of a square matrix
[00:21] we will have two videos on this idea so
[00:23] in
[00:24] this video we will look at the
[00:26] determinant of small
[00:27] matrices so matrices of size one by one
[00:31] two by two and three by three and
[00:34] we will familiarize ourselves with some
[00:36] with how to compute them and
[00:38] ah some of the properties and in the
[00:40] next video we will see the more general
[00:42] version
[00:43] for any square matrix okay
[00:47] so every square matrix a we associate a
[00:50] number
[00:51] called the determinant of the ah square
[00:54] matrix
[00:55] so i i'll put in the kv at right at the
[00:58] start for this video and for the next
[01:00] whenever i talk about a matrix i mean a
[01:02] square matrix if i do not say it
[01:04] explicitly
[01:06] okay so how do we write this
[01:09] number called determinant we usually use
[01:11] the notation
[01:13] date so d e t of a or
[01:16] the notation mod of a so
[01:21] which is one of these two okay
[01:25] so why do we want to study this so this
[01:27] is a very important question that one
[01:29] should ask whenever
[01:30] we study any concept so determinants are
[01:33] going to
[01:34] be used in solving a system of linear
[01:38] equation
[01:40] in finding the inverse of a matrix
[01:44] and later on when we do vector calculus
[01:47] and
[01:48] later on when we do vector calculus and
[01:50] then there are many other
[01:52] uses it's a very very powerful concept
[01:55] and unfortunately we can't we won't be
[01:58] doing all those over here
[01:59] but it's a very very useful concept
[02:01] beyond these three uses
[02:03] okay so let's begin with the one by one
[02:07] matrix so when you have 1 by 1 matrix so
[02:10] a is it's a number with 2 brackets
[02:14] on the side so then the determinant is
[02:18] just that number
[02:19] it's just a yeah so if a is
[02:22] bracket a then determinant of a is the
[02:24] number a okay so nothing very
[02:27] great happening so far so let us look at
[02:29] the determinant of a two by two matrix
[02:32] ok so here is your two by two matrix i
[02:34] have written the entries
[02:35] a b in the first row and c d in the
[02:37] second row
[02:40] and how do we compute the determinant so
[02:42] we compute the determinant by
[02:44] looking at the diagonal so
[02:47] on the diagonal we have a and d so we
[02:49] multiply those
[02:51] and then we look at the non diagonal
[02:53] entries so we have b and c
[02:55] so we multiply those and then we
[02:56] subtract out
[02:58] dc from a d so determinant of a is a d
[03:01] minus
[03:02] b c okay the arrows here are very
[03:05] crucial
[03:05] so keep those in mind so let us do an
[03:08] example
[03:09] this is a just for a start
[03:13] so here is your matrix a which is 2
[03:16] 3 ten yeah it's a two by two matrix with
[03:19] those entries
[03:20] so what is determinant of a determinant
[03:22] of a is
[03:23] two times ten minus three times six so
[03:26] twenty minus eighteen
[03:28] which is two here's another example
[03:33] so 5 2 3 6 3 7
[03:39] so if you multiply the diagonal entries
[03:41] you get 15 by 7
[03:42] if you multiply those the other two
[03:44] entries
[03:45] you get two thirds times six which is uh
[03:48] two times two which is four
[03:49] so then we get determinant away is
[03:51] fifteen by seven minus four
[03:54] which is uh
[03:57] uh minus thirteen by seven so so 15
[04:00] minus 28
[04:01] by 7 which is minus 13 by 7
[04:04] okay so we know how to uh calculate the
[04:07] determinant of a
[04:09] 2 by 2 matrix let's move on to a 3 by
[04:13] three matrix
[04:14] so suppose we have a three by three
[04:16] matrix
[04:17] ah let us call it a and then now we will
[04:19] write the entries
[04:21] ah in the way we learnt in the matrix
[04:25] video so a one one a one two a one three
[04:28] a two one a two two a two three a three
[04:30] one a three two a three three
[04:33] ok so what is the determinant of a
[04:36] so we are going to obtain this in a very
[04:38] particular manner so
[04:40] we will say we will obtain the
[04:41] determinant by expanding with respect to
[04:43] the first row
[04:45] okay so what do we do in the first row
[04:47] we write these three
[04:49] new expressions
[04:52] so you can see a11 highlighted here and
[04:56] the entries in the first row and the
[04:58] first column
[04:59] have been
[05:03] deleted okay so it's not as bold as
[05:06] the others similarly for the
[05:10] next entry in the first row a12 we look
[05:14] at
[05:15] the entries other than the ones in that
[05:17] row and column so we do not look at the
[05:19] other two entries in the first row and
[05:21] we do not look at the other two entries
[05:22] in the
[05:23] first column sorry in the second column
[05:27] and similarly we look at a13
[05:32] and we neglect the entries in the first
[05:35] row
[05:35] and the third column okay so keep this
[05:38] picture in mind as we go ahead
[05:40] ok so what do we do with these entries
[05:43] ok so determinant of a
[05:45] is this rather strange looking
[05:48] expression
[05:49] it is a 1 1 times determinant of
[05:53] the two by two matrix that was left out
[05:55] in that first
[05:56] expression minus a one two times
[05:59] determinant of
[06:00] the two by two matrix that was left out
[06:03] in the second expression
[06:04] plus a one three times determinant of
[06:07] the
[06:08] two by two matrix which was left in the
[06:11] third expression
[06:12] okay so let us just work this out
[06:15] because now we know how to compute the
[06:17] determinant of two by two matrices
[06:19] so this is a one one times a two two a
[06:22] three three minus eight two three a
[06:24] three two
[06:24] minus a one two times a two one a three
[06:26] three minus a two three a three one
[06:28] plus a one three times a two one a three
[06:30] two minus a two two a
[06:32] three one and then we can expand the
[06:33] brackets and we get some
[06:36] ah rather nasty expression with
[06:40] six terms okay so this is the
[06:43] determinant of
[06:44] a ah let's see let's lets
[06:47] quickly recall from the previous
[06:50] page what we had
[06:54] those three expressions were and maybe
[06:56] we can
[06:58] rewrite these terms so this is what the
[07:02] expression
[07:05] for the first in the first expression
[07:08] look like
[07:09] similarly the second expression looked
[07:11] like this a one two and then a two one
[07:14] a two three a three one
[07:18] a three three and the third expression
[07:20] looks like
[07:23] a one three a two one
[07:26] a two two a three one
[07:30] a three two ok so you can see what
[07:32] happened
[07:33] we have dropped the
[07:39] entries over here
[07:42] and over here similarly here we have
[07:45] dropped the entries over here and
[07:47] in the rest of this row and
[07:50] we have dropped the entries over here
[07:52] okay fine
[07:54] so what is the point
[07:57] so the point is that the first
[07:59] expression over here
[08:02] this a one one is what is coming here
[08:04] and then this matrix
[08:07] is what is coming here and you compute
[08:09] this determinant
[08:11] similarly for the second expression you
[08:14] take this a one two
[08:15] that is what is coming here and this
[08:17] matrix
[08:19] so we move it so that it is a two by two
[08:20] matrix and we
[08:22] compute its determinant and that is what
[08:24] is coming here
[08:26] and then similarly a one three is coming
[08:29] here and this
[08:31] two by two matrix is coming here and you
[08:34] compute its determinant
[08:35] ok so remember ah
[08:39] very important that over here
[08:42] the first entry came with a plus sign
[08:45] the second entry came with a minus sign
[08:47] and then the third entry again came with
[08:49] a plus sign so it alternates
[08:50] okay these signs alternate this is a
[08:52] very important
[08:54] property ah that they alternate
[08:57] ah and this this is uh what is maybe at
[09:00] the heart of this definition
[09:02] okay so i hope you understood how to
[09:04] compute the determinant or how it is
[09:06] defined for a three by three matrix
[09:08] so let us do an example
[09:11] so here is an example ah so a is
[09:15] this matrix here two four one in the
[09:17] first row three eight seven in the
[09:18] second row and five six nine in the
[09:20] third row
[09:22] let's see how to compute it so the 2
[09:25] goes
[09:26] you first look at the first end the 1 1
[09:28] entry which is 2
[09:30] so that is over here then look at
[09:34] whatever is remaining when you drop
[09:37] everything else in that
[09:39] corresponding row and column so that's
[09:41] what came here
[09:42] and computed determinant multiply them
[09:46] then you look at this four
[09:49] this 4 came here very importantly with
[09:51] the negative sign
[09:53] you look at 3 5 and 7 9
[09:56] and that matrix is what comes here you
[09:58] take its determinant multiply them
[10:00] and then plus the third term
[10:04] which is you take this 1 here
[10:08] and then com take the matrix left out
[10:12] which is 3 5 8 6 after you drop
[10:15] everything else in the
[10:17] corresponding row and column to the one
[10:21] right and now we know how to compute
[10:22] determinants of two by two matrices
[10:25] so from there we will be able to compute
[10:28] this determinant so let us come
[10:29] complete the calculation so this is 2
[10:32] times determinant of
[10:34] this 2 by 2 matrix 8 7 6 9 so 9 times 8
[10:37] is 72 that is what we get in the first
[10:39] term here minus 7 times 6 is 42 that is
[10:42] what we get in the
[10:44] second term here similarly here we have
[10:46] minus 4 times determinant of
[10:48] 3 7 5 9 so that determinant
[10:52] works out to be 3 times 9 minus 7 times
[10:55] 5 which is
[10:56] 27 minus 35 and then plus 1 times
[10:59] determinant of
[11:00] 3 8 5 6 which works out to
[11:04] 6 3 times 6 minus 8 times 5 so that is
[11:07] 18 minus 40. so that is how you get this
[11:09] expression
[11:09] and the rest of it is a standard
[11:11] computation which if you
[11:13] complete you will get you should be
[11:15] getting 70.
[11:17] okay so i hope this this
[11:20] example uh explained to you how to
[11:23] compute the determinant in case
[11:24] you got lost in the previous expressions
[11:27] so it's a very simple
[11:28] calculation uh maybe the important
[11:32] question is why we are
[11:33] indeed interested in this and very soon
[11:38] in a couple of videos we will answer
[11:39] that question
[11:41] okay so let us look at some special
[11:43] determinants so
[11:44] remember that we had some special matrix
[11:47] called the identity matrix
[11:48] so that was a matrix which had one in
[11:50] the diagonal entries
[11:51] and zeros everywhere else ok so the
[11:54] identity matrix
[11:56] of size the 2 by 2 identity matrix
[11:59] that's 1 0 0 1 and what is its
[12:03] determinant
[12:04] it's 1 times 1 minus 0 times 0 which is
[12:07] 1
[12:08] ok now let us do the three by three
[12:09] determinant so maybe this one
[12:12] i will work out the details over here
[12:16] so for determinant of i three let us
[12:19] remember what we want
[12:20] how we got this expression so
[12:22] determinant of
[12:24] ah 3 was so look at the 1 1 term
[12:28] that's 1 times determinant of
[12:32] whatever you get after dropping
[12:34] everything else in
[12:35] that row and column so you drop these ah
[12:39] 0 0 and 0 0 when you write down this
[12:42] matrix
[12:43] so this is 1 0 0 1 aha so this is the
[12:47] 2 by 2 identity matrix okay and then
[12:50] you subtract out you take the 1 2 term
[12:55] and determinant of whatever you obtain
[12:58] after
[12:59] dropping that the first row and the
[13:03] second column
[13:04] so which is 0 0 0 1 you can see here we
[13:07] do not really need to
[13:08] do this computation because i have a 0
[13:10] times something but i am just writing
[13:12] down the expression
[13:13] and then plus you look at the 1
[13:16] 3 term which is again 0 times
[13:19] determinant of whatever you get after
[13:21] dropping the first row and the third
[13:23] column
[13:24] which is 0 1 0
[13:28] 0 okay this is the expression for the
[13:31] determinants
[13:32] and as we noted we don't really need to
[13:33] compute uh
[13:35] anything here because this is just 1
[13:38] times
[13:39] determinant of i2 the other two
[13:42] terms don't contribute in sync because
[13:44] they are 0s and determinant of i2 we
[13:46] have computed
[13:47] upstairs it's 1 so this is 1 times 1 is
[13:50] 1 okay so i hope this this
[13:54] showed you that the determinant
[13:56] calculation is really
[14:00] quite straight forward and the
[14:03] determinant is computed
[14:05] in a sort of inductive way meaning if
[14:07] you want to compute the determinant of a
[14:09] three by three matrix
[14:10] the computation reduces to determinants
[14:13] of a two by two matrix
[14:15] okay okay so this is an important idea
[14:18] which you should keep in mind as we
[14:19] go ahead fine
[14:22] ah so let us look at some properties of
[14:25] the determinant
[14:26] so now just to recall we know what is
[14:29] the determinant of a one by one matrix
[14:30] of a two by two matrix and of a three by
[14:33] three matrix
[14:34] ok so let us go ahead so suppose
[14:37] we have a product of matrices we know
[14:39] how to take the product of matrices
[14:41] so let us say we have two two by two
[14:43] matrices
[14:44] a and b so a is
[14:48] a b c d and b is e f g
[14:51] h okay
[14:55] so let's compute a times b a times b
[14:58] is a e plus b g a f plus b
[15:02] h c e plus d g and c f
[15:05] plus d h so this is obtained by
[15:10] multiplication of matrices as we have
[15:12] seen in the previous video
[15:16] okay let's compute what is the
[15:17] determinant of a times b
[15:19] okay so determinant of a times b by
[15:21] definition
[15:22] is you take the diagonal entries so
[15:24] that's ae plus bg
[15:27] times cf plus dh
[15:30] minus you take the product of the
[15:34] non-diagonal matrix so af plus bh
[15:38] times c e plus d g yeah so just to
[15:41] recall for you this was how it worked
[15:44] right
[15:45] ok so that is what we have done
[15:50] so now let us expand the brackets so if
[15:52] you expand the brackets you get a e
[15:53] times cf
[15:54] plus bg times cf plus ae times dh plus
[15:58] bg times dh minus af times ce minus bh
[16:02] times ce minus af times dg minus
[16:05] bh times dg yeah as you can see this is
[16:09] something you should probably try to all
[16:11] do on the side on your own
[16:13] ah these are other long expressions
[16:16] ok so let see what we get from there
[16:22] ah so what we get here is
[16:27] bg times cf plus
[16:32] ah
[16:35] yeah so there is some cancellation right
[16:37] so b g
[16:38] times c f plus a e times d
[16:41] h so what got cancelled ah
[16:44] the aecf got cancelled with the afce
[16:49] and then
[16:55] the
[16:58] bgdh got cancelled with the bhdg
[17:03] ok so we have four terms remaining in
[17:06] this expression
[17:07] so we get bg times cf plus ae times dh
[17:10] minus bh
[17:11] times ce minus af times dg
[17:16] ok so ah let's now
[17:21] put these terms in a particular way so
[17:23] we will write this as
[17:25] b c times f g plus a d times e h minus b
[17:28] c times e h
[17:29] minus a d times f g so what have we done
[17:32] we have taken the
[17:33] entries coming from a first and the
[17:36] entries coming from b
[17:37] next ok so you can see some terms are
[17:39] common here
[17:40] so let us take the common terms out so
[17:42] if you do that we are going to get
[17:44] a d minus bc times eh minus fg
[17:50] so the first term here is exactly
[17:52] determinant of a
[17:53] right ad minus bc and the second
[17:56] expression here
[17:57] is exactly determinant of b e h minus f
[17:59] g
[18:01] okay so what does this show this shows
[18:02] that if you take two two by two matrices
[18:05] and take the product then the
[18:08] determinant of the product
[18:09] is the product of the determinants okay
[18:11] determinant of a b is determinant of a
[18:13] times determinant
[18:14] of b okay and you can check that this
[18:16] works for three by three matrices as
[18:17] well
[18:18] so that is going to be a slightly longer
[18:22] argument with more expressions involved
[18:24] but it will work out exactly the same
[18:26] way okay so you will have to just play
[18:27] with more terms
[18:29] so i i won't explicitly show this but
[18:33] believe me on this or rather i would say
[18:35] work it out for yourself
[18:38] okay so let's go on and
[18:42] ask ourselves what is the determinant of
[18:46] the inverse of a matrix can i compute it
[18:48] from
[18:48] the determinant of a matrix we define
[18:50] the inverse
[18:52] using
[18:55] ah this
[18:59] identity so the inverse satisfies
[19:02] a times a inverses i the identity matrix
[19:06] and we can work out that a inverse times
[19:08] a is also i
[19:10] ok so now we want to talk about the
[19:13] determinant of the inverse
[19:14] so let us take determinant on both sides
[19:17] so if we do that
[19:19] we get determinant of a times
[19:24] a inverse is determinant of i
[19:27] but we just saw that the determinant of
[19:30] a product
[19:31] is the product of the determinants so
[19:34] determinant of
[19:34] a times a inverse is the same as
[19:37] determinant of
[19:38] a times determinant of a inverse ok
[19:42] and on the other hand determinant of the
[19:44] identity matrix we have computed to be
[19:46] 1.
[19:47] so what does this mean this means that
[19:50] determinant of
[19:52] a inverse is 1 by
[19:56] determinant of a yeah or i can
[20:00] write this in more more fancy way as
[20:04] determinant of a
[20:06] to the power minus 1 yeah so determinant
[20:09] of a inverse
[20:11] is the reciprocal of the determinant of
[20:13] a so it's 1 by determinant of a
[20:15] okay so so we know explicitly how to
[20:19] compute the determinant of the inverse
[20:21] from
[20:21] the determinant of a let us look at some
[20:24] properties
[20:25] of the determinant so let's see what
[20:28] happens if we switch two rows
[20:30] ok what does that mean so here here's a
[20:33] which is a b c d let's
[20:36] define a tilde by switching the first
[20:39] and the second row okay so what happened
[20:41] in a till you swap the first and the
[20:44] second row
[20:45] yeah so c d came first and then a b was
[20:47] next
[20:48] okay so that is a till so we have
[20:50] switched two rows
[20:53] let us compute determinant of a tilde so
[20:55] determinant of a tilde
[20:57] is c times b minus d times
[21:00] a which we can rewrite as minus of
[21:04] a d minus bc which is exactly
[21:06] determinant of
[21:07] a so this is minus determinant of a so
[21:09] what happened when we switched two rows
[21:12] we saw that the determinant of the new
[21:15] matrix
[21:17] was the same as the determinant of a
[21:19] except that it picked up an extra minus
[21:21] sign so it's minus of determinant of a
[21:23] what happens when we switch two columns
[21:25] so let's do that same computation with
[21:28] switching two columns
[21:35] so when we switch to columns
[21:38] ah so let us call it may be a tilt tilt
[21:42] so let us take the same matrix a and
[21:44] switch these two columns
[21:46] so we get b d a c
[21:49] and what is its determinant
[21:52] so its determinant is b c
[21:56] minus eight d
[22:00] yes and i think you can identify this
[22:02] expression
[22:03] this expression is exactly minus of a d
[22:06] minus b c which is minus of determinant
[22:09] of a
[22:10] ok so the statement for rows
[22:13] also holds for columns namely if we
[22:15] switch two columns
[22:17] the determinant of the new matrix is the
[22:20] same as the determinant of
[22:22] a with a minus sign okay
[22:26] and the same thing can be checked for a
[22:28] three by three matrix so
[22:31] this is also true
[22:38] for three by three
[22:42] matrices ok so i will leave that to you
[22:46] to check
[22:46] yeah it is a pretty easy check not not
[22:48] hard at all
[22:52] okay so let us look at another property
[22:55] if you add the multiple of a row
[22:59] to another row ok so what do we mean by
[23:01] that first of all
[23:02] so here is a you have is
[23:05] a b c d and a tilde is
[23:09] a plus t times c b plus t times d
[23:13] and then c d okay how did we get a till
[23:16] well
[23:17] the first row of a is a b
[23:22] so to this row we added t times the rho
[23:25] c d
[23:27] okay and what we got was a plus t
[23:30] c b plus t d
[23:36] so here the t
[23:39] times the second row was added to the
[23:40] first row so remember here that when we
[23:42] say multiples here
[23:44] they could be fractional multiples as
[23:46] well it need not be
[23:47] integer multiples okay
[23:50] okay so um let's see what happens to the
[23:54] determinant
[23:55] so let's compute determinant of a till
[23:57] so determinant of a tilde is
[23:59] a plus t times c times d
[24:02] minus b plus t times d times
[24:06] c and let us expand the bracket if you
[24:09] expand the bracket you get
[24:10] a d plus t times c d minus b c
[24:14] minus t times dc and
[24:17] you can see that the t times cd and the
[24:21] t times dc cancels out
[24:23] and we are left with a d minus bc which
[24:25] is exactly determinant of a
[24:27] okay so what happened if you added a
[24:29] multiple of one row to another row took
[24:32] that new matrix and computed its
[24:33] determinant
[24:34] you got back the determinant of a so the
[24:37] determinant does not change
[24:40] under this operation okay let's
[24:44] see what happens for columns so suppose
[24:47] i add
[24:48] t times the second column
[24:52] to the first column okay so a plus
[24:56] t times b a plus sorry
[25:08] ah c plus t times d
[25:12] and then this is still bd okay so now
[25:14] what have we done
[25:15] we have added t times the second column
[25:18] to the first column
[25:20] okay this is our new matrix a double
[25:22] tilt let's compute determinant of a
[25:24] double tilde
[25:27] so that is the product of the diagonal
[25:30] entry so a plus t b
[25:31] times d minus the product of the
[25:35] non diagonal entries which is b times c
[25:38] plus t times d so that
[25:42] gives us a d plus
[25:45] t times b d minus b c
[25:48] plus b times t d and you can see what is
[25:52] happening
[25:53] t times b d and b times t d are going to
[25:56] cancel ah i have
[25:57] incorrectly put a sign this should be
[26:00] minus
[26:04] yeah ah sorry so now what we get
[26:08] here is a d minus b c which is exactly
[26:11] determinant of
[26:13] a okay so what happened if you added
[26:17] a multiple of one column to another
[26:19] column
[26:20] then the new matrix obtained has the
[26:22] same determinant as the
[26:25] original matrix okay so under this
[26:27] operation
[26:28] the determinant remains unchanged okay
[26:30] and you can check this
[26:32] for three by three matrices
[26:36] okay so the same
[26:41] results ah will work
[26:45] okay and finally let us look at what
[26:48] happens
[26:49] when we multiply a row by a constant t
[26:53] okay so suppose a is a b c d and suppose
[26:56] we
[26:57] multiply ah so i think i made a mistake
[27:00] in the
[27:02] example so here we are multiplying a
[27:05] column and not a row so suppose we
[27:08] multiply this column by
[27:09] t so
[27:12] we get a t b c t d
[27:16] okay so let us find out what the
[27:18] determinant of a tilde is so determinant
[27:20] of a tilde is
[27:21] a times t d minus t b times c
[27:25] which is if you take t common so t times
[27:28] a d minus b c
[27:29] so this is exactly t times determinant
[27:32] of a
[27:33] okay and now let us do what we
[27:36] originally
[27:36] intended to do as in the title so
[27:39] suppose a double tilde is
[27:43] t times a t times b
[27:46] c d ok
[27:50] so in that case determinant of a double
[27:52] tilde
[27:55] is t times a times d minus
[27:58] t times b times c you can take the t
[28:01] common
[28:02] so you get t times a d minus b c which
[28:05] is t
[28:06] times determinant of a
[28:09] ok so what have we shown we have shown
[28:12] that if you multiply
[28:13] a particular row meaning every entry of
[28:15] that row by
[28:16] some constant t or you take some column
[28:19] and multiply every entry of that column
[28:21] by some constant t
[28:23] then you compute the determinant of this
[28:25] new matrix
[28:27] then the determinant of the new matrix
[28:29] is t times determinant of the original
[28:31] matrix okay
[28:32] and again you can check that the same
[28:34] thing happens
[28:38] so same results hold for
[28:41] three by three matrices
[28:48] fine so we have seen some properties of
[28:50] the determinant so
[28:52] let us quickly recall what we did today
[28:55] we have defined something called the
[28:57] determinant for square matrices of size
[29:00] one by one two by two and three by three
[29:02] ah we saw that for the three by three
[29:05] case they were defined
[29:06] by using what was the definition for the
[29:09] two by two case yeah so some kind of
[29:10] inductive definition that's what we'll
[29:13] call it
[29:15] and then we saw some properties very
[29:18] important property was that
[29:19] if you take the product of two matrices
[29:22] then the determinant of
[29:23] that product is the product of the
[29:24] determinant so determinant of a b is
[29:26] determinant of a times determinant of b
[29:28] then we saw the inverse of a matrix has
[29:31] determinant inverse of the
[29:33] the reciprocal of the determinant of a
[29:36] and then we saw some other properties
[29:38] which the determinant satisfied namely
[29:41] if you multiply a row by a constant or a
[29:43] column by a constant that constant comes
[29:45] out of the determinant
[29:47] if you add a multiple of one row to
[29:49] another or one column to another
[29:50] then the determinant is unaffected and
[29:53] if you swap
[29:54] rows then the determinant picks up a
[29:56] minus sign
[29:58] okay so with that i think we'll end this
[29:59] video thank you