$(document).ready(() => {
    initializeBackground();
    initializeLogo();
    initializeProductListPanel();
    initializeCategoryPanel();
});

function genericAjaxError(response) {
    console.log(response)
}