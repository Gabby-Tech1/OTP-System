import { Link } from "react-router-dom"
import InputPhone from "../Components/PhoneInput"

const NumberVerify = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black/20">
        <form className="bg-gray-200 shadow-lg rounded-2xl px-8 pt-6 pb-8 mb-4">
            <h1 className="mt-4 text-center text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                Phone Number Verification
            </h1>
            <p className="text-lg text-gray-600 mb-4">
                Please Enter your phone number to get you verified
            </p>

            <div className="mt-10 mb-5 flex justify-center items-center w-full">
                <InputPhone/>
            </div>
            <Link to="/otp">
                <button className="bg-green-500 px-5 text-xl font-semibold text-white hover:scale-105 duration-300 ease-in py-2 rounded-3xl flex items-center justify-center w-full">Confirm Phone Number</button>
            </Link>

            <p className="text-center my-2 text-gray-500 underline hover:text-green-500 duration-300 cursor-pointer">Read terms and conditions</p>
        </form>
    </div>

  )
}

export default NumberVerify
