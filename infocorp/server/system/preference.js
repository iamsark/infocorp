function icPreference() {
	
	this.handleRequest = function(_req, _res) {
		_res.send("Response from Preference handler");
	};
	
}

module.exports = icPreference;