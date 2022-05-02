const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('approve')
		.setDescription('Gives a member access to the RP channels')
    .addUserOption(option => option
      .setName('target')
      .setDescription('The user you wish to approve.')
      .setRequired(true)),
	async execute(interaction) {
    if(interaction.guild.id != '964280617984487434'){
      return await interaction.editReply('This cmd was made for a different server.')
    }
    if(!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_ROLES)){
      return interaction.editReply('You need the \`MANAGE_ROLES\` permission to use this command.');
    }
    const user = interaction.options.getMember('target');
    await user.roles.add(interaction.guild.roles.cache.get('964481964700762112'));
    await interaction.reply({ content: `Congrats ${user} your oc has been approved`, ephemeral: false });
    return interaction.followUp(`Please paste your character sheet into the accepted channel for your faction!`)
	},
};