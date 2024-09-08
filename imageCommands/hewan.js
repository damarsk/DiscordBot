const axios = require('axios');
const { EmbedBuilder } = require('discord.js');
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
    /**
     * Returns an image and a fact of the specified animal type(s).
     * @param {string | string[]} [type='random'] The animal type(s).
     * @returns {Promise<AnimalObject | AnimalObject[]>} The data object.
     */
    async getAsync(type = 'random') {
        const isArray = Array.isArray(type);
        if ((typeof type !== 'string' && !isArray) || (isArray && !type.every(t => typeof t === 'string'))) {
            throw new TypeError("'type' must be a string or an array of strings");
        }

        type = type === 'random' ? animals[Math.floor(Math.random() * animals.length)] : (!isArray ? type.toLowerCase() : [...new Set(type.map(t => t.toLowerCase()))]);

        if (!isArray && !animals.includes(type)) {
            throw new TypeError(`'${type}' is not a valid type, the valid types are: ${animals.join(', ')}, random`);
        }

        if (isArray) {
            return Promise.all(type.map(t => this.getAsync(t)));
        }

        try {
            const animalResponse = await axios.get(`https://api.animality.xyz/all/${type}`);
            const { animal, image, fact, image_id, fact_id } = animalResponse.data;

            return { type, animal, image, fact, image_id, fact_id };
        } catch (err) {
            throw new Error(`Failed to get type '${type}' from API:\n${err}`);
        }
    },

    name: 'animal',
    aliases: ['randomanimal', 'randomanimalimage'],
    description: 'Displays a random $type image',
    async execute(message, args) {
        let type; // Variabel type didefinisikan di luar blok try-catch

        try {
            // Ambil argumen 'type' dari pesan
            type = args[0] || 'ErrorSocket';

            // Panggil fungsi getAsync dari modul animalApi
            const animalData = await module.exports.getAsync(type);

            const embed = new EmbedBuilder()
                .setColor('#FFFFFF')
                .setTitle(`${animalData.type} Image 🐾`)
                .setImage(animalData.image)
                .setDescription(`**Fun Fact**\n${animalData.fact}`);

            // Reply to the user who executed the command
            message.reply({ embeds: [embed] });
        } catch (error) {
            console.error(`Error fetching ${type} image:`, error);

            // Handle ketika tipe hewan tidak valid
            if (error instanceof TypeError && error.message.includes('is not a valid type')) {
                message.reply('Maaf, tipe hewan tidak valid. Gunakan tipe yang valid atau gunakan `random` untuk mendapatkan gambar acak.');
            } else {
                // Reply umum jika terjadi kesalahan lainnya
                message.reply('Maaf, terjadi kesalahan saat mencoba mengambil gambar hewan.');
            }
        }
    },
};