import logo from '../../assets/Logo.svg'
import emailLogo from '../../assets/emailLogo.svg'
import ChatLogo from '../../assets/ChatLogo.svg'
function footer() {
    return (
        <footer className=' mt-14 shadow-md font-Urbanist'>
            <section className='flex justify-between p-10  shadow-lg bg-[#141414] border-[#262626] border-[2px] sm:flex-wrap'>
                <div>
                    <img src={logo} alt="" />
                    <div className='flex items-center  space-x-4 border-solid rounded-lg  border-[#262626] border-[2px]  p-2 my-4'>
                        <div className='flex gap-2 items-center'>
                            <img src={emailLogo} alt="" />
                            <input type="text" placeholder='Enter Your Email' className='bg-transparent border-[#262626] border-none outline-none text-[#999999] mt-[2px]' />
                        </div>
                        <img src={ChatLogo} alt="Chat" className='w-[25px] h-[25px]' />
                    </div>
                </div>

                <div className='leading-9 '>
                    <p className='text-[#999999] cursor-pointer font-semibold'>Home</p>
                    <p className='text-[#FFFFFF] cursor-pointer'>Features</p>
                    <p className='text-[#FFFFFF] cursor-pointer'>Hero Section</p>
                    <p className='text-[#FFFFFF] cursor-pointer'>Properties</p>
                    <p className='text-[#FFFFFF] cursor-pointer'>Testimonials</p>
                    <p className='text-[#FFFFFF] cursor-pointer'>FAQ’s</p>
                </div>
                <div className='leading-9'>
                    <p className='text-[#999999] cursor-pointer font-semibold'>About Us</p>
                    <p className='text-[#FFFFFF] cursor-pointer'>Our Story</p>
                    <p className='text-[#FFFFFF] cursor-pointer'>Our Works</p>
                    <p className='text-[#FFFFFF] cursor-pointer'>How It Works</p>
                    <p className='text-[#FFFFFF] cursor-pointer'>Our Team</p>
                    <p className='text-[#FFFFFF] cursor-pointer'>Our Clients</p>
                </div>
                <div className='leading-9'>
                    <p className='text-[#999999] cursor-pointer font-semibold'>Properties</p>
                    <p className='text-[#FFFFFF] cursor-pointer'>Portfolio</p>
                    <p className='text-[#FFFFFF] cursor-pointer'>Categories</p>
                </div>
                <div className='leading-9'>
                    <p className='text-[#999999] cursor-pointer font-semibold'>Services</p>
                    <p className='text-[#FFFFFF] cursor-pointer'>Valuation Mastery</p>
                    <p className='text-[#FFFFFF] cursor-pointer'>Strategic Marketing</p>
                    <p className='text-[#FFFFFF] cursor-pointer'>Negotiation Wizardry</p>
                    <p className='text-[#FFFFFF] cursor-pointer'>Closing Success</p>
                    <p className='text-[#FFFFFF] cursor-pointer'>Property Management</p>
                </div>
                <div className='leading-9'>
                    <p className='text-[#999999] cursor-pointer font-semibold'>Contact Us</p>
                    <p className='text-[#FFFFFF] cursor-pointer'>Contact Form</p>
                    <p className='text-[#FFFFFF] cursor-pointer'>Our Offices</p>
                </div>
            </section>
        </footer>
    )
}

export default footer
