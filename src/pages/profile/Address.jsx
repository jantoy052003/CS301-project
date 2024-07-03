import React from 'react'

const Address = ({street, city, state, country, zip, phone, setStreet, setCity, setState, setCountry, setZip, setPhone, handleSubmitProfile}) => {
  return (
    <div className="mx-4 flex flex-col items-center justify-center">
        <h1 className='text-white'>DELIVERY ADDRESS</h1>
        <form onSubmit={handleSubmitProfile} className="flex flex-col gap-5">
            <div className="flex gap-2 relative">
                <input className="w-full px-4 py-4 lg:py-3 rounded-lg bg-bg-input peer placeholder-transparent outline-none focus:outline focus:outline-white"
                    type="text"
                    name="street"
                    placeholder="Street"
                    id="street"
                    required
                    autoComplete="off"
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                />
                <label htmlFor="street" className='transition-all duration-300 text-orange-500 absolute top-3 left-4 translate-y-[-70%] text-[14px] lg:text-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-red peer-focus:text-orange-400 peer-focus:absolute peer-focus:top-3 peer-focus:left-4 peer-focus:translate-y-[-70%] peer-focus:text-[10px]'>
                    Street
                </label>
            </div>

            <div className="flex gap-2 relative">
                <input className="w-full px-4 py-4 lg:py-3 rounded-lg bg-bg-input peer placeholder-transparent outline-none focus:outline focus:outline-white"
                    type="text"
                    name="city"
                    placeholder="City"
                    id="city"
                    required
                    autoComplete="off"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />
                <label htmlFor="city" className='transition-all duration-300 text-orange-500 absolute top-3 left-4 translate-y-[-70%] text-[14px] lg:text-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-red peer-focus:text-orange-400 peer-focus:absolute peer-focus:top-3 peer-focus:left-4 peer-focus:translate-y-[-70%] peer-focus:text-[10px]'>
                    City
                </label>
            </div>
                
            <div className="flex gap-2 relative">
                <input className="w-full px-4 py-4 lg:py-3 rounded-lg bg-bg-input peer placeholder-transparent outline-none focus:outline focus:outline-white"
                    type="text"
                    name="state"
                    placeholder="State"
                    id="state"
                    required
                    autoComplete="off"
                    value={state}
                    onChange={e => setState(e.target.value)}
                />
                <label htmlFor="state" className='transition-all duration-300 text-orange-500 absolute top-3 left-4 translate-y-[-70%] text-[14px] lg:text-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-red peer-focus:text-orange-400 peer-focus:absolute peer-focus:top-3 peer-focus:left-4 peer-focus:translate-y-[-70%] peer-focus:text-[10px]'>
                    State
                </label>
            </div>
                
            <div className="flex gap-2 relative">
                <input className="w-full px-4 py-4 lg:py-3 rounded-lg bg-bg-input peer placeholder-transparent outline-none focus:outline focus:outline-white"
                    type="text"
                    name="country"
                    placeholder="Country"
                    id="country"
                    required
                    autoComplete="off"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                />
                <label htmlFor="country" className='transition-all duration-300 text-orange-500 absolute top-3 left-4 translate-y-[-70%] text-[14px] lg:text-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-red peer-focus:text-orange-400 peer-focus:absolute peer-focus:top-3 peer-focus:left-4 peer-focus:translate-y-[-70%] peer-focus:text-[10px]'>
                    Country
                </label>

                <div className="flex gap-2 relative">
                    <input className="w-full px-4 py-4 lg:py-3 rounded-lg bg-bg-input peer placeholder-transparent outline-none focus:outline focus:outline-white"
                        type="text"
                        name="zip"
                        placeholder="Zip Code"
                        id="zip"
                        required
                        autoComplete="off"
                        value={zip}
                        onChange={e => setZip(e.target.value)}
                    />
                    <label htmlFor="zip" className='transition-all duration-300 text-orange-500 absolute top-3 left-4 translate-y-[-70%] text-[14px] lg:text-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-red peer-focus:text-orange-400 peer-focus:absolute peer-focus:top-3 peer-focus:left-4 peer-focus:translate-y-[-70%] peer-focus:text-[10px]'>
                        Zip Code
                    </label>
                </div>
            </div>

            <div className="flex gap-2 relative">
                <input className="w-full px-4 py-4 lg:py-3 rounded-lg bg-bg-input peer placeholder-transparent outline-none focus:outline focus:outline-white"
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    id="phone"
                    required
                    autoComplete="off"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
                <label htmlFor="phone" className='transition-all duration-300 text-orange-500 absolute top-3 left-4 translate-y-[-70%] text-[14px] lg:text-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-red peer-focus:text-orange-400 peer-focus:absolute peer-focus:top-3 peer-focus:left-4 peer-focus:translate-y-[-70%] peer-focus:text-[10px]'>
                    Phone
                </label>
            </div>
            <button className="text-white bg-orange-600 cursor-pointer transition-all hover:bg-orange-500 outline-none focus:outline-orange-600 border-0 rounded-md w-22 mt-1 p-2 lg:p-3" type="submit">Save Address</button>
        </form>
    </div>
  )
}

export default Address
