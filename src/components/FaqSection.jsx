import axios from '../../api/axios'
import { useEffect, useState } from 'react'

export default function FaqSection() {
  const [faq, setFaq] = useState([])
  const fetchFaq = () => {
    axios.get('/api/faq').then(res => {
      setFaq(res.data)
    })
  }
  useEffect(() => fetchFaq(), [])
  return (
    <section className='mt-4 p-10 lg:h-screen'>
      <h1 className='pt-5 pb-26 text-8xl font-bold text-indigo-700 text-shadow-lg'>
        FAQ
      </h1>
      <div className='grid grid-cols-5'>
        <div className='col-span-4'>
          {faq.map(faqInner => {
            return (
              <div className='collapse max-w-5xl border border-gray-300 bg-gray-100'>
                <input type='radio' name='my-accordion-1' defaultChecked />
                <div className='collapse-title font-semibold text-indigo-700'>
                  {faqInner.question}
                </div>
                <div className='collapse-content text-sm text-gray-800'>
                  {faqInner.answers.map(answer => {
                    return <p> {answer.content}</p>
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className='col-span-1 hidden max-w-60 lg:block'>
          <img src='/img/qr.svg' alt='' />
        </div>
      </div>
    </section>
  )
}
