import { Route, Routes } from "react-router-dom"
import NumberVerify from "./Pages/NumberVerify"
import OTP from "./Pages/OTP"

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<NumberVerify/>} />
        <Route path='/otp' element={<OTP/>} />
      </Routes>
    </>
  )
}

export default App