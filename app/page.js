import Hero from "@/components/Headers/Hero/Hero";
import Navbar from "@/components/Headers/Navbar";
import SubNavbar from "@/components/Headers/SubNavbar";

export default function Home() {
  return (
    <main className="container mx-auto">
    <Navbar />
    <SubNavbar />
    <Hero />
    </main>
  )
}
