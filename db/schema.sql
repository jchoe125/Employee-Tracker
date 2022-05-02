DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

-- Creating department table, setting department(id) as primary key
CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

-- Creating role table, setting department_id as foreign key to department(id), role(id) as primary key
CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL(20,2) NOT NULL,
    department_id INT, 
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

-- Creating employee table, setting role_id as foreign key to role(id), employee(id) as primary key, manager(id) as foreign key to employee(id)
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY ,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT, 
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL,
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);
