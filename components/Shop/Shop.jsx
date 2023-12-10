"use client";
import Link from "next/link";
import { useState } from "react";
import Product from "../Home/Products/Product";

function Shop() {
  const products = [
    {
      id: 1,
      title:
        "I will convert figma to html, xd to html, ai to html, with responsive",
      description: `Hi
             Do you need to convert responsive figma to html or psd to html or xd to html or ai to html? Welcome to the hub of web design excellence! If you're on the lookout for a seasoned professional with a knack for turning your creative visions into stunning reality, you've struck gold. With a rich history spanning over 4 years and a portfolio boasting 300+ successful projects, I am your go-to expert for converting Figma, XD, PSD, AI or any image into pixel-perfect HTML magic.
            
            What can i do?
            
            psd to html
            
            xd to html
            
            figma to html
            
            ai to html
            
            zeplin to html
            
            sketch to html
            
            indesign to html
            
            invision to html
            
            pdf to html
            
            docx to html
            
            or any kind of images to html
            
            What You Will Get?
            
            HTML5/CSS3 Pixel perfect Markup
            Mobile-friendly responsive design
            Using JS animation & jQuery Plugin
            Properly commented code
            Cross-Browser Compatible
            SEO Friendly & Speed optimization Code
            Google Font, Custom Font & Font Awesome
            W3c validated + much more . . .
            Why should you hire me?
            
            High-quality work
            Super fast delivery
            24/7 Customer Support
            Satisfaction guaranteed
            I believe in the power of hard work and honesty, and I'm always geared up to bring your visions to life. Your project is my passion. Let's make it happen. Thank you!
            
            To get started, the seller needs:
            I need main project file.
            
            If there is a premium font, its zip file should be provided.
            
            If you want to add any special images to your design, provide them.`,
      images: [
        {
          id: 1,
          image:
            "https://cdn.kwork.com/files/portfolio/t0/58/7e63a84545d4a2f8f9551f918eefd0e67ce5faa1-1696791156.webp",
        },
        {
          id: 2,
          image:
            "https://cdn.kwork.com/files/portfolio/t0/92/6238acf700be58c9ae7586afe15aa2eeed887ca2-1696791156.webp",
        },
        {
          id: 3,
          image:
            "https://cdn.kwork.com/files/portfolio/t0/07/e34ec2a1276214ad5c212d8ce146b674ea1792fe-1696791157.webp",
        },
      ],
      price: 12,
    },
    {
      id: 2,
      title: "I will convert psd, figma and xd to html, react and react native",
      description: `In this kwork, I will convert Figma, XD, PSD design to landing page and mobile app screens using HTML, CSS, React JS or React Native

            Please send me a message so we can discuss your requirements, the project timeline, and the cost. "Get a Quote" from me is simple.
            
            I have 3+ years of software development experience. I've worked on numerous projects independently and as a team. I offer modern Web and Mobile Application Solutions in addition to designing simple to complex React JS and React Native Apps.
            
            My first goal is to ensure that my clients are satisfied.
            
            My Expertise:
            
            A full-featured React JS, React Native website/application
            
            Frontend development with Material UI, CSS and Bootstrap
            
            Backend with Node JS and Express JS
            
            API Integration Database Integration Authentication Full Stack Web Application
            
            Components and pages are being developed.
            
            Stack of technologies: React JS, React Native, JavaScript, Material UI, Bootstrap, Redux, Node JS, Express JS, MongoDB, Firebase, and MySQL
            
            plus a lot more
            
            To get started, the seller needs:
            To fulfil your order i need your complete documents before order i need your documents like which color you want what is the scope of your project etc`,
      images: [
        {
          id: 1,
          image:
            "https://cdn.kwork.com/files/portfolio/t0/58/7e63a84545d4a2f8f9551f918eefd0e67ce5faa1-1696791156.webp",
        },
        {
          id: 2,
          image:
            "https://cdn.kwork.com/files/portfolio/t0/92/6238acf700be58c9ae7586afe15aa2eeed887ca2-1696791156.webp",
        },
        {
          id: 3,
          image:
            "https://cdn.kwork.com/files/portfolio/t0/07/e34ec2a1276214ad5c212d8ce146b674ea1792fe-1696791157.webp",
        },
      ],
      price: 33,
    },
    {
      id: 3,
      title: "I will convert figma to html, psd to html, xd to html",
      description: `Hi there,

            I am a Full stack web developer, I have been doing web development for the last many years.
            
            I have Front End experience in HTML, CSS, CSS Animation, Bootstrap, CSS, JS/JQuery.
            
            I've had plenty of experience with developing sites for Chrome, Firefox, and Safari. More recently, I've been working last 2 years on Convert PSD, Figma, XD, Sketch, AI, design files to HTML CSS.
            
            I will
            
            Convert PSD, Figma, XD, Sketch, AI, and Zeplin designs to HTML CSS with Bootstrap/Tailwind CSS.
            
            Mobile Friendly.
            
            CSS3/JS Animations.
            
            Cross-Browser Compatible! (Firefox, Chrome, Safari, Opera)
            
            All code is HAND CODED
            
            To get started, the seller needs:
            Just need the source file (PSD, Sketch, Xd, Ai, etc) or any Reference link.
            
            Your Information which types of images are you want to use ?
            
            Service includes:
             Complex layout
             Menu
             Number of pages: 1
            Delivery: 2 days`,
      images: [
        {
          id: 1,
          image:
            "https://cdn.kwork.com/files/portfolio/t0/58/7e63a84545d4a2f8f9551f918eefd0e67ce5faa1-1696791156.webp",
        },
        {
          id: 2,
          image:
            "https://cdn.kwork.com/files/portfolio/t0/92/6238acf700be58c9ae7586afe15aa2eeed887ca2-1696791156.webp",
        },
        {
          id: 3,
          image:
            "https://cdn.kwork.com/files/portfolio/t0/07/e34ec2a1276214ad5c212d8ce146b674ea1792fe-1696791157.webp",
        },
      ],
      price: 42,
    },
    {
      id: 4,
      title: "I will convert figma to html, psd to html, xd to html",
      description: `Hi there,

            I am a Full stack web developer, I have been doing web development for the last many years.
            
            I have Front End experience in HTML, CSS, CSS Animation, Bootstrap, CSS, JS/JQuery.
            
            I've had plenty of experience with developing sites for Chrome, Firefox, and Safari. More recently, I've been working last 2 years on Convert PSD, Figma, XD, Sketch, AI, design files to HTML CSS.
            
            I will
            
            Convert PSD, Figma, XD, Sketch, AI, and Zeplin designs to HTML CSS with Bootstrap/Tailwind CSS.
            
            Mobile Friendly.
            
            CSS3/JS Animations.
            
            Cross-Browser Compatible! (Firefox, Chrome, Safari, Opera)
            
            All code is HAND CODED
            
            To get started, the seller needs:
            Just need the source file (PSD, Sketch, Xd, Ai, etc) or any Reference link.
            
            Your Information which types of images are you want to use ?
            
            Service includes:
             Complex layout
             Menu
             Number of pages: 1
            Delivery: 2 days`,
      images: [
        {
          id: 1,
          image:
            "https://cdn.kwork.com/files/portfolio/t0/58/7e63a84545d4a2f8f9551f918eefd0e67ce5faa1-1696791156.webp",
        },
        {
          id: 2,
          image:
            "https://cdn.kwork.com/files/portfolio/t0/92/6238acf700be58c9ae7586afe15aa2eeed887ca2-1696791156.webp",
        },
        {
          id: 3,
          image:
            "https://cdn.kwork.com/files/portfolio/t0/07/e34ec2a1276214ad5c212d8ce146b674ea1792fe-1696791157.webp",
        },
      ],
      price: 42,
    },
  ];

  // range slider
  const [price, setPrice] = useState(40);
  return (
    <div className="container mx-auto">
      <div className="h-20 mb-4 bg-base-300"></div>
      <div className="flex gap-2">
        <div className="w-72 h-fit bg-base-300 ">
          {/* Categories */}
          <div className="p-2">
            <h2 className="font-bold">Categories</h2>
            <div className="w-full">
              {[...Array(6).keys()]?.map((item, i) => {
                return (
                  <div key={i}>
                    <Link className="w-full link-hover inline-block" href={"#"}>
                      Category {i + 1}
                    </Link>
                  </div>
                );
              })}
             
            </div>
            <div className="ml-4">
              {[...Array(4).keys()]?.map((item, i) => {
                return (
                  <div key={i}>
                    <Link className="w-full link-hover inline-block" href={"#"}>
                      Category {i + 1}
                    </Link>
                  </div>
                );
              })}
              </div>
            <div className="ml-0">
              {[...Array(4).keys()]?.map((item, i) => {
                return (
                  <div key={i}>
                    <Link className="w-full link-hover inline-block" href={"#"}>
                      Category {i + 1}
                    </Link>
                  </div>
                );
              })}
              </div>
          </div>
          {/* Price */}
          <div className="p-2">
            <h2 className="capitalize font-bold">filter by price</h2>
            <div
              className="tooltip tooltip-open tooltip-success mt-8 w-full"
              data-tip={price}
            >
              <input
                onChange={(e) => setPrice(e.target.value)}
                type="range"
                title="100"
                min={0}
                max="1000"
                defaultValue="40"
                className="range range-success range-xs w-[90%] mx-2"
              />
            </div>
          </div>
        </div>
        <div className="w-full">
            {/*  */}
          <div className="w-full flex items-center justify-between">
            <h2></h2>
           <div className="flex items-center gap-2">
            <p>Sort:</p>
           <select className="select select-bordered select-sm rounded-none my-2" name="" id="">
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
           </div>
          </div>
          <div className="w-full grid lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {products?.map((product, i) => {
              return <Product key={i} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;

export const metadata = { title: "Shop" };
