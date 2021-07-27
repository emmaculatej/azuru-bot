const { DiscordAPIError, MessageEmbed, MessageAttachment, Message, User } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ReactionRolesCommand extends BaseCommand {
  constructor() {
    super('reactionroles', 'reaction', []);
  }

  async run(client, message, args, Discord)
  {
    const channel = '834173050698203187';
    const movie = message.guild.roles.cache.find(role => role.name === "Movies");
    const linguist = message.guild.roles.cache.find(role => role.name === "Linguists");

    //const blue = message.guild.roles.cache.find(role => role.name === "Blue");

    const movieEmoji = '🎥';
    const linguistEmoji = '🦉';
    //const blueEmoji = '💙';

    const description = `Choosing a role will allow you to get notifications and access to different parts of the discord!
    ${movieEmoji} for the movie role
    ${linguistEmoji} for the Linguist role`;

    const reactionRolesEmbedded = new MessageEmbed()
    .setTitle('Choose a role!')
    .setDescription(description);

    let messageEmbed = await message.channel.send(reactionRolesEmbedded);
    await messageEmbed.react(movieEmoji);
    await messageEmbed.react(linguistEmoji);
    //messageEmbed.react(blueEmoji);

    client.on('messageReactionAdd', async(reaction,user) => {
      if(user.bot){
        return;
      }
      if(reaction.message.partial){
        await reaction.message.fetch();
      }
      if(reaction.partial){
        await reaction.fetch();
      }
      if(!reaction.message.guild){
        return;
      }

      if(reaction.message.channel.id === channel){
        if(reaction.emoji.name === movieEmoji){
          await reaction.message.guild.members.cache.get(user.id).roles.add(movie);
        }
        else if(reaction.emoji.name === linguistEmoji){
          await reaction.message.guild.members.cache.get(user.id).roles.add(linguist);
        }
        // if(reaction.emoji.name === blueEmoji){
        //   await reaction.message.guild.members.cache.get(user.id).roles.add(blue);
        // }
      }
    })

    client.on('messageReactionRemove', async(reaction,user) => {
      if(user.bot){
        return;
      }
      if(reaction.message.partial){
        await reaction.message.fetch();
      }
      if(reaction.partial){
        await reaction.fetch();
      }
      if(!reaction.message.guild){
        return;
      }

      if(reaction.message.channel.id === channel){
        if(reaction.emoji.name === movieEmoji){
          await reaction.message.guild.members.cache.get(user.id).roles.remove(movie);
        }
        else if(reaction.emoji.name === linguistEmoji){
          await reaction.message.guild.members.cache.get(user.id).roles.remove(linguist);
        }
        // if(reaction.emoji.name === blueEmoji){
        //   await reaction.message.guild.members.cache.get(user.id).roles.remove(blue);
        // }
      }
    })
  }
}
