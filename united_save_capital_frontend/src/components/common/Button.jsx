import React from 'react'

const Button = ({ styles, text= ' Get Started' }) => {
  return (
    <div>
      <button 
        type="button" 
        className={`py-4 px-6 font-poppins font-medium cursor-pointer text-[18px] text-primary bg-gradient-to-r from-[#FF4E50] to-[#F9D423] rounded-[10px] outline-none transition-all duration-300 ease-in-out hover:from-[#F9D423] hover:to-[#FF4E50] hover:text-white ${styles}`}
      >
        {text}
      </button>
    </div>
  )
}

export default Button
