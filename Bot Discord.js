const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Evento que é executado quando o bot está pronto
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// Evento que é executado quando o bot recebe uma mensagem
client.on('messageCreate', (message) => {
    // Verifica se a mensagem foi enviada por um bot (para evitar loops infinitos)
    if (message.author.bot) return;

    // Verifica se a mensagem começa com "!oi"
    if (message.content.startsWith('!oi')) {
        // Responde com uma mensagem
        message.reply('Oi, como posso ajudar?');
    }
});

// Conecta o bot ao servidor do Discord usando seu token
const BOT_TOKEN = 'SEU_TOKEN_AQUI';
client.login(BOT_TOKEN);
