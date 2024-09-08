const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
const animals = [
    'cat',
    'dog',
    'bird',
    'panda',
    'redpanda',
    'koala',
    'fox',
    'whale',
    'dolphin',
    'kangaroo',
    'rabbit',
    'lion',
    'bear',
    'frog',
    'duck',
    'penguin',
    'axolotl',
    'capybara',
    'hedgehog',
    'turtle',
    'narwhal',
    'squirrel',
    'fish',
    'horse'
];
module.exports = {
  name: 'listanimal',
  aliases: ['alist'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
        .setColor('#2b71ec')
        .addFields(
            //image category
            {
                name: '▶️  Image',
                value: '`' + animals.join('`, `') + '`',
                inline: true,
            },
        );
        message.reply({ embeds: [embed]});
    },
};