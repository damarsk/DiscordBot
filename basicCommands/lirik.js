const axios = require('axios');

module.exports = {
  name: 'lirik',
  description: 'Cari lirik lagu berdasarkan judul dan artis',
  async execute(message, args) {
    try {
      const rCmd = args.join(' ').trim();

      // Periksa apakah tidak ada input dari pengguna
      if (rCmd === '') {
        message.reply('Tolong isi dengan benar, contoh: !lirik alone alan walker');
        return;
      }

      // Mengubah spasi dan karakter khusus lainnya menjadi format yang aman untuk URL
      const encodedCmd = encodeURIComponent(rCmd);

      // Kirim pesan bahwa sedang mencari lirik lagu
      const searchMessage = await message.channel.send('Sedang mencari lirik lagu...');

      // Permintaan API ke layanan lirik dengan input yang sudah di-encode
      const response = await axios.get(`https://lyrist.vercel.app/api/${encodedCmd}`);
      const { title, artist, lyrics } = response.data;

      // Periksa jika tidak ada data lagu yang ditemukan
      if (!title || !artist || !lyrics) {
        setTimeout(() => {
          searchMessage.edit('Lagu tidak ditemukan!');
        }, 2000);
        return;
      }

      // Jika lagu ditemukan, update pesan dengan informasi lagu
      setTimeout(() => {
        searchMessage.edit('Lagu ditemukan!');
      }, 2000);

      // Tampilkan lirik lagu setelah beberapa saat
      setTimeout(() => {
        message.channel.send(`*${title}*\nOleh *${artist}*\n\n${lyrics}`);
      }, 4000);

    } catch (error) {
      console.error('Error fetching lyrics:', error);
      message.reply('Terjadi kesalahan saat mengambil lirik lagu.');
    }
  },
};
