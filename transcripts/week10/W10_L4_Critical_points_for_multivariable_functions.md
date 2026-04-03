# W10_L4: Critical points for multivariable functions

**Week:** Week 10
**YouTube URL:** https://www.youtube.com/watch?v=9pciPOO19wQ

---

## Transcript

[00:14] Hello, and welcome to the Maths 2 component of the online B.Sc. program on data science
[00:18] and programming.
[00:19] This video is about critical points for multivariable functions.
[00:22] So, we have studied the notion of critical points for functions of single variable.
[00:26] Let us recall what that was.
[00:28] So, for functions of one variable, a point a is called a critical point of a function
[00:32] fx, if either f is not differentiable at that point or f prime at a is 0.
[00:38] So, if f is differentiable at a point of local extremum, it satisfies that f prime a is 0
[00:45] and so every point of local extremum is a critical point.
[00:48] This is exactly what we used in order to find the points of local extremum.
[00:52] So, we set f prime of the function to 0, calculated what are all the points, what are the critical
[00:58] points, and in amongst them, we did something further in order to determine what kinds of
[01:04] points they were.
[01:05] So, here is an example.
[01:07] We had seen the same picture when we did that as well.
[01:11] So, we can see here that in this picture, we have several points of local extremum.
[01:19] For example, there is a point over here, which is a point of local extremum, close to minus
[01:26] 1.5.
[01:27] There is a point close to 2.
[01:29] So, these are both local minimums, minima.
[01:36] And then there is a point between 1 and 1.5, which is a local maximum.
[01:43] And unfortunately, we can also see that there is another point, which is point 0, which
[01:48] is what we had called saddle point.
[01:51] So, not every critical point is a point of local extremum and this is why we needed refined
[01:57] tests or more other ways of handling critical points in order to determine which of these
[02:03] are actually local maxima or local minima, because some of them can also be saddle points.
[02:09] So, what is the saddle point?
[02:11] It is a critical point which is not a point of local extremum.
[02:14] So, here, as an example, for 0, what happens is, f prime is 0 because you can see that
[02:21] the tangent line is actually the x axis.
[02:27] But it is clearly not a point of local extremum, because on the left, you have points for which
[02:34] the values are, f of those values are less than 0 and on the right, they are bigger than
[02:41] 0, and at 0 it is equal to 0.
[02:44] So, this was a summary of what we did for functions of one variable.
[02:49] Of course, we had refined tests.
[02:50] For example, we went beyond this and after critical points we also looked at the second
[02:55] derivative and based on that we could classify them in some cases.
[03:00] So, for multivariable functions, we want to do something similar.
[03:05] So, let us start reviewing what are points of local extrema for multivariable functions?
[03:11] So, let f of x be a function defined on a domain D in Rn, and suppose you have a point
[03:16] a belonging to this domain D. The point a is a local maximum or a point of local maximum
[03:24] of f if for some open ball B containing this point a for all points in this open ball B
[03:31] which belong to the domain f evaluated at those points is less than or equal to f evaluated
[03:37] at a.
[03:38] So, you want to construct a ball so that within this ball for all those points on which f
[03:44] is defined, f of a is the largest.
[03:47] So, this need not be a ball centered at a, it could be a ball which is containing a.
[03:54] So, but of course, if you can create such a ball you can always create one centered
[03:58] at a.
[04:00] Similarly, the point a is a local minimum.
[04:03] If the same thing happens except that now f of a is the smallest value within that set.
[04:08] So, remember that for one variable we had open intervals.
[04:13] We said, if on a small open neighborhood, the point has the least or the largest value.
[04:19] So, here instead of intervals we have the open ball.
[04:23] So, in R2 you will have a disc.
[04:26] In R3 you will have a, you will actually have a ball, meaning a sphere.
[04:32] And in Rn, of course, it is the definition, meaning all those points which are at a fixed
[04:37] distance from or distance less than a particular number around one point.
[04:44] So, such a thing so, the local maxima are indeed, locally maximum values.
[04:52] The local minima are indeed locally minimum values.
[04:57] And a local extremum is either a local maximum or a local minimum.
[05:00] So, these are the definitions as far as multivariable functions are concerned, exactly mirroring
[05:05] what happens for one variable functions.
[05:07] So, for one variable functions, we just saw that the derivative is always 0 at a local
[05:12] extremum if it exists.
[05:14] And the idea there was that if you are at local extremum, then the tangent is parallel
[05:23] to the x-axis.
[05:26] So, for the local extrema in the multivariable situation, you would expect something similar.
[05:36] So, the notion of tangent plane or tangent hyperplane is as we saw what replaces tangent
[05:44] line.
[05:45] And as we also observed, the tangent hyperplane or the tangent plane is the equation of that
[05:54] is governed by the gradient function.
[05:56] And we have also seen, when we did the behavior of gradients, that gradients mirror, the properties
[06:03] of gradients mirror that of derivatives for one variable functions.
[06:06] So, it is natural to think that the role of f prime will be played by the gradient.
[06:12] So, let us look at an example first to observe what happens to the tangent plane and what
[06:19] happens to the gradient.
[06:21] So, let us look at the function sine of x, y.
[06:23] So, for this function, so here is the graph of that function.
[06:28] We have seen this graph several times before.
[06:30] And the reason I have chosen this function is because for this function, it is very clear
[06:33] what are the local extrema.
[06:36] So, the sine value takes maximum value 1 and minimum value minus 1.
[06:41] And you can see that when you are at 1, so there is this ridge over here.
[06:46] So, all those values are the values 1, so those are going to be local maxima.
[06:53] And in fact, they will be global maxima, meaning they are maximum amongst all values and the
[06:58] function takes.
[06:59] So, in particular, their local maxima, and let us see what happens to the tangent plane
[07:03] at these points.
[07:04] Let us choose a point at which we know this local maximum occurs.
[07:10] For example, if you look at the function sine of x, y, we know that when x, y is pi by 2,
[07:16] then it takes value 1.
[07:18] So, if I take x to be pi by 2 and y to be 1, then that is going to be a point where
[07:23] you will have a local maximum, and the function value there is 1.
[07:28] So here is that point that is the point a, pi by 2 comma 1 comma 1.
[07:33] And let us ask what happens to the tangent plane at that point.
[07:37] So, for that, we will see how all the tangent lines behave.
[07:40] So, if you take a tangent line at that point, let us see how that behaves.
[07:46] So, here is a tangent line in the direction of the unit vector u1 comma u2.
[07:52] I hope you can see that it is indeed a tangent line.
[07:57] And, as I vary, u1 and u2 this tangent line is going to vary.
[08:02] So, here is how it varies.
[08:05] So, it is indeed tangent to the graph.
[08:07] I hope that is apparent from the picture.
[08:10] And if I remove this graph, so if I remove, let us see it like this, you can see it is
[08:17] tangent to the graph.
[08:19] It is touching, it is satisfying the idea that it touches the function at that point.
[08:25] And if I remove the graph now, you can see it varies in the plane.
[08:29] And what is that plane, that plane is exactly parallel to the x, y plane.
[08:33] So, that plane is, in fact, in this case, it is a plane z is equal to 1.
[08:37] So, we can play it like this.
[08:39] Now, they, from this perspective, they are all lines, and you can see that this line
[08:44] is varying on that plane.
[08:46] So, it is on this plane.
[08:48] So, what this picture tells us is that as in the one dimensional case where we had the
[08:55] situation that the local extrema, the tangent lines, if they exist were parallel to the
[09:03] x axis, so for the two variable case, they will be parallel to the x, y plane, and in
[09:08] general, you expect them to be parallel to the x1, x2, xn plane.
[09:11] So, let us study this in terms of the gradient, because after all the gradient determines
[09:17] the tangent plane or the tangent hyperplane.
[09:22] So, let us consider the gradient vector at points of local extrema.
[09:27] So, let f of x be a function defined on a domain D in Rn containing some open ball around
[09:31] a point a of local extremum.
[09:34] Restrict F to a line L passing through a and view it as a function of one variable on L.
[09:42] Then a is a local extremum for the restricted function on L and hence the directional derivative
[09:47] of f in the direction of the line L at a is 0.
[09:49] This is exactly what we saw in that example for sine x, y when we saw the directional,
[09:57] the tangents along each line in various directions.
[10:01] So, they were all, the directional derivative was 0.
[10:04] And as a result, they had no inclination with respect to that plane.
[10:07] So, they were all flat.
[10:08] So, they were parallel to the x, y plane.
[10:11] So, in particular, those partial derivatives which exist at a must be 0.
[10:17] So, if all the directional derivatives which exist must be 0, in particular, the partial
[10:21] derivatives, assuming they exist, must be 0.
[10:25] And so the conclusion is, if gradient f exists for a local extremum a, then gradient f of
[10:32] a is 0.
[10:33] I will repeat that, if the gradient exists at that point, then the gradient must be 0.
[10:39] And when we say 0 here, we mean the 0 vector.
[10:42] So, this 0 here is the 0 vector.
[10:45] So, this is the vector.
[10:48] So, this gives us one way of understanding how to obtain local extrema.
[10:55] So, what we can try and do is set the gradient to 0 and then look at all those points which
[11:00] we obtain.
[11:01] And then out of them, some of them may be local extremum.
[11:04] This is exactly the strategy followed for the one variable case and such points are
[11:11] called critical points.
[11:12] So, point a is called a critical point of a function f of several variables, if either
[11:18] the gradient does not exist or the gradient exists and equals 0.
[11:23] Again, 0 here means the 0 vector.
[11:26] So, let us look at an example.
[11:29] So, what are the critical points of this function f of x, y is x square plus 6xy plus 4y square
[11:34] minus plus 2x minus 4y.
[11:37] Well, so this is a very nice.
[11:39] It is a polynomial function.
[11:40] So, here, there is no issue about gradient not existing.
[11:43] So, let us compute what are the partial derivatives.
[11:46] So, del f del x is 2x plus 6y plus 2, del f del y is 6x plus 8y minus 4.
[12:06] So, for the critical points, I set the gradient function to 0.
[12:10] So, the gradient function is the, at x, y is the tuple, 2x plus 6y plus 2 comma 6x plus
[12:23] 8y minus 4, set it to 0, so set gradient of f to 0 and by 0 we mean the 0 vector.
[12:36] So, that is 2x plus 6y plus 2 comma 6x plus 8y minus 4 is 0 comma 0.
[12:48] And now we have to solve these.
[12:49] So, the solutions for these will give us all the critical points.
[12:53] So, how do we solve this?
[12:56] Well, this is a very nice system of linear equations.
[13:02] And we actually know how to solve this.
[13:04] So, let us use Gaussian elimination to solve these system, this system of equations.
[13:09] So, if we do that, we get 2, 6, minus 2 and then 6, 8, 4.
[13:17] Let us divide the first row by 2.
[13:20] So, we get 1, 3, minus 1.
[13:25] Let us use the 1 in the 11 place knock out the 6.
[13:31] So, that gives us 1, 3, minus 1, 0 and then 8, minus 6 times 3, so 8 minus 18 which is
[13:47] minus 10 and then 4 minus 6 times minus 1, so 4 plus is 6 is 10.
[14:02] So, if I divide the second row by 10 or minus 10, I get 1, 3, minus 1, 0, 1, minus and now
[14:18] finally I can, final step I can do R1 minus 3R2, so that gives me minus 1, minus 3 times
[14:32] minus 1, so minus 1 plus 3 which is 2.
[14:37] So, this means x is 2, y is minus 1 and that is exactly the critical point.
[14:44] So, there is only one critical point and it is 2 comma minus 1.
[14:53] So, I hope it is clear how I am computing these.
[14:57] So, you set your gradient vector to 0 and then you will get a bunch of equations to
[15:03] solve.
[15:04] Need not be linear this time we were lucky.
[15:06] And then you have to solve them and the solutions will give you the critical points.
[15:11] Now, there could be lots of critical points.
[15:13] There is no reason for them to be for only one or two critical points to be there.
[15:19] For example, we saw the function sine of x, y.
[15:22] And if you compute the critical points there, we know what the gradient is, I will suggest
[15:27] you set it to 0 and see what happens.
[15:28] So, you will see that you get a bunch of equations.
[15:33] So, one solution is going to be 0, 0, but then there will be tons of solutions corresponding
[15:41] to cosine of x, y is 0, which we know is an infinite set.
[15:46] So, this is how we get critical points.
[15:50] Now, sometimes it may happen that the local extrema are not the critical points, meaning
[15:58] there are more critical points than just the local extrema.
[16:03] So, every local extremum is a critical point that we observed already.
[16:08] Unfortunately, not all of them are, not all critical points are local extrema.
[16:12] Otherwise, we could be happy and not bother to go ahead.
[16:16] So, as an example, here is f of x, y is x cube.
[16:21] So, we have seen the x cube actually, that is an example of a saddle point in one, the
[16:27] one variable situation.
[16:29] And the same thing happens here also, because if you recall how f of x cube, f of x is equal
[16:35] f cube was, it was a function like this, and there was a problem at 0.
[16:40] And now you take f of x, y cube, you are taking the same function but stretching it along
[16:51] the y axis, because y has no role to play as such.
[16:55] So, the entire y axis will consist of points for which the gradient is 0, but they are
[17:02] not local extremum.
[17:03] I will suggest that you check this.
[17:05] So, a saddle point is a critical point a such that the gradient of f at a exists and equals
[17:12] 0, but a is not a local extremum.
[17:14] So, all these points that I just said, along the y-axis, those are all going to be saddle
[17:21] points for the function f of x, y is x cube.
[17:24] So, here is an example of a saddle point, which is what gives it its name.
[17:28] So, this is the function f of x, y is x square minus y square.
[17:34] And if you look at this function, what is happening is on one side, it is like this.
[17:40] And on the other side, it is like this.
[17:42] So, because you have plenty of directions, you can have this weird situation where it
[17:48] is a local minimum along some lines and it is a local maximum along some other lines,
[17:54] and that is exactly what is happening here.
[17:56] So, it is, gradient is 0.
[17:58] So, in fact, all the directional derivatives are 0.
[18:01] And what is happening is that in each direction, it is either a local maximum or a local minimum.
[18:10] But globally, it is neither, neither a local maximum, nor a local minimum.
[18:15] And this function or this picture actually gives us why it is called a saddle point,
[18:22] because it looks like a saddle of a horse.
[18:24] Let us look at a couple of other examples of saddle points, one such is going to be
[18:27] at when x is 0 and y is 0 for the function sine of x, y.
[18:32] So, I will zoom in and then maybe you can see what is happening.
[18:36] If I go in here, now this is very close to 0, 0.
[18:40] And let us see if I can raise this up.
[18:43] So, you can see what is happening.
[18:45] So, over here in one, on one direction, this is a local minimum, and you can see that very
[18:51] clearly.
[18:52] But on the other side, the function is actually decreasing.
[18:56] So, over here, it is a local maximum.
[19:01] And so this function is a, this function as a saddle point at the point 0, 0.
[19:07] So, if you take the line y is equal to x, then the function is like sine of x square.
[19:14] So, x square is always positive as we know.
[19:18] So, on that line, the sine is going to increase from 0 onwards.
[19:22] So, on both sides it will increase.
[19:25] On the other hand, if you take the line y is equal to minus x, then you are going to
[19:30] get sine of minus x square and which is minus sine x square, which will always be negative
[19:35] when between, when x is between 0 and pi by 2.
[19:40] So, it will, on the other side, it will decrease.
[19:44] And so this is a saddle point as a result.
[19:48] So, it is a point at which the gradient is 0, but it is not a local extremum.
[19:55] So, now that we have identified the critical points as local minimum, local maximum or
[20:04] saddle points, we can ask how do we identify them and so for that we will, like the function
[20:11] of one variable where we add a second derivative test, there will be something similar for
[20:18] the function of many variables and we will develop theory for that in the next video.
[20:26] So, the final topic that we will do in this video is the notion of absolute or global
[20:34] extremum.
[20:35] So, suppose we have a function defined on a domain D in Rn and suppose we have a point
[20:40] in D. So, this point is an absolute maximum or global maximum if the value of f assumed
[20:46] on that point that is f of a is bigger than f of x for all x within that domain.
[20:51] So, notice here that we are not seeing local here.
[20:53] So, for local maximum we said on some small ball it has a largest value that is not what
[21:00] we are seeing here.
[21:01] We are saying across the entire domain it has the largest value.
[21:05] Similarly, for absolute minimum or global minimum, it has the smallest value amongst
[21:11] all points in the domain.
[21:12] So, here are two examples.
[21:15] These are the prototypes of absolute maximum and absolute minimum.
[21:20] So, this is a function of x square plus y square and the point 0, 0 is a global minimum
[21:28] or the function attains a global minimum at the point 0, 0.
[21:36] And this is the function minus x square minus y square and 0, 0 is a global maximum.
[21:49] This is clear because we know that squares are always positive.
[21:52] So, from there it is clear that these are global minimum and maximum respectively for
[21:58] these functions.
[21:59] So, these are prototypes of global maxima.
[22:05] So, then how do we find, how do we know they exist and how do we find them.
[22:11] So, for the existence similar to the one variable case, where we restricted ourselves to what
[22:16] we called a closed and bounded interval, here we have a notion called closed and bounded
[22:23] domain.
[22:24] So, a domain D in Rn is called closed if it contains all its boundary points.
[22:28] So, what do we mean by boundary points.
[22:30] So, a boundary point is one which is on the boundary of that domain.
[22:34] So, this is visually very clear what we mean by the boundary of the domain.
[22:38] There is a technical definition let us not get into that.
[22:41] So, domain D is Rn is called bounded if it is contained inside a ball around 0 with finite
[22:45] radius.
[22:46] So, what this means is it is bounded means it can vary around but it should be like this.
[22:51] So, there is some huge ball.
[22:52] It could be very, very, very large.
[22:55] And the domain lies entirely inside that.
[22:58] It could have radius as large as you want maybe 1,000 or 20 million whatever, but there
[23:03] is some domain, there is some ball of as large radius as you want inside which this domain
[23:12] lies.
[23:13] So, it does not go out.
[23:14] So, for example, the x, y plane is not bounded, because it shoots off.
[23:19] There is no ball in which, there is no disc in which you can contain that or if you take
[23:24] just the let us say a as a cone inside that, say the first quadrant in the x, y plane that
[23:36] is not bounded.
[23:37] So, you want something which is inside a large circle or a large disc rather.
[23:44] So, here is the main fact, if the domain D is closed and bounded and f is continuous
[23:50] on D, continuity is important, then the global maximum and minimum must exist on this domain.
[23:57] So, closed and bounded guarantees the existence of the global maximum and minimum.
[24:03] There could be more than one point.
[24:06] So, there could be several points in which the same thing happens.
[24:09] For example, we saw the function sine of x, y, several points where it takes the value
[24:13] 1, several points where it is the value minus 1.
[24:16] So, note that the global maximum and minimum are in particular local maxima or local minima,
[24:22] unless they are on boundary points.
[24:26] And this statement is what gives us the key to finding them.
[24:29] Thus, to find the global maximum and minimum we find the critical points inside the domain
[24:34] D. So, remember, critical points are inside a domain.
[24:37] We have to have, the critical points are defined inside where there is a ball around this point
[24:45] lying inside D.
[24:46] So, then that leaves us with boundary points.
[24:49] So, you restrict your function now to the boundary.
[24:52] It is in one, boundary means it is one dimension less.
[24:56] So, you found find the critical points on the boundary.
[25:01] Then the boundary itself may have a boundary.
[25:03] So, you find the critical points on that, and then you check, so you continue this process.
[25:07] So, if you are in n dimensions, you have to drop dimension all the way till you reach
[25:12] a point.
[25:14] And then you check the value of f on all the critical points that you obtain.
[25:19] And amongst them you choose whatever is maximum or whatever is minimum those will be of global
[25:24] minimum or maximum.
[25:25] We have done this exactly this process when we did the one variable functions, when we
[25:32] check for critical points within the open interval, and then we checked on the boundary
[25:36] points.
[25:37] Let us do an example to set ideas.
[25:41] So, find the absolute maximum and minimum of the function, f of x, y is x cube plus
[25:46] y cube minus 3x minus 3y square plus 1 over the square with vertices 0, 0, 2, 0, 2, 2,
[25:53] 0, 2.
[25:54] Let me first draw this square.
[25:55] So, here 0, 0, here is 2, 0, here is 0, 2, here is 2, 2, and here is 2 comma 0.
[26:11] Let us what happens for this.
[26:16] So, now, here, there is an open part inside.
[26:22] So, this is the open part of the square.
[26:25] So, first, we have to check what happens, what are the critical points inside this for
[26:29] this function, then we have to restrict this function on each of the edges.
[26:34] So, then we will restrict this function on this edge, this edge, this edge and this edge,
[26:42] see what happens.
[26:43] And then finally, we have to check what happens to the functions, to the function on these
[26:49] four points.
[26:50] That is the strategy.
[26:51] That is what we are going to do.
[26:53] Let us start with what happens inside the square.
[26:57] So, for that, we will find gradient.
[26:59] Now, first of all, this is a polynomial function.
[27:01] So, all the issues with, whether partial derivatives exist, etcetera, they do not play any role.
[27:08] So, we do not have to bother about points where gradient does not exist or they are
[27:14] not differentiable when you view them on the sides, etcetera.
[27:18] So, that is not an issue.
[27:20] So, let us write down what is the gradient.
[27:22] So, this is 3x square minus 3 comma 3y square minus 3, minus 6y.
[27:31] Let us evaluate, let us set this to 0 and see what are the critical points.
[27:40] So, 3x square minus 3 is 0, and 3y square minus 6y is 0, let us try to solve this.
[27:50] So, this is saying x squared minus 1 is 0.
[27:53] So, x square is 1.
[27:55] The other equation is y squared minus 2y.
[27:59] So, y minus y times y minus 2 is 0.
[28:04] So, we know the solutions for these.
[28:06] So, the possible solutions are x is plus minus 1 and y is 0 or 2.
[28:15] These other possible solutions.
[28:16] Now, let us see which of these lie inside our square.
[28:21] So, when x is minus 1 that does not lie inside our square, so we can discard that.
[28:27] So, the critical points coming from, coming inside here are the points where the x coordinate
[28:35] is 1, the y coordinate is 0 or the x coordinate is 1 and the y coordinate is 2.
[28:41] So, this point 1 comma 2 actually lies on the boundary, but we can consider it anyway
[28:47] just to check, although in principle this is not a critical point when we restrict to
[28:52] the open part, but we can keep it anyway.
[28:55] So, these are the critical points for the square.
[29:00] So, this is one set of critical points.
[29:03] Now, let us restrict it to the boundary.
[29:05] So, first, let us do it on the bottom boundary.
[29:12] So, that is where y is 0.
[29:15] So, now we want to look at the function f of x comma 0, where x is between 0 and 2,
[29:25] actually, strictly between, but again, we can be considerate and take the end points
[29:34] as well because anyway we are going to take them.
[29:37] So, f of x comma 0 is x cube minus 3x plus 1.
[29:44] So, the derivative let us set that to 0.
[29:48] That means 3x square minus 3 is 0.
[29:51] Well, we have solved this equation above.
[29:53] So, that means we get x is plus minus 1.
[30:00] So, which means we should take the points, 1 comma 0, minus 1 comma 0 does not lie in
[30:07] the, in this interval.
[30:10] So, 1 comma 0 is already there.
[30:13] So, these two points, actually both these points are on the boundary.
[30:16] So, we will take them anyway.
[30:20] So, this is already taken care of.
[30:23] Similarly, we can take the top edge.
[30:26] So, for that the function is f of x comma 2.
[30:33] So, the function is x cube minus, x cube plus 8 minus 3x minus 3 times 4, which is minus
[30:46] 12 plus 1, that is x cube minus 3x and plus some constant, does not really matter, so
[30:56] minus 3.
[30:57] So, I set it to 0.
[31:00] And again, I get the same thing.
[31:03] So, but these are not on the boundary.
[31:06] So, I do not have to bother about this.
[31:09] So, I do not get anything here.
[31:12] Let us do the two ages, two other ages.
[31:15] So, we have f of 0 comma y between 0 and 2.
[31:20] So, if we do that, we get y cube minus 3y square plus 1.
[31:28] But actually, we have solved this as well.
[31:30] So, this gives us 3y square is minus 6y is 0, so y times y minus 2 is 0 which means y
[31:43] is 0 or y is 2.
[31:45] So, the points that we get from here are 0 comma 0 and 0 comma 2, which anyway we are
[31:52] going to take, so let us add them in 0 comma 0, 0 comma 2.
[31:58] And for the other part, where we have f of 2 comma y, we will get the same function but
[32:06] with a different constant, so plus c, so we will get the same points.
[32:10] So, we have added them in already.
[32:11] So, that means we have taken all the points which are critical points on the inside on
[32:18] each edge and now we will add the boundary points, the corner points as well.
[32:23] So, that is 2 comma 2, 2 comma 0, and the others are already taken.
[32:29] So, these are the six points at which we need to check for maximum or minimum.
[32:34] And if we do that, we get, so if I evaluate that, let us see what we get.
[32:39] So, I had 1 comma 0, I get 1 minus 3 plus 1, so that is 2 minus 3, so I get minus 1.
[32:53] For 1 comma 2 I get 1 plus 8 minus 3, so 9 minus 3 is 6 minus 3 times 2 square, so minus
[33:12] 12 so 6 minus 12 so minus 6 plus 1 so minus 5.
[33:20] For 0 comma 0 I get 1.
[33:23] For 0 comma 2 I get 8 minus 12 plus 1, so minus 4 plus 1 so minus 3.
[33:34] And for 2 comma 2, so I get 8 plus 8 16 minus 6 is 10 minus 12 so minus 2 plus 1, so minus
[33:47] 1.
[33:48] And for 2 comma 0 I get 8 minus 6 so 2 plus 1 so 3.
[33:57] So, the absolute maximum is 2 comma 0, so absolute maximum occurs at 2 comma 0 and absolute
[34:12] minimum occurs at 1 comma 2 and the values are 3 and minus 5, respectively.
[34:21] So, I hope this example explains what you have to do in order to get the absolute maximum
[34:29] and minimum over a closed and bounded domain.
[34:32] Thank you.