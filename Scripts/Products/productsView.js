function initializeCategories(data) {
    products = data;
    categorySelect = initializeElement(htmlSelect, categorySelect, null, categoryPanel);

    for (var i = 0; i < products.length; i++) {
        categoryItem = initializeElement(htmlSpan, categoryItem, i == 0 ? [appClassNames.active] : null, categoryItemHolder);
        addObjectText(categoryItem, products[i].DisplayValue);
        addObjectAttribute(categoryItem, dataCategoryName, products[i].DisplayValue);

        $(categoryItem).css({
            '-webkit-animation-delay': (i * 0.1) + 's',
            '-moz-animation-delay': (i * 0.1) + 's',
            '-o-animation-delay': (i * 0.1) + 's',
            'animation-delay': (i * 0.1) + 's'
        });

        $(categoryItem).unbind(appEvents.click).on(appEvents.click, function () {
            selectCategory($(this));
        });

        categoryOption = initializeElement(htmlOption, categoryOption, null, categorySelect);
        addObjectText(categoryOption, products[i].DisplayValue);
        $(categoryOption).val(products[i].DisplayValue);
    }

    $(categorySelect).unbind(appEvents.change).on(appEvents.change, function () {
        var catIndex = $(categorySelect)[0].selectedIndex
        selectCategory($(categoryItemHolder).children().eq(catIndex));
    });

    $(categoryItemHolder).children().eq(0).trigger(appEvents.click);
}

function selectCategory(categoryItem) {
    var categoryName = $(categoryItem).attr(attributePrefix + dataCategoryName);
    var queryResult = Enumerable.from(products).where(function (x) { return x.DisplayValue == categoryName })
        .select(function (x) { return x.Items }).toArray();
    $(categoryItemHolder).children().removeClass(appClassNames.active);
    $(categoryItem).addClass(appClassNames.active);

    initializeItemThumbnail(queryResult);
}

function initializeItemThumbnail(queryResult) {
    $(productListPanel).children().remove();

    for (var i = 0; i < queryResult[0].length; i++) {
        productListItem = initializeElement(htmlDiv, productListItem, i == 0 ? [appClassNames.listItem, appClassNames.active] : [appClassNames.listItem], productListPanel);
        thumbImgHolder = initializeElement(htmlDiv, thumbImgHolder, [appClassNames.imgHolder], productListItem);
        thumbImg = initializeElement(htmlImg, thumbImg, null, thumbImgHolder);
        thumbDetailsHolder = initializeElement(htmlDiv, thumbDetailsHolder, [appClassNames.detailsHolder], productListItem);
        thumbName = initializeElement(htmlSpan, thumbName, [appClassNames.name], thumbDetailsHolder);
        thumbPrice = initializeElement(htmlSpan, thumbPrice, [appClassNames.price], thumbDetailsHolder);

        $(thumbImgHolder).css({
            'background-color': queryResult[0][i].ThumbnailHex
        });

        $(productListItem).css({
            '-webkit-animation-delay': (i * 0.1) + 's',
            '-moz-animation-delay': (i * 0.1) + 's',
            '-o-animation-delay': (i * 0.1) + 's',
            'animation-delay': (i * 0.1) + 's'
        });

        $(thumbImg).attr('src', queryResult[0][i].Thumbnail);

        addObjectText(thumbName, queryResult[0][i].DisplayValue);
        addObjectText(thumbPrice, queryResult[0][i].Price);
    }
}