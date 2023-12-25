import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
function SubNavbar() {
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
    <div className="w-full hidden container mx-auto border-b lg:block">
      {loading ? (
        <ul className="w-full flex  items-center border-r justify-center">
          {[...Array(6).keys()]?.map((item, i) => {
            return (
              <li
                key={i}
                className="w-full rounded-none bg-orange-100 border-gray-400 animate-pulse flex skeleton items-center border-r justify-center"
              >
                <p className="w-auto flex justify-center py-2 h-8 border-b-2 border-transparent hover:border-blue-500"></p>
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="flex text-sm items-center justify-between">
          {categories?.length ? (
            categories?.map((category, i) => {
              return (
                <li
                  key={i}
                  className="w-full flex items-center border-r justify-center"
                >
                  <Link
                    className="w-auto flex justify-center py-2 border-b-2 border-transparent hover:border-[#E77C01]"
                    href={`/shop/${category?.id}`}
                  >
                    {category?.name}
                  </Link>
                </li>
              );
            })
          ) : (
            <li className="w-full flex py-2 border-b-2 items-center border-r justify-center">
              No Categories
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default SubNavbar;
