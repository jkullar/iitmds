# W11_L2: The hessian matrix & local extrema for f(x,y)

**Week:** Week 11
**YouTube URL:** https://www.youtube.com/watch?v=XJH8RJ5m3OU

---

## Transcript

[00:00] [Music]
[00:14] hello and welcome to the match two
[00:15] component of the online bsc program on
[00:17] data science and programming
[00:19] in this video we are going to talk about
[00:21] the hessian matrix
[00:22] and local extrema so we have studied the
[00:25] notion of critical points for
[00:27] f x y and in a previous video we also
[00:31] studied the
[00:32] hessian matrix which consisted of the
[00:34] second order partial derivatives
[00:36] placed in a square matrix so in the
[00:39] context of f x y
[00:40] this will be a 2 by 2 matrix
[00:43] let us recall first what was the second
[00:45] derivative test for
[00:46] a one variable function so suppose you
[00:49] have a function of
[00:50] one variable defined in the domain d a
[00:52] point a and d is a critical point
[00:54] if either the function f is not
[00:56] differentiable at that point or
[00:58] f prime is 0 and
[01:01] now if the function is twice
[01:03] differentiable we applied something
[01:04] called the
[01:05] second derivative test so the second
[01:07] derivative test told us
[01:09] the nature of the critical points so the
[01:12] test said the following if a is a
[01:13] critical point
[01:14] and if the double derivative is positive
[01:17] then
[01:17] this point is a local minimum if it's a
[01:20] critical point and the double derivative
[01:21] is negative
[01:22] then it is a local maximum and if it is
[01:25] a critical point
[01:26] and the double prime is 0 then the test
[01:29] is inconclusive so we
[01:30] we do not know what happens in that case
[01:35] fine so this was the second derivative
[01:39] test for functions of one variable
[01:42] now we would like to have something
[01:44] analogous for
[01:45] ah higher order meaning functions
[01:48] multivariable functions
[01:52] and indeed the hessian matrix is what is
[01:54] going to allow us to
[01:55] do that so let us first recall critical
[01:57] points for multi-variable functions
[01:59] so if we have a scalar valued
[02:00] multivariable function defined in our
[02:02] domain d in rn
[02:03] then a point a and d is called a
[02:05] critical point if either the gradient is
[02:07] 0
[02:09] or the gradient does not exist so
[02:12] the main point here was that every local
[02:15] extremum meaning a local maximum or a
[02:16] local minimum
[02:18] was a critical point so every local
[02:20] extremum is a critical point
[02:22] and what we want to do is once we get
[02:25] the collection of critical points
[02:26] we want to identify which of these are
[02:28] local maxima which of these are local
[02:30] minima
[02:31] and if possible if which of these are
[02:33] saddle points
[02:36] so we know that not all critical points
[02:38] are local extrema because
[02:40] there are things called saddle points
[02:42] and
[02:43] the saddle point is exactly a critical
[02:44] point such that the gradient exists
[02:47] and the gradient is 0 but a is not a
[02:50] local extreme
[02:52] so let us now see how we can use the
[02:54] hessian
[02:55] in order to classify these critical
[02:59] points
[03:00] so again if f x y is a function defined
[03:02] in the domain d
[03:04] and a is a critical point such that the
[03:06] first and second order
[03:08] partial derivatives are continuous in an
[03:09] open ball around me so this is a very
[03:11] important
[03:13] hypothesis in particular this hypothesis
[03:15] allows us to
[03:18] apply clerus theorem and say that the
[03:21] mixed partials are going to be
[03:23] equal okay so then the hessian test can
[03:27] be applied to check the nature of the
[03:28] critical point a
[03:29] and what is the test if the determinant
[03:32] of the hessian matrix at that point is
[03:34] positive
[03:35] and the second order partial with
[03:39] respect to x
[03:42] at that point is positive then it is a
[03:44] local minimum
[03:46] if the determinant is positive and the
[03:48] second order partial with respect to x
[03:50] is negative
[03:50] then it is a local maximum and if the
[03:54] determinant is negative
[03:55] then it is a saddle point and if the
[03:58] determinant is 0
[04:00] then we do not the test is inconclusive
[04:02] okay so this is a slightly more involved
[04:04] test as you can see then the second
[04:06] derivative test for one variable
[04:07] functions
[04:08] because here you have to write down the
[04:09] matrix compute
[04:12] compute its determinant and also check
[04:15] for an entry
[04:16] ok let us so let us
[04:20] try to understand how to keep these in
[04:22] mind suppose i forget the hessian test
[04:24] right
[04:24] how do i remember what happens well let
[04:27] us look at these functions
[04:29] so these functions we already know what
[04:31] what the situation is so you have x
[04:32] squared plus y squared we know how this
[04:34] function looks
[04:35] it's like a bowl and
[04:39] 0 0 is a global minimum that this is
[04:41] something you just know from the
[04:43] fact that squares are positive so 0 0 is
[04:46] a local minimum
[04:47] you know is a global minimum in fact and
[04:50] so the
[04:50] the test hopefully should tell us that
[04:53] let's see if that happens
[04:58] similarly minus x squared minus y
[05:00] squared is the same thing inverted down
[05:01] so now zero zero is a local maximum in
[05:04] fact a global maximum but
[05:07] in particular global local
[05:10] maximum similarly x square minus y
[05:12] squared
[05:13] 0 0 was a saddle point this was the
[05:15] prototype of our saddle point look like
[05:18] and then x to the power 4 plus y to the
[05:20] power 4
[05:22] ah here um the
[05:26] the uh again 0 0 is a
[05:30] local in fact a global minimum but
[05:33] since it's the fourth power something
[05:35] strange happens so we
[05:36] so these are the four prototype examples
[05:39] to keep in mind
[05:40] and these ah so each of these will
[05:42] correspond to one of the four
[05:44] conditions that we had before so first
[05:46] let us compute the gradient
[05:47] so gradient of f here is two x comma two
[05:50] i
[05:53] ah and from here we can compute the
[05:56] hessian
[05:57] so the hessian is two zero zero two
[06:01] ok very nice session ok so from here we
[06:03] get that the only critical point is
[06:07] so if i set my gradient to 0
[06:11] then the only critical point is 0 0
[06:14] and the hessian is actually independent
[06:17] of
[06:18] the point so the hessian matrix for 0 0
[06:22] is in particular
[06:23] 2 0 0 2. and now let us apply the test
[06:28] so let us compute determinant of this
[06:30] matrix
[06:32] so the determinant of this matrix is 4
[06:34] so it is positive
[06:36] so good so we know already that we are
[06:38] not in the inconclusive case
[06:39] and we know that we do not have a saddle
[06:41] point ah because for saddle point the
[06:43] determinant will be negative
[06:46] so now it will depend on the value of
[06:49] the
[06:49] ah 1 1 term so here the 1 1 term
[06:53] which is f x x
[06:56] is 2 this is positive so therefore it is
[07:00] a
[07:00] meaning 0 0 is a local
[07:06] minimum and this is exactly what we
[07:10] knew already by inspection because x
[07:12] square plus y squared is always a
[07:13] positive function
[07:14] with its only 0 at 0 0 okay we can do
[07:18] the same thing for minus x squared minus
[07:19] y squared so here
[07:21] the gradient is minus 2 x comma minus 2
[07:25] y
[07:26] if i set it to 0 that gives me that the
[07:30] only critical point is
[07:35] 0 0 and
[07:38] the hessian here that means you take the
[07:41] partial derivatives of you take minus ah
[07:45] 2 x and take its partial derivatives so
[07:47] that's minus 2 and 0
[07:49] and then you take minus 2 i and take its
[07:51] partial derivatives
[07:53] which is 0 and minus 2. so notice what i
[07:55] did here by definition actually i should
[07:57] have taken
[07:58] partial of this gradient with respect to
[08:00] x so that's
[08:01] minus partial of minus two x and then
[08:04] partial of minus two y
[08:05] but i just took partials of minus two x
[08:08] in the first row and parcels of minus
[08:10] two
[08:10] in the second and the reason that worked
[08:11] is because i know it is a symmetric
[08:13] matrix
[08:14] from clerus theorem ok
[08:18] so again this hessian has is independent
[08:21] of whatever choice so in partic
[08:23] meaning of whatever point so in
[08:24] particular at
[08:26] 0 0 you get the same hessian and now
[08:29] let's see what happens so
[08:30] again the determinant is
[08:32] [Music]
[08:34] non-zero it is 4 so it is greater than 0
[08:38] so what that tells us is one it is
[08:40] non-zero that means it is not in the
[08:41] incline
[08:42] conclusive situation and two that it's
[08:45] positive which means it's either a local
[08:47] maximum or a local minimum
[08:48] and that will be determined by ah
[08:50] whatever happens to f x x
[08:52] and f x x means the one one with entry
[08:56] so at 0 0 this is minus 2 which is
[08:59] negative
[09:00] so therefore 0 0 is a local
[09:03] maximum and this indeed conforms to
[09:07] what we already know that this is a
[09:10] global maximum in fact
[09:12] okay let's do x squared minus y squared
[09:14] again if you compute the gradient
[09:16] this is 2x comma minus 2y if you set it
[09:19] to 0
[09:19] you get that the critical point is
[09:24] ah x is zero and y zero so that's zero
[09:27] comma
[09:28] zero let's find the hessian so for the
[09:30] hessian you
[09:31] differentiate two x with respect to x
[09:33] and with respect to y so with respect to
[09:36] x it is two with respect to y at zero
[09:38] take minus two y differentiate with
[09:40] respect to x and y
[09:42] with respect to x is zero with respect
[09:43] to y its minus two aha
[09:45] and now you can see its ah a bit
[09:48] different than
[09:49] earlier of course again it is
[09:50] independent of the point so at zero zero
[09:53] also you have the same hessian
[09:54] and now what is the determinant
[09:58] so this determinant is two times minus
[10:01] two
[10:01] minus zero so that is minus 4 which is
[10:04] negative
[10:05] and you stop right here because once the
[10:07] determinant of the hessian is negative
[10:08] in the
[10:09] 2 by 2 situation then we know that this
[10:13] is a saddle point and indeed
[10:15] this is something that we
[10:18] have seen already so this is a saddle
[10:20] point okay and finally let us do the
[10:21] example of x to the power 4 plus y to
[10:23] the power 4
[10:25] find the gradient 4 x cube comma 4 y
[10:28] cube set it to 0 that means x cube is
[10:31] zero y cube is zero that means
[10:33] x is zero y zero so the only critical
[10:35] point is zero zero
[10:37] find the hessian so now the hessian
[10:41] actually involves functions
[10:43] so it is twelve x squared 0 and then 0
[10:47] 12 y squared but what happens at 0 0
[10:51] so at 0 0 the hessian matrix actually is
[10:55] 0 0 0 0 right and in particular that
[10:59] means that the determinant of the
[11:00] hessian is zero
[11:05] and therefore this we cannot conclude
[11:07] anything from the
[11:08] test ah therefore the test is
[11:11] inconclusive
[11:12] and this is a warning that that
[11:16] even for simple functions like x to the
[11:18] power 4 plus y to the power 4
[11:20] where we actually know that 0 0 is a
[11:25] global minimum not just a local minimum
[11:27] it's actually a global minimum because
[11:28] it's
[11:29] a bowl which is uh x square plus y
[11:32] square is more like this x to the power
[11:33] 4 plus y to the power
[11:34] 4 is more like this so it goes up faster
[11:39] 0 0 is a global minimum but the test is
[11:42] inconclusive
[11:43] okay so these are the four prototypes of
[11:46] of
[11:48] corresponding to each of the cases that
[11:50] you can remember
[11:51] and if you remember these you will know
[11:54] instead of by hearting the
[11:58] cases from here you can recall which
[12:00] which case tells you what
[12:02] okay let's do a couple of other examples
[12:06] so this is x squared plus 6xy plus 4y
[12:09] squared plus 2x minus 4y
[12:11] so let's find the gradient here these
[12:13] are slightly more involved
[12:15] so 2x plus 6y
[12:18] plus 2 comma
[12:21] [Music]
[12:23] 6y sorry 6x
[12:26] plus 8y minus 4.
[12:30] so if you set the gradient to 0
[12:33] so equating to 0.
[12:42] ah we get the critical point we have
[12:43] actually done this before
[12:45] so i wont spend time here on this
[12:48] so we get the critical point two comma
[12:51] minus one
[12:52] so this is something that we we did in
[12:54] the video on critical points
[12:55] so i i want to repeat this computation
[12:58] you get a system of two
[13:00] linear equations in x and y and which
[13:02] you can solve so we used gaussian
[13:03] elimination to solve that fine
[13:08] ah so now let us ask what is the nature
[13:11] of this critical point is it a saddle
[13:12] point is it a
[13:14] local minimum is it a local maximum can
[13:16] we say that from the test so for that we
[13:18] have to find the hessian matrix first
[13:21] so what is the hessian matrix so you
[13:22] have 2 x plus 6y plus 2 let us
[13:24] take the partial with respect to x and y
[13:27] so with respect to
[13:28] x you get 2 with respect to y you get 6.
[13:31] so 6x plus 8y minus four the partial
[13:34] respect to x is six
[13:35] with respect to y is eight and again
[13:38] this hessian does not depend on
[13:40] any point so at two comma minus one also
[13:42] it is the same
[13:44] ah matrix let us compute its determinant
[13:48] so determinant of h f of
[13:51] 2 comma minus 1 is
[13:54] [Music]
[13:56] 8 times 2 16 minus 6 times 6 is 36
[14:00] ah so 16 minus 36 is minus 20 which is
[14:06] negative so this tells us that
[14:09] 2 comma 1 is a saddle point
[14:20] of f x y so let us view this function
[14:23] geogebra and check
[14:24] exactly what is happening at two comma
[14:26] minus one so here is the function f fxy
[14:29] is
[14:30] x squared plus 6xy plus
[14:36] 4y squared plus 2x minus 4y
[14:40] so you can see that there is indeed
[14:44] something interesting going on here it
[14:45] looks like a function looks quite nice
[14:48] actually
[14:49] and if we view it like this let's see
[14:51] what's happening at the point two comma
[14:54] minus one so here's the point two comma
[14:56] minus one and you can see right above
[14:58] the point two comma minus one
[15:03] there is that side so that sample is
[15:04] coming at the
[15:06] point two comma minus one and indeed we
[15:08] are
[15:10] being able to detect that using
[15:13] the hessian matrix ok let us do this
[15:16] second example
[15:17] which is f x y is x y minus x cube minus
[15:20] y squared
[15:22] so let us find the gradient so the
[15:23] gradient here is
[15:26] y minus 3x squared comma
[15:31] um x minus
[15:35] 2y so if we sub
[15:39] equate this to 0
[15:47] so now we have two equations
[15:52] x is 2 y and y is 3 x squared
[15:56] so let's substitute x is 2y in in the
[16:00] first equation
[16:02] so if we do that so one ok so one point
[16:04] we already know at 0 0
[16:05] so the list of critical points one point
[16:08] we already know
[16:11] one zero zero let's see if there is any
[16:13] other point so for that we substitute
[16:17] um x is two y in in the
[16:20] first equation so we get y is equal to
[16:24] ah 6 times um
[16:31] 2y my 3 times
[16:35] 2 y squared
[16:38] which is 12 times y squared
[16:43] which means y times
[16:48] one minus twelve y
[16:52] is zero so one option is y zero that's
[16:54] exactly the point zero comma zero that
[16:56] corresponds to the point zero comma zero
[16:59] the other option is that
[17:00] y is not zero in which case ah 1 minus
[17:04] 12 y
[17:05] must be 0 so which means y must be 1 by
[17:08] 12
[17:09] and if y is 1 by 12
[17:13] then we can get x is
[17:16] 2 by 12 so which is 1 by 6 so this 1 by
[17:19] 6 comma 1 by 1
[17:21] so there are two critical points 0 0 and
[17:23] 1 by 6 comma 1 by 12.
[17:25] let's check the nature of these critical
[17:27] points so for that we have to find the
[17:29] hessian matrix
[17:30] so i i will take partials again
[17:33] so y minus 3 x squared the partial with
[17:36] respect to x
[17:37] is minus 6 x
[17:40] with respect to y is 1 x minus 2 y
[17:43] partial with respect to
[17:45] x is 1 and partial with respect to y is
[17:49] minus 2 so at the point 0 0
[17:55] this becomes
[17:59] ah 0
[18:02] hm 1 1
[18:06] and minus 2 so the determinant is
[18:12] negative
[18:15] so this is minus one which is less than
[18:17] zero and that tells us its a saddle
[18:19] point so therefore
[18:21] zero zero is a saddle point
[18:29] the other critical point is one by six
[18:31] comma one by twelve
[18:33] let's find out what the hessian is
[18:37] so if i substitute one by six in in the
[18:40] one one
[18:41] place i get minus 1 so minus 1 1 1 minus
[18:45] 2
[18:46] so the determinant of the h n matrix
[18:54] is 2 minus 1 which is 1 so this is
[18:57] positive so we know this is either a
[18:59] local minimum or a local maximum
[19:02] and for that it is determined by
[19:05] the one minute term so f x x at
[19:09] of 1 by 6 comma 1 by 12 so that is a 1 1
[19:12] term which is this term here and that is
[19:16] minus 1
[19:17] which is less than 0 so therefore 1 by 6
[19:20] comma 1 by 12
[19:22] is a local maximum
[19:27] okay let's see in geogebra if this is
[19:30] indeed what's happening
[19:32] so this is how the
[19:35] graph of the function looks like in
[19:36] geogebra and you can see at 0
[19:39] 0 it it really has very interesting
[19:42] behavior
[19:43] and that it is clearly a saddle point so
[19:45] if we zoom in let's see if i can
[19:48] come close to 0 0
[19:51] yeah so at 0 0 you can see
[19:54] at if you take the take it along the
[19:58] green line
[19:59] then the function values it's like this
[20:01] so it's a local maximum
[20:03] whereas if you take it along the
[20:06] the other axis it's
[20:10] it's decreasing like this increasing a
[20:13] little and then
[20:14] it again goes down so ah it is a local
[20:18] minimum along that
[20:19] so indeed it is like a saddle point
[20:21] although it looks a bit different than
[20:22] the
[20:23] standard saddle which is a little more
[20:25] uh
[20:27] clear to to see but it's clear that at 0
[20:30] 0 something strange happens
[20:32] the more interesting point is one by six
[20:33] comma one by twelve that's a bit hard to
[20:36] pick up from the
[20:37] graph ah so here is that point it's a
[20:40] bit difficult to see but let's zoom in
[20:42] further and
[20:43] maybe we can see what now so now we can
[20:46] see this point here is here is the point
[20:48] b which is 1 by 6 comma 1 by 12
[20:50] and you can see that close to this point
[20:53] the function is indeed
[20:56] sort of positive so it is coming down
[20:59] remember
[21:00] at before 0 0 from the
[21:03] on on the other side it was coming down
[21:06] but then just for a brief period
[21:08] it it kind of goes up again and then it
[21:10] goes down and that is what
[21:12] ah is being picked up by our
[21:16] hessian matrix over there okay so this
[21:18] uh this indeed
[21:20] conforms to to our understanding of ah
[21:23] what is happening yeah so maybe here
[21:25] one can see yeah here okay
[21:28] so you can see from the graph it may not
[21:30] be very easy to pick up these points
[21:32] but the algebra tells you what is
[21:33] happening and
[21:35] even from the function directly the the
[21:37] equation of the function
[21:38] it's not clear why this is a
[21:42] local but but the second order test is
[21:45] going to the hessian test is going to
[21:46] tell you
[21:47] that indeed it is a local maximum let's
[21:50] do this last example of
[21:51] f of x y sine of x y so we have computed
[21:54] the gradient
[21:55] for sine of x y which now let us write
[21:58] that down again
[22:00] this was y times cosine x y
[22:03] comma x times cosine x y
[22:07] in fact we also wrote down the hessian
[22:10] the hessian
[22:11] was um
[22:15] minus y squared sine of x y
[22:20] then the other diagonal term is minus x
[22:23] squared sine of x y and then the off
[22:26] diagonal terms were
[22:28] slightly more complicated so cosine of x
[22:31] y minus x y times
[22:34] sine of x y and then the same thing over
[22:36] here
[22:38] by clerus theorem or by computation
[22:44] ok so this is how our hessian matrix
[22:46] looks like so first what are the
[22:48] critical points
[22:49] ah so we actually know for this function
[22:52] what is happening right we have seen a
[22:54] graph of this function and several times
[22:57] and we know what is happening for this
[22:58] function because
[23:01] the the local maxima or minima
[23:05] are actually global maxima or minima and
[23:07] they are given by
[23:08] when the function this is a sine
[23:10] function so it takes the value 1 and
[23:11] minus 1 respectively
[23:13] so when does it take the value 1 when x
[23:15] times y
[23:16] is of the form pi by 2 plus
[23:20] k times 2 pi where k is an
[23:23] integer so for all such points the
[23:26] function takes the value 1 so the value
[23:29] 1 will be taken whenever x times y
[23:31] attains one of those values so it's it's
[23:34] a
[23:35] it's curves and we have actually seen
[23:36] this picture we will see it again
[23:38] and similarly ah when does it take the
[23:40] value minus 1
[23:41] when it's of the form uh 3 pi by 2
[23:44] plus k times 2 pi where k is an integer
[23:47] again
[23:48] and again that's a curve and ah on those
[23:50] points it takes value minus one
[23:53] and the only other point which ends up
[23:55] being a critical point
[23:56] ah is the following so let's equate
[24:00] so equating gradient
[24:03] to zero we get
[24:07] so two things can happen one is
[24:11] cosine of x y zero the other is
[24:15] if cosine of x y is not zero then both x
[24:17] and y should be 0
[24:20] right so cosine of x y is 0 is exactly
[24:23] the set of points that i just said so
[24:25] cosine of x y 0
[24:26] means that sine of x y is plus or minus
[24:28] 1 because we know that sine squared plus
[24:30] cosine squared is
[24:31] 1. so this is the same as saying that
[24:35] sine of x y is plus or minus 1. so plus
[24:39] 1 is exactly the set of local
[24:41] global in fact maxima and minus 1 is
[24:44] exactly the set of
[24:45] global minimum so we know actually what
[24:48] happens at
[24:49] all these points so these are points
[24:50] that we are already understand
[24:52] ah what happens at x is equal to y is
[24:55] equal to zero so this is this is the
[24:57] point that we don't know what happens
[24:59] ah well it is fairly clear that
[25:03] this this is probably not a point of
[25:05] local maximum or local minimum
[25:07] so most likely this is a saddle point
[25:09] and let us see if our hessian is telling
[25:10] us that
[25:13] so if you if we compute our hessian what
[25:16] do we get
[25:18] so hessian at zero zero so i should say
[25:20] h n
[25:21] at zero zero ah well substitute
[25:25] x is y zero so the diagonal entries
[25:28] become zero
[25:30] what happens to the off diagonal entries
[25:32] well
[25:33] x y times sin xy becomes zero so the
[25:36] only contributing term is cosine of x y
[25:39] that is cosine of zero when x is y
[25:41] 0 and cosine of 0 we know is 1
[25:45] so this is the matrix we get this
[25:47] implies determinant of
[25:50] this matrix so sometimes this is called
[25:52] the hessian determinant
[25:54] is minus 1 and that tells us that
[25:58] 0 0 is a saddle point for this function
[26:05] ok so the the point that was sort of on
[26:08] we were unsure of what happened
[26:11] the test told us it's a saddle point
[26:13] let's see what happens for those points
[26:14] for which we are sure of what happens
[26:16] okay let's see what happens to points
[26:19] where
[26:20] of this form where cosine of x y zero or
[26:23] sine of x y is plus or minus one
[26:26] so for points
[26:31] such that
[26:35] cosine x y zero
[26:38] let us compute the hessian
[26:49] so so as i said there are two
[26:52] two options either sine of x y is one or
[26:54] sine of x y is minus one let's say
[26:56] sine of x y is one okay so there are two
[26:59] options
[27:00] so i will say this or
[27:05] this
[27:08] and we will see what happens in both
[27:10] cases
[27:12] so if sine of x y is 1 then gives this
[27:15] gives me minus y squared
[27:19] minus x y
[27:22] minus x y minus x square
[27:26] and if sine of x y is minus 1
[27:31] then this gives me y
[27:34] squared x squared
[27:39] x y and x y
[27:42] so i'll just reiterate that this is if
[27:46] ah sine of x y is
[27:50] 1 and this is if sine of x y is
[27:55] minus 1 and
[27:58] what happens to the determinant so so
[28:01] suppose
[28:03] we compute the determinant so the
[28:05] hessian determinant
[28:07] well you can see what is happening this
[28:08] is x squared y squared
[28:11] minus x squared y squared which is
[28:13] actually zero so this test is
[28:14] inconclusive even though we
[28:16] actually know what is happening at these
[28:18] points and the same thing happens here
[28:24] this is also 0 x squared y squared minus
[28:26] x squared y square
[28:27] so the point of this example is to say
[28:29] that the hessian test is a
[28:31] is a
[28:35] has several features to it and
[28:39] what can happen is that points where it
[28:41] is obvious that there are
[28:42] local maxima or local minima it may end
[28:44] up being inconclusive
[28:46] whereas points that we actually don't
[28:47] know what's happening from from the
[28:49] function
[28:50] it gives us a result so such things can
[28:53] happen
[28:53] so the hessian test is
[28:57] uh is a it's not a fool proof test
[29:00] but it's our first step towards
[29:02] understanding critical points
[29:04] uh so we have studied the hessian test
[29:06] in this video for f x
[29:07] y we will study this in in the
[29:10] forthcoming video for
[29:12] more number of variables thank you