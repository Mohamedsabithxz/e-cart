import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cartItems',
    initialState:[],
    reducers:{
        addToCart:(state,actionByComponent)=>{
            const exisitingProduct = state.find(item=>item.id==actionByComponent.payload.id)
            if(exisitingProduct){
             exisitingProduct.quantity++
             exisitingProduct.totalPrice = exisitingProduct.quantity * exisitingProduct.price
             const remainingProduct = state.filter(item=>item.id!=exisitingProduct.id)
             state = [...remainingProduct,exisitingProduct]
            }else{
                state.push({...actionByComponent.payload,quantity:1,totalPrice:actionByComponent.payload.price})
            }
        },
        incrementQuantity : (state,actionByCart)=>{
            const exisitingProduct = state.find(item=>item.id==actionByCart.payload)
            exisitingProduct.quantity++
            exisitingProduct.totalPrice = exisitingProduct.quantity * exisitingProduct.price
            const remainingProduct = state.filter(item=>item.id!=exisitingProduct)
            state = [...remainingProduct,exisitingProduct]
        },
        removeCartItem : (state,actionByCart)=>{
            return state.filter(item=>item.id!=actionByCart.payload)
        },
        decrementQuantity : (state,actionByCart)=>{
            const exisitingProduct = state.find(item=>item.id==actionByCart.payload)
            exisitingProduct.quantity--
            exisitingProduct.totalPrice = exisitingProduct.quantity * exisitingProduct.price
            const remainingProduct = state.filter(item=>item.id!=exisitingProduct)
            state = [...remainingProduct,exisitingProduct]
        },
        emptyCart : (state)=>{
            return state = []
        }
    }
})

export const  {addToCart,incrementQuantity,removeCartItem,decrementQuantity,emptyCart} = cartSlice.actions
export default cartSlice.reducer