import React, {useRef, useEffect } from 'react';

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

export default function Sizes({filteredVariation, currentSizeID, updateCurrentSizeID}) {
    const prevSizeIDRef = useRef('');

    function  handleClick(sizeID) {
        if(prevSizeIDRef.current !== sizeID) {
            updateCurrentSizeID(sizeID);
            prevSizeIDRef.current = sizeID;
        }
    }

    useEffect(() => {
        if(!currentSizeID){
            updateCurrentSizeID(filteredVariation[0].Sizes.filter((p) => p.Stock > 0)[0].SizeID);
            prevSizeIDRef.current = filteredVariation[0].Sizes.filter((p) => p.Stock > 0)[0].SizeID;
        }
    }, [currentSizeID, updateCurrentSizeID, filteredVariation]);

    return (
        <div className="sizepanel">
            {filteredVariation[0].Sizes.map((p, i) => {
                return (
                    <RenderSizes key={p.SizeID}
                    i={i}
                    currentSizeID={currentSizeID}
                    handleClick={handleClick}
                    {...p} />
                )
            })}
        </div>
    ); 
}