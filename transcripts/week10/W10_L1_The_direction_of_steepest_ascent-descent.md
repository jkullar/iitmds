# W10_L1: The direction of steepest ascent/descent

**Week:** Week 10
**YouTube URL:** https://www.youtube.com/watch?v=0H7ca6dFvQ8

---

## Transcript

[00:14] Hello, and welcome to the Maths 2 component of the online BSc Program on Data Science
[00:18] and Programming. This video is about the direction of steepest ascent and descent. So, the ideas
[00:24] in this video will be based on what we have studied about gradients and directional derivatives.
[00:29] So, let us start with this question about how to trace water flowing down the hill.
[00:36] So, maybe we will do this with an example. So, for an electrification project, someone
[00:42] named Mohan Bhargava is trying to understand how water flows down a particular hill, the
[00:48] name may be somewhat familiar. So how does water flow downhill? So, let us ask this question,
[00:53] how does water flow downhill?
[00:55] So, if you think about how it flows downhill it always moves in the direction where the
[01:01] altitude decreases most rapidly. So, if you have a rock face, if you have something like
[01:09] this, it is going to flow down here because this is most rapid. So, just as an example
[01:16] here is the, here is a cross section of the Deccan Plateau around Bangalore and Chennai,
[01:25] and so you can see Bangalore here in the middle, you can see Chennai here at very close to
[01:30] sea level on the right and there is the western ghats on the left, and a little bit of inclination
[01:41] between Bangalore and then a steep downfall towards Chennai.
[01:44] So, just as an example, if you have water, which is somewhere over here it is going to
[01:50] flow down here. If you have water on this side, it will flow down on this side. And
[01:56] let us say if you have water somewhere here it will flow down here, if you have water
[02:00] here it will flow down here, if you are here it flows towards Chennai and so on. So, I
[02:07] think it is clear what we mean by it will move in the direction where the altitude decreases
[02:11] most rapidly.
[02:12] Now, then, of course, one question. So, what happens if you have water somewhere over here?
[02:19] Somewhere exactly at the top. And there it is actually kind of stable. So, if you have
[02:29] gone to mountain tops you might often find that on the top of the mountain it is often
[02:35] like a plateau and there is, often pools of water over there. So, that does not happen.
[02:40] When you have, when you are on the edges. So, which say something about the rate of
[02:48] change, if you think of it carefully about what is happening to the altitude. This picture
[02:53] is just to give a general idea of what will happen to water. Let us come back to the example
[03:01] of our friend Mohan Bhargava.
[03:03] So, what Mohan Bhargava does is, he models the hill similar to the previous picture using
[03:10] a function h of x, where h is the altitude. And then he calculates the derivative h prime
[03:17] x and computes at which points it is negative, positive and 0 and that is exactly what we
[03:23] meant when we said that it moves in the direction in which the altitude decreases most rapidly.
[03:28] So, the decrease in the altitude will be captured by the rate of change of the altitude. And
[03:36] so, that means h prime x is going to tell you what is happening at the point x or to
[03:42] the altitude. And so, if the derivative is negative that means the water flows to the
[03:46] right from that point. So, if we say it is negative that means the the the the tangent
[03:56] line is like this. And if the tangent line is like this, it flows down here, which is
[04:02] to the right.
[04:03] And similarly, if the derivative is positive then the tangent line is like this. So, it
[04:11] flows down here, that is to the left, and if the derivative is 0, then that means the
[04:17] tangent line is like this, and that means the water will remain stationary. And that
[04:22] is exactly what the phenomenon that I was talking about, right at the tip of the mountain
[04:25] at the top. So, this is what Mohan Bhargava tries to do, he tries to model the altitude
[04:35] by this function h of x draws a picture similar to what we had before, although, not for the
[04:43] entire cross section of India, but for that specific hill, and then then based on that
[04:47] he tries to understand how water is flowing down.
[04:50] So, Mohan s friend Gita points out that a one-dimensional model is probably not going
[04:58] to help because the hill is two dimensional, so it has, it is like this and so a one-dimensional
[05:07] picture is not going to help us because there are more than right and left, in real life
[05:15] there are on the ground. That is there are many directions, not just right and left.
[05:24] So, she uses a two-dimensional function h of x comma y to model the altitude h. And
[05:32] here is an example of such a thing. So, you can see something like a hill, and this is
[05:40] the graph of a function and suitable exponential. And so, what she comes up with is a function
[05:48] of this type h of x, y the actual hills have more contours and she models it using that
[05:54] function h of x, y. And based on that she tries to understand how the water is going
[06:04] to flow down.
[06:05] So, Mohan asked her, how she will find out the direction in which the water flows, because
[06:11] now there is more than two directions. So, if you had only a function of one variable
[06:17] h of x then computing the derivative told you in what direction the water is going to
[06:25] move, but now you have several directions. And how do I know now based on this function
[06:34] how the water is going to flow down?
[06:37] So, Gita says the same principle that the water will flow down along the steepest slope,
[06:46] which is when the altitude decreases fastest. So again, the direction in which the altitude
[06:53] decreases fastest. And now, how do we compute this? So now, rather than saying that we should
[07:01] take h prime, we know that if we want to know the rate of change in a particular direction,
[07:08] we have something called the directional derivative.
[07:10] So, she says that, to compute it, we have to find the direction in which the function
[07:14] h decreases fastest, or equivalently, the rate of decrease of h of rate of decrease
[07:21] of h, is fastest. So, this is the same as finding the vector u in which the directional
[07:27] derivative hu is largest in absolute value amongst those for which it has negative sign.
[07:33] So, hu should have negative sign, because we want to decrease, we wanted to decrease
[07:37] h has to decrease fastest, so hu should have negative sign, but amongst those with negative
[07:43] sign, those directions with negative sign, if you take the absolute value, it is the
[07:48] largest.
[07:49] So, in terms of the real line, this will be the value at which hu is smallest in which
[08:00] we include the negative side, so hu must be smallest, that is what we are saying. So that
[08:06] is u such that hu is less than or equal to hv for all v in R2, so that is the smallest
[08:11] value and we also demand that hu is negative, because if it is smallest and positive then
[08:18] that is not going to be of much help. So, this is what we want. So, Gita has now given
[08:26] a different way of doing the same thing, and a more realistic way of doing the same thing.
[08:30] So, now we come to the main point of this video, which is, how do we know that direction?
[08:36] So, now we will generalize this. So, suppose we have a function of n variables and it is
[08:43] defined on a domain D in Rn, containing some open ball around the point a tilde, so we
[08:47] will give a general answer and then we will come back and answer it in this specific question
[08:52] of what direction will the water flow in.
[08:56] So, we want to know with this hypothesis in what direction is the directional derivative
[09:02] minimized? So, suppose gradient f exists and is continuous on some open ball around the
[09:07] point a tilde. So once this happens, we have this wonderful theorem that tells us that
[09:13] if you want to compute fu, then the way to do that is that fu is equal to gradient f
[09:23] at that point a tilde dot with u. So, this is equal to the norm of gradient f at a tilde
[09:33] times the norm at u times cosine of theta. Where what is theta?
[09:41] So, where theta is the angle between the gradient at a tilde and u. We have two vectors, so
[10:02] we have seen this in the linear algebra part that if you have the dot product then that
[10:06] is norm of the first vector times norm of the second vector times cosine of theta, where
[10:12] theta is the angle between those two vectors. Since it is a unit vector we know that norm
[10:16] of u is 1, so this is the same as gradient of f at a tilde times cosine of theta. Now,
[10:24] this function f is fixed, so the gradient is fixed and the gradient at a tilde in particular
[10:31] is fixed and so its norm is fixed.
[10:33] So, as you vary across the different directions what changes is theta. So, this is going to
[10:40] change depending on what is theta. So, as theta changes fu is going to change. So as
[10:48] u changes theta changes, and based on that fu is going to change. So, where is this going
[10:53] to be maximized and where is this going to be minimized?
[10:56] So, now that depends on the values of cosine theta, and cosine theta we understand very,
[11:00] very, very well. So, cosine theta is smallest, so cosine theta is minimized when theta is
[11:16] equal to pi. So, in other words, so if you think of what that means, that means the angle
[11:26] between u and the gradient vector is pi that means they are in opposite directions. If
[11:31] gradient is pointing here then you must be pointing here. So that is u is pointing in
[11:42] the direction  opposite to gradient f at a tilde.
[11:57] So, this minimum value therefore, the minimum value of fu is attained when u is equal to
[12:27] minus gradient of f at a tilde by norm, because we always want a factor of u has to be of
[12:38] norm 1. So, u is in the opposite direction means u is minus of the minus of gradient
[12:44] it is in that direction, and then to scale it you have to divide by the norm to make
[12:49] it norm 1.
[12:51] So, the minimum value of fu is attained when u is this and is equal to. So, now you can
[13:00] substitute u to be this. So, if you do that or you can just say that cosine theta is minus
[13:08] of this so it equals minus of norm of gradient of f at a tilde. So, the upshot of this is
[13:17] that in general if you have the directional derivative, the direction in which it is minimized
[13:24] when your function happens to have this property that gradient f exists and is continuous on
[13:30] some ball around a tilde is in the opposite direction to gradient f at a tilde.
[13:37] And so, the unit vector you have to that appears there is minus gradient f because that is
[13:42] the opposite direction divided by its norm, because it has to be norm 1. And when you
[13:49] substitute u to be that, which is the same as taking cosine theta is minus 1 in this
[13:56] expression we will get minus of norm of gradient of f at a tilde.
[14:00] So, now, this answers the question that was originally posed. So, if you had the water
[14:07] flow in the steepest direction downwards, it is going to happen at a gradient of h at
[14:16] the point x comma y minus of that, in the minus of that direction. So, at each point
[14:25] you should take minus gradient of f h at x, y and that will be the direction in which
[14:29] the water moves.
[14:32] So, one can ask the same question about when is it maximized and when is it, when does
[14:41] it remain unchanged. So, based on our previous discussion, we are going to have the same
[14:47] thing happening provided of course, that the hypothesis holds. So, assume the same hypothesis
[14:51] as in the previous slide which means that the gradient exists and is continuous on a
[14:57] open ball around a tilde. So, in that case, we will get there h, sorry fu is going to
[15:04] be gradient of f at a tilde times norm of u, times cosine theta.
[15:11] Now, if you want to maximize this, so it is maximized and cosine theta is maximized. Well,
[15:22] first of all, I can get rid of norm u because it is always norm 1, times cosine theta it
[15:30] is maximized when theta is equal to 0, which means
[15:43] u is in the  same direction as gradient at a tilde. So,
[16:00] in other words, u is equal to gradient of f at a tilde by its norm.
[16:11] And this also justifies why we call it the gradient. So, the gradient tells you, the
[16:17] word gradient tells you the slope at a point that is what the gradient means, in English
[16:23] in colloquial language. And so, what we are getting is that the gradient actually tells
[16:29] you that at a point what is the steepest slope. So, if you are standing at a particular point
[16:34] on a mountainside the slopes could vary in different direction. So, the gradient tells
[16:40] you the direction in which you have the steepest slope.
[16:45] And we can also answer the second question, which is when does it remain unchanged? So,
[16:56] it remains unchanged when the rate of change is 0, which means when fu is 0, so that is
[17:12] when cosine is 0. And when is cosine 0? So cosine is 0 when theta is equal to pi by 2
[17:23] that is theta is equal to pi by 2, which is the same as saying that u is orthogonal to
[17:34] or perpendicular because here we are using Euclidean norm and so on, so that is perpendicular
[17:41] or at 90 degrees to the gradient vector.
[17:46] So, we have answered these three things. When is it minimized in the opposite direction
[17:54] to the gradient vector? When is it maximized when it is in the same direction as the gradient
[17:59] vector? And when is the directional derivative constant when you move in a direction perpendicular
[18:05] to the gradient vector.
[18:07] Now, I want to warn you that in two dimensions, of course, saying perpendicular to the gradient
[18:14] vector means that you go either, so it is a line, you go along this way or this way,
[18:20] but we are in n dimensions. And in n dimension that means there is an equation that you have
[18:26] to solve. And if you do your linear algebra, that means you have a subspace of dimension
[18:32] n minus 1. And we will not talk a lot about that in this video, but this may come up later.
[18:41] So, this is this the, these are the answers to these questions. So, we have completely
[18:46] answered the original question, which was in what direction does water flow? On the
[18:51] other hand, if you want to ask, you are an adventure seeker and you want to go in the
[18:58] direction where the slope is steepest, you want to do rock climbing and you want to climb
[19:03] up fastest, so what direction should you go in, the direction of the gradient vector,
[19:07] that is what we have understood from here.
[19:10] And, on the other hand, if you have, if you do not want to change your altitude at all.
[19:16] You want to keep going at the same altitude and just hope that you do not have to climb
[19:22] down or climb up. And maybe if you go around then you will hit a plateau and you can go
[19:26] you up, you do not want to do any climbing up or down. Then you go in the direction in
[19:30] which the gradient is perpendicular, so you go in that direction. Fine.
[19:37] So, just to summarize what we have said. So, assuming the hypothesis as in the previous
[19:43] slide the property of steepest ascent is in terms of directional derivative that is saying
[19:50] that fu is positive and maximum and that takes place when u is equal to gradient of f divided
[19:55] by its norm.
[19:57] The property of steepest descent occurs in terms of directional derivative when fu is
[20:03] negative and minimum and the direction is the negative of the gradient, and you divide
[20:08] by its norm to make it norm 1. And the property of no change in the height in the altitude
[20:17] or which means in terms of functions no change in the function. So that occurs in terms of
[20:23] directional derivatives when fu is 0, and that is a direction orthogonal to gradient
[20:30] of f. So, this summarizes what we have done so far.
[20:34] Let us do a couple of examples to put this in perspective. So, suppose I have the function
[20:40] f x, y is sin x y, let us compute the gradient. We have actually done this computation before,
[20:46] so the gradient at x comma y is so at x you differentiate with respect to x, so that gives
[20:54] me y times cosine of x, y, and then x times cosine x, y, that is with respect to y. So,
[21:02] let us choose a particular point and evaluate over there what happens.
[21:06] So, suppose I choose the point, let us say pi comma 1, so at pi comma 1 what is the direction
[21:22] of steepest descent on the graph of this function? So, let us first evaluate the gradient vector
[21:44] at this point. So, if you take pi comma 1, so this is 1 times cosine of pi, comma pi
[21:55] times cosine of pi.
[21:58] Now cosine of pi is minus 1, so this tells us that this is minus 1 comma minus pi, so
[22:08] the direction in which you should move is opposite to this. So, u is going to be minus
[22:14] gradient f at pi comma 1 divided by its norm, which is 1 comma pi divided by root of 1 plus
[22:32] pi squared. So, this is the direction in which you should move.
[22:39] If you want to, for example, move in the direction where of steepest ascent, where the function
[22:44] increases the fastest, the direction in which the function increases the fastest, then you
[22:49] should move along minus 1 comma minus pi, the unit vector in that direction. And if
[22:53] you want to move along the direction where it does not change, so then you should move
[23:01] perpendicular to this vector, which is the vector pi comma minus 1 or minus pi comma
[23:08] 1, so in either of those directions.
[23:10] Let us similarly do this example. So, here we compute the gradient, so that is 2x comma
[23:18] 2y comma 2z. And so, suppose I want to now ask the same thing about let us say at 1 comma
[23:33] 1 comma 1 what is the direction in which the function increases fastest? So, the answer
[23:53] is in the direction of the gradient vector.
[23:56] So, the gradient at 1, 1, 1 is 2 comma 2 comma 2. And so, it should be in the direction,
[24:03] so in the direction of u equals 2 comma 2 comma 2. And because we typically make this
[24:15] a unit vector we should divide by its norm. So, 2 squared is 4 times 3 is 12, so this
[24:25] is 1 over root 3, 1, 1, 1. So, instead if you wanted the direction of no change, so
[24:35] in which direction does the function remain constant?
[24:47] So, for this, we will have to move perpendicular to the vector 2, 2, 2. Now there is many choices
[25:01] for the perpendicular direction. So, this will be any vector which is on the plane x
[25:10] y z such that 2x plus 2y plus 2z is 0. So, I will encourage you to work out some vectors.
[25:21] So, examples of such would be 1 comma minus 1 comma 0, of course, we should take the unit
[25:28] vectors, so, I will divide by root 2 or you could have 1 by root 2 comma 1 comma 0 comma
[25:34] minus 1.
[25:35] And, in fact, this is a basis for those directions. So, any linear combination of these two would
[25:43] be perpendicular to this direction, and that will be a direction in which the function
[25:54] remains constant. So, I hope the idea here is clear. I want to emphasize that this this
[26:00] video is extremely important because this is exactly what you are going to use when
[26:05] you do something called gradient descent in machine learning.
[26:09] So, in machine learning, you will have a phenomenon called gradient descent where you try to keep
[26:14] decreasing something or increasing something decreasing usually, and so, at a when you
[26:21] are at a particular solution you try to minimize some quantity so as to get what we will call
[26:27] a better solution. So, so please, yeah, please understand this video very well.
[26:36] I want to end on this cautionary note, since we have been doing this example for a while,
[26:44] now, I want to again emphasize this example to say that we need to know the continuity
[26:50] of the gradient function. So, recall that for this function, the gradient of f at 0,
[26:56] 0 was 0 comma 0, but the directional derivatives at 0, 0 other than the x and the y axis meaning
[27:07] the i and j these did not exist unless use e1 or e2 or minus e1 or minus e2, which will
[27:22] be just negative of these.
[27:26] So, this thing that we used earlier that fu is equal to gradient dot u, and which we use
[27:34] in order to compute the direction in which it is maximum or minimum that here it is none
[27:42] of those things are applicable. So, you need to know that your gradient is in fact continuous
[27:48] in a small neighborhood. And so, it may happen that the function is actually has edges.
[28:01] So, it is jagged over there. And if that happens then you cannot use any of what we are doing
[28:08] here. So, in such places, the gradient is not going to be, the partial derivatives will
[28:13] not be continuous, and then we cannot apply this theory. So, it may still happen that
[28:19] there is a direction. For example, if it is like this and inclination is more over here
[28:24] you do not want to go in this direction, but we cannot say that from the gradient.
[28:31] So, that condition is important. So, let us summarize quickly what we have done in this
[28:38] video. So, we have seen this very important idea that, if you have a function f for which
[28:45] the gradient functions continuous, then in order to compute the direction in which the
[28:52] function increases most at a point that is the gradient at that point, the direction
[28:58] in which the function decreases the most rapidly at that point, that is the negative of the
[29:06] gradient direction, and the direction in which the function stays constant that is orthogonal
[29:14] or perpendicular to the direction of the gradient at that point. Thank you.