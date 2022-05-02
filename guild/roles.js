const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roles')
		.setDescription('Posts the messages for the reaction roles.')
    .addChannelOption(option => option
      .setName('channel')
      .setDescription('The channel for the reaction role.')
      .setRequired(true)),
	async execute(interaction){
    await interaction.editReply('Working...');
    if(!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_ROLES)){
      return interaction.editReply('You need the \`MANAGE_ROLES\` permission to use this command.');
    }
    const channel = await interaction.options.getChannel('channel');
    await channel.send('**ROLE CLAIM** \n------------- \n**WELCOME TO THE ROLES SECTION, PLEASE CLAIM THE ROLES NEEDED FOR YOUR CHARACTER. REMEMBER ALL OOC ROLES ARE OPTIONAL. TO CLAIM ROLES REACT TO EACH POST WITH THE CORRESPONDING EMOJI** \n-------------');
    await channel.send('------------- \n**IN CHARACTER ROLES** \n*these are roles for your oc only and not IRL*\n-------------');
    const faction = await channel.send("**FACTION ROLES** \n:orange_circle: Greek \n:purple_circle: Roman \n:green_circle: Norse");
    await faction.react('🟠');
    await faction.react('🟣');
    await faction.react('🟢');
    const relationship = await channel.send('**RELATIONSHIP ROLES** \n:heartpulse: Single \n:two_hearts: Taken \n:heart_exclamation: Complicated');
    await relationship.react('💗');
    await relationship.react('💕');
    await relationship.react('❣️');
    const pronouns = await channel.send('**PRONOUN ROLES**\n:female_sign: she/her \n:male_sign: he/him \n:purple_circle: they/them \n:yellow_circle: other pronouns \n:orange_circle: pronoun indifferent \n:red_circle: pronouns change');
    await pronouns.react('🚺');
    await pronouns.react('🚹');
    await pronouns.react('🟣');
    await pronouns.react('🟡');
    await pronouns.react('🟠');
    await pronouns.react('🔴');
    const age = await channel.send("**AGE ROLES** \n:red_circle: 13\n:orange_circle: 14\n:yellow_circle: 15\n:green_circle: 16\n:blue_circle: 17\n:purple_circle: 18+");
    await age.react('🔴');
    await age.react('🟠');
    await age.react('🟡');
    await age.react('🟢');
    await age.react('🔵');
    await age.react('🟣');
    await channel.send('-------------\n**OUT OF CHARACTER ROLES**\n*these are roles for IRL and are not related to your OC*\n-------------');
    const irlPronouns = await channel.send('**IRL PRONOUN ROLES**\n:female_sign: she/her (IRL) \n:male_sign: he/him (IRL) \n:purple_circle: they/them (IRL) \n:yellow_circle: other pronouns (IRL) \n:orange_circle: pronoun indifferent (IRL)\n:red_circle: pronouns change (IRL)');
    await irlPronouns.react('🚺');
    await irlPronouns.react('🚹');
    await irlPronouns.react('🟣');
    await irlPronouns.react('🟡');
    await irlPronouns.react('🟠');
    await irlPronouns.react('🔴');
    const irlAge = await channel.send('**IRL AGE ROLES** \n:red_circle: 13 (IRL)\n:orange_circle: 14 (IRL)\n:yellow_circle: 15 (IRL)\n:green_circle: 16 (IRL)\n:blue_circle: 17 (IRL)\n:purple_circle: 18+ (IRL)');
    await irlAge.react('🔴');
    await irlAge.react('🟠');
    await irlAge.react('🟡');
    await irlAge.react('🟢');
    await irlAge.react('🔵');
    await irlAge.react('🟣');
    const triggers = await channel.send('**TRIGGER ROLES**\n:octagonal_sign: Child Abuse\n:warning: Substance Abuse\n:x: Insomnia\n:no_entry_sign: Violence\n:bangbang: Self-Harm\n:interrobang: Sexual Assault\n:red_circle: Su!cide\n:exclamation: Eating Disorder\n:o: Bodily Fluids\n:name_badge: Epilepsy \n:anger: Other')
    await triggers.react('🛑');
    await triggers.react('⚠️');
    await triggers.react('❌');
    await triggers.react('🚫');
    await triggers.react('‼️');
    await triggers.react('⁉️');
    await triggers.react('🔴');
    await triggers.react('❗');
    await triggers.react('⭕');
    await triggers.react('📛');
    await triggers.react('💢');
    return interaction.editReply('Done');
  },
}