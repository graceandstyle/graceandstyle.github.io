import React, { useEffect, useMemo } from 'react';
import { useCart } from "../cartContext";

function RenderItems({ i, imgURL, hex, currentCategoryID, currentItemID, currentVariationID, currentSizeID, name, price, size, quantity, productsFinal }) {

    const { 
        cartDispatch,
        cartHasErrorDispatch,
        productDispatch
    } = useCart();

    const currentStock = productsFinal.filter((p) => p.CategoryID === currentCategoryID)[0].Items.filter((i) => i.ItemID === currentItemID)[0].Variations.filter((v) => v.VariationID === currentVariationID)[0].Sizes.filter((s) => s.SizeID === currentSizeID)[0].Stock;

    function addToCart(){
        if(currentStock > 0) {
            cartDispatch({type:"add", 
                imgURL, 
                hex, 
                currentCategoryID, 
                currentItemID, 
                currentVariationID, 
                currentSizeID,
                name,
                price,
                size 
            });
            productDispatch({type:"updatecartquantity", 
                currentCategoryID,
                currentItemID,
                currentVariationID,
                currentSizeID,
                currentStock: currentStock - 1
            });
        }
    }

    function removeFromCart(){
        cartDispatch({type:"remove", 
            currentSizeID });
        productDispatch({type:"updatecartquantity", 
            currentCategoryID,
            currentItemID,
            currentVariationID,
            currentSizeID,
            currentStock: currentStock + quantity
        });
        cartHasErrorDispatch({type:"remove", 
            currentSizeID });
    }

    function subtractFromCart(){
        cartDispatch({type:"subtract", 
            currentSizeID });
        productDispatch({type:"updatecartquantity", 
            currentCategoryID,
            currentItemID,
            currentVariationID,
            currentSizeID,
            currentStock: currentStock + 1
        });
    }

    useEffect(() => {
        if(currentStock < 0){
            cartHasErrorDispatch({type: "addError", currentSizeID });
        }
    }, [currentStock, cartHasErrorDispatch, currentSizeID]);

    return (
        <div className="item">
            <div className="imgholder">
                <div className="bg" style={{backgroundColor: hex}}>
                    <div className="overlay">
                        <img src={imgURL} alt={name}/>
                    </div>
                </div>
            </div>
            <div className="detailsholder">
                <div className="details">
                    <span className="name">{name}</span>
                    <span className="price">
                        <sup>P</sup>
                        {parseFloat(price.replace(/[^0-9]/g, '')) * quantity}
                    </span>
                    <span className="subdetails">Price: {price}</span>
                    <span className="subdetails">Size: {size}</span>
                    {
                        (currentStock < 0) &&
                        <span className="note">
                            The selected size is currently unavailable.<br/>Please remove it from your cart.
                        </span>
                    }
                </div>
                <div className="quantitholder">
                    {
                        (currentStock < 0) &&
                        <div className="alert">
                            <div className="fas fa-exclamation-triangle"></div>
                        </div>
                    }
                    {
                        (currentStock >= 0) && 
                        <div className="editqty"
                            style={{ 
                                opacity: currentStock > 0 ? 1 : 0.25
                            }}
                            onClick={() => addToCart()}>
                            <div className="fas fa-plus"></div>
                        </div>
                    }
                    <span className="quantity">{quantity}</span>
                    {
                        (currentStock < 0) ?
                        <div className="editqty"
                            onClick={() => removeFromCart()}>
                            <div className="fas fa-trash"></div>
                        </div> : 
                        (
                            (quantity > 1) ?
                                <div className="editqty"
                                onClick={() => subtractFromCart()}>
                                    <div className="fas fa-minus"></div>
                                </div>
                            : <div className="editqty"
                                onClick={() => removeFromCart()}>
                                <div className="fas fa-trash"></div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default function Cart() {
    const { 
        cart,
        cartHasError,
        cartIsToggled,
        cartIsVisible,
        productsFinal,
        cartIsToggledDispatch,
        cartIsVisibleDispatch,
        checkoutIsToggledDispatch,
        checkoutIsVisibleDispatch,
    } = useCart();

    function toggleCart(){
        cartIsVisibleDispatch({type:"toggle", toggle: false });
        setTimeout(function() {
            cartIsToggledDispatch({type:"toggle", toggle: false });
        }, 300);
    }

    function toggleCheckout(){
        if(numItemsInCart !== 0){
            toggleCart();
            setTimeout(function() {
                checkoutIsToggledDispatch({type:"toggle", toggle: true });
                checkoutIsVisibleDispatch({type:"toggle", toggle: true });
            }, 300);
        }
    }

    const numItemsInCart = useMemo(
        () => cart.reduce((total, item) => total + item.quantity, 0),
        [cart]
    );

    const currentTotalPrice = useMemo(
        () => cart.reduce((total, item) => total + (item.quantity * parseFloat(item.price.replace(/[^0-9]/g, ''))), 0),
        [cart]
    );

    if(cartIsToggled){
        return (
            <section className={cartIsVisible ? 'cartpanel showcartpanel' : 'cartpanel hidecartpanel'}>
                <div className={cartIsVisible ? 'cartmodal showcartmodal' : 'cartmodal hidecartmodal'}>
                    <header>
                        <span><div className="fas fa-shopping-bag"></div>My Basket <span>{numItemsInCart}</span></span>
                        <div className="closebtn"
                            onClick={() => toggleCart(false)}>
                            <div className="fas fa-times"></div>
                        </div>
                    </header>
                    <div className="body">
                        <div className="innerbody">
                            {
                                cart && cart.length > 0 && cart.map((p, i) => {
                                    return (
                                        <RenderItems key={p.currentSizeID}
                                        i={i}
                                        {...p}
                                        productsFinal={productsFinal}  />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <footer>
                        {
                            cartHasError.length > 0 &&
                            <div className="errorbanner">
                                <div className="fas fa-exclamation-triangle"></div>
                                Please check your basket
                            </div>
                        }
                        <span>
                            <sup>P</sup>
                            {currentTotalPrice}
                        </span>
                        {
                            numItemsInCart > 0 &&
                            <button style={(cartHasError.length > 0) ?
                                {cursor:'not-allowed',opacity:0.5} : {}}
                                onClick={() => toggleCheckout(false)}>
                                <div className={(cartHasError.length > 0) ? 'fas fa-ban' : 'fas fa-check'}></div>
                                CHECK OUT
                            </button>
                        }
                    </footer>
                </div>
            </section>
        );
    } else { return <></> }
}