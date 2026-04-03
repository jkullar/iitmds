# W2_L5: Row reduction

**Week:** Week 2
**YouTube URL:** https://www.youtube.com/watch?v=ECRhKDTUxM8

---

## Transcript

[00:00] [Music]
[00:14] hello and welcome to the match 2
[00:16] component of the online bsc course on
[00:18] data science
[00:19] in this video we are going to study
[00:20] something called row reduction
[00:23] so if you remember what we did last
[00:26] video we looked at the row echelon form
[00:28] we looked at
[00:29] when matrices are in row echelon form
[00:33] and we saw that it's easy to solve
[00:35] equations
[00:36] when the coefficient matrix is in row
[00:38] echelon form
[00:39] so what we're going to do in this video
[00:42] is to
[00:43] somehow see if we can reduce matrices
[00:47] into the reduced row etched lawn form
[00:50] okay so what are the contents of this
[00:53] video
[00:54] what are elementary row operations we
[00:56] have actually seen this before when we
[00:58] study determinants
[00:59] but we are going to formalize them uh
[01:01] reducing any matrix to reduce storage
[01:03] long form
[01:04] using elementary row operations and then
[01:07] computing the determinant this is an
[01:09] application
[01:10] using row reduction so this technique of
[01:12] reducing is called row reduction
[01:14] and one application we'll give in this
[01:16] video is we'll compute the determinant
[01:19] okay so let's start by asking what are
[01:22] elementary row operations
[01:24] so i'm going to dis there's a table and
[01:26] i'm going to on the left i'll describe
[01:28] the action which is a elementary row
[01:30] operation
[01:31] and on the right we'll have an example
[01:34] and
[01:34] you'll also figure out what is the
[01:36] notation for the corresponding action
[01:38] okay so the first
[01:40] elementary row operation so this is
[01:41] called of type one so elementary row
[01:43] operation of type one
[01:45] so that's when we interchange two rows
[01:47] so
[01:48] here's the example so you look at this
[01:50] matrix three two one one
[01:52] one one zero zero and 0 7 1 1 and
[01:56] we can interchange the first two rows so
[01:58] the notation for this is
[02:00] r 1 and r 2 get interchanged so we draw
[02:04] this
[02:05] two headed or arrow the arrows on both
[02:08] sides
[02:09] on the left and the right okay and then
[02:11] we
[02:12] interchange the rows one and two yeah
[02:15] and we
[02:15] obtain the matrix on the right okay
[02:19] then there's an elementary row operation
[02:21] of type 2 so that is
[02:22] scalar multiplication of a row by a
[02:24] constant t
[02:27] so for example in this the same example
[02:30] as
[02:30] before we divide
[02:34] r one by three or we can equivalently
[02:37] think of that as multiplying
[02:39] the first row by one third okay so what
[02:41] happens then
[02:42] that means every entry is multiplied by
[02:45] one third so every entry is
[02:47] in other words divided by three so the
[02:50] other rows remain the same
[02:52] and the first row becomes one two third
[02:55] one third and one third okay and then we
[02:58] have
[02:59] the elementary row operation of type
[03:01] three that's adding multiples of
[03:04] one row to another okay so
[03:07] ah here's an example so here
[03:10] we subtract three times r2
[03:14] from r1 okay so the important part in
[03:18] this notation is to remember that
[03:20] the first row meaning the row which
[03:23] occurs first in this notation
[03:24] is the one which is being changed so
[03:27] this is as
[03:28] this is written as r1 minus 3 r2 that
[03:31] means
[03:31] we have changed the first row by
[03:34] subtracting 3 times
[03:36] the entries of the second row to it
[03:39] okay so if you do that what happens the
[03:41] second and third row remain the same
[03:43] and the first row is changed to
[03:46] 0 minus 1 y minus 1 because we get 2
[03:49] minus 3
[03:51] 1 y 1 because we get 1 minus 3 times 0
[03:54] and again 1 because again 1 minus 3
[03:56] times 0 ok so i hope this is clear we
[03:58] have already seen this
[04:00] in determinants and we saw that
[04:02] something special happens for
[04:04] determinants we will recall that later
[04:07] okay so let's see what the elementary
[04:09] row operations are useful for
[04:13] so there's a process by which we can
[04:17] use elementary row operations and
[04:20] reduce any matrix to the reduced row
[04:23] edge long form
[04:24] yeah and i mean there is a very
[04:26] particular way of doing this i am going
[04:27] to describe this algorithm
[04:29] ok again once again we have on the left
[04:32] i will describe the action
[04:33] and on the right i will describe
[04:36] i will describe via an example
[04:40] and we will use the same notation that
[04:42] we used for the elementary row
[04:43] operations
[04:44] okay so the first thing we do is find
[04:47] the left most non-zero column
[04:48] so the left most non-zero column is the
[04:51] column
[04:52] 3 1 0 namely the first column
[04:56] ok so the next thing we do is use
[04:59] elementary row operations
[05:00] to get 1 in the top position of that
[05:03] column
[05:04] so how do i do that
[05:07] so in this case in the example
[05:11] i have a 3 in the 1 1 place
[05:14] so i can just divide the entire row
[05:18] by 3 right i can divide the first row by
[05:20] 3 or multiply the first row by 1 3. so
[05:22] this is an elementary row operation
[05:25] of type 2 yeah so i can use elementary
[05:28] row operation of type 2
[05:30] provided the 1 1 entry is non-zero and
[05:33] get a 1 in that place
[05:35] okay so here we if we do that this is
[05:38] exactly the example that we saw in the
[05:40] previous slide suppose now instead of
[05:43] this
[05:43] my first row happens to be 0 meaning the
[05:46] 1 1 and 3 happens to be 0 not the first
[05:48] row but the
[05:49] 1 1 entry happens to be 0 then i can't
[05:53] multiply by anything to get a 1 over
[05:55] there so then what i
[05:57] do is i will interchange the first row
[06:00] with some other row
[06:01] where that first entry in that that row
[06:04] is going to be non-zero and how do i
[06:06] know that
[06:06] there is an entry like that which is
[06:08] non-zero that's because
[06:10] this was the leftmost non-zero column so
[06:12] somewhere there must be a non-zero entry
[06:14] okay
[06:15] so if the one one entry is zero
[06:18] you can interchange and get a non zero
[06:20] entry over there
[06:22] so in our example we do not need to do
[06:23] that but otherwise you can get a
[06:25] non-zero entry
[06:26] and then you can multiply to make it one
[06:29] okay so use elementary row operations to
[06:32] get one in the top position of that
[06:34] column
[06:36] so then once we get a 1 in that column
[06:41] in that in that position
[06:44] use elementary row operations and
[06:47] of type three so you can use that one
[06:50] and subtract out
[06:52] the correct multiples
[06:56] and get zeros in the entries which are
[06:59] below that one
[07:00] okay so in this case we can subtract
[07:09] so there is a typo here this should have
[07:12] been
[07:12] 1 over here in fact this entire row is
[07:17] not correct this should have been the
[07:18] row
[07:20] uh one two third one third
[07:24] and one third uh so now in this one two
[07:27] third one third one
[07:29] and one third we can do r2 minus r1 so
[07:32] what does that mean
[07:33] in from the second row we subtract out
[07:36] the first row okay so the first row
[07:38] remains same third row remains same the
[07:40] second row changes
[07:41] and doing this the second row this entry
[07:44] zero over here this entry one over here
[07:46] becomes zero
[07:48] okay and then the other entries change
[07:50] correspondingly
[07:51] okay so we can use type three elementary
[07:54] row operations to make
[07:55] all the entries below that one as 0. so
[07:58] in this example the
[07:59] next entry is already 0 so we do not
[08:00] have to do anything
[08:03] okay so what is the next thing we do
[08:08] so if there are no non-zero entries
[08:12] below ah below
[08:15] so that means all entries are zero then
[08:18] we are done
[08:19] because the matrix is already in row
[08:21] echelon form okay so what what is our
[08:23] aim
[08:23] that the matrix should somehow come to
[08:27] rho h long form and then from rho h lawn
[08:29] will move to reduce loan okay so we want
[08:31] to put it in row etcetera form
[08:32] so if there are no non-zero rows then
[08:35] what that means is we have a row up
[08:37] which has which starts with 1 and then
[08:40] everything below is 0. so we are done
[08:43] okay if there is indeed a non-zero row
[08:46] below
[08:47] then it may happen that there are some
[08:49] zero rows and then there is a non-zero
[08:51] row
[08:51] so then we can interchange rows and
[08:53] bring that non-zero row
[08:55] to just below the row that we have just
[08:59] finished dealing with okay
[09:03] so once we do that what do we do now we
[09:06] look at the
[09:07] matrix meaning the sub matrix which
[09:11] which consists of all the entries other
[09:13] than the row that we just dealt with
[09:15] okay so repeat the above steps for the
[09:18] sub matrix below the current row okay so
[09:20] what is that sub matrix
[09:22] that sub matrix is in red here so it's
[09:25] the sub matrix consisting of the next
[09:26] two rows so zero one third minus one
[09:29] third minus one third
[09:30] and zero seven one one and what do we do
[09:32] now we'll repeat whatever
[09:34] process we did for the previous
[09:38] part we will do it all over again so let
[09:41] us recall what our process was
[09:43] so our process was locate the
[09:46] leftmost non-zero column
[09:52] well maybe i should say the first
[09:54] non-zero column so here is our first
[09:56] non-zero column
[09:58] so once you locate this you change it so
[10:01] that the
[10:02] entry there is one
[10:05] so i want to make the one third into a
[10:07] one
[10:08] so the first
[10:13] row remains the same and what do i do i
[10:15] multiply
[10:16] the second row by 3 so i get 0
[10:20] 1 minus 1 and minus 1 and i
[10:23] do not do anything to the third row
[10:26] right so this is a elementary row
[10:28] operation of type 2
[10:31] okay and then what do i do next
[10:34] i look at this one over here
[10:38] so this is going to play the role of my
[10:39] leading coefficient
[10:41] and then below this one i want a zero so
[10:44] i subtract
[10:46] 7 times r2 from r3
[10:50] so r3 minus 7 times r2
[10:53] okay so what do i get
[10:56] so again nothing happens to the first
[10:58] two
[11:01] rows
[11:05] and then for the third row i get a zero
[11:08] in this place which is what i
[11:10] was looking for and then in the other
[11:12] two i have to compute so this is 1 minus
[11:15] 7 times minus 1 so that is 1 plus 7 that
[11:18] gives me an 8
[11:20] and then this is again 1 minus
[11:23] 7 times minus 1 which is again an 8
[11:27] ok so now what do i have to do well
[11:30] i am done dealing with this column so i
[11:33] have got a 0 below
[11:35] so now i i have to look for
[11:38] the next i have to look at the rows
[11:40] below
[11:41] and ask is there a non-zero row yes
[11:43] indeed there is a non-zero row
[11:45] then i have to move that row to just
[11:47] below this row that i have just dealt
[11:49] with
[11:50] so here there is no intermediate zero
[11:52] rows so it is already there
[11:54] so i do not have to do any elementary
[11:56] row operations of
[11:58] type 1 to switch rows
[12:02] so then within this i look for the first
[12:06] within this sub matrix so what what sub
[12:09] matrix do i have now
[12:11] so i have this sub matrix
[12:15] so within this sub matrix i look for the
[12:17] first
[12:19] non-zero column well that is the third
[12:21] column
[12:22] and then within that column i try to get
[12:25] a 1 in the
[12:26] first possible place so in this case i
[12:29] have to
[12:29] multiply by 1 8 or that is divided by 8.
[12:32] so i do
[12:33] r 3 by 8 and what do i get
[12:37] i get one two third one third one third
[12:41] no change in the first row
[12:43] zero one minus one minus one no change
[12:45] in the second row
[12:47] and then in the third row i have zero
[12:50] zero one 1
[12:52] okay so using elementary row operations
[12:54] i have
[12:55] changed my matrix into a matrix which is
[12:58] in
[12:59] row echelon form yeah this matrix is in
[13:01] row edge long form why is it in row
[13:03] echelon form
[13:04] because if you look at each row then the
[13:06] leading entry the first non-zero entry
[13:08] is a one
[13:09] sure that's the case one one one
[13:14] then if you look at the leading entry
[13:18] so we look at the corresponding column
[13:21] so the column it's for the third
[13:25] row let's say it's in this column then
[13:30] if i look at the previous row it's
[13:34] uh on the left so that's fine so we are
[13:37] going in the
[13:38] descending this way right we are going
[13:40] descending this way that is what we want
[13:41] when we have row echelon form okay so
[13:44] and if there are zero rows they have to
[13:46] be below the non-zero
[13:48] rows so here there is no zero row so we
[13:52] are good
[13:52] yeah so this is indeed in row echelon
[13:55] form
[13:56] okay so now how do we reduce this
[13:58] further to reduce through each lone form
[14:02] so here is the matrix we will assume
[14:04] that we have our matrix is already in
[14:06] row each line form and then we will
[14:08] describe how to reduce it to
[14:10] ah reduce to each long form so here is
[14:12] the example that we were just doing
[14:14] so one two third one third one third
[14:16] zero one minus one minus one zero zero
[14:17] one one
[14:18] okay so what is the action we have to
[14:20] take take the columns containing a one
[14:22] in the leading position of some row
[14:24] so they are the highlighted columns the
[14:26] first column the second column and the
[14:27] third column
[14:29] and then using the ones the leading
[14:31] terms
[14:32] the leading ones use elementary row
[14:35] operations
[14:36] of type 3 to make everything above that
[14:41] 1 into 0.
[14:42] okay so we have done it for below so now
[14:45] we can do it for above
[14:46] so here there is a small trick you can
[14:49] really do it for in any for any column
[14:52] but we have to choose which column to go
[14:54] with first and then which column to go
[14:56] next so it is always best to start from
[14:58] the extreme right
[14:59] so you start with the third column so
[15:01] for the
[15:03] third column what do we do we use this
[15:06] uh
[15:06] 1 over here this one over here
[15:09] sorry i should rather say you we use
[15:13] this
[15:14] 1 over here and
[15:17] make the entries above that 1 into 0 how
[15:19] do i do that
[15:20] so i do r 2 plus r 3
[15:25] so yeah there is a type o here this
[15:27] should have been r 2 plus
[15:28] r 3
[15:31] [Music]
[15:35] and i do r 1 minus 1 3 r 3
[15:39] and i will get zeros
[15:42] correspondingly so this is the matrix i
[15:44] get and now i can move one
[15:46] one i mean i can move towards the left
[15:50] so if i do that ah let us complete this
[15:54] ah so now i want to get a 1
[15:58] i want to use this one over here
[16:01] to make the two third above it into 0
[16:04] so how do i do that i do
[16:08] r one minus two third r two
[16:11] and the point is since i have already
[16:15] taken care of the entries to the right
[16:18] uh it will not change what happens on
[16:20] the right so it will only affect
[16:22] this column or it may affect
[16:26] yeah it will only affect this column so
[16:28] it won't change anything
[16:30] any other column so you do not have to
[16:34] worry about the other columns so then in
[16:36] that case i get 1
[16:38] 0 0 0
[16:42] ah yeah i should have been careful there
[16:45] no i i should not say it won't affect
[16:47] any other column
[16:48] what i should have said was it doesn't
[16:51] affect any other column
[16:52] which has leading coefficients
[16:55] yeah which is what we really care about
[16:57] okay so 0 1
[17:00] 0 0 and then 0 0 1
[17:04] 1 okay and now this matrix is indeed
[17:07] in reduced row edge long form yeah so it
[17:10] was already in row each lawn form
[17:12] so the leading entries here every row is
[17:15] one
[17:16] and then for the ones if you look at the
[17:18] columns all the entries are zero
[17:20] and of course there is no non-zero rows
[17:21] at all so this is in the reduced row
[17:23] echelon formula
[17:24] okay so this is how we change a matrix
[17:29] to first into row echelon form and
[17:32] further into
[17:33] reduced row edge long form ok so let us
[17:35] do this example
[17:38] so for this example ah
[17:41] how do i how do i go about doing this
[17:44] lets do the first
[17:46] step so the first step is you look at
[17:49] the first
[17:50] non-zero column so in this case the
[17:52] first column is non-zero
[17:54] and then you try to get a 1 in the
[17:58] beginning place the 1 1 entry over here
[18:00] so here
[18:01] i have a 2 over there so i just divide
[18:03] by 2 and
[18:04] by dividing by 2 i get 1
[18:08] 2 and half in the first row and the
[18:09] other rows remain same
[18:12] ok let us do one more step so now using
[18:15] the one in
[18:16] in this place this one one place
[18:19] we can sweep out meaning we can
[18:23] make the three and the five into zero
[18:26] how do i do that
[18:27] i do r 2 minus 3 r 1 and r 3 minus
[18:30] 5 r 1 ok then what do i get so let me
[18:32] write this down
[18:34] so what i get is well the first row
[18:37] remains the same so 1 2 half
[18:39] and then this entry becomes 0 so this is
[18:41] r 2 minus 3 r 1
[18:43] that is 8 minus 6 that's 2
[18:47] and then 7 minus 3 halves
[18:51] so that's 14 by 2 minus
[18:55] three by two so that is eleven by two
[18:58] and then for the third row i have r
[19:01] three minus five r one so this is zero
[19:03] and then six minus ten ah which is minus
[19:07] four
[19:08] and then nine minus ah five by two
[19:12] so that's eighteen by two minus five by
[19:14] two so eighteen minus five is
[19:16] ah thirteen by two
[19:20] ok so this is what i what i get
[19:23] after doing this step so i have finished
[19:26] dealing with my
[19:27] first column so now i look for my
[19:34] sub matrix so here is my sub matrix
[19:37] over here
[19:40] ok and then we repeat this procedure so
[19:42] if you repeat this procedure
[19:44] what do we get what we get is
[19:49] look at the first non-zero column so for
[19:52] the first non-zero column
[19:54] ah which one is that that's the column
[19:57] the two minus four column
[19:59] so what do i do i try to get a one in
[20:01] the first place how do i do that
[20:03] i do that by doing r2 by 2.
[20:08] so if i do r2 by 2 i get 0 1
[20:11] and 11 by 4 and then
[20:14] the third row remains the same
[20:21] ok and then what should i do i should
[20:24] use this
[20:24] 1 and try to get a 0 below it
[20:28] right so i should use the 1 and get a
[20:31] 0 below so i should make that minus 4
[20:33] into 0. so how do i do that
[20:35] i do r 3 plus 4 times r 2. so if i do r
[20:39] 3 plus 4 times r 2
[20:41] what do i get so r 3 plus 4 times r 2
[20:43] gives me
[20:44] so the first row remains same the second
[20:46] row remains same
[20:49] and the third row becomes 0 0
[20:53] and now 13 by 2 plus
[20:56] 4 times 11 by 4 so 13 by 2 plus 11
[21:00] so what is that 13 plus 22 by 2
[21:03] so that's a 35 by 2
[21:09] okay and then the last thing so now this
[21:12] second column is done
[21:13] so now i should move to the third to the
[21:16] sub matrix
[21:18] what is the sub matrix well it is just
[21:20] this last row
[21:22] and i want to get a 1 in the place of
[21:23] that 35 by 2. so what do i do i just
[21:25] multiply by
[21:26] 2 by 35 and that is the final step in
[21:28] this procedure
[21:30] right so in sorry so to do that
[21:33] i do 2 by 35
[21:37] r 3 and i get
[21:41] 1 2 half 0
[21:45] 1 11 by 4 and then 0 0
[21:49] 1 okay so this is
[21:53] this is the row edge line form now if i
[21:56] want to move from here to reduce to
[21:58] echelon form
[21:59] i should make the entries above the ones
[22:02] into 0.
[22:03] so there is as i said you move
[22:07] from the right towards the left so you
[22:09] take the last column
[22:10] so you take the third column here so i
[22:13] should do
[22:14] ah r 1
[22:18] minus half r 3
[22:21] and r 2 minus 11 by
[22:24] 4 r three ok so if i do that
[22:31] ah what do i do ah what do i get
[22:35] so i will get one two
[22:39] zero and then zero
[22:42] one zero and then zero zero one ok so i
[22:46] should
[22:47] maybe ah um
[22:52] yeah okay so that's what we get
[22:57] and then the final step is to get a zero
[22:59] in the place of this
[23:00] two which is above that one so to do
[23:02] that i i should do
[23:04] r one minus two times r two which gives
[23:08] me
[23:08] ah one zero zero zero one zero
[23:12] zero zero one ok this is a familiar
[23:14] matrix as as we know this is the
[23:16] identity matrix and
[23:21] very shortly we will see ah
[23:24] how we got the identity matrix so why we
[23:26] got the identity matrix
[23:28] fine so i hope the procedure is clear so
[23:30] this is the second
[23:31] example that we have seen ok so now let
[23:34] us move to the determinants part ok so
[23:36] let us in that same example that we had
[23:37] previously let us recall
[23:41] the determinant so let us may be quickly
[23:44] look at that example again
[23:45] so the example was 241387569
[23:49] let me write that down two four one
[23:50] three eight seven five six
[23:52] nine
[24:00] ok and you can check in we have actually
[24:03] done this example in the determinants
[24:04] video
[24:05] and you can check that if you use the
[24:08] definition of the determinant
[24:10] then you get a 70. we we did this
[24:12] example so i am not
[24:14] going over this in detail again but you
[24:17] can check the computation if you
[24:18] if you feel uh you want to recall what
[24:21] the determinant was
[24:22] okay so keep this in mind okay so now
[24:25] let's
[24:26] recall also from the determinants
[24:27] lecture that we studied what was the
[24:30] effect of
[24:31] elementary row operations on
[24:32] determinants
[24:35] so if you perform an elementary row
[24:36] operation of type one so if i
[24:38] interchange two rows
[24:39] and the from matrix a i get matrix b
[24:43] then the effect on the determinant is
[24:45] that determinant of a is minus
[24:47] determinant of b
[24:49] okay and then if i divide
[24:53] a matrix a particular row of
[24:57] of the matrix a by c then
[25:00] determinant of a is c times determinant
[25:02] of b ok so
[25:03] if you divide by c determinant of a is c
[25:06] times determinant of b
[25:09] ok and then the type three elementary
[25:11] row operation
[25:12] was where we added a multiple of one row
[25:15] to another
[25:16] and in that case the determinant
[25:17] remained unchanged yeah these are
[25:19] properties we stated
[25:21] in the determinant lecture ok so now let
[25:23] us see
[25:24] how we can use this method of
[25:27] row reduction to calculate the
[25:30] determinant
[25:31] ok so for a square matrix a
[25:35] ah row reducing a into row echelon form
[25:38] produces an upper triangular matrix ok
[25:40] so if you
[25:41] remember the definition of the row
[25:43] echelon form
[25:45] remember the ones are going like this
[25:47] right
[25:48] so that means if you have a square
[25:50] matrix
[25:51] that the ones must be either on the
[25:53] diagonal
[25:54] or above the diagonal and everything
[25:57] below the ones is 0
[25:58] so that means this matrix is in upper
[26:01] triangular
[26:03] is an upper triangular matrix okay so
[26:06] and on the diagonal you have either ones
[26:09] or zeros yeah either you have all of the
[26:11] ones
[26:11] or you have a few zeros fine
[26:15] so ah what is what i mean why why are we
[26:18] saying this
[26:19] so the point of this statement is that
[26:22] remember that for an upper triangular
[26:23] matrix
[26:24] the determinant is given by the product
[26:28] of the
[26:29] diagonal entries this was again
[26:31] something we saw in the determinants
[26:33] video and now we'll use this to great
[26:35] effect
[26:37] in by this row reduction technique okay
[26:39] so now let us
[26:40] determine how to find determinants via
[26:43] row reduction
[26:44] so you have a square matrix a row reduce
[26:47] it into rho h long form
[26:49] if the diagonal entries of the reduced
[26:50] matrix contain a 0
[26:52] then its determinant is 0 determinant of
[26:54] a 0 yeah so you don't have to compute
[26:56] do any computations at all it's already
[26:59] 0 and how do i get this
[27:01] well you can trace back along the
[27:03] elementary row operations we know how
[27:04] the determinant changes
[27:06] and it either remains the same or you
[27:08] get it gets multiplied by some constant
[27:10] or it picks up a minus sign so if your
[27:12] final determinant is 0
[27:14] then your beginning determinant is also
[27:16] going to be 0 that's why it must be 0
[27:19] and if the the other option is that the
[27:22] diagonal entries are all one
[27:24] and if they are all one then we know
[27:26] that determinant
[27:27] and then we can trace back through the
[27:30] operations that we have done and find
[27:32] the determinant okay so let us see an
[27:34] example
[27:35] well here is the example that we did
[27:40] earlier in the video so
[27:43] here was our
[27:46] matrix a two four one three eight seven
[27:48] five six nine
[27:49] and remember that we said that this
[27:52] determinant is
[27:54] seventy so we know that determinant of a
[27:56] is actually seventy
[27:57] this was explicitly computed
[28:00] from the determinants video okay now let
[28:02] us use this
[28:04] procedure and see from here how do we
[28:06] get
[28:07] the determinant of a okay so let us
[28:10] compute the
[28:10] let us start from here so the
[28:12] determinant over here is 1
[28:14] y product of diagonal entries it's an
[28:16] upper triangular matrix so notice that i
[28:18] do not have to go all the way till
[28:19] reduce to echelon form
[28:21] i can stop at the row echelon form
[28:24] okay so how do i move to this well so i
[28:27] have divided this by 35 by 2
[28:30] so this determinant is ah
[28:34] 35 by 2 well we can also get this by
[28:36] multiplying by
[28:38] the diagonal entries because it is again
[28:40] upper triangular
[28:41] okay so what is this determinant well
[28:43] how did we go from here to here
[28:45] we went by an elementary operation of
[28:49] type 3
[28:50] so it does not change your determinant
[28:53] so this is still 35 by 2.
[28:56] how did we go from here to here well we
[28:57] divided by 2 so this is going to be 2
[29:00] times 35 by 2
[29:02] which is 35 so the determinant of this
[29:05] matrix is 35
[29:06] you can check this by by explicitly
[29:08] computing
[29:09] how did we go from here to here
[29:11] elementary operations of type 3 they do
[29:13] not change your determinant
[29:14] so this is still 35 and how did we go
[29:17] from here to here we divided by 2
[29:19] so the determinant here must be 35
[29:22] multiplied by 2
[29:23] and that is indeed 70 okay that is what
[29:26] we described on the previous slide
[29:28] and this is an example of the same okay
[29:30] so today we have seen
[29:31] in this video we have seen that we can
[29:35] there is this wonderful procedure called
[29:37] row reduction
[29:38] that you can use to reduce any matrix
[29:42] into the reduced row edge long form
[29:44] first to roche learn form and then into
[29:46] reduced to edge long form
[29:48] it is an algorithm we explicitly
[29:50] described it
[29:51] now in the previous video we have seen
[29:53] that if a matrix is in
[29:55] reduced to echelon form we can easily
[29:57] get solutions for a x equals b
[29:59] when a is in reduced echelon form right
[30:03] now we are going to put these two
[30:04] together in the next video
[30:06] and describe a method very powerful
[30:10] method
[30:11] to obtain the solutions of any general
[30:14] system of linear equations ax equals b
[30:18] and in today's video the other thing we
[30:19] did was we saw that this procedure of
[30:23] reducing a matrix to its reduced
[30:27] echelon form or its row etched long form
[30:31] for a square matrix we can easily
[30:33] compute the determinant
[30:35] in fact if if you
[30:39] go ahead and sort of try to work out
[30:43] what is more efficient whether you can
[30:45] compute the determinant
[30:47] by our definition or by
[30:50] this procedure you will find this
[30:52] procedure is much much easier
[30:54] and this is very useful because if your
[30:55] matrices are very large
[30:57] then computing the determinant using the
[31:00] definition
[31:01] takes much much more time whereas this
[31:04] procedure
[31:06] gives you a far more efficient way of
[31:08] doing it
[31:09] thank you