import React, { useMemo } from 'react';
import { useCart } from "../cartContext";

export default function ShoppingBagIcon() {
    const { cart } = useCart();

    const numItemsInCart = useMemo(
        () => cart.reduce((total, item) => total + item.quantity, 0),
        [cart]
    );

    return (
        <section className={ numItemsInCart === 0 ?
                'shoppingbagiconpanel noitem' :
                'shoppingbagiconpanel' }>
            { numItemsInCart !== 0 ? <div className="indicator"></div> : <></> }
            <div className="fas fa-shopping-bag shopicon"></div>
        </section>
    );    
}