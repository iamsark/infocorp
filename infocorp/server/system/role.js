function icRole() {
	
	this.handleRequest = function(_req, _res) {
		_res.send("Response from Role handler");
	};
	
}

module.exports = icRole;