const EventEmitter = require('events');
const orders = new EventEmitter();

// 1.Kitchen Listner
orders.on('placed', (item)=>{
    console.log(`Kitchen: prepare ${item}`);
});

// 2.Billing Listner
orders.on('placed', (item)=>{
    console.log(`Billing: charge for ${item}`);
});

// 3.SMS Listner
orders.on('placed', (item)=>{
    console.log(`SMS: order confirmed for ${item}`);
});

// 4.Loyality Points (Added without altering the above code)
orders.on('placed', (item)=>{
    console.log(`Loyality Points: calculation updated for ${item}`);
});

// Trigger the event
orders.emit('placed', 'Pizza');