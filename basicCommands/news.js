const axios = require('axios');
const { EmbedBuilder } = require('discord.js');

let onOff = 0; // 0 = off, 1 = on
let intervalId; // Untuk menyimpan ID interval

module.exports = {
    name: 'news',
    description: 'Berita terbaru CNN Indonesia',
    async execute(message, args) {
        const channelId = '1282728506819874928'; // Ganti dengan ID channel yang ingin kamu gunakan
        if (message.author.id !== '592652763113193472') {
            // Optional: Only allow specific users to restart the bot
           return message.reply('You do not have permission to use this command.');
        }

        // Fungsi untuk mengambil berita
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://api-berita-indonesia.vercel.app/cnn/terbaru/');
                const { data } = response.data;

                if (data && data.posts && data.posts.length > 0) {
                    const randomIndex = Math.floor(Math.random() * data.posts.length);
                    const randomArticle = data.posts[randomIndex];
                    
                    const embed = new EmbedBuilder()
                        .setColor('#0099ff')
                        .setTitle(randomArticle.title)
                        .setDescription(randomArticle.description)
                        .setURL(randomArticle.link)
                        .setImage(randomArticle.thumbnail)
                        .setFooter({ text: 'Source: CNN Indonesia' });

                    const newsChannel = message.client.channels.cache.get(channelId);
                    
                    if (newsChannel) {
                        newsChannel.send({ embeds: [embed] });
                    } else {
                        console.error("Channel tidak ditemukan dengan ID:", channelId);
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
            intervalId = setInterval(async () => {
                await fetchNews();
            }, 3600000); // Ubah interval sesuai kebutuhan (60 detik)
            message.reply('Berita otomatis telah dinyalakan.');
        } else {
            onOff = 0;
            clearInterval(intervalId); // Hentikan interval
            message.reply('Berita otomatis telah dimatikan.');
        }
    },
};