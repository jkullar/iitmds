# W9_L5: Continuity for multivariable functions

**Week:** Week 9
**YouTube URL:** https://www.youtube.com/watch?v=_G6UYEZYaGk

---

## Transcript

[00:14] Hello and welcome to the Maths 2 component of the online BSc programme on data science
[00:18] and programming. In this video we are going to talk about continuity for multivariable
[00:22] functions.
[00:23] Let us recall that in the previous video, we have studied the notion of limits for sequences
[00:31] and limits for scalar valued multivariable functions. So, these were sequences in higher
[00:38] dimensions. So, let an tilde be a sequence in RP denote the coordinates of an tilde as
[00:44] an1, an2 up to anp. We say an tilde is limit a tilde is a1, a2 ap if the sequence in the
[00:51] ith coordinate has limit ai.
[00:53] So, which means that if you take the sequences given by each coordinate that converges to
[00:59] some number ai, and you put those numbers into this vector, and then we say an tilde
[01:05] has that element. So, ani in particular has to converge to ai for each i. So, if each
[01:12] of those coordinate limits exists, then the sequence an tilde as a limit, if even one
[01:19] of those fails to exist, it does not have a limit, so limit will not exist.
[01:26] So, we use this idea to define limits for functions at a point. So, let f be a scalar
[01:33] valued multivariable function defined on a domain D in our case is that you have a sequence
[01:40] converging to a tilde. So, that sequence must belong to D. So, if there exists a real number
[01:47] L such that f of an tilde tends to L for all sequences an tilde and this is the important
[01:53] part for all sequences an tilde such that an tilde tense to a tilde, then we say that
[01:58] the limit of f at a tilde exists n equals L.
[02:04] And we have seen examples of these things. So, we denote this by limit X tilde tends
[02:10] to a tilde f of x tilde is L. So, in the previous video, we also studied some properties, and
[02:16] using them how we can find these limits. So, for example, for polynomials for rational
[02:22] functions and so on. We also saw an example where substitution directly does not work.
[02:27] And so, we have to be careful when we find these limits.
[02:31] Let us first define what is the limit of a vector valued function at a point. So, we
[02:37] have seen for a scalar valued function what happens, so vector valued function is a vector
[02:42] of functions. And so, what we basically will do is demand that for each of them, we study
[02:49] what happens.
[02:50] So, let f D to Rm be a vector valued multivariable function defined on a domain D in Rk, a tilde
[02:56] will be a point such that there exists a sequence in D which converges to a tilde if fi is the
[03:03] ith component function of the function f, and in a minute, we will see examples of what
[03:09] I mean. Then fi is a scalar valued function from D to R. And then suppose for each i the
[03:15] limit X tilde tends to a tilde fi of X tilde exists and equals Li. Then we define L tilde
[03:21] to be L1, L2, Lm then limit X tilde tends a tilde f of X tildes is L tilde.
[03:28] So, this is not the definition, but this is what I would call a working definition. And
[03:32] it is equivalent to the original definition, which we would not talk about. So, this is
[03:36] equivalent to as X tilde comes closer and closer to a tilde f of X tilde comes closer
[03:41] and closer to this vector L tilde. Remember now, that f is a vector valued function, so,
[03:48] it will take vectors as values. And so it has to come closer and closer to some vector
[03:52] L tilde.
[03:54] And if for some i, the limit a tilde for fi does not exist, then the limit of f at a tilde
[04:03] will does not exist. So, we have seen this idea already for sequences. For sequences,
[04:08] what did we do, we took each coordinate sequence, and then check for the limit for that. The
[04:15] same thing is happening here for functions. If you have vector valued functions, you take
[04:20] each component and check for the limit.
[04:22] So, let us do a couple of examples. So, here is limit X tildes tends to 1 comma 2, x squared
[04:29] y plus y cubed comma e to the power xy comma x squared minus 1 by y cubed minus 2. So,
[04:36] recall from a previous video that if we had polynomials, we can just substitute. So, the
[04:44] first so this first one exists, so I will write the what is equal to in a minute. So,
[04:51] to check this limit, what do I have to do I have to take each coordinate function, what
[04:54] are the coordinate functions, this is the first coordinate function f1, this is the
[04:58] second coordinate function f2, this is the third coordinate function f3.
[05:02] And then I have asked, let us look at these three functions, what happens for each of
[05:15] these limits? Each of these exists, then you just put that vector together. And that is
[05:33] what this limit is. Even one of them does not exist, this one will not exist. So, for
[05:38] the first one, we have a polynomial. So, we can just substitute, that is what you saw
[05:42] on the in the previous video. So, this is 1 squared times 2 plus 2 cubed, that is 10.
[05:51] For the second one, we saw that e to the 4x y also you can substitute by using that xy
[05:57] is a polynomial and then using the fact that you are composing with the exponential function.
[06:02] So, this follows from the composition property. So, this is e to the power 1 times 2, so this
[06:07] is E squared. And for the third one, you use the quotient. So, let us check that the quotient
[06:13] is. Well, the main problem comes from the denominator. So, the denominator here, the
[06:18] limit is 2 cube minus 2, which is non-zero. So, no problem we can just substitute. This
[06:24] is one squared minus 1 by 2 cubed minus 2, this is 0.
[06:29] So, each of these limits exists. And now you just take these components and put them in
[06:36] their proper place. So, this is the limit. So, I hope it is clear what now the previous
[06:41] slide said, you take each component function check for its limit, once it exists, the function
[06:48] for this and the limit for this entire function exists.
[06:51] Let us look at the second one. So, this is the first component function. This is the
[06:57] second component function. So, for the first component function, you have sin xy divided
[07:05] by xy limit xy tend to 00. So, I want to check what happens to this limit. Well, as we noted
[07:16] in the previous video, if you have things which are not like polynomial rational functions,
[07:24] the way to do them is to try and use the composition law.
[07:29] So here, this is a composition of two functions. The first function is xy. The second function
[07:36] is sin of u. So, as xy tends to 00, this to 0, and as u tends to 0, my bad, this is not
[07:45] sin of u, this is sin of u by u. And as u tends to 0 sin of u by u tends to 1, so this
[07:55] limit is going to be 1, let us see what happens to the second coordinate. So, is x cube minus
[08:04] y squared x divided by x squared plus y squared squared.
[08:09] But in the previous video, we have seen at the end that this limit actually does not
[08:14] exist. So, I suggest you recall this. And so, one of these coordinate functions does
[08:24] not have a limit that means this also does not exist. So, I hope it is very clear what
[08:32] it means for vector valued functions to have limits, basically it boils down to asking
[08:37] for scalar valued functions, what is what the limits are, which are each component fine.
[08:41] So, what is the limit of a function at a point along a curve? So, now we have seen examples
[08:47] of or rules about how to compute the limits of functions at a point that is for scalar
[08:58] valued functions that are at a point if you can write them in terms of other functions
[09:06] that you already know have limits. So, addition, subtraction, products composition quotients
[09:15] if the denominator is nice, so these are these are ways we know of how to prove that a limit
[09:21] actually does exist. How do we know that the limit does not exist?
[09:28] So, we have seen the idea of how to do this in the previous video at the end, when we
[09:35] looked at an example that we just saw in the previous slide. And now we are going to refine
[09:42] that idea. And to do that we are going to talk about the limit of a function at a point
[09:48] along a curve. And this will really generalise what happens in one variable calculus.
[09:53] So, let f be a scalar valued multivariable function defined on a domain D in Rk and a
[09:58] tilde will be a point such that there exists a sequence in D which converges to a tilde.
[10:02] This is our standard hypothesis. Because without this, we do not know how to make sense of
[10:07] limits at that point a tilde. Let C be a curve passing through the point a tilde belonging
[10:13] to the domain D.
[10:14] So, recall that we have studied curves in one variable calculus, so a curve is nothing
[10:19] but something like a wavy line may be something, it could be a circle, straight lines are special
[10:26] cases of curves, but curves can have curvature, they can be curve. So, we want to look at
[10:33] curves, which are passing through that point a tilde and which also belong to the domain
[10:37] D. Except for that point a tilde, a tilde could belong may not belong.
[10:43] The limit of f at a tilde the curve C, I will repeat that along the curve C exists and equals
[10:51] L if for every sequence an tilde contained in C, which converges to a tilde, the sequence
[10:58] af f of an tilde converges to L. So, now what we are doing is, we are saying well, I want
[11:04] to only check for what happens along this curve. I do not for now, I do not care about
[11:09] the function may be defined on the entire, let us say R2, but I only want to see what
[11:14] happens to this function on this particular curve.
[11:17] We have seen this kind of idea, before, when we talked about directional derivatives or
[11:22] partial derivatives, we restricted our attention to a particular line, and then said what happens
[11:28] to the function along that line. Of course, there we talked about rate of change, here,
[11:33] we just want to talk about the function itself, not we are not yet going to rate of change.
[11:38] So, what happens to the function when we restrict it to a curve? So, on that, as you come closer
[11:46] to the point a tilde, do the function values come close somewhere.
[11:51] And if they do, and that is the number L, then we say that the limit of f at a tilde
[11:59] along the curve C exists and is L. So, let us again look at that same example from two
[12:07] slides ago. So, let us look at g of xy is x cubed minus y squared x divided by x squared
[12:13] plus y squared squared. So, limit xy tends to 0, 0 along the x axis, let say. So, along
[12:27] the x axis, the y is 0. So, this reduces to a function of one variable. So, along the
[12:37] xy, to solve this, I will say so. So, I will solve this in a minute.
[12:42] So, along the x axis, the y coordinate is 0. And the hence the function is g of x comma
[13:05] 0. So, it is a function of one variable. And that is really the point of defining this
[13:10] notion of long ago. So, g of x comma 0, which is x cubed, divided by x to the power 4, which
[13:19] is 1 by x. And now we know what happens. So, this limit is exactly limit x tends to 0 1
[13:26] by x, and this does not exist.
[13:29] So, along the curve, y is equal to 0, which is the x axis, this limit does not exist,
[13:37] we could ask the same question about what happens along the y axis. So, limit x y tends
[13:43] to 0, 0 g xy along y the y axis, and you can see that if you look at g of 0 comma y, then
[14:00] then the numerator is 0, the denominator is y to the power 4, so this is 0. And so, this
[14:06] is limit as y tends to 0 of the function 0, so this is 0.
[14:12] So, for g along the curve, which is the x axis, the limit does not exist along the y
[14:21] axis, it is 0, we could do some other curve, you can choose your favourite curve, let us
[14:26] say I choose the curve y is equal to x. So, what happens along that line, so limit x y
[14:32] tends to 0, 0 along y is equal to x.
[14:37] So, in this case, we are asking for a limit as x tends to 0, where you put y is equal
[14:52] to x in the in this expression, so you get x cubed minus x cube are divided by 2x square
[15:05] to the power 2. So, this is again 0. So, this is like limit of x tends to 0 of the function
[15:12] 0 is again 0. So, I hope this this is a, it is clear what we what we mean by the limit
[15:22] along a curve with this example in mind. So, here are the 3 curves for which we computed
[15:32] the limit. So, along two of them it is 0 and along one of them it does not exist fine.
[15:40] So, let f be a So, now what is the connection, this is a real point and this is the most
[15:47] important slide in this video, what is the connection between the limits of a function
[15:52] along curves and the limit of a function? So, the limit of a function we saw was you
[15:57] take any sequence tending to that point A tilde and look at F of A and tilde does it
[16:02] convert somewhere.
[16:03] So, whereas for a curve we are saying you take only sequences on that curve. So, now
[16:11] again let f be a scalar valued multivariable function or usual hypothesis. So, the limit
[16:16] of f at a tilde will exists and equals L precisely when which means, if this happens then whatever
[16:23] is next happens and if that happens then this limit exists and equals L, precisely when
[16:30] for every curves C in the domain D passing through a tilde the limit of f at a tilde
[16:37] along C exists and equals L.
[16:38] So, what are we saying? We are saying that if the limit at a point is L, then whatever
[16:47] curve you choose the limit along that curve for that function will also be L the other
[16:54] side if you if for every curve C, as you come close to this point a tilde along that curve
[17:03] the function value comes close to L, the limit is L and this happens for every curve is the
[17:09] same, then the limit of f itself not along the curve, but globally is L.
[17:17] So, this is a very important statement. And the spirit of this statement is for one variable
[17:25] calculus, we did the same thing when we defined limits. In fact, that was the definition we
[17:29] said you come along the curve from the right you come from the left and if they match that
[17:38] was left limit and right limit, then then that is, then whatever value that is that
[17:45] is the limit. So, here we are we have many directions. We have many directions, in fact
[17:51] more than directions, we have many curves.
[17:53] So, you look at all possible curves, via which you can come to that point. So, you trace
[17:58] some curve come to this point ask does the function value tend somewhere. You trace some
[18:03] other curve come to that point asking does the function value 10 to that same something,
[18:09] if for any one of those it does not exist, that is it, you that means the global function
[18:14] value, that limit is not defined. If for all of them, it is some number, it is the same
[18:20] number, then the global limit value is that same number.
[18:26] So, important point is, this is often used to show that a limit at a point does not exist.
[18:31] So, we have seen an example already when we did that example, x cubed minus x squared
[18:35] y divided by x square plus y square whole square.
[18:39] Let us do some more examples. So, this is limit of the function x squared minus y squared
[18:46] by x squared plus y squared xy tends to 0, 0. As you can see, these are all rational
[18:51] functions, wherein you cannot substitute. If you can substitute and get away, go ahead
[18:57] and do that. That is the best possible scenario. Unfortunately, here, you cannot do that. So,
[19:01] we have to really sit and compute. So, what we will do is we will again find what is the
[19:09] limit along the x axis and the y axis.
[19:11] So, along the x axis, so along the x axis means y is 0, then this becomes limit as x
[19:22] tends to 0 x squared by x squared, which is clearly 1 along the y axis, this becomes limit
[19:35] as y tends to 0. So, here x is 1, x is 0. So, you get minus y squared by y squared,
[19:45] which is minus 1 and already these two values do not match. These values do not match and
[19:52] because these two values do not match, this limit, does not exist.
[19:57] How do I know that? Because had the limit existed, then along every curve, you would
[20:02] have had the same limit. And then that that means in particular along the x axis, you
[20:07] would have had that limit along the y axis also, you would have had that limit, but then
[20:11] these values do not match. So, I hope it is clear how we use the theorem on the previous
[20:17] slide.
[20:19] Let us look at this example, where you have limit xy tends to 0, 0 x y by x squared plus
[20:24] y squared. Let us do along the x axis, what happens. So, along the x axis, when here you
[20:38] have to substitute you have y0, so that means you get 0 by x squared plus 0 squared, which
[20:46] is 0, the symmetric, so as you can see about the y axis also the same thing will happen.
[20:54] So, limit as y tends to 0, 0 by 0 squared plus y squared. This is 0.
[21:02] So, unlike our previous case, where we had, we took the two curves, x axis and y axis,
[21:09] and they already gave different limits. Here, for the axis they are matching. So, there
[21:14] is still a chance that this limit exists. So, let us look along the line, y is equal
[21:24] to x. So, along the line y is equal to x, this is you substitute y is equal to x and
[21:30] then take limit x tends to 0. So, this is x squared y, x squared plus x squared, that
[21:38] is half. And these do not match. So, this does not match with either of these two. So,
[21:44] this limit does not exist.
[21:46] So, I hope it is clear what I am doing, I am somehow choosing curves. So, my first possible
[21:53] choices will be lines, so easiest curves or lines. So, I am choosing lines along which
[21:59] these limits do not match. Sometimes what will happen is that for every line, the limit
[22:06] will match. But then you can somehow be smart and choose some other curve.
[22:11] So, if you want to take the general line, you should take, for example, in this example,
[22:18] let us look along the line y is mx. Of course, y is mx covers everything other than the line
[22:25] x is 0, so that we have to make a special case. So, let us see what happens for those,
[22:31] along the line y is equal mx, well you substitute y is equal to mx. So, that means you get x
[22:37] times mx squared divided by x squared plus mx to the power 4.
[22:46] So, this is a mx cube by x squared times 1 plus m squared x squared. And after cancelling,
[22:58] you can see that this limit is 0. So, this limit does exist and is 0, what happens along
[23:05] the line x is 0. So, along the line x is 0, you have to substitute x is 0. So, this limit
[23:11] clearly is 0. So, this is 0 by y to the power 4 is 0. So, you can see that for all the lines,
[23:19] you are getting the same limit. So, this limit really has a very strong chance of existing.
[23:23] And in the tutorial, you will be discussing this in more detail. So, I leave this for
[23:28] now, fine. So, I hope it is clear how to use that previous theorem about the limit of a
[23:36] function along a curve. It is a very important idea. And, and it is very useful in examples
[23:44] like this.
[23:45] So, let us go on to talk about the continuity of a function. So, we have talked about the
[23:50] continuity for one variable functions using limits of functions. And now we are going
[23:56] to do the exactly the same thing for multivariable functions. Let f be a multivariable function
[24:01] defined in our domain D in Rk. And a tilde be a point in D. So, now we want a tilde to
[24:06] be a point in D because we want f to be defined on a tilde such that there exists a sequence
[24:12] in D which converges to a tilde.
[24:14] We still want that condition, f is continuous at a tilde if the limit of f at a tilde exist.
[24:21] And not does it exist, the value of that limit is f of tilde this is what the definition
[24:29] was even when we add a one variable function. So, f is continuous at a tilde is equivalent
[24:36] to saying that, if you take a sequence which is convergent to a tilde, then f of an tilde
[24:42] is convergent to f of a tilde. That is exactly what it means for f to be continuous at a
[24:47] tilde.
[24:48] And note what this means note that continuity means the limit at a tilde can be obtained
[24:53] by evaluating the function at a tilde. So, you can, you can just say that limit is equal
[24:59] to f of a tilde. So, you can evaluate the function in a tilde. So, the function f is
[25:04] said to be continuous. So, this is all talking about the when the function is continuous
[25:14] at a point a tilde. So, now we say that the function f the entire function is continuous
[25:19] if it is continuous at all points of in the domain. So, that means limit x tends x tilde
[25:26] tends to a tilde f of x tilde is a tilde for all points a tilde in the domain. Fine.
[25:32] So, let us end with this example of our good old friend x cubed minus y squared x by x
[25:40] squared plus y squared squared. This is a f x y is not equal to 0, 0 and it 0 if xy
[25:46] is equal to 00. So, I think you already know what is coming, but let us complete this.
[25:51] So, the question is this continuous at 0, 0 or is this a continuous function in general?
[25:58] So, if a tilde is not equal to 0, 0, then limit x y tends to a tilde g of xy. So, if
[26:23] a tilde is not 0, 0 that means at least one of its coordinates is non-zero say a tilde
[26:31] a comma b. And that means, if it is not 0, 0 that means at least one of them is not 0.
[26:39] So, I can write g of x comma y as a quotient. So, let us say I can write it as f of xy by
[26:49] h of xy both of these are polynomials. So, for polynomials to get the limit I just substitute
[26:56] and in this case limit as xy tends to a tilde h of xy. This is a h of a tilde and h of a
[27:06] tilde is not 0. Why is h of a tilde non-zero, because this is going to be equal to a squared
[27:12] plus b squared whole squared and if ab is not 0, 0, then at least one of them is not
[27:18] 0 that means, this number is non-zero. So, this is not 0.
[27:23] So, I can use my quotient rule and I can just substitute. So, this is just g of a tilde.
[27:31] So, this limit exists. So, if a tilde is not 0, 0 the function is continuous at a tilde.
[27:38] So, the only question is what happens at 0, 0. And we have actually seen what happens,
[27:45] but I just recall for you. So, limit xy tends to 0, 0 g of xy we checked in a slide a few
[27:59] minutes ago that this does not exist. So, it just does not exist. Why, because we came
[28:06] along the x axis and the y axis and along one of the axes, we found that the limit does
[28:11] not exist.
[28:12] So, therefore in particular, it does not equal g of 0, 0, which is 0 which does not exist,
[28:20] so there is no question of (())(28:21) this. So, therefore, the function g of xy is not
[28:30] continuous, or maybe we will see is continuous at all points
[28:42] except 0, 0. So, I hope this example also clarifies the notion of continuity. This is
[28:51] really the same as we have done for one variable calculus, except that you have more variables
[28:56] now. Thank you.