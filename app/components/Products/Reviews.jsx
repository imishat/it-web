"use client";
import axios from "axios";
import parse from "html-react-parser";
import moment from 'moment';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsStarFill } from "react-icons/bs";

function Reviews({ product }) {
  // react hook form
  const {register,handleSubmit} = useForm()
  // state
  const [toggle, setToggle] = useState(true);


  // star
  const [stars, setStar] = useState(0);
  
  // btn
  const [btn,setBtn] = useState('Create')
  // handle create review
  const handleCreateReview = data =>{
    setBtn('Creating...')
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/create-review`,{...data,stars,serviceId:product?.id})
    .then(res=>{
      if(res.data?.success){
        setBtn('Created')
      }else{
        setBtn('Try Again')
      }
    }).catch(err=>{
      console.error(err);
      setBtn('Try Again')
    })
  }
  return (
    <div className="flex  items-center  md:p-10">
      <div className=" w-full md:px-10 flex flex-col gap-2 p-5">
        {/* Description */}
        <div>
          <div>
            <button
              onClick={() => setToggle(true)}
              className={`px-4 py-2 border ${
                toggle === true ? "bg-gray-600 text-white" : "bg-base-200"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setToggle(false)}
              className={`px-4 py-2  border ${
                toggle === true ? "bg-base-200" : "bg-gray-600 text-white"
              }`}
            >
              Reviews
            </button>
          </div>
        </div>

        {toggle ? (
          <div className="flex flex-col gap-3">
            {/* <!-- Description --> */}
            <h1 className="pt-5 text-lg">Description</h1>
            <div className="flex flex-col gap-4  p-4">
              {/* <!-- Profile and Rating --> */}
              <p className="leading-relaxed">
                {product?.descripton ? parse(product?.descripton) : ""}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {/* <!-- Review --> */}
            <h1 className="pt-5 text-lg">Reviews</h1>
            {/* create review */}
            <form onSubmit={handleSubmit(handleCreateReview)}>
              <div className="md:flex w-full gap-2">
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="px-4 py-2 mt-2 bg-base-300 w-full inline-block"
                  >
                    Name
                  </label>
                  <input
                    {...register('name',{required:true})}
                    placeholder="Name"
                    className="w-full border border-gray-300 px-4 py-2"
                    type="text"
                    id="name"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="px-4 py-2 mt-2 bg-base-300 w-full inline-block"
                  >
                    Email
                  </label>
                  <input
                    {...register('email',{required:true})}
                    placeholder="Email"
                    className="w-full border border-gray-300 px-4 py-2"
                    type="email"
                    id="email"
                  />
                </div>
              </div>
              <div>
                {/* Star */}
                <div className="items-center">
                  <p className="px-4 py-2 bg-base-300 mt-2">Select Star</p>
                  <div className="flex justify-center">
                    <div>
                      <ul className="flex items-center gap-2 ">
                        {[...Array(5).keys()]?.map((item, i) => {
                          return (
                            <li key={i}>
                              <BsStarFill
                                onMouseEnter={() => setStar(i + 1)}
                                className={` ${
                                  i >= stars ? "fill-gray-400" : "fill-yellow-500"
                                }`}
                                size={34}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <label htmlFor="message" className="px-4 py-2 bg-base-300 w-full inline-block mt-2">
                Message
              </label>
              <textarea
              {...register('contend',{required:true})}
                className="w-full h-24 border border-gray-300 px-4 py-2"
                placeholder="Review"
                id="message"
              ></textarea>
              <div className="flex justify-between">
                <p></p>
                <button className="px-8 flex justify-end py-2 rounded bg-orange-500 text-white hover:bg-orange-400 duration-300">
                  {btn}
                </button>
              </div>
            </form>
            {product?.Reviews?.length ?
              product?.Reviews?.map((review,i)=>{
                return   <div key={i} className="flex flex-col gap-4  p-4">
                {/* <!-- Profile and Rating --> */}
                <div className="flex justify justify-between">
                  <div className="flex gap-2">
                    <div className="w-7 h-7 text-center rounded-full bg-blue-500 flex justify-center items-center text-white">
                      {review?.name?.slice(0,1)}
                    </div>
                    <span>{review?.name}</span>
                  </div>
                  <div className="flex p-1 gap-1 text-orange-300">
                    {
                      [...Array(review?.stars).keys()].map((item,i)=>{
                        return <BsStarFill key={i} name="star" className="" />
                      })
                    }
                  </div>
                </div>
  
                <div>
                  {review?.contend}
                </div>
  
                <div className="flex justify-between">
                  <span className="text-sm">{moment(review?.createdAt).fromNow()}</span>
                  {/* <button className="p-1 px-2 bg-base-200 hover:bg-base-300 border border-base-200 bg-opacity-60">
                    <ion-icon name="share-outline"></ion-icon> Reply
                  </button> */}
                </div>
              </div>
              }):
              <div>

              </div>
            }
          

          </div>
        )}
      </div>
    </div>
  );
}

export default Reviews;
