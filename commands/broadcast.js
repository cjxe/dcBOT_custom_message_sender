module.exports = {
  name: 'broadcast',
  description: 'Broadcast test message',
  execute(message, args) {
    message.channel.send('Hi everyone!');
  },
};