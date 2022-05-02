const { Permissions } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('delroles')
		.setDescription('Deletes up to 10 roles with one command')
    //options
    .addRoleOption(option => option
      .setName('role1')
      .setDescription('A role to delete')
      .setRequired(true))
    .addRoleOption(option => option
      .setName('role2')
      .setDescription('A role to delete')
      .setRequired(false))
    .addRoleOption(option => option
      .setName('role3')
      .setDescription('A role to delete')
      .setRequired(false))
    .addRoleOption(option => option
      .setName('role4')
      .setDescription('A role to delete')
      .setRequired(false))
    .addRoleOption(option => option
      .setName('role5')
      .setDescription('A role to delete')
      .setRequired(false))
    .addRoleOption(option => option
      .setName('role6')
      .setDescription('A role to delete')
      .setRequired(false))
    .addRoleOption(option => option
      .setName('role7')
      .setDescription('A role to delete')
      .setRequired(false))
    .addRoleOption(option => option
      .setName('role8')
      .setDescription('A role to delete')
      .setRequired(false))
    .addRoleOption(option => option
      .setName('role9')
      .setDescription('A role to delete')
      .setRequired(false))
    .addRoleOption(option => option
      .setName('role10')
      .setDescription('A role to delete')
      .setRequired(false)),
	async execute(interaction) {
    if(!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_ROLES)){
      return await interaction.reply('You need the \`MANAGE_ROLES\` permission to use this command.');
    }
    const arr = [interaction.options.getRole('role1'), interaction.options.getRole('role2'),interaction.options.getRole('role3'), interaction.options.getRole('role4'), interaction.options.getRole('role5'), interaction.options.getRole('role6'), interaction.options.getRole('role7'), interaction.options.getRole('role8'), interaction.options.getRole('role9'), interaction.options.getRole('role10')];
    for(const role of arr){
      if(role){
        await role.delete();
      }else{
        continue;
      }
    }
    return interaction.editReply('Role(s) have been deleted')
	},
};