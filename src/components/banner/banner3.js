import React from 'react'
import BannerApple from '../../assets/banner3.jpg'
import {motion} from 'framer-motion'
import { FadeLeft, Fadeup } from '../utility/animation'

const bgStyle= {
    backgroundImage:`url(${BannerApple})`,
    backgroundPostion:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",

};

const Banner3 = () => {
  return (
    
       <section className='bg-secondary/10'>
        <div 
            style={bgStyle}
            className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:spcae-y-0 py-14 rounded-3xl '>
            {/* blank div */}
                <div>
                </div>
            
            {/* Brand info */}
                <div className='flex flex-col justify-center pl-36 md:pl-0 sm:pl-0' >
                    <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                    <motion.h1 
                        variants={Fadeup(0.5)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{one:true}}

                        className='text-3xl lg:text-6xl font-bold uppercase'>{""}Brand Info
                    </motion.h1>
                    <motion.p
                        variants={FadeLeft(0.7)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{one:true}}
                        className=''>
                        Crafted with passion in our family-run bakery, this sourdough bread features a perfect crust and a soft, 
                        chewy center. Made from locally 
                        sourced, organic wheat, each loaf is fermented for over 24 hours to achieve its signature tangy flavor. 
                        Ideal for a hearty sandwich or as a side to your favorite soup."
                    </motion.p>
                    {/* <motion.p
                     variants={FadeLeft(0.9)}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{one:true}}>
                    "Our grass-fed beef steak comes from cattle raised on lush, open pastures, ensuring a lean, flavorful, and nutrient-rich cut.
                     With no added hormones or antibiotics, you’re getting the purest taste of our commitment to sustainable farming. Perfect for grilling, 
                     this promises a tender and juicy experience with every bite."
                    </motion.p> */}
                    {/* button section */}
                    <motion.div 
                        variants={FadeLeft(1.5)}
                        initial="hidden"
                        animate="visible"
                        className='flex justify-center md:justify-start'>
                            <button className='primary-btn '>
                            
                            Oder now</button>
                    </motion.div> 
                </div>
             </div>   
        </div>
    </section>
   
  )
}

export default Banner3
