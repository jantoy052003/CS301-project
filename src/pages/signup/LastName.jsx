import { useState } from "react" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

const LastName = ({value, onChange, onErrorChange}) => {
    const [lastNameError, setLastNameError] = useState("")

    const handleLastNameChange = (e) => {
        const newLastName = e.target.value
        if (newLastName.length <= 1) {
            setLastNameError("Minimum of 1 character")
        } else if (/\d|[!@#$%^&*(),.?":{}|<>]/.test(newLastName)) {
            setLastNameError("Only text is allowed")
        } else {
            setLastNameError(false)
        }

        onChange(e)
        onErrorChange(lastNameError)
    }

    const handleLastNameBlur = (e) => {
        const newLastName = e.target.value
        if (newLastName.length === 0) {
            setLastNameError("Last Name is required")
        }
        onErrorChange(lastNameError)
    }
    
  return (
    <div className="mb-6 relative">
      <input 
        className={`${lastNameError ? "outline-red-500 w-full px-4 py-4 lg:py-5 rounded-lg bg-bg-input peer placeholder-transparent outline-none focus:outline focus:outline-red-500" : "w-full px-4 py-4 lg:py-5 rounded-lg bg-bg-input peer placeholder-transparent outline-none focus:outline focus:outline-white"}`}
        type="text" 
        name="name"
        placeholder="Name"
        id="name"
        required
        autoComplete="off"
        value={value}
        onChange={handleLastNameChange}
        onBlur={handleLastNameBlur}
      />
      <label htmlFor="name" className="transition-all duration-300 text-orange-500 absolute top-3 left-4 translate-y-[-50%] text-[14px] lg:text-[14px] peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-red peer-focus:text-orange-400 peer-focus:absolute peer-focus:top-3 peer-focus:left-4 peer-focus:translate-y-[-50%] peer-focus:text-[14px]">
        Last Name
      </label>
      {lastNameError && (
        <>
          <span className="absolute font-medium bottom-[-1.4rem] flex items-center text-[14px] text-red-400">
            {lastNameError}
          </span>
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className="absolute right-4 top-1/2 translate-y-[-50%] text-lg text-red-400"
          />
        </>
      )}
    </div>
  )
}

export default LastName
