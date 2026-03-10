# React-Modularity-Assignment

# React Modularity Assignment

## Project Overview

This project demonstrates how to build a **modular React application** using multiple components and ES6 import/export syntax. The application includes several components that are organized into separate files to promote clean code and reusability.

The main goal of this assignment is to practice using **default exports and named exports** while structuring a React application using modular components.

The application was built using **Create React App** and developed in **Visual Studio Code**.

---

## Application Structure

The application consists of the following components:

* **Header** – Displays the application title (default export)
* **Footer** – Displays footer information (default export)
* **ContentA** – Displays the first content section (named export)
* **ContentB** – Displays the second content section (named export)
* **Button** – A reusable shared button component used in multiple sections (named export)

---

## Import and Export Usage

### Default Exports

The **Header** and **Footer** components are exported using **default exports**.

Example:

```javascript
export default Header;
```

Imported using:

```javascript
import Header from "./components/Header";
```

---

### Named Exports

The **ContentA**, **ContentB**, and **Button** components are exported using **named exports**.

Example:

```javascript
export function ContentA() {
```

Imported using:

```javascript
import { ContentA } from "./components/ContentA";
```

---

## Project Structure

```text
react-modularity-assignment
│
├── src
│   ├── components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── ContentA.js
│   │   ├── ContentB.js
│   │   └── SharedComponents.js
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── package.json
└── README.md
```

---

## Features

* Modular React component architecture
* Demonstrates **default and named imports/exports**
* Shared reusable components
* Basic UI structure using multiple content sections
* Demonstrates handling of **normal and edge test cases**

---

## Test Cases

### Normal Test Cases

These tests demonstrate the expected behavior of the application:

1. **Header renders correctly** displaying the application title.
2. **ContentA renders correctly** with text and a button.
3. **ContentB renders correctly** with text and a button.

Each component is imported and displayed correctly in the main App component.

---

### Edge Test Cases

These tests verify how the application behaves with unusual inputs.

1. **Button with empty label**

Example:

```javascript
<Button label="" />
```

2. **Button with no label provided**

Example:

```javascript
<Button />
```

3. **Button with very long text**

Example:

```javascript
<Button label="This is a very very very long button label for testing edge cases" />
```

These edge cases ensure that the application continues to render without crashing even when unexpected input is provided.

---

## How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/react-modularity-assignment.git
```

2. Navigate into the project folder:

```bash
cd react-modularity-assignment
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open the application in your browser at:

```
http://localhost:3000
```

---

## Demonstration Video

A video demonstration of the application showing the functionality and test cases is available here:

**YouTube Link:**
PASTE YOUR VIDEO LINK HERE

The video demonstrates:

* The application running in the browser
* Explanation of the component structure
* Usage of default and named imports/exports
* Demonstration of normal test cases
* Demonstration of edge test cases
