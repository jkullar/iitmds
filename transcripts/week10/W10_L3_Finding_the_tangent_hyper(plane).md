# W10_L3: Finding the tangent hyper(plane)

**Week:** Week 10
**YouTube URL:** https://www.youtube.com/watch?v=bz1gtPvNIAg

---

## Transcript

[00:14] Hello, and welcome to the maths 2 component  of the online B.Sc. program on data science
[00:18] and programming. This video we are going to talk  about how to find the tangent hyper plane. So,
[00:24] I will explain what this means in a few  slides, but in terms of R3, meaning if you
[00:30] have a function of two variables, you can just  think of this as finding the tangent plane.
[00:35] Let us recall first, we talked about  tangent lines in a previous video.
[00:40] So, suppose you have a function  of two variables x comma y,
[00:43] then we have talked about the notion of tangent  lines. So, the notion of a tangent line was, you
[00:48] take a line L passing through this point a tilde  which is, which you can think of as a comma b and
[00:58] you restrict your graph to only the plane  above that line. So, once you do that,
[01:04] it becomes a function of one variable.  And then for a function of one variable,
[01:08] we know exactly what it means for a tangent  line to exist and how to write it down
[01:14] in terms of its algebraic equation.  And in the previous video, we did exactly that.
[01:19] So, if u is a unit vector in the direction of  the line L, then the tangent, if it exists,
[01:24] will be the line slope fu of a tilde passing  through the point a tilde comma f of a tilde. And
[01:29] so its parametric equation is given by, so xt is a  plus t times u1, yt is b plus t times u2 and zt is
[01:44] f of a comma b plus t times fu of a comma b, where  what are all the terms here. So, u is u1 comma u2.
[01:57] So, the vector u is u1 comma u2. That is the  unit vector in the direction of the line L,
[02:06] a tilde is the coordinates of a tide  are a comma b in two dimensions.
[02:12] So, if you want to think of it  in R3, it is a comma b comma 0.
[02:16] And then fu of a comma b is  the directional derivative of
[02:20] f in the direction u or in the direction of  the unit vector u at the point a comma b. So,
[02:26] this explains everything. And as you vary t, t  is a variable, as you vary t, you get different
[02:32] points on this line. So, this was how the  parametric equation was for the tangent line.
[02:40] So, let us look at the collection of all the  tangents. So, suppose f of x, y is a function
[02:46] defined in the domain D in R2 containing some  open ball around the point a comma b. Suppose
[02:51] the gradient f exists and is continuous on some  open ball around the point a comma b, then all
[02:57] the tangent lines at the point a comma b exists.  This was because once the gradient is continuous
[03:04] in a small neighborhood in an open ball, then  we know that the directional derivatives all
[03:09] exist. And once the directional derivatives  all exist, all the tangent lines exist.
[03:14] So, then we can write down the equation of the  tangent line in the direction of the vector u as,
[03:20] which means we can, we are saying we can  rewrite it. So, here, what we are saying is
[03:27] that I can rewrite fu of a comma b as gradient  of f at a comma b dot with the vector u.
[03:39] In other words, I can rewrite this as  del f del x at a comma b times u1 plus
[03:46] del f del y at a comma b times u2. So, now I can rewrite the
[04:01] parametric equations as xt is a  plus u1t, yt is b plus u2t and zt is
[04:16] f of a comma b plus, now  here something has changed,
[04:22] because we had fu of a comma b times t, but  I know that fu of a comma b is I can rewrite.
[04:31] So, what I get is, this is f of a comma  b plus del f del x a comma b times u1
[04:53] plus del f del y a comma b times  u2 the whole thing times t.
[05:05] This is how the new equation looks like. And so what we are saying you really is that
[05:14] somehow, if I know u1 and u2, this is actually a  very easy equation in terms of u1 and u2 provided
[05:25] I know what are my partial derivatives. So, now  this is how the parametric equations are for the
[05:32] tangent line in the direction of the unit vector  u. So, now notice something interesting here. So,
[05:38] if I look at zt, I can really write it as a linear  combination of xt and yt. How do I do that?
[05:47] Well, with some constants, of  course, so if I take zt minus
[05:52] f of a comma b, so this is a partial  derivative of f with respect to x at a, b,
[06:00] times x minus a plus partial derivative of f with  respect to y at a comma b times y minus b. So,
[06:11] it satisfies this equation. I would write  xt and yt. So, this parametric equation
[06:26] satisfies this particular equation, which means  that all of these lines are contained in this,
[06:38] whatever this shape is which
[06:42] satisfies this equation. So, let us  look at some examples in GeoGebra.
[06:46] So, here is the function x, y. This is how  the graph looks like. We have seen this
[06:50] function before. Let us look at what  happens to the point 1 comma 1. So,
[06:54] if you look at the point 1 comma 1, let us take a  plane passing through that point. So, this is how
[06:58] a plane passing through the point 1 comma 1 looks  like. And we can vary this plane. So, if you vary
[07:10] this unit vector, accordingly,  the plane is going to vary.
[07:14] So, these are many of the planes  passing through that point.
[07:19] And now, let us restrict  the function to that plane.
[07:23] So, if we do that, we get this curve. So, this  is the graph. Let us remove this f of x is
[07:31] x times y. This is how the graph looks  like. Let us draw the tangent to that graph.
[07:39] So, here is how the tangent line looks like.  Now, let us see what happens as we vary
[07:49] this plane. So, if we vary this plane, this  is how the graph changes. Let us look at that
[07:56] equation that we just had, which was z minus f of  a, b is del f del x at a comma b times x minus a
[08:08] plus del f del y at a comma b times y  minus b, so how does that look like? So,
[08:20] here is that plane. And what we are saying is that,
[08:27] let us remove this plane in which we are  cutting. So, what we are saying is that this line
[08:34] lies on this plane. So, I am  going to keep the plane like this.
[08:38] And now let us again vary the tangent lines, if  you vary the tangent lines, here us what happens.
[08:46] So, something interesting is  happening. All these tangent lines
[08:50] are in fact lying on that plane. You can see  they are not moving away from the plane.
[08:54] So, if I change the perspective, you can  see that they are all on that same plane,
[09:00] and which we have seen algebraically. So  I am making that, so that we are viewing
[09:07] that plane like this. And you can see that  the line is consistently on that plane.
[09:12] And here is how the line looks like. So, on that  payment varies, but it remains on that plane.
[09:18] So, let us do another example.
[09:27] So, let us look at the function sine of  x, y. So, here is how that function looks
[09:32] like again. Let us take the point 1  comma 0 and ask what happens to the
[09:41] tangents at that point. So, let us  draw a plane through that point. So,
[09:46] here is a plane passing through that point.  So, let us see what happens to the curve over
[09:51] there. So, here us the curve. So, again, these are  pictures we have seen earlier. Let me remove the
[10:00] graph.   So, as I change my
[10:03] plane, the curve changes. So, here is how that  looks like. And now let us see what happens
[10:08] to the tangent. Let me draw the tangent here.  Here is the tangent. So, again, the tangent is
[10:15] changing. So, if we draw that plane that we just  had or rather the solution of the equation that
[10:21] we just had, here is the plane that we get and we  see that this tangent line is on that plane.
[10:26] And if we change our line, which  is the unit vector, here is how the
[10:38] tangent changes. But you can see it  is always on this plane. So, if I
[10:42] play it like this, you can see it is always on  the plane. It never leaves that plane. And again,
[10:49] this is something we have proved algebraically.  So, this is just a demonstration to say that
[10:59] all of these tangent lines lie on a  particular plane. And which plane is
[11:05] that that is exactly the equation of the  plane that we have written down here.
[11:09] So, let us look at the tangent lines in terms  of linear algebra. So, what one means by this is
[11:18] that we can view them as affine  flats. This is an idea that we
[11:21] saw in the previous video as well. So,  in terms of affine flats, x t, y t, z t
[11:33] is a comma b comma f of ab. This is the equation.  So, here I will get the affine flat plus t times
[11:50] the vector u1, u2, fu of a comma b.
[11:57] So, where is the affine flat coming from?  So, the collection of these points is,
[12:03] if I call that the tangent line, so this is  the tangent line to f at a, b in the direction
[12:20] of u. This line as an affine flat is given  by this point a comma b comma f of a, b
[12:29] plus the line passing through the origin,
[12:36] so the subspace, which may be I will call  W, and what is this W. So, W is the line
[12:48] passing through the vector
[12:56] u1, u2, fu of a comma b.
[13:00] So, of course, we know that if you  have a line passing through a vector,
[13:04] then such a line, any vector on that is a scalar  multiple of this vector. And as a result of that,
[13:16] W will be given by t times u1 comma u2 comma  fu of a comma b. So, this is how it looks like
[13:22] as an affine flat. And the point one is  trying to make here is that according to
[13:33] how u varies this W vary. So, I will write  this to emphasize that it depends on u.
[13:42] And the vector u has an interesting property,  namely, this is the property that we exploited
[13:46] in the previous slide as well. So,  because fu of a comma b is equal to
[13:53] u1 times del f del x a, b plus u2 times del f del  y a comma b, what we can see is that the lines
[14:11] Wu all lie on the plane Z is equal  to del f del x a comma b times
[14:29] x plus del f del y a comma b times y. So,  this is the plane on which they lie.
[14:41] And now we can translate this plane to pass  through the point a comma b comma f of a comma b.
[14:48] So, if I call this plane, let us say, P. So,  this is again a subspace of R3. And now I will
[14:58] translate this by a comma b comma f of a, b  to get another plane which I am going to call
[15:08] the tangent plane of f at a comma b, this  is a comma b comma f of a comma b plus
[15:33] the plane P. So,
[15:36] the net upshot of what I am saying is that, if  you take the collection of all tangent lines,
[15:43] they lie on the particular plane. How do I get  that plane, either by direct observation as we did
[15:50] in the previous slide, or else, you see that all  these tangent lines are affine flats that means
[16:01] they are lines which have been moved from
[16:06] a line passing through the origin by this  vector. You take all those lines.
[16:11] And then you can see this very easy  relation that that you are getting here.
[16:17] And then exploiting that relation, you can  move it back to the point that you wanted
[16:21] to pass through. And so all these will pass  through that line, whichever way you want,
[16:26] you will get that the tangent plane of f at  a comma b is an affine flat of this form.
[16:33] So, the net result is the following. If f of x,  y is a function defined in the domain D in R2
[16:37] containing some open ball around the point a comma  b, suppose the gradient exists and is continuous
[16:44] on an open ball, then the equation of the  tangent plane to f at a comma b is given by
[16:49] z is equal to f of a comma b plus del f del x
[16:56] at a comma b times x minus a plus del f del y at a  comma b times y minus b. So, this is the question
[17:10] that of the tangent plane to f at a comma b.
[17:15] So, this is indeed an affine flat  because you have one linear equation. And
[17:22] but the equation, so you are looking for solutions  of basically what we are saying is in terms of
[17:28] linear algebra, you are looking for solutions of  del f del x a comma b times x plus del f del y
[17:40] a comma b times y minus z is equal to del f del x  a comma b times a plus del f del y a comma b times
[17:55] b. And this is an equation in three variables.  So, we know how solutions of this look like.
[18:03] So, if it has even one solution, then it is  basically you take that solution and translate
[18:08] the null space for this, meaning if you have 0 on  the right hand side, you translate that null space
[18:17] by that solution. This is what we did in terms  of linear algebra. That is how we get the tangent
[18:22] plane. So, whether the linear algebra aspect  here is clear or not, what we are saying is
[18:28] this is the equation of the tangent plane  and we have an interpretation in terms of
[18:32] what we have done in linear algebra.  Let us do some examples to set ideas. So,
[18:38] here is f of x, y is x plus y, what is  the tangent plane that 1 comma 1. So,
[18:45] here we computed the gradient. So, the  gradient at 1 comma 1 was just 1 comma 1
[18:55] and so we can write down that z is equal to f of  1 comma 1, which is 2 plus 1. So, this 1 is coming
[19:04] from the first part here. So, 1 times x minus a,  which is again 1 plus 1 times y minus b, so b is
[19:14] again 1, and this 1 here is coming from the one  in the second coordinate of the gradient.
[19:20] So, this is an easy equation. So,  this is saying that z is equal to
[19:25] 2 plus x minus 1 plus y minus  1. In other words, this is 2.
[19:33] So, this is just x plus y. So, the equation  of the tangent plane at 1 comma 1 is given by
[19:43] z is equal to x plus y. So, let us do f of x, y  is x times y. So, here we computed the gradient
[19:53] at 1 comma 1. And again, this gradient was 1 comma  1. So, here we get z is equal to f of 1 comma 1,
[20:04] which is 1 plus 1 times x minus 1 plus 1  times y minus 1. So, if you evaluate that,
[20:11] we are going to get x plus y minus 1. So,  here the tangent plane is x plus y minus 1.
[20:19] And finally, let us do f of x, y, sine x, y, let  us maybe compute the tangent plane at 1 comma 0.
[20:26] So, the gradient at 1 comma 0 is given by  0 comma 1. This is a computation we have
[20:38] done earlier. And so the equation of the tangent  plane is z is equal to f of 1 comma 0, which is 0,
[20:48] plus 0 times x minus 1 plus
[20:56] 1 times y minus 0, which is just z is  equal to y. So, the equation of the
[21:03] tangent plane is z is equal to y. So, I hope  the, finding out the equations is really easy,
[21:11] because you have a formula and you can just  substitute all the values in the formula.
[21:16] Let us now talk about tangent hyperplanes.  So, if you do the same thing in n dimensions,
[21:21] unfortunately, what you get is not a plane, but  it is, as we said, it is an affine flat, which is,
[21:27] for which the corresponding subspace is  something which is the solution space of,
[21:38] for single equation. So, if you do that, that  means you are going to get an affine flat
[21:45] of dimension n the solution space will be n  dimensional. So, let us go through that.
[21:52] So, if f of x tilde be a function defined  domain D in Rn containing some ball around
[21:57] the point a tilde, suppose the gradient exists  and is continuous on some open ball around the
[22:01] point a tilde. So, we can do the same things that  we have done earlier and get the equation. So,
[22:08] for that, let us recall what is the  equation of, the parametric equation
[22:14] of the tangent lines. So, in the direction  of the vector u, we could write this down as
[22:23] the point, so a tilde comma f of a tilde plus t  times u comma fu of a tilde. This was how we wrote
[22:32] it down in terms of the vector form. So, notice that this part of the
[22:40] equation satisfies the following identity that  the last coordinate which, if we call it z, last
[22:49] coordinate satisfies that z is equal to summation  ui times or rather the ith coordinate xi times
[23:02] gradient fi with respect to xi at a tilde  times this is what it satisfies, because
[23:13] fu of a tilde is, what is fu of a tilde,  so just to emphasize, so this part.
[23:29] So, what is fu of a tilde, just to emphasize this  part is equal to submission ui times ingredient f,
[23:39] del f del xi at a tilde.  And these uis are exactly what
[23:44] come in the first n coordinates. So, that means  the n plus 1th coordinate which we called z
[23:51] is summation xi times del f del xi at a tilde.  So, what that means is that each of these lines,
[24:00] so the lines which are translates  of the tangent lines to the origin,
[24:07] which is the corresponding subspace, one  dimension subspace, all of them lie on the,
[24:15] they are solutions of this equation.  So, if you have one equation
[24:19] that means you get a hyperplane that is  exactly what is called a hyperplane. So,
[24:23] this is the null space of the single equation. It  is an n dimensional subspace in Rn plus 1. And so,
[24:31] it is a hyperplane in Rn plus 1. So, it  is of dimension in. And these lines all
[24:36] lie on that hyperplane. And now, if you take  that hyperplane and shift it by this point,
[24:45] then you get the corresponding affine flat.  And that means that all the tangent lines lie
[24:50] on that affine flat or that hyperplane  and so that is the tangent hyperplane of
[24:57] corresponding to the function f at the point a  tilde. And so its equation is going to be given by
[25:03] shifting this z summation xi del f del xi of  a tilde by this point. So, if you do that,
[25:10] we will get the equation of the tangent  hyperplane to f at a tilde is given by
[25:18] z is equal to f of a tilde plus summation del  f del xi at a tilde times xi minus ai. This
[25:33] is how it will look like. Or you  can write this better in terms of
[25:41] the dot product. So, this is gradient of f at  a tilde, so now this is a vector and you dot
[25:45] this vector with x tilde minus a tilde. So, let us do some examples to set these
[25:52] ideas. So, if you have f of x, y, z is xy plus  yz plus zx let us look at the tangent hyperplane
[25:59] at 1 comma 1 comma 1, so for this, I  need to first compute the gradient. So,
[26:04] the gradient at x comma y comma z, well we  know what this is, this is x plus y, y plus z,
[26:11] z plus x. So, if you compute this at 1 comma  1 comma 1, this is 2 comma 2 comma 2.
[26:21] And now, if we use this, what we will  get is that the tangent hyperplane is
[26:36] z is equal to f of 1 comma 1 comma 1 plus this  gradient at 1 comma 1 comma 1 dot with x minus
[26:48] 1, y minus 1, z minus 1. So, if you work that  out, that is f of 1, 1, 1 is 3, so 3 plus
[27:00] 2 comma 2 comma 2 dot with x minus 1, y minus  1, z minus 1, so I should not use said here.
[27:09] So, since I am using, so let me use some other  variable u. So, that means, so the equation is
[27:24] u is equal to 3 plus 2 times x minus 1 plus  2 times y minus 1 plus 2 times z minus 1.
[27:34] Similarly, if you have x square  plus y square plus x square,
[27:38] so let us look at the gradient it is  going to be given by 2x comma 2y comma
[27:45] 2z. So, if you compute it at the point 2, 3  minus 1 it will be 4 comma 6 comma minus 2.
[27:56] And so the equation of the tangent hyperplane  is u is equal to f of 2, 3, minus 1
[28:05] plus gradient at 2, 3 minus 1 dot with x  minus 2 comma y minus 3 comma z plus 1.
[28:21] So, the function value is 2 square 4 plus 3  square, so 4 plus 9, 13 plus 1, so 14 plus
[28:32] 4 comma 6 comma minus 2 dot  with x minus 2 comma y minus
[28:38] 3 comma z plus 1. And if we  evaluate what that is, we will get,
[28:52] so the equation is u is equal to 14 plus 4 times  x minus 2 plus 6 times y minus 3 plus or minus
[29:09] 2 times z plus 1. So, the computation is quite  clear. The reason may be a little bit involved.
[29:21] But I hope I have convinced you that at  least using the pictures that indeed,
[29:25] all of these do lie on a plane in, when  you are in two dimensions or hyperplane
[29:30] when you are in higher dimensions. So, once again, same question, tangent planes need
[29:37] not always exist. So, why is that, because the  tangent lines themselves do not exist in both of
[29:43] these cases. So, we have seen this in the previous  video where we had xy by x square plus y square.
[29:49] There is no tangent lines in the directions other  than the x and the y axis, positive and negative.
[29:59] And for f of xy is mod x plus mod y, it is  even worse. I will encourage you again to check
[30:05] what happens. So, you have to be careful.  And the hypothesis that the gradient is continuous
[30:12] in the neighborhood is very, very important. And  that often happens for polynomials or even for
[30:18] rational functions or other kinds of functions  where it is easy to check for continuity.
[30:26] Even for this function, f of x, y is xy by x  square plus y square if x, y is not 0, 0. And
[30:30] other point is the tangent plane certainly exists.  And I will encourage you to check what that is.
[30:38] Let me end by with this idea of linear  approximation. So, this is an idea that
[30:42] we have done in one variable calculus. So, if f of  x tilde is a function defined in a domain D in Rn
[30:48] containing some open ball around the point  a tilde, suppose gradient of f exists and is
[30:52] continuous on some open ball around the point  a tilde, then we can take that expression
[30:59] and create a function out of that.  So, that is a linear function.
[31:02] So, this is a function Lf of x tilde is f of a  tilde plus gradient of a tilde dot with x tilde
[31:08] minus a tilde. This is exactly what we, so the  right hand side is exactly what we saw was the
[31:14] expression coming in the equation of the tangent  plane, on the left, instead, we had z or u,
[31:24] meaning the n plus oneth variable. So, then instead of that we will create a function
[31:32] and so this function is the best  linear approximation for the function f
[31:36] close to a tilde. This is exactly the  idea of the tangent in the first place.
[31:40] For functions of one variable, if you have a  curve, meaning the graph, it approximates the
[31:45] graph. For functions of several variables,  for example, for two variables, if you have
[31:52] the graph of that function, the plane is going  to approximate that graph close to the point.
[31:59] Let us do a couple of examples again. And this  involves the same checking that we have done
[32:03] before. So, if you have f of x, y is xy at 1, 1,  what is the linear approximation? Well, same idea,
[32:11] you have to compute the gradient at 1 comma 1.  So, what is the gradient of this function? So,
[32:17] it is y comma x with the gradient of f at 1  comma 1. We have computed is 1 comma 1.
[32:23] So, what is the linear  approximation, so Lf of x comma y,
[32:31] so this is at the point 1 comma 1, so I have to  also sort of emphasize that this is the linear
[32:38] approximation close to 1 comma 1. So, I will  say that. Lf of x comma y is f of 1 comma 1
[32:45] plus the gradient at 1 comma 1 dot with x  minus 1 comma y minus 1, which is 1 plus
[32:57] 1 comma 1 dot with x minus 1 comma y  minus 1, which is 1 plus x minus 1 plus
[33:04] y minus 1. So, this is x plus y minus 1. So, now we are thinking of this as a function. So,
[33:10] if you take this function, it  approximates the function x, y.
[33:16] So, this is the function, which  is the best linear approximation
[33:26] to f close to the point 1 comma 1. So,  if you change your point, the function
[33:34] will change, the linear function will change. Let us do the same thing for in three variables.
[33:42] So, if you have f of x, y, z is x square  plus y square plus x square, well,
[33:45] we know what is gradient at this point. We  have done couple of slides ago. This was 4, 6
[33:53] minus 2. So, Lf of x, y, z
[33:58] this is 3 plus the gradient which is 4, 6,  minus 2 dot with x minus 2, y minus 3, z plus 1,
[34:09] which is 3 plus 4 times x minus 2 plus 6  times y minus 3 minus 2 times z plus 1.
[34:19] If you rewrite this, this is 4x plus 6y  minus 2z and then 3, minus 8 minus 18 plus,
[34:36] minus 2, so minus 18 minus 2, minus 20,
[34:41] so minus 32 and then so this is minus 29. So, I  hope the numbers are correct. You can check. So,
[34:48] this is, what is this? This is  the best linear approximation to
[34:56] f close to this point 2, 3, minus 1. So, let us quickly summarize what we have
[35:06] done so far in this video. We have seen that  the collection of tangent lines lies on a plane
[35:11] when we have a function of two  dimensions or two variables.
[35:17] And if it is off several variables  it lies on the hyperplane
[35:20] and we characterize the, we obtained the equation  of this hyperplane by looking at the corresponding
[35:28] subspace, which is exactly given by  the solution to a single equation.
[35:36] So, using that we can explicitly write down  what is the equation of that hyperplane.
[35:47] And then we also saw that if you take the right  hand side and make that into a function, then that
[35:54] is the best linear approximation to the function  f at the given point a tilde. Thank you.