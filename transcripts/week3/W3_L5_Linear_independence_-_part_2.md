# W3_L5: Linear independence - part 2

**Week:** Week 3
**YouTube URL:** https://www.youtube.com/watch?v=9Adm4c2alAY

---

## Transcript

[00:14] Hello, and welcome to the online B.Sc. program on data science and programming.
[00:17] In this video we are going to talk about linear independence.
[00:21] So, this continues from our previous video on the same topic.
[00:25] So, let us recall that linear independence means a set of vectors being linearly independent
[00:32] means that they are not linearly dependent, which is to say that if you take a linear
[00:38] combination which equals 0, then the only way that can happen is if the coefficients
[00:43] are 0.
[00:44] So, just to recall, here is the last example that we did in our previous video.
[00:48] So, we have these three vectors, 1, 1, 2, 1, 2, 0 and 0, 2, 1 in R3 and we take unknown
[00:56] coefficients a, b and c for these vectors.
[01:00] So, a times 1, 1, 2 plus b times 1, 2, 0 plus c times 0, 2, 1 is 0, 0, 0.
[01:06] This is what we assume.
[01:07] And then we try to work out a, b and c.
[01:10] And indeed, if we equate the coefficients and from this equation here and write down
[01:19] the equations in a, b and c and solve them, we get a is equal to b is equal to c is 0.
[01:24] So, we can now ask the same question in general, how do we check if you have a set of n vectors
[01:30] in Rm when are they linearly independent?
[01:33] So, just to, let us go back one step and ask what we did in R3.
[01:39] So, in R3 what we did is we took arbitrary coefficients.
[01:43] I will underline the word arbitrary or unknown.
[01:48] And then checked when, what are the possible solutions for these coefficients for this
[01:52] equation to be 0.
[01:55] This is a general template.
[01:57] So, in Rm you will do the same thing.
[02:00] So, suppose you have coordinates v1j, v2j, vmj, it is in Rm, so there are m coordinates,
[02:10] so you take the jth vector, that is your, that is vj and you write down the coordinates,
[02:16] so that is v1j, v2j, vmn and you will do this for each of your vectors v1, v2, vn.
[02:23] So, let us write the linear combination of these vectors with arbitrary or unknown coefficients
[02:30] a1, a2, an.
[02:31] So, here we want to determine the coefficients, which yields this equation a1v1 plus a2v2
[02:36] plus anvn equals 0.
[02:37] So, we equate this linear combination on the left to 0.
[02:43] So, now, we can, this is in Rm remember, so both sides we can express in terms of coordinates.
[02:51] So, the first coordinate on the left is a1v11 plus a2v12 plus anv1n.
[02:57] The first coordinate on the right hand side is 0.
[03:02] That is a 0 vector.
[03:03] Similarly, for the second coordinate a1v21 plus a2v22 plus anv2n on the left, on the
[03:09] right it is 0, and we can do this all the way up till m.
[03:14] So, remember, there are m coordinates.
[03:18] So, now, you can notice that we have written this system in a different way.
[03:23] We have written the vij's on the left and the aj's on the right.
[03:30] Why do we do that?
[03:32] So, the reason is that here the unknowns are the coefficients a1, a2, an and we, our notation
[03:40] is that if you have a system ax equals b, so you write summation aij xj.
[03:48] So, here xjs are ais and aijs are vijs.
[03:54] That is why we have written it in a slightly altered way.
[04:01] And now, we know this is a system of linear equations.
[04:03] In fact, this is a homogeneous system of linear equations, because the right hand side is
[04:07] 0.
[04:08] And we know exactly how to solve this.
[04:10] This is something we have done in the previous weeks.
[04:12] So, the most general method is what we call Gaussian elimination.
[04:19] If you are in, there are other situations where you can do better by just looking at
[04:25] determinant and so on.
[04:27] So, since the ais are arbitrary or unknown, we can treat this like a homogeneous system
[04:32] of linear equations with coefficients vij and unknowns ai.
[04:36] This is exactly what we discussed.
[04:38] So, for linear independence, we have to check if the only choice of ai satisfying the above
[04:44] identities or equations is ai equals 0 for all i.
[04:48] So, ai is 0 for each i.
[04:51] So, remember, we are not, mean when we study linear independence, we are not really interested
[04:59] in asking what coefficients give you the linear combination 0.
[05:08] We do not want to expressly evaluate which ai is, what is the set of solutions.
[05:16] All we want to know is whether the solution is only a set of 0s or whether non-zero solutions
[05:25] are, do exist, meaning at least one non-zero coefficient, whether such solutions exist.
[05:32] So, we need not solve the entire system.
[05:36] That is the point.
[05:37] So, equivalently in terms of the homogeneous system of linear equations, we have to check
[05:43] if the only solution is the 0 solution, meaning each of the ais is 0.
[05:49] So, the conclusion here is, this is the main point, to check if v1, v2, vn in Rm are linearly
[05:55] independent, we have to check that the homogeneous system of linear equations vx is 0 has only
[06:02] the trivial solution, meaning the solution where x is 0, that is what we have to check.
[06:09] And what is this v, v is the matrix we can form out of these vectors, where the jth column
[06:15] is the vector vj, meaning you take the coordinates of the vector vj and write that in as a column
[06:24] of v. That is how you get a matrix v.
[06:28] So, let us do this.
[06:32] Let us do a bunch of examples to set these ideas into place.
[06:37] Let us do a 2 by 2 example first.
[06:38] So, consider the two vectors 5, 2 and 1, 3 in R2, write the linear combination of these
[06:44] two vectors with unknown coefficients x1 and x2 and equate it to 0, x1 times 5 comma 2
[06:51] plus x2 times 1 comma 3, 0, 0.
[06:53] So, now I am using x1 and x2 in place of a1 and a2.
[06:58] So, we have the system of linear equations 5 x1 plus x2 is 0 and 2 times x1 plus 3 times
[07:07] x2 is 0.
[07:08] And we want to know if the only solution for this is x1 is 0, x2 is zero or whether there
[07:14] are other solutions.
[07:15] Remember that this being a homogeneous system, the trivial solution always exists.
[07:20] This is something we have seen even in the previous week.
[07:23] We have discussed in the previous week.
[07:26] So, since it is a 2 by 2 matrix, we can look at the corresponding determinant.
[07:33] So, here the determinant will be enough to check whether or not the only solution is
[07:40] 0, 0.
[07:41] So, in this case, the determinant is non-zero.
[07:45] It is an invertible matrix.
[07:46] So, the determinant, remember, here is 5 times 2, 5 times 3, minus 2 times 1.
[07:51] So, 15 minus 2 is 13, which is non-zero.
[07:54] So, since the determinant is non-zero, it is an invertible matrix.
[07:58] And once you note an invertible matrix, we know that the only solution is the trivial
[08:02] solution.
[08:03] So, it has a unique solution x1 is x2 is 0.
[08:06] So, the upshot is that the vectors 5, 2 and 1, 3 are linearly independent.
[08:10] So, I hope this is, you have understood how to solve this question of whether two vectors
[08:19] are linearly independent or not at least in this case.
[08:23] We are going to do a bunch of examples.
[08:25] So, here is an example where you have a 3 by 2 matrix.
[08:31] So, consider the two vectors 1, 2, 0 and 3, 3, 5 in R2.
[08:36] So, let us also understand what is this three by two?
[08:40] This means your vectors are in R3 and you have two vectors.
[08:45] So, your, this is saying you have a 3 by 2 matrix, which means you have two columns.
[08:52] So, remember, columns correspond to the number of vectors and the size of the vector is the
[08:59] number of rows.
[09:00] So, that tells you it is in R3.
[09:03] So, in general, if you have an m by n matrix, that means you have n columns which is corresponding
[09:10] to n vectors and they are, the size of the vectors is m, which means they are in Rm.
[09:17] We studied this a few slides ago.
[09:20] So, you have these two vectors 1, 2, 0 and 3, 3, 5.
[09:26] So, before we go ahead, let us note first of all that we already know the linear independence
[09:31] of two vectors.
[09:32] Namely, two vectors are linearly independent means that they are not multiples of each
[09:39] other.
[09:40] They are two non-zero vectors.
[09:42] So, here you can see that these are not multiples of each other.
[09:46] That means they are linearly independent.
[09:47] So, you already know this fact.
[09:49] But let us do this from, in terms of our matrix.
[09:52] So, write the linear combination of these two vectors with unknown coefficients x1 and
[09:57] x2 and equate it to 0.
[09:59] So, x1 times 1, 2, 0 plus x2 times 3, 3, 5 is 0, 0, 0.
[10:05] From here we get a set of system of linear equations by equating the corresponding coordinates.
[10:10] So, the first coordinate gives you x1 plus 3 times x2 is 0.
[10:15] The second coordinate gives you 2 times x1 plus 3 times x2 is 0.
[10:19] And the third coordinate gives you 0 times x1 plus 5 times x2 is 0.
[10:25] And now, in this case, it is actually easy to check that the only solution is where x1
[10:32] and x2 are both 0, because the third equation gives you that 5 times x2 is 0 that means
[10:37] x2 must be 0.
[10:39] And then you, if you put that into the first equation that tells you x1 must be 0.
[10:44] And you need not cross check with the second equation, because we know, already know that
[10:48] x1 and x2 are 0 is a solution, because this is a homogeneous system.
[10:53] So, the only solution here, we have a unique solution, namely that x1 and x2 are both 0.
[10:59] So, if you do not find this adhoc principal, this adhoc way of doing it agreeable, then
[11:07] you can actually do it the standard way.
[11:10] Namely, you can use Gaussian elimination and we will see soon that there are, we will see
[11:15] an example soon where we do actually have to use Gaussian elimination.
[11:17] So, what is the net result?
[11:20] The net result is what we observed right at the start, because they are not multiples
[11:25] of each other, namely that the vectors 1, 2, 0 and 3, 3, 5 are linearly independent.
[11:30] Let us do a 2 by 3 example.
[11:33] So, what does this mean?
[11:35] This means I have three vectors in R2.
[11:38] So, what, let us take the three vectors 1 comma 2, 1 comma 3 and 3 comma 4 in R2.
[11:46] And remember that for three vectors being linearly dependent is the same as saying that
[11:52] we can write some one of these vectors in as a linear combination of the others.
[11:58] So, one way of checking this would be to ask if one of these is a linear combination of
[12:03] the others.
[12:04] But a more direct method is to take unknown coefficients x1, x2, x3 and then write down
[12:13] the equation x1 times 1 comma 2 plus x2 times 1 comma 3 plus x3 times 3 comma 4 is 0, 0.
[12:20] Let us equate the coordinates.
[12:22] So, if you equate the coordinates, you get 1 times x1 plus 1 times x2 plus 3 times x3
[12:27] is 0 and you get the 2 times x1 plus 3 times x2 plus 4 times x3 is 0.
[12:33] Those are your two equations.
[12:34] This is a system of linear equations.
[12:38] And now we can use Gaussian elimination.
[12:42] So, the augmented matrix for this system is the matrix 1, 1, 3.
[12:49] 0 on the right, 2, 3, 4.
[12:52] 0 on the right.
[12:54] Let us do Gaussian elimination.
[12:57] So, that means we have to row reduce.
[12:59] And if you row reduce, it is very easy to check that your solutions are of the form
[13:08] x1 is minus 5c, x2 is 2 times c and x3 is c, where c is in real numbers.
[13:16] So, the point is, as c varies, the solutions vary, which means there are infinitely many
[13:22] solutions.
[13:23] So, the net result is that the vectors 1 comma 2, 1 comma 3, and 3 comma 4 are linearly dependent.
[13:29] So, here, let us observe what happened.
[13:35] You see, you had 3 unknowns and you had 2 equations.
[13:40] And we have already seen what happens in these cases in the previous week, that if you have
[13:45] more unknowns than the number of equations, then you always have lots of solutions.
[13:51] So, keep that in mind and we will make this precise later on.
[13:57] Finally, let us see a three by three example.
[14:00] So, that means you have three vectors in R3.
[14:02] So, let us take the vectors 1, 2, 0, 0, 2, 4 and 3, 0, 0.
[14:10] So, actually, right away, you can see that these are linearly independent, because if
[14:17] we can, if they are not that means one of them can be written as a linear combination
[14:21] of the other two.
[14:23] And just by observation you can see that is not possible.
[14:25] But let us go through our usual method.
[14:29] So, let us take unknown coefficients, x1, x2, x3 and equate that linear combination
[14:35] to 0.
[14:36] So, you have x1 times 1, 2, 0 plus x2 times 0, 2, 4 plus x3 times 3, 0, 0, 0, 0, 0.
[14:42] Let us take the corresponding coordinates on each side.
[14:46] So, doing that we get x1 plus x2 times 0 plus 3 times x3 is 0, then 2 times x1 plus 2 times
[14:53] x2 plus 0 is 0, and then 0 times x1 plus 4 times x2 plus 0 times x3 is 0.
[15:01] So, now, you could either use Gaussian elimination or you can consider, because it is a 3 by
[15:11] 3 case, you can consider the determinant, which is what we do in this solution or you
[15:18] can just do it by observation, because in the last, if you look at the last equation,
[15:24] then this is 4 times x2 is 0 that means x2 must be 0.
[15:29] Then you put that, substitute that in the second equation that will give you x1 is 0.
[15:34] And then substitute x1 is 0 in the first equation that will give you x3 is 0.
[15:40] Alternatively, you can look at this matrix.
[15:42] So, the corresponding matrix is 1, 0, 3, 2, 2, 0, 0, 4, 0.
[15:47] And note that this has non-zero determinant.
[15:51] So, from here you can check that, so what is the determinant here, so you have 0 plus
[15:58] 0 plus 4 times 2s, 8 times 3 is 24 minus 0 minus 0 minus 0.
[16:07] So, the determinant here is 24.
[16:10] And so this is an invertible matrix that tells us that this system has a unique solution
[16:16] 0, 0, 0.
[16:18] So, the upshot is that these vectors are linearly independent.
[16:21] This is, we sort of observed this at the start of the slide and indeed we have explicitly
[16:30] proved it.
[16:31] So, now let us address this question about, this comment that I made earlier that remember
[16:40] we had three vectors in R2 that means we had the 2 by 3 case and suppose now we have more
[16:49] than two vectors in R2, so suppose we have n vectors in R2, where n is at least 3.
[16:55] So, what happens?
[16:57] To check linear independence, we have to check whether the corresponding homogeneous linear
[17:01] system vx is 0 has a unique solution x is 0.
[17:04] But on the other hand, since n is bigger than 3, n is at least 3, which is bigger, strictly
[17:11] bigger than 2 and this is a homogeneous system with more unknowns than equations, so we have
[17:19] seen in the previous week that Gaussian elimination will yield infinitely many solutions.
[17:26] So, any set of n vectors in R2, where n is at least 3, so we have three vectors or four
[17:32] vectors or 20 vectors or 100 vectors that is going to be a linearly dependent set of
[17:38] vectors.
[17:39] That is the conclusion.
[17:40] So, if you have either a single vector or two vectors in R2 only then do they have a
[17:49] chance of being linearly independent.
[17:51] More than two vectors, it is always going to be linearly dependent.
[17:54] So, you can see that these numbers somehow picks up the fact that we are in R2.
[18:01] So, we are in R2 and this fact is being picked up by linear independence.
[18:07] This is important and we will see this shortly in our next few videos.
[18:12] We can generalize this.
[18:14] So, suppose you are in Rn and you have more than n vectors.
[18:19] So, for example, if you are in R3 and you have 4 vectors or you are in R4 and you have
[18:25] 5 vectors or let us say you are in R8 and you have 20 vectors, you can make the same
[18:31] argument as in the previous slide for R2, namely that you will get a system of linear
[18:39] equations, homogeneous system of linear equations with more unknowns than number of equations,
[18:49] and hence, it always has a non-trivial solution that will tell you that these are linearly
[18:53] dependent.
[18:55] So, if you have more vectors, then the n, I mean, what is in Rn, you have more than
[19:08] n vectors in Rn, then they are always going to be linearly dependent, important point.
[19:13] So, again, this is picking up that number n in some way.
[19:18] Let us do an example in R3.
[19:20] So, consider the four vectors 1, 2, 0, 0, 2, 4, 3, 0, 0 and 1, 2, 3 in R3, so we have
[19:28] already checked, remember that the first three are linearly independent.
[19:30] We checked that these three are linearly independent.
[19:34] So, now we are introducing a new vector 1, 2, 3.
[19:40] So, let us do our usual thing and write down three equations by equating the corresponding
[19:52] coordinates.
[19:53] So, you have equations x1 times 1, 2, 0 plus x2 times 0, 2, 4 plus x3 times 3, 0, 0 plus
[20:00] x4 times 1, 2, 3, which we equate to 0, 0, 0.
[20:05] Look at the corresponding coordinates.
[20:07] So, we get x1 plus 0 times x2 plus 3 times x3 plus 1 times x4 that is 0 and then 2 times
[20:17] x1 plus 2 times x2 plus 0 times x3 plus 2 times x4 that is 0, and then 0 times x1 plus
[20:25] 4 times x2 plus 0 times x3 plus 3 times x4 that is 0.
[20:30] So, now, of course, there are lots of 0s here.
[20:32] And you may be able to manipulate and solve this by hand.
[20:36] But as we know the general and fastest and cleanest method of doing this is by Gaussian
[20:42] elimination.
[20:43] So, we will write on the augmented matrix that gives us 1, 0, 3, 1, 0; 2, 2, 0, 2, 0;
[20:52] 0, 4, 0, 3, 0.
[20:55] Let us do row reduction.
[20:56] So, if you do row reduction, we get the augmented matrix 1, 0, 0, one-fourth, 0, 1, 0, three-fourth,
[21:06] 0, 0, 1, one-fourth and the last column is again 0, 0, 0.
[21:12] So, what have we obtained?
[21:14] We obtained that the solutions to this are x1 is minus c by 4.
[21:22] So, remember that we had this idea here of which variables are independent and which
[21:30] variables are dependent.
[21:32] So, x4 is the independent variable and x1, x2, x3 are dependent.
[21:39] So, you put x4 as c and once you put x4 as c from the first equation you will get that
[21:44] x1 is minus c by 4, from the second you will get that x2 is minus 3c by 4, and from the
[21:50] third you will get that x3 is minus c by 4.
[21:54] So, as c varies, this is your set of solutions.
[21:58] So, just as an example you could take c to be, let us say 1 or maybe c to be 4.
[22:06] So, if you take c to be 4, you get minus 1 times 1, 2, 0 plus minus 3 times 0, 2, 4 plus
[22:17] minus 1 times 3, 0, 0 plus 4 times 1, 2, 3.
[22:21] And you can check that this is actually equal to 0.
[22:24] So, this gives us, so I have given you an explicit example of an equation or a linear
[22:33] combination of these four vectors, which yields 0, where the coefficients are not all 0.
[22:39] In fact, in this case, none of them are 0.
[22:41] But it is enough to have that not all of them are 0.
[22:43] So, the net upshot is that these 3, these 4 vectors are linearly dependent.
[22:48] We already knew this.
[22:50] Because remember that we said, if you have more than three vectors in R3, meaning four
[22:58] or more vectors in R3, then they are going to be linearly dependent.
[23:02] And this example shows you why that is happening.
[23:06] So, finally, let us talk about the relationship with the determinant.
[23:11] We have seen some examples with the determinant.
[23:13] So, let us talk about the relationship with the determinant.
[23:16] So, now, suppose you have a set of n vectors in Rn, which are linearly independent, rather
[23:23] we want to check whether they are linearly independent.
[23:26] So, what do we do?
[23:28] We take those vectors, express them in terms of their coordinates, make the corresponding
[23:34] matrix V.
[23:35] So, that is now an n by n matrix, where the jth entry of, sorry, the jth column of that
[23:41] matrix corresponds to the jth vector vj.
[23:47] And then you look at the corresponding homogeneous system of linear equations vx is 0 and ask
[23:53] whether the only solution for this is x is 0.
[23:57] That will determine whether or not it is linearly independent.
[24:00] So, if the only solution is 0, then it is linearly independent.
[24:04] If the only solution is, well, if there are solutions which are non-zero, then it is not
[24:12] linearly independent, meaning it is linearly dependent.
[24:15] So, I can check this by looking at whether or not V is invertible.
[24:19] And to check whether or not V is invertible I can check what is the determinant of V.
[24:26] So, if the determinant is 0, then these vectors are linearly dependent.
[24:33] If the determinant is non-zero, then these vectors are linearly independent.
[24:38] So, this has a unique solution if and only if this vector V is, this matrix V is invertible,
[24:49] so this is not A but this is V, should have been V and if A is invertible let us recall
[25:01] that there exists A inverse such that A times A inverse is 1, meaning the identity, it should
[25:10] be identity is A inverse times A and so the determinant is non-zero.
[25:15] And we can reverse this, remember, by, if you recall how we went the other way, if the
[25:22] determinant is non-zero then you can look at the miners and look at the adjugate matrix.
[25:30] And if the determinant, so that is how you go the other way, this is V and this is V.
[25:40] So, let us do an example.
[25:43] So, let us look at these three vectors in R3 1, 4, 2, 0, 4, 3 and 1, 1, 0.
[25:50] So, the corresponding matrix is 1, 4, 2, 0, 4, 3 and 1, 1, 0.
[25:55] Well, I should not say that way.
[25:57] I have always been saying it along the rows.
[25:59] So, the corresponding matrix is 1, 0, 1, 4, 4, 1 and 2, 3, 0.
[26:03] So, what we do is, we put this 1, 4, 2 into the first column and 0, 4, 3 into the second
[26:08] column and 1, 1, 0 into the third column.
[26:11] And then, let us look at the determinant of V. Apologies, this should be V.
[26:17] So, this determinant is, let us see what it is, so it us 0 plus 0 plus 4 times 3 times
[26:23] 1 is 12 and then minus 8 minus 3 minus 0.
[26:30] So, 12 minus 8 minus 3 that is 1.
[26:34] So, the determinant is 1.
[26:37] So, this matrix V is invertible.
[26:42] And so the vectors 1, 4, 2, 0, 4, 3 and 1, 1, 0 are linearly independent.
[26:47] So, this is an example of the previous idea where if you have n vectors in Rn, you can
[26:57] deduce whether or not they are linearly independent just by putting them into a matrix, by putting
[27:04] the jth vector into the jth column and creating that matrix and then looking at the determinant.
[27:12] If the determinant is 0, then they are linearly independent, if the determinant is 0, they
[27:18] are linearly dependent.
[27:19] And if the determinant is non-zero, they are linearly independent.
[27:24] So, let us summarize what we have seen in this video so far.
[27:30] So, we have seen in this video linear independence deduces to checking a system of linear equations
[27:36] where you take the coefficients to be the unknowns and you take the matrix to be, the
[27:44] matrix coming from the vectors by putting the jth vector into the jth column.
[27:52] So, all this is, of course, for Rm.
[27:55] If you are in some other vector space, then what I am saying does not work, then you have
[28:01] to just do that by hand.
[28:03] So, we will see examples of that later on or in the, and in the tutorials.
[28:10] So, and then you look at the system of linear equations vx equals 0.
[28:16] And if that system has a non-trivial solution is a homogeneous system.
[28:21] In fact, it has a non trivial solution, meaning if there is a solution where x is not 0, then
[28:27] the set of vectors is linearly dependent.
[28:31] If the only possible solution is a trivial solution, namely x is 0, then the set of vectors
[28:38] v1, v2, vn is linearly independent.
[28:41] And note that if the number of vectors is bigger than the vector space in which one
[28:52] is working in, meaning the exponent of the vector space, meaning if you have Rn and if
[28:56] you have more than n vectors, so you have n plus 1 or n plus 2 and so on, if you have
[29:03] that many vectors, so bigger than or equal to n plus 1 vectors, then they are always
[29:10] linearly dependent.
[29:13] And if you have exactly n vectors, so you have n vectors in Rn, then you can check the
[29:19] linear dependence or independence by looking at the determinant of that corresponding matrix
[29:24] V formed by putting the jth vector into the jth column.
[29:30] So, this is more or less everything that we have discussed in this video.
[29:35] Thank you.