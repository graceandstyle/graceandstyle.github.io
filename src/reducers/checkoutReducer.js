export default function checkoutReducer(checkout, action) {
    switch (action.type) {
        case "toggle": {
            const { toggle } = action;
            return toggle;
        }
        case "addorder": {
            const { orderDetails } = action;
            return orderDetails;
        }
        default:
            throw new Error("Unhandled action " + action.type);
    }
}