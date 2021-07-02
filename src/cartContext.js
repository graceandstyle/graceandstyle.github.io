import React, { useReducer, useEffect, useContext } from "react";
import cartReducer from "./reducers/cartReducer";
import categoryReducer from "./reducers/categoryReducer";
import itemReducer from "./reducers/itemReducer";
import productReducer from "./reducers/productReducer";
import sizeReducer from "./reducers/sizeReducer";
import variationReducer from "./reducers/variationReducer";
import useFetch from './services/useFetch';

const fallbackProducts = [{"Items":[{"Variations":[{"Sizes":[{"SizeID":"03844ea2-4dcd-4a2a-840c-5386829e8dea","DisplayValue":7,"VariationFK":"06c173c0-f639-4042-b6ce-3f581cdb9504","Stock":2},{"SizeID":"bd156391-8ef5-432b-a8ad-cf1bfc75196f","DisplayValue":8,"VariationFK":"06c173c0-f639-4042-b6ce-3f581cdb9504","Stock":2}],"VariationID":"06c173c0-f639-4042-b6ce-3f581cdb9504","DisplayValue":"Blue","Hex":"#148CA5","Image":"Content/Images/Products/BIRKEN/GS005BKBLUE.png","SortOrder":0,"ItemFK":"11649d13-27f1-474c-90af-b0b6ce07da34"},{"Sizes":[{"SizeID":"6485c9a6-c854-4be4-8a59-65407f179bfc","DisplayValue":7,"VariationFK":"cc527943-f04d-444e-b27c-c75daf4c0a97","Stock":2},{"SizeID":"6f3611db-fe29-429f-80b4-e33e1b73989d","DisplayValue":8,"VariationFK":"cc527943-f04d-444e-b27c-c75daf4c0a97","Stock":2}],"VariationID":"cc527943-f04d-444e-b27c-c75daf4c0a97","DisplayValue":"Pink","Hex":"#D5B8C3","Image":"Content/Images/Products/BIRKEN/GS005BKPINK.png","SortOrder":0,"ItemFK":"11649d13-27f1-474c-90af-b0b6ce07da34"},{"Sizes":[{"SizeID":"6558a5fd-5cab-4134-a16a-d14246b97139","DisplayValue":7,"VariationFK":"819bed4d-a6fe-4c11-a36a-f137f6c9d0b4","Stock":2},{"SizeID":"1609f887-7e2a-4f87-94e7-5905c4ce4f38","DisplayValue":8,"VariationFK":"819bed4d-a6fe-4c11-a36a-f137f6c9d0b4","Stock":2}],"VariationID":"819bed4d-a6fe-4c11-a36a-f137f6c9d0b4","DisplayValue":"White","Hex":"#D8D3D8","Image":"Content/Images/Products/BIRKEN/GS005BKWHITE.png","SortOrder":0,"ItemFK":"11649d13-27f1-474c-90af-b0b6ce07da34"}],"ItemID":"11649d13-27f1-474c-90af-b0b6ce07da34","DisplayValue":"GS005BK","CategoryFK":"ea59670f-ceb9-4c50-8aae-fcd208169091","Price":"P 300","Thumbnail":"Content/Images/Products/BIRKEN/GS005BKBLUE.png","ThumbnailHex":"#148CA5","SortOrder":0}],"CategoryID":"ea59670f-ceb9-4c50-8aae-fcd208169091","DisplayValue":"BIRKEN","SortOrder":0},{"Items":[{"Variations":[{"Sizes":[{"SizeID":"0f9754cd-7f7b-4c6f-b7e8-da06109c42f2","DisplayValue":7,"VariationFK":"55e458e0-d197-4f8b-93c0-fa5b8149557b","Stock":2},{"SizeID":"cb4f97fa-1d7b-4696-b273-5d69d3185705","DisplayValue":8,"VariationFK":"55e458e0-d197-4f8b-93c0-fa5b8149557b","Stock":2}],"VariationID":"55e458e0-d197-4f8b-93c0-fa5b8149557b","DisplayValue":"Beige","Hex":"#EED4CC","Image":"Content/Images/Products/DOLL SHOES/GS001BEIGE.png","SortOrder":0,"ItemFK":"e2552ddc-e264-4923-ab0c-874a258c77b7"},{"Sizes":[{"SizeID":"4a829119-d538-49ac-acd1-a5b7f5c843ed","DisplayValue":7,"VariationFK":"4e068355-11b0-44b9-9d30-6d76e903aa18","Stock":2},{"SizeID":"3e15804e-b834-4641-b744-34a9b6c4a06b","DisplayValue":8,"VariationFK":"4e068355-11b0-44b9-9d30-6d76e903aa18","Stock":2}],"VariationID":"4e068355-11b0-44b9-9d30-6d76e903aa18","DisplayValue":"Black","Hex":"#424136","Image":"Content/Images/Products/DOLL SHOES/GS001BLACK.png","SortOrder":0,"ItemFK":"e2552ddc-e264-4923-ab0c-874a258c77b7"},{"Sizes":[{"SizeID":"fa55469b-603b-431a-b06e-1397d051b486","DisplayValue":7,"VariationFK":"99dd67bf-2fb2-4303-857e-6c72b5d2dc5a","Stock":2},{"SizeID":"5e43f92e-797f-4cd1-95b9-5dc59a0e4522","DisplayValue":8,"VariationFK":"99dd67bf-2fb2-4303-857e-6c72b5d2dc5a","Stock":2}],"VariationID":"99dd67bf-2fb2-4303-857e-6c72b5d2dc5a","DisplayValue":"Black (Alt)","Hex":"#4A4A42","Image":"Content/Images/Products/DOLL SHOES/GS001BLACK1.png","SortOrder":0,"ItemFK":"e2552ddc-e264-4923-ab0c-874a258c77b7"},{"Sizes":[{"SizeID":"46d2ead5-1c96-4790-9582-ee543d6b79b0","DisplayValue":7,"VariationFK":"ca207c4b-4f37-4d91-8ccc-aefcb642460b","Stock":2},{"SizeID":"1d427b6a-fa27-4a44-ac29-5572e2dc136a","DisplayValue":8,"VariationFK":"ca207c4b-4f37-4d91-8ccc-aefcb642460b","Stock":2}],"VariationID":"ca207c4b-4f37-4d91-8ccc-aefcb642460b","DisplayValue":"Tan","Hex":"#B27757","Image":"Content/Images/Products/DOLL SHOES/GS001TAN.png","SortOrder":0,"ItemFK":"e2552ddc-e264-4923-ab0c-874a258c77b7"}],"ItemID":"e2552ddc-e264-4923-ab0c-874a258c77b7","DisplayValue":"GS001","CategoryFK":"854c4d87-3b48-43fc-aba8-ec78d4685979","Price":"P 320","Thumbnail":"Content/Images/Products/DOLL SHOES/GS001BEIGE.png","ThumbnailHex":"#EED4CC","SortOrder":0},{"Variations":[{"Sizes":[{"SizeID":"e8d5760b-319b-4f98-b45a-09540c506296","DisplayValue":7,"VariationFK":"6653e1b0-8465-4e66-9d99-c46b966cf9eb","Stock":2},{"SizeID":"58e88354-22bb-4d61-949a-50893b272c02","DisplayValue":8,"VariationFK":"6653e1b0-8465-4e66-9d99-c46b966cf9eb","Stock":2}],"VariationID":"6653e1b0-8465-4e66-9d99-c46b966cf9eb","DisplayValue":"Nude","Hex":"#E0C3C4","Image":"Content/Images/Products/DOLL SHOES/GSE004CREAM.png","SortOrder":0,"ItemFK":"9db73c51-d5ba-44f7-83bd-e03886e377a5"},{"Sizes":[{"SizeID":"d3403cb7-55de-4e64-87da-9ca8db701ba1","DisplayValue":7,"VariationFK":"6a1041bf-1db5-4c21-b935-630acd5490a2","Stock":2},{"SizeID":"1fdfabe5-6fe2-441d-9305-bb56bce5a0e9","DisplayValue":8,"VariationFK":"6a1041bf-1db5-4c21-b935-630acd5490a2","Stock":2}],"VariationID":"6a1041bf-1db5-4c21-b935-630acd5490a2","DisplayValue":"Gold","Hex":"#A38B6E","Image":"Content/Images/Products/DOLL SHOES/GSE004GOLD.png","SortOrder":0,"ItemFK":"9db73c51-d5ba-44f7-83bd-e03886e377a5"},{"Sizes":[{"SizeID":"a7f5b711-0a4d-4b89-ac0a-9b2f50599b20","DisplayValue":7,"VariationFK":"5af1c0f6-1eba-4431-9141-677dffd8a070","Stock":2},{"SizeID":"ae9af16e-ac99-4110-a2a7-1e1ec28416a9","DisplayValue":8,"VariationFK":"5af1c0f6-1eba-4431-9141-677dffd8a070","Stock":2}],"VariationID":"5af1c0f6-1eba-4431-9141-677dffd8a070","DisplayValue":"Maroon","Hex":"#853A3B","Image":"Content/Images/Products/DOLL SHOES/GSE004MAROON.png","SortOrder":0,"ItemFK":"9db73c51-d5ba-44f7-83bd-e03886e377a5"}],"ItemID":"9db73c51-d5ba-44f7-83bd-e03886e377a5","DisplayValue":"GSE004","CategoryFK":"854c4d87-3b48-43fc-aba8-ec78d4685979","Price":"P 320","Thumbnail":"Content/Images/Products/DOLL SHOES/GSE004CREAM.png","ThumbnailHex":"#E0C3C4","SortOrder":0}],"CategoryID":"854c4d87-3b48-43fc-aba8-ec78d4685979","DisplayValue":"DOLL SHOES","SortOrder":0},{"Items":[{"Variations":[{"Sizes":[{"SizeID":"ce911800-6f4e-477c-82cf-ec97abd5f68f","DisplayValue":7,"VariationFK":"9dd7126d-3990-4417-ab8e-57be7055a04d","Stock":2},{"SizeID":"29b185e6-a563-4c47-bd38-cd89d6ab111d","DisplayValue":8,"VariationFK":"9dd7126d-3990-4417-ab8e-57be7055a04d","Stock":2}],"VariationID":"9dd7126d-3990-4417-ab8e-57be7055a04d","DisplayValue":"Olive Green","Hex":"#7D7B61","Image":"Content/Images/Products/FLATS/GS002GREEN.png","SortOrder":0,"ItemFK":"ce76ba49-d31a-446d-a447-7a73a9cf5e9f"},{"Sizes":[{"SizeID":"5c8d3da6-c951-41e4-b273-67c4d34f323f","DisplayValue":7,"VariationFK":"eb76d638-4d7d-482d-88e8-149482b7cd6d","Stock":2},{"SizeID":"a87f5fa6-d7d5-4106-b529-6534e37b8205","DisplayValue":8,"VariationFK":"eb76d638-4d7d-482d-88e8-149482b7cd6d","Stock":2}],"VariationID":"eb76d638-4d7d-482d-88e8-149482b7cd6d","DisplayValue":"Old Rose","Hex":"#DCB5A9","Image":"Content/Images/Products/FLATS/GS002PINK.png","SortOrder":0,"ItemFK":"ce76ba49-d31a-446d-a447-7a73a9cf5e9f"},{"Sizes":[{"SizeID":"07422048-8c80-4105-a51e-6f6d4f7c3732","DisplayValue":7,"VariationFK":"fe419567-3624-4804-9717-4480631dc912","Stock":2},{"SizeID":"ce4bef79-8fb2-41b6-b051-faeffc62052c","DisplayValue":8,"VariationFK":"fe419567-3624-4804-9717-4480631dc912","Stock":2}],"VariationID":"fe419567-3624-4804-9717-4480631dc912","DisplayValue":"White","Hex":"#DDD1CB","Image":"Content/Images/Products/FLATS/GS002WHITE.png","SortOrder":0,"ItemFK":"ce76ba49-d31a-446d-a447-7a73a9cf5e9f"}],"ItemID":"ce76ba49-d31a-446d-a447-7a73a9cf5e9f","DisplayValue":"GS002","CategoryFK":"418f8b66-68c1-4418-8e2b-8d4223955699","Price":"P 280","Thumbnail":"Content/Images/Products/FLATS/GS002GREEN.png","ThumbnailHex":"#7D7B61","SortOrder":0}],"CategoryID":"418f8b66-68c1-4418-8e2b-8d4223955699","DisplayValue":"FLATS","SortOrder":0},{"Items":[{"Variations":[{"Sizes":[{"SizeID":"a8517f68-ea6e-4865-96df-3099b67256d6","DisplayValue":8,"VariationFK":"a9485049-98cf-43b0-8169-bd27ad5af73b","Stock":2},{"SizeID":"6de13b6c-c5f5-4cf1-80a7-cafe0aacf5a7","DisplayValue":9,"VariationFK":"a9485049-98cf-43b0-8169-bd27ad5af73b","Stock":2}],"VariationID":"a9485049-98cf-43b0-8169-bd27ad5af73b","DisplayValue":"Black","Hex":"#515243","Image":"Content/Images/Products/MEN SLIPPERS/GS003BLACK.png","SortOrder":0,"ItemFK":"ae7f8f2f-be40-4686-9f50-9dc0c9066d3a"},{"Sizes":[{"SizeID":"468b0ee4-4bc2-46dd-9c96-5444d8e0cff5","DisplayValue":8,"VariationFK":"2057ae34-0687-488a-8a20-7862a0595db0","Stock":2},{"SizeID":"c38d8ef2-bbcf-480a-bbd6-c419056a394d","DisplayValue":9,"VariationFK":"2057ae34-0687-488a-8a20-7862a0595db0","Stock":2}],"VariationID":"2057ae34-0687-488a-8a20-7862a0595db0","DisplayValue":"Brown","Hex":"#685749","Image":"Content/Images/Products/MEN SLIPPERS/GS003BROWN.png","SortOrder":0,"ItemFK":"ae7f8f2f-be40-4686-9f50-9dc0c9066d3a"}],"ItemID":"ae7f8f2f-be40-4686-9f50-9dc0c9066d3a","DisplayValue":"GS003","CategoryFK":"277d715a-d0d9-4f51-90bb-f77ce4208aa0","Price":"P 280","Thumbnail":"Content/Images/Products/MEN SLIPPERS/GS003BLACK.png","ThumbnailHex":"#515243","SortOrder":0},{"Variations":[{"Sizes":[{"SizeID":"f1affd30-e88b-4ef6-86ed-a55934c831e9","DisplayValue":8,"VariationFK":"ec38bd23-e056-432a-a63a-f966f91f7a34","Stock":2},{"SizeID":"d033130c-5147-45f0-b190-1d19a303896e","DisplayValue":9,"VariationFK":"ec38bd23-e056-432a-a63a-f966f91f7a34","Stock":2}],"VariationID":"ec38bd23-e056-432a-a63a-f966f91f7a34","DisplayValue":"Black","Hex":"#4B4C3E","Image":"Content/Images/Products/MEN SLIPPERS/GS003HMBLACK.png","SortOrder":0,"ItemFK":"8fa2aee9-b9ae-49aa-bf11-689db03ff93a"},{"Sizes":[{"SizeID":"24e22e11-9f48-465d-960c-297bd4a60ec9","DisplayValue":8,"VariationFK":"3fdbbd3b-6e90-4636-83df-86b7990799d4","Stock":2},{"SizeID":"579a22b5-882d-4cd2-bbc3-8bf15c65ba4f","DisplayValue":9,"VariationFK":"3fdbbd3b-6e90-4636-83df-86b7990799d4","Stock":2}],"VariationID":"3fdbbd3b-6e90-4636-83df-86b7990799d4","DisplayValue":"Brown","Hex":"#6B5848","Image":"Content/Images/Products/MEN SLIPPERS/GS003HMBROWN.png","SortOrder":0,"ItemFK":"8fa2aee9-b9ae-49aa-bf11-689db03ff93a"}],"ItemID":"8fa2aee9-b9ae-49aa-bf11-689db03ff93a","DisplayValue":"GS003IN","CategoryFK":"277d715a-d0d9-4f51-90bb-f77ce4208aa0","Price":"P 180","Thumbnail":"Content/Images/Products/MEN SLIPPERS/GS003HMBLACK.png","ThumbnailHex":"#4B4C3E","SortOrder":0}],"CategoryID":"277d715a-d0d9-4f51-90bb-f77ce4208aa0","DisplayValue":"MEN SLIPPERS","SortOrder":0}];

