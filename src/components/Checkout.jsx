import React, { useState, useMemo, useRef } from 'react';
import { useCart } from "../cartContext";
const qrUrl = process.env.REACT_APP_QR_URL;

const emptyCustomerInfo = {
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    address: ""
};

export default function Checkout() {
    const {
        cart,
        checkoutIsToggled,
        checkoutIsVisible,
        cartIsToggledDispatch,
        cartIsVisibleDispatch,
        checkoutIsToggledDispatch,
        checkoutIsVisibleDispatch,
        isOrderPlacedDispatch,
        orderDetailsDispatch
    } = useCart();

    const [customerInfo, setCustomerInfo] = useState(emptyCustomerInfo);
    const [validImage, setValidImage] = useState(true);

    const currentTotalPrice = useMemo(
        () => cart.reduce((total, item) => total + (item.quantity * parseFloat(item.price.replace(/[^0-9]/g, ''))), 0),
        [cart]
    );

    const hasError = (customerInfo.firstName.split(' ').join('').length === 0 ||
                    customerInfo.lastName.split(' ').join('').length < 2 ||
                    customerInfo.contactNumber.split(' ').join('').length < 7 ||
                    customerInfo.email.split(' ').join('').length < 5 ||
                    customerInfo.address.split(' ').join('').length < 10);

    const fileField = useRef(null);

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

    function handleChange(e) {
        e.persist();
        setCustomerInfo((curCustomer) => {
            return {
            ...curCustomer,
            [e.target.id]: e.target.value,
            }
        });
        setValidImage(true);
    }

    function uploadReceipt() {
        if(!hasError){
            fileField.current.click();
        }
    }

    function getFileThumbnailByExtension(fileExtension) {
        switch (fileExtension) {
            case 'bmp':
            case 'gif':
            case 'jpeg':
            case 'jpg':
            case 'png':
            case 'tif':
            case 'tiff':
                return true;
            default:
                return false;
        }
    }

    function validateTotalFileSize(fileSize) {
        if(fileSize <= 5242880){
            return true;
        }
        return false;
    }

    function handleChangeFile(event) {
        if(!hasError){
            const file = event.target.files[0];
    
            if(getFileThumbnailByExtension(file.name.split('.').pop().toLowerCase()) &&
                validateTotalFileSize(file.size)){
                setValidImage(true);
                const orderDetails = new FormData();
                orderDetails.append("customerInfo", JSON.stringify(customerInfo));
                orderDetails.append("cart", JSON.stringify(cart));
                orderDetails.append("file", file);
                orderDetailsDispatch({type:"addorder", orderDetails: orderDetails });
                isOrderPlacedDispatch({type:"toggle", toggle: true });
            } else {
                setValidImage(false);
            }
        }
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
                            <div className="notice">
                                <ul>
                                    <li>The following information will be provided to LBC for delivery.</li>
                                    <li>Shipping fee is not included on the total price of the item/s.</li>
                                    <li>Shipping fee will be paid by the customer upon pick-up on the nearest/preferred LBC branch.</li>
                                    <li>The customer will have to upload the proof of payment below.</li>
                                </ul>
                            </div>
                            <div className="field">
                                <span>Click the QR Code and scan via GCASH App to pay:</span>
                                <a href={qrUrl}
                                    rel="noreferrer" target="_blank">
                                    <img src={qrUrl} 
                                    alt="GCAHSQR" />
                                </a>
                            </div>
                            <div className="field">
                                <span>First Name:</span>
                                <input
                                    id="firstName" 
                                    type="text"
                                    placeholder="Juan" 
                                    value={customerInfo.firstName}
                                    onChange={handleChange}
                                    autoComplete={'' + Math.random()}></input>
                            </div>
                            <div className="field">
                                <span>Last Name:</span>
                                <input
                                    id="lastName" 
                                    type="text"
                                    placeholder="Dela Cruz" 
                                    value={customerInfo.lastName}
                                    onChange={handleChange}
                                    autoComplete={'' + Math.random()}></input>
                            </div>
                            <div className="field">
                                <span>Contact Number:</span>
                                <input
                                    id="contactNumber" 
                                    type="text"
                                    placeholder="09876543210" 
                                    value={customerInfo.contactNumber}
                                    onChange={handleChange}
                                    autoComplete={'' + Math.random()}></input>
                            </div>
                            <div className="field">
                                <span>Email:</span>
                                <input
                                    id="email" 
                                    type="text"
                                    placeholder="juandelacruz@email.com" 
                                    value={customerInfo.email}
                                    onChange={handleChange}
                                    autoComplete={'' + Math.random()}></input>
                            </div>
                            <div className="field">
                                <span>Nearest LBC Branch Address:</span>
                                <input
                                    id="address" 
                                    type="text"
                                    placeholder="2F Waltermart, Balibago, Sta. Rosa, Laguna" 
                                    value={customerInfo.address}
                                    onChange={handleChange}
                                    autoComplete={'' + Math.random()}></input>
                            </div>
                        </div>
                    </div>
                    <footer>
                        {
                            (hasError || !validImage) ?
                            <div className="errorbanner">
                                <div className="fas fa-exclamation-triangle"></div>
                                { !validImage ? 'Please upload an image less than 5 MB' :
                                    'Please fill in all the fields'
                                }
                            </div> : 
                            <div className="successbanner">
                                <div className="fas fa-check"></div>
                                Please upload your proof of payment below
                            </div>
                        }
                        <span>
                            <sup>P</sup>
                            {currentTotalPrice}
                        </span>
                        {
                            <div 
                                className="upload"
                                style={hasError ?
                                {cursor:'not-allowed',opacity:0.5} : {}}
                                onClick={() => uploadReceipt()}>
                                <div className="fas fa-upload"></div>
                                PROOF OF PAYMENT
                                <input type="file" ref={fileField} 
                                    onChange={(e) => handleChangeFile(e)}
                                    onClick={(e) => e.target.value = null} />
                            </div>
                        }
                    </footer>
                </div>
            </section>
        );
    } else { return <></> }
}