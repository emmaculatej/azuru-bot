const { MessageEmbed, MessageAttachment } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class HypemanCommand extends BaseCommand {
  constructor() {
    super('hypeman', 'random', []);

  }

 getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  async run(client, message, args)
  {
    const hypeman = new MessageEmbed()
    var choice = this.getRandomInt(1,2);
    if(choice === 1)
    {
      const attachment = new MessageAttachment('./AzuruBot/src/images/hypeman.gif', 'hypeman.gif');
      hypeman
      .setTitle(`Calling 1-800-hype-man`)
      .setDescription('LET\'S GO!! \n You freaking killed it - we are so proud of you!!!!')
      .attachFiles(attachment)
      .setImage('attachment://hypeman.gif');

      return message.channel.send(hypeman);
    }
    else{
      const attachment = new MessageAttachment('./AzuruBot/src/images/hypeman2.gif', 'hypeman2.gif');
      hypeman
      .setTitle(`Calling 1-800-hype-man`)
      .setDescription('AWWW YEAH! YA DID IT! YOU THE BEST! ')
      .attachFiles(attachment)
      .setImage('attachment://hypeman2.gif');

      return message.channel.send(hypeman);
    }

  }
}
