const {
    placeOrder,
    trackOrder,
    confirmDelivery
} = require('./chaining-version');

async function processOrder(){
    try{
        const item = await placeOrder('Chilli Potatos');

        await trackOrder(item);
        await confirmDelivery(item);

        console.log('Delivered: ', item);
    }catch (error){
        console.log('Error: ',error);
    }
}

processOrder();