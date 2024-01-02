"use client";
import axios from "axios";
import parse from "html-react-parser";
import moment from "moment";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Blog() {
  // params
  const params = useParams();
  const { blogId } = params;
  // loading
  const [loading, setLoading] = useState(true);
  // blog data
  const [blog, setBlog] = useState({});
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/get-blog/${blogId}`)
      .then((res) => {
        setBlog(res.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
const parseData = blog?.descripton ? JSON.parse(blog?.descripton):""
console.log(parseData,'parseData')
  return (
    <div className="p-5 flex mx-auto sm:p-10 md:p-16 ">
      {loading ? (
        <div className="flex w-full flex-col max-w-4xl   rounded">
          <div
            alt=""
            className="w-full h-60 object-cover sm:h-96 skeleton bg-gray-500"
          ></div>
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-base-200">
            <div className="space-y-2">
              <p
                rel="noopener noreferrer"
                className="inline-block h-8 w-full bg-base-300 skeleton text-2xl font-semibold sm:text-3xl"
              >
              </p>
              <p className="text-xs h-5 bg-base-300 rounded-lg "></p>
            </div>
            <div className="dark:text-gray-100 skeleton bg-base-300 h-96 flex flex-col"></div>
          </div>
        </div>
      ) : (
        <div className="flex w-full flex-col mx-auto md:max-w-4xl   rounded">
          <Image
            height={200}
            width={400}
            src={blog?.Picture}
            alt=""
            className="w-full h-60 border shadow-xl rounded-md object-cover sm:h-96 bg-base-300"
          />
          <div className="p-6 pb-12 m-4 mx-auto lg:-mt-16 space-y-6 w-full sm:max-w-xl lg:max-w-3xl sm:px-10 sm:mx-12 lg:rounded-md bg-base-200">
            <div className="space-y-2">
              <p
                rel="noopener noreferrer"
                className="inline-block text-2xl break-words w-full font-semibold sm:text-3xl"
              >
                {blog?.title}
              </p>
              <p className="text-xs">
                {moment(blog?.createdAt).fromNow()}
              </p>
            </div>
            <div className="flex blog-body flex-col break-words w-full">
              {parseData ? <p>{parse(parseData)}</p> : ""}
            </div>
          </div>
        </div>
      )}
      {/* Categories */}
      {/* <Categories /> */}
    </div>
  );
}

export default Blog;
