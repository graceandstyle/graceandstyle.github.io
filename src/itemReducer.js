export default function itemReducer(currentItem, action) {
    switch (action.type) {
        case "filter": {
            const { filteredCategory, currentItemID } = action;
            return filteredCategory[0].Items.filter((p) => p.ItemID === currentItemID);
        }
        case "reset": {
            return '';
        }
        case "select": {
            const { currentItemID } = action;
            return currentItemID;
        }
        default:
            throw new Error("Unhandled action " + action.type);
    }
}