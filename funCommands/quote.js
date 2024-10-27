const quotesIndo = require('quote-indo');

module.exports = {
    name: 'quotes',
    description: 'quotes tentang kehidupan',
    async execute(message, args) {
        const genre = 'kehidupan';
        const data = await quotesIndo.Quotes(genre);
        message.reply(data);
    },
};