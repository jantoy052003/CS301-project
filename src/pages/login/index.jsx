import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import api from "../../lib/api"
import { useEffect, useState } from 'react'

const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passType, setPassType] = useState("password")

  const [error, setError] = useState("")
  
  const handleSubmitLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await api.post("/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("token", res.data.token)
      localStorage.setItem("id", res.data.user.id)
      navigate("/")
      window.location.reload();

    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError(error.response.data.message)
        setTimeout(() => {
          setError(null)
        }, 5000)
      } else {
        setError ("An error occured while processing your request")
      }
    }
  }

  
  return (
    <>
      <main className='background-bg-image flex justify-center items-center h-screen h-full mb-10 mt-2 lg:mx-12  rounded-xl'>
        <section className='border-4 rounded-md p-4'>
          <form onSubmit={handleSubmitLogin} action="" className='py-3 relative'>
          {error &&  <p className="font-medium absolute top-[-4.5rem] left-[-1.25rem] bg-red-600 px-4 py-2 rounded-md">{error}</p>}
            <div className='text-white mb-6'>
              <h1>Login to order</h1>
              <p>Don`t have an account yet? <Link to="/signup" className="text-orange-600"> Create Account</Link></p>
            </div>
            <div className='my-4 relative'>
              <input
                className="w-full px-4 py-4 lg:py-5 rounded-lg bg-bg-input peer placeholder-transparent outline-none focus:outline focus:outline-white"
                type="text"
                name="email"
                placeholder="Email address"
                id="email"
                required
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email" className='transition-all duration-300 text-orange-500 absolute top-3 left-4 translate-y-[-50%] text-[14px] lg:text-[14px] peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-red peer-focus:text-orange-400 peer-focus:absolute peer-focus:top-3 peer-focus:left-4 peer-focus:translate-y-[-50%] peer-focus:text-[14px]'>
                Email address
              </label>
            </div>
            <div className='my-4 relative'>
              <input
                className="w-full px-4 py-4 lg:py-5 rounded-lg bg-bg-input peer placeholder-transparent outline-none focus:outline focus:outline-white "
                type={passType}
                name="password"
                placeholder="Password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="" className='transition-all duration-300 text-orange-500 absolute top-3 left-4 translate-y-[-50%] text-[14px] lg:text-[14px] peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-red peer-focus:text-orange-400 peer-focus:absolute peer-focus:top-3 peer-focus:left-4 peer-focus:translate-y-[-50%] peer-focus:text-[14px]'>
                Password
              </label>
              <FontAwesomeIcon
                className="absolute right-3 top-1/2 translate-y-[-50%] cursor-pointer p-3"
                onClick={() => setPassType(passType === "password" ? "text" : "password")}
                icon={passType === "password" ? faEye : faEyeSlash}
              />
            </div>
            <input
              className="w-full px-4 py-4 lg:py-5 rounded-lg bg-orange-600 cursor-pointer transition-all hover:bg-orange-500 outline-none focus:outline-orange-600"
              type="submit"
              value="Log-in"
            />
          </form>
        </section>
      </main>
    </>
  )
}
  
export default Login
