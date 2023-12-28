import toast from "react-hot-toast";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //data
      const data = action.payload;

      // get previews local data
      const cartData = JSON.parse(typeof window!== 'undefined' && localStorage.getItem('cart'))||''
      // set data in local
      typeof window!== 'undefined' && localStorage.setItem('cart',JSON.stringify([...cartData,data]))
       // state 
       
      toast.success('Added in cart')
      return (state = [...state, data]);
    },
    removeFromCart: (state, action) => {
        // get previews local data
      const cartData = JSON.parse(typeof window!== 'undefined' && localStorage.getItem('cart'))||''
      // id
      const id = action.payload
      // filter by id
      const filteredData = cartData.filter(cart=>cart.id!==id)
      // set filter data in local
      typeof window!== 'undefined' && localStorage.setItem('cart',JSON.stringify(filteredData))
      toast.error('Remove From Cart')
      // state 
       return state = state.filter(cart=>cart.id!==action.payload)
    },
    removeOneFromCart:(state,action)=>{
console.log(action.payload)
    }
  },
});
export const { addToCart, removeFromCart,removeOneFromCart } = cartSlice.actions;
export default cartSlice.reducer;
