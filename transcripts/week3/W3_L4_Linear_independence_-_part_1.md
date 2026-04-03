# W3_L4: Linear independence - part 1

**Week:** Week 3
**YouTube URL:** https://www.youtube.com/watch?v=Uf5nqIJv1Fk

---

## Transcript

[00:00] [Music]
[00:14] hello and welcome to the maths 2
[00:15] component of this online bsc
[00:18] program in data science today we are
[00:20] going to study
[00:22] the topic of linear independence in
[00:25] the last couple of videos we have
[00:27] studied the idea of linear dependence
[00:30] so in particular we saw the notion of
[00:34] linear combinations of vectors
[00:38] so let me remind you that now we are
[00:40] studying vectors
[00:41] in the sense of elements of a vector
[00:43] space which we defined
[00:45] two videos before this so we defined the
[00:48] notion of a linear combination
[00:50] which is nothing but a sum summation a i
[00:52] v i where
[00:54] v i's are vectors in a vector space
[00:57] and a i's are real numbers
[01:01] ah so this is a finite sum
[01:04] a1 v1 plus a2 v2 plus and vn
[01:07] and we talked about linear dependence so
[01:11] today in this video we are going to talk
[01:13] about linear independence
[01:14] let us quickly recall what is linear
[01:16] dependence so we say that a set of
[01:18] vectors v 1 v 2 v
[01:19] n from a vector space v we call them
[01:22] linearly dependent
[01:23] if there exist scalars a 1 a 2 a n such
[01:26] that
[01:28] a 1 v 1 plus a 2 v 2 plus a and v n is 0
[01:32] now of course there is a crucial
[01:34] condition extra which is that not all of
[01:36] the
[01:37] the coefficients should be zero yeah so
[01:40] at least
[01:40] some coefficient must be non-zero yeah
[01:43] if all the coefficients are zero of
[01:45] course we know that
[01:47] a1 v1 plus a2 v2 plus a and bn is zero
[01:49] so the point is that there is some
[01:51] linear combination
[01:52] with non-zero coefficients yeah so some
[01:55] coefficients are non-zero
[01:56] so that the sum is still zero so if
[02:00] there exists such scalars then we say
[02:02] that v1 v2 vn
[02:04] is linearly dependent okay so
[02:06] equivalently
[02:07] in terms of linear combinations which is
[02:10] something i defined last time and we
[02:12] just talked about
[02:14] if we can express the 0 vector as a
[02:16] linear combination
[02:18] of v 1 v 2 v n with non-zero
[02:20] coefficients which means that there are
[02:22] some coefficients meaning at least one
[02:23] coefficient which is non-zero
[02:26] uh then we say that v1 v2 vn are
[02:28] linearly dependent
[02:30] so we have studied this notion in the
[02:32] previous video
[02:33] so in this video we are going to talk
[02:36] about linear
[02:37] independence so we say that a set of
[02:39] vectors v 1 v
[02:40] 2 v n from a vector space v we call them
[02:43] linearly independent
[02:45] if they are not linearly dependent so
[02:47] this is a very
[02:48] easy definition we have already studied
[02:52] what is linear
[02:53] dependence so we will say they are
[02:55] linearly independent
[02:56] if they are not linearly dependent
[03:00] okay so what does this mean in terms of
[03:03] linear combinations and summing up to 0.
[03:07] so the equivalent formulation is
[03:10] a set of vectors v 1 v to v n from a
[03:12] vector space v
[03:13] is said to be linearly independent if
[03:16] the equation a 1 v 1
[03:19] plus a 2 v 2 plus a n v n is 0
[03:22] can only be satisfied when a i is 0.
[03:26] so just to go back to dependence
[03:28] dependence said
[03:30] there is some linear combination there
[03:32] is some ah
[03:33] there are some scalars a 1 a 2 a n not
[03:37] all of which are 0
[03:38] so that when you take this sum a 1 v 1
[03:40] plus a 2 v 2 plus a and v n you get 0.
[03:42] linear independence is saying if there
[03:45] is a
[03:46] linear combination meaning if there is a
[03:48] sum a one v one plus a two v two plus a
[03:50] and b n which is zero
[03:52] then the only way in which this can
[03:53] happen is if the ais are all zero
[03:56] ok fine so equivalently in terms of
[04:01] linear combinations we are saying that a
[04:03] set of vectors v 1 v 2 v
[04:04] n is linearly independent
[04:08] if the only linear combination
[04:11] of these vectors v 1 v 2 v n which
[04:13] equals zero
[04:14] is the linear combination with all
[04:16] coefficient zero
[04:17] ok so let's take a pause and understand
[04:20] what we are saying here
[04:22] if the coefficients are zero certainly
[04:25] summation a i v i is zero right if all
[04:28] the ai's are 0
[04:30] then summation a vi is going to be 0.
[04:33] so what we are saying is that if the sum
[04:36] is 0 then the coefficients must be 0 in
[04:38] other words
[04:39] the only way of getting 0 as a linear
[04:43] combination is if the coefficients are 0
[04:45] so i want to emphasize that this means
[04:48] we have to
[04:49] to check something is linearly
[04:50] independent which we will do at the end
[04:52] of this video
[04:54] ah we have to check that all the a i's
[04:57] are zero
[04:59] okay so let's uh do some examples
[05:02] so let's first check out this example in
[05:04] r2
[05:06] so look at the two vectors minus one
[05:08] comma three and 2 comma 0
[05:12] so we want to see if which coefficients
[05:16] give us that the sum is 0 so you write
[05:19] this
[05:19] equation a times minus 1 comma 3 plus b
[05:23] times 2 comma 0 is 0 comma 0 and then
[05:26] you try to solve for a
[05:27] and b so
[05:30] if you do that you equate the
[05:33] corresponding coordinates so the first
[05:34] coordinate
[05:35] for the left hand side is minus a plus
[05:37] two times b
[05:39] the first coordinate for the right hand
[05:40] side is zero they are equal so that
[05:42] means
[05:43] these two must be the same so minus a
[05:45] plus two b is zero
[05:46] and the second coordinate is three times
[05:48] a plus zero times b which is just three
[05:50] times a
[05:51] and the second coordinate on the right
[05:52] is 0 so you get 3 times a is 0.
[05:55] so we have a system of linear equations
[05:57] minus a plus 2 b
[05:58] 0 and 3 a 0. now we know how to solve
[06:02] a system of linear equations we in fact
[06:05] know very general method for that
[06:06] and in indeed towards the end of the
[06:08] video we will start using that method
[06:10] but for now you can see this is very
[06:12] easy to solve namely 3 times a 0 so a
[06:15] must be 0
[06:16] and once a 0 you put that into the first
[06:19] equation
[06:20] and you get that 2 times b 0
[06:23] so p 0 so the
[06:26] unique solution for this system is a 0
[06:30] and b 0 which means that
[06:33] if a times minus 1 comma 3 plus b times
[06:35] 2 comma 0 is 0 comma 0
[06:38] the only solutions of the only
[06:40] coefficients
[06:42] which yield this identity to be true
[06:45] are a 0 and b is zero that means the
[06:48] vectors minus one comma three and two
[06:50] comma zero
[06:51] are linearly independent
[06:54] ok let us look at the zero vector this
[06:57] is a
[06:58] very special vector in our vector space
[07:01] so
[07:02] suppose i have a set of vectors v one v
[07:04] to v n
[07:05] and one of the vectors here is the zero
[07:07] vector okay so suppose v
[07:09] i is zero okay one of them is zero let
[07:11] us say that one is v
[07:12] i so then what you do is you choose the
[07:15] ith coordinate
[07:16] sorry you choose the ith coefficient to
[07:19] be 1
[07:20] and you choose the jth chord
[07:24] coefficient where j is not i to be 0.
[07:29] so if you do that then look at this
[07:31] linear combination
[07:32] a 1 v 1 plus a 2 v 2 plus a and v n
[07:36] now for all the
[07:40] [Music]
[07:41] vectors where j is not i a j times v j
[07:45] is going to be 0 because a j is 0
[07:48] on the other hand for the ith vector you
[07:50] have a i times v
[07:51] i v i is 0 so a i times v i is also 0.
[07:55] so for each of these
[07:57] terms a 1 v 1 a 2 v 2 etcetera up till a
[08:01] and b n
[08:01] each term is 0 hence the sum is also 0
[08:05] so the linear combination is 0
[08:08] but of course all the coefficients are
[08:10] not 0 because a i is 1
[08:12] right so one of the coefficients is 1.
[08:14] so not all these coefficients are 0.
[08:16] so what does that mean that means a set
[08:19] of vectors
[08:20] which contains the 0 vector is always a
[08:24] linearly dependent set so this is
[08:26] not linearly independent okay so if your
[08:28] v 1 v 2 v n happens to contain 0
[08:31] then this is linearly dependent it is
[08:34] not linearly independent
[08:36] so let us keep this in mind ok so now
[08:39] let's
[08:40] ask the question when are two non-zero
[08:42] vectors linearly independent
[08:44] so we have already seen that if if a
[08:45] vector is zero
[08:47] uh you take that in your in your
[08:49] collection of vectors
[08:50] then that's a linearly dependent set so
[08:53] now we can
[08:54] take two non-zero vectors that's your
[08:57] first
[08:59] starting point for for our discussion so
[09:02] let us take two non-zero vectors and ask
[09:05] when are they linearly independent when
[09:07] is the set of vectors linearly
[09:09] independent
[09:09] okay so let v one and v two be two
[09:12] non-zero vectors
[09:14] ok so suppose v one and v two are
[09:17] linearly dependent
[09:18] ok so we want to study when they are
[09:20] linearly independent
[09:22] instead we will study when they are
[09:23] linearly dependent and from there we
[09:25] will conclude when they are linearly
[09:26] independent
[09:28] so suppose v 1 and v 2 are linearly
[09:30] dependent
[09:31] that means a 1 v 1 plus a 2 v 2 is 0 for
[09:34] some coefficients a 1 and a 2
[09:37] and these coefficients both of these
[09:40] coefficients are not
[09:42] 0. so we are saying a 1 v 1 plus
[09:46] a 2 e 2 is 0 for some coefficients a1
[09:49] and a2
[09:50] where both of them mean at least one of
[09:53] them is non-zero
[09:54] right so at least one
[10:00] of a1
[10:03] or a two is not zero yeah that is the
[10:06] definition of
[10:08] a linear dependence
[10:11] okay but the the point is here since the
[10:14] vectors are non-zero
[10:16] if one of them one of these coefficients
[10:18] is non-zero
[10:20] then the other better be non zero
[10:21] because otherwise you will have
[10:23] let us say a one is non zero but a2 is
[10:25] zero then you will have a one times v
[10:27] one
[10:27] which is a non zero vector equates to
[10:30] zero
[10:31] that cannot be possible right so if one
[10:33] of them is not zero
[10:35] then both of them are not zero and
[10:36] really that's what this statement here
[10:38] means so keep in mind that one of a one
[10:41] or a two is non-zero
[10:42] and so both of them must be nonzero
[10:44] that's that was the
[10:46] import of this statement here okay
[10:49] so dividing by a 1 and putting c is
[10:52] minus a 2 by a 1 we get that v 1 is
[10:54] c times v 2 and so v 1 and v 2 are
[10:57] multiples of each other
[10:58] right so what are we say what are we
[11:00] saying we are saying that if v 1 and v 2
[11:02] are linearly dependent
[11:03] then v 1 and v 2 are multiples of each
[11:05] other yeah
[11:06] and we can go backwards right we can
[11:08] reverse this
[11:10] the set of statements so we can reverse
[11:13] the implications
[11:14] above and conclude that if v 1 and v 2
[11:16] are multiples of each other
[11:18] then they are linearly independent right
[11:19] if v 1 and v 2 are multiples
[11:21] then v 1 is c times v 2 for some c
[11:25] and then note that c is nonzero
[11:29] because um
[11:34] because both v one and v two are non non
[11:36] zero vectors
[11:37] and then you can write this as v one
[11:39] minus c times v two
[11:41] is 0 and so the coefficients are 1 and
[11:43] minus c and in fact both of them are
[11:45] nonzero
[11:46] actually it's enough for them one of
[11:47] them to be non-zero but in this case
[11:49] both of them are non-zero
[11:51] and so we get that they are linearly
[11:53] dependent yeah so that's what i mean by
[11:55] we can reverse the implications
[11:57] okay so the conclusion is if two non
[12:00] you have two nonzero vectors then they
[12:03] are linearly independent precisely when
[12:04] they are not
[12:05] multiples of each other right we have
[12:07] seen that linear dependence
[12:09] of two non-zero vectors is equivalent to
[12:11] them being multiples of each other
[12:13] so linear independence is exactly same
[12:17] as saying that they are not multiples of
[12:19] each other
[12:19] okay let me qualify this coefficients a
[12:22] one and e two
[12:23] ah so where at least
[12:28] one of
[12:32] a one or a two is not zero
[12:38] yeah and as i said because both the
[12:40] vectors are non-zero and you have only
[12:41] two vectors
[12:42] in this case both of them must be
[12:45] nonzero
[12:46] that is what we are seeing okay so the
[12:48] take home from here is
[12:50] if you have two nonzero vectors then
[12:52] linear independence means that they are
[12:54] not multiples of each other
[12:55] so the point one is trying to make here
[12:57] is that linear independence as a
[13:01] notion is a very useful and important
[13:04] notion and its saying something
[13:06] ah very important about these vectors
[13:10] namely that they are not multiples of
[13:11] each other
[13:12] ok so let us ask the same of
[13:15] what happens to three vectors let us ask
[13:18] the same question for three vectors
[13:20] when are three vectors linearly
[13:21] independent what does that say
[13:24] okay so we will do the same thing we
[13:26] will first study when they are dependent
[13:28] and then from there we will try to draw
[13:29] conclusions for when they are
[13:30] independent
[13:31] so suppose v one v two and v 3 are
[13:33] linearly dependent
[13:36] then we have an equation of the form a 1
[13:39] v 1 plus a 2 v 2 plus a 3 v 3 0
[13:42] where for some coefficients a 1 a 2 a 3
[13:45] where
[13:46] at least one of the coefficients is
[13:47] non-zero which is exactly what i wanted
[13:49] to say on the previous slide as well
[13:52] yeah at least one of the these is
[13:53] non-zero
[13:55] okay so let's assume that a1 is non-zero
[13:59] we'll
[14:00] in a minute we'll also study the other
[14:02] cases but
[14:03] this is a prototype case let's study a 1
[14:06] is not 0.
[14:07] so if a 1 is not 0 i can divide by a 1
[14:10] and i can take the terms for v 2 and v 3
[14:14] on the other side
[14:15] and i can write v 1 as b 2 v
[14:18] 2 plus b 2 with sorry b 3 v 3 this
[14:21] should be b
[14:22] 3 v 3
[14:25] where b 2 is minus a 2 by a 1
[14:28] and b 3 is minus a three by a one
[14:32] ok so v one is a linear combination of
[14:36] the other two vectors that that is the
[14:37] main point this is b
[14:38] three as i said ok
[14:41] so similar now we can make the same
[14:43] argument of a2 is non-zero or a3 is not
[14:45] remember that we know that one of them
[14:46] is non-zero if it is not a1
[14:49] maybe a2 is non-zero maybe a3 is
[14:51] non-zero
[14:52] and you can see that you can make the
[14:54] same argument and express
[14:56] so if a2 is non-zero you can express v2
[14:58] as a linear combination of the other two
[15:00] and if a3 is non-zero you can express v3
[15:04] as a linear combination of the other two
[15:05] vectors okay
[15:06] and i again ah
[15:09] note that this is b3
[15:13] so once again these implications are
[15:15] reversible
[15:17] so if lets say if
[15:21] if v1 is b2 v2 plus b3 v3
[15:25] right so then i can write i can take
[15:29] the v two and v three terms on the other
[15:31] side and write v one minus b two v
[15:33] two minus b three v three zero but we
[15:36] remember that v one has coefficient 1
[15:40] so i get 1 times e 1 minus
[15:43] b 2 times v 2 minus b 3 times v 3 is 0
[15:48] which tells me that i have a linear
[15:49] combination where at least one of the
[15:51] coefficients is non-zero which one
[15:53] the coefficient for v one because that
[15:55] is one
[15:57] and so this is linear ah they are
[15:59] linearly dependent
[16:00] and you can argue the same way if v two
[16:03] is a linear combination of
[16:04] ah v one and v three or v three is a
[16:07] linear combination of v 1 and v 2.
[16:09] ok so these implications are reversible
[16:11] so the upshot is that
[16:13] if you have 3 vectors v 1 v 2 v 3 which
[16:15] are linearly dependent
[16:17] this is exactly the same as saying that
[16:19] one of these vectors
[16:20] is a linear combination of the other two
[16:24] vectors
[16:26] so now we can talk about linear
[16:29] independence we have studied when they
[16:30] are linearly dependent
[16:32] so we can now answer the question about
[16:35] linearly independent
[16:36] so if three vectors are linearly
[16:38] independent then none of these vectors
[16:41] is a linear combination of the other two
[16:44] that's what we are seeing
[16:45] okay so you can think of this
[16:46] geometrically i i will do that in a few
[16:49] minutes
[16:50] but already you can start thinking of
[16:51] what this means in terms of geometry
[16:55] so the conclusion here is the take home
[16:58] right if three vectors are linearly
[17:00] independent
[17:01] this is exactly the same as saying that
[17:03] none of them
[17:04] is a linear combination of the other two
[17:07] fine let us look at an example in r3
[17:10] so let us take these three vectors 1 1 2
[17:12] 1 2 0 and 0 2
[17:14] 1 so we want to ask whether or not they
[17:18] are linearly independent
[17:19] so let us take some
[17:23] arbitrary coefficients a b and c so a
[17:26] times 1 1 2 plus b times 1 to 0 plus c
[17:28] times 0 to 1 is 0 0 0. so we equate this
[17:31] to 0 0
[17:32] 0 and then we ask can we
[17:35] get from here what are the choices for a
[17:38] b c
[17:40] in particular is there a choice where at
[17:41] least one of a b or c is non-zero
[17:45] so we have the following system of
[17:46] linear equations how do we get this by
[17:48] equating the
[17:50] corresponding coordinates so the first
[17:51] coordinate on the left hand side is
[17:53] a times 1 plus b times 1 plus c times 0
[17:56] which is a plus b
[17:58] the first coordinate on the right hand
[17:59] side is zero so this is a plus b
[18:01] zero ah similarly if you
[18:04] equate the second coordinates you get a
[18:07] plus two b plus two c
[18:08] is zero and the third coordinate then
[18:11] you get two a
[18:12] plus zero times b plus 1 times c is 0
[18:15] so that's how you get this system of
[18:17] equations now let's solve for a b
[18:20] and c and see if we can get solutions
[18:24] which are non-zero
[18:26] so from the first equation we get that b
[18:29] is minus a
[18:30] from the third equation we get c is
[18:32] minus two a
[18:34] if you substitute into the middle
[18:35] equation you get some
[18:38] combination of ah a's is uh
[18:42] not zero so in specifically you get uh
[18:46] b my sorry a minus two times a
[18:49] minus four times a so
[18:52] a minus ah six times a so minus 5 a
[18:56] is 0 which tells you that a is 0 and
[18:58] then once a is 0 b is minus a so b is 0
[19:01] and c is minus 2 l so c 0 so the only
[19:04] equation for this system is a
[19:06] is b is c is 0.
[19:09] so what have we achieved we have
[19:11] achieved that
[19:12] if you have an equation like this with
[19:15] coefficients a b
[19:16] and c then the only way this equation is
[19:19] satisfied
[19:20] when i say this equation i mean this
[19:23] equation here
[19:26] the only way this equation is satisfied
[19:28] is when a is 0
[19:29] b 0 and c 0 that tells us that these 3
[19:32] vectors 1 1 2 1 2 0 and 0 to 1
[19:36] are linearly independent so we have seen
[19:38] in this video
[19:40] the notion of linearly a linearly
[19:42] independent set of vectors
[19:44] so we say that a set of vectors is
[19:46] linearly independent
[19:48] if they are not linearly dependent
[19:52] which really means that if you take a
[19:53] linear combination of these vectors
[19:55] and equate it to 0 the only way that is
[19:58] possible is if all the coefficients are
[20:00] 0
[20:00] thank you
[20:06] you