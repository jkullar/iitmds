# W8_L5: Orthogonal transformations & rotations

**Week:** Week 8
**YouTube URL:** https://www.youtube.com/watch?v=2qruaPxQUJU

---

## Transcript

[00:00] [Music]
[00:14] hello and welcome to the
[00:16] match 2 component of the online bac
[00:18] program on data science and programming
[00:20] this is a video on orthogonal
[00:22] transformations and rotations
[00:24] so before i start the video i i want to
[00:27] sort of
[00:29] emphasize that this is maybe not an
[00:31] extremely important video from the
[00:33] perspective of
[00:34] the data science course but it's a
[00:37] useful video from
[00:39] if you find mathematics interesting and
[00:42] certainly
[00:43] uh the ideas of rotations and so on
[00:46] which we are very close to
[00:48] given the material that we have covered
[00:49] so far are interesting even
[00:52] to people who don't particularly enjoy
[00:54] mathematics
[00:55] so in some sense this video is for for
[00:59] a general view of what kind of
[01:00] mathematics you can study
[01:02] uh using linear azure which we have
[01:04] studied so far
[01:05] okay so let us talk about orthogonal
[01:08] transformations and rotations
[01:10] so let v be an inner product space and t
[01:14] be a linear transformation from v to v
[01:16] so t is said to be an orthogonal
[01:18] transformation if
[01:20] the inner product of t v and t w
[01:23] is the same as the inner product of v
[01:24] and w for all v and w
[01:27] in in the vector space v okay
[01:30] so for any two vectors
[01:33] you change them you transform them using
[01:35] a linear transformation t
[01:37] then the changed vectors maintain the
[01:40] inner product
[01:41] okay so the inner product does not
[01:43] change
[01:44] uh after the transformation okay this is
[01:47] this is when you will say that this
[01:50] transformation is an
[01:51] orthogonal transformation okay
[01:55] so ah what does it mean for rn
[01:59] this is the main sort of intuition
[02:01] behind why we study
[02:03] orthogonal transformations so when v is
[02:05] rn with the usual inner product
[02:07] a linear transformation t r into r n is
[02:09] orthogonal
[02:10] if it preserves angles and lengths okay
[02:13] so let's understand where this is coming
[02:14] from
[02:15] so note that the inner product of
[02:19] two vectors in rn the usual inner
[02:23] product meaning the dot product
[02:25] is the norm of v times the norm of w
[02:29] times cosine of the angle between these
[02:31] two
[02:33] vectors so now if you take these two
[02:36] sides
[02:36] you get t v dot t w is inner product of
[02:40] t v
[02:40] sorry norm of t v times norm of t w or
[02:43] we can say the length of t v
[02:45] times the length of t w times cosine of
[02:48] the angle between
[02:49] t v and t w and on the other side we
[02:53] have the length of v
[02:54] times the length of w times the cosine
[02:56] of the angle between
[02:57] v and w so now if the
[03:01] linear transformation preserves if these
[03:04] two are equal
[03:05] right so first of all and they are equal
[03:07] remember for all b and w so in
[03:08] particular you can take
[03:11] v to be equal to w in that case the two
[03:13] sides will give you
[03:14] norm of t v squared is equal to norm of
[03:17] v squared norms are always positive
[03:19] that's why norm of t v is equal to norm
[03:21] of p
[03:22] so in other words the lengths are the
[03:25] same
[03:25] yeah after you apply t the length of v
[03:28] remains unchanged so length of t
[03:30] v is the same as length of v so that
[03:32] means it preserves lengths
[03:34] and now you apply it to the general
[03:35] situation of
[03:37] v and w so you have length of v times
[03:40] length of w times the cosine of the
[03:41] angle between them the length of t v
[03:43] times length of t w times the cosine of
[03:45] the angle between but length of t v is
[03:47] the same as length of v
[03:48] length of t w is the same as length of w
[03:52] and that is why on both sides you get
[03:53] only that the angle between
[03:55] t v and t w is equal to the angle
[03:57] between or cosine of the angle between
[03:59] t v and t w is the same as cosine of the
[04:02] angle between
[04:04] v and w and that tells you that the
[04:05] angle between v and w is the same as the
[04:07] angle between
[04:09] t v and t w so it also preserves angles
[04:13] that's why we have this uh
[04:16] this comment so in other words
[04:18] orthogonal transformations are some very
[04:20] useful
[04:21] or interesting they have some
[04:24] interesting geometry
[04:25] when we consider the usual inner product
[04:29] namely the dot product okay here's a
[04:31] fact
[04:32] it is enough in the case of rn
[04:35] to demand that the linear transformation
[04:37] preserves lengths so in that case
[04:39] angles automatically get preserved so
[04:42] what we are saying is since this is for
[04:45] all v
[04:45] and w so if you take three
[04:50] points and then after transformation
[04:56] ah they become
[05:04] like this
[05:07] ok so the the relative lengths are the
[05:11] same right that means this length is
[05:13] also the same
[05:18] right and that will sort of force that
[05:20] the angle does not change so this is the
[05:22] idea
[05:22] ok i am not proving this ah but it is a
[05:25] fact that
[05:26] i think is very visually appealing so
[05:28] this is something you may be able to
[05:30] ah try and see okay let us see a very
[05:33] nice
[05:34] example of ah
[05:38] of these in action ah so this is a video
[05:42] created by our team
[05:43] so you look at the x y plane and let us
[05:46] look at this t
[05:47] so the t here is the identity so u is t
[05:51] times v
[05:52] v is the vector in yellow and if you
[05:56] apply t let's see how it changes so
[05:59] if your t is point five point eight
[06:01] seven etcetera so look at how your t is
[06:03] changing and
[06:03] the u is changing accordingly so when it
[06:06] is minus one
[06:07] ah on the diagonal its the opposite
[06:09] vector
[06:13] right and then it comes back closer to v
[06:17] and now we are back at v okay
[06:21] so you can see that what happened here
[06:24] these various different t's maybe i i
[06:27] let's play this again
[06:28] yeah so if you play it again let's look
[06:31] at the t's again
[06:32] so
[06:35] use t times v when t is the identity
[06:38] matrix u is just
[06:39] equal to v when u changes to 0.5 minus
[06:44] 0.87.87.5
[06:46] u gets changed so you can see that u is
[06:49] being
[06:50] rotated so the length is remaining the
[06:52] same
[06:53] right so it is rotating on the same
[06:54] circle that tells you that the
[06:56] length is remaining the same
[07:00] okay so the point here is that
[07:04] these these t's that we have all of them
[07:07] preserve length
[07:09] and that is why
[07:13] they are orthogonal transformations so
[07:16] these are examples of orthogonal
[07:17] transformations
[07:18] so this is the next slide finding the
[07:21] rotation matrix in r2
[07:23] so what we saw were examples of what we
[07:24] call rotation matrices so they
[07:26] rotate vectors so how do we find
[07:29] rotation matrices in r two
[07:31] so consider the standard basis e one e
[07:34] two
[07:35] rotate the plane by an angle theta
[07:36] that's what we saw in the in the video
[07:39] so it was rotated by those various
[07:41] various
[07:42] angles and corresponding to that angle
[07:46] that you rotated there was a t there
[07:48] right so we want to understand how to
[07:50] get
[07:51] the matrix corresponding to the rotation
[07:53] by theta
[07:54] so if you rotate then let us say if you
[07:56] rotate by theta then you get these
[07:58] vectors in red
[07:59] so you drop the you drop perpendiculars
[08:03] to these
[08:04] to the axis so that we can write down
[08:06] what are the coordinates
[08:09] of of the vector and
[08:12] what you can see is so if this is theta
[08:14] then
[08:15] the opposite side well it's a the
[08:17] hypotenuse
[08:19] since it's rotated the hypotenuse is the
[08:22] vector in red so rotation will not
[08:25] change
[08:27] the length so the hypotenuse has length
[08:30] 1 this red thing has length 1
[08:34] and this as a result has length
[08:37] sine theta and this as a result has
[08:40] length cosine theta
[08:41] so the coordinates of this point or the
[08:45] corresponding vector to this red
[08:49] line is cosine theta
[08:53] because that is the length that you get
[08:57] on the x axis
[08:58] when you when you drop the perpendicular
[09:00] or project
[09:02] and on the y axis its sin theta right
[09:06] similarly if you do it for e2
[09:10] the coordinates you get are minus sin
[09:12] theta
[09:14] and cosine of theta
[09:17] ok so now we know how to write down the
[09:20] corresponding
[09:22] matrix let t theta be the corresponding
[09:25] linear transformation
[09:26] that is a linear transformation that you
[09:27] obtained by rotating by
[09:30] theta then we have seen t theta of one
[09:33] zero is cosine theta sin theta
[09:36] and t theta of 0 1 is minus sin theta
[09:38] cosine theta
[09:39] so now if you want to express this as a
[09:41] matrix meaning with respect to the
[09:43] standard
[09:44] ordered basis then we just saw how to do
[09:47] it
[09:47] namely you take these these coordinates
[09:50] for 1 0
[09:51] and put it in your first column take
[09:53] these coordinates for
[09:55] the image of 0 1 and put it in your
[09:57] second column this we have seen in
[09:59] our previous videos
[10:03] and notice here that um r theta
[10:06] transpose is
[10:08] r minus theta and r theta transpose
[10:11] times r theta is
[10:13] r theta times r theta transpose is
[10:16] identity
[10:18] and note which we have seen earlier that
[10:20] then that since
[10:21] angles and lengths ah there is a typo
[10:24] here
[10:25] since angles and lengths are preserved
[10:29] and the standard base is normal the
[10:32] rotated vectors are also
[10:33] orthonormal why why is that the case
[10:35] because the angle between
[10:37] these two vectors cosine theta sin theta
[10:40] and minus sine theta cosine theta
[10:42] is still 90 degrees right because we
[10:45] just rotate it
[10:48] so they are orthogonal to each other and
[10:51] the rotation will not change length so
[10:53] one zero and zero one have
[10:56] um length one so these two basis vectors
[10:59] also have length one
[11:02] ah yeah so they yield an orthonormal
[11:04] basis of r two so in other words these
[11:06] columns that we have here
[11:08] for our theta is an orthonormal basis
[11:12] there is something worth seeing and it
[11:14] is worth observing that
[11:15] that fact is exactly borne out by uh
[11:18] this identity here that r theta
[11:20] transpose times r theta is r theta times
[11:22] r theta transpose
[11:23] is identity so i'll encourage you to
[11:25] check that
[11:26] ah by the way why is r theta transpose
[11:28] equal to r minus theta
[11:30] so if you write down r minus theta you
[11:33] get cosine of minus theta but well that
[11:35] same as cosine of theta
[11:38] sine of minus theta which is minus sine
[11:41] of
[11:42] theta and then um
[11:46] minus of sin theta with sine of sorry
[11:49] minus of sine of minus theta which is
[11:51] minus
[11:52] minus sin theta which is just sin theta
[11:54] and then again cosine of theta
[11:56] so this is exactly r theta transpose
[11:59] okay and now you can check that um
[12:03] r theta transpose times r theta is r
[12:05] theta times r theta transpose identity
[12:08] so the point here is when you apply r
[12:09] theta you are rotating by theta
[12:11] when you apply r theta transpose we just
[12:14] we have seen that that is the same as
[12:16] applying r minus theta which is the same
[12:18] as saying that you are
[12:19] rotating back by theta yeah you are
[12:21] rotating by minus theta
[12:23] so rotate by theta rotate back by minus
[12:25] theta
[12:26] you will exactly get the identity
[12:28] transformation that's what this is
[12:29] saying
[12:31] so as i said this this video is largely
[12:33] a fun video more to do with
[12:36] the geometry behind what is all going on
[12:39] ok so let us look at rotations in r3 so
[12:41] the rotations
[12:44] about the axis in r3 the general
[12:46] rotations are a bit more too
[12:48] difficult to describe since these
[12:50] clearly preserve angles and distances
[12:52] and are linear transformations right if
[12:54] you rotate about the axis
[12:56] then certainly ah this is a linear
[12:59] transformation
[13:00] and it's clearly going to preserve
[13:02] lengths and
[13:04] angles this was what we also saw in r2
[13:07] so these are orthogonal transformations
[13:10] so
[13:11] in the previous slides we saw for r2 you
[13:13] could describe them by
[13:15] looking at the images of e1 and
[13:18] 2 here you have to look at the images of
[13:21] e 1 e 2 e 3.
[13:23] so if we consider the rotation about the
[13:25] z axis
[13:27] then e 3 is unchanged because if you
[13:30] look at the z axis that
[13:32] you are rotating about the z axis so the
[13:34] z axis remains unchanged so e 3 which is
[13:37] the unit vector in the
[13:38] z axis direction remains unchanged
[13:43] and the x y plane gets rotated exactly
[13:45] as in the previous
[13:47] slide so what we get is the
[13:50] corresponding
[13:51] matrix looks like cosine theta minus sin
[13:54] theta 0 or sine theta cosine theta 0 0 0
[13:56] 1 so
[13:57] this is because we are basically
[13:58] rotating only the x y plane and
[14:02] if you followed that then the same idea
[14:04] will tell you that if you have the x
[14:06] axis which is fixed and you rotate about
[14:09] the x axis
[14:11] so here is x y z
[14:14] here's your x axis so you rotate like
[14:16] this
[14:18] right so if you do that then ah
[14:22] you think of the y z plane and on the y
[14:25] z plane you will get
[14:26] cosine theta minus sin theta sin theta
[14:29] cosine theta and
[14:30] then it will be a block diagonal with
[14:32] one corresponding to the
[14:33] x y x axis being fixed
[14:38] okay and then for the y axis similarly
[14:40] you have a one in the
[14:42] middle position and the
[14:45] minor corresponding to that one or the
[14:47] matrix
[14:48] corresponding to that one is ah cosine
[14:51] theta minus sin theta sine theta cosine
[14:53] theta ok so i i will encourage you to
[14:55] check this
[14:56] and again notice again because of the
[14:58] previous ah
[14:59] slides that t i theta transpose is t i
[15:02] minus theta and t i theta transpose t i
[15:04] theta
[15:05] is t i theta t i theta transpose is
[15:07] identity for the same reason that we
[15:10] gave in the r two example
[15:13] let us do another example ah so this is
[15:16] a bit
[15:16] bit more involved
[15:20] so look at the linear transformation t
[15:22] from r three to r three
[15:24] given by x one x two x three is one
[15:26] third x one minus two x two plus two x
[15:29] three
[15:29] two x one minus x two minus two x three
[15:32] and two x one plus two x two plus
[15:34] x three now these coefficients should
[15:36] ring a bell in your mind
[15:37] but if they don't we'll anyway study
[15:41] what what happens to the standard basis
[15:44] vector then you will see that these are
[15:46] very familiar so if you evaluate e 1
[15:51] let us call that v 1 then you get one
[15:54] third
[15:55] two third and two third if you evaluate
[15:58] e2 let's call that v2 you get minus two
[16:01] third
[16:02] minus one third two third and if you
[16:05] evaluate e3
[16:06] ah then you get v3 which
[16:11] is two third minus two third and one
[16:14] third
[16:15] so we have seen earlier that this is an
[16:16] ortho normal basis this was exactly
[16:20] an orthonormal basis we produced in the
[16:23] gram schmidt process video okay
[16:26] so the corresponding matrix is
[16:30] 1 3 times 1 minus 2 2 2 minus 1 minus 2
[16:34] 2 to 1. so where did this come from so
[16:37] the first column corresponds to v 1 the
[16:40] second column corresponds to v 2 and the
[16:42] third column corresponds to v
[16:43] 3. i have just taken one third common
[16:46] outside
[16:48] which i can do because its scalar
[16:49] multiplication right
[16:51] okay so ah as v1 v2 v3 is an
[16:55] orthonormal set the linear
[16:57] transformation t is an
[16:58] orthogonal transformation now that needs
[17:01] a little bit of
[17:03] of checking
[17:06] so what you have to do is you have to
[17:09] take
[17:10] this t x 1 x 2 x 3 and you have to check
[17:13] that if you
[17:16] apply the norm on both sides
[17:19] so if you take so if you take norm of
[17:24] t x then this is the same as the norm of
[17:27] x
[17:28] right this is what you want to check and
[17:30] the claim is that
[17:31] if if if i happen to know that v one v
[17:34] two v three is an orthonormal basis
[17:36] which in this case i do
[17:38] then then that will be true and the
[17:41] reason is this identity
[17:44] that a a transposes a transpose a is
[17:48] i3 i'll i'll suggest you check this
[17:51] identity
[17:52] actually it's a very easy check because
[17:53] what happens is when you do a transpose
[17:58] or a transpose a really what you are
[18:00] getting is
[18:01] in each place is the inner product of ah
[18:03] two of these
[18:04] basis vectors so when they are not equal
[18:06] it will be zero and when they are equal
[18:08] it will be one
[18:09] that is the main sort of reason we we
[18:12] said
[18:13] v 1 v 2 v 3 is an orthonormal set
[18:17] so you obtain this and from here you can
[18:20] you can
[18:21] get that norm of t x is equal to norm of
[18:23] x
[18:24] because when you apply norm somewhere in
[18:27] there
[18:28] this these inner products will play a
[18:29] role
[18:31] so a square matrix is called an
[18:33] orthogonal matrix if
[18:35] a a transpose is a transpose a is
[18:37] identity let me
[18:39] expand a little on that comment ah
[18:42] so the idea is that
[18:46] when you are looking at norm of t
[18:49] x
[18:52] well you get in the product of d x comma
[18:55] d x
[18:57] but here we are looking at this inner
[18:59] product in terms of the usual dot
[19:01] product
[19:01] so let us do it for the dot product
[19:05] so t x dot with t x
[19:08] this is the same in terms of matrices as
[19:10] looking at t
[19:11] x transpose times t x which is the same
[19:14] as x transpose
[19:16] t transpose t times x aha
[19:20] but t transpose t is identity so you get
[19:22] x transpose x
[19:23] which is norm of x ok this is the main
[19:27] point that is why we are
[19:28] we are demanding this thing here
[19:32] ah i may have
[19:35] used bad notation and
[19:39] probably here when i went to matrices i
[19:43] should have used a
[19:44] and not t this is a
[19:52] yeah everything else is fine right t of
[19:54] x when you evaluate this x as a
[19:57] vector in r3 as in terms of its
[19:59] coordinates you have to
[20:01] move to a so this is why
[20:04] it works and
[20:09] so an orthogonal matrix is a a transpose
[20:11] a transpose
[20:12] is identity that's that's the reason we
[20:16] call such matrices as orthogonal
[20:18] matrices because when you
[20:20] use them to create linear
[20:21] transformations on rn
[20:23] then those linear transformations are
[20:25] going to be orthogonal linear
[20:26] transformations
[20:28] ok so the take home from this video i
[20:30] guess is that
[20:32] this notion of orthogonality is it's a
[20:35] very geometric notion
[20:36] it it studies uh
[20:39] essentially the angles and in particular
[20:42] right angles which
[20:43] which as we know since antiquity is
[20:45] something we have been very
[20:47] interested in and there are beautiful
[20:50] theorems related to that
[20:52] and this is some linear algebraic way of
[20:56] of studying the
[20:59] changes that take place when you apply a
[21:00] linear transformation
[21:02] to angles
[21:05] and in particular if they remain
[21:07] unchanged
[21:09] then these are some special linear
[21:11] transformations and they are called
[21:12] orthogonal linear transformations of
[21:14] course you have to also maintain
[21:15] distances
[21:16] so both both are involved that's it for
[21:18] now thank you