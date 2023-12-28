"use client";
import Link from "next/link";
import { useState } from "react";
import { BsCart, BsCartCheck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
// import addToCart from '../../../../redux/features/cart/cartSlice';
import {
  addToCart,
  removeFromCart,
} from "../../../../redux/features/cart/cartSlice";
import ProductSlider from "./ProductSlider";

function Product({ product }) {
  // console.log(product,'product')
  // cart data
  const cart = useSelector((state) => state.cart);
  // dispatch
  const dispatch = useDispatch();
  // image
  const images = JSON.parse(product?.servicePicture);
  // show hide navigation
  const [showNavigation, setShowNavigation] = useState(false);
  // is added in cart
  const isAdded = cart.find((item) => item.id === product?.id);

  // handle add to cart
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  //
  return (
    <Link className="inline-block h-[230] border bg-base-200 w-full relative" href={`/product/${product?.id}`}>
      <div className="">
        <button
          onMouseLeave={() => setShowNavigation(false)}
          onMouseEnter={() => setShowNavigation(true)}
          hidden={!showNavigation}
          className={`absolute right-1 duration-200 top-1 ${
            isAdded ? "bg-teal-500 text-white" : "bg-base-100"
          } rounded px-2 py-1 z-50`}
        >
          {isAdded ? (
            <BsCartCheck
              onClick={() => dispatch(removeFromCart(product?.id))}
              size={28}
            />
          ) : (
            <BsCart onClick={() => handleAddToCart()} size={28} />
          )}
        </button>
        <div
          className="w-full"
          onMouseLeave={() => setShowNavigation(false)}
          onMouseEnter={() => setShowNavigation(true)}
        >
          <ProductSlider images={images} showNavigation={showNavigation} />
          <div className="py-2 px-1">
            <h2 className="text-sm py-0 leading-2 font-bold px-1">
              {product?.title}
            </h2>

            <h1 className="flex justify-end text-orange-500 font-bold">
              Price: <span className="text-xl">${product?.price}</span>
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
