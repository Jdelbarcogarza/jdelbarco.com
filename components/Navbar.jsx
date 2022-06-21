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
        <div className="flex md:hidden">
          {/** Hamburguer icon  */}
          <button className={mobileMenuActive ? 'hidden' : "md:hidden"} onClick={openMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>

          </button>

          {/** close icon  */}
          <button className={mobileMenuActive ? null : 'hidden'} onClick={openMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

      <ul className={mobileMenuActive ? 'absolute right-6 top-24 flex flex-col gap-8 text-xl jusfify-center items-end pt-4' : 'hidden'}>
        {webPageSections.map((section, id) => {
          return (
            <li key={id} className=''>
              <a href='#' className=''>{section}</a>
            </li>
          )
        })}
      </ul>
        </div>
      </nav>

  )
}
