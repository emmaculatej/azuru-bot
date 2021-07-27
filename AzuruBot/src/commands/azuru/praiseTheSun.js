const {  MessageEmbed, MessageAttachment } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PraiseTheSunCommand extends BaseCommand {
  constructor() {
    super('praisethesun', 'random', []);
  }

  async run(client, message, args)
  {
    const attachment = new MessageAttachment('./AzuruBot/src/images/praiseTheSunImage.gif', 'praiseTheSunImage.gif');
    const praiseSubEmbedded = new MessageEmbed()
    .setTitle(`${message.author.username} has praised the sun!`)
    .attachFiles(attachment)
    .setImage('attachment://praiseTheSunImage.gif');

    return message.channel.send(praiseSubEmbedded);
  }
}
