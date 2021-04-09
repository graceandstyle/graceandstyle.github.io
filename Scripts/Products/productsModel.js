var categoryItem;
var categoryOption;
var categorySelect;
var dropDownIcon;
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
const dataImageURI = 'imageuri';
const dataItemId = 'itemid';
const dataItemName = 'itemname';
const dataItemPrice = 'itemprice';
const dataVariationID = 'variationid';

const productAPIExtensions = {
    'getProducts': 'GetProducts',
}
Object.freeze(productAPIExtensions);