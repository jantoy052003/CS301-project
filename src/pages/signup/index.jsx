import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar"
import { Link, useNavigate } from "react-router-dom"
import Name from "./Name"
import LastName from "./LastName"
import Email from "./Email"
import Password from "./Password"
import ConfirmPassword from "./ConfirmPassword"
import api from '../../lib/api'

const Signup = () => {
  
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [last_name, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  //Address
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [country, setCountryt] = useState("")
  const [zip, setZip] = useState("")
  const [phone, setPhone] = useState("")

  const [nameError, setNameError] = useState("")
  const [lastNameError, setLastNameError] = useState("")
  const [existingEmailError, setExistingEmailError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")

  const handleNameError = error => setNameError(error)
  const handleLastNameError = error => setLastNameError(error)
  const handleEmailError = error => setEmailError(error)
  const handlePassError = error => setConfirmPasswordError(error)
  const handleConfirmPassError = error => setConfirmPasswordError(error) 

  useEffect(() => {
    setNameError("")
    setLastNameError("")
    setEmailError("")
    setPasswordError("")
    setConfirmPasswordError("")
  }, [name, email])

  const register = async (e) => {
    e.preventDefault()
    if (nameError || lastNameError || emailError || passwordError || confirmPasswordError) {
      return
    }
    try {
      const res = await api.post("/signup", {
        name: name,
        last_name: last_name,
        email: email,
        password: password,
        password_confirmation: confirmPassword,

        //Address
        street: street,
        city: city,
        state: state,
        country:country,
        zip: zip,
        phone: phone,
      })

        localStorage.setItem("token", res.data.token)
        localStorage.setItem("id", res.data.user.id)
        localStorage.setItem("id", res.data.address.id)
        navigate("/")
        location.reload();

    } catch (error) {
      if (error.response && error.response.status === 422) {
        setExistingEmailError("The email address has already beek taken")
      } else {
        alert("An error occured while processing your request")
      }
    }
  }

  return (
    <>
      <main className='mx-2 background-bg-image flex justify-center items-center h-screen h-full mb-10 mt-2 lg:mx-12  rounded-xl'>
        <section className="login-form container mx-auto h-screen flex justify-center items-center px-4 md:justify-start">
          <form onSubmit={register} action="" className="text-black">
            <div>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl md:mb-8 font-bold mb-4">Create New Account</h1>
              <p className="text-white font-medium mb-6">Already have an account?<Link to="/login" className="text-orange-600"> Log In</Link></p>
            </div>
            <Name value={name} onChange={(e) => setName(e.target.value)} onErrorChange={handleNameError} />
            <LastName value={last_name} onChange={(e) => setLastName(e.target.value)} onErrorChange={handleLastNameError}/>
            <Email value={email} onChange={(e) => setEmail(e.target.value)} existingEmailError={existingEmailError}  onErrorChange={handleEmailError} />
            <div className="md:grid md:grid-cols-2 gap-4">
              <Password value={password} onChange={(e) => setPassword(e.target.value)} onErrorChange={handlePassError} />
              <ConfirmPassword value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} password={password}  onErrorChange={handleConfirmPassError} />
            </div>
            <input
              className="w-full px-4 py-4 lg:py-5 rounded-lg bg-orange-600 cursor-pointer transition-all hover:bg-orange-500 outline-none focus:outline-red-600"
              type="submit"
              value="Create account"
            />
          </form>
        </section>
      </main>
    </>
  )
}

export default Signup
