exports.run = (bot, message, args)=>{

    if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`${message.author}, você não tem permissão para usar esse comando.`)
    if(!message.guild.member(bot.user).hasPermission('BAN_MEMBERS')) return message.channel.send(`${message.author}, eu não tenho permissão para banir membros 😦`)

    message.guild.unban(args[0]).then(msg => {
         message.channel.send (`${message.author}, usuário desbanido! <:emoji_4:619915881526460456>`);

    }).catch(err => {
        message.channel.send('```js\n' + err.stack + '```')
    })


        }

exports.config = {
    name: 'unban',
    aliases: ['desbanir'],
    category: 'mod'

}