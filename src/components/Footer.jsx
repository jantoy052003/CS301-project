import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='mb-0 pb-2 text-gray-200 bg-gray-700 flex flex-col lg:flex lg:justify-between lg:items-center gap-2 px-10 pt-5'>
        <div className='flex flex-col items-center lg:flex lg:justify-between lg:items center'>
          <div className='w-16'>
            <img src={assets.tabLogo} alt="" />
          </div>
          <div className='flex flex-col lg:flex-row lg:gap-80'>
              <div className='pt-3'>
                  <ul className='list-disc flex gap-8 lg:gap-10'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/reviews">Reviews</Link></li>
                  </ul>
              </div>
              <div className='flex items-center justify-center pt-3'>
                  <ul className='list-disc gap-4 flex justify-center lg:gap-10'>
                      <li>+63123-234-231</li>
                      <li>contact@test.com</li>
                  </ul>
              </div>
          </div>
        </div>
        <hr />
        <p className='flex justify-center lg:mx-24 w-full lg:w-fit'>Copyright 2024 © Test.com - All Rights Reserve.</p>
      </div>
    </>
  )
}

export default Footer
