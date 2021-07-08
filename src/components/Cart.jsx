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
                    <span className="price">{price}</span>
                    <span className="size">Size: {size}</span>
                </div>
                <div className="quantitholder">
                    {
                        currentStock > 0 && <div className="editqty">
                            <div className="fas fa-plus"></div>
                        </div>
                    }
                    
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
                    <span>My Cart ({numItemsInCart})</span>
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

                        {/* <div className="item">
                            <div className="imgholder">
                                <div className="bg">
                                    <div className="overlay">
                                        <img src="http://pikarom.com/Content/Images/Products/BIRKEN/GS005BKBLUE.png" alt="GS005BK"/>
                                    </div>
                                </div>
                            </div>
                            <div className="detailsholder">
                                <div className="details">
                                    <span className="name">GS005BK</span>
                                    <span className="price">P 300</span>
                                    <span className="size">Size: 7</span>
                                </div>
                                <div className="quantitholder">
                                    <div className="editqty">
                                        <div className="fas fa-plus"></div>
                                    </div>
                                    <span className="quantity">1</span>
                                    <div className="editqty">
                                        <div className="fas fa-minus"></div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}