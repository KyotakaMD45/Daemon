const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const P = require('pino');

// Global settings
const settings = require('./settings');
global.packname = settings.packname || 'KnightBot';
global.author = settings.author || 'Admin';
global.channelLink = 'https://whatsapp.com/channel/0029Va90zAnIHphOuO8Msp3A';

// Data storage
const dataDirectory = path.join(__dirname, './data');
const dataFile = path.join(dataDirectory, 'userGroupData.json');

// Ensure data directory exists
if (!fs.existsSync(dataDirectory)) fs.mkdirSync(dataDirectory);

// Load or initialize user data
let userGroupData = fs.existsSync(dataFile)
    ? JSON.parse(fs.readFileSync(dataFile, 'utf-8'))
    : { users: [], groups: [] };

// Save data function
function saveUserGroupData() {
    fs.writeFileSync(dataFile, JSON.stringify(userGroupData, null, 2));
    console.log(chalk.green('User and group data saved.'));
}

// Main bot function
async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState('./auth_info');
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true,
        logger: P({ level: 'warn' }),
    });

    sock.ev.on('creds.update', saveCreds);

    // Message handler
    sock.ev.on('messages.upsert', async (msgUpdate) => {
        const message = msgUpdate.messages[0];
        const chatId = message.key.remoteJid;

        if (!message.message) return;
        const userMessage = (message.message.conversation || '').toLowerCase().trim();

        if (userMessage === 'hi' || userMessage === 'hello') {
            await sock.sendMessage(chatId, { text: 'Hello! Type `.menu` to see available commands.' });
        } else if (userMessage === '.menu') {
            await sock.sendMessage(chatId, {
                text: `🌟 *KnightBot Commands* 🌟\n\n1. Hi/Hello - Greet the bot.\n2. .menu - Show this menu.\n3. .sticker - Create a sticker.\n4. .tagall - Tag all group members.`,
            });
        }
    });

    // Handle group events
    sock.ev.on('group-participants.update', async (update) => {
        if (update.action === 'add') {
            const welcomeMessage = '🎉 Welcome to the group!';
            await sock.sendMessage(update.id, { text: welcomeMessage });
        } else if (update.action === 'remove') {
            const goodbyeMessage = 'Goodbye! 👋';
            await sock.sendMessage(update.id, { text: goodbyeMessage });
        }
    });

    // Connection status
    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close' && lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut) {
            startBot();
        } else if (connection === 'open') {
            console.log(chalk.green('Bot connected to WhatsApp.'));
        }
    });
}

// Start the bot
startBot().catch((err) => console.error(chalk.red('Error starting the bot:'), err));
