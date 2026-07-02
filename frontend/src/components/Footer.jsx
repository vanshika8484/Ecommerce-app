import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
<div>
    <img src={assets.logo} alt="" className='mb-5 w-32' />
    <p className='w-full md:w-2/3 text-gray-600'>Buy your favorite products at the best prices with fast delivery and secure payment options.</p>
    </div>

    <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='text-gray-600 flex flex-col gap-1'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>
    </div>
    <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='text-gray-600 flex flex-col gap-1'>
            <li>+1-234-567-890</li>
            <li>contact@forever.com</li>
        </ul>
    
    
    </div>
   
    </div>
    <div>
        <hr />
    <p className='py-5 text-sm text-center'>© 2026 forever.com. All rights reserved.</p>
    </div>
    </>
  )
}

export default Footer