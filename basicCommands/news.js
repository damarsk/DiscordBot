const axios = require('axios');
const { EmbedBuilder } = require('discord.js');

let onOff = 0; // 0 = off, 1 = on
let intervalId; // Untuk menyimpan ID interval

module.exports = {
    name: 'news',
    description: 'Berita terbaru CNN Indonesia',
    async execute(message, args) {
        // Batasi hanya untuk pengguna dengan ID tertentu
        if (message.author.id !== '592652763113193472') {
            return message.reply('You do not have permission to use this command.');
        }

        const channelId = '1299977039960477696';

        // Fungsi untuk mengambil berita
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://api-berita-indonesia.vercel.app/cnn/terbaru/');
                const { data: data1 } = response.data;

                if (data1 && data1.posts && data1.posts.length > 0) {
                    const randomIndex1 = Math.floor(Math.random() * data1.posts.length);
                    const randomArticle1 = data1.posts[randomIndex1];
                    
                    const embed1 = new EmbedBuilder()
                        .setColor('#0099ff')
                        .setTitle(randomArticle1.title)
                        .setDescription(randomArticle1.description)
                        .setURL(randomArticle1.link)
                        .setImage(randomArticle1.thumbnail)
                        .setFooter({ text: 'Source: CNN Indonesia' });

                    const newsChannel = message.client.channels.cache.get(channelId);

                    if (newsChannel) {
                        await newsChannel.send({ embeds: [embed1] });
                    } else {
                        console.error("Channel tidak ditemukan.");
                        message.reply('Channel berita tidak ditemukan.');
                    }
                } else {
                    message.reply('Tidak ada artikel yang ditemukan.');
                }
            } catch (error) {
                console.error('Error fetching news:', error);
                message.reply('Terjadi kesalahan saat mengambil berita.');
            }
        };

        // Logika untuk menghidupkan/mematikan berita otomatis
        if (onOff === 0) {
            onOff = 1;
            await fetchNews(); // Panggil berita pertama kali
            intervalId = setInterval(fetchNews, 3600000); // Interval 1 jam (3600000 ms)
            message.reply('Berita otomatis telah dinyalakan.');
        } else {
            onOff = 0;
            clearInterval(intervalId); // Hentikan interval
            message.reply('Berita otomatis telah dimatikan.');
        }
    },
};
