import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-zinc-900'>
      <footer className='px-12 py-16 sm:flex justify-around max-w-[1440px] mx-auto'>
        <section>
          <h2 className='text-2xl text-white'>Jose Briseño</h2>

          <section className='flex gap-2 text-2xl pt-2'>
            <div className='text-[#1877f2]'>
              <i className='bx bxl-facebook-circle' undefined ></i>
            </div>
            
            <div className='text-[#fafafa]'>
              <i className='bx bxl-github'></i>
            </div>

            <div className='text-[#0a66c2]'>
              <i className='bx bxl-linkedin-square' ></i>
            </div>
          </section>
        </section>
        <section>
          <nav className='flex flex-col pt-8 items-center sm:items-end sm:pt-0'>
            <Link to={'/'}>Home</Link>
            <button>Experience</button>
            <button>Work</button>
            <button>Contact</button>
          </nav>
        </section>

      </footer>
    </div>
  )
}

export default Footer