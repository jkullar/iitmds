# W7_T1: Tutorial 1

**Week:** Week 7
**YouTube URL:** https://www.youtube.com/watch?v=_Hj2FqJ5xZM

---

## Transcript

[00:00] [Music]
[00:15] hello
[00:16] all in this uh tutorial in this video
[00:19] we will try to see uh we try to
[00:21] visualize uh
[00:22] how bases are formed so in this
[00:26] video we will basically see some vectors
[00:29] in r3 and
[00:31] check whether those vectors forms a
[00:34] basis or not
[00:35] so in the lecture you have already seen
[00:38] that
[00:40] the definition of basis so the
[00:42] definition of basis means
[00:46] it can be defined in two ways so one the
[00:48] first way is uh
[00:50] the basis is basically
[00:54] a maximal linear
[00:58] independent set
[01:05] or in other way we can say that it is
[01:09] minimal spanning set
[01:17] so what does these two mean suppose
[01:20] uh we have a vector space v
[01:23] and uh we are taking
[01:26] some vectors from here suppose v 1 is in
[01:29] v
[01:30] then any singleton set
[01:33] v 1 it is obviously linearly independent
[01:42] so it is better to mention that this v
[01:44] is non-zero
[01:47] so we are taking a non-zero vector v1
[01:53] and we are claiming that uh it is
[01:55] obvious that uh this
[01:57] single tensor v one is linearly
[01:58] independent
[02:00] now if span of
[02:04] v one is v
[02:07] then we are done because it is a
[02:10] linearly independent set which spans the
[02:12] whole vector space so
[02:14] this v 1 forms a basis
[02:21] if not then we will take another vector
[02:24] v2
[02:24] nonzero vector v2
[02:28] from v minus span of
[02:31] v1 so if v not equal to span of v 1
[02:35] there exist some other vectors v 2 which
[02:38] is not in
[02:38] span of v 1 but which is in v so we will
[02:42] take that
[02:42] some some of that vector let it call
[02:46] v 2 and we will add this in our set
[02:51] now as v2 is not in span of v1 then
[02:54] these two are
[02:55] this set v1 v2 is linearly independent
[03:04] then what we have to do then we have to
[03:06] check whether span of
[03:08] v1 v2 whether is it v or not
[03:12] if it is v then this is our basis
[03:18] if not
[03:22] i mean if not means span of
[03:27] v1 v2
[03:30] is not v
[03:36] then again we repeat the process we will
[03:38] take some vector v
[03:39] 3 nonzero vector v 3 from v
[03:42] which is not in span of v1 and v2
[03:47] and we will add this to our set
[03:53] so this will again be linearly
[03:58] independent
[04:03] and so on the process will continue
[04:07] until we find some set of vectors v 1 to
[04:11] v n
[04:12] for which span of this set is
[04:16] our whole vector space if we
[04:19] come to this point then we can say
[04:22] by this algorithm then we can say this v
[04:25] 1 to v
[04:26] n forms a
[04:31] basis of b
[04:35] now further if we add some other vector
[04:38] space
[04:39] other vector from v in this spanning set
[04:42] then what we get we get that new vector
[04:44] suppose v
[04:45] prime from v we add in this set
[04:49] then
[04:54] this will obviously be an a spanning set
[05:01] of v
[05:05] but if we remove one of the vectors from
[05:08] v 1 to v n suppose
[05:10] we remove some v i where
[05:13] i is in 1 to n some vectors
[05:17] in this set then that will not span the
[05:21] whole set v
[05:22] because that's what the algorithm says
[05:24] each each step
[05:25] we are taking spanning set and we check
[05:27] whether it spans v
[05:29] or not so if we remove one of the
[05:30] vectors then it will not be an
[05:33] uh be a spanning set of v so this
[05:36] this set v1 to vn
[05:39] is a minimal
[05:42] spanning set
[05:46] which gives the first definition ah
[05:48] sorry the second definition
[05:50] of basis and whatever the maximal
[05:53] linearly independent set
[05:55] if we add some more vector in
[05:58] with v 1 to v n like v prime we have
[06:00] done
[06:01] then this set becomes linearly dependent
[06:04] because
[06:05] v prime belongs to
[06:08] span of v 1 to v n
[06:12] what does it mean it means that v prime
[06:15] can be written as some linear
[06:18] combination of
[06:21] v one to v n so clearly
[06:24] we get a linear combination of v one to
[06:26] v n and v
[06:27] prime which will give us zero
[06:30] as this alpha one v 1
[06:35] alpha n v n minus v prime is 0
[06:38] so this is the linear combination of v 1
[06:42] to v n and v prime
[06:44] where this coefficient some of the
[06:46] coefficients are non-zero
[06:48] must be non-zero and it gives us
[06:51] zero vector so the v one to v n and v
[06:54] prime forms a linearly dependent set
[06:58] so the maximal tilde so the
[07:01] linear independent set v one to v n is
[07:04] the maximal one
[07:06] if we add one more then it will become
[07:07] linearly dependent so this gives us the
[07:10] first definition of basis
[07:15] now suppose we consider r3 as our vector
[07:17] space
[07:18] and let's see how bases are formed
[07:21] using the vectors of r3 so
[07:24] at first let us let us consider a vector
[07:28] 1 comma 0 comma 0 on r3 so
[07:31] it is on x axis along x axis it is at a
[07:35] distance of 1
[07:36] from origin and
[07:39] let us take another vector 0 comma 3
[07:42] comma three
[07:44] so it will look like this zero comma
[07:46] three comma
[07:47] three
[07:52] okay now let us see what is the spanning
[07:56] set of
[07:57] these two vectors so span of these two
[08:00] vectors will be the plane passing
[08:02] through these two point
[08:04] and the origin because spanning
[08:07] set must contain the origin because if
[08:09] we take the linear combination of
[08:12] 0 into the first vector v 1 and 0 into
[08:14] the second vector v 2
[08:16] then obviously 0 is in the spanning side
[08:19] so the spanning set of these two vector
[08:22] will be
[08:23] the plane passing through these two
[08:25] points
[08:26] and origin which will look like this
[08:29] so this is the spanning set of
[08:33] these two vectors one comma zero comma
[08:35] zero and
[08:36] zero comma three comma three
[08:40] this is the spanning set so clearly you
[08:42] can see that
[08:43] this does not span the whole r3 because
[08:46] there are many
[08:47] points outside this plane which are in
[08:50] r3 so it does not
[08:52] span r3
[08:56] okay now let us
[08:59] consider another point one comma two
[09:01] comma four
[09:02] so here is the point one comma two comma
[09:05] four
[09:06] uh which is written as c here
[09:10] so if we call back our plane previously
[09:14] which is the spanning set of one comma
[09:16] zero comma zero and zero comma three
[09:17] comma three
[09:18] we can see that the point c is not on
[09:21] the
[09:22] plane it is outside the plane
[09:25] so point c the vector c is not
[09:29] in the spanning set of a and b
[09:33] okay now if we consider the spanning set
[09:37] of b
[09:38] and c let us see what it what happens
[09:43] so this is the plane
[09:47] which passing through the points b and c
[09:50] and also through the origin so
[09:54] this plane is basically the spanning set
[09:56] of
[09:59] vectors b and c
[10:02] and you can see that point a is not in
[10:05] in the plane
[10:06] so this plane also does not span um
[10:09] span the whole r3
[10:14] so you can see that
[10:17] okay
[10:23] now if we take a point one comma zero
[10:27] comma
[10:27] two you can see that this point one
[10:30] comma 0 comma 2
[10:32] which is denoted by d here is on the
[10:35] on this plane
[10:38] so the point 1 comma 0 comma 2
[10:41] is in the spanning set of v and
[10:44] c but if we consider the point
[10:49] 5 comma 2 comma 2 suppose we are
[10:52] considering the point
[10:53] 5 comma 2 comma 2 and you can see that
[10:56] this point is not in the span of v and c
[10:59] because this point is not on the
[11:01] plane now let us call back our previous
[11:05] plane which is the spanning set of one
[11:07] comma zero comma zero and zero comma
[11:08] three comma three
[11:10] so we can see that this point e
[11:13] five comma two comma two is on the
[11:15] spanning set of
[11:17] first two vectors a and b because that
[11:19] point is on the
[11:21] planes on the plane which passing
[11:24] through the points one comma zero comma
[11:25] zero
[11:26] and zero comma 3 comma 3 so
[11:29] this this geometry will give you an idea
[11:34] about the spanning set now
[11:39] our aim is to check whether the points
[11:43] a b and c forms a basis or
[11:46] not so these are the three points
[11:50] where we can see that the span of a b is
[11:53] not
[11:54] is not spanning the whole r3 against
[11:57] span of b
[11:58] and c is not a spanning set of r3
[12:01] but if we consider the span of all these
[12:04] three
[12:04] points then whether is it
[12:07] spanning r3 or not that is our question
[12:10] basically when we can say that r3 is a
[12:13] spanning set of these three vectors we
[12:15] we have to check we we if we take any
[12:17] arbitrary point on r3 and
[12:19] we can write it as a linear combination
[12:22] of these three points
[12:23] so for example we are taking here uh a
[12:26] point one comma two comma three
[12:29] this one comma two comma three so we can
[12:32] check that
[12:33] this one comma two comma three does not
[12:36] lie on
[12:37] the spanning set of a b
[12:40] and it also
[12:44] not on the plane passing through bc
[12:48] and origin so it does not lie on
[12:52] any two spanning set which we have seen
[12:55] earlier
[12:56] so it is some other point on r3 which
[12:59] does not belong to
[13:00] the spanning set of a b or spanning set
[13:04] of
[13:05] b and c so we will try to write
[13:10] uh this new point 1 comma 2 comma 3
[13:13] as a linear combination of a b and c and
[13:16] let us
[13:17] see whether we can write it or not
[13:24] so our aim is to write this point f as a
[13:27] linear combination of
[13:28] a b and c so let's see how we can do it
[13:32] so at first what we do we take a
[13:35] linear combination special linear
[13:37] combination of a and b as
[13:39] half of the point a plus 1 by 3 of
[13:42] the vector b so half of the vector
[13:47] 1 comma 0 comma 0 plus 1 by 3 of vector
[13:50] 0 comma 3 comma 3 will give us half
[13:52] comma 1 comma
[13:53] 1 so which is the point g
[13:57] which we are seeing here and let us draw
[13:59] the vector
[14:00] to see it perfectly so this will be the
[14:04] vector g
[14:08] and now if we call back the plane
[14:11] which is passing through the point a b
[14:13] and origin
[14:14] you can see that the point g lies on
[14:17] that play
[14:18] plane so g is basically in the spanning
[14:20] set of a b
[14:21] because uh clearly we have written a
[14:24] linear combination of
[14:25] a and b to get the point g
[14:28] so it will lie on the plane now we
[14:32] try to see the spanning set of g and the
[14:37] c and the point c if we
[14:41] see the spanning set of these two
[14:42] vectors
[14:45] will get this plane so this plane will
[14:47] pass through the point g
[14:48] and c and origin so this will be the
[14:52] spanning set of
[14:54] the vector half comma one comma one and
[14:56] one comma 2 comma 4
[14:58] and you see that the point f
[15:01] lies in this plane the point 1 comma 2
[15:03] comma 3 lies in this plane
[15:06] so what we have done here we have taken
[15:09] a point g which is in spanning set of
[15:13] a and b and then we consider the
[15:15] spanning set of g
[15:16] and c to get uh get some plane
[15:20] on which the point one comma two comma
[15:22] three lies there
[15:23] so basically there is a linear
[15:25] combination of these three vectors
[15:27] which will give us the vector one comma
[15:29] two comma three
[15:31] and you can do it for any vectors in r3
[15:35] so and that will check algebraically
[15:38] uh just in a minute so basically this
[15:42] is the geometrical representation how he
[15:44] forms a
[15:45] how you find the basis of some vector
[15:48] space
[15:49] uh like we we have done here for r3
[15:53] with the three points three vectors one
[15:55] comma zero comma zero
[15:56] zero comma three comma three and one
[15:58] comma
[15:59] um two comma four
[16:05] so in the example what we have seen that
[16:08] we have
[16:09] taken three points one comma zero comma
[16:13] zero
[16:14] zero comma three comma three and
[16:17] one comma two comma four these three
[16:20] points
[16:21] and we have checked that this forms a
[16:24] basis that was that is basically our
[16:25] claim
[16:26] so what we have to check we have to
[16:28] check uh
[16:30] whether this this set is linearly
[16:33] independent or not
[16:34] so what we will do we will write
[16:38] some linear combination of this
[16:46] and it will equate it to 0 and check
[16:50] whether this a b
[16:51] and c is 0 or not so this will give us a
[16:55] plus c
[16:57] 3b plus 2c and 3b
[17:00] plus 4c this is zero comma zero comma
[17:04] zero
[17:05] so this will give us a plus c equal to
[17:07] zero three b
[17:08] plus two c equal to zero and three b
[17:11] plus four c equal to zero so
[17:14] this last two equation will give us 2c
[17:17] equal to 0
[17:19] which will give us c equal to 0 and if
[17:21] we put c equal to 0 in the first one we
[17:22] will get a
[17:23] equal to 0 and if we put c equal to 0 in
[17:26] the second one we will get b
[17:27] equal to 0 so clearly these three
[17:30] vectors
[17:31] are linearly independent
[17:39] and whether it will span the whole
[17:43] vector space or not what we will do we
[17:45] will take any vector
[17:46] x y z in r3 and
[17:50] we have to write as it has a linear
[17:52] combination of
[17:53] this three vector so basically again uh
[17:56] this
[17:56] a into 1 comma 0 comma 0 b into
[17:59] zero comma three comma three and c into
[18:02] one comma two comma four
[18:04] whether it will be possible to write it
[18:07] as
[18:07] x y z or not uh so we will have to find
[18:11] this a b
[18:12] and c so in the example what we have
[18:15] done is so i
[18:17] i want all of you to uh do this
[18:21] a plus c this will be 3b plus 2c
[18:24] and this will be 3b plus 4c
[18:27] will be x y z and i want all of you to
[18:30] calculate
[18:31] what will be the value of a b
[18:34] and c here and it will
[18:38] if you can write this a b c in terms of
[18:40] x y z where x y z
[18:43] is the given vector given arbitrary
[18:45] vector in r3
[18:46] which you are trying to write as a
[18:48] combination of these three vectors
[18:50] so if we can find abc in terms of xyz
[18:53] then we are done
[18:54] so it will prove that it will show that
[18:56] xyz
[18:57] is in the spanning set of this 3 vector
[19:00] so it is linearly independent and any
[19:01] vector
[19:02] of r 3 can be written as the spanning
[19:04] set of these 3 vectors so
[19:06] it will form a basis now in this
[19:08] particular example
[19:09] in place of x y z we have taken 1 2
[19:12] 3 and if we solve this a b
[19:15] c here you will get a will be half
[19:20] b will be 1 by 3 and c will be
[19:24] half for this vector one comma two comma
[19:28] three so this thing
[19:31] we have seen in uh in geometrical
[19:34] context
[19:35] and we have seen how spanning said
[19:37] linearly independent
[19:38] or dependent set and how bases are
[19:41] related
[19:42] with each other thank you