export default function sizeReducer(sizeItem, action) {
    switch (action.type) {
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