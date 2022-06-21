
import React from 'react'

export const SectionTitle = ({title}) => {
  return (
    <div className='h-fit w-fit'>
          <hr className='bg-slate-400 h-0.5 w-3/4' />
          <h4 className='text-3xl'>{title}</h4>
        </div>
  )
}
