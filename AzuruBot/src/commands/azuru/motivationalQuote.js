const {  MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const axios = require('axios');


module.exports = class MotivationalQuoteCommand extends BaseCommand {
  constructor() {
    super('motivationalQuote', 'random', ["mq"]);
  }

  async run(client, message, args)
  {


  const response = await axios({url:'https://zenquotes.io/api/random',
  method: 'get',
  headers:
    {
      'Accept': 'application/json',
      'Content-Type' : 'application/json',
      'User-Agent': 'AzuruBot (https://github.com/emmaculate/azuru-bot)'
    },
    data :
    {
      q: '',
      a: '',
      h: ''
    }
  }).catch(error => {
    console.log(error);
    return message.channel.send('The request could not be registered. Please try again.');
  });
  const result = response.data[0];
  const danceEmbedded = new MessageEmbed()
      .setTitle("Daily Motivation")
      .setDescription(`${result.q} \n by ${result.a}`);

  return message.channel.send(danceEmbedded);
  }
}
