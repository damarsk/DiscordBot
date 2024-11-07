const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'serverinfo',
    aliases: ['server', 'sinfo'],
    description: 'Get information about server',
    async execute(message, args) {
        const server = message.guild;
        const emojis = server.emojis.cache;
        const roles = server.roles.cache;

        try {
            const owner = await server.members.fetch(server.ownerId);
            const textChannels = server.channels.cache.filter(c => c.type === 'GUILD_TEXT').size;
            const voiceChannels = server.channels.cache.filter(c => c.type === 'GUILD_VOICE').size;
            const onlineMembers = server.members.cache.filter(member => member.presence?.status === 'online').size;
            const invites = await server.invites.fetch();
            const inviteLink = invites[0] ? invites[0].url : 'No invites available';

            const embed = new EmbedBuilder()
                .setColor('#FFFFFF')
                .setTitle('📊 Server Info')
                .setThumbnail(server.iconURL({ format: 'png', dynamic: true, size: 1024 }))
                .setDescription(`
                    **Server Name:** ${server.name}
                    **Server ID:** ${server.id}
                    **Owner:** ${owner.user.tag}
                    **Created At:** ${server.createdAt.toUTCString()}
                    **Members:** ${server.memberCount}
                    **Online Members:** ${onlineMembers}
                    **Emojis:** ${emojis.size} emojis
                    **Roles:** ${roles.size} roles
                    **Text Channels:** ${textChannels}
                    **Voice Channels:** ${voiceChannels}
                    **Invite Link:** ${inviteLink}
                `)
                .setTimestamp()
                .setImage(server.bannerURL({ format: 'png', dynamic: true, size: 1024 }));

            message.reply({ embeds: [embed] });
        } catch (error) {
            console.error('Error fetching server information:', error);
            message.reply('There was an error fetching the server information.');
        }
    }
}