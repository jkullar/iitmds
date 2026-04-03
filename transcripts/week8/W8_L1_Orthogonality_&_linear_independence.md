# W8_L1: Orthogonality & linear independence

**Week:** Week 8
**YouTube URL:** https://www.youtube.com/watch?v=G9bYPb-qSfw

---

## Transcript

[00:00] [Music]
[00:14] hello and welcome to the
[00:16] math2 component of the online bac
[00:19] program in data science
[00:21] in this video we are going to talk about
[00:22] orthogonality and linear independence
[00:25] so we have seen before the notion of an
[00:28] inner product
[00:29] and in this video we are going to
[00:30] continue using the ideas of inner
[00:32] products and norms
[00:35] so let's recall first that
[00:38] we have expressed the angle
[00:41] between two vectors in terms of the
[00:44] special inner product
[00:45] namely the dot product in rn and the
[00:48] special
[00:49] norm namely the length in rn so how do
[00:51] we do that
[00:52] we take the angle theta between two
[00:54] vectors let us say
[00:56] the vectors u and v and
[00:59] of course when we talk about angle we
[01:01] first
[01:02] we have to first look at the plane that
[01:04] they span and then we look at the angle
[01:06] on that plane
[01:07] and how do we compute it to compute it
[01:09] we can use the dot product or the
[01:12] the norm and the norm namely cosine of
[01:14] theta
[01:16] is equal to u dot v divided by norm of u
[01:20] times norm of v
[01:21] so the dot product is a special case of
[01:24] an inner product on rn and the length is
[01:27] a special case of a normal rn
[01:29] okay so let's uh
[01:32] let's first ask what is the geometric
[01:35] intuition of what are called orthogonal
[01:36] vectors we want to study orthogonality
[01:38] in this video
[01:39] so what is an what is the pair of
[01:41] orthogonal vectors
[01:42] so the angle theta between two vectors u
[01:44] and v in rn
[01:48] if it is a right angle which means its
[01:50] 90 degrees
[01:52] then cosine of theta is 0
[01:55] and we can we have just seen in the
[01:58] previous slide that we can compute it by
[02:00] looking at dot
[02:00] the dot product of these two vectors
[02:03] divided by the product of the norms
[02:05] so that means 0 is u dot v divided by
[02:07] norm of u times norm of v
[02:09] of course if we have if we have a ratio
[02:14] which is 0 then the that means the
[02:16] numerator is 0
[02:17] so this means u dot v is 0 so this is
[02:22] exactly what
[02:23] we mean by saying two vectors are
[02:26] orthogonal
[02:27] so two vectors are orthogonal when um
[02:30] in rn when they form a right angle
[02:33] yeah they are at right angles to each
[02:35] other right so in r2 for example
[02:38] ah this is what we mean by
[02:42] two vectors are orthogonal so this is a
[02:44] geometric intuition so let us
[02:46] as an example ah let us look at the
[02:48] vectors 1 2 3 and 2 2
[02:50] minus 2 they are orthogonal because if
[02:52] you compute the dot product
[02:59] then you will see this is 1 times 2 plus
[03:02] 2 times 2
[03:03] plus 3 times minus 2 which is 2 plus 4
[03:07] minus 6 which is 0
[03:09] okay so that means cosine of theta is
[03:13] 0 and cosine of theta is 0 means you can
[03:17] back
[03:17] back calculate to say that theta is 90
[03:19] degrees
[03:20] okay so let us
[03:25] define the notion of an of orthogonal
[03:28] vectors
[03:29] in a general vector space v and the
[03:31] intuition we have just seen is
[03:32] that if the dot product is 0 then in rn
[03:35] the the vectors are said to be
[03:37] orthogonal so we can
[03:39] make a more general definition now so
[03:41] suppose you have an inner product space
[03:43] v
[03:44] okay and you have two vectors u and v
[03:46] then we say that they are orthogonal if
[03:48] you compute the inner product
[03:49] u comma v and that is zero yeah so the
[03:54] uh let's do an example suppose you take
[03:56] r2 with the inner product
[03:59] given by this complicated looking
[04:02] function which we have seen in the
[04:04] previous video so
[04:06] you have the inner product of u comma v
[04:08] is x 1 y 1 minus
[04:10] x 1 y 2 minus x 2 y 1
[04:13] plus 2 times x 2 y 2 and u is x 1 x 2 v
[04:17] is y 1 y 2 so then the vectors
[04:20] 1 1 and 1 0 are orthogonal in this inner
[04:22] product
[04:23] let's compute why that is the case so if
[04:25] you compute it for this
[04:26] in inner product what we get
[04:31] so we get 1 times 1 minus
[04:36] x 1 times y 2 1 times 0 plus
[04:40] x 2 times y 1 1 times 1
[04:44] plus 2 times x 2 times y 2
[04:47] which is 1 times 0 yeah and you can see
[04:50] this is 1 minus
[04:52] 0 minus 1 plus 0 so this is 0
[04:56] so the inner product is 0 and that is
[04:58] why these vectors are orthogonal by
[05:00] definition
[05:01] i want to point out that in this case we
[05:03] chose this particular inner product
[05:05] on r2 had we chosen the usual inner
[05:08] product namely the dot product
[05:10] then these vectors are not orthogonal so
[05:12] the notion of orthogonality
[05:14] depends on the chosen inner product okay
[05:16] even even for rn
[05:18] it depends on which inner product you
[05:19] choose now if we say
[05:21] without alluding to any inner product
[05:23] that the
[05:25] vectors are orthogonal then by by
[05:28] convention it means that we are talking
[05:30] about the
[05:31] usual inner product namely the dot
[05:32] product okay but if we specify some
[05:35] other inner product
[05:36] and talk about orthogonality it means
[05:38] with respect to that inner product
[05:40] okay so let's uh talk about an
[05:43] orthogonal set of vectors
[05:45] so an orthogonal set of vectors in an
[05:47] inner product space
[05:48] v is a set of vectors whose elements are
[05:51] mutually orthogonal okay
[05:53] so that means they are pairwise
[05:55] orthogonal so if you take any two of
[05:56] them
[05:57] then they are orthogonal so explicitly
[05:59] what that means is if you take
[06:00] the set v1 v2 vk in v then s is an
[06:04] orthogonal set of vectors if you look at
[06:06] v i comma v j that is 0
[06:08] of course you need that i is not equal
[06:09] to j so if you take v 1 and v 2 are
[06:11] orthogonal v 1 and v 3 are also 1 v 1
[06:13] and v 4 are
[06:14] all the way up to v m v 1 and v k
[06:16] similarly v 2 and v 3 v 2 and v 4 all
[06:18] the way up to v k and so on yeah that's
[06:20] what we mean by mutually orthogonal
[06:23] okay for example let's consider r 3 with
[06:25] the usual inner product
[06:27] the dot product then the set s which is
[06:30] 4 3 minus 2 minus 3 2 minus 3 and minus
[06:34] 5
[06:34] 18 17 is an orthogonal set of vectors
[06:37] let us
[06:37] quickly see why that is the case so let
[06:39] us compute these dot products
[06:42] so if you dot this with minus 3 2 minus
[06:45] 3
[06:46] then you get 4 times minus 3 plus
[06:51] 3 times 2 plus minus 2 times
[06:55] excuse me minus 2 times
[06:58] minus 3 which is minus 12 plus 6
[07:02] plus 6 which is 0. so certainly the
[07:05] first two are
[07:06] orthogonal let's look at the next
[07:10] maybe the first and the third
[07:17] so if you do this you get
[07:20] minus 20 plus
[07:24] 54 um
[07:30] ah minus thirty four and need that zero
[07:34] and final finally if you do the second
[07:36] and the third one
[07:42] then we get minus 15
[07:46] plus 36 minus 51
[07:50] and oh have i made a mistake here
[07:54] sorry this is plus 15 plus 15 plus 36
[07:57] minus
[07:58] 51 which is 0. so these are indeed
[08:02] mutually orthogonal so this is an
[08:05] orthogonal set of vectors
[08:07] okay so this is now let's talk about
[08:09] orthogonality and linear independence
[08:11] this is the title of our
[08:12] video and clearly this is the most
[08:15] important slide in
[08:16] in this video so the reason we we want
[08:18] to discuss orthogonality
[08:20] is or one of the reasons at least is
[08:22] because we want to
[08:23] because it has some relation with when
[08:26] vectors are linearly independent
[08:28] okay so let's see what
[08:32] what we want to say so suppose we have a
[08:36] orthogonal set of vectors in the inner
[08:38] product space v then
[08:40] v 1 v 2 v k is a linearly independent
[08:42] set of vectors
[08:43] okay so if you have an orthogonal set
[08:46] automatically it is a linearly
[08:47] independent set
[08:48] now let us recall to check something is
[08:50] linearly independent was a fairly hard
[08:52] process
[08:53] yeah we had to write down summation c i
[08:56] v i
[08:57] is 0 and then by some way we have to say
[09:00] that each of the
[09:01] coefficients ci is 0 and in rn if we
[09:05] have to do this
[09:06] that means we have to solve a system of
[09:08] linear equations
[09:10] and check that indeed each coefficient
[09:13] is ending up being 0
[09:14] right so that was a fairly non-trivial
[09:17] process
[09:18] instead here what we are saying is
[09:21] if it so happens that these v 1 v 2 v k
[09:24] are
[09:24] an orthogonal set of vectors and notice
[09:27] that to check something is orthogonal is
[09:29] quite easy
[09:29] you have to just check that the inner
[09:31] products are 0 which is a fairly
[09:33] mechanical process
[09:35] let us see a quick proof or at least the
[09:37] idea of the proof of this statement why
[09:39] why is this happening so suppose maybe i
[09:42] will do this in red
[09:43] so suppose um summation
[09:48] c i v i is 0
[09:55] well then what i can do is
[09:58] i can take the inner product of
[10:02] summation c i v i
[10:06] with v i or maybe let us say with v one
[10:09] let us do it
[10:11] for v one and you will see the same
[10:12] thing happens for any v i
[10:15] so if you do that then this is the inner
[10:18] product of zero with
[10:19] v one and the inner product of zero with
[10:22] anything is zero
[10:23] this is one of the things that we know
[10:26] about inner products
[10:28] you can check this from the definition
[10:32] because you can write 0 comma v 1 0
[10:34] comma
[10:35] v 1 plus 0 comma v 1 and then cancel 0
[10:38] comma v 1
[10:38] on both sides
[10:41] uh so this is this is 0 but on the other
[10:44] hand we know what this is
[10:47] ah the first term is so this is a sum
[10:50] so so i i can take out my summation
[10:54] so therefore summation i is equal to 1
[10:57] through k
[10:59] c i times v i comma v
[11:02] one is zero
[11:07] therefore summation is one through k i
[11:09] can take out the constant also
[11:12] v i comma v 1 is 0
[11:17] and therefore
[11:19] [Music]
[11:23] c i
[11:26] so ok what what are the nonzero terms
[11:29] remember that these are an orthogonal
[11:30] set of vectors
[11:31] so unless i is equal to 1 everything is
[11:34] 0 right because v i comma v 1 is equal
[11:36] to
[11:37] inner product of v 1 comma v i so in the
[11:39] product of v i and v 1
[11:40] are 0 for all i not equal to 1. so the
[11:43] only term that i am left with here is
[11:45] is c 1 times v 1 comma v 1 and this is
[11:49] 0 and so if v 1 is not 0
[11:53] then this inner product is nonzero
[11:56] so and that will imply that c one is
[11:59] zero
[12:00] ok so maybe here i should make a
[12:05] small correction to what what i have
[12:07] written here namely i should say let v1
[12:10] v2 vk be an orthogonal set of
[12:13] non-zero vectors so typically we when we
[12:17] say orthogonal set we often mean
[12:19] non-zero vectors
[12:20] but that's not that's not
[12:23] the definition per say so we will say
[12:25] orthogonal set of non-zero vectors
[12:27] okay so if you have an orthogonal set of
[12:30] non-zero vectors
[12:31] then this this part v one v one is
[12:34] not zero and as a result c one is equal
[12:37] to 0
[12:38] and you can do this argument for instead
[12:41] of v 1 you could have done it with v
[12:43] 2 or v 3 or v j in general and you will
[12:45] get that c
[12:46] j 0 right so that will tell you that
[12:48] each of these constants is 0
[12:50] which is exactly the definition of
[12:52] linear independence so that's
[12:54] that's the reason why uh every
[12:56] orthogonal set of non-zero vectors
[12:59] is indeed a linearly independent set of
[13:01] vectors
[13:04] okay ah so what is an orthogonal basis
[13:08] so let v be an inner product space a
[13:10] basis consisting of mutually orthogonal
[13:12] vectors is called an
[13:14] orthogonal basis so this is the same as
[13:16] saying
[13:18] ah that um an orthogonal basis is a
[13:22] orthogonal set which is also a basis or
[13:24] a basis which is also an orthogonal set
[13:26] okay so since an orthogonal set we saw
[13:29] is ah
[13:30] linearly independent and orthogonal set
[13:32] is the basis exactly
[13:34] when it is a maximal orthogonal set yeah
[13:36] because
[13:37] ah how do we when is a linearly
[13:40] independent set
[13:41] a basis when it is a maximal linearly
[13:43] independent set so
[13:44] if it is already orthogonal then that is
[13:46] the same as saying its a maximum
[13:48] orthogonal set or a maximal linearly
[13:49] independent set
[13:52] so what does maximal orthogonal set mean
[13:55] it means there is no
[13:56] orthogonal set which contains strictly
[13:59] contains
[14:00] this this set that that is being
[14:02] referred to okay so a set is called
[14:05] ah a maximum orthogonal set if there is
[14:08] no super set which is also an orthogonal
[14:10] set
[14:11] ok so specifically what this means is if
[14:14] the dimension of v is n
[14:16] then an orthogonal basis is exactly an
[14:18] orthogonal set of n vectors
[14:20] ok so this is what you should keep in
[14:22] mind
[14:23] so let us look at some examples of
[14:25] orthogonal basis the standard basis that
[14:27] we have seen is an orthogonal basis
[14:30] ah of course i have not referred to an
[14:32] inner product here
[14:33] so as i mentioned before the convention
[14:36] means that
[14:37] is that if i do not refer to any
[14:39] particular inner product you have to
[14:40] take the dot product
[14:41] so the standard basis in the
[14:45] inner product space rn with the dot
[14:47] product
[14:49] okay let us look at this example which
[14:51] we have done before
[14:53] so we have seen already that this is a
[14:55] orthogonal set
[14:57] what is the size of the set it is a set
[14:59] of size three
[15:00] and what is the dimension of r3 it is
[15:02] three so this is a
[15:04] orthogonal set with three vectors
[15:07] where three is the dimension of the
[15:10] vector space
[15:11] r3 that so this is going to be an
[15:14] orthogonal basis yeah that we are using
[15:15] this
[15:16] this thing here the uh
[15:19] statement here okay and finally
[15:22] let's look at r2 with the inner product
[15:26] that we the the non standard in the
[15:28] product that we defined
[15:29] earlier then we saw that this is the
[15:32] orthogonal set of vectors
[15:33] and its it has size two
[15:36] so there are two vectors and the
[15:38] dimension of r is 2 so this must be an
[15:40] orthogonal basis so this is also an
[15:42] orthogonal again we are using
[15:44] this fact that is written here
[15:47] ok so ok
[15:51] so let us recall what we saw in this
[15:54] video
[15:54] so we have seen the notion of an
[15:56] orthogonal
[15:58] when two vectors are orthogonal
[16:01] ah so a pair of orthogonal vectors or we
[16:04] we can just say just orthogonal vectors
[16:06] remember that this depends on the inner
[16:08] product chosen
[16:10] uh and the intuition is coming from the
[16:11] fact that in
[16:13] r2 or in rn if with respect to the usual
[16:16] dot product if
[16:18] vectors are orthogonal then that exactly
[16:20] means that they are at a right
[16:22] angle to each other some like this
[16:23] perpendicular to each other
[16:26] so in general we can talk about um the
[16:29] notion of
[16:30] of orthogonal vectors for any inner
[16:32] product space and
[16:35] this is a very useful notion because if
[16:38] you have an orthogonal set which means
[16:40] all the vectors are mutually orthogonal
[16:42] then that set is actually linearly
[16:44] independent
[16:45] so now we can
[16:49] check linear independence using the
[16:51] notion of
[16:52] orthogonality this is the main point
[16:55] and after that we define the notion of
[16:57] an orthogonal basis
[16:59] namely its orthogonal set which is also
[17:02] a basis
[17:03] and if if you have your vector space as
[17:06] dimension v
[17:07] essentially what this means is that you
[17:08] have a set of n or
[17:11] n vectors which forms an orthogonal set
[17:13] and we have seen
[17:14] examples out here thank you