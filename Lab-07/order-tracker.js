const EventEmitter = require('events');

class OrderTracker extends EventEmitter { }
const tracker = new OrderTracker();

tracker.on('error', (err) => {
    console.log(`[System says]: ${err.message}`);
});

// first order bonus
tracker.once('firstOrderBonus', (customer) => {
    console.log(`Special Reward: First-Order bonus applied for ${customer}.\n`);
});

// order placed listners
tracker.on('orderPlaced', (order) => {
    console.log(`[Internal Log]: Order #${order.id} placed by ${order.customer}`);
});

tracker.on('orderPlaced', (order) => {
    console.log(`[Customer Notification]: Hi ${order.customer}, your order for ${order.item} is placed successfully..!\n`);
});

// order prepared listners
tracker.on('orderPrepared', (order) => {
    console.log(`[Internal Log]: Kitchen finished preparing Order #${order.id}`);
});

tracker.on('orderPrepared', (order) => {
    console.log(`[Customer Notification]: Good news ${order.customer}!, Your order for ${order.item} is prepared.\n`);
});

// order prepared listners
tracker.on('orderDelivered', (order) => {
    console.log(`[Internal Log]: Order #${order.id} is marked Delivered.`);
});

tracker.on('orderDelivered', (order) => {
    console.log(`[Customer Notification]: Delighted to serve you, ${order.customer}!, Enjoy your ${order.item}.\n`);
});

// --Simulation Lifecycle with setTimeout()--
const sampleOrder = {
    id: 101,
    customer: 'Shubham',
    item: 'Aloo Paratha'
}

console.log('\n---Starting Order Tracking Simulation---\n\n');

tracker.emit('firstOrderBonus', sampleOrder.customer);
tracker.emit('firstOrderBonus', sampleOrder.customer); // not fired

tracker.emit('orderPlaced', sampleOrder);

setTimeout(()=>{
    tracker.emit('orderPrepared', sampleOrder);
}, 1500);

setTimeout(()=>{
    tracker.emit('orderDelivered', sampleOrder);
    tracker.emit('error', new Error('Simulation Complete: Connection closed.'));
}, 3000);

