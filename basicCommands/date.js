module.exports = {
    name: 'date',
    description: 'Menampilkan waktu dan tanggal saat ini dalam zona waktu Jakarta (WIB)',
    async execute(message) {
      // Atur zona waktu ke WIB (UTC+7)
      const options = { timeZone: 'Asia/Jakarta' };
      const waktuSekarang = new Date();
      const date = waktuSekarang.toLocaleDateString('id-ID', options);
      const jam = waktuSekarang.toLocaleTimeString('id-ID', options);
      
      // Dapatkan label hari dalam seminggu
      const day = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'][waktuSekarang.getDay()];
  
      // Kirim pesan ke channel Discord
      message.channel.send(`**Waktu & Tanggal Hari Ini**\n - Hari : ${day}\n - Tanggal : ${date}\n - Jam : ${jam} (WIB)`);
    },
  };
  