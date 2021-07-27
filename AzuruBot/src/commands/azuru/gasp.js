const { MessageEmbed, MessageAttachment } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class GaspCommand extends BaseCommand {
  constructor() {
    super('gasp', 'random', ["legasp", "pikaWhat", "pikawhat"]);
  }

  async run(client, message, args)
  {
    const attachment = new MessageAttachment('./AzuruBot/src/images/pikaWhat.gif', 'pikaWhat.gif');
    const embedded = new MessageEmbed()
    .attachFiles(attachment)
    .setImage('attachment://pikaWhat.gif');

    return message.channel.send(embedded);
  }
}
