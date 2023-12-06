'use client'
import { useState } from "react";
import ProductSlider from "./ProductSlider";

function Product({product}) {
    const images = product?.images
        // show hide navigation
        const [showNavigation,setShowNavigation] = useState(false) 
    return (
        <div>
            <div className="w-full h-56" onMouseLeave={()=>setShowNavigation(false)} onMouseEnter={()=>setShowNavigation(true)}>
                <ProductSlider images={images} showNavigation={showNavigation} />
            </div>
        </div>
    );
}

export default Product;