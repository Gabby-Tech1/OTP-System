import { IoMdArrowRoundBack } from "react-icons/io";
import InputOTP from "../Components/OtpInput";
import { CgSpinner } from "react-icons/cg";
import { useState } from "react";


const OTP = () => {

  const [loading, setLoading] = useState(false)
  return (
    <>
        
        <div className="min-h-screen flex items-center justify-center  bg-black/20">
            
            <form className="bg-gray-200 shadow-lg rounded-2xl px-8 pt-6 pb-8 mb-4">
                <a href="/" className="flex items-center text-lg font-semibold gap-1 text-green-500 hover:text-blue-500 w-[100px]"><IoMdArrowRoundBack /> Go back</a>
                <h1 className="mt-4 text-center text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                    OTP Verification
                </h1>
                <p className="text-lg text-gray-600 mb-4">Please Enter the OTP sent via SMS to get you verified</p>

                <div className="flex items-center justify-center my-8">
                  <InputOTP/>
                </div>
                <button onClick={()=> setLoading(true)} className="flex gap-2 bg-green-500 px-5 text-xl font-semibold text-white hover:scale-105 duration-300 ease-in py-2 rounded-3xl items-center justify-center w-full hover:bg-blue-400">
                  {loading &&
                  <CgSpinner size={30} className="animate-spin"/>}
                  Verify OTP
                </button>

            </form>
        </div>
    
    </>
  )
}

export default OTP