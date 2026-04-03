# W4_L2: Finding bases for vector spaces

**Week:** Week 4
**YouTube URL:** https://www.youtube.com/watch?v=SxPhClO9zSU

---

## Transcript

[00:14] Hello, and welcome to the online BSC Program on Data Science and Programming.
[00:18] In this video, we are going to talk about finding bases for vector spaces.
[00:23] This is a continuation of our previous video, where we defined a basis.
[00:28] So just to recall, suppose V is a vector space and S is a subset of V, we define the span
[00:34] of S to be or the set of linear combinations of vectors in V.
[00:41] So, you take some mission ai vi where ai are real numbers and vis are vectors in S.
[00:47] So, S is said to be spanning so it is a spanning set for V, if the span of S is V, which means
[00:56] that the set of linear combinations exhausts V.
[01:00] So, any vector in V can be written as a linear combination of vectors from S.
[01:06] And then finally we defined a basis for V to be a linearly independent set with spans
[01:12] V.
[01:13] So, it is both spanning and linearly independent.
[01:18] Just a small point that, the title we had bases, which is a plural of basis.
[01:25] So, let us do a slightly theoretical statement.
[01:31] So, the following conditions are equivalent to a subset being a basis.
[01:37] So, if B is a basis, then these conditions are going to hold.
[01:41] On the other hand, if any of these conditions hold for a set, subset B, then it must be
[01:46] a basis.
[01:47] What are the conditions?
[01:49] B is linearly independent and the span of B is V.
[01:53] This is exactly saying that it is a basis.
[01:56] B is a maximal linearly independent set and B is a minimal spanning set.
[02:03] So, let us maybe quickly see why these are equivalent.
[02:11] So, the first one is just the definition of a basis.
[02:16] So, let us look at, let us say, let us look at why the second and the first are the same.
[02:23] So, suppose I know that B is a basis.
[02:27] Suppose B is a basis.
[02:29] Let us, let me say why it is a maximal linearly independence set.
[02:40] Before that, maybe I should even first explain these terms.
[02:46] What is the maximal linearly independent set?
[02:48] And what is a minimal spanning set?
[02:50] So, maximal linearly independent set means
[03:07] it is linearly independent, first of all.
[03:13] And if you add any vector to this, then it is no longer a linearly independent set.
[03:21] Adding any vector or maybe I should say, use the word appending, appending any vector
[03:48] makes it linearly dependent.
[03:53] That is what we mean by maximal linearly, independent.
[03:57] And let us now ask what is minimal spanning?
[04:00] So, a minimal spanning set means it is spanning, first of all, and if you would remove any
[04:21] vector, it is no longer spanning.
[04:24] If you delete a vector, so deleting a vector, it is no longer spanning if we delete any
[04:44] vector.
[04:51] So that is what we mean by a minimal spanning.
[04:54] So, let us ask, suppose it is a basis wise it is a maximal linearly independent set?
[05:01] So, maybe this let me write down.
[05:05] So, since it is a basis, we already know it is a linearly independent set.
[05:09] So, therefore B is linearly independent.
[05:15] So, maximal linearly independent means it is linearly independent and appending any
[05:19] vector makes it linearly dependent.
[05:22] So, the first part we know that it is linearly independent, so we have to just check that
[05:26] if you append any vector, then that makes it linearly dependent.
[05:31] So, well suppose you append V, suppose B prime is B union a vector V. Well, but then V is
[05:46] already in the span of B, because remember B is a basis, that means B is a spanning set.
[05:52] So, therefore V is equal to summation ai vi where vi belong to B.
[06:06] Because B is already a spanning set.
[06:09] So therefore, V is a linear combination of some elements of vi.
[06:14] So, in particular it is a linear combination of the other elements in B prime.
[06:22] So, B prime cannot be linearly independent.
[06:25] So, B prime is linearly dependent set.
[06:27] So, therefore, B prime is linearly dependent set.
[06:33] So, we have checked that it is maximal linearly independence.
[06:37] We have checked one then two here, what we have here.
[06:41] So, both of these are true for a basis.
[06:44] Similarly, you can check that it is minimal spanning.
[06:48] We already know it is spanning.
[06:50] So, to check it is a minimal spanning you remove a vector, you delete a vector and then
[06:57] you try to see if it is spanning.
[07:00] Well, you can take that same vector and ask is that vector in the span of the other things,
[07:06] if it were, then B would not be linearly independent.
[07:11] So that means the rector that you deleted cannot be a linear combination of the other
[07:15] vectors.
[07:16] So that means if you remove it, if you delete it, the set that you obtain will no longer
[07:21] be spanning, that is how you get that it is a minimum spanning set.
[07:24] So, this means that 1 gives you 2 and 3.
[07:28] You can go the other way as well.
[07:30] Let me just talk out how let us say 2 goes to 1, 2 implies 1.
[07:34] So, suppose it is a maximal linearly independent set, so that means we already know that it
[07:40] is linearly independent.
[07:42] So, we have to only prove that it is a spanning set.
[07:47] So, in order to prove it is a spanning set you can take any arbitrary vector and you
[07:53] have to express it as a linear combination of these vectors.
[07:56] Well, now, you know that if you append that vector to this set it makes it linearly dependent.
[08:02] So that means, if you take that vector that you appended is a linear combination of the
[08:09] other vectors, because if this one was not a linear combination of the other vectors,
[08:14] then that means the other vectors would have already been linearly dependent, which is
[08:19] not true.
[08:20] So, the only way that you can introduce linear dependence is if that new vector that you
[08:24] added is a linear combination of the vectors that you have, which means that you can express
[08:30] this V as a linear combination of the vectors in B and that tells you that span of B is
[08:39] the entire V, that means B is linearly independent and spanning, so that means it is a basis.
[08:46] So, these are some theoretical juggleries you have to do, and some of this will be done
[08:52] in a tutorial and via problems.
[08:54] And I will encourage you to check this for yourselves.
[08:58] Not hard at all, but you have to know little bit of how to write proofs.
[09:03] This is not strictly essential for the data science program this is just something that
[09:10] is good to know as part of the Maths 2 component.
[09:13] So how do we find a basis?
[09:15] Let us take a step back and understand what we have done so far.
[09:20] We have defined something called a basis.
[09:22] By a basis we mean something, a set which is linearly independent and spanning linearly.
[09:28] Linearly independent means that the only linear combination, which gives you zero is where
[09:35] all the coefficients are zero.
[09:37] Spanning means if you have any vector you can write it as a linear combination of this
[09:42] set of vectors.
[09:43] So, now let us use that, these equivalent conditions that we had before to ask, to answer
[09:52] this question, how do we find a basis?
[09:53] So, we can find a basis by any one of the methods described below.
[09:57] So, you start with the empty set and keep appending vectors, which are not in the span
[10:02] of the set thus far obtained.
[10:04] This is exactly, what we did in our two examples before, until we obtain a spanning set.
[10:10] So, you keep going, you keep adding vectors to your spending set, but you add them in
[10:14] a way so that the intermediate sets that you get are all linearly independent.
[10:18] So, what you will get will be a maximal linearly, independent set, and that will ensure that
[10:27] it is a basis.
[10:28] Similarly, you can take a spanning set that means you take a very large set.
[10:33] You take lots and lots of vectors, then it is very likely that it is a spanning set.
[10:40] Every vector can be written as a linear combination of these.
[10:43] So, then what you do is, within this set that you have chosen, you see which vectors can
[10:49] be written as linear combinations of the other vectors.
[10:53] If there is a vector like that, you delete it and you keep doing this process.
[10:58] Keep checking for a vector that you can write as a linear combination with the others.
[11:01] If you find such a vector, keep deleting it, so slowly your set will grow smaller.
[11:07] And once you reach a place where you cannot delete any vector, meaning there is no vector
[11:13] which linear combination of the others, you have reached a situation where your set as
[11:18] linearly independent it is already spanning.
[11:21] So, that means it is a basis.
[11:24] So, these are the two ways that you can find a basis.
[11:29] So, let us, let me just note here that this process we have already done, these were the
[11:39] examples done before.
[11:46] So maybe let us do another quick example.
[11:49] So, let us start with the empty set append a non-zero vector 1 comma 2, clearly, 1 comma
[11:58] 2 does not, the set 1 comma 2 does not span R2, because think of what line it will give
[12:05] you.
[12:06] So, the Y coordinate is two times the X coordinate, so that is the line it will give you.
[12:11] So, let us choose something, which is not on that line.
[12:13] So, let us say you choose the vector 2 comma 3, and well, you can check.
[12:18] Now I leave this to that span of 1 comma 2 and span of 2, comma 3 is R2.
[12:27] So, since you have a vector, which is not on that line, the span will actually give
[12:32] you a plane and R2 is itself a plane, so it will be the plane R2.
[12:37] So, this set forms a basis for R2.
[12:42] So, the fact that it is linearly independent is clear from the way we have chosen it.
[12:48] And its span is R2.
[12:52] The other way of doing this is to say that it is maximal linearly independent.
[12:56] Meaning, if you choose any other vector, then they become linearly dependent.
[13:00] This is the same idea.
[13:01] So, let us look at method 2.
[13:03] We have already done method 1 before, so I am not going into lot of detail on that.
[13:09] Let us look at method 2.
[13:11] So, method 2 involves choosing a set, which is spanning and then deleting vectors from
[13:17] that set.
[13:18] So, here is a set which is spanning.
[13:19] I will encourage you to check that it is a spanning set.
[13:23] So, check that span of S is a R3.
[13:29] Now observe that the last vector 0 comma 4 comma 2 is two times 1 comma 2 comma, 0 plus
[13:34] two-third time 1 comma 0 comma 3 minus 8 third 1 comma 0 comma 0.
[13:42] This is by observation.
[13:43] You could have done this by solving equations.
[13:47] So, delete 0 4 2.
[13:50] So your new set of vectors is 1 0 0, 1 2 0, 1 0 3 and 0 2 3.
[13:56] Observe that 0 2 3 is 1 2 0 plus 1 0 3, plus two times 1 0 0 delete 0 2 3.
[14:04] What are you left with?
[14:05] You are left with the vectors 1 0 0, 1 1 0 and 1 0 1.
[14:09] None of these vectors is a linear combination of the other two vectors.
[14:12] This is another thing you can check.
[14:14] So, S2 forms a basis of R3.
[14:17] This is the second method that we have seen.
[14:20] Okay.
[14:21] So, let us take a step back and ask what have we done in this video?
[14:25] We have seen various techniques of finding a basis, namely by either appending vectors,
[14:34] so that what the sets that you get are linearly independent or by deleting vectors from a
[14:40] spanning set.
[14:41] We saw plenty of examples of this.
[14:43] And I will also, now at this point, ask you to go back and check what were the sizes of
[14:50] the bases that you got.
[14:51] So, for example, here, the size of the basis that we have for R3 is 3.
[14:59] Now notice what we know.
[15:00] We know that if you have a linearly independent set in R3, then it must be of size at most
[15:05] 3, you cannot have four elements in R3, which are linearly independent.
[15:09] So, your basis here has size exactly 3.
[15:13] So, this is what I meant by saying, that you reach some kind of optimality.
[15:17] Similarly, if you take your standard basis, for Rn your standard basis has a size n.
[15:24] So, we will study this phenomenon in the next video.
[15:28] Thank you.