# W10_L2: Tangents for scalar-valued multivariable functions

**Week:** Week 10
**YouTube URL:** https://www.youtube.com/watch?v=9yeyc472W5Q

---

## Transcript

[00:14] Hello, and welcome to the Maths 2 component of the Online BSc program on Data Science
[00:18] and Programming. In this video, we are going to talk about tangents for scalar-valued multivariable
[00:24] functions. So, we have seen the notion of tangents for functions of one variable. This
[00:30] is a topic that we studied extensively when we read one variable calculus, and we used
[00:36] it to study the ideas of the tangent line, and the idea of differentiability and the
[00:43] derivative. So, let us recall first what are tangent lines to curves.
[00:47] So, a tangent line to a curve C at a point P on the curve C is a line which represents
[00:55] the instantaneous direction in which the curve C moves at the point P. So, later on, we summarize
[01:02] this information in terms of the derivative. And traditionally, we have thought of, we
[01:07] think of tangents as lines, which just touch the curve at that point.
[01:15] As we now know, the idea of just touches is a little vague, which is why you have to use
[01:21] more involved definitions like the derivative. And as examples, here are curves that we had
[01:27] actually seen in our study of one variable calculus, along with the tangents to those
[01:33] curves. So, this is just a recollection of what we had done in one variable calculus.
[01:39] So, from here, how did we move to functions?
[01:42] So, we looked at the graph of the function. So, suppose we have f from D to R, which is
[01:50] a function, where D is, of course, now a subset of R. So, if we assume that the graph is a
[01:58] curve and we take a point in this domain D then the tangent line to f at that point,
[02:07] x is the tangent to the graph of that function f at the point x comma f of x, this was our
[02:14] definition.
[02:15] And just as an example, here is the function f of x is x cube and you can see these tangent
[02:21] lines. So, if your function is nice, by which we mean it is differentiable then you can
[02:28] compute the explicit equations for these tangent lines by looking at y minus f of a is equal
[02:38] to f prime of a times x minus a, this is the equation of the tangent line at the point
[02:44] a.
[02:45] And we saw that this notion of just touches, can have interesting implications. For example,
[02:53] for y is x cube, if you will draw the tangent at 0 then it is actually the x axis and that
[03:00] actually cuts the curve of the, that actually cuts the graph of the function f of x is x
[03:08] cube. So just touches can have various implications for what it means.
[03:14] It can be like any of these lines, the red lines which are drawn or it can actually be
[03:19] a line, which cuts the curve, and those are kind of special or interesting points, as
[03:26] we later saw in our study of maxima and minimum. So, this is just a collection of tangents
[03:32] for functions of one variable.
[03:35] Now, we want to study tangents for scalar-valued multivariable functions. So, what do we mean
[03:42] by tangents? What do, what does the collection of tangents look like and so on? So, we already
[03:48] have some idea about this, when we studied the notion of partial derivatives and directional
[03:54] derivatives because what we did there was we restricted ourselves to a particular line,
[03:59] then we said, let us look at how the function looks on top of that line. And over there,
[04:03] we said, well, now we, over here we ask what is the rate of change of the function when
[04:10] we restricted to that line, which made sense because we had restricted to a function of
[04:17] one variable. We will use the same idea here.
[04:20] So, suppose you have for now let us start with two variables. So, suppose you have a
[04:26] function of two variables, which is defined on a domain D in R2 and contains some open
[04:32] ball around the point a comma b, which sometimes are represented by a tilde. So, consider a
[04:40] line L in D passing through a tilde and restrict f to L. This is exactly what we did in when
[04:46] we defined the notion of the directional derivative.
[04:50] And since it is now a function of one variable, we can consider the tangent to f at a tiled
[04:54] over L, as in the previous slide. By previous slide, I mean, since it is a function of one
[05:00] variable we know exactly what we mean by tangent. It is the line which represents the instantaneous
[05:06] direction of the graph. And that is the line that we consider.
[05:14] So, if the line L is in the direction of the unit vector u, then the tangent if it exists
[05:21] and we know examples from one variable calculus where it does not exist, will be the line
[05:26] with slope f u of a tilde and passing through the point a tilde comma f of a tilde. So,
[05:31] let us understand this statement better. So, we know from one variable calculus, as we
[05:36] just observed that the equation of the tangent is given by the derivative at that point,
[05:46] so once we know the derivative at that point in one variable calculus that is, then we
[05:51] can compute what is the equation of the tangent line.
[05:54] So, now what we have done here is we have restricted ourselves to the line L. So, we
[06:00] have a one variable function and then using that one variable function, what is the derivative,
[06:06] that is exactly the directional derivative, where how do you compute the directional derivative,
[06:11] well you take this line L, and you look at unit vector, which is pointing in the same
[06:16] direction as that line L.
[06:17] Of course, this line L may not pass to the origin. So, what you have to do is you have
[06:22] to translate this line L parallelly back to the origin, and then on that line L, you have
[06:26] to take a unit vector. Once you take this unit vector, you have to compute the directional
[06:31] derivative. And once we compute that directional derivative, you can use that to compute the
[06:39] equations of the point, so it will be a line.
[06:41] So, if this is the line L. And earlier when we had the one variable situation, this was
[06:49] your x axis, this was your y axis, and so you had this line below, and the derivative
[06:57] was something like this, so it was with respect to the x axis, when we took the derivative,
[07:03] it told you the slope, meaning the angle with respect to the x axis.
[07:06] So now your line is some arbitrary line in our R2, so what you do is above this line
[07:14] you take a line with the slope prescribed by f u of a tilde. And so, this is a line
[07:20] with that slope, passing through the point a tilde comma f of a tilde so this uniquely
[07:24] determines the line. And let us see a couple of examples of this in GeoGebra.
[07:30] So, let us look at the function, f of x, y is x, y. So, here is the function f of x,
[07:37] y is x, y, so rather interesting looking function. Let us look at the point, let us say one comma
[07:45] one. So, if you look at the point one comma one. Let us take a plane passing through that
[07:57] point, according to this unit vector. So, I have some unit vector, which I am going
[08:04] to change now as this changes.
[08:06] So, here is a plane passing through the point 1 comma 1. So, I hope you can see the plane.
[08:13] And now let us restrict the graph of this function to that plane. So, if we do that,
[08:19] then we get this curve. So, let me let me remove the, so I hope you can see the curve
[08:24] on the plane. So let me remove the graph. So, here is the graph, which is 1 and here
[08:31] is how the how it looks like on that plane. And now if I remove that plane, you will see
[08:38] further that this is how it looks like on the line below that, which is passing through
[08:45] the point 1 comma 1.
[08:47] And now, we can ask what is the tangent to this add 1 comma 1. So, if we compute what
[08:54] that is, well, here is how that tangled looks like. So, here is the tangent. So, I hope
[09:03] you can see the tangent. And we can vary this as the unit vector u varies, which is the
[09:10] same as saying as the plane vary.
[09:11] So, I will bring back the plane. So, this is all happening on this plane. It is clear
[09:16] I hope from the picture. And as I vary my plane or my unit vector, rather, you will
[09:22] see how this changes. So, as the plane changes the corresponding, so these are all planes
[09:31] passing through that same point as the unit vector changes, the corresponding part of
[09:36] the graph changes that you have changes and so the tangent changes. So, this is how it
[09:42] looks like.
[09:44] Let us do another example. So instead of these, suppose now I have the graph of the function,
[09:54] sine of x, y. So, this was again a function that we have seen before. So, here is sine
[09:59] of x, y. Let us look at the point maybe 1 comma 0.
[10:02] So, here is a plane passing the point 1 comma 0. I hope you can see it. And now let us see
[10:11] what the intersection of these two is that gives you the following curve, and I will
[10:17] remove this graph so you can see the curve. So, we have seen this curve before, as well.
[10:21] So, this is the curve passing through 1 comma 0.
[10:27] And now we can ask what is the tangent to that. So, if you look at the tangent, here
[10:31] is how the tangent looks like. So, this is at the point 1 comma 0, and I can vary my
[10:41] unit vector. And as I vary my unit vector, the plane changes accordingly, the part of
[10:47] the graph which is intersected with the plane changes, and accordingly the tangent line
[10:53] changes. So, I hope you can see what is happening. So, this is just a visual demonstration of
[11:03] what we said in that previous slide.
[11:05] So, the main point here is that, if you have this line L, you get the corresponding plane
[11:12] above that, and on that plane you have this line, which has slope f u of a tilde, and
[11:18] which passes to the point a tilde comma f of a tilde. So, using these facts we can write
[11:23] down the equation of this line.
[11:25] And let us try to write down what that equation is. So, we can write this equation down in
[11:31] several ways. So, first of all, what is the line below? So, I am going to take u to be
[11:38] a u1 comma u2. So, this is the unit vector on that line. So, unit vector on L and then
[11:53] a, b is my point. So, a, b so a tilde equal a, b is the point where I want to compute
[12:05] the equation of the tangent line. So, fu a, b is the directional derivative at that point.
[12:18] So, these are the, these are the, this is everything that I know. So first of all, what
[12:32] is the equation of the line? So, for the line, so first of all, we know that it is on the
[12:42] x, y plane, so that means z is zero, this is one of the defining factors. And the other
[12:48] is that it passes through the point a comma b, and it is in the direction of the unit
[12:53] vector, u1 comma u2.
[12:56] So, since that is the case, we can write down the equation as so u1 times y minus b is equal
[13:05] to u2 times x minus a. And how do I check that this is indeed correct? Well, you can
[13:11] see that the slope is u2 by u1 provided of course that you u1 is non-zero, and if u1
[13:18] is 0 you can see that it is the correct line which is x is equal to a.
[13:24] And if you plug-in the values of x and y to a and b respectively then this equation is
[13:32] satisfied because you have 0 is equal to 0 that means it passes through a comma b. So,
[13:37] it is the intersection of these two planes. So z0 is a plane that is x, y plane, and u1
[13:44] times y minus b is u2 times x minus a is another plane, so it passes through that plane.
[13:52] And in fact, if I remove this restriction that z is 0, then that is a plane above the
[13:58] line L. So, the corresponding plane which I will denote by P is u1 times y minus b is
[14:04] u2 times x minus a. So now, this is what I know. So, instead of writing L like this,
[14:13] I can write it as a parametric equation and this is often very useful, so that we know
[14:19] what is happening.
[14:22] So, the other way of writing L is as xt is equal to a plus t times u1, yt is equal to
[14:38] b plus t times u2, and zt is equal to 0 because it is on the x, y plane, so this is how you
[14:44] write L. And how did I get this?
[14:45] Well, this is if you remember from linear algebra, lines are meaning any arbitrary line
[14:52] is an affine flat, and how do I get those by translating some line which passes through
[14:57] the origin, which means a subspace of dimension one. And with subspace is that? That is the
[15:03] line which is passing through the vector u1 comma u2. So, based on that what I can say
[15:11] is that xt, yt, zt is exactly just to reiterate this, a, b 0 plus t times u1, u2, 0.
[15:27] So, this is saying that if you have you are shifting the line passing through u1 comma
[15:33] u2 comma 0, because it is on the x, y axis, x, y plane, so that it passes through a comma
[15:42] b. This was exactly the idea of affine flats. And we are going to use the same idea now
[15:47] to write down the equation of the tangent line as well.
[15:54] So, what happens for the tangent line. So, we have identified the line L and the plane
[15:59] P. So, the tangent line is actually on this plane P, and it is at an angle of a fu meaning
[16:09] the tangent of the angle, the tan of the angle, which it makes with L is fu of a comma b.
[16:15] So, parsing that out, what it means is, if on that line you move a unit distance, which
[16:21] means that you move by that unit vector then the z coordinate will move by fu a comma b.
[16:29] So, what that means is, just to put that in perspective, what that means is that the parametric
[16:39] equations will be given by xt is a plus tu1, yt is d plus tu2. So, this you expected because
[16:49] when you project that line down the tangent line down you will get this line L, and we
[16:54] have written down the parametric equations for that. So, the question is what happens
[16:58] to zt.
[16:59] And zt, as we just saw, if you move a unit distance, which means if t is one so that
[17:06] means you're moved by that unit vector then the z coordinate will move by fu of a comma
[17:14] b. So, then I can write this, as f of a comma b plus t times fu of a comma b, so these are
[17:27] the parametric equations for the tangent line.
[17:33] Now you can rewrite this in various ways. For example, you can rewrite this in the following
[17:45] form x minus a by u1 is y minus b by u2 is z minus f of a comma b by fu of a comma b.
[17:58] Of course, you assume that these are non-zero, if they are 0 there is a way of interpreting
[18:02] this, etc. So, this is called the symmetric equations for the line. Not very important,
[18:09] but I am just mentioning it. And the other way of writing it is the way we have viewed
[18:16] this as an affine flat and that is really the very interesting.
[18:23] So, what we are saying is that, this line is a line passing through a comma b comma
[18:33] f of a comma b, so xt, yt, zt just to rewrite this is a comma b comma f of a, b. So, this
[18:47] is a point plus t times u1 comma u2 comma fu of a comma b. And what is this saying?
[18:56] This is exactly corresponding to the equation here.
[19:01] So, again this is, so this line is in affine flat, it passes through a comma b comma f
[19:08] of a comma b that is why I have translated it by this point. And if you translate it
[19:12] back to the origin, what line do you get, you get the line passing through u1 comma
[19:17] u2 comma f of fu of a comma b. Why is that? Because the line here was u1 comma u2 comma
[19:24] 0, it was a line passing through u1 comma u2 comma 0.
[19:28] And the line that you have your makes an angle of theta where tan theta is fu of a comma
[19:38] b. So, if you translate that you get this same line here and that is what it say that
[19:44] it is the line passing through this vector here, that is exactly what we mean by the
[19:51] derivative. So, this explains why we get this line. So again, this is the vector form of
[19:58] you can often called the vector form.
[20:03] So, these are the equations of the tangent line. So, I hope this explanation shed some
[20:09] light on how we obtain these tangent line equations. So, let us see a couple of examples
[20:14] so that we can make this concrete.
[20:17] So, let us compute some of these things in the at the mentioned points and in the mentioned
[20:23] directions. So, let us look at the function x plus y and the tangent at 1 comma 1 in the
[20:29] direction of 1 comma 0. So, how do I get this? So, for this, I have to first find the directional
[20:38] derivative.
[20:39] So, let us find the directional derivative. So, the directional derivative, so first I
[20:45] should find del f del x, which is actually what this is at 1 comma 1. So, add x comma
[20:53] y del f del x is just 1. So, her and then, so what I want here is, so this is exactly
[21:07] fu because u is 1 comma 0, so this is fu at any point so I am particular at 1 comma 1.
[21:16] So fu at 1 comma 1 is 1 and now we can write down the equations.
[21:21] So, maybe, let me do it in the vector form that is the easiest. So, in the vector form
[21:28] it is xt, yt, zt is  a comma b comma f of a, b, so f of a, b is
[21:39] 1 because a and b are 1 respectively. So, f of 1 comma 1 is two, plus t times u1 comma
[21:48] u2 which his up here, comma fu of a comma b, fu of a comma b we have computed as 1,
[21:54] so this is what we get. So, the other way of writing this is to say that xt is 1 plus
[22:03] t, yt is 1, and zt is 2 plus t.
[22:16] So, and now you can try and visualize this in GeoGebra. I will encourage you to do that.
[22:24] Let us do the next one, which is f of x, y is xy. We actually saw this example a few
[22:32] minutes ago. So here, we have to compute this in the direction of 3 comma 4, so first, we
[22:38] need a unit vector in that direction.
[22:39] So, what is a unit vector in that direction? Well, you can compute it is 3 by 5 comma 4
[22:46] by 5, then we need to compute what is fu of 1 comma 1. So, to do that let us use since
[22:53] it is a nice function, I can use my gradient formula. So, what is the gradient of f at
[23:00] x comma y it is so differentiating with respect to x, this is y with respect to y it is x,
[23:09] so gradient f at 1 comma 1 is just 1 comma 1 again.
[23:16] And then fu of a comma b is so fu of 1 comma 1 is one times u1, so one-times 3 by 5, plus
[23:27] 1 times 4 by 5, which is 7 by 5. So, now I can write down my equations. So, in the parametric
[23:39] form or in the vector form I get xt, yt, zt is the point, so 1 comma 1 comma f of the
[23:50] point, so which is 1 again, because f of 1 comma 1 is 1 plus t times u1 comma u2, 3 by
[23:59] 5 comma 4 by 5 comma fu of 1 comma 1, which is 7 comma 5, 7 by 5.
[24:10] So, which gives us 1 plus 3t by 5 comma 1 plus 4t by 5 comma 1 plus 7t by 5. And from
[24:28] here, you can get the parametric form. So, I hope you can see it is not at all difficult
[24:35] to compute these once we know how to do a directional-derivatives, fine. The final example
[24:41] is you have sine of x, y. I think, we have computed this before.
[24:47] So, in the direction of 1 comma 2. So first what is a unit vector? So, this is u is 1
[24:53] over root 5, 1 comma 2. And then what is the gradient? So, the gradient of f at x, y is
[25:03] y times cosine x, y comma x times cosine x, y. So, if we compute this at pi comma 1, we
[25:12] get a gradient of f at pi comma 1 is cosine of pi, which is minus 1 and then pi times
[25:30] cosine of pi, which is minus pi.
[25:34] So, fu of at pi comma 1 is minus 1 times a 1 by root 5, plus minus pi times 2 by root
[25:53] 5, which is some fairly nasty looking expressions. So, minus 2 pi minus 1 by root 5. So, this
[26:02] is fu of pi comma 1, and now we can easily write down what is the vector form of this
[26:10] tangent line.
[26:11] So, xt, yt, zt is you take your points, so pi comma 1 comma evaluate the function at
[26:16] this point, sine of pi, sine of pi is 0 plus t times u1, sorry u1 is 1 by root 5 not 1
[26:33] comma 2 by root 5, comma minus 2 pi minus 1 by root 5, and now you can get the parametric
[26:40] form as well. So, I hope these examples are somewhat illustrative of how to compute these
[26:49] tangent lines.
[26:50] So, let us now go ahead and do the same thing for general functions of n variables. So,
[27:01] we did this in two variables because it is easy to visualize this in terms of pictures,
[27:06] but now we can do this for n variables.
[27:09] Now, we cannot really visualize this any longer, but the ideas are exactly the same. So, suppose
[27:17] you have a function f of x tilde, which is defined on a domain D in Rn containing some
[27:21] open ball around your point a tilde you take a line restrictive f to that line passing
[27:26] a tilde that is, and since it is a function of one variable, we can consider the tangent
[27:31] to f at a tilde over L as before.
[27:34] So, if the line L is in the direction of the unit vector u, then the tangent if it exists
[27:39] will be the line with slope fu of a tilde and passing through the point a tilde comma
[27:43] f of a tilde. And from here we can find out the equation of the line.
[27:49] So, how do we do that? So, this is very similar to the two-variable case. And what we can
[27:57] do is now suppose, I have n variables. So, the n plus 1th variable, let me denote by
[28:05] xn plus 1. So now, I have or let me denote the n plus 1 variable by z. So, the first
[28:16] n plus 1 variables are x1, x2, xn and the n plus 1th variable, which we are using to
[28:27] measure the function, let us call that z. So, z is the variable in which we are measuring
[28:38] the function.
[28:43] So, then, exactly the same way as we have done for the previous case, we can look at
[28:56] the line passing through the point a tilde. So, a tilde is a1, a2, an, and which is in
[29:07] the direction of the unit vector u. So, u is u1, u2, un. So, the line through a tilde
[29:22] in the direction of u is for the parametric equations are x of t, so xi of t is ai plus
[29:40] t times ui. So again, a line passing through u1, u2, un it will be t times u1, u2, un and
[29:51] now you are translating it by the vector a.
[29:55] So, that is for i that this happens. So, in terms of the vector form. And of course, I
[30:01] have to also say what happens for the coordinates z, so z is 0. So, in other words, in the coordinate
[30:07] form this is x tilde of t comma z of t is a tilde comma 0 plus t times u comma 0.
[30:21] So, z is not playing any role, because everything is right now it is still the line in the x1,
[30:30] x2, xn space. So, now, this line, I want to take the line which is at an angle of theta,
[30:40] where theta is tan of theta is fu of a tilde. And once again, what that means is, so therefore,
[30:49] the tangent line to f at a tilde above L, so if I call this above line L, so this this
[31:02] line I am calling L.
[31:08] So, above L is, so the first n coordinates remain the same and then for z we know how
[31:19] much it jumps. So, if x the first n coordinates move by a unit vector then z moves by fu,
[31:26] this is exactly what we mean by rate of change. So, that means what we will get is it x-tilde
[31:32] of t comma z of t is equal to a tilde comma f of a tilde plus t times u comma fu of a
[31:45] tilde.
[31:48] And now you can write down the parametric form. So, this is the vector form. So, for
[31:51] the parametric form you will have xi of t is ai plus t times ui, exactly as we had for
[31:59] the line L and the remaining coded is a t, so for zt we will have f of a tilde plus t
[32:08] times fu of a tilde. So, we can write it in either which way, the vector form or the parametric
[32:14] form.
[32:15] Let us do an example. So, this might make it easier to view. So, what you do remember
[32:20] is that these are the two forms for the tangent line. So, either this which is the vector
[32:29] form or the second one, which is the parametric form. So, you have f of x, y is, so you have
[32:36] f of x, y, z is x, y, plus y, z plus z, x and let us see what is the tangent at 1,1,1
[32:42] in the direction of minus 1 minus 2,2. So first, we will compute the unit vector. So,
[32:47] if you compute the unit vector that is one-third times minus 1 comma minus 2 comma 2.
[32:55] So now, we need to know what is the directional derivative in this direction, at the point
[33:03] 1 comma 1 comma 1. So, for that we need the gradient. So, let us compute what is the gradient
[33:10] of x, y, z. So, the gradient of x, y, z is y plus z, z plus x, x plus y. So, at 1 comma
[33:22] 1 comma 1. This is 2 comma 2 comma 2. So, from here, we can compute the vector equation
[33:30] so that is going to be xt, yt, zt. I am using zt here, already.
[33:37] So, the function, let us view it in terms of u, so that is a last variable. So, ut,
[33:47] this is the point which is 1 comma 1 comma 1 comma the function evaluated at 1 comma
[33:58] 1 comma 1, which is 3 plus t times the unit vector 1. So minus one-third, minus two-third
[34:11] comma fu. And what is fu? So, I have just computed the gradient. So, what is fu? So,
[34:19] fu at 1 comma 1 comma 1 is gradient dot with u, so that is 2 comma 2 comma 2 dot with one-third
[34:30] minus 1 comma minus 2 comma 2, so which is minus two-third.
[34:36] So, here I will get minus two-thirds. So, the vector equation will be xt is 1 minus
[34:47] t by 3, yt 1 minus 2t by 3, zt is 1 plus 2t by 3 and ut which is what represents the function
[35:04] that is 3 plus or 3 minus 2t by 3. So, this is very easy. Once we know what to compute,
[35:14] it is very easy to actually compute it. Of course, we have implicitly used here that
[35:19] we know that the gradient is continuous, which is why we can compute the directional derivative
[35:27] fairly easily.
[35:30] So, let us now add a word of caution, because from here, it may seem that all is hunky dory.
[35:38] So, let us remember that tangents need not always exist. So, we have seen this even in
[35:43] one dimension. So, if you take f of x, y is x, y by x squared plus y squared, if x, y
[35:50] is not 0, 0, and 0 of x, y is 0, 0 we know that at the point 0, 0 there is some problem.
[35:55] So, we have seen in this example that the partial derivatives exist, so gradient f at
[36:02] 0, 0 well, for u1, comma u2 is 0 if it is one of the unit vectors in the x or y direction
[36:20] is e1 plus minus e1 or plus minus e2, but it does not exist otherwise.
[36:29] And my bad, this is f sorry, I meant to say fu of at 0, 0. And so, once we know that the
[36:43] partial derivative does not. The directional derivative in the particular direction does
[36:47] not exist, we know from our one variable calculus that the derivative of a one variable function
[36:53] exists is precisely the same as saying that the tangent line exists otherwise, there is
[36:58] no notion of a tangent line.
[37:00] There is no line, which captures the behavior of the instantaneous direction. So, that means
[37:06] the tangent lines in all directions other than
[37:21] along the x or y axis at 0, 0 do not exist, that is exactly what it means. Let us look
[37:35] at the function mod x plus mod y, this is maybe even crazier. And here, it is not going
[37:41] to exist for many, many directions.
[37:43] So, for most directions or let us say at for many directions at many points, the tangent
[38:02] link will not exist. I will suggest you do the algebra yourself, but instead, we look
[38:13] at a picture of this graph and I think you will appreciate what I mean.
[38:17] So, here is a picture of the graph of this function. This is the function mod x plus
[38:24] mod y, and you can see it has lots and lots of corners, it has faces, and then it has
[38:29] corners. So, if you are along a face then then maybe you have a chance that a tangent
[38:34] does exist because that will be like some kind of a constant function, but if you move
[38:38] your plane even a little that will be a lot of trouble because then you will have lots
[38:43] of corners and then the tangent may not exist. So just to give you an idea of what I am saying
[38:49] here let us intersect this with some plane.
[38:54] So, if I look at the corresponding graph, you can see how it looks like. I will remove
[39:01] the graph of the function, here is how it looks like. You can see there is lots of edges,
[39:07] and it is not even at some point it is even becoming, it is not even touching each other
[39:13] and there are corners at various places. And as we move the plane, you will see that the
[39:18] graph has lots of problems.
[39:20] So, let us switch this animation on, and you can see, it looks very much like the mod x
[39:26] is mod y. See, it always has some jagged part. So, if you are at those points you will have
[39:33] trouble. So, I hope this animation convinces you that there is a lot of places where the
[39:42] tangent and there are a lot of directions that in which the tangent will not exist.
[39:46] So, we can ask when do all the tangents exist? And so, this is equivalent to asking when
[39:51] do all the directional derivatives exist? And this is a question that we actually know
[39:55] the answer for. So, if f of x1, x2, xn is a function defined in our domain D in Rn containing
[40:00] some open ball around the point a tilde, then we have this wonderful theorem, that if the
[40:05] gradient exists and is continuous on some open ball around the point a tilde then for
[40:09] every unit vector u, the directional derivative fu of a tilde exists and equals gradient f
[40:15] of f at a tilde dot with u. And this says that the directional derivative exists, and
[40:23] we have a formula to compute it, and that exactly means that the tangent exists in that
[40:28] direction, and that we can write down its equation, which we have done a few slides
[40:33] ago.
[40:34] So, conclusion is that all the tangents at a point a tilde exist when gradient f exists
[40:40] and is continuous on some open ball around the point a tilde. And once that happens,
[40:44] we know how to write down the equation of the tangent line. Thank you.