# W11_L3: The hessian matrix & local extrema for f(x,y,z)

**Week:** Week 11
**YouTube URL:** https://www.youtube.com/watch?v=QOqj5I8q_eU

---

## Transcript

[00:14] Hello, and welcome to the Maths 2 component of the online BSc program on data science
[00:18] and programming. This video is about the Hessian matrix and local extrema for f x y z. In the
[00:25] previous video we have seen the Hessian test to classify critical points for the function
[00:30] f x y. In this video, we will see the same or an analogous test for f x y z.
[00:39] So, as you can see that as your number of variables increases, the test sort of becomes
[00:46] a bit harder, which is why we have these separate videos. Now, one can make sense of all this
[00:53] in terms of linear algebra for the Hessian matrix for n variables. And in particular,
[01:02] if we allow ourselves the notions of Eigen values, which you will study later in your
[01:07] machine learning course, and also use these ideas of diagonalization and orthogonal, using
[01:17] orthogonal matrices. So, we did this when we did similarity and equivalence of matrices.
[01:21] Using all those ideas, we can formulate a general test for n variables. But in the interest
[01:28] of time, and functionality, as far as this course is concerned, I am not doing this for
[01:35] general variables, although we have developed some of the linear algebra already required
[01:40] for this, but we need a little bit more. So, I am restricting myself to 3 variables. And
[01:45] this will be you enough probably for most of the problems that you will come across.
[01:50] So, let us recall what is the Hessian test for a function of 2 variables. So, if you
[01:56] have a function defined on a domain D in R2, and a is a critical point such that the first
[02:02] and second order partial derivatives are continuous in an open ball around a, then there is something
[02:09] called the Hessian test, which means that you compute the Hessian matrix of the function
[02:16] f and evaluated at the point a, that gives you a 2 by 2 matrix.
[02:21] You compute its determinant and the value of the 11 term. If that determinant is positive,
[02:27] and the 1 1 term is also positive, then the point is a local minimum. If the determinant
[02:33] is positive, and the one-oneth term, meaning the fxx at a tilde is negative, then it is
[02:43] a local maximum. If the determinant is negative, it is a saddle point. And if the determinant
[02:49] is 0, which is called the degenerate case.
[02:52] So, the previous 3 are called the non-degenerate cases, which means that the determinant is
[02:56] non-zero. But in the degenerate case, which is to say the Hessian determinant is 0, this
[03:03] test is inconclusive. So, that is really the bad case. That is the case we want to avoid,
[03:07] because that means that the test does not tell us anything. So, we saw some examples
[03:12] of this test, we also saw that it told us the answer in some surprising cases.
[03:20] Whereas, in some cases where it was obvious what the answer should be, it turned out to
[03:24] be inconclusive. So, the test has a, it comes with, it is a double-edged test, sometimes
[03:31] it will be it will work in situations where you really do not know what is happening.
[03:36] And sometimes it will not work, even though you absolutely know what is happening. So,
[03:40] we will see something similar for the Hessian test in three variables.
[03:45] I am not going to do as many examples here. Because we already know the phenomenon that
[03:50] are taking place, namely that it can work sometimes in spite of the fact that we have
[03:55] no clue of what is happening. And it may not work at all, despite us knowing what is happening.
[04:02] So, let us see what the test is. So, again, this is a function f is a function defined
[04:09] on a domain D in 3 variables. Suppose a is a critical point and the first and second
[04:14] partial derivatives are a continuous in an open ball around a tilde. I will remind you
[04:20] that now there are 9 second order partial derivatives fxx, fxy, fxz, fyx, fyy, fyz and
[04:33] then fzx, fzy, fzz. Of course, thanks to Clairaut's theorem, we know that we can interchange the
[04:44] order.
[04:45] So, fxy and fx yx are the same, fxz and fzx are the same, and fyz and fzy are the same.
[04:56] So, effectively, there are 6 partial derivatives. So, this is a fairly long computation if we
[05:01] want to compute this, and then the Hessian matrix is where we put these second order
[05:06] partial derivatives into a 3 by 3 matrix, remember, it is a 3 by 3 matrix now, because
[05:12] you have 3 variables and then the test tells us that if the following things happen, then
[05:21] we can classify the critical points.
[05:23] So, if the term fxx is positive, the term fxx times fyy minus f squared xy, which was
[05:34] the determinant that we used in the 2 by 2 case if that at a tilde is positive, and if
[05:40] the determinant of the entire Hessian matrix is positive, then a is a local minimum. If
[05:46] on the other hand, the fxx is negative, the second term fxx fyy minus f squared xy at
[05:59] a tilde is positive and the determinant is negative. So, this is alternating sign, then
[06:05] a tilde is a local maximum.
[06:07] If the determinant is non-zero, and neither of cases 1 or 2 occur, then it is a saddle
[06:16] point. So, that means in these two, the first two cases we have local minimum or local maximum,
[06:23] and in all the other non-degenerate cases, meaning where the determinant is non-zero,
[06:32] it is a saddle point. And if the determinant is 0, which means it is a degenerate situation,
[06:40] then the test is inconclusive. So, this is the no Hessian test in the three variables
[06:48] situation.
[06:49] This is getting slightly complicated as you can see, and which is why we, I am not describing
[06:55] this in the general n by n setup. It actually has an easier description, but for that, we
[06:59] need to know what are Eigen values.
[07:02] So, let us understand these terms better. So, the terms involved in the test are fxx,
[07:08] fxx fyy minus f squared x, y at a tilde and determinant of this matrix at a tilde. So,
[07:15] what are these terms? Let us write down the matrix. So, here is the matrix fxx fxy, fxz,
[07:28] so I am not really caring now about the order whether it is fxy or fyx because of Clairaut's
[07:36] theorem, fyy, fyz and then fxz, fyz and then fzz and let me draw this like this. So, this
[07:56] is our hessian matrix. So, the Hessian matrix and maybe let us do this at a tilde so in
[08:04] that case, I would evaluate all these at a tilde.
[08:09] So, once I evaluate, these are numbers, these are all numbers. And what do these terms correspond.
[08:19] So, fxx at a tilde corresponds to this term there, so it is the one-oneth term or the
[08:27] 1 by 1 matrix in the top left corner. This second term. So, the second term here, this
[08:37] term so, this term corresponds to the determinant of the 2 by 2 matrix in the top left corner.
[08:49] And the third term which is the determinant of Hf of a tilde corresponds to the determinant
[08:58] of the entire matrix.
[09:01] So, what we are doing is, we are taking the determinants of the top left corner successively
[09:08] larger. So, the 1 by 1, 2 by 2, 3 by 3 and in fact, we can generalize this to n by n,
[09:13] only thing is those signs, we have to be careful of how they work. And what we are saying is
[09:20] that if that top left corner, if the sign is like this, if it is plus plus and plus,
[09:29] so which means that this is the 1 by 1, 2 by 2, 3 by 3. If it is plus plus and plus,
[09:36] that means they are greater than 0, greater than 0 and greater than 0, then this is a
[09:40] local minimum.
[09:41] If it is a minus plus and a minus note, the alternating thing, this is very, very important.
[09:49] This is where students often make mistakes. If it is a minus plus and a minus, it is a
[09:54] local maximum and in all the other cases other cases, where this is not 0, where determinant
[10:04] is not 0, all other non-degenerate cases by which we mean that the determinant is not
[10:19] zero, this is a saddle point. And if it is the de degenerate case, which means determinant
[10:33] is 0. This, we cannot really say this is the really bad, bad part. So, this is what it
[10:51] seems.
[10:52] So, what you have to keep track of is you have to compute 3 successive determinants,
[10:55] the first one is a 1 by 1 determinant. So, that really there is nothing to say. The second
[11:00] one is a 2 by 2 determinant. And the third one is a 3 by 3 determinant. So, in practice,
[11:04] you do it the other way. Because you want to check that the determinant of the entire
[11:11] matrix first is non-zero, if the determinant of the entire matrix is 0, then you stop the
[11:15] test right there.
[11:16] So, what you do is you your testing should start in the opposite direction. So, you do
[11:22] your testing in this direction. First, you test this, then you test this, and then you
[11:27] test this right. So, first, you test the entire matrix, what is the determinant, whether it
[11:31] is positive or negative, or 0. If it is 0, end of story. If it is positive or negative,
[11:40] then you test for the 2 by 2, if the 2 by 2 by chance happens to be negative, stop right
[11:46] there. Because as you can see, here, you want it to be positive, so then it is a saddle
[11:51] point. If it is positive, then you check for the 1 by 1 that is the way to go.
[11:58] So, let us do a couple of examples. So, these are again, sort of our test examples to remember
[12:05] how the rules work. So, the functions are also very familiar here. So, let us first
[12:11] do x square plus y square plus z square. Clearly this is a non-negative function, and the only
[12:16] place it 0 is the point 0,0,0. So, this is, so 0,0,0 is a local minimum. And in particular,
[12:23] in fact, it is a global minimum, and in particular, it is a local minimum.
[12:28] So hopefully, the Hessian test will tell us that so gradient is 2x, 2y 2z. Hessian is,
[12:37] well, you can compute this, now I am doing this rather fast 200, 020 and 002. Let us
[12:43] compute the various things that we have to compute. So, at 0,0, so the critical point
[12:48] is 0,0,0. And so, the Hessian at 0,0,0 is the same thing. And so, we should compute
[12:59] the determinant of all the top left matrices of decreasing sides.
[13:06] So, the determinant of the entire thing is 8, which is positive, actually, you can see
[13:15] all of them are going to be positive, but I just determinant of the second one is that
[13:21] 0,sorry 20, 02. That is 4, positive. So, which, which matrix are we looking at? It is this
[13:30] matrix here. And then determinant of the first, meaning the entry in the 1-1, one-oneth place,
[13:37] that is this entry here, so that entry is positive. So, fxx at 0,0,0. So therefore,
[13:53] this is a local 0,0,0 is a local minimum. And that is exactly what we had in our case
[14:02] 1. So, this is how you can remember case 1.
[14:07] Similarly, if you take minus x squared minus y squared minus z squared by the same argument,
[14:12] it is always a non-positive function, the only place it 0 is the point 0,0,0. It is
[14:16] a global maximum. And so hopefully, the Hessian test picks that out. So, I am going to sort
[14:24] of do this really fast, gradient is minus 2x minus 2y minus 2z, the Hessian matrix now
[14:32] you can write down is minus 2 0 0, 0 minus 2 0, 0 0 minus 2, critical point is clearly
[14:39] 0000. So, this is the Hessian also at that critical point.
[14:49] And now let us see what the signs are. So, the determinant is of the entire matrix is
[15:00] minus 2 times minus 2 times minus 2, it is a diagonal matrix, this is negative. So, we
[15:06] have a minus sign, the determinant of the 2 by 2, that minus 2 0, 0 minus 2, that is
[15:12] minus 2 times minus 2, it is 4, it is positive. And then the one-oneth entry is minus 2, which
[15:24] is negative. So, the signs here are, this is the important part, what are the signs,
[15:29] the signs are minus plus, minus, and that tells us this is a
[15:39] local maximum. And indeed, this is what we already know and so this is how you can keep
[15:45] this in mind.
[15:46] Similarly, if you take x squared minus y squared plus z squared, you will get it is a saddle
[15:49] point. So, I will just write down the Hessian and you can do the checking. So, the Hessian
[15:54] is going to be 2 0 0, 0 minus 2 0; 0 0 2. So, the signs you are going to get are determinant
[16:06] of the entire so the critical point is 0,0,0 and the signs you are going to get are so
[16:12] minus 8, 2 by 2 is 2 0; 0 minus 2, which is minus 4 and already you can stop right here,
[16:28] because Hessian is non, the Hessian determinant is non-zero and the signs are not corresponding
[16:34] to either alternating or plus plus plus.
[16:37] So, you can stop right here, but just to finish it at 000 this is for 2 which is positive.
[16:45] So, this is a saddle point. Indeed, we already know this, because of, well, you can check
[16:53] that along certain axis it is a local maximum, along certain axes it is a local minimum.
[17:03] And finally, if you take x to the power 4 plus y to the power 4 plus z to the power
[17:08] 4 what happens the gradient is 4x cube 4y cube 4z cube, critical point is clearly 0,0,0.
[17:18] By equating this to 0, and the Hessian you can compute from here is 12x squared 0 0,
[17:29] 0 12 y squared, 0, and 0 0 12 z squared. And what happens at the point, so at the point
[17:38] 0,0,0, this is the 0 matrix. And as a result, it is the degenerate case, we cannot say anything.
[17:48] So, this is inconclusive, as far as the Hessian test is concerned.
[17:53] On the other hand, we already know that x to the power 4 plus y to the power 4 plus
[17:58] z to the power 4 is always non negative, it is a fourth power, they will always be non-negative.
[18:04] And the only point where it takes the value 0 is the 0,0,0. So, this is in fact a global
[18:08] minimum. So, in particular, a local minimum. So, in spite of the fact that we easily know
[18:14] that this is a global minimum, the test is inconclusive. So, these are the 4 prototype
[18:20] examples you should keep in mind to, in case you forget the tests. So, this will tell you.
[18:26] Let us do a couple of examples of, of computing this. So, here is f x, y z is xy plus yz plus
[18:36] zx. So, gradient f, we have actually computed the gradient and the Hessian, so the gradient
[18:42] here is y plus z, z plus x, x plus y. So, you equate this to 0. So, then we get these
[18:55] 3 equations y plus z is 0, z plus x is 0, x plus y is 0. So, that tells us that x is
[19:04] minus y, and are also tells us that x is z, that is what we get from equation 1 and 3,
[19:13] but equation 2 tells us that x is minus z.
[19:15] So, the only way this can happen is if x is equal y is equal to z is equal to 0 is equal
[19:20] to 0. So, the only solutions are x is equal y is equal to z is equal to 0. So, the critical
[19:26] point is 000. And what happens to the Hessian matrix? So, what is the Hessian, so if we
[19:37] write down the Hessian, which we have actually done before, we get 0 1 1, 1 0 1 and 1 1 0.
[19:46] So, this is in particular, the Hessian at 000. And what happens? So, let us do our test.
[19:58] So first, what is the determinant of the hessian matrix? So, this is, so if we do our determinants,
[20:08] this is 0 times determinant of the 1 by 1, 1 minor, minus 1 times determinant of 1 1,
[20:30] 1 0 plus 1 times determinant of 1 0, 1 1. So, if we compute this, this is 1 plus 1,
[20:45] which is 2, so this is positive. So, at least it is non-zero. So, we are in business, this
[20:51] test is going to be conclusive.
[20:53] So, now we take the 2 by 2 left, top left matrix calculated determinant 0 1, 1 0. This
[21:02] is minus 1 negative. And, well as soon as we know it is negative, this does not correspond
[21:10] to case 1 or case 2. So, this means it is a saddle point. So therefore, 0,0,0 is a saddle
[21:17] point. And I will encourage you to check why it is a saddle point. So, find a sequence
[21:23] of points which go to 0,0,0 for which 0,0,0 on that curve, it is it is a minimum value,
[21:34] and find some other curve on which it is a maximum 0,0,0 is a point of maximum. So, I
[21:43] hope it is clear how we are using this test.
[21:48] So, let us do this final example, for x to the power 4 plus y to the power 4 plus z to
[21:55] the power 4 plus xyz. I want to do this example just to show you that sometimes these calculations
[22:00] do become rather difficult, doable, but difficult. So, what is the gradient, so the gradient
[22:08] is 4x cube, plus yz 4y cube plus xz 4z cube plus xy. Let us set this to 0. So, equating
[22:22] to 0 and we have to really work this out, we get, so we have 3 equations. 4x cube plus
[22:38] yz is 4y cube plus xz is 4z cube plus xy is 0.
[22:45] So, now we have to solve these 3 equations. And note that these are not linear equations.
[22:54] So, our linear algebra would not really help us over here. So, we have to solve sort of
[22:58] see this and solve this by brute force. And also using the fact that, they have a very
[23:06] nice form. So here, here is where your comfort with, with equations or algebra in general
[23:15] will kick in.
[23:16] So, case 1 is, there is one solution staring us in the face, namely, where x is equal to
[23:21] y is equal to z is equal to 0. And, it is very important to note that, once one of them
[23:29] is 0, all the others are 0. For example, if x is 0, then you can put that into the equation
[23:36] 4y cube plus xz is 0 and that will give you that 4y cube is 0 and that will say that y
[23:40] is 0. And you can put it in the into the equation 4z cube plus xy is 0 and that will say that
[23:46] z is 0. So, by symmetry, if one of them is 0, all of them are 0. So that is case 1.
[23:53] The other cases where none of them are 0. So, all are non-zero, all are not non 0. So,
[24:01] none of them are 0. So, in that case, what we can do is we can multiply each of our equations
[24:11] suitably. So, the first equation we can multiply by x, and we can say that 4x to the power
[24:19] 4 plus xyz is 0, which means 4x to the power 4 is minus xyz but I can do the same thing
[24:27] for the second equation by multiplying it by y and I can say that 4y to the power 4
[24:32] plus xyz is 0, which is saying that 4y to the power 4 is minus xyz and by symmetry we
[24:41] will also get that this is 4z to the power 4.
[24:45] So, what that means is 4x to the power 4 is 4y to the power 4 is 4z to the power 4, so
[24:51] x to the power 4 is y to the power 4 is z to the power 4 and they are not all 0. Fine
[24:59] and now if we if we take the fourth root, what that will tell us is that x is plus or
[25:08] minus y. And again, which is plus or minus z. And now we can, so, now we can substitute
[25:18] this in into our equations. So, substitute in 4x cube plus yz is 0.
[25:28] So, if you substitute this, what you are going to get is 4x cube plus x squared is 0. And
[25:37] since x is non-zero, we can cancel x squared on both sides and what we get is x is either
[25:42] you get this or 4x cube minus x squared is 0. And then what we get is x is 1 by 4 or
[25:50] x is minus 1 by 4. And then so again, for y and z also, you get these three. Of course,
[25:59] all possible solutions are may not be correct, because they have to satisfy these equations
[26:04] over here.
[26:05] So, then you have to back check for what values these are satisfied. And if you do that, you
[26:11] will get your critical points as 0,0,0, which was case 1, and then from here, we will get
[26:19] 1 minus 1 by 4 comma 1 by 4 comma 1 by 4, 1 by 4 comma minus 1 by 4 comma 1 by 4, and
[26:30] 1 by 4 comma, 1 by 4 comma minus 1 by 4, and finally minus 1 by 4 comma minus 1 by 4 comma,
[26:40] minus 1 by 4. So, these are the 5 critical points that you will get. And now we have
[26:47] to check the nature of these critical points.
[26:50] So, let us see what is the Hessian. So, if you compute the Hessian, what you are going
[26:59] to get is 12x squared z, y, then z 12y squared, x, and then y 12 sorry, y x 12z squared. Fine,
[27:21] so now we have to evaluate this Hessian at all these various points, and check what happens.
[27:29] So, already, you can see that 0,0,0 this is inconclusive. So, we cannot really say anything
[27:34] about 0,0,0. So, 0,0,0 it is inconclusive.
[27:47] And again, I will encourage you to check what happens at 000. My claim is that this should
[27:52] probably be a saddle point. What happens at the other points, and by symmetry, for these
[28:01] three, at least, we should get the same thing and then we have to check minus 1 by 4 minus
[28:06] 1 by 4, minus 1 by 4. So, let us check minus 1 by 4 comma 1 by 4 comma 1 by 4. So, in this
[28:14] case, the Hessian is, so the Hessian is, let us write that down, 3 by 4, 1 by 4, 1 by 4,
[28:37] 1 by 4, 3 by 4, minus 1 by 4, and then 1 by 4, minus 1 by 4, 3 by 4.
[28:45] Now, you can use, use our good old determinants, and check what we are getting. So, notice
[28:53] here that there are constants in this, so you can pull out the constant. So, this matrix
[28:58] is 1 by 4 multiplied by the matrix, which is consists of integers, if that makes your
[29:04] computation easier. And remember that when you take determinant, since it is a 3 by 3
[29:09] matrix, that constant will be to the power 3.
[29:12] So, if you do that, the determinant of the entire thing is, I maybe, I not do the actual
[29:30] computation and I will just say that this is positive you can see that is the case because
[29:34] on the diagonal the terms are rather large. So, this is positive. And then for the 2 by
[29:42] 2, again, this is positive. And the 1 by 1 is again positive, positive, so this is a
[29:53] plus plus plus situation that means this is a local. So, this is a all these 3 are local
[30:03] minimum. And finally, we have the last point. And, again, actually the same thing happens.
[30:14] So, in this case, you get 3 by 4, but all the off-diagonal entries are minus 1 by 4,
[30:23] 3 by 4 in the regular and minus 1 by 4 everywhere else. And if you compute the determinant,
[30:32] again you are going to get plus plus plus, which means this is also a local minima. So,
[30:44] once again, what what you will find here is that for the points, where it kind of not
[30:52] so clear how the function behaves, the Hessian test is telling us something, whereas for
[31:00] 0,0,0, it is comparatively easier to see what is happening, because the function value there
[31:05] is 0.
[31:07] And you can try to sort of understand from which side do I come and along with curve
[31:12] do I come, in order to get local maxima, local minima, etcetera. So, that behaves like a
[31:18] certain point. So, the conclusion here is that is that again, the Hessian test is kind
[31:25] of the behavior is kind of surprising, sometimes for things that you may understand relatively
[31:32] better, it gives you inconclusive results, but for things that you may not understand
[31:38] relating, you understand relatively less clearly, it gives you results.
[31:45] Now, of course, we have not gone into proofs of the Hessian test. And maybe that is, that
[31:53] is a separate topic in itself. So, we will not go there. There is a, we can extend this,
[31:59] as I said, for the n by n case, but we will not do that in this course. So, the main theme
[32:06] of this video was that we now have a Hessian test analogue to the second derivative test
[32:12] for 3 variables. Thank you.