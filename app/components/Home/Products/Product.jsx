"use client";
import Link from "next/link";
import { useState } from "react";
import { BsCart, BsCartCheck } from "react-icons/bs";
import ProductSlider from "./ProductSlider";

function Product({ product }) {
  const images = product?.images;
  // show hide navigation
  const [showNavigation, setShowNavigation] = useState(false);
  // added
  const [added,setAdded] = useState(false)
  return (
    <div className="h-fit border bg-base-200 relative">
      <button onClick={()=>setAdded(!added)} onMouseLeave={() => setShowNavigation(false)}
        onMouseEnter={() => setShowNavigation(true)} hidden={!showNavigation} className={`absolute right-1 duration-200 top-1 ${added ? 'bg-teal-500 text-white':'bg-base-100'} rounded px-2 py-1 z-50`}>
          {
            added ?<BsCartCheck size={28} />: <BsCart size={28} />
          }
          
          
          </button>
      <div
        className="w-full"
        onMouseLeave={() => setShowNavigation(false)}
        onMouseEnter={() => setShowNavigation(true)}
      >
        <ProductSlider images={images} showNavigation={showNavigation} />
        <div className="py-2">
          <Link className="text-sm px-1" href={`/product/12`}>PSD TO Html Convert PSD TO Html Convert</Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
