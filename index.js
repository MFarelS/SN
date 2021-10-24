const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const denz = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const canvacord = require("canvacord")
const util = require('util')
const imageToBase64 = require('image-to-base64')
const imgbb = require('imgbb-uploader')
const figlet = require('figlet')
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
 console.log(color('|WRN|', 'yellow'), color('Joined to Helga Bot Officials group', 'cyan'))
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
        
           mem = anu.participants[0]
                       try {
            pp_user = await denz.getProfilePicture(mem)
            } catch (e) {
            pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            try {
            pp_grup = await denz.getProfilePicture(anu.jid)
            } catch (e) {
            pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
			const mdata = await denz.groupMetadata(anu.jid)
			
//		           const groupMembers = mdata.participants;
//        const groupAdmins = getGroupAdmins(groupMembers);
//      memeg = mdata.participants.length;
//      const groupMet = await denz.groupMetadata(anu.jid);
// stst = await denz.getStatus(`${sender.split('@')[0]}@c.us`)
//				stst = stst.status == 401 ? '' : stst.status
		     try {
			console.log(anu)
			if (anu.action == 'add') {
			const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
        	if(!welkom.includes(mdata.id)) return
num = anu.participants[0]
	var namea = denz.contacts[num] != undefined ? denz.contacts[num].vname || denz.contacts[num].notify : 'unknown'

			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6285732415700-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Denz;;;\nFN:Denz\nitem1.TEL;waid=6285732415700:6285732415700\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
			//mdata = await denz.groupMetadata(anu.jid)
            member = mdata.participants.length
        	//namea = denz.contacts[mem]
			bbbuuufff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome2?nama=${namea}&descriminator=${mdata.participants.length}&memcount=${mdata.participants.length}&gcname=${mdata.subject}&gcicon=${pp_grup}&pp=${pp_user}&bg=${pp_grup}`) 
            
/*		    num = anu.participants[0]
			try {
			ppimg = await denz.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			} 
				var namea = denz.contacts[num] != undefined ? denz.contacts[num].vname || denz.contacts[num].notify : 'unknown'
		
	/*			acu = await getBuffer(ppimg)
				nu1 = ['1','2','3','4','5','6','7','8','9']
				dom1 = nu1[Math.floor(Math.random() * nu1.length)]
				dom2 = nu1[Math.floor(Math.random() * nu1.length)]
				dom3 = nu1[Math.floor(Math.random() * nu1.length)]
				dom4 = nu1[Math.floor(Math.random() * nu1.length)]
				datae = await imageToBase64(JSON.stringify(ppimg).replace(/\"/gi, ''))
				xuxu = getRandom('.jpg')
				xaxa = getRandom('.png')
				fs.writeFileSync(`./${xuxu}`, datae, 'base64')
				exec(`ffmpeg -i ./${xuxu} ./${xaxa}`, (err) => {
					imgbb("84c95efb3159fb351a1eb9f602fa691b", `./${xaxa}`).then(hesel => {
						var wellcome = new canvacord.Welcomer()
						.setUsername(namea)
						.setDiscriminator(`${dom1}${dom2}${dom3}${dom4}`)
						.setMemberCount(mdata.participants.length)
						.setAvatar(hesel.display_url)
						.setGuildName(mdata.subject)
						.setBackground("https://i.ibb.co/pQsDkM2/1616829457-picsay.png")
						.setColor("border", "#c007d9")
						.setColor("username-box", "#c007d9")
						.setColor("discriminator-box", "#c007d9")
						.setColor("message-box", "#c007d9")
						.setColor("title", "#c007d9")
						.setColor("avatar", "#c007d9")
						wellcome.build()
			//masuk =`${uwu}Welcome @${num.split('@')[0]}\n\nWe hope you feel comfortable here!!${uwu}`
			.then(kom => {
			denz.sendMessage(mdata.id, kom, MessageType.image, {caption: `Welcome @${num.split('@')[0]} !`, contextInfo: {"mentionedJid": [num]}})
			//denz.sendMessage(mdata.id, masuk, MessageType.text, { quoted: fkontakk, thumbnail: fs.readFileSync('./denz.jpg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Welcome To ${mdata.subject}`,body:"",mediaType:"2",thumbnail:kom,mediaUrl:`https://youtu.be/dQw4w9WgXcQ`}}})
			 	})
					})
				})
			} */
