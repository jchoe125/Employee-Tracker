-- WHEN I choose to view all departments
-- THEN I am presented with a formatted table showing department names and department ids
-- Query to view all departments
SELECT * FROM department;

-- WHEN I choose to view all roles
-- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
-- Query to view all roles
SELECT title, role.id, department_id, salary
FROM role
LEFT JOIN department
ON department.id = role.department_id
;

-- WHEN I choose to view all employees
-- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
-- Query to view all employees
SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name, role.salary, manager.last_name AS manager
FROM employee
LEFT JOIN role
ON employee.role_id = role.id
LEFT JOIN department
ON role.department_id = department.id
LEFT JOIN employee manager
ON employee.role_id = manager.id
;
