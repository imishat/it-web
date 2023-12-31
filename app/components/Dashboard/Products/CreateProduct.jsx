"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { uploadImage } from '../../../../lib/upload';

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function CreateProduct() {
  // dispatch
  // const dispatch = useDispatch();

  const router = useRouter()

  const { register, handleSubmit, reset } = useForm();

  const [value, setValue] = useState("");

  const [loading, setLoading] = useState(false);

  const [imageUrls, setImageUrls] = useState([]);



  // get all categories
  const [categories,setCategories] = useState([])
  useEffect(()=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/all-category`)
    .then(res=>{
      setCategories(res.data?.data?.result)
    })
  },[loading,imageUrls])
  

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

  // btn
  const [btn,setBtn] = useState('Create')
  
  // create service
  const handleCreateService = (data) => {
    setBtn('Creating...')
    const serviceData = {
      title: data?.title,
      descripton: value,
      subDescription:data?.subDescription,
      price: parseInt(data?.price),
      servicePicture: JSON.stringify(imageUrls),
      categoryId: parseInt(data?.categoryId),
    };
    console.log(serviceData,'service')
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/create-service`,serviceData)
    .then(res=>{
      if(res.data?.success){
        setBtn('Created')
        router.push('/dashboard/products')
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
            <ReactQuill placeholder="Description" theme="snow" value={value} onChange={setValue} />
          
          </div>

          <div className="md:w-96 flex flex-col">
            {/* categories */}
            <div className="w-full">
              <p className="px-4 w-full py-2 bg-base-200 mt-3">
                Select Categories
              </p>
              {
                categories?.length ?
                <select
                {...register("categoryId", { required: true })}
                className="select w-full select-bordered rounded-none"
                id=""
              >
                {
                  categories?.map((category,i)=>{
                    return  <option key={i} value={category?.id}>{category?.name}</option>
                  })
                }
               
              </select>
              :'No Categories'
              }
            
            </div>
            {/* Price */}
            <div className="w-full">
              <p className="px-4 w-full py-2 bg-base-200 mt-3">
                Price
              </p>
              <input  {...register("price", { required: true })} className="px-4 py-2 border border-gray-400" type="number" id="" />
            </div>
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
            <div>
                {/* subDescription */}
                <h2 className="px-4 w-full py-2 bg-base-200">Short Description</h2>
            <textarea placeholder="Short Description"   {...register("subDescription", { required: true })} className="w-full h-44 px-2 py-1 border border-gray-300"></textarea>
            </div>
            {/* Submit */}
            <button disabled={!imageUrls?.length} className="px-4 mt-6 disabled:bg-gray-300 py-2 hover:bg-orange-500 bg-orange-400 text-white">
              {btn}
            </button>
          </div>
        </form>
      </div>
      {/* <Modal handleUpload={handleUpload} onChange={onChange} loading={loading} setLoading={setLoading} imageData={imageData} imageUrls={imageUrls} /> */}
    </div>
  );
}

export default CreateProduct;

// const Modal = ({ handleUpload, onChange,loading, setLoading,imageData,imageUrls }) => {
//   const [selectedImage,setSelectedImage] = useState([])
//   return (
//     <dialog id="my_modal_2" className="modal">
//       <div className="modal-box">
//         <h3 className="font-bold text-lg">Select Images</h3>
//        <div className={`${imageUrls?.length ? 'grid grid-cols-4':''}`}>
//        { imageUrls?.length ?
//           imageUrls?.map((image,i)=>{
//             return <img key={i} className="w-12 h-12" src={image} alt="" />
//           })
//           :
//           <label
//           className="w-full h-44 border-dashed duration-300 border border-gray-300 hover:border-gray-400 flex items-center justify-center"
//           htmlFor="image"
//         >
//           {/* {files?.length
//                   ? `${files?.length} Images Selected`
//                   : "Select Images"} */}
//           {
//             loading ? 'Uploading...':`${selectedImage?.length ? selectedImage?.length:''} Select Images`
//           }
//           <input
//             onChange={(e) => {
//               onChange(e)
//               setSelectedImage(e.target.files)
//             }}
//             type="file"
//             multiple
//             hidden
//             id="image"
//           />
//         </label>
//         }
//        </div>
//         <div>
//           <button
//             className="btn btn-success text-white w-full rounded-none"
//             onClick={() => handleUpload()}
//           >
//             Upload
//           </button>
//           <form method="dialog" className="">
//             <button className="btn btn-ghost w-full rounded-none">Close</button>
//           </form>
//         </div>
//       </div>
//       <form method="dialog" className="modal-backdrop">
//         <button>close</button>
//       </form>
//     </dialog>
//   );
// };
