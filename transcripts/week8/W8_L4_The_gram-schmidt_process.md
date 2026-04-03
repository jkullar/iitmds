# W8_L4: The gram-schmidt process

**Week:** Week 8
**YouTube URL:** https://www.youtube.com/watch?v=WEpy57pYKH4

---

## Transcript

[00:14] In this video we are going to talk about the Gram-Schmidt process. So, what is the Gram-Schmidt
[00:18] process? Let us look at this process in a nutshell.
[00:23] So, what the Gram-Schmidt process does is that in an inner product space it takes any
[00:31] basis x1, x2, xn and it produces, we use the Gram-Schmidt process and it produces an orthonormal
[00:39] basis v1, v2, vn. So, let us recall before we start going ahead what is a basis. So,
[00:46] a basis is a linearly independent set which is also spanning.
[00:50] So, in other words every element of your vector space or in this case for inner product space
[00:56] can be written as a unique linear combination of these vectors x1, x2, xn. So, this is true
[01:03] for any vector space that we can produce a basis and we have seen how to do that, but
[01:10] suppose now that you have an inner product space. So, you have not only a vector space
[01:15] but on that vector space you also have an inner product.
[01:19] Then you can use the Gram-Schmidt process to get from these x1, x2, xn, which is a basis,
[01:27] an orthonormal basis, which is, just to recall that each of these vectors are mutually orthogonal,
[01:34] that means the inner product of vi, vj is 0 if i is not equal to j, and each of these
[01:41] vectors have norm, that means the inner product of vi with itself so vi comma vi inner product
[01:46] is 1. So, that is an orthonormal basis.
[01:49] And in the previous videos we have seen why orthonormal basis are useful, because you
[01:54] can express various phenomenon in very nice ways. In particular you can write down the
[02:01] linear combination of any vector. The constants that appear in the linear combination or the
[02:08] coefficients that appear in the linear combination very nicely, in terms of the inner product,
[02:14] and further they represent something called the projection which we saw in the previous
[02:18] video.
[02:19] So, the project can be written or is the inner product of the given vector with some of these
[02:30] vectors depending on where you want to project and that is one of the, I mean you have to
[02:36] divide by something and so on. So, there was a formula that we found out last time, but
[02:40] that formula was particularly easy if you are, first of all there is a formula if have
[02:45] an inner product, if you have orthogonal basis and if it is orthonormal the formula is particularly,
[02:52] you do not even have to divide by anything.
[02:55] So, even in this video we are going to use this idea of projection and that is the main
[03:01] sort of key tool in the Gram-Schmidt process.
[03:04] So, let us do an example and the intuition behind that, and study the intuition behind
[03:11] the Gram-Schmidt process. So, let us look at this basis for R3, 1, 2, 2; minus 1, 0,
[03:17] 2 and 0, 0, 1. So, first of all you have to convince yourself that this is a basis. So,
[03:24] recall that we know how to get basis for Rn by, if you have given n vectors how to check
[03:31] if it is a basis, you just take those n vectors, put them into a metrics as the columns or
[03:37] it is okay even as rows, and you compute the determinant. So, if the determinant is non
[03:42] 0, then it will be a basis and you can check that indeed this is a basis. So, I will leave
[03:49] that checking to you.
[03:50] So, the question is can we use this to obtain an orthonormal basis for R3? So, now we want
[03:55] to convert from this basis to another basis which is an orthonormal basis. Now, as we
[04:02] have mentioned earlier in the convention here is that if no inner product is specifically
[04:08] mentioned then that means you are looking at the standard inner product, the dot product
[04:12] of R3. So, this is an orthonormal basis with respect to the dot product. So, that is what
[04:17] we want to obtain, an orthonormal basis with respect to the dot product.
[04:21] So, we start by taking 1, 2, 2, well if you want to get something, so let us start with
[04:25] the first vector. Now we want a vector which is orthogonal to v1, so let us first try to
[04:34] get an orthogonal basis. So, that means we want to get v1, v2, v 3, so that they are
[04:40] mutually orthogonal. Then once we have an orthogonal basis we know how to go from there
[04:45] to orthonormal, by dividing by each vector by its norm.
[04:50] So, let v1 be 1, 2, 2; we want a vector which is orthogonal v1. So, last time we saw that
[04:57] vectors which are orthogonal to v1 are exactly those which are in, what we call v1 perp or
[05:04] in general if you have a subspace w, then vectors which are orthogonal to all vectors
[05:09] in w are exactly, that set which happens to be a subspace is exactly the set or the subset
[05:18] w perp. So, we want a vector which is in v1 perp or span of v1 perp. So, we use the projection
[05:27] P v1 to v1. How do we use this?
[05:30] Well, here is how we use it. define v2 to be, you take the second basis vector minus
[05:37] 1, 0, 2, so you take this vector minus 1, 0, 2 and you subtract the projection of minus
[05:45] 1, 0, 2 onto v1 from minus 1, 0, 2, that is what you do, and this is a standard computation
[05:52] which is something we have done in the previous video namely P1 of minus 1, 0, 2 is some scalar
[06:04] multiple of v1 and what is that scalar multiple? It is the inner product of minus 1, 0, 2 with
[06:10] 1, 2, 2 divided by the norm square of 1, 2, 2.
[06:14] So, if you compute this you get, the numerator is minus 1, plus 4 so 3 and the denominator
[06:22] is 1 plus 4 plus 4, so 9. So, 3 by 9 is 1 by 3. So I get minus 1, 0, 2; minus 1 by 3
[06:33] times 1, 2, 2 and then if you do the subtraction this is what you get. Minus 4 thirds, minus
[06:39] 2 thirds, 4 thirds. So, first of all why did we do this? So, this was because remember
[06:45] last time that we saw that W perp, so we have any subspace W, then you have this other subspace
[06:56] called W perp which is all those vectors v, such that v comma.
[07:01] Let me write this carefully, v, such that inner product of v and W is 0 for all w in
[07:11] W. It was this set and then we saw it is a subspace because we saw that this is the null
[07:17] space of Pw. So, what are we doing here? To obtain something in W perp, what we should
[07:33] do is we should get something so that when we evaluate Pw on that then it gives us 0.
[07:40] So, Pw of v equal 0 if an only if v belongs to W perp, this was what we saw.
[07:53] And the point is if you look at the identity minus Pw so this is, you evaluate this on
[08:01] v, if you evaluate this on v so you get v minus Pw of v and if you again take Pw of
[08:13] this, so now you have already projected, after you apply Pw you have already projected in
[08:23] W, so remember that Pw composed Pw was just Pw because the projection does not change
[08:30] elements in W and that gives us that this is 0. This was something we studied.
[08:35] Which means that if you take any element of this firm over here, this is inside W perp.
[08:49] So, this is what we have seen and that is exactly what we are using here, we are using
[08:55] that if you do minus 1, 0, 2; minus P v1 of minus 1, 0, 2 so you can rewrite this as 1
[09:02] minus P v1, identity minus P v1 of minus 1, 0, 2 and this vector will be in v1 perp.
[09:13] This is what the idea is for this computation, and that is why we do this computation, we
[09:18] get v2 and this explanation below is a general method to see that v2 is in v1 perp, but you
[09:26] can actually explicitly do this by taking this vector v2 and computing v2 comma v1,
[09:33] I will encourage you to check that this is actually 0. So, let us move on.
[09:40] So, now we have v1 and v2 which are orthogonal to each other, so now we want a vector which
[09:46] is orthogonal to both v1 and v2, because remember we want to get an orthogonal basis. So in
[09:55] other words we want this vector let us call it v3 to be in the span of v1, v2 perp. That
[10:01] is what we want, and how do we do this? When we again use the projection and this is exactly
[10:08] the idea that we had in the previous slide. You take this span of v1 comma v2 as W and
[10:15] you apply, 1 minus, I minus Pw on some vector. You apply this on some vector and then you
[10:24] are going to get a vector which is perpendicular to v1 and v2.
[10:28] The only thing is you have to be careful that this vector that you have should not be already
[10:33] in the span of v1, v2 and that is where this basis comes in. So, the third vector is not
[10:38] in the span of v1, v2; how do I know that? Because the span of v1, v2 is the same as
[10:42] the span of the previous vectors that we had, because you see this 1, 2, 2 is just v1 and
[10:52] minus 1, 0, 2 and v1, the span, is the same as the span of v1 and v2. So, that is another
[10:59] thing you should check because they are linear combinations of each other.
[11:02] So, we know that v3 or the third basis vector is not in the span of v1, v2 and that is how
[11:09] we are going to use it. So, define v 3 to be 0, 0, 1; minus P v1 of 0, 0, 1; minus P
[11:16] v2 of 0, 0, 1. Now P W of 0, 0, 1 is exactly P v1 of 0, 0, 1 plus P v2 of 0, 0, 1. This
[11:25] is something we saw in the previous video and now you can evaluate this. I will encourage
[11:30] you to do that. It is a little bit of a computation and if you do it correctly, and I hope I have
[11:34] done it correctly then I have got 2 by 9 comma minus 2 by 9 comma 1 by 3. I will encourage
[11:40] you to check that.
[11:42] And the point is, this is an orthogonal basis in orthogonal basis. And I do not even need
[11:51] to check this because of what I did in the previous slide. I mean I gave you a general
[11:58] theory for how to do this. So, this is an orthogonal basis. Now if you have not understood
[12:04] why it is an orthogonal basis, I will encourage you again to check that this is an orthogonal
[12:08] basis. So, check that v1, v2 is v1, v3 is v2, v3 is 0. If you have not completely followed
[12:25] what I said in the previous slide.
[12:26] So, in that case you will get that v1, v2 v3 is an orthogonal basis and now you divide
[12:31] each vector by its norm. I will encourage you to check what is the norm and then if
[12:37] you do that you get the orthonormal basis 1 third, 2 third, 2 third; minus 2 third,
[12:42] minus 1 third, 2 third and 2 third, minus 2 third, 1 third. You may remember this basis
[12:48] from a previous video.
[12:49] So, now let us do the Gram-Schmidt process. The intuition we have seen already, you start
[12:56] with a basis and then you keep modifying the vectors in that basis. So, as to get an orthogonal
[13:02] basis and further you will be dividing by the norm. So, as to make it orthonormal. Now
[13:11] the Gram-Schmidt process kind of takes this orthogonal basis and divide by the norm in
[13:16] one shot meaning it does not wait till the end to divide. It starts dividing right from
[13:22] the start. The reason being it helps for efficiency, computational efficiency.
[13:29] So, let us start with the basis x1, x2, xn and define the orthogonal basis v1, v2, vn
[13:38] and the corresponding orthonormal basis w1, 2, w n as follows. So, we v1 is x1, w 1 is
[13:46] v1 by norm of v1. This is what we saw in the previous example. v2 is x2 minus x2 comma
[13:53] w 1 inner product, times w1. So now why did not I, in the previous slides, in previous
[14:01] example I took v2, x2 minus x2 comma v1,inner product and then divided by norm of v1 comma
[14:12] v1 into v1.
[14:13] So, the thing is if you already convert your basis vectors into the orthonormal form then
[14:21] you need not divide by their norm because you know that the norm is 1, and this is what
[14:25] I meant by saying that there is some computational efficiency. So, you do not have to keep dividing
[14:30] by its norm. And then w 2 is v2 by norm of v2, so you have, v1 and v2 is an orthogonal
[14:38] basis with span the same as x1, x2 and w1 and w2 is orthonormal basis which, I should
[14:45] be careful, it is not a basis, so I take back the word basis.
[14:51] These are linearly independent vectors, but which are orthogonal and w1 and w2 are orthonormal
[14:58] vectors. So, they are automatically linearly independent. So, we will keep going. What
[15:05] is the general term? So, the i th term will be given there, suppose you have reached i
[15:09] minus 1 at stage, if you have vi minus 1 and wi minus 1, all the vectors are still there.
[15:15] So, vi is xi minus inner product of xi comma w1 times w1 minus inner product of xi comma
[15:22] 2 times w2 minus all the way up to inner product of xi comma wi minus 1 times wi minus 1, and
[15:29] then wi is you normalize this vector.
[15:32] Which means if you take vi and divide by its norm, and you keep going till the end and
[15:39] in vn you have all the previous vectors defined till n minus 1 and then vn is xn minus inner
[15:47] product xn comma w 1 times w 1 minus inner product xn comma w 2 times w 2, all the way
[15:53] up to inner product xn comma w n minus 1 times w n minus 1, and then w n is vn by norm of
[16:01] vn.
[16:02] So, now the main point here is that if you take this basis w 1, w2, wn it is an orthonormal
[16:11] basis. v1, v2, vn is an orthogonal basis and the reason this works, this is the main point,
[16:18] is that span of the set x1, x2, xi minus 1 is equal to the span of the set v1, v2, vi
[16:33] minus 1 and which is again equal to the span of the set, w1, w2, wi minus 1. And because
[16:46] these spans are the same we know that x i does not belong to this span and we can carry
[16:52] on.
[16:54] So, the main take-homes in this, maybe before I come here I will point out also that this
[17:10] part here  is exactly equal to P span of w1 through wi
[17:26] minus 1 of xi. This is the projection of xi, on to the subspace, spanned by w1, w2, wi
[17:38] minus 1, and this comment appear, tells you that this is as a result the same as the projection
[17:43] of xi on the span of x1, x2, xi minus 1. So, really this entire thing is about projecting
[17:54] carefully and as we know projections give you things which are orthogonal. This was
[17:59] the main point of the previous projection's video.
[18:03] So, with that brief comment I will go to the next and final slide which is what the main
[18:10] take-homes of this entire video. So, the main take-homes are that if you take any finite-dimensional
[18:15] vector space with an inner product, so in other words a finite-dimensional inner product
[18:20] space, then it has an orthonormal basis, this was not something obvious from the previous
[18:26] videos that you can always get an orthonormal basis, but now not only can we get an orthonormal
[18:35] basis we in fact have an explicit process. So, any basis can be changed to an orthonormal
[18:41] basis using the Gram-Schmidt process.
[18:43] So, how do you get an orthonormal basis? You start with any basis, so the assumption here
[18:48] is that you can get a basis and indeed we have seen in previous videos how to get a
[18:53] basis and, when I say previous videos, this is a few, maybe a week or so back or even
[19:01] before that and then now once you get a basis you can change it to orthonormal basis by
[19:07] using this Gram-Schmidt process.
[19:10] So, the idea often is that when you have a, I mean when you are doing, using this kind
[19:16] of mathematics, typically you happen to know a basis, yeah, you will somehow be able to
[19:23] construct some basis and then it is some algorithm, namely the Gram-Schmidt process, that will
[19:31] allow you to actually get an orthonormal basis, and once you get an orthonormal basis expressing
[19:37] any vector in terms of this orthogonal basis becomes very easy. That is what you have seen
[19:42] in the previous videos. So, with this I guess I will end this video. Thank you.