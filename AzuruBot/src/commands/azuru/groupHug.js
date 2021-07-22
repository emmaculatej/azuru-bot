const { MessageEmbed, MessageAttachment } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class GroupHugCommand extends BaseCommand {
  constructor() {
    super('groupHug', 'random', ["grouphug", "gh", "gH"]);
  }

  async run(client, message, args)
  {
    const attachment = new MessageAttachment('./AzuruBot/src/images/groupHug.gif', 'groupHug.gif');
    const embedded = new MessageEmbed()
    .attachFiles(attachment)
    .setImage('attachment://groupHug.gif');

    return message.channel.send(embedded);
  }
}
