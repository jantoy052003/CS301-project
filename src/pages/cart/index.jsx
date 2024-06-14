import { useContext } from "react"
import { StoreContext } from '../../context/StoreContext'
import { Link, NavLink } from "react-router-dom";

const Cart = () => {

  const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext);

  return (
    <>
      <div className="mt-24 mb-10">
        <div className="">
          <div className="grid grid-cols-16 items-center text-gray-700 text-xs mx-10">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr className="mx-8 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          {food_list.map((item)=> {
            if(cartItems[item._id] > 0) {
              return (
                // eslint-disable-next-line react/jsx-key
                <div>
                  <div className="grid grid-cols-16 items-center text-gray-700 text-xs mx-8 my-3">
                    <img src={item.image} alt="" className="w-14"/>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <p onClick={()=>removeFromCart(item._id)} className="cursor-pointer">x</p>
                   </div>
                   <hr className="mx-8"/>
                </div>
              )
            }
          })}
        </div>
        <div className=" mt-8 mx-6 flex flex-1 space-between gap-[5vw] lg:gap-[12vw]">
          <div className="flex flex-1 flex-col gap-4">
            <h2 className="font-black">Cart Total</h2>
            <div>
              <div className="flex justify-between text-grey-700">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr className="my-2"/>
              <div className="flex justify-between text-grey-700">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr className="my-2"/>
              <div className="flex justify-between text-grey-700">
                <b>Total</b>
                <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
              </div>    
            </div>
            <button className="bg-tomato border-0 rounded-md max-w-xs lg:p-3"><NavLink tag={Link}  activeclassname="active" to="/placeOrder">PROCEED TO CHECKOUT</NavLink></button>
          </div>
          <div className="flex-1 mr-2">
            <div>
              <p className="text-gray-600">If you have a promo code, enter it here</p>
              <div className="mt-2 flex justify-between align-center bg-gray-300 rounded-md">
                <input className="bg-transparent border-0 outline-0 pl-2" type="text" placeholder="promo code" />
                <button className="bg-black text-white border-0 outline-0 rounded-r-md py-2 pl-1 pr-1">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
