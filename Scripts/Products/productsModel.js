var addToCartBtn;
var addToCartBtnText;
var addToCartBtnPrimaryIcon;
var addToCartDetailsHolder;
var addToCartImg;
var addToCartImgholder;
var addToCartImgHolderUnderlay;
var categoryItem;
var categoryOption;
var categorySelect;
var dropDownIcon;
var itemDetailsHolder;
var itemImg;
var itemImgHolder;
var itemImgLoader;
var itemName;
var itemPrice;
var tradeMark;
var productListItem;
var products;
var thumbDetailsHolder;
var sizeBtn;
var sizeBtnText;
var stockTxt;
var thumbImg;
var thumbImgHolder;
var thumbImgHolderUnderlay;
var thumbName;
var thumbPrice;

var currentSelectedCategory;
var currentSelectedColor;
var currentSelectedImg;
var currentSelectedItem;
var currentSelectedSizeID;
var currentSelectedVariationID;

const baseURI = 'http://pikarom.com/GraceNStyle/';
const dataCategoryId = 'categoryid';
const dataImageURI = 'imageuri';
const dataItemId = 'itemid';
const dataItemColor = 'itemcolor';
const dataItemName = 'itemname';
const dataItemPrice = 'itemprice';
const dataSizeId = 'sizeid';
const dataStock = 'stock'
const dataVariationID = 'variationid';

const productAPIExtensions = {
    'getProducts': 'GetProducts',
}
Object.freeze(productAPIExtensions);

const productTexts = {
    'addToCart': 'ADD TO CART',
    'quantity':'Quantity',
    'sizes': 'Sizes',
    'stock':'Stock'
}
Object.freeze(productTexts);
