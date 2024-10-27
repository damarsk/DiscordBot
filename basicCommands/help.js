const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const db = require("../mongodb");

module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  async execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;

    const categories = [
      { name: '▶️  Basic', value: '`avatar`, `date`, `help`, `lirik`, `news`, `prefix`' },
      { name: '▶️  Fun', value: '`ascii`, `hack`, `joke`, `jokeid`, `meme`, `memeid`, `quotes`, `roll`, `say`' },
      { name: '▶️  Images', value: '`animal {type}`, `listanimal`' },
      { name: '▶️  Anime', value: '`blush`, `bonk`, `bully`, `cry`, `cuddle`, `dance`, `highfive`, `hug`, `kiss`, `pat`, `sad`, `slap`, `thinking`, `wave`, `wink`, `yes`, `animecommands`' },
      { name: '▶️  Aritmatika', value: '`add`, `sub`, `multi`, `div`' },
      { name: '▶️  Utility', value: '`ban`, `changeprefix`, `clear`, `kick`, `owner`, `ping`, `serverinfo`, `support`, `uptime`, `userinfo`' }
    ];

    let currentIndex = 0;

    const sendHelpEmbed = async (interaction) => {
      const embed = new EmbedBuilder()
        .setColor('#2b71ec')
        .setAuthor({
          name: 'Im here to Help!',
          iconURL: 'https://cdn.discordapp.com/attachments/1175487983915376662/1175667506791325706/communication.png?ex=656c10b0&is=65599bb0&hm=e378f1b355a2401bcab504b08a0766001d6b7c090c91ce0a7a7a87c868feb955&',
        })
        .setDescription(`__**STATS :**__\n\n> **📊 Bot in servers:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Made By [Damar](https://s.id/Damar)**\n\n__**COMMANDS :**__ `)
        .addFields(categories[currentIndex])
        .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
        .setImage(`https://cdn.glitch.global/d3a8a997-11f8-43a4-b058-d97e24a886e2/mabarpplg.png?v=1705228977709`)
        .setFooter({ text: `Slide ${currentIndex + 1}/${categories.length}` });

      const row = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setCustomId('prev')
            .setLabel('Previous')
            .setStyle(ButtonStyle.Primary)
            .setDisabled(currentIndex === 0),
          new ButtonBuilder()
            .setCustomId('next')
            .setLabel('Next')
            .setStyle(ButtonStyle.Primary)
            .setDisabled(currentIndex === categories.length - 1),
        );

      if (interaction) {
        await interaction.update({ embeds: [embed], components: [row] });
      } else {
        const reply = await message.reply({ embeds: [embed], components: [row] });
        return reply;
      }
    };

    // Send initial embed
    const initialMessage = await sendHelpEmbed();

    const filter = i => i.user.id === message.author.id;
    const collector = message.channel.createMessageComponentCollector({ filter, time: 60000 });

    collector.on('collect', async i => {
      if (i.customId === 'next') {
        currentIndex++;
      } else if (i.customId === 'prev') {
        currentIndex--;
      }

      await sendHelpEmbed(i); // Directly call sendHelpEmbed with the interaction
    });

    collector.on('end', () => {
      initialMessage.edit({ components: [] }); // Disable buttons after the collector ends
      message.channel.send('Help command has expired.');
    });
  },
};
