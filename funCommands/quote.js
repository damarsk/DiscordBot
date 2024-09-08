const quotesIndo = require('quote-indo');
// async function quotes(socket, chat){
//     const genre = 'kehidupan';
//     const data = await quotesIndo.Quotes(genre);
//     await socket.sendMessage(chat.key.remoteJid, { text: data });
// }
module.exports = {
    name: 'quotes',
    description: 'quotes tentang kehidupan',
    async execute(message, args) {
        const genre = 'kehidupan';
        const data = await quotesIndo.Quotes(genre);
        message.reply(data);
    },
};