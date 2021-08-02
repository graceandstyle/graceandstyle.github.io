import React from 'react';
import { useCart } from "../cartContext";

export default function Cart() {
    const {
        checkoutIsToggled,
        checkoutIsVisible,
        cartIsToggledDispatch,
        cartIsVisibleDispatch,
        checkoutIsToggledDispatch,
        checkoutIsVisibleDispatch
    } = useCart();

    function toggleCheckout(){
        checkoutIsVisibleDispatch({type:"toggle", toggle: false });
        setTimeout(function() {
            checkoutIsToggledDispatch({type:"toggle", toggle: false });
        }, 300);
    }

    function toggleCart() {
        toggleCheckout();
        setTimeout(function() {
            cartIsToggledDispatch({type:"toggle", toggle: true });
            cartIsVisibleDispatch({type:"toggle", toggle: true });
        }, 300);
    }

    if(checkoutIsToggled){
        return (
            <section className={checkoutIsVisible ? 'checkoutpanel showcheckoutpanel' : 'checkoutpanel hidecheckoutpanel'}>
                <div className={checkoutIsVisible ? 'checkoutmodal showcheckoutmodal' : 'checkoutmodal hidecheckoutmodal'}>
                    <header>
                        <span><div className="fas fa-money-check-alt"></div>Checkout</span>
                        <div className="closebtn"
                            onClick={() => toggleCart(false)}>
                            <div className="fas fa-times"></div>
                        </div>
                    </header>
                    <div className="body">
                        <div className="innerbody">
                            
                        </div>
                    </div>
                    {/* <footer>
                        {
                            cartHasError.length > 0 &&
                            <div className="errorbanner">
                                <div class="fas fa-exclamation-triangle"></div>
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
                                onClick={() => toggleCart(false)}>
                                <div className="fas fa-ban"></div>
                                CHECK OUT
                            </button>
                        }
                    </footer> */}
                </div>
            </section>
        );
    } else { return <></> }
}