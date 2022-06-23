import { useState } from "react"
import React from 'react'

export const Navbar = () => {

  const webPageSections = ["Home", "My Work", "Contact Me"]

  // esto esta mal desde el principio. Debe siempre estar obteniendo la actual width de la pantalla para decir si
  // se activa o no
  const [mobileMenuActive, setMobileMenuActive] = useState(false)

  const openMobileMenu = () => {
    return setMobileMenuActive(!mobileMenuActive)
  }

  return (

    <nav className='flex justify-between items-center h-1/6 px-4 md:px-16 py-4 text-white bg-black border-2 border-red-700'>
      {/** Aqui va el logo con su respectivo font */}
      <div className='text-5xl md:text-6xl font-Caveat'>JDelBarco</div>


      {/** Desktop Menu */}

      {/** Lista de elementos que sirven de links de navegación*/}
      <ul className='hidden md:flex justify-around space-x-16 text-xl border-2 border-lime-700'>
        {webPageSections.map((section, id) => {
          return (
            <li key={id} className=''>
              <a href='#' className=''>{section}</a>
            </li>
          )
        })}
      </ul>


      {/** Mobile Menu */}
      <div className="md:hidden">
        {/** Hamburguer icon  */}
        <button className={mobileMenuActive ? 'hidden' : "md:hidden"} onClick={openMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>

        </button>

        {/** close icon  */}
        <button className={mobileMenuActive ? null : 'hidden'} onClick={openMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/** drop down menu */}
        <div className={mobileMenuActive ? 'absolute z-10 flex flex-col h-5/6 w-full right-0 top-28 bg-white text-black' : 'hidden'}>
        <ul className='h-full w-full flex flex-col justify-start items-center text-3xl gap-1 mt-2'>
          {webPageSections.map((section, id) => {
            return (
              <li key={id} className=' bg-slate-400 p-4 self-stretch'>
                <button href='#' className='w-full h-full'>{section}</button>
              </li>
            )
          })}
        </ul>

        {/** Aqui se puede poner más contenido en el mobile menu */}
          <p className="flex flex-col text-black self-center">email me: jdelbarcogarza@gmail.com</p>


        </div>

      </div>
    </nav>

  )
}
