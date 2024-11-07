const axios = require('axios');
const { EmbedBuilder } = require('discord.js');

let onOff = 0; // 0 = off, 1 = on
let intervalId; // Untuk menyimpan ID interval

module.exports = {
    name: 'news',
    description: 'Berita terbaru CNN Indonesia',
    async execute(message, args) {
<<<<<<< HEAD
        const channelId = '1282728506819874928'; // Ganti dengan ID channel yang ingin kamu gunakan
        if (message.author.id !== '592652763113193472') {
            // Optional: Only allow specific users to restart the bot
=======
        const channelId = '1299977039960477696';
        const channelTechId = '1299978376446218300';
        if (message.author.id !== '592652763113193472') {
>>>>>>> 714c9f55231e517431f5e07f58bff5827e9fad6b
           return message.reply('You do not have permission to use this command.');
        }

        // Fungsi untuk mengambil berita
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://api-berita-indonesia.vercel.app/cnn/terbaru/');
<<<<<<< HEAD
                const { data } = response.data;

                if (data && data.posts && data.posts.length > 0) {
                    const randomIndex = Math.floor(Math.random() * data.posts.length);
                    const randomArticle = data.posts[randomIndex];
=======
                const response2 = await axios.get('https://api-berita-indonesia.vercel.app/cnn/teknologi/');
                const { data } = response.data;
                const { data: data2 } = response2.data;

                if (data && data.posts && data.posts.length > 0 && data2 && data2.posts && data2.posts.length > 0) {
                    const randomIndex = Math.floor(Math.random() * data.posts.length);
                    const randomIndex2 = Math.floor(Math.random() * data2.posts.length);
                    const randomArticle = data.posts[randomIndex];
                    const randomArticle2 = data2.posts[randomIndex2];
>>>>>>> 714c9f55231e517431f5e07f58bff5827e9fad6b
                    
                    const embed = new EmbedBuilder()
                        .setColor('#0099ff')
                        .setTitle(randomArticle.title)
                        .setDescription(randomArticle.description)
                        .setURL(randomArticle.link)
                        .setImage(randomArticle.thumbnail)
                        .setFooter({ text: 'Source: CNN Indonesia' });
<<<<<<< HEAD

                    const newsChannel = message.client.channels.cache.get(channelId);
                    
                    if (newsChannel) {
                        newsChannel.send({ embeds: [embed] });
=======
                    const newsChannel = message.client.channels.cache.get(channelId);

                    const embed2 = new EmbedBuilder()
                        .setColor('#0099ff')
                        .setTitle(randomArticle2.title)
                        .setDescription(randomArticle2.description)
                        .setURL(randomArticle2.link)
                        .setImage(randomArticle2.thumbnail)
                        .setFooter({ text: 'Source: CNN Indonesia' });
                    const newsChannelTech = message.client.channels.cache.get(channelTechId);
                    
                    if (newsChannel && newsChannelTech) {
                        newsChannel.send({ embeds: [embed] });
                        newsChannelTech.send({ embeds: [embed2] });
>>>>>>> 714c9f55231e517431f5e07f58bff5827e9fad6b
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
<<<<<<< HEAD
            onOff = 1;
            await fetchNews(); // Panggil berita pertama kali
            intervalId = setInterval(async () => {
                await fetchNews();
            }, 3600000); // Ubah interval sesuai kebutuhan (60 detik)
=======
            const newsChannel = message.client.channels.cache.get(channelId);
            
            if (!newsChannel) {
                console.error("Channel tidak ditemukan dengan ID:", channelId);
                return message.reply('Channel berita tidak ditemukan.');
            }

            onOff = 1; // Hanya set ke 1 jika channel ditemukan
            await fetchNews(); // Panggil berita pertama kali
            intervalId = setInterval(async () => {
                await fetchNews();
            }, 3600000); // Interval 1 jam (3600000 ms)
>>>>>>> 714c9f55231e517431f5e07f58bff5827e9fad6b
            message.reply('Berita otomatis telah dinyalakan.');
        } else {
            onOff = 0;
            clearInterval(intervalId); // Hentikan interval
            message.reply('Berita otomatis telah dimatikan.');
        }
    },
};