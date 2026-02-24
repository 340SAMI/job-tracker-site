Job Tracking Site


This project is a Job Tracking Site built using HTML, CSS, and Vanilla JavaScript.
The purpose of this project is to practice DOM manipulation, event handling, and dynamic UI updates without using any external JavaScript frameworks.

Project Overview

The dashboard allows users to manage job applications by organizing them into three categories:

All Jobs

Interview

Rejected

Users can update job status, delete jobs, and see real-time updates in the dashboard counts.

Features

Responsive dashboard layout

Job cards with detailed information

Three tabs: All, Interview, Rejected

Dynamic job count update on dashboard

Toggle job status between Interview and Rejected

Delete job functionality with count update

Mobile-friendly design

Technology Stack

HTML

CSS (Vanilla / Tailwind / DaisyUI)

JavaScript (Vanilla)

Answered Questions
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById() selects a single element using its unique id.
getElementsByClassName() selects all elements with the same class name and returns a live HTMLCollection.
querySelector() selects the first element that matches a CSS selector.
querySelectorAll() selects all matching elements and returns a static NodeList.

2. How do you create and insert a new element into the DOM?

A new element is created using document.createElement().
After adding text or attributes, the element is inserted into the DOM using methods like appendChild() or append().

3. What is Event Bubbling? And how does it work?

Event bubbling is a process where an event starts on the target element and then propagates upward through its parent elements.
For example, clicking a button inside a div triggers the button event first, then the div event.

4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique where a single event listener is added to a parent element to manage events for its child elements.
It is useful because it improves performance, reduces code repetition, and works with dynamically added elements.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() prevents the browser’s default behavior such as form submission or link navigation.
stopPropagation() stops the event from bubbling up to parent elements.
