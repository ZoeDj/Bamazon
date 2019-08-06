var mysql = require ("mysql");
var inquirer = require ("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    //console.log("connected as id " + connection.threadId + "\n");
    start();
  });

function start(){
    prompt();
}

function prompt(){
    inquirer
    .prompt([
        {
            name: "menu",
            message: "Please choose one of the folowing actions:",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Exit"],
            type: "rawlist"
        }
     ]).then(function(answer){
    if (answer.menu == "View Products for Sale"){
        displyItems();   
    } else if (answer.menu == "View Low Inventory"){
        lowInventory();
    } else if (answer.menu == "Add to Inventory"){
        addInventory();
    } else if (answer.menu == "Add New Product"){
        newProduct();
    } else if(answer.menu == "Exit"){
        exit();
    }     
});
}

function displyItems() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.table(res);
        prompt();
    });
}

function lowInventory(){
    connection.query("SELECT * FROM products WHERE stock_quantity < 5", function(err, res) {
        if (err) throw err;
        console.table(res);
        prompt();
    }); 
}

function addInventory(){
    inquirer
    .prompt([
        {
            name: "id",
            message: "Please enter the product id",
            type: "input",
            validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        },
        {
            name: "quantity",
            message: "Please enter the product quantity",
            type: "input",
            validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
    ]).then(function(answer){
        connection.query("UPDATE products SET stock_quantity= stock_quantity + ? WHERE item_id =?",[answer.quantity, answer.id],function(err, res) {
            if (err) throw err;
            //console.table(res);
            prompt();
        });
    })
}
function newProduct(){
    inquirer
    .prompt([
        {
            name: "name",
            message: "Please enter the product's name",
            type: "input",
        },
        {
            name: "department",
            message: "Please enter the department that carry the product",
            type: "input",
        },
        {
            name: "price",
            message: "Please enter the product's price",
            type: "input",
            validate: function(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
              }
        },
        {
            name: "quantity",
            message: "Please enter the product's quantity in stock",
            type: "input",
            validate: function(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
              }
        }
    ]). then(function(answer){
        connection.query("INSERT INTO products SET ?",{
            product_name : answer.name,
            department_name : answer.department,
            price: answer.price,
            stock_quantity: answer.quantity
        },
        function(err, res) {
            if (err) throw err;
            prompt();
        });
    });
}

function exit(){
    connection.end();
}