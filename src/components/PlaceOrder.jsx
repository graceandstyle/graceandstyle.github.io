import React from 'react';
import useFetch from '../services/useFetch';
import { useCart } from "../cartContext";
const facebookUrl = process.env.REACT_APP_FACEBOOK_PAGE_URL;
const instagramUrl = process.env.REACT_APP_INSTAGRAM_PAGE_URL;

export default function PlaceOrder() {
    const {
        orderDetails
    } = useCart();
    console.log(orderDetails);
    const { data, error, loading } = useFetch('GraceNStyle/PlaceOrder', 'post', orderDetails);

    return (
        <section className="placeorderpanel">
            <div className="placeordermodal">
                <div className="inner">
                    {
                        loading ? 
                        <>
                            <div className="fas fa-edit info"></div>
                            <span className="message">Placing your order</span>
                            <span className="submessage">Please wait</span>
                            <div className="fas fa-spinner fa-spin"></div>
                        </>
                        :
                        data === 'OK' ? 
                        <>
                            <div className="fas fa-check-circle success"></div>
                            <span className="message">Thank you for your purchase</span>
                            <span className="submessage">We will let you know the status of your order through the provided contact number or email address</span>
                            <button>ORDER AGAIN</button>
                        </>
                        :
                        (data !== 'OK' || error) ?
                        <>
                            <div className="fas fa-times-circle error"></div>
                            <span className="message">Something went wrong</span>
                            <span className="submessage">Please send us a message through our social media pages.</span>
                            <div className="socialmediapanel">
                                <a href={facebookUrl} rel="noreferrer" target="_blank">
                                    <div className="fab fa-facebook-square"></div>
                                </a>
                                <a href={instagramUrl} rel="noreferrer" target="_blank">
                                    <div className="fab fa-instagram-square"></div>
                                </a>
                            </div>
                        </>
                        :
                        <></>
                    }
                </div>
            </div>
        </section>
    );
}