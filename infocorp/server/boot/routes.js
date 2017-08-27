module.exports = function(app) {
	
	/* Register the System module route */
	app.get('/system', function(req, res) {
	    res.render('system.html');
	});
	  /* Register the Admin module route */
	app.get('/admin', function(req, res) {
	    res.render('admin.html');
	});
	
};