const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'div',
  description: 'Pembagian',
  execute(message, args) {
    // Cek apakah args memiliki jumlah yang sesuai
    if (args.length !== 2) {
      const embedError = new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle('Error')
        .setDescription('Harap berikan dua nilai untuk dibagi.')
      return message.reply({ embeds: [embedError] });
    }

    // Cek apakah nilai yang diberikan dapat diubah menjadi angka
    const value1 = parseInt(args[0]);
    const value2 = parseInt(args[1]);

    if (isNaN(value1) || isNaN(value2)) {
      const embedError = new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle('Error')
        .setDescription('Harap berikan nilai numerik yang valid untuk dibagi.')
      return message.reply({ embeds: [embedError] });
    }

    // Cek apakah nilai kedua tidak sama dengan nol
    if (value2 === 0) {
      const embedError = new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle('Error')
        .setDescription('Tidak dapat melakukan pembagian dengan nol.')
      return message.reply({ embeds: [embedError] });
    }

    // Lakukan pembagian
    const hasil = value1 / value2;

    // Buat embed untuk hasil pembagian
    const embed = new EmbedBuilder()
      .setColor('#FFFFFF')
      .setTitle('Kalkulator Pembagian')
      .setDescription(`Hasilnya : ${hasil}`);

    // Kirim embed sebagai jawaban
    message.reply({ embeds: [embed] });
  },
};