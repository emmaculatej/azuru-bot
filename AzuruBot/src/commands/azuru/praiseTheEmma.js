const { MessageEmbed, MessageAttachment } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PraiseTheEmmaCommand extends BaseCommand {
  constructor() {
    super('praisetheemma', 'random', []);
  }

  async run(client, message, args)
  {
    const attachment = new MessageAttachment('./AzuruBot/src/images/jokerAllOut.gif', 'jokerAllOut.gif');
    const praiseEmmaEmbedded = new MessageEmbed()
    .setTitle(`${message.author.username} has praised Emma!`)
    .attachFiles(attachment)
    .setImage('attachment://jokerAllOut.gif');

    return message.channel.send(praiseEmmaEmbedded);
  }
}
