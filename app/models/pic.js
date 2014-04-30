'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Pic Schema
 */
var PicSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Name cannot be blank'
	},
	picid: {
		type: Number,
		default: 0,
		trim: true,
		required: 'posterid no null'
	},
	gallery: {
		type: Schema.ObjectId,
		ref: 'Gallery'
	},
	url: {
		type: String,
		default: ''
	},
	prev: {
		type: String,
		default: ''
	},
	
	info: {
		type: String,
		default: ''
	}
	
});

mongoose.model('Pic', PicSchema);