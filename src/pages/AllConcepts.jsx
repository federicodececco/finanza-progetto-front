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
      <div className='mt-18'>
        <h1>Le Nostre Soluzioni</h1>
        <div className='mx-auto max-w-5xl'>
          {concepts.map(item => {
            return <FullCard item={item} key={item.id} />
          })}
        </div>
      </div>
    </>
  )
}
