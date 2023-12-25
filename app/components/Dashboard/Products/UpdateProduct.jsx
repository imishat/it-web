"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function UpdateProduct() {
  // files
  const [files, setFiles] = useState([]);
  
  const { register, handleSubmit, reset } = useForm();

  const router = useParams()
  const {updateId} = router

  // get single service
  const [service,setService] = useState({})
  useEffect(()=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get-service/${updateId}`)
    .then(res=>{
      setService(res.data?.data?.result)
    })
  },[updateId])
  const [value, setValue] = useState(service?.descripton);
    // get all categories
    const [categories,setCategories] = useState([])
    useEffect(()=>{
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/all-category`)
      .then(res=>{
        setCategories(res.data?.data?.result)
      })
    
    },[value])
// btn
const [btn,setBtn] = useState('Update')
 // update
  const handleCreateService = (data) => {
    setBtn('Updating...')
    const serviceData = {
      title: data?.title||service?.title,
      descripton: value||service?.descripton,
      servicePicture:'',
      categoryId: data?.categoryId||service?.categoryId,
    };
    
    axios.put(`${process.env.NEXT_PUBLIC_API_URL}/update-category/${updateId}`,serviceData)
    .then(res=>{
      if(res.data?.success){
        setBtn('Updated')
      }else{
        setBtn('Try Again')
      }
    })
    .catch(err=>setBtn('Try Again'))
    console.log(serviceData);
  };

  const description = service?.descripton
  console.log(value)
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
              defaultValue={service?.title}
              id=""
            />
            {/* description */}
            <p className="px-4 w-full py-2 bg-base-200 mt-3">Description</p>
            <ReactQuill theme="snow" value={value} defaultValue={service?.descripton} onChange={setValue}  />
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
              <label
                className="w-full h-44 border-dashed duration-300 border border-gray-300 hover:border-gray-400 flex items-center justify-center"
                htmlFor="image"
              >
                {files?.length
                  ? `${files?.length} Images Selected`
                  : "Select Images"}
                <input
                  onChange={(e) => setFiles(e.target.files)}
                  type="file"
                  accept="image/png, image/jpeg"
                  multiple
                  hidden
                  id="image"
                />
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

export default UpdateProduct;
