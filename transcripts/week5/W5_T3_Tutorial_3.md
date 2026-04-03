# W5_T3: Tutorial 3

**Week:** Week 5
**YouTube URL:** https://www.youtube.com/watch?v=3xjDfMoGlCM

---

## Transcript

[00:15] Hello.
[00:16] Let us consider another system of equations and try to solve that one.
[00:20] So, here we are taking this system of linear equation, x1 minus x3 equal to 0 minus x1
[00:26] plus x2 plus x3 equal to minus 1, x1 minus x2 minus x3 equal to 0.
[00:32] The matrix representation of this system of equations will be like this, Ax equal to b
[00:37] where A is the coefficient matrix which is 1, 0, minus 1; minus 1, 1, 1; 1, minus 1,
[00:48] minus 1 and x is x1 x2 x3, this column vector and our b will be again a column vector 0,
[00:58] minus 1, 0.
[01:00] So, our augmented matrix will be 1, 0, minus 1; minus 1, 1; 1, 1, minus 1, minus 1 and
[01:15] 0 minus 1, 0, that will be the last column.
[01:18] So, this is our augmented matrix.
[01:21] So, the first pivot element is 1 which is the first column and first row.
[01:26] So, at last, we make the element in the second row and first column to be 0.
[01:33] So, we will just add this, R2 plus R1, so it will give us, the first row will remain
[01:42] unchanged, the second row will become 0, 1, this will again become 0 and this will be
[01:48] minus 1 and the third row will remain unchanged.
[01:52] Now, we have to make this element to be 0.
[01:55] So, what we have to do?
[01:57] We have to do R3 minus R1.
[02:01] So, the first two rows will be same and the third row will become 0, minus 1 and this
[02:13] will again become 0 and this is 0.
[02:17] So, this is the third row.
[02:20] Now, the second row, the pivot element is this one, which is in the second column and
[02:28] we have to make the and this is already 1, so we do not have to do anything to make it
[02:33] pivot.
[02:34] And so, we have to make the element below that to be 0, so we have to add R2 to R3,
[02:44] so what we will get?
[02:45] We will get the first two rows will be same as we are not doing any row operation there
[02:52] and the third row will become 0, 0, 0 and this will become minus 1.
[03:01] So, we get a matrix which is in reduced row echelon form, so we will write it Rx equal
[03:16] to b prime, so where R is 1, 0, minus 1; 0, 1, 0; 0, 0, 0.
[03:26] x is x1, x2, x3 and our new b prime is 0, minus 1, minus 1.
[03:33] So, if we do that, we will get x1 minus x3 equal to 0, x2 equal to minus 1 and for the
[03:45] third one we are getting 0 equal to minus 1 which is absurd, this is not possible.
[03:52] So, this system of equation has no solution because from the last row, we are getting
[04:00] 0 equal to minus 1 which is not possible.
[04:06] So, our system equation from where we have started with has no solution.
[04:11] So, let us see the geometric representation of this system of linear equation.
[04:17] So, this first plane look like this which is given by x1 minus x3 equal to 0, so it
[04:23] will look like this.
[04:24] So, this is the representation of the first equation.
[04:31] The representation of the second equation is this plane which is minus x1 plus x2 plus
[04:38] x3 equal to minus 1.
[04:40] So, this is the second plane.
[04:44] The third equation is x1 minus x2 minus x3 equal to 0, so it will pass through origin
[04:51] and this is the third plane.
[04:54] So, if we consider the first and the second plane, we will see that they will intersect
[05:02] at a straight line which is given by this.
[05:11] Now, if we see the first and the third equation, they will again intersect in another straight
[05:21] line, so this will be the straight line where they are intersecting.
[05:29] So, the first and third equation have infinite number of solution and the first and second
[05:34] equation also have infinite number of solution but when you consider in three planes together,
[05:39] we can see the solutions which are two straight lines, they are basically parallel to each
[05:45] other and they are not meeting at anywhere because they are parallel.
[05:49] So, these three planes are not meeting at any point, I mean there is not any point where
[05:56] all these three planes are intersecting each other.
[06:00] So, these three equation has no solution.
[06:05] Thank you.