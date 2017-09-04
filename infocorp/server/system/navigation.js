function icNavigation() {
	
	this.handleRequest = function(_req, _res) {
		_res.send("Response from Navigation handler");
	};
	
}

module.exports = icNavigation;