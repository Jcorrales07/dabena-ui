import React from 'react'
import {
    Navbar,
    Footer,
    ProductCard,
    StarProduct,
    SectionProduct,
} from '../components'
// import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { imagenPrueba, img1, img2, img3, img4, img5 } from '../assets'

function Home() {
    return (
        <div className="bg-slate-600 h-screen text-white">
            <Navbar />
            <StarProduct url={imagenPrueba} />

            <SectionProduct
                url={img1}
                nameSection={'Productos en Polvo →'}
            />

            <SectionProduct
                url={img2}
                nameSection={'Productos Liquidos →'}
            />

            <SectionProduct
                url={img3}
                nameSection={'Super Kits →'}
            />

            <SectionProduct
                url={img4}
                nameSection={'Se un Mayorista →'}
            />

            <SectionProduct
                url={img5}
                nameSection={'Todos los productos →'}
            />

            <Footer />
        </div>
    )
}

export default Home
