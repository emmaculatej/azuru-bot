const BaseCommand = require('../../utils/structures/BaseCommand');
const dadJokeAPI = require('../../classes/dadJokeAPI.js');


module.exports = class DadJokeCommand extends BaseCommand {
  constructor() {
    super('dadjoke', 'schedule', []);
    this.dadJokeApi = new dadJokeAPI();
  }

  async run(client, message, args)
  {
    try {
      const response = await this.dadJokeApi.GET();
      const jokeResult = response.data;
      message.channel.send(jokeResult.joke);
    } catch (error) {
      console.log(error);
      message.channel.send('The request could not be registered. Please try again.')
    }
  }
}
