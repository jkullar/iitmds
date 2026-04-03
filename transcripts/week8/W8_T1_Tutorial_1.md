# W8_T1: Tutorial 1

**Week:** Week 8
**YouTube URL:** https://www.youtube.com/watch?v=AUPInEfil_4

---

## Transcript

[00:14] Hello everyone. Welcome to the tutorial video. So, in this video let us consider a matrix
[00:21] representation of linear transformation. So, suppose I am considering a matrix to be like
[00:32] this 0 0 0 0 0 0 0 0 1 and I am saying that this is the matrix representation of T for
[00:44] some linear transformation T and my ordered basis which I have taken, let us consider
[00:50] it as beta which is nothing but 1, 1, 0; 0, 1, 1, and 1, 0, 1.
[01:04] So, with respect to these ordered basis for some linear transformation T I am getting
[01:11] my matrix representation of this linear transformation to be this A matrix. So, I can write it as
[01:17] T with respect to beta. So, beta for both domain and coronary. I am considering this
[01:26] order basis in both the sets. Now my question is what is the, what is the matrix representation
[01:43] of T? The matrix representation of T with respect to standard ordered basis of R3.
[02:08] So, here what we are doing everything is in R3. So, standard ordered basis of R3 is nothing
[02:14] but 1, 0, 0; 0, 1, 0 and 0, 0, 1. So, we have to find the matrix representation of T with
[02:28] respect to standard ordered basis and so what we do? We will start with this given representation.
[02:36] So, here observe that T 1, 1, 0 is nothing but 0 into 1, 1, 0 plus 0 into 0, 1, 1 plus
[02:51] 0 into 1, 0, 1.
[02:54] So, with respect to these ordered basis beta; with this beta, if I express this first vector
[03:04] T 1, 1, 0, then I am getting the coefficient for these vectors as 0, 0 and 0 and that is
[03:11] what come in this column. So, as this first column is nothing but 0, 0, 0, so the image
[03:16] of this first vector 1, 1, 0 should be 0. That is what the matrix representation is.
[03:22] So, similarly the second column is also 0, so the image of 0, 1, 1 is again the same
[03:34] thing 0 into 1, 1, 0 plus 0 into 0, 1, 1 and 0 into 1, 0, 1; again it will be 0.
[03:43] And what about the third one? The third column is 0, 0, 1, so if I take this last vector
[03:53] 1, 0, 1, so for the first element it will be 0 because 0 is in the first position of
[04:03] the first row of the third column. So, and the second is also 0, but the third will be
[04:13] 1. That is why we get 0, 0, 1 in the third column. So, it will give us 1, 0, 1. So, this
[04:25] is 0 mean 0 comma 0 comma 0 as we are considering in R3. So, these are the images of the given
[04:32] vectors in beta. So, what we get here, just we will write just in the next page.
[04:40] So, let us write what we have got here. T of 1, 1, 0 that is 0. T of 0, 1, 1 that is
[04:59] again 0 and T of 1, 0, 1 this is 1, 0, 1, the same write there. So, this we have got.
[05:14] Now what we have to do? We have to express the standard ordered basis with respect to
[05:18] these ordered basis. So, basically what we have to do? We have to express 1, 0, 0 the
[05:25] first vector in the standard ordered basis in terms of this vectors of beta.
[05:32] So, let me write express 1, 0, 0 as a linear combination of these 3 vectors. So, this is
[05:40] the, like this expression. So, it is a plus c, a plus b and b plus c. So, a plus c will
[06:01] be 1, a plus b will be 0 and b plus c will be 0 again. So, if we solve these 3 equations,
[06:11] then we get our a to be half, b to be minus half and c to be half. If you solve these
[06:26] 3 equations, you will get this as a solution, this is a unique solution.
[06:32] So, 1, 0, 0 is nothing but half of this first vector 1 comma 1 comma 0; minus half of the
[06:44] second vector 0 comma 1 comma 1 plus half of this third vector that is 1 comma 0 comma
[06:54] 1. So, you can express 1, 0, 0 in terms of these vectors in beta. Similarly, we can do
[06:59] for others. So, others I am just writing here. 0, 1, 0 it will be half of 1 comma 1 comma
[07:10] 0 plus half of 0 comma 1 comma 1 minus half of 1 comma 0 comma 1.
[07:23] And for the last one, 0 comma 0 comma 1 is nothing but minus half of 1 comma 1 comma
[07:33] 0 plus half 0 comma 1 comma 1 plus half 1 comma 0 comma 1. So, we expressed all the
[07:46] 3 vectors in standard ordered basis in terms of the basis which was given as beta. So,
[07:53] we got this expression. Now what we have to do? We have to apply T here. So, we have to
[07:58] find the image of T 1 comma 0 comma 0. Similarly, we have to find T of 0 comma 1 comma 0 and
[08:10] T of 0 comma 0 comma 1.
[08:15] Now, if we apply T on 1 comma 0 comma 0 in this expression, so T is a linear transformation,
[08:24] so we can take this scalar out and it will be T half into 1 comma 1 comma 0 minus half
[08:31] into T of 0 comma 1 comma 1 and half into T of 1 comma 0 comma 1. So, for the first
[08:45] two vectors T of 1 comma 1 comma 0 that is 0. T of 0 comma 1 comma 1 that is again 0.
[08:50] So, it is nothing but half into T of 1 comma 0 comma 1 which is the same T of 1 comma 0
[08:59] comma 1. So, we get this vector.
[09:03] Similarly, for the other two we can calculate that T of 0 comma 1 comma 0 is again minus
[09:12] half of 1 comma 0 comma 1 and T of 0 comma 0 comma 1 is half of 1 comma 0 comma 1. So,
[09:27] this we got. Now any vector x, y, z can be written as x into 1 comma 0 comma 0 plus y
[09:40] into 0 comma 1 comma 0 plus z into 0 comma 0 comma 1. So, this we can do. So, T of x,
[09:54] y, z is nothing but x of T of 1 comma 0 comma 0.
[10:02] Again we are using the properties of linear transformation and we are getting this T of
[10:09] 0 comma 1 comma 0 plus z into T of 0 comma 0 comma 1. So, if we write this, if we put
[10:23] the values of T of 1 comma 0 comma 0 which we have calculated, so we get x into half
[10:33] into 1 comma 0 comma 1 minus y into half into y comma 0 comma 1 plus z into half 0 comma,
[10:54] sorry, 1 comma 0 comma 1. So, if we calculate this together and put all the things together,
[11:03] we get half into x minus y plus z, 0, x minus y plus z.
[11:14] So, this is the expression for T of x, y, z which were intended to find. Now we want
[11:22] to find the matrix representation of T with respect to standard ordered basis. So, for
[11:28] standard ordered basis T of 1 comma 0 comma 0 we already have got the image. So, we can
[11:32] just express it in terms of standard ordered basis and we will get this half into 1 comma
[11:39] 0 comma 0 plus 0 into 0 comma 1 comma 0 plus half into 0 comma 0 comma 1.
[11:50] Similarly, for the second one, it will be just minus half in these two places and 0
[11:58] in the middle one. So, this is 0 comma 0 comma 1 and similarly for the third one again it
[12:12] will be half into 1 comma 0 comma 0 plus 0 into 0 comma 1 comma 0 plus half into 0 comma
[12:22] 0 comma 1. So, the matrix representation we got here with respect to standard ordered
[12:28] basis will be half, 0, half, minus half, 0, minus half, half, 0, half. So, this will be
[12:49] the matrix representation with respect to standard ordered basis of the given matrix
[12:53] which we have started.
[12:55] Now, for the same linear transformation which is T x, comma y, comma z is going to half
[13:00] of x minus y plus z comma 0 comma x minus y plus z. For this linear transformation if
[13:07] we want to visualize the kernel, so what we have to do? Basically, this image should I
[13:13] mean, kernel will about all those vectors x comma y comma z so that the image will be
[13:20] 0. So, if the image will be 0, we get x minus y plus z equal to 0 and that will give us
[13:25] y equal to x plus z.
[13:27] So, all these vectors x comma y comma z such that y equal to x plus z and everything is
[13:38] from real x, z is from real, then this vector space is our kernel of T. So, this is our
[13:47] kernel of T. So, what will be the basis of this kernel? So, there are two independent
[13:56] variable x and z so we can get kernel as the span of these two vectors. So, if we put x,
[14:06] if we 1 in place of x we will get 1 comma 1 comma 0 and if we put 1 in place of z and
[14:17] 0 in place of x, we will get 0 comma 1 comma 1. So, these two stand out, these two vectors
[14:27] will be our kernel of T. So, this is our kernel of T.
[14:35] So, you can also calculate this by using row operations on this matrix what we have got
[14:42] here. if we can do the row operation, you will again see that the one vector will be
[14:48] dependent variable and two are independent variables, so kernel will be of dimension
[14:51] 2 and it will be scanned by these two vectors. And so now if we can go back earlier from
[14:59] where we have started, you can see that for the first two vectors of these basis beta,
[15:05] this 1 comma 1 comma 0 and 0 comma 1 comma 1 for these two vectors, the image is nothing
[15:12] but 0.
[15:13] So, that we have written here, these two vectors, for these vectors the image are going to be
[15:18] 0 and for the last one the image is the same vector. So, for span of these two has vectors
[15:25] 1 comma 1 comma 0 and 0 comma 1 comma 1 will form a, these two vectors will form a basis
[15:33] of kernel of T. So, that we have seen in this example. Now let us try to visualize these
[15:45] thing in Algebra.
[15:46] So, now if in three dimension plane in R3 if we choose the vector minus 4 comma 6 comma
[15:53] 3 which we have seeing in the figure, in the diagram, then the image of this will be this
[16:00] new vector which we are seeing that is minus 3.5 comma 0 comma minus 3.5. So, now if we
[16:08] change the vectors there, we will see the image will also change here.
[16:16] Now, if we only consider the vectors of this form such that x comma y comma z such that
[16:25] y equal to x plus z which we have seen that is the kernel of the transformation. So, how
[16:30] the vectors will look like, so for that thing the vectors will look like this and in that
[16:36] case if we choose all the vectors in this form as we can see, so minus 2 comma 3 comma
[16:46] 5. So, that means 5 plus minus 2 that will give us 3.
[16:49] So, the second coordinate is basically the sum of the first coordinate and the third
[16:54] coordinate. If we consider these vectors only, then the image will always be 0. So, if we
[17:00] vary this, all these form of vectors, all these kind of vectors which are in this kernel,
[17:06] we will see that the image will be nothing but 0.
[17:10] So, all these vectors which are of this form will lie in the plane as you can see here,
[17:16] it will lie in the plane as you can see this all these vectors are on the same plane and
[17:27] the plane is nothing but x minus y plus z equal to 0 that is y equal to x plus z. So,
[17:33] all these vectors will lie in the plane and the image of these vectors will be 0, so this
[17:39] plane is basically the kernel of this linear transformation.
[17:42] So, this is a two dimension vector space passing through origin and so this is the geometrical
[17:48] representation of the kernel. Thank you.