const express = require('express');

module.exports.init = function () {
	let app = express();
	const sendMessages = require('./sendMessages');
	sendMessages.start();
	return app;
};
