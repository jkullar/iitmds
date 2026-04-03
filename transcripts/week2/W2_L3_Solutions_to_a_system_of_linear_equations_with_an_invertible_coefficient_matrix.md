# W2_L3: Solutions to a system of linear equations with an invertible coefficient matrix

**Week:** Week 2
**YouTube URL:** https://www.youtube.com/watch?v=0txe9Mu5OdM

---

## Transcript

[00:00] [Music]
[00:14] hello and welcome to the match two
[00:16] component of the online bsc degree
[00:18] in data science in the last video we
[00:21] have seen something called cramer's rule
[00:23] which was used to solve a system of
[00:26] equations
[00:27] in which the coefficient matrix is
[00:29] square
[00:30] and its determinant is non-zero
[00:33] today we are going to continue on that
[00:35] theme and we are going to talk about the
[00:37] solution of a system of linear equations
[00:39] with an invertible coefficient matrix so
[00:42] we
[00:42] hinted ah on this
[00:46] in the last video and we want to
[00:48] continue with that theme
[00:50] so for quite some time we will talk
[00:52] first about the invertibility of
[00:54] a square matrix ah what is its relation
[00:57] the determinant
[00:58] and then move on to the answer to this
[01:00] ah
[01:02] question about what is the solution and
[01:04] how we can get it
[01:06] okay so let us recall quickly what is a
[01:09] square matrix a square matrix is a
[01:10] matrix in which the number of rows is
[01:12] the same as the number of columns
[01:14] so here is an example ah so the first
[01:17] one is a three by three example the
[01:19] second one is a two by two example
[01:21] so a non example would be something
[01:23] which has two rows and three columns or
[01:25] let us say
[01:26] five rows and eight columns okay so
[01:29] let us recall what is the inverse of a
[01:31] square matrix
[01:32] so if you have an n by n matrix then the
[01:34] inverse of
[01:35] a is another n by n matrix b
[01:39] such that a times b is b times a is
[01:41] identity now
[01:42] i will point out that b
[01:45] has to be n by n otherwise this
[01:47] multiplication on both sides is not
[01:48] defined as we
[01:50] the number of columns of the first
[01:51] matrix has to be the same as number of
[01:52] rows of the second matrix
[01:54] in order for them to be multiplied so
[01:56] that forces b
[01:57] to have the same number of rows and
[01:59] columns as a
[02:00] if this identity were to be satisfied
[02:05] and recall of course that the identity
[02:06] matrix is the diagonal matrix
[02:08] with all ones okay so the inverse is
[02:12] denoted by a inverse
[02:14] now i am using already in this d inverse
[02:17] of a square matrix
[02:19] so i should qualify the d
[02:22] before that let's see an example so
[02:24] here's an example
[02:25] so you have the matrix 4726
[02:29] 2 by 2 matrix and
[02:33] you can take b to b point six minus
[02:36] point seven minus point two point four
[02:39] of course you can wonder where did i
[02:40] come come with these values from
[02:43] ah was it trial and error or uh how did
[02:46] i come up with them so that we will
[02:47] study that in a few
[02:49] slides anyhow if you multiply these you
[02:52] get identity
[02:53] and if you multiply it on the other side
[02:55] also you get identity
[02:56] so this second matrix is the inverse of
[02:59] the first matrix
[03:01] and similarly the first matrix is the
[03:03] inverse of the second matrix so if i
[03:05] call this a
[03:06] and this b then ah a is b inverse and b
[03:10] is a inverse ok now how do i know that
[03:15] there is no other matrix which satisfies
[03:18] the same thing
[03:19] right so maybe a inverse b has this
[03:22] and then some other c also could have
[03:24] the same property
[03:26] right so how do i know that a
[03:29] inverse is this matrix and not some
[03:30] other matrix c
[03:32] ok so this is what is called uniqueness
[03:35] so the inverse is unique
[03:40] which is why i am using the word d
[03:43] and this is a standard argument in
[03:46] something called group theory
[03:48] but ah let us go go through it now so
[03:50] suppose there are two
[03:52] matrices with this property so a b is
[03:55] b a is the identity and
[03:58] a ac is ca is the identity
[04:03] then what do we do we we compute this
[04:07] matrix c times a times b ok first of all
[04:10] note that
[04:11] all of them are n by n matrices so this
[04:13] product makes sense
[04:14] second one of the properties that we saw
[04:18] for matrix multiplication
[04:20] was that it doesn't matter which order
[04:21] you it was that
[04:23] it doesn't matter whether you first do a
[04:25] times b or
[04:26] first do c times a and then multiply
[04:28] that to b right
[04:29] so in other words we could either do
[04:31] this or we could do
[04:33] this and they are both the same but let
[04:36] us compute each of these
[04:38] and see what we get so if you first do a
[04:40] times b
[04:41] then you get well a times b is the
[04:44] identity matrix so c
[04:45] times the identity matrix but anything
[04:48] times
[04:48] identity is itself so c times identity
[04:52] is c
[04:52] on the other hand if you first compute c
[04:54] times a
[04:56] you get the identity matrix times b but
[04:59] identity times any matrix is itself
[05:02] so we get b so what did this show this
[05:05] showed
[05:06] that b must be c so in other words if
[05:09] two matrices satisfy this
[05:11] this relation that a times b is b times
[05:15] a is identity
[05:16] then they must be the same so so we are
[05:18] saying that the inverse is unique
[05:20] of course we don't know if it exists or
[05:22] not as we saw
[05:23] there was a condition for it to exist
[05:27] namely we saw that
[05:31] the determinant must be non-zero how did
[05:33] that come about
[05:34] that was because we saw that the
[05:36] determinant is multiplicative meaning
[05:38] determinant of a
[05:39] times b is determinant of a times
[05:41] determinant of b
[05:42] so if you take determinant of a times a
[05:44] inverse that is determinant of the
[05:46] identity which is one
[05:48] so that means determinant of a inverse
[05:50] times determinant of a is 1
[05:52] and that means in particular that
[05:55] neither of them can be
[05:56] 0 they have to be non-zero otherwise the
[05:58] product cannot be 1
[06:00] 0 times anything is 0 as we know okay
[06:03] so this is a necessary condition for
[06:09] a matrix to be invertible so if the
[06:11] determinant
[06:13] is 0 so determinant of a 0 then the
[06:16] matrix
[06:17] a cannot be invertible that means it
[06:20] cannot have an inverse
[06:21] so we say a matrix is notable if it has
[06:23] an inverse
[06:26] ok ok so the conclusion here is that the
[06:29] inverse of a
[06:30] exists implies that the determinant of a
[06:32] has to be non-zero
[06:35] we can go the other way and
[06:38] ask what about the converse so if the
[06:41] determinant is non-zero
[06:44] is a invertible meaning does an inverse
[06:47] of
[06:47] a exist ok so lets maybe do an example
[06:52] so let us do a two by two example
[06:56] so suppose a is a b c d
[07:00] ok and i am trying to look for ah
[07:02] [Music]
[07:04] its inverse and what do i know i know
[07:06] determinant of a is nonzero
[07:08] so determinant of a is well let us
[07:11] calculate what that is that is a d minus
[07:13] b c
[07:13] right that is how we define the
[07:14] determinant of a two by two matrix
[07:17] ok so ah
[07:21] now ah i know that this is non zero
[07:26] that is what i am given ok so now let us
[07:28] try and find an inverse ok what does the
[07:30] inverse satisfy
[07:31] so the inverse satisfies that if you
[07:34] take a b
[07:34] c d and
[07:38] if i multiply
[07:41] suppose there is an inverse and is
[07:43] called e f g h
[07:44] then i should get 1 0 0
[07:48] 1 ok so that means i will get a
[07:52] bunch of equations and i can try to
[07:55] solve them so what equations do i get
[07:58] i get a e plus b g is 1
[08:03] a f plus b h is
[08:07] 0 and then c e
[08:11] plus d g is one and
[08:14] c f plus d h is zero
[08:18] ah my bad c e plus d g is
[08:21] zero and not one and c
[08:25] f plus d h is one ok right so this is
[08:28] what
[08:28] we get these four equations are what we
[08:30] get by multiplying the left hand side
[08:33] that's how we do product of matrices uh
[08:35] maybe i'll
[08:36] multiply the first equation by d
[08:40] so a d e plus b
[08:43] d g is d
[08:47] and maybe i will multiply uh
[08:50] the third equation by b so b c
[08:53] e plus
[08:57] b d g
[09:04] is 0 that's what i get
[09:08] so now i can subtract out the b d g so
[09:11] if i do that what do i get
[09:12] i get a d minus b c
[09:15] times e is
[09:19] d right so what does that tell me that
[09:22] tells me that e is
[09:24] d divided by a d minus b c and this is
[09:26] the important part i can divide
[09:28] because a d minus b c is non-zero yeah
[09:31] that's that's the assumption
[09:33] okay otherwise i i would not have been
[09:35] able to ah
[09:37] solve this at all ok and then you can
[09:39] work out the rest
[09:40] so from here what we will get is that
[09:42] the inverse of a
[09:44] has this form so it is 1 by a d minus b
[09:47] c times the matrix
[09:51] ah d a and i
[09:54] hope my signs are correct so
[09:58] ah i have a c here and a b
[10:01] here and then
[10:04] ah my bad this should be
[10:09] c here with a minus sign and
[10:17] a minus b over here okay so my claim is
[10:20] a inverse is going to be
[10:21] of this form and i'll leave you to check
[10:23] that the other entries
[10:25] uh give you exactly this okay so you can
[10:28] see that for a two by two matrix
[10:30] if the
[10:33] determinant is non-zero then indeed the
[10:36] matrix is invertible it has an inverse
[10:39] ok so can i go beyond so the
[10:42] converse is true at least for two by two
[10:44] matrices so
[10:46] what we are going to see next is how to
[10:47] go beyond the two by two case
[10:50] so i am going to introduce a few ah
[10:52] notations
[10:53] so the adjacent of a square matrix ah
[10:56] so what is that so remember in the
[10:58] previous
[11:00] video we defined something called minors
[11:02] and
[11:05] [Music]
[11:06] cofactors so the ijth minor is the
[11:10] determinant of the sub matrix
[11:12] obtained by deleting the ith row and the
[11:14] jth column and we denoted it by an mij
[11:18] and the ijth cofactor was defined as
[11:21] multiplying
[11:22] the minor the ijth minor by minus 1 to
[11:25] the power i plus j
[11:29] ok so we can create a matrix called the
[11:31] cofactor matrix so the cofactor matrix
[11:33] has i j
[11:33] th entry c i j okay
[11:38] and then we define the adjacent of ah
[11:41] this matrix a that you started with
[11:44] as the transpose of this cofactor matrix
[11:49] so remember that we defined transpose so
[11:50] transpose was when
[11:52] you take a matrix and you flip the
[11:54] entries about its diagonals you reflect
[11:56] the entries about the diagonal
[11:58] ok so let us see an example of the
[12:01] computation of the adju gate
[12:03] matrix so here is the matrix a which is
[12:07] 1 2 3 in the first row 0 to 8 in the
[12:09] second row
[12:10] 5 6 0 in the third row let's compute its
[12:13] minus first
[12:14] well let's compute its determinant first
[12:16] determinant of a is
[12:18] well 1 times 2 times 0 minus 8 times 6
[12:23] minus two times zero times zero minus
[12:25] eight times five
[12:26] plus three times zero times six minus
[12:29] two times five
[12:31] and if you work that out that's minus
[12:32] forty eight plus eighty minus thirty
[12:34] so that's two okay so let's now
[12:38] work out the minors so
[12:43] well the miners are written here you i
[12:45] guess you have to work out
[12:47] uh these miners by yourself so just to
[12:50] check that the
[12:50] m 1 1 is correct that is exactly the
[12:53] number appearing
[12:55] in the bracket corresponding to 1 in
[12:56] that expression for the determinant of a
[13:00] so that is minus 48 right 1 times
[13:03] minus 48 the first term in that
[13:06] expression for determinant of
[13:07] that is minus one that's exactly m one
[13:08] one why is that m one one because that's
[13:10] what you get by
[13:12] um hiding the first row and the first
[13:15] column
[13:16] so you get two eight six zero two times
[13:18] zero minus 8 times 6
[13:20] ok so you can check the other entries so
[13:23] the other minus
[13:24] and hopefully you will get these numbers
[13:27] ah so now let us
[13:28] write down the cofactor matrix so the
[13:30] cofactor matrix remember is given by
[13:33] ah taking these minors
[13:36] and putting them into the corresponding
[13:37] positions but by multiplying each of
[13:40] them by a
[13:41] minus 1 to the power i plus j so the
[13:43] first term remains the same because it's
[13:45] minus 1 to the power 1 plus 1
[13:46] so it's minus forty eight the second
[13:48] term comes with a minus sign
[13:50] so its minus of minus forty which is
[13:52] forty third term is again
[13:54] ah one times minus ten ah so
[13:58] just minus ten and so on so you have
[14:00] eighteen minus fifteen
[14:02] four and then ten minus eight two
[14:05] so this is your cofactor matrix ah
[14:08] again this is something you have to
[14:09] compute by yourself
[14:12] ah but i hope the ideas are clear that
[14:14] to compute the aggregate you have to
[14:16] compute the
[14:18] minus first to compute the minus for mij
[14:21] you hide the ith row and the jth column
[14:23] and compute the resulting matrix
[14:26] and then put those into multiply that by
[14:29] minus 1 to the power i plus j and put
[14:31] that into a matrix that will give you
[14:33] the cofactor matrix
[14:34] and then to get the adjective matrix you
[14:37] take this same
[14:38] cofactor matrix let us just see what
[14:41] that was
[14:42] that was minus 4840 minus ten eighteen
[14:44] minus fifteen four
[14:45] ten minus eight two and you flip it over
[14:47] the diagonal you take its transpose
[14:49] so your minus forty eight forty ten
[14:52] minus ten
[14:53] became now the first column so just to
[14:56] check here it is the first row
[14:58] here it's the first column and so on so
[15:00] your second row became the second column
[15:02] your third row became the third column
[15:04] so 18 minus 15 4 here is your second row
[15:08] that
[15:09] becomes a second column and then 10
[15:12] minus 8 2
[15:13] becomes a third column okay so you have
[15:16] taken the transpose of the
[15:18] cofactor matrix fine so for your matrix
[15:21] a
[15:22] we have computed the aggregate matrix
[15:25] so now let's do something funny let's
[15:28] compute
[15:29] a times one by determinant of a times
[15:31] adjective of a
[15:32] so this one by determinant of a times
[15:34] adjective a is supposed to be a matrix
[15:37] and one by determinant of a times
[15:39] adjective of a
[15:40] that matrix multiplied by so let us do
[15:42] this computation
[15:44] well one by determinant of a times
[15:46] adjective a so so we computed what is
[15:48] the determinant of a that was
[15:50] two so you that means you have to
[15:52] multiply adject by half
[15:54] so if you multiply the adjective by half
[15:57] the first row becomes minus twenty four
[15:59] nine five the second row becomes twenty
[16:01] minus fifteen by two minus four
[16:04] the third row becomes minus five to one
[16:07] and we want to multiply on the left this
[16:08] same matrix by 2
[16:10] by a so your matrix a was 1 2
[16:14] 3 0 to 8 5 6 0 something you can check
[16:16] from your p v s
[16:18] slide so now let us multiply and see
[16:20] what we get
[16:21] so let us let me do the one by one term
[16:23] and then the rest i leave to you to
[16:26] check what we
[16:27] or some of the terms and the rest i
[16:29] leave to you to check what we get
[16:32] so the first term is 1 times minus 24
[16:34] plus 2 times 20 plus 3 times minus 15
[16:37] that's minus 24 plus 40 minus 50.
[16:41] so that's 40 minus 39 aha that's a 1.
[16:47] and then the next term
[16:51] let us say the 1 2 term so 1 times 9
[16:55] plus 2 times minus 15 plus 3 times 2 so
[16:58] that is 9
[16:59] minus 15 plus 6 so
[17:02] say 15 minus 15 that's a zero
[17:06] yeah and you can carry on and do the
[17:08] other terms so you are going to get 1 0
[17:10] 0 0 1 let us do this term
[17:13] just for fun so this is the 2
[17:16] 3 term so that is 0 times 5 plus 2 times
[17:19] minus 4 plus 8 times 1
[17:21] clearly that 0 and then the rest
[17:24] is going to be 0 0 1. so this is going
[17:26] to give you
[17:27] the identity matrix okay and now you can
[17:30] do it the other way and you can check
[17:32] that you still get the identity matrix
[17:37] so if you multiply ah
[17:41] minus twenty four nine five twenty minus
[17:44] fifteen
[17:44] by two minus four minus five to one
[17:46] that's one by determinant of a times r
[17:48] you get a
[17:49] and multiply a on the right you are
[17:51] still going to get the identity matrix
[17:53] so what does that tell you that tells
[17:56] you that the
[17:57] inverse a inverse is
[18:00] that's for this example is one by
[18:02] determinant of a times adjective of a
[18:04] well it turns out that this is a general
[18:07] fact
[18:07] and that's exactly what
[18:12] we're going to state here so if a is an
[18:14] n by n matrix and determinant of a is
[18:16] non-zero then a inverse exists n equals
[18:19] 1 by determinant of a times adjective a
[18:21] so how do we
[18:23] get this relationship so if you remember
[18:26] in the
[18:27] previous
[18:29] [Music]
[18:31] video we had these two very nice
[18:34] formulae
[18:36] about cofactors so
[18:39] one was that summation a i j
[18:43] c i j so this is
[18:46] a determinant of a
[18:49] where you take the sum from 1 through
[18:53] n ok
[18:56] so now let us divide both both sides by
[19:00] determinant of a if you do that
[19:01] and then we will take the determinant of
[19:02] a inside the sum so if you do that
[19:05] what we get is summation a i j times
[19:09] one by determinant of a times
[19:13] c i j j is one through n
[19:18] this is one ok and now we can write this
[19:22] term over here
[19:24] as the jith term
[19:27] of the adju gate so this is the same as
[19:30] summation a i j
[19:34] adju gate of adjective
[19:37] of a
[19:40] j i why is that because c
[19:43] i j transpose ah my bad
[19:47] ah including the determinant of a sorry
[19:50] so this times one by determinant of it
[19:55] ok so that is because c i j is the same
[19:57] as
[19:58] adjective a j i yeah because adjective a
[20:02] is the cofactor matrix transpose
[20:04] ok so this is one ok but this is exactly
[20:08] the ah
[20:13] so summation a i j one by determinant of
[20:16] a
[20:18] adjective a
[20:21] j i so this is one
[20:24] so j is one through n so what does this
[20:27] mean this means
[20:29] that if you take the
[20:33] ah i ith entry of the matrix
[20:37] a times 1 by determinant of a
[20:43] adjective a if you take the iith entry
[20:47] then the iis entry is one ok the
[20:49] diagonal entry is one
[20:51] ok so now we can ask what happens to
[20:53] entries which are not
[20:55] on the diagonal so for that we will have
[20:57] to do summation a i j
[21:00] c ah
[21:04] let us say k j why do we why
[21:07] why do we care about this because if you
[21:10] if you work
[21:10] out in the same way if you back
[21:12] calculate ah
[21:14] you will get here ok so i i leave it to
[21:17] you to back calculate
[21:18] so what i am saying is you take this
[21:19] matrix and look at its
[21:21] i kth entry where i k i is not equal to
[21:24] k ok then this is exactly what you are
[21:26] going to get
[21:29] well not this but this times determinant
[21:32] of a
[21:33] so this times one by determinant of a ok
[21:35] but the point is
[21:37] this thing over here is 0 and why is it
[21:39] 0
[21:40] where i is not k why is it 0 well that
[21:43] is because we can think of this
[21:45] as the determinant of a matrix in which
[21:48] the ith row
[21:49] is the same as the ith row of
[21:53] a and the kth row is also the same as
[21:57] the
[21:58] ith row okay so two rows are same in
[22:01] this
[22:02] yeah so you can think of this as a
[22:03] determinant of a matrix
[22:05] ah with two rows the same namely
[22:09] all rows of a are exactly
[22:12] the rows of this matrix except the kth
[22:14] one and the kth one
[22:16] what do we have we have the ith row and
[22:17] in the ith row what do we have we have
[22:19] the is row so two rows are the same
[22:21] and we have seen in the last video
[22:25] that if two rows are the same then the
[22:26] determinant is zero so that's why this
[22:29] this thing is zero okay and from here it
[22:31] will follow that uh
[22:33] the i kth entry is also zero so we we
[22:37] we will get that a times one by
[22:39] determinant a
[22:40] adjective of a is the identity matrix
[22:43] similarly
[22:44] you can flip it around and work with
[22:45] columns and you will
[22:48] get that that is also the identity
[22:50] matrix okay
[22:51] so that is how we get this formula
[22:54] for a inverse ok so now let us get to
[22:57] what we really wanted to
[22:59] do namely we want to find the solution
[23:01] of a linear
[23:03] system of linear equations where the
[23:07] coefficient matrix is invertible so i
[23:08] will repeat what that means the
[23:10] coefficient matrix is invertible means
[23:12] that it has an inverse which means the
[23:15] same
[23:15] as its determinant is non-zero that is
[23:17] what we have seen
[23:18] that if the determinant is non-zero then
[23:21] it has an inverse
[23:22] and of course if it has an inverse the
[23:24] determinant is non-zero
[23:26] okay so let us look at the system of
[23:28] linear equations ax equals b
[23:30] where the coefficient matrix a is an
[23:32] invertible matrix
[23:33] so let us multiply both sides by a
[23:36] inverse
[23:37] so if we multiply both sides by a
[23:39] inverse what do we get
[23:40] so here is ax equals b multiply both
[23:43] sides by a inverse
[23:48] and when i multiply on the left notice
[23:50] that this is
[23:52] um matrix multiplication so it doesn't
[23:55] matter
[23:55] whether i first look at a inverse a or
[23:58] first look at a times
[23:59] x so since its to my advantage i will
[24:02] multiply a
[24:03] inverse and a first and what do i get i
[24:05] get the identity matrix
[24:08] so the identity matrix times x is a
[24:11] inverse b
[24:11] but identity times anything is that
[24:14] thing itself so
[24:15] identity times x is x so we get x is a
[24:18] inverse b
[24:19] so this is the solution right so we
[24:22] wanted to find the solution and here is
[24:24] the explicit
[24:25] form for the solution x is a inverse b
[24:29] ok so let us do an example so here is
[24:33] an example that we actually computed
[24:35] from
[24:36] much much before
[24:39] so this was actually something to do
[24:42] with price of
[24:43] rice and dal and so on so eight x one
[24:46] plus eight x two plus four x three is
[24:48] nineteen sixty
[24:49] twelve x one plus five c x two plus
[24:51] seven x three is
[24:52] twenty two fifteen three x one plus two
[24:54] x two plus five x three is eleven thirty
[24:56] five
[24:57] well ok i i should say 196
[25:00] 960 215 and 1135
[25:06] okay so let's form the corresponding
[25:09] system of linear equations that's
[25:11] this is this a is the coefficient matrix
[25:13] eight eight four twelve five seven three
[25:14] two five
[25:15] x is the unknowns the
[25:18] ah column vector of unknowns and b is
[25:21] the column vector of
[25:23] uh the constants nine one thousand nine
[25:26] sixty two thousand two 215
[25:28] and 1135 okay so now the first thing we
[25:32] want to check is what is determinant of
[25:33] a
[25:35] so determinant of a we can compute this
[25:37] and
[25:38] the computation is we know how to do
[25:40] this now it
[25:41] gives you minus 108 188
[25:44] which is non-zero which is really all we
[25:46] care about so once it is non-zero
[25:49] that means a is invertible and we know
[25:51] explicitly what
[25:52] the what the solution is its a
[25:56] inverse times b so now what we have to
[25:57] do is we have to compute a inverse
[25:59] and then we have to multiply it with b
[26:01] ok so how do we
[26:03] compute a inverse well we have to find
[26:06] the minors
[26:07] ah this is what the minors are ah so 11
[26:10] 39 9 32 28 minus 8 36
[26:13] 8 minus 56 you'll have to do this i i
[26:17] trust now we can all compute
[26:18] determinants and so you will be able to
[26:20] do this
[26:21] so just to retreat to compute the 3 2
[26:23] minor
[26:24] you have to hide the third row and the
[26:27] second column
[26:28] and compute the determinant of the
[26:29] remaining matrix okay so from the minus
[26:31] we can get the co-factor matrix how do
[26:33] we do that we multiply each of these by
[26:35] minus 1 to the power i plus j
[26:37] so that is how we get the cofactor
[26:39] matrix
[26:40] and then we can form the adju gate
[26:42] matrix the adju gate is the transpose of
[26:44] the cofactor matrix
[26:46] so that is what we get and then
[26:49] a inverse is one by determinant of a
[26:52] times the adjective
[26:53] so 1 by minus 188 which is what we found
[26:56] the determinant to be
[26:57] times the adject matrix which is up here
[27:00] ok
[27:01] and then what is x which is the solution
[27:04] the solution is a inverse b so you
[27:06] multiply
[27:08] all these and then finally what you get
[27:09] is 45 125
[27:11] 150 which means x 1 is 45 x 2 is 125 x 3
[27:16] is 150
[27:16] okay now i will ask you to compare this
[27:18] with the solution you got
[27:21] we worked this out when we did systems
[27:23] of linear equations so
[27:25] look at that video and observe that we
[27:27] got the same thing
[27:28] ok so finally we want to look at
[27:31] something called the homogeneous system
[27:33] of linear equations
[27:34] so what is the homogeneous system of
[27:35] linear equations
[27:37] when you write it as a x equals b so now
[27:40] a need not be a square matrix
[27:42] so you could have m equations in n
[27:44] unknowns
[27:47] but the b is 0 yeah the the
[27:50] constants appearing here so these are
[27:52] all 0. so this is 0
[27:55] all these are 0. so if these are 0 it's
[27:58] called a homogeneous
[28:00] system of linear equations now if it so
[28:02] happens that
[28:04] you have a homogeneous system of linear
[28:08] equations
[28:09] ah so that means the matrix form is ax
[28:12] is equal to 0
[28:14] and this is a square matrix so a
[28:18] square so i should have added that over
[28:20] here
[28:21] so if if a is an invertible matrix then
[28:23] we know exactly what the solution is
[28:25] its a inverse b but b is 0 here so that
[28:28] means x is 0
[28:30] okay so a homogeneous system of linear
[28:33] equations with n equations in n
[28:34] unknowns so it has a unique solution 0
[28:38] if its coefficient matrix is invertible
[28:40] so that's the same as saying its
[28:42] determinant is nonzero
[28:43] and here's something extra
[28:46] it has an infinite number of solutions
[28:49] if its coefficient matrix is not
[28:51] invertible
[28:52] okay that means its determinant is zero
[28:54] okay so now we know explicitly
[28:57] that if you have n equations in n
[28:59] unknowns
[29:00] then either and
[29:03] your system is homogeneous so you are
[29:05] solving a x is 0
[29:07] if the determinant of a is non-zero then
[29:09] the solution is a inverse 0 which is 0
[29:12] and if the determinant is 0 then
[29:16] you have an infinite number of solutions
[29:18] okay so the first part is something we
[29:19] did
[29:20] the second part is something i am
[29:21] stating and we will
[29:23] do this in the next video thank you