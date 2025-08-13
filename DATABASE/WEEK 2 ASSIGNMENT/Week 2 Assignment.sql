-- Create payments table
CREATE TABLE payments (
    checkNumber VARCHAR(50) PRIMARY KEY,
    paymentDate DATE,
    amount DECIMAL(10,2)
);

INSERT INTO payments VALUES
('CHK001', '2025-01-10', 250.00),
('CHK002', '2025-02-15', 500.00),
('CHK003', '2025-03-01', 150.00);

-- Create orders table
CREATE TABLE orders (
    orderNumber INT PRIMARY KEY,
    orderDate DATE,
    requiredDate DATE,
    status VARCHAR(50)
);

INSERT INTO orders VALUES
(1, '2025-01-05', '2025-01-12', 'Shipped'),
(2, '2025-01-10', '2025-01-17', 'In Process'),
(3, '2025-02-01', '2025-02-08', 'In Process'),
(4, '2025-02-15', '2025-02-22', 'Cancelled');

-- Create employees table
CREATE TABLE employees (
    employeeNumber INT PRIMARY KEY,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email VARCHAR(100),
    jobTitle VARCHAR(50)
);

INSERT INTO employees VALUES
(101, 'John', 'Mwangi', 'johnmwangi@gmail.com', 'Sales Rep'),
(102, 'Jane', 'Smith', 'janewiths@gmail.com', 'Manager'),
(103, 'Peter', 'Rajo', 'peterajo@gmail.com', 'Sales Rep');

-- Create offices table
CREATE TABLE offices (
    officeCode INT PRIMARY KEY,
    city VARCHAR(50),
    phone VARCHAR(20),
    addressLine1 VARCHAR(100)
);

INSERT INTO offices VALUES
(1, 'New York', '212-555-1234', '123 Main St'),
(2, 'Los Angeles', '310-555-5678', '456 Sunset Blvd');

-- Create products table
CREATE TABLE products (
    productCode INT PRIMARY KEY,
    productName VARCHAR(100),
    quantityInStock INT,
    buyPrice DECIMAL(10,2)
);

INSERT INTO products VALUES
(1, 'Espresso Machine', 10, 120.50),
(2, 'Coffee Grinder', 25, 80.00),
(3, 'French Press', 15, 25.00),
(4, 'Pour Over Set', 8, 40.00),
(5, 'Coffee Beans - Arabica', 50, 15.00),
(6, 'Coffee Beans - Robusta', 60, 12.00),
(7, 'Electric Kettle', 20, 35.00),
(8, 'Milk Frother', 12, 18.50);

