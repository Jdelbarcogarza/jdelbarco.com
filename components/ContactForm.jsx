import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormTextField, FormTextArea } from './FormField'


export const ContactForm = () => {

  const { register, handleSubmit } = useForm()
  const [data, setData] = useState("")

  const onSubmit = data => console.log(data)

  return (


      <form onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-8 pb-8 p-4 w-full sm:w-full md:w-2/3 bg-gray-400 rounded-lg'
      >

        <FormTextField title={'Name'} {...register('name')} />


        <FormTextField title={'Email'}>
          <input  {...register('email')}
            className='h-10 w-full text-black rounded-md p-2 '
          />
        </FormTextField>


        <FormTextArea title={'Message'}>
          <textarea  {...register('message')}
            className='w-full text-black rounded-md p-2 h-36 min-h-10 ' />
        </FormTextArea>


        <input
          className='w-fit self-center bg-teal-700 text-xl rounded-md p-2 font-medium'
          type='submit' />

      </form>
  
  )
}
