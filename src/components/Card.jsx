export default function Card({ element }) {
  return (
    <div className='my-2 w-sm rounded-xl bg-gray-100 font-medium shadow-lg duration-300 hover:scale-110'>
      <h1 className='rounded-t-xl bg-violet-100/60 p-2 text-lg text-indigo-700 shadow text-shadow-xs'>
        {element.name}
      </h1>
      <div className='p-2'>
        <h2 className='mb-2 font-normal text-gray-800'>
          {element.description}
        </h2>
        <h2 className='text-gray-800'>
          Rischio: <span className='font-light'>{element.level}</span>{' '}
        </h2>
        <h3 className='text-gray-800'>
          Categoria:
          <span className='p-2 font-light'>{element.category.name}</span>
        </h3>
      </div>
    </div>
  )
}
