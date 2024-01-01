import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
// import { authLogin } from "../../../redux/features/auth/authSlice";
import { AuthContext } from "../../../context/ContextProvider";
import { showModal } from "../../../redux/features/modal/modalSlice";
function LoginModal({}) {
  // rect hook form
  const { register, handleSubmit } = useForm();
  // dispatch
  const dispatch = useDispatch();

  const {userLogin} = useContext(AuthContext)

  // login btn
  const [btn, setBtn] = useState("Login");

  // handle login
  const handleLogin = async (data) => {
    setBtn("Logging in...");
    const email = data?.email;
    const password = data?.password;
    // Sign in an existing user with Firebase
    userLogin(email, password)
      .then((userAuth) => {
        setBtn("Logged In");
        dispatch(showModal(false))
      })
      .catch((err) => {
        console.error(err)
        setBtn('Try Again')
      });
  };


  return (
    <div className="flex fixed items-center top-0 z-50 w-screen h-screen">
      <button
        onClick={() => dispatch(showModal(false))}
        className="fixed top-0 left-0 bg-black bg-opacity-50 w-screen h-screen -z-10"
      ></button>
      <div className="w-full sm:w-96 bg-base-100 rounded-md  h-fit mx-auto">
        <div className=" my-6 mx-6">
          <div className="flex items-center justify-between my-2">
            <h2 className="text-xl  font-bold">Login</h2>{" "}
            <button className="p-3" onClick={() => dispatch(showModal(false))}>
              <MdClose className="fill-gray-600" size={32} />
            </button>
          </div>
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-3">
            {/* Login form */}
            <input
              {...register("email", { required: true })}
              className="px-4 border border-gray-700 py-2 rounded w-full"
              placeholder="Email"
              type="email"
              id=""
            />
            <input
              {...register("password", { required: true })}
              className="px-4 border border-gray-700 py-2 rounded w-full"
              placeholder="Password"
              type="password"
              id=""
            />
            <button className="px-4 bg-[#E77C01] text-white duration-300 hover:bg-[#e28c29] py-2 rounded w-full">
              {btn}
            </button>
          </form>
          {/* Or Social login */}
          <div className="w-full relative"></div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
