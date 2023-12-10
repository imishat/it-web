import Link from "next/link";
import { MdClose } from "react-icons/md";
function LoginModal({}) {
    return (
      <div className="flex fixed items-center top-0 z-50 w-screen h-screen">
        <button className="fixed top-0 left-0 bg-black bg-opacity-50 w-screen h-screen -z-10"></button>
          <div className="w-full sm:w-96 bg-base-100 rounded-md  h-96 mx-auto">
            <div className="space-y-3 my-6 mx-6">
               <div className="flex items-center justify-between my-2">
               <h2 className="text-xl  font-bold">Login</h2> <button><MdClose className="fill-gray-600" size={32} /></button>
               </div>
                <input className="px-4 border border-gray-700 py-2 rounded w-full" placeholder="Email" type="text" name="" id="" />
                <input className="px-4 border border-gray-700 py-2 rounded w-full" placeholder="Password" type="password" name="" id="" />
               <button className="px-4 bg-base-300 py-2 rounded w-full">Login</button>
               {/* remember and forgot */}
               <div className="flex items-center justify-between">
                <label htmlFor="remember" className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm rounded-none" name="" id="remember" />
                    <p>Remember Me</p>
                </label>
                <div>
                    <Link href={`#`} className="text-blue-600">Forgot Password?</Link>
                </div>
               </div>
               {/* Or Social login */}
               <div className="w-full relative">
               <div className="divider">OR</div>
               </div>
            </div>
        </div>
      </div>
    );
}

export default LoginModal;