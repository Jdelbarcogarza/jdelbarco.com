import React from 'react'
import Image from 'next/image'


export const MethodologyCard = ({title, image, description}) => {

  return (

    <div className='flex flex-col text-white h-full items-center'>

      <p className='text-xl my-6 font-semibold' >{title}</p>

        {/** Photo and description */}
      <div className='h-full flex flex-col justify-center' >
        <div className='w-full md:h-72 justify-center self-center max-w-xs '>
          <Image src={image.url} 
          alt={image.alternativeText} 
          objectFit='contain' 
          layout='responsive'
          width={image.width}
          height={image.height}
          priority />
        </div>
        <p className='whitespace-normal max-w-prose self-center mt-8 md:mt-0'>{description}</p>
      </div>
    </div>
  )
}

