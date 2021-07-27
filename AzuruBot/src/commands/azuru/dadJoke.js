const BaseCommand = require('../../utils/structures/BaseCommand');
const dadJokeAPI = require('../../classes/dadJokeAPI.js');


module.exports = class DadJokeCommand extends BaseCommand {
  constructor() {
    super('dadjoke', 'random', []);
    this.dadJokeApi = new dadJokeAPI();
  }

  async run(client, message, args)
  {
    try {
      const response = this.dadJokeApi.GET();
      const jokeResult = response.data;
      message.channel.send(jokeResult.joke);
    } catch (e) {
      console.log(error);
      message.channel.send('The request could not be registered. Please try again.')
    }
  }
}
