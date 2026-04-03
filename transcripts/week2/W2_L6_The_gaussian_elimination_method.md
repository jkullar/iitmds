# W2_L6: The gaussian elimination method

**Week:** Week 2
**YouTube URL:** https://www.youtube.com/watch?v=gdk1_aEe7j4

---

## Transcript

[00:14] Hello and welcome to the maths 2 component of the online B.Sc. program. In this video
[00:19] we are going to talk about a process called the Gaussian elimination method. Using this
[00:27] method, we will be able to do a lot of things. So, in particular, we will be able to find
[00:32] the solutions to any system of linear equations, in a very fixed algorithmic manner. And we
[00:40] can also use it to find the determinant of a square matrix which we kind of saw last
[00:47] time. And we can also use it to find the inverse of a square matrix which is invertible. So,
[00:53] let us quickly recall, what was our, what we have seen before.
[00:59] So, we have seen the following methods to find the solutions of a system of linear equations,
[01:05] Ax equals b. Namely, we have seen if A is invertible, then the solution is unique. And
[01:10] it is given by A inverse b. And we can find the solution by either Cramer's rule, that
[01:18] was the first method we saw. And the other method we saw was to actually compute A inverse.
[01:25] To do this, we find the adjugate matrix and then we find A inverse b.
[01:32] So, these are slightly cumbersome methods, because they involve a lot of determinant
[01:37] calculations. And finding determinants is a very resource intensive process. So, you
[01:45] have to do a lot of computation to find determinants. And here, we have to find not just one, but
[01:51] several determinants, and that is how these processes work. So, compared to this, remember
[01:57] that if A is in what we call the reduced row echelon form, then we can find the solution
[02:03] of, of such a system very easily.
[02:10] So, if you, if Ax is equal equals b is the system that we are solving, and if A is in
[02:15] reduced echelon form, then we have the following procedure to find the solutions and note that,
[02:26] there can be many solutions. Now, because it A is no longer a square matrix, it could
[02:30] be a rectangular matrix. So, you find the dependent variables. So, these are the ones
[02:35] which correspond to the leading entries. So, the there is a 1 in the nonzero rows, which
[02:41] is, which appears at the beginning of the row, the first entry of the, first nonzero
[02:47] entry of that row looked at from the left, that is a leading term.
[02:51] So, the column corresponding to that, that column, the corresponding variable. So, if
[02:58] the ith column is a leading entry, then xi is an, is a dependent variable. And if the
[03:04] ith column does not have a leading entry, that, that corresponding variable is an independent
[03:10] variable. So, all those columns which do not have leading ones, those correspond to independent
[03:18] variables. And then how do we find our solutions, you plug in any value that you want for the
[03:23] independent variables, and you back calculate to find the values of the dependent variable.
[03:33] And note that each dependent variable will appears in a unique equation that is the advantage
[03:38] of the reduced row echelon form. And you can use that to back calculate and find the value
[03:45] of a dependent variable. And then all such values for every choice of values of the independent
[03:56] variables, we get a solution of our system Ax equals b. Of course, you have to when before
[04:03] we do this, remember, this is very important that if there is a 0 row in your reduced row
[04:10] echelon form, and the corresponding entry in b is nonzero, then this system cannot have
[04:18] a solution.
[04:20] This was one of the things we observed and we will use this as you go ahead. So, this
[04:24] tells you all the possible situations. So, it tells you whether there is a solution,
[04:29] if there is a solution, it enlists all of them. And we are going to make use of this
[04:35] technique. So, we saw this two videos ago and we are going to make use of technique
[04:41] along with what we saw in the previous video where we took an arbitrary matrix and we used
[04:49] row operations. So, elementary row operations to reduce it to reduced row echelon form.
[04:56] So, we are going to put both these two together. And we are going to solve an arbitrary system
[05:02] of equations Ax equals b
[05:04] So, what are the contents of this video, we will study what is called the augmented system,
[05:09] augmented matrix for a system of linear equations, we will study the Gaussian elimination method
[05:15] to determine all solutions of a system of linear equations. And here, our system may
[05:23] not have the same number of variables as equations. So, in other words, your A could be a rectangular
[05:31] matrix, it need not be a square matrix. And finally, we will use this also, this is very
[05:36] brief to compute the inverse. So, we will use this technique also to compute the inverse
[05:41] of a, of an invertible matrix, of course, which is square.
[05:44] So, what is the augmented matrix? So, let Ax equals b be a linear system of equations.
[05:49] So, A is an m by n matrix. So, you have m rows and n columns, so remember that the n
[05:58] columns correspond to the n variables, and the m rows correspond to the m equations.
[06:04] And b is as a result, the m by one column vector, or column matrix of constants, which
[06:10] appears to the right. So, any such equation, we have these three matrices, Ax and b, A
[06:21] is m by n, x is a column vector a column matrix of size n by 1 and b is a column vector of
[06:29] size m by 1.
[06:31] So, we form what is called the augmented matrix of the system. So, this is a new matrix, and
[06:37] it is of size m by n plus 1. So, there is a small typo here, namely that our n plus
[06:45] 1 should be in the brackets. So, m by n plus 1. So, the first n columns are the columns
[06:54] of A, and the last column is b. So, this is, this is how I define the augmented matrix
[07:02] of this system. And we have a notation for the augmented matrix, it is A to slash b.
[07:11] So, this is to remember that the first n columns are coming from A and the last column is coming
[07:19] from b, can we put this vertical line, so this is just notation. And how are we going
[07:25] to write this augmented matrix? So, we will write this augmented matrix as follows. So,
[07:31] if my coefficients for the equation are a 1 1 a 1 2 etcetera. So, then I have a 1 1
[07:41] a 1 2 all the way up to a 1 n, I put this vertical line here, a 2 1 a 2 2 upto a 2 n.
[07:52] And then I have a m 1, a m 2 up to a m n.
[08:01] So now, this is my matrix A remember, so, A came in the first n columns, that is what
[08:08] the definition says. And in the last column, I have my vector b1, b2, bm. So, this is the
[08:20] augmented matrix for the system. So, it is a matrix with m rows, same number of rows
[08:25] as number of equations, and n plus 1 columns, the n columns coming from the coefficients
[08:32] and the last column coming from the constants. So, what do we do with this augmented matrix?
[08:40] So, for the augmented matrix, let us, let us first do an example maybe, of an augmented
[08:46] matrix. So, here is my system of equations, 3x 1 plus 2x 2 plus x 3x 4, 6 x 1, 2 x 2 x
[08:55] 2, 7x 2 plus x 3x 4 is 8. So, A is the matrix 3 2 1 1; 1 1 0 0; 0 7 1 1. You might remember
[09:07] this from the previous video. So, we have already done the operation of row reduction
[09:11] on this matrix. And b is the column vector of the constants, which are appearing on the
[09:19] right, so that is 6 2 and 8.
[09:21] So, what is the augmented matrix? So, you just take these two, and you put them together,
[09:27] but you put a line in the middle. So, this line is just to be, it is not sort of part
[09:34] of the matrix, but it is something that you put to remember that on one side, you have
[09:38] coefficients and on the other side, you have the constants.
[09:43] So, what do we do with the augmented matrix? So, this is what the Gaussian, where the Gaussian
[09:49] elimination method starts. So, you have a system of linear equations, Ax equals b, and
[09:55] Gaussian elimination is going to tell you how to get all the solutions of this. So,
[09:59] it will use these two things. First, it will use the augmented matrix. And second, it will
[10:04] use the technique of reducing to the row echelon form that we have reduced row echelon form
[10:11] that we studied in the previous video.
[10:13] And then it will, it will use that for, for matrix and reduced row echelon form. If I
[10:18] have something like Rx equals c, then I can find all the solutions. This is exactly the
[10:25] technique. So, let us go through the steps. So, form the augmented matrix. So, we just
[10:31] saw what that was. Perform the same operations on this augmented matrix, that were used to
[10:37] bring A into reduced row echelon form.
[10:39] So, we know how to bring any matrix into reduced row echelon form. So, if you take the matrix
[10:44] A, there is a series of steps and it is an algorithm, using which you can put it into
[10:53] reduced row echelon form, so you have to use elementary row transfer, row operations. So,
[10:59] you use the same operations on this new matrix that you used on A in order to put a into
[11:09] reduced row echelon form.
[11:10] So, note that this new matrix that you have, need not be in reduced row echelon form. And
[11:15] indeed, that is the point, if it is not in reduced row echelon form at the end, then
[11:21] something special is going to happen. And if it is in reduced row echelon form at the
[11:27] end, then something else is going to happen. So, let R be the sub matrix of the obtained
[11:34] matrix of the first n columns. So, you look at the so after you do this process on A slash
[11:42] b, so the augmented matrix, you apply all these elementary row operations.
[11:46] So, in the end, you will get another new matrix, which is again with m rows and n plus 1 columns.
[11:54] So, you look at the first n columns, and that matrix you call R. And let c be the sub matrix
[11:59] of the obtain matrix consisting of the last column. So, the last column consists of c.
[12:04] And to keep track again of the first ten and the last column, we will put a vertical line
[12:09] between them. So, we write the obtained matrix as R vertical line c.
[12:19] And now this is the important part, notice that R is in the reduced row echelon form,
[12:24] it must be, because you took A and you applied all the row operations on A, which we used
[12:33] on A slash b, that we used to put A into reduced row echelon form. So indeed, R is exactly
[12:39] the matrix that you got, after you applied all those operations to reduce it into reduced
[12:45] row echelon form. So, R is exactly the, that matrix.
[12:50] So, what is next? So the, this is the main point, this is the crucial point, which is
[12:59] why the entire method works, these solutions of Ax equals b are precisely the solutions
[13:06] of Rx equals c. So, what have we done, we have taken an arbitrary system of linear equations
[13:13] Ax equals b, we have performed some operations on this, on the matrices occurring there,
[13:21] we have found two new matrices R, which is of size m by n and c, which is of size m by
[13:29] 1, where R is reduced row echelon form. And when we take the corresponding system of linear
[13:36] equations Rx equals c, the set of solutions of Rx equals c is exactly the same as the
[13:42] set of solutions of a Ax equals b.
[13:45] Now, well, if you think a little about what is happening, you can see that we are already
[13:54] done here. So, from here, I can finish off how to find the solutions Ax equals b.
[13:58] Let us list out the procedure entirely, form the corresponding system of linear equations
[14:03] Rx equals c, find all the solutions of Rx equals c and hence of Ax equals b. So, if
[14:11] I, as we observed, the solutions of Ax equals b are exactly the same as the solutions of
[14:17] Rx equals c. That was the punchline of the previous slide. And now so if we find all
[14:24] the solutions of Rx equals c, then I know all the solutions of Ax equals b.
[14:29] And how do I find the solutions of Rx equal c? Well, R is in reduced row echelon form.
[14:36] So, I have a concrete procedure to find these. So, you find the independent variables and
[14:42] the dependent variables and then you put the independent variables to arbitrary values,
[14:47] and then you back calculate to find the values of the dependent variables. We have done examples
[14:51] of this as well. We recalled this right at the beginning of this video. So, we have a
[14:59] very concrete procedure now to, to find the solutions of Ax equals b.
[15:07] So, let us do an example. So, you might find this, this is the same example that we saw
[15:15] earlier, where we put the system of linear equations into the, we wrote down the augmented
[15:23] matrix of the system of linear equations. So, now let us perform the Gaussian elimination
[15:26] method on that same example. Now, if you look at this matrix on the left, just the matrix,
[15:37] just this part, the A part.
[15:39] So, if you look at that A part, then that A part is exactly the matrix that we used
[15:46] in the previous video, which we use the which we completely computed, what was the reduced
[15:54] row echelon form for. And so you have to use those same steps over here. So, we can do,
[16:01] we will do a fresh, of course. So, we will do that a fresh, so the first step is, you
[16:10] get a 1 in the 1 1 place, because you start with the first column, and then you try to
[16:16] get a 1 in that 1 1 place.
[16:18] So, you do R 1 by 3. And then you do R2 to minus R1, to cancel all the 0s below. So,
[16:26] this is what you get. And now notice what is happening here, we are not performing these
[16:31] operations only on the A part, we are performing it on the entire matrix. So, in that includes
[16:37] the b part, it includes the column b. So, when we went from the first step, in the first
[16:43] step, the R1 by 3 was also applied on the column b. So, you have to apply it on the
[16:51] entire row, not just the row of A but the entire row.
[16:54] In the second step, we did R2 minus R1. And in R2 minus R1, we got a 0 in the second place
[17:05] of the last column. So, your performance on the entire second row, not just the A part
[17:14] of the matrix. Let us continue. So, the next thing we do is we multiply the second row
[17:21] by 3 in order to bring a 1 over there. Then we cancel out, we cancel out the 0 below that
[17:33] 1, by doing R3 minus 7 R2. Keep noticing what is happening to the last column, you are playing
[17:40] all this on the last column as well. And then finally, we have to get a 1 in the third row
[17:48] now. So, we divide by 8. And notice that the 8 in the last column, also got divided by
[17:55] 8, and we got a 1.
[17:57] So, let us write down this matrix again. And maybe now I will finish this calculation.
[18:01] So, this is already, the matrix on the left is already in row echelon form. So, now I
[18:07] am going to reduce it to the reduced row echelon form. So, in order to do that, what do I do?
[18:14] So, I do R2 plus R3, and R1 minus one third R3. So, what do I get? So, this is still 1
[18:32] 0 0 two third 1 0 then 0 0 1. And, well, we have slightly lucky, we also get a 0 0 1 here.
[18:45] And then let us see what happens here.
[18:48] So, R2 plus R3 means I get a 1 in this place. So, I already have a 1 here. And then R1 minus
[18:54] one third R3. So, 2 minus 1 third. So, that is 6 by 3 minus 1 third. So, that is 5 by
[19:06] 3. And in the next step, what do I get? I do the same thing for the second column. So,
[19:16] I do R1 minus 2 third R2. So, if I do that, I get 1 0 0 0 1 0 0 0 1 0 0 1. But something
[19:31] may change here. So, R1 minus two third R2 means you would have five third minus two
[19:37] third, so five third minus two third is 3 third, which is one, so 1 1 1.
[19:43] And this is my final matrix. So, in terms of our notation, this is what I call R, and
[19:50] this is what I call c. Now let us write down this corresponding equation. So, we have Rx
[19:56] equals c. And now how do I find the solutions for this. So, we look at the independent and
[20:04] the dependent variables. So, here there is three leading ones, namely column one, column
[20:09] two, and column three. So, x1 x2 x3 are independent, sorry dependent variables.
[20:18] And x4 is independent. So, let us put an arbitrary value for x4. So, substitute x4 equals c.
[20:28] And now let us see what happens to the others. So, x1, actually, there is no choice, x1 is
[20:33] 1, x2, again, there is no choice x2 is 1 if you write down the equation, and in the third
[20:38] equation, we have x3 plus x4 equals 1, but we have put x4 equals c, that means x3 equals
[20:46] 1 minus c. So, the set of solutions of Rx equals c, and hence, Ax equals b is vectors
[21:05] of the form, so that is x1.
[21:06] So, you can either write it as a vector or in or explicitly, maybe let me write it explicitly.
[21:14] So, x1 is 1, x2 is 1, x3 is 1 minus c and x4 is c. And where c can take any choice,
[21:26] we can have any number of c, so any real number, I can write the same set as in terms of a
[21:32] vector as 1 1 1 minus c and c, where c belongs to R. So, we have determined all the solutions
[21:41] of the system of equations, Ax equals b, where A was exactly that matrix that we started
[21:49] with, in our first example.
[21:52] So, maybe let us do another example. So, here we have x1 plus x2 plus x3 is 2, x2 minus
[21:57] 3 x3 is 1, 2 x1 plus x2 plus 5 x 3 is 0. So, the matrix representation, so A is a square
[22:05] matrix, 1 1 1, 0 1 minus 3, 2 1 5, and b is 2 1 0. So, the augmented matrix, you put A
[22:13] and b beside each other, and put a vertical line across them. So, it is three rows and
[22:18] four columns, where the fourth column is b, and the first three rows are A.
[22:21] So, let us do this example, maybe explicitly. So, maybe let us write down the first step.
[22:32] So, this is R3 minus 2 R1, why R3 minus 2R1, well, there is already a 1 in the 1 1-th position.
[22:39] So, R3 minus 2 R1 cancels at 2 at the, in the first column. And note that we have also
[22:45] applied this on the last column. So, the last column entry becomes minus 4. So, let us do
[22:54] one more step. So, you have R3 plus R2.
[22:57] Now, because once again, our so we want a 1 in the second column, in this part of the
[23:08] matrix over here, which we already have. So, so I do not have to do anything to make that
[23:14] 1. And now I want to use that 1, and clear off the minus 1 below that. So, to do that,
[23:25] we do R3 plus R2. And again, the entry in the third, the third entry here changes. So,
[23:34] let us continue and finish off this example. So, well, this is actually already in row
[23:44] echelon form.
[23:45] So, now let us put it into reduced row echelon form, to put it into reduced row echelon form,
[23:50] what do I have to do, I have to get rid of this 1 over here. So, let us do that, to do
[23:54] that I have to do R2, sorry, R1 minus R2. So, I have 1 0 0 and then 0 1 0 and then 1
[24:17] minus, minus 3, that is 4, and then minus 3 and 0, and then 1 minus 1, which is 0. So,
[24:29] 0 1 and minus 3, we could actually have skipped this step but I am doing it just because I
[24:37] want to stick to the procedure.
[24:39] So, this is in reduced row echelon form. So, this is our R, this is our c. So, let us write
[24:45] down Rx equals c. So well, so R is is reduced row echelon form. So, I can read off all the
[24:53] solutions. And now you have to be slightly careful and carefully observe the following.
[25:03] Look at this last thing over here. So, you have a 0 row in the, on the left meaning in
[25:10] R, you have a 0 row, but the corresponding constant is not 0.
[25:18] So, as soon as that happens, what do we know? We know that this does not have solutions,
[25:33] meaning there is no solution to this equation, maybe that is how I should write it. So, there
[25:37] is no solution to this system. So, this system does not have solutions. And because this
[25:57] system does not have solutions, neither does Ax equals b. So, therefore, Ax equals b does
[26:05] not have solutions. And of course, what does Ax equals b, A is this matrix here 1 1 1 0
[26:15] 1 minus 3 2 1 5, and b was the column 2 1 0. Now, we wrote down the explicit system
[26:21] in the previous slide. So, we have, we have shown an example where we can use this method
[26:29] to also check when a system does not have any solution.
[26:36] So, I hope both these examples are, have cleared up any residual doubts, I will just make a
[26:44] comment before I move ahead, I need not have done this last step. Anytime in this procedure,
[26:49] when you hit this kind of situation where you have a zero row, and the corresponding
[26:55] entry in your, in your constants, on the other side of the vertical line is nonzero, we are
[27:05] saying that in your, you have an equation of the form 0 times x1 plus 0 times x2 plus
[27:12] 0 times x n is equal to something nonzero.
[27:15] Of course, this cannot have a solution. And you can stop right there and say this does
[27:19] not have any solutions. But if you feel, sort of uncomfortable with stopping in the middle,
[27:27] and especially if you want to program this into a computer, then you might as well finish
[27:32] the entire method. So, this is the power of the Gaussian elimination method, you can find
[27:40] out all the solutions of a system of linear equations.
[27:43] So, let us study a particular case, we have studied this in a previous video, namely the
[27:51] homogeneous system of, system of linear equations. That means Ax equals 0, equals 0. So, remember
[27:57] that for x equals 0, we always have a solution, namely, x equals 0. If you put each of your
[28:04] variables to be 0, then certainly this system is solved. So, 0 is always a solution. So,
[28:10] you cannot have a situation where there is no solution for such a system.
[28:17] So, homogeneous system always has a solution. So this is called the trivial solution, the
[28:23] solution Ax equals 0 is called the trivial solution. And of course, that also means that
[28:29] the other solutions, so if you have a solution, which is not 0, meaning there is some xi,
[28:34] which is not 0, then that is called a non trivial solution. So, for a homogeneous system,
[28:39] there are only two different possibilities. One is that the 0 is the unique solution.
[28:44] So, remember that 0 is always a solution, whatever happens. So, if there is a unique
[28:48] solution, then it must be 0. So, 0 is a unique solution. That is one possibility.
[28:54] The other possibility is that there are infinitely many solutions other than 0. And how do we,
[29:02] how do we get this? Remember that if, if you have
[29:11] more than one solution, then you have infinitely many solutions. And why is that? That is because
[29:18] if you have more than one solution, then the only way to get that, that situation is if
[29:26] one of your variables is a, is an independent variable.
[29:30] And as soon as you pick up an independent variable, you have an infinitely, you have
[29:34] infinitely many solutions. That is what they say. The other way of thinking about this
[29:45] is that suppose you have a solution, let us say, so you have Ax equals 0 and x1 equals
[29:59] let us say w1, x2 equals w2, and so on xn equals wn is a solution, then so is x1 equals
[30:19] t times w1, x2 equals t times w2, and xn equals t times wn.
[30:30] Because if you substitute x1, to be t times w1 etc., in A times x, then what will happen
[30:39] is the left hand side will be t times A 1 1, let us take the first equation, so, I have
[30:49] A 1 1 x1 plus A1 2 x2 plus A 1 n xn is 0. And I know that A 1 1 w1 plus A12 w2 plus
[30:57] A1n wn is indeed 0. But now, if you substitute t times w1 times w2 and so on in that equation,
[31:05] then you will have A11 times t times w1 plus A1 1 times t times w2 plus A1 n times t times
[31:12] wn and you can pull out the t common and then you will get t times A11 w1 plus A12 w2 plus
[31:20] A1n wn, which we know is 0.
[31:23] So, that is t times 0, which is 0. So, that is, that is the other way of thinking about
[31:28] this. So, if you have a homogeneous system, that is something special. So, in a homogeneous
[31:37] system of equations, if there are more variables than equations, then it is guaranteed to have
[31:43] non trivial solutions, why is this? So, what is what is being said here, so, you have n
[31:50] variables remember and m equations. So, you have a matrix of size m by n, where these
[32:02] rows are corresponding to equations and columns are corresponding to variables.
[32:08] So, now, if you have more variables than equations, then what happens, then when you put it into
[32:18] reduced row echelon form, when you have any, only m rows, but you have n columns, and n
[32:25] this strictly greater than m, so, the leading coefficients, the leading ones can occur only
[32:29] in at most in many places. So, there will be some columns, which do not have leading
[32:35] ones, that means, there are some independent variables. And as soon as you have independent
[32:41] variables, you will have an infinite number of solutions. So, in particular, you will
[32:48] have nonzero solutions or non trivial solutions.
[32:51] In this video, you have studied the Gaussian elimination method, where we put together
[32:56] the fact that we can find the solutions for a matrix in reduced row echelon form, the
[33:02] coefficient matrix is reduced row echelon form, along with the fact that any matrix
[33:06] can be reduced to reduces row echelon form, using elementary row operations. Those were
[33:11] the contents of the last two videos. And this is a much more powerful method, it is far
[33:15] more efficient than the previous methods, even when your matrix A is invertible.
[33:20] So, this is a, this is a method that you will actually use in practice, and it is much more
[33:28] efficient. And even to compute the inverse of A rather than computing all the miners
[33:33] and so on this method is far more powerful also to compute the determinant which we did
[33:38] in the previous video. So, Gaussian elimination method is the most powerful method we know
[33:43] in these contexts. And we have seen explicitly using it, how to find all the solutions, we
[33:51] can check whether there is a solution at all and then we can take which, once we know there
[33:55] is at least one which of those are solutions.
[33:58] And finally, we have seen for homogeneous equations. That is for a homogeneous system,
[34:04] 0 is always a solution. So, the question is, are there other solutions? And we also know
[34:11] how to find those, again using Gaussian elimination method. Thank you.