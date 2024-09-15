import React, { useState, useEffect } from 'react'
import logo from '../../assets/Logo.svg'
import './nav.css';
function nav() {
  const [bgcolor, Setbgcolor] = useState('#1A1A1A')
  const [textcolor, Settextcolor] = useState('white')


  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 35) {
        Setbgcolor('#1A1A1A')
        Settextcolor('#000')
      } else {
        Setbgcolor('#1A1A1A')
        Settextcolor('#fff')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])
  return (
    <nav className='p-3 flex items-center justify-between fixed w-[100%] z-10 shadow-lg font-Lato' style={{ backgroundColor: `${bgcolor}`, color: `${textcolor}` }}>
      <img src={logo} alt="" />

      <div className='text-[#FFFFFF] links sm:hidden'>
        <a href="" className='mx-5  hover:border-[#262626] hover:bg-[#141414] active:bg-[#141414]  hover:border-[2px] hover:p-[10px] hover:rounded-lg text-[16px] font-Urbanist'>Home</a>
        <a href="" className='mx-5  hover:border-[#262626] hover:bg-[#141414] hover:border-[2px] hover:p-[10px] hover:rounded-lg text-[16px] font-Urbanist'>About Us</a>
        <a href="" className='mx-5  hover:border-[#262626] hover:bg-[#141414] hover:border-[2px] hover:p-[10px] hover:rounded-lg text-[16px] font-Urbanist'>Properties</a>
        <a href="" className='mx-5  hover:border-[#262626] hover:bg-[#141414] hover:border-[2px] hover:p-[10px] hover:rounded-lg text-[16px] font-Urbanist'>Services</a>
      </div>

      <a href="" className='px-3 font-semibold text-[#FFFFFF] border-[#262626] bg-[#141414] border-[1px] p-[8px] rounded-lg text-[16px]'>Contact Us</a>
    </nav>
  )
}

export default nav
