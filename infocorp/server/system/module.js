function icModule() {
	
	this.handleRequest = function(_req, _res) {
		_res.send("Response from Module handler");
	};
	
}

module.exports = new icModule();