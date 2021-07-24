module.exports = {
  name: 'echo',
  description: 'Echo a message',
  execute(message, args) {
    const allArgs = args.join(" ");
    message.channel.send(allArgs);
  },
};