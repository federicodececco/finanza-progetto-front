import axios from '../../api/axios'
import { useState, useEffect } from 'react'
import FullCard from '../components/FullCard'
export default function AllConcepts() {
  const [concepts, setConcepts] = useState([])

  const fetchConceptsAll = () => {
    axios.get('/api/concepts').then(res => {
      setConcepts(res.data)
    })
  }

  useEffect(() => {
    fetchConceptsAll()
  }, [])
  return (
    <>
      <div className='mt-30'>
        <div className='container mx-auto mb-18 text-center text-5xl font-semibold text-indigo-700 italic text-shadow-md'>
          <h1>Le Nostre Soluzioni</h1>
        </div>
        <div className='container mx-auto'>
          {concepts.map(item => {
            return <FullCard item={item} key={item.id} />
          })}
        </div>
      </div>
    </>
  )
}
