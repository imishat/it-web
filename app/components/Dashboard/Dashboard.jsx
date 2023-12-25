'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { BsShop } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { LiaStarSolid } from "react-icons/lia";
import { LuMenuSquare } from "react-icons/lu";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
function Dashboard() {

  // page 
  const [page,setPage] = useState(1)
  // limit
  const [limit,setLimit] = useState(5)
  // btn
  const [deleteBtn,setDeleteBtn] = useState('Confirm')
  // count 
  const [count,setCount] = useState(0)
    // loading
    const [loading,setLoading] = useState(true)

  const [serviceData,setServiceData] = useState([])
  useEffect(()=>{
    setLoading(true)
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get-service?page=${page}&limit=${limit}`)
    .then(res=>{
      setServiceData(res.data?.data?.result)
      setCount(res.data?.data?.total)
      setLoading(false)
    })
    .catch(err=>{
      setLoading(false)
      console.error(err)})
  },[page,limit])
// services
  const [allServices,setAllServices] = useState([])
  useEffect(()=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get-service`)
    .then(res=>{
      setAllServices(res.data?.data?.result)
    })
    .catch(err=>console.error(err))
  },[])
  // blogs
  const [blogs,setBlogs] = useState([])
  useEffect(()=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/all-blog`)
    .then(res=>{
      setBlogs(res.data?.data?.result)
    })
    .catch(err=>console.error(err))
  },[])
  // categories
  const [categories,setCategories] = useState([])
  useEffect(()=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/all-category`)
    .then(res=>{
      setCategories(res.data?.data?.result)
    })
    .catch(err=>console.error(err))
  },[])

  // data
  const tableData ={
    type:'Services',
    data:serviceData
  }

  return (
    <div>
       <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4 rounded-xl   bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
           <BsShop size={24} />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Services</p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{allServices?.length}</h4>
          </div>
          {/* <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong className="text-green-500">+55%</strong>&nbsp;than last week
            </p>
          </div> */}
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4 rounded-xl   bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
           <IoMenu size={24} />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Blogs</p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{blogs?.length}</h4>
          </div>
          {/* <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong className="text-green-500">+3%</strong>&nbsp;than last month
            </p>
          </div> */}
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4 rounded-xl   bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
           <LiaStarSolid size={24} />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Reviews</p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">0</h4>
          </div>
          {/* <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong className="text-red-500">-2%</strong>&nbsp;than yesterday
            </p>
          </div> */}
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4 rounded-xl   bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <LuMenuSquare size={24} />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Categories</p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{categories?.length}</h4>
          </div>
          {/* <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong className="text-green-500">+5%</strong>&nbsp;than yesterday
            </p>
          </div> */}
        </div>
      </div>
      
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
       {/* Products */}
       <Products loading={loading} deleteBtn={deleteBtn} setDeleteBtn={setDeleteBtn} count={count} tableData={tableData} />
        {/* Categories */}
       <Categories />
      </div>
    </div>

    </div>
  );
}

export default Dashboard;

