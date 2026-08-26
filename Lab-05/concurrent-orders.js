function placeOrder(item) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 2000) + 1000;

        console.log(`Order placed for ${item}. Delay is ${delay}`);
        setTimeout(() => {
            resolve(`${item} order completed`);
        }, delay);
    });
}

async function orderMultiple() {
    console.log('Placing 3 orders at once....');

    console.time('Total Time');

    const results = await Promise.all([
        placeOrder('Aaloo tikki'),
        placeOrder('Samosa'),
        placeOrder('Buraans Juice')
    ]);

    console.timeEnd('Total Time');

    console.log(results);

}

orderMultiple();