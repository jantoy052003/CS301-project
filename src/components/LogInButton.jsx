import { Link } from "react-router-dom"

const LogInButton = () => {
  return (
    <>
      <button type="button"  className="w-24 px-2 py-2 lg:py-2 rounded-lg bg-orange-600 cursor-pointer transition-all hover:bg-orange-500 outline-none focus:outline-orange-600"><Link to="/login" >Log-in</Link></button>
    </>
  )
}

export default LogInButton
