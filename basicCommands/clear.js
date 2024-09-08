const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");

module.exports = {
	name: 'clear',
    aliases: ['clear', 'purge', 'delete'],
	description: 'Menghapus Chat',
    execute(message, args) {
        const user = message.author;
        const subCommand = parseInt(args[0]); // Mengubah args[1] menjadi integer

        if (!subCommand || isNaN(subCommand) || subCommand < 1 || subCommand > 100) {
            // Jika subCommand bukan angka atau berada di luar rentang 1-100
            const embed = new EmbedBuilder()
                .setColor('#FFFFFF')
                .setTitle(`Pesan Error`)
                .setDescription(`❌Salah, Input Anda : **${subCommand}** , Tolong masukkan angka di antara 1 dan 100.`);
        
            message.reply({ embeds: [embed] });
        } else {
            // Command untuk menghapus chat
            message.channel.bulkDelete(subCommand)
                .then(messages => {
                    const embed = new EmbedBuilder()
                        .setColor('#FFFFFF')
                        .setTitle(`${user.username} Telah Menghapus ${messages.size} Chat!`);
                    
                    message.channel.send({ embeds: [embed] });
                })
                .catch(error => {
                    console.error('Error deleting messages:', error);
                    const embed = new EmbedBuilder()
                        .setColor('#FFFFFF')
                        .setTitle(`Pesan Error`)
                        .setDescription(`Terjadi kesalahan saat menghapus chat.`)
                    
                    message.reply({ embeds: [embed] });
                });
        }
    },
};