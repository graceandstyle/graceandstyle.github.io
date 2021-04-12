function initializeCategories(data) {
    products = data;
    categorySelect = initializeElement(htmlSelect, categorySelect, null, categoryPanel);
    dropDownIcon = initializeElement(htmlDiv, dropDownIcon, ['fas fa-chevron-circle-down', appClassNames.dropDownIcon], categoryPanel);

    for (var i = 0; i < products.length; i++) {
        categoryItem = initializeElement(htmlSpan, categoryItem, i == 0 ? [appClassNames.active] : null, categoryItemHolder);
        categoryOption = initializeElement(htmlOption, categoryOption, null, categorySelect);

        addObjectText(categoryItem, products[i].DisplayValue);
        addObjectText(categoryOption, products[i].DisplayValue);

        $(categoryOption).val(products[i].DisplayValue);

        addObjectAttribute(categoryItem, dataCategoryId, products[i].CategoryID);

        $(categoryItem).css({
            '-webkit-animation-delay': (i * 0.1) + 's',
            '-moz-animation-delay': (i * 0.1) + 's',
            '-o-animation-delay': (i * 0.1) + 's',
            'animation-delay': (i * 0.1) + 's'
        });

        $(categoryItem).unbind(appEvents.click).on(appEvents.click, function () {
            selectCategory($(this));
        });
    }

    $(categorySelect).unbind(appEvents.change).on(appEvents.change, function () {
        var catIndex = $(categorySelect)[0].selectedIndex
        selectCategory($(categoryItemHolder).children().eq(catIndex));
    });

    $(categoryItemHolder).children().eq(0).trigger(appEvents.click);
}

function selectCategory(categoryItem) {
    var categoryId = $(categoryItem).attr(attributePrefix + dataCategoryId);
    if (currentSelectedCategory != categoryId) {
        currentSelectedCategory = categoryId;
        var itemResult = Enumerable.from(products).where(function (x) { return x.CategoryID == categoryId })
            .select(function (x) { return x.Items }).toArray();
        $(categoryItemHolder).children().removeClass(appClassNames.active);
        $(categoryItem).addClass(appClassNames.active);

        initializeItemThumbnail(itemResult);
    }
}

function initializeItemThumbnail(itemResult) {
    $(productListPanel).children().remove();

    for (var i = 0; i < itemResult[0].length; i++) {
        productListItem = initializeElement(htmlDiv, productListItem, i == 0 ? [appClassNames.listItem, appClassNames.active] : [appClassNames.listItem], productListPanel);
        thumbImgHolderUnderlay = initializeElement(htmlDiv, thumbImgHolderUnderlay, [appClassNames.imgHolderUnderlay], productListItem);
        thumbImgHolder = initializeElement(htmlDiv, thumbImgHolder, [appClassNames.imgHolder], productListItem);
        thumbImg = initializeElement(htmlImg, thumbImg, null, thumbImgHolder);
        thumbDetailsHolder = initializeElement(htmlDiv, thumbDetailsHolder, [appClassNames.detailsHolder], productListItem);
        thumbName = initializeElement(htmlSpan, thumbName, [appClassNames.name], thumbDetailsHolder);
        thumbPrice = initializeElement(htmlSpan, thumbPrice, [appClassNames.price], thumbDetailsHolder);

        $(thumbImgHolderUnderlay).css({
            'background-color': itemResult[0][i].ThumbnailHex
        });

        $(productListItem).css({
            '-webkit-animation-delay': (i * 0.1) + 's',
            '-moz-animation-delay': (i * 0.1) + 's',
            '-o-animation-delay': (i * 0.1) + 's',
            'animation-delay': (i * 0.1) + 's'
        });

        $(thumbImg).attr('src', itemResult[0][i].Thumbnail);

        addObjectText(thumbName, itemResult[0][i].DisplayValue);
        addObjectText(thumbPrice, itemResult[0][i].Price);

        addObjectAttribute(productListItem, dataItemId, itemResult[0][i].ItemID);
        addObjectAttribute(productListItem, dataItemName, itemResult[0][i].DisplayValue);
        addObjectAttribute(productListItem, dataItemPrice, itemResult[0][i].Price);

        $(productListItem).unbind(appEvents.click).on(appEvents.click, function () {
            selectItem($(this), itemResult[0]);
        });
    }

    $(productListPanel).children().eq(0).trigger(appEvents.click);
}

