module.exports = {
    name: 'hack',
    description: 'Simulasi peretasan seseorang',
    async execute(message) {
      // Kirim pesan pertama
      const sentMessage = await message.channel.send('Hacking Seseorang');
      
      setTimeout(async () => {
        await sentMessage.edit('Hacking Seseorang.');
      }, 150);
      
      setTimeout(async () => {
        await sentMessage.edit('Hacking Seseorang..');
      }, 300);
      
      setTimeout(async () => {
        await sentMessage.edit('Hacking Seseorang...');
      }, 450);
  
      let waktu1 = 2000; // 2 detik
      let waktu2 = 6000; // 6 detik
      let waktu3 = 9000; // 9 detik
      let waktu4 = 15000; // 15 detik
      let waktu5 = 21000; // 21 detik
      let waktu6 = 28000; // 28 detik
      let waktu7 = 31000; // 31 detik
      let waktu8 = 38000; // 38 detik
      let waktu9 = 40000; // 40 detik
  
      // 2
      setTimeout(async () => {
        await sentMessage.edit('Mencari Email dan Kata Sandi....');
      }, waktu1);
      
      // 3
      setTimeout(async () => {
        await sentMessage.edit('E-Mail: blablabla@gmail.com \nKata Sandi: ********');
      }, waktu2);
      
      // 4
      setTimeout(async () => {
        await sentMessage.edit('Mencari Akun Lain.....');
      }, waktu3);
      
      // 5
      setTimeout(async () => {
        await sentMessage.edit('Mengatur Akun Epic Games.....');
      }, waktu4);
      
      // 6
      setTimeout(async () => {
        await sentMessage.edit('Meretas Akun Epic Games......');
      }, waktu5);
      
      // 7
      setTimeout(async () => {
        await sentMessage.edit('Akun Epic Games berhasil diretas!!');
      }, waktu6);
      
      // 8
      setTimeout(async () => {
        await sentMessage.edit('Mengumpulkan Informasi.....');
      }, waktu7);
      
      // 9
      setTimeout(async () => {
        await sentMessage.edit('Data dijual ke Dark Web....');
      }, waktu8);
      
      // 10
      setTimeout(async () => {
        await sentMessage.edit('Selesai Meretas Seseorang');
      }, waktu9);
    },
  };