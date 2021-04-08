var categoryItem;
var categoryOption;
var categorySelect;
var itemDetailsHolder;
var itemImg;
var itemImgHolder;
var itemName;
var itemPrice;
var tradeMark;
var productListItem;
var products;
var thumbDetailsHolder;
var thumbImg;
var thumbImgHolder;
var thumbImgHolderUnderlay;
var thumbName;
var thumbPrice;

const baseURI = 'http://pikarom.com/GraceNStyle/';
const dataCategoryId = 'categoryid';
const dataItemId = 'itemid';
const dataVariationID = 'variationid';
const dataImageURI = 'imageuri';

const productAPIExtensions = {
    'getProducts': 'GetProducts',
}
Object.freeze(productAPIExtensions);