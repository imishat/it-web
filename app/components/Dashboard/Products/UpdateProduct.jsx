"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { uploadImage } from "../../../../lib/upload";
function UpdateProduct() {
  // files
  const [files, setFiles] = useState([]);
  
  const { register, handleSubmit, reset } = useForm();

  const router = useParams()
  const {updateId} = router
  const [loading, setLoading] = useState(false);
  
  const [imageUrls, setImageUrls] = useState([]);

  // get single service
  const [service,setService] = useState({})
  useEffect(()=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get-service/${updateId}`)
    .then(res=>{
      setService(res.data?.data)
    })
  },[updateId])

  // selected images
  const [selectedImage,setSelectedImage] = useState([])


  const handleUpload =async() => {
    setLoading(true)
    try {
    let arr = []
    for(let i = 0;i<selectedImage?.length;i++){
     const data = await uploadImage(selectedImage[i])
     arr.push(data)
     console.log(data,'data')
    }
    setImageUrls(arr)
    setLoading(false)
  } catch (error) {
    console.error(error);
    setLoading(false)
  }
  };

  
  const [value, setValue] = useState('');

  const handleTextareaClick = (e) => {
    setValue(prevText => prevText + e);
  };


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
      servicePicture: imageUrls?JSON.stringify(imageUrls):service?.servicePicture,
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
            <ReactQuill theme="snow" value={service?.descripton} onChange={e=>handleTextareaClick (e.target.value ? e.target.value:e)}  />
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
                defaultChecked={service?.categoryId}
              >
                {categories?.length ?
                  categories?.map((category,i)=>{
                    return  <option selected={service?.categoryId===category?.id} key={i} value={category?.id}>{category?.name}</option>
                  }):'No Categories'
                }
               
              </select>
            </div>
            {/* Images */}
            {/* Images */}
            <div className="mt-5">
              <p className="px-4 w-full py-2 bg-base-200 mt-3">Select Images</p>
              { imageUrls?.length ?
         <div className="flex flex-wrap">
         {  imageUrls?.map((image,i)=>{
            return <img key={i} className="w-1/2 h-24 object-cover" src={image?.url} alt="" />
          })}
         </div>:
              <label className="w-full h-44 border-dashed duration-300 border border-gray-300 hover:border-gray-400 flex items-center justify-center">
             
              {
            loading ? 'Uploading...':`${selectedImage?.length ? selectedImage?.length:''} Select Images`
          }
          <input
            onChange={(e) => setSelectedImage(e.target.files)}
            type="file"
            multiple
            hidden
            id="image"
          />
              </label>}
              <div>
               {
                selectedImage?.length ?  <span onClick={()=>handleUpload()} className="hover:bg-orange-500 flex justify-center cursor-pointer bg-orange-400 duration-300 w-full py-2 rounded text-white">{loading?'Uploading...':"Upload Images"}</span>:''
               }
              </div>
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
