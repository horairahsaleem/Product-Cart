import React from 'react'
import {AiFillDelete} from 'react-icons/ai'

const Cartitems = ({name,imgSrc,price,qty,decreament,increament,id,deletehandler}) => {
  return (
    <div className='cartitems'>
        <img src={imgSrc} alt={name}/>
        <article>
            <h3>{name}</h3>
            <p>${price}</p>
        </article>

        <div>
            <button onClick={()=>decreament(id)}>-</button>
            <p>{qty}</p>
            <button onClick={()=>increament(id)}>+</button>
        </div>
        {/* <AiFillDelete  onClick={()=>deletehandler(id)}/> */}
        <AiFillDelete onClick={() => deletehandler(id)} />

             
      
    </div>
  )
}

export default Cartitems
