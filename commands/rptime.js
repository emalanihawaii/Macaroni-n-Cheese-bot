const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rptime')
    .setDescription('Gives the time in rp instead of having to convert timezones.'),
  async exectue(interaction) {
    const date = new Date();
    var offset = -300; //Timezone offset for EST in minutes.
    var estDate = new Date(date.getTime() + offset*60*1000);
    var out = "";
    var timeOfDay = "";
    if(estDate.getHours() > 12){
      out += estDate.getHours() - 12;
      timeOfDay = "pm";
    }else{
      out += estDate.getHours();
      timeOfday = "am";
    }
    var min = estDate.getMinutes();
    if(min < 10){
      out += `:0${min}`;
    }else{
      out += `:${min}`;
    }
    await interaction.reply({content: `The time is currently ${out} ${timeOfDay}.`, ephemeral: true});
  },
};