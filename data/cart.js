export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1',
    }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2',
    }];
}

export function addtocart(productId) {
    let matchingquantity;

    cart.forEach((cartitem) => {
        if (productId === cartitem.productId) {
            matchingquantity = cartitem;
        }
    })

    if (matchingquantity) {
        matchingquantity.quantity += 1;
    }
    else {
        cart.push({
            //productId:productId,
            productId,
            quantity: 1,
            deliveryOptionId: '1',

        })
    }
    saveTostorage()
}

export function saveTostorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}


export function removeFromCart(productId) {

    const newcart = [];
    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newcart.push(cartItem);

        }
    });
    cart = newcart;

    saveTostorage();
};

export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingquantity;

    cart.forEach((cartitem) => {
        if (productId === cartitem.productId) {
            matchingquantity = cartitem;
        }
    });

    matchingquantity.deliveryOptionId = deliveryOptionId;

    saveTostorage()
}

