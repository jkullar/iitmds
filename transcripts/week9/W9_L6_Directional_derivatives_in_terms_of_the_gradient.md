# W9_L6: Directional derivatives in terms of the gradient

**Week:** Week 9
**YouTube URL:** https://www.youtube.com/watch?v=2eYER90_4wA

---

## Transcript

[00:14] Hello and welcome to the Maths 2 component of the online BSc program on Data Sconce and
[00:18] Programming. This video is about direction derivatives in terms of the gradients. So,
[00:23] first we will define what is the gradient and then we will talk about its relation with
[00:28] the directional derivatives. So, if you may remember that few videos ago when we defined
[00:33] directional derivatives, we found them hard to compute, not very hard, but nevertheless
[00:38] they involved some limits which we had to compute.
[00:42] And towards the end I said there is often an easier way of computing them and the way
[00:53] to compute them involves some hypothesis call continuity which is why we studies continuity.
[01:01] So, now that we have, we know what is a continuous function, we will talk about directional derivatives
[01:10] again once we have talked about the gradient. So, the gradient is a very important idea
[01:15] and it will be used extensively in the machine learning course that you will see later on.
[01:22] We will also have use for it in the material that comes later.
[01:26] So, let us recall first, so unless specifically mentioned otherwise in this video function
[01:33] will mean a scalar-valued multivariable function, so when I say function, by default that means
[01:39] a scalar-valued multivariable function. We will have occasions to use vector-valued functions
[01:43] in this videos but on those occasions I will specifically mention that.
[01:49] If a tilde is a point in Rn, then an open ball of radius r around a tilde is the set
[01:53] defined as those points x tilde, such that the distance between x tilde and a tilde is
[01:59] less than r. So, that is an open ball of radius r. And finally let us recall that e1, e2,
[02:05] en is the standard ordered basis of Rn. So, these are all notations we have using for
[02:09] a while now and we will continue to use them in this video as well.
[02:14] Let us recall partial and directional derivatives. So, if f of x1, x2, xn is a function defined
[02:20] on a domain D in Rn, the directional derivatives of f in the direction of the unit vector u,
[02:24] remember u is, we always think of unit vectors when we talk of directional derivatives, at
[02:30] least when you want to actually to find them, so this is the function denoted by f subscript
[02:35] u of x tilde and it is defined as f subscript u of x tilde is limit h tends to 0, f of x
[02:43] tilde plus h times u minus f of x tilde divided by h.
[02:46] So, the expression in the bracket that is x tilde plus h times u, that is addition in
[02:55] Rn, which we know because both x tilde and your vectors and h times u is scalar multiplication,
[03:02] so we are very familiar with what that means. So, its domain of course, may not consists
[03:13] of all points in D because this limit may not exist at all points, we have seen examples
[03:18] like that, so it is domain consists of those points at which the limit exists. So, at other
[03:23] points we do not talk about these directional derivatives, we will say it does not exist.
[03:31] In particular you can take the unit vector, u is ei, so these are the standard basis vectors
[03:42] and when u is ei then the directional derivatives is exactly the partial derivative of f with
[03:49] respect to the ith variable xi and we have a special notation for it, which is f subscript
[03:55] xi of x tilde or del f del xi and both are useful in different context. Fine, so this
[04:03] is a recall of partial and directional derivatives. We have studied this in previous videos.
[04:10] Let us recall a computation of these. So, if you have f of x, y, x is xy plus yx plus
[04:20] zx, let us compute the directional derivatives with respect to vector u1, u2, u3, so this
[04:30] is a unit vector, so let us compute what is fu. So, fu of x tilde is by definition limit
[04:40] h tends to 0, f of x plus hu1, y plus hu2, z plus hu3 minus f of x, y, z divided by h
[04:59] which is limit of h tends to 0, x plus hu1 times y plus hu2 plus y plus hu2 times z plus
[05:15] hu3 plus z plus hu3 times x plus hu1 minus xy plus yz plus zx divided by h.
[05:32] We have actually done this computation in previous video, but I want to do it again
[05:36] just to recall how difficult it is to compute a directional derivative as of now. So, if
[05:42] you look at what happens to the numerator, several terms gets cancelled, so x times y,
[05:49] y times z and z times x get cancelled but all the h terms remain, so we have some h
[05:55] terms with h squared, so for h squared we get u1u2 plus u2u3 plus u3u1 and then we have
[06:06] plus h times xu2 plus yu1 plus yu3 plus zu2 plus zu1 plus xu3.
[06:18] I will suggest you check this, there
[06:34] is some symmetry in this that is why I could write it so easily, which is limit, if you
[06:44] take the limit as h tends to 0, so h and h cancels, and what you will get is h times
[06:50] this expression here plus this entire expression which I will rewrite, x times u2, I actually
[07:01] want to rewrite this in a different way, so let us take the coordinates. So, u1 times
[07:09] y plus z plus u2 times x plus z plus u3 times x plus y.
[07:22] So, if you write this on yourself, you will see that this is exactly what you get, so
[07:30] as limit h tends to 0, this term here become 0 because everything inside is a constant
[07:39] with respect to h and h goes to 0, so this is 0 and the other term does not have an h
[07:45] so it is just whatever it is, so the net result is this is u1 times y plus z plus u2 times
[07:52] x plus z u3 times x plus y, so we have computed this directional derivative, but notice this
[08:00] that this was a fairly non-trivial computation and this is a fairly easy function.
[08:04] It is a polynomial function, in fact, it has degree just 2, so even for such an easy function
[08:10] it took us some work to compute what is the directional derivatives, contrast this with
[08:15] the partial derivatives which we can write down in a gify, so fx is, treat x as a variable
[08:21] and y and z as constant, so if you go that you get y plus z, fy is treat x and z as constant,
[08:29] and y as a variable, so you get z plus x, and fz is treat z as a variable and x and
[08:36] y as constants, so you get y plus x.
[08:42] So, the point here is which is the title of the slide directional derivatives versus partial
[08:48] derivatives, partial derivatives are fairly easy to compute because we have this very
[08:53] nice way of interpreting them in terms of usual derivatives meaning one variable derivatives
[08:58] by treating all the other variables as a constant, whereas for the directional derivative I have
[09:03] to really sit and compute the limit.
[09:06] Now, I will ask you to observe one important fact here, so notice these coefficients and
[09:20] so this y plus z is exactly what you get as the coefficient of u1, this x plus z is exactly
[09:28] what you get as the coefficient of u2, and this x plus y is exactly what you get as the
[09:32] coefficient of u3. So, maybe there is a relation here between the directional derivatives and
[09:37] the partial derivatives, which we can exploit and it will make computing partial derivatives
[09:43] easy and that is what this video is about.
[09:46] So, the main upshot is partial derivatives are easy to compute, directional derivatives
[09:51] are maybe not so easy to compute because you have to actually sit and compute the limit
[09:56] and that, maybe there is a relation we want to exploit. Fine, so to do that we have to
[10:02] define something called the gradient vector or the gradient function.
[10:06] This is an exceedingly important function or vector and this is an idea you must understand
[10:14] because you need to know this well to carry forward not just in the next videos in this
[10:20] course but in the next courses as well. So, let us define what the gradient vector or
[10:24] the gradient function is, so suppose f of x1, x2, xn is a function defined on a domain
[10:29] D in Rn containing some open ball around the point a tilde.
[10:35] Suppose all the partial derivatives of f at a tilde exist. Then the gradient vector of
[10:42] f at a tilde is the vector, where in the first coordinate you put the partial derivative
[10:48] with respect to x1 at a tilde, in the second coordinate you put the partial derivative
[10:53] with respect to x2 at a tilde and in the ith coordinate in general you put the partial
[10:59] derivative with respect to xi evaluated at a tilde and form the corresponding vector,
[11:07] so this is a vector in Rn.
[11:09] It has n coordinates so this is a vector in Rn. So, when you evaluate, since we are evaluating
[11:15] at this point, these are all numbers and this gives you a vector in Rn, so these are all,
[11:20] this is an n tuple of real numbers and so it gives you an element of Rn or a vector
[11:27] in Rn. So, depending on the context you write it as a column vector or a row vector. Again,
[11:36] I have been using this fairly, liberally which way do I interpret vectors as columns or rows.
[11:45] Often, we did it as columns but sometimes I have also done it as rows and the same thing
[11:49] will apply to this vector as well, so depending on whether you write in the context Rn has
[11:55] row vectors or column vectors, you will write the gradient vector as a row vector or a column
[12:00] vector. Important point is this is a vector in Rn, so given a point a tilde, we had this
[12:06] function f, which was a scalar-valued multivariable function defined on maybe some subset of Rn,
[12:14] some domain in Rn.
[12:15] And out of this by evaluating at the point a tilde each partial derivative we have created
[12:21] a vector. So, now first of all notation, this is denoted by sometime it is called del, sometime
[12:31] it is called nabla, so it is denoted by del f evaluated at a tilde. And then out of this
[12:44] we can form a function, namely what is called as gradient function, this is similar to how
[12:48] we form the derivative function or the partial derivative functions.
[12:52] So, for each point a tilde you can associate a corresponding vector so that association
[12:58] we make into a function, so the gradient function of f is the function taking values in Rn obtained
[13:04] by associating to every point a tilde its gradient vector gradient f at a tilde, del
[13:11] f at a tilde or nabla f at a tilde. Of course, this gradient function may not be defined
[13:21] everywhere, because maybe some partial derivative is not defined at some point.
[13:27] So, the domain of definition for this function is exactly those points where all partial
[13:34] derivatives exist, so all partial derivatives must exist and only at such point this function
[13:39] is defined. So, just to emphasize this, this is now a vector-valued function. So, we started
[13:48] with a scalar-valued function f and out of that we have created a vector-valued function
[13:54] gradient of f or del of f or nabla of f, typically we can del f or gradient f, nabla f is not
[14:03] often used, although the symbol is actually called nabla.
[14:10] So, this slide if it is a bit abstract, let us do a couple of examples. This is really
[14:18] easy, all we have done is taking all the partial derivatives and put them into a vector, that
[14:22] is really all we have done, but let us do some examples just to set these ideas straight.
[14:29] So, f of xy is sine of xy, well we know what is del f, del x and del f, del y, we have
[14:35] computed this earlier. So, del f del x was cosine of xy times y, so y times cosine of
[14:44] xy. del f del y is x times cosine of xy, so the gradient function at x comma y is the
[14:58] vector y times cosine of xy comma x times cosine of xy. And what is the gradient vector
[15:10] at some point? Let us say if I want to compute the gradient vector at 0 comma 0, then this
[15:16] is, you evaluate this at 0 comma 0, so this is a gradient vector at 0 comma 0 and you
[15:22] can see if you evaluate it, you will get 0 comma 0.
[15:26] If you evaluate it at let us say pi and pi, so then we have, so well, I get a cosine which
[15:40] I do not really know what to do with, so let us say this is pi and 1. So, if I do that
[15:47] then this is, the gradient vector is 1 times cosine of pi comma pi times cosine of pi.
[16:02] So, cosine of pi is minus 1, so this is minus 1 comma minus pi, so I hope it is clear what
[16:12] is the gradient function. So, it is a function from R2 to R2 in this case and the gradient
[16:20] vector is just the evaluation of that function at whatever point you want to evaluate it
[16:25] at.
[16:26] Let us do this other example. So, gradient of f here is, so I have to write down what
[16:32] are the partial derivatives, so in this case the partial derivatives they are very easy,
[16:39] this is 2x, 2y and 2z, so the gradient function is you just take these and put them into a
[16:50] vector. So, it is a function from R3 to R3, so the gradient function is a function from
[16:54] R3 to R3. Now, if I want to evaluate this at some point, so what is the gradient vector
[17:00] at the point 1, 2, 3?
[17:01] Well, you put those values in and see what you get, so this is 2, 4, 6. Let us do this
[17:09] last example because this fairly important example. So, now the gradient function will
[17:17] depend, so we have actually computed the partial derivatives of this function, this was from
[17:26] a previous video, I think the one where we computed partial derivatives. So, let us write
[17:30] down what those are.
[17:33] So, the values, so this depended on whether we are evaluating in that 0, 0 or not, so
[17:41] it is not at 0, 0, then del f del x is x cube minus y squared x by x squared plus y squared,
[17:50] the whole squared and if it is at 0, 0, it is 0. So, this is, if x, y is not 0, 0, and
[18:00] this is if x, y is 0, 0 and similarly by symmetry we know what this is, this is y cube minus
[18:08] x squared y by x squared plus y squared squared.
[18:13] So if you do not remember this or feel uncomfortable with how we got this, please compute this
[18:19] again, so this is if it is not 0, 0, and this is if it is 0, 0. So, that is what the partial
[18:29] derivatives are, which means that now the gradient function is, the function x cube
[18:36] minus y squared x comma y cube minus, let me rewrite this better, I want to write this
[18:45] in a particular way, so 1 by x squared plus y squared squared times the vector x cube
[18:54] minus y squared x comma y cube minus x squared y.
[19:00] So, this is if x, y is not 0, 0 and it is the vector 0, 0 if x, y is 0, 0. So, there
[19:12] is two things to note here. First of all, since we know now what is scalar multiplication,
[19:17] I have pulled out this common thing 1 by x square plus y squared squared, so we can do
[19:23] this even for functions, and you have to understand what this means is that it is multiplied each
[19:29] of the components.
[19:30] So, we have done this idea extensively when we did linear algebra, so that still continues
[19:38] to hold here, in spite of the fact that these are the function. And second thing is that
[19:43] the gradient function, it could have this, it is like any other function, it could be
[19:49] piece wise, it could be defined in a different way, it may not be defined everywhere, so
[19:54] all of those things are possible and it takes values again in R2.
[19:59] So, this is a function from R2 to R2, so I hope these examples are illustrative of what
[20:05] is the gradient function and what is the gradient vector. So, before going ahead maybe we should
[20:12] also ask, what does the gradient vector do for us or what does the gradient function
[20:19] do for us? So, what are these del f del x, and del f del y? They are the rates of changes
[20:26] of the function on the x axis or on the y axis, so with respect to x and with respect
[20:33] to y.
[20:34] And when you write this two together as function, they are saying that at that point you can
[20:40] compare these two, these two numbers, suppose the, let us say at this element 1, 2, 3, the
[20:49] gradient vector is 2, 4, 6, so what this is saying is the rate of change with respect
[20:54] to x is 2, with respect to y is 4 and with respect to z is 6, so the rate of change is
[21:01] three times that for z as that for x or two times that for y as that x.
[21:10] So, basically the gradient vector is trying to tell you, it is keeping track, it is one
[21:16] of the things it is doing, it is keeping track of the relative rates of change between the
[21:25] different variables, that is why we are bunching them together, so that we can compare them.
[21:30] So, this is an idea that we have seen in linear algebra earlier which goes back to why do
[21:37] we create vectors in the first place. So, this is one of the reasons we have created
[21:42] the gradient vector. It keeps track of the rate of change for all the variables together.
[21:48] Fine.
[21:49] So, now that we have studied the gradients, let us quickly study some properties. These
[21:55] are the same properties that we have studied for directional derivatives, so I am going
[21:58] to summarize them very fast. So, if you have two functions f and g and a scalar c. If you
[22:04] take the gradient of cf plus g, then that is c times the gradient of f plus gradient
[22:09] of g. So, now what are we doing? We are doing vector addition and scalar multiplication.
[22:13] So, all these three terms here gradient of cf plus g, gradient of f and gradient of g
[22:19] are vectors consisting of functions, so they are basically vector-valued functions and
[22:26] c times this gradient f is a scalar multiplication of that vector-valued function and we are
[22:33] saying that these vector-valued functions have this, satisfy this equation.
[22:39] So, this is actually saying that you compare coordinates, and in terms of coordinates we
[22:45] have already seen this when we do directional derivatives. So, this is nothing very deep,
[22:50] this is just rehashing of what we saw for directional derivatives, apply it specifically
[22:56] to partial derivatives. Similarly, we can do the product rule and if we think of the
[23:03] product rule we can summarize it as follows. So, gradient is fg is g times gradient of
[23:07] f plus f times gradient of g.
[23:11] And similarly, we can do the quotient rule. Of course, here we have to, we need some hypothesis
[23:16] which I have ignored for now, so gradient of f by g is, you pull out your 1 by g squared
[23:23] in the denominator and then you have g times gradient of f minus f times gradient of g.
[23:28] Now, I want to emphasize, of course, all these 3 come with some hypothesis.
[23:33] You have to know that all these gradients of f and gradient of g are defined and only
[23:39] then all this makes sense and g of x tilde is nonzero, et cetera, so with those hypotheses
[23:44] in place. So, the main point I want to make here is that, yes, we need some hypothesis
[23:51] but the main point is this looks very-very similar to the rules we had for derivatives
[23:57] in one variable calculus.
[23:58] So, when we had one variable calculus we said derivative of cf plus g is c times derivative
[24:05] of f plus derivative of g. Derivative of fg is g times derivative of f plus f times derivative
[24:12] of g. And derivative of f by g is 1 by g squared g times f prime minus f times g prime. And
[24:22] of course, when we did one variable calculus I wrote the f prime first and the g next.
[24:26] So, the reason I have written it like this is because here we have vectors, so I always
[24:30] write the scalar first, this is just convention, there is nothing deep in this. So, the point
[24:36] is the gradient really plays the role of assimilating all the information about the rate of change
[24:43] of this function and can be thought of as the derivative. So, note that for multivariable
[24:53] functions we have not talked about the derivative at all, we only talked about partial derivatives.
[24:58] So, we only said, how does, what is the rate of change in a particular direction. So, essentially,
[25:03] we talked only about one variable calculus, we reduced it to checking along lines, which
[25:09] is like one variable calculus, but we can ask globally is there some kind of a rate
[25:15] of change for this function, can we define something like the derivative for one variable
[25:23] calculus.
[25:24] And the answer is, if we want to do it, so that the property is that we have for one
[25:28] variable calculus hold, then this gradient seems like a reasonable candidate for the
[25:34] derivative and I will expound more on this later on. So, these are properties of gradients,
[25:41] fine.
[25:42] So, now comes the all-important point of this video and this is what we want to take home
[25:48] from this video. Suppose there is a function f defined on a domain D in Rn containing open
[25:55] ball around the point a tilde. Theorem: Suppose gradient f exists and is continuous, so this
[26:00] is really why we had to talk about limits and continuity and is continuous on some open
[26:05] ball around the point a tilde.
[26:06] So, it is not just continuous at that point but it is continuous around that point as
[26:12] well, so at all points close by that point. Then for every unit vector u the directional
[26:19] derivative f subscript u at a tilde exists and equals gradient f of a tilde dot u. This
[26:27] is exactly the formula that we saw for the example that we did earlier, if you remember
[26:33] the example xy plus yz plus zx, when we did fu what we got was u1 times y plus z plus
[26:43] u2 times x plus z plus u3 times x plus y.
[26:46] So, this expression here we can rewrite as, so this expression here can be rewritten as
[26:55] gradient of f at x tilde dot with the vector u. So, the vector u is u1, u2, u3, the gradient
[27:07] of f is exactly y plus z, z plus x and y plus x and if you dot this is the expression you
[27:14] get.
[27:15] And that is exactly what this theorem is saying, that you can compute the partial sorry directional
[27:22] derivatives from the gradient and that vector u. So, the main upshot is that difficult computation
[27:32] that we did with limits for the directional derivative is no longer needed provided we
[27:38] have this hypothesis. So, if the gradient f is continuous, which often happens for many
[27:42] functions, like polynomials and so on, then we need not do the difficult limit, we can
[27:48] just compute it directly by this formula, gradient f dot with u.
[27:52] So, I want to just make a quick remark about why this holds. So, what is the partial sorry
[28:06] directional derivative? That is limit h tends to 0, f of, let us say I do it for two variables,
[28:16] so this is x plus hu1, y plus hu2 minus f of xy divided by h. So, in terms of my axis,
[28:30] this is like, suppose this is u, badly drawn line, yeah, so this is the line on which u
[28:39] is, this is your u and xy is let us say a point here, so move your vector and your line,
[28:48] so you draw this line here passing through.
[28:52] And then you take the derivative along this line. So, now what we can do is, we can break
[29:00] this into two parts. We can see this is f of x plus hu1 comma y plus hu2 minus f of
[29:10] x plus hu1 comma y plus f of x plus hu1 comma y minus f of x comma y, so this is my point
[29:28] x comma y and then divide by h, if I split this up into two parts, so I get f of x plus
[29:37] hu1 comma y plus hu2 minus f of x plus hu1 comma y by h plus f of x plus hu1 comma y
[29:55] minus f of xy by h.
[29:59] Now, let us interpret what these two things are. Let us look at the first one. So, this
[30:04] is saying, suppose this is my point x plus hu1 comma y plus hu2. So, this is saying let
[30:13] us keep the x coordinate fixed, so that means look at this line, but let us vary y. So,
[30:23] this difference as h tends to 0, this is like y is over here and you are looking along this
[30:34] line.
[30:35] So, this looks now like a translate of the y axis, so it is like you are computing the
[30:38] partial derivatives with respect to y for this point here. And then the second one,
[30:48] this second expression is like you are computing it for this line here. So, with some little
[30:58] bit of approximation and mumbo-jumbo, this is more or less like saying this is del f
[31:03] del y at x plus hu1 comma y. Of course, when you take the limit h plus hu1 also has to…
[31:13] There is a limit here so with some mumbo-jumbo you can put in that limit as well and this
[31:21] is actually the partial of x at f of xy right. And because there is a limit here and we know
[31:32] continuity we can say this is same as del f x plus hu1 times y but now note here that
[31:41] when we did this, here the as h tends to 0 the h thing change, your parametrization change,
[31:52] so here you have to divide and multiply by u1 and now you do this. So, now it is like
[31:57] hu1 tends to 0 and so I get an u1 extra, and the same thing happens here where you get
[32:02] u2 extra and that is exactly how we get this formula.
[32:06] Let us do some examples and clear out what is going on. So, let us say I want to compute
[32:13] fu at x, y. Well, I know I need my gradient, so I have to first compute the partials, so
[32:22] this is del f del x is 1, del f del y is 1 that means the gradient is 1 comma 1. So,
[32:30] then this is 1 comma 1 dot with u, so this is just u1 plus u2. So, u is u1 comma u2,
[32:43] this is just u1 plus u2.
[32:46] And I will suggest you go back to your video on directional derivatives where we have computed
[32:53] this where it was a fairly, relatively longer computation and we got the same answer. This
[33:01] is something that we did just a few minutes ago, but I am going to do just emphasize that
[33:09] if we use this formula, this is just a one-step procedure, so this is y plus z, z plus x,
[33:20] x plus y dot with u1, u2, u3, which is u1 times y plus z plus u2 times z plus x plus
[33:32] u3 times x plus y.
[33:39] So, you can see now also why this vector notation is useful and the dot products are also useful.
[33:48] We finally have scope to use them in calculus and finally we have f of xy, sin of xy, so
[33:56] here fu of x comma y is, so we need the gradient, so the gradient if you remember was y times
[34:10] cosine x y comma x times cosine xy. So, if we put this in this is y times cosine xy comma
[34:23] x times cosine xy dot with u which gives us u one times y times cosine xy plus u2 times
[34:36] x times cosine xy, very easy to compute.
[34:40] Now, again I will ask you to go back and try to do this from first principle to compute
[34:48] the directional derivative of sin of xy, in fact, we started doing this in our directional
[34:52] derivatives video and then I stopped at some point and suggested that you do it because
[35:00] it became fairly tedious and also I wanted you to check the answer for yourself and now
[35:04] you see if it matches with what we have here.
[35:07] So, I hope the tediousness of the computation for the directional derivatives is no longer
[35:13] an issue if are bothered in when we first computed directional derivatives that this
[35:19] is a really difficult thing, I hope that now you will feel that this is no longer difficult
[35:26] and that this is actually something very-very easy. Of course, the main idea is to use the
[35:33] gradient vector and, so there is one small warning and the warning is that the hypothesis
[35:41] over there has to be satisfied.
[35:43] And so, I want to do this final example of f of x, y is xy by x squared plus y squared
[35:48] if x, y is not the 0 point 0, 0 and it 0 if it is the point 0, 0, we have computed already
[35:57] what is the gradient for this. So, the gradient for this is, so x cube minus y squared x by
[36:10] x squared plus y squared squared, which I could have taken out, and y cube minus x squared
[36:18] y by x squared plus y squared squared, if x, y is not 0, 0 and 0, 0 if x, y is 0, 0.
[36:36] So, this was a computation we did, the gradient computation we did a few minutes ago and that
[36:44] was dependent on the partial derivatives which we have computed in the partial derivative’s
[36:48] video. So, in the directional derivative’s video we computed the directional derivatives
[36:52] at 0, 0, let us see what happens for the directional derivative at any other point.
[36:56] So, if your point is not 0, 0, both these functions x cube minus y squared x by x squared
[37:03] plus y squared squared and y cube minus x square y by x square plus y squared squared
[37:09] are continuous. Why is that because they are rational functions and the denominator is
[37:14] non-zero, so once that happens we are assured they are continuous and so we can apply the
[37:20] result that we saw on the, the theorem that we have seen in this video.
[37:25] So, this is just gradient f at x, y dot with u, so this if x, y is not 0, 0, which tells
[37:37] us that this is u1 times u1 by x square plus, let me rewrite this, 1 by x square plus y
[37:48] square square times u1 times x cube minus y squared x plus u2 times y cube minus x square
[37:59] y. This is what the directional derivative is if the point is not 0, 0. So, notice how
[38:07] that theorem allows us to avoid all the difficult computation with limits.
[38:13] What happens at 0, 0? And this is the real cautionary tale here. So, at 0, 0 we actually
[38:18] computed what happens and what we got if you remember was that this is u1, u2 by h, so
[38:27] this is 0 if u1 or u2 is 0, which means it is in the direction of the x axis or y axis,
[38:40] so those are the partial derivatives, partial derivatives are 0 which we have in this, from
[38:47] here as well, but if it is not, that is not the case then this does not exist, because
[38:55] this is a limit of 1 by h or some constant by h and so this does not exist.
[39:01] And so, this formula for the gradient, so the gradient dot u will give you the directional
[39:07] derivative does not hold in this case and what went wrong? What went wrong is that at
[39:13] 0, 0 the gradient function here, so this gradient function here at 0, 0 is not continuous and
[39:28] this is actually something we checked in our video on continuity. So, I will again suggest
[39:36] you go back and check that, we have actually seen both of these functions are not continuous
[39:40] at 0, 0.
[39:41] And we have seen in continuity that for a multivariable function, meaning a vector-valued
[39:47] multivariable to be continuous each of its component functions have to be continuous,
[39:51] in this case neither of them are continuous at 0, 0, so this is not continuous at 0, 0
[39:56] and immediately the theorem fails to, so we cannot apply that theorem as a result and
[40:05] so we have this situation where the partial derivatives do indeed exist and 0, but directional
[40:12] derivatives does not exist, so it is not given by gradient dot you, which would otherwise
[40:16] have been 0.
[40:17] So, you have to also careful when you apply that theorem and there is a hypothesis lurking
[40:26] in the background, if you are lucky and your functions are nice you do not have to check
[40:31] that and for this course that is most of the time that is what going to happen, but if
[40:36] you do math in particular, you do have to worry about such details.
[40:40] So, let us recall quickly what we have seen in this video, very importantly we have seen
[40:45] what is the gradient function or the gradient vector, it is a very easy function, you just
[40:50] put together all the partial derivatives into a vector, that is all it is, but it is a very
[40:54] important quantity and it is going to show up later on in this course as well as other
[41:03] courses.
[41:04] And the main punch line was that we can use that to compute the directional derivatives
[41:09] with some hypothesis as the gradient vector dot with the vector u, the unit vector u in
[41:17] whose direction we are taking the directional derivative. Thank you.