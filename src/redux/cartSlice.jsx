import { createSlice } from "@reduxjs/toolkit";

const initialState=JSON.parse(localStorage.getItem('cart')) ?? []; 

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            state.push(action.payload)
        },

        deleteFromCart(state, action){
            return state.filter(item=>item.id!=action.payload.id);


        },

        incrementQuantity:(state,action )=>{
            state=state.map(item=>{
                if(item.id===action.payload){
                   item.quantity++;
                }
                return item;
            });
        },
        
        decrementQuantity:(state, action)=>{
            state=state.map(item=>{
                if(item.quantity!=1){
                    if(item.id===action.payload){
                        item.quantity--;
                    }
                }
                return item;
            })
        }
        
    }

 })

 export const {addToCart, deleteFromCart, incrementQuantity,decrementQuantity}=cartSlice.actions;

 export default cartSlice.reducer