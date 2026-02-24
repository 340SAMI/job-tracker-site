# Job Tracking Site

This project is a simple **Job Tracking Site** built using **HTML, CSS, and Vanilla JavaScript**.

The main goal of this project is to practice:
- DOM manipulation
- Event handling
- Dynamic UI updates

No external JavaScript frameworks were used in this project.

---

## Project Overview

In this website, users can manage job applications by organizing them into three categories:

- All Jobs
- Interview
- Rejected

Users can:
- Move jobs to Interview or Rejected
- Switch between Interview and Rejected
- Delete job cards
- See updated job counts instantly on the dashboard

---

## Features

- Responsive design
- Job cards with job details
- Three tabs (All, Interview, Rejected)
- Dynamic dashboard count update
- Toggle system between Interview and Rejected
- Delete functionality with live count update

---

## Technology Used

- HTML
- CSS (Vanilla / Tailwind / DaisyUI)
- JavaScript (Vanilla)

---

# Answered Questions

## 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

- `getElementById()` selects one element using its id.
- `getElementsByClassName()` selects multiple elements using class name and returns a live collection.
- `querySelector()` selects the first element that matches a CSS selector.
- `querySelectorAll()` selects all matching elements and returns a static list.

---

## 2. How do you create and insert a new element into the DOM?

First, we create an element using:

`document.createElement()`

Then we add content or attributes to it.

Finally, we insert it into the DOM using:

`appendChild()` or `append()`

---

## 3. What is Event Bubbling?

Event bubbling is when an event starts from the main element and then moves upward to its parent elements.

Example:  
If we click a button inside a div, the button event runs first, then the div event runs.

---

## 4. What is Event Delegation? Why is it useful?

Event delegation means adding one event listener to a parent element instead of adding multiple listeners to child elements.

It is useful because:
- It improves performance
- It reduces extra code
- It works for dynamically added elements

---

## 5. Difference between preventDefault() and stopPropagation()

- `preventDefault()` stops the browser’s default action (like form submission).
- `stopPropagation()` stops the event from going to parent elements.
