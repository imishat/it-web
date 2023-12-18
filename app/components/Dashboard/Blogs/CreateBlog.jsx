"use client";
import axios from "axios";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
function CreateBlog() {
  // dispatch
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const [value, setValue] = useState("");

  const [imgsSrc, setImgsSrc] = useState([]);
  const [loading, setLoading] = useState(false);
  const imageData = [];
  // ID

  // get all categories
  const [categories,setCategories] = useState([])
  useEffect(()=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/all-category`)
    .then(res=>{
      setCategories(res.data?.data)
    })
  },[])
console.log(categories,'categories')
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
  const [url, setUrl] = useState("");
  const handleUpload = (img) => {
    setLoading(true);
    const data = new FormData();
    imgsSrc.map((img) => {
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
          setUrl(imageDataUrl)
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    });
  };

  // btn
  const [btn,setBtn] = useState('Create')
  
  // create Blog
  const handleCreateBlog = (data) => {
    setBtn('Creating...')
    const blogData = {
      title: data?.title,
      descripton: value,
      servicePicture: 'imageData',
      categoryId: 1,
    };
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/create-service`,serviceData)
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
          onSubmit={handleSubmit(handleCreateBlog)}
          className="md:flex gap-4"
        >
          <div className="flex flex-col w-full">
            <p className="px-4 w-full py-2 bg-base-200 mt-3">Title</p>
            <input
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
            <div className="w-full">
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
                    return  <option value={category?.id}>{category?.name}</option>
                  }):''
                }
               
              </select>
            </div>
            {/* Images */}
            <div className="mt-5">
              <p className="px-4 w-full py-2 bg-base-200 mt-3">Select Images</p>
              <label className="w-full h-44 border-dashed duration-300 border border-gray-300 hover:border-gray-400 flex items-center justify-center">
                <button
                  className=""
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  Select Images
                </button>
              </label>
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

export default CreateBlog;


