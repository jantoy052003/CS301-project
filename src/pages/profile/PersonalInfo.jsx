import React from 'react'

const PersonalInfo = ({name, last_name, email, setName, setLastName, setEmail, handleSubmitProfile}) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className='text-white'>PERSONAL INFORMATION</h1>
        <form onSubmit={handleSubmitProfile} className="flex flex-col gap-5 w-80">

            <div className="flex gap-2 relative">
                <input className="w-full px-4 py-4 lg:py-3 rounded-lg bg-bg-input peer placeholder-transparent outline-none focus:outline focus:outline-white"
                    type="text"
                    name="first name"
                    placeholder="First Name"
                    id="first name"
                    required
                    autoComplete="off"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="first name" className='transition-all duration-300 text-orange-500 absolute top-3 left-4 translate-y-[-70%] text-[14px] lg:text-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-red peer-focus:text-orange-400 peer-focus:absolute peer-focus:top-3 peer-focus:left-4 peer-focus:translate-y-[-70%] peer-focus:text-[10px]'>
                    First Name
                </label>
            </div>

            <div className="flex gap-2 relative">
                <input className="w-full px-4 py-4 lg:py-3 rounded-lg bg-bg-input peer placeholder-transparent outline-none focus:outline focus:outline-white"
                    type="text"
                    name="last name"
                    placeholder="Last Name"
                    id="last name"
                    required
                    autoComplete="off"
                    value={last_name}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="last name" className='transition-all duration-300 text-orange-500 absolute top-3 left-4 translate-y-[-70%] text-[14px] lg:text-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-red peer-focus:text-orange-400 peer-focus:absolute peer-focus:top-3 peer-focus:left-4 peer-focus:translate-y-[-70%] peer-focus:text-[10px]'>
                    Last Name
                </label>
            </div>

            <div className="flex gap-2 relative">
                <input className="w-full px-4 py-4 lg:py-3 rounded-lg bg-bg-input peer placeholder-transparent outline-none focus:outline focus:outline-white"
                    type="text"
                    name="email address"
                    placeholder="Email Address"
                    id="email address"
                    required
                    autoComplete="off"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="email address" className='transition-all duration-300 text-orange-500 absolute top-3 left-4 translate-y-[-70%] text-[14px] lg:text-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-red peer-focus:text-orange-400 peer-focus:absolute peer-focus:top-3 peer-focus:left-4 peer-focus:translate-y-[-70%] peer-focus:text-[10px]'>
                    Email Address
                </label>
            </div>
            <button className="text-white bg-orange-600 cursor-pointer transition-all hover:bg-orange-500 outline-none focus:outline-orange-600 border-0 rounded-md w-22 mt-1 lg:p-2" type="submit">Save Info</button>
        </form>
    </div>
  )
}

export default PersonalInfo
