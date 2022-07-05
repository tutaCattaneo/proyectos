import React from 'react'
import Logotipo from '../assets/twit.png'

const NavBar = () => {
  return (
    <div className='bg-gray-800 py-6 relative '>
         <div className="container mx-auto flex ">
            <div className='flex flex-grow'>
            <img src={Logotipo} className="w-14 pr-4  " alt="" />
            </div>
              <div className='flex flex-grow justify-between'>
              <div className=''>
                   <a href="" className='text-white lg:mr-7'>Inicio</a>
                   <a href="" className='text-white lg:mr-7'>Cursos</a>
                   <a href="" className='text-white lg:mr-7'>Blog</a>
                   <a href="" className='text-white lg:mr-7'>Contacto</a>
             </div>

              <div className=''>
                   <a href="#" className='text-white border border-white py-2.5 px-5 rounded-md hover:bg-white hover:text-gray-800 transition duration-500 ease-in-out lg:mr-4'>Iniciar session</a>
                   <a href="#" className='text-white bg-blue-500 border border-blue-500 py-2.5 px-5 rounded-md hover:bg-blue-600 hover:border-blue-600 transition duration-500 ease-in-out lg:mr-4'>Registrate</a>
              </div>
             </div>

       </div>   
        

    </div>
  )
}

export default NavBar