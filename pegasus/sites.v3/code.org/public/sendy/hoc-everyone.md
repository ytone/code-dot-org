---
layout: sendy
theme: none
subject: The largest learning event in history
---

<%
  tracking_pixel = '/images/1x1.png'
  unsubscribe_link = '#'
  domestic = params['domestic'].nil? || params['domestic'] == 'true'
%>

### <%= @header['subject'] %>

Last year, 40,000 teachers led a grassroots effort called the Hour of Code – to introduce ten million students to one hour of computer science. Kids of all ages tried one hour of writing code and making apps in classrooms, and they loved it.

This year, supported by over 100 organizations, we want to reach 100 million students, across every country in the world, during Computer Science Education Week (Dec 8 – 14).

<center><a href="http://hourofcode.com/"><img src="http://code.org/images/fit-250/calling-teachers.png"/></a></center>

### What’s an Hour of Code? No experience needed. (Even computers are optional)
It’s a fun introduction to computer science designed to demystify code and show that anyone can learn the basics. Anybody can make an app. We provide easy tutorials, for computers, tablets, smartphones, or even classrooms without any technology.

<% unless domestic %>

### Worldwide, in 30+ languages
Our courses are available in over 30 languages. We need your help reaching schools where students or teachers don’t speak English.

<% end %>

### How can you help?
1. Ask your school to participate - share this [video](http://hourofcode.com), [email](http://hourofcode.com/resources#sample-emails), and [handout](http://hourofcode.com/us/resources#handouts) with a teacher. 
2. [Participate as a student](http://code.org/learn) - alone, with a child, or in a group.
3. [Support us with a donation.](http://code.org/donate) To teach 100 million children we need your generous help. Every dollar will be matched, doubling your impact.
4. If you have a child in elementary school, [ask your teacher to offer follow-on lessons in computer science.](http://code.org/k5)

### Welcome to the 21st Century
Computer science is foundational for all students. Yet 90% of schools don’t teach it, and most students never get a chance to try even the basics. We owe it to our children to give them one hour. 

**Together, we’re making history.** Help us, at [http://hourofcode.com](http://hourofcode.com)

Hadi Partovi<br/>
Founder, Code.org

<hr>

You signed our petition at http://code.org, to bring computer science to all our schools. We’ll only send you rare, but important, updates.

![](<%= tracking_pixel %>)