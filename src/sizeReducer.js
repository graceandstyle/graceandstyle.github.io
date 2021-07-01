export default function sizeReducer(sizeItem, action) {
    switch (action.type) {
        case "addtocart": {
            const { currentSizeID } = action;
            return sizeItem.map((i) => i.SizeID === currentSizeID ? { ...i, Stock: i.Stock - 1} : i );
        }
        case "filter": {
            const { filteredVariation, sizeID } = action;
            return filteredVariation[0].Sizes.filter((p) => p.SizeID === sizeID);
        }
        case "reset": {
            return '';
        }
        case "select": {
            const { sizeID } = action;
            return sizeID;
        }
        default:
            throw new Error("Unhandled action " + action.type);
    }
}