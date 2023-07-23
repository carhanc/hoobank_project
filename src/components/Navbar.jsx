import {useEffect, useState} from 'react'
import {close, logo, menu} from '../assets'
import {navLinks} from '../constants'
import { motion } from "framer-motion";
import styles from '../style';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    Aos.init({duration: 3000});
  }, [])

  const [activeButton, setActiveButton] = useState('');
  const [active, setActive] = useState('')

  const changeColor = (id) => {
    setActiveButton(id)
  };

  return (
    <nav className={`flex py-6 items-center navbar justify-around backdrop-blur-lg shadow-md w-full fixed z-10 ${styles.paddingX} xl:px-[315px]`}>
      <hr className=''/>
      
      <a href='#' 
      // onClick={() => {setActive(""); window.scrollTo(0, 0) }} 
      className='cursor-pointer text-white'>

        <img src={logo} alt="Dockerly" className='w-[124px] h-[32px]'/>

      </a>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[18px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} 
          text-${nav.id === activeButton ? 'white' : 'dimWhite'} hover:text-white ease-linear duration-300`}
          onClick={() => changeColor(nav.id)}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center cursor-pointer '>
        <div>
          <img src={toggle ? close : menu} 
            alt="menu" 
            className='w-[24px] h-[28px] object-contain'
            onClick={() => setToggle((prev) => !prev)}
          />

            {/* <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            /> */}
        </div>

          <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gradient-to-r from-gray-600 to bg-gray-900 top-20 mx-4 min-w-[140px] rounded-xl absolute right-0 my-2 sidebar`}
          >
              <ul className='list-none flex flex-col justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} 
                    text-white`}
                  >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
                </li>
              ))}
            </ul> 
        </div>
      </div>
    </nav>
  )
}

export default Navbar