import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] outline-none text-primary ${styles} rounded-[13px] ease-linear duration-200 transform hover:scale-[1.08]`}>
      Get Started
    </button>
  )
}

export default Button