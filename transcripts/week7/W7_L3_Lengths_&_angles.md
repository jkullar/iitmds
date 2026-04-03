# W7_L3: Lengths & angles

**Week:** Week 7
**YouTube URL:** https://www.youtube.com/watch?v=TtQ6AQUlwl0

---

## Transcript

[00:14] Hello, and welcome to the Maths 2 component of the online degree program on data science.
[00:21] In this video, we are going to talk about the notion of lengths and angles. So, some
[00:26] of this may have already been seen in Maths 1 in some form and some of this may be really
[00:31] easy and something you have seen before. But let us recall quickly what is the notion of
[00:37] lengths and angles.
[00:40] So, let us talk about the dot product of two vectors in R2. So, consider the vectors, let
[00:47] us start with an example. So, consider the two vectors, 3, 4 and 2, 7 in R2. So, the
[00:52] dot product of these two vectors gives us a scalar as follows, scalar is a real number.
[00:57] So, you have 3 4 dot with 2 7. This is, so you take the first components of each of these
[01:04] vectors, multiply them. You take the second components of each of these vectors, multiply
[01:09] them, and you add them. So, this is going to give you 3 times 2 plus 4 times 7. So,
[01:15] this is 6 plus 28, which is 34.
[01:16] Let us  generalize this to any two vectors in R2.
[01:24] So, if you have x1, y1 and x2, y2 in R2, the dot product of these two vectors is the scalar
[01:31] real number computed as follows; x1, y1 dot x2, y2 is x1 times x2 plus y1 times y2. So,
[01:38] you multiply the first components, you multiply the second components, and then you add those.OK
[01:48] So, let us now ask what is the length of a vector in R2? So, let us consider 3, 4, which
[01:58] we saw in the previous example while computing dot products. So, if you want to compute the
[02:04] length of this vector, how do, what do we do? Well, we use the Pythagoras theorem. So,
[02:13] you drop a perpendicular down to, let us say, the x-axis.
[02:17] So, then if you do that, you can get, you get a right angled triangle. So, using this
[02:25] right angled triangle, so this is the right angled triangle. And because this is a right
[02:31] angled triangle and the, since you have dropped a perpendicular, this length here is 3, this
[02:38] length here is 4, this is the x coordinate, this part is a y coordinate.
[02:48] And so if you want to compute the length of the red line, that is the length of the vector,
[02:52] you use Pythagoras theorem, which says that the length of the vector 3 comma 4 is the
[02:57] square root of, so the hypotenuse squared is equal to the sum of the squares of the
[03:03] sides that is a Pythagoras theorem. So, the length of the hypotenuse is square root of
[03:11] the sum of the squares of the sides.
[03:14] So, in this case, it is square root of 3 square plus 4 square, square root of 9 plus 16 is
[03:20] 25. So, square root of 25 is 5. And we do not know here what units we are doing it in.
[03:25] So, whatever units we are doing it in. So, if this one is corresponding to centimeters,
[03:30] it is in centimeters, if one is corresponding to kilometer, it is in kilometers, if one
[03:34] is corresponding to miles, it is in miles and so on, so whatever units are being used
[03:38] for drawing this R2.
[03:41] So, the units is not important as far as this course is concerned. Of course, if you start
[03:47] doing physics and so on that matters or if you do real life problems, it matters. So,
[03:59] the main point here is that you have to remember that this, if you do a general x, y maybe
[04:04] we can do it right here, if I have x comma y, so if I have something like this, this
[04:11] you drop a perpendicular here, this represent, this is exactly x and this part is exactly
[04:20] y. So, it gives you a right-angled triangle. And so the length of this vector, if I call
[04:26] this vector v, so v which is x comma y, its length is square root of x square plus y square.
[04:37] So, this is really what we are seeing here.
[04:41] OK. So, observe that, let us link this up with dot products. Observe that 3 comma 4
[04:48] dot 3 comma 4 is 3 square plus 4 square, which we saw was the exactly what was in the square
[04:56] root part when we computed length. So, the length of 3 comma 4 is the square root of
[05:02] the dot product of the vector with itself. So, the length of the vector 3, 4 is square
[05:06] root of 3 comma 4 dot 3 comma 4, which is square root of 3 square plus 4 square, which
[05:13] is, this is unfortunately wrong. This is root of 25, which is 5. OK.
[05:23] So, in general, of course, this is what I just said. The length of the vector is, so
[05:30] the length of the vector is root of x square plus y square, which is exactly what you get
[05:36] by doing root of x comma y dot with x comma y and here, as I said, this should be root
[05:45] 25 is 5. So, the length of the vector is given by taking square root of the dot product with
[05:54] itself. This is the take home. So, the length and the dot product are related in a very
[06:01] intimate fashion.
[06:04] Let us look at the angle now. So, the other thing we want to study in this video is angles.
[06:08] So, the angle between two vectors u and v, so this is a measure of, sorry, this is not,
[06:13] there is no and here. The angle between the vectors u and v measures how far the direction
[06:19] is of v from u. So, if you have the angle, this will be a small angle, as compared to
[06:27] this, which is a large angle. So, in our previous picture or well, so there is a picture coming
[06:35] up.
[06:36] So, we have our old friend, 3 comma 4, and we have another vector 1 comma 5. So, the
[06:44] angle is this thing theta here. So, it measures how far in terms of directions these two vectors
[06:52] are from each other, so how far the directions of these vectors are from each other. Now,
[06:57] we have seen this idea of directions and lengths which we called magnitudes in our very first
[07:06] video on vectors, so just recall that if you do not remember.
[07:12] So, the angle is measured in degrees or radians. So, if it is in degrees, it is between 0 and
[07:18] 360. So, 0 is itself. And as you increase and go up to 360, it comes all the way back
[07:25] and then 360 is again itself. So, this is like a clock. If you have 9 am and 9 pm, the
[07:33] clock shows you the same thing, but 12 hours away lab, so that is what this 360 is saying.
[07:39] If, 360 means you have taken around and come back. But as far as the angle is concerned,
[07:45] it is 360 and 0 are telling you the same things.
[07:49] Or it is, it can be measured in terms of radians. So, radians is more of a, it has something
[08:01] to do with the length of the arc. So, that is measured between 0 and 2 pi. So, again,
[08:08] 0 is like this, meaning they are the same. And 2 pi is when you go all round and come
[08:13] back. So, just pi which is 2 pi by 2, so half of 2 pi is where they are like this. So, the
[08:19] two vectors are parallel to each other, but pointing in different directions, like the,
[08:29] from the center of the earth, the North Pole and the South Pole. They are in different
[08:32] directions.OK So, it is measured in degrees or radians.
[08:38] So, this also tells you what is the relationship between degrees and radians, because 2 pi
[08:44] radians is equal to 360 degrees. So, from there you can say, in general, if you have
[08:49] an angle of theta degrees, what should be the corresponding radians. The angle is often
[08:57] described by computing or measured, maybe we should say, by computing its trigonometric
[09:03] functions described or I want to say or measured by computing its trigonometric functions,
[09:13] so which is sine, cosine, tan, etc.
[09:15] What is the relation between dot product and angles? So, if you have two vectors in R2,
[09:21] we can compute the angle between which, let us call it theta, between the two vectors
[09:28] by using dot products as cosine of theta is u dot v divided by square root of v dot v
[09:35] times u dot u. So, this times is these are real numbers, remember. So, this is just multiplication
[09:41] in real numbers. So, and then you can take the inverse cosine. And we usually think of
[09:51] it as being between 0 and 2 pi again.
[09:55] So, let us do an example. So, consider the two vectors. So, this is in R3. So, now, we
[10:05] are talking about R3. So, consider the two vectors 1, 2, 3 and 2, 0, 1 in R3. So, the
[10:10] dot product of these two vectors gives us a scalar as follows. So, 1, 2, 3 dot with
[10:15] 2, 0, 1 is you take component wise multiplication and then you add them. So, 1 times 2 plus
[10:22] 2 times 0 plus 3 times 1, which is 2 plus 0 plus 3, which is 5. So, for two general
[10:28] vectors, you do the same thing x1, y1, z1, x2, y2, z2 you do x1, y1, z1 dot x2, y2, z2
[10:34] is x1x2 plus y1y2 plus z1z2.
[10:36] So, now, let us find the length of the vector, let us say, 4, 3, 3 in R3. So, to do this
[10:47] we will first draw the xyz plane. So, let us say this is x, y and this z. This is our
[10:55] right handed coordinate system. Sorry t his is not y, this is y and that is z. So, now,
[11:04] if you take x, y, z, you drop a perpendicular, so this is 4, 3, 3.
[11:10] So, we will drop a perpendicular down to the xy plane, then join that to the origin, and
[11:22] then drop further perpendiculars from this point to the x-axis and the y-axis, respectively.
[11:31] So, what you really have is that this is a perpendicular, this is exactly z. So, in this
[11:36] case, it is 3. This is 3. And then this is exactly the length of y which is again 3,
[11:45] the y-coordinate. And this is 4 or, because this is parallel to this, which is 4, this
[11:54] is parallel to this, which is 3, and this is parallel to this, which is 3.
[11:59] So, now how do I compute the length? Again, you use Pythagoras theorem. We already know
[12:06] that this line in the middle here, this line you can compute by Pythagoras theorem as square
[12:19] root of 3 square plus 4 square, this is root of 5 square which this 5. And then again,
[12:27] this is the right angle triangle, the green thing, the blue line and the red vector itself.
[12:32] So, the red, blue and green form of right angle triangle and the red is the hypotenuse,
[12:38] which is exactly the length of the vector 4, 3, 3.
[12:42] So, length of 4, 3, 3 is root of 5 square, which is the length of the line circled by
[12:52] the green line, plus 3 square, which is the length of the blue line. But 5 square, I can
[13:04] write as 3 square plus 4 square, which was the original x and y coordinates. So, this
[13:10] is 3 square plus 4 square plus 3 square or maybe we should write it as 4 square plus
[13:17] 3 square to keep with the notation, and then you can compute what that is, in this case,
[13:21] it gives you root 34 units, so 16 plus 9 plus 9.
[13:28] So, observe again that 4, 3, 3 dot 4, 3, 3 is exactly 4 square plus 3 square plus 3 square.
[13:35] So, the length of 4, 3, 3 can be expressed as the square root of the dot product of the
[13:40] vector with itself. This is the same computation. And so the general situation is where you
[13:48] do x, y, z and the same reasoning tells you that the length of x, y, z is square root
[13:53] of the dot product of x, y, z with itself. So, we, so this tells you the relationship
[14:00] between the dot product and lengths in, so we have seen the same relation in R2, we have
[14:05] seen this in R3 and certainly the idea is that this holds for any Rn, the proof is the
[14:11] same.
[14:12] Let us now ask for what happens to the angle. So, the angle between two vectors u and v
[14:18] in R3 is the angle between them computed by passing a plane through them. So, if you have
[14:23] two vectors u and v, you look at, there is a unique plane passing through those two vectors.
[14:28] Draw that plane. And now once you are in the plane, it is like you are in R2. And in R2
[14:33] we know how to compute the angle between two vectors.
[14:37] And it, so what does this angle do? It measures the direction, how far the direction is of
[14:43] v from u or u from v on that plane.OK So, we have seen this formula before in R2 and
[14:54] the same idea holds for R3. So, if u and v are two vectors in R3, we can compute the
[15:01] angle theta between these vectors by using the dot product as follows. So, cosine of
[15:07] theta is u dot v divided by square root of v dot v times u dot u or you can write thetha
[15:16] in terms of the inverse cosine of this number that we have just seen.
[15:20] So, let us maybe try to analyze why this is happening. So, the reason this is happening
[15:29] is because, so if you have two vectors, so you pass some plane through them, I mean,
[15:42] there is a unique plane. So, you take this plane. And now on this plane, these vectors
[15:50] are like two ordinary vectors in R2. So, if you want instead of looking at this plane
[15:56] you move this plane, rotate it, so that it becomes like the xy plane. And don't disturb
[16:07] those vectors. When you just do a rotation don't do any scaling or anything else, just
[16:12] do a rotation.
[16:13] So, then these vectors are going to look like, on the xy plane they will maybe look like
[16:19] this. And you can compute the angle between them. And that is exactly what this angle
[16:23] is. And you can see that this will match with the formula that you have written down. That
[16:29] is the idea.
[16:31] So, let us compute the angle theta between these two vectors, 1, 0, 0 and 1, 0, 1. If
[16:36] our intuition is correct, we kind of know what the angle here is. Both of these are
[16:41] on the plane, the xz plane, y is 0, so xz plane. So, these are on the xz plane. And
[16:49] on the xz plane, so you just knock out the y coordinate, so on the xz plane, this is
[16:55] like 1, 0 and 1, 1. So, it is 1, 0 and 1, 1. So, if you think of the xz plane now as
[17:05] the xy plane this is 1, 0 and 1, 1 and we know how much the angle is. This angle is
[17:11] exactly 45 degrees or pi by 4 radians, whichever you prefer.
[17:18] So, let us see if the answer that we get by doing that computation is the same 1, 0, 0
[17:25] dot 1, 0, 1 is 1, 1, 0, 1 dot 1, 0, 1 is 2, 1, 0, 0 dot 1, 0, 0 is 1. And so, we get theta
[17:36] is cosine inverse of 1 by root of 2 times 1, which is root 2, which is as we know, is
[17:45] pi by 4 radians or 45 degrees. So, this last thing is something we are getting from a cosine
[17:50] table. You can look those up.
[17:53] So, let us look at this second example, the angle between 1, 0, 0 and 1, 1, 1. So, for
[18:03] 1, 0, 0 and 1, 1, 1, let us compute these numbers, 1, 0, 0 dot 1, 1, 1 is 1, 1, 1, 1
[18:13] dot 1, 1, 1 is 3, which is what is giving that root 3 and 1, 0, 0 dot 1, 0, 0 is 1.
[18:23] So, we get cosine inverse theta, which is the angle between the two is cosine inverse
[18:28] of 1 by square root of 1 times 3, which is cosine inverse of 1 by root 3 and you can
[18:38] look up a table to get what the exact value is. It is something like 54 degrees, if I
[18:45] remember right.
[18:47] OK and now we can do the general idea of, make the general definition that is, if you
[18:53] have two vectors, u and v in Rn, the dot product is defined as component wise multiplication
[19:00] and then addition, so u1v1 plus u2v2 plus unvn. The length of the vector is, it is denoted
[19:06] by this two bars. So, it is called a norm, which we are going to study in the next video.
[19:15] So, it is given by root of u dot product with itself. And the angle between two vectors,
[19:24] again, you pass a plane through those two vectors, there is a unique plane passing,
[19:29] and you can then rotate it so that it becomes parallel, it becomes the xy plane and then
[19:38] you can measure, and it turns out that this is exactly the same as doing cosine theta
[19:43] is u dot v divided by norm of u times norm of v, which, in other words, is square root
[19:50] of v dot v times square root of u dot u. And then you can write it in terms of the inverse.
[19:57] So, we we actually have seen a little bit this before lengths and angles in our video
[20:02] on vectors. But this is a reminder and it also is a reminder about what are dot products
[20:10] and how they help in computing the lengths and angles between vectors. Thank you.