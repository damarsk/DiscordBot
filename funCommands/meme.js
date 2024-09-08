const axios = require('axios');
const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");

module.exports = {
  name: 'meme',
  description: 'Meme',
  async execute(message, args) {
    try {
      const response = await axios.get('https://api.imgflip.com/get_memes');
      
      // Memilih meme secara acak
      const memes = response.data.data.memes;
      const randomMeme = memes[Math.floor(Math.random() * memes.length)];

      const embed = new EmbedBuilder()
        .setColor('#FFC0CB')
        .setTitle(`${randomMeme.name}`)
        .setImage(`${randomMeme.url}`);

      message.reply({ embeds: [embed] });
    } catch (error) {
      console.error('Error fetching meme:', error);
      message.reply('Sorry, I couldn\'t fetch a meme at the moment.');
    }
  },
};
