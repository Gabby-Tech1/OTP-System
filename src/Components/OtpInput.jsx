import { useState } from 'react';
import OtpInput from 'react-otp-input';



const InputOTP = () => {

    const [otp, setOtp] = useState("")


  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      inputStyle="bg-transparent text-green-500 border border-green-600 rounded-2xl text-4xl md:text-5xl p-2 active:border-blue-400"
      renderSeparator={<span className='mx-1'>-</span>}
      renderInput={(props) => <input {...props} />}
      shouldAutoFocus
    />
  )
}

export default InputOTP