import React from 'react'

const Contact = () => {
  return (
    <div className=' py-20 h-full flex flex-col justify-center items-center mx-auto min-h-screen '>
      <h2 className='text-white text-3xl sm:text-4xl py-8'>Get in touch</h2>
      <form className='py-8 grid gap-2 w-[280px] sm:w-[400px] '>
        <div className='grid gap-2'>
          <label className='sm:text-xl' htmlFor="">Name:</label>
          <input required className='bg-zinc-900/80 outline-none py-2 px-2 rounded-lg' type="text" />
        </div>
        <div className='grid gap-2'>
          <label className='sm:text-xl' htmlFor="">E-mail:</label>
          <input required className='bg-zinc-900/80 outline-none py-2 px-2 rounded-lg' type="text" />
        </div>
        <div className='grid gap-2'>
          <label className='sm:text-xl' htmlFor="">Message:</label>
          <textarea  className='bg-zinc-900/80 outline-none py-2 px-2 rounded-lg' name="message"  cols="32" rows="10"></textarea>
        </div>
        
      </form>
    </div>
  )
}

export default Contact