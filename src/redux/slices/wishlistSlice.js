import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlists',
    initialState : [],
    reducers:{
        addTowishlist:(state,actionFromView)=>{
            state.push(actionFromView.payload)
        },
        removeItem:(state,actionFromWishlist)=>{
          return state.filter(item=>item.id!=actionFromWishlist.payload)
        }
    }
})

export const {addTowishlist,removeItem} = wishlistSlice.actions
export default wishlistSlice.reducer