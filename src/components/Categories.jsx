import React, { useRef, useEffect, useState } from 'react';
import { useCart } from "../cartContext";

function CategoryNames({currentCategoryID, i, handleClick, CategoryID, DisplayValue}){
    return (
        <span className={ currentCategoryID === CategoryID ? 'active' : '' }
        style={{animationDelay: `0.${1 * i}s`}}
        onClick={() => handleClick(CategoryID)}
        >{DisplayValue}</span>
    );
}

export default function Categories() {
    const { 
        productsFinal,
        currentCategoryIDDispatch,
        filteredCategoryDispatch,
        currentItemIDDispatch
    } = useCart();
    const prevCategoryIDRef = useRef('');
    const [selectedCategoryID, setSelectedCategoryID] = useState('');

    function handleUpdate(categoryID){
        if(prevCategoryIDRef.current !== categoryID) {
            currentCategoryIDDispatch({type:"select", categoryID });
            filteredCategoryDispatch({type:"filter", productsFinal, categoryID });
            currentItemIDDispatch({type:"reset" });
            setSelectedCategoryID(categoryID);
            prevCategoryIDRef.current = categoryID;
        } 
    }

    useEffect(() => {
        if(!selectedCategoryID){
            handleUpdate(productsFinal[0].CategoryID);
        }
    },);

    return (
        <section className="categorypanel">
            <div>
                {productsFinal.map((p, i) => {
                    return (
                        <CategoryNames key={p.CategoryID}
                            currentCategoryID={selectedCategoryID}
                            i={i} handleClick={handleUpdate} {...p} 
                        />
                    )
                })}
            </div>
            <select value={selectedCategoryID} 
                onChange={(e) => {
                    e.persist();
                    handleUpdate(e.target.value)
                }}>
                {productsFinal.map((p, i) => {
                    return (
                        <option key={p.CategoryID} value={p.CategoryID}>{p.DisplayValue}</option>
                    )
                })}
            </select>
            <div className="fas fa-chevron-circle-down dropdownicon"></div>
        </section>
    );
}