
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { SocialIcons } from '../components/SocialIcons'


export const ContactContent = ({ title, quote, author, children }) => {
  return (
    <>
      
      <div className='py-8 px-4 flex flex-col gap-8'>


        <article className='text-center'>
          <p className='italic text-2xl font-medium '>{quote}</p>
          <p className='text-xl '>&#8212; {author}</p>
        </article>
        {/*
        <div className='prose dark:prose-invert prose-slate'>
          <ReactMarkdown>{children}</ReactMarkdown>
        </div>
        */}

        <div className=' w-full'>
          <SocialIcons />
        </div>
      </div>
    </>
  )
}
