const { SlashCommandBuilder } = require('@discordjs/builders');
const { VoiceConnectionStatus, AudioPlayerStatus, getVoiceConnection, AudioPlayer } = require('@discordjs/voice');
// const { ExplicitContentFilterLevels } = require('discord.js/typings/enums');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Command that makes jazzy tunes play.'),
	// First checks if user in voice channel. We do this by using a try catch statemnet
	// if the connection exists <- no error, if it doesn't <- error
	async execute(interaction) {
		try {
			const connection = getVoiceConnection(interaction.member.voice.channelId);
			const subscription = connection.subscribe(AudioPlayer);
		}
		catch (error) {
			interaction.reply('You need to be in a voice call to listen to jazzy tunes.');
		}
		// if (interaction.member.voice.channelId) {
		//	console.log('works!');
		//	mPlayer.play();
		// }
		// else {
		//	console.log('yup it goes into the else bracket!');
		// }
		// interaction.reply('You need to be in a voice call to listen to jazzy tunes.');
		// interaction.user.g
		// const connection = getVoiceConnection();

	},
};