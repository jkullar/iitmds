# W1_L2: Matrices

**Week:** Week 1
**YouTube URL:** https://www.youtube.com/watch?v=rnIDlZnrCc0

---

## Transcript

[00:14] Hello and welcome to the maths 2 component of the online BSC course on Data Science.
[00:20] In today s video, in this video we want to talk about matrices and as you can see up
[00:27] here. Now matrices, you may heard of matrices in a completely different context, namely
[00:33] there is this movie called the matrix and its sequence which you may have seen in one
[00:39] of these movie channels.
[00:41] So, that has a much more difficult and intricate plot line and the use of the matrix there
[00:50] is much much much more inworld. We will see that in actuality the matrices that we need,
[00:55] matrices is plural form matrix are much easier and how they deal with vectors and in linear
[01:05] algebra which we are studying now.
[01:08] So, today s in this video we are going to study what is a matrix, we will study some
[01:15] related terms, we study diagonal and scalar matrices, we look at the identity matrix,
[01:22] we will talk about linear equations and matrices. So, this is the relationship with linear equations.
[01:27] This is really one of the main reason why we study matrices.
[01:31] We look at the algebra of matrices. So, things like the addition of matrices, scalar multiplication,
[01:39] the multiplication of matrices, somewhat special. And then finally what properties do these
[01:45] may a matrices have with respect to addition and multiplication. So, let us start with
[01:50] what is a matrix.
[01:51] So, a matrix is really something very easy. It is a rectangular array of numbers arranged
[01:57] in rows and columns. So, it is like a table, very much a rectangle table which you are
[02:04] familiar with. And inside the table in various places you have numbers. So, here is an example.
[02:10] So, the example has the numbers 1, 2, 3 and 2, 3, 4 arranged in an array, rectangular
[02:18] array.
[02:19] So, in your table if you want so, this is what is called the 2 by 3 matrix. So, the
[02:26] two refers to the first, so 2, how many rows there are in this matrix and the 3 refers
[02:33] to how many columns there are in this matrix. So, the 2 by 3 is written to the right of
[02:43] this matrix slightly below it, so 2 rows and 3 columns. So, in general, you may have an
[02:52] m by n matrix.
[02:54] So, that means you have m rows in this matrix and n columns in this matrix. And we will
[03:00] talk about the entries of this matrix. So, the ijth entry of this matrix refers to the
[03:06] entry why is in the ith row and the jth column. So, there is a unique such entry and that
[03:12] will be the ijth entry. So, let us look at the example that we have. Here, I will look
[03:17] at the entries in this matrix. So, first of all this has two rows, how do the rows look
[03:21] like?
[03:22] Here is the first row and here is the second row and it has 3 columns, so here is the first
[03:33] column, the second column and the third column. And now suppose I want to ask, what is the
[03:40] 1, 2th entry of this matrix? So, the one, two eth entry of this matrix, so it will be
[03:51] 1, 2th entry of this matrix means you look at first row, that is the first row over here
[04:07] and you look at the second column. So, that is, the first row is 1, 2, 3 and the second
[04:12] column is the 2, 3.
[04:13] So, the entry that you have over there is 2. So, I will encourage you to think about
[04:21] what is the 2, 3th entry. So, the 2 3th entry of this matrix is, so by now you have probably
[04:31] figured out, you look at the second row and the third column. So, this is 4. So, I hope
[04:36] you understand what it means for a matrix to be an m by n matrix that means it has m
[04:40] rows and n columns and what it means for an entry to be the ijth entry. So, let us move
[04:49] on.
[04:50] And look at some special kinds of matrices. So, as we saw matrices are rectangular arrays
[04:55] if numbers, so special shape within rectangles is the square. So, let us talk about square
[05:02] matrices. So, square matrix is a matrix in which the number of rows is the same as the
[05:06] number of columns. So, here is an example. So, here you have 3 rows and 3 columns.
[05:14] So, just to jog your memory, here is the first row, here is the second row, here is the third
[05:23] row and about the columns, here is the first column, here is the second column and here
[05:31] is the third column. So, again just as a test, if you want to ask what is 2, 3th entry of
[05:42] this matrix, so the 2, 3th entry of this matrix, so you look at the second row and the third
[05:55] column that is 1. So, I hope you are comfortable with the notations.
[06:01] So, the ith diagonal entry of a square matrix is the i ith entry. So, the, so when you have
[06:10] a square, there is something called the diagonal of the square and we look at the ith entry
[06:16] on the diagonal and that is the i ith entry of the matrix. So, the diagonal of the square
[06:22] matrix is the set of diagonal matrix.
[06:24] So, here is the set of diagonal entries and within this, this is the first diagonal entry.
[06:36] So, this is the second diagonal entry and this is the third diagonal entry. So, the
[06:42] diagonal entries are somewhat special because they occupy the i ith position. So, we generally
[06:48] talk about diagonals only for square matrices.
[06:51] So, now some special further specialization that this square matrices, so diagonal matrix
[07:00] is one where the only non-zero entries are in the diagonal, everything else is 0. So,
[07:05] such a thing is called a diagonal matrix. Here is an example. So, you can see that the
[07:10] diagonal entry is here, so that is 1 minus 3 and 4.2. So, the first diagonal entry is
[07:16] 1, the second diagonal entry is minus 3 and the third diagonal entry is 4.2. So, everything
[07:23] else is 0. So, this is the diagonal matrix.
[07:26] So, then an even more special case of this is what is called a scalar matrix. So, diagonal
[07:32] and matrix in which all the entries in the diagonal are the same, have the same value.
[07:38] So, it is the same number. So, this is called a scalar matrix. So, here is an example. So,
[07:45] here you can see that every entry here is minus 3, so the first entry is minus 3, the
[07:49] second entry is minus 3 and the third entry is minus 3.
[07:51] They are all equal. So, this is an example of a scalar matrix. Why is this a scalar matrix?
[07:57] So, we will see later that this behaves like minus 3, this matrix in our mind should, we
[08:06] should think of it as minus 3. Again just to jog your memory, what is the order of this
[08:12] matrix, meaning what are the number of rows and columns? This is a 3 by 3 matrix.
[08:21] And even more special case is where the scale, you have a scalar matrix, but in the diagonal
[08:27] position, the entries are all 1. So, this is called the identity matrix, this is something
[08:32] very important and it has a special notation, it is denoted by I. So, this is capital I.
[08:39] So, here is what I is, so this is 1 0 0; 0 1 0 and 0 0 1. So, again I will remind you
[08:49] this is 3 by 3.
[08:50] So, I am not saying what the size of the matrix is, so if we are talking about a 4 by 4 matrix,
[08:57] then that will also be denoted by I and we will have 1 0 0 0; 0 1 0 0; 0 0 1 0; 0 0 0
[09:07] 1. So, it depends on context as to which I we are referring to. So, in the given context,
[09:14] it will be clear what we mean by I, meaning how many rows and columns it has.
[09:18] But however many rows and columns it has, which of course, is the same number, the diagonal
[09:24] must consist of ones. So, the only choice is how many rows and columns it has, which
[09:30] will be clear from the context. So, these are the special kinds of matrices we wanted
[09:36] to look at.
[09:37] So, now let us look at the use of matrices. So, suppose we have a system of linear equations.
[09:44] So, we will study more about this in the forthcoming video. So, you have a set of linear equations.
[09:50] So, what does that mean? That means you have something like this, 3x plus 4y is 5 and 4x
[09:57] plus 6y is 10. So, we can think of this as in terms of matrices.
[10:03] So, how is this being done? Again this will be explained in much more detail in the forthcoming
[10:08] video. So, the corresponding matrix is this matrix which has 2 rows and 3 columns. So,
[10:16] I will emphasize the 3 columns here. So, the two, the first two columns correspond to the
[10:22] coefficients of x and y.
[10:23] So, 3, 4 and 4, 6 that is the part that is coming over here, that is this part and then
[10:31] the entries that are on the right beyond the equals that is on the last column, those are
[10:38] in the last column. So, this middle line is just for our own sake. We do not need to put
[10:45] it, so as a matrix this is the same matrix as what we have without the line.
[10:52] So, this is 3, 4, 5; 4, 6, 10. But we later see that putting that line helps us. So, for
[11:02] now this is the corresponding matrix. So, but we will see how the line helps us later
[11:07] on. So, that is how it is related to linear equations and this is really the main importance
[11:14] of matrices. So, now let us move on to how do we add matrices.
[11:20] So, here is an example. So, we will add matrices by adding corresponding entries. So, the important
[11:28] part here is that, when we add two matrices, they must be of the same size. That means
[11:33] they have the same number of rows and the same number of columns. Both matrices have
[11:37] the same number of rows and both matrices have the same number of columns.
[11:40] So, for example over here, this matrix has 3 rows and 2 columns, this matrix also has
[11:47] 3 rows and 2 columns, and hence we can add this. And the resulting matrix also has 3
[11:52] rows and 2 columns. So, how do we add this? So, the addition the way it works is, we take
[11:59] 1 and add it to 0, so here is 1 and 0, so we add these and in the 1 1th place we get
[12:09] 1 again. We take maybe let us look at the 2, 2eth entry. So, we have a 7 and over here
[12:21] we have a minus 7, so we add these and here we get a 0. So, you add corresponding entries.
[12:27] So, I hope this is clear.
[12:30] So, let us at this in a more formal way. So, the sum of two m by n matrices, apologies,
[12:36] this should be matrices. So, the sum of two m by n matrices, A and B is calculated entry
[12:44] wise. So, corresponding entries are added, that means you look at the i, jth entry of
[12:48] A and the i, jth entry of B and then you add those to get the i, jeth entry of A plus B.
[12:55] So, that is the formula; A plus B ij that means the i jth entry of A plus B that is
[13:01] what is in the left that is the same as the i jth entry of A plus the i jth entry of B.
[13:09] So, maybe one more example. So, suppose we have these two matrices, so this is, this
[13:18] has 1 row and 3 columns and this has 1 row and 3 columns.
[13:25] And so the resulting matrix also has 1 row and 3 columns. And how do we add these? We
[13:28] add these entry wise. So, the first entry that is the 1 1th entry, we have half plus
[13:34] 2, so we get 5 halves. For the second entry we have minus three fourth minus 3, so we
[13:41] get minus 15 by 4 and for the third entry we have 3 minus 1 which is 2. So, I hope it
[13:50] is, so the addition of matrices is fairly easy. I hope you are getting the hang of this.
[13:58] So, the next thing we want to look at is scalar multiplication. So, how do we multiply a matrix
[14:06] by a number? So, to multiply a matrix by a number, we multiply each entry of that matrix
[14:14] by that number. So, here we have 3 times the matrix 1, 2, 3; 4, 5, 6. 1, 2, 3 is in the
[14:22] first row; 4, 5, 6 is in the second row. So, what do we do?
[14:26] We do this by multiplying each entry. So, this is 3 times 1, 3 times 2, 3 times 3 and
[14:36] then 3 times 4, 3 times 5, and 3 times 6, bracket complete and which is exactly what
[14:48] we get as the matrix 3 times 6 times 9; 3, 6, 9 in the first row and 12, 15, 18 in the
[14:55] second row.
[14:56] So, let us make this formal. So, the product of a matrix A with a number c, so this is
[15:04] denoted by c times A and the i, jth entry of the product is c times the i, jth entry
[15:11] of A. So, c times A i, jth entry is c times Aij. Then let us move on to matrix multiplication.
[15:25] So, this is really the relatively harder thing to do. So, let us look at how to multiply
[15:33] matrices. So, here is an example. So, let me explain that example before we see how
[15:41] this equality comes about. So, let us explain this 7, how did I get 7? So, in order to get
[15:47] 7, so 7 is the which entry of this matrix is the 1, 1th entry of this matrix.
[15:54] So, for the 1, 1th entry I look at the first row of the first matrix and then I look at
[16:04] the corresponding entries of the first column of the second matrix. So, the first 1 and
[16:13] 2 came from here and the second 1 and 3 came from here. So, how do I, so what is the sum?
[16:27] This is 1 plus 6 which is indeed 7. So, that is how I got that 7.
[16:32] Suppose I want to know what is the, how did I get this 22, let us ask for 22. So, first
[16:39] let us ask, 22 is which position? So, 22 in the is in the 2, 2th position. So, in order
[16:45] to get the 2, 2th positions, I should look at the second row and then I should look at
[16:55] the second column and then I should multiply corresponding entries and add them.
[17:02] So, I get 3 times 2 plus 4 times 4. So, this is 6 plus 24, 6 plus 16 which is indeed 22.
[17:24] So, I get 6 plus 16 which is indeed 22. So, let us maybe do one more entry. Let us look
[17:33] at the 1, 3th entry, 13, how do I get this entry. So, 13 is the 1, 3th entry. So, for
[17:41] the 1, 3th entry, I take the first row which is 1, 2 and I take the third column which
[17:51] is 3, 5.
[17:53] So, I get 1 times 3 plus 2 times 5 which is 3 plus 10 which is 13. So, I hope the process
[18:11] is clear of how do we get these entries in this matrix. So, I will encourage you to find
[18:18] the other entries, how do we get these 15, 10 and 29.
[18:23] Maybe let us do one more example. So, here is another example, so we have the matrix
[18:30] 1, 2, 3, 4 times the matrix 5, 6 in columns, in a single column. So, I want to look at
[18:38] how did we get 17 and 39. So, for the 17, what do we do? It is a 1, 1th entry, so I
[18:47] look at the first row and I look at the first column.
[18:52] So, of course, here is here we have only one column, so we have 1 time multiply the corresponding
[18:59] entries and add them, plus 2 times 6, this is 5 plus 12 and which is 17. So, for the
[19:09] 39, what do I do? I do 3 times 5 plus 4 times 6 which is 15 plus 24, namely this is 39.
[19:18] So, I hope it is clear how we are getting these entries.
[19:22] So, now he do I abstractly define matrix multiplication. So, if I have two matrices, A and B, how do
[19:32] I multiply them? So, note here one of the important parts. Here, as in the previous
[19:39] example, the matrix sizes were very important. So, we had a 2 by 2 matrix, we multiply it
[19:47] to a 2 by 1 matrix. So, what was important about this?
[19:52] The most important part was  that these two things were the same and the
[20:06] 2 here. So, the number of columns in the first matrix must be the same as the number of rows
[20:13] in the second matrix. So, the number of columns in the first matrix must equal the number
[20:31] of rows in the second matrix. Why do we need that? Otherwise, there will be a mismatch.
[20:42] So, here I have a 1 and 2 that is a number of, so how many entries do I have?
[20:47] I have 2 entries here that is corresponded to the number of columns. And how many entries
[20:51] do I have here? 5 and the 5 and 6, there are 2 entries which corresponds to the number
[20:55] of rows. If I had one more entry, then I would not know where to multiply it by. So, in order
[21:02] for this to make sense, the number of rows of the first matrix, the number of columns
[21:08] of the first matrix must be same as the number of rows of the second matrix.
[21:13] So, let us, with this caveat let us define matrix multiplication. So, here you have two
[21:19] matrices, the first has size m by n and the second one has size n by p, then the product
[21:26] has size m by p. So, this m is the number of rows of the first matrix, and the p is
[21:32] the number of columns of the second matrix. And how do we define the ij-th entry of A
[21:38] B?
[21:39] So, for the ij-th entry you look at the ith row of A, look at the corresponding entries
[21:45] of the jth column of B, multiply those and add them up. So, abstractly this is summation
[21:54] k is 1 through n Aik times Bkj. So, if you find this formula cumbersome, go back to the
[22:00] examples, you will see it exactly matches with what we have done.
[22:05] Now, the important remark which I want to reiterate it, I said this before, but I want
[22:12] to reiterate this, the multiplication of matrices A and B is defined only when the number of
[22:18] columns of A is the same as the number of rows of B. Very important, otherwise we do
[22:23] not defined multiplication of matrices. So, here is another example.
[22:28] So, 1, 2, 3 times the matrix 2, 0.8, 5, 0.7; half minus 2 is 13.5 minus 3.8. So, 1 row
[22:39] and 2 columns. Where did I get 1 row and 2 columns from? That is because over here, so
[22:45] first of all is it defined, can I multiply these at all? Yes. Because the number of columns
[22:51] of the first one is the same as the number of rows of the second one and then in the
[22:56] resulting matrix what was my, what was the size? So, this 1 is what came here and this
[23:06] 2 is what came here?
[23:13] So, the resulting matrix has size 1 by 2, so 1 row and 2 columns. And how do we get
[23:20] the first entry? So, to get the first entry, we do 1 times 2 plus 2 times 5 plus 3 times
[23:25] half. To get the second entry, we do 1 times 0.8 plus 2 times 0.7 plus 3 times minus 2
[23:35] and this is what we will get. So, I will encourage you to check that what I just said is exactly
[23:41] this formula over here. So, that is matrix multiplication. So, let us look at a few special
[23:49] cases of matrix multiplication.
[23:50] So, remember that we had scalar matrices, so scalar matrices were diagonal matrices
[23:57] in which all the diagonal terms were equal. So, they look like the matrix on the left,
[24:03] c 0 0, 0 c 0, 0 0 c. So, let us do this multiplication. So, the first term, so first of all is it
[24:15] well defined, so how many rows and columns does this have, this is a 3 by 3 matrix. How
[24:21] many rows does this have? 3. And how many columns does it have? 2. So, this is a 3 by
[24:27] 2 matrix.
[24:28] So, indeed we can multiply this because the number of column here is 3 which is the same
[24:32] as the number of rows here. And when you multiply these, you will see that the first entry for
[24:37] example the 1, 1-th entry of this is c times 1 plus 0 times 3 plus 0 times 5. So, it is
[24:45] just c times 1 which is c. The 1, 2-th entry is c times 2 plus 0 times 4 plus 0 times 6
[24:55] which is c times 2. So, 2 times c.
[24:58] So, you can see what is happening. Each entry of this second matrix, each entry over here
[25:03] is getting multiplied by c. So, I can pull that c out and think of this as scalar multiplication
[25:09] by the constant c, multiplication by the scalar c. So, that is what special about scalar matrices.
[25:20] So, scalar multiplication by a scalar can also be thought of as multiplication by a
[25:28] matrix, namely the scalar matrix of the corresponding size.
[25:33] So, to reiterate what I said, scalar multiplication by c is multiplication by the scalar matrix
[25:42] c times the identity matrix. In particular, if we put c is 1, we get the identity matrix.
[25:50] So, from there what do we get? We get that if you have a let us say 3 by 3 matrix, then
[25:57] if you take the identity matrix of size 3 by 3, again as I said identity you will know
[26:03] from context which identity matrix we are using.
[26:06] So, I times A is the same as A because you can pull out the 1, so nothing is happening.
[26:12] You are not multiplying by anything, meaning you are multiplying by 1 which is the same
[26:16] as A times I. So, I will encourage you to check the formulae. And more generally if
[26:23] you take instead of 3 by 3, if you take 3 be n, then if you multiply by a 3 by 3 matrix
[26:29] I on the left, you will get A again.
[26:34] And if you take m by 3 and multiply by I, you will again get A. Again the 3 here is
[26:40] not relevant. You could have used any n instead of 3, but often our examples will be in small
[26:48] size that is why we have mentioned 3 here. So, there is something special about the identity
[26:54] matrix that is the point of this bunch of things here.
[26:57] So, identity matrix acts like 1. So, when you multiply a number by 1, you get back the
[27:03] same matrix, the same number. The same thing happens with the identity matrix. When you
[27:08] multiply by the identity matrix, you do not change anything, you get back the same matrix.
[27:13] So, identity matrix acts like 1, it behaves like 1.
[27:19] So, finally let us quickly summarize some properties of matrix addition and multiplication.
[27:27] So, if you add 3 matrices, it does not matter which order you add it in, so this is called
[27:34] associativity. If you multiply 3 matrices, it does not matter which ones you, which two
[27:40] you multiply first, but very importantly you have to multiply them in the same order. You
[27:44] cannot change the order.
[27:48] If you do A plus B then that is the same as B plus A, so you, matrix addition is what
[27:54] is called commutative, does not matter which order you (multi) add them in. But it matters
[28:02] how you multiply them. A times B is in general not going to be equal to B times A. In fact,
[28:08] it may not even make sense to multiply B times A. Why is that? Because the number of A times
[28:16] B means that the number of rows of B is the same as a number of columns of A.
[28:21] On the other hand, B times A means the number of columns of B is the same as the number
[28:27] of rows of A. This may not happen. So, for example if you take something like this and
[28:36] I can multiply by 1, but the other way it does not make sense, this does not make sense,
[28:53] this does not make sense, I hope it is clear.
[28:56] This has 1 column and 3 rows; this has 2 rows and 3 columns. So, it does not, you cannot
[29:06] multiply these two. So, it may not even make sense to multiply them, they may be of, even
[29:11] if you can multiply them, they may end up being of completely different size and even
[29:15] if the sizes are same, they may not be equal. So, I encourage you to check such things.
[29:23] And then some more properties So, if you multiply this by a scalar, if we have scalar multiplication
[29:29] remember, so if you do lambda times A plus B, then that is the same as lambda times A
[29:34] plus lambda times B. So, this is scalar (multi). So, lambda is a real number, so lambda is
[29:42] a scalar.
[29:44] Similarly, if you do lambda times AB, then you can first do lambda times A and then multiply
[29:50] that to B and there will be no problems, it will be the same number, sorry the same matrix.
[29:57] And in fact you can go ahead and shift that lambda inside. So, scalars can be shifted
[30:02] inside. So, here you can change lambda to go inside.
[30:06] So, A times B plus C is a same as A times B plus A times C. And then finally, A plus
[30:14] B times C is A times C plus B times C. So, these are identities, how do I check these?
[30:22] So, you, we have to check these based on the rules of addition and multiplication. So,
[30:27] even if you do not formally understand how to check them, in given examples I hope you
[30:33] will be able to actually compute, so I suggest that you actually compute things like this.
[30:39] So, for example I will give you an example here, which I suggest that you compute and
[30:46] see what happens. So, see if for example this is the same as 2 times 1 plus 2 times 3, 4
[30:55] and so on. So, let us quickly recall what we have studied today. We have studied what
[31:00] is a matrix; we have studied special matrices, so diagonal, scalar and the identity matrix.
[31:07] We have studied what is the relationship of a matrix with linear equations.
[31:13] And then we looked at matrix addition, we looked at scalar multiplication of matrices
[31:18] meaning, multiplying a scalar to a matrix and we looked at multiplying 2 matrices. Very
[31:23] important the number of columns of the first matrix must be the same as the number of rows
[31:30] of the second matrix, only then can we multiply. And then we looked at some properties of all
[31:35] these operations. So, thank you and see you in the next video.