exports.run = async (client, message, args) => {
    const m = await message.channel.send("Calculando meu ping atual...");
    m.edit(`:ping_pong: Pong!\nPing: **${m.createdTimestamp - message.createdTimestamp}**ms!\nLatencia da API: **${Math.round(client.ping)}**ms `)
}

