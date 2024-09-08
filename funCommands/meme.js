const axios = require('axios');
const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'meme',
  description: 'Meme',
  async execute(message, args) {
    try {
      const response = await axios.get('https://meme-api.com/gimme');
      const { url, author } = response.data;

      const embed = new EmbedBuilder()
        .setColor('#FFC0CB')
        .setTitle('Random Meme')
        .setDescription(`Author : ${author}`)
        .setImage(`${url}`);

      message.reply({ embeds: [embed] });
    } catch (error) {
      console.error('Error fetching joke:', error);
      message.reply('Sorry, I couldn\'t tell a joke at the moment.');
    }
  },
};
