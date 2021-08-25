import Icon from '../images/ms-icon-150x150.png';
import React from 'react';

export default function Loader() {
    return (
        <div className="loaderdiv">
            <div className="loadercontainer">
                <img src={Icon} alt="Grace-Style-Logo"></img>
                <div className="fas fa-spinner fa-spin"></div>
            </div>
        </div>
    );
}