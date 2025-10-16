function Cart(localStorageKey) {
    const cart = {
        cartItems: undefined,

        loadFromStorage() {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));

            if (!this.cartItems) {
                this.cartItems = [{
                    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                    quantity: 2,
                    deliveryOptionId: '1',
                }, {
                    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                    quantity: 1,
                    deliveryOptionId: '2',

                }];
            }
        },

        saveTostorage() {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems))
        },

        addtocart(productId) {
            let matchingquantity;

            this.cartItems.forEach((cartitem) => {
                if (productId === cartitem.productId) {
                    matchingquantity = cartitem;
                }
            })

            if (matchingquantity) {
                matchingquantity.quantity += 1;
            }
            else {
                this.cartItems.push({
                    //productId:productId,
                    productId,
                    quantity: 1,
                    deliveryOptionId: '1',

                })
            }
            this.saveTostorage()
        },
        removeFromCart(productId) {
            const newcart = [];

            this.cartItems.forEach((cartItem) => {
                if (cartItem.productId !== productId) {
                    newcart.push(cartItem);

                }
            });
            this.cartItems = newcart;

            this.saveTostorage();
        },


        updateDeliveryOption(productId, deliveryOptionId) {
            let matchingquantity;

            this.cartItems.forEach((cartitem) => {
                if (productId === cartitem.productId) {
                    matchingquantity = cartitem;
                }
            });

            matchingquantity.deliveryOptionId = deliveryOptionId;

            this.saveTostorage()
        }


    };
    return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');



cart.loadFromStorage();




businessCart.loadFromStorage();


console.log(cart);
console.log(businessCart)




