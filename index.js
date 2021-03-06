const { joinVoiceChannel } = require('@discordjs/voice');
const { Client, Collection } = require('discord.js');
const { token } = require('./config.json');
// const fs = require('fs');

const { Player } = require('./player.ts');

// Create a new client instance
const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES'] });

// in its current state does nothing -- will eventually do stuff with seperate command files!

client.commands = new Collection();
// const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// for (const file of commandFiles) {
//	const command = require(`./commands/${file}`);
//	client.commands.set(command.data.name, command);
// }

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
	// this is here just for testing purposes
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	const { commandName } = interaction;
	if (commandName == 'play') {
		// this here checks that the person is in a voice channel
		if (interaction.member.voice.channelId != null) {
			// passes necessary stuff for the creation of the player
			const player = new Player('jazz', joinVoiceChannel({
				channelId: interaction.member.voice.channelId,
				guildId: interaction.guildId,
				adapterCreator: interaction.guild.voiceAdapterCreator,
			}));
			player.play();
			// will eventually reply with a cool info box about the jazz that is playing
			interaction.reply('Just a test for now');
		}
		else {
			await interaction.reply('You need to be in a voice channel to use this command');
		}

	}

	// code below commented out to first get the code working in one file - then to simplify
	// the next step is to split into multiple files and make it easier to manage and modify!
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
