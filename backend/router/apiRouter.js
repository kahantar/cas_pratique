const express = require('express');
const routes = require('./routes');

exports.router = (() => {
	const apiRouter = express.Router();

	apiRouter.route('/getalert').post(routes.getAlert);
	// apiRouter.route('/users/login/').post(validator.login, users.login);
	
	return apiRouter;
})();