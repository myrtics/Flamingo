const run = module.exports.run = async (client, msg, args) => {
    const m = await msg.channel.send('🏓 Ping? <a:discordloading:439643878803505162>');
    m.edit(`🏓 Pong! (Roundtrip: ${m.createdTimestamp - msg.createdTimestamp}ms | One-way: ${~~client.ping}ms)`);
}

const meta = module.exports.meta = {
    aliases: ['ping', 'pong'],
    ownerOnly: false,
    description: 'Ping, pong!',
    usage: ''
}
