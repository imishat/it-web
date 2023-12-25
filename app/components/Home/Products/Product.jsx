"use client";
import Link from "next/link";
import { useState } from "react";
import { BsCart, BsCartCheck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
// import addToCart from '../../../../redux/features/cart/cartSlice';
import { addToCart, removeFromCart } from "../../../../redux/features/cart/cartSlice";
import ProductSlider from "./ProductSlider";

function Product({ product }) {

  // cart data 
  const cart = useSelector(state=>state.cart)
  // dispatch
  const dispatch = useDispatch();
  // image
  const images = product?.images;
  // show hide navigation
  const [showNavigation, setShowNavigation] = useState(false);
  // is added in cart
  const isAdded = cart.find(item=>item.id===product?.id)

  // handle add to cart
  const handleAddToCart=()=>{
    dispatch(addToCart({id:product?.id,title:product?.title,image:product?.images[0]}))
  }



  // 
  return (
    <div className="h-fit border bg-base-200 relative">
      <button onMouseLeave={() => setShowNavigation(false)}
        onMouseEnter={() => setShowNavigation(true)} hidden={!showNavigation} className={`absolute right-1 duration-200 top-1 ${isAdded ? 'bg-teal-500 text-white':'bg-base-100'} rounded px-2 py-1 z-50`}>
          {
            isAdded  ?<BsCartCheck onClick={()=>dispatch(removeFromCart(product?.id))} size={28} />: <BsCart onClick={()=>handleAddToCart()} size={28} />
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
