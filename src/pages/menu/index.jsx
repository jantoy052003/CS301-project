
import { menu_list } from "../../assets/assets"
import FoodDisplay from "../../components/FoodDisplay"
import { useState } from "react"

const Menu = () => {
  
  const [category, setCategory] = useState("All");

  

  return (
    <>
      <div id='menu' className="flex flex-col gap-4 mb-10 mx-8 lg:mx-10 mt-16">
        <h1 className="text-gray-700 text-4xl font-medium">Explore our menu</h1>
        <p className="max-w-lg text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, laudantium commodi! Velit, consequuntur voluptatum mollitia sapiente corporis eligendi earum qui!</p>
        <div className="menu-list-item flex justify-between items-center gap-4 text-center mx-2 my-4 overflow-x-scroll">
            
            {menu_list.map((item, index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name ? "All" : item.menu_name)} key={index}>
                        <img src={item.menu_image} alt="" className={category === item.menu_name ? "activeItem" : ""}/>
                        <p className="mt-2 text-gray-500 text-sm cursor-pointer">{item.menu_name}</p>
                    </div>
                )
            })}
            
            {/* THIS IS WORKING WITH useContext }
            {/* {menu_list.map((item, index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name ? "All" : item.menu_name)} key={index}>
                        <img src={item.menu_image} alt="" className={category === item.menu_name ? "activeItem" : ""}/>
                        <p className="mt-2 text-gray-500 text-sm cursor-pointer">{item.menu_name}</p>
                    </div>
                )
            })} */}
        </div>
        <hr className="mx-2.5 h-0.5 bg-gray-300 border-none"/>
        <FoodDisplay category={category}/>
      </div>
    </>
  )
}

export default Menu
