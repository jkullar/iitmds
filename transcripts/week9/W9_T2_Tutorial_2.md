# W9_T2: Tutorial 2

**Week:** Week 9
**YouTube URL:** https://www.youtube.com/watch?v=al01RaBUkIo

---

## Transcript

[00:15] Hello everyone, so in this video we will use Gram Schmidt method to transform our basis
[00:20] to an orthogonal basis, corresponding to that.
[00:22] So, first let us recall the Gram Schmidt method first.
[00:27] So, we will start with a set of given vectors which are linearly independent.
[00:32] So, let the vector v called as v1, v2 to vn.
[00:37] Now this is, these are linearly independent set of vectors.
[00:42] Now we want to make it, we want to transform it to the set of vectors which are orthogonal
[00:49] to each other, I mean which are pairwise orthogonal to each other or mutually orthogonal to each
[00:54] other, and further we want to transform it with orthonormal.
[00:57] So, we have to divide all those vector with their norm.
[01:01] So, we want to make orthonormal set of vectors u1, u2 to un, such that the span of both these
[01:10] set will be same.
[01:12] So, such that the span of this v1 to vn is same as span of u1 to un, and what are the
[01:24] more properties we have here?
[01:26] So, ui, uj, the inner product of ui, uj is 0, whatever the inner product we are considering.
[01:31] So, in general, in practice we are considering dot product as the inner product so ui, uj
[01:39] is 0, and moreover the norm of each vector, norm of its ui is 1.
[01:44] So, this will be an orthonormal set of vectors; orthonormal vectors.
[01:50] So, what we do here, so for the first vector we consider w1, the new vector and the first
[02:04] vector is remains same, so we consider w1 to be our v1.
[02:09] Now we will have to make it orthonormal so our u1 should be w1 by norm of w1.
[02:14] So, we basically normalize this vector.
[02:16] So, the norm of u1 is 1.
[02:20] Now for the second vector w2 we do, we take v2 and subtract the inner product of v2 and
[02:28] u1 and we multiply it with u1 and subtract this from it so this is our second vector.
[02:37] Now if we calculate w2, u1 what we will get?
[02:44] So, we will get v2, u1, minus v2, u1 into u1, u1. now the norm of u1 is 1, we know so
[03:00] this inner product we v1 and u1 is 1.
[03:03] So, we get v2, u1, minus v2, u1, and that is 0.
[03:10] So, we get a vector which is orthogonal to u1.
[03:17] Now we have to make it normalized, so our new u2 is w2 by norm of w2, so this will normalize
[03:25] the vector.
[03:26] Now for u3 what we have to do, for u3 we have to take v3 and we have to subtract this v3,
[03:35] u1 into u1 minus v3, u2 into u2 and so on.
[03:41] So, for each step we have to do the same process.
[03:45] So, we will be using the vectors so which we already get and we will have to use those
[03:56] vectors to calculate the new vector.
[03:57] So, our u3 will be w3 by norm of w3.
[03:58] So, this is the procedure.
[04:01] Now let us take a set of linearly developed vector and try to calculate the corresponding
[04:07] orthonormal vectors, orthonormal set of vectors.
[04:10] So, at first I am considering the set 5 comma 5 comma 5 and 0 comma 5 comma 5, so these
[04:22] are my set of linearly independent vector so this is my v1 and this is my v2 and I want
[04:30] to find u1 and u2 such that they are orthogonal to each other and more over they are orthonormal.
[04:37] So, for the first vector w1 is same as v1, so it is 5 comma 5 comma 5 and u1 is w1 by
[04:44] norm of w1.
[04:46] Now norm of w 1 is basically square root of w1 and w1 the inner product of w.
[04:57] So, this is our norm of w 1.
[05:00] So, if you calculate this, if you take this inner product and we are considering it as
[05:05] your dot product, so our norm of w1 nothing but square root of 75.
[05:12] So, this is 5 root 3, as it is 25 into 3, so it is 5 root 3.
[05:19] So, if I want to calculate u1 this is 5 comma 5 comma 5 by 5 root 3 so I get 1 by root 3
[05:29] into 1, 1, 1.
[05:30] So, basically it is 1 by root 3, 1 by root 3 and 1 by root 3; I can take this 1 by root
[05:38] 3 out and I can write this as 1 by root 3 into 1, 1, 1.
[05:42] Now we have to calculate the second vector, so second vector is w2, so this is v2 minus
[05:48] v2 comma u1 into u1.
[05:52] So, if you calculate it, so our v2 is 0 comma 5 comma 5 and I have to calculate the inner
[06:01] product of 0 comma 5 comma 5, with 1 by root 3; 1, 1, 1 and this is again 1 by root 3;
[06:13] 1, 1, 1.
[06:14] So, if you do the calculation you will get minus 10 by 3, 5 by 3 and 5 by 3.
[06:26] So, this is our new vector w2 and you can check that this w2 is basically orthogonal
[06:33] to u1.
[06:34] Now we have to normalize it, we have to calculate the norm of w2 and divide w2 with it.
[06:42] So, we have to calculate the norm of w2 first, so norm of w2, if I calculate it I will get
[06:51] this 100 by 9 plus 25 by 9 plus 25 by 9.
[06:55] So if we calculate it we will get root 150 by 9 so it will give me 5 by 3 root 6 and
[07:08] so the new vector u2 is nothing but w2 by norm of w2.
[07:14] Now w2 is, we have already calculated w2 and norm of it, so if we do this calculation we
[07:22] will get 3 by 5 root 6 into minus 10 by 3, 5 by 3 and 5 by 3.
[07:31] So, you can take 5 by 3 out and it will cancel up.
[07:37] So, we will get 1 by root 6 minus 2, 1 and 1.
[07:42] So, our set of vectors, our u1 is 1 by root 3; 1, 1, 1 and our u2 is 1 by root 6; minus
[07:57] 2, 1, 1.
[07:58] Now if we calculate this u1, u2, you will get 0 and if you calculate the norm of both
[08:04] the vectors you will get the norm is 1.
[08:08] So, we really get a orthonormal set of vectors corresponding our v1, v2 from which we have
[08:18] started.
[08:19] So, this is the method which is called the Gram Schmidt method and by this algorithm
[08:24] we can transform any given set of linearly independent set, independent vectors, we can
[08:27] transfer into an orthonormal set of vectors.
[08:29] Now let us try to see this in Geo Gebra.
[08:34] So, we have started we a vector 5 comma 5 comma 5 and 0 comma 5 comma 5.
[08:42] So, these are two vectors as we can see here.
[08:46] Now what we have done at first, so we have normalized the first vector so it will give
[08:54] me a unit vector, so you can see the unit vector here.
[08:59] So, if we zoom this is your unit vector along the first vector.
[09:03] So, let us zoom out again.
[09:05] Now we have to find a vector which is orthogonal to this unit vector or rather the first vector.
[09:11] So, we get this orthogonal vector, so this is the orthogonal vector we have calculated.
[09:17] Now what we have to do, we have to normalize this vector so again we will normalize this
[09:22] vector and we will get a unit vector along that direction.
[09:26] So, if we again zoom in you can see there is a vector.
[09:30] Now these two vectors, these two normal vectors, normalized vectors are basically orthogonal
[09:36] to each other.
[09:38] So, if you see the plain passing through these vectors, so this is the plain passing through
[09:44] these vectors so span of all these vectors are basically the same plain, so this is the
[09:50] vector space generated by all these vectors.
[09:54] So, the Gram Schmidt method, by Gram Schmidt method we basically found a new set of vectors
[09:57] which are orthonormal to each other, but the spanning set remains the same.
[10:01] So, for the new orthonormal set of vectors here, so if we only see those vectors only,
[10:09] so we can see that if we delete all these other vectors so these two are the orthonormal
[10:20] set of vectors, which you get and this is the spanning set which is the same as the
[10:26] original one.
[10:27] Thank you.