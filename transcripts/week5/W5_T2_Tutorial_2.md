# W5_T2: Tutorial 2

**Week:** Week 5
**YouTube URL:** https://www.youtube.com/watch?v=R5S2bPGErWs

---

## Transcript

[00:15] In this video, we are going to solve system of linear equation using Gauss elimination.
[00:19] Basically, we will take some examples and see how we can use in our row operations to
[00:25] solve the system of linear equations.
[00:27] So, let us consider this system of linear equation first.
[00:32] So, which is written as minus x1 plus x2 minus x3 equal to 0.
[00:41] Let us consider the second equation to be 2 x1 plus 2 x2 minus 2 x3 equal to 2 and the
[00:51] third equation to be x2 plus x3 equal to minus 1.
[00:57] So, these three equations make this system of linear equation, so we can write the corresponding
[01:07] matrix of this system of equation as minus 1, 1, minus 1; 2, 2, minus 2; 0, 1, 1.
[01:23] So, if you see the first equation, the coefficient of x1 is minus 1 which I write in this first
[01:30] place.
[01:31] Coefficient of x2 is plus 1, coefficient of x3 is minus 1.
[01:34] Similarly, coefficient of x1 in the second equation is 2, coefficient of x2 is also 2
[01:43] and coefficient of x3 is minus 2.
[01:45] There is no x1 in the third equation.
[01:48] So, the coefficient is 0.
[01:50] The coefficient of x2 is 1 and coefficient of x3 is also 1.
[01:54] So, this is basically the coefficient matrix.
[02:05] We generally denote it by A. The variable we can write in this matrix, x such that this
[02:15] is a column matrix, x1 x2 and x3.
[02:19] So, if you multiply A with x, you will get a, so A is a 3 cross 3 matrix and this is
[02:29] a 3 cross 1 matrix.
[02:31] So, A x will be a 3 cross 1 matrix and that is basically these terms, constant terms,
[02:40] these 3 X 1 matrices, we generally denote it by b.
[02:43] So, b is 0, 2, minus 1.
[02:48] So, this gives us this form Ax equal to b where A is our coefficient matrix and b is
[02:55] basically the right hand side of the equations.
[02:59] So, if we take A and there is a line in between and then we write b, this is known as the
[03:06] augmented matrix.
[03:10] So, using this augmented matrix, we can solve this system of linear equation.
[03:18] So, let us see how we can do it.
[03:21] So, let us write the augmented matrix first for this system of equation.
[03:26] So, augmented matrix will be minus 1, 1, minus 1; 2, 2, minus 2; 0, 1, 1 and then b is our
[03:38] 0, 2, minus 1 and we put as line in between them to separate these two.
[03:43] So, this is our augmented matrix in this system of linear equation.
[03:49] So, let us start with this augmented matrix.
[03:51] So, our first element, first non-zero element in first row is minus 1.
[03:57] We have to make it 1.
[04:00] So, basically we will try to make it in reduced echelon form so, at first, we have to make
[04:06] the first pivot element to be 1.
[04:09] It is minus 1, so basically we will do minus of R1 which will gives us 1, minus 1, 1, 0
[04:19] and the remaining rows will be same.
[04:22] Now, we have to make this element to be 0.
[04:29] Basically, we have to make all the elements in the first column except the first pivot
[04:33] element to be 0.
[04:35] The third element, third row, the element in third row is already 0, so we have to make
[04:40] only the element in the second row to be 0.
[04:43] So, what we have to do?
[04:45] We have to multiply 2 with the first row and subtract it from the second.
[04:52] So, R2 minus 2 R1.
[04:54] So, let us see what it will be give us.
[04:59] The first row will remain unchanged, the second row will be 0, then 2 minus of minus 2, that
[05:07] is 4 and here it will be minus 4, here it will be 2 and the third row will remain as
[05:16] it is.
[05:18] Now, the first non-zero element in the second row is 4, so this is our pivot element, we
[05:24] have to make it 1.
[05:25] So, what we will do?
[05:27] We will take 1 by 4 of R2.
[05:29] So, it will give us 1 minus 1, 1, 0, first row will remain unchanged.
[05:35] So, this will give us 1 minus 1 and here it will it be half.
[05:38] And the third row will remain unchanged.
[05:43] Now, we have to make the element below this pivot element to be 0.
[05:51] So, we have to make this one to be 0.
[05:54] So, basically we have to just subtract R2 from R3.
[06:00] So, we will get the first row will be same because we are not doing any operation on
[06:06] that.
[06:07] The second is also same.
[06:10] And the third one will be 0 and this will be 1 of minus 1, that is 2 and minus half,
[06:19] minus 1, that will be minus 3 by 2.
[06:25] Now, the first non-zero element in the third row is 2.
[06:30] So, we have to make it 1.
[06:32] So, we will do half of R3, it will give us 1, minus 1, 1, 0, 0, 1, minus 1, 1, 0, 0,
[06:40] 1, minus 1 half, 0, 0, 1 and minus 3 by 4.
[06:47] So, this is already, now this is in row echelon form.
[06:53] So, using this row echelon form itself we can solve this equation.
[06:58] Or else, we can go to the reduced echelon form to solve this equation.
[07:02] For that, we have to make all these element to be 0.
[07:05] But before going there, from here, let us try to solve this equation.
[07:10] So, what is this?
[07:12] Here, this first portion, this first 3 by 3 portion is basically our new coefficient
[07:17] matrix after row echelon form, after this set of row operations.
[07:23] So, this is our new matrix R, Ax equal to b where R dash is 1, minus 1, 1; 0, 1, minus
[07:35] 1; 0, 0, 1, this is my R dash, our x will remain same and our new b prime, so this will
[07:46] be b prime, will be this.
[07:51] So, the new equations are x1 minus x2 plus x3 is 0, x2 minus x3 is half and x3 is minus
[08:05] 3 by 4.
[08:06] So, from the last one, what we are getting?
[08:09] x3 is equal to minus 3 by 4.
[08:11] So, we are basically solve the value for x3.
[08:14] Now, if we put x3 in the second equation, we will get x2 minus x3 which is minus 3 by
[08:21] 4, so it will be plus 3 by 4 equal to half which gives us x2 equals to half minus 3 by
[08:27] 4 which is minus 1 by 4.
[08:36] And now, we have got x2 and x3 and if we put this in the first equation which is x1 minus
[08:46] x2 means 1 by 4 plus x3 means minus 3 by 4, that is 0.
[08:51] So, x1 will be, so we get x1 is half.
[09:06] So, we have solved the equation and we get x1 to be half, x2 to be minus 1 by 4 and x3
[09:19] to be minus 3 by 4.
[09:21] So, this is the solution and you can see that this is a unique solution.
[09:25] So, this system of linear equation has unique solution and the solution is given by this.
[09:36] Now, in this example, we have already seen that this is in row echelon form.
[09:43] So, let us try to reduce this further to reduce row echelon form.
[09:49] So, basically, we have to make these 3 element 0.
[09:54] So, for making the element in the first row in second column to be 0, we have to basically
[10:04] add the second row to the first one.
[10:08] So, R2, R1 plus R2, this will give us 1, 0, 0, 0, 1, minus 1, here it will be half because
[10:25] we are adding the second row.
[10:26] So, this will be unchanged, the second row will remain unchanged and the third row will
[10:33] also remain unchanged.
[10:34] So, we have already made this first row in 1, 0, 0.
[10:40] So, only one element is remaining now, this minus 1.
[10:44] So, what we have to do, we have to add the third row to the second row, so R2 plus R3.
[10:50] So, it will give us 1, 0, 0, half.
[10:54] So, first row will remain unchanged, 0, 1, 0 and half minus 3 by 4 and 0, 0, 1 minus
[11:05] 3 by 4, the third row will remain unchanged so which is nothing but this matrix, half,
[11:10] 0, 1, 0 half minus 3 by 4 is minus 1 by 4, 0, 0, 1 minus 3 by 4.
[11:20] So, you can see that this is in row echelon form or reduced row echelon form.
[11:30] So, our new matrix, R double prime x is b, where R double prime is the identity matrix,
[11:44] x is same, our variables and b is half minus 1 by 4 and minus 3 by 4.
[11:54] So, you can see that x1 is half, x2 is minus 1 by 4 and x3 is minus 3 by 4.
[12:02] So, from reduced row echelon form, we can directly solve this equation.
[12:07] Or else, what we have done in the previous page, from the row echelon form, we solve
[12:13] the equation by putting the values form the last variable, x3.
[12:17] So, here these operations are doing the same thing in matrix form rather than putting the
[12:24] values of the variable from the last.
[12:27] So, this is the solution of the system equation we have taken and this is the unique solution
[12:34] for this system.
[12:41] Now, let us see the geometric representation as we have seen in the earlier week.
[12:47] So, the first equation here was minus x1 plus x2 minus x3 equal to 0.
[12:54] So, in x, y, z plane, so suppose, our x1 is basically the variable x, the x2 is variable
[13:02] y and the x3 is variable z, so we can represent these as a plane in this x, y, z coordinate
[13:10] system.
[13:11] So, the first equation will denote this plane, it will pass through origin, as you can see
[13:17] and this is the plane minus x1 plus x2 minus x3 equal to 0 rather, minus x plus y minus
[13:26] z equal to 0.
[13:29] So, the second plane will look like this, second plane was 2 x1 plus 2 x2 minus 2 x3
[13:39] equal to 2.
[13:42] In this coordinate system, it is 2 x plus 2 y minus 2 z equal to 2.
[13:46] Basically, we are changing the variable x1, x2, x3 to x, y, z to identify this in this
[13:53] coordinate system because in general, in coordinate system, we take the variable to be x, y and
[14:00] z.
[14:01] So, this is the second plane.
[14:02] And the third plane will look like this, that was y plus z equal to minus 1.
[14:08] So, in the equation it was x2 plus x3 equal to minus 1.
[14:12] So, this is the third plane.
[14:20] Now, let us see the first and the second equation where they intersect with each other.
[14:28] So, this is the first plane and this is the second plane.
[14:32] So, in this straight line, they will intersect with each other.
[14:37] So, this is the solution of the first two equation.
[14:48] Now, if we see the second and third equation, you will see, so this is the third equation,
[14:58] so this is the solution of second and third equation which is given by this straight line.
[15:05] So, in this straight line, these two plane intersect with each other.
[15:10] So, let us consider the three equation at a time and see where they are intersecting.
[15:15] So, there are two line, where one line denotes the solution of first two equation and the
[15:22] second line denotes the solution of second and third equation.
[15:26] And you can see that one point, these two points are intersecting and that is basically
[15:31] the solution of these three equation where these three plane are intersecting with each
[15:36] other.
[15:37] So, this point is basically the solution of these three plane.
[15:44] So, the intersection of these three plane is there and the solution of the three equation,
[15:49] we have considered.
[15:50] So, as these three plane are intersecting at a single point, the solution is unique.
[15:56] Thank you.