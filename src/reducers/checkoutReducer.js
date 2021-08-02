export default function checkoutReducer(checkout, action) {
    switch (action.type) {
        case "toggle": {
            const { toggle } = action;
            return toggle;
        }
        default:
            throw new Error("Unhandled action " + action.type);
    }
}