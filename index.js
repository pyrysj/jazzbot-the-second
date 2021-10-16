// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const m = require('./musicPlayer.js');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// MusicPlayer class here untill i figure out how to make it play ball with a seperate file

const mPlayer = new m();

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
	mPlayer.test();
});

// Login to Discord with your client's token
client.login(token);
