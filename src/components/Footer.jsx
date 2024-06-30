import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <>
      <div className='text-gray-200 bg-gray-700 flex flex-col lg:flex lg:justify-between lg:items-center gap-2 px-10 pt-5'>
        <div className='flex flex-col items-center lg:flex lg:justify-between lg:items center'>
          <div className='w-16'>
            <img src={assets.tabLogo} alt="" />
          </div>
          <div className='flex gap-48 lg:gap-80'>
              <div className='pt-3'>
                  <ul className='list-disc lg:flex gap-10'>
                      <li>Home</li>
                      <li>About</li>
                      <li>Delivery</li>
                      <li>Privacy Policy</li>
                  </ul>
              </div>
              <div className='flex items-start pt-3'>
                  <ul className='list-disc lg:flex gap-10'>
                      <li>+63123-234-231</li>
                      <li>contact@test.com</li>
                  </ul>
              </div>
          </div>
        </div>
        <hr />
        <p className='mx-24 w-full lg:w-fit'>Copyright 2024 © Test.com - All Rights Reserve.</p>
      </div>
    </>
  )
}

export default Footer
