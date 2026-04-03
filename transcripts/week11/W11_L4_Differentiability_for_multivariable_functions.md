# W11_L4: Differentiability for multivariable functions

**Week:** Week 11
**YouTube URL:** https://www.youtube.com/watch?v=tbd1xs-ZeU4

---

## Transcript

[00:00] [Music]
[00:14] hello and welcome to the match two
[00:15] component
[00:16] of the online bsc program on data
[00:17] science and programming
[00:19] this video is a very short video on
[00:21] differentiability for multivariable
[00:22] functions
[00:23] so we have already studied the notion of
[00:25] mult ah differentiability for one
[00:27] variable functions
[00:28] so let us recall first what that was so
[00:30] a function f
[00:31] defined on an open interval around a is
[00:34] said to be differentiable if
[00:35] f of x plus h minus f of x divided by
[00:39] h exists of course this should happen at
[00:41] a so
[00:42] this should be f of a plus h minus f of
[00:45] a divided by h exists and if this
[00:48] happens
[00:49] at all h at all x then it will be
[00:52] defined on
[00:54] meaning it will be differentiable on all
[00:56] points
[00:57] where it is defined meaning on its
[01:00] domain
[01:01] okay so this is the definition f of a
[01:03] plus h minus f of a divided by h
[01:05] limit h tends to 0 exists so
[01:08] once that happens we defined the
[01:11] derivative function so if prime x was
[01:13] limit h tends to 0 f of x plus h minus f
[01:16] of x divided by h
[01:17] of course we have seen this in great
[01:20] detail in one variable calculus we have
[01:22] also used the same
[01:22] idea in computing partial and
[01:26] directional derivatives so this is
[01:28] something familiar
[01:31] so the domain of this function is those
[01:33] points where it is differentiable
[01:36] and a fact that we
[01:39] studied was that if it is differentiable
[01:41] and it is continuousity if it is
[01:43] differentiability it is continuousity
[01:45] so i want to rewrite this this part here
[01:48] this limit
[01:49] in a slightly different way so um
[01:53] may ok maybe i will do that in the next
[01:55] slide
[01:56] let us first talk about the notion of
[01:59] differentiability
[02:00] and what it means for tangents and the
[02:03] best linear approximation
[02:04] these were all things that went hand in
[02:06] hand and
[02:07] the punch line was that if f is
[02:09] differentiable at a
[02:11] then that is the same as the tangent
[02:12] line to f at a exists
[02:14] and that is the same as saying that the
[02:16] best linear approximation to f at a
[02:18] exists
[02:18] and not surprisingly the algebra here is
[02:20] the same so the tangent line the
[02:23] equation
[02:26] of the tangent line was y is equal to
[02:30] f of a plus f prime at a times x minus a
[02:34] and then this expression knows exactly
[02:36] the expression that
[02:38] if we think of it as a function of x
[02:40] then this is the best linear
[02:41] approximation of
[02:44] f close to the point a so near a
[02:49] this its defined by this formula
[02:53] f of a plus f prime a times
[02:56] x minus a and what we know is that close
[02:59] to a
[02:59] f of x is very close to the linear its
[03:02] linear approximation so
[03:04] when x is near a
[03:09] right and we can rewrite uh the the
[03:11] differentiability
[03:13] definition in terms of this formula here
[03:16] and that is what i really want to
[03:17] emphasize so
[03:18] remember that f prime a is a limit h
[03:21] tends to a
[03:23] f of a plus h
[03:26] minus f of a divided by h so i can
[03:30] rewrite this
[03:31] in the following way i can take my f
[03:33] prime a on the other side
[03:35] and i can say that limit h tends to zero
[03:40] f of a plus h minus
[03:44] f of a minus f prime a
[03:48] times h divided by h
[03:52] is equal to 0 right because this you can
[03:54] break this limit into
[03:55] two parts so the first part is exactly
[03:58] what we have written here
[04:01] and the second part when i divide by h
[04:04] gives you f prime so there are so if i
[04:07] bring those together you get exactly
[04:09] this limit
[04:10] so the
[04:14] point i want to make here is notice how
[04:16] what what what expression you have here
[04:18] this expression here
[04:20] what this expression so if i rewrite
[04:21] this its
[04:23] f of a plus h
[04:27] minus and i will write this in bracket f
[04:30] of a
[04:31] plus f prime a times h
[04:35] divided by h so this limit is 0
[04:39] and this thing in the bracket here
[04:44] is exactly the best linear approximation
[04:48] of the function close to that point a
[04:52] right so if you have so i have taken a
[04:54] plus here so if you put
[04:56] x is a plus h then h will be x minus a
[04:58] and that's exactly when you get this
[05:00] right so this thing here f of a plus f
[05:02] prime a times s
[05:03] h is the best linear approximation of
[05:06] the function close to the point a so
[05:10] when we start talking about
[05:11] differentiability in
[05:14] several variables this is exactly the
[05:18] kind of thing that we want to emit it we
[05:19] want to get
[05:20] this ah this kind of
[05:26] trichotomy that is differentiability is
[05:28] the same as the existence of the tangent
[05:30] hyperplane is the same as the best
[05:32] linear approximation
[05:33] exists and then if that happens we
[05:37] we expect that when we take the
[05:39] difference between the
[05:41] best linear approximation and the
[05:42] function values
[05:45] that has some something to do with the
[05:48] magnitude of h of course now when we go
[05:51] to higher dimensions
[05:53] h itself is going to change because it
[05:54] will be a vector so we have to take that
[05:56] into account
[05:57] so let us define what is
[06:00] differentiability for scalar valued
[06:02] multivariable functions
[06:04] so if a f is a scalar valued
[06:06] multivariable function defined in the
[06:07] domain d in rn
[06:09] containing an open ball around a point a
[06:10] tilde well
[06:12] then f is differentiable at a tilde if
[06:15] this thing happens and and pay careful
[06:17] attention limit as h
[06:19] tilt tends to zero what is h tilde it
[06:21] still is up
[06:22] is instead of h now you have a vector so
[06:25] you have h one h two h n
[06:27] so h one h two h n tends to zero and
[06:29] what is zero here zero here means the
[06:30] zero vector
[06:32] f of eight tilde plus h tilde minus f of
[06:34] a tilde minus
[06:35] h still dot with gradient of f at a tilt
[06:40] divided by the norm of h so now we
[06:43] cannot divide by h
[06:44] because if you divide by h and there
[06:47] should be a h till here
[06:49] if we divide by h then
[06:53] that does not make sense right you have
[06:54] to divide by a number and h
[06:56] still is a vector so you have to divide
[06:58] by its length
[07:00] because the length is a measure of how
[07:01] far it is from ah zero
[07:03] in the earlier case you could divide by
[07:05] h because h
[07:06] itself is a measure of how far it is
[07:08] from zero because it's a number
[07:10] so here you have to divide by length or
[07:12] norm of h state
[07:13] and if this thing is zero then we say it
[07:16] is differentiable
[07:17] and notice what what this this thing on
[07:20] the right in the numerator is
[07:22] so the right part of the numerator is
[07:26] ah so i'll write that down over here
[07:29] so f of a till plus h still minus
[07:34] f of a tilde plus h still dot with
[07:38] gradient f addition
[07:41] right so this this expression here
[07:44] is exactly the expression that we had
[07:47] for the
[07:48] ah tangent hyperplane or the
[07:52] best linear approximant so i will just
[07:54] remind you that was z
[07:56] is equal to f of a tilde plus
[07:59] um gradient of f at a tilde
[08:04] dot with x tilde minus 80 right this was
[08:07] the
[08:08] equation for the tangent hyperbola if it
[08:11] existed of course
[08:12] and that is exactly what's coming here
[08:13] so this is exactly in accordance with
[08:16] the one variable definition
[08:19] except that here ah since it did
[08:22] involves vectors it looks like a dot
[08:24] product and so on well so
[08:26] and then in the denominator you have a
[08:27] norm instead of the
[08:30] value of h so let's uh expand this out
[08:32] for two variables and see what we get so
[08:35] so the same definition for two variables
[08:38] so for two variables
[08:40] what is the same so if i write h as
[08:43] h one comma h two what it's saying is if
[08:46] you have f of
[08:47] ah a comma b plus h one comma h two
[08:52] minus f of a comma b
[08:56] minus h one times ah
[08:59] f x at a comma b minus h two times
[09:03] f y at a comma b this whole thing
[09:07] divided by
[09:08] root of h 1 squared plus h 2 squared
[09:11] this limit as h 1 comma h 2 tends to 0 0
[09:17] should be 0 right that is exactly what
[09:19] this definition is saying
[09:20] ok so just to expand it out and you can
[09:23] see that the right hand thing
[09:24] what is here is exactly the
[09:28] in accordance with the tangent equation
[09:30] the equation of the tangent plane
[09:33] you can do this for three variables i
[09:35] will encourage you to do it so that you
[09:37] have a feeling of what's happening and
[09:39] this checking is a little harder
[09:41] for unlike the checking for the one
[09:44] variable case
[09:45] because here it's a genuine two variable
[09:47] limit so i really have to know what
[09:49] happens as h 1 h 2 tends to 0 0
[09:52] and as we know to do this we have to see
[09:54] it from all possible
[09:56] along all possible curves as they tend
[09:57] to 0 0.
[09:59] so this is this is the definition not
[10:01] surprisingly
[10:02] once it is differentiable we have an
[10:05] immediate connection with the tangents
[10:07] and the best linear approximation
[10:09] because that is what is coming in the
[10:10] expression
[10:11] so if f is differentiable and rated that
[10:13] is exactly the same as saying that the
[10:15] tangent hyperplane to f at a till exist
[10:17] which is exactly the same as saying that
[10:19] the best linear approximation to a fed
[10:21] it will exist and that indeed is the
[10:23] same as saying that it is
[10:24] differentiability so this is a
[10:28] so the picture that we had for the one
[10:30] variable calculus case
[10:32] exactly matches what we have in the
[10:35] multivariable calculus case
[10:38] with this definition so
[10:41] checking that this limit exists is
[10:43] somewhat hard as as i
[10:44] said in the previous slide and
[10:47] so as as we have consistently done
[10:50] throughout
[10:50] throughout the course uh whenever i i
[10:54] wanted to talk about the tangent
[10:56] hyperplane
[10:56] etc the hypothesis that we made was a
[10:59] bit different
[11:00] we took a stronger hypothesis so i had
[11:02] this hypothesis that
[11:04] the partial derivatives of the function
[11:08] exist and are continuous in a ball
[11:11] around 80.
[11:13] so the fact is that if this happens then
[11:16] f is differentiable edited and that's
[11:17] why i kept making that hypothesis right
[11:20] because i didn't want to define what is
[11:23] differentiability
[11:24] until the very end ah but i want you in
[11:26] this video to know what is
[11:27] differentiability because you may later
[11:29] see
[11:30] you may come across a situation where it
[11:32] is written
[11:33] in the text that f is differentiable for
[11:35] a multi-variable function and you may
[11:36] wonder what that means
[11:37] so what it means is that ah that limit
[11:40] exists
[11:41] and you really should not bother too
[11:43] much about that until unless
[11:45] you really want to get into the math
[11:47] behind that
[11:48] what you should remember is that that is
[11:50] the same as saying that the best linear
[11:52] approximation exists and we know a
[11:53] formula for it
[11:55] and that the tangent hyperplane exists
[11:56] and we know formula for it and in
[11:58] particular that will mean that the
[12:01] directional derivatives are all given by
[12:03] dot products of the unit vector
[12:05] corresponding unit vector with the
[12:08] uh gradient vector
[12:11] right that that's really the main thing
[12:13] you should remember right
[12:14] fine ah so once it's differentiable it
[12:17] is continuous
[12:18] the proof is actually exactly analogous
[12:20] as the one in the one variable case
[12:22] but since it involves limits of in
[12:25] several variables i am not
[12:27] even giving an idea about that but those
[12:29] of you who feel
[12:31] you want to strengthen your mathematical
[12:33] muscles should go about trying it
[12:36] and finally i will comment that
[12:40] when you come to a situation where
[12:43] where you want to actually use this as i
[12:46] said it will often happen
[12:47] often not always but often happen that
[12:50] the partial derivatives maybe i will
[12:51] write that down the partial derivatives
[12:54] so ah the partial derivatives of
[12:59] um f with respect to all the variables
[13:03] at it will not edited but
[13:06] at x tilt ah so this is continuous
[13:11] in a ball around 80.
[13:16] so often this is easier to check than
[13:18] differentiability so although this is a
[13:20] stronger hypothesis
[13:21] this is what you should try and check
[13:23] first if this doesn't fail
[13:25] sorry if it does not work or if it fails
[13:29] then you should try to check for
[13:30] differentiability and that's why all the
[13:32] statements that we have made before
[13:35] where with this hypothesis because this
[13:36] hypothesis implies that f is
[13:38] differentiable
[13:39] and once it's differentiable that is the
[13:41] same as saying tangent hyperplanes exist
[13:43] best linear approximations exist and so
[13:45] on okay so just to summarize
[13:48] this video is about what it means for a
[13:50] function to be differentiable
[13:52] as i said you should keep in mind that a
[13:55] function being differentiable at a point
[13:56] means that
[13:57] the tangent hyperplane at that point
[13:59] exists equivalently that
[14:03] the best linear approximation exists
[14:06] which means you have a linear function
[14:07] whose expression is given by the same
[14:10] formula as was
[14:11] ah in the definition of the the equation
[14:13] of the tangent plane with that same
[14:15] expression
[14:16] right that's what should come to your
[14:18] mind when
[14:19] ah you see a statement that f is
[14:21] differentiable additional
[14:23] and also differentiability added will
[14:26] automatically tell you that the
[14:28] directional derivatives can be written
[14:30] as
[14:30] dot products of the gradient vector with
[14:33] the unit vector in that direction
[14:35] thank you