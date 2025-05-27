export default function FullCard({ item }) {
  return (
    <div className='border-base-300 collapse mt-4 border bg-gray-100/60 text-black'>
      <input type='checkbox' />
      <div className='collapse-title flex justify-between font-semibold'>
        <h1>{item.name}</h1>
        <h2 className='text-sm'>{item.description}</h2>
      </div>
      <div className='collapse-content grid grid-cols-4 gap-6 align-bottom text-sm'>
        <h1 className='col-span-3'>{item.fullDescription}</h1>
        <div className='flex items-end'>
          <div className='rounded-2xl bg-indigo-700/70 px-2 py-1 text-white'>
            {item.category.name}
          </div>
        </div>
      </div>
    </div>
  )
}
