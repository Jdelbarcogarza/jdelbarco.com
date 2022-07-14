import React from 'react'
import Image from 'next/image'


export const MethodologyCard = ({title, image, description}) => {

  return (

    <div className='flex flex-col text-white h-full items-center'>

      <p className='text-xl my-6 font-semibold' >{title}</p>

        {/** Photo and description */}
      <div className='h-full flex flex-col justify-center ' >
        <div className='w-1/2 md:h-72 justify-center self-center max-w-xs '>
          <Image src={image} alt='/' objectFit='cover' layout='responsive' width={250} height={250} priority />
        </div>
        <p className='whitespace-normal max-w-prose slef-center xs:mt-8'>{description}</p>
      </div>
    </div>
  )
}

