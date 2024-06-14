import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);


  return (
    <form className="flex align-start justify-between gap-20 mt-16 mb-10 mx-10">
      <div className="w-full max-w-xl">
        <p className="text-3xl font-semibold mb-10">Delivery Information</p>
        <div className="flex gap-2">
          <input className="mb-2 w-full p-2.5 border-2  border-solid border-gray-400 outline-1 outline-red-400 rounded-md " type="text" placeholder="First Name" />
          <input className="mb-2 w-full p-2.5 border-2  border-solid border-gray-400 outline-1 outline-red-400 rounded-md " type="text" placeholder="Last Name" />
        </div>
        <input className="mb-2 w-full p-2.5 border-2  border-solid border-gray-400 outline-1 outline-red-400 rounded-md " type="email" placeholder="Email address"/>
        <input className="mb-2 w-full p-2.5 border-2  border-solid border-gray-400 outline-1 outline-red-400 rounded-md " type="text" placeholder="Street"/>
        <div className="flex gap-2">
          <input className="mb-2 w-full p-2.5 border-2  border-solid border-gray-400 outline-1 outline-red-400 rounded-md " type="text" placeholder="City" />
          <input className="mb-2 w-full p-2.5 border-2  border-solid border-gray-400 outline-1 outline-red-400 rounded-md " type="text" placeholder="State" />
        </div>
        <div className="flex gap-2">
          <input className="mb-2 w-full p-2.5 border-2  border-solid border-gray-400 outline-1 outline-red-400 rounded-md " type="text" placeholder="Zip code" />
          <input className="mb-2 w-full p-2.5 border-2  border-solid border-gray-400 outline-1 outline-red-400 rounded-md " type="text" placeholder="Country" />
        </div>
        <input className="mb-2 w-full p-2.5 border-2  border-solid border-gray-400 outline-1 outline-red-400 rounded-md " type="text" placeholder="Phone" />
      </div>
      <div className="w-full max-w-xl">
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
          <button className="bg-tomato border-0 rounded-md max-w-xs mt-14 lg:p-3">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
