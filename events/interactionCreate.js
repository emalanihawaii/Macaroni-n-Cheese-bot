module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    if (interaction.isUserContextMenu()){
      const userContext = interaction.client.userContext.get(interaction.)
    }
    if (!interaction.isCommand){
      //console.log(interaction);
      const command = interaction.client.commands.get(interaction.commandName);
  
      if (!command) return;
      await interaction.deferReply();
      try {
        await command.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.editReply({ content: 'There was an error while executing this command!', ephemeral: true });
      }
    }
  },
};