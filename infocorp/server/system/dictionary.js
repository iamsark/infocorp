function icDictionary() {
	
	this.handleRequest = function(_req, _res) {
		_res.send("Response from Dictionary handler");
	};
	
}

module.exports = icDictionary;