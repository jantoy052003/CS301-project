import DefaultProfile from "../../assets/DefaultProfile.png"
import { useNavigate } from "react-router-dom"
import UploadProfilePic from "../../components/UploadProfilePic"
import { useFetchPersonalInfo } from "../../hooks/useFetchPersonalInfo"
import { useEffect, useState } from "react"
import { useToggleForm } from "../../hooks/useToggleForm"
import { ToastContainer, toast } from "react-toastify"
import api from "../../lib/api"
import { useFetchProfilePic } from "../../hooks/useFetchProfilePic"
import { useEditPersonalInfo } from "../../hooks/useEditPersonlInfo"

const index = () => {
    const navigate = useNavigate()

    // UPLOAD PROFILE PIC
    const [showForm, setShowForm, showUploadImageForm, hideUploadImageForm] = useToggleForm()
    const [userId, setUserId] = useState(localStorage.getItem("id"))
    // Success handling
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

    const [profileUrl, fetchDefaultProfile] = useFetchProfilePic(apiError)

    useEffect(() => {
        fetchDefaultProfile()
    }, [])

    // Upload Pic
    const uploadProfileImage = async (e) => {
        e.preventDefault()
        const fileInput = e.target.elements.image

        if (!fileInput.value) {
        apiError('Please select a file to upload')
        return
        }

        const formData = new FormData()
        formData.append('image', fileInput.files[0])

        try {
        const res = await api.post(`/upload/${userId}`, formData, {
            headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
            }
        })
        apiSuccess(res.data.message)
        fetchDefaultProfile()
        fileInput.value = ''
        navigate("/profile")
        location.reload();

        } catch (error) {
        apiError(error.message)
        }
    }
    // --------------------

    //Get Personal Information
    const [setToken, token, name, last_name, email, fetchInfo] = useFetchPersonalInfo(apiError)
    const [editInfo] = useEditPersonalInfo(apiError)

    useEffect(() => {
        fetchInfo()
        editInfo()
    }, [])
    // --------------------

    //Edit Personal Information

    useEffect(() => {
        
    }, [])
    
    
    
    return (
    <div className="background-bg-image flex flex-col items-center justify-center gap-12 py-12">
        <UploadProfilePic hideUploadImageForm={hideUploadImageForm}  showForm= {showForm} showUploadImageForm={showUploadImageForm} setShowForm={setShowForm} profileUrl={profileUrl} uploadProfileImage={uploadProfileImage}/>
        <div className="flex flex-col items-center justify-center gap-8">
            <h1>MY PROFILE</h1>
            <img
                className='w-7 h-7 lg:w-32 lg:h-32 rounded-full bg-white object-cover object-center'
                src={profileUrl ? profileUrl : DefaultProfile}
                alt="Profile Picture" />
            <button onClick={showUploadImageForm} className="bg-tomato border-0 rounded-md max-w-xs lg:p-3">Edit Profile Photo</button>
        </div>
        
        <div className="flex gap-12 ">
            <div className="flex flex-col items-center justify-center">
                <h1>PERSONAL INFORMATION</h1>
                <form  className="flex flex-col gap-5 w-80">

                    <div className="flex gap-2 relative">
                        <input className="w-full px-4 py-4 lg:py-3 rounded-lg bg-bg-input peer placeholder-transparent outline-none focus:outline focus:outline-white"
                            type="text"
                            name="first name"
                            placeholder="First Name"
                            id="first name"
                            required
                            autoComplete="off"
                            onChange={editInfo()}
                            defaultValue={name}
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
                            defaultValue={last_name}
                            //onChange={e => setLastName(e.target.value)}
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
                            defaultValue={email}
                        />
                        <label htmlFor="email address" className='transition-all duration-300 text-orange-500 absolute top-3 left-4 translate-y-[-70%] text-[14px] lg:text-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-red peer-focus:text-orange-400 peer-focus:absolute peer-focus:top-3 peer-focus:left-4 peer-focus:translate-y-[-70%] peer-focus:text-[10px]'>
                            Email Address
                        </label>
                    </div>
                    <button className="bg-tomato border-0 rounded-md w-22 mt-1 lg:p-2" type="submit">Save Info</button>
                </form>
            </div>

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
        </div> 

        <div className="flex flex-col items-center justify-center">
            <h1>DELIVERY ADDRESS</h1>
            <div className="flex flex-col gap-5">
                <div className="flex gap-2 relative">
                    <input className="w-full px-4 py-4 lg:py-3 rounded-lg bg-bg-input peer placeholder-transparent outline-none focus:outline focus:outline-white"
                        type="text"
                        name="street"
                        placeholder="Street"
                        id="street"
                        required
                        autoComplete="off"
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
                    />
                    <label htmlFor="phone" className='transition-all duration-300 text-orange-500 absolute top-3 left-4 translate-y-[-70%] text-[14px] lg:text-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-red peer-focus:text-orange-400 peer-focus:absolute peer-focus:top-3 peer-focus:left-4 peer-focus:translate-y-[-70%] peer-focus:text-[10px]'>
                        Phone
                    </label>
                </div>
                <button className="bg-tomato border-0 rounded-md w-22 mt-1 lg:p-2">Save Address</button>
            </div>
        </div>
        
    </div>
  )
}

export default index
