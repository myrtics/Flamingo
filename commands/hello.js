exports.run = (client, message, args) => {

    message.delete();
    message.channel.send(`${message.author} You must be really bored if you are talking to a bot smh. It's ${message.createdTimestamp} go do something useful.`)

}
