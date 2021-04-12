function initializeBackground() {
    backgroundPanel = initializeElement(htmlSection, backgroundPanel, [appClassNames.backgroundPanel], mainDiv);
    backgroundEllipse = initializeElement(htmlSection, backgroundEllipse, [appClassNames.backgroundEllipse, appClassNames.backgroundEllipseTopRight], backgroundPanel);
    backgroundEllipse = initializeElement(htmlSection, backgroundEllipse, [appClassNames.backgroundEllipse, appClassNames.backgroundEllipseBottomLeft], backgroundPanel, null, 'TEST');
}

function initializeLogo() {
    logo = initializeElement(htmlImg, logo, [appClassNames.logo], mainDiv);
    $(logo).attr('src', logoURI);
}

function initializeProductListPanel() {
    productListPanel = initializeElement(htmlSection, productListPanel, [appClassNames.productListPanel], mainDiv);
}

function initializeCategoryPanel() {
    categoryPanel = initializeElement(htmlSection, categoryPanel, [appClassNames.categoryPanel], mainDiv);
    categoryItemHolder = initializeElement(htmlDiv, categoryItemHolder, null, categoryPanel);
}

function initializeItemPanel() {
    itemPanel = initializeElement(htmlSection, itemPanel, [appClassNames.itemPanel], mainDiv);
}

function initializeShoppingBagIcon() {
    shoppingBagIconPanel = initializeElement(htmlSection, shoppingBagIconPanel, [appClassNames.shoppingBagIconPanel], mainDiv);
    shopIcon = initializeElement(htmlDiv, shopIcon, ['fas fa-shopping-bag', appClassNames.shopIcon], shoppingBagIconPanel);
}