const EventEmitter = require('events');
const app = new EventEmitter();

app.once('firstlogin', (user)=>{
    console.log(`Welcome bonus applied for ${user}`);
});

app.on('login', (user)=>{
    console.log(`${user} logged in.`);
});

app.emit('firstlogin', 'Shubham'); // fired
app.emit('login', 'Shubham'); // fired
app.emit('firstlogin', 'Shubham'); //not fired
app.emit('login', 'Shubham'); // fired
