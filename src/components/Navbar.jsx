import { Divide as Hamburger } from "hamburger-react" 
import { NavLink, Link, useNavigate } from "react-router-dom" 
import {assets} from '../assets/assets'
import { useState, useEffect, useContext } from "react"
import Logout from "./Logout"
import LogInButton from "./LogInButton"
import { useToggleForm } from "../hooks/useToggleForm"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {useFetchProfilePic} from "../hooks/useFetchProfilePic"
import Cart from "../pages/cart"
import api from "../lib/api"
import { StoreContext } from "../context/StoreContext"

 
const Navbar = ({handleSubmitLogin}) => {
  // const location = useLocation()
  // const isActiveLogin = location.pathname === "/login" 

  const [isOpen, setOpen] = useState(false)
  const handleClick = () => setOpen(!isOpen)
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [userId, setUserId] = useState(localStorage.getItem("id"))
  const [showForm, setShowForm, showUploadImageForm, hideUploadImageForm] = useToggleForm()

  const {getTotalCartAmount} = useContext(StoreContext)

  const navigate = useNavigate()

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
          type: toast.TYPE.SUCCESS,
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
        type: toast.TYPE.ERROR,
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

  //logout
  const logout = async () => {
    try {
      await api.post('/logout', null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      setToken('')
      navigate('/login')

      } catch (error) {
      apiError('An error occured while logging out', error)
    }
  }  
  
  return (
    <>
       <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <nav className='top-0 rounded-md z-40 mx-5 mt-2 lg:mx-10'>
        <div className='z-10 flex justify-between items-center'>
          <img src={assets.logo2} alt="" className="w-16 mx-2"/>
          <div className="hidden lg:flex jusify-between items-center gap-8">
            <div className="mr-64">
              <ul className="flex gap-16">
                <li><NavLink tag={Link}  activeclassname="active" to="/">Home</NavLink></li>
                <li><NavLink tag={Link}  activeclassname="active" to="/menu">Menu</NavLink></li>
                <li><NavLink tag={Link}  activeclassname="active" to="/about">About Us</NavLink></li>
                <li><NavLink tag={Link}  activeclassname="active" to="/reviews">Reviews</NavLink></li>
              </ul>
            </div>
            {/* <img src={assets.search_icon}/> */}
            <div className={token ? "relative" : "hidden"}> 
              <NavLink tag={Link} to="cart"><img src={assets.basket_icon} alt=""/></NavLink>
              <div className={getTotalCartAmount() === 0 ? "" : "animate-ping absolute w-4 h-4 bg-red-500 rounded-lg -top-1 -right-2"}></div>
              <div className={getTotalCartAmount() === 0 ? "" : "absolute w-4 h-4 bg-red-500 rounded-lg -top-1 -right-2"}></div>
            </div>
            <div className="mr-2">
              {token ? (
                //Log-out
                <Logout onClick={handleClick} logout={logout} profileUrl={profileUrl} /> 
              ) : (
                <LogInButton onClick={handleClick} handleSubmitLogin={handleSubmitLogin} />
              )}
            </div>
            
          </div>
          <div className="flex justify-between items-center gap-5 lg:hidden">
            {/* <img src={assets.search_icon}/> */}
            <div className={token ? "relative" : "hidden"}> 
              <NavLink tag={Link} to="cart"><img src={assets.basket_icon} alt=""/></NavLink>
              <div className={getTotalCartAmount() === 0 ? "" : "animate-ping absolute w-4 h-4 bg-red-500 rounded-lg -top-1 -right-2"}></div>
              <div className={getTotalCartAmount() === 0 ? "" : "absolute w-4 h-4 bg-red-500 rounded-lg -top-1 -right-2"}></div>
            </div>
            <div className="z-100" onClick={handleClick} >
              <Hamburger rounded distance="sm" size={30} duration={.9} toggled={isOpen} toggle={setOpen}/>
            </div>
          </div>
          <div className={!isOpen ? 'animate-[slideLeft_1000ms] duration-75 top-0 border-solid rounded-r-xl border-2 text-black fixed z-50 px-4 h-screen backdrop-blur-md bg-white/30 w-56 right-[100%] flex justify-center items-center' : 'animate-[slideRight_1000ms] duration-75 top-0 border-solid rounded-r-xl border-2 text-black fixed z-50 px-4 h-screen backdrop-blur-md bg-white/30 w-56 left-0 flex justify-center items-center'}>
            <ul onClick={handleClick} className="flex flex-col gap-10 items-center">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/menu">Menu</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/reviews">Reviews</NavLink></li>
                <div className="p-0 mt-8 lg:mt-2">
                  {token ? (
                    //Log-out
                    <Logout logout={logout} profileUrl={profileUrl} /> 
                  ) : (
                    <LogInButton handleSubmitLogin={handleSubmitLogin} />
                  )}
                </div>
            </ul>
          </div>  
        </div>
        <div>
          
        </div>
      </nav>
    </>
  )
}

export default Navbar 
