import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({id, name, price, description, image}) => {

    /**const [itemCount, setItemCount] = useState(0) */
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <div className='w-full shadow hover:shadow-lg animate-[appear_2500ms] duration-75'>
      <div className='relative'>
        <img src={image} alt="" className='w-full rounded-t-md'/>
        {!cartItems[id]
            ? <img className='absolute w-10 bottom-4 right-4 rounded-md cursor-pointer' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
            : <div className='absolute bottom-4 right-4 flex items-center gap-2 p-1 rounded-2xl bg-white cursor-pointer'>
                <img className='w-8' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img className='w-8' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>
      <div className='p-2'>
        <div className='flex justify-between items-center mb-3'>
          <p className='text-xl font-medium'>{name}</p>
          <img src={assets.rating_starts} alt="" className='w-16'/>
        </div>
        <p className='text-gray-500 text-xs'>{description}</p>
        <p className='text-red-600 text-2xl font-medium mt-2'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
