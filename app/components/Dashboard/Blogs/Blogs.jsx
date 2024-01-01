'use client';
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../Loading/Loading";
import Products from "../Products/Products";

function Blogs() {
  // page
  const [page,setPage] = useState(1)
  const [limit,setLimit] = useState(12)
  // blogs
  const [blogs,setBlogs] = useState([])
    // delete btn
    const [deleteBtn,setDeleteBtn] = useState('Confirm')
  // loading
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    setLoading(true)
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/all-blog`)
    .then(res=>{
      setBlogs(res.data?.data?.result)
      setLoading(false)
    })
    .catch(err=>{
      setLoading(false)
      console.error(err);
    })
  },[deleteBtn==='Deleted'])
    const tableData = {
        type:'Blogs',
        data:blogs
    }
    return (
        <div>
          {
            loading? <div className="flex items-center justify-center"><Loader /></div>
            :
            <Products tableData={tableData} deleteBtn={deleteBtn} setDeleteBtn={setDeleteBtn} page={page} setPage={setPage} />
          }
           
        </div>
    );
}
 
export default Blogs;