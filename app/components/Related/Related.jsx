import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../Home/Products/Product";
import Skeleton from "../Loading/Skeleton";

function Related({ service }) {
  const [related, setRelated] = useState([]);

  /// loading 
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    if (service) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_URL}/get-service?page=1&limit=4&searchTerm${service?.id}`
        )
        .then((res) => {
          setLoading(false)
          setRelated(res.data?.data?.result);
        }).catch(err=>{
          console.error(err);
          setLoading(false)
        })
    }
  }, []);
  
  return <div className=" pb-12">
    <div>
        <h2 className="font-bold px-4 mb-5 py-2 text-xl bg-base-300">Related Services</h2>
    </div>
    {
      loading? <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
        {
          [...Array(4).keys()]?.map((item,i)=>{
            return <Skeleton key={i}/>
          })
        }
      </div>
      :
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
      {
          related?.length ? related?.map((product,i)=>{
              return <Product key={i} product={product} />
          })
          :
          <div className="flex justify-center">
            No Data
          </div>
      }
    </div>
    }
   
  </div>
}

export default Related;
