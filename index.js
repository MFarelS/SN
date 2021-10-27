const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const denz = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const canvacord = require("canvacord")
const util = require('util')
const captcha = require('trek-captcha');
const captchaPath = './database/captcha_group.js'
const imageToBase64 = require('image-to-base64')
const imgbb = require('imgbb-uploader')
const figlet = require('figlet')

const toMs = require('ms')
//const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
uwu = '```'
const { color, bgcolor } = require('./lib/color')
	
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}

nocache('./denz.js', module => console.log(color('|TRM|'), color(`${module} Updated!`, 'cyan')))
async function starts() {
denz.autoReconnect = ReconnectMode.onConnectionLost
    denz.version = [2, 2119, 6]
    denz.logger.level = 'warn'
    denz.browserDescription = ['SNEAZY BOT','Desktop','3.0']
    await sleep(10000)
    denz.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('|TRM|'), color('Scan this QR code', 'cyan'))
    })
    fs.existsSync('./QRnya.json') && denz.loadAuthInfo('./QRnya.json')
    
    denz.on('credentials-updated', () => {
        console.log(color('|TRM|'), color('credentials updated!', 'cyan'))
        })
     
      await denz.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./QRnya.json",JSON.stringify(denz.base64EncodedAuthInfo(), null, "\t"));
