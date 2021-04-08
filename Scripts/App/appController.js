$(document).ready(() => {
    initializeBackground();
    initializeLogo();
    initializeProductListPanel();
    initializeCategoryPanel();
    initializeItemPanel();
});

function genericAjaxError(response) {
    console.log(response)
}