
const {
    MessageType
} = require('@adiwajshing/baileys');
const {
    color
} = require('../lib/color')
const fs = require('fs');
const captchaPath = './database/captcha_group.js'

module.exports = async (denz, mek) => {
    try {
        const {
            chats,
            from,
            sender
        } = mek
        const command = chats.toLowerCase().split(' ')[0] || ''
        const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(command) ? command.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
        const reply = (_str) => {
            return denz.sendMessage(from, _str, MessageType.text, {
                quoted: mek
            })
        }

        if (fs.existsSync(captchaPath + '/' + sender + '.json')) {
            if (!chats.startsWith(prefix) && !mek.key.fromMe && global.denz.user.jid === denz.user.jid) {
                let data_captcha = JSON.parse(fs.readFileSync(captchaPath + '/' + sender + '.json'))
                if (data_captcha.session === 'captcha') {
                    if (chats.length < 1) return
                    if (chats.length > 60) return
                    if (chats == data_captcha.token) {
                        denz.sendMessage(from, `✅ User valid, Terimakasih telah memverifikasi, Jangan lupa patuhi rules grup yak ^.^`, MessageType.text, {
                            quoted: mek
                        })
                        let dataID_captcha = JSON.parse(fs.readFileSync(captchaPath + '/ids-match.json'));
                        let indexData_captcha = dataID_captcha.findIndex(r => r['number'] == data_captcha.number)
                        dataID_captcha.splice(indexData_captcha, 1)
                        fs.writeFileSync(captchaPath + '/ids-match.json', JSON.stringify(dataID_captcha, null, 3))
                        fs.unlinkSync(captchaPath + '/' + data_captcha.number + '.json')
                    }
                }
            }
        }
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
    }
}