// teks = `https://chat.whatsapp.com/Kw69Oel34Nd0JuluvFNVKt`
// denz.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
// console.log(color('|WRN|', 'yellow'), color('Joined to Helga Bot Officials group', 'cyan'))
 denz.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `*Hai Owner ${settings.NamaBot}, Bot Telah Berhasil Tersambung Pada Nomor Ini*\n────────────────────\n\`\`\`${JSON.stringify(denz.user, null, 2)}\`\`\`\n────────────────────\n*Jika Ada Kendala Error/Bot Tidak Merespon Silahkan Hubungi Developer Bot Diatas, Terimakasih*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Bitch Boot",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./denz.jpg'),sourceUrl:"https://wa.me/6285732415700?text=Assalamualaikum"}}})
	console.log(color('|WRN|', 'yellow'), color('Sending bot info to bot owner', 'cyan'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       //denz.sendMessage("6285732415700@s.whatsapp.net", `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer AnisaChan🎋(Helga)",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./denz.jpg'),sourceUrl:"https://wa.me/6285732415700?text=Assalamualaikum"}}})
     console.log(color('|WRN|', 'yellow'), color('Sending ip address to developer bot', 'cyan'))
   })
      
    denz.on('connecting', () => {
		console.log(color('|TRM|'), color('Connecting...', 'cyan'))
		})
	
	denz.on('open', () => {
	console.log(color('|TRM|'), color('Connected', 'cyan'))
	}) 
     
    denz.on('ws-close', () => {
        console.log(color('|TRM|'), color('Connection lost, trying to reconnect.', 'cyan'))
        })
    
    denz.on('close', async () => {
        console.log(color('|TRM|'), color('Disconnected.', 'cyan'))
        })
    
	if (!settings.autoplaymusic) {
exec(`cd /sdcard/download && play *mp3`)
}
   
   denz.on('chat-update', async (mek) => {
        require('./denz.js')(denz, mek)
        ownerNumber = ["6285832415700@s.whatsapp.net",`${settings.NomorOwner}@s.whatsapp.net`]
        dtod = "6285732415700@s.whatsapp.net"
       otod = `${settings.NomorOwner}@s.whatsapp.net`
    })   
                  denz.on('group-participants-update', async (anu) => {
               // require('./denz.js')(denz, mek)
           mem = anu.participants[0]
			const mdata = await denz.groupMetadata(anu.jid)
			 const pushname = conts.notify || conts.vname || conts.name || '-'
		    try {
			console.log(anu)
			if (anu.action == 'add') {
		/*	if (!fs.existsSync(captchaPath + '/' + anu.participants[0] + '.json')) {
                    const {
                        token,
                        buffer
                    } = await captcha()
                    let objCaptcha = {
                        status: false,
                        ID: require('crypto').randomBytes(8).toString("hex").toUpperCase(),
                        session: 'captcha',
                        name: pushname,
                        number: anu.participants[0],
                        token: token
                    }
                    let dataID = JSON.parse(fs.readFileSync(captchaPath + '/ids-match.json'))
                    dataID.push({
                        SID: objCaptcha['ID'],
                        data: objCaptcha
                    })
                    fs.writeFileSync(captchaPath + '/ids-match.json', JSON.stringify(dataID, null, 3))
                    fs.writeFile(captchaPath + '/' + anu.participants[0] + '.json', JSON.stringify(objCaptcha, null, 3), () => {
                        denz.sendMessage(anu.jid, buffer, MessageType.image, {
                            caption: `Hai @${anu.participants[0].split('@')[0]}, Selamat datang di ${groupName}\n\n_Jangan lupa jawab captcha tersebut, untuk validasi bahwa kamu bukan bot, jika tidak kami kick ^.^_`,
                            contextInfo: {
                                'mentionedJid': [anu.participants[0]]
                            },
                            thumbnail: buffer
                        })
                    })
                    setTimeout(function() {
                        if (!fs.existsSync(fs.readFileSync(captchaPath + '/' + anu.participants[0] + '.json'))) return false
                        let data_captcha = JSON.parse(fs.readFileSync(captchaPath + '/' + anu.participants[0] + '.json'))
                        denz.sendMessage(anu.jid, `Maaf kak @${data_captcha.number.split('@')[0]} waktu sudah habis, Kamu akan segera dikick...`, MessageType.text, {
                            contextInfo: {
                                'mentionedJid': [data_captcha.number]
                            }
                        }).then(async (res) => {
                            try {
                                denz.groupRemove(anu.jid, [data_captcha.number])
                                let dataID_captcha = JSON.parse(fs.readFileSync(captchaPath + '/ids-match.json'));
                                let indexData_captcha = dataID_captcha.findIndex(r => r['number'] == data_captcha.number)
                                dataID_captcha.splice(indexData_captcha, 1)
                                fs.writeFileSync(captchaPath + '/ids-match.json', JSON.stringify(dataID_captcha, null, 3))
                                fs.unlinkSync(captchaPath + '/' + data_captcha.number + '.json')
                            } catch (emror) {
                                denz.sendMessage(anu.jid, `Hmmm... saya tidak bisa kick admin atau saya tidak punya akses admin :(...`, MessageType.text, {
                                    quoted: res
                                })
                                let dataID_captcha = JSON.parse(fs.readFileSync(captchaPath + '/ids-match.json'));
                                let indexData_captcha = dataID_captcha.findIndex(r => r['number'] == data_captcha.number)
                                dataID_captcha.splice(indexData_captcha, 1)
                                fs.writeFileSync(captchaPath + '/ids-match.json', JSON.stringify(dataID_captcha, null, 3))
                                fs.unlinkSync(captchaPath + '/' + data_captcha.number + '.json')
                                console.log(emror)
                            }
                        })
                    }, 180000); // 180000 = 3mnt
                }
            }
        }*/
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6285732415700-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Denz;;;\nFN:Denz\nitem1.TEL;waid=6285732415700:6285732415700\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
		    num = anu.participants[0]
			try {
			ppimg = await denz.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
				var namea = denz.contacts[num] != undefined ? denz.contacts[num].vname || denz.contacts[num].notify : 'unknown'
			time_welc = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Jakarta').format("hh:mm")
			const memeg = mdata.participants.length
            const thu = await denz.getStatus(anu.participants[0], MessageType.text)
			let buff = await getBuffer(ppimg)
			masuk =`Halo @${num.split('@')[0]}👋
🥇 *Name:* ${namea}
🥈 *Bio:* ${thu.status}
🥉 *Tanggal:* ${time_wel} - ${time_welc}

*Biasakan baca deskripsi grup:*
${mdata.desc}`
            denz.sendMessage(mdata.id, masuk, MessageType.text, { quoted: fkontakk, thumbnail: fs.readFileSync('./denz.jpg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Welcome To ${mdata.subject}`,body:'Note: Gunakan bot dengan bijak',mediaType:"2",thumbnail:buff,mediaUrl:`https://youtu.be/1U_8cj4OyUA`}}})
			}
				else if (anu.action == 'remove') {
			
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6285732415700-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Denz;;;\nFN:Denz\nitem1.TEL;waid=6285732415700:6285732415700\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
			num = anu.participants[0]
			try {
			ppimg = await denz.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			keluar =`Selamat tinggal @${num.split('@')[0]}\nSemoga cepat meninggal..`
            denz.sendMessage(mdata.id, keluar, MessageType.text, { quoted: fkontakk, thumbnail: fs.readFileSync('./denz.jpg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Keluar Dari ${mdata.subject}`,body:'Sneazybot^8.0.9',mediaType:"2",thumbnail:buff,mediaUrl:`https://youtu.be/1U_8cj4OyUA`}}})
			} else if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6285732415700-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Denz;;;\nFN:Denz\nitem1.TEL;waid=6285732415700:6285732415700\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*P R O M O T E - D E T E C T E D*\n Username: @${num.split('@')[0]}\n Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n Group: ${mdata.subject}`
denz.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6285732415700-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Denz;;;\nFN:Denz\nitem1.TEL;waid=6285732415700:6285732415700\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*D E M O T E - D E T E C T E D*\n Username: @${num.split('@')[0]}\n Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n Group: ${mdata.subject}`
denz.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	  
	denz.on('group-update', async (anu) => {
		const metdata = await denz.groupMetadata(anu.jid)
    	const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6285732415700-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Denz;;;\nFN:Denz\nitem1.TEL;waid=6285732415700:6285732415700\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    denz.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  } 
  else if(anu.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    denz.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    denz.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    denz.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    denz.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
  }
})

denz.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NamaOwner}` + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${NomorOwner}` + ':+' + `${NomorOwner}` + '\n' + 'END:VCARD'
        denz.sendMessage(callerId, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`", MessageType.text)
        denz.sendMessage(callerId, { displayname: `${NamaOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Developer ${NamaBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./denz.jpg'),sourceUrl:`https://wa.me/6285732415700?text=Assalamualaikum`}}})
        await sleep(5000)
        await denz.blockUser(callerId, "add")
        })
        
/*	denz.on('message-delete', async (m) => {
	const delets = JSON.parse(fs.readFileSync('./database/delete.json'))
	const isDelete = delets.includes(from) : false
	if (!isDelete)return reply(`Perintah ini tidak bisa Di lakukan oleh user`)
	if (!welkom.includes(anu.jid)) return
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe) {
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = denz.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = denz.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
denz.copyNForward(m.key.remoteJid, m.message)
denz.sendMessage(m.key.remoteJid, `\`\`\`....: Anti Delete :....\`\`\`

- \`\`\`Nama : @${m.participant.split("@")[0]}\`\`\`
- \`\`\`Tipe : ${c3type}\`\`\`
- \`\`\`Tanggal : ${jam} - ${week} ${weton} - ${calender}\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})
}
*/
/*console.clear()
var progressBar , progress = 0 ;
function doProgress()
{
	progress += Math.random() / 10 ;
	progressBar.update( progress ) ;
	
	if ( progress >= 1 )
	{
		setTimeout( function() { console.clear(),
		exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
			console.log(stdout), console.log(bgcolor('https://github.com/dcode-denpa/bitch-boot', 'cyan'))})}, 200 ) ;
	}
	else
	{
		setTimeout( doProgress , 100 + Math.random() * 400 ) ;
	}
}*/
/*console.log(color(figlet.textSync(`${settings.NamaBot}`, {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: true
	    }), 'lightgreen')), term.slowTyping('CREATE BY denzX' ,{ flashStyle: term.brightWhite })
progressBar = term.progressBar( {
	width: 80 ,
	title: '\n\nLoading' ,
	eta: true ,
	percent: true
} ) ;
doProgress() ;
*/
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()