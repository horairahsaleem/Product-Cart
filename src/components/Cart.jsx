import React from 'react'
import Cartitems from './Cartitems'
import { useDispatch, useSelector } from 'react-redux';



const Cart = () => {
  const dispatch = useDispatch()
  const increament =(id)=>{
dispatch({
  type:"addToCart",
  payload: {id}
})
dispatch({
  type:"calculate",
  
})
}
const decreament =(id)=>{
  dispatch({
    type:"decreament",
    payload: id
  })
  dispatch({
    type:"calculate",
    
  })


}
const deletehandler =(id)=>{
  dispatch({
    type:"delete",
    payload:id
  })
  dispatch({
    type:"calculate",
    
  })

}
 
    

  
  const {cartitems,shipping,subTotal,tax,total} = useSelector((state)=> state.cart)
   return (
    <div className='cart'>
      <main>
        { 
        cartitems.length ? cartitems.map((i)=>(
          <Cartitems
        name={i.name}
       imgSrc={i.imgsrc} 
       price={i.price}
        qty={i.quantity}
        id={i.id}
        key={i.id}
        increament={increament}
        decreament={decreament}
        deletehandler={deletehandler}
        />)) : <h2>No items added</h2>
        }
        
      </main>
      <aside>
        <h2>Sub-Total ${subTotal}</h2>
        <h2>Shipping ${shipping}</h2>
        <h2>Tax ${tax}</h2>
        <h2>Total ${total}</h2>
      </aside>
      
    </div>
  )
}

export default Cart
