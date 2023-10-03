import React from 'react'

function ProductCard({ url }) {
    return (
        <div className="w-[290px] mt-10 text-center rounded-md bg-white m-auto">
            <img src={url} alt="product image" className='rounded-md'/>
            <div className='p-5'>
                <div className='mb-5 text-black'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque suscipit maiores eos recusandae non magnam fugiat!
                    Adipisci quisquam ipsa vel natus fugit non, quam neque
                    tempora vitae recusandae beatae soluta?
                </div>
                <button className="p-2 rounded-md bg-green-800">
                    Shop Now
                </button>
            </div>
        </div>
    )
}

export default ProductCard
