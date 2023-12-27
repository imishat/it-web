"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
function UpdateBlog() {
  // router
  const params = useParams()
  // updateid
  const {updateId} = params
  // dispatch
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const [value, setValue] = useState("");

  const [imgsSrc, setImgsSrc] = useState([]);
  const [loading, setLoading] = useState(false);
  const imageData = [];
  // ID

  // get single blog
  const [blog,setBlog] = useState([])
  useEffect(()=>{
   if(updateId){
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get-blog/${updateId}`)
    .then(res=>{
      setBlog(res.data?.data)
    })
   }
  },[])
// console.log(categories,'categories')
  const [image, setImage] = useState([]);

  const onChange = (e) => {
    // console.log(e.target.value)
    for (const file of e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImgsSrc((imgs) => [...imgs, reader.result]);
      };
      reader.onerror = () => {
        console.log(reader.error);
      };
    }
  };
  const [imageUrl, setImageUrl] = useState("");
  const handleUpload = (img) => {
    setLoading(true);
    const data = new FormData();
      data.append("file", img);
      data.append("upload_preset", "services_image");
      data.append("cloud_name", "dtmfvaux5");
      fetch("  https://api.cloudinary.com/v1_1/dtmfvaux5/image/upload", {
        method: "POST",
        body: data,
      })
        .then((resp) => resp.json())
        .then((data) => {
          const imageDataUrl = data.secure_url;
          setLoading(false);
          setImageUrl(imageDataUrl)
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
  };

  // btn
  const [btn,setBtn] = useState('Create')
  
  // create Blog
  const handleUpdateBlog = (data) => {
    setBtn('Creating...')
    const blogData = {
      title: data?.title,
      descripton: value,
      Picture: imageUrl
    };
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/create-blog`,blogData)
    .then(res=>{
      if(res.data?.success){
        setBtn('Created')
      }else{
        setBtn('Try Again')
      }
    })
    .catch(err=>setBtn('Try Again'))
  };

  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit(handleUpdateBlog)}
          className="md:flex gap-4"
        >
          <div className="flex flex-col w-full">
            <p className="px-4 w-full py-2 bg-base-200 mt-3">Title</p>
            <input
            defaultValue={blog?.title}
              {...register("title", { required: true })}
              className="px-4 py-2 border border-gray-400"
              type="Title"
              id=""
            />
            {/* description */}
            <p className="px-4 w-full py-2 bg-base-200 mt-3">Description</p>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </div>
          <div className="md:w-96 flex flex-col">
            {/* categories */}
            {/* <div className="w-full">
              <p className="px-4 w-full py-2 bg-base-200 mt-3">
                Select Categories
              </p>
              <select
                {...register("categoryId", { required: true })}
                className="select w-full select-bordered rounded-none"
                id=""
              >
                {categories?.length ?
                  categories?.map((category,i)=>{
                    return  <option key={i} value={category?.id}>{category?.name}</option>
                  }):''
                }
               
              </select>
            </div> */}
            {/* Images */}
            <div className="mt-0">
              {
                imageUrl ? <div className="w-full h-44 border-dashed duration-300 border border-gray-300 hover:border-gray-400 flex items-center justify-center">
                  <img className="w-full h-44 border-dashed duration-300 border border-gray-300 hover:border-gray-400 flex items-center justify-center object-cover" src={imageUrl} alt="" />
                  </div>
                :
                <>
                 <p className="px-4 w-full py-2 bg-base-200 mt-3">Select Image</p>
              <label htmlFor="image" className="w-full h-44 border-dashed duration-300 border border-gray-300 hover:border-gray-400 flex items-center justify-center">
                <span
                  className="flex items-center justify-center"
                >
                  <input onChange={(e)=>handleUpload(e.target.files[0])} type="file" hidden name="" id="image" />
                {loading?'Uploading...':'Select Image'}  
                </span>
              </label>
              </>
              }
             
            </div>
            {/* Submit */}
            <button className="px-4 mt-6 py-2 bg-green-500 hover:bg-gray-400 text-white">
              {btn}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateBlog;


