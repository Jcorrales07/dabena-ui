import { useState } from 'react'
import { logoDabena, logoDabenaTexto, menuIcon, closeIcon } from '../assets'

function Navbar() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <div className={`bg-white flex justify-between items-center p-3`}>
                <img
                    src={logoDabena}
                    alt="Dabena's logo"
                    className="h-14 w-14"
                />
                <div
                    className="w-10 text-black flex items-center justify-center cursor-pointer"
                    onClick={() => {
                        setShowMenu((prev) => !prev)
                    }}
                >
                    <img
                        src={showMenu ? closeIcon : menuIcon}
                        alt="Menu and Close Icon"
                        className="h-7 w-7"
                    />
                </div>

                <nav
                className={
                    showMenu
                        ? `absolute top-20 right-0 bg-white p-2 h-screen w-full z-10`
                        : `hidden`
                }
            >
                <ul className="flex flex-col text-black">
                    {showMenu}
                    <li className="mb-3 px-5 py-3 hover:bg-green-700 cursor-pointer text-black hover:text-white">
                        Inicio
                    </li>
                    <li className="mb-3 px-5 py-3 hover:bg-green-700 cursor-pointer text-black hover:text-white">
                        Productos
                    </li>
                    <li className="mb-3 px-5 py-3 hover:bg-green-700 cursor-pointer text-black hover:text-white">
                        Nosotros
                    </li>
                    <li className="mb-3 px-5 py-3 hover:bg-green-700 cursor-pointer text-black hover:text-white">
                        Contacto
                    </li>
                    <li className="mb-3 px-5 py-3 hover:bg-green-700 cursor-pointer text-black hover:text-white">
                        Sucursal
                    </li>
                    <li className="mb-3 px-5 py-3 hover:bg-green-700 cursor-pointer text-black hover:text-white">
                        FAQs
                    </li>
                </ul>
            </nav>
            </div>
            
        </>
    )
}

export default Navbar
