export default function cartReducer(cart, action) {
    switch (action.type) {
        case "empty":
            return [];
        case "updateQuantity": {
            const { sku, quantity } = action;
            return quantity === 0 ? cart.filter((i) => i.sku !== sku)
                  : cart.map((i) => i.sku === sku ? { ...i, quantity} : i );
        }
        case "add":
            const { currentSizeID } = action;
            console.log(currentSizeID);
            const itemInCart = cart.find((i) => i.currentSizeID === currentSizeID);
            if(itemInCart) {
                return cart.map((i) => i.currentSizeID === currentSizeID ? { ...i, quantity: i.quantity + 1} : i );
            } else {
                return [...cart, { currentSizeID, quantity: 1 }];
            }
        default:
            throw new Error("Unhandled action " + action.type);
    }
}