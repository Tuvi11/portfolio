import React, { useState } from 'react'

export const About = () => {
    const [showMore , setShowMore] = useState(false);
    const handleToggle = () =>{
        setShowMore(prev => !prev);
    }
  return (
    <section id='about' className='min-h-screen overflow-hidden flex items-cnter justify-center text-white px-4 sm:px-6'>
        <div className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center'>
            <figure data-aos='fade-right' data-aos-delay='500'
            className='flex flex-wrap justify-center gap-4 relative'>
                <div className='h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-1
                from-[#6d2897] via-[#6c95f5] to-[#bb61c5] absolute transform rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full'></div>
                <img src="/assets/about.png" alt="about image" 
                className='relative  z-10 w-56 h-64 sm:w-72 sm:h-80 md:w-96 md:h-[28rem] rounded-lg shadow-lg
                '/>
            </figure>

            <article
            data-aos='fade-left' data-aos-delay='500' 
            className='text-center lg:text-left relative'>
                <div className='absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-70
                -top-5 left-10'></div>
                <header>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
                        About Me
                    </h1>
                </header>
                <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-4 leading-relaxed'>
            Hey! I’m Soujanya Maharudra, a CSE undergrad exploring full-stack development and DSA (with occasional wins and frequent Google searches).

          </p>

        
          {showMore && (
            <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-6 leading-relaxed'>
             I build full stack projects using React, Node.js, and MongoDB — and somehow they work (most of the time).
                <br></br>
             Currently trying to make peace with DSA.<br></br>
             I enjoy learning new things, breaking my own code, and googling errors like it’s a reflex.<br></br>
            Lately been drawn to anything that involves patterns,math,stat, logic, or way too many charts. — numbers make more sense than my code sometimes.
             Still figuring it all out, but at least the GitHub graph looks busy.
            </p>
          )}
                <footer>
                    <button 
                    onClick={handleToggle} className='inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none
                    hover:bg-[#801b9c] hover:shadow-[#0_0_40px_rgba(128,0,128,0.7)] rounded-full text sm:text-lg'>{showMore ? 'Hide Chaos' : 'Curious'}</button>
                </footer>

            </article>
        </div>
    </section>
  )
}
export default About;
