# W1_L1: Vectors

**Week:** Week 1
**YouTube URL:** https://www.youtube.com/watch?v=1So2VV9Tm_A

---

## Transcript

[00:14] Hello and welcome to the maths 2 component of the online BSC program. My name is Sarang
[00:15] Sane, I will be instructing for this course and in the beginning of this course we will
[00:16] study a little bit of linear algebra. So, today is this first lecture is going to deal
[00:17] with vectors. So, what are vectors? In the screen appear we can see some vectors that
[00:19] you have probably studied in previous course. So, something with arrows and directions and
[00:27] so on. So, I am going to tell you a slightly different story about what vectors are.
[00:32] So, let us see what are the contents of this video. So, in this video we are going to talk
[00:38] about vectors and data, we are going to talk about why vectors? We will do some examples.
[00:45] We will do vectors and visualization, this is sort of on the same ideas that you saw
[00:53] in the first slide. And then we look at vectors in the physical context. So, let us start
[01:01] with vectors and data.
[01:02] So, we often encounter data in a data. This entire course is supposed to be about data,
[01:09] so we better start with some data. So, here is an example of data. So, this is an example
[01:15] I took from the government website. So, it talks about the GDP, the Gross Domestic Product
[01:22] of the country and it breaks it sector wise. So, what was the GDP from agriculture and
[01:30] industry and mining and so on and across the years 2000-2001 to 2012-2013?
[01:39] So, maybe here is another example from our national passion. So, this is the team-wise
[01:49] batting average for some players where one of them was a player when I made these slides,
[01:54] but unfortunately no longer is so I will have to say ex-player, ex team India player. Anyway,
[02:01] so this is Virat Kohli, Dhoni, Rohit Sharma, K.L. Rahul and Shikar Dhawan and the teams
[02:09] are Australia, England, New Zealand, South Africa, Sri Lanka and Pakistan and in the
[02:14] table we see for each team the average for each player.
[02:21] So, these are two examples of data. As you can see the data is arranged in a table and
[02:27] this is typically how we get data and often the things we are interested in are about
[02:35] a row or a column or some rows or some columns. So, this is exactly where the idea of a vector
[02:42] stems from.
[02:43] So, what is a vector? A vector can be thought of as a list. So, in the context of the above
[02:51] examples, vectors could be columns or they could be rows. So, here is an example from
[02:57] the GDP table. So, this is a row corresponding 2010-11. So, the total GDP and then the sector-wise
[03:04] GDPs, these are all in crores by the way. Or here is an example from the cricket table.
[03:14] So, this is the batting averages of the players that we saw, Kohli, Dhoni, Rohit Sharma, etcetera
[03:24] with respect to South Africa or we could pull out a column from let us say the GDP table.
[03:31] So, this is the GDP, the full GDP so across the years 2000-2001 to I think it was 2012-13.
[03:43] And then here is a column maybe the averages for Virat Kohli with respect to the various
[03:58] teams. So, South Africa and then New Zealand and England and so on, Australia and so on.
[04:04] So, these are all examples of vectors. So, when I say vectors of course, you have to
[04:08] drop the heading in these rows or columns.
[04:11] So, the vector corresponding to the South Africa row would be written as a 64.35, 31.92,
[04:23] 33.3, 26 and 49.87. So, this is a vector. So, this vector has how many components? It
[04:34] has 1, 2, 3, 4, 5 components. This vector has 5 components and I am putting commas in
[04:42] the middle just to represent that this number is ended and the next one has started, otherwise
[04:47] we really do not need commas.
[04:51] Similarly, the vector corresponding to the column of Virat Kohli s averages, so this
[04:57] is written again as a column. So, 54.57, 45.3, 59.91, 64.35, 60 and 48.72. So, this is again
[05:20] a vector. So, this is a, this is what we will call a column vector
[05:29] and this is what we will call a row vector. So, sometimes we are going to study very soon
[05:37] what are matrices, we can also call these as a column matrix and we can think of this
[05:47] as a row matrix.
[05:49] So, depending on what we want to do, whatever is convenient, we think of this as a row vector
[05:56] or a row matrix and similarly as a column vector or a column matrix. So, the important
[06:03] point here is what is a vector? A vector is a list, it is a list of numbers that is what
[06:09] you have to remember.
[06:11] So, let us go ahead and ask why vectors? So, we can use vectors to perform arithmetic operations
[06:18] on lists such as the table columns. So, for example if we want to average the sectoral
[06:25] GDP across the years 2000-2001 to 2009-10, I will take the relevant part of that table.
[06:33] So, we want 2000-2001 to 2009-10. I see a typo here, this should be 2000-2001 anyway.
[06:44] So, we do not want the, we want the average across the first 10 rows. So, let us first
[06:51] of all strike out that last row, we do need this and for these rows what do we want? We
[06:59] want the average.
[07:00] So, how do I get the average? I add these numbers. So, if I want the average of the
[07:05] GDP, that is the total GDP, that is what we have in the first column. I add these numbers
[07:14] and then I whatever total I get I divide by 10. Similarly out here, what do I do? I add
[07:22] these numbers, and then I take the total and then I divide by 10. And what does that give
[07:31] me? That gives me the GDP contribution of Agriculture and Allied Services across the
[07:38] years 2000-2001 to 2009-10.
[07:41] And then similarly I can for each of these I can add the corresponding entries and then
[07:50] I can divide by 10. Those will give me the averages. So, I can do this for each column
[07:57] and the idea is that well if you what is happening, you are repeating each operation across rows.
[08:03] So, instead of doing this for each column each entry, what I can say is I will take
[08:10] this entire row and I will add it to this entire row and I will add that to this entire
[08:14] row and I will add all these 10 rows.
[08:18] So, what do I mean when I say add these rows? That means I add the corresponding entries,
[08:24] the corresponding components. So, the first entries are added, all the second entries
[08:29] are added, all the third entries are added, all the tenth, not tenth, seventh entry is
[08:35] added that is the last corresponding to the last column and then whatever I get that is
[08:40] the those that will give you me a vector of totals.
[08:47] So, I will get the total GDP from 2000 to 2010, total GDP contributed by Agriculture
[08:56] and Allied areas from 2000 to 2010 and so on. So, I get all these totals. So, I have
[09:03] 7 numbers out here and then I divide each one by 10. So, I can do that by dividing the
[09:09] entire row by 10 or the entire row vector by 10.
[09:14] So, 1 by 10 times this thing that I got and that is exactly what I get out here. So, the
[09:22] point here is instead of doing it entry wise, I can think of it as if I am doing it for
[09:29] lists and that is what vectors are going to do of us. So, let us move ahead. We will see
[09:38] more examples and that might shed more light on what is happening.
[09:42] So, here is another example. So, Arun has to buy 3 kgs of rice and 2 kgs of dal and
[09:48] Neela has to buy 5 kgs of rice and 6 kgs of dal. So, let us put that into a table. So,
[09:55] this is rice in kgs and dal in kgs and the corresponding numbers for Arun and Neela.
[10:01] So, 3 kgs of rice for Arun, 5 for Neela and 2 kgs and 6 kgs of dal respectively. So, what
[10:08] are the total, what is the total amount of rice and dal that they want to get? They want
[10:14] to purchase 8 kgs of rice and 8 kgs of dal in total.
[10:20] So, again we, how did we get this? We added these two and we got this, we added these
[10:23] two and we got this. So, I can think of this instead as we will think of 3 comma 2 as the
[10:31] vector for Arun. So, now notice that here if I think of it like this, this is a column
[10:37] vector, but instead I have written it over here like a row vector. It is the same thing
[10:43] depending on what we want to do. So, here I have written 3 comma 2 as the row vector,
[10:47] this is the demand for Arun.
[10:49] So, the first component corresponds to the demand for rice, Arun s demand for rice. The
[10:54] second component corresponds to Arun s demand for dal. And then 5, 6 for Neela. So, again
[11:01] the first component is Neela s demand for rice, the second component is how much dal
[11:07] Neela wants to buy.
[11:09] So, we can add these vectors. How do we add them? We add them component wise, exactly
[11:14] the way we have done over here. So, when I add these, I do 3 plus 5 which is 8 and 2
[11:20] plus 6 which is 8 and that is how I get this column vector and instead we have just written
[11:26] these in terms of rows below. So, I have written these here in terms of rows. So, together
[11:33] they want to buy 8 kgs of rice and 8 kgs of dal. These are pretty simple example.
[11:40] So, here is a slightly more a larger example I will not say it is more involved. So, this
[11:50] is examples about stock taking in a grocery shop. So, in this grocery shop we have 5 items.
[11:56] Let us say, so we have rice, dal, oil, biscuit packets and soap bars, and at the start of
[12:03] the day, the shopkeeper takes stock and finds that they have 150 kgs of rice, 50 kgs of
[12:10] dal, 35 litres of oil, 70 biscuit packets and 25 soap bars in stock. That is what they
[12:17] have in the beginning of the day.
[12:20] So, maybe in the first hour, there are 3 customers, so, buyer A purchases whatever as per this
[12:29] column. So, this is the column corresponding to buyer A and then buyer B purchases according
[12:38] to this column. So, 12 kgs of rice, 5 kgs of dal, 7 litres of oil, 10 biscuit packets
[12:43] and 2 soap bars and then similarly buyer C purchases 3 kgs of rice, 2 kgs of dal, 5 litres
[12:49] of oil, 5 biscuit packets and 1 soap bar.
[12:55] And after sometime, after that one hour has lapsed, this stock for that days arise, the
[13:00] new stock and that new stock 100 kgs of rice arrives, 75 kgs of dal, 30 litres of oil,
[13:08] 80 biscuit packets and 30 soap bars, this is what arrives. So, now the question is after
[13:16] that one hour, how much is in stock? What is the new thing in stock? So, how do we do
[13:24] this? So, the way to do this of course is we see how much stock we had at the start
[13:32] of the day.
[13:33] So, let us look at rice. So, we had 150 kgs of rice, and then this is how much went out
[13:38] for buyer A, this is how much went out for B, this is how much went out for buyer C and
[13:43] then this what came in. So, 150 minus 8 minus 12 minus 3 plus 100. So, this is how much
[13:50] rice is left at the end of one hour. This is how much is in stock. And similarly for
[13:57] dal, we will do the same thing and then oil, this is how much went out, this is how much
[14:08] came in, again this is how much, how many biscuit packets went out and 80 biscuit packets
[14:12] came in and then finally for soap bars, we had 25 to start with and then 4 and 2 and
[14:20] 1 were sold and then 30 new ones arrived after 1 hour.
[14:28] So, you can see that instead of doing it this way, we can think of this in terms of vectors.
[14:34] So, in vector representation how would we do this? You would write down the vectors
[14:38] for each of those columns. So, we have 150, 50, 35, 70, 25 which was in stock at the start
[14:51] of the day and then we have plus minus 8 minus 8 minus 4 minus 10 minus 4. Notice that now
[14:59] we have put in a minus sign which was not in the table so, that is because in vector
[15:07] notation now, we can keep track of what is being bought in, what is being sold.
[15:20] So, the minus corresponds to whatever is sold and the plus which is down here corresponds
[15:30] to the new stock which has arrived. So, that is stock which the shopkeeper has brought
[15:35] from retailer. So, this is something that was not there in the table. This is something
[15:42] that we created. So, you can see that the vector has some value. So, this is minus 8
[15:50] minus 8 minus 4 minus 10 minus 4 corresponding to customer A and then the column for customer
[15:55] B has become this row, minus 12 minus 5 and so on.
[16:00] And the column for customer C has become this row, minus 3, this row vector, minus 3 minus
[16:08] 2 and so on and the new arrived stock, the fresh stock is this final vector plus 100,
[16:16] 75, 30, 80, 30. And this is without a minus sign as I said that is because this is being
[16:23] added to the stock, the existing stock. So, this is how you would take stock in a grocery
[16:33] store. So, so I will again reiterate that addition is in terms of how we in term is
[16:42] component wise.
[16:44] So, we add corresponding entries of the vectors. So, over here if I wanted to add, then I would
[16:52] get a vector, row vector at the end and the first component of that row vector would be
[16:58] 150 minus 8 minus 12 minus 3 plus 100. So, that is a 150 minus 23, so that is 127 plus
[17:07] 100, so that would be 227 and you can do the rest. The last entry let us calculate that.
[17:14] So, you would have the last entry that would and 25 minus 4 minus 2 minus 1, so 25 minus
[17:23] 7 that is 18 and then plus 30, so 48. So, I hope you understand how to add vectors.
[17:29] This is an example of addition of vectors.
[17:33] So, we can do one more thing. So, in the same example suppose buyer A comes the next day
[17:42] and they buy the same items that they bought the previous day. So, then we can add the
[17:48] vector two times or we can multiply each entry of the vector by 2. So, addition we learnt
[17:58] in the previous example, so if we want to see how much total items have been bought
[18:06] by the buyer across the two days, so then we would have 8, 8, 4, 10, 4 plus 8, 8, 4,
[18:15] 10, 4. This is a vector corresponding to buyer A.
[18:17] So, this was a column corresponding to buyer A which we have written as a row vector. And
[18:22] so we can say that so we add this addition as component wise, coordinate wise, so we
[18:29] get 16, 16, 8, 28, so, what this says is that buyer A bought 16 kgs of rice, 16 kgs of dal
[18:34] and whatever else. And the same thing can be written as, so we can think of this as
[18:43] 2 times 8, 2 times 8, 2 times 4, 2 times 10, and 2 times 8. So, we are adding this twice.
[18:57] So, each entry gets multiplied by 2. And then what we can do is we can take this 2 out.
[19:04] So, this is called scalar multiplication.
[19:07] So, multiplying a vector is by a scalar so maybe here we should have by a scalar. So,
[19:23] that is what the slide says by a scalar is called scalar multiplication. So, that means
[19:29] if you have C times some vector let us say the entries of that vector are v1 v2 vn.,
[19:39] then scalar multiplication will be will mean that this is the same as the vectors c times
[19:46] v2 c times v3 upto c times vn; exactly as we had in this example upstairs.
[19:54] So, let us talk about visualization of vectors. Maybe this is something some of you have possibly
[20:04] seen before. So, in R2, so let us start with R2, so in R2 we have points which come with
[20:16] bracket and two numbers with a comma in the middle. So, the point a b, so we can instead
[20:22] think of this as the vector a b. A vector is just a list after all and the notation
[20:27] is that you put brackets and you have two numbers and a comma in the middle if it is
[20:32] in, if it has two coordinates.
[20:35] So, we can instead think of this as the vector a comma b. So, this is the list and this is
[20:44] going to be identified with the vector ai plus bj. So, if you have seen this notation
[20:51] before you will certainly know what this means. If you have not i and j correspond to the
[21:00] unit, so I maybe I should not use vectors, so it is an arrow on the x axis from 0,0 to
[21:14] 1,0 and j corresponds to an arrow on the x, y axis f, 0,0 to 0,1.
[21:23] So, maybe here is a picture, so what is i and j over here? So, I is this, this is i
[21:32] that i over there and this is j.  And ai plus bj means you scale i by a so a
[21:48] times i will mean you take a on the x axis and b times j will mean you take b on the,
[21:55] b times j on the y axis. So, 0 comma b and then when you add them you get we think of
[22:02] that as a arrow from the origin to the point a comma b. So, here we have these 3 ways of
[22:11] thinking. We can think of this point as 1 comma 2 or we can consider this arrow which
[22:16] is a line drawn from 0, 0, the origin to the point 1 comma 2 with the arrow head at the
[22:25] tip of that arrow is at 1 comma 2.
[22:28] And we can also write this as i plus 2 times j. Similarly, here we have minus 1 comma minus
[22:39] 1, so that is your point and if you think of it as a vector in R2 in the traditional
[22:45] sense, you draw a line from arrow from 0, 0 to minus 1 comma minus 1 with the tip at
[22:53] minus 1 comma minus 1. And we can also think of this as minus i minus j. Certainly, this
[23:03] is how you will do it for example in physics.
[23:08] So, what do I want to point out over here, what I want to point out here is that the
[23:17] list that we have we are thinking of are nothing very different from vectors in the sense we
[23:24] may have seen before. So, that is in R2.
[23:28] So, let us also quickly see something special about R2 namely, how do we add two vectors
[23:34] in R2. So, we can add two vectors by joining them head to tail or by the parallelogram
[23:39] law. So, what does that mean? So, here are two vectors v and w. So, we have drawn them
[23:48] with from the origin to some point and then if we want to add them, what you can do is
[23:59] you can either move w. So, you can move w from its starting point at 0, 0. Instead you
[24:07] start it at the tip of v. Or you can move v to start at the tip of w but you have to
[24:16] move it paralleley.
[24:17] Remember that you cannot change the direction. So, you have to move it paralleley. When we
[24:22] say move, we mean move paralleley. And then what is v plus w? v plus w is exactly the
[24:29] vector that you obtain by drawing a arrow from the origin to the point that you obtain
[24:35] by completing this parallelogram. So, you could do it in either way. Maybe let us do
[24:42] an example here. So, we could think of the x y plane and maybe let us do, so let us say
[25:06] this is 1,1; this is my v, my path this is 2, 1 and this is 1, 2 and now when I add them
[25:20] what do I do?
[25:22] I move the tip of the arrow or the starting point of the arrow 1 comma 2 to over here.
[25:37] And then you can see how much, where it starts and where it ends and if you do that, you
[25:42] will see that this is the point 3 comma 3 and this is exactly how we defined vector
[25:49] addition. So, 1 comma 2 plus 2 comma 1 is 3 comma 3. This was how we defined addition
[25:59] when we thought of them as lists and this indeed corresponds to how we add them when
[26:06] we do it in the traditional way we may have learnt in physics. So, this is using the parallelogram
[26:12] law.
[26:13] So, now let us talks about vectors in Rn and you will see why we insist on lists. So, vectors
[26:23] in Rn are lists that is rows or columns with n real entries. So, n entries from the real
[26:30] number, so n numbers. And now you cannot really think of this in terms of arrows and geometry.
[26:39] We have to think of this as abstract entities as just lists. And so vectors with n entries
[26:51] which is what we studied previously is the same as vectors in Rn.
[26:55] So, what I mean is vectors in Rn in this sense and vectors in Rn as we know we can look at
[27:02] so you start from, you think of them as 0 and then you end at some point, then you can
[27:09] think of them as points in Rn. So, a vector in Rn is just a list and points in Rn are
[27:16] also you can think of them as just lists.
[27:19] So, this is nothing very special happening. The difference is usually when we take points,
[27:27] we think of it as a set, so there is no concept of addition, whereas when you think of them
[27:31] as a vector, we think of addition or we think of scaling that vector and so on. We have
[27:37] no concept of scaling a point.
[27:39] That is why we want to differentiate between points vectors. But just as entities, they
[27:45] are the same, they are just lists. So, in that sense there is nothing different in terms
[27:51] of representation.
[27:54] So, in the physical context, typically we see this statement in textbooks, so a vector
[28:02] has magnitude and direction. So, magnitude is supposed to represent size and the length
[28:08] of the line shows its magnitude and the arrow head points in the direction. So, for example
[28:12] here are two vectors v and w. So, note here that there is no axis given. So, if you assume
[28:18] that this is the axis and then this is a vector starting at 0,0 and ending at some point and
[28:26] we can say that this is, this vector is a relatively long vector.
[28:31] So, it has more magnitude, the vector v has more magnitude than the vector w so it is
[28:37] longer and it points approximately in the north east direction, the vector w has relatively
[28:47] shorter magnitude and it is, it points in the north west direction. So, again this depends
[28:54] on where on where you draw the axis and on. So, we cannot really, directions and so on
[28:58] depends on the axis. So, we cannot really say much unless we know the axis, but there
[29:07] was somethings that we can say.
[29:09] If we know the axis, then we can talk about direction and even if we do not know the axis,
[29:15] we can talk about the length that is something universal. And we can talk about direction
[29:20] in the sense that given two vectors we can talk about relatively what their, where they
[29:25] are pointing. So, in other words what is the angle between them? So, that is, but usually
[29:38] I mean when study this in physics for the first time, we do think of this in terms of
[29:42] axis.
[29:43] So, here is maybe an example maybe from real life. So, a plane is flying towards the north
[29:51] and wind is blowing from the north west. So, v is the velocity of the flight and w is the
[29:59] velocity of the wind and then you want to calculate what is the trajectory taken by
[30:03] the plane or in which direction is the net velocity. So, that will tell you the approximate
[30:11] direction of movement of the plane.
[30:13] So, to do that you would have to do the sum. So, v plus w is the direction in which the
[30:26] plane moves. So, as we can see vectors are quite useful in physics to determine things
[30:38] like this, so trajectories and so on.
[30:42] So, here are some examples from physics. So, for example, velocity which we saw in the
[30:50] last slide or acceleration or force. So, what is important about these is that these are
[30:57] vector quantities meaning the direction is very important, it is not only whether the
[31:01] force is large or small or the acceleration is large or small, it also depends on the
[31:07] direction of the force or the direction of the acceleration. That will tell you the movement,
[31:14] something about movement. So, that is why these are vectors.
[31:18] So, we have seen things like this maybe in physics or you may not have in which case
[31:26] what I want to say next is may not be of much use. So, what I want to say next is for this
[31:33] course do not keep this intuition in mind, this is not the intuition in mind. What do
[31:38] we want to do in this course? We want to study vectors in the context of data. Remember that
[31:44] is what we started with.
[31:45] So, data is going to typically come out of tables or things like that and so your vectors
[31:50] are typically going to be lists. So, this intuition of geometry should be kept in your
[31:59] mind, but when you actually the algebra, think of them as lists and the addition and scalar
[32:06] multiplication is exactly done the way we have described, addition is coordinate wise
[32:12] or entry wise and similarly scalar multiplication is coordinate or entry wise.
[32:18] So, these are brute force algebra algebraic operations and that is how we should remember
[32:24] them. So, in particular I would say the ijk is may be not something you want to think
[32:32] of at least for the linear algebra part of this course. So, do not think of that for
[32:37] vectors. Of course, when we do calculus, which we will do towards the end, we will naturally
[32:43] introduce coordinates and so on. So, there we may come across ijk and so on where vectors
[32:49] will be useful. So, ijk etcetera are useful for vectors, but vectors we should think of
[32:56] as lists. So, with that I hope you have some feeling for vectors in this video. Thank you.