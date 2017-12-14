var mysql = require('mysql');
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'bamazon_db'
})


function inventory() {
	console.log('   Warehouse Inventory   ');
	inquirer.prompt([
	{
		type: 'list',
		name: 'storeMerch',
		message: 'Select an option',
		choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventor', 'Add New Product'],
	}]).then(function(ans) {
		switch(ans.storeMerch){
			case 'View Products for Sale': viewProducts();
			break;
			case 'View Low Inventory': viewLowInventory();
			break;
			case 'Add to Inventory': addToInventory();
			break;
			case 'Add New Product': addNewProduct();
			break;
		}
	})
}

