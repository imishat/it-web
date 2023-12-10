'use client'
import Link from "next/link";
import { BsShop } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { LiaStarSolid } from "react-icons/lia";
import { LuMenuSquare, LuPenSquare } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import Products from "./Products/Products";
function Dashboard() {
  return (
    <div>
       <div class="mt-12">
      <div class="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="bg-clip-border mx-4 rounded-xl   bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
           <BsShop size={24} />
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Products</p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">53</h4>
          </div>
          {/* <div class="border-t border-blue-gray-50 p-4">
            <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong class="text-green-500">+55%</strong>&nbsp;than last week
            </p>
          </div> */}
        </div>
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="bg-clip-border mx-4 rounded-xl   bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
           <IoMenu size={24} />
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Blogs</p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">2,300</h4>
          </div>
          {/* <div class="border-t border-blue-gray-50 p-4">
            <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong class="text-green-500">+3%</strong>&nbsp;than last month
            </p>
          </div> */}
        </div>
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="bg-clip-border mx-4 rounded-xl   bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
           <LiaStarSolid size={24} />
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Reviews</p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">3,462</h4>
          </div>
          {/* <div class="border-t border-blue-gray-50 p-4">
            <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong class="text-red-500">-2%</strong>&nbsp;than yesterday
            </p>
          </div> */}
        </div>
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="bg-clip-border mx-4 rounded-xl   bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <LuMenuSquare size={24} />
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Categories</p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">3,430</h4>
          </div>
          {/* <div class="border-t border-blue-gray-50 p-4">
            <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong class="text-green-500">+5%</strong>&nbsp;than yesterday
            </p>
          </div> */}
        </div>
      </div>
      
      <div class="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
       {/* Products */}
       <Products />
        {/* Categories */}
        <div className="w-full bg-base-200 h-96 min-w-[300px] rounded-xl">
            <div className="w-full bg-base-300 px-2 py-2 flex items-center justify-between rounded-t-xl font-bold">
                <h2 className="text-sm">Categories</h2>
                <Link href={'/dashboard/categories/create'} className="px-4 bg-base-100  py-1 rounded-full text-sm">Create</Link>
            </div>
            <div>
                <ul className=" ">
               <li className="py-2  border-b px-2 bg-base-100 flex items-center gap-2">  <button className="tooltip" data-tip="Action" onClick={()=>document.getElementById('my_modal_2').showModal()}><LuPenSquare size={22} /> </button> <Link href={`#`} className="link-hover">Category 1</Link></li>
               <li className="py-2  border-b px-2 bg-base-100 flex items-center gap-2">  <button className="tooltip" data-tip="Action" onClick={()=>document.getElementById('my_modal_2').showModal()}><LuPenSquare size={22} /> </button> <Link href={`#`} className="link-hover">Category 1</Link></li>
               <li className="py-2  border-b px-2 bg-base-100 flex items-center gap-2">  <button className="tooltip" data-tip="Action" onClick={()=>document.getElementById('my_modal_2').showModal()}><LuPenSquare size={22} /> </button> <Link href={`#`} className="link-hover">Category 1</Link></li>
                </ul>
            </div>
        </div>
      </div>
    </div>

<Modal/>
    </div>
  );
}

export default Dashboard;


const Modal = () =>{
    return <dialog id="my_modal_2" className="modal">
    <div className="modal-box">
        <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">Action</h3>
        <form method="dialog" className="">
      <button className="rounded-full px-1 py-0 flex items-center justify-center text-red-400 bg-red-50"><MdClose size={32} /></button>
    </form>
        </div>
 
      <div className=" py-3">
        <h2 className="text-lg font-bold">Category 1</h2>
      </div>
      <div className="flex items-center">
        <Link className="px-4 py-2 rounded bg-blue-400 text-white" href={`#`}>Edit</Link>
        <button className="px-4 py-2 rounded bg-red-400 text-white" href={`#`}>Delete</button>
      </div>
      
    </div>
    <form method="dialog" className="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
}