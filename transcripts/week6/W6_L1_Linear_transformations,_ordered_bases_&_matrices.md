# W6_L1: Linear transformations, ordered bases & matrices

**Week:** Week 6
**YouTube URL:** https://www.youtube.com/watch?v=lVX2mih3mcQ

---

## Transcript

[00:14] Hello, and welcome to the Maths 2 component of the online degree on Data Science.
[00:20] In this video, we are going to talk about linear transformations and their relation
[00:24] with ordered bases and matrices.
[00:26] So, this is continuing on our previous video where we have defined linear transformations.
[00:31] We have already seen the connection, a little bit of connection between bases and matrices
[00:38] with linear transformations and we are going to expand on that in this video.
[00:41] So, let us recall first what we have done so far.
[00:45] We have studied what is a linear transformation.
[00:47] So, a linear transformation was a function between two vector spaces.
[00:50] So, a function f from v to w, let us say, which satisfies linearity.
[00:55] So, linearity is the condition that f of v1 plus cv2 is f of v1 plus c times f of v2.
[01:03] Equivalently, we could write it as two separate conditions f of v1 plus v2 is f of v1 plus
[01:08] f of v2, and f of c times v1 is c times f of v1.
[01:12] And you can use this to say that f of summation civi, summation ci f of vi.
[01:20] In other words, sum comes out and the scalars come out.
[01:26] That is a linear transformation.
[01:28] We have seen what is an isomorphism of vector spaces, namely if you have a linear transformation
[01:34] which is a bijection that is what we called an isomorphism of vector spaces.
[01:40] And finally, we saw in our previous video that a linear transformation is determined
[01:47] by the values it takes on bases vectors.
[01:51] Equivalently or other conversely, if you have a set of values, a set of vectors in the codomain
[01:59] w, and you define a function on the bases given by the f of vi is wi, you can extend
[02:07] this function to a linear transformation fv to w and we explicitly wrote down what, how
[02:15] to extend it.
[02:17] So, extending maps on bases to linear transformations.
[02:21] So, let us continue from this point and study first very important property of finite dimensional
[02:30] vector spaces.
[02:31] So, let V be a vector space with dimension n.
[02:34] Choose a bases v1, v2, vn.
[02:35] And we are going to define a function f from V to Rn, which sends vi to ei.
[02:46] So, how do we do that?
[02:49] Well, we define the map f of vi equals ei.
[02:53] This is only on the basis v1, v2, vn.
[02:55] So, it is a map on the set v1, v2, vn.
[02:58] And then we extend it to a linear transformation, which by abuse of notation, we are going to
[03:05] still call f.
[03:06] And, of course, as a result, it continues to take vi to ei.
[03:11] So, the claim is that v is an iso, sorry f is an isomorphism.
[03:16] Let us check why that is the case.
[03:19] So, first, let us write down what is the function.
[03:25] So, if you have v is summation ci times vi, then f of v is defined as summation ci times
[03:36] ei.
[03:37] And we saw as soon as you do this that from here we obtained that f of vi is equal to
[03:42] ei.
[03:46] Now, why is this a isomorphism?
[03:53] We have seen already that this is the linear transformation given by extension.
[03:56] So, it is a linear transformation.
[03:58] I did not check that in the previous video, but I hope that you have checked it.
[04:03] If not, you should do it right now when you finish this video.
[04:09] So, f of v is summation ciei and f of vi is ei.
[04:15] So, let us check that is an isomorphism.
[04:17] To check that, we have to check it is one-one and onto.
[04:20] So how do we check onto?
[04:22] So, onto, how do we check that?
[04:26] Well, let us take a element of Rn.
[04:30] Let us say, I have x1, x2, xn.
[04:35] Let ci, let v equals summation xivi, so the ci is xi.
[04:39] So, this is in Rn.
[04:47] Then what is f of v?
[04:50] f of v is summation xiei, which is exactly, in terms of, as a column vector, this is the
[04:58] column vector x1, x2, xn.
[05:01] And here, when we say we are going to write it as a row vector f of v is the row vector
[05:07] corresponding to this, so f of v is exactly x1, x2, xn.
[05:12] So, this means it is onto.
[05:14] So, therefore it is onto.
[05:15] I have checked that it is onto.
[05:17] Now, let us check one-one.
[05:19] It is a linear transformation.
[05:20] So, it is enough for me to check that f of v is 0 implies v is 0.
[05:29] But what does it mean to say that f of v is 0?
[05:32] First of all, what is 0 in Rn, it is the origin or the vector 0, 0, 0.
[05:39] So, let us put in the definition of f of v, which is written above.
[05:46] So, f of v is submission ciei, this is 0, 0, 0.
[05:57] But what is this summation ciei?
[05:59] So, v is written as summation civi.
[06:03] These are those, the cis are those coefficients coming out of the unique way of writing v
[06:10] as summation civi, where i of course runs 1 through n.
[06:15] But on the other hand, this is the column vector c1, c2, cn.
[06:21] As we have been consistently doing, I am abusing notation between the rows and columns because
[06:26] there is no matrix multiplication.
[06:27] So, in other words, this is c1, c2, cn, but this is 0, 0, 0.
[06:36] That means each of the cis is 0.
[06:38] But what is that so for all i, that means v is equal to 0 times v1 plus 0 times v2 plus
[06:47] 0 times vn.
[06:48] So, these are all the scalar 0, which evaluates the vector 0 in your vector space v. So, I
[06:55] have proved that it is one-one.
[06:56] That is why it is an isomorphism.
[06:59] So, last video, we did not see any examples of linear transformations which are not linear
[07:09] mappings.
[07:10] All of them were on Rn and Rm and so on.
[07:14] So, this is our first example where we are going to study a linear transformation.
[07:20] So, let us look at the subspace W of R3, which is given by x, y, z, where x plus y plus z
[07:28] is 0.
[07:29] We have checked in a previous video that this is indeed a subspace.
[07:33] This was the null space of something.
[07:35] I will leave that part to you to recall what, where we did this earlier.
[07:40] So, this is a subspace of R3, so which means in its vector space in its own rate, by which
[07:46] we mean that if you take two elements of the form x, y, z such that x plus y plus z is
[07:53] 0, then they add up and you get a new vector which is also satisfying the same relation
[08:01] that x plus y plus z is 0.
[08:04] And if you take a scalar multiple, the same thing happens.
[08:08] So, we had worked out earlier that a basis for this subspace is minus 1, 1, 0 and minus
[08:15] 1, 0, 1.
[08:16] I will, you should check this.
[08:19] So, the homomorphism f obtained by extending f of minus 1, 1, 0 is 1, 0 and f of minus
[08:26] 1, 0, 1, is 0, 1 is an isomorphism.
[08:29] Why is that?
[08:30] That is because if you write any x, y, z in W, it can be uniquely expressed as y times
[08:39] minus 1 comma 1 comma 0 plus z times minus 1 comma 0 comma 1.
[08:44] You might wonder why that is the case, because you get minus y, minus z in the first coordinate,
[08:50] and then y in the second and z in the third coordinate, but minus y minus z is equal to
[08:55] x.
[08:56] Why is that, because x, y, z is in W, that means x plus y plus z is 0 that means x is
[09:01] minus y minus z.
[09:03] So, this is fine.
[09:06] And it is unique because this is a basis.
[09:09] So, then we know how to extend functions, which are defined on the basis to linear transformations.
[09:19] So, you get that f of x, y, z is y times 1 comma 0 plus z times 0 comma 1, which is y
[09:26] comma z.
[09:27] So, this is actually the projection to the YZ plane.
[09:30] This is a projection from w onto the YZ plane.
[09:34] I did not check why it is an isomorphism.
[09:43] But it is clear it is an isomorphism.
[09:45] I will claim because let us see onto, so projection map, it is always going to be onto.
[09:52] So, if you want y comma z in R2 so choose x is minus y minus z and consider x, y, z
[10:15] in W. It does lie in W, because x plus y plus z is W, sorry, 0.
[10:21] So, therefore, f of x, y, z is this y plus z, is y comma z.
[10:28] So you have to choose x, otherwise we do not know x, y, z is in W. So, you have to get
[10:34] something which is in W. So, therefore, it is onto.
[10:38] So, we have checked onto.
[10:39] And one-one is very direct.
[10:42] So, if f of x, y, z is 0, so what is 0 in R2, it is 0 comma 0 and let us put in the
[10:54] value of f of x, y, z it is 0, 0.
[10:59] So, this means y is 0 and z is 0.
[11:02] But that means that x is 0, because x is minus y minus z, because remember that x, y, z belongs
[11:08] to W. So, the statement is f of x, y, z is 0 for x, y, z belongs to W. x is minus y minus
[11:22] z which is 0.
[11:25] So, in other words, x, y, z is 0.
[11:29] By 0, I mean the 0 vector in W. So, we have checked it is an isomorphism.
[11:36] So, I should put a tick mark there.
[11:41] Let us see how to get the matrix form for a linear transformation.
[11:44] So, first, let us do this example.
[11:48] So, we have f of x, y is 2x comma y.
[11:52] And it is clear that this is the same if we fudge between rows and columns again by writing
[12:01] 2, 0, 0, 1 times x comma y, x, y, vector x, y, a column vector x, y.
[12:09] So, you get 2x, y, which we write as a row vector as 2x comma y.
[12:16] What is the significance of the coefficients in this matrix?
[12:20] So, if we consider the standard basis, 1, 0 and 0, 1 for R2 and evaluate the function
[12:25] in terms of the basis, we get f of 1, 0 as 2, 0, but 2, 0 can be written as 2 times,
[12:34] so you write this vector 2 comma 0 as a unique linear combination of the basis vectors.
[12:38] So, it is 2 times 1 comma 0 plus 0 times 0 comma 1.
[12:42] And similarly, f of 0 comma 1 is 0 comma 1 is 0 times 1 comma 0 plus 1 times 0 comma
[12:50] 0.
[12:51] And it is clear this 2, 0, 0, 1 that we are getting here is being obtained, those are
[12:59] the numbers obtained in this matrix.
[13:02] So, we can make this more general.
[13:05] So, let f V to W be a linear transformation.
[13:09] Suppose we have ordered basis for V and W. So, v1, v2, vn which we are calling beta is
[13:17] an ordered basis for V.
[13:18] So, what do we mean by order basis?
[13:21] We mean that v1 is indeed the first vector, v2 is indeed the second vector.
[13:25] So, I want to distinguish between the basis 1, 0, 0, 1 and 0, 1, 1, 0.
[13:33] This is a standard basis.
[13:35] I mean, both of these can be thought of as a standard, but this is, so this is the ordered
[13:43] standard basis and this is not the ordered standard basis.
[13:48] So, this is the different ordering for the standard basis.
[13:51] So, ordered basis they are different.
[13:54] So, suppose both of these have ordered this is given to us.
[14:02] And so, we can write f of vi as a unique linear combination with the wjs.
[14:07] So, you write f of v1 as a11w1 plus a21w2 plus am1wm, f of v2 is a12w1 plus a22w2 plus
[14:19] am2wm and so on, f of vn is a1nw1 plus a2nw2 plus amnwm.
[14:29] Then, so notice I am not, I mean, these aijs are written in a particular way.
[14:37] This is more like aji.
[14:41] Then the matrix corresponding to this linear transformation with respect to these basis,
[14:47] these ordered basis beta and gamma which were v1, v2, vn and w1, w2, wm respectively is
[14:54] given by a11, a12, a1n, a21, a22, a2n, am1, am2, amn.
[15:02] I want to point out that the column here, a11, a21, am1 were the coefficients occurring
[15:11] in the linear combination which express the vector f v1.
[15:20] The coefficients in the second, the entries in the second vector, the second column are
[15:26] what occurred in the second linear combination for f of v2 and so on.
[15:31] The entries in the nth column are what occurred in the expression for the, for f of vn.
[15:40] So, keep that in mind.
[15:43] So, just as an example, if you have Vs, Ws, R2 and beta, gamma is 1, 0, 1, 0.
[15:50] So, it is not the ordered standard basis, this one.
[15:54] And let us say f of x, y is 2x comma y.
[15:56] Let us work out what that means.
[15:59] So, you take f of 1, 0, that is 2 comma 0, and you express that in terms of your basis.
[16:05] So, as in terms of our basis, this is 2 times 1 comma 0 plus 0 times 1 comma 1, and you
[16:11] take f of 1, 1, that is 2 comma 1.
[16:13] So, you express it in terms of our ordered basis.
[16:16] So, this is 1 times 1 comma 0 plus 1 times 1 comma 1.
[16:21] Then the corresponding matrix is the 2 goes here, the 0 goes here.
[16:30] So, it is in that the first column.
[16:34] And then this 1 goes here, and then this 1 goes here.
[16:39] So, that is what this corresponding matrix is.
[16:42] So, can we recover the linear transformation, indeed we can and that is what we are going
[16:49] to study now.
[16:50] Suppose, A is an m by n matrix, what is the corresponding linear transformation.
[16:54] So, let v be in V.
[16:56] We express v in terms of the vjs.
[16:58] So, express v as summation cjvj.
[17:02] Define f of v to be summation cj, Aij times wi.
[17:11] So, here notice that this is slightly different from what we have done before.
[17:17] In our previous thing what we did was, we did, we specify specified values for f of
[17:27] v1, f of v2, f of vn and then we said you can extend this to a linear transformation.
[17:33] Now, the a priori have not specified what are the values of v1, v2, vn, meaning what
[17:43] does f evaluated on v1, v2, vn, instead we have specified ordered basis w1, w2, wm and
[17:51] we have specified a matrix A. So, now, what we are going to see is f of v is whatever
[17:59] expression we have here, summation cj times summation Aijwi.
[18:04] So, you have to check again this is a linear transformation, not hard.
[18:08] You can write this in terms of in a matrix form and that will maybe simplify things.
[18:15] But let us evaluate what is f of vk.
[18:18] So, what is f of vk?
[18:21] So, f of vk can be obtained by putting cj to be 1 for j is equal to k and cj to be 0
[18:29] when j is not equal to k.
[18:31] And in that case, we get f of vk is everything disappears in the sum except ck which is 1.
[18:40] So, we put j is equal to k.
[18:42] So, you get a Aik, summation Aikw1, which is A1kw1 plus A2kw2 plus Amkwm.
[18:52] So, it is this vector which is f of vk.
[18:56] So, now, we could equivalently have said that we specify the vectors A1kw1 plus A2kw2 plus
[19:11] Amkwm similarly for the, as the kth vector.
[19:17] So, we have a set of n vectors like this as k varies and these are the n vectors which
[19:26] are the images of vis.
[19:31] And now we can say the rest is given by extending this f to a linear transformation.
[19:39] That is what we are saying really.
[19:42] And how do we identify these vectors?
[19:45] Well, this is exactly what the entries in the kth column.
[19:51] So, these are the entries in the kth column.
[19:56] So, the matrix corresponding to f is indeed A, because remember how we get that matrix.
[20:01] To get that matrix, we take the basis v1, v2, vn, we write f of vi or vj in terms of
[20:12] the linear combination of wis.
[20:14] So, here this is exactly the coefficients and those coefficients are exactly what is
[20:19] going to go into the kth column.
[20:20] So, that is exactly what A is.
[20:24] So, the matrix corresponding to f is indeed A.
[20:27] So, what have we done here?
[20:31] We saw that for a linear transformation and ordered basis we can get a matrix A that was
[20:40] previously in this side.
[20:42] On this slide, we are saying that suppose we have the ordered basis and matrix A, can
[20:48] we get a linear transformation so that this is the corresponding matrix and indeed we
[20:52] can and this is how we do it.
[20:56] So, the point is this is actually setting up on a bijection between linear transformations
[21:01] and matrices.
[21:02] So, if beta and gamma are ordered basis for vector spaces V and W and n is the dimension
[21:09] of V and m is the dimension of W there is a bijection linear transformations from V
[21:14] to W to m by n matrices of course, over R. How do we get this?
[21:25] So, if I have a linear transformation, I know how to get a matrix A, because beta and gamma
[21:32] are specified.
[21:33] So, once I know this, I know how to get A. This was by writing f of vj as summation aijwi.
[21:56] This was, so the A was the matrices, sorry, the matrix A is the ijth entry is this aij.
[22:05] I have to apologize because I have messed up my notations here.
[22:11] This is  f of vj is summation over i and not over j.
[22:24] So, j is fixed, summation aijwi.
[22:29] So, this is what these coefficients are exactly what go into the jth column.
[22:35] That is how you get your matrix A.
[22:40] On the other side, if you have a matrix A, how do I get my f?
[22:43] That is exactly what we saw on the previous slide.
[22:46] By looking at, so we define f of vj to be summation Aijwi, this time I should put a
[22:59] capital here, Aijwi.
[23:01] What is this capital Aiji?
[23:03] This is exactly the ijth entry of this matrix.
[23:06] And then extend to a linear transformation.
[23:12] That is what we saw earlier that we can do that.
[23:14] So, it is clear that if you start with A, produce f, and then ask what is the corresponding
[23:23] matrix you get back A, that is what we saw on the previous slide.
[23:26] And if you notice, if you see how we have done this, if you start with f and get your
[23:32] matrix and then get the corresponding linear transformation, then you will clearly get
[23:36] back f.
[23:37] So, I will leave that to check to you that this is indeed a bijection.
[23:42] This is the correspondence.
[23:43] So, let us do an example not of the correspondence, but of getting the matrix and so on.
[23:55] So, let W be x, y, z such that x plus y plus z is 0, we have seen this before, and V is
[24:00] R2.
[24:01] Let beta be the basis that we saw, the same ordered basis that we saw before and gamma
[24:05] be the standard basis by which we mean the ordered standard basis.
[24:09] So, we had an isomorphism, which was f minus 1 comma 1 comma 0 was 1, 0 and f of minus
[24:15] 1 comma 0 comma 1 was 0, 1.
[24:16] So, this is a projection to the YZ plane.
[24:19] So, the matrix corresponding to this linear transformation f with respect to the ordered
[24:25] basis beta and gamma is just 1, 0, 0, 1, the identity matrix.
[24:30] Why is that?
[24:31] How do we get the matrix?
[24:32] You look at f evaluated on the basis vectors and then write that in terms of the basis
[24:38] vectors for the range, space.
[24:42] So, in this case, f of minus 1 comma 1 comma 0 is 1 times 1 comma 0 plus 0 times 0 comma
[24:51] 1, and similarly, minus 1 comma 0 comma 1 is 0 times 1 comma 0 plus 1 times 0 comma
[24:59] 1 and that is how you get your identity matrix.
[25:04] But now suppose we change our basis.
[25:06] So, instead of taking the standard ordered basis, we take the basis 1, 0, and 1, 1, 1
[25:13] gamma.
[25:14] So, we have the, remember, we have the same linear transformation, but we are changing
[25:17] our ordered this.
[25:19] Let us see what happens.
[25:21] So, now if we write f of minus 1 comma 1 comma 0 in terms of the basis, ordered basis gamma,
[25:27] we get, so remember that this is 1 comma 0, that is 1 times 1 comma 0 plus 0 times 1 comma
[25:34] 1.
[25:35] So, no change in the coefficients that were coming in the first equation earlier.
[25:40] But for the second one, we have f of minus 1 comma 0 comma 1 is 0 comma 1 projection
[25:45] to the YZ plane and 0 comma 1 now can be written as minus 1 times 1 comma 0 plus 1 times 1
[25:53] comma 1.
[25:54] So, what is the corresponding matrix?
[25:56] The corresponding matrix is you put these coefficients in the first equation as the
[26:00] first column, so this is not correct what I have written here, in the first column,
[26:06] so this is 1 and then this is wrong and what should have been there is 0 and then again,
[26:18] here, this should have been the minus 1 and the 1.
[26:25] But the main point here is in the previous slide we saw that we got the identity matrix
[26:29] with respect to the ordered basis beta and a different basis gamma, the standard ordered
[26:36] basis, whereas here we get a different matrix when we change the basis.
[26:40] So, your basis, what basis you choose is very important.
[26:44] So, it will not happen that you will change basis and get the same matrix.
[26:49] With different ordered basis you will get different matrices.
[26:53] But if you keep your basis constant, then there is a bijection between linear transformations
[27:01] and matrices.
[27:02] So, you will get the same matrix in particular.
[27:07] So, the important part here is that you will get, is that changing ordered basis gives
[27:18] you different matrices corresponding to the same linear transformation.
[27:21] So, it is a good question to ask, if you did a linear transformation what is a possible
[27:27] set of matrices that you can get and this is something interesting and we will be looking
[27:34] into that in a video later on.
[27:36] Thank you.