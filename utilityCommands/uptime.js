const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'uptime',
  description: 'Sends the bot\'s uptime to the advertising channel.',
  execute(message, args) {
    sendUptimeMessage(message);
  },
};

// Function to get the bot's uptime
function getBotUptime() {
  const totalSeconds = process.uptime();
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Function to send the uptime message as an embedded message to the specified channel
function sendUptimeMessage(message) {
    const uptime = getBotUptime();

    // Create an embedded message
    const embed = new EmbedBuilder()
      .setColor('#FFFFFF')
      .setTitle('Waktu Aktif Bot')
      .setDescription(`▶️ Bot uptime: ${uptime}`);

    // Send the embedded message to the advertising channel
    message.channel.send({ embeds: [embed] });
}