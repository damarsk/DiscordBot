const { EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');
const db = require("../mongodb");

module.exports = {
  name: 'animecommands',
  description: 'Display a list of available anime-related commands!',
  execute(message, args) {
    const animeCommandsPath = path.join(__dirname);
    const animeCommandFiles = fs.readdirSync(animeCommandsPath).filter(file => file.endsWith('.js') && file !== 'animecommands.js');

    const commandList = animeCommandFiles.map(file => path.basename(file, '.js')).join(', ');

    const embed = new EmbedBuilder()
      .setColor('#FFFFFF')
      .setTitle('Anime Commands')
      .setDescription(`__**✅ List Of Available Interactions**__\n\n▶️ __**Commands:**__\n  ${commandList}.\n`)
      .setImage(`https://cdn.discordapp.com/attachments/1140841446228897932/1142126954775068762/pxfuel.jpg`);

    message.reply({ embeds: [embed] });
  },
};