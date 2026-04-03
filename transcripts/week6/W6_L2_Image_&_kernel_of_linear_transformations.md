# W6_L2: Image & kernel of linear transformations

**Week:** Week 6
**YouTube URL:** https://www.youtube.com/watch?v=e4BXKGcntiQ

---

## Transcript

[00:00] [Music]
[00:14] hello and welcome to the match 2
[00:15] component of the online bsc program on
[00:18] data science
[00:19] in this video we are going to study the
[00:20] notion of the image and kernel
[00:23] of linear transformations so remember
[00:25] previously that we have studied the
[00:27] notion of
[00:28] the null space so this is some for a
[00:30] matrix
[00:31] so this is some analogous thing for a
[00:33] linear transformation
[00:35] ah so for a matrix we know what is the
[00:37] row space or the column space
[00:39] and that is the analogous notion for a
[00:41] linear transformation is the image
[00:44] so let's start by the different from the
[00:46] definitions
[00:48] so let f v to w be a linear
[00:49] transformation and
[00:51] define the kernel of f which is denoted
[00:53] by k e r
[00:54] curve of f as kernel of f is all those
[00:58] vectors v
[01:00] such that f of v is zero so v and w are
[01:02] vector spaces
[01:03] f is a linear transformation and we are
[01:05] looking at all those vectors
[01:07] so that f of v is zero now it is easy to
[01:10] check that kernel of v
[01:11] a kernel of f is actually a subspace of
[01:14] v which means it is a vector space in
[01:16] its own right
[01:17] what that means is if you take a linear
[01:19] combination of
[01:21] elements of kernel of v they still
[01:23] belong to kernel of v
[01:25] ok define the image of f ah this is
[01:28] denoted by
[01:29] i m of f sometimes we will use a little
[01:31] lie and sometimes we will use capital i
[01:33] so that that may ah that notation will
[01:37] be a bit
[01:38] vague ah so we will define it as all
[01:41] those vectors w
[01:43] so that there exists v in v so that w is
[01:46] equal to f of v
[01:47] so this is nothing but the usual
[01:50] definition of the range of a function
[01:52] right if you have a function between
[01:54] two spaces or two sets we call the range
[01:58] of f
[01:58] as the set of values which the function
[02:01] takes
[02:02] right so that this is exactly the range
[02:04] of the function so image of
[02:06] f is another name for the range of the
[02:08] function f
[02:09] and i think you have studied range of a
[02:11] function in maths one
[02:12] in case if not i i'll just recall for
[02:14] you that range of a function is the set
[02:16] of values which
[02:17] the function f takes
[02:21] ok ah so anyway if you didn't follow
[02:25] what i just said we will anyway look at
[02:27] some examples
[02:28] ah ok before that let me also comment on
[02:31] the previous slide that
[02:32] the image of f is also a subspace of w
[02:36] so if two vectors are in the image the
[02:38] sum is also in the image
[02:40] because you can take so if w 1 is v f of
[02:43] v 1 and
[02:44] w 2 is f of v 2 then you can look at f
[02:47] of v 1 plus v 2 that is exactly w 1 plus
[02:49] w 2 because remember f is a linear
[02:51] transformation
[02:52] and that means w 1 plus w 2 is also in
[02:54] the image similarly if you have
[02:57] alpha times w where w is in the image
[03:00] then w is f of v so you look at alpha
[03:03] times v
[03:04] then f of alpha v is alpha times f of v
[03:06] is
[03:07] alpha times w so alpha w is also in the
[03:10] image
[03:11] ah both of these remember use i mean in
[03:13] the proofs
[03:15] that i gave the statements that i just
[03:17] made ah
[03:18] the fact that the linear transformation
[03:20] was crucially used so this is not true
[03:21] for
[03:23] functions and so on for other things
[03:25] okay
[03:26] so let's look at some examples uh to get
[03:29] our ideas straight so look at the
[03:32] function
[03:33] from r 2 to r 2 f x y is 2 x comma y
[03:36] first of all why is this a linear
[03:38] transformation because each coordinate
[03:40] is
[03:40] a linear combination remember that
[03:43] linear combinations if each coordinate
[03:44] is a linear combination
[03:46] that is exactly what a linear
[03:47] transformation is when it comes to
[03:50] functions from rn to rm so 2x is a
[03:54] linear transformation of x and y
[03:56] and y is a linear transformation of x
[03:58] and y so this is indeed a
[04:03] linear transformation so each of these
[04:04] are linear combinations
[04:06] so this is a linear transformation okay
[04:09] so what is the kernel of f
[04:10] the kernel of f is all those values so
[04:12] that f of that
[04:14] number x comma that vector x comma y is
[04:17] uh 0 0 where 0 in the
[04:23] co domain r2 so 0 in the vector space r2
[04:26] so 0 and r2 is 0 comma 0. so in the
[04:30] previous slide also note that we said f
[04:31] of v is equal to 0
[04:33] by that 0 we mean the 0 in w
[04:37] okay so here we have
[04:40] we want to look for those x y such that
[04:42] f of x y is equal to zero comma zero
[04:45] so it is clear that if two x comma y is
[04:47] zero comma zero
[04:48] then two x is zero and y is zero which
[04:50] will tell us that x is zero and y is
[04:52] zero
[04:53] so the kernel is exactly zero comma zero
[04:56] so the kernel is the zero element or the
[04:58] zero vector in r2
[05:01] okay what is the image of f the image of
[05:03] f is the
[05:04] entire r2 why is that so if you want to
[05:06] write
[05:07] a vector w in r 2 as
[05:12] the image of some element then what
[05:14] would you do you would look at
[05:18] suppose w is equal to u comma v then you
[05:20] look at u by 2 comma v
[05:23] and if you apply f on u by 2 comma v you
[05:25] get
[05:26] 2 times u by 2 which is u
[05:29] and v so that that tells us that
[05:32] u u comma v is in the image so every
[05:36] vector u comma v is in the image that
[05:39] means the image is the entire
[05:41] space r 2 the entire vector space ok
[05:44] consider the example
[05:46] r 2 to r 2 f of x y is 2 x comma 0 again
[05:48] this is a linear transformation because
[05:50] each coordinate is a
[05:52] linear combination so
[05:55] ah what is the image and what is the
[05:57] kernel
[05:59] so kernel of f is 0 comma y why is this
[06:03] suppose f of x y is equal to zero we
[06:05] want to
[06:06] from there we want to solve for x comma
[06:08] y
[06:10] so that means two x comma zero is equal
[06:12] to zero comma zero
[06:14] that means two x is zero and zero is
[06:15] equal to zero so
[06:17] zero zero does not yield us any ah
[06:21] anything on x comma y any restriction on
[06:23] x comma y
[06:24] two x equals zero yields us the
[06:26] restriction x is equal to zero
[06:29] that means y can be anything right so
[06:31] the kernel of f is zero comma y
[06:34] so this is the entire y axis
[06:38] right 0 comma y is the y axis ok and
[06:41] what is the image of f
[06:42] image of f is well you have f of x comma
[06:46] y is 2 x comma zero
[06:47] so now suppose you look for an element u
[06:49] comma v
[06:50] ah and you ask when can u comma v be
[06:53] equal to two x comma zero
[06:55] so the first thing you need is that v
[06:57] zero
[06:58] that means this element must this vector
[07:00] must lie on the
[07:02] x axis and then you we have to ask
[07:05] whether on the x axis it can take all
[07:08] possible values
[07:09] so you get the equation u is 2 x which
[07:11] if you solve you get x is u by 2
[07:14] which means if you put x comma y equal
[07:16] to u by 2 comma 0
[07:19] then the image of that element f of x
[07:23] comma y
[07:23] is u comma 0. so you get
[07:28] that every element every vector on the x
[07:31] axis
[07:32] is indeed in the image ah and we already
[07:34] saw that the image is contained in the x
[07:36] axis that means ah the image is equal to
[07:39] the x axis
[07:41] okay so let us go on to
[07:44] studying the
[07:47] relation between the kernel and
[07:50] injectivity which so remember that a
[07:53] function
[07:54] or yeah a function is
[07:57] injective or 1 1 if f of v 1 is equal to
[08:00] f of v 2 implies v 1 is equal to v 2 and
[08:02] for
[08:03] linear transformations ah
[08:07] this is the same as demanding that f of
[08:09] v 0 implies v
[08:10] 0. yeah we we proved this actually
[08:13] so what does this have to do with the
[08:15] kernel well the first one may you you
[08:17] may not be it may not be clear but the
[08:18] second
[08:19] statement makes it clear what it has to
[08:21] do with the kernel
[08:23] ah f of v equals 0 implies v 0. so if
[08:29] if a linear transformation is 1
[08:32] 1 or injective then
[08:35] the kernel must be 0 that is what we are
[08:37] saying because if f of v is zero
[08:40] then v must be zero so the only possible
[08:42] choices of vectors which
[08:44] yield that f of v zero is the zero
[08:46] vector itself
[08:47] so if f is one one or injective then the
[08:50] kernel of f
[08:51] is zero ah on the other hand if the
[08:54] kernel is 0
[08:56] that means whenever f of v is 0 v 0. so
[08:59] that means
[09:00] the condition for being 1 1 is satisfied
[09:03] so kernel of f is 0 also means that
[09:06] the linear transformation is one one so
[09:09] being
[09:09] the linear transformation being one one
[09:11] is equivalent to
[09:14] kernel of f is zero that is what we have
[09:16] proved here
[09:17] so linear attachment transformation is f
[09:20] is one one
[09:21] if and only if kernel of f is zero so
[09:23] what do i mean by kernel of f is v
[09:25] is zero what i mean here is that it is a
[09:28] zero subspace
[09:29] so we this should be better written as
[09:32] kernel of f
[09:33] is the zero subspace
[09:37] which means it it is it consists of the
[09:39] set
[09:41] 0 yeah and remember 0 itself is a
[09:44] vector space it satisfies all the
[09:46] properties of a vector space it and it's
[09:48] a subset of
[09:50] ah v so it's a subspace of v so kernel
[09:53] of f is the zero subspace that's what we
[09:55] mean by
[09:56] these two statements here kernel of f
[09:58] zero and kernel of f is zero yeah
[09:59] we so be careful when we write this ah
[10:02] the zero
[10:03] in this case here on the right is a zero
[10:05] subspace and not the zero vector
[10:08] ok it means it is the set consisting of
[10:11] the zero vector
[10:12] ok so let us again
[10:16] ah
[10:19] see the relation like kernel
[10:22] is related to being injective let's
[10:25] study what is the relation between
[10:26] the image and the subjectivity of a
[10:28] linear transformation
[10:30] so recall that a function f v w is onto
[10:33] or subjective
[10:35] if ah for each w and w
[10:38] there is some v in v such that f of v is
[10:40] w in other words
[10:42] the range of this function
[10:45] is the entire w okay so this is actually
[10:48] this part is the same for any function
[10:50] this is not
[10:52] it has nothing to do with
[10:55] linear transformations per se what the
[10:57] statement in this slide
[10:59] so it follows from the definition that a
[11:02] function f
[11:04] being onto is equivalent to range of f
[11:06] being w
[11:07] that's exactly what we just commented so
[11:10] for linear transformations in particular
[11:12] this means that because remember range
[11:14] is the same as image only thing is when
[11:16] we say range we think of it as a set
[11:18] and when we say image we think of it as
[11:20] a subspace this is the main difference
[11:22] otherwise there is no real difference
[11:25] between range
[11:26] and image as such so linear
[11:29] transformation is on to if and only if
[11:30] image of f is w
[11:32] yeah and this image of f is w is
[11:36] being concluded as a subspace image of f
[11:39] is actually a subspace of w
[11:40] always and we we say that it's on to
[11:44] we have proved that it's on to is
[11:46] equivalent to the subspace image of x
[11:48] actually being the entire space
[11:50] okay but this is not very different from
[11:54] what happens for functions okay
[11:58] let's now proceed and make the
[12:00] connection between
[12:01] kernels and null spaces so so far there
[12:04] is no matrix in the picture right
[12:06] so now we are going to introduce some
[12:08] matrix in the picture
[12:09] and we will ah associate the kernel of
[12:12] this linear transformation with that
[12:14] matrix
[12:17] so let f v to w be a linear
[12:19] transformation
[12:21] let beta be v 1 v 2 v n and gamma b w 1
[12:24] w 2 wn which are both
[12:26] both of which are ordered bases beta has
[12:29] an order basis for v
[12:31] and gamma is an ordered basis for w
[12:34] so now indeed we can talk about a matrix
[12:37] because remember in the previous video
[12:39] we have talked about how
[12:40] we if you have a linear transformation
[12:42] along with
[12:44] an ordered basis for each of v and w
[12:46] there is a corresponding
[12:49] matrix and how do we write down that
[12:50] matrix that right
[12:52] we write down that matrix by looking at
[12:54] f of v
[12:55] i and expressing that in terms of the w
[12:58] js as a linear combination of
[12:59] of the w js and whatever coefficients we
[13:02] get
[13:03] go into the matrix so the coefficient of
[13:06] coefficients of f of v
[13:07] i go into the ith column of that matrix
[13:13] so let a be the corresponding matrix ah
[13:17] so just recall that for v in
[13:21] so suppose v is summation c j v j
[13:24] then f of v is equal to summation c j
[13:29] f of v j that is by the ah
[13:34] linear transformation property axioms of
[13:36] being a linear transformation
[13:38] and then ah f of so summation
[13:43] ah f of v j can be further written as
[13:47] summation a i j w i okay
[13:51] so f of v j is summation a i j w i
[13:54] right ah so that is corresponding the
[13:57] the
[13:58] jth column of the matrix a that's what
[14:02] these
[14:02] uh where these coefficients are coming
[14:04] from that's exactly what we
[14:06] we just commented okay so when is f of v
[14:09] equal to
[14:10] equal to zero yeah so f of e zero
[14:13] if and only if ah each
[14:20] coefficient in this linear combination
[14:24] of w
[14:24] i's is 0 so what is the coefficient of w
[14:28] i so you have to take that summation i
[14:31] is equal to 1 to m outside
[14:33] and take the summation j is equal to 1
[14:35] to n inside
[14:36] and then you will get summation a i j c
[14:38] j
[14:39] over j that is the coefficient
[14:43] of w i and then
[14:47] we know that if you have a linear
[14:48] combination of w i's which is zero then
[14:50] each coefficient must be zero why is
[14:52] that because w i's are a basis remember
[14:54] and basis satisfies that it's linearly
[14:58] independent
[14:59] so if summation of some linear
[15:01] combination this particular linear
[15:03] combination of
[15:04] w is 0 then each coefficient is 0. so f
[15:07] of v 0
[15:08] is exactly the same as saying that
[15:12] summation a i j c j is equal to 0 okay
[15:16] and now this equation should ring a bell
[15:17] in your mind
[15:20] so the left hand side is saying so f of
[15:23] v 0 means
[15:24] this is exactly the definition of v
[15:26] being in the kernel of f
[15:28] and the right hand side is saying that
[15:31] if you look at the vector c
[15:32] consisting of c 1 c 2 c n then that
[15:36] vector
[15:36] is in the null space of a okay so the
[15:39] relation we have between the kernel and
[15:41] the null space is the following
[15:43] that if you have a vector v which when
[15:46] you express
[15:47] as a linear combination of the v js
[15:50] there remember
[15:51] it's an ordered basis so you can write
[15:53] it as summation c j v j in a unique way
[15:56] so this vector is in the kernel if and
[15:59] only if
[16:00] this happens precisely when if you write
[16:03] these
[16:04] coefficients of the v j's
[16:07] as a column
[16:11] then this column must be in the null
[16:14] space of
[16:15] the matrix a so that is the relation
[16:19] between kernels and null spaces
[16:22] ok so lets similarly describe what is
[16:25] the relation between images
[16:27] and column spaces so let v be a
[16:30] f v to be w be a linear transformation
[16:33] let beta be v 1 into vn gamma b w1 w2
[16:37] wn both of these are ordered bases beta
[16:40] for v and gamma for w
[16:42] and let a be the matrix corresponding to
[16:44] f with respect to beta and gamma so we
[16:46] know how to write this
[16:49] the jth column of a corresponds to
[16:52] the coefficients arising as expressing f
[16:54] of v j in terms of w
[16:56] is so now
[16:59] again recall that for v is summation v j
[17:03] w c j v j and v
[17:06] f of v summation c j summation a i j w i
[17:10] which if you take the summation
[17:12] interchange the summations we can do
[17:13] that because
[17:15] ah it is a finite sum then you get that
[17:18] this is summation i is 1 through m
[17:22] summation cj summation a i j c j times w
[17:26] i so the coefficient of w i is summation
[17:29] a i j
[17:30] c j over j
[17:34] so suppose uh now w is summation
[17:37] d i w i and
[17:41] it's so this is a vector in in w so
[17:44] these d i's are unique
[17:46] because w is a wi's form of basis so we
[17:48] can write w
[17:49] as summation d i w i so when does this
[17:52] lie in the image
[17:54] right so this lies in the image
[17:58] precisely one there when there exist a
[18:01] scalar c j
[18:04] so that summation a i j c j is d i
[18:09] right so the scalars from the
[18:12] coefficients of
[18:14] something in the image something of the
[18:15] form f of v
[18:17] is summation a i j c j
[18:21] so that means these d i
[18:25] should be summation a i j c j in order
[18:27] for
[18:28] w to be f of v where what is v v is
[18:31] equal to summation
[18:32] c j v j
[18:36] so what that means is we can now express
[18:38] this in terms of
[18:40] columns what it means is that summation
[18:42] d i w
[18:43] i is an image of f if there exists a
[18:45] column vector c
[18:47] such that the column vector d which is d
[18:49] 1 d d
[18:50] m is equal to a times c
[18:55] excuse me so but remember a times c is
[18:58] exactly a linear combination of the
[19:00] columns of a
[19:02] ah so what that means is that
[19:07] w is in the image of f where w is given
[19:11] by summation d i w
[19:12] i if and only if you look at the vector
[19:15] ah
[19:16] d is equal to d 1 d 2 d m and this is in
[19:18] the column space of a
[19:20] okay so that is the relation between the
[19:22] image of f and the column space of this
[19:25] matrix a
[19:28] now let us see if we can use this to
[19:31] find the basis
[19:32] of the kernel and the image of a linear
[19:34] transformation
[19:36] so again let f v w be a linear
[19:38] transformation choose ordered basis beta
[19:40] and gamma for v and w respectively
[19:43] let a be the corresponding matrix ok
[19:46] so the point i mean the first point here
[19:49] is that
[19:53] we can look at the kernel and the null
[19:55] space
[19:57] and what we have really shown is that
[20:01] the kernel is isomorphic to the null
[20:04] space that is what
[20:05] really we showed in the in the slide on
[20:08] kernels and null spaces why is that
[20:10] that is because for every element of
[20:15] the kernel we have a unique element of
[20:17] the null space
[20:18] so you can define a function and it is
[20:21] easy to
[20:22] verify that this is indeed a linear
[20:24] transformation from the kernel
[20:26] to the null space and
[20:30] it is also equally clear that this
[20:32] function is both 1 1 and 1 2
[20:34] that something you can check so
[20:39] that tells us that the kernel is
[20:40] actually isomorphic to the null space
[20:44] so in particular if you look at the
[20:45] vectors c 1 1 c 1 2
[20:48] c 1 n c 2 1 c 2 2 z 2 n
[20:51] and c k 1 c k 2 c k n
[20:56] these form a bases for the null space of
[20:58] a precisely when
[21:00] ah v one the corresponding v one primes
[21:03] v two times v k primes line kernel of f
[21:06] ah form a basis for kernel of f and what
[21:10] is the relation between v i's and
[21:11] v i primes and these columns the
[21:14] coefficients of v i prime
[21:17] when expressed in terms of v j are
[21:19] exactly
[21:20] corresponding to the jth
[21:23] sorry the is vector in this
[21:28] in this collection
[21:31] ok so in other words what is the main
[21:33] point the main point is i can read off a
[21:35] basis
[21:36] for the kernel
[21:39] if i am if i know how to get a basis for
[21:41] the null space
[21:43] and indeed we do know how to get a basis
[21:45] for the null space
[21:46] similar to the previous situation we can
[21:49] find the relation between images
[21:51] and column spaces specifically
[21:55] about bases between them using the
[21:59] isomorphism that we have discussed
[22:00] earlier
[22:02] so if we consider the column vectors
[22:05] d 1 1 d 1 2 d 1 m d 2 1 d 2 2 d 2 m
[22:10] d r 1 d r 2 d r m
[22:14] then these form a basis for the column
[22:17] space of a
[22:18] precisely when if you look at the
[22:21] corresponding linear combinations of the
[22:22] w
[22:23] i's wi prime is summation j is 1 through
[22:27] m
[22:28] d i j w j these form a basis for
[22:31] image of f so this follows
[22:34] because of the previous isomorphism that
[22:37] was discussed
[22:40] so once we have this isomorphism ah
[22:43] note also that if you look at the
[22:45] columns of a
[22:46] which form a spanning set of the column
[22:49] space
[22:51] then these correspond to the images of f
[22:54] of v
[22:55] i so the images f of v i
[22:58] which form a spanning set for image of f
[23:01] so what is the point of of all this
[23:04] so as we have noted before we can
[23:07] convert the
[23:09] problem of finding a basis for the image
[23:11] space
[23:12] to the problem of finding a basis for
[23:14] the column space
[23:16] and well that's something we know how to
[23:18] do because
[23:19] to find the basis of the column space
[23:22] what do we do we look at the columns
[23:23] then we do row reduction and once fits
[23:26] in row
[23:27] reduced to eucharon form you look at the
[23:29] columns containing the pivot
[23:31] elements and then the original columns
[23:34] those were the ones which form a basis
[23:37] for
[23:38] the column space so now what this is
[23:40] telling us is
[23:42] once we know those columns which form a
[23:45] basis for the column space
[23:46] you look at the corresponding um
[23:51] linear combinations of the wjs and that
[23:54] will give you a
[23:55] basis for the image of f
[23:59] so this video we have seen the notion of
[24:02] image and kernel and we have discussed
[24:04] these
[24:05] relationships between the kernel
[24:08] and the null space of the associated
[24:11] matrix once we fix bases ordered basis
[24:14] and similarly the relationship between
[24:16] the
[24:17] image of a linear transformation and the
[24:20] column space of a
[24:21] matrix which we obtain by
[24:24] fixing ordered basis so
[24:28] so we have seen that these are
[24:29] isomorphic you know the interplay
[24:31] between
[24:32] these two and using these we can get
[24:34] bases
[24:35] by considering these
[24:39] corresponding matrices that we obtain
[24:42] and then
[24:42] obtaining bases for those using row
[24:44] reduction which we know how to do from
[24:47] the last week so in the next video we
[24:49] will implement
[24:50] all of this in concrete examples thank
[24:57] you