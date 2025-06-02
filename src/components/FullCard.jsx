import { Link } from 'react-router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons'
export default function FullCard({ item }) {
  const arrowGO = <FontAwesomeIcon icon={faSquareUpRight} />

  return (
    <div className='border-base-300 collapse mt-4 border bg-gray-100/60 text-black'>
      <input type='checkbox' />
      <div className='collapse-title flex justify-between font-semibold'>
        <h1>{item.name}</h1>
        <h2 className='text-sm'>{item.description}</h2>
      </div>
      <div className='collapse-content grid grid-cols-4 gap-6 align-bottom text-sm'>
        <h1 className='col-span-3'>
          {item.fullDescription}{' '}
          <Link className='text-violet-700' to={`details/${item.slug}`}>
            {' '}
            {arrowGO}{' '}
          </Link>
        </h1>

        <div className='flex flex-col justify-between'>
          <Link to={'http://localhost:8080/api/documents/download'}>
            <h1 className='text-center font-bold text-blue-600/70'>
              Scarica l'informativa
            </h1>
          </Link>
          <div className='flex items-end justify-center text-center'>
            <div
              className='tooltip rounded-2xl bg-indigo-700/70 px-2 py-1 text-white'
              data-tip={item.category.description}
            >
              {item.category.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
