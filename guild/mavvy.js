const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mavvy')
    .setDescription('Pings ✨Mavvy✨'),
  async execute(interaction){
    return interaction.editReply(`<@492000668110815243>`);
  }
}