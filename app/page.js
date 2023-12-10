import Hero from "@/components/Headers/Hero/Hero";
import SubNavbar from "@/components/Headers/SubNavbar";
import Categories from "@/components/Home/Categories/Categories";
import Description from "@/components/Home/Description/Description";
import Products from "@/components/Home/Products/Products";
import CartSidebar from "@/components/Modals/CartSidebar";

export default function Home() {
  return (
    <main className=" ">
    <SubNavbar />
    <Hero />
    <Categories/>
    <Products />
    <Description />
    
    {/* <LoginModal /> */}
    <CartSidebar />
    </main>
  )
}
