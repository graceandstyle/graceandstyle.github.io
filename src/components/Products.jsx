import React, { useEffect, useState, useRef } from 'react';
const baseUrl = process.env.REACT_APP_API_BASE_URL;

function RenderProducts({ i, currentItemID, handleClick, DisplayValue, ItemID, Price, Thumbnail, ThumbnailHex }) {
    const [imgLoaded, setImgLoaded] = useState(false);
    
    return (
        <div className={ currentItemID === ItemID ? 'listitem active' : 'listitem' }
            style={{ animationDelay: `0.${1 * i}s`}}
            onClick={() => handleClick(ItemID)}
            >
            <div className="imgholderunderlay" style={{ backgroundColor: `${ThumbnailHex}` }}></div>
            <div className="imgholder">
                <div style={imgLoaded? {opacity: 0} : {}}>
                    <div className="fas fa-spinner fa-spin"></div>
                </div>
                <img src={baseUrl + Thumbnail}
                    style={imgLoaded? {opacity: 1} : {}}
                    alt={DisplayValue}
                    onLoad={() => setImgLoaded(true)} />
            </div>
            <div className="detailsholder">
                <span className="name">{DisplayValue}</span>
                <span className="price">{Price}</span>
            </div>
        </div>
    );
}

export default function Products({ filteredProducts, currentItemID, updateCurrentItemID }) {
    const prevItemIDRef = useRef('');

    function  handleClick(itemID) {
        if(prevItemIDRef.current !== itemID){
            updateCurrentItemID(itemID);
            prevItemIDRef.current = itemID;
        }
    }

    useEffect(() => {
        if(!currentItemID){
            updateCurrentItemID(filteredProducts[0].Items[0].ItemID);
            prevItemIDRef.current = filteredProducts[0].Items[0].ItemID;
        }
    },);

    return (
        <section className="productlistpanel">
            {filteredProducts[0].Items.map((p, i) => {
                return (
                    <RenderProducts key={p.ItemID}
                    currentItemID={currentItemID}
                    i={i}
                    handleClick={handleClick}
                    {...p} />
                )
            })}
        </section>
    );
}