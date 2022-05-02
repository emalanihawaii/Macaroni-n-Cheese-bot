const { Permissions } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('addroles')
		.setDescription('Creates up to 10 roles with one command')
    //options
    .addStringOption(option => option
      .setName('role1')
      .setDescription('The name of a role you want to create')
      .setRequired(true))
    .addStringOption(option => option
      .setName('role2')
      .setDescription('The name of a role you want to create'))
    .addStringOption(option => option
      .setName('role3')
      .setDescription('The name of a role you want to create'))
  .addStringOption(option => option
      .setName('role4')
      .setDescription('The name of a role you want to create'))
  .addStringOption(option => option
      .setName('role5')
      .setDescription('The name of a role you want to create'))
  .addStringOption(option => option
      .setName('role6')
      .setDescription('The name of a role you want to create'))
  .addStringOption(option => option
      .setName('role7')
      .setDescription('The name of a role you want to create'))
  .addStringOption(option => option
      .setName('role8')
      .setDescription('The name of a role you want to create'))
    .addStringOption(option => option
      .setName('role9')
      .setDescription('The name of a role you want to create'))
    .addStringOption(option => option
      .setName('role10')
      .setDescription('The name of a role you want to create'))
    .addStringOption(option => option
      .setName('hex')
      .setDescription('Color that you want the roles to be in hex format.')),
	async execute(interaction) {
    if(!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_ROLES)){
      return await interaction.editReply('You need the \`MANAGE_ROLES\` permission to use this command.');
    }
    const color = await interaction.options.getString('hex');
    const arr = [interaction.options.getString('role1'), interaction.options.getString('role2'),interaction.options.getString('role3'), interaction.options.getString('role4'), interaction.options.getString('role5'), interaction.options.getString('role6'), interaction.options.getString('role7'), interaction.options.getString('role8'), interaction.options.getString('role9'), interaction.options.getString('role10')];
    for(const role of arr){
      if(role){
        const temp = await interaction.guild.roles.create({ name: `${role}` });
        if(color){
          temp.setColor(`#${color}`);
        }
      }else{
        continue;
      }
    }
    return interaction.editReply('Role(s) have been created')
	},
};