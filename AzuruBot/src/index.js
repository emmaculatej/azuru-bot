const { Client, Collection } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const express = require('express');
const cron = require('node-cron');

const client = new Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const motivationalCommand = '!mq';
const channel = '808039105547599944';

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = process.env.PREFIX;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(process.env.CLIENT_TOKEN);

  app = express();
  app.listen(3000);
})();


