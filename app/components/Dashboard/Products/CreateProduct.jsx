"use client";
import axios from "axios";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
function CreateProduct() {
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
      setCategories(res.data?.data?.result)
    })
  },[value])
  
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
  const handleUpload = () => {
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
          console.log(imageDataUrl);
          setImage([...image,imageDataUrl])
          imageData.push(imageDataUrl);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    });
  };

  // btn
  const [btn,setBtn] = useState('Create')
  
  // create service
  const handleCreateService = (data) => {
    setBtn('Creating...')
    const serviceData = {
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
          onSubmit={handleSubmit(handleCreateService)}
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
                    return  <option key={i} value={category?.id}>{category?.name}</option>
                  }):'No Categories'
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
      <Modal handleUpload={handleUpload} onChange={onChange} loading={loading} setLoading={setLoading} imageData={imageData} image={image} />
    </div>
  );
}

export default CreateProduct;

const Modal = ({ handleUpload, onChange,loading, setLoading,imageData,image }) => {
  const [selectedImage,setSelectedImage] = useState([])
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Select Images</h3>
       <div className={`${image?.length ? 'grid grid-cols-4':''}`}>
       { image?.length ?
          image?.map((image,i)=>{
            return <img key={i} className="w-12 h-12" src={image} alt="" />
          })
          :
          <label
          className="w-full h-44 border-dashed duration-300 border border-gray-300 hover:border-gray-400 flex items-center justify-center"
          htmlFor="image"
        >
          {/* {files?.length
                  ? `${files?.length} Images Selected`
                  : "Select Images"} */}
          {
            loading ? 'Uploading...':`${selectedImage?.length ? selectedImage?.length:''} Select Images`
          }
          <input
            onChange={(e) => {
              onChange(e)
              setSelectedImage(e.target.files)
            }}
            type="file"
            multiple
            hidden
            id="image"
          />
        </label>
        }
       </div>
        <div>
          <button
            className="btn btn-success text-white w-full rounded-none"
            onClick={() => handleUpload()}
          >
            Upload
          </button>
          <form method="dialog" className="">
            <button className="btn btn-ghost w-full rounded-none">Close</button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
