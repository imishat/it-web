import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { showModal } from "../../../redux/features/modal/modalSlice";
function LoginModal({}) {
    // dispatch
    const dispatch = useDispatch()
    return (
      <div className="flex fixed items-center top-0 z-50 w-screen h-screen">
        <button onClick={()=>dispatch(showModal(false))} className="fixed top-0 left-0 bg-black bg-opacity-50 w-screen h-screen -z-10"></button>
          <div className="w-full sm:w-96 bg-base-100 rounded-md  h-fit mx-auto">
            <div className=" my-6 mx-6">
               <div className="flex items-center justify-between my-2">
               <h2 className="text-xl  font-bold">Login</h2> <button className="p-3" onClick={()=>dispatch(showModal(false))}><MdClose className="fill-gray-600" size={32} /></button>
               </div>
              <form className="space-y-3">
                {/* Login form */}
              <input className="px-4 border border-gray-700 py-2 rounded w-full" placeholder="Email" type="text" name="" id="" />
                <input className="px-4 border border-gray-700 py-2 rounded w-full" placeholder="Password" type="password" name="" id="" />
               <button className="px-4 bg-[#E77C01] text-white duration-300 hover:bg-[#e28c29] py-2 rounded w-full">Login</button>
              </form>
               {/* Or Social login */}
               <div className="w-full relative">
               </div>
            </div>
        </div>
      </div>
    );
}

export default LoginModal;