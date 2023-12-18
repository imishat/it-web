'use client'
import { useSelector } from "react-redux";
import Hero from "../app/components/Headers/Hero/Hero";
import SubNavbar from "../app/components/Headers/SubNavbar";
import Categories from "../app/components/Home/Categories/Categories";
import Description from "../app/components/Home/Description/Description";
import Products from "../app/components/Home/Products/Products";
import CartSidebar from "../app/components/Modals/CartSidebar";
import LoginModal from "../app/components/Modals/LoginModal";
export default function Home() {
  const {modal} = useSelector((state) => state.modal);
  console.log(modal,'showModal')
  return (
    <main className=" ">
    <SubNavbar />
    <Hero />
    <Categories/>
    <Products />
    <Description />
    {
      modal?<LoginModal /> :''
    }
    {/* */}
    <CartSidebar />
    </main>
  )
}
