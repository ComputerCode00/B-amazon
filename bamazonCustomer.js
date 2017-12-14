var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  storeItems();
  connection.end();
});

function storeItems() {
	console.log('What is the name of the item you are searching for?')
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
		console.log(res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);	
  };
  putInCart();
  purchase();
  })

};

function putInCart() {
	inquirer.prompt([{
		name: 'Id',
		type: 'input',
		message: 'Insert name of product you want to buy.',

	}]);
}

function purchase() {
	inquirer.prompt([{
		name: 'Id',
		type: 'input',
		message: 'How many of this item do you want to buy?',

		validate: function(value) {
			if (isNaN(value) == false) {
				return true;
			}else {
				return false;
			}
		}

	}]);
}