//		let buff = await getBuffer(ppimg)
//		bbbbuuuuffff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye2?nama=${encodeURIComponent(anu_user.notify)}&descriminator=${member}&memcount=${member}&gcname=${mdata.subject}&gcicon=${pp_grup}&pp=${pp_user}&bg=${pp_grup}`)
			masuk =`${uwu}Welcome @${num.split('@')[0]}\n\nWe hope you feel comfortable here!!${uwu}`
			//Welcome @${num.split('@')[0]}* ${enter}${enter}📛 : _${anu_user}_${enter}💌 : _${p3}_${enter}🔣 : _@${num.split('@')[0]}_${enter}🥉 : _${memeg} Member (s)_${enter}⏰ : _${jamnyy} Indonesian time_${enter}${enter}\`\`\`Hope you like it and don't forget to read the group description\`\`\``;
            denz.sendMessage(mdata.id, masuk, MessageType.text, { quoted: fkontakk, thumbnail: fs.readFileSync('./denz.jpg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Welcome To ${mdata.subject}`,body:"",mediaType:"2",thumbnail:bbbuuufff,mediaUrl:`https://youtu.be/dQw4w9WgXcQ`}}})
			} 
			/*num = anu.participants[0]
				var namea = denz.contacts[num] != undefined ? denz.contacts[num].vname || denz.contacts[num].notify : 'unknown'
				try {
					ppimg = await denz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/HnbZ6vz/coders.png'
				}
				acu = await getBuffer(ppimg)
				nu1 = ['1','2','3','4','5','6','7','8','9']
				dom1 = nu1[Math.floor(Math.random() * nu1.length)]
				dom2 = nu1[Math.floor(Math.random() * nu1.length)]
				dom3 = nu1[Math.floor(Math.random() * nu1.length)]
				dom4 = nu1[Math.floor(Math.random() * nu1.length)]
				datae = await imageToBase64(JSON.stringify(ppimg).replace(/\"/gi, ''))
				xuxu = getRandom('.jpg')
				xaxa = getRandom('.png')
				fs.writeFileSync(`./${xuxu}`, datae, 'base64')
				exec(`ffmpeg -i ./${xuxu} ./${xaxa}`, (err) => {
					imgbb("046987b675ceee8523a0bbb17398620a", `./${xaxa}`).then(hesel => {
						var wellcome = new canvacord.Welcomer()
						.setUsername(namea)
						.setDiscriminator(`${dom1}${dom2}${dom3}${dom4}`)
						.setMemberCount(mdata.participants.length)
						.setAvatar(hesel.display_url)
						.setGuildName(mdata.subject)
						.setBackground("https://i.ibb.co/pQsDkM2/1616829457-picsay.png")
						.setColor("border", "#c007d9")
						.setColor("username-box", "#c007d9")
						.setColor("discriminator-box", "#c007d9")
						.setColor("message-box", "#c007d9")
						.setColor("title", "#c007d9")
						.setColor("avatar", "#c007d9")
						wellcome.build()
						.then(kom => {
							denz.sendMessage(mdata.id, kom, MessageType.image, {caption: `Welcome @${num.split('@')[0]} !`, contextInfo: {"mentionedJid": [num]}})
						})
					})
				})
			}*/
			else if (anu.action == 'remove') {
			const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
			const cord = require("discord-canvas")
			if(!welkom.includes(mdata.id)) return
			num = anu.participants[0]
				var namea = await denz.contacts[num] != undefined ? denz.contacts[num].vname || denz.contacts[num].notify : 'unknown'
				try {
					ppimg = await denz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/HnbZ6vz/coders.png'
				}
				acu = await getBuffer(ppimg)
				nu1 = ['1','2','3','4','5','6','7','8','9']
				dom1 = nu1[Math.floor(Math.random() * nu1.length)]
				dom2 = nu1[Math.floor(Math.random() * nu1.length)]
				dom3 = nu1[Math.floor(Math.random() * nu1.length)]
				dom4 = nu1[Math.floor(Math.random() * nu1.length)]
				getppGrup = await denz.getProfilePicture(anu.jid)
				datae = await imageToBase64(JSON.stringify(ppimg).replace(/\"/gi, ''))
				datau = await imageToBase64(JSON.stringify(getppGrup).replace(/\"/gi, ''))
				xuxu = getRandom('.jpg')
				xaxa = getRandom('.png')
				xixi = getRandom('.jpg')
				xoxo = getRandom('.png')
				fs.writeFileSync(`./${xuxu}`, datae, 'base64')
				fs.writeFileSync(`./${xixi}`, datau, 'base64')
				exec(`ffmpeg -i ./${xuxu} ./${xaxa}`, (err) => {
					exec(`ffmpeg -i ./${xixi} ./${xoxo}`, (err) => {
						imgbb("046987b675ceee8523a0bbb17398620a", `./${xaxa}`).then(hesel => {
							imgbb("046987b675ceee8523a0bbb17398620a", `./${xoxo}`).then(data => {
								const haha = cord.Goodbye()
								.setUsername(namea)
								.setDiscriminator(`${dom1}${dom2}${dom3}${dom4}`)
								.setMemberCount(mdata.participants.length)
								.setGuildName(mdata.subject)
								.setGuildIcon(data.display_url)
								.setAvatar(hesel.display_url)
								.setBackground("https://i.ibb.co/pQsDkM2/1616829457-picsay.png")
								.toAttachment().then((res) => {
									denz.sendMessage(mdata.id, res, MessageType.image, {caption: `Goodbye @${num.split('@')[0]} !`, contextInfo: {"mentionedJid": [num]}})
								})
							})
						})
					})
				})
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
        
	denz.on('message-delete', async (m) => {
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
denz.sendMessage(m.key.remoteJid, `▷\`\`\`Anti Delete\`\`\`

▢ \`\`\`Nama : @${m.participant.split("@")[0]}\`\`\`
▢ \`\`\`Tipe : ${c3type}\`\`\`
▢ \`\`\`Tanggal : ${jam} - ${week} ${weton} - ${calender}\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})
}

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