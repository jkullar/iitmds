# W4_L1: What is a basis for a vector space?

**Week:** Week 4
**YouTube URL:** https://www.youtube.com/watch?v=lhAQIaFOPxA

---

## Transcript

[00:00] [Music]
[00:14] hello and welcome to the
[00:16] match 2 component of the online degree
[00:18] program
[00:19] uh on data science so in this video we
[00:23] are going to study what is the basis for
[00:24] a vector space
[00:25] so just to recall what we have done as
[00:28] part of this module before
[00:30] we have studied what are vector spaces
[00:31] we have seen the notion of
[00:33] a linearly dependent set in a vector
[00:35] space and we have seen the notion of a
[00:38] linearly independent set in a vector
[00:39] space
[00:40] and today's video
[00:44] about the basis builds on the fact that
[00:46] we know what is linear independence of a
[00:48] set of vectors
[00:49] okay so let us quickly recall this idea
[00:51] of linear dependence and linear
[00:53] independence
[00:54] so suppose we have a set of n vectors v
[00:57] 1 v 2 v n
[00:58] in the vector space v so the set v 1 v 2
[01:01] v n is said to be linearly
[01:03] dependent if there exists scalars a 1 a
[01:05] 2 a n
[01:06] not all 0 such that a 1 v 1 plus a 2 v 2
[01:10] plus
[01:10] all the way up to a and b n is 0. yeah
[01:13] so this means there is a linear
[01:14] combination of the v
[01:15] i's which is a non-zero linear
[01:18] combination which means that at least
[01:19] one of the coefficients is non-zero
[01:22] note that this does not mean that all
[01:24] the coefficients are nonzero
[01:25] but it means that at least one of the
[01:27] coefficients is non-zero
[01:29] so we have a linear combination such
[01:31] that the
[01:33] with non-zero coefficients and
[01:37] that linear combination is zero okay so
[01:39] we are saying
[01:40] the equation ah x one v one plus x two e
[01:43] two plus x and v n has a non trivial
[01:45] solution yeah this is what we saw last
[01:47] time
[01:48] and now linear independence is saying it
[01:51] is not linearly dependent
[01:53] so explicitly what this means is that
[01:55] the set v one v two v n
[01:56] is said to be linearly independent if
[01:58] the only choice of scalars a one a two a
[02:01] n
[02:01] such that the corresponding linear
[02:03] combination a one v one plus a two v two
[02:05] plus a and v n is zero so this equals 0
[02:09] is with a i is 0 yeah so if you solve
[02:12] the equation v
[02:13] times x is 0 where v is the matrix
[02:16] given by writing the vectors
[02:20] now we so in r this is in rn if you look
[02:23] at that matrix v
[02:24] x is 0 where the columns of v
[02:27] are the vectors v i
[02:30] then that the only solution is
[02:34] x is 0 and saying that it is linearly
[02:35] dependent means that there are solutions
[02:37] which are
[02:38] not the zero solution so this was linear
[02:41] dependence and linear independence
[02:43] particularly in the context of rn
[02:47] okay so let us first talk about what is
[02:50] the span of a set of vectors
[02:52] yeah so span is like an expanse right so
[02:54] how big can you get
[02:56] ah based on these vectors okay that's
[02:58] that's the idea of span
[03:00] okay so the span of a set s
[03:03] of vectors is defined as the set of all
[03:06] finite linear combinations of
[03:08] vectors of s and its denoted by span s
[03:12] so explicitly what that means is you
[03:15] take all linear combinations where your
[03:16] coefficients run over all possible
[03:18] values in
[03:19] r meaning each coefficient runs over all
[03:22] possible values in r
[03:24] and the span is that set
[03:28] now what is hidden here is that
[03:32] the span of s is a ah vector space in
[03:36] its own right meaning it is what is
[03:37] called the subspace of
[03:39] v ah what that means is if if
[03:42] if you take a linear combinations of
[03:46] elements within spanish then they are
[03:48] still in spanish
[03:49] and if you take um yeah and 0 is also
[03:53] there in particular by taking all the
[03:55] ai's to be 0.
[03:56] okay so here is an example so let let s
[04:00] be the set
[04:01] just the singleton set 1 comma 0
[04:05] this is a vector in r2 and you look at
[04:08] the set s which consists of this
[04:10] particular vector
[04:11] so this is a subset of r2 and we can ask
[04:14] what is the span of s
[04:16] so the span of s is a times 1 comma 0
[04:19] where a is in r which is the set of
[04:22] vectors a comma 0
[04:24] and we know that this is exactly the x
[04:27] axis
[04:28] in r two so the span of the vector one
[04:31] comma zero
[04:33] is the x axis okay so let us do a couple
[04:36] of other examples
[04:38] uh let us look at the set one comma the
[04:40] set consisting of the singleton
[04:42] element 1 comma 1 in r2 so
[04:45] you can see that the span of s is linear
[04:47] combinations of 1 comma 1 which
[04:49] means a times 1 comma 1 which is all
[04:52] vectors of the form a comma a so
[04:57] looking at this in r 2 this means you
[05:00] get the line
[05:01] y is equal to x right so the blue line
[05:04] is what
[05:05] what is span of s again again you can
[05:08] see that if you add vectors on this line
[05:10] you still remain on this line okay so
[05:12] let us see some more examples may be in
[05:14] r
[05:14] 3 this time so let us look at the set
[05:18] 1 0 0 and 0 1 0 in r 3 and let us ask
[05:21] what is the span of this set so if you
[05:24] take linear combinations
[05:26] you will get a times 1 0 0 plus b times
[05:28] 0 1 0
[05:30] which is all vectors of the form
[05:33] a comma b comma 0. so
[05:37] you can see this is exactly the x y
[05:39] plane so span is in this case
[05:41] is the x y plane ah which is drawn here
[05:44] in the picture
[05:47] okay so what is the spanning set for a
[05:49] vector space
[05:50] so let v be a vector space so a spanning
[05:53] set is
[05:54] a set such that span of s is equal to v
[05:57] yeah so that means we are looking at
[06:00] vectors
[06:01] so that if you take linear combinations
[06:03] of those vectors
[06:04] you can produce any vector in v so
[06:08] or in other words every vector of v is a
[06:11] linear combination
[06:12] of vectors belonging to this set s right
[06:14] that's what we mean by saying that span
[06:16] of s is v
[06:18] so let's uh look at the
[06:22] set 1 comma 0 and 0 comma 1 and r2
[06:25] then span of s is the entire r2 so this
[06:27] is a spanning set for
[06:29] r2 similarly if you take
[06:32] 1 0 zero zero one zero and one comma two
[06:35] so you add one more vector
[06:37] clearly still the span is going to be
[06:39] the entire r two
[06:40] and um you can change your elements a
[06:43] little
[06:44] so if you take the vectors one comma one
[06:46] and zero comma 1
[06:48] then the span of s is still r2 so how do
[06:51] i see that
[06:52] well one way of seeing it is that from 1
[06:55] comma 1 and 0 comma 1
[06:57] you can produce 1 comma 0 right by
[07:00] taking 1 comma 1 minus zero comma one
[07:02] so that will give you one comma zero so
[07:04] that means the span contains one comma
[07:06] zero and zero comma one
[07:08] so then if this span contains some
[07:11] vectors
[07:12] ah then the span of
[07:16] that set s is also contains the span of
[07:20] the
[07:20] vectors that you have produced in that
[07:22] span okay i will make this more precise
[07:24] in the
[07:25] in a second and let us look at an
[07:28] example in r3
[07:30] so if you look at the set of vectors one
[07:33] zero zero zero one zero and zero zero
[07:34] one
[07:35] then span of s is r three so let me
[07:37] quickly specify why
[07:38] that is the case ah so let us maybe look
[07:41] first at
[07:42] one zero and zero one so this first
[07:43] example so if you take
[07:45] ah x comma y ah in r two
[07:49] then you can write x comma y as
[07:53] x times one comma zero plus y times zero
[07:56] comma one
[07:57] right so this means every vector in r2
[08:00] can be written as a
[08:01] linear combination of these first two
[08:03] vectors so that tells you that
[08:05] the span of the
[08:09] span of 1 comma 0 and 0 comma one is
[08:11] indeed r two
[08:13] the same idea can be used for this if
[08:16] you take x y z
[08:17] in r three
[08:22] then x y z is x times one comma zero
[08:26] comma zero
[08:28] plus y times zero comma one comma zero
[08:32] ah plus z times zero comma zero comma
[08:34] one
[08:35] so this tells you that the span of these
[08:37] three vectors is the entire r r3
[08:39] so this is a spanning set for r3
[08:41] similarly the first one was the spanning
[08:42] set for r2
[08:44] okay how about the second one that is
[08:46] clear right i can still
[08:47] write x comma y as one comma x times one
[08:50] comma zero and
[08:51] plus y times zero comma 1. so really
[08:53] this third
[08:55] vector here is kind of redundant yeah so
[08:57] the point here is
[08:58] if your set s is a spanning set then
[09:01] every superset is also a spanning set
[09:04] so that that is that is what this
[09:07] example is trying to tell you
[09:08] and then let us look at the third
[09:09] example so for the third example
[09:13] uh what we want to say is the following
[09:17] ah so you can of course write every x y
[09:20] directly as a linear combination of one
[09:21] comma one and zero comma one which maybe
[09:23] i will do in a
[09:24] second but what i really wanted to point
[09:26] out was that
[09:27] one comma zero is ah one comma one minus
[09:30] zero comma one
[09:31] so therefore ah one comma zero lies in
[09:34] the
[09:36] span of
[09:40] this set 1 comma 1 and
[09:44] 0 comma 1 and certainly 1 commas
[09:47] 1 comma 0 lies and all certainly 0 comma
[09:49] 1 also lies because
[09:50] it's one of those vectors in s so
[09:53] therefore
[09:55] this set 1 comma 0 and 0 comma 1
[10:00] belongs to con is contained in span of
[10:04] in this span so that implies a
[10:07] span of this set is contained in span of
[10:09] this which implies the span is r2
[10:12] so the main point here is the following
[10:15] so what i am trying to say is the
[10:16] following
[10:17] if um a set t
[10:20] is contained in a set s then span of t
[10:25] is a is contained in span of s so this
[10:28] is in fact what is called a subspace
[10:31] ok and if it so happens that t is a
[10:34] spanning set
[10:35] that means s is also a spanning set yeah
[10:36] we that's what we just said that if you
[10:38] have a
[10:41] superset then then we are good so in
[10:43] particular one can also say the
[10:44] following that if
[10:46] ah t is contained in span of s
[10:50] which is what i am using here then span
[10:53] of t is contained in smaller phase
[10:57] so these are things that we will be
[10:59] doing as
[11:00] tutorial problems ah so i'll leave that
[11:03] for now
[11:05] fine so let's uh continue with this so i
[11:08] hope we have understood what is the
[11:09] spanning set so spanning set means
[11:10] a set such that every vector in v
[11:14] can be written as a linear combination
[11:15] of this some particular vectors
[11:19] from s okay so how do i get a
[11:23] get a spanning set uh so the
[11:26] way to do this is one way to do this is
[11:29] to
[11:30] add or maybe the right word here is
[11:32] append vectors to obtain a spanning set
[11:34] for r3 so i'll
[11:36] use the word append instead of add add
[11:39] may
[11:39] leave you confused by addition in the
[11:41] vector space that is not what we mean
[11:43] we mean append meaning take more and
[11:45] more vectors
[11:48] ok so we will try to build a spanning
[11:49] set for the vector space r3
[11:52] so start with s0 to be the empty set so
[11:54] this is the notation for the empty set
[11:56] a fee with a slightly tilted
[12:01] dash down the middle
[12:04] so then span of s0 is span of the empty
[12:07] set is 0 0 0.
[12:08] so there is something here already to
[12:10] point out
[12:11] namely that the span of the empty set is
[12:14] 0 0 0.
[12:16] you we can think of this in two ways one
[12:19] is that this is a convention
[12:21] the other is that this is the empty
[12:25] linear combination so the empty linear
[12:27] combination is always 0 that's
[12:28] that's again maybe a convention so from
[12:31] there it follows that
[12:33] 0 0 0 is the span of the empty set
[12:36] okay so this if if you are not if you
[12:39] find this
[12:39] uncomfortable then just take this as a
[12:43] convention or a definition that span of
[12:45] the empty set is the
[12:46] zero vector okay so since this is not
[12:50] the full vector space the full vector
[12:52] space is r three
[12:53] so zero zero zero is not the entire
[12:55] vector space r three
[12:56] you append a vector outside span of s
[12:59] zero in r three
[13:00] say zero to one to a zero and we call
[13:03] this new set s one
[13:05] okay so s1 is a 0 union
[13:08] this new vector 0 to 1. so here that's
[13:11] what i mean by append you put this
[13:12] inside your
[13:16] you create a new set with this vector
[13:17] add append it to your original set
[13:20] yeah and we are going to keep continuing
[13:21] this process this is how we will obtain
[13:23] a spanning set
[13:24] ok so what is span of s1 so span of s1
[13:28] is exactly this line shown here
[13:32] so the blue arrow is ah 0 to 1 which is
[13:35] a vector that we had
[13:36] and the span of s 1 is the line
[13:38] containing that arrow
[13:41] fine so now choose a vector outside span
[13:43] of s 1
[13:44] so as we can see it is just a line so
[13:46] like that means it is not
[13:48] the entire r3 so so we have vectors
[13:50] which are outside this
[13:51] ah outside this line so choose a vector
[13:54] outside span of s one
[13:56] so for example two two zero appended to
[13:59] s one and call that new set s two
[14:01] so s2 is s1 union with this
[14:04] appended vector 2 2 0 so span of s2 is
[14:08] this plane
[14:09] that you get so
[14:12] you can write down the equations of the
[14:14] for the plane which we will be doing
[14:16] eventually in this
[14:18] [Music]
[14:20] in match 2 but if if you can do it right
[14:22] away maybe you have learned this already
[14:24] in match 1 or
[14:25] maybe you have done it as part of some
[14:26] other course please do go ahead and
[14:28] write down what the equations for this
[14:29] plane are
[14:30] in any case you get a plane and so this
[14:33] is not the entire r2
[14:35] and so we can choose a vector outside
[14:37] this plane ah
[14:39] so let us say choose a vector outside
[14:42] span of s two
[14:43] say zero zero five and append it to s
[14:46] two
[14:46] and we will call that new set s three so
[14:48] s three is s two union
[14:50] zero zero five so you can see we are
[14:52] increasing the size of the set that we
[14:54] have
[14:54] okay so you keep adding more and more
[14:56] vectors and
[14:58] hopefully as you keep doing this you
[15:01] will hit a spanning set
[15:04] okay so now look at any arbitrary vector
[15:06] x y z
[15:08] in r3 and we can write it in the
[15:10] following way
[15:11] ah so this is something you have to
[15:12] check x y z is y minus x by two times
[15:15] zero to one
[15:16] plus x by two times two two zero
[15:20] plus x minus y plus two z by ten times
[15:22] zero zero five you might
[15:24] find this puzzling where did i suddenly
[15:27] come up with these
[15:28] coefficients from ah but you can
[15:30] certainly check that this is correct
[15:32] ok so i leave you to check it is correct
[15:34] how to actually obtain these
[15:36] coefficients is something
[15:38] we will see eventually or you can try to
[15:41] think of this as
[15:42] solving a system of linear equations
[15:44] okay we have done this before
[15:46] and i will ask you to try to think about
[15:49] how to do this
[15:51] so you can treat your coefficients as
[15:53] variables
[15:54] we have done that in the previous video
[15:56] for linear independence
[15:58] and you can try and write xyz as a
[16:00] linear combination of this
[16:01] ok so what is the point the point is
[16:05] span of s3 is the entire r3 right how
[16:07] did i get that because xyz can be
[16:09] expressed as a linear combination of
[16:11] these three vectors so that means the
[16:13] span is the entire r3
[16:16] so s3 is a spanning set for
[16:20] r3 so what did we do we started with the
[16:23] empty set
[16:24] and then we kept adding vectors but we
[16:26] added them in a particular way
[16:28] we added them so that the new vector
[16:30] that we added
[16:31] was not in the span of the vectors that
[16:33] we had so far ok and
[16:35] in this way we created a scanning set so
[16:38] this is a general template
[16:40] to create a spanning set let us do
[16:43] another example with the same idea
[16:45] so start with s naught with the empty
[16:47] set as before
[16:48] we know by convention or definition that
[16:51] the span of the empty set is 0 0 0
[16:54] append any vector which is not in the
[16:56] span of s naught
[16:57] let us say in this case we choose 3 0 0
[17:01] call this new set s 1 so s 1 is the set
[17:04] 3 0 0
[17:06] and what's the span of s 1 it's the x
[17:09] axis
[17:10] right if you take 3 0 0 and take it span
[17:12] that means you will get vectors of the
[17:14] form
[17:15] 3 a comma 0 comma 0 which is exactly
[17:19] what the vectors on the x axis look like
[17:22] so the blue arrow is the
[17:27] vector 3 0 0 and the line of course is
[17:31] the x
[17:31] axis ok so let us choose a vector which
[17:34] is
[17:35] outside the x axis let us say 2 to 1
[17:38] and let us append it to s 1 and call the
[17:41] new set
[17:41] s 2. so s 2 is the set 3 0 0 and
[17:46] 2 2 1 let us look at what is span of s 2
[17:49] well it is this plane its this plane
[17:52] certainly passes through the x
[17:53] axis now you can see it intersects the x
[17:56] axis somewhere
[17:57] and it also contains the vector 2 2 1.
[18:01] so i will again encourage you to check
[18:03] what is the equation of this plane
[18:05] in any case it is a plane so it is not
[18:07] the entire r3
[18:08] so you can choose a vector which is
[18:10] outside this plane
[18:12] which is the span of s two so let us say
[18:14] we choose a vector one three three
[18:16] and you append it to s two and you call
[18:18] the new set s three
[18:21] so s three is the set of vectors three
[18:24] zero zero
[18:24] two two one and the vector one three
[18:27] three
[18:28] ok and now once again we will
[18:32] sort of say that every vector xyz can be
[18:35] written as
[18:36] a linear combination of these three
[18:39] vectors
[18:40] and you have i will encourage you to
[18:42] work out what the coefficients are
[18:45] ah by solving the corresponding system
[18:47] of linear equations
[18:48] ah if not i have given the coefficients
[18:51] here and you can check that this
[18:53] indeed works out so what is the point
[18:56] the point is every vector in r three can
[18:58] be written as a linear combination of
[19:00] these three vectors
[19:01] that means ah the span of s three
[19:04] is the entire r3 which means s3 is a
[19:07] spanning set for r3
[19:10] okay which now brings us to this idea of
[19:12] a basis this is the main
[19:13] emphasis of this video so what is the
[19:16] basis
[19:17] so basis b of a vector space v
[19:20] is a linearly independent subset of v
[19:23] that spans v
[19:24] okay so it has two properties one that
[19:27] it spans
[19:28] uh v so it's a spanning set for v and
[19:31] the other is
[19:32] that it's a linearly independent set now
[19:34] notice what's happening here
[19:36] span you know if you want uh
[19:39] something to span v the idea is you keep
[19:42] adding elements right so
[19:44] you you add as many elements ah as you
[19:47] like you keep adding
[19:48] vectors and hopefully ah if you have
[19:52] enough vectors
[19:53] then they will be able to span v yeah of
[19:55] course we did this
[19:57] uh appending of vectors in a very
[19:59] particular way
[20:00] yeah we kept choosing vectors which are
[20:02] outside the span of the
[20:03] previous few vectors that we have chosen
[20:06] so because we did
[20:07] did that the new vector that we added
[20:11] ah was not a linear combination of the
[20:15] original vectors
[20:16] which meant it was linearly independent
[20:19] the the sets that we
[20:20] keep obtaining are linearly independent
[20:22] sets yeah so in fact what we did
[20:25] in our previous examples was a method
[20:28] to not just find a spanning set but
[20:30] actually find the basis
[20:32] ah so so there are two contradict i mean
[20:35] there are two sort of
[20:36] opposite things happening here one is
[20:37] that you would like this set
[20:39] to be a spanning set which means you
[20:41] would like it to be fairly large
[20:43] on the other hand you would like it to
[20:45] be linearly independent which means you
[20:46] do not want it to be too large
[20:48] after all remember that for example if
[20:50] you have rn
[20:51] then any set which has
[20:54] cardinality more than n
[20:57] so n plus 1 or more
[21:01] is already linearly dependent so in rn
[21:03] if you want to
[21:04] have a basis you would want it to if you
[21:07] wanted
[21:08] in particular to be linearly independent
[21:10] it can have size at most
[21:11] n on the other hand for a spanning set
[21:16] you would have you would want it to be
[21:18] very large right
[21:20] so the basis is sort of an optimal
[21:23] middle
[21:23] it is both linearly independent and
[21:25] spanning so let us start with the most
[21:28] standard example and in fact this is
[21:30] called the standard basis
[21:31] so let e i belong to r n we have seen
[21:33] this example by the way
[21:34] in our previous examples of a spanning
[21:37] set
[21:38] so 1 0 and 0 1 is a spanning set for r 2
[21:41] it is actually a basis
[21:43] and one zero zero zero one zero and zero
[21:46] zero one
[21:46] is a spanning set for r three it is
[21:48] actually a basis and both of them
[21:52] are what are called as standard basis ah
[21:54] and this is a more
[21:56] in more generality for any rn you can do
[21:58] the same thing okay
[22:00] so let e i be the vector with
[22:03] ith coordinate one and all other
[22:06] coordinates
[22:06] zero for example e one is
[22:09] the first coordinate is one and the
[22:11] other coordinates all the other
[22:13] coordinates are zero so one zero zero
[22:15] uh all the way up to the nth coordinate
[22:17] which is also zero
[22:19] okay so let's look at the set uh
[22:22] let's say capital epsilon which is e 1 e
[22:25] 2 e n this is a subset of r
[22:27] n and the claim is that this is a basis
[22:31] for
[22:31] rn so let's uh
[22:35] try to see why that's the case if you
[22:37] take this is the same idea that we have
[22:39] done for
[22:40] ah in the case of r2 and r3 which where
[22:42] we wrote it down so if you take anything
[22:44] of the form x 1 x 2 x n
[22:48] i can write this as x 1 times e 1
[22:51] plus x 2 times e two
[22:55] plus x n times e n
[22:58] so it is a spanning set for ah rn
[23:01] so what we have proved is that the span
[23:03] of
[23:04] this set epsilon is rn
[23:08] on the other hand these are clearly
[23:10] linearly independent because if you take
[23:12] a
[23:12] linear combination which is 0
[23:18] right but let us expand out this vector
[23:20] in terms of coordinates
[23:21] so what is the ith coordinate what is
[23:23] the jth coordinate so jth coordinate of
[23:25] the
[23:29] of the left hand side
[23:34] is a j but for the right hand side the
[23:38] jth coordinate is 0 that means a j must
[23:41] be 0
[23:42] and for all j okay that means it is
[23:45] linearly independent so therefore
[23:48] this is linearly independent
[23:52] ok so that proves its a basis so this is
[23:55] called the standard basis for
[23:56] rn okay so let us take a step back and
[23:59] ask what have we done
[24:00] in this video we have seen that
[24:04] there is a notion of a spanning set
[24:05] namely a set of vectors
[24:07] so that every vector can be written
[24:08] written as a linear combination of
[24:11] ah these vectors ah so that is a
[24:13] spanning set for the vector space v
[24:15] and then we have seen that there is a
[24:17] notion called a basis
[24:18] so basis is a set of vectors which is
[24:20] both linearly independent and spanning
[24:23] thank you