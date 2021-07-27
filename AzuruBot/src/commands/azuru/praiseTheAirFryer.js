const { MessageEmbed, MessageAttachment } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PraiseTheAirFryerCommand extends BaseCommand {
  constructor() {
    super('praisetheairfryer', 'random', []);
  }

  async run(client, message, args)
  {
    const attachment = new MessageAttachment('./AzuruBot/src/images/airfryerSparkle.gif', 'airfryerSparkle.gif');
    const praiseSubEmbedded = new MessageEmbed()
    .setTitle(`${message.author.username} is praising the airfryer!`)
    .setDescription('Who\'s a good airfryer? You are. Yes you are :azuruLove:')
    .attachFiles(attachment)
    .setImage('attachment://airfryerSparkle.gif');

    return message.channel.send(praiseSubEmbedded);
  }
}
