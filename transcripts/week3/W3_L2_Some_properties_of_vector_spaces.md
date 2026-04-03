# W3_L2: Some properties of vector spaces

**Week:** Week 3
**YouTube URL:** https://www.youtube.com/watch?v=yUISwV4LE20

---

## Transcript

[00:00] [Music]
[00:09] hello and welcome to the
[00:11] online bfc program on data science and
[00:13] programming
[00:14] in this video we are going to continue
[00:16] from our previous video where we
[00:18] introduced vector spaces
[00:19] and study some properties of vector
[00:21] spaces in particular we will build on
[00:23] the axioms that we have seen
[00:25] in the definition of a vector space
[00:29] so let us derive
[00:32] a consequence of the
[00:35] axioms the conditions that are
[00:39] needed in order to for something to be a
[00:41] vector space so this is called the
[00:42] cancellation law of vector addition
[00:45] so if v one plus v you have three
[00:47] vectors v one v two v three in the
[00:48] vector space v
[00:50] and v one plus v three is v two plus v
[00:52] three then v
[00:53] one is v two ok
[00:56] now ah let's first see how
[01:00] we do this in rn so let's try to recall
[01:04] how we do this in rn
[01:06] so in rn what do we do so in rn what we
[01:09] do is
[01:11] let me do it for example in ah
[01:15] m three r three
[01:23] z one z two z three
[01:27] plus y one y two y three
[01:34] so how will i conclude that x one x two
[01:36] x three is the same as
[01:37] z one z two z three well what i will say
[01:40] is
[01:40] this means x one plus y one is ah
[01:45] z one plus y one or more generally x i
[01:48] plus y i is z i
[01:49] plus y i where i is between one and
[01:52] three i is
[01:53] one two three and then from real numbers
[01:56] i know that x i plus y i is z i plus y i
[01:58] implies x i is equal to z how do i know
[02:01] that
[02:01] because if you
[02:03] [Music]
[02:05] add minus y i on both sides then indeed
[02:08] what you get is
[02:10] x i z so you can subtract y i from both
[02:12] sides you know subtract
[02:15] y i
[02:19] from both sides
[02:24] okay so this will imply x i is z
[02:30] and from here we conclude that
[02:33] uh two x three is the same as z one z
[02:36] two z three
[02:37] okay so this is how we do it for uh real
[02:39] numbers
[02:40] sorry for r three or in general for any
[02:43] rn
[02:44] ah so then let's see how to do it
[02:47] i mean we can use the same idea to do it
[02:49] for general vector spaces
[02:51] so e one plus v three is v two plus
[02:55] v three so this was the argument in rn
[03:06] ok so now we are given ah
[03:11] that v one plus v three is v two plus v
[03:14] three
[03:15] this argument for general vector spaces
[03:20] because v three is v two plus v three
[03:23] well
[03:24] one of the axioms told us that um
[03:28] for v three there there exists um
[03:32] some v three prime such that
[03:36] ah so there exists v
[03:39] three prime such that v three plus
[03:43] v three prime is zero
[03:47] so what that tells me is v one plus v
[03:49] three
[03:50] plus v three prime is v two plus v three
[03:56] plus v three prime but now we know that
[04:00] addition is associative so i can write
[04:03] this as v 1 plus
[04:06] v 3 plus v 3 prime is v 2 plus
[04:10] v 3 plus
[04:13] v three prime um
[04:17] so which implies that
[04:20] v one plus zero is v two plus zero
[04:24] which implies v one is v two yeah so
[04:27] this proves a
[04:28] statement here so notice that all i used
[04:32] was
[04:33] the axioms yeah i did not use any other
[04:35] thing any other information about
[04:38] the structure of v because really i do
[04:41] not know anything else yeah the only
[04:43] things i know are the axioms
[04:45] ok so whenever you want to check
[04:47] something for a vector space you have to
[04:49] use the axioms
[04:50] but to get intuition about whether it is
[04:52] correct or wrong and how to go about a
[04:54] proof in case it is correct
[04:56] you should look at rn see how you do it
[04:58] in rn and then
[04:59] ah sort of extrapolate that idea for
[05:02] general vector spaces
[05:04] ok so here is a corollary of
[05:08] the cancellation law the vector 0
[05:11] described in 3 is unique so remember one
[05:15] of the axioms was that
[05:16] there is a vector called 0 but maybe
[05:19] there are many vectors satisfying that
[05:20] same property
[05:21] so this corollary says you cannot have
[05:23] many vectors
[05:24] and here is another corollary
[05:28] namely that if you looked at the
[05:32] vector v prime this was in axiom four
[05:34] which
[05:35] so this axiom four is what we used in
[05:37] order to conclude the cancellation law
[05:39] by looking at v three prime right so the
[05:42] vector v
[05:43] prime described in four is unique and it
[05:45] is standard to refer to it as minus v
[05:47] yeah and ah even this reference to minus
[05:50] v will be clarified in a
[05:52] upcoming slide okay so maybe let us
[05:55] quickly do
[05:56] this proof from
[06:00] the cancellation law so suppose i have
[06:03] another
[06:03] vector called
[06:06] w such that w also satisfies the same
[06:10] property that v
[06:11] does so suppose
[06:16] there exists w in v
[06:20] such that v plus w is v
[06:23] for all v in v right this was what
[06:27] ah zero satisfied ok but then v
[06:30] plus w is v means what v plus w
[06:34] is v plus 0
[06:38] right because v plus 0 is also v
[06:41] yeah so i can write it like this but
[06:43] then i can cancel
[06:45] yeah so i am adding v on both sides so i
[06:47] can cancel v
[06:49] so the idea is here you add v prime
[06:52] right and so that leaves us with ah
[06:55] w 0 so cancellation means i can do this
[06:59] that leaves us with w 0 okay so the
[07:02] vector 0 is disk
[07:03] as described in the third axiom is
[07:05] unique
[07:06] okay and similarly the vector v prime
[07:08] described in 4 is unique and
[07:11] so we have v plus v prime is
[07:16] zero so now suppose
[07:19] v double prime also satisfies this
[07:33] so then v plus v prime zero is
[07:39] v plus v double prime ok and now you can
[07:42] use cancellation
[07:44] so cancel v
[07:48] ah and therefore v prime is equal to v
[07:50] double prime
[07:52] ok so that is
[07:56] that is the proof of this corollary from
[07:59] the cancellation law
[08:01] fine lets ah look for some other
[08:05] properties
[08:06] so in any vector space v the following
[08:09] statements
[08:10] hold true ah zero times v zero for each
[08:14] v
[08:16] ah minus c times v is minus of
[08:19] c v and that is the same as c times
[08:22] minus v
[08:23] so what is minus v v minus v is exactly
[08:26] the vector v
[08:26] prime ah which was described in axiom 4
[08:30] and
[08:30] our previous slide told us that it is
[08:33] unique
[08:34] and hence we can refer to it as minus v
[08:36] because
[08:38] we know that that is a vector so that
[08:40] when you add it to v you get 0
[08:42] okay so c times 0 is 0 for each
[08:48] constant in our e scalar c in r
[08:52] so let's try and prove this so what i
[08:55] can do is i can look at zero plus
[08:58] zero times v and
[09:02] one of the axioms tells me that this is
[09:04] zero times v plus zero times e
[09:07] on the other hand zero times v ah
[09:10] is sorry zero plus zero
[09:13] is exactly zero which is zero times v
[09:17] right so what is the net result and that
[09:19] result is that zero times v
[09:21] zero times v plus zero times v
[09:26] so you can write this as zero times v
[09:28] plus zero
[09:29] is zero times v plus zero times v cancel
[09:33] zero times v
[09:38] and that implies zero is equal to zero
[09:42] times v
[09:44] so that gives us the result ok and then
[09:48] we have minus c times v is minus ah
[09:51] c v is c times minus v so how do i get
[09:54] this
[09:55] the idea is exactly what we have done
[09:56] above so
[09:58] we have c plus minus c times v
[10:03] ah is c times v plus
[10:06] minus c times v but on the other hand i
[10:09] know that this is zero times v
[10:11] which we have just proved zero so
[10:14] c times v plus ah minus c times v
[10:18] is zero yeah so that means minus c times
[10:21] v
[10:23] ah satisfies the condition required of
[10:28] the negative of cv okay so this implies
[10:32] minus c times v is minus of
[10:36] cv and then similarly you can check for
[10:39] c times
[10:40] minus v
[10:44] ok ah finally we have c times 0 0
[10:48] and maybe i leave this to you because it
[10:49] is in a very similar spirit to what we
[10:51] have done earlier so check this
[10:58] fine so lets do
[11:02] an example sort of from so to say from
[11:04] real life
[11:05] ah this is an example that we have seen
[11:07] in the previous video
[11:09] ah the example of stock taking ah
[11:12] so what
[11:16] do we have here we have stock taking in
[11:17] the grocery shop
[11:19] so we have five items rice and kg dal in
[11:22] kg
[11:23] oil litters biscuits and packets
[11:26] and soap bars okay and the first column
[11:29] describes how many of which quantity is
[11:32] in stock
[11:33] the second column describes the
[11:37] demand for each product
[11:40] for buy array the
[11:43] second third column describes the same
[11:45] thing for buyer b the fourth one for
[11:46] buyer c
[11:47] and the last one describes what is the
[11:50] new stock that has arrived
[11:54] so what is i mean we did vectors in this
[11:57] context by looking at the
[11:58] corresponding column vectors and and so
[12:01] on
[12:02] so but we can also think of this as a
[12:05] abstract vector space
[12:07] so what is the vector space showing up
[12:10] here
[12:11] [Music]
[12:20] so the vector space is
[12:29] the quantity of rice in kg
[12:35] the quantity of
[12:40] dal in kg
[12:45] the quantity of
[12:55] oil liters
[13:04] the number of
[13:07] biscuits or the number of biscuit
[13:10] packets
[13:19] and finally the number of soap bars
[13:32] yeah so it is this set
[13:37] okay and so the
[13:40] claim is that this is a vector space why
[13:42] because if you add you add coordinate
[13:44] wise
[13:45] and what you get is
[13:49] so if you have two two vectors in this
[13:53] are added
[13:54] you get the total quantity of rice
[13:57] within those two vectors the total
[14:00] quantity of dal in kg the
[14:02] total quantity of oil liters
[14:05] the number of biscuit total number of
[14:07] biscuit packets
[14:08] and the number of soap bars
[14:12] total number of soap bars right that is
[14:14] how you do addition
[14:16] and scalar multiplication is ah
[14:19] coordinate wise
[14:22] ok so it so happens that this
[14:26] vector space looks very much like
[14:35] r five ok
[14:39] and why is that because we have five
[14:41] quantities
[14:43] ok and of course here now
[14:46] once we write it like this we have to
[14:48] also ask what does one mean by
[14:52] negative quantities and negative
[14:56] number of soap bars so this again we saw
[14:59] in that example
[15:00] ah what negative corresponded to so
[15:03] negative corresponding to demand and
[15:06] positive corresponded to
[15:08] supply so negative corresponds
[15:29] right so for example if you have minus 2
[15:31] kgs of
[15:33] rice that means that there is a demand
[15:36] for 2 kgs of rice
[15:37] right and if we say that there are
[15:41] 3.5 liters of oil
[15:44] that means there is a supply of 3.5
[15:47] liters of oil
[15:50] um and then we can use this plus and
[15:52] minus in order to
[15:54] take stock this was exactly how we did
[15:56] it in that example
[15:57] ok so um of course one has to also
[16:02] interpret
[16:02] things like what is half a biscuit
[16:04] packet or what is one
[16:06] eighth of a soap bar so one of the
[16:09] things that
[16:10] we do as a result is that we often
[16:12] express them in units
[16:14] for which we can have any real number
[16:17] instead of
[16:18] only natural numbers right so
[16:21] um then it seems more natural so for
[16:24] example
[16:25] if instead of biscuit packets we had
[16:27] written
[16:31] 100 grams of biscuits if we know that
[16:34] let's say
[16:35] one biscuit packet is 100 grams okay or
[16:37] if instead of soap bar
[16:39] we had written 400 grams of soup yeah
[16:42] then there is no issue with decimal
[16:44] places or what
[16:45] we add and subtract
[16:49] ah so this is another example
[16:54] of a vector space and maybe we will end
[16:56] with this example of
[16:58] a fine slats which you are going to see
[17:00] again later
[17:01] ah so suppose we have so this is a
[17:03] slightly geometric
[17:05] view of vector spaces ah and a
[17:07] deliberately
[17:09] convoluted one so that i want you to ah
[17:12] sort of also be
[17:14] comfortable with the geometry involved
[17:16] here
[17:18] so yeah maybe before i start the example
[17:21] i should
[17:21] point out that much of what we will do
[17:23] is formal algebra
[17:25] but behind the scenes there is geometry
[17:27] which is guiding our algebra
[17:29] right whenever we say r3 or r two
[17:32] ah in our mind we we have geometry yeah
[17:35] we
[17:36] understand ah two dimensional space or
[17:38] three dimensional space
[17:40] ok so suppose v is a plane parallel to
[17:42] the x y plane
[17:43] so we are going to define an addition
[17:44] and a scalar multiplication of
[17:46] points on v so scalar multiplication
[17:52] is going to be done as follows so let q
[17:55] belong to this
[17:57] plane and let c be a constant
[18:00] so we project q under the x y plane
[18:02] scale the resulting vector by c
[18:05] and project the result back to v yeah
[18:07] this is the
[18:08] procedure for doing scalar
[18:10] multiplication so what is c times q
[18:12] c times q is the tip of the obtained
[18:15] arrow
[18:16] ok this is the procedure
[18:19] ah for scalar multiplication ah maybe
[18:22] let me draw a quick picture
[18:24] here so
[18:37] so here is your plane here is your point
[18:43] so drop ah this perpendicular to the x y
[18:46] plane
[18:54] and then draw this
[19:00] line here and then
[19:05] if you want to scale this by c
[19:09] so if you scale it by c then that means
[19:13] we are going to get some new
[19:16] vector something like this and then
[19:19] project this back
[19:20] up to the um
[19:24] original space so you will get may be
[19:28] something here
[19:29] ok so this is your point q
[19:34] and this is your point c times q okay
[19:37] that is scalar multiplication
[19:40] ok so here is
[19:43] how you do addition
[19:47] [Music]
[19:50] ok and we are going to watch this
[19:52] edition uh this is thanks to our
[19:54] support team ah so here's your
[19:58] plane which is parallel to the xy plane
[20:02] and now we take two points on this plane
[20:07] which we want to add so now we draw our
[20:10] usual vectors
[20:12] ok and then we project this down
[20:17] ok and now so now this is in the xy
[20:21] plane so in the xy plane we know how to
[20:22] act because that is exactly r2
[20:24] that is the parallelogram law so you use
[20:26] the parallelogram law
[20:28] add them and then
[20:32] you project the entire thing back to
[20:34] your original plane
[20:36] that you are working with and now the
[20:39] newly obtained point
[20:41] ah which you can see over there
[20:45] is the sum okay this is the
[20:48] way you add
[20:51] so i hope the video showed you the
[20:54] geometry
[20:55] involved in things like addition ah
[20:58] so now the question is
[21:01] so we have defined order scalar
[21:03] multiplication and addition on this
[21:05] set and now i leave you to check that
[21:07] this is a vector space
[21:09] ah you can either do it geometrically or
[21:12] better to do it both ways
[21:13] so try to think of geometrically by
[21:16] visualization
[21:17] why this is a vector space
[21:21] or you can just write down the algebra
[21:24] and
[21:24] and work out that this is indeed a
[21:26] vector space
[21:27] so in either case what can help you is
[21:31] the following
[21:32] so the idea behind the addition and
[21:34] multiplication scalar multiplication
[21:36] here is
[21:37] that really you are looking at vectors
[21:40] we
[21:40] we are taking points drawing the
[21:42] corresponding vector but then
[21:44] remember that you project down right so
[21:46] this is
[21:47] essentially what we are doing is we are
[21:50] looking at arrows
[21:51] which start at the point where the z
[21:54] axis intersects this plane
[21:57] and where the tip is the point you are
[21:59] interested in okay so you take those
[22:01] kinds of arrows
[22:02] and then you do addition and scalar
[22:04] multiplication for those arrows exactly
[22:07] the way you do it
[22:08] for r2 this is this is really at the
[22:10] heart of what is going on
[22:11] ok so i will leave that
[22:15] visualization to you and i hope you can
[22:19] see that this is indeed very similar to
[22:21] what we do in r2
[22:23] okay so let me summarize what we have
[22:24] seen in this video
[22:26] so in this video we saw we began by
[22:29] seeing the uh some x some more
[22:32] properties of vector spaces
[22:34] in particular things like how the 0
[22:36] vector behaves and how
[22:38] the negative of an of a vector behaves
[22:42] and so on
[22:44] we saw somewhat real life application of
[22:47] vector spaces namely we took our good
[22:50] old grocery
[22:51] shop problem and saw how vector spaces
[22:55] fit into that context and then we
[22:58] we have seen the example of affine flats
[23:02] thank you
[23:08] you