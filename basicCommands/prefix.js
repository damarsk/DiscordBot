const { EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');
const db = require("../mongodb");

// Function to load the prefix from the JSON file
function loadPrefix() {
    const filePath = path.join(__dirname, '..', 'data', 'prefix.json');
    try {
        const data = fs.readFileSync(filePath);
        return JSON.parse(data).prefix;
    } catch (error) {
        console.error('Error loading prefix:', error);
        return '!'; // Default prefix
    }
}

module.exports = {
    name: 'prefix',
    description: 'Change the prefix for the bot',
    execute(message, args) {
        const currentPrefix = loadPrefix(); // Get the current prefix

        const embed = new EmbedBuilder()
            .setColor('#00FF00')
            .setTitle('Prefix of This Bot')
            .setDescription(`▶️ The prefix of this bot is: "${currentPrefix}"`) // Use the current prefix
            .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};
