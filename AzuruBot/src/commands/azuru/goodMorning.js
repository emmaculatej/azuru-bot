const { MessageEmbed, MessageAttachment } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class GoodMorningCommand extends BaseCommand {
  constructor() {
    super('goodmorning', 'random', ["gm", "goodMorning"]);
  }

  async run(client, message, args)
  {
    const attachment = new MessageAttachment('./AzuruBot/src/images/goodMorningCat.gif', 'goodMorningCat.gif');
    const embedded = new MessageEmbed()
    .attachFiles(attachment)
    .setImage('attachment://goodMorningCat.gif');

    return message.channel.send(embedded);
  }
}
