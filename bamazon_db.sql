DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
product_name VARCHAR (255) NOT NULL,
department_name VARCHAR (255) NOT NULL,
price DECIMAL(10, 2),
stock_quantity INTEGER(10),
PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE("Smart Watch", "Electronics", 279.00, 12);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE("Camera","Electronics", 624.99, 8);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE("Coffee Table", "Home", 245.45, 4);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE("Bedding Set", "Home", 114.84, 10);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE("Board Game", "Toys", 19.87, 26);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE("Stuffed Animal", "Toys", 10.99, 34);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE("Dress", "Clothing", 97.99, 6);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE("Jacket", "Clothing", 178.49, 9);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE("Shampoo", "Cosmetics", 14.13, 55 );
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE("Mascara", "Cosmetics", 12.81, 103 );
