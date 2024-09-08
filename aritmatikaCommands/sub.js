const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'sub',
  description: 'Pengurangan',
  execute(message, args) {
    // Cek apakah args memiliki jumlah yang sesuai
    if (args.length !== 2) {
      const embedError = new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle('Error')
        .setDescription('Harap berikan dua nilai untuk dikurangkan.')
      return message.reply({ embeds: [embedError] });
    }

    // Cek apakah nilai yang diberikan dapat diubah menjadi angka
    const value1 = parseInt(args[0]);
    const value2 = parseInt(args[1]);

    if (isNaN(value1) || isNaN(value2)) {
      const embedError = new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle('Error')
        .setDescription('Harap berikan nilai numerik yang valid untuk dikurangkan.')
      return message.reply({ embeds: [embedError] });
    }

    // Lakukan pertambahan
    const hasil = value1 - value2;

    // Buat embed untuk hasil pertambahan
    const embed = new EmbedBuilder()
      .setColor('#FFFFFF')
      .setTitle('Kalkulator Pengurangan')
      .setDescription(`Hasilnya : ${hasil}`);

    // Kirim embed sebagai jawaban
    message.reply({ embeds: [embed] });
  },
};