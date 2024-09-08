const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: 'Im here to Help!',
        iconURL: 'https://cdn.discordapp.com/attachments/1175487983915376662/1175667506791325706/communication.png?ex=656c10b0&is=65599bb0&hm=e378f1b355a2401bcab504b08a0766001d6b7c090c91ce0a7a7a87c868feb955&', 
        url: 'https://discord.gg/FUEHs7RCqz'
    })
     
      .setDescription(`__**STATS :**__\n\n> **📊 Bot in servers:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Made By [Damar](https://s.id/Damar)**\n\n__**COMMANDS :**__ `)
      .addFields(
        // Basic commands category
        {
          name: '▶️  Basic',
          value: '`avatar`, `date`, `help`, `lirik`, `news`, `prefix`',
          inline: true,
        },
        //fun category
        {
          name: '▶️  Fun',
          value: ' `ascii`, `hack`, `joke`, `jokeid`, `meme`, `memeid`, `quotes`, `roll`, `say`',
          inline: true,
        },
        //Image category
        {
          name: '▶️  Images',
          value: '`animal {type}`, `listanimal`',
          inline: true,
        },
        //anime category
        {
          name: '▶️  Anime',
          value: '`hug`, `cry`, `pat`, `sad`, `animecommands`',
          inline: true,
        },
        //aritmatika category
        {
          name: '▶️  Aritmatika',
          value: '`add`, `sub`, `multi`, `div`',
          inline: true,
        },
        // Utility commands category
        {
          name: '▶️  Utility',
          value: '`ban`, `changeprefix`, `clear`, `kick`, `owner`, `ping`, `serverinfo`, `support`, `uptime`, `userinfo`',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://cdn.glitch.global/d3a8a997-11f8-43a4-b058-d97e24a886e2/mabarpplg.png?v=1705228977709`);

    const button1 = new ButtonBuilder()
      .setLabel('Website')
      .setURL('https://damar.pw/')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://discord.com/invite/qefRvqWwaV')
      .setStyle(ButtonStyle.Link);

    const button3 = new ButtonBuilder()
      .setLabel('Instagram')
      .setURL('https://www.instagram.com/damarsyahada/')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2, button3);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};