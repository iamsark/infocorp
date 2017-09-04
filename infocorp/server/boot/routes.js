module.exports = function(app) {
	
	var ic_module = require('../system/module');
	//ic_module = new ic_module();
	var ic_dictionary = require('../system/dictionary');
	var ic_navigation = require('../system/navigation');
	var ic_user = require('../system/user');
	var ic_role = require('../system/role');
	var ic_preference = require('../system/preference');
	console.log(ic_module);
	/* Register the System module route */
	app.get('/system', function(req, res) {
	    res.render('system.html');
	});
	  /* Register the Admin module route */
	app.get('/admin', function(req, res) {
	    res.render('admin.html');
	});
	
	app.get('/module', function(req, res){
		console.log(ic_module);
		ic_module.handleRequest(req, res);
	});
	
	app.get('/dictionary', function(req, res){
		ic_dictionary.handleRequest(req, res);
	});
	
	app.get('/navigation', function(req, res){
		ic_navigation.handleRequest(req, res);
	});
	
	app.get('/user', function(req, res){
		ic_user.handleRequest(req, res);
	});
	
	app.get('/role', function(req, res){
		ic_role.handleRequest(req, res);
	});
	
	app.get('/preference', function(req, res){
		ic_preference.handleRequest(req, res);
	});
	
};