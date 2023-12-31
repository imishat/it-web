"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loading/Loading";

function Products() {
    // page 
    const [page,setPage] = useState(1)
    // delete btn
    const [deleteBtn,setDeleteBtn] = useState('Confirm')
    // loading
    const [loading,setLoading] = useState(true)
  // limit
  const [limit,setLimit] = useState(12)
  // count
  const  [count,setCount] = useState(0)
  // http://localhost:3003/api/v1/get-service?page=1&limit=12
  const [reviews,setReviews] = useState([])
  useEffect(()=>{
    setLoading(true)
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get-all-reviews`)
    .then(res=>{
        setReviews(res.data?.data?.result)
      setCount(res.data?.data?.total)
      setLoading(false)
    })
    .catch(err=>{
      setLoading(false)
      console.error(err)})
  },[page,deleteBtn==='Deleted'])


  const pages = Math.ceil(count / limit);

  const [deleteData,setDeleteData] = useState({
    id:1,
    content:'Products'
  })

  return (
   <Layout>
     <div className="relative flex flex-col bg-clip-border rounded-t-xl bg-base-100 text-gray-700 shadow-md   xl:col-span-2">
      {
        loading? 
      <>
        <div className="relative bg-clip-border rounded-t-xl bg-base-300 text-gray-700 shadow-none m-0 flex items-center justify-between px-6 py-2">
        <div>
          <p
            className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1"
          >
            Reviews
          </p>
        </div>
        <button
          aria-expanded="false"
          aria-haspopup="menu"
          id=":r5:"
          className="relative middle none font-sans font-medium text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
          type="button"
        >
          {/* <Link
            href={`${tableData?.type==='Blogs' ? '/dashboard/blogs/create':'/dashboard/products/create'}`}
            className="absolute rounded-full bg-base-100 font-bold px-4 py-2 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          >
            Create
          </Link> */}
        </button>
      </div>
      <div className="flex justify-center">
          <Loader />
        </div>
      </>
        :
<>
<div className="relative bg-clip-border rounded-t-xl bg-base-300 text-gray-700 shadow-none m-0 flex items-center justify-between px-6 py-2">
        <div>
          <p
            className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1"
          >
            Reviews
          </p>
        </div>
        <button
          aria-expanded="false"
          aria-haspopup="menu"
          id=":r5:"
          className="relative middle none font-sans font-medium text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
          type="button"
        >
          {/* <Link
            href={`${tableData?.type==='Blogs' ? '/dashboard/blogs/create':'/dashboard/products/create'}`}
            className="absolute rounded-full bg-base-100 font-bold px-4 py-2 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          >
            Create
          </Link> */}
        </button>
      </div>
      {/* table */}
      <div className="p-6 overflow-x-auto px-0 overflow-y-hidden flex justify-center w-full pt-0 pb-2">
        {
          reviews?.length ?
          <table className="w-full overflow-y-hidden md:min-w-[440px] table-auto">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  Content
                </p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  Name
                </p>
              </th>
              
                <th className="border-b border-blue-gray-50 w-12  py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  Email
                </p>
              </th>
              
              
              <th className="border-b border-blue-gray-50 w-12 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  action
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            { reviews?.map((review, i) => {
              return (
                <tr key={i}>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="flex items-center gap-4">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold w-24 md:w-72 truncate">
                        {review?.contend}
                      </p>
                    </div>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                      {review?.name}
                    </p>
                  </td>
                  {/* price */}
                  {
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                    {review?.email}
                    </p>
                  </td>
            }
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="w-10/12 flex items-center gap-1">
                    {/* <Link href={`${tableData?.type==='Products' ? `/dashboard/products/update/${table?.id}`:`/dashboard/blogs/update/${table?.id}`}`}>
                    <button className="px-3 py-1 bg-green-100 text-green-600">
                        Edit
                      </button>
                      </Link> */}
                      {/* <div className="dropdown dropdown-content dropdown-left dropdown-top relative">
                        <button
                          tabIndex={0}
                          role="button"
                          className="px-3 py-1 bg-rose-100 text-rose-600"
                        >
                          Delete
                        </button>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] flex justify-end absolute menu p-2 bg-base-100 w-80 border rounded-md border-gray-400 shadow-lg"
                        >
                          <div className="w-full">
                           <div className="flex items-center justify-between w-full gap-2">
                            <p>Confirm to delete this Product</p>
                            <button onClick={()=>handleDelete(table?.id)} className="bg-rose-600 text-white px-4 py-2 rounded">{deleteBtn}</button>
                           </div>
                          </div>
                        </ul>
                      </div> */}
                      <button
                      className="tooltip bg-rose-100 text-rose-600 px-4 py-1 rounded"
                      data-tip="Delete"
                      onClick={() => {
                        document.getElementById("my_modal_2").showModal();
                        setDeleteData({
                          id: review?.id,
                          content: review?.contend
                        });
                      }}
                    >
                      Delete
                    </button>
                    </div>
                  </td>
                </tr>
              );
            })
            }
          </tbody>
        </table>
        :
        <div>
          No Data
        </div>
        }
        <Modal deleteData={deleteData}  deleteBtn={deleteBtn} setDeleteData={setDeleteData} setDeleteBtn={setDeleteBtn} />
      </div>
</>
      }
      

      {/* <div>
        {
          <div className="join flex w-full justify-center py-4 items-center mx-auto">
            {[...Array(pages||0).keys()].map((item, i) => {
              return (
                <button onClick={()=>setPage(i+1)} className={`btn join-item btn-sm ${page===i+1 ? 'btn-active':''}`} key={i}>
                  {i + 1}
                </button>
              );
            })}
          </div>
        }
      </div> */}
    </div>
   </Layout>
  );
}

export default Products;

const Modal = ({ deleteData,deleteBtn,setDeleteBtn,setDeleteData }) => {
 
  // handle delete

  const handleDelete = id =>{
    setDeleteBtn('Deleting...')
    axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/deleted-review/${id}`)
    .then(res=>{
      setDeleteBtn('Deleted')
    })
    .catch(err=>{
      setDeleteBtn('Try Again')
    })
  }
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg">Confirm to Delete</h3>
          <form method="dialog" className="">
            <button className="rounded-full px-1 py-0 flex items-center justify-center text-red-400 bg-red-50">
              <MdClose size={32} />
            </button>
          </form>
        </div>
        <h2>{deleteData?.content?.split(' ')?.slice(0,4)?.join(' ')}</h2>
        <div className="flex items-center justify-end">
         
            <button onClick={()=>handleDelete(deleteData?.id)} className={`px-4 py-2 rounded bg-red-400 text-white`}>
              {deleteBtn}
            </button>
          
        </div>
      </div>
      <form
        onClick={() => setDeleteData("")}
        method="dialog"
        className="modal-backdrop"
      >
        <button>close</button>
      </form>
    </dialog>
  );
};