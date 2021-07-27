const { MessageEmbed, MessageAttachment } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class DanceCommand extends BaseCommand {
  constructor() {
    super('dance', 'random', []);
  }

  async run(client, message, args)
  {
    const attachment = new MessageAttachment('./AzuruBot/src/images/mario.gif', 'mario.gif');
    const danceEmbedded = new MessageEmbed()
    .setTitle(`${message.author.username} dancing the night away~`)
    .attachFiles(attachment)
    .setImage('attachment://mario.gif');

    return message.channel.send(danceEmbedded);
  }
}
