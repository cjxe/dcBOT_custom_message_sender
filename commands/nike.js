const Discord = require("discord.js")

module.exports = {
  name: "nike",
  description: "Nike embedded test message",
  execute(message, args) {
    const embed = new Discord.MessageEmbed()
      .setColor("#BE233D")
      .setTitle("Nike Air Force 1 '07")
      .setURL("https://www.nike.com/gb/t/air-force-1-07-shoe-lKPQ6q/CW2288-111")
      .setAuthor("Nike GB", "https://dotthecommer.files.wordpress.com/2014/10/nike-logo.jpg")
      // .setDescription("This is a desc")
      .setThumbnail("https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f094af40-f82f-4fb9-a246-e031bf6fc411/air-force-1-07-shoe-J29nBv.png")
      .addFields(
        {name: "Region", value: "🇬🇧", inline: true},
        {name: "Status", value: "DROPPED", inline: true},
        {name: "SKU", value: "DD8959-100", inline: true},
        {name: "Price", value: "99.95 GBP"},
      )
      .addField('Sizes', '9 (LOW)\n 10 (LOW)')
      .addField('Useful links', '[Nike GB](https://www.nike.com/gb/)')
      .setTimestamp()
      .setFooter('cjxe on github', 'https://avatars.githubusercontent.com/u/35844899?v=4');
      message.channel.send(embed);
  },
};