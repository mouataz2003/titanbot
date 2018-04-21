const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
    console.log("Je suis connecté !")
})

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
    return channel.send('Welcome To TitanCraft' + member.displayName)
}).catch(console.error)
})

bot.on('ready', function() {
    //bot.user.setGame('*help')
    bot.user.setActivity('*help')

})

bot.on('message', message => {
    if (message.content'*help') {
    message.channel.sendmessage('Les Command Est : \n *help \n *ping \n *avatar')
}

if (message.content'*ping') {
    message.channel.send('pong !')
}

})

bot.on('message', message => {
    if (message.content'*avatar') {
    message.channel.sendmessage(message.author.avatarURL)
}
})

bot.login('NDM3MTk2Mzc2NDA1OTY2ODQ4.DbywfQ.JEZb9JSTB-N_RGMtsQ8SeJdcBXs')
