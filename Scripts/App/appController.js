$(document).ready(() => {
    initializeBackground();
    initializeLogo();
    initializeCategoryPanel();
    initializeItemPanel();
    initializeProductListPanel();
    initializeShoppingBagIcon();
});

function genericAjaxError(response) {
    console.log(response)
}