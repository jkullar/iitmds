# W5_L5: What is a linear transformation

**Week:** Week 5
**YouTube URL:** https://www.youtube.com/watch?v=6jA-RRGbmOw

---

## Transcript

[00:14] Transcriber's Name: Crescendo Transcriptions Pvt Ltd
[00:15] Mathematics of Data Science 2 Professor Sarang Sane
[00:16] Department of Mathematics, Indian Institute of Technology, Madras
[00:17] What is a linear transformation
[00:18] Hello, and welcome to the Maths 2 component of the online degree on Data Science. In this
[00:22] video, we are going to study what is a linear transformation.
[00:24] So, let us just recall before we go ahead, what is a linear mapping, this is what we
[00:30] studied in the previous video. A linear mapping f from Rn to Rm, so it is a function, and
[00:38] the function has a very particular form. Namely, the form is that every coordinate is given
[00:47] by a linear combination. This is the form of the function, and linear combination with
[00:53] what coefficients, the coefficients are real numbers.
[00:55] So, we studied this to some extent in the previous video, and we saw the use of such
[01:05] a thing. For example, we looked at the examples of the grocery shops. And we noticed that
[01:15] linear mappings have some very interesting properties called linearity. So further, we
[01:22] can write this in the form of matrix multiplication, A times x, where the ijth entry of the matrix
[01:32] A is little aij and X is the column with X1, X2, Xn, and linear mapping satisfy linearity,
[01:43] which means if you have f of X1 plus Cy1, f of X2 plus Cy2 and so on and Xn plus Cyn
[01:49] that is f of X1, X2, Xn plus C times f of Y1, Y2, Yn.
[01:56] So, let us define what is a linear transformation. So, a linear transformation is basically whatever
[02:01] we want the same properties that we had in the previous slide, but for arbitrary vector
[02:09] spaces, instead of for Rn and RM we look at vector spaces V and W. So, we say, a function
[02:16] f from V to W is a linear transformation, if for any two vectors, v1 and v2 in the vector
[02:25] space V, and for any c in R so that is a scalar the following conditions hold, f of V1 plus
[02:33] V2 is f of V1 plus f of V2, and f of C times V1 one is equal to C times f of V1.
[02:42] So before going ahead, maybe, I will point out that this is the same as linearity. So,
[02:46] this is equivalent to linearity as in the previous slide, which we said that f of V1
[03:01] plus C times V2 is f of V1 plus C times f of V2. Why is that? Suppose we assume it has
[03:11] linearity, then, of course, both of these are clear, because we can put C equals 1 and
[03:18] that will give us the first condition.
[03:20] So, by putting c equals one, we get this. By taking V1 to be zero and calling V2 as
[03:27] V1, we get the second 1. So, if we know linearity is true, then we get both these that both
[03:34] these conditions hold. Conversely, if we know both of the conditions hold, then if we have
[03:39] V1 plus CV2, so I do not know linearity a priory, but I know that these two conditions
[03:43] hold.
[03:44] So, I can treat CV2 as a vector, and use the first condition to write this as a f of V1
[03:51] plus f of C times V2. We use the first equation with CV2 in place of this V2 and V1 in place
[04:01] of the V1. And then we use the second equation, the second condition for writing the second
[04:14] term here, f of CV2 as C times f of V2, and that is what we want for linearity. So, this
[04:22] is equivalent to linearity. So, you could either express it this way or you could express
[04:27] it in terms of the way we have written it, which is we have written it earlier that is,
[04:31] which is f of V1 plus CV2 is f of V1 plus C times f of V2.
[04:36] Let us look at some examples. So, here are some examples. So, these are all going to
[04:43] be examples of linear mapping. So, in particular, they are linear transformations. So, I should
[04:50] have pointed out before that linear mappings are linear transformations because linear
[04:56] mapping satisfy linearity.
[04:58] So maybe I should write here. So, linear mappings are linear transformations as we have defined
[05:09] above. So, linear mappings mean when we have V and W, as some Rn and Rm respectively and
[05:18] then the function f is given by a bunch of a collection of linear combinations. We have
[05:26] seen already that in that case that satisfy linearity, and we have checked linearity is
[05:30] the same as these two conditions.
[05:31] So, all these examples are going to be examples of linear mapping. So, in particular, they
[05:35] are linear transformations. So, f of x, y is 2x comma y, f of x, y is 2x comma 0, f
[05:42] of x, y, z which is from R3 to R3 is x by 2, 3 y comma 5z. R3 to R4 this time, so f
[05:53] of x, y, z is 4y minus z, 3y plus 11 by 19z, 5x minus 2z, 23y, and then maybe R to R3,
[06:06] three which is f of t is t comma 3, t comma 23 by 89 t.
[06:13] And maybe a last function which is also linear transformation, which is a projection function
[06:21] f of x, y is x, so it projects onto the x, x. We will see this later in some other context
[06:26] a few weeks from now.
[06:27] So, all these are linear mapping so in particular they are linear transformations. Of course,
[06:34] we will also see some non-trivial examples of linear transformations. By non-trivial
[06:38] I mean, where the V or W are not R2 or R3. I mean not Rm or Rn.
[06:45] So, let us recall before going ahead what is a one-one function and what is an onto
[06:49] function. Possibly you have seen this already Maths 1, if not, just look at this definition.
[06:57] So, function f from V to W. Now V and W, are need not be vector spaces here these could
[07:04] be any sets. So, it is called one-one or injective. If f of V1 is f of V2 implies V1 as V2.
[07:12] Similarly, such a function is called onto or surjective if for any little w in capital
[07:20] W. We have a little v and capital V, such that f of little v is little w. So, for a
[07:30] linear transformation being one-one is equivalent to f of V0 implies V0. Why is that? So, let
[07:38] us prove that.
[07:39] So, let us assume that f is one-one. Notice f is a linear transformation. I am assuming
[07:48] it is a linear transformation. Otherwise, of course, this is none of this even makes
[07:52] sense because we do not even know what is the 0. So, f is one-one. So, f is a linear
[08:00] transformation and f is one-one, assume f is one-one. So then, we know f of V1 is f
[08:22] of V2. This is given to us.
[08:37] But on the other hand, we know that f is a linear transformation. So, one of the properties
[08:44] of a linear transformation is that f of 0 is 0. So, f of 0 is 0. So here what do we
[08:57] mean by 0 and 0 here, this, the 0 inside the bracket is the 0 in V it is a vector space,
[09:03] remember, so it has a 0 and 0 outside f of 0, the value is 0 in W. So, this is true because
[09:10] it is a linear transformation.
[09:13] Maybe, I should point out why for a linear transformation f of 0 is 0 that is because
[09:23] if you take f of 0 plus 0, then we get f of 0 plus f of 0, so this implies f of 0 is equal
[09:36] to f of 0 plus f of 0. So, we can, so this is happening inside a vector space W, so we
[09:46] can subtract f of 0 from both sides.
[09:48] So, what that will give us is that f of 0 is 0. So, we know that, so this is true for
[09:56] any linear transformation, f of 0 is 0. So now we want to check that f of V0 implies
[10:01] a V0. So, if f of V is 0 that means f of V is the same as f of 0. And now I can use the
[10:14] fact that f is one-one to conclude that V is 0. So, this shows that if f is one-one,
[10:21] then this condition is satisfied that f of V0 implies V0.
[10:24] So, one way we have shown one way that if it is one-one it satisfies this condition.
[10:33] Conversely, so that means we assume that assume f of V0 implies V0. So now I want to prove
[10:45] it is one-one. So, let us assume that f of V1 is f of V2, but then that will mean that
[10:50] f of V1 minus V2 is equal to 0.
[10:54] So, again, here I have to explain why. So that is because I can subtract f of V2 on
[11:02] both sides so I will get f of V1 minus f of V2 is equal to 0. But now, I can take this
[11:12] minus inside. So, what I am claiming is that this is f of V1 plus f of minus V2. This is
[11:23] 0.
[11:24] And then I am using a linearity because it is a linear transformation to say that V1,
[11:30] f of V1 minus V2. So, the key step is to is prove that I can take minus inside. Why can
[11:36] I take minus inside? Let me do that here. So, the reason is, the same argument that
[11:44] we had before. So, if we have V plus minus V, then this is f of 0 is 0, because we just
[11:53] proved f of 0 is 0.
[11:56] So now you expand the first term, the first expression here, this expression, so you write
[12:02] this as f of V, plus f of minus V, and then you take the f of V on the other side, so
[12:09] that will tell you that f of minus V is minus f of V, that is what we wanted to prove. So,
[12:17] I have proved indeed, that f of V1 is f of V2, you subtract f of V2 on both sides and
[12:25] then that will give you f of V1 minus V2. So, you get f of V1 minus V2 is 0. But now
[12:31] I know this condition that f of V0 implies V0, that means V1 minus V2 is 0. That means
[12:39] V1 is equal V2, adding V2 both sides. So, we have proved that they are equivalent.
[12:45] So, in general, if you have a arbitrary function on sets, checking one-one means you have to
[12:51] check this condition that f of V1 is f of V2 implies V1 is V2. But if you have a linear
[12:57] transformation, you can instead just check that f of V0 implies V0. So, it reduces to
[13:05] checking those for those values of V, which so that when you apply f to those values,
[13:12] they become 0. So, this is a special set and we are going to study that set later. In fact,
[13:20] it is a subspace.
[13:21] So now let us get to what is an isomorphism, which is why we studied this notion of one-one
[13:25] and onto. So, recall first that a function f, again, for any arbitrary sets, V and W,
[13:32] if you have a function f from V to W it is called a bijection or we say that it is bijective.
[13:39] If it is one-one and onto. So, or sometimes it is called a one-one correspondence. So,
[13:49] it is one-one and onto. What that means is, what that means is, if you have V here, then
[13:54] there is a unique W that corresponds to it, which is what we are calling f of V.
[13:57] So, there is exactly one such V, such that f of V is equal to W. For each W such a V
[14:04] exists, and it is unique, that is what is called a bijection or that is the essence
[14:09] of a bijection. So in other words, you can pair up elements, you have V here, W here,
[14:14] V here, W here, that those pairs are exactly, the W paired with V is what we are calling
[14:20] f of V.
[14:21] So that is, if you can do such a thing that is called a bijection. Fine, so what is an
[14:28] isomorphism? So, this is what I just said, bijection is equivalent to saying that for
[14:35] any W in W there exists a unique V such that f of V is W. So, a linear transformation between
[14:41] two vector spaces V and W is an isomorphism if it is a bijection. So, it is an isomorphism
[14:50] if it is a bijection. So, it is a linear transformation along with a bijection. So it satisfies that
[14:59] f of, it satisfies linearity, which means f of V1 plus Cv2 is f of V1 plus C times f
[15:04] of V2 and it satisfies that it is one-one and onto.
[15:07] Namely, that for every W and W, there is a unique little v in capital V, such that f
[15:13] of V is little w. So, example one seen earlier is an isomorphism, let us work that out. So,
[15:21] what was the example, it was f from R2 to R2 where f of x, y is 2x comma y, we already
[15:27] know this is a linear transformation because it is a linear mapping.
[15:30] So, to see that it is a bijection so f of x, y, so because it is a linear transformation
[15:39] to check injectivity it is enough to check that whenever this becomes 0 and remember
[15:43] that 0 in R2 is the point on the vector 0, 0. That means, 2x comma y is 0, 0. How do
[15:53] I get this? By evaluating f on x comma y so we know that is 2x comma y.
[15:59] But when will this be 0 comma 0? This will be 0 comma 0 precisely when our 2x is 0, and
[16:08] y is 0. So already, we have got that y is 0, but 2x is 0 means that x is 0 where all
[16:14] the real numbers. So, I can see that, which means x comma y is 0, 0. So this is saying
[16:23] f of x comma y is 0, 0 implies x comma y is 0, 0 that is the 0 in the vector space R2.
[16:28] So, we have checked it's injective, so therefore, or one-one. So therefore, so this argument
[16:35] is saying that it is f is one-one.
[16:38] Let us check that it is surjective or onto. To check that it is onto we have to show that
[16:47] if you are given any element let us say U comma V in R2, you can get x, y such that
[16:54] f of x, y is U comma V. So, if so, for U comma V in R2 consider x to the U by 2 and y to
[17:09] be V. Where did I get this?
[17:11] This is not coming from magic, I want 2x to be equal to U and y to be V, so X must be
[17:17] U by 2, and that clearly suggest that so therefore, f of x, y is 2x comma y is 2 times U by 2
[17:31] comma V, which is U comma V. So, this is now saying it is onto. Great. So, we have seen
[17:42] how to prove that this is an isomorphism.
[17:46] So, we should also look at examples of things which are not iso, linear transformations
[17:52] which are not isomorphisms. So, here is an example, which is not an isomorphism. The
[17:59] second example that we saw. So, this is f of x, y is 2x comma 0. So, what goes wrong?
[18:05] Well, several things go wrong. First of all, there is no pre-image for the vector U comma
[18:10] V where V is non-zero.
[18:13] For example, 01 has no pre-image. Why does not it have a pre-image because you can see
[18:18] that the only vectors that are images are of the form something comma 0, so 0 comma
[18:25] 1 cannot be a pre-image, sorry, cannot have a pre-image. So that means there is no V in
[18:34] R2 or no x, y in R2 such that f of x, y is equal to 0, 1 that is what we are saying.
[18:39] So, this is not onto or surjective.
[18:43] So similarly, if you take f of x, y to be 0, 0 then that means to 2x is 0, 2x comma
[18:53] 0 is 0 comma 0, which means x is 0, but y could be anything. So, for example, if you
[19:00] take f of 0 comma 1, then the answer you get is 0. That means, we cannot say that f of
[19:08] x, y is 0, 0 implies x, y is 0, 0 because you could have many other choices.
[19:13] For example, you could have 0 comma 1. So, this is not one-one. So, both of the conditions
[19:19] needed for a bijection fail. So, this is a, this is not an isomorphism by a margin. There
[19:25] can be examples where you have one-one but not onto or onto but not one-one. Here is
[19:31] an example which is not onto. So, f of t is t comma 3, t comma 23 by 89 t, this is one-one
[19:38] but not onto, I will suggest you check why it is one-one but not onto.
[19:44] And similarly, if you take the projection map R2 to R, then this is onto but not one-one.
[19:52] Again I will suggest you check why it is onto but not one-one. It is clearly onto I think,
[19:57] but 1, 1 again I think it is clearly not one-one. So, I hope, this gives you a feeling for what
[20:05] we mean by an isomorphism.
[20:09] So, let V be a vector space with basis V1, V2, Vn. So, now, let us introduce basis into
[20:18] the picture. So, the what we are going to say here is that if you have a basis then
[20:23] the linear transformation is determined by the values it takes on the basis. So, suppose
[20:28] V1, V2, Vn is a basis and f is a linear transformation, then the ordered vectors f of V1, f of V2,
[20:37] f of Vn uniquely determined f.
[20:39] Why do I say this? So, the reason one says this is the following. If I want to get f
[20:47] of V, I want to know what is f of V for some V in V. So, let v be indeed V, and I want
[20:54] to know what is f of V. So, I am claiming that it is determined by f of V1, f of V2,
[21:01] f of Vn. So, we know that if V1, V2, Vn is a basis, there is a unique linear combination
[21:07] corresponding to each which equals any given vector in that vector space. So V is summation
[21:13] ci vi for a unique set of scalarsC1, C2 Cn.
[21:16] So, then what is f of V? f of V is a f of summation civi, but now, I know that f is
[21:27] a linear transformation. So, in particular I mean that means it satisfies linearity.
[21:32] So, by linearity, I can pull out the summation and the scalars and write this as summation
[21:39] ci times f of Vi. I do this sequentially. So, in my definition of linearity, I had f
[21:47] of V1 plus C times V2 is f of V1 plus C times f of V2. So, I keep applying it to. First
[21:53] I applied to Vn and then I applied to Vn minus 1 and so on. And I can so, I can pull out
[22:00] any sum. It need not be only vectors it could be any finite sum. And similarly, I can pull
[22:07] out scalars that is what the second condition of linearity told us.
[22:15] So, since that is the case, this is determined, this f of V is determined by the values of
[22:28] f of V1, V2, Vn. My values I mean the vectors, these are vectors, not numbers. So, if you
[22:47] take a vector V, and I want to evaluate f of V, all I need to know are what are the
[22:51] scalars Ci and what are the vectors f of V1, f of V2, f of Vn, that determines f of V,
[23:00] and that is what we mean by saying that a basis determines an ordered basis mind determines
[23:09] the linear transformation.
[23:11] I mean, we could flip this around, and say that suppose I have a, suppose I specify what
[23:20] are I mean, some n many vectors f of V1, f of V2, f of Vn. So, suppose W1, Wn is a specified
[23:37] set of vectors in W then there is a unique linear transformation if such that f of Vi
[24:06] is equal to Wi. How do I define this linear transformation? That is exactly what this
[24:12] equation here is telling.
[24:16] So, what I do is I define f to be so define f of V is summation ciwi where V is equal
[24:32] to summation civi. And then let us see what is f of Vi. So, f of Vi, so to get any f of
[24:45] Vi, you have to first see how is Vi expressed in terms, how is that vector expressed in
[24:50] terms of the basis, but in terms of the basis Vi itself is a basis vector.
[24:56] So, maybe let us say Vj, or let us say Vk. So, you put CK to be one, and all the other
[25:11] cais to be zero, and that is the only way in which you can write, Vk as a linear combination
[25:16] of these basis vectors, because it is a basis.
[25:20] So, if you do that, then all the terms on the in this expression, submission, ciwi will
[25:26] vanish except the kth one. And for the kth one, what you will get is CK is 1, so you
[25:30] will get one times WK, which is exactly WK.
[25:34] So, f of VK is WK, that is what we wanted. So now this linear, so this linear transformation
[25:44] satisfies indeed that f of vi is equal to wi. And it is unique because every linear
[25:50] transformation is determined by what values the basis vectors take. And since they take
[25:56] I mean, these values are specified, no other linear transformation can force that f of
[26:06] vi is equal to wi, that is exactly what we proved before. So with this, let us go ahead.
[26:14] This is a slightly tricky point and I mean, I want a bit you to think a little about this
[26:20] as we go ahead.
[26:22] Let us do this on a particular example. Suppose I take the standard basis 1, 0, 0, 1 of R2,
[26:31] what linear transfer. I should have pointed and said that second part that we did, where
[26:35] we specified W1, W2, Wn and then we defined the linear transformation f that is called
[26:43] extending the function f. So, we have f of vi is equal to wi and then we are extending
[26:51] it to the entire vector space W sorry entire vector space V.
[26:56] So here, in this example, we have, so W1, W2 are these two vectors 2, 0 and 0,1 and
[27:06] let me write that so this is your W1 and this is W2. So we want to extend this function
[27:17] f to a linear transformation from R2 to R2.
[27:21] So, to do that, we have to write any x comma y first as a linear combination of 1,0 zero
[27:27] and 0,1 X times 1,0 plus y times 01. And then I define f of x, y as x times f of 1, 0 which
[27:42] is 2,0 plus y times f of 0 comma 1, which is 0 comma 1. So, this is 2x, comma y. So
[27:52] here, maybe I should put in a step there is 2x, comma 0 plus 0 comma y just 2x, comma
[27:57] y. This was exactly the first example that we looked at, in this video of linear transformations
[28:03] or linear mappings. So, this is the function that we get by or the linear transformation
[28:09] we get by extending the function, which takes 1, 0 to 2, 0 and 0, 1 to 0, 1 that is the
[28:18] way we say this.
[28:21] So, let us change the basis and see what we get if we change the basis. So, the point
[28:28] here is if you change the basis, you will get a different linear transformations, and
[28:31] this is very important. So, in the previous example, instead of working with the standard
[28:36] basis let us work with the basis 1, 0 and 1, 1. So let us say I take 1, 0 to 2, 0 and
[28:43] 1, 1 to 1, 1.
[28:48] So, if that if you do that, then what do we get? So, every element x, y is uniquely represented
[29:01] in terms of this basis as x minus y times 1, 0 plus y times 1, 1. So, I think here,
[29:11] there is a typo, this is f of 1, 1 should have been 0, 1 and not 1, 0.
[29:17] We could, I mean, we can also do 1, 1 but it was intended to be 0, 1. So basically the
[29:25] basis was changed, but the values were the same, so the W1, W2, Wn. So here we have W1
[29:33] and W2, they are the same, but the basis V2, V2, Vn was changed. And the question is what
[29:38] linear transformation do you get by extending? So let us apply the same thing.
[29:45] So, if you have f of x, y, you write this as x minus y times f of 1,0 which is 2 comma
[29:52] 0, plus y times f of 1 comma 1. So, this is x minus y times 2 comma 0. So, note that W1
[30:03] and W2 are the same. So, this part will, meaning these two things will remain the same. But
[30:10] what changes?
[30:11] What changes is are the coefficients this changes. So, y has remained the same, but
[30:18] x has changed. So this is going to give us something else, this is going to give us two
[30:24] times x minus y comma 0 plus 0 comma y. So, this is 2x minus 2y comma y. that is the linear
[30:37] transformation.
[30:38] If instead we had chosen, I mean, just as an example, since I had that typo over there,
[30:44] let me work that out as well. If instead, my basis was the one that I have here, 1,
[30:58] 0 and 1,1 and W1 was 2,0 and W2 was 1,1, then what would have x, y, have been? So f of x,
[31:08] y would have been x minus y times 2 comma 0 plus y times 1 comma 1, if you work out
[31:21] is 2x minus 2y plus y comma y, which is 2x minus y, comma y. So this is a second example.
[31:35] So, let us just summarize what we have done this video. So, in this video, we have seen
[31:43] what is the linear transformation. Essentially, it is just generalizing the definition of
[31:49] a linear mapping, which was a bunch of linear combinations to arbitrary vector spaces. Of
[31:57] course, in arbitrary vector spaces, we do not have the, I mean linear combinations,
[32:05] we have to make sense of what that means.
[32:08] So, instead of doing it that way, we specified by the other property, which is to say that
[32:15] they are satisfying the two conditions of linearity or equivalently a single condition
[32:22] that we call linearity in the previous video. So, either f of V1 plus V2 with f of V1 plus
[32:28] f of V2 and f of C times V1 is C times f of V1 or equivalently, f of V1 plus C times V2
[32:37] is f of V1 plus c times f of V2.
[32:40] This is exactly the same, as saying that f of summation civi is equal to summation ci
[32:45] times f of vi. This is linearity. So that is what was a linear combination, we saw,
[32:49] of course, just by its very nature, that linear mappings are linear transformations. And we
[32:54] saw a bunch of examples.
[32:57] And we saw that they can be written in some kind of matrix form. And finally, we saw the
[33:02] relevance of a basis to all this. Namely, that you can use the basis to express a linear
[33:09] transformation in terms of the values that are taken by the basis vectors, and that actually
[33:17] determines the linear transformation entirely.
[33:22] And finally, we saw that if you, you have to be careful about what basis you choose.
[33:28] And so, if you choose different basis the linear transformations you are going to get
[33:33] by extending the basis may be different, so that you have to be careful about. So, thank
[33:40] you.