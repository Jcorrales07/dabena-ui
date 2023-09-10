import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

let slides = [
    {
        url: 'https://images.unsplash.com/photo-1682687981974-c5ef2111640c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
        alt: 'img',
    },
    {
        url: 'https://images.unsplash.com/photo-1693576588093-7244ecec24c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
        alt: 'img',
    },
    {
        url: 'https://images.unsplash.com/photo-1693491012999-09a3764eab33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80',
        alt: 'img',
    },
]

function Carousel() {
    let [currentSlide, setCurrentSlide] = useState(2)

    const nextSlide = () => {
        if (currentSlide >= slides.length - 1) {
            setCurrentSlide(0)
            return
        }
        setCurrentSlide((prev) => prev + 1)
    }

    const prevSlide = () => {
        if (currentSlide <= 0) {
            setCurrentSlide(slides.length - 1)
            return
        }
        setCurrentSlide((prev) => prev - 1)
    }

    return (
        <div className="max-w-[1400px] h-[350px] md:h-[512px] w-full mt-0 m-auto py-5 px-4 relative group">
            <div
                style={{
                    backgroundImage: `url('${slides[currentSlide].url}')`,
                }}
                className="w-full h-full rounded-2xl bg-center bg-cover transition-all duration-500"
            >
                <div className="hidden absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer group-hover:block" onClick={prevSlide}>
                    <IoIosArrowBack size={30} />
                </div>
                <div className="hidden absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer group-hover:block" onClick={nextSlide}>
                    <IoIosArrowForward size={30} />
                </div>
            </div>
        </div>
    )
}

export default Carousel
