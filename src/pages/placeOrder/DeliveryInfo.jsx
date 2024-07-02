import React from 'react'

const DeliveryInfo = ({name, last_name, email,street, city, state, country, zip, phone, setName, setLastName, setEmail, setStreet, setCity, setState, setCountry, setZip, setPhone, handleSubmitProfile}) => {

  return (
    <form onSubmit={handleSubmitProfile} className="w-full max-w-xl">
        <p className="ml-[21%] lg:ml-0 text-3xl font-semibold mb-6">Delivery Information</p>
        <div className="flex gap-2">
            <input className="mb-2 w-full p-2.5 border-2  border-solid border-gray-400 outline-1 outline-red-400 rounded-md"              
                type="text" 
                placeholder="First Name" 
                required
                autoComplete="off"
                value={name} 
                onChange={e => setName(e.target.value)}
            />
            <input className="mb-2 w-full p-2.5 border-2  border-solid border-gray-400 outline-1 outline-red-400 rounded-md "   
                type="text" 
                placeholder="Last Name"
                required
                autoComplete="off"
                value={last_name} 
                onChange={e => setLastName(e.target.value)}
            />
        </div>
        <input className="mb-2 w-full p-2.5 border-2  border-solid border-gray-400 outline-1 outline-red-400 rounded-md "   
            type="email" 
            placeholder="Email address"
            required
            autoComplete="off"
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
        <input className="mb-2 w-full p-2.5 border-2  border-solid border-gray-400 outline-1 outline-red-400 rounded-md "       
            type="text" 
            placeholder="Street"
            required
            autoComplete="off"
            value={street} 
            onChange={e => setStreet(e.target.value)}
        />
        <div className="flex gap-2">
            <input className="mb-2 w-full p-2.5 border-2  border-solid border-gray-400 outline-1 outline-red-400 rounded-md "   
                type="text" 
                placeholder="City" 
                required
                autoComplete="off"
                value={city}
                onChange={e => setCity(e.target.value)}
            />
            <input className="mb-2 w-full p-2.5 border-2  border-solid border-gray-400 outline-1 outline-red-400 rounded-md "   
                type="text" 
                placeholder="State"
                required
                autoComplete="off"
                value={state} 
                onChange={e => setState(e.target.value)}
            />
        </div>
        <div className="flex gap-2">
            <input className="mb-2 w-full p-2.5 border-2  border-solid border-gray-400 outline-1 outline-red-400 rounded-md "    
                type="text" 
                placeholder="Zip code"
                required
                autoComplete="off"
                value={zip} 
                onChange={e => setZip(e.target.value)}
            />
            <input className="mb-2 w-full p-2.5 border-2  border-solid border-gray-400 outline-1 outline-red-400 rounded-md "   
                type="text" 
                placeholder="Country"
                required
                autoComplete="off"
                value={country} 
                onChange={e => setCountry(e.target.value)}
            />
        </div>
        <input className="mb-2 w-full p-2.5 border-2  border-solid border-gray-400 outline-1 outline-red-400 rounded-md "          
            type="text" 
            placeholder="Phone"
            required
            autoComplete="off"
            value={phone} 
            onChange={e => setPhone(e.target.value)}
        />
        <button className=" p-3 w-full ml-[13%] lg:ml-0 items-center bg-orange-600 cursor-pointer transition-all hover:bg-orange-500 outline-none focus:outline-orange-600 border-0 rounded-md max-w-xs lg:p-3" type='submit'>Save Changes</button>
    </form>
  )
}

export default DeliveryInfo
