# W5_L3: What is a linear mapping - part 1

**Week:** Week 5
**YouTube URL:** https://www.youtube.com/watch?v=MvCkhmYhTkw

---

## Transcript

[00:14] Transcriber's Name: Crescendo Transcriptions Pvt Ltd
[00:15] Mathematics of Data Science 2 Professor Sarang Sane
[00:16] Department of Mathematics Indian Institute of Technology, Madras
[00:17] What is a linear mapping Part 1
[00:18] Hello, and welcome to the Maths 2 component of the online BSc Program on Data Science.
[00:20] In this video, we are going to talk about what is a linear mapping.
[00:24] So, let us start with an example.
[00:27] So, we have a grocery shop, a usual kirana shop that you go to, and let us say it's in
[00:35] the town of Malgudi.
[00:36] The shop is Shop A, and we have three items that we are interested in rice, dal and oil.
[00:46] And the prices in these, in Shop A of these items are 45 rupees per kg for rice, 125 rupees
[00:56] per kg for dal and 150 rupees per liter for oil.
[01:01] So, if you want to compute, for example, the cost of 1 kg of rice, 2 kg of dal and 1 kg
[01:09] of oil, then what do we do, we multiply 1 by 45, 2 by 125, 1 by 150 and we add them.
[01:18] And if you do that, you will hopefully get 445, if I have done this computation correctly.
[01:23] Similarly, if you want to calculate the cost of 2 kgs of rice, 1 kgs of dal and 2 kgs of,
[01:32] 2 liters of oil both of these will be liters, then that is given by multiplying 45 by 2,
[01:40] 125 by 1, 150 by 2 and adding all those, which, if I have done it correctly, should give us
[01:48] 515 rupees.
[01:50] So, in general, if you have X1 kgs of rice, X2 kgs of dal and X3 liters of oil, not kgs
[02:01] then how do we do that, we have to multiply 45 by X1, we have to multiply 125 by X2, and
[02:09] 150 by X3, and then we add-up those terms.
[02:14] So usually, we write it in the opposite way.
[02:18] Where we write it as 45 X1, plus 125 X2 plus 150 X3.
[02:24] So, this is notice a linear combination of X1, X2, X3 with coefficients 45, 125 and 150.
[02:34] So, the point is if you want to get the cost of certain number of items, and you know the
[02:40] cost of each individual item, then the total cost is a linear combination of the amounts
[02:50] of the items that you want to buy.
[02:52] So, we have seen this kind of idea before also.
[02:55] This is not the first time we are seeing it in this course.
[02:57] But I wanted to remind you of this.
[03:00] So let us quickly summarize this in terms of what is an expression and what is a linear
[03:05] combination.
[03:06] So, the term 45x1 plus 125x2 plus 150x3 is an expression.
[03:11] I want to explicitly say this because sometimes there is a confusion about what is an expression
[03:19] and what is an equation.
[03:20] So, this is not an equation, this is an expression.
[03:24] So, we can equivalently think of this as a function, and that is what this video is going
[03:30] to be about.
[03:32] We can think of this as a function CA, C for cost, A for the Shop A from R3 to R. Since
[03:39] for every value of X1, X2, X3 we get a real number.
[03:42] How do we do that?
[03:43] Because if you plug-in some values for X1, X2, X3 you can evaluate, that is exactly what
[03:48] we did in the previous slide, where we evaluated this with specific values of X1, X2, X3.
[03:55] So that means this is a function.
[03:57] Given a particular triple, meaning given values of X1, X2, X3 it will give us a real number.
[04:06] So, we can take this as a function from R3 to R.
[04:09] So, since CA is a linear combination of these three variables, X1, X2, X3 and with coefficients
[04:23] as we noted 45, 125, and 150 this is an example of a linear function.
[04:28] Why linear?
[04:30] Because it has something to do with a line, which we may study all, which you may have
[04:35] seen already in maths 1, and which we will anyway refresh after something.
[04:39] But in our context, it is linear because there are no powers involved here or no exponents.
[04:46] It is just 45 times X1 plus 125 times X2 plus 150 times X3.
[04:53] There are no other terms, where you have other powers of Xi is coming in or you have some
[05:02] other kinds of functions, logarithm and so on.
[05:04] That is why it is a linear, we call it a linear function.
[05:07] And we will explicitly say what we mean by a linear function in a little while and that
[05:11] is what this video is about, about linear mappings.
[05:13] So, recall, we have done this before that, linear combinations can also be expressed
[05:21] in terms of matrix multiplication.
[05:24] And this is what we have done all of maybe a week back or two weeks ago, where we studied
[05:32] in great detail matrices and how they operate and various kinds of manipulations.
[05:38] So, it is important to remember this because we are going to use this soon for various
[05:43] other purposes.
[05:44] So, we can express the function cA, which was defined as a linear combination, 45x1
[05:51] plus 125x2 plus 150x3 as the matrix multiplication, where we have the coefficients as a row matrix
[05:59] 45, 125, 150, and the variables, X1, X2, X3 as a column.
[06:06] We have seen this before I just want to want you to remember this for what is coming next.
[06:12] So, I again want to reiterate remember that this is, you can think of this either as a
[06:18] linear combination.
[06:19] When I say this, I mean, this term 45x1 plus 125x2 plus 150x3 as a linear combination or
[06:27] an expression.
[06:28] It is not an equation.
[06:33] An equation is when you equate it to something, and then we will try to solve.
[06:37] So an equation is when you have an equal sign somewhere and you say, this expression is
[06:41] equal to some other expression.
[06:43] That is when we will say it is an equation.
[06:47] So let us go on.
[06:49] So, let us talk about cost linearity.
[06:52] So, this is what was hidden in that statement about it being a linear function.
[07:00] So, a caterer gets an order from Office 1 in Malgudi on Monday, for 30 tiffins prepared
[07:07] in some prescribed way.
[07:09] Maybe they want just rice and dal prepared separately and with more oil.
[07:20] So, for Office 1, they want 30 tiffins so the caterer estimates that they will need
[07:28] 20 kgs of rice, 10 kgs of dal and 4 litres of oil, and they go to Shop A buy these.
[07:36] This is for Office 1 in Malgudi.
[07:39] So, on Tuesday, they get an order from Office 2, so which is a different office from Office
[07:45] 1 and they want a different way of preparation.
[07:48] They want less oil, but maybe they want the rice to be more fluffy or less fluffy or something
[07:57] and for whatever purpose, whatever way in which they want it to be made.
[08:04] The caterer estimates that for 40 tiffins they will need 40 kgs of rice, 12 kgs of dal
[08:12] and 2 liters of oil, less oil.
[08:15] So, the Office 2 is health conscious.
[08:19] And then they go to Shop A for buying this material.
[08:26] On Wednesday, they get offers, they get orders from both offices, Office 1 and Office 2.
[08:34] Office 1 wants 15 tiffins, Office 2 wants 50 tiffins, maybe Office 1 did not like so
[08:41] much.
[08:42] Some people in Office 1 did not like how they repaired it, so only half of them ordered,
[08:46] but they still wanted to be prepared in their way, whatever that was.
[08:51] And Office 2 wants it to be repaired in their way, whatever that was.
[08:56] So, the question is, how much does the caterer spend at Shop A. What is the cost to the caterer
[09:01] or how much the Shop A earn from the caterer?
[09:05] Now, the natural way of doing this, I mean, one way of doing this maybe is to ask, well,
[09:15] for 50 tiffins for Office 1, I know how much was required for 30 tiffins for Office 1,
[09:22] so 15 tiffins will require half of that amount, so 10 kgs of rice, 5 kgs of dal and 2 litres
[09:30] of oil.
[09:32] And 50 tiffins for Office 2 will require five by four times whatever was used up on Tuesday,
[09:42] because that time they had offered 40 tiffins.
[09:44] So, you would have five by four times 30, five by four times 12 and five by four times
[09:49] 2 respectively kgs, kgs and liters of rice, dal and oil.
[09:55] So, this is what we are noting here.
[10:00] On Wednesday, for Office 1, we will require 10 kgs of rice 5 kgs of dal and 2 liters of
[10:05] oil.
[10:07] On Wednesday for Office 2, which remember has 50 tiffins, we will do require five by
[10:14] four times the amount on Tuesday, which means you need 37.5 kgs of rice, earlier it was
[10:21] 30 kgs of rice on Tuesday for 40 tiffins, 15 kgs of dal.
[10:26] So, I think we had 12 kgs of dal on Tuesday, and 2.5 liters of oil, we had 2 liters of
[10:33] oil on Tuesday.
[10:35] So we know for each office, how much rice, dal and oil is going to be required.
[10:44] So, the caterer will go to Shop A and will buy the sum of these two.
[10:49] So, the total required quantities of rice, dal and oil on Wednesday will be 47.5 kgs
[10:58] of rice, 20 kgs of dal and 4.5 liters of oil.
[11:01] So, I am just adding up whatever we need for Office 1 on Wednesday to whatever we need
[11:11] for Office 2 on Wednesday.
[11:14] So, the cost to the caterer at Shop A, they always buy from Shop A, this is what we know
[11:21] is 45 times 47.5, so you substitute plus 125 times, 15 plus 150 times 2.5, so you substitute
[11:30] these values 47.5, 20 and 4.5 in our linear combination or in the cost function cA.
[11:39] You evaluate the cost function at 47.5 comma 20 comma 4.5.
[11:46] So that gives us 5,312.5.
[11:48] This is something you have to calculate.
[11:52] And if I have done my calculation, right, hopefully this is what you will get.
[11:58] So now, we could calculate this a bit differently.
[12:00] How do I do that?
[12:03] So, we can calculate what was the cost to the caterer on Monday for Office 1.
[12:10] So how do I do that?
[12:11] Well, on Monday how much was bought?
[12:14] On Monday, we had, I think 20 kgs of rice, 15 kgs of dal and sorry, 10 kgs of dal and
[12:24] 4 litres of oil.
[12:26] So, you put in this vector in R3, 20, 10, 4, you put it into the cost function cA or
[12:35] you evaluate the linear combination with X1 equals 20, X2 equals 10 and X3 equals 4, and
[12:46] then you get 2,750 rupees, that is for Office 1 on Monday.
[12:51] On Tuesday, we had 40 tiffins for Office 2, and for that we had 30 kgs of rice, 12 kgs
[13:02] of dal and 2 liters of oil, so you take this vector, 30 comma 12 comma 2 and evaluate the
[13:10] cost function on this vector or this element of R3 or equivalently you put it into the
[13:19] linear combination, and what we get is 3,150 rupees.
[13:22] So, what I have done, I have computed the costs on Tuesday and Monday.
[13:30] So, now, I am claiming that the cost to the caterer on Wednesday is half times 2750 plus
[13:40] 5 by 4 times 3150, which is 5312.5.
[13:44] So, the claim is that both of these are the same, and that is basically what I want to
[13:51] say.
[13:52] Now why is that happening?
[13:54] We will see that.
[13:55] So, the first method can be summarized, as calculating the vector for Wednesday, by adding
[14:03] half times a vector for Monday, by the vector I mean the demand vector.
[14:09] The amounts of quantity that are required.
[14:12] So, the demands on Monday, you took half of that plus 5 by 4 times the demands on Tuesday.
[14:21] That is exactly how we got this, these numbers.
[14:26] So, these numbers 47.5, 15 and 2.5.
[14:31] That is exactly how we got those numbers.
[14:34] And then we compute the cost function on those numbers and that is how we did the first method.
[14:41] The second method can be summarized, as adding half times a cost for Monday, and 5 by 4 times
[14:48] a cost on Tuesday.
[14:50] So, I will summarize this in this table.
[14:58] So, these are the quantities of rice, dal and oil that we require on Monday, Tuesday
[15:05] and Wednesday, respectively.
[15:08] And we see that the third column, sorry, the third row is obtained as half times the first
[15:15] row plus 5 by 4 times the second row.
[15:21] And this is where linearity is coming in.
[15:23] We are so now I have converted whatever I have done before to a sort of vector problem.
[15:30] So, let us now understand why does the second method work?
[15:35] So, for the second method what did we do, so I want the cost on Wednesday.
[15:39] Total cost on Wednesday, which we know is certainly given by the evaluating.
[15:54] So, 45 times rice required on Wednesday plus 125 times dal required on Wednesday plus 150
[16:15] times oil required on Wednesday.
[16:23] But how much rice was required on Wednesday?
[16:27] Well, we just saw that, that is half times the rice on Monday, plus 5 by 4 times the
[16:37] rice on Tuesday.
[16:41] And we can do the same thing for dal and oil, so this is half times, excuse me, half times
[16:49] the dal required on Monday, plus 5 by 4 times the dal required on Tuesday, plus 150 times,
[17:03] half times oil on Monday, plus 5 by 4 times the oil on Tuesday.
[17:12] Now, we can separate out the quantities for Monday and Tuesday.
[17:18] So, if we do that, we get, so I will do it in one step.
[17:26] Ideally, I should have written one more step, but I think you can follow what is happening.
[17:31] So, this is half times 45 times rice on Monday plus, excuse me, it is a bracket here plus
[17:44] 125 times.
[17:45] I do not need to put the brackets by BODMAS, but I am anyway just be careful.
[17:52] Dal on Monday plus 150 times oil on Monday.
[17:59] These are all the terms for Monday.
[18:04] And then plus 5 by 4 times 45 times rice on Tuesday, the same expression, but now for
[18:19] the Tuesday quantities, 125 times dal on Tuesday plus 150 times oil on Tuesday.
[18:31] But now, whatever we have inside the curly brackets is exactly evaluating the linear
[18:38] combination that I have on the quantities for Monday and Tuesday respectively.
[18:43] So, this is exactly whatever we have in the curly brackets is exactly the cost on Monday,
[18:51] that is the first curly bracket, and whatever we have in the second curly brackets is the
[18:59] cost on Tuesday.
[19:03] And this explains why the second method works.
[19:07] The first method is clearly the sort of long way of doing it, and the neat way of doing
[19:17] it.
[19:18] But the second method is clearly much shorter.
[19:22] And yields the same answer I mean, which otherwise, we would not have discussed it.
[19:30] And this is the reason why.
[19:32] So, what is the, what really worked here?
[19:34] Why did this work?
[19:36] What worked here was the fact that we had a linear combination.
[19:40] So that is why this function, I said this function is linear, because these terms can
[19:45] split up, you can break them into two.
[19:48] And I will, we will make this more explicit as we go on.
[19:55] So, I, but I hope I have convinced you that both the methods give you the same answer.