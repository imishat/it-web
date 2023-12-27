import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

function Sidebar({price, setPrice}) {

    // params
    const params = useParams()
    // shop id
    const {shopId} = params
    
     // loading
  const [loading, setLoading] = useState(true);
  // get all categories
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/all-category`)
      .then((res) => {
        setCategories(res.data?.data?.result);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  
  
    return (
        <div className="md:w-72 h-fit bg-base-300 ">
          {/* Categories */}
          <div className="p-2">
            <h2 className="font-bold">Categories</h2>
            <div className="w-full">
              {categories?.length ?
              categories?.map((item, i) => {
                return (
                  <div key={i} className="">
                   <Link className={`w-full link-hover pt-1 hover:text-blue-400 flex items-center gap-1  ${shopId==item?.id ? 'ml-5':''}`} href={`/shop/${item?.id}`}>
                   {shopId==item?.id ?<IoIosArrowForward />:""} {item?.name}
                    </Link>
                  </div>
                );
              })
              :
              <div>
                No Categories
              </div>
              }
             
            </div>
          </div>
          {/* Price */}
          <div className="p-2">
            <h2 className="capitalize font-bold">filter by price</h2>
            <div
              className="tooltip tooltip-open tooltip-primary text-white mt-12 w-full"
              data-tip={price}
            >
              <input
                onChange={(e) => setPrice(e.target.value)}
                type="range"
                title={price}
                min={0}
                max="1000"
                defaultValue={price}
                className="range range-success range-xs w-[90%] mx-2"
              />
            </div>
          </div>
        </div>
    );
}

export default Sidebar;