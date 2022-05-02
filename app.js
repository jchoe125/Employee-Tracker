const mysql = require('mysql2'); //importing npm mysql package
const cTable = require('console.table'); //importing console.table package

const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

//Connecting to db
db.connect((err) => {
    if (err) throw err;
    console.log("Connection to db successful")
    userPrompt();
});

//User input prompts
function userPrompt() {
    inquirer.prompt([{
        type: 'list',
        name: 'choices',
        message: 'Please select option',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            //Bonus choices
            'Update an employee manager',
            "View employees by department",
            'Delete a department',
            'Delete a role',
            'Delete an employee',
            'View department budgets',
            'Exit application'
        ]
    }]).then(function(val) {
        switch (val.choice) {
            case 'View all departments':
                viewAllDepartments();
                break;
            case 'View all roles':
                viewAllRoles();
                break;
            case 'View all employees':
                viewAllEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployee();
                break;
        }
    })
}

//Function to view all departments
function viewAllDepartments() {
    console.log('Viewing all departments');
    const deptQuery = 'SELECT * FROM department';
    db.query(deptQuery, (err, res) => {
        if (err) throw (err);
        console.table('Department list:', res);
        userPrompt();
    })
}

//Function to view all roles
function viewAllRoles() {
    console.log('Viewing all roles');
    const roleQuery = 'SELECT * FROM role';
    db.query(roleQuery, (err, res) => {
        if (err) throw (err);
        console.table('Role list:', res);
        userPrompt();
    })
}

//Function to view all employees
const viewAllEmployees = async() => {
    const employeeQuery = 'SELECT * FROM employee';
    db.query(employeeQuery, (err, res) => {
        if (err) throw (err);
        console.table('All Employees:', res);
        userPrompt();
    })
}

//Function to add a department
function addDepartment() {
    inquirer.prompt([{
        type: 'input',
        name: 'newDepartment',
        message: 'Please add department name'
    }]).then(function(res) {
        db.query('INSERT INTO department SET ?'), {
            name: ans.newDepartment,
        }
        const newDeptQuery = 'Select * FROM department';
        db.query(newDeptQuery, function(err, res) {
            if (err) throw (err);
            console.table('Department List:', res);
            userPrompt();
        })
    })
}

// //Function to add a role
// addRole() => {

// }

// //Function to add an employee
// addEmployee() => {

// }

// //Function to update an employee role
// updateEmployee() => {

// }