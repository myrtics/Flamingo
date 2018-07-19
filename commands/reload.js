exports.run = (client, message, args, ops) => {

    if (message.author.id !== ops.ownerID) return message.channel.send('You do not have permission to do that.');

    //Delete from cache
    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {
        return message.channel.send(`Unable to reload ${args[0]}`);
    }

    message.channel.send(`Successfully reload: ${args[0]}`);

}
