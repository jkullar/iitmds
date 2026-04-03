# W5_L4: What is a linear mapping - part 2

**Week:** Week 5
**YouTube URL:** https://www.youtube.com/watch?v=aRNE_GrR0Yk

---

## Transcript

[00:14] Transcriber's Name: Crescendo Transcriptions Pvt Ltd
[00:15] Mathematics of Data Science 2 Professor Sarang Sane
[00:16] Department of Mathematics Indian Institute of Technology, Madras
[00:17] What is a linear mapping Part 2
[00:18] Let us move on to a slightly more elaborate example. So, we will use the same data that
[00:20] we have before, we have shop A. But now in this locality Malgudi, on this town Malgudi,
[00:29] we have the original shop A, and we have two other shops B and C as well, and the prices
[00:35] of rice, dal and oil in each of the shops is given in this table.
[00:40] So, in Shop A we already have seen that it is 45 kgs, 45 rupees per kg for rice, 125
[00:45] rupees per kg for a dal and I think 150 rupees per liter for oil. And for Shop B we have
[00:59] 40, 120 and 170 respectively and Shop C we have 50, 130 and 160 respectively.
[01:07] Now, someone asked the caterer why do you always buy from shop A? So, is there a good
[01:16] way of deciding, which shop to buy your groceries from? So, in order to do this, what do we
[01:24] have to do, we have to check out the cost for buying X1 kgs of rice, X2 kgs of dal and
[01:31] X3 liters of oil from each of the shops, then compare them and see which one is less, and
[01:37] then we would go there. Of course, let us assume that all of them have the same quality
[01:41] and there is no difference as such.
[01:43] So, let us do that. So, we have seen already that the expression for shop A is a linear
[01:49] combination, and we can, in fact view it as a function. That is what we saw in a few slides
[01:56] ago, and we can also think of it as matrix multiplication. Just to remind you, we had
[02:01] this thing called cA, which was the function, which was this linear combination 45x1 plus
[02:06] 125x2 plus 150x3 three, and which we can also write as a matrix multiplication.
[02:13] So similarly, for shops B and C, we can write the cost function cB and cC. So, the shop
[02:22] is capital C and the cost is little c. And expressions and matrix forms are as below.
[02:30] So, CB is the linear combination 40x1 plus 120x2 plus 170x3 and that is the corresponding
[02:40] matrix multiplication. And for shop C, we have the function CC, which is 50x1 plus 130x2
[02:48] plus 160x3 and the corresponding matrix multiplication.
[02:56] So, to compare these expressions, let us go back for a second and check them out. We had
[03:05] 45x1 plus 125x2 plus 150x3, 40x1 plus 120x2 plus 170x3. So, rice and dal are cheaper in
[03:15] B than in a, but oil is more expensive. And then we have 50x1 plus 130x2 plus 160x3. So,
[03:25] rice and dal in C are more expensive than in shop B, but oil is less expensive.
[03:35] However, when you compare it with shop A, all three are more expensive for shop C. So,
[03:44] you would, assuming everything else is the same you would always prefer shop C, shop
[03:49] A over shop C. So that is what we see here.
[03:54] The third expression always yields larger values than the first one. Of course, we are
[04:01] talking about commodities, so we think of them as buying the, I mean, buying commodities
[04:09] from a grocery shop. So X1, X2, X3 are always I think of them as positive numbers, but we
[04:14] do not know how to compare between the second shop that is shop B and shops A and C.
[04:21] So, to compare this, we would want to compare these cost functions. So, the idea you would
[04:31] I mean, the natural way of doing this would be to treat them together cA, cB and cC we
[04:38] could think of them as a vector. So, you look at this vector, cA, cB, cC and then we can
[04:45] think of this actually as a function. Because each of these, after all are functions from
[04:49] R3 to R, so this vector can be thought of as an element of R3, it is a point of R3.
[04:55] So, we can think of the cost function which is C of X1, X2, X3 is cA of X1, X2, X3 comma
[05:07] cB of X1, X2, X3 comma cC of X1, X2, X3, I will just put this bracket here. And just
[05:15] to recall each of these are given by linear expressions, linear combinations 45x1 plus
[05:22] 125x2 plus 150x3 and then 40x1 plus 120x2 plus 170x3 and then 50x1 plus 130x2 plus 160x3.
[05:30] So, this  is the function, the cost function, wherein
[05:40] the first coordinate of the cost function tells you the cost in shop A, the second coordinate
[05:46] tells you in shop B, and the third coordinate tells you in shop C. And now, when you are
[05:50] given X1, X2, X3 you put it into this cost function, look at these three numbers that
[05:55] it produces and then you choose the smallest one, you can just read them off. So, this
[06:01] would be a good way of trying to compare. Of course, there are many other reasons to
[06:09] look at the cost function.
[06:11] For example, we can treat this as matrix multiplication. Because after all each of these are given
[06:19] by matrix multiplication, where we have a column vector X1, X2, X3 on the right and
[06:25] a row vector corresponding to the cost of individual items on the left. So, you can
[06:34] put these three row vectors together and get this matrix.
[06:38] So, C of X1, X2, X3 has a matrix form where the matrix is 45, 125, 150. This was the prices
[06:47] for shop A, 40, 120, 170, which are the prices for shop B and for 50, 130, 160, which are
[06:53] the costs for shop C. So, this is exactly what your table was the cost table, a few
[07:03] slides ago. And you can see by just multiplying out that this is indeed what the cost vector
[07:07] is.
[07:09] So, just as an example, the cost of buying 2 kgs of rice, 1 kg of dal and 2 liters of
[07:15] oil are given by the cost vector, you put X1 is 2, X2 is 1 and X3 is 2 and we will get
[07:24] 515, 540 and 550, if hopefully I have done this computation correctly.
[07:32] So as in the case of the function cA, the property of linearity of costs can now be
[07:37] extracted from the matrix form for the cost function c. So, let us first of all understand
[07:42] this statement. What do we mean by the statement, the statement means that if you buy, so suppose
[07:51] again, we had a situation like Monday and Tuesday, and then we had a say we wanted to
[07:57] know what the costs for each shop on Wednesday are, so I would be evaluating this on half
[08:04] times the rice on Monday, plus 5 by 4 times rice on Tuesday comma halftimes rice, dal
[08:26] excuse me, dal on Monday plus 5 by 4 times dal on Tuesday, and then half times oil on
[08:44] Monday plus 5 by 4 times oil on Tuesday.
[08:53] You would be evaluating it on this, which means you have this matrix. Well, let me come
[09:01] to the matrix in a second, which means basically you are doing cA of the same thing, cB of
[09:06] the same thing and cC of the same thing, but we saw that cA is basically after we finished
[09:15] the computations the cA of this is exactly half times cA on Monday. So, I will just call
[09:23] it Monday.
[09:24] By Monday, what do I mean? I mean rice on Monday, the vector rice on Monday, dal on
[09:30] Monday comma oil on Monday, plus 5 by 4 times cA on Tuesday, which means by T I mean the
[09:42] vector rice on Tuesday, dal on Tuesday, oil on Tuesday. And then I can, the same way as
[09:49] I did for cA the same. There is nothing special about the shop A. So, the same thing works
[09:54] for cB as well and for cC as well.
[09:58] So, I have this very nice expression, and then half times cC of Monday plus 5 by 4 times
[10:21] cC on Tuesday. And so, I can effectively compute this by computing everything on Monday and
[10:31] Tuesday, but it gets even better because we know how to do matrix. We know how to do,
[10:36] how to add and subtract and scalar multiply things in R3.
[10:41] So, because we can do that, we can write this in even better as half times the cost vector
[10:49] evaluated on the commodities for Monday, plus 5 by 4 times the cost vector evaluated on
[10:58] the vector for Tuesday. I can separate these into two different vectors, and then I can
[11:03] pull out the scalars, I will encourage you to do that. I will just, just in case it was
[11:09] confusing what is M. By M I meant rice on Monday then dal on Monday, oil on Monday.
[11:22] And by T I meant rice on Tuesday, dal on Tuesday, oil on Tuesday.
[11:31] So, notice, I do not even remember what the quantity is there. I did not need that anywhere.
[11:39] So, I can instead replace this rice and dal and so on by variables. I could have called
[11:45] them X1, X2, X3 and Y1, Y2, Y3 and the whole thing would have worked out in the same way.
[11:50] So effectively, what we are saying by linearity is that if you have alpha times X1, X2, X3
[12:00] plus Y1, Y2, Y3 this is going to be just alpha times C of X1, X2, X3 plus C of Y1, Y2, Y3.
[12:13] That is what we mean by linearity.
[12:16] This is a very important property, and this is very special to the kind of functions that
[12:25] we are dealing with, they are linear functions. So that is what this video was about. Remember,
[12:29] linear mapping. These are examples of linear mappings. Now, the claim is this can be, we
[12:35] could have done this in one shot by using the matrix. How is that? Because remember
[12:40] that, so let me just take here.
[12:44] So, I can write this as the matrix times the vector X1, X alpha times X1, X2, X3 plus the
[12:53] vector Y1, Y2, Y3. But we know that matrix multiplication commutes with the addition.
[13:04] So, I can instead write this as the matrix, the cost matrix that we had in the earlier
[13:09] slide, times X1, X2, X3, and I can pull the alpha out because of constants remember come
[13:15] out plus the same matrix times Y1, Y2, Y3.
[13:23] And then, of course, this I know is alpha times C of X1, X2, X3. I mean it is the same
[13:27] as the expression on top. It is equal to this expression. This this part is here and the
[13:33] second part is corresponding to C of Y1, Y2, Y3. So, this is what we mean by a linearity.
[13:42] So now, we can talk in general, what is a linear mapping? So, a linear mapping f from
[13:48] Rn to Rm. And now, we are not doing R3 or R we will just do it for any arbitrary n and
[13:54] m. mean something of this form where you have f of X1, X2, Xn is summation a1jxj summation
[14:02] a2jxj summation amjxj, what are these aijs, they are real numbers.
[14:08] So, basically a linear mapping can be thought of as a combination or a, sorry, a collection
[14:13] of linear combinations. Except you arrange them in a vector, so it gives you a function.
[14:20] So linear mapping is a function, which has this form. So just to be clear, if you take
[14:27] something like f of x is x squared, that is not a linear mapping or f of x is logarithm
[14:33] of x that is not a linear mapping or f of x is e to the power x that is not a linear
[14:37] mapping. So, it should be linear, meaning it has this is very nice form.
[14:43] So, we can of course write this as matrix multiplication, because notice that the right-hand
[14:50] side, if we think of it, instead of a row vector, if we think of it as a column vector
[14:56] then we can obtain it as multiplying A times x. What is A? A is exactly the matrix given
[15:04] by putting these coefficients into the appropriate places. So, the matrix the ijth entry of A
[15:11] is aij where aijs is the corresponding coefficient above.
[15:16] So finally, let us talk about linearity of linear mappings. This is exactly what we did
[15:24] for the cost vector. So, it follows that a linear mapping satisfies linearity, which
[15:30] means f of X1 plus Cy1 comma X2 plus Cy2, comma Xn plus Cyn is equal to f of X1, X2,
[15:39] Xn plus C times f of Y1, Y2, Yn.
[15:41] Why is that? So, the reason is because I can write f of X1 plus Cy1 comma X2 plus Cy2,
[15:58] Xn plus Cyn as A times X1 plus Cy1, X2 plus Cy2, Xn plus Cyn. So, here of course, I am,
[16:10] when I write it as A times just, I get a column letter, but you think of it as a row vector.
[16:16] So, when I say equal, I mean, you take the row vector corresponding to this column vector.
[16:22] So, the second I mean the column vector over there X1 plus Cy1 I can break up into two
[16:32] separate vectors along with a constant. And then because matrix multiplication is commutes
[16:42] with or distributes over addition, we get this, which is exactly f of X1, X2, Xn plus
[16:59] C times f of Y1, Y2, Yn. You could do this directly also, by the way, and I will encourage
[17:04] you to check this from the expression for the linear combinations.
[17:11] So, just to recall what everything that we have done in this video. We saw the examples
[17:24] of grocery shops, first of a single grocery shop and the corresponding cost vector, and
[17:29] then of a bunch of grocery shops. And we saw that it was useful to arrange this as a function.
[17:37] We can treat the cost as a function, it is a linear combination, and that is the expression
[17:43] for the function, and it satisfies what is called linearity.
[17:47] And then if we have several costs, which is what we had four different jobs, we arrange
[17:53] them into a cost function of which is a function of three variables. Taking values, depending
[18:01] on how many shops there are. So, it could be in, so we had three shops, so it took values
[18:05] in R3 so it is a function from R3 to R3, but, each coordinate of the expression that we
[18:15] had was a linear combination of the X1, X2, Xn of X1, X2, X3. So, such a thing is exactly
[18:23] what is called a linear mapping. And then we observed that linear mappings are satisfied
[18:28] linearity. Thank you.