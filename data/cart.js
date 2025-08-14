export const cart = []

export function addtocart(productId) {
    let matchingquantity;

    cart.forEach((cartitem) => {
        if (productId === cartitem.productId) {
            matchingquantity = cartitem
        }
    })

    if (matchingquantity) {
        matchingquantity.quantity += 1
    }
    else {
        cart.push({
            productId,
            quantity: 1
        })
    }
}