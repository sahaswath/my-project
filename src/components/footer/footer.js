import React from 'react'
import { FaFacebookF, FaTwitter,FaInstagram, FaLeaf , FaGithub } from 'react-icons/fa6'
import {motion} from "framer-motion"
const Footer = () => {
  return (
    <footer className='bg-primary/10 py-12'>
        <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:2}}
            transition={{duration:1 , delay:0.2}}
            className='container flex justify-between items-center'>
    {/* logo section */}
            <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                <p className='text-primary'>fruit</p>
                <p className='text-secondary'>Store</p>
                <FaLeaf className="text-green-500"/>
            </div>
    {/* Social-media section */}
            <div className='flex text-3xl items-center gap-4 mt-6 text-gray-700'>
                <FaFacebookF/>
                <FaInstagram/>
                <FaTwitter/>
               <FaGithub/>
            </div>
        </motion.div>
    </footer>
  )
}

export default Footer
