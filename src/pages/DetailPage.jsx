import { useParams } from 'react-router'
import axios from '../../api/axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
export default function DetailPage() {
  const [concept, SetConcept] = useState({})
  const { slug } = useParams()
  const getConcept = slug =>
    axios.get(`/api/concepts/search/${slug}`).then(res => {
      SetConcept(res.data)
    })

  useEffect(() => {
    getConcept(slug)
  }, [])
  return (
    <div className='3xl:h-screen mt-18 px-2 lg:mt-30 lg:px-0 xl:h-130'>
      <div className='container mx-auto rounded-lg border-2 border-indigo-700 bg-gray-200 px-8 py-3 text-black'>
        <div>
          <h1 className='text-3xl font-medium text-indigo-700 text-shadow-lg lg:text-5xl'>
            {concept.name}
          </h1>
          <h2 className='hidden pt-1 italic lg:block'>{concept.description}</h2>
        </div>
        <div className='grid grid-cols-5 gap-2'>
          <h1 className='col-span-5 mt-4 rounded-lg border-1 border-indigo-700/70 bg-gradient-to-r from-violet-700/70 to-indigo-700/70 p-3 text-lg text-white lg:col-span-2'>
            {concept.fullDescription}
          </h1>
          <div className='col-span-5 grid grid-cols-3 lg:col-span-2 lg:col-start-4 lg:block'>
            <div className='col-span-1'>
              <img className='max-h-50' src='/img/logo.png' alt='' />
            </div>
            <Link
              to={'{import.meta.env.VITE_BE_URL}/api/documents/download'}
              className='col-start-3 pt-6 lg:pt-0'
            >
              <h1 className='text-lg text-violet-700'>Scarica il prospetto</h1>
            </Link>
          </div>
          <div className='col-span-5 col-start-2 pt-18 lg:col-start-3'>
            {' '}
            Livello di rischio: {concept.level}
          </div>
        </div>
      </div>
    </div>
  )
}
