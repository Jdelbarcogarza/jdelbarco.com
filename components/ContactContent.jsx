
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { SocialIcons } from '../components/SocialIcons'


export const ContactContent = ({ title, quote, author, children }) => {
  return (

    <div className='p-8 flex flex-col justify-between'>
      <h1 className='text-2xl'>{title}</h1>
      <article className=''>
        <p className=''>{quote}</p>
        <p>{author}</p>
      </article>
      <div className='prose dark:prose-invert prose-slate'>
        <ReactMarkdown>{children}</ReactMarkdown>
      </div>


        <SocialIcons />
    </div>

  )
}
