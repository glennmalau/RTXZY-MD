global.owner = ['62823617833446']  
global.mods = ['6282361783446'] 
global.prems = ['6282361783446']
global.nameowner = 'Bos Zenn'
global.numberowner = '6282361783446' 
global.mail = 'support@tioprm.eu.org' 
global.gc = 'https://instagram.com/glen_malau'
global.instagram = 'https://instagram.com/glen_malau'
global.wm = '© Zenn'
global.wait = '_*Tunggu ya Bray,Pesan sedang di proses...*_'
global.eror = '_*Aduh Server kayanya Error deh Bray,Coba lagi nanti atau hubungi owner*_'
global.stiker_wait = '*⫹⫺ Stiker nya lagi dibuat Bray...*'
global.packname = '+6285191789894'
global.author = 'Zenn Botzz'
global.autobio = false // Set true untuk mengaktifkan autobio
global.maxwarn = '3' // Peringatan maksimum
global.antiporn = true // Auto delete pesan porno (bot harus admin)

//INI WAJIB DI ISI!//
global.btc = 'gSMATOSu' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'YOUR_APIKEY_HERE'
//Daftar https://api.betabotz.eu.org 

//jangan diganti!
global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}

//ini tidak di isi juga tidak apa-apa
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'gSMATOSu' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
