'use client'
import { useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

function Reviews() {
    // state
    const [toggle,setToggle] = useState(true)
    return (
        <div class="flex  items-center  p-10">
            <div class=" w-full px-10 flex flex-col gap-2 p-5">
               
               
        {/* Description */}
        <div>
            <div>
                <button onClick={()=>setToggle(true)} className={`px-4 py-2 border ${toggle===true ? 'bg-gray-600 text-white':'bg-base-200'}`}>Description</button>
                <button onClick={()=>setToggle(false)} className={`px-4 py-2  border ${toggle===true ? 'bg-base-200':'bg-gray-600 text-white'}`}>Reviews</button>
            </div>
        </div>
             
                {
                    toggle ?
                    <div class="flex flex-col gap-3">
                         {/* <!-- Description --> */}
                    <h1 class="pt-5 text-lg">Description</h1>
                    <div class="flex flex-col gap-4  p-4">
                            {/* <!-- Profile and Rating --> */}
                            <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                        </div>
            
                    </div>
                    :
                    <div class="flex flex-col gap-3">
                         {/* <!-- Review --> */}
                    <h1 class="pt-5 text-lg">Reviews</h1>
                    <div class="flex flex-col gap-4  p-4">
                            {/* <!-- Profile and Rating --> */}
                            <div class="flex justify justify-between">
                                <div class="flex gap-2">
                                    <div class="w-7 h-7 text-center rounded-full bg-blue-500 flex justify-center items-center text-white">A</div>
                                    <span>Alice Banks</span>
                                </div>
                                <div class="flex p-1 gap-1 text-orange-300">
                                    <BsStarFill name="star" class=''/>
                                    <BsStarFill name="star" class=''/>
                                    <BsStarFill name="star" class=''/>
                                    <BsStarFill name="star" class=''/>
                                    <BsStarHalf name="star" class=''/>
                                    
                                </div>
                            </div>
                        
                            <div>
                                The device has a clean design and the metal housing feels sturdy in my hands. Soft rounded corners make it a pleasure to look at.
                            </div>
                        
                            <div class="flex justify-between">
                                <span>Feb 13, 2021</span>
                                <button class="p-1 px-2 bg-base-200 hover:bg-base-300 border border-base-200 bg-opacity-60">
                                                <ion-icon name="share-outline"></ion-icon> Reply</button>
                            </div>
                        </div>
            
                        <div class="flex flex-col gap-4  p-4">
                            {/* <!-- Profile and Rating --> */}
                            <div class="flex justify justify-between">
                                <div class="flex gap-2">
                                    <div class="w-7 h-7 text-center rounded-full bg-blue-500 flex justify-center items-center text-white">A</div>
                                    <span>Alice Banks</span>
                                </div>
                                <div class="flex p-1 gap-1 text-orange-300">
                                    <BsStarFill name="star" class=''/>
                                    <BsStarFill name="star" class=''/>
                                    <BsStarFill name="star" class=''/>
                                    <BsStarFill name="star" class=''/>
                                    <BsStarHalf name="star" class=''/>
                                    
                                </div>
                            </div>
                        
                            <div>
                                The device has a clean design and the metal housing feels sturdy in my hands. Soft rounded corners make it a pleasure to look at.
                            </div>
                        
                            <div class="flex justify-between">
                                <span>Feb 13, 2021</span>
                                <button class="p-1 px-2 bg-base-200 hover:bg-base-300 border border-base-200 bg-opacity-60">
                                                <ion-icon name="share-outline"></ion-icon> Reply</button>
                            </div>
                        </div>
                    </div>
                }
               
               
            </div>
        </div>
    );
}

export default Reviews;