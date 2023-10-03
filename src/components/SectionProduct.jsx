import React from 'react'

function SectionProduct({ url, nameSection }) {
    return (
        <div className='p-5 cursor-pointer'>
            <div
                className="flex justify-center relative bg-white bg-cover bg-no-repeat bg-center m-auto h-[50vh]"
                style={{
                    backgroundImage: `url('${url}')`,
                }}
            >
                <button
                    type="button"
                    className="absolute bottom-4 text-center rounded-full text-white border-2 border-white px-5 py-3 uppercase font-semibold hover:bg-white hover:text-black transition duration-150 ease-in-out"
                >
                    {nameSection}
                </button>
            </div>
        </div>
    )
}

export default SectionProduct
