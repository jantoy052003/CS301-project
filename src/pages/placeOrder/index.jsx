import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import DeliveryInfo from "./DeliveryInfo";
import { ToastContainer, toast } from "react-toastify"
import api from "../../lib/api"
import { useFetchPersonalInfo } from '../../hooks/useFetchPersonalInfo'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);
  const [userId, setUserId] = useState(localStorage.getItem("id"))
  
  const apiSuccess = (successMsg) => {
    const customId = "custom-id-yes"
    const existingToast = toast.isActive(customId)

    if (successMsg === "Task has been moved to your archived." || successMsg === "It is recommended to set a start and end date for the task") {
      if (existingToast) {
        toast.update(existingToast, {
          render: successMsg,
          type: toast.TYPE.INFO,
          autoClose: 2000,
          hideProgressBar: false,
          closeButton: true,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }) 
      } else {
        toast.info(successMsg, {
          toastId: customId,
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
    } else {
      if (existingToast) {
        toast.update(existingToast, {
          render: successMsg,
          //type: toast.TYPE.SUCCESS,
          autoClose: 2000,
          hideProgressBar: false,
          closeButton: true,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      } else {
        toast.success(successMsg, {
          toastId: customId,
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
    }
  }

  // Error Handling
  const apiError = (errorMsg) => {
      const customId = "custom-id-yes"
      const existingToast = toast.isActive(customId)

      if (existingToast) {
      toast.update(existingToast, {
          render: errorMsg,
          //type: toast.TYPE.ERROR,
          autoClose: 2000,
          hideProgressBar: false,
          closeButton: true,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      })
      } else {
      toast.error(errorMsg, {
          toastId: customId,
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
      })
      }
  }

  //Get Personal Information
  const [setToken, token, setName, setLastName, setEmail, setStreet, setCity, setState, setCountry, setZip, setPhone, name, last_name, email, street, city, state, country, zip, phone, fetchInfo] = useFetchPersonalInfo(apiError)

  useEffect(() => {
      fetchInfo()
  }, [])

  //Edit Personal Information???

  const handleSubmitProfile = async (e) => {
    e.preventDefault()
    try {
        const requestData = {
            name: name,
            last_name: last_name,
            email: email,

            street: street,
            city: city,
            state: state,
            country: country,
            zip: zip,
            phone: phone
        }
        const requestConfig = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const res = await api.put(`/profile/${userId}`, requestData, requestConfig)
        apiSuccess(res.data.message)

    } catch (error) {
        apiError(error.message)
    }
  }

  return (
    <div className=" flex flex-col gap-9 lg:flex lg:flex-row lg:align-start lg:justify-between lg:gap-20 mt-16 mb-10 mx-10">
      <DeliveryInfo name={name} last_name={last_name} email={email} street={street} city={city} state={state} country={country} zip={zip} phone={phone} setName={setName} setLastName={setLastName} setEmail={setEmail} setStreet={setStreet} setCity={setCity} setState={setState} setCountry={setCountry} setZip={setZip} setPhone={setPhone} handleSubmitProfile={handleSubmitProfile}/>
      <div className="w-full max-w-xl">
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="ml-[40%] lg:ml-0 text-2xl font-black">Cart Total</h2>
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
          <button className="ml-[13%] lg:ml-[25%] bg-orange-600 cursor-pointer transition-all hover:bg-orange-500 outline-none focus:outline-orange-600 border-0 rounded-md max-w-xs mt-14 lg:p-3">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
