const BaseEvent = require('../../utils/structures/BaseEvent');
const cron = require('node-cron');
const { Message } = require('discord.js');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');

  }
  async run (client) {
    console.log(client.user.tag + ' has logged in.');
    var serverId = '612030951219920898';
    let scheduledGoodMorningMessage = new cron.schedule('0 07 * * *', () => {
      // Specifing your guild (server) and your channel
        const guild = client.guilds.cache.get(serverId);
         const regularSpot = guild.channels.cache.get('612030951219920902');
         regularSpot.send('!goodmorning');
        });
    
    let scheduledDadJokeMessage = new cron.schedule('0 13 * * *', () => {
      // Specifing your guild (server) and your channel
          const guild = client.guilds.cache.get(serverId);
          const comedyCentral = guild.channels.cache.get('702122690999222373');
          comedyCentral.send('!dadjoke');
        });
      
    let scheduledMotivationalMessage = new cron.schedule('0 09 * * *', () => {
      // Specifing your guild (server) and your channel
         const guild = client.guilds.cache.get(serverId);
         const motivationalChannel = guild.channels.cache.get('701103240204255272');
         motivationalChannel.send('!motivationalQuote');
        });

    let scheduledDuoLingoReminder = new cron.schedule('0 11 * * *', () => {
      // Specifing your guild (server) and your channel
          const guild = client.guilds.cache.get(serverId);
          const duoLingoChannel = guild.channels.cache.get('797131414180069417');
          duoLingoChannel.send('!duoLingoReminder');
        });
            
        // When you want to start it, use:
        scheduledMotivationalMessage.start();
        scheduledGoodMorningMessage.start();
        scheduledDadJokeMessage.start();
        scheduledDuoLingoReminder.start();

  }
}