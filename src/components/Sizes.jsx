import React, {useRef, useEffect, useState } from 'react';
import { useCart } from "../cartContext"

function RenderSizes({ i, DisplayValue, SizeID, currentSizeID, handleClick}) {
    return (
        <div className={ currentSizeID === SizeID ? 
            'active' : '' }
            style={{animationDelay: `0.${1 * i}s`}}
            onClick={() => handleClick(SizeID)}>
            <span>{DisplayValue}</span>
        </div>
    );
}

export default function Sizes() {
    const { 
        currentSizeID,
        filteredVariation,
        currentSizeIDDispatch,
        filteredSizeDispatch
    } = useCart();
    const prevSizeIDRef = useRef('');
    const [selectedSizeID, setSelectedSizeID] = useState('');

    function  handleUpdate(sizeID) {
        if(prevSizeIDRef.current !== sizeID) {
            currentSizeIDDispatch({type:"select", sizeID });
            filteredSizeDispatch({type:"filter", filteredVariation, sizeID })
            setSelectedSizeID(sizeID);
            prevSizeIDRef.current = sizeID;
        }
    }

    useEffect(() => {
        if(filteredVariation && filteredVariation.length > 0 && !currentSizeID){
            handleUpdate(filteredVariation[0].Sizes[0].SizeID);
        }
    },);

    return (
        <div className="sizepanel">
            {filteredVariation && filteredVariation.length > 0 &&
                filteredVariation[0].Sizes.map((p, i) => {
                return (
                    <RenderSizes key={p.SizeID}
                    i={i}
                    currentSizeID={selectedSizeID}
                    handleClick={handleUpdate}
                    {...p} />
                )
            })}
        </div>
    ); 
}