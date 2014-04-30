'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Gallery Schema
 */
var GallerySchema = new Schema({
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
	galleryid: {
		type: Number,
		default: 0,
		trim: true,
		required: 'posterid no null'
	},
	poster: {
		type: Schema.ObjectId,
		ref: 'Poster'
	},
	url: {
		type: String,
		default: ''
	},
	prev: {
		type: String,
		default: ''
	}
	
});

mongoose.model('Gallery', GallerySchema);