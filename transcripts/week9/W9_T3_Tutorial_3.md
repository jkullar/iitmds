# W9_T3: Tutorial 3

**Week:** Week 9
**YouTube URL:** https://www.youtube.com/watch?v=vlZIhKlM6bc

---

## Transcript

[00:15] Hello everyone, so in this video we will take another example.
[00:18] So, here the example is written, we have three vectors, v1, v2 and v3, and you can see that
[00:24] these are linearly independent vector of R3, so this forms the basis.
[00:27] Now we will try to convert this basis into an orthogonal basis, rather I can say it is
[00:34] into an orthonormal basis using Gram Schmidt method.
[00:37] So, what we do first, so the first, by the algorithm what we see, the w1, the first vector
[00:44] will remain unchanged, so as we have to make it orthonormal, so we will find the norm of
[00:50] the first vector and divide it with them.
[00:53] So, our new vector u1, the first vector should be v1 by norm of v1.
[01:01] So, it is 1, 0, 0 by norm of it.
[01:06] So, norm of it means it is the square root of, inner product of u and v, u1 and v1.
[01:13] So, if we see the dot product of u1 and v1 and here the inner product is actually dot
[01:17] product we are considering.
[01:18] So, here the norm of first vector is 1.
[01:21] If we can calculate you can see it is nothing but 1.
[01:25] So, our first vector is basically the same.
[01:28] So, our u1 is 1, 0, 0.
[01:31] Now we have to calculate the second one w2.
[01:33] Now for the w2, what we have to do, we have to take v2 and subtract that v2, the inner
[01:41] product of v2 and u1, so we have to take the inner product and multiply it with u1 and
[01:49] we have to subtract this term, subtract this vector from v2.
[01:54] So, it will give us a new vector which is orthogonal to u1 and then we have to normalize
[02:00] it.
[02:01] Basically then we have to divide it with the norm.
[02:07] So, at first do it, do this step, so v2 is 1 comma 1 comma 0 and, so if I take this inner
[02:14] product it is 1 comma 1 comma 0, and 1 comma 0 comma 0 and our u1 is 1 comma 0 comma 0.
[02:24] So, we calculate it, it is, the inner product is nothing but 1.
[02:29] So, 1 into 1 comma 0 comma 0, so this will give us, so the first coordinate will be 0,
[02:35] the second coordinate will be 1 and the third one is 0.
[02:40] So, it is giving us w2 which is 0, 1, 0.
[02:46] Now what is the w2, what is the word u2?
[02:50] u2 is w2 divided by its norm.
[02:53] So, the norm of w2 as you can see this is the standard basis vector 0, 1, 0, so this
[03:03] is 0, 1, 0 and norm if 1 here.
[03:07] So, our new second vector is nothing but 0, 1, 0.
[03:11] So, you can check that u1 and u2 are orthogonal to each other and both u1 and u2 are orthonormal
[03:19] also, because their norm is 1.
[03:22] So, let us calculate the third one.
[03:27] So, for the third one, similarly we have to take w3, w3 is v3 minus v3 inner product with
[03:38] u1 and multiply it with u1 then you have to subtract v3 inner product it with u2 and multiply
[03:50] it with u2.
[03:51] So, our v3 was 1, 1, 1, and if we take this inner product this is 1, 1, 1 and our u1 is
[04:02] 1, 0, 0.
[04:03] So, I write down the u1 here and now again our v3 is 1, 1, 1, our u2 is the vector we
[04:18] got that is 0, 1, 0.
[04:21] So, I am writing that down 0, 1, 0.
[04:26] So, if we calculate this we get 1, 1, 1 so the first inner product if you calculate the
[04:34] dot product of it you will get 1, so this 1 into 1, 0, 0, second inner product is also
[04:42] 1, this is 1 into 0, 1, 0, so the, if we subtract this from 1, 1, 1 the first two coordinate
[04:50] will be 0 and the third one is 1.
[04:54] And now we have to normalize it.
[04:56] So, after normalizing we will get the new vector u3, which is w3 by norm of w3.
[05:04] So, norm of w 3 is 1, so we will get 0, 0, 1 by 1 by 1 and that is nothing but 0, 0,
[05:15] 1.
[05:16] So, our new set of vector here is 1, 0, 0; 0, 1, 0 and 0, 0, 1.
[05:28] So, these are the standard basis which we have got by orthogonalization of that v1 basis.
[05:33] So, this is the standard basis and if you see, if you calculate the inner product of
[05:39] any two you will get 0 and if you calculate the norm of each vector, the norm of each
[05:46] vector is 1.
[05:47] So, it is an orthonormal basis corresponding to the basis which we have started with and
[05:56] we do this Gram Schmidt, we follow this Gram Schmidt method, Gram Schmidt algorithm and
[06:03] will get these set of vectors which forms an orthonormal basis.
[06:06] Thank you.