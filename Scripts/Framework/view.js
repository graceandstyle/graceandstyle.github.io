function initializeElement(htmlElement, object, objectClass, parentObject, isPrepend, toolTipText) {
    object = $(htmlElement).clone();

    if (objectClass != null) {
        addObjectClasses($(object), objectClass);
    }

    if (isPrepend) {
        $(object).prependTo($(parentObject));
    }
    else {
        $(object).appendTo($(parentObject));
    }

    if (toolTipText != null || toolTipText != undefined) {
        $(object).addClass(frameWorkClassNames.addToolTip);
        addToolTip(object, toolTipText);
    }
    
    return object;
}

function addObjectClasses(object, objectClass) {
    for (var i = 0; i < objectClass.length; i++) {
        $(object).addClass(objectClass[i]);
    }
}

function removeObjectClasses(object, objectClass) {
    for (var i = 0; i < objectClass.length; i++) {
        $(object).removeClass(objectClass[i]);
    }
}

function addObjectAttribute(object, objectAttribute, attributeValue) {
    $(object).attr(attributePrefix + objectAttribute, attributeValue);
}

function addObjectText(object, objectText) {
    if ($(object).is(elementTypes.input)) {
        $(object).val(objectText);
    }
    else {
        $(object).html(objectText);
    }
}

function customizeScrollBar(elementToCustomize) {
    if (!IsMobile() && !isMac()) {
        usingMalihu = true;
        $(elementToCustomize).mCustomScrollbar({
            theme: malihuTheme
        });
    }
}

function destroyElement(object) {
    $(object).remove();
    return null;
}

function adjustElementHeightOnResize() {
    var adjustTableElements = $('*[' + attributePrefix + uploaderDataAttributes.adjustableHeight + ']');
    for (var i = 0; i < adjustTableElements.length; i++) {
        var thisAdjustableElement = $(adjustTableElements[i]);
        addjustElementHeight(thisAdjustableElement, thisAdjustableElement.children());
    }
}

function addjustElementHeight(parentElem, childElem) {
    $(parentElem).attr('class', $(parentElem).attr(attributePrefix + uploaderDataAttributes.origClassName));
    if ($(childElem)[0].getBoundingClientRect().height > $(parentElem)[0].getBoundingClientRect().height) {
        if (!$(parentElem).hasClass($(parentElem).attr(attributePrefix + uploaderDataAttributes.adjustableHeight))) {
            $(parentElem).attr('class', $(parentElem).attr(attributePrefix + uploaderDataAttributes.adjustableHeight));
        }
    }
    else {
        if ($(parentElem).hasClass($(parentElem).attr(attributePrefix + uploaderDataAttributes.adjustableHeight))) {
            $(parentElem).attr('class', $(parentElem).attr(attributePrefix + uploaderDataAttributes.origClassName));
        }
    }
}

function addShadow(objectName) {
    if (!$(objectName).hasClass(frameWorkClassNames.addShadow)) {
        $(objectName).addClass(frameWorkClassNames.addShadow);
    }
}

function removeShadow(objectName) {
    if ($(objectName).hasClass(frameWorkClassNames.addShadow)) {
        $(objectName).removeClass(frameWorkClassNames.addShadow);
    }
}

function addToolTip(htmlElement, toolTipTextValue) {
    toolTip = initializeElement(htmlDiv, toolTip, [frameWorkClassNames.toolTip, frameWorkClassNames.addShadow], htmlElement);
    toolTipTail = initializeElement(htmlDiv, toolTipTail, null, toolTip);
    toolTipText = initializeElement(htmlSpan, toolTipText, null, toolTip);
    addObjectText(toolTipText, toolTipTextValue);
}