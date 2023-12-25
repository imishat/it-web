'use client';
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function UpdateCategory() {
  // route
  const {updateID} = useParams()
      // form
      const {register,handleSubmit} = useForm()
      // btn
    const [btn,setBtn] = useState('Update')

    // get category by id
    const [category,setCategory] = useState({})
    useEffect(()=>{
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/all-category/${updateID}`)
      .then(res=>{
        setCategory(res.data?.data?.result)
      })
    },[updateID])
    console.log(category,'category')
    
      const [loading, setLoading ] = useState(false);
      const [ url, setUrl ] = useState(category?.picture);
      const uploadImage = (image) => {
          setLoading(true)
      const data = new FormData()
      data.append("file", image)
      data.append("upload_preset", "kwork-image")
      data.append("cloud_name","dl1cxduy0")
      fetch("  https://api.cloudinary.com/v1_1/dl1cxduy0/image/upload",{
      method:"post",
      body: data
      })
      .then(resp => resp.json())
      .then(data => {
      setUrl(data.secure_url)
      setLoading(false)
      
      })
      .catch(err =>setLoading(false))
      }
    
      // update
      const handleUpdateCategory = (data) =>{
        console.log(data)
        setBtn('Updating...')
        const updateData = {
          name:data?.name,
          picture:url,
        }
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/update-category/${updateID}`,updateData)
        .then(res=>{
          if(res.data.success){
            setBtn('Updated')
          }else{
            setBtn('Try Again')
          }
        }).catch(err=>setBtn('Try Again'))
      }

  return (
    <form onSubmit={handleSubmit(handleUpdateCategory)}>
      <div className="flex flex-col max-w-lg mx-auto">
        <p className="px-4 py-2 bg-base-200 mt-2">Title</p>
        <input defaultValue={category?.name} {...register('name',{required:true})}
          className="px-4 py-2 border border-gray-500"
          type="text"
          id=""
        />
        <p className="px-4 py-2 bg-base-200 mt-2">Images</p>
        <div>
          Selected Image
          <img className="w-24 h-24 object-cover flex justify-center mx-auto" src={url||category?.picture} alt="" />
        </div>
        <input onChange={e=>uploadImage(e.target.files[0])}
          className="file-input rounded-none file-input-bordered"
          type="file"
          name=""
          id=""
        />
      </div>
      <div className="w-full flex justify-center mt-3">
        <button className="flex items-center px-4 py-2 w-44 justify-center rounded-md bg-green-600 text-white">
          {btn}
        </button>
      </div>
    </form>
  );
}

export default UpdateCategory;
