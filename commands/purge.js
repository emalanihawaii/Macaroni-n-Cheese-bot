const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('purge')
    .setDescription('delete multiple messages')
    .addIntegerOption(option => option
      .setName('number')
      .setDescription('The number of messages to delete.')),
  async execute(interaction) {
    if (!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
      return interaction.reply('You need the \`MANAGE_MESSAGES\` permission to use this command.');
    }
    interaction.channel.bulkDelete(interaction.options.getInteger('number') + 1).catch(error => interaction.editReply(`Couldn't delete messages because of: ${error}`));
  }
};