# W7_L4: Inner products & norms on a vector space

**Week:** Week 7
**YouTube URL:** https://www.youtube.com/watch?v=HH2Md3dBlq4

---

## Transcript

[00:00] [Music]
[00:14] hello and welcome to the match2
[00:16] component of the
[00:17] online course on data science
[00:22] in this video we are going to talk about
[00:23] inner products and norms on the vector
[00:25] space
[00:26] this is a link to our previous video
[00:29] which was on
[00:31] length angles and dot products so we
[00:34] will see that the notion of an inner
[00:35] product
[00:36] generalizes what is a dot product and
[00:38] the notion of a norm
[00:39] in ah generalizes what is the length ah
[00:44] so the point here is that we can do this
[00:46] for any vector space so let's start by
[00:48] the
[00:49] ah by defining what is in a product so
[00:51] an inner product on a vector space v
[00:54] is a function ah which is
[00:57] which takes two vectors as input so
[01:00] that's why the
[01:01] dot comma dot so in place of the dots
[01:03] you will have vectors
[01:04] so it's a function from v cross v to r
[01:08] so it gives it produces a real number
[01:10] for each
[01:12] pair of vectors it produces a real
[01:14] number
[01:15] and it satisfies the following so
[01:18] if you take in 2 if you apply this to
[01:22] v comma v that means you take just one
[01:24] vector
[01:25] and you think of it as the tuple v comma
[01:28] v
[01:29] then the inner product of v with itself
[01:32] that's how we describe we will say v
[01:34] comma v this angle brackets
[01:37] this must be positive strictly greater
[01:39] than 0
[01:41] if v is non-zero and it will be 0
[01:44] precisely when v is equal to 0 okay
[01:49] and then you have these three things
[01:52] which are which i have put together
[01:54] because they are called
[01:56] uh this this is saying that it is
[02:00] bilinear
[02:00] okay so these three ah things say it is
[02:03] bilinear
[02:05] so so v one plus v two is comma v three
[02:08] is v one comma v three plus v two comma
[02:10] v three
[02:11] ah and v one comma v two is v two comma
[02:15] v
[02:15] one and c times v one
[02:19] comma v two is c times v 1 comma v 2
[02:22] which
[02:23] because of your previous thing can be
[02:25] written also as v
[02:26] v 1 comma c times v 2 where c here is a
[02:33] real number it's a scalar ok so i will
[02:36] also point out that using these two we
[02:39] can get that
[02:42] v 1 comma v 2 plus v 3
[02:45] is equal to v 1 comma v 2
[02:48] plus v 1 comma
[02:51] v 3 right because v 1 comma v 2 plus v 3
[02:54] is
[02:55] v 2 plus v 3 comma v 1 which is then v 2
[02:58] comma v 1 plus v
[02:59] 3 comma v 1 and then you can flip those
[03:02] again
[03:03] to the other side
[03:07] okay so now ah these three together
[03:11] are what is called bilinear so this is a
[03:15] bilinear map the first and third
[03:19] um so a vector space
[03:23] together with an inner product is called
[03:24] an inner product space so
[03:26] i'll underline this is called an inner
[03:28] product space this is a definition
[03:32] right and i may be i just put in the
[03:34] conclusions be true so the conclusions
[03:36] we drew
[03:37] before where that so first of all here
[03:40] this is not a conclusion this is a
[03:42] hypothesis c is a scalar and the
[03:44] conclusion out of this was that
[03:46] v 1 comma v 2 plus v 3 is v 1 comma v
[03:50] 2 plus v 1 comma v 3
[03:56] ok ah so the dot product is an example
[03:59] of
[03:59] an inner product this this is what i
[04:01] started with so recall that the dot
[04:03] product of u and v in rn
[04:05] is u dot v is u 1 v 1 plus u 2 v 2 plus
[04:08] u and v
[04:09] n i apologize for this ugly looking
[04:13] full stop which would should have been
[04:14] here ah and this yields a function
[04:18] ah which is given by u comma v
[04:22] is u dot v yeah angle brackets u comma v
[04:25] is u dot e
[04:26] so why is this inner product ah so we
[04:29] have to verify the three axioms
[04:31] the four exams we had so we know already
[04:34] that if
[04:35] ah u comma u is so this is uh
[04:39] so u one square plus u two square plus u
[04:41] n squared for real numbers squares must
[04:42] be
[04:44] positive sum of squares is positive so
[04:46] that means this is greater than 0 if
[04:48] u is not 0 and this is equal to 0
[04:53] exactly when each ui is zero
[04:56] so ui zero for all i which happens
[04:59] precisely when u is zero
[05:01] so we have proved the first one and the
[05:03] other three just follow from the
[05:05] um from the form of this
[05:09] equation so if you have u plus u prime
[05:15] dot v you can check that this is
[05:17] actually u dot v
[05:18] plus u prime dot v and
[05:21] similarly if you have u dot v this is
[05:24] same as v dot u that is clear from the
[05:26] equation because real numbers
[05:28] you can they they commute
[05:31] under multiplication ah and then
[05:36] clearly if you have c u dot v this is
[05:40] c times ah u dot v because c multiplies
[05:44] into each component
[05:45] so for each component you will have it
[05:47] over there and then you can take it out
[05:49] ah so this this completes the proof that
[05:53] this is indeed a
[05:54] inner product so the dot product is an
[05:56] inner product
[05:58] so let's now look at an example of an
[06:00] inner product on r2
[06:02] which is this is a this is not the
[06:04] standard
[06:05] inner product that we saw the dot
[06:07] product that we saw earlier is a
[06:08] slightly different
[06:09] example ah so here is
[06:14] the definition u comma v is x one y one
[06:16] minus
[06:17] x one by two minus x two y one plus two
[06:20] times x two y two
[06:23] ah so where u is x one ah this
[06:26] is a typo here so u here is x one comma
[06:29] x two i think
[06:31] and v is uh y one comma y two
[06:37] ok so the standard inner product that
[06:40] that we saw was ah
[06:42] so if you do u dot v u dot v is x one y
[06:46] one
[06:47] plus x two y two right so ah
[06:50] so sorry in terms of yeah is x one y one
[06:54] plus
[06:54] x two y two ah the
[06:59] inner product here is slightly different
[07:00] as you can see so why is this
[07:02] an inner product how do i prove that
[07:05] so this is proved by by looking at the
[07:08] following
[07:09] if you look at this expression you can
[07:12] write down the matrix for
[07:14] for this expression so you have x one x
[07:16] two
[07:17] and then you have ah y one y two
[07:23] ah and then
[07:26] let's see so you have x one y one the
[07:29] the
[07:29] coefficient is 1 x 1 y 2
[07:33] the coefficient is
[07:37] minus 1 so i believe yeah this will be
[07:40] minus 1 here
[07:41] and then this is minus 1 and then this
[07:43] is 2 okay so if you multiply this
[07:45] let's see what we get you get exactly
[07:49] so the first term is x 1 minus x 2
[07:53] the second term is minus x 1
[07:56] plus two times x two times y one y two
[08:01] and if you work out what this is this is
[08:03] uh x one y one
[08:05] minus x two y one
[08:08] minus y two x one plus 2 times x 2 y 2
[08:13] so this is exactly what we have
[08:14] up here right this this expression and
[08:16] this expression are the same
[08:19] so this is a different expression from
[08:22] the inner product
[08:23] which is x 1 y 1 plus x 2 y 2 and now
[08:26] how do i
[08:27] use this matrix form to conclude that it
[08:29] is
[08:30] an inner product so the reason
[08:34] so i can use the matrix form to conclude
[08:36] that this inner product because
[08:38] the bilion linearity part follows
[08:40] directly
[08:41] and the symmetry part follows because
[08:43] this is a symmetric matrix
[08:45] so if i want to do
[08:49] y 1 y 2 comma x 1 x 2
[08:54] then you can see that this is exactly
[08:56] writing y 1 y 2 here
[08:59] writing the same matrix here and x 1 x 2
[09:03] but this is a real number so i can so
[09:05] this is the same as its transpose
[09:07] this is the same thing transpose and if
[09:09] you do the transpose
[09:10] you will get this because
[09:14] the matrix in the middle is a symmetric
[09:16] matrix so its transposes itself
[09:18] okay that is why it is
[09:22] that is the second property and then by
[09:24] linearity is because
[09:25] matrix multiplication uh respects
[09:28] addition right so if you have
[09:30] so it distributes over addition so if
[09:32] you have x1 x2
[09:33] let us say plus x1 prime x2 prime
[09:39] then over here you will you will that
[09:41] will distribute and it will give you
[09:42] what you want that is the
[09:45] first thing and then c times x1 x2
[09:48] again because constants come out of
[09:51] matrix multiplication
[09:53] it will follow from there so i urge you
[09:55] to check that fact
[09:57] because these two expressions are the
[09:58] same so the key point here is
[10:01] these two expressions here are the same
[10:03] so
[10:04] maybe i draw that better these two
[10:06] expressions are the same
[10:08] okay so you can check it from there so
[10:11] the only
[10:12] remaining thing is
[10:15] that this is always positive so if you
[10:18] if you if you put x 1 x 2 in place of y
[10:22] 1 y 2 what do you get
[10:23] so you get x 1
[10:26] squared minus x 1
[10:30] x 2 minus or rather plus
[10:34] x 1 x 2 so that is 2 times x 1 x 2
[10:37] plus 2 times x 2 squared so this is
[10:40] x 1 square minus 2 times x 1 x 2
[10:44] plus 2 times x two squared and you can
[10:46] write this as x one minus x two squared
[10:48] plus x two square right so this is the
[10:50] sum of squares again it must be positive
[10:53] if it is equal to zero then both the
[10:56] terms which are squares are zero that
[10:58] means x 1 minus x 2 is 0 and x 2 is 0
[11:01] once x 2 is 0 x 1 must be 0 so both x 1
[11:04] and x 2 are 0.
[11:05] so that tells us that it is 0 exactly
[11:08] when
[11:09] u is 0 so this proves that it is an
[11:13] inner product on r2
[11:17] let us define what is the norm so norm
[11:19] on a vector space
[11:20] is a function it is indicated by that
[11:23] double lines and we have seen these
[11:26] double lines
[11:27] in the previous in the previous video
[11:30] x goes to norm x which satisfy the
[11:33] following conditions
[11:36] so norm of x plus y is less than or
[11:37] equal to norm of x plus
[11:39] norm of y norm of c times x is
[11:43] absolute value of c times norm of x
[11:46] so remember in the previous video this
[11:49] norm was supposed to represent length
[11:51] so since it represents length it better
[11:53] be positive
[11:54] and so if you have if you scale it the
[11:57] length better remain
[11:58] positive right that that's what is being
[12:00] reflected here
[12:02] so positivity is coming in the third
[12:04] axiom norm of x is always great
[12:07] greater than zero and at 0 precisely
[12:11] when we are dealing with the 0 vector if
[12:13] and
[12:13] only if the vector x is 0.
[12:16] fine so let us recall the length of a
[12:18] vector this is the comment i made in the
[12:20] previous slide
[12:21] u it is given by this expression root of
[12:24] x 1 squared plus x 2 square plus x n
[12:26] squared
[12:28] and this is actually a norm
[12:31] so we have to say that the three
[12:35] previous conditions are satisfied
[12:37] as i said if you multiply this by c
[12:40] this is clearly root of c squared x 1
[12:44] squared plus c
[12:45] squared x 2 squared plus
[12:49] c squared x n squared and the c
[12:52] comes out but with an absolute value
[12:56] and the remaining part is norm of u
[12:59] length of u ah sorry this should have
[13:02] been
[13:03] two parts us see when this is 0
[13:06] this is 0 we have actually checked this
[13:08] so the length is 0 exactly when u 0 this
[13:10] is something we know
[13:14] which leaves us with
[13:17] the triangle inequality namely if you
[13:20] take two vectors u plus v
[13:22] then you compute the sum so this is root
[13:26] of
[13:27] x one plus y one squared plus x two plus
[13:30] y two squared
[13:34] plus x n plus y n squared
[13:40] and on the other hand we have norm of u
[13:43] plus norm of v
[13:44] ah which is x 1 root
[13:48] x 1 square up to x n square this is
[13:52] root y 1 squared plus all the way up to
[13:55] y n squared
[13:57] so i want to say that these this sum is
[14:01] less than or equal to that sum
[14:03] ah and this is something that we know is
[14:06] true
[14:07] ah and i'll maybe not
[14:10] do a proof of this right so what you can
[14:13] do is you can square both sides if you
[14:15] square both sides you will get
[14:17] ah x 1 plus y 1 squared plus all the way
[14:21] up to x n plus
[14:24] y n squared this side you get
[14:28] x 1 squared plus all the way up to x n
[14:30] squared
[14:31] plus y one square all the way up to y n
[14:33] squared
[14:35] and then plus two times this this root
[14:44] and then y one squared plus alpha two y
[14:47] n square
[14:49] and then so to compare these so i want
[14:52] to compare these
[14:53] so to compare these you can expand the
[14:54] brackets if you expand the brackets
[14:57] and you cancel of these square terms you
[14:59] are going to have to compare
[15:01] 2 times x 1 y 1 plus 2 times x 2 y 2
[15:06] plus 2 times x n y n with this side
[15:11] and now i leave it at this point to
[15:15] so you can cancel of the twos as well so
[15:17] you can you have to compare this term
[15:21] with this term here and
[15:24] yeah i i will maybe not get into a proof
[15:28] that this is actually
[15:32] this is less than or equal to that it
[15:34] it's a very
[15:36] something you can do okay so the length
[15:39] function is a norm
[15:40] on rn so
[15:49] let us look at a normal rn
[15:53] which is different from the length
[15:54] function namely you can take the
[15:56] absolute values
[15:57] of the coordinates so
[16:01] norm of u 1 so this one is supposed to
[16:04] ah i think this one has not come out the
[16:06] way i am
[16:08] i intended it to be ah this should have
[16:10] been the subscript
[16:11] uh but did not come out as far as i
[16:13] wanted it anyway
[16:15] so define norm of u ah
[16:18] to be this now the absolute value of x 1
[16:21] plus absolute value of x 2 plus absolute
[16:22] value of x n
[16:23] then this is a norm so let us check that
[16:26] this is a norm
[16:26] so first of all i want to check that
[16:31] if norm u 1 is 0 this is the third axiom
[16:34] what happens well this is a sum of non
[16:37] negative integers
[16:38] so this happens exactly when each x i is
[16:40] 0 in
[16:42] in absolute value which is exactly
[16:44] happening when x i is 0 for all i
[16:46] so for all i which is exactly saying
[16:49] that u is equal to zero
[16:51] so if this norm is zero if this function
[16:53] is zero on you then you better be zero
[16:55] and
[16:56] of course if the if u is zero then the
[16:58] function is zero
[16:59] so this is one thing that we have
[17:01] checked the other is uh
[17:03] if you multiply this by a constant c
[17:06] by a scalar what happens well each term
[17:10] is multiplied by c
[17:11] so i get this expression
[17:15] excuse me i should have put in the dots
[17:19] yeah this expression and i can take my c
[17:23] out common because remember that the
[17:27] absolute value of two numbers multiplied
[17:30] is the absolute value of each multiplied
[17:32] so you take c out absolute value of c
[17:34] out common and you get x 1
[17:37] plus x 2 all these in absolute value
[17:41] so absolute value of x 1 plus absolute
[17:43] value of x 2
[17:44] all the way up to n which is exactly
[17:47] what
[17:48] is the definition of the ah norm here
[17:51] ah so c times this function so this
[17:54] gives you
[17:55] one more ah thing and then the last one
[17:57] that we have to do is
[17:58] the triangle inequality which is saying
[18:01] that if you have u
[18:02] plus v you take this well let us write
[18:05] that down thats x one plus y one
[18:08] plus x two plus y two
[18:11] plus x n plus y n where x i's are the
[18:15] coordinates of u y i's are the
[18:17] coordinates of v
[18:19] but we know that this is less than or
[18:21] equal to x one plus
[18:23] y one this is less than or equal to x
[18:26] two plus y two
[18:27] and then if you rearrange all these
[18:28] terms ah
[18:33] you get that this is ah
[18:36] u one plus v one
[18:41] so this tells you that it is a norm ok
[18:43] so its a fairly simple check
[18:45] ah then its a norm so finally lets
[18:50] explore the relation between the inner
[18:52] product and
[18:54] the norm so suppose you have v which is
[18:57] a inner product space so it has another
[18:59] product which we have represented by
[19:00] these
[19:01] angle brackets let's define this
[19:04] function
[19:05] so this function is norm of v is equal
[19:08] to
[19:09] square root of the inner product of v
[19:11] with itself
[19:12] then the claim is that this is a norm on
[19:14] v let us work this out
[19:16] why this is the norm so first of all
[19:20] norm of v 0 this happens exactly when
[19:23] the square root of
[19:25] the inner product of v with itself is 0
[19:29] which happens precisely when the inner
[19:32] product itself is 0 but remember it is
[19:33] an inner product
[19:34] this happens precisely when v is 0. so i
[19:37] want to prove that
[19:38] this is always positive if
[19:41] if v is non-zero
[19:44] but remember that v comma v
[19:48] is so if v is not equal to zero
[19:52] v comma v is greater than zero that
[19:54] means square root of v
[19:55] comma v is ah strictly greater than we
[19:58] are always looking at the positive
[20:00] square root
[20:01] which means norm of v is strictly okay
[20:03] so the
[20:06] positive non negative and positive part
[20:09] is
[20:10] proved that axiom is proved
[20:15] so the other two axioms are the triangle
[20:18] inequality
[20:19] and if you multiply a scalar what
[20:21] happens let us look at scalar
[20:23] so for the scalar so we have c times v
[20:26] by definition this is
[20:28] cv comma cv
[20:32] but as we know c comes out so this is
[20:35] root of
[20:36] c so it comes out of the first one and
[20:39] it comes out of the second one so c
[20:40] times c
[20:41] ah excuse me this is norm of the inner
[20:44] product of v comma v
[20:46] so this is root of c squared
[20:49] root of e comma v the second part is
[20:52] exactly
[20:53] the norm of v and the first part is mod
[20:58] of
[20:58] meaning the absolute value of c because
[21:00] you are taking root of c
[21:01] squared so if c is a negative number
[21:04] after taking square root you always look
[21:06] at the positive part right so it is the
[21:09] absolute value of c times norm of v so
[21:12] this is the
[21:14] another one of the axioms and finally we
[21:15] have
[21:17] if you have v plus w
[21:21] by definition this is v plus w comma
[21:25] v plus w square root and this is
[21:31] so you have four terms right you have
[21:35] v comma w plus v comma w comma
[21:38] v plus ah w comma w
[21:44] which if you rewrite this is v comma v
[21:46] and this is
[21:47] remember it's a inner product so it's
[21:52] so the first we got the first thing by
[21:54] bilinearity and then
[21:56] because its ah symmetric we get this is
[21:59] 2 times v comma w
[22:02] plus w comma w so
[22:06] let's square this
[22:09] so if you square this you get v comma v
[22:13] plus 2 times the inner product
[22:16] plus w comma w
[22:20] but this is exactly norm of v squared
[22:24] plus norm of w squared plus
[22:27] ah 2 times v comma w
[22:33] and this is less than or equal to
[22:38] norm of v squared plus norm of
[22:42] w squared plus
[22:46] 2 times norm of v
[22:51] norm of w so this needs a little bit of
[22:54] work and then what you will get is
[22:58] that this is norm of v plus norm of w
[23:04] or the whole squared
[23:08] right so we have to prove that norm of v
[23:10] plus w the whole squared
[23:11] is norm of v plus norm of w is less than
[23:14] or equal to norm of v plus norm of w the
[23:16] whole squared
[23:17] yeah the only thing missing here is y is
[23:20] this thing less than or equal to this
[23:23] thing here
[23:24] ah so that that needs a little bit of
[23:26] work
[23:27] uh i which i'll skip for now ah
[23:30] so i guess this tells you the relation
[23:33] between inner products and norms
[23:35] so the main point here is that once you
[23:36] have an inner product it induces
[23:38] a not this is what you have to keep in
[23:40] mind thank you