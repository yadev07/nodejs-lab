const EventEmitter = require('events');

class NotificationCenter extends EventEmitter {}
const notifier = new NotificationCenter();

notifier.on('newMessage', (from, text)=>{
    console.log(`${from}: ${text}`);
});

notifier.on('error', (err)=>{
    console.log('Handled: ', err.message);
});

notifier.on('userOnline', (username)=>{
    console.log(`[Status] ${username} is now online.`);
});

notifier.emit('newMessage', 'Priya', 'You free?');
notifier.emit('userOnline', 'Aman');

