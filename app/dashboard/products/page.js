'use client';
import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../../../app/components/Dashboard/Products/Products";
import Layout from "../../../app/components/Layout/Layout";

function page() {
   // page 
  const [page,setPage] = useState(1)
  // limit
  const [limit,setLimit] = useState(12)

  const [serviceData,setServiceData] = useState([])
  useEffect(()=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get-service?page=${page}&limit=${limit}`)
    .then(res=>{
      setServiceData(res.data?.data)
    })
    .catch(err=>console.error(err))
  },[page,limit])
    return (
        <Layout>
            <Products tableData={serviceData} />
        </Layout>
    );
}

export default page;