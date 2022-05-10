import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {productApi} from '../api/productApi'

const initialState = {
    items: [],
    loading: false,
}

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
            const response = await productApi.getAll();
            return response
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:  {
        // onCart(state, action) {
        //     state.items.map((item,index) => {
        //         if(item.id === action.payload.id || (item.id !== action.payload.id && item.onCart===true)){
        //             state.items[index] = {
        //                 ...state.items[index],
        //                 onCart: state.items[index].onCart = true
        //             };
        //         } else {
        //             state.items[index] = {
        //                 ...state.items[index],
        //                 onCart: state.items[index].onCart = false
        //             };
        //         }
        //         localStorage.setItem("items", JSON.stringify(state.items));
        //     }
        //     )
        //     // const existingIndex = state.items.findIndex(
        //     //     (item) => item.id === action.payload.id
        //     // );

        //     // if (existingIndex >= 0) {
        //     //     state.items[existingIndex] = {
        //     //         ...state.items[existingIndex],
        //     //         onCart: state.items[existingIndex].onCart = true
        //     //     };
        //     // } 
        // }
    },
    extraReducers: {
        [productsFetch.pending]: (state, action)=>{
            state.loading = true;
        },
        [productsFetch.fulfilled]: (state, action)=>{
            state.loading = false;
            state.items = action.payload
        },
        [productsFetch.rejected]: (state, action)=>{
            state.loading = false;
        },
    }
})
export const { onCart } = productsSlice.actions;

export default productsSlice.reducer
