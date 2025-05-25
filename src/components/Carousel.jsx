import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import elements from '../../data/carouselData'

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const length = elements.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000)
    return () => clearInterval(timer)
  }, [current])

  if (!Array.isArray(elements) || length === 0) {
    return null
  }

  return (
    <section className='h-[70%] w-full'>
      <div className='relative mx-auto h-full w-full overflow-hidden rounded-b-2xl shadow-lg'>
        <AnimatePresence initial={false} exitBeforeEnter>
          {elements.map(
            (item, index) =>
              index === current && (
                <motion.div
                  key={item.id}
                  className='absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center bg-gray-100 text-center'
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={item.image}
                    alt={item.nome}
                    className='h-full w-full object-cover'
                  />
                  <div className='absolute bottom-10 left-50 h-[40%] rounded-xl bg-gradient-to-r from-indigo-700/70 to-violet-700/70 p-4'>
                    <h3 className='mt-2 text-2xl font-semibold text-white'>
                      {item.title}
                    </h3>
                    <p className='text-white/90'>{item.description}</p>
                    <div className='p-8 text-white/90'>
                      <ul className='list-disc'>
                        {item.features.map(feat => {
                          return <li className='text-left'>{feat}</li>
                        })}
                      </ul>
                      <button className='cursor-pointer pt-2'>
                        {item.cta}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className='bg-opacity-75 hover:bg-opacity-100 absolute top-1/2 left-4 -translate-y-1/2 transform cursor-pointer rounded-full bg-white p-2'
        >
          <ChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className='bg-opacity-75 hover:bg-opacity-100 absolute top-1/2 right-4 -translate-y-1/2 transform cursor-pointer rounded-full bg-white p-2'
        >
          <ChevronRight />
        </button>

        <div className='absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2'>
          {elements.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full ${index === current ? 'bg-white' : 'bg-opacity-75 bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
