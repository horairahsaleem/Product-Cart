import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartitems: [],
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
  {
    addToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartitems.find((i) => i.id === item.id);

      if (isItemExist) {
        state.cartitems.forEach((i) => {
          if (i.id === item.id) i.quantity += 1;
        });
      } else {
        state.cartitems.push(item);
      }
    },
    decreament:(state,action)=>{
        const items = state.cartitems.find((i) => i.id === action.payload);
        if(items.quantity>1){
            state.cartitems.forEach((i)=> {
            if(i.id===items.id) 
            items.quantity-=1
        

            }
            )
        }
        },
        delete:(state,action)=>{
            state.cartitems = state.cartitems.filter((i)=>i.id!==action.payload)




        },
        calculate:(state)=>{
            let sum = 0;
             state.cartitems.forEach((i)=> sum += i.quantity*i.price)
            state.subTotal=sum
            if (state.cartitems.length >= 1) {
              state.shipping = sum > 1000? 0 :200
            }
            else{
              state.shipping = 0
            }
                        state.tax= +(state.subTotal*0.18).toFixed()
            state.total= state.subTotal+state.shipping+state.tax

      

        



    },
        
    }
)
