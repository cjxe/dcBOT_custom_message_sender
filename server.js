const fs = require('fs');
const Discord = require("discord.js")
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

// Logs a "success message" when the bot starts running
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}.`)
})

// Reads files under `commands` folder
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  // set a new item in the Collection
	// with the key as the command name and the value as the exported module
  client.commands.set(command.name, command);
}

// Command handling
client.on('message', message => { // use `messageCreate` instead of `message` when possible
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

  // if the command doesn't exist
	if (!client.commands.has(command)) {
    message.reply('command doesnt exist');
    return;
  };

  // if the command exists, try executing
	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

// The bot logs in with the API TOKEN
client.login(token);