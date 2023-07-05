import React from 'react'
import RevealCards from './RevealCards'

const Experience = () => {

  const cards = [
    {
      number:'01',
      text:'Front End developer',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae modi omnis amet quia similique! Dolorem, quod.'
    },
    {
      number:'02',
      text:'Front End developer',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae modi omnis amet quia similique! Dolorem, quod.'
    },
    {
      number:'03',
      text:'Front End developer',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae modi omnis amet quia similique! Dolorem, quod.'
    }
  ]

  return (
    <section className='py-24 px-4 sm:px-14 max-w-[1440px] mx-auto'>
        <p className='text-zinc-600'>WORK EXPERIENCE</p>
        <h2 className=' text-white text-3xl pt-16 font-semibold text-center sm:text-start sm:max-w-[60%] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
        <div className='pt-16 flex flex-col items-center sm:flex-row justify-between gap-10 text-center sm:text-start '>

          {
            cards.map((card,i)=>(
              <RevealCards index={i} key={i}>
                <article>
                  <span className='text-9xl text-zinc-600 font-light'>{card.number}</span>
                  <p className='pt-4 text-white text-2xl'>{card.text}</p>
                  <p className='pt-4'>{card.description}</p>
                </article>
              </RevealCards>
            ))
          }
          
         
          
        </div>
      </section>
  )
}

export default Experience