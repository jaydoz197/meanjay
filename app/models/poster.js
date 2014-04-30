'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Poster Schema
 */
var PosterSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	name: {
		type: String,
		default: '',
		trim: true,
		required: 'Name cannot be blank'
	},
	posterid: {
		type: Number,
		default: 0,
		trim: true,
		required: 'posterid no null'
	},
	site: {
		type: Schema.ObjectId,
		ref: 'Site'
	}
});

mongoose.model('Poster', PosterSchema);