
import React from 'react'

/**
 * 
 * @param {string} title El label que indica de qué es el textfield que se va a llenar
 * @returns Un componente que customiza cada campo del form
 */
export const FormTextField = ({ title, children, ...props }) => {


    return (

        <div className='flex flex-col gap-2 self-center w-full sm:w-2/3 md:w-full content-center' >
            <label className='self-start'>{title}</label>
            <input {...props}
            className='h-10 text-black rounded-md p-2'/>
        </div>
    )
}


export const FormTextArea = ({ title, children, ...props }) => {
    return (
        <div className='flex flex-col gap-2 self-center w-full sm:w-2/3 md:w-full content-center'>
            <label>{title}</label>
            <textarea className='h-36 rounded-md p-2'/>
        </div>
    )
}