function callServer(httpVerb, dataType, isCache, actionLink, data, successResponse, errorResponse, isExternal) {

    var detinationUrl = isExternal == true ? actionLink : hostUrl + actionLink;

    $.ajax({
        type: httpVerb,
        dataType: dataType,
        cache: isCache,
        url: detinationUrl,
        data: JSON.parse(data),
        success: function (data) {
            successResponse(data);
            xhr = null;
        },
        error: function (response) {
            errorResponse(response);
        }
    });
}

function IsMobile() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        return true;
    }
    return false;
}

function isMac() {
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0) {
        return true;
    }
    return false;
}

function pluralizeWord(numberOfSubject, wordToPluralize) {
    if (numberOfSubject > 1) {
        wordToPluralize = wordToPluralize + 's';
    }
    return wordToPluralize; 
}