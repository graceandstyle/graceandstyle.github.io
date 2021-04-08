$(document).ready(() => {
    getProducts();
});

function getProducts() {
    callServer(httpVerbs.get, dataTypes.json, true, baseURI + productAPIExtensions.getProducts, null, initializeCategories, genericAjaxError, true);
}
