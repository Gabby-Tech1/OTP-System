import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



const InputPhone = () => {

    const [phone, setPhone] = useState("")
  return (
    <PhoneInput
        country={'all'}
        value={phone}
        onChange={phone => setPhone(phone)}
        inputStyle={{
            height: '45px',
            width: '100%',
            borderRadius: '10px',
            fontSize: '20px',
            backgroundColor: 'transparent',
            borderColor: 'green',
            color: 'green'        
           }}
        buttonStyle={{
            backgroundColor: 'transparent',
            borderColor: 'green',
            borderRadius: '10px',
        }}
        
    />
  )
}

export default InputPhone