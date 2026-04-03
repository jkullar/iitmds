# W8_L2: What is an orthonormal basis?

**Week:** Week 8
**YouTube URL:** https://www.youtube.com/watch?v=T646BdbrRm0

---

## Transcript

[00:00] [Music]
[00:14] hello and welcome to the maths 2
[00:15] component of the online bsc program on
[00:17] data science and programming
[00:19] in this video we are going to talk about
[00:21] what is an orthonormal basis
[00:23] so let us just recall first that we have
[00:26] defined what is an orthogonal set
[00:28] so an orthogonal set of vectors v 1 v 2
[00:30] v k in an inner product space
[00:32] is a set of vectors whose elements are
[00:34] mutually orthogonal that means if you
[00:36] take the
[00:36] inner product v i comma v j where i is
[00:39] not equal to j
[00:40] then this is 0. so
[00:44] ah we checked in the previous video that
[00:46] an orthogonal
[00:48] set of vectors is linearly independent
[00:51] and that's why if you take a maximal
[00:53] orthogonal
[00:54] set of vectors then it's a maximum
[00:56] linearly independent set
[00:58] and we have seen before that a maximal
[00:59] linearly independent set is a basis
[01:01] so this is one way of getting a basis
[01:03] for
[01:04] an inner product space so this is
[01:06] somewhat special if you have an inner
[01:07] product on your vector space
[01:09] this is a slightly enhanced way of
[01:11] getting
[01:13] a basis so such a basis was called an
[01:16] orthogonal basis
[01:18] so what is an orthonormal set so we are
[01:21] going to use these two terms an
[01:22] orthonormal set and a basis and put them
[01:25] together and we get an orthogonal
[01:27] orthonormal basis so an orthonormal set
[01:30] of vectors
[01:30] in an inner product space is an
[01:32] orthogonal set of vectors so that means
[01:35] uh the inner product of
[01:38] v i and v j is 0 for all i naught equal
[01:40] to j
[01:41] such that the norm of each vector of the
[01:43] set is 1.
[01:44] so let's recall that if you have an
[01:46] inner product it automatically gives you
[01:48] a norm that's
[01:49] if you have a vector v and you
[01:52] take the inner product of v comma v then
[01:55] ah that's a positive number non negative
[01:58] number and if you take its square root
[02:00] that gives you the norm so that is
[02:02] defined as the norm of the vector
[02:05] so explicitly what this means is if you
[02:07] have a set v 1 v 2 v k
[02:09] then s is an orthonormal set of vectors
[02:11] if the inner product of v i and v j
[02:13] 0 for i and j in i 1 through k and i
[02:17] is not equal to j and the norm of v i is
[02:20] 1
[02:21] so just to explicitly say that norm of
[02:24] vi
[02:24] is 1 is the same as saying that inner
[02:27] product of vi comma vi is equal to 1
[02:31] so here of course we don't take square
[02:34] root because
[02:35] a square root of 1 is 1 so we know that
[02:37] if the norm is 1 this is the same as
[02:39] saying
[02:39] the inner product is 1. okay
[02:44] so as an example let's consider r4 with
[02:46] the usual inner product
[02:48] that's the dot product so then the set
[02:50] minus 1 by root 3 1 by root 3 1 by root
[02:53] 3 comma 0
[02:54] 2 by root 42 1 by root 42 1 by root 42 6
[02:57] by root 42
[02:59] and 2 third 0 two thirds minus one third
[03:01] is an orthonormal set of vectors
[03:03] so ah this example we have
[03:06] sort of seen a similar example before
[03:09] and the idea is here we have made
[03:11] them all into a norm we've made all of
[03:13] them
[03:14] to have norm 1. so if you take the norm
[03:17] so norm of the first vector
[03:21] is so this is the usual inner product so
[03:23] the norm is just given by
[03:25] taking each component squaring it and
[03:27] adding it up so that gives us
[03:29] one third plus one third plus one third
[03:33] which is one so similarly here if you
[03:36] take the
[03:38] norm that is going to give you four by
[03:40] forty two plus
[03:42] uh one by forty two plus one by 42 plus
[03:45] 36
[03:47] by 42 which is indeed 1 and similarly
[03:50] over here
[03:51] ah the norm is going to be given by ah 2
[03:53] 3 square plus 2 third square plus minus
[03:55] 1 third square
[03:56] that's 4 by 9 plus 4 by 9 plus
[04:01] 1 by 9 which is 1. so all these have
[04:03] norm 1
[04:04] and
[04:07] you can check that the inner product is
[04:09] is 0 if you take
[04:11] 2 different vectors so for that since
[04:14] all of them have the same
[04:15] denominator you can ignore the
[04:16] denominator and and take
[04:18] ah take the inner product and you can
[04:21] see clearly that the norm is
[04:23] indeed 0 oh sorry the inner product is
[04:25] indeed 0.
[04:27] okay so i hope it's clear what is an
[04:29] orthonormal set
[04:30] it's just an orthogonal set with the
[04:32] additional property that
[04:34] the norms of each of the vectors in that
[04:36] set is one
[04:37] okay so now what is an orthonormal basis
[04:39] so we know what is an orthonormal
[04:41] set ah so now
[04:44] an orthonormal set which forms a basis
[04:46] is an orthonormal basis
[04:48] so this is similar to what we saw for
[04:50] the orthogonal
[04:52] basis namely an orthogonal basis was one
[04:55] where it was an orthogonal side and it
[04:56] was a basis
[04:57] so here an orthonormal basis is one
[04:59] where it is an
[05:01] it's a basis and it's an orthonormal set
[05:05] so equivalently an orthonormal basis is
[05:08] an
[05:09] orthogonal basis ah where the norm of
[05:12] each vector is one
[05:14] right so because an orthogonal set is
[05:16] orthonormal set is nothing but
[05:17] but an orthogonal set where each vector
[05:20] has norm one
[05:21] orthonormal basis in particular is an
[05:23] orthogonal
[05:24] basis uh where each l vector has normal
[05:29] so equivalently an orthonormal basis is
[05:32] a maximal orthonormal set
[05:34] so just to make it clear what we mean by
[05:36] that that means this set is an
[05:37] orthonormal set
[05:39] and there is no set which is bigger than
[05:42] this
[05:42] which properly contains the this set and
[05:45] which is also an orthonormal set
[05:47] so this is the largest possible
[05:48] orthonormal set you can
[05:50] you can get you can't expand the set
[05:53] further
[05:54] and retain the property of being
[05:56] orthonormal
[05:59] so here's an example the standard basis
[06:01] with respect to the usual inner product
[06:03] forms an orthonormal basis
[06:06] maybe let us check that quickly before
[06:09] going ahead
[06:10] so i have the vectors
[06:14] e i so we already know that if you take
[06:17] e i comma e j
[06:19] then this is
[06:23] right and i is not equal to j right then
[06:26] this inner product is going to be
[06:28] so if you work this out 0 times 0 plus 0
[06:30] times 0 all the way
[06:32] so there is a lot of zeros and then when
[06:35] you come to the ith place you will get a
[06:37] zero
[06:38] sorry a one time zero
[06:41] and when you come to the jth place
[06:44] you will get a zero times one this is if
[06:47] i
[06:48] is larger than sorry less than j then
[06:50] you get this if
[06:51] i is larger than j then the
[06:55] 0 times 1 comes first and the 1 times 0
[06:57] comes next
[06:58] either way the point is
[07:01] you get this to be 0. so this inner
[07:03] product is 0
[07:06] and the norm of e i
[07:10] so that is e i comma e i so
[07:14] well square root of this so then ah
[07:17] if you do the same computation you get 0
[07:19] times 0 plus so bunch of 0s
[07:22] and then in the ith place there is 1 in
[07:24] each component so 1 times 1
[07:26] and then again 0s so this gives you
[07:30] ah i should have square root of this
[07:34] so which is uh square root of one
[07:38] and of course when we say square root
[07:39] and we are talking about norms we always
[07:41] take the positive square root
[07:42] so this is again one so this is an
[07:44] example of
[07:45] an orthonormal basis it is an orthogonal
[07:48] basis
[07:49] we well we already know its a basis it
[07:51] is an orthogonal set that is what we
[07:53] checked
[07:54] over here so here we checked its
[07:56] orthogonal
[07:57] and here we checked its orthonormal
[08:02] okay let us do another example so
[08:04] consider r3 with the usual in the
[08:06] product and the set
[08:08] one third one two two one third minus 2
[08:11] minus 1 2 and one third 2 minus 2 1
[08:14] then this set which we have called beta
[08:17] is an
[08:17] orthonormal basis so let's uh check this
[08:22] so let's look at the norms first so
[08:24] let's give these names so let us call
[08:26] this
[08:27] let us call the first vector v1 so we
[08:30] have v1 v2 and v3
[08:32] so the norm of v1 is
[08:35] [Music]
[08:38] square root of so typically you know if
[08:41] you want to
[08:42] if you want to check that ah something
[08:44] has norm 1
[08:45] then it is enough to check that its
[08:47] square is 1 right so
[08:48] instead of checking that norm v 1 is 1 i
[08:51] will be checking norm of v 1 squared is
[08:53] 1. so
[08:54] norm of v 1 squared is just the inner
[08:55] product of v 1 with itself
[08:57] which we can compute easily so this is
[09:01] 1 3 1 2 2
[09:05] 1 3 1 2 2
[09:09] and that is 1 by 9 times
[09:12] 1 times 1 plus 2 times 2 plus
[09:15] 2 times 2 which is
[09:18] 1 plus 4 plus 4 so 9 by 9 which is one
[09:22] ok the same the same things would happen
[09:26] if you take v two
[09:28] norm of v two which is uh ah one third
[09:31] minus two comma minus one comma two
[09:36] one third minus two comma minus one
[09:37] comma two
[09:39] so this is giving us one by nine times
[09:43] ah minus two times
[09:47] ah minus two plus minus 1 times minus 1
[09:51] plus 2 times 2 which is
[09:55] 9 by 9 which is 1.
[09:58] maybe i leave norm v 3 squared
[10:02] to you so check that this is one and
[10:04] then we are left with these three inner
[10:06] products
[10:07] so let us check v one v two what is the
[10:08] inner product so we have one third
[10:11] one comma two comma two and one third
[10:14] minus two comma minus one
[10:16] comma two so again the tip here is
[10:19] if you want to check that the inner
[10:20] product is 0 then
[10:22] these constants you can remove out and
[10:25] check for the term inside which if it
[10:29] is a better term so in this case for
[10:32] example you have integers
[10:34] then you would rather check that so in
[10:37] this case you get 1 by 9 times
[10:40] 1 times minus 2 plus 2 times minus 1
[10:44] plus 2 times 2 so that gives us a minus
[10:47] 2 minus 2 plus 4
[10:48] so that is 0 okay i'll again encourage
[10:51] you to check the other
[10:52] other terms so this shows that this is
[10:54] an orthonormal basis okay
[10:57] why is it a basis we have checked here
[10:59] that this is an orthonormal
[11:01] set right but the reason it's a basis is
[11:04] because
[11:05] it's a maximal orthonormal set meaning
[11:09] this is a set of size 3
[11:13] and we already know it's a linearly
[11:15] independent set because
[11:17] if it's an orthogonal normal set it's in
[11:19] particular an orthogonal set
[11:21] which we have checked is linearly
[11:23] independent so this is a
[11:24] so yeah so i should end this by saying
[11:26] once you finish this checking
[11:28] this will so this part will show and
[11:30] along with v3
[11:32] will show ah that the norms are one
[11:36] this part if you finish so check also
[11:39] that v one v
[11:40] three is v two
[11:43] e three zero this will altogether will
[11:46] show that its
[11:47] orthogonal and then
[11:50] the cardinality of beta is three and
[11:53] beta is
[11:55] linearly independent
[11:59] right because it is orthogonal and we
[12:02] know that
[12:02] dimension of r3 is 3
[12:07] so that implies that beta is of
[12:10] an orthonormal basis
[12:14] yeah so because the sizes match right so
[12:17] you have
[12:18] a linearly independent set of size which
[12:21] is equal to the dimension of the
[12:22] vector space that's why it's a basis so
[12:26] in particular it's an orthonormal basis
[12:28] in this case
[12:29] great so we have i hope this gives you a
[12:32] window into how to check some things
[12:34] basis sometimes you happen to not know
[12:36] an explicit basis
[12:38] but you know the dimension of the space
[12:39] in consideration so you can check that
[12:41] something is a basis
[12:44] so let's uh talk about obtaining
[12:46] orthonormal sets from orthogonal sets
[12:48] so suppose you have in a product space
[12:51] and in the product space
[12:52] and if gamma is a set v1 v2 vk
[12:55] which is orthogonal so it's an
[12:56] orthogonal set of vectors so then we can
[12:59] obtain
[12:59] an orthonormal set of vectors which
[13:01] let's call it beta
[13:03] from gamma by the following procedure
[13:05] you take each of these vectors
[13:07] and divide it by its norm then we are
[13:09] claiming that this is an ortho
[13:11] normal set so ah why is it an
[13:14] orthonormal set
[13:15] uh so the reason is because this is
[13:18] exactly what we did in the previous
[13:20] example each of those vectors was
[13:23] divided by
[13:24] its norm which made it orthonormal and
[13:27] the orthogonality was
[13:28] evident already from just the integer
[13:30] part so here also that's what's
[13:32] happening
[13:33] so here we have that v 1
[13:37] v 2 is so let us say v i v j is
[13:40] 0 so this will imply that v i by norm v
[13:44] i
[13:45] comma v j by norm v j
[13:49] is 0 and so this is this is orthogonal
[13:53] so this new
[13:54] set is orthogonal beta so the only thing
[13:56] that is remaining to check
[13:59] is what is the norm so if you take the
[14:02] norm of
[14:03] v i by norm v i well constants come out
[14:06] of the norm
[14:07] so you get one by norm v i times
[14:10] norm v i which is one ok so that is why
[14:13] this is an orthonormal set
[14:15] okay so let us consider r2 with the
[14:16] usual in the product and the orthogonal
[14:18] basis
[14:19] gamma 1 3 comma minus 3 comma 1
[14:23] so we can make this into an
[14:26] orthonormal basis by looking at
[14:30] the norms of each of these vectors and
[14:32] then dividing by that term so the norm
[14:33] of both of these vectors turn out to be
[14:36] root 10 so if you do 1 by root 10 times
[14:39] 1 comma 3 and then 1 by root 10 comma
[14:41] time 1 by root 10 times minus 3 comma 1
[14:45] this is an orthonormal basis for r2
[14:50] so the fact that it's an orthogonal set
[14:53] is
[14:53] is already because gamma was orthogonal
[14:56] the fact that it is an orthonormal set
[14:58] is because we divided by the norms
[15:00] and the fact that it is a basis well
[15:02] gamma was already a basis
[15:04] ah so from there it follows this is the
[15:06] basis or the fact that
[15:07] r two is of dimension two and um
[15:12] now this is a orthonormal set of size 2
[15:15] so it must be linearly independent so
[15:18] linearly
[15:19] independent of size 2 which tells you
[15:21] it's a basis
[15:23] ok so maybe let me just write that again
[15:27] here
[15:28] since it got lost out so here i was just
[15:31] saying that
[15:32] vi comma vj is 0 implies
[15:37] vi comma norm vi comma v j
[15:40] divided by norm v j so this is one by
[15:44] norm
[15:46] v i times norm v j times
[15:49] the inner product of v i comma v j which
[15:51] is zero
[15:52] so ah from here we get that the existing
[15:56] set is orthogonal
[16:00] sorry the new set is orthogonal and norm
[16:03] of vi by norm vi
[16:07] ah we can take the
[16:11] norm out so this gives us one
[16:16] ok so that is what that is why
[16:21] this statement holds true and and the
[16:23] example
[16:26] tells you if you don't understand what i
[16:28] have written here tells you why these
[16:30] these things work so work out the
[16:32] examples for yourself
[16:34] so why are orthonormal bases important
[16:36] this is sort of the punch line of
[16:38] ah what we are doing so suppose gamma
[16:42] is v 1 v 2 v n and this is an ortho
[16:44] normal basis
[16:45] of an inner product space v and suppose
[16:48] you have
[16:49] a vector v inside capital t
[16:53] well we all we already know because it's
[16:54] a basis that you can write little v
[16:56] as c one v one plus e two v two plus c n
[16:59] v
[16:59] n why is that because remember that our
[17:01] basis is in particular
[17:03] a spanning set right a basis is a
[17:05] spanning set which means every
[17:08] vector is is a linear combination of the
[17:12] basis vectors
[17:13] and in fact for a basis it is a unique
[17:17] linear combination so you there are
[17:18] unique c 1 c 2 c n such that
[17:20] little v c 1 v 1 plus e 2 e 2 plus c n v
[17:23] n
[17:23] so this is a general statement for any
[17:25] basis now what's the importance of it
[17:28] being an inner product space and with an
[17:30] orthonormal basis
[17:32] so how do we find c 1 c 2 c n for any
[17:35] basis this means writing a system of
[17:37] linear equations and solving
[17:38] right so that is how i typically solve
[17:40] for c 1 c 2 c n you
[17:42] you write your v and then you write your
[17:45] v one v to vn and then you solve these
[17:47] equations
[17:48] but since gamma is orthonormal we can
[17:51] use the inner product and compute c
[17:53] i is v comma inner product of v comma v
[17:56] i
[17:57] so how do i do that let me quickly ah
[18:00] show you why that is true so let us
[18:03] compute what is in the product of v
[18:04] comma v
[18:05] i so if you compute what is in the
[18:07] product of v comma v i
[18:08] i substitute c one v one plus c two v
[18:10] two
[18:12] plus c i v i plus c
[18:16] n v n and then inner product with
[18:19] respect
[18:20] with v i well we know that the inner
[18:23] product is a linear
[18:26] in each variable which means that i can
[18:28] write this as
[18:30] ah c one times inner product of v one
[18:33] comma v i
[18:34] plus c two times inner product of v one
[18:37] v
[18:37] two comma v i all the way up to
[18:41] ah then we have plus ci times
[18:46] inner product of vi comma vi
[18:49] plus
[18:53] cn inner product of vn comma vi
[18:57] right this is what we get but now
[19:00] we know that this is an orthonormal
[19:02] basis so because it is an orthonormal
[19:04] basis
[19:06] first of all it is orthogonal so other
[19:09] than the v i comma v i term every other
[19:11] term is going to be 0
[19:12] so this term will remain and all these
[19:14] terms are 0
[19:16] right so this is i can just write this
[19:18] as c i times
[19:21] v i comma v i so this we have used here
[19:24] that it is orthogonal but now we also
[19:26] know its orthonormal
[19:28] because it is not orthonormal this is ah
[19:31] we can rewrite this as ci times norm vi
[19:33] squared and norm vi we know is 1
[19:36] so this is just ci this is where we are
[19:39] using the fact that
[19:40] we have an orthonormal basis so what did
[19:42] we get we got that
[19:43] the inner product of v and vi is equal
[19:45] to ci so this is
[19:48] a very easy way of
[19:51] of saying what are the coefficients
[19:53] which which come into this linear
[19:55] combination
[19:56] which gives you v how do we find c 1 c 2
[19:58] c n the answer is
[19:59] e c i is take the inner product of v
[20:01] with v i that's your c i
[20:03] ok let's do an example we saw this
[20:06] orthonormal basis for r2 earlier
[20:08] so write 2 comma 5 as a linear
[20:10] combination in terms of these basis
[20:11] vectors
[20:12] so if you take 2 comma 5
[20:16] ah let us write this as c 1 times
[20:19] one by root ten one comma three plus c
[20:22] two times one by root ten ah minus three
[20:26] comma one
[20:27] ah well we just saw what is c one c one
[20:30] is the inner product of
[20:32] um v comma
[20:40] v 1. so here v 1 is 1 by root 10 times 1
[20:44] comma 3
[20:45] which is you can pull out the constant
[20:47] so 1 by root 10
[20:49] and then the remaining things you take
[20:51] the inner product so this is 2 times 1
[20:53] plus 5 times 3
[20:56] so what does that give us 1 by root 10
[20:58] times
[21:01] 2 plus 15 so that's 17
[21:05] and then we get c 2
[21:08] which is v comma
[21:13] v 2. so 1 by root 10 times
[21:17] minus 3 comma 1
[21:20] which gives us
[21:25] so again the 1 by root 10 comes out and
[21:28] we get 2 times
[21:31] minus 3 plus 5 times 1
[21:35] which is minus 6 plus 5
[21:38] so minus 1 by
[21:42] root 10 ok so this is what
[21:45] what what we obtained as
[21:49] the coefficients
[21:52] so now if we write 2 comma 5
[21:57] in terms of these vectors we get 2 comma
[22:00] 5 is
[22:02] 17 by root 10 times v 1
[22:06] plus minus 1 by root 10 times v
[22:09] 2 so which if you write
[22:14] out completely so 17 times root 10 times
[22:18] 1 by root 10 times 1 3 oh sorry 1 comma
[22:20] 3
[22:21] plus or rather minus
[22:25] 1 by root 10 times
[22:31] 1 by root 10 times minus 3 comma 1 and
[22:34] you can check actually that this
[22:35] this is indeed going to work if you want
[22:38] we can do that quickly this is 17 by 10
[22:41] 1 comma 3 minus
[22:46] 1 by 10 minus 3 comma 1
[22:49] and if you if you work this out the
[22:51] first entry is 17 by 10
[22:52] minus minus 3 by 10 so 17 by 10
[22:56] plus 3 by 10 so 20 by 10 which is giving
[22:58] you 2
[22:59] and then the second entry is 51 by 10
[23:02] minus 1 by 10 which is giving you 5.
[23:04] so this shows that indeed what the
[23:06] equation we wrote down is
[23:08] correct this would have been maybe
[23:10] slightly harder
[23:11] if we didn't have this knowledge that
[23:14] this is an
[23:15] orthonormal basis ah so i hope in this
[23:18] video you have
[23:19] figured out what i mean you have
[23:22] understood the
[23:24] main point the main point is that we
[23:26] defined something called an orthonormal
[23:28] basis
[23:28] that is an orthogonal basis in which
[23:31] each vector has
[23:32] norm 1 and the crux of the
[23:37] video is that every vector which you can
[23:40] write as a linear combination of the
[23:42] orthonormal basis the coefficients of
[23:46] of in that linear combination
[23:50] c 1 c 2 c n are essentially
[23:54] are equal to the inner product of the
[23:56] vector v with
[23:57] the corresponding
[24:00] [Music]
[24:02] basis vector v vi yeah that that's the
[24:04] main
[24:05] point okay so i guess that finishes this
[24:08] video thank you