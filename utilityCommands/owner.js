const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'owner',
    description: 'Bot owner info',
    execute(message, args) {
        const WebsiteLink = 'https://damar.pw/';
        const DiscordLink = 'https://s.id/MabarPPLG';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(' 🫅 Owner Info')
            .setDescription(`__**About me**__:\n 🤖 Made By Damar Syahada Kusuma [XI RPL-2]\n ❤️ [Damar](${WebsiteLink})\n 💙 [Discord](${DiscordLink})`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};