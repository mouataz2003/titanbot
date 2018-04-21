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
    message.channel.sendMessage('Les Command Est : \ *help \ *ping \ *avatar')
}

if (message.content'*ping') {
    message.channel.sendMessage('pong !')
}

})

bot.on('message', message => {
    if (message.content'*avatar') {
    message.channel.sendMessage(message.author.avatarURL)
}
})

bot.login('NDM3MTk2Mzc2NDA1OTY2ODQ4.DbzHRg.F66k8WBmM8MNzdVwDGlx2jqsW5I')
