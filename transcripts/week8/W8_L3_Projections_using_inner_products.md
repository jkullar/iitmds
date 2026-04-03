# W8_L3: Projections using inner products

**Week:** Week 8
**YouTube URL:** https://www.youtube.com/watch?v=Qyiw4opSG9U

---

## Transcript

[00:00] [Music]
[00:15] hello and welcome to the
[00:16] match 2 component of the online bac
[00:18] degree
[00:20] in data science and programming
[00:24] in this video we are going to talk about
[00:25] projections using inner products
[00:28] so we have seen before what is an inner
[00:29] product space so it's a vector space
[00:31] endowed with an inner product
[00:33] and we have seen that the dot product on
[00:36] rn is an example of an inner product
[00:38] so in this video we are going to
[00:40] describe the
[00:42] ideas of taking a projection
[00:45] using the inner product so let's start
[00:48] with a basic example in
[00:49] r2 so here is your plane r2
[00:52] you have two points a and b and you draw
[00:55] the line
[00:56] joining a with the origin so
[01:00] that is the blue line in the picture and
[01:02] now we want to find the nearest point
[01:04] from b
[01:05] on the line passing through a and the
[01:07] origin ok this is what we want to do
[01:10] so ah this is maybe something that you
[01:12] have done in in
[01:13] high school meaning in your
[01:16] i'm not even sure 7th or 8th standard
[01:19] where we do
[01:21] geometry we actually do this using the
[01:24] ruler and compass
[01:25] where we take the the
[01:28] compass place it on b then you draw an
[01:31] arc
[01:32] it it intersects the line in two places
[01:35] then you take your arc again you draw
[01:38] sorry or compass again draw two arcs and
[01:41] then you join this
[01:43] and that that sort of that is a
[01:46] perpendicular
[01:47] passing through this line
[01:51] and that perpendicular is
[01:54] actually the shortest distance of b from
[01:57] uh this line okay this this is what this
[01:59] is
[02:00] these are ideas that we have seen in uh
[02:03] high school geometry
[02:04] so now i want to do the same thing using
[02:06] a little bit more sophisticated
[02:08] machinery we do not actually want to
[02:09] draw this we are not interested in
[02:12] drawing it per se what we want to do is
[02:14] to determine it is there a
[02:16] way of writing down equations in order
[02:19] to get
[02:20] get the shortest distance is there a way
[02:23] to
[02:23] write down equations to get the nearest
[02:25] point okay
[02:28] so drop a perpendicular from b onto the
[02:31] line
[02:31] you can use the procedure that i just
[02:33] mentioned in order to do that
[02:35] so the procedure that we have using the
[02:37] compass and so on
[02:39] ah that will tell you what the point is
[02:42] meaning
[02:42] geometrically you can identify what the
[02:44] point is but what we want is we want to
[02:47] know for example what are the coordinate
[02:48] vectors of this point yeah we
[02:50] are now we have enhanced ourselves from
[02:53] euclidean geometry to coordinate
[02:54] geometry and now
[02:55] in fact we are going towards vector
[02:56] geometry that is what we are studying
[02:58] now
[02:59] ok so
[03:03] let's see how to do that so now we
[03:05] introduce vectors so this is where
[03:07] vectors start coming in so draw the
[03:09] vectors corresponding to the points a
[03:11] and b
[03:12] let us call these vectors little and
[03:13] little b respectively
[03:16] and now let us use these vectors in
[03:18] order to determine what is
[03:20] ah this point so i i i want to
[03:23] determine what is this point so let me
[03:27] highlight that point its this point here
[03:29] right that is the point that we want
[03:31] ah so let's see how to get that point so
[03:34] suppose i know that this angle is theta
[03:36] okay or i do not know the angle is theta
[03:39] but i know the length of
[03:42] this this line yeah if i know the length
[03:46] of this line
[03:47] then i am done because the point a is
[03:49] given to me that's
[03:50] so that means i can i can
[03:54] get the vector a and then what i want to
[03:56] do is i can
[03:57] i want to scale this vector right
[03:59] because this is this
[04:00] the vector corresponding to
[04:05] the point that i want let's do that in
[04:08] green
[04:11] so the vector that corresponding to the
[04:12] point i want that is this vector here
[04:16] is some scaled version of a so the
[04:19] vector i want let us call it v
[04:21] so v is equal to some alpha times a
[04:24] right this v is alpha times a so all i
[04:27] need to do is to determine what is alpha
[04:29] and then i can
[04:30] get what is
[04:34] what is this point so and what is alpha
[04:36] alpha is exactly
[04:38] going to be determined by this length in
[04:40] red that we have denoted here
[04:42] so how do i get alpha so what
[04:45] we know is so suppose this length is ah
[04:49] given by so this is essentially the norm
[04:52] of v right
[04:53] the distance of v from the origin so
[04:55] this is the norm of v
[04:57] so the norm of v is what we want so
[05:00] if we put it into this equation this is
[05:02] um
[05:04] mod of alpha but we know that alpha is
[05:06] actually positive so we
[05:08] do not need to put the mod alpha times
[05:12] norm of a which means alpha is equal to
[05:16] norm of v divided by norm of a so
[05:20] in other words v is equal to norm of
[05:24] v divided by norm of a times a or in
[05:27] other words
[05:28] norm of v times a by norm of a so you
[05:32] can see a by norm of a is a unit vector
[05:34] meaning it is a vector of length one and
[05:36] then you when you multiply in the same
[05:38] direction as a
[05:39] and then we when you multiplied by norm
[05:40] v you will get exactly v
[05:43] fine so now i uh i know a
[05:46] because i know the point capital a and
[05:48] once i know a i can
[05:49] determine what is norm of a so what i
[05:52] really need to know is what is norm of v
[05:53] right and
[05:57] for norm of v well we know that norm of
[06:00] v is
[06:03] equal to the
[06:06] norm of the vector b times cosine theta
[06:11] right this is something we know from our
[06:14] euclidean geometry or this is the
[06:16] definition of cosine of
[06:18] an angle it's the uh length of the
[06:21] adjacent side divided by the length of
[06:23] the
[06:24] hypotenuse so so i know this is norm of
[06:27] b times cosine of theta
[06:29] but now i know what is cosine of theta
[06:31] that's exactly where
[06:32] so so far i have only used the lengths
[06:35] but now i i
[06:36] i will use the inner product because the
[06:39] cosine of theta remember theta is also
[06:41] the angle it is not just the angle
[06:42] between b
[06:43] and v it is also the angle between b and
[06:45] a
[06:46] and so i can write down ah cosine of
[06:49] theta
[06:49] as the inner product of
[06:54] a comma b i mean in terms of
[06:58] the inner product of a comma b so this
[07:00] is a comma b
[07:02] divided by norm of a norm of b
[07:06] so if i put all of that together what we
[07:08] are going to get
[07:09] is that v is equal to
[07:12] ah norm of v times a by norm a
[07:17] which is equal to ah norm of b
[07:21] times inner product of a comma b by
[07:25] norm of a norm of b
[07:28] a times norm of a and these two norm of
[07:32] b's cancel
[07:33] so this is inner product of a comma b by
[07:36] norm of
[07:36] a squared times a and i can write this
[07:40] ah
[07:40] since i have a norm of a squared i can
[07:42] write this as
[07:44] a comma b inner product of a comma b
[07:46] divided by inner product of a comma
[07:48] a times a so that is what we get so if
[07:51] you know a
[07:51] and b well i know what is this
[07:55] vector v which is the vector
[07:58] corresponding to the point that i wanted
[08:00] that was the nearest point
[08:02] on this line okay so you can see how we
[08:04] have progressed from
[08:06] euclidean geometry to coordinate
[08:09] geometry
[08:10] to vector geometry which helped us solve
[08:12] the problem in
[08:13] in coordinate geometry okay and
[08:16] the the point here is that we used
[08:20] the inner product very crucially
[08:23] to get what we wanted so in this case of
[08:26] course the inner product is just the dot
[08:27] product right
[08:28] so when i said inner product here i
[08:30] meant the dot product so this is a b
[08:32] cosine theta
[08:34] i mean this is
[08:40] yeah so that's what i used here so ah
[08:45] a dot b is equal to ah length of a times
[08:48] length of b
[08:48] times cosine theta that's what i used
[08:50] here okay
[08:52] so this is a rather expansive discussion
[08:54] about
[08:55] the nearest point so let's also recall
[08:58] what the nearest point
[09:00] tells us in terms of
[09:03] shadows because that's really what
[09:05] projections are okay so suppose there is
[09:07] a light source over here
[09:09] ok which is emitting light its right on
[09:12] top of
[09:12] b on top in the sense of this
[09:15] perpendicular
[09:16] and if you have the light coming out
[09:18] like this
[09:20] then the shadow of this vector
[09:24] is going to fall exactly where the green
[09:25] line is
[09:27] yeah on v okay so this is what a
[09:30] projection does it takes
[09:32] it takes something and projects it down
[09:35] to something else
[09:36] yeah it's as if there's a light source
[09:37] behind okay
[09:39] and when we do our usual inner products
[09:41] and usual
[09:42] lengths and so on ah then that means
[09:45] it's perpendicular it's like the
[09:48] the shadow is falling exactly
[09:50] perpendicular to what
[09:51] what is below okay ah but we will see
[09:55] things which are
[09:56] not like that also and there we will
[09:58] actually have to use inner products the
[09:59] dot product won't be enough so that's
[10:01] what this video is about
[10:03] ok let us quickly look at an example
[10:05] with the same
[10:07] idea so here we have a vector b in r3
[10:09] that is the vector in red
[10:11] and we want to find the nearest point
[10:15] 2 b so this is not off this should have
[10:18] been a 2
[10:20] so the nearest point to b
[10:25] on the 2 dimensional plane generated by
[10:27] the vectors 1 0 0 and 0 1 0 that is the
[10:30] x y plane so what do you do you drop a
[10:33] perpendicular
[10:34] again the same idea and then that point
[10:36] is exactly the point which is
[10:38] closest so this point here is the
[10:41] closest point
[10:43] and how would i determine this point now
[10:46] so to determine this point
[10:47] again you would go through the same
[10:49] ideas that we did before
[10:51] ah so you would consider this angle
[10:54] this angle is theta and then you would
[10:57] you would
[10:57] work out the same work it out in the
[11:00] same way
[11:01] except here we do not have an a so
[11:03] instead of a
[11:04] we have to use the vectors 1 0 0 and 0 1
[11:07] 0 and we will see explicitly how to do
[11:10] that
[11:10] in a few minutes
[11:14] the idea is going to be the same you
[11:16] have to use
[11:19] the dot product and the lengths in a
[11:22] very
[11:23] effective way ok so
[11:26] let us go ahead what is the projection
[11:28] of a vector to a subspace ok so we have
[11:30] seen
[11:31] two examples of taking this idea of
[11:34] shadows
[11:35] and now let us do a general definition
[11:37] and we will see that the particular case
[11:39] of rn with the usual the dot product and
[11:43] so on gives you
[11:44] the shadow that we just saw in the
[11:46] previous examples
[11:47] so let v be an inner product space you
[11:49] have a vector v
[11:51] you have a subspace w then the
[11:53] projection of v
[11:54] onto w is the vector in w denoted by
[11:58] projection of v ah subscript w
[12:01] computed as follows and i i want to
[12:03] underline that i am saying computed and
[12:05] not defined
[12:06] find an orthonormal basis v 1 v 2 v n
[12:08] for w
[12:10] define the projection as summation v
[12:12] comma v i
[12:14] times v i ok so now what happened here
[12:18] well we took an orthonormal basis
[12:23] ah which is why we didn't have to divide
[12:24] by anything in our first example
[12:26] remember we had to divide by something
[12:28] so the inner product of a with itself
[12:32] so the norm of a squared but since
[12:36] here our basis vectors are of length 1
[12:38] we do not have to do that
[12:40] here length means norm so here you just
[12:43] take the inner product of v
[12:44] with v i and multiply that number with v
[12:48] i
[12:48] and that is the projection of v onto w
[12:52] you might identify this with something
[12:55] we saw in our previous video
[12:57] so here is the main fact which is why i
[12:58] said computed and not defined
[13:01] the definition is independent or i
[13:03] should have said that expression is
[13:04] independent
[13:05] of the chosen orthonormal basis what
[13:07] does that mean the expression on the
[13:09] right hand side does not change
[13:12] so when i say the expression that means
[13:13] this expression here
[13:19] right this expression does not change
[13:21] even if you choose a different
[13:22] orthonormal basis
[13:24] so if i choose v 1 v 2 v n and
[13:27] you choose
[13:31] w 1 w 2 w n then
[13:34] even then this will this will not change
[13:38] so the projection of v onto w is the
[13:41] vector in w
[13:42] closest to v and what do we mean by
[13:46] closest
[13:47] so note that closest is in terms of the
[13:49] distance
[13:50] based on the norm induced by the inner
[13:52] product so what we mean is
[13:54] that if you take the smallest value of
[13:58] v minus w
[14:06] so find
[14:10] w and w such that this norm
[14:13] is smallest
[14:17] the answer is
[14:21] w is equal to projection of
[14:24] ah v onto w that is what we mean by
[14:29] the smallest distance and here what do
[14:32] we mean by
[14:33] uh distance because this is an inner
[14:35] product space there is no natural
[14:36] i mean there is no distance in the same
[14:40] sense of length that we have done for rn
[14:44] here distance means the norm right
[14:47] distance means no
[14:48] so in terms of the norm this is the
[14:50] smallest
[14:52] okay let's do examples the so i
[14:56] believe the previous definition may have
[14:59] been a little intimidating so let us do
[15:00] some examples
[15:02] so let v be r2 and let w be the subspace
[15:05] generated by 3 comma 1
[15:07] and let v be 1 comma 3 then the
[15:10] projection of
[15:12] of v on to w is 1.8 comma 0.6
[15:17] similarly if v is r 3 and w is the
[15:20] subspace generated by
[15:22] 1 0 0 and 0 1 0 so that is the x y plane
[15:26] and you take v to be 2 3 5 then the
[15:29] projection of
[15:29] v onto w is 2 3 0 let us work out these
[15:32] examples and it will make it clearer
[15:34] what we mean
[15:35] ok first of all you have to identify an
[15:37] orthonormal basis for
[15:39] the vector space at w at hand so here
[15:45] if you take 3 comma 1 and divided by
[15:47] root 10 so this is an
[15:49] orthonormal basis
[15:54] for w now let us let take
[15:57] v and
[16:00] then by definition you have to take v
[16:03] comma
[16:04] this one by root ten three comma one
[16:09] ah and multiply it by
[16:13] the basis vector this call whatever
[16:15] value you get you multiplied
[16:17] ah to the basis vector so this is three
[16:19] comma one and this is
[16:21] the projection
[16:26] ok so let us compute what that is so if
[16:28] you take this inner product you get
[16:30] so it is in the product of 1 comma 3 i
[16:33] can take that 1 by root 10 out and i
[16:35] have 1 by root 10 again here
[16:37] so so i get 1 by 10
[16:42] 3 comma 1 and this inner product is 1
[16:45] times 3 plus
[16:46] 3 times 1.
[16:51] by ten three comma one
[16:55] so this is a six by ten
[16:59] three comma one and now if you multiply
[17:02] you get 1.8 comma
[17:04] 0.6 so this is exactly what we had over
[17:07] here
[17:08] okay similarly here well in this case
[17:11] the you have an you have an orthonormal
[17:13] basis given
[17:15] so the this is the standard vectors
[17:18] standard basis vectors so this is an
[17:20] orthonormal basis
[17:25] so now what is the projection
[17:30] so this is the inner product of 1 0 0
[17:34] or let's write that on the other side
[17:39] ah 2 3 5 comma 1 0 0
[17:44] multiplied to 1 0 0 plus
[17:50] 2 3 5 comma 0 1 0
[17:55] multiplied to 0 1 0.
[17:58] so if you take this inner product you
[18:00] get 2 so this is 2 times 1 comma 0 comma
[18:03] 0
[18:04] and if you take this in the product you
[18:05] get 3 so this is 3 comma 0 comma
[18:08] comma 0 so you get 2 comma 3 comma 0.
[18:12] so this is exactly what you expect right
[18:14] if you have a vector like this
[18:16] and you take its projection onto the x y
[18:17] plane
[18:19] that vector will have a z coordinate 0
[18:23] but the x and y coordinate don't change
[18:25] and that's exactly what you are getting
[18:26] here that is exactly the picture
[18:28] that we saw in our second example so the
[18:31] projection indeed does
[18:32] uh does maintain does do what we expect
[18:35] it to do
[18:36] i mean this definition that we have does
[18:39] indeed do what we expect it to do
[18:41] for the usual euclidean geometry ah
[18:45] ok let us
[18:49] now ask what happens if instead of an
[18:52] orthonormal basis you have orthogonal
[18:54] basis
[18:55] we already saw in that previous example
[18:57] that we had
[19:00] i think it was 3 comma 1. so we
[19:03] converted it into an orthonormal basis
[19:06] and then we applied the
[19:09] definition and that is what you can do
[19:11] here as well
[19:12] so first of all let's define what is
[19:15] projection on a vector
[19:17] so let v be an inner product space and v
[19:19] and w be vectors in v
[19:21] define the projection of v on w
[19:24] so now this w remember is a vector is
[19:27] projection of the
[19:28] subspace generated by w so you take
[19:31] projection of v
[19:32] onto the subspace generated by w
[19:35] so how do we find this well you take
[19:38] your little w
[19:40] and your little w is uh is a basis
[19:43] vector for
[19:46] the the subspace it generates and you
[19:49] divide it by its norm so that will give
[19:51] you an
[19:51] orthonormal basis there is only one
[19:54] basis vector here so there is no
[19:55] question of orthogonality so the only
[19:57] thing you have to ensure is that the
[19:58] norm is one
[19:59] which you can do by dividing by its knob
[20:02] now ah i should point out that if
[20:06] if it so happens that w is 0 then you do
[20:08] not have to do all of this
[20:10] the projection is just defined to be 0
[20:12] because there is nothing else you can do
[20:15] so so assuming it is nonzero you can
[20:17] divide by its norm
[20:19] so once you divide by its norm you get w
[20:22] by norm of w
[20:23] which is an orthonormal basis for the
[20:25] subspace generated by w
[20:28] and now you can take the projection so
[20:30] the projection of v
[20:32] on w is by definition v comma
[20:35] inner product of v comma w by norm w
[20:38] times
[20:39] w by norm w which if you work out this
[20:42] is what we did in our
[20:44] in our previous example or as also in
[20:46] the
[20:47] first example with r2
[20:51] the beginning so here we get the inner
[20:54] product of v comma w you can take the
[20:56] norm
[20:56] out and you get a square of the nominal
[20:58] denominator from the two norms
[21:00] and then you can write it as v inner
[21:02] product of v comma w
[21:04] divided by norm of w comma w times w
[21:08] so this is the expression we got right
[21:09] at the beginning in the first
[21:11] slide of this video so now we can expand
[21:15] this if you have v1 v2 vn is an
[21:17] orthonormal
[21:18] orthogonal basis for a subspace w then
[21:21] you can divide each of them by their
[21:22] norms and that will give you an
[21:23] orthonormal basis
[21:24] this is what we have seen in the
[21:25] previous video
[21:29] and that's why if you take the
[21:31] projection that means you are taking the
[21:32] projection v
[21:33] with each of those v i by norm v i and
[21:36] then multiple the inner product with
[21:38] each v i comma num v i multiplying by v
[21:40] i
[21:41] minum v i and taking the sum and if you
[21:44] work it out that means you get summation
[21:47] v comma inner product of v comma v i
[21:49] times in the product
[21:50] sorry divided by v in the product of v e
[21:53] i comma v i
[21:54] and here there is a typo this should be
[21:56] times
[21:57] v i and then this
[22:01] thing here is exactly what we called the
[22:04] projection of v on vi so you can write
[22:06] it as a sum of
[22:07] projection of v on vi so the so if you
[22:10] have an orthogonal basis
[22:12] ah projection of v on w you can just
[22:16] write it as the sum of the projections
[22:17] on each of the basis vectors
[22:20] so that that is the upshot of this
[22:22] argument here so let us do an example
[22:25] so let w be the two dimensional subspace
[22:27] of v is r3
[22:29] spanned by the orthogonal vectors one
[22:31] two one and
[22:32] one minus one one by the way you do not
[22:35] have to take my word
[22:36] that these are orthogonal you can take
[22:39] the inner product
[22:40] i should also again remind you that if
[22:43] no inner product is specified
[22:45] then by default it's the standard inner
[22:47] product on
[22:48] for rn so here that means it's a dot
[22:50] product so if you take the dot product
[22:51] you get
[22:52] 1 minus 2 plus 1 which is 0 so these are
[22:54] orthogonal
[22:56] so what is the projection of v is minus
[22:58] 2 2 2
[22:59] on w we find out each of these
[23:02] individual projections
[23:04] so the projection of v on v 1 is by
[23:07] definition
[23:08] as we saw inner product v comma v one
[23:10] divided by v
[23:11] in the product v one v one times v one
[23:14] which if you work out
[23:15] gives you two thirds one two one
[23:18] so um so the numerator is
[23:22] minus 2 plus 4 plus 2 so
[23:25] minus 2 plus 4 plus 2 is just 4
[23:29] and the denominator is
[23:32] 1 plus 4 plus 1 so that's 6 so 4 by 6
[23:35] times 1 to 1 so that is what we got
[23:38] similarly if you do it for v 2
[23:41] the numerator is
[23:42] [Music]
[23:44] minus 2 minus 2 plus 2 so that's minus 2
[23:48] and the denominator is 1 plus 1 plus 1
[23:50] so that's 3
[23:51] so you get minus 2 thirds times 1 minus
[23:54] 1
[23:54] 1 and now the projection of v on
[23:57] w meaning the subspace is
[24:01] where you add these projections up so
[24:03] that is given by
[24:04] ah yeah so this should not be a capital
[24:06] this was a small
[24:10] so that is two third one two one minus
[24:13] two third
[24:14] ah one minus one one which gives you
[24:19] 2 3 times 2 plus 1 in the
[24:22] second coordinate and 0's in the other
[24:24] coordinates so that gives you 0 2
[24:26] 0 yeah so that's that's the
[24:32] projection of v on this subspace w
[24:36] fine so at the end let's talk about
[24:38] projection as a linear transformation so
[24:40] we have studied the notion of a linear
[24:42] transformation
[24:43] so let v be in the product space and w
[24:45] be a subspace
[24:47] then the projection of vectors in v to w
[24:49] is a linear transformation from v to v
[24:51] with image w
[24:52] okay so what do we mean by this
[24:56] let's study that in a second
[24:59] before that let us remark that we denote
[25:02] this linear transformation as p
[25:04] w ok what is p w let us let see what is
[25:07] p w
[25:08] so p w of v we are saying is defined as
[25:11] projection of v
[25:14] on w this is p w of v yeah
[25:18] and what do we need for a linear
[25:19] transformation to work for this to be a
[25:21] linear transformation we need that if
[25:23] you take
[25:24] two vectors v one and v
[25:28] two this is p w of v one
[25:32] plus p w of v two and we need
[25:36] if you take p w of some constant times v
[25:40] you get c times p w of v yeah this is if
[25:43] we know these two
[25:44] then this is the definition of p w being
[25:46] a
[25:47] linear transformation so given a v we
[25:50] get a
[25:51] new vector in v ah which is the
[25:53] projection vector and actually this
[25:55] this this vector is in w right
[25:59] so it has image w that's what this is
[26:01] saying
[26:02] so let's maybe quickly run through these
[26:05] proofs
[26:06] so the idea here is the following we
[26:08] choose an orthonormal basis so choose
[26:12] orthonormal basis
[26:15] let us say w 1 through w n
[26:18] for w then by definition
[26:24] uh this thing on the left is um
[26:28] summation we just saw this this is
[26:30] summation of
[26:33] well okay first of all by definitions is
[26:35] projection of
[26:37] v 1 plus v 2 on w
[26:40] which we just saw was the projection the
[26:43] sum of the projections
[26:46] on each w i
[26:54] but what is this by definition this is
[26:58] the inner product of v 1 plus v 2 comma
[27:02] w i times w i right and then sum
[27:06] one through n aha
[27:09] but then you can make this into two
[27:12] different terms
[27:13] v one comma w i times w i
[27:18] plus
[27:22] v 2 comma w i this is v u 1
[27:25] comma w i so times w i
[27:29] ok and this is exactly this term this is
[27:32] exactly this term
[27:33] so that's why the
[27:36] projection of v 1 plus v 2 is a
[27:39] projection of v 1 plus projection of v
[27:41] 2.
[27:41] and how about the other the other part
[27:45] so p w of c v by definition is
[27:47] projection of
[27:49] cv on w
[27:53] which again by definition is summation
[27:56] i is 1 through n so i i'll directly
[28:00] write this
[28:00] at this point this is c v comma w
[28:04] i times w i you can take the c out
[28:07] and then you can remove it all the way
[28:09] out of the sum as well so c
[28:10] times summation v comma w i times
[28:14] w i but which is exactly this
[28:17] so that that's the proof that it is
[28:19] indeed a linear transformation
[28:21] so what are we saying really i mean if
[28:22] you think carefully of what we are
[28:24] saying it is the following
[28:25] the projection is some kind of taking
[28:27] shadows right
[28:28] so this is saying if the length of your
[28:30] vector is larger
[28:32] then the shadow is equivalently larger
[28:34] yeah this is this makes perfect sense
[28:36] that's what this second part is saying
[28:39] and the other part is saying if you take
[28:40] the sums of
[28:41] two vectors then the
[28:45] the resultant vector you take its shadow
[28:48] instead if you take the shadows first
[28:50] and then take the sum
[28:51] you will get the shadow of the resultant
[28:54] yeah this
[28:55] again if you think a little about the
[28:57] parallelogram law
[28:58] this makes perfect sense ok so anyway i
[29:01] have proved it
[29:01] but this is not not i mean even
[29:05] geometrically this is
[29:06] very natural let's
[29:10] quickly look at a few properties of this
[29:12] projection
[29:14] pw so this is a linear transformation
[29:17] and some of these properties actually
[29:18] characterize it
[29:19] but i won't expand on what that means
[29:23] so first of all if your v belongs to w
[29:26] then p
[29:26] w of v is v why is that that's exactly
[29:28] the formula we saw in the previous video
[29:30] i'll come back to this point
[29:32] at the end of the slide range of pw is
[29:35] w that's what we said the image of pw w
[29:39] maybe i should yeah this is
[29:41] range may be was not the word we used we
[29:44] use the word image
[29:46] yeah that follows from the first first
[29:49] point
[29:51] so let us define this set called w
[29:54] perp so it's a set of those vectors such
[29:57] that when you
[29:58] take the inner product of such a vector
[30:00] with any element of
[30:01] any vector in w you get 0.
[30:04] so for example if if you have the usual
[30:07] inner product
[30:08] and on r2 and you take the x axis then
[30:11] the perp is the y axis
[30:12] right ah so then so this is true
[30:16] we can define this for any inner product
[30:18] space so w perp is
[30:20] ah the
[30:23] sets are so defined and it turns out
[30:26] that this is the null space of pw right
[30:28] and it if you look at this definition
[30:30] carefully
[30:32] it will take you a minute to prove that
[30:35] v w squared is p w ah what does this
[30:38] mean
[30:38] ah i will come back to this at the end
[30:41] of the slide and finally norm of p w of
[30:43] v is less than or
[30:44] less than or equal to the norm of v very
[30:47] intuitive
[30:48] because if you take something like this
[30:50] and you are taking its shadow you are
[30:51] saying that the shadow has
[30:53] smaller length okay and now you have to
[30:56] understand here that the length is
[30:58] if you take a projection in the usual
[31:01] sense in the
[31:02] perpendicular sense then this is clear
[31:04] but if you take your light source
[31:05] elsewhere
[31:06] then you remember that your norm is also
[31:08] different okay
[31:10] so that is why even if you take it here
[31:13] you could have a very long shadow
[31:15] but you are computing length in a
[31:17] different way so this will still be
[31:19] satisfied okay so this is a slightly
[31:20] tricky part i won't expand on this
[31:22] because
[31:23] we probably don't need it in this in
[31:26] in this course but those of you who feel
[31:29] like this is interesting should think of
[31:30] it
[31:31] ok let me come back to this part about
[31:34] the image so first of all this is
[31:36] called the image why is pw of v equal to
[31:38] v well what is the definition
[31:40] choose an orthonormal basis so this is
[31:42] an orthonormal basis
[31:47] and then look at ah
[31:50] v comma w i times w i sum over i
[31:56] now if v is in w so if v is in w
[32:01] then v is summation c i
[32:04] w i because w is form a basis but then
[32:08] what is the ci
[32:09] we saw in the previous video that these
[32:10] ci's are exactly
[32:12] these inner products so the ci
[32:15] is exactly the inner product v
[32:19] comma wi so this is so this is
[32:22] equal to v right that means v is equal
[32:25] to the projection of
[32:26] um v on w if v is
[32:30] already a element of w now this makes
[32:32] perfect sense
[32:33] if you already have a vector which is in
[32:36] your
[32:38] in your vector space the nearest vector
[32:41] to this will be
[32:42] itself right because it's at distance 0
[32:44] so this is perfectly
[32:46] logical and indeed we have proved it
[32:49] so because of this the image is w as i
[32:52] said the third point you
[32:54] you should sit down and check it will
[32:55] take you a minute what is the meaning of
[32:57] p
[32:57] w squared is p this is not actually p w
[32:59] squared
[33:00] what we mean by pw squared is pw compose
[33:04] pw
[33:04] what that means is if you take pw and
[33:07] apply to v
[33:09] and then this is again a vector of v and
[33:12] then
[33:12] you applied again to this well but
[33:16] this you know p w of v is in already
[33:18] inside w
[33:20] so p w of anything inside w is already
[33:23] itself so that's why it's pw of e so
[33:24] that
[33:25] explains the fourth one fifth one i i i
[33:28] will
[33:29] uh i have already given some intuitive
[33:30] explanation but maybe i won't expand on
[33:32] this
[33:33] thank you
[33:39] you