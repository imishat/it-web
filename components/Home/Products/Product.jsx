"use client";
import Link from "next/link";
import { useState } from "react";
import ProductSlider from "./ProductSlider";

function Product({ product }) {
  const images = product?.images;
  // show hide navigation
  const [showNavigation, setShowNavigation] = useState(false);
  return (
    <div className="h-72 mb-12 border bg-base-200">
      <div
        className="w-full h-56"
        onMouseLeave={() => setShowNavigation(false)}
        onMouseEnter={() => setShowNavigation(true)}
      >
        <ProductSlider images={images} showNavigation={showNavigation} />
        <div className="mt-2">
          <Link className="text-blue-600 text-lg font-bold px-1 py-2" href={`#`}>PSD TO Html Convert</Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
