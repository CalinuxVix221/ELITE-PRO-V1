require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"wGyaN+nIlLAJbMSKNM1z19cL2Z/06F9F5gXHP/AYt0k="},"public":{"type":"Buffer","data":"NOkQWivdLVBQkejjjNmfQxklcFCNkFyk/8iEXfqCMkk="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"2AdmYxWuup0gI9tmoszi1d7XEq1SxDMhQmUn0F6st1s="},"public":{"type":"Buffer","data":"qzKRUqIuwuCnhDgHjcX0R+MJmLnkCh+6+Mcup5D4tEM="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"AE7LtSCBUPLZK4fCcpqDk/st1wOGjSKNY0tpZMHtGXY="},"public":{"type":"Buffer","data":"l+FZgAnyFmKrxN4t7QeiiepB+tw70UdSlvF5WdL3gU0="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"EO74806xcLzrtFAoF4nSuVbGwkwzHgNO2YZsIUizJ08="},"public":{"type":"Buffer","data":"zul0r1ih/L+KKIEemJ4y+CLlF2UaR/M3+uB2bEkDRmo="}},"signature":{"type":"Buffer","data":"95vmVoPYhE3DmiNevAA9WsK+PlPZboGOKj4KCKKsejgSA33XlJiq0BwKrnO2vc1lj8Owo6pX36NG5hpnCpG8BA=="},"keyId":1},"registrationId":102,"advSecretKey":"aGMyJa+4sDeRlQlZJaRzp1+WnxoQgOznmPMZmB9ni4Q=","processedHistoryMessages":[{"key":{"remoteJid":"50943334733@s.whatsapp.net","fromMe":true,"id":"5AF7E1E83F3C7C9C22333D0BD2B6C565"},"messageTimestamp":1756561619},{"key":{"remoteJid":"50943334733@s.whatsapp.net","fromMe":true,"id":"899C050606083943892C04B5091C3A1D"},"messageTimestamp":1756561622},{"key":{"remoteJid":"50943334733@s.whatsapp.net","fromMe":true,"id":"85D396F9D4DDE53ED85A437FB4512E41"},"messageTimestamp":1756561639},{"key":{"remoteJid":"50943334733@s.whatsapp.net","fromMe":true,"id":"A346147EA372C5149AE614967CE046EE"},"messageTimestamp":1756561648},{"key":{"remoteJid":"50943334733@s.whatsapp.net","fromMe":true,"id":"C356BD634427CB6CAF73F27488BA0740"},"messageTimestamp":1756561654}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"ZLSSD3T4","me":{"id":"50943334733:23@s.whatsapp.net","lid":"270871323230346:23@lid","name":"✞—͞𝐃𝐀𝐑𝐊𝐒𝐄𝐈𝐃✞𒆜"},"account":{"details":"COfztvABEMiBzMUGGAEgACgA","accountSignatureKey":"PjehEfu+pe1/7Oj75/xNBiZXOxS+DUOIszvsPDLFXQQ=","accountSignature":"CQ3AIa3LK4FGsKGjSs77Qw4u/KGPo+ryzI9EVo0WWYVfCTmdF/2hDW5yBPaq/KhtdPetxIJEystUn332r/VYCA==","deviceSignature":"sEXL7c0Z4/Sy/imPeduiGCeZ2Fvq87k/pdRJWbTDfJdnsG0VjTWfX2DwRKusYE26KDwca2RKQ90RF5l/iYDYDA=="},"signalIdentities":[{"identifier":{"name":"50943334733:23@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BT43oRH7vqXtf+zo++f8TQYmVzsUvg1DiLM77DwyxV0E"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CAUICA=="},"lastAccountSyncTimestamp":1756561796,"lastPropHash":"2P1Yhf","myAppStateKeyId":"AAAAABTw"}';
global.ytname = process.env.YT_NAME || "YT: @EliteProTechs";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '50943334733';
global.ownername = process.env.OWNER_NAME || 'LORDDEMONDARKSEID;
global.botname = process.env.BOT_NAME || 'ELITE-PRO-V1';

// Default settings 
global.prefix = process.env.PREFIX || '$';
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
global.themeemoji = process.env.THEME_EMOJI || '💀';


// Sticker details
global.packname = process.env.PACKNAME || 'CDM';
global.author = process.env.AUTHOR || 'ELITEPRO\n\nContact: +2348109263390';
// Default settings 2
global.wm = process.env.WM || "Youtube @EliteProTechs";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Reply messages
global.mess = {
    done: '[✔] Task executed successfully.',
    prem: '[403] Access denied. Premium user required.',
    admin: '[401] Admin privileges required.',
    botAdmin: '[401] Bot must be an admin to run this command.',
    owner: '[403] Command restricted to bot owner.',
    group: '[400] Command available only in group chats.',
    private: '[400] Command available only in private chats.',
    wait: '[⏳] Processing... Please wait.',
    error: '[500] Unexpected error occurred.',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
