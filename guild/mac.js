const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mac')
		.setDescription('Creates a to-do list for Mac.')
    .addStringOption(option => option
      .setName('request')
      .setDescription('What you want Mac to do. ')
      .setRequired(true)),
	async execute(interaction) {
    const user = await interaction.client.users.fetch('700848908133203978');
    await user.send(`${interaction.options.getString('request')} from ${interaction.user}`);
    return interaction.editReply({content: `Your request has been sent :slight_smile:`, ephemeral: false});
  }
}