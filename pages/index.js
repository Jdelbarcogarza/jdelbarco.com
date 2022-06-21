import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar'
import HeroImage from '../public/images/Coding_PNG.png'
import { SectionTitle } from '../components/Sectiontitle'

export default function Home() {

  const webPageSections = ["Home", "My Work", "Contact Me"]

  return (
    <main className='h-screen w-full text-white bg-black'>

      <section className='h-full w-full text-white'>

        {/** Height de h-1/6 */}
        <Navbar />

        
        {/** Height de h-5/6 */}
        <div className='h-5/6 w-full flex flex-col justify-between items-center border-2 border-lime-700'>
    
        {/** EL ESPACIO DE AQUI EN MEDIO ES PARA PONER UNA PIC O ALGO Y QUE VAYA ALINEADO CON EL RESTO DEL
        CONTENIDO DE LA PAGINA. */}

        <div className='h-2/3 flex flex-col justify-end gap-8 items-around px-8'>
          <h1 className='text-5xl'><strong>I love</strong> building exciting <strong>software</strong></h1>
          <button className='text-2xl bg-teal-800 p-2 rounded-md w-fit self-center'>Contact Me</button>
          </div>
        </div>

      </section>


      {/** Section: My Work */}
      <section className='h-full w-full bg-black px-16 pt-4'>

        <SectionTitle title={'My Work'} />

      </section>



    </main>
  )
}
