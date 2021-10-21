const { SlashCommandBuilder } = require('@discordjs/builders');
const { mPlayer } = require('../index.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Command that makes jazzy tunes play.'),
	async execute(interaction) {
		mPlayer.test();
		return interaction.reply('Pong!');
	},
};