function initializeBackground() {
    backgroundPanel = initializeElement(htmlSection, backgroundPanel, [appClassNames.backgroundPanel], mainDiv);
    backgroundEllipse = initializeElement(htmlSection, backgroundEllipse, [appClassNames.backgroundEllipse, appClassNames.backgroundEllipseTopRight], backgroundPanel);
    backgroundEllipse = initializeElement(htmlSection, backgroundEllipse, [appClassNames.backgroundEllipse, appClassNames.backgroundEllipseBottomLeft], backgroundPanel, null, 'TEST');
}

function initializeLogo() {
    logo = initializeElement(htmlImg, logo, [appClassNames.logo], mainDiv);
    $(logo).attr('src', logURI);
}

function initializeCategoryPanel() {
    categoryPanel = initializeElement(htmlSection, categoryPanel, [appClassNames.categoryPanel], mainDiv);
    categoryItemHolder = initializeElement(htmlDiv, categoryItemHolder, null, categoryPanel);
}