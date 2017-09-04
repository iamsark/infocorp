function icUser() {
	
	this.handleRequest = function(_req, _res) {
		_res.send("Response from User handler");
	};
	
}

module.exports = icUser;