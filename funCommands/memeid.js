const axios = require('axios');
const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'memeid',
  description: 'Meme Indonesia',
  async execute(message, args) {
    try {
      const response = await axios.get('https://candaan-api.vercel.app/api/image/random');
      const { url } = response.data.data;

      const embed = new EmbedBuilder()
        .setColor('#FFC0CB')
        .setTitle('Random Meme Indonesia')
        .setImage(`${url}`);

      message.reply({ embeds: [embed] });
    } catch (error) {
      console.error('Error fetching joke:', error);
      message.reply('Sorry, I couldn\'t tell a joke at the moment.');
    }
  },
};
