exports.run = (client, message, args) => {

    message.delete();
    message.channel.send(`${client.author} You must be really bored if you are talking to a bot smh.`)

}
