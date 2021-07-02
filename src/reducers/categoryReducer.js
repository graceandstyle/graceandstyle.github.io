export default function categoryReducer(categoryId, action) {
    switch (action.type) {
        case "filter": {
            const { productsFinal, categoryID } = action;
            return productsFinal.filter((p) => p.CategoryID === categoryID);
        }
        case "select": {
            const { categoryID } = action;
            return categoryID;
        }
        default:
            throw new Error("Unhandled action " + action.type);
    }
}