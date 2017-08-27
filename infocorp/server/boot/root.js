module.exports = function(app) {
	var express = require('express');
	app.use(express.static('client'));
	
	app.engine('html', require('ejs').renderFile);
	
	app.set('view engine', 'ejs');
	
};