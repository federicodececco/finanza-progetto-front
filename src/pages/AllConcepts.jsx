import axios from '../../api/axios'
import { useState, useEffect } from 'react'

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
      <h1>Concetti</h1>
      <div>
        {concepts.map(concept => (
          <div key={concept.id}>{concept.name}</div>
        ))}
      </div>
    </>
  )
}
