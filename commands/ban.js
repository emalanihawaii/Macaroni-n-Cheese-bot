const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Bans a user.')
    .addUserOption(option => option
      .setName('target')
      .setDescription('The user you wish to ban.')
      .setRequired(true)),
  async execute(interaction) {
    if (!interaction.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
      return interaction.reply('You need the \`BAN_MEMBERS\` permission to use this command.');
    }
    const user = interaction.options.getUser('target');
    interaction.guild.members.ban(user);
    return interaction.reply({ content: `${user} has been banned!`, ephemeral: false });
  },
};