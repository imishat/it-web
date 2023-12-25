
'use client'
import { useState } from "react";

import Product from "./Product";

function Products() {
    const products = [
        {
            id:1,
            title:'I will convert figma to html, xd to html, ai to html, with responsive',
            description:`Hi
             Do you need to convert responsive figma to html or psd to html or xd to html or ai to html? Welcome to the hub of web design excellence! If you're on the lookout for a seasoned professional with a knack for turning your creative visions into stunning reality, you've struck gold. With a rich history spanning over 4 years and a portfolio boasting 300+ successful projects, I am your go-to expert for converting Figma, XD, PSD, AI or any image into pixel-perfect HTML magic..`,
            images:[
                {id:1,image:'https://cdn.kwork.com/files/portfolio/t0/58/7e63a84545d4a2f8f9551f918eefd0e67ce5faa1-1696791156.webp'},
                {id:2,image:'https://cdn.kwork.com/files/portfolio/t0/92/6238acf700be58c9ae7586afe15aa2eeed887ca2-1696791156.webp'},
                {id:3,image:'https://cdn.kwork.com/files/portfolio/t0/07/e34ec2a1276214ad5c212d8ce146b674ea1792fe-1696791157.webp'},
            ],
            price:12,
        },
        {
            id:2,
            title:'I will convert psd, figma and xd to html, react and react native',
            description:`In this kwork, I will convert Figma, XD, PSD design to landing page and mobile app screens using HTML, CSS, React JS or React Native
            Stack of technologies: React JS, React Native, JavaScript, Material UI, Bootstrap, Redux, Node JS, Express JS, MongoDB, Firebase, and MySQL
            To get started, the seller needs:
            To fulfil your order i need your complete documents before order i need your documents like which color you want what is the scope of your project etc`,
            images:[
                {id:1,image:'https://cdn.kwork.com/files/portfolio/t0/58/7e63a84545d4a2f8f9551f918eefd0e67ce5faa1-1696791156.webp'},
                {id:2,image:'https://cdn.kwork.com/files/portfolio/t0/92/6238acf700be58c9ae7586afe15aa2eeed887ca2-1696791156.webp'},
                {id:3,image:'https://cdn.kwork.com/files/portfolio/t0/07/e34ec2a1276214ad5c212d8ce146b674ea1792fe-1696791157.webp'},
            ],
            price:33,
        },
        {
            id:3,
            title:'I will convert figma to html, psd to html, xd to html',
            description:`Hi there,
            I am a Full stack web developer, I have been doing web development for the last many years.            
            I have Front End experience in HTML, CSS, CSS Animation, Bootstrap, CSS, JS/JQuery.          
            I've had plenty of experience with developing sites for Chrome, Firefox, and Safari. More recently, I've been working last 2 years on Convert PSD, Figma, XD, Sketch, AI, design files to HTML CSS.
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
            images:[
                {id:1,image:'https://cdn.kwork.com/files/portfolio/t0/58/7e63a84545d4a2f8f9551f918eefd0e67ce5faa1-1696791156.webp'},
                {id:2,image:'https://cdn.kwork.com/files/portfolio/t0/92/6238acf700be58c9ae7586afe15aa2eeed887ca2-1696791156.webp'},
                {id:3,image:'https://cdn.kwork.com/files/portfolio/t0/07/e34ec2a1276214ad5c212d8ce146b674ea1792fe-1696791157.webp'},
            ],
            price:42,
        },
        {
            id:4,
            title:'I will convert figma to html, psd to html, xd to html',
            description:`Hi there,

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
            images:[
                {id:1,image:'https://cdn.kwork.com/files/portfolio/t0/58/7e63a84545d4a2f8f9551f918eefd0e67ce5faa1-1696791156.webp'},
                {id:2,image:'https://cdn.kwork.com/files/portfolio/t0/92/6238acf700be58c9ae7586afe15aa2eeed887ca2-1696791156.webp'},
                {id:3,image:'https://cdn.kwork.com/files/portfolio/t0/07/e34ec2a1276214ad5c212d8ce146b674ea1792fe-1696791157.webp'},
            ],
            price:42,
        },
    ]

    // page
    const [page,setPage] = useState(0)
    // count
    const count = 6
    return (
        <div className="container mx-auto">
            
            <div className="mt-12 mb-2 bg-base-300 px-2 py-2">
                <h2 className="text-2xl font-bold uppercase">Products</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full gap-4">
                {
                    products?.map(product=>{
                        return <Product key={product?.id} product={product}/>
                    })
                }
            </div>
            {/* Pagination */}
            <div className="flex justify-center">
            <div className="join">
                { count ?
                    [...Array(count).keys()]?.map((item,i)=>{
                        return  <button onClick={()=>setPage(i)} key={i} className={`join-item btn ${page===i ? 'btn-active':''}`}>{i+1}</button>
                    }):''
                }
                </div>
            </div>
        </div>
    );
}

export default Products;