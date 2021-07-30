import React, { useMemo } from 'react';
import { useCart } from "../cartContext";

export default function ShoppingBagIcon() {
    const { 
        cart,
        cartHasError,
        cartIsToggledDispatch,
        cartIsVisibleDispatch
     } = useCart();

    function toggleCart(toggleSwitch){
        if(numItemsInCart !== 0){
            cartIsToggledDispatch({type:"toggle", toggle: toggleSwitch });
            cartIsVisibleDispatch({type:"toggle", toggle: toggleSwitch });
        }
    }

    const numItemsInCart = useMemo(
        () => cart.reduce((total, item) => total + item.quantity, 0),
        [cart]
    );

    return (
        <section className={ numItemsInCart !== 0 ?
                'shoppingbagiconpanel' :
                'shoppingbagiconpanel noitem' }
                onClick={() => toggleCart(true) }>
            { numItemsInCart !== 0 && 
                <div className="indicator"
                    style={{ backgroundColor: cartHasError && cartHasError.length > 0 ?
                    '#f00' : '#e6c92a' }}></div> }
            <div className="fas fa-shopping-bag shopicon"></div>
        </section>
    );    
}