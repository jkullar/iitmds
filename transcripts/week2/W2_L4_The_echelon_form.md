# W2_L4: The echelon form

**Week:** Week 2
**YouTube URL:** https://www.youtube.com/watch?v=6N8owlkf9AQ

---

## Transcript

[00:14] Hello and welcome to the maths 2 component of the online BSc course on Data Science.
[00:20] In today's video we are going to talk about the echelon form. So, the Echelon form is
[00:26] a particular form for a matrix and when the matrix is in this form, we can read off solutions
[00:32] quite easily.
[00:33] So, let us look at, let us recall first what is the system of linear equations. So, a general
[00:40] system of m linear equations within n unknowns is like this a 1 1 x 1 plus a 1 2 x 2 plus
[00:50] a 1 n x n is b 1 and then all the way up to a m 1 x 1 plus a m 2 x 2 plus a m n x n is
[00:59] bm. So, there are n unknowns, which is the xi s and there are m equations. So, for each
[01:08] equation we have a constant on the right-hand side. So, the i th equation that constant
[01:13] is bi.
[01:14] We have seen earlier that, we can write this in a vector form in a matrix form that is,
[01:20] so we consider the m by n matrix A, which is a matrix of coefficients and x is the vector
[01:27] of unknowns x1, x2, xn and b is the vector of constants, the column matrix b1, b2, bm
[01:36] And then what is the solution?
[01:41] So, solution is an assignment of values for x so that the equations are satisfied. So,
[01:46] when you put xi is equal to some particular number and for each xi I put in a number and
[01:53] when the equation holds true, that means, indeed when you compute a 1 1 times whatever
[01:59] value you have substituted for x1 plus a 1 2 times whatever value of substitute for x2
[02:03] plus a 1 n times whatever value you have substituted for xn is b1 and the same thing happens for
[02:10] all the other equations, then we say that those particular values that we have substituted
[02:17] constitute a solution for x1, x2, xn.
[02:22] So, let us look at the example of this matrix. So, we have A is the matrix with first row
[02:30] 1,0,2, and second row 0,1,3. So, let us see how we can find out solutions for this. So,
[02:37] here, I am going to write down what the corresponding equations are, of course, here I have not
[02:45] mentioned what the constants are. So, let us take the equation A x equals 0. So, this
[02:53] is called a homogeneous system, which we will study later. So, the corresponding equations
[02:58] are going to be x1 plus 2 x3 is 0 and x2 plus 3 x3 is 0.
[03:09] So, now, typically, what do we do, we try to manipulate around and find values for x1,
[03:15] x2, x3. If you look at this, this is not really much we can do to manipulate this and the
[03:20] reason is that we can have many, many solutions. So, how do we find solutions? So, you can
[03:30] see from these equations that x1 is minus 2 x3 and x2 is minus 3 x3 and that is all
[03:41] that we need, in order to get a solution. So, whenever we have, we substitute a value
[03:46] for x1, which is negative 2 times the value for x3 and x2, which is negative 3 times the
[03:52] value for x3, we get a solution.
[03:54] So, you can put x3 equals some constant c and then let us say I take x3 equals 5. So,
[04:03] if x3 is 5, then to get my solution, what I can do is I can put x1 is minus 10 and x2
[04:11] is minus 15 and indeed, the one possible solution then is x is equal to minus 10, minus 15,
[04:23] and 5, so 5 was an arbitrary choice for x3, I could have used some other number. So, for
[04:29] example, if I use x3 is c, then I get x1 is minus 2c and x2 is minus 3c.
[04:41] So really, the set of solutions for this, we can write this as minus 2c, minus 3c, and
[04:53] c where c can be any real number. So, we can have c is 5, c is 20, c is 1 million, whatever
[04:59] you want and all of these, for each value of c we will get a solution. So, we have infinitely
[05:06] many solutions, that is the first thing we observed and not only that, we in fact see
[05:12] that we can get these all these solutions in a very particular way, we can really do
[05:17] this for any b.
[05:19] So, if you carefully observe what we did, instead of Ax is 0, if we had Ax is b, we
[05:26] can obtain solutions for Ax is b as well, maybe I will describe this very fast. So,
[05:33] for Ax is b, what do we do, for Ax is b, what, what we do is we write down again, the same
[05:40] set of equations, the equations are x1 plus 2 x3 is b1 and x2 plus 3 x3 is b2. And from
[05:52] here, we can move x3 to the other side and then whatever value of x3 we have, we can
[06:00] read off the values of x1 and x2 and each time we will get a solution. So again, we
[06:04] have an infinite number of solutions.
[06:06] So, there was something particularly easy about this matrix, we could read off all the
[06:15] solutions not only to Ax is 0, but Ax is b any b. So, matrices of this form, have a particular,
[06:22] there is a name for this form, it is called the Row echelon form and that is what we are
[06:26] going to study in this video.
[06:28] So, when it is said to be in Row echelon form. So, it is said to be in Row echelon form,
[06:36] if the first non-zero element in each row called the leading entry is 1. So, whenever
[06:42] you have a row and it is a non-zero row, so you could have 0 rows of course, if it is
[06:48] a non-zero row, then there will be a first element which is non-zero as you move from
[06:53] left to right. And the first such 1 has to be 1.
[07:00] The next axiom for the Row echelon form is that each leading entry is in a column, which
[07:12] is to the right of the leading entry in the previous row. So, like you saw in the previous
[07:18] example, in the first row, the 1 was in the 1 1 th place, in the second row, the 1 was
[07:24] in the 2 2 th place. So, if you consider the second column and you ask, or rather, you
[07:38] consider the second row and you ask where is the leading entry, which is the first 1
[07:44] that you have? It is in the second column and that is to the right of the leading entry
[07:50] in the previous column, which was in the first row.
[07:52] So, broadly speaking, you have to go downwards and to the right, like this, the 1s have to
[08:00] be like this. Let us look at the next requirement. So, rows with all zero elements, so if there
[08:07] are rows, which are entirely 0, then they must lie at the bottom of the matrix, they
[08:12] must come at the end, so they must be below those rows, which have a non-zero element.
[08:17] So, these 3 are the requirements for a matrix to be in Row echelon form and then, if you
[08:28] want the matrix to have one further property, which is the following, that for a non-zero
[08:37] row, if you look at the leading entry, you look at that first one that you have and then
[08:42] you look at the column in which the entire column. So, already the requirement that the
[08:48] second requirement that each leading entry in the column to the right, tells you that
[08:52] below this 1 everything is 0, you cannot have anything non-zero below this 1. But you could
[08:58] have non-zero entries above this 1. So, we call it, we say it is in the reduced Row echelon
[09:04] form, if the entries above that leading 1 are 0.
[09:09] So, the previous example that we had, which was 1 0 2, and 0 1 3, this is indeed in reduced
[09:23] Row echelon form. So, first of all, it is in Row echelon form. Let us check that. So,
[09:29] the first non-zero element of each row is a 1 indeed, that is the case because what
[09:34] is the first non-zero element in each row, well this is the first non-zero element, this
[09:38] is the first non-zero element and both of them are 1s.
[09:42] And then the second requirement is that if you have a leading entry, you will look at
[09:48] the column and all the leading entries in rows before that must be before it, so this
[09:58] one over here this is in the second column, so if you look at the previous row, the 1
[10:05] is in the first column. So, that is okay, that is exactly what we want. So, this is
[10:15] satisfied and this is satisfied and rows with all zero elements, well, there is no such
[10:20] row, so this is satisfied.
[10:21] And now let us talk about reduced Row echelon form. So, it says, if you take these ones,
[10:27] then the entire column other than that 1 is 0. Indeed, below this, the first 1 there is
[10:32] a 0 and above the second 1, there is a 0, so that is also satisfied. So, we have seen
[10:42] that in our previous example, indeed, satisfied this. So, it was not the reduced Row echelon
[10:47] form and we could read off the solutions to Ax equals b very easily.
[10:55] So, let us do another example. So, here is a matrix, which is in Row echelon form. So,
[11:03] the first in each non-zero n row. So, all 3 rows are non-zero, the first non-zero term
[11:08] is indeed 1 is that the case indeed, that is the case. 1, 1 and 1 and then whenever
[11:15] you have a leading term, so you have this 1 over here, this is in the fourth column,
[11:22] so the 1s which are in the previous columns, so the 1 in the previous column, it is before
[11:28] this it is in the third column. So, that matches up and then the 1 above this is in the first
[11:36] column, so that matches up.
[11:38] So, your 1s have to sort of go diagonally, but like this not, there cannot be 1 below
[11:48] 1, 1 to the below and left, it has to be below and right. So, this is in reduced echelon
[11:58] form. So, let us ask, this is in Row echelon form? Is it in reduced Row echelon form? So,
[12:09] for it to be in the reduced Row echelon form? For the leading terms, we have to look at
[12:15] the columns and ask, are all the other entries 0? Well, that is certainly not the case over
[12:20] here because here is a non-zero entry, here is a non-zero entry, here is a non-zero entry,
[12:26] so this is not in reduced Row echelon form, this is in Row echelon form. So, let us look
[12:33] at another example.
[12:36] And we can do the same analysis for the second example. In fact, these matrices look very
[12:41] similar and there is a way of going from one to the other, which we are going to study
[12:47] in the next video. So, let us look at this matrix over here. Is this in Row echelon form?
[12:53] Well, certainly all the leading terms are 1, all the 1s which are leading terms come
[12:59] to the right of the ones which are in the previous rows and there is no non-zero row,
[13:06] so the third axiom is requirement is satisfied easily.
[13:09] But this has a further property that not only is it in Row echelon form, it is in the reduced
[13:16] Row echelon form, because now, these entries over here are indeed zeros and that is a requirement
[13:22] for reduced row echelon form. So, this matrix is in row echelon form, this matrix, the first
[13:29] one is in row echelon form. But it is not in reduced row echelon form
[13:50] and this is in reduced row echelon form. And of course, if it is in reduced row echelon
[13:56] form, it is already in row echelon form because reduced is a stronger requirement.
[14:04] So, let us do the analysis that we did in the example that we saw earlier in this video,
[14:13] so let us ask what is the set of solutions for this? So, if we want, let us say Ax is
[14:23] 0, A r ref x is 0, what do we do, we write down again the system of equations. So, 1
[14:31] plus 2 x 2 is 0, or maybe let us do b, let us do the general case, let us do b. So, b,
[14:40] so this is b1 and then x3 is b2 and then x4 is b 3. So, now I want the set of solutions
[14:51] for this. So, already we know what is x3 and x4, x3 and x4 are fixed they are b3 and b4
[14:58] and for x1, what do I do? Well, I can do what we did before.
[15:01] So, I can say x 1 is 1 minus 2 x2 and then if I choose a value for x2, automatically,
[15:09] I can get a solution by substituting that value in this equation and getting and substituting
[15:15] x1 to be that particular number. So, if I take x2 to be constant some c, then I can
[15:22] get x1 to be b1 minus 2 c. So, this gives me a solution. So, what is the solution? The
[15:30] solution is x is b1 minus 2c, c, b2, and b3, this is my solution for Ax is equal to b and
[15:46] now whatever value of c you substitute, will give you a solution.
[15:50] So, if you take c to be 0, for example, then your solution will be b1, 0, b2, b3. If you
[15:56] take c to be 5, let us say then your solution will be b1 minus 10, 5, b2, b3. So, you can
[16:04] see that I can read off solutions for these matrices in this way and not just some solutions,
[16:13] we can in fact get read off all solutions. This is the only way we can get solutions
[16:17] for these matrices and this is how, this is the use of the row echelon form or the reduced
[16:24] row echelon form.
[16:25] So, solutions of Ax is b when A is in reduced Row echelon form. We did not do one small
[16:31] case in the examples, but I will state it here before I talk about the general situation.
[16:37] So, let Ax is b be a system of linear equations and suppose A is in reduced row echelon form.
[16:45] Suppose for some i, the i'th row of A is a 0 row, but bi is non-zero. So, the i'th row
[16:53] of A is 0, but the corresponding constant bi is not 0, then this system has no solution.
[17:04] You can think of for a second and if you still cannot see why then here is the reason. So,
[17:12] we can write down the corresponding system of equations and if you write down the system
[17:16] of equations, what will the i th equation look like, the i th equation will look like
[17:20] 0 times x1 plus 0 times x2 plus 0 times xn because the entire i th row of A is 0, so
[17:28] the constants, the coefficients there are 0.
[17:32] But on the right-hand side, you have bi, so we want that 0 times x1 plus 0 times x2 plus
[17:37] 0 times x n is bi. Now the left-hand side, it does not matter what the xi s are, what
[17:46] values you put inside xi s, the left-hand side will always evaluate to be 0. So, if
[17:54] b is non-zero, then there is no hope of getting a solution. Whatever values of x1, x2, xn
[17:59] and you take this equation cannot be satisfied.
[18:02] So, there is no possible solution for this system of equations. So, the key point is
[18:09] that there if row of A is 0, then the corresponding constant bi must be 0, in order for there
[18:20] to be a solution, otherwise there cannot be a solution, there will not be a solution,
[18:25] we have seen why? So now, let us look at the case where such a thing does not happen. So,
[18:33] whenever we have 0 rows in A then the corresponding constants bi are 0.
[18:40] So, solutions again. So, suppose we have Ax is b and A is in the reduced Row echelon form.
[18:47] So, assume that for every zero row of A, the corresponding entry of b is also 0. So, that
[18:53] means if the i'th row of A is 0, then b is also 0, then we can apply the procedure that
[19:00] we saw in the examples that we did before. So, we are going to give some names here,
[19:05] so that we make this procedure very algorithmic.
[19:09] So, if the i'th column has the leading entry of some row there are going to be some columns,
[19:15] which have leading entries. In our first example of where we had 1 0 2, and 0 1 3, the leading
[19:22] entries were in the first column and the second column respectively. So, then we will call
[19:29] xi as a dependent variable. So, in that first example, since the leading entries were in
[19:33] columns 1 and 2, x1 and x2 are going to be dependent variables.
[19:40] And if the i'th column does not have the leading entry of some row, we call x i an independent
[19:45] variable. So, all the other variables are independent variables. So, in that first example,
[19:51] the independent variable is x3. In the second example, the independent variables where x2.
[20:00] So, let us maybe write that down. So, we had 1, 0, 2, 0, 1, 3. So, here x1 and x2 are dependent
[20:21] and x3 is independent. And in the second example, well, we had I think 1 2 0 0, and then 0 0
[20:37] 1 0, and then 0 0 0 1. So, here are the leading columns the leading entries are in columns
[20:47] 1, 3 and 4 respectively.
[20:51] So, x1, x3, x4 are dependent variables and x2 is an independent variable and you saw
[21:02] this reflected in the solutions, why we are calling it independent. So, if you remember
[21:06] how we solve this in the first one, we took x3 to be, fixed x3 to be some arbitrary c
[21:14] and then from there we got what is x1 and x2. And similarly, in the 2nd example, we
[21:19] fixed x2 to be some arbitrary c and then x1, x3, and x4 for fixed, so that is what we are
[21:25] going to do.
[21:28] Assign arbitrary values to the independent variables and then for a dependent variable,
[21:34] what happens? There is a unique equation in which it occurs. So, if you look at the first
[21:41] example, 1 0 2 and 0 1 3, x1 occurs exactly in 1 equation, it occurs in no other equation.
[21:49] Similarly, for the second example, if you look at x1 it occurs in only 1 equation, x3
[21:54] occurs and only 1 equation, x4 occurs in only 1 equation.
[21:58] So, from those equations, we can find out their values. So, all other variables in that
[22:06] equation are independent variables. That is why that is a power of the reduced row echelon
[22:12] form. Because all the other column with a leading 1, the entries, all the other entries
[22:21] are 0, so no dependent variables can occur together. In a single equation, you will have
[22:27] only 1 dependent variable, if at all. So, all the other equations, variable in that
[22:34] equation are independent variables and we have assigned values to them. So, from there,
[22:39] I can move them to the right-hand side and get the value of the dependent variable and
[22:49] then if we put all these together the obtained values for xi give a solution to the system.
[22:54] And, in fact, every solution can be obtained in this way, that is what we saw in the 2
[23:01] examples that we did. So, the conclusion here is, if A is in the reduced row echelon form,
[23:07] this very easy procedure, it is an algorithm. Let us recall what it is, you find out what
[23:12] are the leading ones, the corresponding columns, the column numbers will tell you what are
[23:21] the dependent variables, all the other ones are the independent variables.
[23:26] For the independent variables, you assign arbitrary values and then calculate the values
[23:32] of the dependent variables from the corresponding equations. So, this procedure provides us
[23:39] with all the solutions of Ax is equals b. Thank you.