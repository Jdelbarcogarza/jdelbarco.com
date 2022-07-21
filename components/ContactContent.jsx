
import React from 'react'
import ReactMarkdown from 'react-markdown'


export const ContactContent = ({children}) => {
  return (
    <div>
    <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  )
}
