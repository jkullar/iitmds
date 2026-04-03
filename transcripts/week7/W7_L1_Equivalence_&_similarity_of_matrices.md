# W7_L1: Equivalence & similarity of matrices

**Week:** Week 7
**YouTube URL:** https://www.youtube.com/watch?v=ORWbVJ54hW8

---

## Transcript

[00:00] [Music]
[00:14] hello and welcome to the match 2
[00:15] component of the online
[00:17] degree course on data science
[00:21] uh in this video we are going to talk
[00:23] about equivalence and similarity of
[00:26] matrices
[00:27] so we want to impose a certain
[00:31] equivalence or what is called an
[00:34] equivalence relation
[00:35] based on two different relations we we
[00:37] are going to study this
[00:39] ah on the set of matrices so the first
[00:41] one is called equivalence
[00:43] this is on the set of m by n matrices
[00:46] and then the second one is for square
[00:48] matrices
[00:50] so the reason we want to do this is
[00:51] because there are certain
[00:53] what i will call invariants this may not
[00:55] make sense right now but that is fine
[00:58] called eigen values that you are going
[01:00] to see later on and
[01:02] these will come up not in this course
[01:05] but in the data science part that you
[01:07] will see
[01:09] in the subsequent semesters ah where you
[01:12] will
[01:13] use these for certain calculations okay
[01:16] so
[01:17] without bothering about everything that
[01:19] i said before whether or not it made
[01:20] sense
[01:21] let us get into the nitty gritties of
[01:23] what is equivalence and similar
[01:25] similarity
[01:26] for matrices okay so lets consider
[01:30] two we will first talk about equivalence
[01:32] of matrices lets consider two matrices
[01:34] of order
[01:35] m by n both have the same order remember
[01:39] so we we say a is equivalent to b if b
[01:42] is equal to q times a times b so we can
[01:45] find matrices
[01:47] q and p which are invertible so
[01:50] p has to be in because it is invertible
[01:53] because i impose the condition of being
[01:56] invertible first of all they have to be
[01:58] square matrices
[01:59] and since we are saying qap that means
[02:02] a is remember m by n that means p has to
[02:04] be n by n
[02:05] and q has to be m by m so they have to
[02:08] be invertible matrices
[02:11] ah and b has to be equal to q times a
[02:14] times p so you have if we can
[02:16] find q and p or p and q
[02:19] such that b is equal to q times a times
[02:22] p
[02:23] meaning when you compute q times a times
[02:26] p
[02:27] you get b then we say a and b are
[02:30] equivalent or a is equivalent to b
[02:34] so ah the other way of viewing this
[02:38] is by doing our good old row and column
[02:42] operations ah so if you can
[02:45] perform a series of row operations on a
[02:48] and then a series of column operations
[02:50] on a
[02:52] ah so that you can then obtain b
[02:56] then we will say that a and a is
[02:59] equivalent to b
[03:00] yeah so you take all the
[03:03] column operations on the right
[03:07] so you get p and you take all the row
[03:10] operations on the left
[03:11] and that is how you get q
[03:14] by multiplying successively that is so
[03:17] we have seen this idea before
[03:19] and i am just trying to motivate how to
[03:20] get q and p if you want to actually get
[03:24] but we will see a different way of
[03:25] getting them
[03:27] okay the other characterization is that
[03:29] the rank is the same
[03:30] so the reason this works is because
[03:33] remember that
[03:34] if you allow both row and column
[03:35] operations then you can take any matrix
[03:38] and reduce it to the form where you have
[03:43] block matrices where you have the
[03:44] identity matrix 0
[03:46] 0 0 i'll say that carefully in a second
[03:52] okay so equivalence of matrices is an
[03:54] equivalence relation
[03:55] so what is an equivalence relation ah so
[03:57] i am not defining it but what it means
[03:59] is
[04:00] a is equivalent to itself
[04:03] remember that we say is equivalent to b
[04:05] if there exists
[04:07] p and q so that b is equal to p time q
[04:10] times a times p
[04:11] ah so a is equivalent to itself is
[04:13] saying that there exists some
[04:15] q and p so that a is equal to q times
[04:18] a times p now i think it is clear what q
[04:21] and p should be we will write it down in
[04:23] a second
[04:24] so a is equivalent to b implies b is
[04:26] equivalent to a again
[04:27] because of invertibility of p and q this
[04:29] is clear
[04:30] and a is equivalent to b and b to c
[04:33] implies a is equivalent to c okay so let
[04:35] us quickly write down
[04:36] how to do this a is equivalent to itself
[04:39] because
[04:40] you can write a as identity
[04:43] m cross m times a times identity n cross
[04:46] n of course identity matrices are
[04:48] invertible
[04:49] a is equivalent to b implies b is
[04:51] equivalent to a well we know that a is
[04:53] equivalent to b
[04:54] that means b is equal to p times sorry q
[04:57] times
[05:01] a times p and that implies ah
[05:04] by multiplying by the inverses that a is
[05:07] equal to
[05:09] q inverse times b times p inverse so a
[05:12] is equivalent to b
[05:13] that's what we started with that means b
[05:15] is q a p that will imply that b
[05:17] is equivalent to a so a because we can
[05:20] write a as q
[05:21] inverse times b times p inverse ah
[05:24] so that means you can multiply on the
[05:26] left by some invertible matrix and on
[05:27] the right by some invertible matrix
[05:29] to get a from b so b is equivalent to a
[05:34] okay and then a is equivalent to b and b
[05:36] to c implies a is equivalent
[05:38] to c ah this is because b is equal to q
[05:42] a p ah c is equal to let us say q prime
[05:48] b p prime then you can replace
[05:52] b by the first part so c is equal to
[05:56] q prime times q times a
[05:59] times ah p times p
[06:02] prime and now q and q prime are
[06:04] invertible that means this product is
[06:06] invertible
[06:07] similarly p and p prime are invertible
[06:09] so this product is invertible
[06:11] so i have a invertible matrix on the
[06:13] left and on the right
[06:14] which i can multiply to a in order to
[06:17] get c so that
[06:18] that's why a is equivalent to c and now
[06:21] we can just say a and b are equal
[06:23] because this is an equivalence relation
[06:25] so once you know that a is equivalent to
[06:26] b
[06:27] b is also equivalent to a so we can just
[06:29] say a and b are equivalent
[06:30] okay so from now on i may i may
[06:32] sometimes say a and b are equivalent
[06:34] matrices
[06:35] that means a is equivalent to b or b is
[06:37] equivalent to a both are the same
[06:39] okay now let me come back to this rank
[06:41] of a is rank of b what i meant here was
[06:43] that
[06:46] you can get q and p
[06:49] so that qap is of this form
[06:57] and you can also get q prime and
[07:01] p prime so that ah q
[07:04] prime b p prime is of this form and then
[07:08] that is why a is equivalent to this
[07:10] matrix here if we call it c and b is
[07:12] equivalent to this matrix c
[07:14] but this is an equivalence relation that
[07:16] means a is equivalent to b
[07:18] so that is one way of checking that if
[07:20] rank of a is rank of b then
[07:22] indeed they are equivalent ah conversely
[07:25] if
[07:28] they are equivalent then i'll i'll i'll
[07:30] leave it to you to check that indeed the
[07:31] ranks are the same
[07:32] uh that's uh a little bit of
[07:35] manipulation of
[07:39] column and row spaces
[07:42] okay so we know what what it means to
[07:45] say that
[07:45] two matrices are equivalent so let's
[07:48] look at the linear transformation
[07:50] f from r three to r two given by f of x
[07:52] y z it is
[07:53] x plus y and y plus z so let's consider
[07:56] two ordered bases for r
[07:58] three the standard ordered basis and
[08:01] another ordered basis which is one one
[08:03] zero zero one one and zero zero one
[08:06] and let us consider two ordered basis
[08:08] for r two
[08:09] ah which is the standard ordered basis
[08:11] and the basis
[08:12] 1 0 and 1 1. so let us express
[08:17] the standard ordered basis for r 3 in
[08:19] terms of the standard order basis
[08:22] for r 2 after applying f
[08:25] so if you apply f to 1 0 0 you get
[08:28] 1 plus 0 comma 0 plus 0 so that gives
[08:31] you 1 0
[08:33] if you apply f to 0 1 0 you get
[08:38] 0 plus 1 and 1 plus 0 which is 1 1 and
[08:41] then you write it in terms of
[08:42] the standard basis which is 1 times 1 0
[08:46] plus 1 times 0 1
[08:47] and then if you apply f to 0 0 1 you get
[08:50] 0 plus 0 and 0 plus 1 which is 0 1
[08:53] and that is just 1 times the second
[08:56] vector in the ordered standard order
[08:58] basis
[08:59] so if you want to write down the
[09:01] corresponding matrix for this linear
[09:03] transformation
[09:04] that is corresponding to the ordered
[09:06] basis standard ordered basis for r3 and
[09:09] standard
[09:09] ordered basis for r2 you get
[09:12] 1 0 1 1 and 0 1 so
[09:16] where is this 1 0 coming from it is
[09:18] coming from here
[09:19] where is this 1 1 the second column
[09:21] coming from it's coming from these
[09:23] coefficients
[09:24] and the third one is coming from these
[09:25] coefficients this is something we did in
[09:27] our previous videos okay
[09:31] let's do the same thing for the other
[09:32] two bases uh
[09:34] so the other standard the other ordered
[09:36] basis for
[09:37] r3 and the other ordered basis for r2
[09:41] ah so if you look at f of 1 1 0 that's 1
[09:44] plus 1 comma
[09:45] 1 plus 0 that's 2 1 which you can
[09:48] express as 1 times 1 0 plus
[09:50] 1 times 1 1 in these stand the ordered
[09:53] basis the second order basis gamma 2.
[09:56] similarly if you take f of 0 1 1 this is
[09:59] 0 plus 1 comma 1 plus 1 which is 1 comma
[10:02] 2
[10:03] and for this if you order if you write
[10:05] it in terms of the
[10:06] ordered basis it gives you minus 1 times
[10:09] 1 comma 0 plus
[10:11] 2 times 1 comma 1 and for the last one
[10:15] you have f of 0 0 1 which is 0 plus 0
[10:18] comma 0 plus 1 which is
[10:20] 0 1 which is minus 1 times 1 0
[10:23] plus 1 times 1 1. so if you look at the
[10:28] corresponding matrix first column is
[10:30] going to come from the first
[10:31] equation coefficients the second column
[10:34] is going to come from the coefficients
[10:35] of the second equation
[10:37] and the third column is going to come
[10:39] from the coefficients of the third
[10:40] equation so it will look like
[10:42] 1 1 minus 1 2 and minus 1 1
[10:45] okay so what have we done so far we have
[10:47] taken the linear transformation
[10:49] and we have written down two matrices
[10:52] corresponding to two different
[10:54] ordered sets of ordered bases
[10:59] okay so choose p to be ah this matrix 1
[11:02] 0 0 and 1 1
[11:03] 0 0 1 1 and q to be 1 minus 1 0 1 so i
[11:08] this is something i produced out of the
[11:10] air
[11:11] and here's what happens so then
[11:14] q times a times p this is something you
[11:16] have to compute i have done the
[11:18] computation here
[11:19] this is uh 1 minus 1 0 1 times
[11:22] 1 1 0 0 1 1 so this was
[11:26] a times one zero zero one one zero
[11:29] zero one one ah so if you multiply this
[11:32] out
[11:33] let's see what you get after doing the
[11:35] first multiplication
[11:37] ah you get
[11:40] the first row in out of out of these two
[11:44] is uh ah
[11:49] so 1 minus 1 times
[11:52] so this is 1 then this is zero
[11:57] then this is minus one and then you have
[12:01] zero one one and you want to multiply
[12:03] this to
[12:05] this matrix so if you do that ah
[12:08] let's see what we get so if you do one
[12:10] zero minus one
[12:12] ah indeed you get one then one zero
[12:14] minus one times zero
[12:16] one one that's minus one and similarly a
[12:19] minus one so this first row is indeed
[12:21] achieved
[12:22] and then ah
[12:27] for the second row you take 0 1 1 and
[12:29] multiply it over there so that gives you
[12:32] 1 2 and 1 so indeed the second row is
[12:34] achieved so if you do this
[12:35] multiplication yourself you will be able
[12:37] to see that q
[12:38] times a times p is indeed equal to b
[12:41] so these matrices are equivalent to each
[12:43] other okay
[12:44] so this is not some magic
[12:48] so consider a linear transformation t
[12:51] v to w and two ordered bases beta 1 and
[12:54] beta 2 for v
[12:56] and two ordered basis gamma 1 and gamma
[12:59] 2 for w
[13:00] okay so like in the previous example
[13:03] where we had v was r 3
[13:04] w was r2 and beta1 and gamma 1 were the
[13:08] corresponding standard ordered basis
[13:10] beta2 and gamma 2 are some other fixed
[13:13] ordered bases
[13:15] so we took a to be the matrix
[13:17] corresponding to beta 1 and gamma 1
[13:20] so similarly here you take a to be the
[13:22] matrix corresponding to t
[13:24] with respect to the basis beta1 and
[13:26] gamma 1
[13:27] and you take b to be the matrix
[13:28] corresponding to t with respect to the
[13:30] bases beta 2 and gamma 2 this is exactly
[13:32] what we did in the previous example
[13:34] okay then a is equivalent to b so the
[13:37] previous example
[13:38] uh is an example of this phenomenon that
[13:41] is
[13:42] that we have mentioned here so the
[13:44] question is how do i get q and how do i
[13:46] get p
[13:46] so for p express
[13:52] the
[13:57] basis beta 2
[14:02] ah in terms of beta one
[14:07] ok and for q express
[14:13] the basis i should say ordered bases
[14:17] everywhere we have ordered bases
[14:21] the ordered pieces
[14:27] ordered basis
[14:30] um gamma 1 in terms of
[14:36] gamma 2. so this is how i got those two
[14:39] matrices
[14:40] ah let us quickly look at that example
[14:43] again
[14:44] so right so let us look at this example
[14:48] again
[14:49] so if you look at the matrix p the
[14:51] matrix p is exactly
[14:54] expressing this basis here
[14:58] 1 1 0
[15:01] so this is 1 times e 1 plus 1 times e 2
[15:04] plus
[15:05] 0 times e 3. so this 1 1 0 goes into
[15:07] your first column
[15:08] and similarly each of these so you have
[15:10] 0 1 1 which goes into your second
[15:12] column and 0 0 1 which goes into your
[15:14] third column
[15:16] and so that's how i get p and for
[15:19] q what i did was
[15:22] i wrote 1 0 and 0 1 in terms of
[15:25] 1 1 and
[15:29] sorry in terms of 1 0 and
[15:33] 1 1 so this is 1 times 1 0
[15:36] plus 0 times 1 1
[15:40] that is why i get 1 0 in my first column
[15:44] and 0 1 is
[15:49] minus 1 times 1 0 plus
[15:52] 1 times 1 1 that's how i get minus 1 1
[15:56] okay so this is a this is a strategy for
[15:59] getting
[16:00] p and q and this works for any
[16:04] general linear transformation and these
[16:07] fixed ordered bases
[16:08] ah beta 1 beta 2 and gamma 1 gamma 2.
[16:12] so ah yeah so to complete this express
[16:16] this
[16:17] get p and q from there and then you will
[16:20] find that
[16:21] b is equal to q a p okay so this is
[16:24] something you have to check i i will
[16:27] alleviate at that since this is not a
[16:29] really a proof based course
[16:31] ok so we have exhausted equivalence let
[16:34] us look at similarity of matrices
[16:36] so now we are going to restrict
[16:37] ourselves to square matrices
[16:39] so we will say that two square matrices
[16:41] of size n by n are similar
[16:43] or rather we will say that a is similar
[16:45] to b so we have two
[16:47] n by matrices a and b and we will say a
[16:49] is similar to b
[16:50] if there is an invertible matrix b it
[16:53] has to be of size n by n
[16:54] such that b is equal to p inverse a p
[16:58] so now the role of q is being played by
[17:00] p inverse so this is a very
[17:02] very big change
[17:05] ah so if you can express b as p
[17:08] inverse ap then we will say that a is
[17:12] similar to b
[17:14] so again similarity is an equivalence
[17:16] relation by
[17:18] which we mean a is similar to itself a
[17:20] is similar to b
[17:21] implies b similar to a and a is similar
[17:23] to b and b to c
[17:25] implies a similar to c let us quickly
[17:28] see why this is the case so for the
[17:30] first one again you can take p to be
[17:32] identity
[17:33] then ah a is equal to identity inverse a
[17:37] identity well identity inverse is
[17:39] identity so this is just identity times
[17:41] a times identity which is certainly
[17:44] for the second one ah
[17:47] let's see how to do the second one this
[17:48] is on the same same lines that we have
[17:50] done
[17:51] the previous part ah so a is similar to
[17:53] b means b
[17:54] is equal to p inverse ap
[17:58] but that means because p is multiple i
[18:00] can multiply by p inverse on the right
[18:02] and
[18:03] p on the left so i get p b
[18:06] p inverse is equal to a so just
[18:09] rewriting that p
[18:10] is equal to p times so i want to write
[18:14] this as p inverse inverse
[18:15] so why did i write it like that because
[18:18] i want to express this in terms of
[18:20] the inverse of whatever occurring on the
[18:23] right term
[18:24] p inverse times b times p inverse now
[18:26] you take your p inverse call it
[18:28] something else call it
[18:29] p prime if you want then we have an
[18:32] invertible matrix p prime such that
[18:34] a is equal to p prime inverse times b
[18:36] times p prime
[18:37] which is exactly saying that b is
[18:40] similar to a
[18:41] so so the second one is satisfied and
[18:44] the third one again was on the same
[18:46] lines as we did our
[18:48] previous part ah so
[18:51] let's see so we have b is p inverse a p
[18:56] and c is let us say q inverse
[19:00] a q these are both n by n invertible
[19:02] matrices p and q
[19:04] so then c is equal to
[19:08] ah my bad this is not b but this is
[19:11] this is not a but this is b so c is
[19:13] equal to q inverse and now you
[19:15] put in the values put in the first
[19:17] equation
[19:18] which is b is p inverse ap into the
[19:20] second
[19:22] then you get q inverse p inverse times a
[19:25] times
[19:26] p q but remember q inverse p inverse is
[19:30] exactly
[19:30] p q inverse okay
[19:34] and now if i call p times q as something
[19:36] else let us say p prime
[19:37] then this is saying that c is equal to p
[19:40] prime inverse times
[19:41] a times p prime
[19:44] which says that a is is similar to
[19:47] c so this proves uh the three things
[19:51] so this says that similarity is what is
[19:53] called an equivalence relation
[19:54] so now i can say especially because of
[19:56] the second one
[19:58] instead of saying that a is similar to b
[20:00] i can just say a and b are similar
[20:01] because it does not matter which is
[20:02] similar to which
[20:04] the other one always follows right so a
[20:06] is similar to b
[20:07] can be replaced by saying a and b are
[20:10] similar matrices
[20:11] ok so why do we really care about
[20:15] similar matrices
[20:18] so the reason we care about similar
[20:19] matrices is because
[20:22] of some of these properties the first is
[20:24] that a and b are equivalent this is
[20:25] clear because
[20:26] equivalent means that there is p and q
[20:28] so that b is
[20:29] q times a times p where p and q are
[20:32] invertible
[20:33] but if they are similar then you can
[20:34] take q to be p inverse
[20:36] and p to be p ah so this is clear
[20:39] and we have the same rank as a result
[20:42] the determinant is the same now this is
[20:44] a
[20:45] big difference remember now we are in
[20:47] square matrices we could not have made
[20:49] any such
[20:50] kind of statement before the determinant
[20:52] of b
[20:53] is determinant of p inverse times a p
[20:58] but determinants multiply if you
[21:00] remember
[21:01] then that means this is determinant of p
[21:03] inverse times determinant of a times
[21:05] determinant of p
[21:07] but now although matrices do not commute
[21:11] real numbers do and determinants give
[21:13] you real numbers so i can write this as
[21:16] 1 by determinant of p because
[21:18] determinant of p inverse is 1 by
[21:20] determinant of p
[21:21] times determinant of a times determinant
[21:23] of p and then because these are real
[21:25] numbers
[21:26] i can shift one by determinant of p to
[21:28] the right
[21:29] and then determinant of p divided by
[21:31] determinant of p gives me one
[21:32] so i get just determinant of a so they
[21:35] have the same determinants
[21:37] this is a very useful property and this
[21:39] is one of the properties that you will
[21:41] be using later on ah not in this course
[21:44] but in a different course
[21:46] ah for for certain reasons
[21:49] so the reason in fact is that there are
[21:52] other invariants so one
[21:54] one such is called the eigen values
[21:55] which you are going to study later
[21:59] okay so i've written some
[22:02] names here and this you are not expected
[22:05] to
[22:05] make sense of this but it's go it will
[22:07] be good if you remember this
[22:09] this just as a statement without
[22:10] understanding when you do your next
[22:12] course
[22:14] so several other invariants of a and b
[22:16] are the same such as the characteristic
[22:18] polynomial
[22:19] the minimal polynomial and the eigen
[22:22] values
[22:22] with multiplicity we are not going to
[22:24] define this right now
[22:26] but this is just as a ah feeder into
[22:30] the next course where you will be using
[22:32] some of these
[22:33] these things especially this thing
[22:34] called the eigen values
[22:36] yeah so so just remember this name does
[22:39] not matter if you do not understand what
[22:41] it is now
[22:42] okay so this is why we we are studying
[22:44] this idea of similarity
[22:46] let's do some examples or maybe one
[22:48] example
[22:49] ah so suppose you have a linear
[22:51] transformation f of x y z is minus x
[22:53] plus y plus z x minus y plus z and x
[22:55] plus y minus z
[22:58] now we are going to use the same stand
[23:00] the same basis yeah earlier we had
[23:04] two different bases right so we had beta
[23:07] 1 and gamma
[23:08] 1 and then we had beta 2 and gamma 2 but
[23:10] here
[23:11] remember that this linear transformation
[23:13] is from r3 to r3 itself
[23:15] right so we are going to use the same
[23:18] ordered basis
[23:19] so let's start with beta being gamma
[23:21] being the standard ordered basis
[23:24] okay so let us do what we did before let
[23:27] us express
[23:27] f of 1 0 0 f of 0 1 0 and f of 0 0 1 in
[23:31] terms of the standard basis
[23:33] if you do that you get f of 1 0 0 is
[23:35] minus 1 1 1
[23:37] f of what 0 1 0 is 1 minus 1 1 and f
[23:40] of 0 0 1 is 1 1 minus 1.
[23:46] so that means these things exactly
[23:49] end up being the coefficients ah when
[23:52] you write it in terms of the standard
[23:53] order basis
[23:55] and as a result the matrix of f
[23:57] corresponding to
[23:58] these the standard order basis is
[24:03] coming from these give you your first
[24:06] column
[24:07] these coefficients give you a second
[24:08] column and these coefficients give you
[24:10] your third column
[24:11] ok let us choose some other
[24:15] basis beta prime and gamma prime is the
[24:18] same
[24:19] so this is the same so this is beta
[24:21] prime and it's also gamma prime
[24:23] so let's express this f of
[24:26] each of these vectors in terms of as
[24:29] linear combinations of these vectors
[24:31] themselves
[24:32] so if i do f of 1 1 1 i get back 1 1 1
[24:36] let us remember what the linear
[24:38] transformation was it was
[24:39] minus x plus y plus z x minus y plus z
[24:42] and
[24:43] x plus y minus z
[24:46] so in that case we get ah f of
[24:50] 1 1 1 is minus 1 plus 1 plus 1
[24:53] 1 minus 1 plus 1 1 plus 1 minus 1 which
[24:56] is 1 1 1
[24:57] so which which is the first vector
[24:59] itself so this is 1 times 1 1 1 plus
[25:01] 0's for the 0's and the coefficients for
[25:03] the other vectors
[25:05] f of minus 1 1 0 is minus of minus 1
[25:09] which is 1
[25:10] plus 1 plus 0 which is
[25:13] 2 then minus 1
[25:17] minus 1 plus 0 which is minus 2
[25:20] and then 1 minus 1 rather minus 1 plus 1
[25:25] plus 0 which is 0. so you get 2 minus 2
[25:27] 0
[25:28] and f of minus 1 0 comma 1 is
[25:31] again you will if you do it you will get
[25:33] 2 0 minus 2
[25:34] and now if you write these in terms of
[25:36] the
[25:38] vectors that you have the second 2 minus
[25:41] 2 0
[25:42] is just 2 times the second vector or
[25:44] rather minus 2 times the second vector
[25:47] and the f of the third vector is
[25:50] minus 2 times the third vector so what
[25:53] we have got is there is a basis here
[25:56] which is beta prime
[25:58] so that when i apply f on that basis
[26:02] for these particular vectors in the
[26:04] basis
[26:05] they just scale right so f of 1 1 1 is 1
[26:08] 1 1 f of minus
[26:10] 1 1 0 is minus 2 times minus 1 1
[26:13] 0 and f of minus 1 0 1 is
[26:16] minus 2 times minus 1 0 1
[26:19] okay so for these part this particular
[26:22] basis
[26:24] the linear transformation behaves very
[26:26] nicely it just scales
[26:27] yeah one of the vectors remains the same
[26:29] so it scales by one
[26:32] the second and third vector ah gets
[26:34] scaled by
[26:35] minus two okay so the
[26:39] corresponding matrix is diagonal matrix
[26:42] 1 0 0 0 minus 2 0 and 0 0 minus 2
[26:45] and now we know that diagonal matrices
[26:47] are particularly easy to understand
[26:49] right so what we see here
[26:53] is that we have the same linear
[26:54] transformation in terms of one basis
[26:58] the standard ordered basis we got a
[27:01] matrix which was
[27:03] not hard but not maybe not so easy
[27:07] but in terms of this basis this new
[27:09] basis beta prime
[27:11] ordered basis we saw that it is a
[27:14] diagonal matrix
[27:16] ok now let p be 1 minus 1 minus
[27:20] 1 1 1 0 1 0 1
[27:23] compute p inverse this is something you
[27:25] can do i've done it here
[27:26] it's one third one third one third minus
[27:28] one third two third minus one third
[27:30] minus one third minus one third two
[27:32] third and now if you multiply
[27:35] ah so you look at p inverse ap
[27:38] then you get ah if you multiply this
[27:41] carefully i have done it here so i i
[27:45] suggest you check that this calculation
[27:46] is correct
[27:48] you get the matrix b so this last matrix
[27:51] is exactly your diagonal matrix b
[27:54] so you get that a and b are similar
[27:56] matrices
[27:58] so what have we seen we have seen
[28:00] exactly what happened
[28:01] in equivalence the same kind of thing is
[28:03] happening for similarity
[28:05] but this time instead of having
[28:07] different bases
[28:08] your beta and gamma are the same
[28:12] ordered basis okay because your vector
[28:14] space v and is the same vector space its
[28:16] v
[28:17] and v so you have a linear
[28:18] transformation from v to v so here we
[28:20] have r 3 to r 3.
[28:22] so you take the basis beta and beta
[28:25] in our case we do identity sorry the
[28:28] standard order basis
[28:30] and you got the matrix a which is this
[28:32] matrix here
[28:35] and in terms of a different ordered
[28:37] basis which we call beta prime
[28:39] where implicitly gamma prime was equal
[28:41] to beta prime
[28:43] we got this matrix so remember that now
[28:45] the the bases
[28:47] that you are choosing on both sides are
[28:49] the same so the beta and gamma have to
[28:50] match
[28:51] okay and then if you write down these
[28:53] matrices
[28:54] ah they end up being similar matrices
[28:58] so this is a general phenomenon
[29:01] let us look at another quick example so
[29:03] f of x y is 2 x
[29:05] comma y so if you look at the ordered
[29:08] basis 1 0 and 1
[29:09] 1 you can look at so f of 1 0 is just 2
[29:13] 0
[29:13] f of 1 1 is 2 1 and you can write this
[29:17] in terms of our
[29:18] the bases that you have 1 0 and 1 1. so
[29:20] this basis is
[29:21] if you want beta and gamma both
[29:25] and as a result the corresponding matrix
[29:27] is the coefficients coming from here
[29:29] coefficients which go into the first
[29:30] column coefficients from
[29:32] there which go into the first second
[29:33] column so it's
[29:35] 2 1 0 1. instead you can look at the
[29:38] standard ordered basis so this
[29:40] is this time your beta prime and gamma
[29:41] prime and its clear it is 2 x comma y
[29:45] so f of 1 0 is 2 0 f of 0 1 is 0 1
[29:48] so this is scaling your first
[29:52] vector by two and it is retaining your
[29:55] second vector as it is so this gives us
[29:58] a diagonal matrix
[29:59] two zero zero one so let p
[30:02] be one one zero one p inverse is one
[30:05] minus one zero one you can compute this
[30:07] and now if you compute p inverse ap this
[30:09] is a very simple calculation which i
[30:10] have done here
[30:11] you get your diagonal matrix which is
[30:13] exactly the matrix b
[30:15] so this is exactly b so the matrices
[30:18] are 2 1 0 1 and 2 0 0 1 are similar so
[30:22] we have seen two examples where
[30:24] we took linear transformations from
[30:28] two vector spaces to themselves
[30:31] expressed each time these linear
[30:34] transformations
[30:36] as bases with the same basis on both
[30:39] sides
[30:41] so and then we change the basis
[30:44] again with the new bases on both sides
[30:46] we computed the matrix
[30:47] and we saw that these matrices are
[30:50] similar
[30:51] so this is a general phenomena and the
[30:53] proof for this is exactly the same
[30:55] so consider a linear transformation t v
[30:57] to v and two ordered basis beta and
[30:59] gamma for v
[31:00] that a be the corresponding matrix with
[31:03] respect to beta and b be the
[31:04] corresponding
[31:05] matrix with respect to gamma then a is
[31:07] similar to b
[31:08] so that means i have to produce p how do
[31:10] i produce p
[31:12] ah to produce p you write so express
[31:18] so we want that b is p inverse
[31:23] a p so express so for p you express
[31:27] um the
[31:33] you express gamma in terms of
[31:37] beta okay
[31:40] and p inverse is well you can get it
[31:43] from p
[31:43] by inverting or you can get it from b by
[31:46] expressing
[31:48] beta in terms of gamma what does this
[31:51] mean
[31:51] this means you take each each in an odd
[31:53] in an ordered way you take
[31:56] ah so this first one means you take
[32:02] the first vector of gamma write it as a
[32:04] linear combination of element
[32:05] of the vectors from beta take the second
[32:08] vector of gamma write it as a linear
[32:10] combination of
[32:11] beta and so on so you get that so if you
[32:14] have n many you write all those n mini
[32:16] things
[32:17] and then you get a matrix for the first
[32:20] equation that you have
[32:21] put the coefficients into the first
[32:23] column for the second equation
[32:25] put them into the second column and so
[32:27] on for the nth equation put them into
[32:28] the nth column
[32:29] that is your matrix p same thing
[32:32] but the opposite way that is your matrix
[32:34] p inverse or you can get it just by
[32:36] inverting p
[32:38] and you will find that you
[32:41] end up with b is p inverse ap so again
[32:43] it's not a proof based course i want to
[32:46] prove this fact but this is how you get
[32:48] p
[32:49] fine why do we care about similarity i
[32:51] mean this is maybe the most
[32:53] important question ah
[32:56] so the reason is that as we saw in the
[32:58] previous two examples
[33:01] sometimes sometimes so
[33:04] we hope so the underlying part is we
[33:06] hope
[33:07] because under some basis we hope that
[33:10] the corresponding matrix is a diagonal
[33:13] matrix
[33:14] which gives an easy geometric
[33:16] understanding of the linear
[33:17] transformation right
[33:18] so if you have a diagonal matrix as i
[33:20] said it's saying that
[33:22] some particular vector scales some other
[33:25] particular vector scales and some third
[33:27] vector letters in r three scales and
[33:29] giving you how much it scales by
[33:30] and these three form a bases so that's
[33:33] that's the
[33:34] intuitive picture you have in mind ah
[33:37] so let's quickly recall what we have
[33:39] done in this video we have uh
[33:41] seen the notion of similarity and
[33:43] equivalence of matrices
[33:45] uh equivalence was both of these are
[33:47] equivalence relations
[33:48] um equivalences for
[33:52] rectangular matrices i mean which means
[33:54] matrices which need not be square
[33:57] so we say the equivalent of b is q ap
[33:59] then a
[34:00] and b are equivalent for similarity we
[34:03] say that b is p
[34:04] inverse ap i mean if b is p inverse ap
[34:08] then we say and we are similar
[34:10] and these notions are you are useful
[34:12] because
[34:14] they sort of help you to understand how
[34:17] to go
[34:18] between different bases on the vector
[34:20] space if you want if you have
[34:22] a particular linear transformation and
[34:24] you choose different bases
[34:26] how do you go between the corresponding
[34:27] matrices that is really what
[34:29] equivalence and similarity is telling
[34:31] you and similarity is particularly
[34:33] important because
[34:34] it may so happen that your linear
[34:36] transformation may not
[34:38] you know the algebra that when you write
[34:40] it down it may look
[34:41] like a very difficult
[34:45] entity but under some particular bases
[34:48] it may suddenly start looking very nice
[34:50] this is really the main point
[34:53] behind why we study similarity okay so
[34:56] thank you for your attention
[35:03] you