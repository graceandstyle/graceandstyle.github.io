import React, { useRef, useEffect } from 'react';

function CategoryNames({currentCategoryID, i, handleClick, CategoryID, DisplayValue}){
    return (
        <span className={ currentCategoryID === CategoryID ? 'active' : '' }
        style={{animationDelay: `0.${1 * i}s`}}
        onClick={() => handleClick(CategoryID)}
        >{DisplayValue}</span>
    );
}

export default function Categories({productsFinal, updateCurrentCategoryID, currentCategoryID}) {
    const prevCategoryIDRef = useRef('');

    function  handleClick(categoryID) {
        if(prevCategoryIDRef.current !== categoryID) {
            updateCurrentCategoryID(categoryID);
            prevCategoryIDRef.current = categoryID;
        }
    }

    function handleChange(e) {
        if(prevCategoryIDRef.current !== e.target.value) {
            e.persist();
            updateCurrentCategoryID(e.target.value);
            prevCategoryIDRef.current = e.target.value;
        }            
    }

    useEffect(() => {
        if(!currentCategoryID){
            updateCurrentCategoryID(productsFinal[0].CategoryID);
            prevCategoryIDRef.current = productsFinal[0].CategoryID;
        }
    },);

    return (
        <section className="categorypanel">
            <div>
                {productsFinal.map((p, i) => {
                    return (
                        <CategoryNames key={p.CategoryID}
                        currentCategoryID={currentCategoryID}
                        i={i}
                        handleClick={handleClick}
                        {...p} />
                    )
                })}
            </div>
            <select
                value={currentCategoryID}
                onChange={handleChange}
                >
                {productsFinal.map((p, i) => {
                    return (
                        <option key={p.CategoryID}
                            value={p.CategoryID}>{p.DisplayValue}</option>
                    )
                })}
            </select>
            <div className="fas fa-chevron-circle-down dropdownicon"></div>
        </section>
    );
}