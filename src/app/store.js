import { configureStore } from '@reduxjs/toolkit';

// import cartReducer from '../features/cartSlice'
import productReducer from '../features/productSlice'
import cartReducer from '../features/cartSlice'


export default configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer
    },
})

