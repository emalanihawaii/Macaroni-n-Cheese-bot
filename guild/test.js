const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Tests whatever I want'),
	async execute(interaction) {
    await interaction.client.emit("guildMemberAdd", interaction.member);
    return interaction.editReply('Testing in progress.');
  }
}