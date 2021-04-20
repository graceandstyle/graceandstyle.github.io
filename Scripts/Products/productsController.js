$(document).ready(() => {
    getProducts();
});

function getProducts() {
    callServer(httpVerbs.get, dataTypes.json, true, baseURI + productAPIExtensions.getProducts, null, initializeCategories, genericAjaxError, true);
}

function deductQty() {
    var currentVal = parseInt($(qtyInput).val());

    if (currentVal > 1) {
        addObjectText(qtyInput, currentVal -= 1);
    }
}

function addQty(currStock) {
    var currentVal = parseInt($(qtyInput).val());

    if (currentVal < currStock) {
        addObjectText(qtyInput, currentVal += 1);
    }
}
