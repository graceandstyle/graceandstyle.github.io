
export default function productReducer(products, action) {
    switch (action.type) {
        case "initialize": {
            const { data } = action;
            return data;
        }
        default:
            throw new Error("Unhandled action " + action.type);
    }
}