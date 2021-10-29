// Require the necessary discord.js classes
// import Discord, { Interaction, GuildMember, Snowflake } from 'discord.js';
// import {
//	AudioPlayerStatus,
//	AudioResource,
//	enterState,
//	joinVoiceChannel,
//	VoiceConnectionStatus,
// } from '@discordjs/voice';
const { joinVoiceChannel, AudioPlayer } = require('@discordjs/voice');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
const fs = require('fs');


// let subscription = subscriptions.get(interaction)

const m = require('./musicPlayer.js');
const mPlayer = new m();

exports.mPlayer = mPlayer;

// the code in this file is mostly based off the discord.js documentation

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


// creatres audio player -- will be tweaked eventually and customised for our needs
const { createAudioPlayer } = require('@discordjs/voice');

const player = createAudioPlayer();

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
	// this is here just for testing purposes
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName == 'play') {
		const connection = joinVoiceChannel({
			channelId: interaction.member.voice.channelId,
			guildId: interaction.guildId,
			adapterCreator: interaction.guild.voiceAdapterCreator,
		});

		const subscription = connection.subscribe(player);

		if (subscription) {
			// Unsubscribe after 5 seconds (stop playing audio on the voice connection)
			setTimeout(() => subscription.unsubscribe(), 5_000);
		}
		await interaction.reply('Just a test for now');
	}

	// code below commented out to first get the code working in one file - then to simplify
	// by making it run in multiple files
	// const command = client.commands.get(interaction.commandName);

	// if (!command) return;

	// try {
//		await command.execute(interaction);
//	}
//	catch (error) {
//		console.error(error);
//		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
//	}
});

// Login to Discord with your client's token
client.login(token);
