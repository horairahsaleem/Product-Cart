import React from 'react'

const Productcard = ({name,id,price,handler,imgsrc,}) => {
  return (
    <div className='productcard'>
        <img src={imgsrc} alt={name}/>
        <h4> {price}</h4>
        <button onClick={() => handler({ name, price, id, quantity: 1, imgsrc })}>
      Add to Cart
    </button>

      
    </div>
  )
}

export default Productcard
