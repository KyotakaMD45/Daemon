import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['2250575130788', 'FG98', true],
  ['']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['2250575130788', '573143917092']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de lÃ­mite diario --- RegÃ­strese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'Sennaâ”ƒá´®á´¼áµ€' 
global.author = '@fg98' 

//--info FG
global.botName = 'Senna'
global.fgig = 'https://instagram.com/fg98_ff' 
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/fg98f'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.id_canal = '120363177092661333@newsletter' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VaCeuZd6mYPQiWqxXj1F'
global.bgp = 'https://chat.whatsapp.com/BESBo5xjvIZE4YVvth6Yzr'
global.bgp2 = 'https://chat.whatsapp.com/I7bvd8XCAOUHjgkHteqFC7'
global.bgp3 = 'https://chat.whatsapp.com/F0JTTyZ3hsoL7OlU8TEpuH' //--GP NSFW

global.wait = 'âŒ› _Cargando..._\n*â–¬â–¬â–¬â–­*'
global.rwait = 'âŒ›'
global.dmoji = 'ðŸ¤­'
global.done = 'âœ…'
global.error = 'âŒ' 
global.xmoji = 'ðŸ”¥' 

global.multiplier = 69 
global.maxwarn = '2' // mÃ¡xima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
