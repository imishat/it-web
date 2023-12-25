'use client';
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
// hook form
function CreateCategory() {
    const {register,handleSubmit,reset} = useForm()
    const [loading, setLoading ] = useState(false);
    const [ url, setUrl ] = useState("");
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
// btn
const [btn,setBtn] = useState('Create')
    // create category
    const handleCreateCategory = (data) =>{
        setBtn('Creating...')
        const categoryData = {
            name:data?.name,
            picture:url
        }
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/create-category`,categoryData)
        .then(res=>{
            setBtn('Created')
        })
        .catch(err=>setBtn('Try Again'))
    }
    return (
        <form onSubmit={handleSubmit(handleCreateCategory)}>
        <div className="flex flex-col max-w-lg mx-auto">
            <p className="px-4 py-2 bg-base-200 mt-2">Title</p>
            <input {...register('name',{required:true})} className="px-4 py-2 border border-gray-500" type="text" id="" />
            <p className="px-4 py-2 bg-base-200 mt-2">Images</p>
           {
            url ?  <div> 
                <h2>Selected Image</h2>
                <img src={url} className="w-24 h-24 flex justify-center mx-auto object-cover" alt="" />
            </div>:''
           }
            <input onChange= {(e)=> uploadImage(e.target.files[0])} className="file-input rounded-none file-input-bordered" type="file" name="" id="" />
        </div>
        <div className="w-full flex justify-center mt-3">
    <button disabled={loading} className="flex items-center px-4 py-2 w-44 justify-center rounded-md bg-green-600 text-white">{loading ? 'Loading...':btn}</button>
        </div>
    </form>
    );
}

export default CreateCategory;