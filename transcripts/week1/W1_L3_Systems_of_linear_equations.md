# W1_L3: Systems of linear equations

**Week:** Week 1
**YouTube URL:** https://www.youtube.com/watch?v=WzR4NKeLHMY

---

## Transcript

[00:14] Welcome to the maths 2 component of the online B.Sc degree in data science. In today's video
[00:21] we are going to look at systems of linear equations. So, what are the contents of this
[00:26] video? So, let us see what is there, what is the system of linear equations? What is
[00:33] its relation with matrices? And finally, how many solutions can it have? So, these are
[00:39] the three things we are going to see today.
[00:42] Let us begin with an example, so in this example we have 3 buyers and we have 3 items, so buyer
[00:50] A buys rice 8 kg s of rice, 8 kg s of dal and 4 litres of oil, buyer B buys 12 kg s
[00:57] of rice, 5 kg s of dal and 7 litres of oil and buyer C buys 3 kg s of rice, 2 kg s of
[01:05] dal and 5 litres of oil.
[01:08] So, suppose these buyers paid some amount of money to the shopkeeper, namely A paid
[01:17] rupees 1960, B paid rupees 2215 and C paid rupees 1135, so I have this data. Now, we
[01:28] want to find the price of each item using this data. So, how do I write this as a system
[01:34] of linear equations? So, we will assume that the price of rice is rupees x per kg, we will
[01:43] assume that the price of dal is rupees y per kg and we will assume that the price of oil
[01:49] is rupees z per litre.
[01:52] So, then what do we get for the first buyer? We get that 8 times x, because he bought he
[01:58] or she bought 8 kg of rice, so 8 times x plus 8 times y 8 kg s of dal plus 4 times z is
[02:09] 1960. Similarly, we get the next two equations. So, this is what a system of linear equations
[02:17] looks like and now from this data we would like to solve this system and get what is
[02:24] the price of rice, dal and oil.
[02:27] So, I am going to quickly solve this. So, I think many of you may have solved such things
[02:34] in school, so how do we solve this? So, maybe we can take the first equation and divide
[02:40] it by 2, so if you do that, we get 4x plus 4y plus 2z is 980, this the first equation
[02:50] divided by 2 and then we will multiply this new equation by 3, so that I get a 12x, so
[02:57] 12x plus 12y plus 6z which is 2940.
[03:04] Then I take this equation and subtract out the second equation over here, I will subtract
[03:12] out the second equation over here, so if I do that, what do I get? So, the 12x is subtracted
[03:19] out and what we get is 7y minus z is 725. So, now we have an equation in terms of y
[03:34] and z, now similarly for the third equation what we can do is we can use the third equation
[03:47] and multiply the third equation by 4, so that we get a 12x.
[03:56] So, multiplying the third equation by 4, we will get 12x plus 8y plus 20z is 4 times 1135
[04:10] and then we will use this equation and subtract out the second equation, so what we get is
[04:20] another equation in terms of y and z, so the equation we get in terms of y and z is 3y
[04:29] plus 13z is 2325, so I will encourage it to do this. So, now we have two equations with
[04:39] two unknowns, namely y and z, so let us try and solve this.
[04:44] So, well we can actually solve this by putting z equals 7y minus 725 and substitute in the
[04:54] second one, so if you substitute in the second one we get 3y plus 13 times 7y minus 725 is
[05:03] 2325. So, if you simplify this what you will get is 94 times y is 11750, so then y is 11750
[05:23] divided by 94 which is 125. So, we have computed the price of dal, it is rupees 125 per kg,
[05:31] so we will substitute y is 125 in this equation over here and we will get z, so z is from
[05:43] here we will get that z is 150.
[05:49] And then now we know y and z, so we will put them in some suitable equation and we can
[05:54] get x. So, x is going to be 45, so I will encourage you to check these. So, what was
[06:07] the point of this? The point of this was we had a real life problem in involving some
[06:12] costs and so on, so we have three equations.
[06:16] And then we use some unknowns to denote the things that we wanted to compute and then
[06:20] we had three linear equations in those three unknowns and then we solve the system of linear
[06:26] equations. And we computed that x is 45, y is 125 and z is 150 which means the price
[06:32] of rice is rupees 45 per kg, the price of dal is rupees 125 per kg and the price of
[06:37] oil is rupees 150 per litre. So, this I hope this convinces you that solving a system of
[06:44] linear equations is something useful.
[06:50] So, what is the system of linear equations? So, before that we have to ask, what is a
[07:00] linear equation? So, a linear equation is something of the form a1x1 plus a2x2 plus
[07:06] anxn is b, this is what a linear equation looks like, this is one linear equation. So,
[07:14] what are the x1 x2 xn these are variables or unknowns, these are the things that we
[07:18] want to compute, this was like the x y z in our previous example.
[07:25] And then what are the a1 a2 an s? These are what are called coefficients, these are going
[07:29] to be real numbers, these are things we will assume, these are numbers will assume that
[07:33] we know. And then b is also a real number. So, here is an example, so 2x plus 3y plus
[07:45] 5z is minus 9 and here x y z and are variables and the 2, 3, 5, are coefficients.
[07:55] So, what is the system of linear equations? So, a system of linear equations, so that
[08:01] means you have several linear equations, we saw what is one linear equation, so it is
[08:08] something of the form a1x1 plus a2x2 plus anxn is b, instead now we have many such equations
[08:15] but in the same set of unknowns, so x1 x2 xn remains the same but the coefficients and
[08:21] the constant at the end change.
[08:22] So, here is an example, so we have 3x plus 2y plus z is 6, x minus half y plus two third
[08:33] z is 7 6th and 4x plus 6y minus 10z is 0. So, I will encourage you to solve this equation
[08:43] similar to how we did it in the first example. So, if you do that you should get the answer
[08:54] x is 1, y is 1 and then 1 is 1. So, what are the unknowns or the variables here?
[09:01] The x, y and z are the unknowns of the variable, so traditionally you represent if you have
[09:05] one unknown it x, if you have two unknowns x and y, if you have three unknown x, y and
[09:11] z and if you have four or more unknowns you take x1 x2 x3 x4 and up till as many unknowns
[09:18] as you have. So, what is the solution to this system of linear equations?
[09:25] That means if you put x equals 1, y equals 1 and z equals 1 in this system here, then
[09:33] these equations are solved. So, let us check that, so 3 times 1 plus 2 times 1 plus 1 is
[09:41] indeed 6, 1 minus half times 1 plus 2 3rd times 1, so let us 1 minus so that is 1 minus
[09:51] so that is half plus 2 3rd which is indeed 7 by 6.
[10:01] And then similarly you have 4 times 1 plus 6 times 1 minus 10 times 1 is 0. So, I hope
[10:14] it means you understand what it means, for a system of linear equations to have a set
[10:21] of solutions, so when you put x, y and z to be some particular numbers then these equations
[10:28] should be satisfied, that means these equality should be true, that means we say we have
[10:37] got solution.
[10:38] So, what is the general system of linear equations? So, you have m linear equations, that means
[10:43] you have m equations and you have n unknowns, so n unknowns mean you have x1 x2 xn, then
[10:49] how do we write these? We write this as a11 x1 plus a12 x2 plus a1n xn is b1, a21 x1 plus
[10:59] a22 x2 plus a2 nx2 is b2 and all the way up to am1 x1 plus am2 x2 plus amn xn, is bm.
[11:10] So, if you want the ith equation, then this is ai1 x1 plus ai2 x2 plus ain xn is bn this
[11:33] is the ith equation in this system.
[11:37] So, what is the connection with matrices? So, this is really important part of this
[11:49] video, so the system of linear equations is equivalent to a matrix equation of the form
[11:55] a times x is b, so in a previous video we have seen what it means to multiply matrices.
[12:01] So, here Ax and b are matrices, so A is an m by n matrix and what are the entries of
[12:09] this matrix? They are exactly the Aij s that we saw in our previous slide.
[12:14] So, this matrix A consists of the Aij s, x is a column vector with n entries, what are
[12:20] the entries? x1 x2 xn exactly or unknowns and b is the column vector b1 b2 bm, so this
[12:31] is A that from our previous slide these are the coefficient, so this A is called the coefficient
[12:43] matrix. What is x? x is a column matrix, so it that means it consist of one column, so
[12:50] it is the column x1 x2 xn, it is a matrix with n rows and 1 column, it is a column matrix
[12:58] consisting of the unknowns.
[13:03] And b is the set of constants, so it is a again a column matrix consisting on the constants.
[13:09] So, this is a m by 1 matrix, this is n by 1 and this is m by n. And now if you multiply
[13:17] these first of all let us ask does it make sense indeed this is m by n and this is n
[13:23] by 1, so it makes sense to multiply these and whatever the product is it will be of
[13:28] size m by 1.
[13:30] So, we are saying that a product is exactly the left-hand side of the system of linear
[13:40] equations that we had on the previous slide and on the right hand side we will have these
[13:46] constant b1 b2 bm. So, the previous system can be expressed in the form ax equals b,
[13:55] so the important part here is that any system of linear equations can be expressed in terms
[14:01] of matrices as a matrix by matrix multiplication. Let us, look at some examples.
[14:09] So, let us look at this example like we had before, 3x plus 2y plus z is 6, x minus half
[14:15] y plus 2 3rd z is 7 6, 4x plus 6y minus 10z is 0, so how do we represent this in terms
[14:23] of matrices? So, in terms of matrices this is the coefficient matrix, so we collect together
[14:30] all the coefficients and put them in the correct places. So, the first row is the 2 1, that
[14:37] is what occurs as a coefficient of in the first equation.
[14:40] The second row is 1 minus half 2 3rd s that is what occurs in the second equation and
[14:45] the third row is 4 6 minus 10, that is what occurs in the third equation. What is x? x
[14:51] is x y z, the unknowns or the variable. And what is b? b is the set of constants on the
[15:01] right, so 6 7 6 and 0 and I will encourage you to multiply A and x.
[15:07] So, multiply A by x and see that you get exactly this thing over here as a column matrix, so
[15:24] you get exactly this as your matrix. This is A times x and this thing on the right is
[15:33] b. And what are the system of linear equations saying? Saying Ax equals b. So, we have rewritten
[15:41] this example as a in terms of matrix multiplication. Let us look at our first example.
[15:50] So, this was 8x plus 8y plus 4z is 1960, 12x plus 5y plus 7z is 2215, 3x plus 2y plus 5z
[15:57] is 1135. How do we write this in terms of matrices? So, the coefficient matrix here
[16:07] is going to be 8 8 4, 12 5 7, and 3 2 5, the matrix x which is a column matrix, that will
[16:28] be x y z and the matrix of coefficients sorry of constants is going to be 1960 2215 1135.
[16:40] And once again, I will encourage you to check that Ax is equal to be exactly captures the
[16:54] systems of linear equations upstairs.
[16:55] Now, I will point out one small strangeness in this entire notation you will see that
[17:04] the matrix here is called x, whereas you also have a variable called x, so be very careful
[17:13] to distinguish between these two, so which one is your variable and which one is your
[17:19] matrix, so when I when we are writing this matrix, this are 3 rows and 1 column, so is
[17:25] the matrix this is a column matrix of size 3, so 3 rows and 1 column.
[17:31] And inside it is the one one entry is x which is exactly our variable inside in our equations.
[17:38] So, this is an unfortunate fact that there is a clash of notations, but that is how it
[17:47] is and it with some practice you will get used to it. So, we have seen two examples
[17:53] of how the connection between system of linear equation and how to represent them in matrix
[18:00] terms.
[18:01] So, now let us talk about solutions, solutions to a linear system. So, we saw I explicitly
[18:07] found out the solutions for the first example and I asked you to check that x is 1, y is
[18:15] 1, z is 1 the solution for the second example, so in general what can we say about solutions
[18:22] of a linear system? So, it turns out that there are only three possibilities either
[18:29] a system has infinitely many solutions or a system has a single unique solution or a
[18:37] system has no solution.
[18:39] So, these are the only three possibilities. So, it cannot happen that a system of linear
[18:49] equation over the real numbers has only three solutions, this is not possible. If it has
[18:57] three solutions it will have infinitely many solutions, it cannot have exactly three solutions,
[19:04] so it can have either 0 solutions, 1 solution or infinitely many solutions.
[19:11] So, let us see examples of where this comes from. So, suppose we have to buyers A and
[19:21] B and buyer A buys 2 kg s of rice and 1 kg of dal, buyer B buys 4 kg s of rice and 2
[19:29] kg s of dal.
[19:31] And they pay 215 rupees and 430 rupees respectively. So, again as in the first example, we want
[19:39] to find out the price of rice and the price of dal, so we put this into the form of linear
[19:48] equations. So, if you follow the first example you will quickly see that this is 2 times
[19:52] x plus y is 215, 4 times x plus 2y is 430. And there are infinitely many x and y satisfying
[20:01] both the equations. So, I will encourage you to find out why that is the case.
[20:09] Let me give you one example, I mean let me at least show you two examples, two solutions
[20:17] and you can find as many more as you want, one solution is x is 0 and y is 215, that
[20:27] is one solution. So, check that indeed this works. Another solution is x is 215 by 2 so
[20:36] that is 107.5 and y is 0. So, this is another solution. And I will encourage you to find
[20:46] more solutions. So, what is happening here in terms of whether some geometry involved?
[20:52] So, let us draw this picture. So, the idea is that if you draw remember that if you have
[21:01] the equations correspond to straight lines, yes, this is something you have seen in math
[21:07] 1, so you have 2x plus y is 215 and 4x plus 2y is 430 and both of them give you the same
[21:17] straight line, so any point on this line is going to satisfy is going to be a solution.
[21:24] So, every point on this line is a solution point. So, now you can find as many solutions
[21:36] as you want. So, this is the geometry behind why it has infinitely many solutions.
[21:44] Let us, do an example where it has no solutions. So, again we have the same situation in the
[21:53] A and B go to the shop by same amount of rice and dal as the previous limit, so 4 kg s of
[22:00] rice and 2 kg s of dal and 2 kg s of rice and 1 kg of dal respectively, but this time
[22:06] the seller gives a discount to B, the seller is in a happy mood the shopkeeper and they
[22:13] give a discount to B.
[22:14] So, A pays 215 rupees and B paid 400 rupees, in the previous example B had paid 430, this
[22:25] time they got a discount of 400 rupees. Now, after returning home, they tried to solve
[22:30] this system again put x and y to be the price of rice and dal respectively, so we get 2x
[22:38] plus y is 215, 4x plus 2y is 400, let us try and solve this system of linear equations.
[22:45] So, if you try and solve this, so let us take the first equation and double it.
[22:51] So if you double the first equation you get 4x plus 2y is 430, on the other hand the second
[22:57] equation is 4x plus 2y is 400, so what does that mean? That means 400 is equal to 430,
[23:08] so there is something really really wrong, this is this is something is going very wrong.
[23:20] So, of course, we know that 400 is not 430 that means there is no x and y for which this
[23:33] can be solved, so there is no solution here. What goes wrong?
[23:40] So, the reason there is no solution here is that if you draw the lines in this case, they
[23:46] are parallel lines, so they would not intersect at all. And the intersection is exactly what
[23:51] will give you the solution. So, in the previous case you had both the equations at the same
[23:59] line, so it was like you are two lines, which were the same, so the intersected in infinitely
[24:03] many points. So, here you have two lines which are parallel they do not intersect at all
[24:08] and so there is no solution.
[24:10] Finally, let us do the example the last example where you have a unique solution. So, in this
[24:19] case buyer A buys 2 kg s of rice and 1 kg of dal and buyer B buys rice 3 kg s of rice
[24:26] and 1 kg of dal.
[24:27] And buyer A pays 215 rupees buyer B pays 260 rupees, let us write down the equation so
[24:33] it is 2x plus y is 253, 3x plus y is 260.
[24:37] And I will encourage you to solve that equation. The point here is you have two lines, 2x plus
[24:44] y is, maybe let us go back 2x plus y is 215 and 3x plus y is 260, so it is clear from
[24:53] here that x is 45 and once we know that x is 45 we can compute that y is, so 215 minus
[25:08] 90, so that is 125. So, this is like in our first example, so the price of rice is 45
[25:18] rupees per kg and the price of dal is 215 rupees per kg.
[25:21] And you can check here that that is exactly where these intersect, so this is on the x
[25:26] axis will intersects at 45 and on the y axis, 125 and that is exactly the point of intersection.
[25:36] So, that is why there is a unique solution. So, you can draw these lines and wherever
[25:42] they intersect is where you have an equation, you have a solution. So, let us recall quickly
[25:48] what we study today.
[25:49] We have studied what is the system of linear equations; we have study now to write it in
[25:54] terms of matrices, particularly using matrix multiplication with unknowns where x was a
[26:02] column matrix of variables. And then we have seen that what is the solution to system of
[26:09] linear equations and then we saw that there are three possible cases either a system has
[26:14] no solution or it has one unique solution or it has infinitely many solutions. That
[26:20] is all for today. Thank you.