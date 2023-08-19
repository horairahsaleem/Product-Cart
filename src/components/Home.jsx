import React from 'react'
import Productcard from './Productcard'
import { Productlist } from './Productlist'
import toasti from 'react-hot-toast'
import { useDispatch } from 'react-redux'




const Home = () => {
  const addtocart =(options)=>{

    console.log(options)
    toasti.success('Added to cart')
    dispatch({type:"addToCart" ,payload:options})
    dispatch({
      type:"calculate",
      
    })

}
const dispatch =useDispatch()

  return (
    <div className='home' >
        {Productlist.map((i)=>(
     <Productcard key={i.id} imgsrc={i.imgSrc} name={i.name} price={i.price} id={i.id} handler={addtocart} />

            
        )
        )}
            
    </div>
  )
}

export default Home
