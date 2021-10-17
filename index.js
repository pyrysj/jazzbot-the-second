// Require the necessary discord.js classes
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
const fs = require('fs');
const m = require('./musicPlayer.js');

// the code in this file is mostly based off the discord.js documentation

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

// MusicPlayer class here untill i figure out how to make it play ball with a seperate file

const mPlayer = new m();

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
	// this is here just for testing purposes
	mPlayer.test();
});

// Login to Discord with your client's token
client.login(token);
