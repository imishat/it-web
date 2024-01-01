const { createSlice } = require("@reduxjs/toolkit")


const initialState = [
    {title:'',descripton:'',servicePicture:'',categoryId:1}
]

const serviceSlice = createSlice({
    name:'Service',
    initialState,
    reducers:{
         addService:(state,action)=>{
            const data = action.payload;
            // state.push(title,descripton,servicePicture,categoryId)
         }
    }
})
export const { addService } = serviceSlice.actions;
export default serviceSlice.reducer