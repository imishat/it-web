import axios from "axios";

export const uploadImage = async(url)=>{
    const formData = new FormData()
    formData.append('file',url)
    formData.append("upload_preset", "services_image");
    formData.append("cloud_name", "dgf2zlqx9");
  const {data} = await axios.post('https://api.cloudinary.com/v1_1/dgf2zlqx9/image/upload',formData)
  return {publicId: data?.public_id, url:data?.secure_url}
}