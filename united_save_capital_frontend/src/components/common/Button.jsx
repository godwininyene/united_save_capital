import React from 'react'

const Button = ({styles}) => {
  return (
    <div>
      <button type="button" className={`py-4 px-6 font-poppins font-medium cursor-pointer text-[18px] text-primary bd-gradient-2 rounded-[10px] outline-none ${styles}`}>
        Get Started
      </button>
    </div>
  )
}

export default Button
