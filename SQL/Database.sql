create database bamazon_db;

use bamazon_db;

create table products (
	id integer (10) auto_increment not null,
    product_name varchar (20) not null,
    department_name varchar (30) not null,
    price integer (80) not null,
    stock_quantity integer (50),
    primary key (id)
    );
    