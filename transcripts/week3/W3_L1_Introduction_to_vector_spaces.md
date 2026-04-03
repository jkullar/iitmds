# W3_L1: Introduction to vector spaces

**Week:** Week 3
**YouTube URL:** https://www.youtube.com/watch?v=dAttVL9a5Go

---

## Transcript

[00:00] [Music]
[00:09] hello and welcome to the
[00:10] max2 component of the online bsc course
[00:13] on data science
[00:15] in today's video we are going to look at
[00:17] vector spaces so we will
[00:19] basically see in abstraction things that
[00:21] we have seen in the past two weeks
[00:24] wherein we saw vectors in rn and
[00:27] we looked at various algebraic
[00:28] properties and we saw that these vectors
[00:30] are related to data because
[00:31] often data comes in a table and we are
[00:34] interested in particular rows and
[00:35] columns of
[00:36] that table and some
[00:39] algebraic manipulations on such data so
[00:42] we are going to study vector spaces
[00:44] this is slightly abstract as compared to
[00:48] previous videos but we will see
[00:51] that once we study this much of what we
[00:54] have done
[00:55] in the previous videos can be
[00:56] generalized to a very vast
[00:59] degree and it will come up when we do
[01:02] vector calculus later on some some
[01:04] principles of this okay so what are
[01:06] vector spaces
[01:08] broadly speaking vector spaces are
[01:09] precisely those places where vectors
[01:11] live
[01:12] right so we have talked about vectors
[01:13] but we have not talked about
[01:15] what where these vectors are coming from
[01:17] because they always came from rn
[01:19] yeah so in this video i am going to try
[01:21] and explain that
[01:23] there is a general notion of a vector
[01:24] space and then
[01:26] we use these concepts to glean some
[01:30] information out of
[01:32] vectors which will come in handy later
[01:34] on ok
[01:35] so let us begin so let us recall first
[01:38] what are vectors in rn
[01:39] so we have defined vectors in
[01:42] r n as n tuples of real numbers right so
[01:46] x 1 x 2 x
[01:47] n where each x i is a real number so now
[01:50] suppose we have two vectors
[01:52] ah x 1 x 2 x 1 and y 1 y 2 y n and r n
[01:55] and we have a scalar which means a real
[01:58] number
[01:59] c so we can define addition of these
[02:02] vectors
[02:03] so addition is remember coordinate wise
[02:05] what that means is if you do x 1 x 2 x n
[02:07] plus y
[02:08] 1 y 2 y n you get x 1 plus y 1 in the
[02:10] first place x 2 plus y 2 in the second
[02:12] place
[02:12] and so on up till x n plus y n in the n
[02:15] th place
[02:16] similarly we have defined scalar
[02:18] multiplication so this
[02:20] meant you take this scalar c this is a
[02:23] real number
[02:24] and multiply it to let us say x 1 x 2 x
[02:26] n and what we get
[02:27] is coordinate wise multiplication which
[02:30] means you get c times x 1 c times x 2
[02:32] and then c times x n at the end ok
[02:37] so what are the properties of addition
[02:39] and scalar multiplication
[02:41] so suppose we have vectors v w and
[02:45] v prime in rn and suppose a and b are
[02:48] scalars
[02:48] so we are going to bring out certain
[02:51] properties of vectors these are going to
[02:53] be very easy
[02:54] and you might wonder why we are doing
[02:56] this but in the subsequent
[02:58] five minutes from now we are going to
[03:00] use these same properties and
[03:02] they will be the guiding principles for
[03:05] what is the vector space
[03:07] okay so one of the properties we know
[03:08] about vectors is that if you take two
[03:10] vectors
[03:10] then if you add them in a particular way
[03:15] p plus w then you could write them in
[03:16] the opposite way meaning w plus v
[03:18] and both these give you the same answer
[03:21] so v plus w is w plus v
[03:24] similarly if you take three vectors you
[03:27] could add them
[03:28] and then we have to first ask should i
[03:31] add the first two
[03:32] first and then the third to the result
[03:34] or should i add the
[03:36] last two the second and third first and
[03:38] then add that to the first
[03:40] and the answer is it doesn't matter
[03:43] because they are clearly the same
[03:44] yeah this is easy checking in in rn
[03:48] ok and then we have something called the
[03:50] 0 vector and
[03:52] the 0's vector satisfies that 0 vector
[03:55] is the one where
[03:56] all the entries are 0 so 0 0 0 n times
[04:00] and it satisfies that if you add that to
[04:02] any vector
[04:03] ah from either side meaning v plus zero
[04:06] or zero plus v
[04:07] then you get back the vector v
[04:11] ok then we have a vector called minus v
[04:14] which is ah the so if v is v 1
[04:19] v 2 v n the components of v 1 v 2 v and
[04:21] then minus v
[04:22] has components minus v 1 minus v 2 minus
[04:24] v n
[04:25] and we can clearly see that if you do v
[04:27] plus minus v
[04:28] then you get 0 and similarly if you do
[04:31] minus v plus v
[04:32] we get 0 and then we have this
[04:37] very nice property that if you take 1
[04:40] which is the scalar number one the real
[04:43] number one
[04:44] and multiplied to v well you get just v
[04:47] right so v
[04:48] ah one times v is v
[04:51] ok and then if you take these two
[04:53] scalars a and b
[04:55] and then if you take a times b that's a
[04:58] new real number and then multiply that
[05:00] to v
[05:02] then that is the same as first
[05:03] multiplying b to v
[05:05] and then multiplying a to the result of
[05:08] what we got ok
[05:12] and then you have a times v plus w
[05:15] which is a times v plus a times w
[05:18] so a distributes over addition so scalar
[05:21] multiplication distributes over addition
[05:24] and then finally we have if you take a
[05:27] plus b
[05:27] times v so you take these two real
[05:30] numbers you add them
[05:31] and then multiply that to b that is the
[05:33] same as first
[05:34] doing scalar multiplication of a and v
[05:37] then b and v
[05:38] and then adding ah the two yeah that
[05:41] gives you the same thing
[05:42] okay so these are clearly obvious
[05:44] properties in
[05:46] in rn which you can
[05:49] see or you can do the algebra and check
[05:50] that they are the same
[05:53] that they are satisfied so we are going
[05:56] to use these
[05:56] to define a vector space ok so vector
[06:00] space is a set
[06:01] with two operations like addition and
[06:04] scalar multiplication so they are in
[06:06] fact called addition and scalar
[06:07] multiplication
[06:09] ah and it has the properties one through
[06:11] eight ok so
[06:12] i am going to make a formal definition
[06:14] now so vector space v
[06:16] o over r so y over r ah what
[06:20] this means is that the numbers we are
[06:22] going to use for scalar multiplication
[06:24] are real numbers
[06:25] so actually you could use other kinds of
[06:28] numbers
[06:29] but for this course real numbers are
[06:31] good enough ok so vector space v over r
[06:33] is a set
[06:34] along with two functions ah which i am
[06:36] going to denote by plus
[06:38] so this plus is going to correspond to
[06:39] what was addition
[06:41] in ah rn and
[06:44] dot dot was going to is going to
[06:46] correspond to what is scalar
[06:47] multiplication in
[06:49] rn so this dot is from
[06:52] r cross v to v that means if you take a
[06:56] scalar and v and an element of v
[06:59] you get back an element of v and
[07:01] similarly if you take a
[07:04] two ah elements of v you get v yeah so
[07:07] what is written here is that is for each
[07:09] pair of elements v one and v two and v
[07:12] there is a unique element v one plus v
[07:14] two in v
[07:15] and for each constant that is a scalar
[07:18] in
[07:19] in r and vector v in v
[07:23] there is a unique element c dot v in v
[07:26] now that is what we mean by
[07:28] we have these two kinds of functions
[07:29] yeah so you should use
[07:31] the intuition here is that plus
[07:32] corresponds to addition
[07:34] and dot corresponds to scalar
[07:35] multiplication okay
[07:37] so it is standard to suppress the dot
[07:40] and to write
[07:41] c times v instead of c dot with v
[07:44] okay so this is exactly what we did in
[07:46] rn right ah we didn't
[07:48] we don't keep using multiplied by right
[07:51] we
[07:51] keep we suppress the multiplied by
[07:54] because
[07:54] we consider it as obvious so similarly
[07:58] here we are going to suppress the dot
[08:00] and we are going to write just c times v
[08:02] for scalar multiplication ok so the
[08:05] functions plus and dot are required to
[08:07] satisfy the following rules and this is
[08:09] exactly the set of rules one through
[08:11] eight
[08:12] okay so what are the rules if you take
[08:14] two vectors v one and v two so what are
[08:16] vectors vectors are elements of this
[08:18] set capital v yeah our vector space
[08:21] capital d
[08:22] ok so if you take two vectors v one and
[08:24] v two v one plus v two is v two plus v
[08:27] one if you take three vectors v one v
[08:29] two and v three
[08:30] then you can first add v one and v two
[08:32] and then add the result to v three
[08:34] or you can first add uh
[08:38] v two and v three and add the result v
[08:40] one and ah
[08:42] the the outcome of both these
[08:45] processes is the same yeah so this is
[08:47] this is uh in other words to say that
[08:49] the
[08:50] um operation plus the function plus is
[08:53] associative
[08:55] ok that is a mathematical terminology
[08:57] for this okay
[08:58] there exists an element b in v sorry
[09:01] zero and v
[09:02] ah which we are going to denote it also
[09:05] by
[09:06] zero and what does it satisfy it
[09:08] satisfies that
[09:09] v plus 0 is v yeah so when you add
[09:12] any vector to 0 then you get back the
[09:16] same vector yeah
[09:17] and property 1 here axiom 1
[09:20] ensures that v plus zero is the same as
[09:22] zero plus v so you could have we could
[09:24] also have written this as v plus zero
[09:25] zero plus v is v which is how you will
[09:27] find it in some books
[09:29] ok so for every element p there exists
[09:33] an element v
[09:33] prime such that v plus v prime is zero
[09:36] yeah so this v prime is like minus v
[09:39] this v prime is playing the role of
[09:41] minus v
[09:43] ok so for each element v in v one times
[09:46] v
[09:46] is v what is this one this one is
[09:49] the one in the real numbers and what is
[09:51] this one times the
[09:52] this is scalar multiplication so we are
[09:54] scalar multiplying one and v
[09:57] and the output is just v and
[10:00] then again if you have a ah two elements
[10:03] a and b
[10:04] ah that is two real numbers a and b and
[10:07] you
[10:07] choose to multiply them to a
[10:11] vector v we can do it in two possible
[10:13] ways we could first multiply a and b
[10:15] that is multiplication real numbers and
[10:18] then multiply the product
[10:20] by that i mean scalar multiply the
[10:22] product to v that is the left hand side
[10:24] of this
[10:25] expression or we could do b times v
[10:28] which is scalar multiplication of b and
[10:30] v and then so that is
[10:32] again a vector and then we take a and
[10:35] that
[10:36] new vector b times v and do scalar
[10:38] multiplication and we get a times
[10:40] b v okay so both these
[10:45] operations both the ways of doing this
[10:48] yield the same result that is what this
[10:50] is saying
[10:51] ok and then finally ah well not finally
[10:54] we have one more to go
[10:56] ah so for each element a in
[10:59] r so that means each real number if you
[11:01] take two vectors v one and v two and you
[11:03] do a times v one plus v two
[11:05] then that is the same as doing a times v
[11:07] one plus
[11:09] a times v two yeah so it distributes
[11:11] over
[11:12] addition scalar multiplication
[11:13] distributes over addition
[11:16] ok and then if you have two real numbers
[11:19] a and b
[11:20] and you have a vector v then you can get
[11:22] a plus b
[11:23] times v or you can do a times v
[11:26] plus b times e and the result is the
[11:29] same
[11:30] yeah this is exactly
[11:34] the 1 through 8
[11:38] that we saw two slides back yeah or
[11:40] maybe in the previous
[11:41] yeah two slides back ok which were
[11:43] properties of
[11:45] um the vectors in rn
[11:48] and we are going we are saying that any
[11:51] set
[11:52] along with these two operations these
[11:54] two functions plus and dot
[11:56] which satisfies those eight conditions
[11:59] is a vector space okay now
[12:04] of course one so obviously an example of
[12:06] a vector space is
[12:07] r n with the usual addition and scalar
[12:10] multiplication
[12:12] ah but there are other examples for
[12:14] example we could take the matrices
[12:16] so we have seen matrices in the last
[12:18] week or maybe
[12:19] last two weeks ah so you take m by n
[12:23] matrices with real
[12:24] entries so we are going to denote that
[12:27] set by
[12:28] m ah subscript m cross n
[12:32] we have done this last week ah
[12:35] so this is the set of all matrices m by
[12:37] n matrices with
[12:38] ah real numbers so m rows and n columns
[12:41] in this
[12:42] any particular matrix ok so now
[12:45] remember that when we
[12:48] dealt with matrices we defined addition
[12:51] of matrices and we define scalar
[12:52] multiplication of matrices
[12:54] yeah this is from the second video maybe
[12:57] ok so how did we do that i will quickly
[12:59] recall so if you do a plus b
[13:02] ah and so i have to if if i have to tell
[13:05] you what is a plus b
[13:06] i have to tell you what is the ijth
[13:07] entry of a plus b that is what specifies
[13:10] a matrix
[13:10] so the ijth entry of a plus b is
[13:14] you take the ijth entry of a and add
[13:16] that to the ijth entry of b right this
[13:20] is how you define the
[13:22] ah sum a plus b
[13:26] and similarly if you take the scalar
[13:29] multiplication that means i have to tell
[13:30] you what is c
[13:31] times a where c is a real number and a
[13:33] is a matrix
[13:35] then what you do is you take c and
[13:38] multiply to each entry of a
[13:40] right that is scalar multiplication so
[13:42] the ijth entry in particular is c
[13:43] times a i j ok so
[13:46] we have addition and scalar
[13:48] multiplication
[13:50] and we actually
[13:54] have checked along the way ah in that
[13:56] video for matrices
[13:58] ah some of the those are stated and some
[14:00] of those we actually did
[14:02] we checked those axioms or we at least
[14:05] stated those
[14:06] axioms so the conditions required for
[14:08] this to have a vector
[14:09] to be for the matrices to be a vector
[14:12] space
[14:13] have been stated or checked already and
[14:15] if not they are any way easy to check
[14:17] so i would encourage you i need to
[14:20] check them again if yeah if you have
[14:24] forgotten
[14:25] okay so that makes the m by n matrices
[14:29] with real entries a vector space
[14:33] ok another example is if you take
[14:37] solutions of a homogeneous system
[14:39] ok so we have seen systems of linear
[14:41] equations
[14:42] and we have seen what is the homogeneous
[14:46] system so homogeneous system looks like
[14:48] a x equals 0
[14:49] and then solutions are exactly those
[14:52] vectors
[14:53] x such that this is satisfied
[14:57] so lets ah look at this set
[15:00] so consider the set of solutions v so we
[15:02] are going to get write
[15:03] v as or denote by v the set of solutions
[15:07] of
[15:08] homogeneous system ax equals 0
[15:11] and a is a matrix let us say of size m
[15:14] by n
[15:14] so this means it has m linear equations
[15:18] in n unknowns or n variables
[15:21] so x is ah consists of the
[15:25] coordinates x 1 x 2 x n ok
[15:28] so now if we have two vectors v and w
[15:32] well i am calling them vectors because
[15:34] we know that v and w
[15:36] are already i mean this is a set of
[15:39] solutions so this is already a subset of
[15:42] rn right so now the set v
[15:46] is a subset of rn so let us keep that in
[15:48] mind so when i say vectors i mean
[15:50] vectors in rn
[15:52] okay so we have two vectors
[15:55] in rn which are actually in this subset
[15:57] v
[15:58] okay so both of the these are ah
[16:01] solutions of this linear system
[16:02] of this homogeneous system so then i can
[16:05] look at v
[16:06] plus w and i can do a times v plus w
[16:10] and then we have seen that
[16:13] how matrix products work that tells us
[16:15] that a times v plus w is a times
[16:18] p plus a times w but both v and w are
[16:23] coming from capital v which is the set
[16:26] of solutions
[16:27] that means a times v 0 and a times w 0
[16:30] that means this is 0 plus 0 which gives
[16:33] a 0.
[16:34] so what is the net result the net result
[16:36] is that
[16:37] v plus w is in v
[16:41] ok so similarly if you do ah
[16:44] if you take a scalar c and multiply it
[16:47] to a
[16:48] vector little v such that little v is in
[16:52] capital v meaning little v is a solution
[16:55] of this homogeneous system
[16:57] then i can do a times c times v
[17:01] so c times we remember scalar
[17:03] multiplication
[17:04] but ah well we have seen this before you
[17:07] can actually
[17:08] take this c out because um
[17:12] i mean yeah okay so you can check this
[17:14] if you are
[17:16] unsure so basically you can if if you
[17:18] want you can write this as
[17:20] c times the identity matrix ah of size n
[17:23] by n and then you can
[17:24] move it to the other side of a and write
[17:26] it as c times identity matrix
[17:28] of size m by m that's one way
[17:32] and there are or you could just directly
[17:35] do this
[17:35] by checking out the multiplication
[17:39] ok so the c comes out ah and then that
[17:41] gives us c times a times v
[17:43] but remember v is a solution of this
[17:46] system
[17:47] which means that a times v 0 that means
[17:50] you get c times 0
[17:51] which is 0 so what is the net result
[17:54] the net result is that c times v belongs
[17:58] to
[17:58] v so ah what this implies is that
[18:03] ah addition and scalar multiplication on
[18:06] rn
[18:07] restricts to the solution set ok so i
[18:09] will qualify this so
[18:11] from here first of all what we can say
[18:13] is that
[18:14] v plus w belongs to v and from here what
[18:17] we can say is that
[18:19] c times v belongs to v ok
[18:22] and i am saying that once we know this
[18:25] ah we know it is a vector space now
[18:29] you are probably wondering why why am i
[18:31] saying this because i need to check the
[18:32] axioms right we there is a set of eight
[18:34] conditions
[18:35] and i have to check those well so the
[18:37] point is
[18:40] this is remember a subset of r n
[18:44] and we already know that for r n all
[18:45] those axioms hold so for every subset
[18:48] also
[18:48] those axioms will hold
[18:52] the only axiom that we have to extra
[18:54] check
[18:55] may be is
[18:59] that well not the axiom but what we have
[19:01] to really check is that
[19:02] when we do addition
[19:06] then we could in principle get a vector
[19:08] which is not in v
[19:09] right so we have seen here that that
[19:12] does not happen
[19:13] if we add two vectors in v we get a
[19:15] vector in v
[19:16] and similarly if you scale or multiply
[19:18] you get a vector in v
[19:19] ok and that is the only thing that is
[19:21] required once we
[19:23] have done this we know that this is a
[19:25] vector space because all the other
[19:26] axioms are already satisfied because
[19:28] since v is a subset of
[19:31] rn okay so this is
[19:35] an example of what is called a subspace
[19:37] of a vector space
[19:39] so basically it is a subset along with
[19:41] these
[19:42] properties that if you take two things
[19:44] two vectors in that subset
[19:46] the sum is in the subset and if you take
[19:48] a vector in the subset
[19:50] and you do scalar multiplication then it
[19:52] belongs to the subset yeah so
[19:54] automatically
[19:55] this subset will inherit the ah
[19:58] the property of being a vector space
[20:02] great so this is an example let us look
[20:05] at a couple of non examples
[20:07] ah so suppose i do
[20:10] addition and multiplication r two as
[20:12] follows this some strange
[20:13] addition and multiplication so you do x
[20:16] one comma x two plus y one comma y two
[20:18] is x 1 plus y 1 so the first coordinate
[20:21] there is addition and in the second
[20:23] coordinate there is
[20:24] subtraction so you do x 2 minus y 2
[20:28] ok so this is
[20:32] the definition of the plus
[20:35] okay and then c times x 1 x 2 is c times
[20:38] x comma
[20:39] c times x 2. so the scalar
[20:40] multiplication is the usual scalar
[20:42] multiplication
[20:44] ok so some things fail what fails so
[20:47] check that one two and eight fail
[20:49] ah so first of all let's let's
[20:53] just to get a hang feel for this let's
[20:56] check that one fails
[20:58] so one fails why does one fail
[21:02] because if i do x one comma x two plus y
[21:05] one comma y two well let's written up
[21:07] up here that is x one plus y one
[21:11] ah x two minus y two and if i do
[21:15] y 1 comma y 2 plus x 1 comma x 2
[21:21] then i get y 1 plus x 1 which is not a
[21:25] problem
[21:26] but the next term is going to give me y
[21:28] 2 minus x 2
[21:29] and these are not the same as you can
[21:31] see for example
[21:33] ah if you do let us say 0 0
[21:36] plus 1 1 and 1 1 plus 0 0
[21:43] the answer here is 1 comma minus 1 the
[21:46] answer here is
[21:48] 1 comma 1 they are not the same okay
[21:52] so these two are not the same so the
[21:54] first axiom said that
[21:55] v plus w is w plus v and that fails you
[21:58] can check
[21:59] similarly that the second axiom fails
[22:01] and you can check similarly that the
[22:03] eighth axiom fails
[22:04] um so i'll leave that part to you
[22:08] okay so let's do another example
[22:12] ah so this time let's define it as
[22:15] x 1 comma x 2 plus y 1 comma y 2 is x 1
[22:18] plus y 1 comma 0
[22:20] and c times x 1 comma x 2 is c times x 1
[22:22] comma 0
[22:24] okay and this time i maybe want to do
[22:26] the checking
[22:28] ah so what fails check that the third
[22:31] fourth and fifth axioms
[22:32] fail ok i i will not
[22:36] [Music]
[22:38] let me leave this to you as an exercise
[22:40] yeah this is not
[22:41] hard to do but it is important to do
[22:43] this because that way you will
[22:46] sort of develop an idea for what is a
[22:48] vector space
[22:50] and in particular how how defining these
[22:52] operations
[22:55] is really at the heart of what is the
[22:56] vector space addition and scalar
[22:58] multiplication
[23:00] ah let us quickly recall what we have
[23:03] done
[23:04] thus far in this video we have defined
[23:08] what is the vector space which we saw
[23:09] was basically the abstraction of
[23:11] the properties of rn we saw the examples
[23:15] of
[23:16] vector spaces apart from rn for example
[23:19] matrices
[23:20] and very importantly the example of
[23:23] the solution set of a homogeneous system
[23:26] of linear equations
[23:27] that is really what we are going to ah
[23:29] that you should remember
[23:30] and keep in mind as we go ahead so thank
[23:34] you
[23:38] you