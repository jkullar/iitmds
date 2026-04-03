# W7_L2: Affine subspaces & affine mappings

**Week:** Week 7
**YouTube URL:** https://www.youtube.com/watch?v=RUJInY6skG0

---

## Transcript

[00:00] [Music]
[00:14] hello and welcome to the
[00:15] max2 component of the online bsc program
[00:18] on data science
[00:19] in this video we are going to talk about
[00:21] affine subspaces and affine mappings
[00:24] so before we start the video i want to
[00:27] say that
[00:28] this video is not extremely essential to
[00:31] to the general ideas of in linear
[00:35] algebra that we have been looking at
[00:38] when it relates to data science there is
[00:40] only one really import i mean
[00:41] important concept which which we should
[00:44] address
[00:44] and which is why we have to introduce
[00:46] this topic uh
[00:48] so i'm going to be a bit brief in in
[00:50] this video
[00:52] and the idea is that if you want to
[00:55] really learn more you should
[00:56] read a little bit of the literature or
[00:58] you can
[01:00] ask the tutors in the tutorial sessions
[01:03] so this is not really a very integral
[01:05] part of the course
[01:06] but there is one thing that we have to
[01:08] understand in this in this video and i
[01:10] will mention that when we come to it
[01:12] ok so let us look at affine subspaces
[01:15] and find mappings
[01:17] so let v be a vector space so an affine
[01:19] subspace of v is a subset l
[01:22] so it is a subset mind you its not a
[01:23] subspace
[01:25] such that there exists v in v
[01:28] and a vector subspace u and v
[01:31] such that l is little v plus u
[01:35] so what does that mean that means you
[01:38] will have to look at the set
[01:40] little v plus little u where little u
[01:43] varies over capital u so essentially it
[01:45] is taking this
[01:47] subspace u and then shifting it by
[01:51] v meaning you add the vector v to each
[01:54] vector in this subspace
[01:55] u so in particular
[01:58] you add it to 0 also so because u is a
[02:01] subspace so that means
[02:02] 0 must be in u which means the vector v
[02:06] must belong to this set l
[02:11] so any set l which can be obtained in
[02:13] this fashion is called an affine
[02:14] subspace of v
[02:17] so we say an affine subspace is l n
[02:20] dimensional if the corresponding
[02:23] subspace u is n dimensional
[02:25] so if u is undimensional l is considered
[02:27] to be n dimensional
[02:30] so the subspace u corresponding to an
[02:32] affine subspace is unique so what do we
[02:34] mean by that this definition for an
[02:38] affine subspace says that
[02:40] l is little v plus capital u v is a
[02:44] vector
[02:44] u is a a fine sub space maybe you could
[02:47] write it in a different way
[02:48] as v prime plus u prime and what this
[02:52] statement is uh saying is that
[02:56] maybe you can write it in a different
[02:58] way but the u part
[02:59] must be the same so you can write it as
[03:01] v plus u
[03:02] and v prime plus u ah
[03:06] so that that's the only way to write it
[03:08] meaning there is no
[03:10] there is no choice of subspace so the
[03:12] subspace that
[03:13] that you are shifting must be the same
[03:16] and of course this this statement uh
[03:18] also implies that
[03:20] i mean the fact that i made it only for
[03:22] you and not for v
[03:23] tells us that the vector v can actually
[03:26] be chosen in a different way
[03:28] in fact it can be any vector in the in
[03:30] the
[03:31] set capital in the affine sub space
[03:34] capital l
[03:36] ah so let's let's maybe
[03:39] ask why that's the case so if i can
[03:42] write l as
[03:46] so l is v plus u and v prime plus
[03:50] u prime ah how do i identify
[03:54] my my set u prime
[03:58] so we just observed that both v and v
[04:01] prime belong to
[04:03] ah belong to l so v belongs to l
[04:08] v prime also belongs to l by the same
[04:10] reasoning
[04:12] ah so then what we can try and do is we
[04:15] can
[04:15] try and look at how to express v prime
[04:18] in terms of
[04:19] v plus u and v in terms of v v prime
[04:22] plus
[04:23] u prime and that should sort of give the
[04:26] idea for
[04:29] y u is equal to u prime so for example
[04:31] if you take little u
[04:33] so let little u belong to capital u
[04:37] then ah
[04:40] v plus u ah belongs to
[04:45] l so that means it belongs to v prime
[04:48] plus
[04:49] u prime that means
[04:53] ah v plus u is equal to v prime plus
[04:58] ah some little u prime for for some
[05:04] u prime and u prime which implies
[05:08] that u sorry
[05:13] u is equal to v prime
[05:16] minus v
[05:19] plus u prime ok so now the claim is that
[05:23] v prime minus v
[05:24] is in ah is in
[05:27] u and v u prime both and
[05:30] u primes of course is nu prime so that
[05:33] means this little u will be in
[05:35] u prime so for every vector in u it will
[05:38] be in u prime conversely it will be in
[05:41] every vector in u prime will be in u ok
[05:44] so y is v
[05:44] prime minus v in in u or
[05:48] u prime so
[05:52] ah let us look at v prime
[05:56] minus v and let us look at how to write
[06:00] it in terms of
[06:02] v plus u so ah well we know v prime well
[06:06] what i meant to say is we know v prime
[06:08] is in l
[06:10] that means v prime is equal to v plus
[06:13] some
[06:15] ah let us say u1 where u1
[06:21] is in u that means v prime minus v
[06:24] excuse me
[06:28] is equal to u one which belongs to you
[06:30] right
[06:31] and you can take the negative
[06:34] that will tell you also that v minus v
[06:35] prime belongs to u
[06:37] and the same argument done for with v
[06:40] and v prime ah
[06:44] the rules changed we will say that v
[06:46] minus v prime belongs to
[06:48] u prime ah so that implies that v prime
[06:51] minus v
[06:52] belongs to u prime so that means both of
[06:55] these vectors
[06:56] belong to u prime but u prime is a
[06:59] vector space right it is a vector
[07:00] subspace
[07:01] so that tells us u is in u prime and
[07:04] that completes the argument that i was
[07:06] giving here
[07:07] so the main point here is if you can if
[07:09] you write it as v plus u and v prime
[07:10] plus u prime then the u and u prime must
[07:13] be the same
[07:13] so that is what this statement here is
[07:16] saying
[07:17] and v is not unique in fact as we as we
[07:20] saw it can be any vector
[07:22] because you can you can add
[07:25] some vector of u to v and
[07:28] express that as your v
[07:32] so the point here is that affine
[07:33] subspaces are
[07:35] translates of a vectors of space of v
[07:37] okay so a fine subspaces are
[07:39] translates of a vector subspace of v so
[07:42] the main
[07:43] so the main thing here is that if you
[07:46] have l is equal to v plus u
[07:49] and v prime plus u prime um
[07:53] then v minus u prime belongs to u
[07:56] and u prime and using this you can claim
[08:00] that u is equal to u prime
[08:01] that is the thing here and for the other
[08:04] one you can just take any
[08:06] vector in u and add it to v and that
[08:08] will play the role of v prime
[08:10] so so v is not unique okay so affine
[08:13] subspaces are thus
[08:14] translates of a vector sub subspace of v
[08:17] so you take this u
[08:18] and then you translate it by v so let us
[08:22] look at a few ah nice videos that our
[08:24] team has made
[08:25] to explain this idea clearly so
[08:29] this is a video in r2 so let us first
[08:32] draw the axis
[08:33] so once you have the axis let us draw
[08:35] this vector
[08:38] um u ah so this should have been labeled
[08:42] v
[08:42] and not u this is little v and not ah
[08:46] little u and this is your your subspace
[08:50] u which is a line and then you translate
[08:53] it
[08:54] ah and that gives you your space
[08:57] l so that's that's your new space l
[09:00] ah so this is an affine space so this is
[09:03] an
[09:03] affine subspace of r2
[09:07] ok ah let us maybe view another
[09:13] video in r3
[09:25] so this time again let's draw the axis
[09:31] and that's your origin and then
[09:34] you draw a point you connect that so
[09:37] that's your vector
[09:38] so this vector is being called v
[09:42] and then you have a subspace this time
[09:44] it's the x y axis and then you shift it
[09:46] parallelly so that it contains this
[09:49] vector v yeah so it's a translate of
[09:52] the x y axis so that it contains the
[09:54] vector v
[09:55] that's this point v okay that's that's
[09:58] what
[09:59] ah this video is showing
[10:02] okay so i hope you have understood the
[10:03] concept of a fine
[10:05] subspace so affine substances are really
[10:08] not particularly hard
[10:10] they are just translates of subspaces
[10:13] that
[10:16] we have studied all along so you take a
[10:17] subspace and you
[10:19] move it okay so let's uh
[10:23] put down what are the possible affine
[10:24] subspaces in r2
[10:26] so in r2 you can look at points because
[10:29] you take the origin remember the origin
[10:31] or 0 0 is a subspace of r 2
[10:35] and then you can shift this by any
[10:36] vector v so you take
[10:38] r 2 the origin and r 2 0 0 and you shift
[10:41] it by v so you do v
[10:42] plus 0 0 and that gives you a point
[10:45] namely the point corresponding to v and
[10:47] v can be anything
[10:48] so it covers all possible points in r2
[10:50] so every point in r2 is an affine
[10:52] subspace
[10:53] of r2 similarly we just saw the video
[10:56] about the
[10:57] the first video about r2 where you had a
[10:59] line passing through the origin so that
[11:01] is a subspace
[11:02] and then you translated it and that
[11:05] gives you a line
[11:06] maybe not passing through the origin so
[11:09] that is
[11:09] an affine subspace and then the entire
[11:12] plane r2
[11:13] right so of course there is nothing that
[11:16] rules out the entire plane from
[11:18] from from being an affine sub space
[11:21] because in particular every vector
[11:23] subspace is an affine subspace right you
[11:25] could take that vector little v
[11:27] to be 0 so you then you would get l to
[11:29] be 0 plus capital u which is just
[11:31] capital u
[11:32] so it could be a in particular and an
[11:34] actual vector subspace
[11:36] so r 2 is a vector sub space of r 2 so
[11:39] that
[11:39] so indeed it's in a fine subspace as
[11:41] well
[11:42] ah so let's also write down an example
[11:45] of
[11:45] something which is not in a fine
[11:47] subspace so our fine subspaces as we saw
[11:49] there are shifts of
[11:52] vectors of spaces linear subspaces right
[11:54] and
[11:56] linear subspaces or vector subspaces
[11:59] so those are always either
[12:03] the origin 0 0 or
[12:06] lines passing through the origin or the
[12:08] entire r2
[12:10] so if you have a curve which is not a
[12:12] line so for example if you take the
[12:14] parabola
[12:14] y is x squared plus 1 or you take a
[12:17] curve like y squared is x cube
[12:19] if you have not seen these curves i
[12:20] would recommend that you try to draw how
[12:24] these look like
[12:25] ah but they look they look curved like
[12:27] this or like this
[12:29] right and they are not so of course they
[12:31] cannot be
[12:32] ah translates of lines or planes or
[12:36] points so these are not a fine sub
[12:38] spaces
[12:40] ok ah so let me
[12:43] write down here so if you have a point
[12:45] ah so if i take x y
[12:47] if i take this point then how is it a
[12:51] subspace so this is my l so this is l
[12:54] then this is the vector x y
[12:59] plus the
[13:04] vectors of space 0 0 and if you have a
[13:07] line
[13:08] then in this case um do i write lines
[13:12] well there is many ways of representing
[13:14] lines
[13:15] one is maybe you have y is mx plus c
[13:20] right and this line is a translate
[13:24] of
[13:29] y is equal to m x right so how do i
[13:32] convert this into
[13:35] into the form that i i want so here you
[13:37] have to notice that
[13:39] the point 0 comma c is in l
[13:45] and that is exactly the point that you
[13:46] are shifting by so you write this
[13:48] l as 0 comma c
[13:52] plus the subspace u where u is given by
[13:56] all points of the form
[14:00] x comma m x where x
[14:04] belongs to r
[14:08] so this is a line this is a line passing
[14:11] through the origin so this is your
[14:13] subspace vectors of space u so you have
[14:16] written l as 0 comma c plus this vector
[14:18] as plus this vector sub so here this is
[14:20] your vector little v
[14:24] and the entire plane as i said you can
[14:26] just write this as
[14:28] r 2 is 0 0 plus
[14:31] r 2 right this is your u
[14:34] this is your little v and this is your l
[14:38] ok so we have expressed each of these in
[14:40] the form that that we
[14:43] need to in order for the definition to
[14:45] work
[14:47] okay let's ask the same question for r3
[14:49] what are the affine subspaces of
[14:50] in r3 so i think by now you probably
[14:53] have a
[14:54] guess about what the answer is you have
[14:56] points you have lines
[14:58] you have planes yeah this is something
[15:00] new we didn't have this in r2 because
[15:02] there's only one plane the entire space
[15:04] in r2
[15:05] and then we have the entire space r3
[15:09] so what's
[15:13] let's also write down how any two
[15:16] dimensional affine subspace
[15:17] in r3 can be expressed so two
[15:20] dimensional affine subspace means
[15:22] a plane right because it its two
[15:26] dimensional means you are
[15:27] translating a plane right
[15:30] so then it can be written as l is v plus
[15:33] lambda 1 v 1 plus lambda 2 v 2
[15:35] where the lambda is in r and v
[15:39] v 1 and v 2 are vectors in r3 so v is
[15:42] the vector that
[15:42] was used in the definition of l is equal
[15:45] to v plus u
[15:46] and what is u u is exactly this this
[15:49] part so this is
[15:50] this part is u so u is equal to
[15:53] ah lambda 1 v 1 plus lambda 2 v 2. so in
[15:56] other words it is the span of
[15:59] v 1 and v 2. yeah
[16:02] this is a span of
[16:06] v 1 comma v two that's
[16:09] that's what is u uh so sim
[16:12] i mean if if we use the same idea then
[16:15] points can be written as
[16:17] v plus lambda times zero zero
[16:20] and then lines can be expressed as v
[16:23] plus
[16:24] lambda times some vector on that line so
[16:27] v one and planes as we have seen is v
[16:30] plus lambda one v one plus
[16:32] ah lambda two v two
[16:36] and the entire space r 3 is just lambda
[16:39] 1 v 1 plus lambda 2 v
[16:40] 2 plus lambda 3 v 3.
[16:45] now if we want to do the same idea for
[16:48] the
[16:49] for the case of r2 we would have v plus
[16:51] lambda times
[16:52] 0 0 and then v plus lambda times v 1
[16:56] and then the third one would be just
[16:57] lambda 1 v 1 plus lambda 2 v 2 because
[16:59] that's the entire space
[17:00] it's only two dimensional
[17:04] i hope this gives you an idea of of how
[17:05] to ah
[17:06] [Music]
[17:09] of what are refined subspaces and also
[17:11] the equations the kind of equations
[17:13] which govern them
[17:15] ok so now this is the most important
[17:16] point about why we want to study affine
[17:19] subspaces at all
[17:20] that's because we we this particular
[17:23] example of
[17:24] the solution set to a system of linear
[17:26] equations
[17:27] is an affine subspace okay so let x a x
[17:30] equals b be a linear system
[17:32] of equations and i want to pointedly add
[17:35] that
[17:35] i'm not i mean this need not be
[17:37] homogeneous and that's really the point
[17:40] if b is 0 then this is a homogeneous
[17:43] system
[17:44] and we have seen before that the
[17:45] solution set is a subspace of rn
[17:48] suppose this matrix is m by n so this is
[17:51] a subspace of rn
[17:53] so we call that subspace the null space
[17:56] of
[17:57] a right the null space of a is exactly
[18:00] the solution set to
[18:01] this system of linear equations ax
[18:04] equals 0.
[18:05] so this is in the case where b 0
[18:08] if b is not in the column space of a
[18:12] so in this case ax equals b does not
[18:15] have a solution
[18:16] right because if b is not in the column
[18:18] space that means no linear combination
[18:20] of the columns
[18:21] can equal b if there was a linear
[18:24] combination
[18:24] which equal b ah then it would be in the
[18:27] column space yeah so no linear
[18:28] combination can equal b
[18:30] and that precisely means that there is
[18:32] no solution
[18:33] so this solution set is the empty set
[18:37] okay so these two cases we have seen
[18:39] before and we we know exactly
[18:41] how these two cases behave
[18:44] and what we want to do in this video
[18:46] specifically is address the third case
[18:49] suppose b lies in the column space of a
[18:51] if b is 0 then we are back in case 1 so
[18:54] nothing to do so if b is not 0
[18:59] then how do i deal with it then it need
[19:01] not be a vector subspace
[19:03] in fact it will not be a vector subspace
[19:05] but it will be an affine subspace
[19:08] in this case the solution set l
[19:11] is an affine subspace of rn and how do
[19:13] we
[19:14] ah describe it it can be described as
[19:17] l is v plus n of a what is this n of a n
[19:21] of a is exactly this n of a that was
[19:24] here the null space okay
[19:27] so you have to translate the null space
[19:30] by a particular solution so you can take
[19:33] any particular solution
[19:35] and using that you translate the null
[19:37] space
[19:38] and the space that you obtain the affine
[19:41] subspace
[19:42] is exactly the set of solutions okay
[19:45] so the main mantra you have to take back
[19:47] here is
[19:48] the solution set of a non inhomogeneous
[19:52] or a non homogeneous
[19:54] system is an affine subspace
[19:57] okay and specifically the way to write
[20:00] it down
[20:00] is get a particular solution translate
[20:03] the null space
[20:04] and whatever you get is the entire set
[20:08] of solutions
[20:09] for the inhomogeneous system
[20:12] okay now let us come to the final
[20:16] thing that we want to deal with in this
[20:18] video this is a slightly complicated
[20:20] notion but we are just doing this for
[20:22] the sake of completeness
[20:24] and one small idea let l and l prime be
[20:27] a fine subspaces of v and w
[20:29] respectively so we have seen how how to
[20:32] define
[20:33] the notion of a linear transformation
[20:35] right so now suppose so linear
[20:37] transformations work
[20:38] between ah vector spaces
[20:41] or vector subspaces so now suppose we
[20:44] have affine subspaces
[20:46] we would still like to know how to um
[20:49] deal with functions on those which in
[20:52] some sense
[20:53] preserve the the structures
[20:57] that we are interested in so how do we
[21:00] do that so that is the idea of an
[21:01] offering mapping
[21:03] so let l and l prime we are find
[21:05] subspaces of v and w respectively
[21:07] let f l to l prime b a function
[21:11] consider any vector v in l and the
[21:13] unique subspace u contained in v such
[21:15] that
[21:16] l is v plus u so we know that l is equal
[21:20] to v
[21:20] plus u um so
[21:24] note that f of v in l prime lies in l
[21:27] prime
[21:28] and hence l prime is f of v plus u prime
[21:31] where u prime is the
[21:33] unique subspace of w corresponding to l
[21:36] prime
[21:39] ok then f is an affine mapping from l to
[21:42] l prime
[21:42] if the function g that you obtain
[21:46] from u to u prime defined by g of u is
[21:49] equal to
[21:50] f of u plus v minus f of v is a linear
[21:53] transformation
[21:54] so for a linear transformation t u to u
[21:56] prime and fixed vectors
[21:59] v in l and v prime and l prime and a
[22:01] fine mapping can be
[22:02] obtained by defining f of v plus u is
[22:05] equal if
[22:06] v v prime plus t of u so here basically
[22:09] what you are saying is
[22:10] put f of v equals v prime and then for
[22:14] any other vector
[22:16] or any other point on this
[22:20] affine subspace u
[22:24] you look at v plus u there is some u
[22:26] such that
[22:28] you have that point or vector to be v
[22:31] plus u
[22:32] then you look at v plus u and define f
[22:35] of v
[22:35] plus u to be v prime plus t of u then
[22:39] you know this is kind of saying that it
[22:41] is linear
[22:42] ah and in fact every affine mapping is
[22:45] obtained in this way
[22:46] so we have g of u is f of u plus v minus
[22:50] f of
[22:50] v so g of u
[22:53] is f of u plus v
[22:57] minus f of v what does it mean for g of
[23:00] for this g to be a linear transformation
[23:03] so i want that
[23:04] so let us also look at some other thing
[23:07] g of u prime
[23:09] so f of u prime plus v minus f of
[23:12] v so i want that g of i i am trying to
[23:16] explain
[23:17] what this statement means ok so i want
[23:21] the g of u
[23:22] plus u prime is equal to
[23:26] ah i want this ok is this equal to g
[23:30] of u plus g of u prime right this is
[23:33] what i want
[23:35] one of the things that i need for it to
[23:36] be a linear transformation okay
[23:38] let us unravel this definition first of
[23:40] all what is g of u plus u prime
[23:42] by definition this is f of
[23:45] u plus u prime plus v minus f of v
[23:50] ok so lets ah put all these in here
[23:54] this means that f of u plus u prime
[23:57] plus v is minus f of u v
[24:01] is equal to f of u plus v minus f
[24:04] of v plus f of u prime plus v
[24:09] minus f of v i can cancel both sides
[24:14] minus f of v so if i do that what i get
[24:17] is
[24:18] f of u plus u prime plus v
[24:21] is equal to ah f of u
[24:24] plus v plus f of u prime plus v
[24:29] minus f of v ok and then i can take that
[24:31] f of v on the other side
[24:33] so i get f of u plus u prime plus v
[24:37] plus f of v is equal to f of u plus v
[24:41] plus f of u prime plus v ok
[24:44] so you can see here what is going on you
[24:46] are taking u plus u prime plus v
[24:49] and then you look at it as
[24:54] u plus v u prime plus v there is an
[24:56] extra v
[24:57] over there so that extra v you get in
[25:01] here
[25:01] okay so suppose you take t of x comma y
[25:04] comma z
[25:05] ah to be maybe i shouldn't have used t
[25:08] let us call
[25:09] f maybe since i am using t in the
[25:11] previous slide for
[25:12] linear transformation so let t of xyz be
[25:16] 2x plus 3y plus 2 4x minus 5y plus 3
[25:20] this is not a linear transformation why
[25:22] is that because if you look at
[25:23] t of 0 0 0 then it becomes 2 comma 3
[25:27] right and we know if it is a linear
[25:29] transformation it would have been
[25:30] 0 comma 0. so this is not a linear
[25:32] transformation but this is an affine
[25:34] transformation
[25:36] ah and how do i how do i
[25:39] know its an affine transformation the
[25:40] reason i know it is an affine
[25:42] transformation is because
[25:43] i can write this as t of
[25:46] x y z is equal to um
[25:50] 2 comma 3 plus
[25:54] 2 x plus 3 3y comma 4x minus 5y
[25:57] and this is indeed a linear
[25:58] transformation this is a linear
[26:00] transformation
[26:03] and this is your vector v prime okay
[26:06] this is what the second
[26:09] line in that slide the previous slide
[26:11] set
[26:12] okay so this is why i i know its a
[26:14] linear transformation
[26:15] ok so this is a general phenomenon
[26:19] namely if you have a linear
[26:20] transformation you can
[26:22] and some fixed vector w and w then the
[26:25] mapping
[26:26] t prime of v is w plus t of v is an
[26:29] affine mapping from v to w
[26:31] this is exactly what i did here ah let
[26:33] us just see what i did here
[26:34] what i did is i took ah this t of x y z
[26:39] which unfortunately it this i could have
[26:41] called this t
[26:42] prime or f so t prime of x y z is
[26:46] ah can be written as two comma three
[26:48] plus
[26:49] two x plus 3 y comma 4 x minus 5 y
[26:53] as i explained you take this to be t of
[26:56] x y z
[26:57] so this is indeed a linear
[26:58] transformation
[27:01] so this is a linear transformation
[27:05] and this is your vector w in here
[27:09] this is exactly what you are doing below
[27:11] and
[27:13] this is an affine mapping as a result so
[27:15] essentially what we are saying is
[27:18] this looks very much like a linear
[27:19] transformation but you can shift it by a
[27:22] vector and here for example you shifted
[27:25] it by 2 comma 3. so
[27:26] usually you will have to find out what
[27:28] that vector is and that vector can often
[27:30] be found
[27:31] or always be found by looking at d of
[27:34] the ah zero vector yeah if if if it's
[27:38] if it's in this form where you have it
[27:39] from v to w then you can just look at
[27:41] what is t
[27:42] of zero the zero vector and that will
[27:45] tell you what to shift by what to
[27:46] translate by okay
[27:48] that's the idea okay so let us recall
[27:50] what we have done in this video
[27:52] in this video we have studied the notion
[27:54] of an affine
[27:55] subspace which is nothing but taking a
[27:58] usual vectors of space and translating
[28:00] it by some vector v
[28:02] the most important example that we saw
[28:07] is the case of the
[28:10] solution set of a homogeneous or
[28:13] inhomogeneous
[28:14] system of linear equations which have a
[28:17] solution okay if your
[28:19] if x you are looking at x equals b and b
[28:23] and this does not have a solution at all
[28:24] then of course it's the solution set is
[28:26] the empty set so there's nothing
[28:28] there's no mathematics to do over there
[28:30] but if it has a solution
[28:32] then we know exactly what the solution
[28:34] set of solutions looks like
[28:36] you take a particular solution and then
[28:38] you take the
[28:39] null space and translate it by that ok
[28:42] that that is how we
[28:44] ah that is how we ah look at
[28:47] that is an example of an affine subspace
[28:49] ah
[28:50] and then we looked at affine mappings
[28:51] which are very similar to what we do for
[28:54] linear transformations but you allow a
[28:56] translation again ok that is essentially
[28:58] what we have done in this video
[28:59] thank you