function selectItem(selectedItem, itemResult) {
    var itemId = $(selectedItem).attr(attributePrefix + dataItemId);
    if (currentSelectedItem != itemId) {
        currentSelectedItem = itemId;
        var itemName = $(selectedItem).attr(attributePrefix + dataItemName);
        var itemPrice = $(selectedItem).attr(attributePrefix + dataItemPrice);

        var variationResult = Enumerable.from(itemResult).where(function (x) { return x.ItemID == itemId })
            .select(function (x) { return x.Variations }).toArray();

        $(productListPanel).children().removeClass(appClassNames.active);
        $(selectedItem).addClass(appClassNames.active);

        initializeSelectedItem(variationResult, itemName, itemPrice);
    }
}

function initializeSelectedItem(variationResult, displayName, displayPrice) {
    $(itemPanel).children().remove();

    itemImgHolder = initializeElement(htmlDiv, itemImgHolder, [appClassNames.imgHolder], itemPanel);
    itemImgLoader = initializeElement(htmlDiv, itemImgLoader, ['fas fa-spinner fa-spin'], itemImgHolder);
    itemImg = initializeElement(htmlImg, itemImg, null, itemImgHolder);

    colorPanel = initializeElement(htmlDiv, colorPanel, [appClassNames.colorPanel], itemPanel);

    itemDetailsHolder = initializeElement(htmlDiv, itemDetailsHolder, [appClassNames.detailsHolder], itemPanel);
    tradeMark = initializeElement(htmlSpan, tradeMark, [appClassNames.tradeMark], itemDetailsHolder);
    itemName = initializeElement(htmlSpan, itemName, [appClassNames.itemName], itemDetailsHolder);
    itemPrice = initializeElement(htmlSpan, itemPrice, [appClassNames.itemPrice], itemDetailsHolder);

    addToCartBtn = initializeElement(htmlButton, addToCartBtn, [appClassNames.addToCartBtn], itemPanel);
    addToCartBtnPrimaryIcon = initializeElement(htmlDiv, addToCartBtnPrimaryIcon, ['fas fa-plus', appClassNames.primaryIcon], addToCartBtn);
    addToCartBtnText = initializeElement(htmlSpan, addToCartBtnText, null, addToCartBtn);

    addObjectText(tradeMark, tradeMarkName);
    addObjectText(itemName, displayName);
    addObjectText(itemPrice, displayPrice);
    addObjectText(addToCartBtnText, productTexts.addToCart);

    for (var i = 0; i < variationResult[0].length; i++) {
        colorBox = initializeElement(htmlDiv, colorBox, i == 0 ? [appClassNames.colorBox, appClassNames.active] : [appClassNames.colorBox], colorPanel, false, variationResult[0][i].DisplayValue);
        color = initializeElement(htmlDiv, color, [appClassNames.color], colorBox);

        addObjectAttribute(colorBox, dataVariationID, variationResult[0][i].VariationID);
        addObjectAttribute(colorBox, dataImageURI, variationResult[0][i].Image);

        $(colorBox).css({
            '-webkit-animation-delay': (i * 0.1) + 's',
            '-moz-animation-delay': (i * 0.1) + 's',
            '-o-animation-delay': (i * 0.1) + 's',
            'animation-delay': (i * 0.1) + 's'
        });

        $(color).css({
            'background-color': variationResult[0][i].Hex
        });

        $(colorBox).unbind(appEvents.click).on(appEvents.click, function () {
            if (currentSelectedVariation != $(this).attr(attributePrefix + dataVariationID)) {
                currentSelectedVariation = $(this).attr(attributePrefix + dataVariationID);
                $(colorPanel).children().removeClass(appClassNames.active);
                $(this).addClass(appClassNames.active);
                $(itemImg).css({
                    '-opacity': '0'
                });
                $(itemImgLoader).css({
                    'display':'block'
                });
                $(itemImg).attr('src', $(this).attr(attributePrefix + dataImageURI));
                $(itemImg).on('load', function () {
                    setTimeout(function () {
                        $(itemImg).css({
                            '-opacity': '1'
                        });
                        $(itemImgLoader).css({
                            'display': ''
                        });
                    }, 100);
                });
            }
        });
    }

    $(colorPanel).children().eq(0).trigger(appEvents.click);
}