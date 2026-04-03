# W3_L3: Linear dependence

**Week:** Week 3
**YouTube URL:** https://www.youtube.com/watch?v=1Krnnc6wKyk

---

## Transcript

[00:14] Hello, and welcome to the Maths 2 component of the online B.Sc. program on data science.
[00:21] Today's video is about linear dependence.
[00:25] So, we have seen in the previous video what is the vector space, and in this video we
[00:30] are going to study the notion of linear dependence of vectors.
[00:34] So, first of all, let us recall what is vector addition.
[00:39] So, vector addition is a binary operation plus from V cross V to V.
[00:45] So, what that means is we take two vectors, v and w, and we can talk about the vector
[00:51] v plus w.
[00:53] So, in Rn we know that addition is defined coordinate wise.
[01:00] So, x1, x2, xn plus y1, y2, yn is x1 plus y1, x2 plus y2 and so on up till xn plus yn.
[01:07] So, just as an example, if you are 1.5 comma minus 3.3 comma 7.2 comma half comma 1 plus
[01:15] minus 4 comma 5.8 comma 10 comma 5 halves comma minus 3.4, we have to add them coordinate
[01:22] wise.
[01:23] So, the first coordinate will be 1.5 minus 4 that gives you minus 2.5.
[01:27] The second coordinate will be minus 3.3 plus 5.8 that gives me 2.5.
[01:32] And I will leave you to check the rest.
[01:37] We also have something called scalar multiplication in vector spaces, which means you, it is a
[01:45] function from R cross V to V.
[01:47] So, what that means is you take a scalar or a real number c and a vector v and then we
[01:54] can associate to that a new vector c dot v. And so, remember this dot is corresponding
[02:04] to scalar multiplication.
[02:08] And it is standard to drop this dot, which is what we did in our previous video.
[02:13] So, we are going to just use c times v, cv and not c dot v.
[02:20] And in Rn, scalar multiplication is coordinate wise again.
[02:24] So, c times x1, x2, xn is c times x1, c times x2, c times xn.
[02:30] So, here is an example.
[02:32] If you do 0.5 times the vector 1.5 comma minus 3.3 comma 7.2 comma half comma 1, that gives
[02:40] me 0.75 comma minus 1.65 comma 3.6 comma one-fourth comma 0.55.
[02:50] So, let us now look at what is the linear combination of vectors.
[02:55] So, this is a key, I mean, this is a key definition which is going to drive this video and several
[03:04] subsequent videos.
[03:05] So, let us pay careful attention to this.
[03:09] So, let V be a vector space and suppose we have a bunch of vectors v1, v2, vn.
[03:15] So, the linear combination of v1, v2, vn with coefficients a1, a2, an, so these are real
[03:23] numbers, is the vector summation aivi.
[03:27] What does this mean?
[03:29] This means you take vi, you take the ith vector vi, you do scalar multiplication of ai and
[03:35] vi and that is a new vector.
[03:39] So, accordingly, we have n new vectors, a1v1, a2v2, a3v3, anvn and then you add them up.
[03:48] And remember, since our axioms tell us that, it does not matter which two we add first
[03:54] what is called associativity of addition, you can just write it as a1v1 plus a2v2 plus
[04:03] a3v3 up to anvn.
[04:04] I do not need to specify which one I do first.
[04:09] So, that is what we write as summation aivi.
[04:13] So, this is a new vector.
[04:17] And this new vector summation aivi is called the linear combination of v1, v2, vn with
[04:23] coefficients a1, a2, an.
[04:26] So, a vector v is a linear combination of v1, v2, vn if there are some scalars a1, a2,
[04:32] an so that v is expressed as summation aivi.
[04:35] So, let us do a couple of examples.
[04:39] So, we are going to look at the geometry first and then we are going to look at the algebra.
[04:46] So, the example here is 2 times 1 comma 2 plus 2 comma 1 is 4 comma 5.
[04:52] So, what is 1 comma 2?
[04:55] So, 1 comma 2 is over here.
[04:58] What is 2 comma 1?
[05:00] 2 comma 1 is over here.
[05:03] And then you take 2 times 1 comma 2, you scale 1 comma 2 by 2.
[05:08] So, the new vector you get after scaling is this thing here which is 2 comma 4.
[05:17] So, you have 2 comma 4 plus 2 comma 1, use the parallelogram law, and you get 4 comma
[05:25] 5.
[05:26] So, of course, you can do this algebraically.
[05:30] But that is not the point.
[05:32] The point we want to make here is that we have expressed 4 comma 5 as a linear combination
[05:38] of 1 comma 2 and 2 comma 1.
[05:41] And what is the linear combination?
[05:42] It is with the scalars 2 and 1.
[05:44] So, 2 times 1 comma 2 plus 1 times 2 comma 1.
[05:47] So, if there is a 1 time something, we suppress it.
[05:50] So, 2 times 1 comma 2 plus 2 comma 1 is 4 comma 5 and the working out is clear.
[06:00] And we can say more.
[06:02] Each of the vectors in the expression is a linear combination of the other two vectors.
[06:06] So, what are the three vectors we are talking about?
[06:09] We are talking about 1 comma 2, 2 comma 1 and 4 comma 5.
[06:12] We have expressed 4 comma 5 as a linear combination of 2 comma 1 and 1 comma 2.
[06:17] So, instead, we could express 1 comma 2 as a linear combination of 4 comma 5 and 2 comma
[06:23] 1.
[06:24] This is clear, because you can take 2 comma 1 on the other side, and you can divide by
[06:29] half.
[06:30] That is what we have got here.
[06:32] So, the coefficients here are half and minus half.
[06:36] And similarly, you can express 2 comma 1 as a linear combination of 4 comma 5 and 1 comma
[06:44] 2.
[06:45] So, that is, to do that you take 1 comma 2 on the other side, and then you exactly get
[06:50] the second expression written here.
[06:53] So, we can do other things.
[06:55] So, this is all some manipulation of expressions.
[06:58] But this manipulation is important, because it is going to lead us to our definition.
[07:02] So, you can rewrite this expression as 2 times 1 comma 2 plus 1 plus 2 comma 1, minus 4 comma
[07:11] 5 is 0 comma 0.
[07:12] So, we have taken that first expression on the top and moved 4 comma 5 to the left by
[07:18] subtracting it out.
[07:21] And so what we get is on the right hand side, we get the vector 0.
[07:28] So, we have a linear combination of these three vectors by some scalars and these are
[07:38] non-zero scalars.
[07:40] So, the coefficients here are nonzero.
[07:42] What are the coefficients, 2, 1 and minus 1.
[07:47] And with these coefficients, 0 is a linear combination of these three vectors, 1 comma
[07:54] 2, 2 comma 1 and 4 comma 5.
[07:58] So, I will ask you to remember that that picture in the previous slide along with this observation.
[08:06] Let us do one more.
[08:07] So, here we have 3 times 2 comma 1 plus 2 times minus 2 comma 3 is 2 comma 9.
[08:14] So, what is 2 comma 1, here is 2 comma 1.
[08:23] And what is minus 2 comma 3, here is minus 2 comma 3.
[08:28] So, if we scale these, so 3 times 2 comma 1 is exactly this large thing we get here,
[08:37] which is 6 comma 3.
[08:39] And 2 times minus 2 comma 3 is this larger vector we get here which is minus 4 comma
[08:50] 6.
[08:51] And then when we add them, we use a parallelogram law and we get the vector 2 comma 9.
[08:59] So, what have we done?
[09:02] We have expressed 2 comma 9 as a linear combination of the vectors 2 comma 1, and minus 2 comma
[09:09] 3, the algebra is what we just did and the expression is written here.
[09:15] So, now, again, we can take these three vectors 2 comma 1 minus 2 comma 3 and 2 comma 9 and
[09:21] we can write any one of these as a linear combination of the other two.
[09:25] So, already, you have written 2 comma 9 as a linear combination of the first two.
[09:28] Now, here is how we write 2 comma 1 as a linear combination of minus 2 comma 3 and 2 comma
[09:34] 9.
[09:35] Namely, we can take minus 2 comma 3 on the other side and then we can divide by 3, and
[09:41] that is the expression we get here or we could write minus 2 comma 3 as a linear combination
[09:47] of 2 comma 9 and 2 comma 1.
[09:49] How do we do that?
[09:50] We take 2 comma 1 on the other side and then we divide by half and indeed that is the expression
[09:57] we get.
[09:59] So, this is similar to what happened before.
[10:02] And once again, instead of writing it this way, there is a third way we can write this
[10:07] expression namely by taking 2 comma 9 on the other side and that gives us 0, the zero vector
[10:12] on the right.
[10:14] So, that is 3 times 2 comma 1 plus 2 times minus 2 comma 3 minus 2 comma 9 is 0 comma
[10:22] 0.
[10:23] Again, what do we observe?
[10:24] The 0 vector is a linear combination of 2 comma 1 minus 2 comma 3 and 2 comma 9 with
[10:31] non-zero coefficients.
[10:32] So, this is the important part.
[10:35] What are the coefficients here?
[10:37] The coefficients are 3, 2 and minus 1.
[10:42] So, I should point out I am emphasizing these non-zero coefficients.
[10:48] What happens if your coefficients are 0 if you take a linear combination of any vectors
[10:52] v1, v2, vn with 0 efficient that is always going to give you 0, because the linear combination
[10:57] will be 0 times v1 plus 0 times v2 plus 0 times vn which of course is the 0 vector.
[11:06] So, the point is, here you can do it with non-zero coefficients.
[11:11] So, you can always do it with 0 coefficients, but it is not clear you can do it with non-zero
[11:17] coefficients.
[11:18] And if you can, then there is something special happening.
[11:21] So, remember, all these three vectors were on the same plane.
[11:24] This is the key point.
[11:27] Let us do an example in R3.
[11:28] So, in R3 let us take these three, these two vectors.
[11:37] So, we have 2 comma 2 comma 0.
[11:41] So, this is a vector 2 comma 2 comma 0 right here.
[11:47] So, this plane has been draw, I mean, this x, y, z axis has been drawn a bit differently
[11:55] than we usually draw it for the purpose of illustration.
[11:58] So, this is the XY plane.
[12:01] So, on this we have the vector 2 comma 2 comma 0.
[12:08] On the left side, this is the YZ plane, on this we have the vector 0 comma 2 comma 1.
[12:17] And then we scale these.
[12:19] So, if you scale this, you get the vector 0 comma 4 comma 2.
[12:27] Here, we get the vector 3 comma 3 comma 0.
[12:35] And you use a parallelogram and you add them and what you get is 3 comma 7 comma 2.
[12:43] So, you can check that this is the, by projecting down to the exact plane what we get and by
[12:49] projecting to the y-axis and so on that is what these other dashed lines are indicating.
[12:57] So, what does this mean in terms of linear combinations?
[13:00] So, in terms of linear combinations what we have seen is in R3 the vector 3, 7, 2 is a
[13:07] linear combination of the vectors 0, 2, 1 and 2, 2, 0, and the coefficients were 2 and
[13:15] 3 halves.
[13:17] So, that is the expression.
[13:19] We just did that.
[13:20] So, we can again play the same game.
[13:22] So, instead of writing 3, 7, 2 as a linear combination of these two, we could instead
[13:27] write, let us say, 0, 2, 1 as a linear combination of the other two, 3, 7, 2 and 2, 2, 0.
[13:32] How do we do this?
[13:34] Move the other term 1 to the right side and then divide by the corresponding coefficient
[13:39] or you could write 2, 2, 0 as a linear combination of 3, 7, 2 and 0, 2, 1 again same idea.
[13:45] So, I will suggest you check this.
[13:50] And then again I can do the same thing that I have done before.
[13:54] Namely, I can move the 3, 7, 2 in the original expression to the left hand side and get 0,
[14:00] 0, 0 on the right hand side.
[14:02] So, what is the net result that the zero vector is a linear combination of 0, 2, 1, 2, 2,
[14:10] 0 and 3, 7, 2 with non-zero coefficients.
[14:13] And again, I will encourage you to check that these three vectors lie on the same plane.
[14:22] So, we can in fact get the equation of that plane.
[14:28] So, the equation of the plane containing the two vectors 0, 2, 1 and 2, 2, 0 is 2x minus
[14:34] 2y plus 4z is 0.
[14:37] And you can check that the third equation, the third point, indeed lies on this plane.
[14:45] So, these three lie on the same plane.
[14:48] And that is, so the geometry is somehow converting to this observation that if you take these
[14:55] three vectors, you can write 0 as a linear combination in a non trivial way, meaning
[15:02] with non-zero violations.
[15:03] So, suppose we choose now a point or a vector which is not on the plane, say 1, 2, 0, so
[15:09] 1, 2, 0 is not on the plane.
[15:10] How do I check 1, 2, 0 is not on the plane, I plug in these values into the equation of
[15:16] the plane and get that it is not 0.
[15:19] So, 2 times 1 minus 2 times 2 plus 4 times 0 is not equal to 0.
[15:24] So, that is why it is not on the plane.
[15:27] So, we claim then that 1, 2, 0 cannot be written as a linear combination of 0, 2, 1 and 2,
[15:34] 2, 0.
[15:35] So, we saw earlier that, the earlier example that the third vector indeed was on the plane.
[15:42] So, maybe we can go back and check what that was.
[15:45] So, it was 3, 2, 7 and 3, 7, 2 does satisfy this equation, because 2 times 3 is 6, plus
[15:53] 4 times 2 is 8.
[15:55] So, 6 plus 8 is 14, minus 2 times 7 is 0.
[16:00] So, let us look at 1, 2, 0.
[16:03] We saw already it is not, it does not satisfy that equation.
[16:06] So, it is not on the plane.
[16:07] And now the claim is it cannot be written as a linear combination of 0, 2, 1 and 2,
[16:12] 2, 0.
[16:13] So, let us do this by contradiction.
[16:15] Suppose you can write this as a linear combination, so you have a times 0, 2, 1 plus b times 2,
[16:20] 2, 0 is 1, 2, 0.
[16:21] So, a and b are the coefficients.
[16:25] Then we can work out what are the expressions in each coordinate.
[16:32] So, the expressions in the first coordinate is just 2b, the expression in the second coordinate
[16:37] is 2 times a plus 2 times b and the expression in the third coordinate is just a and we equate
[16:46] it to the right hand side.
[16:47] So, if we do that, then we get 2b is 1, 2a plus 2b is 2 and a is 0.
[16:53] That means b is half and a is 0.
[16:54] That is what we get from the first and third equations.
[16:58] And if that happens, then 2a plus 2b cannot be 2.
[17:02] So, that means there is no a and b which satisfies this which satisfies this equation.
[17:09] So, our assumption that there is an a and b is wrong.
[17:13] So, there is no such a and b.
[17:16] So, what does that imply?
[17:17] That implies that this vector 1, 2, 0 cannot be written as a linear combination of 0, 2,
[17:23] 1 and 2, 2, 0.
[17:26] And we can equally well conclude from here and I will suggest that you check this that
[17:34] if you do a times 0, 2, 1 plus b times 2, 2, 0 plus c times 1, 2, 0 is equal to 0, 0,
[17:42] 0.
[17:43] Suppose I asked, can I get a, b and c such that it is 0, 0, 0, so what the above discussion
[17:52] tells us is that the only possible choices for a, b, c are 0, 0 and 0, meaning all three
[18:00] of a, b and c must be 0.
[18:02] So, what does this mean?
[18:05] So, this is now the other, well, the negation of the observation we did earlier.
[18:16] So, the only way the zero vector is a linear combination of these three vectors is if the
[18:22] coefficients are 0.
[18:23] So, in the previous examples, where those vectors were on the same plane, we could write
[18:30] 0 as a linear combination of those three vectors with non-zero coefficients.
[18:36] But here, there is no way of doing that.
[18:40] The only way of writing 0 is if your coefficients are 0 and that is a trivial here, because
[18:46] if the coefficient are 0 we certainly have, we get the 0 vector.
[18:50] So, now we can define linear dependence.
[18:53] Keep this geometry picture in mind and keep the algebraic expressions in mind.
[18:58] A set of vectors v1, v2, vn from a vector space V is said to be linearly dependent,
[19:03] if there exists scalars a1, a2, an not all 0 such that a1 times v1 plus a2 times v2 plus
[19:11] an times vn is 0.
[19:13] So, the key point here is that these a1, a2, an are not all 0.
[19:17] So, there is a way of writing 0 as a linear combination where the coefficients are not
[19:24] 0.
[19:25] At least some of them are not 0.
[19:27] So, the equivalent way of saying this is that the zero vector is a linear combination of
[19:34] v1, v2, vn with non-zero coefficients.
[19:37] Meaning, when I say with non-zero coefficients that means some of the coefficients are not
[19:43] 0.
[19:44] It is not, we do not need to say that all coefficients are non-zero, some non-zero coefficients.
[19:51] Fine.
[19:53] So, just to jog our memory, the first two, the first three examples we did, the two examples
[20:02] in R2 and the third one in R3, the three vectors we had were linearly dependent.
[20:09] That is what we saw, because we could write 0 as a linear combination of these three vectors
[20:15] where the coefficients were non-zero, meaning not all of them were 0.
[20:23] The fourth example meaning, where we had the vector 1, 2, 0 that example, the three vectors
[20:30] in question, are not linearly dependent.
[20:33] So, next video, we will see that they are what are called linearly independent.
[20:41] So, consider the vectors 2, 3, 7 and five-third, five halves and 35 by 6 in R3.
[20:48] So, you can check that if you multiply this second vector by 6 and you multiply the first
[20:58] vector by 5, then you get the same you get the same vector.
[21:06] So, in other words, if you do 5 times 2 comma 3 comma 7 minus 6 times five-third comma five
[21:13] halves comma 35 by 6, that is 0, 0, 0.
[21:17] So, at least one of these coefficients is non-zero.
[21:20] In fact, in this case, both of them are non-zero.
[21:23] And so these two vectors are linearly dependent.
[21:29] These two vectors 2, 3, 7, and five-third, five halves, 35 by 6 are linearly dependent.
[21:35] And note that the way this worked is that they are scalars, I mean, they are scalar
[21:44] multiples of one another.
[21:46] If you draw five-thirds, five halves, 35 by 6, and if you draw 2 comma 3 comma 7, they
[21:52] will appear on the same line.
[21:57] That is clear, because you scale one of them by 6 and the other by 5.
[22:01] They give you the same vector.
[22:03] So, in other words, when you have two vectors, what we are saying is if two vectors are linearly
[22:08] dependent, then essentially one is a multiple of the other.
[22:14] So, let us continue and study one more example.
[22:18] So, consider the following three vectors in R3, 2, 1, 2, 3, 0, 1 and 10, minus 4 minus
[22:25] 2.
[22:26] So, here is an equation that we can check easily, 2 times 2, 1, 2 minus 3 times 3, 0,
[22:32] 1 plus half times 10, minus 4, minus 2 is the 0 vector.
[22:37] So, from here it follows that these three vectors are linearly dependent.
[22:41] Let us do this checking just to be sure.
[22:45] So, the checking here is 4 comma 2 comma 4, minus 9 comma 0 comma 3, plus 5 comma minus
[23:00] 2 comma minus 1.
[23:03] Well, the first component is 4 minus 9 plus 5 that is indeed 0.
[23:10] The second component is 2 minus 0, minus 2, which is 0.
[23:16] And then the third component is 4 minus 3 minus 1, which is indeed 0.
[23:20] So, this is indeed, this equation is indeed correct.
[23:25] And this tells us that there is a linear equation satisfied by these three vectors with non-zero
[23:37] coefficients which equates to 0.
[23:39] So, they are linearly dependent.
[23:42] Let us continue and append a vector to this set.
[23:45] So, the set is now 2, 1, 2, 3, 0, 1, 10, minus 4 minus 2, and 2, 3, 7.
[23:52] So, we have appended one more vector to this set.
[23:56] And we can ask, is this set now linearly dependent?
[23:59] Is this a set of linearly dependent vectors?
[24:03] And the answer is, well, certainly it is.
[24:06] Because since the original set, meaning the set with three of them was linearly dependent,
[24:11] we can write down the same equation, but we also have to include the new vector 2, 3,
[24:16] 7.
[24:17] So, what do we do, we put the 0 coefficient for that.
[24:19] And we of course, still get 0, 0, 0.
[24:23] So, you can, if you are not convinced, you can do this checking by yourself.
[24:29] And from here it is clear that this set is linearly dependent.
[24:33] So, what is the point?
[24:36] The point is this we get the following fact.
[24:41] I mean, this is by observation, but you can clearly see because the proof is the same.
[24:47] If a set is linearly, if a set of vectors is linearly dependent, then so is every superset
[24:52] of that set.
[24:55] So, v1, v2, vn is linearly dependent, then v1, v2, vn and you add one more vector w,
[25:01] then v1, v2, vn comma w is also linearly dependent.
[25:05] You can add as many vectors as you want.
[25:07] They are all linearly dependent.
[25:09] So, I guess that finishes what, the material in this video.
[25:14] Let us quickly recall that we have seen in this video that when a set of vectors in a
[25:21] vector space is linearly dependent, and importantly, the, in the case of R2 or R3 what this means
[25:31] is that if you have two vectors are linearly dependent, they must be on the same line.
[25:38] If you have three vectors are linearly dependent, they must be on the same plane.
[25:42] This is the geometry of what is going on.
[25:46] And finally, to check these things, we have to solve some equations.
[25:51] So, finally, this kind of checking is also related to solving systems of linear equations.
[25:58] So, thank you.