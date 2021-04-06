function initializeCategories() {
    categorySelect = initializeElement(htmlSelect, categorySelect, null, categoryPanel);

    for (var i = 0; i < products.length; i++) {
        categoryItem = initializeElement(htmlSpan, categoryItem, i == 0 ? [appClassNames.active] : null, categoryItemHolder);
        addObjectText(categoryItem, products[i].category);
        addObjectAttribute(categoryItem, dataCategoryName, products[i].category);

        $(categoryItem).unbind(appEvents.click).on(appEvents.click, function () {
            selectCategory($(this));
        });

        categoryOption = initializeElement(htmlOption, categoryOption, null, categorySelect);
        addObjectText(categoryOption, products[i].category);
        $(categoryOption).val(products[i].category);
    }

    $(categorySelect).unbind(appEvents.change).on(appEvents.change, function () {
        var catIndex = $(categorySelect)[0].selectedIndex
        selectCategory($(categoryItemHolder).children().eq(catIndex));
    });

    $(categoryItemHolder).children().eq(0).trigger(appEvents.click);
}

function selectCategory(categoryItem) {
    var categoryName = $(categoryItem).attr(attributePrefix + dataCategoryName);
    var queryResult = Enumerable.from(products).where(function (x) { return x.category == categoryName })
        .select(function (x) { return x.items }).toArray();

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

        $(productListItem).css({
            'background-color': queryResult[0][i].thimbnailhex
        });
        $(thumbImg).attr('src', queryResult[0][i].thumbnail);

        addObjectText(thumbName, queryResult[0][i].name);
        addObjectText(thumbPrice, queryResult[0][i].price);
    }
}