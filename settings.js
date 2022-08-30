
*/

const fs = require('fs')
const chalk = require('chalk')

//Ubah Disini
global.ownerNumber = ['6285706735450','6283869803330','0']
global.ownerName = 'verdihatoru'
global.packname = 'VERDI.xzy'
global.author = 'bot'
global.prefa = ['','!','.','#','!'] //Ilangin Prefix Yang '' Kalau Gamau No Prefix
global.sessionName = 'sesi'

//Message Nya Ubah Disini
global.mess = {
admin: 'You Are Not Admin!😒',
botAdmin: 'Bot Not Admin!😒',
botOwner: 'You Are Not My Owner!',
group: 'Only Gc🗿!',
private: 'Only Private Chat🗿',
wait: 'pending...',
done: 'sudah bg!🐶'
}


//Sesuaikan
global.thumb = fs.readFileSync('./media/ichi.jpeg')
global.donasi = fs.readFileSync('./media/donasi.jpg')
global.thumbnail = fs.readFileSync('./media/ichi.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
