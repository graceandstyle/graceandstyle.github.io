const attributePrefix = 'data-';
const attributePlaceHolder = 'placeholder';
const classPrefix = '.';
const mainDiv = $(htmlBody).find('.main');
const malihuTheme = 'minimal';
const urlDelimiter = '/';

var currentLink;
var toolTip;
var toolTipTail;
var toolTipText;
var usingMalihu = false;
var url = window.location.href;
var arr = url.split(urlDelimiter);
var hostUrl = arr[0] + urlDelimiter + urlDelimiter + arr[2] + urlDelimiter;
var xhr;

const appEvents = {
    'blur': 'blur',
    'click': 'click',
    'dragover':'dragover',
    'drop':'drop',
    'focus': 'focus',
    'mouseEnter': 'mouseenter',
    'mouseMove':'mousemove',
    'mouseLeave': 'mouseleave',
    'keyDown': 'keydown',
    'keyUp': 'keyup',
    'resize':'resize',
    'scroll': 'scroll',
    'touchEnd':'touchend',
    'touchStart':'touchstart',
}
Object.freeze(appEvents);

const frameWorkClassNames = {
    'addShadow': 'addshadow',
    'addToolTip': 'addtooltip',
    'toolTip':'tooltip'
}
Object.freeze(frameWorkClassNames);

const elementTypes = {
    'input':'input'
}
Object.freeze(elementTypes);

const httpVerbs = {
    'get': 'get',
    'post':'post'
}
Object.freeze(httpVerbs);

const dataTypes = {
    'json': 'json',
    'text':'text'
}
Object.freeze(dataTypes);