"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Categories from "./Categories/Categories";

function Blogs() {
  // loading
  const [loading, setLoading] = useState(true);
  // get all categories
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/all-blog`)
      .then((res) => {
        setBlogs(res.data?.data?.result);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="mt-10 container mx-auto">
      <div className="block md:flex w-full flex-col md:space-x-2 px-2 lg:p-0">
        <div className="flex">
          <Link
            className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block h-[24em]"
            href={`/blog/12`}
          >
            <div className="absolute left-0 bottom-0 w-full h-full z-10"></div>
            <Image
              width={400}
              height={500}
              alt=""
              src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
              className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                Nutrition
              </span>
              <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                Pellentesque a consectetur velit, ac molestie ipsum. Donec
                sodales, massa et auctor.
              </h2>
              <div className="flex mt-3">
                <Image
                  height={400}
                  width={500}
                  alt=""
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-200 text-sm">
                    {" "}
                    Mike Sullivan{" "}
                  </p>
                  <p className="font-semibold text-gray-400 text-xs">
                    {" "}
                    14 Aug{" "}
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <a
            className="w-full md:w-1/3 relative rounded h-[24em]"
            href={`/blog/12`}
          >
            <div className="absolute left-0 top-0 w-full h-full z-10"></div>
            <Image
              width={400}
              height={400}
              alt=""
              src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80"
              className="absolute  left-0 top-0 w-full h-full rounded z-0 object-cover"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                Science
              </span>
              <h2 className="text-3xl font-semibold text-gray-100 leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h2>
              <div className="flex mt-3">
                <Image
                  width={400}
                  height={400}
                  alt=""
                  src="https://images-na.ssl-images-amazon.com/images/M/MV5BODFjZTkwMjItYzRhMS00OWYxLWI3YTUtNWIzOWQ4Yjg4NGZiXkEyXkFqcGdeQXVyMTQ0ODAxNzE@._V1_UX172_CR0,0,172,256_AL_.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-200 text-sm">
                    {" "}
                    Chrishell Staus{" "}
                  </p>
                  <p className="font-semibold text-gray-400 text-xs">
                    {" "}
                    15 Aug{" "}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
          {/* <!-- post cards --> */}
          <div className="w-full lg:w-2/3">
            {blogs?.length ? (
              blogs?.map((blog) => {
                return (
                  <div
                    key={blog?.id}
                    className="block rounded w-full lg:flex mb-10"
                  >
                    <div
                      className="h-48 lg:w-48 flex-none bg-cover text-center rounded-xl  opacity-75 bg-[url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')]"
                      title="deit is very important"
                    ></div>
                    <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                      <div>
                        <Link className="" href={`/blog/${blog?.id}`}>
                          <div className="mt-3 md:mt-0 text-blue-500 duration-300 link-hover hover:text-blue-600 font-bold text-xl mb-2">
                            {blog?.title}
                          </div>
                        </Link>
                        <p className="text-gray-700 text-base">
                          {blog?.descripton?.replace(/(<([^>]+)>)/gi, "")?.split(' ')?.slice(0,40)?.join(' ')}...
                        </p>
                      </div>
                      <div className="flex mt-3">
                        <Image
                          width={400}
                          height={400}
                          alt=""
                          src="https://randomuser.me/api/portraits/men/86.jpg"
                          className="h-10 w-10 rounded-full mr-2 object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-700 text-sm capitalize">
                            {" "}
                            eduard franz{" "}
                          </p>
                          <p className="text-gray-600 text-xs"> 14 Aug </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>No Blogs</div>
            )}
          </div>

          {/* <!-- right sidebar --> */}
          <Categories />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
