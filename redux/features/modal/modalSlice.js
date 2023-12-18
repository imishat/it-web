const { createSlice } = require("@reduxjs/toolkit")


const initialState = {modal:false}

const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers:{
         showModal:(state,action)=>{
             const data = action.payload;
             console.log(data)
            state.modal=action.payload
         }
    }
})
export const { showModal } = modalSlice.actions;
export default modalSlice.reducer