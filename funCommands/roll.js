module.exports = {
  name: 'roll',
  aliases: ['dice', 'rolldice'],
  description: 'Menggulung dadu',
  execute(message, args) {
    const sides = parseInt(args[0]) || 6; // Default ke 6 sisi jika tidak ada argumen yang diberikan
    const result = Math.floor(Math.random() * sides) + 1;

    // Balas kepada pengguna dengan hasil gulungan dadu
    message.reply(`Anda menggulung ${result} pada dadu ${sides} sisi!`);
  },
};