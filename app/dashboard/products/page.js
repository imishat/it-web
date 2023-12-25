'use client';
import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../../../app/components/Dashboard/Products/Products";
import Layout from "../../../app/components/Layout/Layout";

function page() {
   // page 
  const [page,setPage] = useState(1)
    // delete btn
    const [deleteBtn,setDeleteBtn] = useState('Confirm')
    // loading
    const [loading,setLoading] = useState(true)
  // limit
  const [limit,setLimit] = useState(12)
  // count
  const  [count,setCount] = useState(0)
  // http://localhost:3003/api/v1/get-service?page=1&limit=12
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
  },[page,deleteBtn==='Deleted'])
  
  const tableData = {
    data:serviceData,
    type:'Products'
  }

      return (
        <Layout>
            <Products loading={loading} tableData={tableData} setPage={setPage} setDeleteBtn={setDeleteBtn} deleteBtn={deleteBtn} page={page} count={count} />
        </Layout>
    );
}

export default page;