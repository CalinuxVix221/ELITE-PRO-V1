require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"gHQFm2q8pd6myPxjIPSqNGTXZLWI/g2AEYFk7jW44no="},"public":{"type":"Buffer","data":"NHpCMiOQm6yG7bVKhtXGYoCwTI4yVr1VtCnF755g4S4="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"ALW+PZAfZCYxZiIHoE+uj3BRRFsiNVZ5n05YyVb3Qkc="},"public":{"type":"Buffer","data":"bXieAyDm/jTWaEfgxCmTLhd8+a/HbZGRhpcI80YZBH8="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"OIw2a1sWYsj0pW8kct850ifBsMNKqZXjUiMhn6FAMlA="},"public":{"type":"Buffer","data":"XySTckHqnGzwizvIbWr+qZ2VQKlh6YR0CAdM9/9atVk="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"4FnI+MBFIS6WJPKIlggBZF6MXua8ZMeNd4CcM05sNVA="},"public":{"type":"Buffer","data":"ga4HxvOcnZ7LBEWv/2QopGAaSs88yngQJg4ppDlNDBk="}},"signature":{"type":"Buffer","data":"b0lFVV5rXnB/M3AZ90Jsx8IxSsDOEtX5izX945GF3ntcZx/SWzJECUy6lyGeW7eB0uhbsiAMwrfLtnxPD2fgjA=="},"keyId":1},"registrationId":42,"advSecretKey":"tPYwWpmgUKnWWfu6v8nE7j9ch6Z5lusdZez1Fa5OOQo=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"XMDYY5QA","me":{"id":"221705321314:28@s.whatsapp.net","lid":"157986613936257:28@lid"},"account":{"details":"CP6u99ABEIX2n8QGGAEgACgA","accountSignatureKey":"e3Z8xAlSVOEGlRf80oPMI68DdXnQ1TtDyB1sWhHOzGw=","accountSignature":"fwO9CPYpvIJCXqKPH8oDcw5jTsgBpH9OEX1DTurX1wktg6ErTqqE5F3UHAR7T5jiXvQDGHzd75HmWxNkyBHoAw==","deviceSignature":"aT12lRLJc0gJVIT0etmnimXt1u33FaTd5AvgTOpuDXdbeTnRzMWwLKkbh//IqV7VpS6srKeqvHk9FSTXtEiTgA=="},"signalIdentities":[{"identifier":{"name":"221705321314:28@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BXt2fMQJUlThBpUX/NKDzCOvA3V50NU7Q8gdbFoRzsxs"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CAUICA=="},"lastAccountSyncTimestamp":1753742098,"lastPropHash":"3gPUJk","myAppStateKeyId":"AAAAAFkX"}';
global.ytname = process.env.YT_NAME || "YT: @EliteProTechs";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '221705321314';
global.ownername = process.env.OWNER_NAME || '𝐹𝛪𝛮𝛮';
global.botname = process.env.BOT_NAME || 'ELITE-PRO-V1';

// Default settings 
global.prefix = process.env.PREFIX || '.';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'true';
global.autobio = process.env.AUTO_BIO !== 'false'; // default true
global.anti92 = process.env.ANTI_92 === 'true';
global.autoswview = process.env.AUTO_SW_VIEW !== 'false'; // default true
global.welcome = process.env.WELCOME !== 'false'; // default true
global.autoreact = process.env.AUTO_REACT === 'true';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'true';

// Thumbnail profile picture
global.elitepropp = process.env.ELITE_PRO_PP || 'https://i.ibb.co/jk0ynvbn/7a8c4b5b617fa11a1e9a61190f427546.jpg';
// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '⚖️';


// Sticker details
global.packname = process.env.PACKNAME || '〖C〗〖D〗〖M〗';
global.author = process.env.AUTHOR || 'ELITEPRO\n\nContact: +221705321314';
// Default settings 2
global.typemenu = process.env.TYPE_MENU || 'v2';
global.wm = process.env.WM || "Youtube @EliteProTechs";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Reply messages
global.mess = {
    done: '*⿻ DONE: Task completed ✔️*',
    prem: '*⦿ This command is made for premium users.⁉️*',
    admin: '*⦿ This command is made for group admins.‼️*',
    botAdmin: '*⦿  Make bot admin to access commands⿻*',
    owner: '*⦿This commands is made for bot owner.*',
    group: '*⦿ This command is made for group chat❕*',
    private: '*⦿ This command is made for private chat ⭕*',
    wait: '*_⚙️PROCESSING DATA......_*',
    error: '*‼️AN ERROR OCCUR‼️*',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
