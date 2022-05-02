const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('roll')
    .setDescription('Selects a number between 1 and another number.')
    .addIntegerOption(option => option
      .setName('upperbound')
      .setDescription('The highest possible number to roll.')
      .setRequired(true)),
  async execute(interaction) {
    const max = interaction.options.getInteger('upperbound');
    const num = Math.round((Math.random() * (max - 1) + 1));
    return interaction.reply(`You rolled a ${num} out of ${max}!`);
  },
};