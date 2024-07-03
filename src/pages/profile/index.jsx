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
import PersonalInfo from "./PersonalInfo"
import ChangePassword from "./ChangePassword"
import Address from "./Address"

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
        location.reload()
        //navigate("/profile")

        } catch (error) {
        apiError(error.message)
        }
    }
    // --------------------

    //Get Personal Information
    const [setToken, token, setName, setLastName, setEmail, setStreet, setCity, setState, setCountry, setZip, setPhone, name, last_name, email, street, city, state, country, zip, phone, fetchInfo] = useFetchPersonalInfo(apiError)

    useEffect(() => {
        fetchInfo()
    }, [])
    // --------------------

    //Edit Personal Information
    
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
    <div className="mx-2 background-bg-image flex flex-col items-center justify-center gap-12 py-12 h-full mb-10 mt-2 lg:mx-12  rounded-xl">
        <UploadProfilePic hideUploadImageForm={hideUploadImageForm}  showForm= {showForm} showUploadImageForm={showUploadImageForm} setShowForm={setShowForm} profileUrl={profileUrl} uploadProfileImage={uploadProfileImage}/>
        <div className="text-white flex flex-col items-center justify-center gap-8">
            <h1>MY PROFILE</h1>
            <img
                className='w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white object-cover object-center'
                src={profileUrl ? profileUrl : DefaultProfile}
                alt="Profile Picture" />
            <button onClick={showUploadImageForm} className="bg-orange-600 cursor-pointer transition-all hover:bg-orange-500 outline-none focus:outline-orange-600 border-0 rounded-md max-w-xs p-2 lg:p-3">Edit Profile Photo</button>
        </div>
        
        <div className="flex gap-12 ">
            <PersonalInfo name={name} last_name={last_name} email={email} setName={setName} setLastName={setLastName} setEmail={setEmail} handleSubmitProfile={handleSubmitProfile}/>
            {/* will created change password feature in the future */}
            {/* <ChangePassword/> */}
        </div> 

        <Address street={street} city={city} state={state} country={country} zip={zip} phone={phone} setStreet={setStreet} setCity={setCity} setState={setState} setCountry={setCountry} setZip={setZip} setPhone={setPhone} handleSubmitProfile={handleSubmitProfile}/>
        
    </div>
  )
}

export default index
