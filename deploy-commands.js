const fs = require('node:fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const token = process.env['token'];
const clientId = process.env['clientId'];
const guildId = process.env['guildId'];

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);
(async () => {
	try {
		await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);

		console.log('Successfully reloaded global commands.');
	} catch (error) {
		console.error(error);
	}
})();
const guildCommands = [];
const guildFiles = fs.readdirSync('./guild').filter(file => file.endsWith('.js'));
for(const file of guildFiles){
  const guildCommand = require(`./guild/${file}`);
  guildCommands.push(guildCommand.data.toJSON());
}
(async () => {
	try {
		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: guildCommands },
		);

		console.log('Successfully reloaded guild commands.');
	} catch (error) {
		console.error(error);
	}
})();
/*rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);*/
/*rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: guildCommands })
	.then(() => console.log('Successfully registered guild commands.'))
	.catch(console.error);*/

