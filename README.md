# 💼 Job Tracking Site

This project is a **Job Tracking Site** built using **HTML, CSS, and Vanilla JavaScript**.

The main purpose of this project is to practice:
- DOM manipulation  
- Event handling  
- Dynamic UI updates  

No external JavaScript frameworks were used.

---

## 📌 Project Overview

The dashboard allows users to manage job applications by organizing them into three categories:

- 🗂️ All Jobs  
- 🎯 Interview  
- ❌ Rejected  

Users can:
- Update job status
- Delete jobs
- View real-time updates in the dashboard counts

---

## ✨ Features

- Responsive dashboard layout  
- Job cards with detailed information  
- Three tabs: All, Interview, Rejected  
- Dynamic job count update on dashboard  
- Toggle job status between Interview and Rejected  
- Delete job functionality with automatic count update  
- Mobile-friendly design  

---

## 🛠️ Technology Stack

- HTML  
- CSS (Vanilla / Tailwind / DaisyUI)  
- JavaScript (Vanilla)

---

# ❓ Answered Questions

---

## 1️⃣ What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- `getElementById()` selects a single element using its unique **id**.  
- `getElementsByClassName()` selects all elements with the same class name and returns a **live HTMLCollection**.  
- `querySelector()` selects the **first element** that matches a CSS selector.  
- `querySelectorAll()` selects **all matching elements** and returns a **static NodeList**.

---

## 2️⃣ How do you create and insert a new element into the DOM?

A new element is created using:

```javascript
document.createElement()
