# W9_L4: Limits for scalar-valued multivariable functions

**Week:** Week 9
**YouTube URL:** https://www.youtube.com/watch?v=Uvv8-Ujgqjo

---

## Transcript

[00:14] Hello, and welcome to the Maths 2 component of the online BSc program on Data Science
[00:18] and programming. We have seen multivariable functions and today we are going to discuss
[00:25] Limits for Scalar Valued Multivariable Functions. So, let us recall first that we have seen
[00:30] the notion of limits for sequences of real numbers.
[00:34] So, if an is a sequence of real numbers, we say that the an has limit a, if as n increases
[00:41] the numbers an come closer and closer to the number a. So, a sequence an is called convergent
[00:47] if it converges to some limit, so that means there is some a, such that an tends to a,
[00:51] an that is an comes closer and closer to a.
[00:55] Here is a couple of examples. So, 1 by n summation 1 by i factorial, n times sin 1 by n. And
[01:03] in a minute, we will quickly recall what these limits are. A sequence an is called divergent,
[01:10] if it is not convergent. And examples of such sequences are minus 1 to the power n, just
[01:17] n, and then log of 1 by n.
[01:20] So, in a minute, we will see, we will recall what happens to these as well. And also, we
[01:27] defined the notion of a subsequence. So, a subsequence of a sequence is a new sequence,
[01:32] which we formed by possibly excluding some entries of the original sequence. So, you
[01:38] choose only some of the entries of the original sequence.
[01:43] So now, the goal is to move from real numbers to higher dimensional space, so Rp. And in
[01:52] a minute, we will talk about sequences there and convergence over there. So let us recall
[01:59] first that what happens to these sequences. So, for these sequences, 1 by n, for example,
[02:05] tends to 0, summation 1 by i factorial, if you remember this one, it tends to e, and
[02:11] then n times sin 1 by n, you can think of this as sin of 1 by n divided by 1 by n.
[02:19] And as n tends to infinity, 1 by n tends to 0. And we know that sin x by x tends to 1.
[02:26] So, this tends to 1. So, this was one of the non-trivial limits that we actually computed
[02:31] in, back when we did one variable calculus. And then we had, these are divergent minus
[02:41] 1 to the power n is divergent, because it keeps oscillating. So, minus 1 to the power
[02:46] 1 is minus 1, then squared is 1, then again minus 1 1, so it keeps oscillating, it does
[02:51] not come close to any number.
[02:53] So, this just diverges because it oscillates. The number n diverges, but it diverges in
[02:59] a different way, than minus 1 to the power n, because we say diverges to infinity. So,
[03:04] what happens is, it keeps increasing, and it becomes larger and larger on the positive
[03:09] side, and it goes to infinity, so we say that this diverges to infinity.
[03:17] And then similarly, if you take log of 1 by n, if you recall the log function, then this
[03:24] diverges to minus infinity. So, in one variable calculus, we had these special things called
[03:33] infinity and minus infinity. And we had these sort of three different notions of divergence,
[03:39] one was just where it does not come close to anything. And the other two were where
[03:43] it diverges, but it diverges to infinity, and the third was where it diverges to minus
[03:48] infinity. So, now, we are going to use this as a basis for exploring what happens in higher
[03:53] dimensional space.
[03:54] So, limits of sequences in Rp. So, let an tilde be a sequence in Rp. Let us recall that
[04:01] we have been using tilde to emphasise when we are in higher dimension. So an tilde means
[04:07] it is a vector or an element of Rp and it has p components. So, there are p real numbers.
[04:16] So, those coordinates are denoted by an1, an2, anp for each an tilde. So, you have a
[04:23] sequence of such things. And for each one you have p many coordinates.
[04:28] So, you can look at the coordinate sequences in particular. So, for each coordinate, suppose
[04:32] I decide to fix the first coordinate, so for the first coordinate, I have a11, a21, a31,
[04:38] a41, and so on. So, that is the first coordinate sequence. Then you have a second coordinate
[04:43] sequence, a12, a22, a32, a42 and so on and then all the way up to the pth coordinate
[04:50] sequence. So, that is a1p, a2p, and so on.
[04:55] So, we have such a sequence and, in the sequence, consists of vectors, or elements of Rp. And
[05:08] each of those have p coordinates, that is the main thing you have to remember. And each
[05:12] of those coordinates forms a sequence in R, in the sense that we studied on the previous
[05:18] slide. So, we say that an has limit a tilde, which is some other vector or element of Rp,
[05:27] where the coordinates are a1, a2, ap if, as n increases, the sequence in the ith coordinate
[05:34] has limit ai.
[05:35] So, as I said, what you do is, let us say you take the first coordinate, so from this
[05:41] sequence an tilde, for each of these vectors, you extract the first coordinate. So, then
[05:46] you get a11, a21, a31, and so on, that forms a sequence in R and you ask, does it have
[05:52] a limit? Well, if it has a limit, let us say suppose the limit is a1. So, you keep that
[05:57] in store, then you go to the second one, you do a21 sorry a12, a22, a32, a42 and so on.
[06:06] Does that have a limit? Well, if that has a limit, you call that limit a2, and then
[06:10] you go on.
[06:11] And you do this for all p coordinate sequences. And if all of them have limits, then you put
[06:18] that together into a vector, which we have called a tilde. And then we say that this
[06:24] an which should have come with a tilde, so an tilde. So, we say that an tilde has limit
[06:33] a tilde, which is this which has coordinates a1, a2, ap, if for each coordinate, the sequence
[06:41] tends to the corresponding coordinate of a tilde. So, ani, the sequence ani tends to
[06:46] ai.
[06:47] So basically, the idea of convergence of sequence says, so limits of sequence says in Rp is
[06:56] just borrowed from R, it is nothing very special, what you do is you look at each coordinate,
[07:02] ask if the sequence over there converges, and if it does converge, you put them all
[07:06] together, that is all that the limit in Rp does. So, a sequence an tilde in Rp, is called
[07:14] convergent if it converges to some limits. So now, beyond this, the definitions are exactly
[07:18] the same as we have for R.
[07:20] So, a sequence an tilde in Rp is called divergent if it is not convergent. And then we will
[07:26] define something called a subsequence of a sequence, which is given by deleting some
[07:33] terms, so excluding some entries in that sequence, or you could take all of them or you could
[07:39] delete some of them, exclude some of them. So, this is exactly in parallel with what
[07:43] happens in R. And in fact, to check limits in Rp, you have to check limits in R, that
[07:48] is what this is saying.
[07:51] So here is a couple of examples. So, the first example is 1 by and comma n times sin one
[07:57] 1 by n. The second example is minus 1 to the power n comma n times sin 1 by n. The third
[08:05] example is a bit bigger, so this is cosine n by n. Some complicated looking expression
[08:12] summation 1 by factorial and then n times cosine of 1 by n. So let us ask what happens
[08:17] to each of these and visualise the first two.
[08:26] So, the first sequence was 1 by n, n times sin of 1 by n. So, let us see how this behaves.
[08:39] So, I am plotting this over the range of n as n goes from 1 to 500. And we will keep
[08:46] track of this point a. So, when n is 1, this point is 1, 0.84. So, 1, because 1 by 1 is
[08:56] 1, and, 1 times sin of 1 by 1. So, 1 times sin 1. So, this is 1, sin 1, so sin 1 is 0.84.
[09:04] And as you increase in, you can see what is happening to this point, it started coming
[09:09] closer and closer and closer and closer to the point 0, 1. And this is at 156, it is
[09:20] already quite close. And you can see it is closing in further and further as we increase
[09:24] it. So, if we make this larger, so it is still not reached, but it is coming very close.
[09:31] And you can see it is moving, moving, moving, moving, and it is coming to 500, where it
[09:35] is almost at 0 comma 1.
[09:37] So, if we make it still larger, you can see it is not exactly at 0,1. But, but yeah, it
[09:46] is very, very, very close. So that says that as n tends to infinity, this sequence, so
[09:54] each coordinate, we know what happens. So, for 1 by n 1 by n tends to 0 as n tends to
[10:01] infinity. So that is the first coordinate. So, that is why in the first coordinate, we
[10:06] have 0.
[10:07] And in the second coordinate, we have n times sin 1 by n, which we know because sin x by
[10:12] x as x tends to 0 tends to 1, we know that the second coordinate, the sequence tends
[10:18] to 1. So, the limit is 0 comma 1. And we have seen a geometric explanation for that. So,
[10:26] for the second sequence, we have minus 1 to the power n comma n times sin 1 by n.
[10:34] Now we know from from what we just did that minus 1 to the power n oscillates, and n times
[10:41] sin 1 by n converges to 1. So, this function is, this sequence is also going to oscillate.
[10:47] Let us see the behaviour of of the sequence. So, as it increases, you can see that the
[10:54] point b is changing from, changing value from one side of the axis to the other.
[11:00] So, as I, as I am at 1, this is minus 1 comma 0.84, then we increase it to 3, it is minus
[11:11] 1 comma 0.98 then we have n is even, say n is 8, this is 1 comma 1. And after that, it
[11:17] just oscillates between minus 1 comma 1 and 1 comma 1. And so we know that this sequence
[11:24] is not going to converge, it does not come close to any number in rather any vector in
[11:30] R2. So, this sequence will not converge.
[11:32] So, if I play this one, you will see it is still oscillating between minus 1 comma 1
[11:36] and 1 comma 1. And we knew that already, as I explained, because minus 1 to the power
[11:41] n oscillates. So, in other words, this does converge and this converges to 0, 1 we saw
[11:49] this graphically also, this does not converge or this limit does not exist. And now we have
[12:07] the last one. So, let us look at these terms.
[12:12] So, the first term is cosine n by n. So, cosine n, as we know, varies between minus 1 and
[12:20] 1 and, but when you divide it by n, so that means in absolute value, it is between 0 and
[12:27] 1 by n. And then by sandwich, we know that this tends to 0. The second one we have done
[12:34] in our previous video on limits, when we did limits for sequences. So, I encourage you
[12:43] to solve it yourself and if you do not remember, go back to that video and ask, see what happens.
[12:49] It is five times something, I will leave that to you.
[12:54] The third one, we saw in the previous slide goes to e. And what about the fourth one,
[13:00] so the fourth one is n times cosine 1 by n. And unfortunately for this, we know that cosine
[13:11] 1 by n as n tends to infinity, so 1 by n tends to 0, so cosine 1 by n tends to cosine of
[13:19] 0, which is 1, but n goes shoots off to infinity. So, this is going to go to, this is going
[13:28] to diverge to infinity.
[13:31] And so, what does this mean? That means that in this sequence as a whole, as a sequence
[13:38] in R4, three of these coordinate sequences do indeed have limits, but the fourth one
[13:43] does not. So, this limit also does not exist, limit does not exist. So, I hope it is clear
[13:51] what we mean by sequences of limits in higher dimensions. So, we have to just check individual
[13:58] limits for each coordinate.
[14:01] So, let us now talk about the limit of a scalar valued multivariable function at a point.
[14:07] So, this is going to generalise what we saw earlier about one variable calculus, limits
[14:13] of functions of one variable at a point. So, let f be a scalar valued multivariable function
[14:19] defined on a domain D in Rk and a tilde be a point such that there exists a sequence
[14:24] in D which converges to a tilde.
[14:25] So, this is some technical condition that we need in order to define the notion of the
[14:31] limit. So, if there exists a real number L, remember this is a scalar valued function.
[14:36] So, f takes values in R, which means real numbers. So, if there exists a real number
[14:42] L such that f of an tilde tends to L for all sequences an tilde such that an tilde tends
[14:48] to a tilde. Then we say that the limit of a at a tilde exists and equals L.
[14:55] So, this is again, direct generalisation of what we have seen in one variable calculus.
[15:00] We denote this by a limit extends to a tilde f of x tilde is equal to L. So, this is the
[15:06] same as saying that as x tilde comes closer and closer to the point at a tilde, then f
[15:10] of x tilde eventually comes closer and closer to the number L. This is what what it means
[15:16] for this limit to exist. And if there is no such number L, we say that the limit of f
[15:22] at a tilde does not exist.
[15:26] Let us do some basic examples. So, this first limit is ai to the power k. What is ai? ai
[15:31] is the ith coordinate of the vector a tilde. So, you look at that and raise it to the power
[15:39] k and it is fairly obvious that that is what happens. Because as x tilde tends to a tilde
[15:45] you want xi to the power k well, x tilde tends to a tilde means xi is coming close to ai,
[15:51] that means xi to the power k is coming close to ai to the power k.
[15:55] Similarly, for the second one, you will get ai to the power k, because here we have assumed
[16:00] ai is non-zero. So even if your power is negative, meaning this k is negative, the same argument
[16:07] will hold, how would e to the power xi, well this will go to e to the power ai. How would
[16:13] log of xi, well again, if ai is positive, this is going to be log of ai. And then sin
[16:23] of xi will go to sin of ai.
[16:26] Please check this, whatever I am, I am doing this fast, because I think this is very doable
[16:30] from what we have done before. But you should check this for yourself, it is very important
[16:35] that you check these and understand what what is being said here based on the definitions
[16:42] in the previous slides, fine.
[16:44] And then finally, if you have tan of xi and ai is between minus pi by 2 and pi by 2, then
[16:49] this is tan of ai. So, this is not, this is nothing very deep, it just follows from one
[16:56] variable calculus. And what I am going to try and say, tell you now is that most of
[16:59] the things that we do for easy limits are from one variable calculus. There are difficult
[17:06] limits, of course, and that is, that is what we will be studying as we go along. Those
[17:11] need more refined techniques.
[17:13] So, let us look at some rules about limits of scalar valued multivariable functions.
[17:18] These are again in the same spirit as the ones for one variable calculus. So, if you
[17:22] have two functions such that, for both of them, the limits as x tilde tends to a tilde
[17:28] exists and equal F and G respectively, and you have some scalar c, then if you take cf
[17:34] plus g, then that limit is c times capital F plus capital G. So, you can push the limit
[17:40] inside and take the scalar out, that is what it says.
[17:44] And of course, special cases are, of this are where c is equal to 1. So, in that case,
[17:48] it will say that the sum of the limits is the limit of the sums. Similarly, you can
[17:54] take c is minus 1 and that will say that if you take the difference of the functions and
[17:58] take the limit, that is just taking the difference of the limits, you can just take the function
[18:02] g is 0, and in that case, this is saying c times f limit, you can take the c out.
[18:12] So, the next one is for product. So, if you take the multiplication of two scalar valued
[18:19] functions. And this makes sense because these are scalar valued multivariable functions,
[18:23] then if you take the limit, and both of these limits exist as x tilde tends to a tilde,
[18:29] then the limit is just the product. So, it is F times G. Similarly, if you take the quotient
[18:34] f by g, here, of course you need the caveat that as x tilde comes close to a tilde this
[18:42] the limit is nonzero. So, this capital G is non-zero. So once that happens, the quotient
[18:47] also has limit and it is exactly capital F by G.
[18:49] So, let us quickly write down what this means based on what we have seen. So, for example,
[18:56] if I have a function like like this, so if I have h of x, y, z is x square y cube plus
[19:08] y cube z squared plus e to the x. Let us say e to the xyz. And I want to ask what is the
[19:18] limit of let us say x, y, z tends to 1, 2, 3 of h. Well, let us let us see if I can apply
[19:33] whatever I have above, let me not take e to the power of x, y, z instead let me take just
[19:41] x y, z. We will come to x, y, e to the xyz in a minute.
[19:45] So, if you take this limit, well, first let us look at x square y cube. We saw on the
[19:51] previous slide that both of these individually exists. And this limit is going to be 1 squared
[19:58] the substitution and this limit is going to be 2 cubed, then you can use the second one
[20:05] and say that for the, for x square y cube, the limit is 1 squared times 2 cube. Similarly,
[20:13] for y cube x squared, it will be 2 cube times 3 squared.
[20:20] And for the third term, it will be 1 times 2 times 3, using 2, and then using 1 that
[20:27] you can, the limit of a sum of functions is the sum of the limits, if all of them exist,
[20:33] you can just say that this is the limit of each of these individually. And of course,
[20:57] limit x, y, z tends to 1, 2, 3; x, y, z tends to 1, 2, 3 and we have computed all those
[21:08] using again these rules. So, this is 1 squared times 2 cube plus 2 cubed times 3 squared
[21:16] plus 1 times 2 times 3, essentially, what we have got is you can just substitute h of
[21:21] 1, 2, 3 inside this function. So, you can, this limit is exactly h of 1, 2, 3, which
[21:29] is, so 8 plus 8 times 9 72 plus 6, so whatever that is, that is I think 86.
[21:40] So, I hope it is, it is clear how these rules are useful. Similarly, you could have something
[21:48] like limit let us say x by y as x comma y tends to 1 comma 1, then that would be just
[21:58] 1, because you can substitute for the numerators, substitute for the denominator, and for the
[22:03] denominator it works because the limit is non-zero. So, this is very, very, very similar
[22:09] to what we have done in one variable calculus in many, many, many places you are, you can
[22:14] just substitute the values.
[22:16] Not always though, remember even in one variable calculus, we had trouble with substitution,
[22:21] for example, in things like sin x by x. But I hope it is clear how these rules can be
[22:28] used. So, for polynomials, for example, it is very easy to find limits.
[22:35] The next thing that we want to study is composition. So, suppose f is a scalar valued multivariable
[22:42] function, and g is a function of one variable such that the composition g composed f is
[22:45] well defined. Then, if limit f of x is F, and limit g of x is L, then limit g composed
[22:53] f of x is also L. This may take a little time to digest, what we are saying is this.
[23:01] So, suppose I have the function h of x, y, z is e to the power xyz. Then I can write
[23:11] this function as a composition of two functions. One is h of x, y, z is xyz. This is a very
[23:23] nice function that we understand, not h, but f of x, y, z and the other function is that
[23:29] is a g of u is equal to e to the power u, again, a very nice function, both of these
[23:34] are nice functions.
[23:36] Let us see what happens to limit, let us say I want to compute limit x, y, z. So, want
[23:47] limit x, y, z tends to 1, 2, 3 now h of x, y, z this is what I want. Now, whatever we
[23:56] did on the previous page does not unfortunately help us directly. But what we can do is we
[24:02] can use the fact that this is com, this is a composition. So, let us first ask what happens
[24:08] to f? Well, this, of course, we know what happens this is 1 times 2 times 3.
[24:13] So, in terms of what is your, this is capital F and, and then if we have limit x tends to
[24:29] f of g of x, so here, we want u tends to this number which is 6, so u tends to 6 g of u,
[24:44] which is e to the power u, this is e to the power 6. So, what is the net result? The net
[24:51] result is that this limit that we wanted is exactly this number here, e to the power 6
[25:00] because I can compose. So, that is the answer. And this is again, eventually what we are
[25:06] saying is you can substitute.
[25:09] So, this is a useful rule, then we have functions beyond just polynomials. For polynomials the
[25:16] previous page, whatever we had or rational functions, the previous page sufficed. But
[25:20] if you have exponentials, trigonometric functions, logarithms then we can use this composition
[25:26] rule and we can find the limits.
[25:29] And finally, we have the sandwich principle, which again, we have studied in one variable
[25:34] calculus. So, if you have two functions f and g such that for both of them, the limit
[25:38] as x tends to a x tilde tends to a tilde is L. And then if you have some function which
[25:44] is caught between them, sandwiched between them, then the limit as x tends to a tilde
[25:51] h of x tilde is also equal to L. So, you will see an example of this in the tutorial. So,
[25:58] I will not expound more on this. But we have seen examples already in one variable calculus.
[26:06] So let us come to finding limits by substitution. And this is where you have to be fairly careful.
[26:11] So, suppose we want to find the value of the limit of a function f of x at the point a
[26:16] tilde so that is limit x tends to, x tilde tends to a tilde f of x tilde. So, often we
[26:22] can substitute the value of a tilde in the expression of f of x tilde and obtain the
[26:27] limit. This is what many of the examples that we have seen, we could do.
[26:33] So, unfortunately, this does not work, when the function gets slightly complicated, or
[26:37] the point a tilde does not belong to the domain of the definition of f of x tilde. It may
[26:42] happen that f is not defined a tilde at all, then what do you do? So, let us look at this
[26:48] example, you may actually remember this example from somewhere else.
[26:53] In any case, let us try and understand what is limit x tilde tends to 0, 0 x cubed minus
[26:58] y squared x by x squared plus y squared, squared. So, what we want to ask is, what happens as,
[27:11] to this limit as x tilde comes close to 0, 0, which means x, y comes close to 0, 0. Now,
[27:17] we cannot use any of the previous things because if you look at this expression, it is a 0
[27:24] by 0 type expression, so you cannot, so the rational function where you had F by G, unfortunately,
[27:31] the denominator here is becoming 0 in the limit, so you cannot use that rule.
[27:36] So, there is no other rule that we can really use. So, how do I try to attempt this? So,
[27:42] we have to sort of try and do this by first principles, ahead we will also see other ways.
[27:47] So, we will try and look at what happens to sequences as they come close to 0, 0. So let
[27:54] us first try and look at sequences of the form, let us say I look at a sequence of the
[27:58] form an tilde is equal to 1 by n, 0.
[28:05] So, along the x axis as I come close to this point 0, 0, what happens to this function?
[28:11] So, if you look at f of an tilde, well, I can substitute 1 by n, 0 in this expression,
[28:24] and what do I get? So, the numerator is 1 by n cubed minus 0 squared times 1 by n. And
[28:34] the denominator is 1 by n squared plus 0 squared, the whole squared.
[28:42] So, this is, if we compute this, this is 1 by n cubed divided by 1 by n to the power
[28:47] 4 which is just n. And what that means is, if you take a f of an tilde, that is exactly
[29:00] n, so f of an tilde as n increases, diverges to infinity. So, this function in terms of
[29:08] what we have seen, there is a sequence for which this function diverges to infinity.
[29:16] Just for so, so in particular, what this means is that the sequence does not have a limit.
[29:23] So, this limit x tilde tends to 0, 0 does not exist of this function. Let us just for
[29:30] practice, take another sequence was so 0, 1 by n. So let us look at what is f of bn
[29:37] tilde, so for bn tilde if we substitute that, so the numerator is 0 cubed minus 1 by n squared
[29:45] times 0, that is 0 and the denominator is 0 squared plus 1 by n squared squared. So,
[29:56] which is 0 by something non-zero which is just 0.
[30:01] So, for this, this sequence bn tilde f of bn tilde does actually have a limit. So, along
[30:07] the y axis, this function does have a limit. So, notice what is happening here along the
[30:16] x axis as we take a sequence along the x axis which was 1 by n comma 0 the f of an tilde
[30:25] diverged to infinity along the y axis as we took a sequence that actually converges to
[30:31] 0.
[30:32] So, we have two sequences which are giving us two different limits. So, there is no way
[30:37] in fact, one of them diverges. So, this limit does not exist. So, the main point is you
[30:43] cannot substitute, this for example, in this kind of function, you cannot substitute and
[30:51] this limit actually does not exist. So, this idea of taking sequences from different directions
[31:02] is very important and we will see more about this ahead. Thank you.