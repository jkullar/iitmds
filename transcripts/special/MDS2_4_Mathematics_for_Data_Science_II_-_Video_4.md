# MDS2_4: Mathematics for Data Science II - Video 4

**Week:** Mathematics for Data Science II (Special Videos)
**YouTube URL:** https://www.youtube.com/watch?v=qcT49XqFzXo

---

## Transcript

[00:14] Hello everyone, so in this video, we will try to find out the directional derivative
[00:16] of this function f x, y, z, so, this is a function of 3 variable, and it is a scalar
[00:21] value function along this vector minus 1 comma 0 comma 1. So, let us recall the definition
[00:27] of directional derivative. Suppose, we have a function of n variables, scalar valued function
[00:35] of n variables, f x1, x2, xn and we have to calculate the directional derivative along
[00:45] some vector V, which is given as a1, a2, an.
[00:48] Now, if V is not an unit vector what we have to do, we have to normalize it first. So,
[00:54] we have to do this calculation v by norm of v, which you can do so that the norm of this
[01:00] vector will become 1. Now, for make the computation easier here, so, we are assuming that one
[01:06] of the vector which we have started with is actually a unit vector.
[01:11] So, let us assume that this V is unit vector, so what we have to do to calculate the directional
[01:19] derivative, we have to see the increment of this function along this vector. So, basically,
[01:27] we have to take, x1 plus ha1, comma x2 plus ha2 and so on. Basically, we are adding this
[01:35] x1 to xn plus h of v, we are finding this functional value at that point.
[01:43] So, this is xn plus han and to find the integration, we have to subtract the function of value
[01:51] at x1 to xn, and then we have to divide it with h and we have to calculate the limit
[02:00] of this function as h tending to 0. So, this is the definition of directional derivative
[02:07] along this vector. So, here in the given examples, so, if I try to solve this problem, so, our
[02:15] V is given as minus 1 comma 0 comma 1, so, let us normalize it first.
[02:17] So, we have to do this thing first, give a norm of v, so v is minus 1, 0, 1 and norm
[02:27] it is basically 1 plus 1 and root over of that, so it is root 2. So, the normalized
[02:38] vector, the unit vector along this direction is 1 by root 2 into minus 1, 0, 1. So, this
[02:46] is our unit vector. Now, what we have to do, we have to apply this definition.
[02:52] So, let us apply this definition. So, our f x, y is given as x square y plus y square
[03:00] z. And the unit vector which we got here is 1 by root 2 minus 1, 0, 1. So, now, we apply
[03:14] the definition here, so, we have to calculate limit h tending to 0, f of x minus h by root
[03:23] 2. So, because I have to multiply h with this and then add this.
[03:27] So, the first coordinate will be x minus h by root 2, the second coordinate will be y,
[03:31] because in the second coordinate of the vector there is 0. And in the third coordinate there
[03:36] is z plus h by root 2. And I have to subtract f x, y, z and divide it with h. So, I have
[03:45] to calculate this function and basically, I have to calculate this limit.
[03:54] So, you start to calculate this limit. So, for the first function, what I get it is x
[04:03] minus h by root 2 whole square into y plus y square into z, so z is here z plus h by
[04:13] root 2. So, yeah. And what was f x, y, z that is our given function x square y minus y square
[04:28] z; x square y plus y square z, here is a minus sign outside. So, I am getting minus x square
[04:41] y minus y square z and I have to divide it with h.
[04:44] So, if we break this up, we get h tending to 0. This is x square y minus 2xyh by root
[04:51] 2 plus h square y by 2 plus y square z plus y square h by root 2 minus x square y minus
[05:06] y square z. And there is h in the denominator. So, if we see this x square y and this is
[05:17] minus x square y get cancels, cancel up, and this y square z and minus y square z will
[05:23] cancel out.
[05:24] So, the remaining term if we write it is nothing, but limit h tending to 0. So, the first term
[05:30] this h and h will cancel up. So, I am getting minus 2xy by root 2 plus h y by 2 and plus
[05:43] y square by root 2, again in this term h got cancel. So, there is only one term for h is
[05:53] there and as h tending to 0, this term will go to 0, and the remaining terms are independent
[05:58] of h. So, those will remain as it is, so what I get, I get minus 2xy by root 2 plus y square
[06:08] by root 2. So, this is the directional derivative, along the vector which we want to calculate.
[06:18] Now, there is another theorem which is saying that, if we calculate the grad of this f,
[06:28] and if we take the dot product with the unit vector along which direction, we want to calculate
[06:31] the directional derivative, then also we will get the same results. So, grad of f means
[06:36] we have to calculate fx, fy and fz, basically, this vector responses of the partial derivative
[06:42] along each axis, and here are unit vector, which you have already calculated, this is
[06:49] 1 by root 2 into minus 1, 0, 1.
[06:52] So, if we calculate the partial derivative, so, recall what was our function, our function
[06:55] was x square y plus y square z. So, what was our fx, fx is 2xy. What was our fy? fy is
[07:06] x square plus 2yz and what was fz, fz is y square. So, if I write this down here, 2xy,
[07:17] x square plus yz plus 2yz and y square, if I take dot product with 1 by root 2, this
[07:31] is minus 1 by root 2 0 1 by root 2, I am taking 1 by root 2 inside the bracket.
[07:41] So, if I calculate it, I will get minus 2xy by root 2 plus y square by the middle term
[07:47] will be contribute 0, 0 in the second coordinate, so y square by root 2. So, it is exactly the
[07:53] same thing what we have calculated above. Exactly the same thing what we have calculated
[08:01] here. So, here definitely, we can calculate the directional derivative using this method
[08:09] and also we can verify that when in we are using the definition we are getting the same
[08:17] directional derivative. Thank you.