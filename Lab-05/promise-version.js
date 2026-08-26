function placeOrder(item) {
    return new Promise((resolve, reject) => {
        console.log(`Order Placed: ${item}`);

        setTimeout(() => {
            const success = Math.random() > 0.2; //80% Success Chance

            if(success){
                resolve(`Your Order '${item}' is out for delivery..!`);
            }else{
                reject(`Sorry, the restaurant could not prepare your order '${item}'..!`);
            }
        }, 2000);
    });
}

placeOrder('Aaloo')
.then((message)=> console.log(message))
.catch((error)=> console.log(error));