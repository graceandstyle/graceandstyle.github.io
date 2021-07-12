export default function cartReducer(cart, action) {
    switch (action.type) {
        case "add": {
            const { imgURL, hex, currentCategoryID, currentItemID, currentVariationID, currentSizeID, name, price, size } = action;
            const itemInCart = cart.find((i) => i.currentSizeID === currentSizeID);
            if(itemInCart) {
                return cart.map((i) => i.currentSizeID === currentSizeID ? { ...i, quantity: i.quantity + 1} : i );
            } else {
                return [...cart, { imgURL, hex, currentCategoryID, currentItemID, currentVariationID, currentSizeID, name, price, size, quantity: 1 }];
            }
        }
        case "remove": {
            const { currentSizeID } = action;
            return cart.filter((i) => i.currentSizeID !== currentSizeID)
        }
        case "subtract": {
            const { currentSizeID } = action;
            return cart.map((i) => i.currentSizeID === currentSizeID ? { ...i, quantity: i.quantity - 1} : i );
        }
        case "toggle": {
            const { toggle } = action;
            return toggle;
        }
        default:
            throw new Error("Unhandled action " + action.type);
    }
}