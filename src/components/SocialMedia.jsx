import React from 'react';

const facebookUrl = process.env.REACT_APP_FACEBOOK_PAGE_URL;
const instagramUrl = process.env.REACT_APP_INSTAGRAM_PAGE_URL;

export default function SocialMedia() {
    return(
        <section className="socialmediapanel">
            <a href={facebookUrl} rel="noreferrer" target="_blank">
                <div className="fab fa-facebook-square"></div>
            </a>
            <a href={instagramUrl} rel="noreferrer" target="_blank">
                <div className="fab fa-instagram-square"></div>
            </a>
        </section>
    )
};