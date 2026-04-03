# W11_L1: Higher order partial derivatives and the hessian matrix

**Week:** Week 11
**YouTube URL:** https://www.youtube.com/watch?v=SNAyzb35MAc

---

## Transcript

[00:15] Hello, and welcome to the Maths 2 component of the online BSc program on Data Science
[00:18] and Programming. This video is about higher order partial derivatives and the Hessian
[00:23] matrix. So, in the earlier video, we studied the notion of critical points for multivariable
[00:30] functions. So, what that meant was that you take the function f is a scalar valued multivariable
[00:38] function, and then you find its gradient and then you set it to 0.
[00:43] And you compute all those points for which those equations are satisfied, which means
[00:49] that the gradient at that point is 0 or the other thing that can happen is that one or
[00:55] more partial derivatives are undefined. So, you collect together all those points and
[01:01] those are called the critical points of F.
[01:03] And the reason we were interested in studying these was that the local extrema, meaning
[01:11] local maxima or local minima are all critical points. So, they satisfy that the gradient
[01:18] is 0, or maybe some partial is not defined. So, they must satisfy one of these. And the
[01:23] intuition there was that the tangent plane is parallel to the x-y plane or in general
[01:29] x1 x2 xn hyperplane.
[01:31] In one variable calculus, we have studied that there is a second order test, meaning
[01:39] a test using the second derivative, and that allows us to classify which of these critical
[01:45] points are local maxima, local minima or saddle points, and sometimes it can fail also. So,
[01:52] we would like an analogue of such a test for the multivariable case. And in order to do
[02:02] that, we will first study the notion of higher order partial derivatives and the Hessian
[02:08] matrix.
[02:09] So, let us recall what are partial derivatives first, suppose f of x1 x2 1 is a scalar valued
[02:15] multivariable function defined on a domain D in Rn. The partial derivative of f with
[02:21] respect to the variable xi is the function denoted by f subscript xi, or del f del xi.
[02:28] And it is defined by taking the limit as h tends to 0, f of x tilde plus h times ei,
[02:34] what is ei, ei is the ith unit vector in Rn minus f of x tilde divided by h.
[02:43] So, this is the definition of the partial derivative function of f with respect to the
[02:50] ith variable xi. And this domain, it need not always, this limit may not always be,
[02:57] it need not always exist. And so the domain of this function, the partial derivative is
[03:03] all those points within D where this limit does exist.
[03:09] And what does the partial derivative do, the partial derivative at a point measures the
[03:14] rate of change of the function in the direction of the standard versus vector ei at the point
[03:22] a tilde. So, or equivalently with respect to the variable xi, meaning it treats the
[03:30] function as a function of only xi.
[03:32] So, you restrict to that line parallel to the xi axis passing through a tilde and restrict
[03:42] your function to that line and then ask what is the, how is the function changing? What
[03:47] is the rate of change of that function? That is exactly what the ith partial derivative
[03:51] does.
[03:52] So, now the partial derivative is a function. And so, you can say what is the partial derivative
[03:57] of that function, the partial derivative is a scalar valued multivariable function, and
[04:02] we can very well ask what is the partial derivative of that function and that is exactly what
[04:07] are second order partial derivatives for f x, y.
[04:12] So, if f of x, y is a function defined in a domain D in Rn, then the second order partial
[04:18] derivatives of f are the partial derivatives of the partial derivatives. So, you take partial
[04:23] derivatives and then you again take partial derivatives. So, just for the sake of simplicity,
[04:30] the notations are either f subscript xx or del squared f del x squared. So, note this
[04:38] strange thing that the notation here is del squared f del x squared and not del squared
[04:44] f del squared x. So, this is for something that will come ahead.
[04:53] The other possibility is that you have fyy which is also del squared f del y square and
[05:01] the third possibility is that you have fxy, which is the same as del squared f or del
[05:07] y del x or and the fourth possibilities fyx, which is del squared f del x del y. So, what
[05:15] do these mean? So, fxx means, you consider the partial derivative f with respect to x,
[05:22] of f with respect to x and then take the partial derivative of that function again with respect
[05:29] to x.
[05:30] So, f subscript x again subscript x or the other way of writing this del del x of the
[05:37] function del f del x. So, del f del x is the function the partial with respect to x and
[05:43] then you take the partial again with respect to x. Similarly, if you have fyy, what that
[05:48] means is you take partial with respect to y and then again take partial with respect
[05:52] to y equivalently you could write it as del del y of del f del y. What is fxy?
[06:00] So, this is where you first take the partial with respect to x and then take the partial
[06:06] with respect to y of that function, which is the same as saying you take del del y of
[06:13] del f del x and then here this is fy subscript x and this is del del x of del f del y. So,
[06:25] now, just notice one small thing, this is a fairly obvious but sometimes students make
[06:32] mistakes with this.
[06:34] In the notation when you do fxy so, here the order is first differentiate with respect
[06:44] to x, then take partial with respect to y, but when you write it like this, it gets kind
[06:51] of flipped over, so you have to remember that this means first take partial with respect
[06:57] to x, and then take partial with respect to y. So, because of the notation on the right
[07:06] is sort of saying you take del del of something and that is why it is written like this.
[07:12] Whereas, on the left, it is x is coming on the right, the variables are coming on the
[07:17] right, that is why you write it like this. So, you have to just remember that when you
[07:21] go between these 2, whatever is written here, gets it in the opposite order towards the
[07:26] left, so the subscript notation gets written towards the right, the del del notation gets
[07:34] written towards the left, this is what you should remember, because this is a common
[07:38] source of errors.
[07:39] Now, it would be of course, convenient if we could flip these as we want. Like, if we
[07:45] have fxy and fyx, then we can interchange them. That would be very convenient. And indeed,
[07:53] we will soon see a theorem that says that if your function is nice, meaning under some
[08:01] hypothesis, indeed, that does happen.
[08:04] Let us start with some examples. So, let us compute all the second order partial derivatives
[08:09] of these functions. So first, what are the first order partial derivatives, so del f
[08:14] del x. So, we have actually computed these before is 1, del f del y is 1. And so del
[08:22] squared del x squared is the partial of the function del f del x, which is 1, so the partial
[08:30] of that is 0, because it is a constant, then del squared f del y squared is similarly 0,
[08:39] in fact all these functions are 0; del squared f del x del y is also 0 and del squared f
[08:47] del y del x is also 0.
[08:51] And indeed do notice that here, these two are equal. So, at least for easy functions,
[08:59] it may happen that these two are often equal. So, it does not matter in which order you
[09:04] do your partial differentiation, the answer will be the same. Let us see if that holds
[09:10] for this as well. So, you have f of x, y is sin of x, y, we have again computed the gradient
[09:17] here, so we know what the partial derivatives look like.
[09:20] So, this is y times cosine of x y, and x times cosine of x y. Now, let us look at the higher
[09:33] order partial derivatives. So, if you have del squared f del x squared, that means you
[09:38] have to differentiate y times cosine x, y with respect to x. Now y is a constant, so
[09:47] it will come out so you are just differentiating cosine of x y. So, this is y times, y times
[09:57] minus sin of x y times y. So, this is minus y squared sin of x y.
[10:06] Now, by symmetry or by doing it, you can see that del squared f del y squared is also minus
[10:17] x squared times sin x y. So, I will suggest you check this. So, this leaves us with the
[10:25] mixed partial derivatives. So, del x del y and del squared f del y del x. So, for del
[10:36] squared f del x del y, we first differentiate with respect to y so that gives us x cosine
[10:41] x, y and then differentiate with respect to x. So, this is your product rule.
[10:46] So, let us differentiate x first, that is 1, so 1 times cosine of x y and then hold
[10:53] x and differentiate cosine of x y. So, that gives us y times, minus y times sin of x y.
[11:03] So, what this gives us is cosine of x y minus x y times sin of x y. So, that is what it
[11:16] gives us. And then by symmetry or by computing it, maybe we can compute it. So, this is again
[11:23] 1 times cosine of x y. So, I am now differentiating y times cosine x with respect to y. So, 1
[11:30] times cosine of x y plus y times minus x, sin of x y, which gives us cosine of x y minus
[11:47] x times, minus x y times sin of x y.
[11:51] And again, you can see that these two are indeed equal. So, it seems that the mixed
[12:00] partials are indeed often equal. Maybe I should have mentioned in the previous slide that
[12:06] these are called the mixed partials, the mixed partial derivatives. So, as I was saying,
[12:23] the mixed partial derivatives, at least in these examples seem to be equal.
[12:27] And indeed, we have a very nice theorem called Clairaut s theorem about the mixed partials.
[12:32] So, it says the following, so suppose f of x, y is a function defined on a domain D in
[12:37] R2 containing a point A and an open ball around it. If the second order mixed partial derivatives,
[12:42] fxy and fyx are continuous in an open ball around a, then they are equal at a.
[12:50] So, what do we need to check that these mixed partial derivatives are continuous in an open
[12:58] ball around a. Now, in our previous examples, they were all very nice functions. So, continuity
[13:04] was not at all a problem. And from there, we could as a result, apply Clairaut s theorem.
[13:10] And we saw that they are equal although we actually computed them, but we could have
[13:15] directly concluded it from Clairaut s theorem.
[13:18] So, let us see an example where we will try to compute all these and see that the hypothesis
[13:25] is indeed necessary. So, let us compute what are the partial derivatives. So, first of
[13:33] all, what is the left del x and del f del y at 0, 0. So, del f del x at 0, 0 is limit
[13:47] h tends to 0, f of 0 plus h comma 0 minus f of 0 comma 0 divided by h. So, f of 0 plus
[14:08] h, that is f of h comma 0, that is again 0 minus 0 by h, this is 0 and so this is going
[14:16] to be 0 by the same argument, the partial for y is also 0.
[14:24] So, we know that these two are 0. Of course, we have to compute now the partial derivatives
[14:30] at the other points as well. So, now let us do that. So, what is del f del x at x y where
[14:39] x y is not equal to 0, 0. So, x, y is not equal to 0, 0, then this is a rational function
[14:45] and the denominator is non-zero so I can apply my u by v rule. So, if we do that, let us
[14:50] see what we get.
[14:51] So, this is x squared plus y squared times the derivative of the numerator. So, that
[14:59] gives us y time x squared minus y squared plus x y times 2x minus x y times x squared
[15:16] minus y squared times 2x divided by x squared plus y squared. So, now if we simplify this,
[15:28] and I will not spend time on, on doing this, since it is a direct simplification, what
[15:34] we are going to get is something like minus y to the power 5 plus x to the 4 times y,
[15:50] plus 4x squared y cubed divided by x squared plus y squared squared. And this is if of
[15:58] course, x, y is not equal to 0.
[16:04] And you can do the same thing for del f del y. And if we do that, what you will get is,
[16:10] again, you use a u by v rule and go through the expressions, you will get exactly the
[16:17] same thing. Except that now the x term the highest x term comes with a positive sign
[16:27] and the lower ones come with a negative sign. So, x cube y squared divided by x squared
[16:43] plus y squared squared.
[16:44] So, it is kind of symmetric, except that there is this gap between the plus and the minus
[16:49] and that gap is exactly what is going to cause the second order partials to not work out
[16:58] properly. So, so this is what is. And now let us compute what is the second order partial,
[17:05] mixed partials for at 0, 0. So, at 0, 0, I want to compute what is del squared of del
[17:12] x del y 0, 0.
[17:15] So, what does this mean this means I have to compute limit h tends to 0 the partial
[17:24] of y at, so this with respect to h, so h comma 0 minus del f del x at 0, 0 divided by h.
[17:39] So, what is the partial derivative, that h comma 0 this is so limit h tends to 0, h to
[17:48] the power 5 minus everything else is 0 because the y coordinate is 0, and then divided by
[18:04] the numerator and then divided by x squared plus 0 squared squared, which is h to the
[18:10] power 4.
[18:11] So, we will simplify this in a minute, what is the partial of x at 0, 0 that we have computed
[18:18] that is 0 and then divided by h. So if we do this, this is h to h minus 0 by h limit
[18:24] h tends to 0 which is 1. Now, let us compute delta squared f del y del x at 0, 0. So, this
[18:36] is limit h tends to 0 the del f del x at 0 comma h minus del f del x at 0 comma 0 I seen
[18:48] the previous one, I have made a typo this should have been del f del y but it is the
[18:53] same, the answer does not change as such divided by h and now we can again do the same thing.
[19:02] So, what is del f del x at 0 comma h. So, we have found out here that it is minus h
[19:09] to the power 5 and all the other terms do not contribute because there is a x in there
[19:14] and the x we have to substitute is 0. So, minus h to the power 5 and then the denominator
[19:19] is 0 squared plus x squared squared minus 0 divided by h and limit as h tends to 0 and
[19:28] you can see now this is minus 1 and so these do not match. So, this do not match.
[19:37] So, what was the problem? The problem was that these mixed partials are actually not
[19:46] continuous. So, for that, you will have to evaluate what they are and check what happens.
[19:52] So, the hypothesis in Clairaut s theorem is important, and without that, it may not be
[20:00] happen that the mixed partials are indeed equal. So, for whatever is next we will assume
[20:07] in that the hypothesis of Clairaut's theorem holds, because we want that to hold in order
[20:15] to get whatever the second order partials are useful for fine.
[20:22] So, we have done second order partial derivatives for fxy. Now, let us talk about second partials
[20:28] for f x1 x2 xn. So, if f x1 x2 xn is a function defined on the domain D in Rn, then the second
[20:34] order partial derivatives are defined analogously as a partial derivatives of the partial derivatives.
[20:39] So, here there are for the n is 2 case there were 4 second order partial derivatives. So,
[20:51] for the general case there are going to be n squared second order partial derivatives.
[20:58] So, they are given by f xi xi or del squared f xi xi. So, what this means is you take f
[21:06] with respect to xi and again with respect to xi or the same thing del del xi of del
[21:12] f del xi. This is when i is equal to j if i is not equal to j or meaning this is a general
[21:20] situation, then this is f xi and then you take the partial of xj of that which is the
[21:29] same as saying you take del del xj of del f del xi.
[21:34] So, again, important point is to notice here how here it is written on the right, and so
[21:41] it goes, the order is from left to right, here it is written towards the left and so
[21:48] the order is from right to left. That is the only thing you have to recall, remember, as
[21:53] far as notation is concerned. And the other difference meaning why did I write it differently?
[21:58] See, here the notations are same f xi xi, here xixj. So, it does not matter if i and
[22:04] j are different or i and j are the same, but when you write it in terms of this del notation,
[22:12] the del xi del xi becomes del xi squared. This is just convention, there is no reason
[22:17] for this notation other than convention.
[22:19] Fine, let us do this example. If x y is xy plus yz plus zx, let us first compute the
[22:28] partial so del f del x is y plus z. Again we have done this example before meaning the
[22:35] partials first order partials before this is x plus z or z plus x and del f del z is
[22:44] x plus y. And so if I want the second order partials, I differentiate these. So, del squared
[22:51] del x squared is 0 del squared del x del y del x is. So, you take the function y plus
[23:03] z and differentiate with respect to y. So, this is 1 del squared del f del z del x is
[23:10] 1.
[23:11] And I think you can see the general pattern emerging so I will write it as del squared
[23:16] del y squared is 0 del squared f del z squared is 0 and then del squared f del z del y this
[23:29] is the partial of the function del f del y which is x plus z. So, partial of x plus z
[23:36] with respect to z that is 1 and again if we know that the partials are, the second order
[23:47] partials are nice then the mixed partials are actually the order does not matter.
[23:51] So, from Clairaut's theorem or an equivalent version of the theorem in n dimensions, you
[23:58] can check that del squared f del x del y is also equal to 1 which is also del squared
[24:07] f del y del z which is 1 and then del squared f del maybe I want a del x here and then del
[24:18] y del z all these are 1. So, you can check this directly from the expressions for del
[24:25] f the first order partials or you can use the fact that Clairaut's theorem applies.
[24:33] So, I will make that as a comment in this slide. So, before which let us define the
[24:45] higher order partial derivatives. So, you can keep repeating this process. So, you have
[24:49] the second order partials you can take the third order partials, fourth order partials.
[24:54] So, for one variable functions, you can differentiate as many times as you want provided the derivative
[25:01] exists. So, the same thing can be done for partial derivative, you can take partial derivatives
[25:06] as many times as you want. And that is exactly what higher order partial derivatives do.
[25:12] So, if f x1 x2 xn is a function defined in a domain D in Rn, then the higher order partial
[25:18] derivatives of f are defined analogously by taking successive partial derivatives. So,
[25:23] the general notation so, if you take the kth order partial derivative, the notations are
[25:27] f xi 1, xi 2, xi k which means you take the partial with respect to xi 1, then you take
[25:36] the partial with respect to xi 2, then you take the partial with respect to xi 3 and
[25:41] all the way up to xi k, this is what it means.
[25:47] And you can write the same thing except remember our usual thing about the shift in the order.
[25:56] So, this is exactly the same as taking del del xi of xi k of del del xi k minus 1 of
[26:06] del del xi k minus 2 of all the way up to del f del xi 1 and then plenty of brackets,
[26:23] however. So, I hope the idea is clear, it is exactly the same thing. Of course, once
[26:29] again one should point out that there is no guarantee that this higher order partial derivative
[26:38] exists the same way as there is no guarantee that the first order partial derivative exists.
[26:42] So, there will be some points where it exists some points it may not exist and so, the domain
[26:47] of this function is whichever points it exists and an appropriately modified statement of
[26:54] Clairaut's theorem holds. What that means is, if suppose you take the kth order partial
[26:58] derivatives, then if all the, if this guy is continuous and so is in the neighborhood
[27:06] and so is any, you take this denominator in some other order, if that kth order partial
[27:18] is also continuous in some neighborhood, then they are going to match at the point, at any
[27:23] point in that neighborhood.
[27:25] So, in general what you can say is under suitable hypothesis, you can shift the orders without
[27:38] any problem. So, if I do xi 1, xi 2, xi k that is the same as doing it in some other
[27:48] order xij 1, xij 2, xij k. So, some confusing combinatory it maybe, but all I am saying
[28:00] is you change the order of 1 1 through k instead of x1 x2 x3, you could have x2 x3 x1 and that
[28:07] is allowed under suitable hypothesis.
[28:10] Finally, let us talk about the Hessian matrix which is really what all this is going to
[28:18] be used for. So, the Hessian matrix is the following if you have a function of n variables
[28:23] defined on domain D in Rn, then the Hessian matrix of f is defined as this complicated
[28:30] looking n by n matrix. So, remember that you had n squared second order partial derivatives,
[28:36] so, you place them in a matrix.
[28:40] So, the first row is you take all your, you take your gradient vector and then you take
[28:48] the partial with respect to x1 of each component of that gradient vector. So, del squared f
[28:52] del x1 squared del squared f del x1 del x2 del squared f del x1 xj. So, this is the jth
[29:00] column del squared f del x1 del xn that is the last column. And then for the second row
[29:07] you take del del x2 of the gradient vector. So, del del f del squared f del x2 del x1,
[29:14] del squared f del x2 del x2, then del squared f del x2 del xj, del squared f del x2 del
[29:21] xn and then in general this is ith row.
[29:26] So, the important part is you have to remember what happens for the ijth entry. That is how
[29:31] you describe any matrix by saying what happens to the ijth entry. So, the ijth entry is given
[29:36] by taking del squared f del xi del xj. This is what if you remember. So, that is what
[29:41] is happening. So, this is the Hessian matrix and this is somehow going to come in, this
[29:53] is somehow going to be useful when we talk about the second derivative test whatever,
[30:00] so the analog of the second derivative test when we classify critical points.
[30:04] Fine, let us do a couple of examples. So, for this example, x plus y, we saw that the
[30:11] second order partials are actually all 0. So, the Hessian here is 0 0 0 0. So, this
[30:20] was a relatively complicated Hessian, sin x y. So, it is of, it is a 2 by 2 because
[30:27] you have two variables. And the terms here are. So, this is minus y squared sin x y minus
[30:46] x squared sin x y and then this was a cosine of x y minus x y times sin of x y then this
[31:02] was cosine of x y minus x y times sin of x y. So, these terms typically match. So, often
[31:09] for the Hessian matrix, these terms will match.
[31:13] And then let us do this one. This one was again rather easy matrix. Now, this is a 3
[31:20] by 3 matrix, why 3, because there are 3 variables. So, what was this matrix? This was 0 1 1;
[31:27] 1 0 1 and 1 1 0, the kind of matrices we found in linear algebra were somewhat useful. And
[31:37] indeed, we will have some use of linear algebra when we study this hessian matrix in the context
[31:44] of the classification of critical points. Thank you.