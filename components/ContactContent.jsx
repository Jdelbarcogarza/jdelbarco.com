
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { SocialIcons } from '../components/SocialIcons'


export const ContactContent = ({ title, quote, author, children }) => {
  return (
    <>
      
      <div className='pb-8 p-4 flex flex-col gap-16'>

        <article className=''>
          <p className='italic text-2xl font-medium'>{quote}</p>
          <p className='text-xl '>&#8212; {author}</p>
        </article>
        {/*
        <div className='prose dark:prose-invert prose-slate'>
          <ReactMarkdown>{children}</ReactMarkdown>
        </div>
        */}

        <div className=''>
          <SocialIcons />
        </div>
      </div>
    </>
  )
}
