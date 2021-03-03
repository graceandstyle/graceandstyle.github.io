$(document).ready(() => {
    initializeBackground();
});

function initializeBackground() {
    backgroundPanel = initializeElement(htmlSection, backgroundPanel, [backgroundClassNames.backgroundPanel], mainDiv);
    backgroundEllipse = initializeElement(htmlSection, backgroundEllipse, [backgroundClassNames.backgroundEllipse, backgroundClassNames.backgroundEllipseTopRight], backgroundPanel);
    backgroundEllipse = initializeElement(htmlSection, backgroundEllipse, [backgroundClassNames.backgroundEllipse, backgroundClassNames.backgroundEllipseBottomLeft], backgroundPanel);
}