const { EmbedBuilder } = require('discord.js');
const {
    MessageEmbed,
    Permissions
  } = require(`discord.js`)
  
module.exports = {
    name: 'ban',
    description: 'Ban a user from the server',
    execute(message, args) {
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.reply('❌ You do not have permission to use this command.');
        }
        const user = message.mentions.users.first();
        if (!user) {
            return message.reply('❌ You need to mention a user to ban.');
        }
        const member = message.guild.members.cache.get(user.id);
        member.ban();
        const embed = new EmbedBuilder()
            .setColor('#FF0000')
            .setTitle('User Banned ✅')
            .setDescription(`▶️ ${user.tag} has been banned from the server by ${message.author.tag}.`)
            .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};