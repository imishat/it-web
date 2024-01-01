'use client'
import { useDispatch } from "react-redux";
import Hero from "../app/components/Headers/Hero/Hero";
import SubNavbar from "../app/components/Headers/SubNavbar";
import Categories from "../app/components/Home/Categories/Categories";
import Description from "../app/components/Home/Description/Description";
import Products from "../app/components/Home/Products/Products";
import CartSidebar from "../app/components/Modals/CartSidebar";
export default function Home() {

  const dispatch = useDispatch();


  return (
    <main className=" ">
    <SubNavbar />
    <Hero />
    <Categories/>
    <Products />
    <Description />
    <CartSidebar />
    </main>
  )
}
