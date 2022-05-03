const mysql = require('mysql2'); //importing npm mysql package
const cTable = require('console.table'); //importing console.table package
const inquirer = require('inquirer'); //importing inquirer package

//Setting variable to connect to mysql server
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
            'Exit application'
        ]
    }, ]).then((ans) => {
        switch (ans.choices) {
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
            case 'Exit application':
                exitApp();
                break;
        }
    })
}

//Function to view all departments
const viewAllDepartments = async() => {
    const res = await db.promise().query('SELECT * FROM department;');
    console.table(res[0]);
    console.log('success');
    userPrompt();
};

// Function to view all roles
const viewAllRoles = async() => {
    const res = await db.promise().query('SELECT title, role.id, department_id, salary FROM role LEFT JOIN department ON department.id = role.department_id;');
    console.table(res[0]);
    userPrompt();
};

//Function to view all employees
const viewAllEmployees = async() => {
    const res = await db.promise().query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name, role.salary, manager.last_name AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.role_id = manager.id;');
    console.table(res[0]);
    userPrompt();
};

//Function to add a department
const addDepartment = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'newDepartment',
        message: 'Please enter department name'
    }, ]).then(async(ans) => {
        const res = await db.promise().query(`INSERT INTO department (department_name) VALUES (?)`, ans.newDepartment);
        console.log('Success, dept added');
        userPrompt();
    })
};

// //Function to add a role
const addRole = async() => {
    const allDepartments = await db.promise().query(`SELECT department_name AS name, id AS value FROM department`)
    inquirer.prompt([{
            type: 'input',
            name: "title",
            message: "Please enter the this person's role title"
        },
        {
            type: 'input',
            name: "salary",
            message: "Please enter the salary for this person's role"
        },
        {
            type: 'list',
            name: "department_id",
            message: "Please select the department for this person's role",
            choices: allDepartments[0]
        },
    ]).then(async(ans) => {
        const res = await db.promise().query(`INSERT INTO role SET ?`, ans)
        console.log('Success, role added')
        userPrompt();
    })
};

// //Function to add an employee
const addEmployee = async() => {
    const roleList = await db.promise().query(`SELECT title as name, id AS value FROM role`)
    const employeeList = await db.promise().query(`SELECT last_name AS name, id AS value FROM employee`)
    inquirer.prompt([{
            type: 'input',
            message: "Please enter the employee's first name",
            name: "first_name"
        },
        {
            type: 'input',
            message: "Please enter the employee's last name",
            name: "last_name"
        },
        {
            type: 'list',
            message: "Please select the employee's role",
            name: "role_id",
            choices: roleList[0]
        },
        {
            type: 'list',
            message: "Please select the employee's manager",
            name: "manager_id",
            choices: employeeList[0]
        },
    ]).then(async(ans) => {
        const res = await db.promise().query(`INSERT INTO employee SET ?`, ans)
        console.log('Success, employee added')
        userPrompt();
    })
};

//Function to update an employee role
const updateEmployee = async() => {
    const roleList = await db.promise().query(`SELECT title as name, id AS value FROM role`)
    const employeeList = await db.promise().query(`SELECT last_name AS name, id AS value FROM employee`)
    inquirer.prompt([{
            type: 'list',
            message: "Please select the employee",
            name: "id",
            choices: employeeList[0]
        },
        {
            type: 'list',
            message: "Select the employee's role",
            name: "role_id",
            choices: roleList[0]
        },
    ]).then(async(ans) => {
        const res = await db.promise().query(`UPDATE employee SET role_id = ? WHERE id = ?`, [ans.role_id, ans.id])
        console.log('Success, employee updated')
        userPrompt();
    })
};

//Function to exit application
function exitApp() {
    db.end();
};