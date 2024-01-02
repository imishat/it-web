"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Skeleton from "../Loading/Skeleton";

function Blogs() {
  // loading
  const [loading, setLoading] = useState(true);
  // get all categories
  const [blogs, setBlogs] = useState([]);

  // page
  const [page, setPage] = useState(1);
  // limit
  const [limit, setLimit] = useState(12);
  // count
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/all-blog`)
      .then((res) => {
        setBlogs(res.data?.data?.result);
        setCount(res.data?.data?.total);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [limit, page]);

  // pages for count
  const pages = Math.ceil(count / limit);
  return (
    <div className="mt-10  container mx-auto">
      <div className="block md:flex lg:w-2/3 flex-col md:space-x-2 px-2 lg:p-0">
        {/* <div className="flex">
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
                  src={``}
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
        </div> */}
        <div className="block lg:flex bg-base-200 rounded-md lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
          {/* <!-- post cards --> */}
          <div className="w-full">
            {loading ? (
              <div>
                {[...Array(12).keys()]?.map((item, i) => {
                  return <Skeleton key={i} />;
                })}
              </div>
            ) : blogs?.length ? (
              blogs?.map((blog) => {
                const image = blog?.Picture;
                return (
                  <div
                    key={blog?.id}
                    className="inline-block rounded w-full lg:flex"
                  >
                    <div
                      className={`h-48 lg:w-48 overflow-hidden flex-none bg-cover text-center rounded-xl `}
                      title="deit is very important"
                    >
                      <Image
                        src={image}
                        className="w-full h-full object-cover rounded-xl"
                        height={500}
                        width={500}
                      />
                    </div>
                    <div className="rounded px-4 w-full flex flex-col justify-between leading-normal ">
                        <Link
                          className="mt-3 w-full !break-words md:mt-0 text-blue-500 duration-300 link-hover hover:text-blue-600 pt-4 font-bold text-xl mb-0"
                          href={`/blog/${blog?.id}`}
                        >
                          {blog?.title}
                        </Link>
                        <p className="!break-words w-full text-base">
                          {blog?.descripton && JSON.parse(blog?.descripton)
                            ?.replace(/(<([^>]+)>)/gi, "")
                            ?.split(" ")
                            ?.slice(0, 40)
                            ?.join(" ")}
                          ...
                        </p>
                      <div className="flex mt-3 items-center">
                        <Image
                          width={400}
                          height={400}
                          alt=""
                          src={`https://pbs.twimg.com/profile_images/1707101905111990272/Z66vixO-_normal.jpg`}
                          className="h-10 w-10 rounded-full mr-2 object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-700 text-sm capitalize">
                            {" "}
                            Admin{" "}
                          </p>
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
          
        </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-center my-6">
        <div className="join">
          {pages > 1
            ? [...Array(pages).keys()]?.map((item, i) => {
                return (
                  <button
                    onClick={() => setPage(i + 1)}
                    key={i}
                    className={`join-item btn ${
                      page === i + 1 ? "btn-active" : ""
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
