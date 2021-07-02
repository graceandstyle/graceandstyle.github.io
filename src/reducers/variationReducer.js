export default function variationReducer(variationItem, action) {
    switch (action.type) {
        case "filter": {
            const { filteredItem, variationID } = action;
            return filteredItem[0].Variations.filter((p) => p.VariationID === variationID);
        }
        case "reset": {
            return '';
        }
        case "select": {
            const { variationID } = action;
            return variationID;
        }
        default:
            throw new Error("Unhandled action " + action.type);
    }
}