"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

import { MdClose } from "react-icons/md";
import Loader from "../../Loading/Loading";

function Categories() {
  const [btn,setBtn] = useState('Delete')
  // loading
  const [loading, setLoading] = useState(true);
  // get all categories
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/all-category`)
      .then((res) => {
        setCategories(res.data?.data?.result);
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  }, [btn==='Deleted']);
  // action
  const [actionData, setActionData] = useState({
    id: 1,
    type: "delete",
    title: "Product name",
    data: {
      id: 1,
      slug: "",
      value: "",
    },
  });
  return (
    <div>
      <div className="w-full bg-base-100 border shadow-md h-96 min-w-[300px] rounded-xl">
        <div className="w-full bg-base-300 px-2 py-2 flex items-center justify-between rounded-t-xl font-bold">
          <h2 className="text-sm">Categories</h2>
          <Link
            href={"/dashboard/categories/create"}
            className="px-4 bg-base-100  py-1 rounded-full text-sm"
          >
            Create
          </Link>
        </div>
        <div>
          <ul className=" ">
            {loading ? (
              <div className="flex items-center justify-center w-full">
                <Loader />
              </div>
            ) : categories?.length ? (
              categories?.map((category, i) => {
                return (
                  <li
                    key={i}
                    className="py-2  border-b px-2 bg-base-100 flex items-center gap-2"
                  >
                    <img
                      src={category?.picture}
                      className="w-8 rounded h-8"
                      alt=""
                    />
                    <Link
                      href={`/category/${category?.id}`}
                      className="link-hover"
                    >
                      {category?.name}
                    </Link>
                    <Link href={`/dashboard/categories/update/${category?.id}`}
                      className="tooltip bg-green-100 text-green-600 px-4 py-1 rounded"
                      data-tip="Action"
                    >
                      Edit
                    </Link>
                    <button
                      className="tooltip bg-rose-100 text-rose-600 px-4 py-1 rounded"
                      data-tip="Action"
                      onClick={() => {
                        document.getElementById("my_modal_2").showModal();
                        setActionData({
                          id: category?.id,
                          type: "delete",
                          title: category?.name,
                          image: category?.picture,
                        });
                      }}
                    >
                      Delete
                    </button>
                  </li>
                );
              })
            ) : (
              <div className="flex items-center justify-center w-full">
                No Data
              </div>
            )}
          </ul>
        </div>
      </div>

      <Modal actionData={actionData} setActionData={setActionData} btn={btn} setBtn={setBtn} />
    </div>
  );
}

export default Categories;

const Modal = ({ actionData,btn,setBtn,setActionData }) => {
 
  const deleteCategory = id =>{
    setBtn('Deleting...')
    axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/Deleted-category/${id}`)
    .then(res=>{
      setBtn('Deleted')
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
        <h2>{actionData?.title}</h2>
        <div className="flex items-center justify-end">
          {actionData?.type === "delete" ? (
            <button onClick={()=>deleteCategory(actionData?.id)} className={`px-4 py-2 rounded bg-red-400 text-white`}>
              {btn}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <form
        onClick={() => setActionData("")}
        method="dialog"
        className="modal-backdrop"
      >
        <button>close</button>
      </form>
    </dialog>
  );
};
