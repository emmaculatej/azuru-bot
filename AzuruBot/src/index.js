
const { Client } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');

const client = new Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

(async () => {
  client.commands = new Map();
  client.events = new Map();
  //client.prefix = process.env.PREFIX;
  client.prefix = config.prefix;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  //await client.login(process.env.CLIENT_TOKEN);
  await client.login(config.token)

  app = express();
  app.listen(3000);
})();

