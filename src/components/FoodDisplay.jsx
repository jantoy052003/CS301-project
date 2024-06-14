import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {

  const {food_list} = useContext(StoreContext)

  return (
    <div className='mb-10 mx-1 lg:mx-8' id='food-display'>
      <h2 className='text-4xl mb-10 text-gray-700'>Top dishes near you</h2>
      <div className='grid lg:grid-cols-4 mt-5 gap-5 gap-y-12'>
        {food_list.map((item,index) => {
            if (category === "All" || category === item.category) {
              return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
