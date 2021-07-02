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
            onClick={() => handleClick(VariationID, baseUrl + Image)}>
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
        filteredItem,
        filteredSize,
        cartDispatch,
        currentSizeIDDispatch,
        currentVariationIDDispatch,
        filteredVariationDispatch,
        productDispatch
    } = useCart();
    const prevVariationIDRef = useRef('');
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgURL, setImgURL] = useState('');

    function  handleUpdate(variationID, imgURL) {
        if(prevVariationIDRef.current !== variationID) {
            currentVariationIDDispatch({type:"select", variationID });
            filteredVariationDispatch({type:"filter", filteredItem, variationID });
            currentSizeIDDispatch({type:"reset", variationID });
            setImgURL(imgURL);
            setImgLoaded(false);
            prevVariationIDRef.current = variationID;
        }
    }

    function addToCart(){
        cartDispatch({type:"add", currentSizeID });
        productDispatch({type:"addtocart", currentCategoryID, currentItemID, currentVariationID, currentSizeID, currentStock: filteredSize[0].Stock });
    }

    useEffect(() => {
        if(filteredItem && filteredItem.length > 0 && !currentVariationID){
            handleUpdate(filteredItem[0].Variations[0].VariationID,
                baseUrl + filteredItem[0].Variations[0].Image);
        }
    },);

    const currentItemInCart = useMemo(
        () => cart.filter((p) => p.currentSizeID === currentSizeID), [cart, currentSizeID]
    );

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
            <Sizes />
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
            <div className="detailsholder">
                <span className="trademark">GRACE &amp;STYLE</span>
                <span className="itemname">{filteredItem && filteredItem.length > 0 && filteredItem[0].DisplayValue}</span>
                <span className="itemprice">{filteredItem && filteredItem.length > 0 && filteredItem[0].Price}</span>
            </div>
            {
                currentItemInCart && currentItemInCart.length > 0 &&  currentItemInCart[0].quantity > 0 &&
                <div className="currentitemincart">
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
                            'You have reached the maximum quantity available for this item' :
                            'The selected size is currently unavailable. Please choose a different size or different item.'
                        }</div>
                </button>
            }
            
        </section>
    );
}