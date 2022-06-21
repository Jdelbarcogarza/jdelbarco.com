import React from 'react'

export const Navbar = () => {

  const webPageSections = ["Home", "My Work", "Contact Me"]

  return (



    <nav className='flex justify-between items-center h-1/6 px-16 py-4 text-white bg-black'>
      {/** Aqui va el logo con su respectivo font */}
      <div className='text-6xl font-Caveat'>JDelBarco</div>

      {/** Lista de elementos que sirven de links de navegación*/}
      <div>
        <ul className='flex justify-around space-x-16 text-xl'>
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
