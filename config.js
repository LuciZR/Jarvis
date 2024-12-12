const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) {
  require('dotenv').config({
      path: './config.env'
  });
};

global.api = 'https://nervous-rosamond-jarvis-bot-99587a26.koyeb.app/';

const toBool = (x) => (x && (x.toLowerCase() === 'true' || x.toLowerCase() === 'on')) || false;
const DATABASE_URL = process.env.DATABASE_URL === undefined ? "./database.db" : process.env.DATABASE_URL

module.exports = {
  VERSION: require('./package.json').version,
  BAN_CHATS: process.env.BAN_CHATS || "",
  PORT: process.env.PORT || 8000,
  PM_BLOCKER: toBool(process.env.PM_BLOCKER || "false"),
  PM_BLOCKER_MSG: process.env.PM_BLOCKER_MSG || "```Pm blocker active on this chat!!```",
  AUDIO_DATA: process.env.AUDIO_DATA || 'ʟᴏᴋɪ-xᴇʀ;ᴊᴀʀᴠɪꜱ;https://graph.org/file/58ea74675af7836579a3a.jpg',
  WARN_COUNT: process.env.WARN_COUNT || '3',
  AUTOMUTE_MSG: process.env.AUTOMUTE_MSG || '_Group automuted!_',
  AUTOUNMUTE_MSG: process.env.AUTOUNMUTE_MSG || '_Group autounmuted!_',
  ANTILINK_MSG: process.env.ANTILINK_MSG || "```Link Not allowed in this group!!```",
  ANTIBOT_MSG: process.env.ANTIBOT_MSG || "```Antibot deleted successfully!!```",
  ANTIWORD_MSG: process.env.ANTIWORD_MSG || "```Antiword deleted successfully!!```",
  ALIVE_DATA : process.env.ALIVE_DATA || "_*Hy &sender i am alive now*_\n\n_PLATFORM: &platform_\n_RUNTIME : &runtime_\n\n_. type alive to update your alive message_",
  SESSION_ID: process.env.SESSION_ID || '',
  LANG: (process.env.LANGUAGE || 'EN').toLowerCase(),
  SETVV: process.env.SETVV || 'DM',
  ELEVENLABS: process.env.ELEVENLABS,
  HANDLERS: (process.env.HANDLERS || process.env.HANDLER || process.env.PREFIX || "^[.,!]").trim(),
  ALLWAYS_ONLINE: toBool(process.env.ALLWAYS_ONLINE || "false"),
  READ_MSG: toBool(process.env.READ_MSG || "false"),
  BRANCH: "main",
  LINKPREVIEW: toBool(process.env.LINKPREVIEW || "false"),
  CONTEXTINFO: process.env.CONTEXTINFO || `{"title": "𝙕𝙍 𝙈𝘿", "body": "ᴘᴏᴡᴇʀᴅ ʙʏ 𝙇𝙪𝙘𝙞⚠︎", "thumbnailUrl": "https://files.catbox.moe/behp2e.jpeg", "renderLargerThumbnail": false, "mediaType": 1, "mediaUrl": "https://i.imgur.com/xHLayqo.mp4", "sourceUrl": "https://whatsapp.com/channel/0029VavsgEPIN9ip5yARyH3D", "showAdAttribution": true}`,
  RAILWAY_API: process.env.RAILWAY_API || process.env.RAILWAY_API_KEY,
  KOYEB_API: process.env.KOYEB_API || process.env.KOYEB_API_KEY,
  KOYEB_APP_NAME: process.env.KOYEB_APP_NAME || process.env.KOYEB_NAME,
  RENDER_API: process.env.RENDER_API || process.env.RENDER_API_KEY,
  RENDER_APP_NAME: process.env.RENDER_APP_NAME || process.env.RENDER_NAME,
  BRAINSHOP: process.env.BRAINSHOP || '172372,nbjE0YAlyw3cpoMl',
  TGTOKEN: "bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4",
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || 'ᴊᴀʀᴠɪꜱ;ᴡᴀʙᴏᴛ',
  CALL_BLOCK: toBool(process.env.CALL_BLOCK || "false"),
  SAVE_STATUS: toBool(process.env.SAVE_STATUS || "false"),
  STATUS_VIEW: process.env.STATUS_VIEW || "false",
  REJECT_CALL: toBool(process.env.REJECT_CALL || "false"),
  ERROR_MSG: toBool(process.env.ERROR_MSG) || true,
  WELCOME_MSG: process.env.WELCOME_MSG || "Hi &mention Welcome to &gname",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi $mention It was Nice Seeing you",
  MEDIA_DATA: process.env.MEDIA_DATA|| '𝙕𝙍-𝙈𝘿;𝙓𝙞𝙖-𝙇𝙪𝙘𝙞;https://raw.githubusercontent.com/LuciZR/ZR-MD/refs/heads/main/ZR.png',
  MENU_FONT: process.env.MENU_FONT || "2;0",
  SUDO: process.env.SUDO || '918293838182',
  STATUS_REPLY: toBool(process.env.STATUS_REPLY || "false"),
  STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "*Nice Status Brother 🦫✨*",
  KICK_BLOCK: toBool(process.env.KICK_BLOCK || "false"),
  CMD_REACTION: toBool(process.env.CMD_REACTION || 'true'),
  TIMEZONE: process.env.TIMEZONE || "Asia/Kolkata",
  STARTING_MSG: toBool(process.env.STARTING_MSG || "true"),
  STATUS_REACTION_EMOJI: process.env.STATUS_REACTION_EMOJI || "❤‍🩹,🌸,🕊️,🩵,🫠,🤌🏾",
  STATUS_REACTION: toBool(process.env.STATUS_REACTION || "true"),
  GEMINI: process.env.GEMINI || "AIzaSyC4OFxlYvakCuWa7-qXbkGTlkMPK2mjK-0",
  LOG_MSG: toBool(process.env.LOG_MSG) || true,
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || '',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '',
  BOT_INFO: process.env.BOT_INFO || '𝙕𝙍-𝙈𝘿;𝙓𝙞𝙖-𝙇𝙪𝙘𝙞;https://i.imgur.com/xHLayqo.mp4',
  WORK_TYPE: process.env.WORK_TYPE || process.env.MODE || 'private',
  NSFW: toBool(process.env.NSFW || "false"),
  DATABASE: DATABASE_URL === "./database.db" ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: "postgres", ssl: true, protocol: "postgres", dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false }),
};
