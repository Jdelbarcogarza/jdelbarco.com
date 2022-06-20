import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar'
import HeroImage from '../public/images/HeroImage.jpg'

export default function Home() {

  const webPageSections = ["Home", "My Work", "Contact Me"]

  return (
    <main className='h-screen w-full text-white bg-black'>

      <section className='h-full w-full text-white'>

        {/** Height de h-1/6 */}
        <Navbar />

        <div className='h-5/6 w-full flex flex-col justify-center items-center pl-8'>
          <h1 className='text-5xl'><strong>I love</strong> building exciting <strong>software</strong></h1>
          <button className='text-2xl bg-teal-800 p-2 mt-8 rounded-md'>Contact Me</button>
        </div>

      </section>


    {/** Section: My Work */}
      <section className='h-full bg-black px-16 pt-4'>

        <div className='h-fit flex flex-col justify-between items-start'>
          <hr className='bg-slate-400 h-0.5 w-24' />
          <h4 className='text-3xl'>My Work</h4>
        </div>
      </section>



    </main>
  )
}
