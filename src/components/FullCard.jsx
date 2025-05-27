export default function FullCard({ item }) {
  return (
    <div className='bg-base-100 border-base-300 collapse border'>
      <input type='radio' name='my-accordion-1' />
      <div className='collapse-title font-semibold'>{item.name}</div>
      <div className='collapse-content text-sm'>{item.fullDescription}</div>
    </div>
  )
}
