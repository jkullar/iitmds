# W9_L2: Partial derivatives

**Week:** Week 9
**YouTube URL:** https://www.youtube.com/watch?v=GoJoNFBuCJ8

---

## Transcript

[00:00] [Music]
[00:14] hello and welcome to the match 2
[00:16] component of the online bsc program on
[00:18] data science and programming
[00:20] in this video we are going to study the
[00:22] notion of partial derivatives
[00:23] so we have seen functions of several
[00:25] variables
[00:27] and now partial derivatives corresponds
[00:29] to
[00:30] the notion of the rate of change of a
[00:33] function
[00:33] of several variables according to
[00:37] one variable so with respect to one
[00:39] variable so we'll study this in this
[00:40] video
[00:42] so let's recall first the idea of the
[00:43] rate of change and derivatives from
[00:45] one variable calculus so to calculate
[00:48] instantaneous speed at some time we have
[00:51] to compute the distance travelled in a
[00:52] very short period of time
[00:54] and divide by that by the time period
[00:58] and that that should be a close
[00:59] approximation of the instantaneous speed
[01:02] so this was something that we studied in
[01:04] uh when we
[01:06] introduced the notion of derivatives in
[01:08] one variable calculus
[01:09] in particular we had this example of a
[01:11] truck travelling from
[01:14] punjab to tamilnadu and
[01:18] based on that example we extrapolated
[01:20] what what the correct definitions should
[01:22] be
[01:24] so ideally one should take this time
[01:26] interval as small as possible
[01:28] that was the main content of that
[01:30] example
[01:32] and we move towards this idea of an
[01:34] infinite decimal time
[01:36] and what is an infinite decimal time
[01:38] that is just the limit
[01:39] so based on this we reach the following
[01:41] conclusion that infinitesimal speed is
[01:44] the limit as delta t tends to 0 where
[01:46] delta t is the
[01:48] length of the time interval distance
[01:51] travelled in that time delta t
[01:53] divided by delta t so
[01:57] of course here we have to
[02:01] start talking about units so if we want
[02:03] kilometers per second
[02:04] we want to measure it in kilometers per
[02:06] second you have to measure delta t
[02:08] in seconds and the distance in
[02:10] kilometers
[02:12] okay so this led us to the general
[02:14] notion of a derivative
[02:16] ah which captured the rate of change so
[02:19] let f of x be a function of one variable
[02:21] defined on an open interval around a
[02:24] then f is differentiable at a if limit h
[02:26] tends to zero f of a plus h minus f of a
[02:28] divided by h exists
[02:30] and in that case the obtained limit is
[02:32] called f prime of a
[02:33] and then out of this f prime we made a
[02:35] function so if we do this for each
[02:38] a which is in the domain of f and for
[02:40] those ones for which it exists
[02:42] this limit exists we define the
[02:46] derivative function f prime so you
[02:47] collect together all those points
[02:49] a for which f prime a makes sense and
[02:52] then you define this
[02:53] function f prime from that set to
[02:57] r
[03:00] so we want to do something similar now
[03:02] for functions of several variables
[03:07] so the obtained function f prime x is
[03:09] called the derivative function of x
[03:11] f of x and we want to do the same thing
[03:14] now for
[03:16] functions of several variables with
[03:18] respect to each variable
[03:21] okay so let's fix some notation before
[03:23] we go ahead
[03:24] so from here on in this video at least
[03:28] and
[03:28] possibly in several of the next videos
[03:31] unless specifically mentioned otherwise
[03:34] a function will mean a
[03:35] scalar valued multivariable function so
[03:37] we have seen earlier
[03:38] the difference between scalar valued and
[03:40] vector valued multivariable functions
[03:43] so scalar valued multivariable functions
[03:45] are those such that you have
[03:47] the domain which is the domain in rn
[03:50] where n is greater than 1
[03:51] and the range is in r so the co domain
[03:54] is r
[03:55] okay one more thing that we should
[03:58] know if a trill is a point in rn then an
[04:01] open ball of radius r
[04:03] around a tilde is the set defined as
[04:06] x tilde in r n such that the distance
[04:09] between x tilde and a tilde is
[04:11] less than r so if you think of this in
[04:15] r2 what this means is you have a
[04:18] disk of radius r around the point a
[04:22] yeah so that means you draw a circle of
[04:25] radius r around that point eight tilde
[04:29] and then um it is all those points that
[04:32] are within that circle
[04:35] okay so and the final thing that
[04:39] one has to remember is that e 1 e 2 e n
[04:42] is the standard ordered basis of r n
[04:44] ok so this was something we studied in
[04:46] the linear algebra part so we will have
[04:48] some use for this
[04:49] for the standard basis vectors in what's
[04:52] coming next
[04:54] fine so let's talk about the rate of
[04:56] change with respect to
[04:57] a particular variable at a point so what
[04:59] we want to do is
[05:01] we want to ask su suppose i have a
[05:04] function of
[05:04] several variables f of x 1 x 2 x n
[05:07] and i want to ask well how does this
[05:10] function behave
[05:12] at the point some fixed point a till
[05:15] when x1 varies ok so we we
[05:19] keep everything else fixed and just vary
[05:21] x1 and ask how does it behave
[05:24] how is the behavior of the function
[05:26] around this point
[05:28] and in particular we want to ask how
[05:30] does the function
[05:31] change is it does it change fast it does
[05:34] it change slowly
[05:35] so ah this is sort of similar to saying
[05:38] what is the instantaneous speed
[05:40] as you change x1 so we can do this with
[05:43] any particular variable
[05:45] and that's what we will study now so let
[05:47] f of x1 x2 xn be a function defined on
[05:50] the domain d in rn containing a point a
[05:52] tilt
[05:52] and an open wall around it so when we
[05:54] say open wall around it that means for
[05:56] some positive radius
[05:59] then the rate of change of f at 18 with
[06:01] respect to the variable
[06:02] x i and this is important that it's with
[06:06] respect to the variable x i
[06:08] is limit as h tends to zero f of a tilde
[06:11] plus h times
[06:12] e i minus f of a till divided by h so
[06:14] this is very similar to the notion of
[06:16] the derivative that we saw for
[06:18] the single variable functions and in
[06:20] fact
[06:22] i am going to sort of in a second say
[06:24] that it is actually the same thing
[06:26] there is an underlying single variable
[06:28] function and that is what i will
[06:29] describe now
[06:31] so let us explicitly work out what this
[06:34] means
[06:34] so if a tilde has coordinates a 1 a 2
[06:40] a n we know that e i means the standard
[06:44] basis vector with
[06:46] zeros everywhere except
[06:50] in the ith place so this is the ith
[06:52] place
[06:55] and you have zeros everywhere else so
[06:57] lets unravel what this definition means
[07:00] so what this is saying is that you have
[07:02] f of
[07:05] a one a two a n
[07:10] plus h times ah zero all the way till
[07:13] the ith one which is one and then all
[07:15] zeros again
[07:18] minus f of a one a two a
[07:26] and then this divided by h and then
[07:28] limit as h tends to zero
[07:31] so if you if you work out what this is
[07:33] this is exactly f of
[07:36] a one so we can add these two vectors so
[07:39] a 1 a to n plus h times
[07:42] e i so there will be no change in the
[07:44] other coordinates so all those remain
[07:46] the same so up to i minus one
[07:51] and then in the ith one you have a i
[07:53] plus h and then you
[07:58] you go all the way up to a n
[08:01] and then this minus again f of a one a
[08:04] two a n
[08:07] divided by h so as you can see really
[08:09] what is happening is that
[08:11] only the ith coordinate is changing
[08:13] everything else is
[08:14] remaining the same so what what we are
[08:16] really saying is
[08:18] let us define a new function let us
[08:20] maybe call it
[08:22] g and what is this new function
[08:25] this new function is g of
[08:28] h is equal to f of
[08:32] a till plus h times e i
[08:36] then what what we are asking and now
[08:39] remember that this is a function of one
[08:41] variable so g is a function of one
[08:43] variable this is the important point
[08:44] key is a function of one variable
[08:48] because h is just a
[08:52] number it is a real number right so this
[08:54] h is a real number everything else in
[08:56] here
[08:57] they are vectors so a tilde is a vector
[08:59] e i is a vector
[09:00] but h is a real number so you are doing
[09:02] h times e i
[09:03] so scalar times that vector a ok so g
[09:06] is a function of h which means g is a
[09:09] function of one variable
[09:11] and now what this limit translates to is
[09:19] g of h because that's exactly what this
[09:22] is minus g of 0
[09:24] divided by h limit as h tends to 0
[09:28] right g of 0 is exactly f of 8
[09:31] which is what we we are subtracting from
[09:33] g of h
[09:35] so this is computing the derivative of
[09:38] the function g at the
[09:42] point 0 that's that's what is happening
[09:44] so
[09:45] really this limit
[09:49] is or this rate of change with respect
[09:51] to variable x i
[09:52] is saying let's forget all the other
[09:54] variables let us concentrate only on x
[09:56] i and let us vary x i
[09:59] and treat that alone as a function and
[10:02] see what happens
[10:03] okay and then compute its derivative so
[10:05] because rate of change is
[10:07] derivative of that function so rate of
[10:09] change with respect to that variable is
[10:12] the derivative of g okay so i hope this
[10:14] is clear we will see pictures of this
[10:16] in a few minutes so let us
[10:20] do a couple of computations
[10:23] before we see the pictures so the rate
[10:25] of change of f of
[10:26] x y x comma y is x plus y at 0 0 with
[10:29] respect to x let us compute this
[10:32] so what do i want to do i want to
[10:34] compute
[10:35] [Music]
[10:38] with respect to x so i should take e 1
[10:41] right so this is at 0 0 f of 0 0 plus h
[10:45] times one zero minus f of zero
[10:48] zero divided by h
[10:51] limit h tends to zero
[10:54] and what is that that is exactly f of
[10:59] so if i add these this is f of h comma 0
[11:02] minus f of 0 comma 0 divided by h
[11:08] well f of h comma 0
[11:11] is h plus 0 so that is h f of 0 comma 0
[11:15] is 0
[11:15] and then divided by so this is a very
[11:18] familiar
[11:19] limit now so this is going to be 1 so
[11:22] this is the function 1. so this
[11:23] limit will be 1 as h tends to 0 okay so
[11:27] this is this will reduce down to our
[11:28] good old limits
[11:29] that we have seen earlier in calculus
[11:33] ah single variable calculus
[11:36] ok let us do another example so the rate
[11:38] of change of f of x y z
[11:40] at one two three with respect to y ok so
[11:44] let us compute this
[11:45] so this is limit h tends to zero
[11:48] uh f of
[11:52] ah one two three plus h times
[11:55] this is with respect to y so zero comma
[11:57] one comma zero
[11:59] minus f of one two three
[12:03] divided by h ok so what that means is
[12:07] you get f of
[12:08] one comma so limit h tends to 0
[12:12] f of 1 comma
[12:17] 2 plus h comma
[12:20] 3 minus f of 1 comma 2 comma 3
[12:25] divided by h let us find out what those
[12:28] values are so the
[12:30] f of 1 comma 2 plus h comma 3 is
[12:35] 1 times 2 plus h
[12:39] plus 2 plus h times 3
[12:43] plus 1 times 3 and then minus
[12:46] 1 times 2 minus 2 times 3
[12:50] minus ah i put a bracket unnecessarily
[12:54] ok minus
[12:55] 1 times 3 right this is this is
[13:00] what the expression in the numerator is
[13:02] and i should put my limit
[13:08] divided by h so this gives us
[13:13] ah so 1 times 3 and 1 times 3 cancel
[13:18] and then you have 1 times 2 plus h so
[13:21] the 1 times 2 cancels
[13:23] and the 2 times 3 cancels and then what
[13:25] you are left with is
[13:30] 1 times h which is h plus 3
[13:34] times h divided by h so this is going to
[13:37] be 4
[13:38] right so 4 h by h which is 4 and then
[13:41] the limit no longer matters
[13:43] so this gives us 4 and this computation
[13:46] is important keep keep track of what
[13:48] happened here
[13:50] right let us do this final example so
[13:52] the rate of change of f of x y is sine
[13:54] of x y at
[13:55] one comma zero with respect to x
[14:00] ah okay so
[14:03] let's see what that is so you have limit
[14:06] h tends to 0
[14:07] sine of ah
[14:12] oh my bad let's write down the
[14:14] expression first so f of
[14:16] 1 comma 0 which is the point plus h
[14:18] times
[14:20] its with respect to x so this is
[14:23] h times 1 comma 0 minus f of 1 comma 0
[14:29] divided by h so let's see what this
[14:32] evaluates to so the first term gives us
[14:36] um
[14:40] f of 1 plus h comma 0
[14:44] and then minus f of 1 comma 0
[14:49] divided by h so now if we substitute
[14:52] the
[14:55] equation sorry the function sine of x y
[14:59] so this is sine of 1 plus h times 0 so
[15:01] this is sine of 0
[15:03] which is just 0 and then this is again
[15:06] sine of 1 times 0 again 0
[15:09] and divided by h so this is going to be
[15:10] 0 okay so this is going to be the limit
[15:13] with respect to x suppose now i want
[15:14] this with respect to y
[15:16] ok just for practice let's see what it
[15:19] is
[15:19] with respect to y okay so i can do the
[15:22] same thing
[15:23] except now i have 1 comma 0
[15:26] plus h times 0 comma 1
[15:30] then f of 1 comma 0
[15:33] divided by h so i will move directly to
[15:36] the last step where we get
[15:38] limit extends to zero so f of
[15:41] one comma h so which is sine of
[15:44] h and then minus zero
[15:48] and then divided by h aha this is a very
[15:50] familiar limit
[15:52] so limit h tends to zero sin of h by h
[15:56] and we know this is one ok so the point
[15:58] here is that all of these
[15:59] reduce to very nice limits that we have
[16:02] computed earlier
[16:03] we have calculated earlier in one
[16:04] variable calculus so this is not
[16:06] something very different from what we
[16:08] have
[16:09] seen earlier okay so now let us
[16:12] look at the pictures for some of some of
[16:15] these
[16:16] functions and see if we can interpret
[16:18] what we are doing
[16:19] so let us look at the function f of x y
[16:22] is x plus y
[16:23] and we were computing the limit
[16:26] or the rate of change of this function
[16:29] at 0 0 with respect to the
[16:33] variable x right so for this
[16:37] let us look at the function first of all
[16:39] how does this function look like
[16:41] so this is a graph of that function f of
[16:42] x y is x plus y so the red line is your
[16:45] x axis the green line is your
[16:48] y axis and in terms of what we discussed
[16:53] when we have to do this with respect to
[16:55] x we want to study the rate of change
[16:56] with respect to x
[16:57] that means we are really and at the
[16:59] point 0 0
[17:00] that means we are interested in asking
[17:04] that along the x axis that's where y is
[17:06] constant
[17:07] and x is changing we want to ask
[17:12] on top of that how does this function
[17:15] behave so
[17:16] of course we can substitute y zero and
[17:18] then we know that the function g
[17:19] that we talked about g of
[17:22] ah x is just x because you get x plus
[17:25] zero
[17:26] ok and in terms of pictures what that
[17:28] means is you take this graph
[17:30] of f of x y and then you look at the
[17:33] plane y 0 that's the part above the
[17:36] x axis and then you look at the
[17:38] intersection
[17:39] right and that is exactly the graph of
[17:41] the function
[17:43] that you obtain when you restrict this
[17:45] function only to the
[17:47] x axis so what what we get in that case
[17:49] is this
[17:50] line that that we have here so if i
[17:54] now take out these two yeah you can see
[17:56] this and this is indeed the line
[17:58] ah and this is a
[18:02] graph of the function g of x is equal to
[18:04] x
[18:05] and so we are asking what is the
[18:06] derivative of this uh
[18:09] of this function that's what that limit
[18:12] computed
[18:13] at 0. okay
[18:16] so similarly we did one more example
[18:20] that was the example of the function
[18:23] sine of x y
[18:24] and so let us look at the graph of that
[18:27] function ah this is a
[18:29] really interesting graph we wanted to
[18:31] look at the point one comma zero
[18:34] and we computed the per the rates of
[18:37] changes
[18:38] uh with respect to x and with respect to
[18:39] y so ah
[18:42] with respect to x that means i have to
[18:45] ah
[18:46] look at the plane y zero so if you look
[18:49] at the plane y
[18:50] zero this is what you get and we should
[18:53] intersect those
[18:54] so if we intersect those here is what we
[18:57] get so let me
[19:02] knock out these two and you will
[19:03] immediately see what
[19:05] what we get well what we got actually is
[19:08] this line
[19:09] why is that because for y 0
[19:13] the function actually is the 0 function
[19:16] right
[19:16] so that's why we are we get
[19:21] we get just the graph of the 0 function
[19:25] and at 1 comma 0 which is over here
[19:29] the for derivative is 0 as a result
[19:34] instead now let us look at the what
[19:36] happens when we compute this with
[19:37] respect to y
[19:38] so when we do it with respect to y well
[19:41] let's look back at
[19:43] look at our function again so this is a
[19:45] graph of the function
[19:47] so when we want to do this at
[19:51] y ah with respect to y
[19:54] then we should ah
[19:57] intersect this with the plane x is one
[20:01] so here's the plane x is one
[20:03] and so now when we intersect
[20:07] here is what we get
[20:10] so let me remove the plane axis let me
[20:14] remove the graph first
[20:16] and now you can see on that plane we
[20:18] have this very nice function
[20:19] this is actually the sine function right
[20:22] so on on the plane
[20:27] x is 1 this is actually the sine
[20:29] function
[20:31] and so we are computing the derivative
[20:33] with respect to the sine function
[20:35] at the point 0 and indeed that is
[20:38] 1 that's something we know so this is a
[20:42] this is what what is really happening
[20:43] this is what we mean by
[20:45] rate of change graphically okay so now
[20:49] that we have understood the rate of
[20:50] change both in
[20:51] in terms of the algebra where we
[20:53] actually computed the limits
[20:55] and in terms of the geometry where we
[20:57] saw those pictures
[20:58] let us continue and talk about partial
[21:01] derivatives
[21:02] so partial derivatives are basically the
[21:04] function that you obtain by
[21:06] taking these limits at various points
[21:08] okay so let f of x 1 x 2 x n be a
[21:10] function defined on the domain d in rn
[21:12] the partial derivative of f with respect
[21:14] to x i is the function denoted by
[21:17] f subscript x i or del f
[21:20] del x i so this this
[21:23] symbol which looks like a weirdly shape
[21:25] d is called del
[21:27] so del f by del x i
[21:30] and what is the definition del f by del
[21:32] x i at the
[21:34] at x tilde is limit x h tends to 0
[21:37] f of x tilde plus a h times e i minus f
[21:40] of x till divided by h
[21:42] remember that we are doing this with
[21:43] respect to the ah
[21:46] ith variable so we have to do f of x
[21:48] till plus h times e
[21:50] i okay which means we have to do
[21:53] ah f of x 1 x 2 all the way up to x i
[21:56] minus 1
[21:57] x i plus h again x i plus 1 f x n
[22:00] minus f of x 1 x 2 x n divided by h and
[22:03] then take the limit as h tends to 0.
[22:05] so it's like we are we are fixing all
[22:08] the other
[22:09] variables and we are allowing the ith
[22:11] variable to
[22:12] ah change so this is a
[22:15] definition of the partial derivative
[22:18] this is a function
[22:20] and what that means is this is a scalar
[22:23] valued
[22:23] multivariable function because it takes
[22:25] as input
[22:27] something from rn and it produces an
[22:29] output some number which is this limit
[22:31] now of course it may happen that this
[22:33] this limit does not exist everywhere
[22:35] so the domain of these functions will
[22:38] consist of those points of d at which
[22:42] the limits do exist
[22:46] okay so let's do this example
[22:50] so for this example i want to compute
[22:52] what is the partial derivative
[22:54] with respect to x and the partial
[22:55] derivative with respect to y
[22:58] ah so del f del x and del f del y
[23:03] so by lets start by asking what is the
[23:06] definition so if i want to compute del f
[23:08] del x
[23:09] of x comma y by definition this is limit
[23:13] h tends to 0 f of x comma y
[23:17] plus h times
[23:21] ah one comma zero y one comma zero
[23:23] because this is with respect to x
[23:25] minus f of x comma y
[23:28] divided by h well if i compute this
[23:31] limit
[23:34] so this is x plus h comma y
[23:38] minus f of x comma y divided by h
[23:44] and now it is an easy computation where
[23:46] you
[23:49] put in the values um the expressions for
[23:52] the function
[23:53] so x plus h plus y minus x
[23:57] plus y divided by h
[24:00] and its clear that this is h by h which
[24:03] is
[24:03] 1 okay so this is the
[24:07] derivative the partial derivative of the
[24:10] function f of x y is x plus y
[24:16] with respect to x okay so this is the
[24:18] function 1 so the partial derivative
[24:21] of f with respect to x is 1 for this
[24:24] particular function
[24:25] okay by symmetry i think you can see
[24:26] that for y also you will get the same
[24:29] thing but
[24:30] just for the sake of completeness let me
[24:33] compute this so this is limit x tends to
[24:35] 0 and i am going to skip to the last
[24:37] step now
[24:37] so this is x x comma y plus h minus f of
[24:41] x comma y
[24:42] figure out why that is the case and now
[24:45] if you substitute
[24:46] in the
[24:49] expressions again you get x plus y plus
[24:52] h
[24:53] minus x plus y divided by h and this is
[24:57] going to be one
[24:58] ok so um so both the partial derivatives
[25:02] for
[25:03] this function are 1 and you can see what
[25:05] we are doing here we are we are really
[25:07] holding each variable constant
[25:11] for which we are not computing the
[25:12] partial derivative and
[25:14] for the one with with respect to which
[25:16] we are computing it
[25:18] we are adding an edge then evaluating
[25:19] the function subtracting out the
[25:22] ah f of x 1 x 2 x n and then taking
[25:24] dividing by h and taking the limit
[25:26] okay so um if your functions are nice
[25:31] then there is a very nice way of doing
[25:33] this so to calculate the partial
[25:35] derivative with respect to x i
[25:37] think of f only as a function of x i
[25:38] while treating all the other variables
[25:40] as constants okay because that's really
[25:42] what what
[25:43] what we were doing here then calculated
[25:46] as the derivative of a function of one
[25:48] variable right this is this is exactly
[25:49] the
[25:50] game plan okay so let's do these two
[25:52] examples and now i am going to do it
[25:53] really fast no more limits
[25:55] okay so del f del x
[25:58] of x y z ok so i am going to think of
[26:03] y z as constants ok so suppose
[26:06] instead of x y plus y z plus z
[26:10] x suppose i had uh x times
[26:13] 3 plus
[26:17] 20 plus 18 times x
[26:21] what would you have computed this
[26:23] derivative as you would have said
[26:24] derivative of this part is 3 derivative
[26:27] of this this part is 0 and derivative of
[26:29] this part is 18
[26:30] right this is exactly what you should do
[26:32] here so here
[26:34] treat y as a constant so what you get is
[26:38] ah the partial the derivative with
[26:40] respect to x for the term x times y
[26:43] is y the derivative for the term y
[26:46] times z is 0 because y and z are being
[26:48] treated as constants
[26:50] the derivative for the term z times x is
[26:53] z because that's like constant times x
[26:55] what's that constant z
[26:57] so this is y plus a okay
[27:00] similarly if you do del f del y
[27:05] ah you would get x plus
[27:09] z and del f del z x y z
[27:12] is x plus
[27:16] ah y okay and i i'll
[27:20] suggest that you you do the limits
[27:23] and see that this is exactly what you
[27:25] get ok
[27:26] ok let us do this example of f of x y is
[27:30] sine of
[27:31] x y so we did this when um
[27:35] at the point one comma zero so let's now
[27:38] do it for
[27:38] for any point so if you do it for any
[27:41] point
[27:42] what you get is ah del f
[27:46] del x of x comma y ok so this is like a
[27:50] composition of functions right so this
[27:53] is sine of
[27:54] so suppose this was like sine of 3 x
[27:56] right what would you have computed the
[27:58] limit as
[27:59] sorry the derivative as you would have
[28:01] computed it as
[28:03] cosine of 3 x multiplied by 3
[28:07] right this is exactly what you should do
[28:08] here so this is cosine of
[28:10] x y multiplied by y
[28:14] so i will write it as y times cosine of
[28:16] x y
[28:18] and similarly if you take del f del y
[28:22] this is x times cosine of x y
[28:26] ok so you you do your limits and check
[28:29] that this is exactly what you get and
[28:30] and
[28:31] you'll see that this is partial
[28:33] derivatives are actually quite easy it's
[28:34] very much like your
[28:36] usual one variable calculus derivative
[28:39] okay i'll end with one one example where
[28:43] suppose your function is not defined in
[28:45] a nice way meaning its piecewise defined
[28:47] like this one
[28:47] okay so in that case you might have to
[28:50] actually compute those limits
[28:51] because there you cannot use the
[28:54] previous rules that we have from
[28:56] one variable calculator so even in one
[28:58] variable calculus remember that
[28:59] if your function was not ah
[29:03] some nice function then you had to
[29:05] actually compute the limits so this is
[29:06] what
[29:07] what is happening here so
[29:10] ah so first suppose xy is
[29:14] not 0 0 right so i want to compute x y
[29:19] is not 0 0 what is
[29:25] del f del f del x
[29:30] x y and del f del y
[29:34] x y so del f del x
[29:38] x xy for such a point is just
[29:42] the usual the usual rule right so this
[29:45] is a
[29:46] suppose you had a function like 3x by x
[29:48] squared plus 4
[29:50] think of how you would have computed the
[29:52] derivative and do it according to that
[29:54] okay so this is going to be the u
[29:57] divided by b
[29:58] v rule um so this is
[30:02] x squared plus y squared times
[30:06] derivative of x y with respect to x that
[30:09] is y
[30:10] minus
[30:17] x y times
[30:21] derivative of x squared plus y squared
[30:22] which is 2x
[30:24] remember that i am doing when i am
[30:26] saying derivative of x squared plus y
[30:27] squared i am doing it with respect to x
[30:29] with the idea that y is a constant
[30:33] and then divided by the denominator
[30:34] squared
[30:37] okay and you can probably simplify this
[30:40] and
[30:40] if yeah so you have x squared
[30:45] y plus y cubed minus 2
[30:49] x squared y so
[30:52] y cube minus x squared y divided by x
[30:56] square plus y
[30:57] square square ok and then similarly
[31:00] either by symmetry or if you compute it
[31:03] you are going to get the same thing for
[31:09] the same type of expression for
[31:15] del f del y
[31:18] and this is both of these are in the
[31:21] case where
[31:22] x y is not the point 0 0 so here i can
[31:25] compute limits with
[31:26] impunity no problem because i can apply
[31:28] my
[31:29] u divided by v rule at 0 0 i have to be
[31:32] careful because now the definition is
[31:34] very specific
[31:35] so let us see what happens to x y at 0 0
[31:38] suppose x y is 0 0
[31:40] what is del f del x
[31:43] at 0 0 del f del y at 0 so to do that i
[31:46] have to compute this by
[31:48] from first principles by hand so this is
[31:51] f of
[31:54] h comma zero minus f of zero comma zero
[31:58] divided by h limit as h tends to zero
[32:02] so i am i am doing this from first
[32:04] principles but i am doing it slightly
[32:06] faster
[32:08] so f of h comma zero what is that well
[32:10] if
[32:12] h is remember that h is non-zero so if
[32:14] you substitute
[32:15] h comma zero in in this expression well
[32:17] you get zero in the numerator
[32:20] minus zero and then divided by
[32:23] h how did i get the second zero because
[32:26] f of zero comma zero is defined to be 0
[32:28] at 0 0.
[32:29] so this is just 0 and the same
[32:33] again by symmetry or if you compute this
[32:35] you will get that this is also
[32:37] 0 so for the point 0 0 you have to be
[32:40] careful and do it by hand
[32:42] for the other points we are good to go
[32:46] so in this video we have talked about
[32:47] the partial derivatives
[32:49] so basically those study the rate of
[32:51] change of
[32:53] the function with respect to a
[32:54] particular variable that means when we
[32:56] are
[32:57] looking at the in the direction of the x
[33:00] axis or the y axis
[33:01] so of course if your point is not on the
[33:04] x or the y axis
[33:05] you have to move your axis parallelly so
[33:08] if your point is uh
[33:09] has coordinates a 1 a to a n we are
[33:12] looking at the
[33:14] uh and you want to say i want to do it
[33:18] with respect to x 1
[33:19] so you have to keep all the other things
[33:21] constant so you have to look at the
[33:25] at the line which is parallel to the x
[33:27] axis
[33:29] which is given by x 2 is a 2 x 3 z 3 all
[33:33] the way up to x n is n so
[33:34] of course in 2 or 3 variables this is
[33:36] easily done
[33:37] and so you you look at the function
[33:41] there which becomes a function of one
[33:42] variable and then you take your usual
[33:44] derivative
[33:45] and that is exactly how you compute the
[33:47] partial derivative
[33:48] thank you
[33:54] you