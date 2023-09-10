import React from 'react'
import { facebook, instagram, logoDabenaTexto } from '../assets'

function Footer() {
  return (
    <div className='bg-[#141814] flex items-center flex-col p-5 text-center'>
        <div className='Logo w-20 mb-10'>
            <img src={logoDabenaTexto} alt="Dabena's logo"/>
        </div>

        <div className='mb-5'>
            <input type="text" placeholder='ejemplo@email.com' className='bg-slate-600 rounded-s-md p-2'/>
            <button className='p-2 bg-green-900 rounded-e-md'>Subscribirme</button>
        </div>

        <div className='flex items-center mb-5'>
            <img src={facebook} alt="" srcset="" />
            <img src={instagram} alt="" />
        </div>

        <div className='mb-5'>
            Soporte Contacto:
            <br />
            dabena@gmail.com
        </div>

        <div className=''>
            {new Date().getFullYear()} © Dabena.
            <br/>Todos los derechos reservados.
        </div>

    </div>
  )
}

export default Footer