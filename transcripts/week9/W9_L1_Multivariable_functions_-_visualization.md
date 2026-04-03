# W9_L1: Multivariable functions - visualization

**Week:** Week 9
**YouTube URL:** https://www.youtube.com/watch?v=MfrAPZRrqxw

---

## Transcript

[00:00] [Music]
[00:14] hello and welcome to the match 2
[00:16] component of the online bsc program on
[00:18] data science and programming
[00:20] we are going to start our discussion on
[00:23] multivariable calculus
[00:25] and to begin with we will
[00:28] study multivariable functions and we'll
[00:31] do a little bit of visualization of such
[00:32] functions
[00:33] we'll see some examples and we'll end
[00:36] with
[00:37] by defining what are called curves okay
[00:40] so let's recall functions of one
[00:43] variable
[00:44] so we did this at the beginning of the
[00:47] course
[00:48] so recall that functions of one variable
[00:51] are functions from a domain d in r
[00:53] to real numbers so they are real valued
[00:56] functions
[00:57] so they they are like f of x
[01:00] is equal to some expression which is a
[01:03] number
[01:04] which meaning which evaluates to a
[01:06] number
[01:07] so here are some examples which we have
[01:09] seen earlier
[01:11] so linear functions polynomial functions
[01:14] rational functions and i will remind you
[01:16] of what that was
[01:17] trigonometric functions the exponential
[01:20] function
[01:22] the logarithmic function and then
[01:24] finally you can
[01:25] take arithmetic combinations of these
[01:27] when you can add them subtract them
[01:29] if you are lucky you can even divide
[01:32] them
[01:32] you can multiply them or you could take
[01:35] compositions so if
[01:36] if your if your functions are such that
[01:39] the
[01:40] range of one function is contained
[01:43] inside
[01:44] the domain of another function then you
[01:46] can compose those two functions
[01:48] and you can produce a new function of
[01:50] one variable
[01:51] so just to remind you for
[01:55] rational functions we meant things of
[01:58] the form
[01:59] say x by x squared plus one so
[02:02] this is what what typically was a
[02:04] rational function so
[02:05] a division of polynomials of course once
[02:08] you divide you have to be careful that
[02:09] the
[02:10] denominator is one zero if it is zero
[02:13] somewhere then you have to
[02:14] say that it is not defined at that point
[02:16] define it separately or just say that
[02:18] the domain
[02:20] is a restricted part of the real line so
[02:23] polynomials was
[02:24] for example f of x is x squared plus
[02:27] x plus one linear functions of course
[02:30] f of x is ah a x plus b
[02:35] ah where a and b are real numbers and
[02:38] then trigonometric functions where sine
[02:39] of x cosine of x
[02:42] ah tan x cotangent
[02:45] x and so on ah cosecant and c context
[02:50] okay the exponential function was e to
[02:52] the power x
[02:53] the logarithmic function was log of x
[02:57] of course you have to be careful because
[03:00] log is defined on the positive part
[03:03] so we don't define log for negatives so
[03:05] here the domain is the positive side of
[03:07] the x
[03:07] axis and then
[03:11] arithmetic combinations or compositions
[03:14] so by this we mean things like
[03:16] log of x squared plus 1. so this is a
[03:18] composition
[03:19] because you you have x square plus 1 and
[03:23] then the
[03:24] range of x square plus 1 is 1 to
[03:28] infinity which is inside the domain of
[03:30] the logarithm function so you do log of
[03:31] x square plus one that makes sense
[03:33] or you could do log of mod x and
[03:37] its undefined at zero or
[03:41] other examples are e to the power
[03:44] ah sine of x let's say so that's a
[03:47] composition or arithmetic
[03:48] combinations means something like um
[03:52] e to the power x plus e to the power
[03:54] minus x
[03:55] right so these are all functions that we
[03:58] have seen
[03:59] in single variable calculus and we
[04:02] studied
[04:02] various proper aspects of such functions
[04:06] things like how do you find maxima
[04:09] minima
[04:09] derivatives continuity and so on
[04:13] okay so let's get to scalar valued
[04:16] multivariable functions
[04:18] so a scalar valued multivariable
[04:20] function is a function f
[04:21] from d to r again the co domain is r
[04:25] and that's why it's scalar valued
[04:27] meaning it takes values in the real
[04:28] numbers
[04:30] but now d is a domain in r n where n is
[04:34] greater than 1 okay so this could be r 2
[04:37] or r 3
[04:38] r 5 r 20 whatever right so
[04:42] such a thing is called a scalar valued
[04:44] multivariable function
[04:46] and this is something that we are going
[04:48] to study
[04:49] uh extensively in the next couple of
[04:52] weeks
[04:53] and this will show up possibly again in
[04:57] further courses so this is mainly what
[05:00] we want to study going ahead
[05:02] ok so what are examples linear
[05:05] transformations
[05:08] polynomial functions ah and i'll
[05:12] expound on that in a minute ah and the
[05:15] arithmetic combinations or compositions
[05:17] so just ah to to be clear of what i mean
[05:20] by linear
[05:21] transformations you could think of a
[05:24] linear transformation from r into r
[05:26] or define it on some subset so for
[05:29] example you could take something like
[05:31] t of x 1 x 2 x n
[05:34] is a 1 x 1 plus a 2 x
[05:37] 2 plus
[05:40] a n x n right so this will be a
[05:43] scalar value multi variable function so
[05:46] we have been thinking of this in terms
[05:47] of linear algebra so far
[05:48] but now we can think of this also as a
[05:51] scalar valued multi variable function
[05:53] and well what what is a polynomial
[05:56] function well
[05:58] so you have f of x 1 x 2 x n and you can
[06:01] do something like
[06:02] x 1 square plus x 2 square plus
[06:06] x n squared maybe another polynomial
[06:09] function
[06:11] is ah x one times x two times up to x n
[06:15] and then maybe let me add
[06:19] ah x 1 squared x 2 cubed
[06:22] x 3 to the power 4 and then minus
[06:26] x 1 to the power 5 x
[06:29] 3 to the power 6 yeah so this is an
[06:32] example of a polynomial function
[06:34] in several variables
[06:38] ok and then you could you could combine
[06:40] these
[06:41] or you could combine other other ones as
[06:43] well
[06:44] and we will do more examples as we go
[06:47] ahead
[06:49] okay so let us talk about vector valued
[06:51] multivariable functions
[06:53] so vector valued multivariable functions
[06:55] means
[06:56] that now instead of r the domain
[07:00] sorry the domain can be r m where
[07:04] m is also larger than one so vector
[07:06] valued multivariable function is a
[07:08] function f
[07:09] from d to r m where d is a domain in rn
[07:13] and both m and n are strictly greater
[07:15] than one so such a thing is called a
[07:17] vector valued multivariable function
[07:21] ok so we can think of this as a vector
[07:23] of scalar valued multivariable functions
[07:26] okay and we have seen the example of
[07:29] linear transformations
[07:30] which means you can take a linear
[07:32] transformation from r n to r m
[07:34] so that means for each coordinate you
[07:36] have a
[07:37] linear transformation from r into r
[07:39] right so you have linear combinations of
[07:41] your x 1 x 2 x
[07:42] n and then you have m many of those that
[07:45] that was exactly how we got
[07:46] linear transformations from r into r m
[07:49] and we could restrict
[07:50] those to some domain if if we want to so
[07:53] those those will be
[07:55] vector valued multivariable functions
[07:57] yeah so let me
[07:58] give another few examples yeah f of x y
[08:02] z is x square plus
[08:06] y square y square plus z square
[08:10] z square plus x square right so this is
[08:13] a
[08:15] vector valued ah multivariable
[08:18] function this is a function from r three
[08:21] to
[08:22] r three so this is another example ah
[08:25] and this is not a linear transformation
[08:28] ok
[08:28] so let us sort of combine these so what
[08:31] is a multivariable function
[08:33] sometimes this is also called a function
[08:35] of several variables
[08:37] so multivariable function or
[08:40] a function of several variables is
[08:42] either a scalar valued multivariable
[08:44] function
[08:45] or a vector valued multivariable
[08:47] function
[08:48] so that means you could have a function
[08:50] from rn to
[08:52] rm ah
[08:55] or some domain in rn to rm and here we
[08:59] insist that the n is bigger than one but
[09:02] there is no restriction on
[09:03] m so m could be one or m could be larger
[09:06] ok
[09:06] if it is larger then that will fall
[09:09] under the category of
[09:10] vector valued multivariable functions if
[09:12] it is 1 it
[09:13] falls under the category of scalar
[09:17] valued multivariable functions
[09:20] so so we wont distinguish between these
[09:22] when when we say just multivariable
[09:24] function
[09:25] if there is a reason to distinguish we
[09:27] will make it explicit
[09:28] okay but much of what we are going to
[09:30] study is scalar valued multivariable
[09:32] functions
[09:34] fine ah so just
[09:38] as to set notations as we go ahead if we
[09:41] want to refer to an element in d
[09:43] what is d d is this domain in rn
[09:46] without bothering about the coordinates
[09:47] so remember that n since we are in rn we
[09:50] have coordinates x 1 x 2 x
[09:51] n but sometimes we do not want to
[09:54] explicitly
[09:55] talk about coordinates we just want to
[09:57] ah let us say if i want to add 2
[09:58] functions so f
[09:59] plus g of
[10:02] of x 1 x 2 x n so this this i do not
[10:05] want to refer to x 1 x 2 x n
[10:07] so i will just refer to x tilde as x 1 x
[10:10] 2 x n
[10:10] so so this is the vector x 1 x 2 x n or
[10:14] the n 2
[10:15] x 1 extraction whichever is convenient
[10:17] for the
[10:19] purpose at hand so don't get confused if
[10:22] you see an x tilt
[10:23] it just means x 1 x 2 x n
[10:27] okay so with that caveat let's look at
[10:29] lots of examples
[10:32] so here is a linear function this is a
[10:35] scalar valued function from r two to r
[10:37] two point five x minus three point nine
[10:39] y
[10:41] here is uh a polynomial so two x cube
[10:44] minus three y square plus four point
[10:45] eight x square minus
[10:47] x square times y minus nine point nine x
[10:49] y plus pi
[10:52] here's a slightly more complicated
[10:54] function sine of x squared plus y
[10:56] squared
[10:59] here's an example that you may actually
[11:02] have seen in statistics
[11:03] so this is f of x y is 1 over 2 pi e to
[11:06] the power minus
[11:08] x square plus y square divided by 2
[11:11] ah so this is the bivariate normal
[11:13] distribution
[11:14] in case that rings a bell
[11:18] another example may be from statistics
[11:21] so this is f of x y is 10 times e to the
[11:23] power minus 2 x minus 5
[11:25] y you can think of this as bivariate
[11:27] exponential or you can think of this as
[11:30] two independent exponentials and
[11:34] the joint density of that
[11:37] then here is a rational function x y
[11:39] divided by x square plus y squared and
[11:41] do keep this in mind because we may come
[11:43] across this again
[11:45] as we go ahead okay let us continue with
[11:48] our examples
[11:49] ah so your f of x y z is x square plus y
[11:53] squared plus z squared ah so again all
[11:56] of these are scalar valued
[11:59] functions so they they are taking values
[12:02] from
[12:03] r 2 to r or r 3 to r
[12:07] this is from r 3 to r so here is an
[12:10] example of something which is
[12:11] not a scalar valued multivariable
[12:14] function this is from r 3 to r 3.
[12:17] so f of x y z is 2 x comma 2 y comma 2 z
[12:21] and these two examples have something to
[12:23] do with each other
[12:25] and we will encounter them later on
[12:29] and just as a more
[12:34] convoluted example here's f of x y z is
[12:36] sine of x times cosine of y
[12:38] comma tangent of y plus z comma
[12:41] logarithm of
[12:42] x square plus y squared plus z squared
[12:44] again this can't take values
[12:46] um when x y z is zero
[12:50] and all three are zero so we have to
[12:53] define this function a priory
[12:55] ah on the domain
[12:59] where x is not zero y is not zero z is
[13:03] not zero of course we also have a
[13:05] tangent of y plus z
[13:07] so we have to define this you know when
[13:10] tangent function there are it does not
[13:14] exist everywhere so we have to be
[13:15] careful that y plus z
[13:17] is not multiples of
[13:23] odd multiples of pi by 2
[13:26] right and then we have e to the power x
[13:30] y z
[13:31] in our last coordinate so this is a
[13:34] function from
[13:35] some domain in r3 so this is defined in
[13:39] some domain in r3
[13:41] and its ranges in r4
[13:44] so its co domain is r4 so this is a
[13:46] function this f has
[13:48] f is from d to r four so just uh
[13:51] as an example so you can see here that
[13:54] we have got this by
[13:55] taking various products and
[13:58] compositions and so on of uh
[14:02] well known functions functions that we
[14:04] understand well
[14:05] and i'll also maybe mention a couple of
[14:07] other examples that
[14:10] so sometimes you may be we may be
[14:13] interested in
[14:14] defining functions piecewise so it may
[14:17] have some definition
[14:18] on some part and some definition
[14:20] somewhere else for example you could
[14:21] have
[14:22] that f of x y z x y is 1 on the unit
[14:26] interval
[14:27] so x y ah maybe i
[14:31] should write this as when
[14:34] um x and y are both between zero and one
[14:39] so this is on the unit square
[14:42] and zero otherwise and this is something
[14:45] you may have seen again in the
[14:46] statistics course this is the
[14:49] uniform density on the unit square
[14:54] and there could be other piecewise
[14:56] definitions for example you may have
[14:58] f of x y is let us say x times y
[15:01] and 0 this is on some part
[15:04] x y is in d and
[15:08] if it is not in d yeah so you we have
[15:10] functions of this type also so they may
[15:12] be defined
[15:13] piecewise so of course here when we say
[15:15] piecewise
[15:16] the piece refers to a piece of rn
[15:18] meaning the
[15:19] domain rn so in this case the domain is
[15:22] r2
[15:22] so it refers to pieces of r2 so now
[15:25] don't think of pieces
[15:26] as intervals in r
[15:29] instead think of them as sets on the
[15:32] plane
[15:33] you know if you have r2 if you have rn
[15:35] of course the visualization is much
[15:37] harder
[15:38] which leads us to an important point as
[15:40] to how do we visualize
[15:43] such things so let's do examples of that
[15:46] so of course visualization for
[15:48] multivariable functions is much harder
[15:50] than than it is for
[15:52] functions of one variable and that is
[15:54] because to visualize we have to think of
[15:56] the graph
[15:57] and if you remember what the graph was
[15:59] the graph meant
[16:01] its a subset of the
[16:04] domain across the codomain so in here
[16:07] the domain
[16:08] is rn and the codomain is rm
[16:11] so it will be a subset of rn cross rm
[16:14] and of course
[16:15] our visualization is limited to three
[16:17] dimensions
[16:18] so unfortunately we can't visualize
[16:20] functions which
[16:22] for any n at m but
[16:26] if if n is 2 and m is 1
[16:29] so meaning functions from r 2 to r such
[16:32] functions or subsets of
[16:33] r 2 to r such functions we can visualize
[16:36] okay so let us do some examples of those
[16:38] on some of the functions that we have
[16:40] seen in fact
[16:42] okay so here is a linear function the
[16:44] function f of x y is minus 0.9 x
[16:47] minus 1.5 y in fact this function is f
[16:50] of x y is
[16:51] a times x plus b times y and this a and
[16:54] b
[16:54] are varying in an interval so if i play
[16:58] the slider the
[16:59] function will change and this looks like
[17:02] a plane
[17:02] so this is a plane so
[17:05] linear functions the graph looks like a
[17:09] plane this is something we
[17:10] we understand because
[17:13] this is this is exactly the plane z is
[17:16] equal to
[17:17] a x plus b y ok and how this how does
[17:20] this plane
[17:21] move so if if we animate it so this is
[17:24] what happens to the
[17:25] plane as a and well we can animate b
[17:29] as well so if a and b both change this
[17:31] is what happens
[17:33] ah so this this plane moves around
[17:35] depending on the
[17:36] coefficients ok
[17:40] so let us look at the example of the of
[17:42] a rational function so the rational
[17:44] function that we had
[17:45] as an example in our slides was f of x y
[17:47] is x y divided by x squared plus y
[17:49] squared and here's how how the
[17:53] ah rational function looks like so this
[17:56] is
[17:57] um yeah it's some kind of surface
[18:01] and as you can see um there's some
[18:04] strange thing happening at 0
[18:05] because at 0 this function is a priori
[18:08] not defined
[18:09] so but what is worth noticing is
[18:12] what happens around 0. so if you look at
[18:15] this side
[18:16] and this side
[18:19] it's looking like you have hills right
[18:22] the function is like this
[18:24] whereas if you have the other two
[18:29] sides then the function is like you have
[18:31] troughs
[18:32] okay so such such phenomenon is
[18:36] very interesting and and we will try to
[18:38] detect such phenomenon as we
[18:40] go ahead okay let us look at another
[18:42] interesting function so this is the
[18:44] function
[18:45] sine of x squared plus y squared okay if
[18:47] we plot the
[18:49] graph well here is what it looks like so
[18:51] if this is
[18:52] the projection down to the down to r2
[18:55] this is what happens
[18:57] so its you can see its its oscillating
[19:00] right because
[19:01] the sine function oscillates so
[19:03] depending on
[19:04] the value of x square plus y squared the
[19:07] sine
[19:08] function will take some value so it will
[19:10] move in circles
[19:11] so as as your circles go go out that is
[19:14] how
[19:14] how it looks and this is how it looks
[19:19] if you if you view it over
[19:22] the plane r2 so it is something in r3
[19:25] and you can see it's moving in circles
[19:28] right as as your circle
[19:34] yeah so this is the origin so at
[19:37] 0 0 its 0 and then as x square plus y
[19:40] squared the radius increases
[19:43] you get that it increases and then as
[19:46] the radius is pi by 2
[19:49] that's that's when sorry root of pi by 2
[19:52] so x square plus y square is equal to pi
[19:54] by 2
[19:55] ah that's when it attains 1
[19:58] and then it goes down again so again at
[20:01] pi it becomes 0 and
[20:03] that's how the behavior continues
[20:06] okay so ah so this is a very interesting
[20:09] function yeah it looks very nice yeah
[20:11] so as you can see graphs of functions
[20:16] can yield some very beautiful visually
[20:19] appealing
[20:24] pictures ok let us now look at the
[20:28] example of the exponential
[20:33] joint density of for 2 exponential
[20:37] 2 independent exponential random
[20:38] variables
[20:40] and so here the means are 0.86 and 3.37
[20:46] and as we change them the the picture
[20:50] will look different
[20:51] and this is how it looks like yeah this
[20:52] is the exponential function
[20:55] um
[20:58] so as you can see it it it's very sharp
[21:02] and then it goes down to zero very fast
[21:06] right so this is exactly what happens
[21:07] for the one variable exponential
[21:09] function
[21:10] and finally let us do the example of the
[21:12] bivariate normal
[21:14] so this is how the function looks like
[21:15] so it is an exponential function
[21:17] but it goes down to
[21:21] 0 very fast the only around the origin
[21:25] there is a hill and the size of the hill
[21:29] depends on
[21:30] some parameters like the means and so on
[21:33] and so so this will show you how how it
[21:35] changes
[21:36] so depending on how it couples or how
[21:38] the means are
[21:40] it will be a very steep hill
[21:44] or it will be a much flatter hill but it
[21:46] will always be a hill and
[21:47] for most of the plane it will it will be
[21:51] very close to zero ok so having seen
[21:53] some examples let us
[21:55] return back to our slides
[21:58] so let us do the same things that we did
[22:01] for one variable
[22:02] functions namely we can
[22:06] let us note that we can perform
[22:08] arithmetic operations on on these
[22:10] functions
[22:11] so if you have two functions on the same
[22:13] domain d
[22:14] so you have f and g from d to r m and
[22:16] both of
[22:17] so which are multivariable functions on
[22:19] d then
[22:20] you could for example add them how do i
[22:22] add them so you
[22:23] if you want f plus g of x tilde then
[22:26] that is f of x tilde plus g of x
[22:28] this makes sense because in r m you can
[22:30] add vectors
[22:31] right so r m is a vector space in
[22:33] particular so this is
[22:35] one of the reasons why we specifically
[22:38] studied linear algebra
[22:40] so suppose you have a constant c so
[22:43] scalar
[22:44] then the function c times f is defined
[22:46] on d by
[22:48] c f of x tilde is c times f of x tilt so
[22:51] what does that mean again this is scalar
[22:53] multiplication in
[22:55] rm so that means it multiplies each
[22:58] component
[22:59] in rm
[23:02] and if m is one so this is a case of
[23:04] scalar valued
[23:06] multivariable functions then we can even
[23:09] talk about the product
[23:10] so the product function f g is defined
[23:13] on d by f g
[23:14] of x tilde is f of x tilde times g of x
[23:17] this makes sense because you can
[23:18] multiply real numbers
[23:20] so the same way as we did for single
[23:22] variable functions you can do this for
[23:25] scalar valued multivariable functions
[23:27] and
[23:28] for the same reason you can also
[23:32] divide but provided the denominator is
[23:35] nonzero so if you have
[23:37] a scalar value if m is 1 meaning f and g
[23:40] are both scalar valued
[23:43] multivariable functions and g of x tilde
[23:46] is non-zero
[23:46] then the quotient f by g is defined and
[23:51] f by g of x tilde is f of x tilde by g
[23:53] of x delta and for
[23:54] so so basically it is defined on the
[23:56] domain d except the points where g of x
[23:58] tilde zero so
[23:59] it is a smaller domain then it could be
[24:02] a smaller domain than d
[24:03] okay let us continue and talk about
[24:06] composition
[24:07] so if you have functions
[24:11] let's say a function f from d to r m
[24:15] and you have another function g from e
[24:18] to r p
[24:19] what is e e is some domain
[24:23] which contains the range of f okay so
[24:26] the range of f is contained in the
[24:27] domain
[24:28] e then we can talk about g
[24:32] composed f right so for each x tilde and
[24:35] d we can talk about g
[24:36] composed f by looking at f of x tilde
[24:39] and then applying g
[24:40] on that why can we do that because the
[24:43] range of f
[24:44] is contained in the so f of x tilde is
[24:46] contained in the
[24:47] so g of f of x still makes sense so this
[24:50] define
[24:51] yields a well defined element in r p so
[24:54] we can
[24:54] talk about g composed f so this is
[24:56] called the composition
[24:59] ah so we won't have a lot of
[25:03] use for this in when m and p are
[25:07] beyond 1 but for the cases where m and p
[25:10] are both 1
[25:11] we have already seen examples of this
[25:13] for example we had
[25:14] sine of x squared plus y squared so x
[25:16] squared plus y squared
[25:18] ah is a function from r 2 to r and then
[25:21] we have a
[25:22] function from r to r again which is sine
[25:24] of z
[25:25] so we can apply that on x square plus y
[25:27] square or we had logarithm of x squared
[25:29] plus y squared plus z squared
[25:31] of course this works only for the
[25:33] positive side ah
[25:34] so x squared plus y squared plus z
[25:36] squared we have to restrict for non zero
[25:39] x y z
[25:43] ok ah so here is an example f of x y is
[25:46] x square plus y squared is a function
[25:47] from r to
[25:48] r and then we could look at g of x is
[25:51] square root of x so this is a function
[25:53] from
[25:55] ah the non negative part of the
[25:58] real line to r so you can do g composed
[26:01] f
[26:01] and that gives us square root of x
[26:03] square plus y square so this is a
[26:05] function that we ah
[26:10] would like to understand this is uh like
[26:12] the radius if we think of
[26:16] x square plus y squared as being r
[26:17] squared where r is the radius
[26:21] okay so finally i am going to end with
[26:25] something which is slightly off topic
[26:26] but this is one for the sake of
[26:28] completeness and because
[26:30] we will have some use for this in whats
[26:32] coming
[26:33] so this is curves in rm okay so we have
[26:35] studied multi
[26:36] we have studied single variable
[26:38] functions which is r to r we have
[26:39] studied multivariable functions which is
[26:41] r into r r
[26:42] m where n
[26:46] is strictly greater than one and m
[26:49] could be one or more ok so that leaves
[26:52] us with one case which is
[26:54] n is equal to 1 and m is bigger than 1
[26:57] that is exactly
[26:59] this case here called curves in rm okay
[27:02] so curve in rm refers to the range of a
[27:05] function f
[27:07] d to r m where d is a domain in r so it
[27:09] is a function from
[27:10] some subset of r to r m so we have seen
[27:14] such
[27:15] examples before so just to recall
[27:18] let us look at lines in rm so for
[27:21] example if you have a line in r2
[27:23] that is an example of a curve
[27:27] gamma of f where f is a function of one
[27:29] variable so this is a curve
[27:31] in fact we we we did talk about general
[27:34] curves
[27:34] um in at least in r2 when we were
[27:37] talking about
[27:38] tangents earlier okay so gamma f where f
[27:42] is a function of one variable this is a
[27:44] curve
[27:45] ah in r2
[27:48] well actually if it is a function of one
[27:50] variable with
[27:52] range in something else then gamma is
[27:57] then also gamma is a curve
[28:01] so conics in r2 this is very ah
[28:04] a very important example so conics in r2
[28:07] again we have talked about these when
[28:09] when we did tangents
[28:11] so this is for example ellipses
[28:13] parabolas hyperbolas
[28:16] the circle right
[28:19] and then here's two more examples ah
[28:21] this is one of my favorite examples
[28:23] the helix in r3 so that's cosine t comma
[28:26] sine t comma t so this is a parametric
[28:29] equation so as t varies ah this vector
[28:33] cosine t sin t t varies and how does it
[28:35] vary
[28:35] it varies like this yeah so this is the
[28:38] helix
[28:39] ah and as you may or as you may have
[28:42] heard
[28:43] the helix is used in various
[28:46] branches of science including biology so
[28:49] this is like the
[28:50] slingy yeah we have this thing called a
[28:52] slingy like this
[28:53] and then you throw it it's like a wire
[28:55] then when you throw it
[28:57] ah it kind of bounces from step to step
[28:59] right that's exactly how the
[29:01] helix looks like okay and finally just
[29:05] for the sake of completeness here's the
[29:08] subset x
[29:08] y such that y is equal to x cube so this
[29:11] is a subset of r 2
[29:12] and i will encourage you to draw this
[29:14] subset and and see how it looks like
[29:16] so koenigs in r2 let us give a couple of
[29:18] examples of that
[29:20] so one example is x squared plus a
[29:21] square plus y squared by b squared is
[29:23] one
[29:23] so the ellipse and a special case is
[29:25] when a is equal to b
[29:26] that is the circle so x square plus y
[29:28] squared is equal to
[29:30] a squared or we have things like x y is
[29:33] one
[29:34] ok so ah yeah these are examples of
[29:37] conics
[29:38] and i i want to make a point here namely
[29:40] that
[29:41] see this there is a slight difference in
[29:43] the representation
[29:45] that we have here whereas as opposed to
[29:49] the representation we have here this is
[29:51] called a parametric representation s of
[29:53] t is equal to cosine t
[29:54] sin t t because we are describing the
[29:57] curve in terms of a
[29:58] parameter t whereas
[30:02] these two are as sets so they are we are
[30:05] giving the defining equations
[30:07] of course it is quite quite often one
[30:10] can go between the two
[30:11] so we can parameterize this for example
[30:14] for if you have x squared plus y squared
[30:17] is a squared
[30:18] then we know that a parametric equation
[30:20] is a times cosine theta a times
[30:22] sine theta yeah more generally if you
[30:24] have x squared by square plus y square
[30:26] by b square you could have a cosine
[30:27] theta b sin theta
[30:30] so you can go between parameters and
[30:33] equations and sometimes it is useful to
[30:35] do that
[30:36] ok so let us just summarize what we have
[30:39] seen in this video we have seen
[30:41] multivariable functions in particular we
[30:44] have seen scalar valued multivariable
[30:46] functions and vector valued
[30:47] multivariable functions we saw that
[30:51] we could do arithmetic operations on
[30:53] these specifically addition and
[30:55] subtraction
[30:56] and when they are scalar valued you can
[30:59] actually
[30:59] multiply and divide as well and then if
[31:02] you have two multiple variable functions
[31:06] such that they their the range of one
[31:09] and the domain of another
[31:11] matches up then you can compose them as
[31:13] well
[31:15] that gives you a new way multivariable
[31:16] function finally we saw
[31:18] curves we also saw a bunch of examples
[31:21] where we visualized these multivariable
[31:23] functions thank you