function icAuthenticator() {
	
	this.handleRequest = function(_req, _res) {
		_res.send("Response from Auth handler");
	};
	
}

module.exports = icAuthenticator;