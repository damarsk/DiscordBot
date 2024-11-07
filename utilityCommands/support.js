const { EmbedBuilder } = require('discord.js');
module.exports = {
    name: 'support',
    description: 'support server of this Bot',
    execute(message, args) {
        const supportServerLink = 'https://discord.com/invite/qefRvqWwaV';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle('Support server')
            .setDescription(`Click [here](${supportServerLink}) to join our server.\nWe will be there for you anytime ❤️`)
            .setThumbnail(`https://cdn.glitch.global/d3a8a997-11f8-43a4-b058-d97e24a886e2/mabarpplg.png?v=1705228977709`)
            .setTimestamp();
        message.reply({ embeds: [embed] });
    },
};