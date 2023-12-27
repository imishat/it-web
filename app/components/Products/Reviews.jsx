"use client";
import parse from "html-react-parser";
import { useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

function Reviews({ product }) {
  // state
  const [toggle, setToggle] = useState(true);
  return (
    <div className="flex  items-center  md:p-10">
      <div className=" w-full md:px-10 flex flex-col gap-2 p-5">
        {/* Description */}
        <div>
          <div>
            <button
              onClick={() => setToggle(true)}
              className={`px-4 py-2 border ${
                toggle === true ? "bg-gray-600 text-white" : "bg-base-200"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setToggle(false)}
              className={`px-4 py-2  border ${
                toggle === true ? "bg-base-200" : "bg-gray-600 text-white"
              }`}
            >
              Reviews
            </button>
          </div>
        </div>

        {toggle ? (
          <div className="flex flex-col gap-3">
            {/* <!-- Description --> */}
            <h1 className="pt-5 text-lg">Description</h1>
            <div className="flex flex-col gap-4  p-4">
              {/* <!-- Profile and Rating --> */}
              <p className="leading-relaxed">
                {product?.descripton ? parse(product?.descripton) : ""}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {/* <!-- Review --> */}
            <h1 className="pt-5 text-lg">Reviews</h1>
            <div className="flex flex-col gap-4  p-4">
              {/* <!-- Profile and Rating --> */}
              <div className="flex justify justify-between">
                <div className="flex gap-2">
                  <div className="w-7 h-7 text-center rounded-full bg-blue-500 flex justify-center items-center text-white">
                    A
                  </div>
                  <span>Alice Banks</span>
                </div>
                <div className="flex p-1 gap-1 text-orange-300">
                  <BsStarFill name="star" className="" />
                  <BsStarFill name="star" className="" />
                  <BsStarFill name="star" className="" />
                  <BsStarFill name="star" className="" />
                  <BsStarHalf name="star" className="" />
                </div>
              </div>

              <div>
                The device has a clean design and the metal housing feels sturdy
                in my hands. Soft rounded corners make it a pleasure to look at.
              </div>

              <div className="flex justify-between">
                <span>Feb 13, 2021</span>
                <button className="p-1 px-2 bg-base-200 hover:bg-base-300 border border-base-200 bg-opacity-60">
                  <ion-icon name="share-outline"></ion-icon> Reply
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4  p-4">
              {/* <!-- Profile and Rating --> */}
              <div className="flex justify justify-between">
                <div className="flex gap-2">
                  <div className="w-7 h-7 text-center rounded-full bg-blue-500 flex justify-center items-center text-white">
                    A
                  </div>
                  <span>Alice Banks</span>
                </div>
                <div className="flex p-1 gap-1 text-orange-300">
                  <BsStarFill name="star" className="" />
                  <BsStarFill name="star" className="" />
                  <BsStarFill name="star" className="" />
                  <BsStarFill name="star" className="" />
                  <BsStarHalf name="star" className="" />
                </div>
              </div>

              <div>
                The device has a clean design and the metal housing feels sturdy
                in my hands. Soft rounded corners make it a pleasure to look at.
              </div>

              <div className="flex justify-between">
                <span>Feb 13, 2021</span>
                <button className="p-1 px-2 bg-base-200 hover:bg-base-300 border border-base-200 bg-opacity-60">
                  <ion-icon name="share-outline"></ion-icon> Reply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reviews;
