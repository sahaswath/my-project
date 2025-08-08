import React from 'react'
import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'
import Menus from './components/menu/menus'
import Banner from './components/banner/banner'
import Banner2 from './components/banner/banner2'
import Banner3 from './components/banner/banner3'
import Footer from './components/footer/footer'
const App = () => {
  return (
    < >
    <main className='overflow-x-hidden '>
      <Navbar/>
      <Hero/>
      <Menus/>
      <Banner/>
      <Banner2/>
      <Banner3/> 
      <Footer/>
    </main>
    </>
  )
}

export default App
