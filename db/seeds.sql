-- Inserting values into department table
INSERT INTO department (name)
VALUES 
('Administration/Operations'),
('Marketing/Sales'),
('Accounting/Finance'),
('Customer Service');

-- Inserting values into role table
INSERT INTO role (title, salary, department_id)
VALUES
('Admin Coordinator', 75000, 1),
('Admin Assistant', 50000, 1),
('Sales Consultant', 60000, 2), 
('Marketing Coordinator', 75000, 2),
('Accountant', 80000, 3), 
('Financial Analyst', 60000, 3),
('Customer Service Rep', 45000, 4),
('Customer Operations', 50000, 4);

-- Inserting values into employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('James', 'Smith', 1, null),
('Michael', 'Anderson', 2, 1),
('Maria', 'Garcia', 3, null),
('William', 'Hernandez', 4, 2),
('John', 'Kim', 1, null),
('Anna', 'Lee', 2, 3),
('David', 'Nguyen', 3, null),
('Katherine', 'Wilson', 4, 4);