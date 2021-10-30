const ytdl = require('ytdl-core');
const search = require('youtube-search');
const { key } = require('./config.json');

const opts = {
	maxResults: 25,
	type: 'video',
	videoDuration: 'long',
	key: key,
};

// this file might get scrapped -- will need to see!

// using just 0 for now, more fancy features could eventually be implemented

// initialises a class
module.exports = class MusicPlayer {
	test() {
		console.log('hello world!');
	}
	play() {
		console.log('TBI');
	}
};