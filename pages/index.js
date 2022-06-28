import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar'
import HeroImage from '../public/images/Coding_PNG.png'
import { SectionTitle } from '../components/Sectiontitle'
import { MethodologyCard } from '../components/MethodologyCard'

// import of images for work section (methodology part)
import Manage from '../public/images/workSectionSVG/manage.svg'

export default function Home() {

  const webPageSections = ["Home", "My Work", "Contact Me"]

  const workMethodology = [
    {title: "Manage software projects", image: Manage,
     description: "Esta es la descripción de mi work section\
      que se ve bien padre y debe ser algo corta"}
  ]

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
            <Image src={HeroImage} alt='/' objectFit='cover' layout='responsive' priority/>
          </div>

          <div className='flex flex-col content-center mb-16 md:mb-0 w-fit'>
            <h1 className=' text-center text-2xl sm:text-3xl md:text-5xl md:text-left'><strong>I love</strong> building exciting <strong>software</strong></h1>
            <button className='w-fit place-self-center text-lg md:self-start sm:text-2xl md:text-2xl bg-teal-800 p-2 my-8 rounded-md'>Contact Me</button>
          </div>
        </div>

      </section>


      {/** Section: My Work 
           HEX COLOR USED FOR UNDRAW SVGs: #07A291      
      */}
      <section className='h-full w-full bg-black px-16 pt-4'>

        <SectionTitle title={'My Work'} />

        {workMethodology.map((obj ,id) => {
          return (
          <MethodologyCard 
          key={id}
          title={obj.title}
          section={obj.section}
          description={obj.description}
            />
          )
        })}

      </section>



    </main>
  )
}