const CartContext = React.createContext(null);

let initialCart;

try {
    initialCart = JSON.parse(localStorage.getItem("cart")) ?? [];
} catch {
    console.error("The cart could not be parsed into JSON.");
    initialCart = [];
}

export function CartProvider(props) {
    const { data: products, error, loading } = useFetch('GraceNStyle/GetProducts');

    const [productsFinal, productDispatch] = useReducer(productReducer, []);
    const [cart, cartDispatch] = useReducer(cartReducer, initialCart);
    const [currentCategoryID, currentCategoryIDDispatch] = useReducer(categoryReducer, '');
    const [filteredCategory, filteredCategoryDispatch] = useReducer(categoryReducer, []);
    const [currentItemID, currentItemIDDispatch] = useReducer(itemReducer, '');
    const [filteredItem, filteredItemDispatch] = useReducer(itemReducer, []);
    const [currentVariationID, currentVariationIDDispatch] = useReducer(variationReducer, '');
    const [filteredVariation, filteredVariationDispatch] = useReducer(variationReducer, []);
    const [currentSizeID, currentSizeIDDispatch] = useReducer(sizeReducer, '');
    const [filteredSize, filteredSizeDispatch] = useReducer(sizeReducer, []);

    useEffect(() => localStorage.setItem("cart", JSON.stringify(cart))
    ,[cart]);

    useEffect(() => {
        productDispatch({type:"initialize", data: error? fallbackProducts : products })
    },[products, error]);
  
    const contextValue = { 
        cart,
        currentCategoryID,
        currentItemID,
        currentSizeID,
        currentVariationID,
        filteredCategory,
        filteredItem,
        filteredSize,
        filteredVariation,
        loading,
        productsFinal,
        cartDispatch,
        currentCategoryIDDispatch,
        currentItemIDDispatch,
        currentSizeIDDispatch,
        currentVariationIDDispatch,
        filteredCategoryDispatch,
        filteredItemDispatch,
        filteredSizeDispatch,
        filteredVariationDispatch,
        productDispatch
     };

    return <CartContext.Provider value={contextValue}>
        {props.children}
    </CartContext.Provider>
}

export function useCart() {
    const context = useContext(CartContext);
    if(!context) {
      throw new Error("useCart must be used within a CartProvider. Wrap a parent in <CartProvider> to fix this error");
    }
    return context;
}
