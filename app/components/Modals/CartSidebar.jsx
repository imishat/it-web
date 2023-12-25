import Link from "next/link";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../redux/features/cart/cartSlice";

function CartSidebar({setShowSidebar,showSidebar}) {
  //dispatch
  const dispatch = useDispatch()
  // cart data
  // const [cartData,setCartData] 
  const cart = useSelector(state=>state.cart)
  
    return (
      <div>
      <div className={`fixed h-screen overflow-y-auto w-96 z-50 duration-300 top-0 bg-base-300  ${showSidebar ? 'right-0':'-right-96'}`}>
    <div className="flex items-center justify-between sticky top-0 bg-base-100 pl-4">
     <button>Cart</button>
     <button onClick={()=>setShowSidebar(!showSidebar)} className="px-4 py-2 bg-rose-50 text-rose-600">Close</button>
    </div>
    <div className="h-[90vh]">
     {cart?.length ?
      cart?.map((cart,i)=>{
         return <div key={i} className="flex  my-2 border-b gap-2 px-1 border-gray-400">
           <div className="w-14 overflow-hidden h-12">
           <img className=" object-cover w-full h-full object-top border border-gray-400 rounded" src={cart?.image?.image} alt="" />
           </div>
           <div className="flex flex-col space-y-1">
             <h2 className="font-bold text-sm leading-4">{cart?.title}</h2>
             <p className="text-sm">12$</p>
           </div>
           <button onClick={()=>dispatch(removeFromCart(cart?.id))}>
             <IoCloseCircleOutline className="text-rose-600 bg-rose-100 p-1 rounded-full" size={32} />
           </button>
         </div>
       }):
       <div className="h-[90vh] justify-center flex items-center">
        <p>No Service Selected</p>
       </div>
     }
    </div>
    <Link href={`/checkout`} className="flex items-center bg-green-100 text-green-600 py-2 hover:bg-green-200 cursor-pointer gap-3 font-bold sticky bottom-0 justify-center">
     <button>Checkout</button>
     <p>12$</p>
    </Link>
    </div>
    {
     showSidebar ? <button onClick={()=>setShowSidebar(!showSidebar)} className="w-screen h-screen bg-black bg-opacity-40 left-0 top-0 fixed z-10"></button>:''
    }
    </div>
    );
}

export default CartSidebar;