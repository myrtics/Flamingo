const Discord = require('discord.js');
const client = new Discord.Client();

//Constant Variables
const prefix = '+';
const ownerID = '237284196652023808';

//Listener Events
client.on('message', message => {

    //Variables
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    //Return Statements
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    //Command Handler
    try {

        //Auto Reload
        delete require.cache[require.resolve(`./commands/${cmd}.js`)];

        //Options
        let ops = {
            ownerID: ownerID
        }

    let commandFile = require(`./commands/${cmd}.js`)
    commandFile.run(client, message, args, ops);

    } catch (e) {
        console.log(e.stack);
    }

});

//Ready Event
client.on('ready', () => console.log('Launched!'));


//Discord Login
client.login(process.env.BOT_TOKEN);
