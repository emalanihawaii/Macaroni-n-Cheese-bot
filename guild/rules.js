const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rules')
		.setDescription('Posts the rules.')
    .addChannelOption(option => option
      .setName('channel')
      .setDescription('The channel for the rules.')
      .setRequired(true)),
	async execute(interaction){
    const channel = await interaction.options.getChannel('channel');
    if(!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_ROLES)){
      return interaction.editReply('You be an admin or mod to use this command.');
    }
    let output ='>>> 1. Please use general and common courtesy when speaking to someone, both in roleplay and out of character. This includes paying attention to pronouns, health limitations, and other things. Since this is a PG-16 server, triggers and cussing may be uncensored; if you feel this will become an issue for you, you are welcome to leave.';
    output += '\n\n2. Controversial topics are not to be discussed here if at all possible. This server is a friendly RP server for all, not some place for you to settle your differences. Kindly take anything that discusses or relates to any of the following to DMs: religion, nationality, sexuality, current events, etc.';
    output += '\n\n3. Use common sense. If your character does not have any actual reason to know something, then they don’t know it. Do not pick fights intentionally if there is no actual in character reason to do so.';
    output += '\n\n4. Listen to the admins. They’re admins for a reason. What they say is to be listened to and payed attention to. If you don’t listen, there will be consequences.';
    output += '\n\n5. No god modding or overpowered/OP characters. The power lists were made assuming that each person would limit their powers accordingly; if there is need for there to be revisions, powers will change.';
    output += '\n\n6. Those under 18+ in real life, date those who are under 18+. 18+ people, same works for you. Keep dating in your age range, and no lying about your age. To figure out age, check tags. This is a PG-16 server, so any actions that may be relating to the X-Rated range needs to be moved to DMs.';
    output += '\n\n7. Have fun. This server was not meant to be a strict, boxed in RP; go and have fun! Of course, please use common sense when you RP and do things logically';
    await channel.send(output);
    await channel.send('>>> Rule infractions will be dealt with on a strike system, everyone receives one warning. After that, only strikes will be dealt. After five strikes, users will be banned regardless of rule infraction size. Admins reserve the right to strike people at their discretion.')
    const rules = await channel.send('By reacting to this message, you agree to follow the rules as stated above. ')
    rules.react('💠');
    return interaction.editReply('Rules have been sent to the appropriate channel.');
  }
}