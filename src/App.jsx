import { Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"


const App = () => {
 
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login/>} exact></Route>

      {/* Private Routes */}
    </Routes>
  )
}

export default App
