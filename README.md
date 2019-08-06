# Bamazon App

**Bamazon** is a command line node application that functions as Amazon-like storefront. 

The app uses MySQL database to disply and manage store inventory and npm inquirer package to take in orders from customers and information from store manager.

## Customer View

The customer selects product and quantity they would like to purchase.

If store doesn't have enough of that product in stock, the app should inform customer and prevent the order from going through.

However, if the store _does_ have enough of the product, the order would be placed. This means updating the SQL database to reflect the remaining quantity and showing the total cost of the customer's purchase.


This is my demo of Bamazon App customer's side:
![](http://g.recordit.co/xFiQZI4bl9.gif)

## Manager View

A manager is able to:
- see all the product
- check low inventory items
- add inventory
- add new items

This is my demo of Bamazon App manager's side:
![](http://g.recordit.co/TPJTx0G9pf.gif)


## Technologies Used:

* MySQL
* Node.js
* JavaScript
* npm packages
- MySQL
- Inquirer