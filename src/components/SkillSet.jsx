import React from 'react'
import RevealCards from './RevealCards'

const SkillSet = () => {

  const cards = [
    {
      img: '/images/scramble.svg',
      title:'Framework',
      text1:'react',
      text2:'tailwind',
      text3:'next',
    },
    {
      img: '/images/scramble.svg',
      title:'Framework',
      text1:'react',
      text2:'tailwind',
      text3:'next',
    },
    {
      img: '/images/scramble.svg',
      title:'Framework',
      text1:'react',
      text2:'tailwind',
      text3:'next',
    },
    {
      img: '/images/scramble.svg',
      title:'Framework',
      text1:'react',
      text2:'tailwind',
      text3:'next',
    },
  ]

  return (
    <section className='py-16 px-4 sm:grid sm:grid-cols-[2fr,_4fr] gap-16 max-w-[1440px] mx-auto'>
        <RevealCards>
          <article className='px-8' >
            <h3 className='text-3xl font-semibold pb-8'>Skill Set</h3>
            <p className='pb-8 text-zinc-600'>With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.</p>
          </article>
        </RevealCards>

        <section className=' text-center sm:grid sm:grid-cols-2 sm:gap-4 sm:text-start '>

          {
            cards.map((card,i)=>(
              <RevealCards index={i+1} key={i}>
                <article className='pb-8 text-zinc-600'>
                  <div className='flex justify-center sm:justify-start h-14'>
                    <img  src={card.img} alt="" />
                  </div>
                  <h4 className='text-2xl font-semibold py-4 text-white'>{card.title}</h4>
                  <p>{card.text1}</p>
                  <p>{card.text2}</p>
                  <p>{card.text3}</p>
                  
                </article>
              </RevealCards>
            ))
          }

          
          
        </section>
      </section>
  )
}

export default SkillSet