function initializeCategories() {
    for (var i = 0; i < products.length; i++) {
        categoryItem = initializeElement(htmlSpan, categoryItem, i == 0 ? [appClassNames.active] : null, categoryItemHolder);
        addObjectText(categoryItem, products[i].category);
        addObjectAttribute(categoryItem, dataCategoryName, products[i].category);

        $(categoryItem).unbind(appEvents.click).on(appEvents.click, function (e) {
            selectCategory($(this));
        });
    }

    $(categoryItemHolder).children().eq(0).trigger(appEvents.click);
}

function selectCategory(categoryItem) {
    var categoryName = $(categoryItem).attr(attributePrefix + dataCategoryName);
    var queryResult = Enumerable.from(products).where(function (x) { return x.category == categoryName })
        .select(function (x) { return x.items }).toArray();
    initializeItemThumbnail(queryResult);
}

function initializeItemThumbnail(queryResult) {
    for (var i = 0; i < queryResult.length; i++) {
        console.log(queryResult[i][0].name);
    }
}