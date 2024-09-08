const axios = require('axios');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'news',
    description: 'Berita terbaru CNN Indonesia',
    async execute(message, args) {
        try {
            const response = await axios.get('https://api-berita-indonesia.vercel.app/cnn/terbaru/');
            const { data } = response.data;
            
            if (data && data.posts && data.posts.length > 0) {
                // Mengambil artikel secara acak
                const randomIndex = Math.floor(Math.random() * data.posts.length);
                const randomArticle = data.posts[randomIndex];
                
                const embed = new EmbedBuilder()
                    .setColor('#0099ff')
                    .setTitle(randomArticle.title)
                    .setDescription(randomArticle.description)
                    .setURL(randomArticle.link)
                    .setImage(randomArticle.thumbnail)
                    .setFooter({ text: 'Source: CNN Indonesia' });

                message.reply({ embeds: [embed] });
            } else {
                message.reply('Tidak ada artikel yang ditemukan.');
            }
        } catch (error) {
            console.error('Error fetching news:', error);
            message.reply('Terjadi kesalahan saat mengambil berita.');
        }
    },
};
