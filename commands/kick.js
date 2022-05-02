const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Kick a user.')
    .addUserOption(option => option
      .setName('target')
      .setDescription('The user you wish to kick.')
      .setRequired(true)),
  async execute(interaction) {
    if (!interaction.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
      return interaction.reply('You need the \`KICK_MEMBERS\` permission to use this command.');
    }
    const user = interaction.options.getUser('target');
    interaction.guild.members.kick(user);
    return interaction.reply({ content: `${user} has been kicked!`, ephemeral: false });
  },
};