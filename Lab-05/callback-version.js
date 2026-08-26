function placeOrderCallback(item, callback) {
    console.log(`Order Placed: ${item}`);
    setTimeout(()=>{
        callback(`${item} is out for delivery..!`);
    }, 2000);
}

function trackOrderCallback(item, callback) {
    console.log(`Tracking Your Order : ${item}`);
    setTimeout(() => {
        callback(`Your order "${item}" is being tracked..!`);
    }, 2000);
}

function confirmDeliveryCallback(item, callback) {
    console.log(`Confirming Order : ${item}`);
    setTimeout(() => {
        callback(`Your order "${item}" is delivered Successfully..!`);
    }, 2000);
}


placeOrderCallback('Kaju-Katli', (message)=>{
    console.log(message); 

    trackOrderCallback('Kaju-Katli', (message)=>{
        console.log(message);
    
        confirmDeliveryCallback('Kaju-Katli', (message)=>{
            console.log(message);
        });
    });
});
