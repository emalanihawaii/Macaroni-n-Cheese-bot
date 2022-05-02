const express = require('express');
const app = express();
const port = 3000;
const fs = require('node:fs');
const { Client, Collection, Intents } = require('discord.js');
const token = process.env['token'].toString();
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MEMBERS], partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}
const guildFiles = fs.readdirSync('./guild').filter(file => file.endsWith('.js'));

for (const file of guildFiles) {
  const command = require(`./guild/${file}`);
  client.commands.set(command.data.name, command);
}

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

const { default: ReactionRole } = require("discordjs-reaction-role");
const arr = ["968369386756902972", "968369395074220072", "968369405488685077", "968369430251864074", "968369452414566440", "968369472408793149", "968369494156259370", "964979729285394503"];
const rr = new ReactionRole(client, [
  { messageId: arr[0], reaction: "🟠", roleId: "964525894628696064" },
  { messageId: arr[0], reaction: "🟣", roleId: "964525968851107920" },
  { messageId: arr[0], reaction: "🟢", roleId: "964528064128249866" },

  { messageId: arr[1], reaction: "💗", roleId: "968307818853699664" },
  { messageId: arr[1], reaction: "💕", roleId: "968307818908246068" },
  { messageId: arr[1], reaction: "❣️", roleId: "968307819877113896" },

  { messageId: arr[2], reaction: "🚺", roleId: "968248361780142120" },
  { messageId: arr[2], reaction: "🚹", roleId: "968248365995417660" },
  { messageId: arr[2], reaction: "🟣", roleId: "968248366507126894" },
  { messageId: arr[2], reaction: "🟡", roleId: "968248367161413733" },
  { messageId: arr[2], reaction: "🟠", roleId: "968248367677317132" },
  { messageId: arr[2], reaction: "🔴", roleId: "968248368130318377" },

  { messageId: arr[3], reaction: "🔴", roleId: "964627718320848906" },
  { messageId: arr[3], reaction: "🟠", roleId: "964627718727680021" },
  { messageId: arr[3], reaction: "🟡", roleId: "964628902540611666" },
  { messageId: arr[3], reaction: "🟢", roleId: "964628902993596487" },
  { messageId: arr[3], reaction: "🔵", roleId: "964628904029593610" },
  { messageId: arr[3], reaction: "🟣", roleId: "964628904541323384" },

  { messageId: arr[4], reaction: "🚺", roleId: "968248662302027796" },
  { messageId: arr[4], reaction: "🚹", roleId: "968248662985683054" },
  { messageId: arr[4], reaction: "🟣", roleId: "968248663971340401" },
  { messageId: arr[4], reaction: "🟡", roleId: "968248665858801676" },
  { messageId: arr[4], reaction: "🟠", roleId: "968248666806714462" },
  { messageId: arr[4], reaction: "🔴", roleId: "968248667620401152" },

  { messageId: arr[5], reaction: "🔴", roleId: "964642181199568906" },
  { messageId: arr[5], reaction: "🟠", roleId: "964642181736460288" },
  { messageId: arr[5], reaction: "🟡", roleId: "964642182323654666" },
  { messageId: arr[5], reaction: "🟢", roleId: "964642182495600701" },
  { messageId: arr[5], reaction: "🔵", roleId: "964642183414161408" },
  { messageId: arr[5], reaction: "🟣", roleId: "964642183846166538" },

  { messageId: arr[6], reaction: "🛑", roleId: "965250085464203264" },
  { messageId: arr[6], reaction: "⚠️", roleId: "965250086269505536" },
  { messageId: arr[6], reaction: "❌", roleId: "965250086990925844" },
  { messageId: arr[6], reaction: "🚫", roleId: "965250087641051176" },
  { messageId: arr[6], reaction: "‼️", roleId: "965250087804620833" },
  { messageId: arr[6], reaction: "⁉️", roleId: "965250088966422558" },
  { messageId: arr[6], reaction: "🔴", roleId: "965250089847242812" },
  { messageId: arr[6], reaction: "❗", roleId: "965250090421874689" },
  { messageId: arr[6], reaction: "⭕", roleId: "965250091931828274" },
  { messageId: arr[6], reaction: "📛", roleId: "965250092758085732" },
  { messageId: arr[6], reaction: "💢", roleId: "965250309779759134" },

  { messageId: arr[7], reaction: "💠", roleId: "964482062667087872" },
])



client.login(token);