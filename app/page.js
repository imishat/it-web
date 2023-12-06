import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Headers/Hero/Hero";
import Navbar from "@/components/Headers/Navbar";
import SubNavbar from "@/components/Headers/SubNavbar";
import Categories from "@/components/Home/Categories/Categories";
import Description from "@/components/Home/Description/Description";
import Products from "@/components/Home/Products/Products";

export default function Home() {
  return (
    <main className="">
    <Navbar />
    <SubNavbar />
    <Hero />
    <Categories/>
    <Products />
    <Description />
    <Footer />
    </main>
  )
}
