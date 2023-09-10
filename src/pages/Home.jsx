import React from 'react'
import {Navbar, Footer, Carousel} from '../components'  

function Home() {
  return (
    <div className='bg-slate-600 h-screen text-white'>
        <Navbar/>
        <Carousel/>
        <Footer/>
    </div>
  )
}

export default Home