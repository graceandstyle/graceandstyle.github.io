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
            <div className="item">
                <div className="imgholder">
                    <div className="bg">
                        <div className="overlay">
                            <img src="http://pikarom.com/Content/Images/Products/BIRKEN/GS005BKBLUE.png" alt="GS005BK"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    );
}