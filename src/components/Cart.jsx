import React from 'react';

export default function Cart() {
    return (
        <section className="cartpanel">
            <div className="cartmodal">
                <header>
                    <span>My Cart</span>
                    <div className="closebtn">
                        <div className="fas fa-times"></div>
                    </div>
                </header>
                <div className="body">
                    <div className="innerbody">
                        <div className="item">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}