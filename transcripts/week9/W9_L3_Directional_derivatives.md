# W9_L3: Directional derivatives

**Week:** Week 9
**YouTube URL:** https://www.youtube.com/watch?v=uhUqybTaGns

---

## Transcript

[00:00] [Music]
[00:14] hello and welcome to the match 2
[00:15] component of the online bac program on
[00:17] data science and programming
[00:20] in this video we are going to talk about
[00:21] directional derivatives so we have
[00:23] already seen the notion of partial
[00:24] derivatives
[00:26] let us recall first some of the
[00:27] notations that we mentioned in
[00:29] the partial derivatives video so unless
[00:32] specifically mentioned otherwise
[00:34] in this video also a function will mean
[00:36] a scalar valued multivariable function
[00:39] if a tilde is a point in rn then an open
[00:41] ball of radius is
[00:43] r around it is the set consisting of
[00:46] those points
[00:48] such that the distance of the point x
[00:51] from a is less than r
[00:55] and finally e1 e to n is the standard
[00:58] ordered basis in rn
[00:59] so we made use of the standard ordered
[01:01] basis in rn
[01:02] in order to define the partial
[01:04] derivative so let us recall the
[01:05] definition
[01:06] so if f of x 1 x 2 x n is a function
[01:08] defined on some domain
[01:10] d in rn the partial derivative of f with
[01:13] respect to
[01:14] the variable x i is the function denoted
[01:17] by
[01:18] f subscript x i or del f del x i
[01:22] and how do we define it del f del x i is
[01:24] the function
[01:25] which is obtained that as a limit h
[01:28] tends to 0
[01:29] f of x tilde plus h times e i e i
[01:32] is the ith basis vector in that
[01:36] in our standard order basis minus f of x
[01:39] tilde
[01:40] divided by h and
[01:43] what did this thing compute so the
[01:46] function f of f subscript x i
[01:50] which is the partial derivative with
[01:52] respect to x i computes the rate of
[01:54] change of the function f
[01:55] with respect to the variable x i
[01:58] this is what it computed so essentially
[02:00] what what we did was
[02:02] we said well your function is defined on
[02:04] the entire domain d
[02:06] but now let's restrict it only on the
[02:09] ah axis corresponding to x i
[02:13] so if for example it's a function of two
[02:15] variables x and y
[02:16] when you want to compute
[02:20] this partial derivative function at a
[02:22] point a
[02:23] you move your say with respect to x
[02:27] so you move your x axis parallelly
[02:30] so you look at the parallel line to the
[02:32] x axis
[02:33] passing through the point a you restrict
[02:35] your function to that
[02:37] just that line and then you see what
[02:39] what happens so it becomes a function of
[02:41] one variable
[02:42] you compute the rate of change at that
[02:44] point with respect to
[02:45] ah what is happening on that line
[02:49] right so you can think of the rate of
[02:52] change
[02:54] of the function x f with respect to x i
[02:56] so that which is the partial derivative
[02:58] you can think of this as it computes the
[03:01] rate of change of the function f
[03:02] in the direction of the unit vector e i
[03:05] and e is showing up
[03:06] in the expression as well so this is the
[03:10] rate of change in that direction meaning
[03:12] on that line
[03:13] so which line the line containing e i
[03:16] but
[03:17] which is ah so ei remember is a vector
[03:20] and now we are moving that vector to ah
[03:23] start from the point a okay so in the
[03:26] direction of the x
[03:28] x i axis so ah
[03:32] so the direction is the direction of the
[03:34] x i axis so which means that you are
[03:35] moving this
[03:37] x axis parallelly so that it passes
[03:40] through your 0.8
[03:41] to spell it out explicitly let us recall
[03:44] that
[03:45] we can write this expression as
[03:50] ah limit h tends to 0
[03:55] f of x 1 x 2
[03:59] all the way up to x i minus 1 and x i
[04:03] plus
[04:03] h and then so one can think of this
[04:06] x i plus h times 1 and then
[04:10] x i plus 1 all the way till x n
[04:13] and then minus f of x 1 x 2 x n
[04:19] divided by h so the only change happens
[04:21] in the ith coordinate
[04:23] all the other coordinates remain the
[04:24] same
[04:26] this is how this function is and we can
[04:28] rewrite this as
[04:30] f of so this part we can rewrite as f of
[04:34] x 1 plus h times
[04:37] 0 x 2 plus h times 0
[04:42] and so on x i minus 1 plus h times 0
[04:47] now x i plus h times 1
[04:50] and then x i plus 1 plus h times 0
[04:54] and then all the way up to x n plus h
[04:57] times zero that's what this is that's
[04:58] how we get
[04:59] this expression f of x 1 x 2 x i minus 1
[05:02] x i plus h x i plus 1 x n
[05:04] right so now we can ask
[05:07] instead of thinking about the rate of
[05:09] change in the direction of one of the
[05:11] axis
[05:12] what if i want to think of the rate of
[05:13] change in some other direction
[05:15] yeah after all there are many direction
[05:16] right in the x y plane
[05:18] well you have the x axis you have the y
[05:20] axis and then there are all these other
[05:22] directions
[05:22] so you could ask what about the rate of
[05:25] change in one of those directions
[05:27] okay so the let us talk about the rate
[05:29] of change
[05:30] at a point in a particular direction
[05:34] so let f x 1 x 2 x n be a function
[05:37] defined in the domain d in r n
[05:38] containing a point a tilde and an open
[05:40] ball
[05:41] around it suppose instead of the
[05:42] direction of the axis
[05:44] we are interested in the rate of change
[05:46] of the function in some other direction
[05:48] okay so we can use the same idea as we
[05:50] have for partial derivatives
[05:52] so we choose a unit vector so remember
[05:54] that we have chosen the vectors e 1 e 2
[05:57] e n these are remember that these are
[05:59] unit vectors so these have
[06:01] what we call norm 1. yeah recall this
[06:04] from the linear algebra
[06:06] part so these have norm 1 or these have
[06:09] length 1. so
[06:12] instead of instead of e 1 into e n if
[06:15] you have some other direction
[06:16] not a direction of for the axis then
[06:20] we can take a unit vector in that
[06:22] direction
[06:24] and then we can compute this number
[06:25] limit h tends to zero
[06:27] f of a tilde plus h times u minus f of a
[06:30] till
[06:31] divided by h so when we want the
[06:33] direction to be
[06:34] the direction of the axis that time we
[06:37] use
[06:38] e i's if it's some other direction you
[06:40] choose a unit
[06:41] vector in that direction and then you do
[06:43] the same thing that you did earlier and
[06:46] if if you agree that ah what the
[06:48] previous expression computed the rate of
[06:50] change
[06:52] in the direction of the axis uh so on on
[06:55] the
[06:56] uh lines parallel to the axis then this
[07:00] will compute the
[07:02] rate of change in the direction of the
[07:06] line passing through this vector u
[07:10] so you take that line passing the vector
[07:12] you move it parallel so that it passes
[07:14] through a that will give you some
[07:16] some line passing through a and in the
[07:19] direction of the vector u
[07:21] and then you restrict your function to
[07:23] that line so it becomes a function of
[07:25] one variable
[07:26] and then we know how to compute the
[07:28] derivative that is what this is so to
[07:30] spell this out
[07:30] explicitly what we are saying is if a
[07:33] tilde is
[07:34] a 1 a 2 a n those are the coordinates of
[07:36] a tilde
[07:38] u has coordinates
[07:41] u 1 u two u n then
[07:45] this what is this expression this
[07:47] expression is exactly
[07:48] limit h tends to zero
[07:52] f of a one plus h times u one
[07:56] a two plus h times u two
[07:59] all the way up to a n plus h times u n
[08:02] minus f of a one a two a
[08:06] divided by h and you are taking the
[08:08] limit as h tends to zero
[08:09] so you think of this uh this this entire
[08:12] thing as a function of h
[08:13] and you take its limit so how is this a
[08:15] function of one variable
[08:17] so you think of g of h as
[08:20] this f of a one plus h u one
[08:24] all the way up to eight a n plus h u n
[08:26] right
[08:27] and then what what this translates to is
[08:29] this translates to
[08:31] a limit h tends to 0 g of h
[08:35] minus g of 0 divided by so this is
[08:38] exactly the
[08:40] derivative of this function g
[08:43] at zero so this will this is the rate of
[08:46] change in in that direction as a result
[08:48] okay so this is the same idea that we
[08:50] saw for partial derivatives
[08:51] fine let us do a couple of examples uh
[08:53] to to be clear about what we are saying
[08:56] so let us find the rate of change of f
[08:58] of x y which is x plus y at 0 0 in the
[09:00] direction of the
[09:01] y is equal to x line
[09:05] so we will apply the um definition so
[09:09] first of all we need to
[09:10] understand what is the unit vector so
[09:12] for y is equal to x
[09:14] the unit vector you can check is 1 by
[09:16] root 2 comma
[09:18] 1 by root 2. so if you prefer
[09:21] in terms of angles the y is equal to x
[09:24] line
[09:25] makes an angle 45 degrees with respect
[09:27] to the x axis
[09:28] and so unit vector is going to be cosine
[09:30] 45 sine 45 so this is exactly what we
[09:32] have
[09:33] okay so now what we want to compute is
[09:34] limit h tends to 0
[09:36] f of 0 plus h times 1 by root 2
[09:40] comma 0 plus h times 1 by root 2
[09:43] minus f of 0 0 divided by h
[09:47] okay so let's evaluate what this is so
[09:50] this is f of h
[09:51] h by root 2 comma h by root 2
[09:54] which is h by root 2 plus h by root 2
[09:59] minus 0 plus 0
[10:03] divided by h so this is
[10:06] 2 times h by root 2 so that is root 2
[10:09] times h
[10:10] in the numerator
[10:15] divided by h which is exactly root 2.
[10:18] so that is the rate of change of this
[10:20] function in the direction
[10:23] of the y is equal to x line
[10:27] fine ah let us lets now
[10:31] do the second one so this is not at the
[10:33] origin so the rate of change of f of x y
[10:35] z
[10:36] which is x y plus y z plus z x at one
[10:38] two three in the direction of the vector
[10:40] four
[10:40] three zero ok so now this vector is
[10:43] given to us
[10:44] but this is not a unit vector so we have
[10:46] to first convert it into a unit vector
[10:48] so let's
[10:49] see what the unit vector here is so if
[10:52] we call this vector v
[10:54] so as we know unit vector in the same
[10:56] direction is given by
[10:58] dividing by its norm so dividing by its
[11:02] ah by its length
[11:05] so if we do that we get 4 comma 3 comma
[11:08] 0
[11:09] divided by norm of e so let us compute
[11:11] what is norm of v
[11:12] so norm of v is ah square root of
[11:16] four square plus three square plus zero
[11:19] squared
[11:20] ok this is very conveniently sixteen
[11:22] plus nine which is twenty five so root
[11:24] of twenty five
[11:26] which is 5 so this is 1 by 5
[11:29] times 4 comma 3 comma 0
[11:33] right so this is the unit vector u so
[11:35] now what do we have to compute we want
[11:37] to compute limit h tends to 0
[11:40] um f of
[11:44] 1 plus h
[11:47] times 4 by 5
[11:51] 2 plus
[11:55] h times 3 by 5 and
[11:59] 3 plus h times
[12:02] 0 by 5
[12:06] minus f of 1 2 3
[12:10] divided by h ok let us evaluate what
[12:13] this is
[12:15] so limit h tends to 0
[12:18] so if you substitute
[12:21] these 1 plus h 4 h by 5 2 plus 3 h by 5
[12:26] and
[12:26] 3 into this expression and also
[12:28] substitute 1
[12:30] 2 3 in this expression you will see
[12:31] there is a fair amount of cancellation
[12:33] and so the the terms that are left are
[12:40] ah of are going to be
[12:48] h square times 12 by 25
[12:52] plus
[12:57] 2 times h times 4 by 5
[13:03] plus 1 times h times 3 by 5
[13:07] so this is coming from your first x y
[13:08] term this is the expression
[13:11] and then for the other two terms you you
[13:13] probably have only one term each
[13:15] ah so three times ah
[13:19] um h
[13:23] times 3 by 5 plus 3 times
[13:27] h times 4 by 5
[13:30] right and the other terms cancel with f
[13:32] of 1 comma 2
[13:33] comma 3. so i i suggest that you
[13:36] do this so and then divided by h
[13:41] fine so what do we get so the h cancels
[13:44] from the numerator and the denominator
[13:46] and then in the numerator the first term
[13:48] you have an h squared
[13:50] so that limit will be 0 and the
[13:53] others will survive so what you will get
[13:55] is 2 times 4 by 5. so 8 by 5
[13:58] plus 3 by 5
[14:01] plus 9 by 5
[14:06] plus 12 by 5 okay and that's that's what
[14:09] the answer is
[14:11] so the answer is going to be 8 plus 3 11
[14:15] plus nine twenty plus twelve thirty two
[14:18] by
[14:18] five so this is what the answer will be
[14:27] ok ah so i hope this this was a slightly
[14:30] more
[14:31] tedious calculation but not difficult at
[14:33] all i will suggest if you didn't follow
[14:34] it as i was doing it
[14:36] please do do it yourself
[14:39] okay and finally here is an example
[14:41] where we specify the direction so the
[14:43] direction
[14:43] is 60 degrees from the x axis uh
[14:46] so this is on the xy plane so let's see
[14:48] what is u here so u here is going to be
[14:51] um so if the angle is theta then then u
[14:54] will be
[14:55] cosine theta sine theta so here you have
[14:57] cosine of
[14:58] sixty ah sine of six t
[15:02] so ah if i remember my sines and cosines
[15:05] correctly this is
[15:08] half and root three by 2
[15:14] and ok so now
[15:18] we can plug this in and see what we get
[15:21] so
[15:21] the limit h tends to 0
[15:26] f of 1 plus
[15:29] h times half comma
[15:33] 0 plus root 3
[15:37] by 2 times so h times root 3 by 2
[15:41] minus f of 1 comma 0 divided by h
[15:46] so what is that limit h tends to 0 sine
[15:49] of
[15:52] 1 plus h by 2 times
[15:56] 0 plus r
[16:00] plus root 3 by 2 times h minus
[16:08] sine of one comma zero
[16:16] divided by h
[16:23] ok so now we can we can use our
[16:27] ah trigonometric formula and expand this
[16:30] and get the answer
[16:31] and
[16:35] ah yeah so so maybe
[16:38] an easier way of doing this is to
[16:40] actually use the function g that we
[16:41] defined so here
[16:43] g of h is ah
[16:48] sine of so
[16:51] sine of this guy one plus h root h by
[16:54] two
[16:55] root three by two h
[17:06] and what this thing is is really
[17:09] um g prime at zero
[17:15] right so let us evaluate what is g prime
[17:16] of h here so here if we evaluate g prime
[17:19] of h
[17:20] we get so g prime of h
[17:24] is cosine of the same thing
[17:27] ah multiplied by um
[17:33] ah 1 plus so
[17:39] root 3 by 2 h
[17:44] times this is 1 plus h by 2 so
[17:47] times half plus
[17:52] 1 plus h by 2 times
[17:56] root 3 by 2 right this is using the
[17:59] composition rule okay and so now if i
[18:01] want g prime of 0
[18:03] this is going to be i substitute h is 0
[18:05] in in this expression so
[18:08] cosine of this same thing so 1 plus 0 by
[18:10] 2 times root 3 by 2 times
[18:13] 0 so that gives us just cosine of 0
[18:17] and then times when i substitute here
[18:19] the first term does not contribute
[18:20] because h is 0
[18:21] and the second term contributes a root 3
[18:24] by 2. so cosine of
[18:26] 0 times root 3 by 2. so that is just
[18:30] root 3 by 2 okay so that is the rate of
[18:33] change of
[18:34] this function in the direction of
[18:38] 60 degrees from the x axis okay so i
[18:41] hope it's clear how we are computing
[18:43] this
[18:43] and that these limits are tedious but
[18:46] not difficult
[18:47] okay so let's look at the graphical
[18:48] representation of some of these examples
[18:51] in geogebra and try to see what the
[18:54] directional derivative at these points
[18:55] is computing for us
[18:57] so let's look at the first example which
[18:59] was f of x y is x plus y
[19:01] so here's the graph of f of x y is x
[19:04] plus y
[19:04] so the red line is the x axis the green
[19:07] line is the
[19:08] y axis and here's how that graph looks
[19:11] like
[19:12] ah so it's a plane as we have seen
[19:14] before as well
[19:16] and we want to look at
[19:19] the line y is equal to x on the x y
[19:22] plane
[19:23] and look at the corresponding plane on
[19:26] top
[19:27] and then once we intersect the graph
[19:30] with that plane
[19:31] that will tell us how the function
[19:34] behaves or looks like above that line so
[19:38] here's the line y equal to x uh
[19:41] extended into the plane above it
[19:44] um so that this is uh the intersection
[19:47] of two planes
[19:48] and so if we intersect them we get this
[19:51] line
[19:52] uh so if i remove the graph
[19:55] and the plane here's how the
[19:59] he the here's how the um
[20:02] picture looks like so just once again
[20:05] draw the plane so here is the plane
[20:06] on which that line is and once i remove
[20:09] it this is how the
[20:11] graph of the function on the line or
[20:14] above the line y is equal to x looks
[20:15] like
[20:18] so um so what is the directional
[20:21] derivative telling us it is telling us
[20:23] the slope of this line
[20:24] right so if you take the angle of this
[20:26] line with the
[20:27] line y is equal to x it is telling us
[20:29] something about the
[20:30] ah angle there so tan tan of that angle
[20:33] that is exactly
[20:35] what the directional derivative is
[20:36] computing and
[20:38] you can try and compute it and see that
[20:41] what we have done is exactly that
[20:42] computation
[20:44] okay let's look at the the other example
[20:48] in three dimensions which was ah the
[20:51] function sine of x y so here is how the
[20:53] function sine of x y looks like so we
[20:55] have seen this
[20:56] function before so this is a very
[20:58] beautiful looking function
[21:00] and now we wanted to look at the point
[21:03] 1 comma 0 and we computed the
[21:05] directional derivative
[21:07] at that point with
[21:11] in the direction
[21:14] where the angle made was 60 degrees with
[21:16] the x axis so
[21:17] if you compute the equation of that line
[21:20] it
[21:20] it will give you this line here and then
[21:23] we want to look at the plane above that
[21:25] right so that is the plane above that
[21:27] and when we intersect these two that is
[21:30] exactly
[21:31] what happens on that above that line so
[21:34] above that line
[21:35] that is what happens so here is what
[21:38] happens if we intersect those two
[21:40] and if i now remove the graph you can
[21:44] see this is what it looks like
[21:45] so this is like the prime function
[21:48] except that the oscillations keep
[21:52] getting faster
[21:54] as you move away from the axis as the x
[21:57] or the y values
[21:58] ah increase in in magnitude
[22:02] as you would expect so we we want to
[22:04] compute uh we
[22:05] we were the question that we had
[22:09] or the thing that we computed was what
[22:12] happens at 1 comma 0.
[22:13] so this is the point 1 comma 0 over here
[22:16] and
[22:17] you can see that at that point
[22:21] this is how that curve looks like and
[22:23] what we are computing is the
[22:25] um if you draw the derivative at that
[22:27] point
[22:28] the uh slope of the derivative with with
[22:30] respect to
[22:31] this ah line that we just uh so on that
[22:35] plane
[22:35] so that that we just it is so on this
[22:37] plane
[22:39] what is the slope of that line and that
[22:40] is exactly what the
[22:42] directional derivative computes fine so
[22:45] let us now define what is the
[22:46] directional derivative so this is
[22:48] exactly on the
[22:49] same lines as we did for the partial
[22:51] derivative so let f of x 1 x 2 x n be a
[22:54] function defined in the domain d in rn
[22:56] the directional derivative of f in the
[22:57] direction of the unit vector u
[22:59] is the function so earlier we have a
[23:01] computing limits at a particular point
[23:03] now we do it as the point varies so this
[23:05] is a function and
[23:06] the important part here is the notation
[23:09] so the notation is f
[23:11] subscript u so earlier we had f
[23:13] subscript x i
[23:15] so here instead we have f subscript u
[23:17] where what is u it is that
[23:19] unit vector uh in whose direction
[23:22] we are computing this um directional
[23:25] derivative so f subscript u
[23:27] and the definition is exactly the same
[23:30] so instead of a tilde
[23:32] because we are treating it as a function
[23:34] we do this at x till
[23:37] and the domain of this function is
[23:39] exactly those points of d
[23:40] at which the limit exists so if the
[23:43] limit does not exist we
[23:45] we we do not talk about directional
[23:47] derivatives at that point
[23:48] and the limit exists you define the
[23:50] function over there so i just want to
[23:52] make a
[23:52] small remark here ah but an important
[23:55] one
[23:56] so if you take the
[23:59] ah unit vector e i right
[24:02] so you can define the directional
[24:05] derivative in the direction of the unit
[24:07] vector e i
[24:08] that is exactly our partial derivative
[24:11] this is exactly our partial derivative
[24:13] so this is a general version of the
[24:15] partial derivative
[24:22] ok so let us quickly go through some
[24:24] properties we saw this in examples when
[24:26] we
[24:27] did the partial derivatives but these
[24:30] hold generally for directional
[24:31] derivatives and
[24:32] let us put them down clearly so one is
[24:34] linearity
[24:35] so if you have a constant c and you have
[24:37] two functions for which the
[24:39] directional derivative at a point
[24:43] eight a in the direction of the unit
[24:45] vector u exists
[24:47] then it also exists for the function c f
[24:50] plus g and and to compute it you can
[24:54] just do linearity which means c
[24:57] f plus g the directional derivative is c
[25:00] times
[25:00] the directional derivative of f plus
[25:04] the directional derivative of g
[25:07] uh remember that u has to be the same
[25:10] you can't choose different directions
[25:12] and
[25:12] hope to get the same thing right okay so
[25:14] that is linearity so in particular it
[25:16] follows from here that if you have f
[25:18] plus g then
[25:19] the directional derivative is the sum of
[25:21] the directional derivatives
[25:22] if you have f minus g it's the
[25:24] difference
[25:26] and if you just multiply by a constant
[25:28] that constant comes out
[25:30] then we have the product rule we did all
[25:32] these for derivatives and now we are
[25:34] repeating these for
[25:35] our directional derivatives when i say
[25:37] derivatives i mean from one variable
[25:38] calculus
[25:40] okay so if the directional derivative at
[25:42] the point a in the direction of the unit
[25:44] vector u
[25:44] exists for both the functions f and g
[25:47] then it also exists for the product
[25:49] and it's given by the product rule
[25:51] exactly the same as
[25:52] we had for one variable calculus so f
[25:55] times g directional derivative at u
[25:58] in the direction of the unit vector u is
[26:02] f in the directional derivative of f in
[26:05] the direction
[26:06] u at a times g of a
[26:09] plus f of a times ah the directional
[26:13] derivative of g
[26:14] in the direction of u at e okay and
[26:17] finally we have the
[26:18] quotient rule so again with the same
[26:21] hypothesis
[26:22] but here we need that the denominator g
[26:25] at a is not 0 in that case
[26:29] the directional derivative at a in the
[26:32] direction
[26:34] of the unit vector u also exists and it
[26:36] is given by this um
[26:38] formula ah directional derivative of
[26:41] f in the direction u at a times
[26:45] g of a minus f of a times
[26:48] ah g directional derivative of g
[26:51] in the direction of the unit vector u
[26:54] evaluated at a divided by g of a squared
[26:58] so we have seen the exact same formulae
[27:01] in one variable calculus
[27:03] ok so these are useful properties and
[27:06] they will help us evaluate ah
[27:09] let's do a couple of directional
[27:11] derivatives for arbitrary
[27:13] directions i am going to assume an
[27:15] arbitrary vector
[27:16] so here u is u1
[27:21] u two and lets compute what happens so
[27:23] limit h tends to zero
[27:26] so i want f of f u x y
[27:32] so this is
[27:33] [Music]
[27:35] f of x plus h times u 1
[27:39] y plus h times u 2 minus f of x y
[27:44] divided by h
[27:49] so limit x tends to 0
[27:52] ah x plus h times u 1 plus
[27:56] y plus h times u 2 minus
[28:00] x plus y divided by
[28:03] h
[28:09] and the x and the y cancel out so we are
[28:11] left with h times u 1 plus
[28:14] h times u 2 divided by h which is u 1
[28:17] plus
[28:19] u 2 and
[28:22] i'll remind you that in the video on
[28:26] partial derivatives we computed that the
[28:28] partial derivative of
[28:32] this function with respect to both x and
[28:34] y was 1 and 1 respectively and i can
[28:37] write this as u 1 times 1 plus u 2 times
[28:39] 1 for some strange reason i am going to
[28:42] do that
[28:43] ok so how about this this is probably
[28:46] much more complicated so here our unit
[28:48] vector is
[28:49] u 1 u 2 u 3
[28:53] so if i try to compute this
[28:58] what i will get is
[29:05] um
[29:05] [Music]
[29:09] x plus h times u 1 times y plus h
[29:12] times u2 plus y plus h times u2
[29:19] times z plus h times u3
[29:22] plus z plus h times u
[29:26] 3 times x plus h times
[29:30] u 1 minus
[29:34] x y plus y z plus z
[29:37] x this is the numerator divided by
[29:40] h so now if i if i cancel out all the
[29:44] terms only in x y and z which which does
[29:46] happen because
[29:47] because of the term on the right that
[29:50] you are subtracting out
[29:52] what we are left with is all these terms
[29:54] with ah
[29:55] the h's and then there's the sum h
[29:58] squared terms
[29:59] uh so when you divide by h okay so let's
[30:02] write that down so h squared times
[30:06] u one u 2 plus u 2 u 3 plus u 3 u 1
[30:11] and then plus h times um
[30:16] u 1 times y plus
[30:21] x times u 2 plus
[30:26] u 3 times y plus
[30:29] z times u 2 plus
[30:34] ah
[30:37] z times u one plus x times u three
[30:42] ok so you can check this is what you get
[30:44] then divide that by h
[30:45] take the limit as h tends to zero
[30:49] and then what we have here is
[30:55] whatever you have in the bracket here so
[30:56] this is u 1
[30:59] y plus
[31:04] u 2 x plus u
[31:07] 3 y plus u 2 z plus u 1
[31:12] z plus u 3 x and if i rewrite that i get
[31:16] u 1 times
[31:19] y plus z plus u 2 times
[31:26] x plus z
[31:29] plus u 3 times
[31:32] x plus y okay and i will ask you to
[31:35] go back and check what were the partial
[31:37] derivatives of for this function
[31:39] or you can check it right away okay and
[31:42] see if these terms are
[31:44] these terms here whether these are
[31:48] things you can identify ok
[31:52] finally lets come to sine of x y this is
[31:54] probably the expression is going to get
[31:56] too messy
[31:57] so i wont be able to complete this so
[32:00] sine of
[32:03] x plus h times u 1 times y plus h times
[32:07] u 2
[32:09] minus sine of x
[32:12] y divided by h
[32:17] ok so i have to
[32:18] [Music]
[32:20] use the use my trigonometry
[32:24] so this is sine of
[32:28] um x y times cosine of some
[32:32] huge thing so x times
[32:35] ah h u 2 plus y times h u 1
[32:40] plus h squared times u1 u2
[32:53] minus sorry plus a cosine of x y
[32:57] times sine of the same thing that i have
[33:00] here
[33:01] in the cos so this thing
[33:04] comes here and then minus of
[33:08] minus sin x y divided by
[33:12] h ok so this is a limit that i i claim
[33:15] is
[33:16] totally doable you you have solved
[33:18] limits of this type so i suggest that
[33:20] you
[33:21] sit down and work this limit out and see
[33:24] what you get
[33:25] and once you can write down that limit
[33:28] check out what that limit is and what
[33:30] the partial derivatives for
[33:32] this function are and what relation they
[33:34] have
[33:35] fine so ah i'll end with this example of
[33:39] f of
[33:39] x y is x y by x square plus y squared if
[33:42] x y is not
[33:43] not the origin and x y is zero if x y
[33:46] zero zero
[33:47] and i want to compute the directional
[33:49] derivative at uh
[33:51] 0 0 specifically for the other points
[33:58] it's a tedious calculation but but
[34:00] doable but at 0 0 there's some
[34:02] something specific that we want to
[34:08] see in the direction
[34:14] of the unit vector
[34:23] u ok
[34:26] so what do i have by definition this is
[34:29] limit h tends to 0
[34:31] f of 0 plus h times u 1
[34:36] comma 0 plus h times u 2 minus f of 0 0
[34:42] divided by h well
[34:45] let's substitute in the values so this
[34:48] is f of h u one
[34:49] comma h u two minus f of zero zero which
[34:53] is zero
[34:54] so i will drop this divided by h
[34:57] this is limit h tends to zero ah
[35:04] h times u 1 h times u 2 divided by
[35:09] h squared u 1 squared plus
[35:12] h squared u 2 squared the whole thing
[35:15] divided by h
[35:17] okay so if we know how
[35:21] quotients work you will be able to see
[35:23] that this is just h
[35:24] u1 u2 divided by h times
[35:28] h squared u1 squared plus h squared
[35:34] q2 squared
[35:41] sorry there's an h squared here so this
[35:43] is h square d 1 u 2
[35:45] divided by h times ah
[35:49] yeah h times x square d 1 squared plus
[35:54] x squared u 2 squared so the h squared
[35:57] cancels with ah
[35:58] squared from the denominator and
[36:03] what this gives us is that you have u 1
[36:06] u 2
[36:07] divided by h times u 1 squared plus u 2
[36:12] squared
[36:12] this is actually a unit vector so the
[36:14] denominator u 1 squared plus u 2 squared
[36:16] is 1
[36:17] although that is irrelevant for what is
[36:18] coming so this is
[36:20] u 1 u 2 divided by h ok so this is
[36:24] what you get and now u1 and u2 are of
[36:27] course fixed
[36:28] meaning they have nothing to do with h
[36:29] and in the denominator you have an edge
[36:31] which means that this limit
[36:35] does not exist right so the directional
[36:38] derivative
[36:40] ah in the direction u
[36:44] does not exist unless of course 1 of u1
[36:47] or u2 is 0
[36:49] assuming
[36:53] both u 1 and u 2
[36:56] are not 0. what happens if
[36:59] one of them is 0 well that is exactly
[37:02] the case where you have
[37:03] the partial derivatives and we checked
[37:05] in the partial derivatives video
[37:07] that the partial derivatives are both
[37:10] actually 0.
[37:11] so the partial derivatives here do exist
[37:14] both of them are 0
[37:15] but other than the partial derivatives
[37:18] no other
[37:18] directional derivative exists so the
[37:20] only directions where the
[37:22] rate of change is defined is ah
[37:25] in the direction of the x axis or the y
[37:27] axis for no other
[37:28] direction is it defined okay so in this
[37:31] video we have seen the
[37:32] notion of the directional derivative
[37:33] this is a generalization of the
[37:35] partial derivative where you compute the
[37:38] rate of change
[37:39] for any direction instead of just the
[37:41] directions
[37:42] parallel to the x axis or the y axis you
[37:45] compute it in any direction
[37:46] the definition is almost analogous and
[37:49] the
[37:50] calculations are slightly more tedious
[37:52] although when we saw examples we saw
[37:54] that there was something
[37:56] interesting happening so there is a
[37:58] there is some
[38:00] background here and there there's a
[38:03] phenomenon that we have to
[38:04] uncover that this phenomenon
[38:06] unfortunately depends
[38:08] as we saw based on the last example
[38:11] uh on some conditions so we have to talk
[38:13] about something called
[38:14] continuity so once we talk about
[38:16] continuity we will come back
[38:18] and we will show an easy way of
[38:19] computing the directional derivatives
[38:21] once we know what are the partial
[38:22] derivatives thank you