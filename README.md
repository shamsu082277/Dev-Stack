# 🚀 DevStack

A simple and interactive technology stack builder where users can explore different technologies and build their own stack by selecting technologies from different categories.

## ✨ Features

- 🔍 Explore different web development technologies with their details.
- ➕ Add technologies to your personal stack and remove them when needed.
- 🚫 Select only one technology from each category and get notifications for invalid selections.

## 🛠️ Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- JSON
- Vite

---
## 🚀 How to Download and Run the Project

### 1. Clone the Repository
git clone https://github.com/shamsu082277/Dev-Stack.git

### 2. Go to the Project Folder
cd your-repository

### 3. Install Dependencies
npm install

### 4. Run the Project
npm run dev

##  Project Live link
https://dev-stack-shamsu082277.netlify.app/

##  Project Preview

![DevStack Screenshot](/public/website-preview.png)

# 📚 React Related Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.

It makes React code easier to read and helps us create design components easily.


### 2. What is the difference between props and state?

Props are used to pass data send from a parent component to a child component.

State is used to store data inside a component.


### 3. What does the useState hook do, and where did you use it in this project?

useState is a React hook used to create and manage changing data in a component.

I used useState in the Technologies component to store the selected technologies.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is Fetching data from an API when a page loads

In this project, I did not use useEffect to load the JSON data. I used Promise to load the data.


### 5. Why does every item in a .map() list need a unique key prop?

React needs a unique key to identify which items have changed or updated or removed.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing somehting based on specific condition. I used it to show the empty stack message when no tecgnology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

We pass data from a parent component to a child component using props drilling. In react we can't send data from a child to a parent , we have to use lifting state to share data or use data.




