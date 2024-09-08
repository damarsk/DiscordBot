const { EmbedBuilder } = require('discord.js');
const { exec } = require('child_process');

module.exports = {
    name: 'restart',
    description: 'Restarts the bot',
    execute(message) {
        if (message.author.id !== '592652763113193472') {
             // Optional: Only allow specific users to restart the bot
            return message.reply('You do not have permission to use this command.');
        }

        // Send a message to confirm restart
        const embed = new EmbedBuilder()
            .setColor('#FF0000')
            .setTitle('Restarting Bot')
            .setDescription('The bot is restarting...')
            .setTimestamp();
        
        message.reply({ embeds: [embed] }).then(() => {
            // Use exec to restart the bot with PM2
            exec('pm2 restart my-bot', (err, stdout, stderr) => {
                if (err) {
                    console.error('Error restarting bot:', err);
                    return message.channel.send('Failed to restart the bot.');
                }
                console.log('Bot restarted successfully.');
            });
        });
    },
};