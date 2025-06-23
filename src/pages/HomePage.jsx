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

  const myVar = process.env.REACT_APP_MY_VAR
  console.log('My Env Var:', myVar)
  useEffect(() => {
    fetchElements()
  }, [])
  return (
    <>
      <div className='mx-auto'>
        <div className='h-screen'>
          <Carousel className='z-0'></Carousel>
          <div className='mx-auto max-w-6xl text-indigo-700 italic'>
            <h1 className='pt-6 text-center text-4xl font-semibold text-shadow-md lg:text-left lg:text-6xl'>
              Progetta il tuo domani...
            </h1>
            <h1 className='pt-6 pr-12 text-center text-4xl font-semibold text-shadow-md lg:text-right lg:text-6xl'>
              ...con noi
            </h1>
          </div>
        </div>
        {/* card section */}
        <div className='lg:h-screen'>
          <div className='relative mx-auto max-w-5xl'>
            <Hero></Hero>
            {/* cards */}
            <div className='grid-cols-3 lg:grid'>
              {elements.map((element, index) => (
                <div
                  key={element.id}
                  className={`py-4 lg:py-0 col-start-${1 + index} col-span-3`}
                >
                  <Card element={element} key={element.id}></Card>
                </div>
              ))}
            </div>
            <Link to='/products'>
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
{
  /* <div
                  key={element.id}
                  className={
                    index % 2 === 0
                      ? 'col-span-2 col-start-1 row-span-2'
                      : 'col-start-2 row-span-2'
                  }
                >
                  <Card element={element} key={element.id}></Card>
                </div> */
}
