import React from 'react'

const Home = () => {
  return (
    <div>

      <section className='relative pt-16 sm:pt-0 sm:h-screen max-w-[1440px]  mx-auto '>
        <div className='sm:absolute top-1/2 sm:-translate-y-1/2 sm:max-w-[60%]'>
          <img src="/images/image1.png" alt="" />
        </div>
        <section className='bg-zinc-800 p-4 sm:w-[60%] sm:mr-0 sm:ml-auto sm:h-screen  sm:bottom-0 sm:pl-16 sm:flex sm:flex-col sm:justify-center'>
          <h1 className='text-white font-semibold text-4xl pb-2 z-10'>Lorem ipsum, dolor sit amet consectetur.</h1> 
          <span className='font-semibold text-3xl z-10'>Lorem, ipsum dolor.</span>
          <p className='pt-4  z-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis, quae, illum odit delectus commodi maiores autem iure quia quis voluptatem totam eos hic voluptatibus asperiores expedita corporis possimus mollitia.</p>
        </section>
      </section>

      <section className='py-24 px-4 sm:px-14 max-w-[1440px] mx-auto'>
        <p className='text-zinc-600'>WORK EXPERIENCE</p>
        <h2 className=' text-white text-3xl pt-16 font-semibold text-center sm:text-start sm:max-w-[60%] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
        <div className='pt-16 flex flex-col items-center sm:flex-row justify-between gap-10 text-center sm:text-start '>
          <article>
          <span className='text-9xl text-zinc-600 font-light'>01</span>
          <p className='pt-4 text-white text-2xl'>Front End developer</p>
          <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae modi omnis amet quia similique! Dolorem, quod.</p>
          </article>
          <article>
          <span className='text-9xl text-zinc-600 font-light'>02</span>
          <p className='pt-4 text-white text-2xl'>Front End developer</p>
          <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae modi omnis amet quia similique! Dolorem, quod.</p>
          </article>
          <article>
          <span className='text-9xl text-zinc-600 font-light'>03</span>
          <p className='pt-4 text-white text-2xl'>Front End developer</p>
          <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae modi omnis amet quia similique! Dolorem, quod.</p>
          </article>
          
        </div>
      </section>

      <section className='sm:grid sm:grid-cols-[3fr,_2fr] max-w-[1440px] mx-auto'>
        <section className='bg-orange-100 text-zinc-700 py-16 px-12 flex flex-col justify-center'>
          <h3 className='font-semibold text-3xl pb-8 text-black'>Philosophy & values</h3>
          <p>I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.</p>
          <div>
          <button className='border-b-2 border-zinc-500 text-black pt-8 '>Check my LinkedIn</button>
          </div>
        </section>
        <div className=''>
          <img className='object-cover h-full' src="/images/image2.png" alt="" />
        </div>
      </section>

      <section className='py-16 px-4 sm:grid sm:grid-cols-[2fr,_4fr] gap-16 max-w-[1440px] mx-auto'>
        <article className='px-8' >
          <h3 className='text-3xl font-semibold pb-8'>Skill Set</h3>
          <p className='pb-8 text-zinc-600'>With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.</p>
        </article>

        <section className=' text-center sm:grid sm:grid-cols-2 sm:gap-4 sm:text-start '>
          <article className='pb-8 text-zinc-600'>
            <div className='flex justify-center sm:justify-start h-14'>
              <img  src="/images/scramble.svg" alt="" />
            </div>
            <h4 className='text-2xl font-semibold py-4 text-white'>Framework</h4>
            <p>react</p>
            <p>tailwind </p>
            <p>next </p>
            
          </article>
          <article className='pb-8 text-zinc-600'>
            <div className='flex justify-center h-14 sm:justify-start '>
              <img  src="/images/scramble.svg" alt="" />
            </div>
            <h4 className='text-2xl font-semibold py-4 text-white'>Framework</h4>
            <p>react</p>
            <p>tailwind </p>
            <p>next </p>
            
          </article>
          <article className='pb-8 text-zinc-600'>
            <div className='flex justify-center h-14 sm:justify-start '>
              <img  src="/images/scramble.svg" alt="" />
            </div>
            <h4 className='text-2xl font-semibold py-4 text-white'>Framework</h4>
            <p>react</p>
            <p>tailwind </p>
            <p>next </p>
            
          </article>
          <article className='pb-8 text-zinc-600'>
            <div className='flex justify-center h-14 sm:justify-start '>
              <img  src="/images/scramble.svg" alt="" />
            </div>
            <h4 className='text-2xl font-semibold py-4 text-white'>Framework</h4>
            <p>react</p>
            <p>tailwind </p>
            <p>next </p>
          </article>
        </section>
      </section>

      <section>
        <div className='text-[50px] text-zinc-600  gap-0 py-8 mx-auto max-w-[1440px] flex flex-wrap justify-center '>
          <article className='min-w-[120px]  border border-zinc-700 flex text-center justify-center py-3'>
            <i className='bx bxl-react w-full'></i>
          </article>
          <article className='min-w-[120px]  border border-zinc-700 flex text-center justify-center py-3'>
            <i className='bx bxl-redux w-full' ></i>
          </article>
          <article className='min-w-[120px]  border border-zinc-700 flex text-center justify-center py-3'>
            <i className='bx bxl-html5 w-full' ></i>
          </article>
          <article className='min-w-[120px]  border border-zinc-700 flex text-center justify-center py-3'>
            <i className='bx bxl-tailwind-css w-full' ></i>
          </article>
          <article className='min-w-[120px]  border border-zinc-700 flex text-center justify-center py-3'>
            <i className='bx bxl-github w-full'></i>
          </article>
          <article className='min-w-[120px]  border border-zinc-700 flex text-center justify-center py-3'>
            <i className='bx bxl-javascript ' ></i>
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
        </div>
        
      </section>

    </div>
  )
}

export default Home