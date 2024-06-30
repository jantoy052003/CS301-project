import React from 'react'

const ChangePassword = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <h1>CHANGE PASSWORD</h1>
        <div className="flex flex-col gap-5 w-80">

            <div className="flex gap-2 relative">
                <input className="w-full px-4 py-4 lg:py-3 rounded-lg bg-bg-input peer placeholder-transparent outline-none focus:outline focus:outline-white"
                    type="text"
                    name="current password"
                    placeholder="Current Password"
                    id="current password"
                    required
                    autoComplete="off"
                />
                <label htmlFor="current password" className='transition-all duration-300 text-orange-500 absolute top-3 left-4 translate-y-[-70%] text-[14px] lg:text-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-red peer-focus:text-orange-400 peer-focus:absolute peer-focus:top-3 peer-focus:left-4 peer-focus:translate-y-[-70%] peer-focus:text-[10px]'>
                    Current Password
                </label>
            </div>

            <div className="flex gap-2 relative">
                <input className="w-full px-4 py-4 lg:py-3 rounded-lg bg-bg-input peer placeholder-transparent outline-none focus:outline focus:outline-white"
                    type="text"
                    name="new password"
                    placeholder="New Password"
                    id="new password"
                    required
                    autoComplete="off"
                />
                <label htmlFor="new password" className='transition-all duration-300 text-orange-500 absolute top-3 left-4 translate-y-[-70%] text-[14px] lg:text-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-red peer-focus:text-orange-400 peer-focus:absolute peer-focus:top-3 peer-focus:left-4 peer-focus:translate-y-[-70%] peer-focus:text-[10px]'>
                    New Password
                </label>
            </div>

            <div className="flex gap-2 relative">
                <input className="w-full px-4 py-4 lg:py-3 rounded-lg bg-bg-input peer placeholder-transparent outline-none focus:outline focus:outline-white"
                    type="text"
                    name="confirm password"
                    placeholder="Confirm Password"
                    id="confirm password"
                    required
                    autoComplete="off"
                />
                <label htmlFor="confirm password" className='transition-all duration-300 text-orange-500 absolute top-3 left-4 translate-y-[-70%] text-[14px] lg:text-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-red peer-focus:text-orange-400 peer-focus:absolute peer-focus:top-3 peer-focus:left-4 peer-focus:translate-y-[-70%] peer-focus:text-[10px]'>
                    Confirm Password
                </label>
            </div>
            <button className="bg-tomato border-0 rounded-md w-22 mt-1 lg:p-2">Save Password</button>
        </div>
    </div>
  )
}

export default ChangePassword
