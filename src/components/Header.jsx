import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const [isMenuShown, setIsMenuShown] = useState(false)

  const handleClickMenu = () => { 
      setIsMenuShown(!isMenuShown)
  }

  return (
    <section className=' absolute left-0 right-0 z-10' >
      <nav className=' h-20 flex items-center justify-between mx-auto max-w-7xl '>
        <Link to={'/'}  className=' text-white pl-4 text-2xl sm:text-3xl'>Jose Briseño</Link>

        <div>
        <Link to={'/'}  className='text-zinc-500 h-full px-6 hidden sm:inline-block '>Experience</Link>
        <Link to={'/'} className='text-zinc-500 h-full px-6 hidden sm:inline-block '>Work</Link>
        <Link to={'contact'} className='text-zinc-500 h-full px-6 hidden sm:inline-block '>Contact</Link>
        <button onClick={handleClickMenu} className='text-zinc-500 h-full px-6  sm:hidden text-2xl'><i className='bx bx-menu-alt-right'></i></button>
        </div>
        <div className={`fixed ${isMenuShown?'':'translate-x-full'} right-0  transition-all duration-300 bg-zinc-800 top-0 bottom-0 `}>
          <div className='relative flex flex-col justify-center h-full gap-6 text-2xl text-zinc-500 pl-8 pr-4 text-end'>
            <button onClick={handleClickMenu} className=' px-6'><i className='bx bx-menu-alt-right absolute top-7 right-6'></i></button>

            <Link onClick={handleClickMenu} to={'/'}  className='px-6 '>Experience</Link>
            <Link onClick={handleClickMenu} to={'/'} className='px-6 '>Work</Link>
            <Link onClick={handleClickMenu} to={'contact'} className='px-6 '>Contact</Link>
          </div>
        </div>
      </nav>

    </section>
  )
}

export default Header