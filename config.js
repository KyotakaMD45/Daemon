/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ⭐ＰＲＯＪＥＣＴ ＮＡＭＥ:
    ＳＵＢＺＥＲＯ ＷＨＡＴＳＡＰＰ ＭＤ ＢＯＴ
    
    ⭐ＤＥＶＥＬＯＰＥＲ
     ＭＲ ＦＲＡＮＫ 
     
    ⭐ ＭＹ ＴＥＡＭ
     ＸＥＲＯ ＣＯＤＥＲＳ
     
    ⭐ ＯＵＲ ＷＥＢＳＩＴＥ
     https://github.com/ZwSyntax/SUBZERO-MD

© ＴＲＹ ＤＥＣＲＹＰＴＩＮＧ ＩＦ ＹＯＵ ＣＡＮ⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

//--------------------------Mr Frank--------------------------------------
module.exports = {
    SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkQ4T2U3SUR1UXNqZXdiNjlxaWNZb29qdys5ZW9ESFNsZmtXQXNLU01uaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVdwaTZFc0V6UDRZcW4rMGJ1eTNGcEEyNTdLcXNBT1hDTzluMGpMeXdpbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSHZVS0hOWkFSTklyUHZCdkVYKzQrYnhWbjFBWGxjMGNGcU9HTHNZUzJvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSFliL2o5c09ENEtlRDI1SURZMThscTc4MXBkb00rbE44bkNTcmVHM1dnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitQZDRraCtuS1hSUGhRandhTEYraSsxc25VeDdVWmROVEJoK3dzbHlwbEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJkWkpFK2FvaDh4dU1UbjBpZFQvSXlXeWpzUHNzM3Bud1VPMGZzL3d5RlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUgrYUFwYUNkWFI3UHg2OGtCUjIzNEpXR25vNUE4R215TXpKWFEwUFBYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHF6OTFWc0FvbUptSmx3alBlT2JGaHdPTlNMK3V4TTJSL3I2UUZ2bHJYST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjEvTC93bkZmS3JPR09OZS9hZTBlYXJZSGdJZXdxUGlIQXJ1a0EvdjhCdjlSVlpZVHhXazRWb25ROW9sbXprY0hxbjEvSjRVRmlEdHFNTWZhbmE0cUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY4LCJhZHZTZWNyZXRLZXkiOiJaUUpKaENkeFhGT1FrZTFsM3BnNGxHeWt1emEzbk9IQVZIVEpidWZUSGpZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtRVlQVzVfelRPeVZ6NWNFV1RHRm93IiwicGhvbmVJZCI6Ijg4NzMxZTRmLTFjOGUtNGNjYy1hOGVhLTUzM2EzMzg4Zjg0MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQlBWcEFLV2ZVOExua3BJMURHSTRZWll3L2M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnZRNUpuZ3h3OXBESkJraTNDZTN5ZFlLNms0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkE4UlM4TE5EIiwibWUiOnsiaWQiOiIyMjU3NTEzMDc4ODozOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCP8J2Qh/CdkIDwnZCR8J2QjvCdkJTwnZCKIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNMjJ6WkFDRUlhWjJyc0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJLb1hsRktCcnZKOU1razZ4QWhQZS9yR2tiY0l1RE92dm1LYzNJaVh3aVJFPSIsImFjY291bnRTaWduYXR1cmUiOiJZR2d1emQ2NHpYTjVJNDN5VU44aHE2UXFjeWJvWmxSaDRST09xRkJJZXRtRmk3MnFKdzdJZnk1dHlVaGR6aTdXQVhESDNuamtqeUNXMEFML3VHbXNBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZENKNVRMNmZPRGNuK3R1YVVVMEdRbzZGQkhZbDV2QlVUTmRmMzZZS3VPMWRzYnB1KzJqWWdrRkNWbjlQSjFENG94Nkc0UWpCSEVXOC9LUVZLZTZtQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjU3NTEzMDc4ODozOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTcUY1UlNnYTd5ZlRKSk9zUUlUM3Y2eHBHM0NMZ3pyNzVpbk55SWw4SWtSIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1ODIyNDg0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFZbSJ9",
    CAPTION: process.env.CAPTION || "*©  Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ SᴜʙZᴇʀᴏ MD*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/m2jtqrBC/Screenshot-20241216-090753-Video-Maker.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "sᴜʙᴢᴇʀᴏ ᴍᴅ ɪs ᴏɴʟɪɴᴇ🚀",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "『 𝐒𝐔𝐁𝐙𝐄𝐑𝐎 𝐌𝐃 』",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`Status Seen By SubZero Bot 🦄 `",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
//--------------MADE BY MR FRANK 2024 DEC---------------->-
