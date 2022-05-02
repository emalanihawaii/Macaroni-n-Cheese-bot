const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rptime')
		.setDescription('Gives the current time in roleplay(AST)'),
	async execute(interaction) {
    if(interaction.guild.id != '964280617984487434'){
      return await interaction.editReply('This cmd was made for a different server.')
    }
    const date = new Date();
    const estDate = new Date(date.getTime() + (-4)*60*60*1000);
    var out = "";
    if(estDate.getHours() > 12){
      out += `${estDate.getHours() -12}:`;
      if(estDate.getMinutes() < 10){
        out += `0`;
      }
      out += `${estDate.getMinutes()} pm`;
    }else{
      out += `${estDate.getHours()}:`;
      if(estDate.getMinutes() < 10){
        out += `0`;
      }
      out += `${estDate.getMinutes()} am`;
    }
		interaction.editReply({content: `The time is currently ${out}.`, ephemeral: true});
	},
};