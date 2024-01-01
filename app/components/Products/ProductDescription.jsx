"use client";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/features/cart/cartSlice";
import MainLayout from "../Layout/MainLayout";
import Skeleton from "../Loading/Skeleton";
import Related from "../Related/Related";
import ImageSlider from "./ImageSlider";
import Reviews from "./Reviews";

function ProductDescription() {
  const router = useParams();
  const { productId } = router;
  // cart data
  const cart = useSelector((state) => state.cart);

  // single data
  const [product, setProduct] = useState({});
  // is added in cart
  const isAdded = cart.find((item) => item.id === product?.id);

  // loading
  const [loading, setLoading] = useState(true);
  // get single product
  useEffect(() => {
    setLoading(true);
    if (productId) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/get-service/${productId}`)
        .then((res) => {
          setProduct(res.data?.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  }, [productId]);

  console.log(product, "product");

  // dispatch
  const dispatch = useDispatch();
  // handle add to cart
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  // images
  const images = product?.servicePicture
    ? JSON.parse(product?.servicePicture)
    : "";
  // get average
  const average =
    product?.Reviews?.reduce((total, next) => total + next.stars, 0) /
    product?.Reviews?.length;

  // stars
  const stars =
    (average === 1 && <BsStarFill size={23} color="#ffb300" />) ||
    (average > 1 && average < 2 && (
     <div className="flex items-center gap-1">
        <BsStarFill size={23} color="#ffb300" />{" "}
        <BsStarHalf size={23} color="#ffb300" />{" "}
      </div>
    )) ||
    (average === 2 && (
       <div className="flex items-center gap-1">
        <BsStarFill size={23} color="#ffb300" />
        <BsStarFill size={23} color="#ffb300" />
      </div>
    )) ||
    (average > 2 && average < 3 && (
      <div className="flex items-center gap-1">
        <BsStarFill size={23} color="#ffb300" />{" "}
        <BsStarFill size={23} color="#ffb300" />{" "}
        <BsStarHalf size={23} color="#ffb300" />{" "}
      </div>
    )) ||
    (average === 3 && (
       <div className="flex items-center gap-1">
        <BsStarFill size={23} color="#ffb300" />
        <BsStarFill size={23} color="#ffb300" />
        <BsStarFill size={23} color="#ffb300" />
      </div>
    )) ||
    (average > 3 && average < 4 && (
      <div className="flex items-center gap-1">
        <BsStarFill size={23} color="#ffb300" />{" "}
        <BsStarFill size={23} color="#ffb300" />{" "}
        <BsStarFill size={23} color="#ffb300" />{" "}
        <BsStarHalf size={23} color="#ffb300" />{" "}
      </div>
    )) ||
    (average === 4 && (
       <div className="flex items-center gap-1">
        <BsStarFill size={23} color="#ffb300" />
        <BsStarFill size={23} color="#ffb300" />
        <BsStarFill size={23} color="#ffb300" />
        <BsStarFill size={23} color="#ffb300" />
      </div>
    )) ||
    (average > 4 && average < 5 && (
      <div className="flex items-center gap-1">
        <BsStarFill size={23} color="#ffb300" />{" "}
        <BsStarFill size={23} color="#ffb300" />{" "}
        <BsStarFill size={23} color="#ffb300" />{" "}
        <BsStarFill size={23} color="#ffb300" />{" "}
        <BsStarHalf size={23} color="#ffb300" />{" "}
      </div>
    )) ||
    (average === 5 && (
       <div className="flex items-center gap-1">
        <BsStarFill size={23} color="#ffb300" />
        <BsStarFill size={23} color="#ffb300" />
        <BsStarFill size={23} color="#ffb300" />
        <BsStarFill size={23} color="#ffb300" />
        <BsStarFill size={23} color="#ffb300" />
      </div>
    ));

  return (
    <MainLayout title={product?.title} description={product?.subDescription}>
    <section className="text-gray-700 container mx-auto body-font overflow-hidden  bg-white">
      <div className="container  md:pt-24 max-h-fit  mx-auto">
        {loading ? (
          <div className="flex">
            <div className="lg:w-2/3 w-full h-96 lg:pl-10  lg:mt-0 px-2">
              <Skeleton />
              <Skeleton />
            </div>
            <div className="lg:w-1/3 w-full h-96">
              <Skeleton />
              <Skeleton />
            </div>
          </div>
        ) : (
          <div className="lg:w-full mx-auto flex flex-col md:flex-row ">
            {/* <Image width={900} height={900} alt="products" className="lg:w-1/2 w-full object-cover object-center  rounded border border-gray-200" src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"/> */}
            <ImageSlider images={images} />
            <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 px-2">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                PRODUCT NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product?.title}
              </h1>
              <div className="flex mb-4">
                <div className="flex items-center">
                  {stars}
                  <span className="text-gray-600 ml-3">
                    {product?.Reviews?.length} Reviews
                  </span>
                </div>
                {/* <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span> */}
              </div>
              <p className="leading-relaxed">
                {product?.subDescription}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product?.price}
                </span>
                <Link onClick={() => handleAddToCart()}
                    href={"/checkout"}
                    className="flex ml-auto text-white bg-orange-400 duration-300 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded"
                  >
                    Checkout
                  </Link>
                {isAdded ? (
                  <button onClick={()=>dispatch(removeFromCart(product?.id))}
                    className="flex ml-auto text-white bg-red-400 duration-300 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded"
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddToCart()}
                    className="flex ml-auto text-white bg-orange-400 duration-300 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded"
                  >
                    Add To Cart
                  </button>
                )}

                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="space-y-5">
        <Reviews product={product} />
        {/* related */}
        <Related service={product} />
      </div>
    </section>
    </MainLayout>
  );
}

export default ProductDescription;
