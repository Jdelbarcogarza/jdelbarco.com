import React from 'react'
import NextLink from 'next/link'

export const Footer = () => {

    const webPageSections = ["Home", "My Work", "Blog", "Contact Me"]


    return (
        <>
            <hr className='border-neutral-400' />
            <footer className='flex flex-col space-y-6 py-6 items-center bg-black'>
                <div className='text-5xl font-Caveat'>JDelBarco</div>

                <div className='flex w-1/3 justify-evenly font-medium text-xl'>
                    {webPageSections.map((item, id) => {
                        return (

                            <a key={id} href='#'>{item}</a>
                        )
                    })}

                </div>

                <div><p className='text-caption text-neutral-400'>With ❤️ from MX</p></div>
            </footer>
        </>
    )
}
