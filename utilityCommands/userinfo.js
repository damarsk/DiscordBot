const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'userinfo',
    aliases: ['user', 'uinfo'],
    description: 'Get information about a user',
    async execute(message, args) {
        const user = message.mentions.users.first() || message.author;
        const member = await message.guild.members.fetch(user.id);

        const roles = member.roles.cache
            .filter(role => role.name !== '@everyone')
            .map(role => role.toString())
            .join(', ') || 'None';

        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setAuthor({
                name: 'User  Info!',
                iconURL: 'https://cdn.discordapp.com/attachments/1140841446228897932/1144684108174348318/giphy_1.gif', 
                url: 'https://discord.gg/FUEHs7RCqz'
            })
            .setThumbnail(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setDescription(`**Username**:  ${user.username}\n**Discriminator**:  ${user.discriminator}\n**ID**:  ${user.id}`)
            .addFields(
                { name: 'Joined Discord', value: `<t:${Math.floor(user.createdTimestamp / 1000)}:R>`, inline: true },
                { name: 'Joined Server', value: `<t:${Math.floor(member.joinedTimestamp / 1000)}:R>`, inline: true },
                { name: 'Roles', value: roles, inline: true },
                { name: 'Total Roles', value: `${member.roles.cache.size - 1}`, inline: true }, // Menampilkan jumlah role yang dimiliki
            )
            .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};