import React, { useMemo } from 'react';
import { useCart } from "../cartContext";

function RenderItems({ i, imgURL, hex, currentCategoryID, currentItemID, currentVariationID, currentSizeID, name, price, size, quantity, productsFinal }) {

    const currentStock = productsFinal.filter((p) => p.CategoryID === currentCategoryID)[0].Items.filter((i) => i.ItemID === currentItemID)[0].Variations.filter((v) => v.VariationID === currentVariationID)[0].Sizes.filter((s) => s.SizeID === currentSizeID)[0].Stock;

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
                    <span className="price">P {parseInt(price.replace(/[^0-9]/g, '')) * quantity}</span>
                    <span className="subdetails">Price: {price}</span>
                    <span className="subdetails">Size: {size}</span>
                </div>
                <div className="quantitholder">
                    <div className="editqty" style={{ opacity: currentStock > 0 ? 1 : 0.25 }}>
                        <div className="fas fa-plus"></div>
                    </div>
                    <span className="quantity">{quantity}</span>
                    <div className="editqty">
                        <div className="fas fa-minus"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Cart() {
    const { 
        cart,
        productsFinal
    } = useCart();

    const numItemsInCart = useMemo(
        () => cart.reduce((total, item) => total + item.quantity, 0),
        [cart]
    );

    return (
        <section className="cartpanel">
            <div className="cartmodal">
                <header>
                    <span><div className="fas fa-shopping-bag"></div>My Cart <span>{numItemsInCart}</span></span>
                    <div className="closebtn">
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
                                    productsFinal={productsFinal} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}