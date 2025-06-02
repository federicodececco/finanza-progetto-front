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
    <div className='3xl:h-screen mt-30 xl:h-130'>
      <div className='container mx-auto rounded-lg border-2 border-indigo-700 bg-gray-200 px-8 py-3 text-black'>
        <div>
          <h1 className='text-5xl font-medium text-indigo-700 text-shadow-lg'>
            {concept.name}
          </h1>
          <h2 className='pt-1 italic'>{concept.description}</h2>
        </div>
        <div className='grid grid-cols-5 gap-2'>
          <h1 className='borde564r-1 col-span-2 mt-4 rounded-lg border-indigo-700/70 bg-gradient-to-r from-violet-700/70 to-indigo-700/70 p-2 text-lg text-white'>
            {concept.fullDescription}
          </h1>
          <div className='col-span-2 col-start-4'>
            <Link to={'http://localhost:8080/api/documents/download'}>
              <h1 className='text-lg text-violet-700'>Scarica il prospetto</h1>
            </Link>
            <div>
              <img className='max-h-40' src='/img/dati.svg' alt='' />
            </div>
          </div>
          <div className='col-start-3 pt-18'>
            {' '}
            Livello di rischio: {concept.level}
          </div>
        </div>
      </div>
    </div>
  )
}
