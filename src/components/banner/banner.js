import React from 'react'
import Bannerpng from '../../assets/slpash.png'
import {motion} from 'framer-motion'
import { FadeLeft, Fadeup } from '../utility/animation'
const Banner = () => {
  return (
    <section className='bg-secondary/10'>
        <div className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:spcae-y-0 py-14'>
            {/* banner image */}
                <div className=' flex justify-center items-center'>
                    <motion.img 
                        initial={{opacity:0 , scale:0.5}}
                        whileInView={{opacity:1 , scale:1}}
                        transition={{type:"spring ", stiffness:100, delay:0.2}}
                        viewport={{one:true}}
                        
                        src={Bannerpng} alt='' className='w-[300px] md:max-w-[400px] h-full object-contain' />
                </div>
            
            {/* Brand info */}
                <div className='flex flex-col justify-center ' >
                    <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                    <motion.h1 
                        variants={Fadeup(0.5)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{one:true}}

                        className='text-3xl lg:text-6xl font-bold uppercase'>{""}Brand Infomation
                    </motion.h1>
                    <motion.p
                        variants={Fadeup(0.7)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{one:true}}>
                        Crafted with passion in our family-run bakery, this sourdough bread features a perfect crust and a soft, 
                        chewy center. Made from locally 
                        sourced, organic wheat, each loaf is fermented for over 24 hours to achieve its signature tangy flavor. 
                        Ideal for a hearty sandwich or as a side to your favorite soup."
                    </motion.p>
                    <motion.p
                     variants={Fadeup(0.9)}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{one:true}}>
                    "Our grass-fed beef steak comes from cattle raised on lush, open pastures, ensuring a lean, flavorful, and nutrient-rich cut.
                     With no added hormones or antibiotics, you’re getting the purest taste of our commitment to sustainable farming. Perfect for grilling, 
                     this steak promises a tender and juicy experience with every bite."
                    </motion.p>
                    {/* button section */}
                    <motion.div 
                        variants={Fadeup(1.5)}
                        initial="hidden"
                        animate="visible"
                        className='flex justify-center md:justify-start'>
                            <button className='primary-btn '>
                            
                            Lean more</button>
                    </motion.div> 
                </div>
             </div>   
        </div>
    </section>
  )
}

export default Banner
