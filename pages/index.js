import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { Navbar } from '../components/Navbar'
import HeroImage from '../public/images/Coding_PNG.png'
import { SectionTitle } from '../components/SectionTitle'
import { MethodologyCard } from '../components/MethodologyCard'

export default function Home({services, heroSectionTitle}) {


  return (
    <main className='h-screen w-full text-white bg-black'>

      <section className='h-full w-full text-white'>

        {/** Height de h-1/6 */}
        <div className='w-full h-1/6'>
          <Navbar />
        </div>


        {/** Height de h-5/6 */}
        <div className='h-5/6 w-full flex flex-col justify-around items-center px-2
        md:flex-row-reverse md:px-6
         border-2 border-lime-700'>

          <div className=' w-56 mt-4
          md:w-72'>
            <Image src={HeroImage} alt='/' objectFit='cover' layout='responsive' priority />
          </div>

          <div className='flex flex-col content-center mb-16 md:mb-0 w-fit'>
            <h1 className=' text-center text-2xl sm:text-3xl md:text-5xl md:text-left'>{heroSectionTitle}</h1>
            <button className='w-fit place-self-center text-lg md:self-start sm:text-2xl md:text-2xl bg-teal-800 p-2 my-8 rounded-md'>Contact Me</button>
          </div>
        </div>

      </section>


      {/** Section: My Work 
           HEX COLOR USED FOR UNDRAW SVGs: #07A291      
      */}
      <section className='w-full bg-black px-2 mb-16
      md:px-6'>

        <div className='px-16 py-4'>
          <SectionTitle title={'My Work'} />
        </div>
        
        {/** EL GAP EN TAMAÑO MEDIANO CAMBIALO CUANDO YA SEPAS QUE POONER EN LA DESCRIPCIÓNP PARA QUE TODO ENCAJE */}
        <div className='py-16 grid grid-flow-row grid-cols-1 md:grid-cols-2 justify-items-center gap-24 md:gap-x-16 md:gap-y-24' >
          {services.map((service) => {
            return (

              <div className='w-full h-full px-6'
                  
              key={service.id}>
                <MethodologyCard
                  title={service.attributes.title}
                  image={service.attributes.image.data.attributes}
                  description={service.attributes.description}
                />
              </div>
            )
          })}

        </div>

      </section>



    </main>
  )
}

export async function getStaticProps() {

  // get hero section
  const resHeroSection = await axios.get('http://localhost:1337/api/hero-section')


  // get work section
  const resWorkSection = await axios.get('http://localhost:1337/api/services?populate=*')

  return {
    props: {
      services: resWorkSection.data.data,
      heroSectionTitle: resHeroSection.data.data.attributes.title
    },
  };
}