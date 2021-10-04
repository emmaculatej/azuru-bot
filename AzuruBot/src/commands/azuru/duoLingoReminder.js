const { MessageEmbed, MessageAttachment, Message } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class DuoLingoReminderCommand extends BaseCommand {
  constructor() {
    super('duoLingoReminder', 'random', ["dlr", "duoLingoReminder"]);
  }

  async run(client, message, args)
  {
    var roleId = '867032751324921876'
    return message.channel.send(`<@&${roleId}> Streak check! Please make sure you do your daily lesson!`);
  }
}
