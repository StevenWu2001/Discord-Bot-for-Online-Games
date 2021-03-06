const Discord = require('discord.js');

const dot = ":diamond_shape_with_a_dot_inside:";

module.exports = {
	name: 'guide',
	description: 'The help command',
	execute(message, args) {
        var lolCmd = "1: Champion Mastery :bulb:\n `!lol mastery SUMMONER_NAME`\n\n";
        lolCmd += "2: Rank Info :brain:\n `!lol rank SUMMONER_NAME`\n\n";
        lolCmd += "3: Weekly Free Rotation :watch:\n `!lol freerotation`\n\n";

        var apex = "1: Player Stats :bulb:\n`!apex player ORIGIN_USERNAME`\n\n";

		const helpEmbed = new Discord.MessageEmbed();
        helpEmbed.setColor('#0099ff');
        helpEmbed.setTitle('A List of Available Commands');
        helpEmbed.setDescription('Type the following commands to the bot!');
        helpEmbed.addFields(
            {name : dot + ' League of Legends', value: lolCmd + "\n"},
            {name : dot + " Apex Legends", value : apex + "\n"},
            {name : dot + ' Guide :hammer_and_wrench:', value : '`!guide`'},
        );
        message.channel.send(helpEmbed);
	},
};
