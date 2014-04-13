'use strict';

var path = require('path'),
	rootPath = path.normalize(__dirname + '/../..');

module.exports = {
	app: {
		title: 'mean2',
		description: 'FullStack',
		keywords: 'Express'
	},
	root: rootPath,
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'mean2',
	sessionCollection: 'sessions'
};