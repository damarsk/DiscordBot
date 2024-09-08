const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'animecommands',
  description: 'Display a list of available anime-related commands!',
  execute(message, args) {
    const embed = new EmbedBuilder()
      .setColor('#FFFFFF')
      .setTitle('Anime Commands')
      .setDescription(`__**✅ List Of Available Interactions**__\n\n▶️ __**Section 1 :**__\n  blush, bonk, bully, cry, cuddle, dance, highfive, kiss.\n\n▶️ __**Section 2 :**__\n  pat, sad, hug, slap, thinking, wave, wink, yes.\n`)
      .setImage(`https://cdn.discordapp.com/attachments/1140841446228897932/1142126954775068762/pxfuel.jpg`);
    message.reply({ embeds: [embed] });
  },
};
