import React from 'react'
import { imagenPrueba } from '../assets'

function StarProduct({ url }) {
    return (
        <div
            className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat bg-center p-12 text-center"
            style={{
                backgroundImage: `url(${url})`,
                height: '512px',
            }}
        >
            <div className="absolute top-0 left-0 h-full w-full overflow-hidden bg-fixed"
            style={{
                backgroundColor: 'rgba(0,0,0,0.6)',
            }}>
                <div className='flex h-full items-center justify-center'>
                    <div className='text-white'>
                        <h2 className='mb-4 text-4xl font-semibold'>Producto Estrella</h2>
                        <button type='button'
                        className='rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
                        >Compre ahora</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default StarProduct
