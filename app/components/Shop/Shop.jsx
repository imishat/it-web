"use client";
import axios from "axios";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Product from "../Home/Products/Product";
import Skeleton from "../Loading/Skeleton";
import Sidebar from "./Sidebar";

function Shop() {
  // params
  const params = useParams();
  // query c
  const query = useSearchParams()
  
  const search = query.get('search')
 
  // shopId
  const { shopId } = params;
  // get category by shop id
  const [category, setCategory] = useState();
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/all-category/${shopId}`)
      .then((res) => {
        setCategory(res.data?.data?.result);
      });
  }, [shopId]);
  const [products, setProducts] = useState([]);
  // limit
  const limit = 24;

  // page
  const [page, setPage] = useState(1);

  // loading
  const [loading, setLoading] = useState(true);
  // count
  const [count, setCount] = useState(0);

  // sorting
  const [sort,setSort] = useState('0')

  // pages
  const pages = Math.ceil(count / limit);

  // range slider
const [price, setPrice] = useState('500');

const filteredData = products?.filter(item=>item?.price <= parseInt(price))


  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/get-service?searchTerm=${search||shopId}&page=${page}&limit=${limit}`
      )
      .then((res) => {
        setProducts(res.data?.data?.result);
        setCount(res.data?.data?.total);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [page, limit,sort]);




  return (
    <div className="container  mx-auto h-screen mb-12">
      <div className="h-20 mb-4 px-5 md:px-2 bg-base-300 flex text-lg items-center">
      <h2>{search ? `Searching: ${search}`:category?.id ? category?.name : "All Services"}</h2>
      </div>
      <div className="md:flex gap-2">
        {/* Sidebar */}
        <Sidebar price={price} setPrice={setPrice} />
        <div className="w-full">
          {/*  */}
          <div className="w-full flex items-center justify-between">
            <h2>{search ? `Searching: ${search}`:category?.id ? category?.name : "All Services"}</h2>
            <div className="flex items-center gap-2">
              <p>Sort:</p>
              <select
                className="select select-bordered select-sm rounded-none my-2"
                onChange={(e)=>setSort(e.target.value)}
                id=""
              >
                <option value="0">Ascending</option>
                <option value="1">Descending</option>
              </select>
            </div>
          </div>
          { loading ?  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full gap-4">
          {[...Array(limit).keys()]?.map((item, i) => {
            return <Skeleton key={i} />;
          })}
        </div> :
            !filteredData?.length? <div className="flex justify-center">
              No Data
            </div>
            :
            <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {filteredData?.sort((a,b)=>sort === '0' ?  b?.id - a?.id : a?.id - b?.id )?.map((product, i) => {
              return <Product key={i} product={product} />;
            })}
          </div>
          }
        
        </div>
      </div>
          {/* Pagination */}
      <div className="flex justify-center my-6">
        <div className="join">
          {pages>1
            ? [...Array(pages).keys()]?.map((item, i) => {
                return (
                  <button
                    onClick={() => setPage(i+1)}
                    key={i}
                    className={`join-item btn ${
                      page === i+1 ? "btn-active" : ""
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              }):''
            }
        </div>
      </div>
    </div>
  );
}

export default Shop;

export const metadata = { title: "Shop" };
