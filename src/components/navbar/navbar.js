import React from 'react'
import { FaLeaf } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import { MdMenu } from "react-icons/md";
import {motion } from "framer-motion"
const NavbarMenu =[
  {
    id:1,
    title:"Home",
    link:"/",
  },
  {
    id:2,
    title:"Products",
    link:"#",
  },
  {
    id:3,
    title:"About",
    link:"#",
  },
  {
    id:4,
    title:"Shop",
    link:"#",
  },
  {
    id:5,
    title:"Contacts",
    link:"#",
  },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
    <nav>
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 0.5 , delay:0.1}}
        className='container flex justify-between items-center py-4 md:pt-4'>
        
        {/* logo select */}
        <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
          <p className='text-primary'>fruit</p>
          <p className='text-secondary'>Store</p>
          <FaLeaf className="text-green-500"/>
        </div>

        {/* menu select */}
        <div className='hidden md:block'>
          <ul className='flex items-center gap-6 text-gray-600'>
            {NavbarMenu.map((menu)=>(
              <li key={menu.id} className='text-xl'>
                <a href={menu.link} className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0-1px_#ef4444] font-semibold'>{menu.title}</a>
              </li>
            ))}
            <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300'>
              <MdOutlineShoppingCart/>
            </button>
          </ul>
        </div>

        {/* mobile Hamurger selection */}
        <div className='md:hidden' onClick={() => setOpen(!open)}>
  <MdMenu className='text-4xl' />
</div>
      </motion.div>
    </nav>
     
     {/* mobile menu section */}
     <ResponsiveMenu open={open}/>
    </>
  )
}

export default Navbar;
