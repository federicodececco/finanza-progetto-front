export default function Card({ element }) {
  console.log(element)

  return (
    <div className='my-2 w-sm rounded-xl bg-red-900 bg-white font-medium shadow-lg'>
      <h1 className='rounded-t-xl bg-violet-100/60 p-4 text-xl text-indigo-700 shadow'>
        {element.name}
      </h1>
      <div className='p-4'>
        <h2 className='mb-2 text-gray-800'>{element.description}</h2>
        <h2 className='text-gray-800'>
          Rischio: <span className='font-normal'>{element.level}</span>{' '}
        </h2>
        <h3>
          Categoria:
          <span className='p-2 font-normal'>{element.category.name}</span>
        </h3>
      </div>
    </div>
  )
}
