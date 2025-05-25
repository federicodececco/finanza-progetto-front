import Carousel from '../components/Carousel'
import Hero from '../components/Hero'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import axios from '../../api/axios'

export default function HomePage() {
  const [elements, setElements] = useState([])
  const fetchElements = () => {
    axios.get('api/concepts').then(res => {
      setElements(res.data)
    })
  }
  console.log(elements)
  useEffect(() => {
    fetchElements()
  }, [])
  return (
    <>
      <div className='mx-auto h-full max-h-30'>
        <Carousel></Carousel>
        <div className='bg-indigo-100'>
          <div className='mx-auto max-w-5xl'>
            <Hero></Hero>
            <div className='grid grid-cols-2 gap-4'>
              {elements.map((element, index) => (
                <div
                  className={
                    index % 2 === 0 ? 'col-span-2 col-start-1' : 'col-start-2'
                  }
                >
                  <Card element={element} key={element.id}></Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
