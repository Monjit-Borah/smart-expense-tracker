# Smart Expense Tracker

**Live Demo:** [https://monjit-borah.github.io/smart-expense-tracker/](https://monjit-borah.github.io/smart-expense-tracker/)

## Overview

Smart Expense Tracker is a responsive web application built with HTML, CSS, and JavaScript that allows users to monitor their daily expenses efficiently. It features a clean, modern interface with persistent local storage, responsive design, and intuitive expense management capabilities.

The application demonstrates practical implementation of frontend development concepts including DOM manipulation, local storage management, and responsive UI design.

## Features

**Expense Management**
* Add expenses with date, category, amount, and notes
* Delete individual expenses
* Real-time total expense calculation
* Persistent data storage using localStorage

**Category System**
* Food, Travel, Bills, Entertainment, Shopping, and Other categories
* Color-coded visual badges for quick identification

**Data Visualization**
* Clean tabular display of expense history
* Prominent total expense card with currency formatting

**Responsive Design**
* Mobile-first responsive layout
* Adaptive form grid (1 → 2 → 4 columns)
* Touch-friendly interface

**User Experience**
* Form validation and error handling
* Keyboard shortcuts (Enter to submit)
* Hover effects and smooth transitions
* Empty state handling

## Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript
* **Storage:** Browser localStorage API
* **Styling:** CSS Grid, Flexbox, CSS Custom Properties
* **Icons:** Custom CSS badges and UI elements

## Project Structure
```
smart-expense-tracker/
├── index.html          # Main HTML document
├── styles.css          # All styling and responsive design
├── app.js              # Application logic and data management
└── README.md           # Project documentation
```

## Usage

**Adding an Expense**
1. Select or enter a date
2. Choose a category from the dropdown
3. Enter the amount in Indian Rupees (₹)
4. Add an optional note
5. Click "Add Expense" or press Enter

**Managing Expenses**
* View all expenses in the history table
* Delete any expense using the delete button
* Total expenses automatically update in real-time

**Data Persistence**
* All expenses are saved automatically to localStorage
* Data persists between browser sessions
* No backend server required

## Getting Started

**Local Development**
```bash
# Clone the repository
git clone https://github.com/monjit-borah/smart-expense-tracker.git

# Navigate to project directory
cd smart-expense-tracker

# Open index.html in your browser
# Or use a local server:
python -m http.server 8000
```

**Direct Usage**

Simply visit the [live demo](https://monjit-borah.github.io/smart-expense-tracker/) and start tracking expenses immediately. No installation or registration required.

## Browser Support

* Chrome 60+
* Firefox 55+
* Safari 10.1+
* Edge 79+
* Mobile browsers (iOS Safari, Chrome for Android)

## Learning Outcomes

This project demonstrates:
* **DOM Manipulation:** Dynamic table generation and updates
* **State Management:** Expense tracking with local persistence
* **Responsive Design:** Mobile-first CSS with media queries
* **Form Handling:** Validation, submission, and user feedback
* **UI/UX Principles:** Intuitive design with visual feedback
* **JavaScript Patterns:** Modular code structure and event handling

## Author

**Monjit Borah**  
