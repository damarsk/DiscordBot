const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'akar',
  description: 'Menghitung akar kuadrat dari suatu angka',
  execute(message, args) {
    // Cek apakah args memiliki jumlah yang sesuai
    if (args.length !== 1) {
      const embedError = new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle('Error')
        .setDescription('Harap berikan satu angka untuk dihitung akar kuadratnya.')
      return message.reply({ embeds: [embedError] });
    }

    // Cek apakah nilai yang diberikan dapat diubah menjadi angka
    const value = parseFloat(args[0]);

    if (isNaN(value)) {
      const embedError = new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle('Error')
        .setDescription('Harap berikan nilai numerik yang valid untuk dihitung akar kuadratnya.')
      return message.reply({ embeds: [embedError] });
    }

    // Cek apakah nilai yang diberikan lebih besar dari atau sama dengan 0
    if (value < 0) {
      const embedError = new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle('Error')
        .setDescription('Tidak dapat menghitung akar kuadrat dari angka negatif.')
      return message.reply({ embeds: [embedError] });
    }

    // Lakukan perhitungan akar kuadrat
    const hasil = Math.sqrt(value);

    // Buat embed untuk hasil akar kuadrat
    const embed = new EmbedBuilder()
      .setColor('#FFFFFF')
      .setTitle('Kalkulator Akar Kuadrat')
      .setDescription(`Akar kuadrat dari ${value} adalah : ${hasil}`);

    // Kirim embed sebagai jawaban
    message.reply({ embeds: [embed] });
  },
};
