import { motion } from 'framer-motion'
import React from 'react'
import Experience from '../components/Experience'
import SkillSet from '../components/SkillSet'


const Home = () => {
  return (
    <div>

      <section className='relative pt-16 sm:pt-0 sm:h-screen max-w-[1440px]  mx-auto '>
        <div className='sm:absolute top-1/2 sm:-translate-y-1/2 sm:max-w-[60%]'>
          <motion.img initial={{opacity:0, x:'-100%', scale:0}} transition={{duration:.8, type:'spring', delay:.2}} animate={{opacity:1, x:0, scale:1}} src="/images/image1.png" alt="" />
        </div>
        <section  className='bg-zinc-800 p-4 sm:w-[60%] sm:mr-0 sm:ml-auto sm:h-screen  sm:bottom-0 sm:pl-16 sm:flex sm:flex-col sm:justify-center'>
          <motion.div initial={{opacity:0, x:'100%', scale:0}} transition={{duration:.8, type:'spring', delay:.2}} animate={{opacity:1, x:0, scale:1}}>
            <h1 className='text-white font-semibold text-4xl pb-2 z-10'>Lorem ipsum, dolor sit amet consectetur.</h1> 
            <span className='font-semibold text-3xl z-10'>Lorem, ipsum dolor.</span>
            <p className='pt-4 sm:pr-6  z-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis, quae, illum odit delectus commodi maiores autem iure quia quis voluptatem totam eos hic voluptatibus asperiores expedita corporis possimus mollitia.</p>
          </motion.div>
        </section>
      </section>

      <Experience/>

      <section className='sm:grid sm:grid-cols-[3fr,_2fr] max-w-[1440px] mx-auto'>
        <section className='bg-orange-100 text-zinc-700 py-16 px-12 flex flex-col justify-center'>
          <h3 className='font-semibold text-3xl pb-8 text-black'>Philosophy & values</h3>
          <p>I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.</p>
          <div>
          <button  className='border-b-2 border-zinc-500 text-black pt-8 inline-block '>Check my LinkedIn</button>
          </div>
        </section>
        <div className=''>
          <img className='object-cover h-full' src="/images/image2.png" alt="" />
        </div>
      </section>

      <SkillSet/>

      <section className='pb-8'>
        <div className='text-[50px] text-zinc-600  gap-0 py-8 mx-auto max-w-[1440px] flex flex-wrap justify-center '>
          <article className='min-w-[120px]   border border-zinc-700 flex text-center justify-center py-3'>
            <motion.i whileHover={{scale:1.15}}  className='bx bxl-react w-full hover:text-[#61DBFB] transition-colors duration-300'></motion.i>
          </article>
          <article className='min-w-[120px] border border-zinc-700 flex text-center justify-center py-3'>
            <motion.i whileHover={{scale:1.15}}  className='bx bxl-redux w-full hover:text-[#764abc] transition-colors duration-300' ></motion.i>
          </article>
          <article className='min-w-[120px] border border-zinc-700 flex text-center justify-center py-3'>
            <motion.i whileHover={{scale:1.15}}  className='bx bxl-html5 w-full hover:text-[#e34c26] transition-colors duration-300' ></motion.i>
          </article>
          <article className='min-w-[120px] border border-zinc-700 flex text-center justify-center py-3'>
            <motion.i whileHover={{scale:1.15}}  className='bx bxl-tailwind-css w-full hover:text-[#01b7d6] transition-colors duration-300' ></motion.i>
          </article>
          <article className='min-w-[120px] border border-zinc-700 flex text-center justify-center py-3'>
            <motion.i whileHover={{scale:1.15}}  className='bx bxl-github w-full hover:text-zinc-300 transition-colors duration-300'></motion.i>
          </article>
          <article className='min-w-[120px] border border-zinc-700 flex text-center justify-center py-3'>
            <motion.i whileHover={{scale:1.15}}  className='bx bxl-javascript hover:text-[#f0db4f] transition-colors duration-300 ' ></motion.i>
          </article>
        </div>
      </section>

      <section className='py-16 px-4 max-w-[1440px] mx-auto sm:grid sm:items-start  sm:grid-cols-2 sm:gap-4'>
        <div className='flex flex-col gap-8'>
          <div className='px-6'>
            <h5 className='text-zinc-600'>MY PROJECTS</h5>
            <h3 className='text-3xl font-semibold py-8 text-white'>Work that I've done for the past year </h3>
          </div>
          <article className='rounded-md overflow-hidden '>
            <div >
              <img className='object-contain w-full' src="/images/projects/E-comerce.png" alt="" />
            </div>
            <div className='px-4 py-4 bg-zinc-800 '>
              <h4 className='text-2xl'>E-comerce</h4>
              <p>Description of the project</p>
            </div>
          </article>
          <article className='rounded-md overflow-hidden '>
            <div >
              <img className='object-contain w-full' src="/images/projects/E-comerce.png" alt="" />
            </div>
            <div className='px-4 py-4 bg-zinc-800 '>
              <h4 className='text-2xl'>E-comerce</h4>
              <p>Description of the project</p>
            </div>
          </article>
        </div>
        
        <div className='flex flex-col gap-8 pt-8 sm:pt-0'>
          <article className='rounded-md overflow-hidden '>
            <div >
              <img className='object-contain w-full' src="/images/projects/E-comerce.png" alt="" />
            </div>
            <div className='px-4 py-4 bg-zinc-800 '>
              <h4 className='text-2xl'>E-comerce</h4>
              <p>Description of the project</p>
            </div>
          </article>
          <article className='rounded-md overflow-hidden '>
            <div >
              <img className='object-contain w-full' src="/images/projects/E-comerce.png" alt="" />
            </div>
            <div className='px-4 py-4 bg-zinc-800 '>
              <h4 className='text-2xl'>E-comerce</h4>
              <p>Description of the project</p>
            </div>
          </article>
          <div className='flex justify-center'> 
          <motion.button
            whileHover={{scale:1.1,}}
            whileTap={{scale:.9,}}
            transition={{type:'spring', stiffness:400, damping:14}}
            className='py-4 px-6 border-2 border-violet-950 rounded inline'
          >
            VIEW ALL PROJECTS</motion.button>
          </div>
        </div>
        
      </section>

      <section>

      </section>

    </div>
  )
}

export default Home