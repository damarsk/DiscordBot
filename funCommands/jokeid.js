const axios = require('axios');
const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'jokeid',
  description: 'Random Jokes Indonesia',
  async execute(message, args) {
    try {
      const response = await axios.get('https://candaan-api.vercel.app/api/text/random');
      const { data } = response.data;

      const embed = new EmbedBuilder()
        .setColor('#FFC0CB')
        .setTitle('Random Joke Indo')
        .setDescription(`${data}\n`);

      message.reply({ embeds: [embed] });
    } catch (error) {
      console.error('Error fetching joke:', error);
      message.reply('Sorry, I couldn\'t tell a joke at the moment.');
    }
  },
};
