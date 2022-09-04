const Discord = require('discord.js');
const client = new Discord.Client();
const Config = require("./config.json")

client.login(Config.token)//login