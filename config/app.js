const express = require('./express');

module.exports.init = function init(callback) {	
	const app = express.init();
	if (callback) callback(app);
};

module.exports.start = function start(callback) {
	this.init((app) => {
		app.listen(3001, () => {
			console.log('Finished execution');
			if (callback) callback(app);
		});
	});
};
