import Carousel from '../components/Carousel'
import Hero from '../components/Hero'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import axios from '../../api/axios'
import { Link } from 'react-router'
import FaqSection from '../components/FaqSection'
export default function HomePage() {
  const [elements, setElements] = useState([])
  const fetchElements = () => {
    axios.get('api/concepts').then(res => {
      setElements(limitElements(res.data))
    })
  }
  const limitElements = arr => {
    const newElements = [3]
    for (let i = 0; i < 3; i++) {
      newElements[i] = arr[i]
    }
    return newElements
  }
  useEffect(() => {
    fetchElements()
  }, [])
  return (
    <>
      <div className='mx-auto'>
        <div className='h-screen'>
          <Carousel></Carousel>
          <div className='mx-auto max-w-6xl text-indigo-700 italic'>
            <h1 className='pt-6 text-left text-6xl font-semibold text-shadow-md'>
              Progetta il tuo domani...
            </h1>
            <h1 className='pt-6 pr-12 text-right text-6xl font-semibold text-shadow-md'>
              ...con noi
            </h1>
          </div>
        </div>
        {/* card section */}
        <div className='h-screen bg-red-100'>
          <div className='relative mx-auto max-w-5xl'>
            <Hero></Hero>
            {/* cards */}
            <div className='grid grid-cols-3 grid-rows-6'>
              {elements.map((element, index) => (
                <div
                  key={element.id}
                  className={
                    index % 2 === 0
                      ? 'col-span-2 col-start-1 row-span-2'
                      : 'col-start-2 row-span-2'
                  }
                >
                  <Card element={element} key={element.id}></Card>
                </div>
              ))}
              <div className='col-start-3 row-start-2 text-right text-slate-900'>
                <h1 className=''>QR</h1>
              </div>
            </div>
            <Link>
              <h1 className='shadow-3xl absolute -bottom-5 left-[50%] -translate-x-1/2 rounded-lg bg-blue-600/70 px-2 py-1'>
                Scopri di più
              </h1>
            </Link>
          </div>
        </div>
        <FaqSection></FaqSection>
      </div>
    </>
  )
}
