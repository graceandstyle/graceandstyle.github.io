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
var thumbImg;
var thumbImgHolder;
var thumbImgHolderUnderlay;
var thumbName;
var thumbPrice;

var currentSelectedCategory;
var currentSelectedColor;
var currentSelectedImg;
var currentSelectedItem;
var currentSelectedVariationID;

const baseURI = 'http://pikarom.com/GraceNStyle/';
const dataCategoryId = 'categoryid';
const dataImageURI = 'imageuri';
const dataItemId = 'itemid';
const dataItemColor = 'itemcolor';
const dataItemName = 'itemname';
const dataItemPrice = 'itemprice';
const dataVariationID = 'variationid';

const productAPIExtensions = {
    'getProducts': 'GetProducts',
}
Object.freeze(productAPIExtensions);

const productTexts = {
    'addToCart': 'ADD TO CART',
    'sizes':'Sizes'
}
Object.freeze(productTexts);
