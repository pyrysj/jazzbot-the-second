const { SlashCommandBuiler } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuiler()
		.setName('play')
		.setDescription('This is a test command!'),
	async execute(interaction) {
		await interaction.reply('just a test');
	},
};