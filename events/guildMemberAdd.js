const { MessageAttachment, MessageEmbed } = require('discord.js');
const file = new MessageAttachment('./logo.png');

module.exports = {
  name: 'guildMemberAdd',
  async execute(member){
    const channel = member.guild.channels.cache.get('964597233175650395');
    if (!channel) return;
    const welcomeEmbed = new MessageEmbed()
      .setTitle('Welcome to the Server!')
      .setDescription(`Hello ${member} and welcome to the server!`)
      .addField('Instructions:', 'Please go to <#964289279796842506> and react to the message at the bottom after reading the rules. Then you can create your character, have fun!', true)
      .setImage(url = 'attachment://logo.png');
    channel.send({embeds: [welcomeEmbed], files: [file]});
  }
}