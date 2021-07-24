const Discord = require("discord.js")

module.exports = {
  name: "supreme",
  description: "Supreme embedded test message",
  execute(message, args) {
    const embed = new Discord.MessageEmbed()
      .setColor("#BE233D")
      .setTitle("Supreme®/Hanes® Crew Socks (4 Pack)")
      .setURL("https://www.supremenewyork.com/shop/accessories/fuwjy1dpx/ww1ybfv7c")
      .setAuthor("Supreme EU", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Supreme_Logo.svg/1200px-Supreme_Logo.svg.png")
      // .setDescription("This is a desc")
      .setThumbnail("https://assets.supremenewyork.com/208032/ma/rWo9faemiIg.jpg")
      .addFields(
        {name: "Region", value: "🇪🇺", inline: true},
        {name: "Status", value: "RESTOCK", inline: true},
        {name: "SKU", value: "fuwjy1dpx", inline: true},
        {name: "Price", value: "18.00 GBP"},
      )
      .addField('Sizes', 'S\n XL')
      .addField('Useful links', '[Supreme EU](https://www.supremenewyork.com/shop/all)')
      .setTimestamp()
      .setFooter('cjxe on github', 'https://avatars.githubusercontent.com/u/35844899?v=4');
      message.channel.send(embed);
  },
};