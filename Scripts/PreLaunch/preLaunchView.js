$(document).ready(() => {
    initializePreLaunch();
});

function initializePreLaunch() {
    preLaunchPanel = initializeElement(htmlSection, preLaunchPanel, [preLaunchClassNames.preLaunchPanel], mainDiv);
    preLaunchLogo = initializeElement(htmlImg, preLaunchLogo, null, preLaunchPanel);
    preLaunchText = initializeElement(htmlSpan, preLaunchText, null, preLaunchPanel);

    $(preLaunchLogo).attr('src', preLaunchConstants.logoSrc);
    addObjectText(preLaunchText, preLaunchConstants.comingSoon);
}