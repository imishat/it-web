'use client';
import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import ReactWhatsapp from 'react-whatsapp';


function page() {
  // service data 
  const serviceData= `
  Name: Web Design and development. | price: 123$ | Quantity:2
  Name: Web Design and development2. | price: 123$ | Quantity:2
  Name: Web Design and development3. | price: 123$ | Quantity:2
  Name: Web Design and development4. | price: 123$ | Quantity:2
  `

  // phone number 
  const phone = '+880 1739-452511'
    return (
        <div>
            <div class="flex flex-col items-center border-b bg-base-100 py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
  <a href="#" class="text-2xl font-bold ">Order Summary</a>
  <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
    <div class="relative">
      <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
       <Link href={'/shop'}>
       <li class="flex items-center space-x-3 text-left sm:space-x-4">
          <p class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="/shop"
            ><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg
          >
          </p>
          <span class="font-semibold ">Shop</span>
        </li>
        </Link>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li class="flex items-center space-x-3 text-left sm:space-x-4">
          <a class="flex h-6 w-6 items-center justify-center rounded-full bg-base-300 text-xs font-semibold  ring ring-gray-600 ring-offset-2" href="#">2</a>
          <span class="font-semibold">Shipping</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li class="flex items-center space-x-3 text-left sm:space-x-4">
          <a class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200 text-xs font-semibold " href="#">3</a>
          <span class="font-semibold text-gray-500">Payment</span>
        </li>
      </ul>
    </div>
  </div>
</div>
<div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
  <div class="px-4 pt">
    {/* <p class="text-xl font-medium"></p>
    <p class="text-gray-400">Check your items. And select a suitable shipping method.</p> */}
    <div class="mt-8 space-y-3 rounded-lg border  px-2 py-4 sm:px-6">
      <div class="flex flex-col rounded-lg border sm:flex-row">
        <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div class="flex w-full flex-col px-4 py-4">
          <span class="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
          <span class="float-right text-gray-400">42EU - 8.5US</span>
          <p class="text-lg font-bold">$138.99</p>
        </div>
      </div>
      <div class="flex flex-col rounded-lg border sm:flex-row">
        <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div class="flex w-full flex-col px-4 py-4">
          <span class="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
          <span class="float-right text-gray-400">42EU - 8.5US</span>
          <p class="mt-auto text-lg font-bold">$238.99</p>
        </div>
      </div>
    </div>

    <p class="mt-8 text-lg font-medium">Methods</p>
    <form class="mt-5 grid gap-6">
        {/* Delivery */}
      <div class="relative">
        <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300"></span>
        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-base-300 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
          <img class="w-14 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">Whatsapp</span>
            <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
      {/* <div class="relative">
        <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />
        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 "></span>
        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-base-300 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
          <img class="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">Fedex Delivery</span>
            <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div> */}
    </form>
  </div>
  <div class="mt-10 bg-base-200 px-4 pt-8 lg:mt-0">
    <p class="text-xl font-medium">Your Details</p>
    <p class="text-gray-400">Complete your order by providing your payment details.</p>
    <div class="">
        {/* Name */}
      <label for="name" class="mt-4 mb-2 block text-sm font-medium">Full Name</label>
      <div class="relative">
        <input type="text" id="name" name="name" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Jhon Doe" />
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <FaRegUser className="text-gray-400" />
        </div>
      </div>
      {/* Email */}
      <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
      <div class="relative">
        <input type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        </div>
      </div>
      {/* Phone Number */}
      <label for="number" class="mt-4 mb-2 block text-sm font-medium">Phone</label>
      <div class="relative">
        <input type="text" id="number" name="number" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="+1 123456789" />
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        </div>
      </div>

      {/* <!-- Total --> */}
      <div class="mt-6 border-t border-b py-2">
        {/* <div class="flex items-center justify-between">
          <p class="text-sm font-medium ">Subtotal</p>
          <p class="font-semibold ">$399.00</p>
        </div> */}
        {/* <div class="flex items-center justify-between">
          <p class="text-sm font-medium">Shipping</p>
          <p class="font-semibold">$8.00</p>
        </div> */}
      </div>
      <div class="mt-6 flex items-center justify-between">
        <p class="text-sm font-medium">Total</p>
        <p class="text-2xl font-semibold">$408.00</p>
      </div>
    </div>
    <ReactWhatsapp className='mt-4 mb-8 w-full rounded-md flex items-center justify-center bg-base-300 px-6 py-3 font-medium' number={phone} message={serviceData} ><Image className="w-7 h-7" width={44} height={44} src={`https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png`} />
        Continue With WhatsApp</ReactWhatsapp>
  </div>

</div>

        </div>
    );
}

export default page;
{/* render(<App />, document.getElementById('root')); */}
