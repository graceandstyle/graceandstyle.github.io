import React, { useEffect, useState, useRef, useMemo } from 'react';
import Sizes from './Sizes';
import { useCart } from "../cartContext"
const baseUrl = process.env.REACT_APP_API_BASE_URL;

function RenderVariants({ i, currentVariationID, handleClick, VariationID, DisplayValue, Hex, Image }) {
    return (
        <div className={ currentVariationID === VariationID ? 
                'colorbox addtooltip active' :
                'colorbox addtooltip' }
            style={{animationDelay: `0.${1 * i}s`}}
            onClick={() => handleClick(VariationID, baseUrl + Image, Hex)}>
            <div className="tooltip addshadow">
                <div></div>
                <span>{DisplayValue}</span>
            </div>
            <div className="color" style={{backgroundColor: `${Hex}`}}></div>
        </div>
    );
}

export default function Item(){
    const { 
        cart,
        currentCategoryID,
        currentItemID,
        currentSizeID,
        currentVariationID,
        currentVariationColor,
        filteredItem,
        filteredSize,
        cartDispatch,
        cartIsToggledDispatch,
        cartIsVisibleDispatch,
        currentSizeIDDispatch,
        currentVariationIDDispatch,
        currentVariationColorDispatch,
        filteredVariationDispatch,
        productDispatch,
        setStockDispatch
    } = useCart();
    const prevVariationIDRef = useRef('');
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgURL, setImgURL] = useState('');

    const numItemsInCart = useMemo(
        () => cart.reduce((total, item) => total + item.quantity, 0),
        [cart]
    );

    const currentItemInCart = useMemo(
        () => cart.filter((p) => p.currentSizeID === currentSizeID), [cart, currentSizeID]
    );

    function  handleUpdate(variationID, imgURL, hex) {
        if(prevVariationIDRef.current !== variationID) {
            currentVariationIDDispatch({type:"select", variation: variationID });
            currentVariationColorDispatch({type:"select", variation: hex });
            filteredVariationDispatch({type:"filter", filteredItem, variationID });
            currentSizeIDDispatch({type:"reset", variationID });
            setImgURL(imgURL);
            setImgLoaded(false);
            prevVariationIDRef.current = variationID;
        }
    }

    useEffect(() => {
        if(filteredItem && filteredItem.length > 0 && !currentVariationID){
            handleUpdate(filteredItem[0].Variations[0].VariationID,
                baseUrl + filteredItem[0].Variations[0].Image,
                filteredItem[0].Variations[0].Hex);
        }
    },);

    function addToCart(){
        cartDispatch({type:"add", 
            imgURL, 
            hex : currentVariationColor, 
            currentCategoryID, 
            currentItemID, 
            currentVariationID, 
            currentSizeID,
            name: filteredItem[0].DisplayValue,
            price: filteredItem[0].Price,
            size: filteredSize[0].DisplayValue });
        productDispatch({type:"updatecartquantity", 
            currentCategoryID,
            currentItemID,
            currentVariationID,
            currentSizeID,
            currentStock: filteredSize[0].Stock,
            quantity: 1 });
        setStockDispatch({type:"stockupdated"});
    }

    function toggleCart(toggleSwitch){
        if(numItemsInCart !== 0){
            cartIsToggledDispatch({type:"toggle", toggle: toggleSwitch });
            cartIsVisibleDispatch({type:"toggle", toggle: toggleSwitch });
        }
    }

    return (
        <section className={ filteredSize.length && filteredSize[0].Stock > 0
            ? 'itempanel' : 'itempanel itempanelmarginbottom'}>
            <div className="imgholder">
                <div style={imgLoaded? {opacity: 0} : {}}>
                    <div className="fas fa-spinner fa-spin"></div>
                </div>
                {
                    filteredItem && filteredItem.length > 0 &&
                    <img src={imgURL}
                        style={imgLoaded ? {opacity: 1} : {}}
                        alt={filteredItem[0].DisplayValue}
                        onLoad={() => setImgLoaded(true)} />
                }
            </div>
            <div className="colorpanel">
                {   filteredItem && filteredItem.length > 0 && filteredItem[0].Variations.map((p, i) => {
                    return (
                        <RenderVariants key={p.VariationID}
                        i={i} handleClick={handleUpdate}
                        currentVariationID = { currentVariationID }
                        {...p} />
                    )
                })}
            </div>
            <Sizes />
            <div className="detailsholder">
                <span className="trademark">GRACE &amp;STYLE</span>
                <span className="itemname">{filteredItem && filteredItem.length > 0 && filteredItem[0].DisplayValue}</span>
                <span className="itemprice">{filteredItem && filteredItem.length > 0 && filteredItem[0].Price}</span>
            </div>
            {
                currentItemInCart && currentItemInCart.length > 0 &&  currentItemInCart[0].quantity > 0 &&
                <div className="currentitemincart"
                    onClick={() => toggleCart(true) }>
                    {
                        (filteredSize.length && filteredSize[0].Stock < 0) &&
                        <div className="fas fa-exclamation-triangle"></div>
                    }
                    <div className="fas fa-shopping-bag"></div>
                    <span>{currentItemInCart[0].quantity}</span>
                </div>
            }
            {
                filteredSize.length && filteredSize[0].Stock > 0 ?
                <button className="addtocartbtn"
                    onClick={() => addToCart() }>
                    <div className="fas fa-plus primaryicon"></div>
                    <span>ADD TO CART</span>
                </button> :
                <button className="addtocartbtn outofstock">
                    <div className="fas fa-ban primaryicon"></div>
                    <span>OUT OF STOCK</span>
                    <div className="note">
                        {
                            (currentItemInCart && currentItemInCart.length > 0 &&  currentItemInCart[0].quantity > 0) ?
                            ((filteredSize.length && filteredSize[0].Stock < 0) ?
                            'The selected size is currently unavailable. Please remove it from your cart.' : 
                            'You have reached the maximum quantity available for this item.') :
                            'The selected size is currently unavailable. Please choose a different size or different item.'
                        }</div>
                </button>
            }
            
        </section>
    );
}