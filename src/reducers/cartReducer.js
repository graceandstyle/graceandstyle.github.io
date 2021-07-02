export default function cartReducer(cart, action) {
    switch (action.type) {
        case "add": {
            const { currentSizeID } = action;
            const itemInCart = cart.find((i) => i.currentSizeID === currentSizeID);
            if(itemInCart) {
                return cart.map((i) => i.currentSizeID === currentSizeID ? { ...i, quantity: i.quantity + 1} : i );
            } else {
                return [...cart, { currentSizeID, quantity: 1 }];
            }
        }
        default:
            throw new Error("Unhandled action " + action.type);
    }
}