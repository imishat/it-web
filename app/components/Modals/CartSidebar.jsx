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
  // total price
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price;
  }, 0)
    return (
      <div>
      <div className={`fixed h-screen overflow-y-auto w-96 z-50 duration-300 top-0 bg-base-300  ${showSidebar ? 'right-0':'-right-96'}`}>
    <div className="flex items-center py-2 justify-between sticky top-0 bg-base-100 pl-4">
     <button className="font-bold text-xl">Cart</button>
     <button onClick={()=>setShowSidebar(!showSidebar)} className="px-4 py-2 bg-rose-50 text-rose-600">Close</button>
    </div>
    <div>
     {cart?.length ?
      cart?.map((cart,i)=>{
         return <div key={i} className="flex  my-2 border-b gap-2 px-1 border-gray-400">
           <div className="w-24 overflow-hidden h-16 ">
           <img className="object-cover w-full h-full object-top border border-gray-400 rounded" src={cart?.servicePicture? JSON.parse(cart?.servicePicture)[0]?.url:''} alt="" />
           </div>
           <div className="flex w-full flex-col space-y-1">
             <h2 className="font-bold text-sm leading-4">{cart?.title}</h2>
             <p className="text-sm">{cart?.price}$</p>
           </div>
           <button onClick={()=>dispatch(removeFromCart(cart?.id))}>
             <IoCloseCircleOutline className="text-rose-600 bg-rose-100 p-1 rounded-full" size={32} />
           </button>
         </div>
       }):
       <div className="h-[85vh] justify-center flex items-center">
        <p>No Service Selected</p>
       </div>
     }
    </div>
  {
    totalPrice ?   <Link href={`/checkout`} className="flex items-center bg-orange-500 text-white py-2 hover:bg-orange-400 duration-300 cursor-pointer gap-3 font-bold sticky bottom-0 justify-center">
    <button>Checkout</button>
    <p>{totalPrice}$</p>
   </Link>:''
  }
    </div>
    {
     showSidebar ? <button onClick={()=>setShowSidebar(!showSidebar)} className="w-screen h-screen bg-black bg-opacity-40 left-0 top-0 fixed z-10"></button>:''
    }
    </div>
    );
}

export default CartSidebar;