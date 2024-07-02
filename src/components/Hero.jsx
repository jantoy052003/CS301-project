import { NavLink, Link } from "react-router-dom"

const Hero = () => {
  return (
    <>
      <div className='hero-bg-image h-96 mb-20 mx-2 lg:mx-8 mt-10 rounded-xl'>
        <div className="absolute flex flex-col items-start gap-4 max-w-lg bottom-16 left-4 lg:bottom-10 lg:left-20 animate-[appear_2500ms] duration-75">
          <h2 className="text-4xl lg:font-medium lg:text-6xl text-white">Order your favorite food here</h2>
          <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque odit error veniam illo quo voluptates voluptate, perspiciatis voluptatibus temporibus dolor eius ab ea officiis ut eaque vitae labore corrupti aliquid earum neque repellat! Quaerat enim ducimus modi cumque magni! Pariatur.</p>
          <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><NavLink tag={Link} to="/menu" >View Menu</NavLink></button>
        </div>
      </div>
    </>
  )
}

export default Hero
