"use client";
import { IoGrid, IoHome } from "react-icons/io5";

import Link from "next/link";
import { IoMdLogIn, IoMdMenu } from "react-icons/io";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../../redux/features/modal/modalSlice";
import CartSidebar from "../Modals/CartSidebar";
import LoginModal from "../Modals/LoginModal";

function Navbar() {
  
  const cart = useSelector((state) => state.cart);
  // router
  const router = usePathname();
  const { modal } = useSelector((state) => state.modal);
  // dispatch
  const dispatch = useDispatch();
  // show hide side nav
  const [showNav, setShowNav] = useState(false);
  const [showSubNav, setShowSubNav] = useState(false);

  // show hide cart
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className=" ">
      <div className="navbar px-3 container mx-auto h-[50px] min-h-[50px] py-0 bg-base-100 border-b">
        <div className="navbar-start ">
          <div className="flex items-center">
            <div className="lg:hidden flex items-center">
              {router === "/dashboard" ? (
                <label
                  htmlFor="my-drawer-2"
                  className="drawer-button pt-1 lg:hidden"
                >
                  <IoMdMenu size={32} />
                </label>
              ) : (
                <button onClick={() => setShowNav(!showNav)} className="pt-1">
                  <IoMdMenu size={32} />
                </button>
              )}
            </div>
            <div
              className={`absolute flex flex-col transition-all z-30 px-6 h-screen bg-base-200 top-0 w-96 menu menu-sm rounded-none duration-200 lg:hidden ${
                showNav ? "-left-2" : "-left-96"
              }`}
            >
              {/* Home and close */}
              <div className="flex items-center gap-2 w-full">
                <div>
           
                  <button onClick={() => setShowNav(!showNav)}>
                    <img
                      src="https://cdn.kwork.com/images/header/icon-close.svg"
                      alt=""
                    />
                  </button>
                </div>
                <Link href="/">
              <Image
                width={150}
                height={100}
                src="/images/logo.png"
                className="h-10 w-full"
                alt=""
              />
            </Link>
              </div>
              {/* Navbar mobile */}
              <div className={`w-full`}>
                {/* Sub Nav for Mobile */}
                <div
                  className={`menu absolute flex flex-col duration-300 overflow-y-scroll bg-white w-96 h-screen rounded-none ${
                    showSubNav ? "-left-0" : "-left-96"
                  }`}
                >
                  <div className="flex items-center pb-4 pt-2  border-b bg-white w-full justify-center px-4">
                    <button
                      onClick={() => setShowSubNav(false)}
                      className="w-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="15"
                        fill="none"
                        className="mobile-menu__arrow-back"
                      >
                        <path
                          d="M2 7h13a6 6 0 0 1 6 6v1M2 7l6-6M2 7l6 6"
                          stroke="#b8b8b8"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </button>
                    <p className="w-full uppercase">Categories</p>
                    <p className="w-full"></p>
                  </div>
                  <ul className="space-y-2 w-full absolute bg-base-100 top-14 left-4 h-full">
                    <Link
                      className="hover:bg-blue-50 px-2 py-2.5 rounded-none btn-ghost flex justify-start active:bg-white hover:btn-ghost"
                      href={"#"}
                    >
                      Home
                    </Link>
                    <Link
                      className="hover:bg-blue-50 px-2 py-2.5 rounded-none btn-ghost flex justify-start active:bg-white hover:btn-ghost"
                      href={"#"}
                    >
                      Home
                    </Link>
                    <Link
                      className="hover:bg-blue-50 px-2 py-2.5 rounded-none btn-ghost flex justify-start active:bg-white hover:btn-ghost"
                      href={"#"}
                    >
                      Home
                    </Link>
                    <Link
                      className="hover:bg-blue-50 px-2 py-2.5 rounded-none btn-ghost flex justify-start active:bg-white hover:btn-ghost"
                      href={"#"}
                    >
                      Home
                    </Link>
                    <Link
                      className="hover:bg-blue-50 px-2 py-2.5 rounded-none btn-ghost flex justify-start active:bg-white hover:btn-ghost"
                      href={"#"}
                    >
                      Home
                    </Link>
                    <Link
                      className="hover:bg-blue-50 px-2 py-2.5 rounded-none btn-ghost flex justify-start active:bg-white hover:btn-ghost"
                      href={"#"}
                    >
                      Home
                    </Link>
                  </ul>
                </div>
                {/* Sign up btn */}
                <a className="btn w-32 !min-h-[40px] h-[40px] rounded bg-green-600 hover:bg-[#E77C01] text-white px-6">
                  Sign Up
                </a>
                {/* Nav for mobile */}
                <div className="flex my-6 justify-start w-full">
                  <div className="w-full flex flex-col space-y-4">
                    <div className="flex w-full items-center gap-3">
                      <span className="w-6">
                        <IoMdLogIn size={24} />
                      </span>
                      <Link
                        onClick={() => setShowNav(false)}
                        className="w-full"
                        href={"/login"}
                      >
                        Sign In
                      </Link>
                    </div>
                    {/* ==== */}
                    <div className="flex items-center gap-3">
                      <span className="w-6">
                        <IoHome size={24} />
                      </span>
                      <Link className="w-full" href={"#"}>
                        To Homepage
                      </Link>
                    </div>
                    {/* ==== */}
                    <div
                      onClick={() => setShowSubNav(!showSubNav)}
                      className="flex items-center gap-3"
                    >
                      <span className="w-6">
                        <IoGrid size={24} />
                      </span>
                      <button className="w-full inline text-left" href={"#"}>
                        Browse Categories
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* hide nav in mobile */}
            <button
              onClick={() => {
                setShowNav(false);
                setShowSubNav(false);
              }}
              className={`absolute left-0 w-screen h-screen top-0 z-0 ${
                showNav ? "" : "hidden"
              }`}
            ></button>
          </div>
          <div className="brand-image h-9 hidden lg:block">
            <Link href="/">
              <Image
                width={150}
                height={100}
                src="/images/logo.png"
                className="h-10 w-full"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="navbar-center">
          <div className="brand-image h-9  lg:hidden">
          <Link href="/">
              <Image
                width={150}
                height={100}
                src="/images/logo.png"
                className="h-10 w-full"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <Link href={"/blogs"} className="px-4 text-sm hidden lg:block py-2">
            Blogs
          </Link>
          <button
            onClick={() => dispatch(showModal(!modal))}
            className="btn hidden !min-h-[40px] h-[40px] lg:flex rounded bg-[#E77C01] hover:bg-[#E77C01] text-white px-6"
          >
            Sign In
          </button>

          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="px-4 relative py-2"
          >
            <BsCart2 size={32} />
            <span className="rounded-full bg-[#E77C01] text-white absolute px-2 text-xs py-1 right-0 top-0 font-bold">
              {cart?.length}
            </span>
          </button>
        </div>
      </div>
      {
      modal?<LoginModal /> :''
    }
      <CartSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </div>
  );
}

export default Navbar;
