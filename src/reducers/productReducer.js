
export default function productReducer(products, action) {
    switch (action.type) {
        case "updatecartquantity": {
            const { currentCategoryID, currentItemID, currentVariationID, currentSizeID, currentStock, quantity } = action;
            const newItems = [...products];
            newItems.filter((p) => p.CategoryID === currentCategoryID)[0].Items.filter((i) => i.ItemID === currentItemID)[0].Variations.filter((v) => v.VariationID === currentVariationID)[0].Sizes.filter((s) => s.SizeID === currentSizeID)[0].Stock = currentStock - quantity;
            return newItems;
        }
        case "initialize": {
            const { productData } = action;
            return productData;
        }
        case "stockupdated": {
            return true;
        }
        default:
            throw new Error("Unhandled action " + action.type);
    }
}