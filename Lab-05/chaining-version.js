function placeOrder(item) {
    return new Promise((resolve, reject) => {
        console.log(`Order Placed: ${item}`);

        setTimeout(() => {
            const success = Math.random() > 0.1;

            if (success) {
                resolve(item);
            } else {
                reject(`Failed to place ${item} order.`);
            }
        }, 1000);
    });
}

function trackOrder(item) {
    return new Promise((resolve, reject) => {
        console.log(`Preparing: ${item}`);

        setTimeout(() => {
            const success = Math.random() > 0.1;

            if (success) {
                resolve(item);
            } else {
                reject(`Failed to prepare ${item}.`);
            }
        }, 1000);
    });
}

function confirmDelivery(item) {
    return new Promise((resolve, reject) => {
        console.log(`Out for Delivery: ${item}`);

        setTimeout(() => {
            const success = Math.random() > 0.1;

            if (success) {
                resolve(item);
            } else {
                reject(`Delivery failed for ${item}.`);
            }
        }, 1000);
    });
}

// Uncomment when not exporting the functions

// placeOrder("Aaloo Paratha")
// .then(trackOrder)
// .then(confirmDelivery)
// .then((item) => {
//     console.log(`Delivered: ${item}`);
// })
// .catch((error) => {
//     console.log(`Error: ${error}`);
// });

module.exports = {
    placeOrder,
    trackOrder,
    confirmDelivery
};