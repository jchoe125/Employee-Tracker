# 12 SQL: Employee Tracker

## Table of Contents
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Installation](#installation)
  - [Video Walkthrough](#video-walkthrough)
  - [Screenshots](#screenshots)
  - [Technologies Used](#technologies-used)
  - [License](#license)
  - [Questions](#questions)
  - [Submission](#Submission)

## Description

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. This application utilizes Node.js, Inquirer, and MySQL in order to allow the user to manage a company's employee database.


## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

Additionally, the application will feature the use of the NPM packages listed below:
* [Inquirer package](https://www.npmjs.com/package/inquirer).
* [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to a MySQL database.
* [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.

## Installation

The user must perform an npm install to install all required dependencies prior to running the application. Once complete, the user can start the app by running `node.js` from the CLI, which will start the sequence of prompts to build out the database.

## Video Walkthrough
![Video Walkthrough](./assets/Employee%20Tracking%20Video%20Demo.gif)

## Screenshots
![App Screenshot1](./assets/app.js%20code%20snippet.JPG)
![App Screenshot2](./assets/schema%20code%20snippet.JPG)
![App Screenshot3](./assets/seeds%20code%20snippet.JPG)

## Technologies Used
* JavaScript
* NPM inquirer
* Node.js
* MySQL

# License
This project is licensed under:  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://img.shields.io/badge/License-MIT-yellow.svg)

# Questions
If you have any questions, please send them to my GitHub profile: https://github.com/jchoe125

# Submission
* GitHub repo: https://github.com/jchoe125/Employee-Tracker
* Walkthrough video demonstrating the functionality of the application: https://drive.google.com/file/d/1fYfHzL87DLHq9Wn29fnUDKhxcrtOeXEf/view

