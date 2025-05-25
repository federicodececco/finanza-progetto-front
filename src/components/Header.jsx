import { Link } from 'react-router'

export default function Header() {
  return (
    <header>
      {/* navbar */}

      <nav className='bg-gradient-to-r from-indigo-700 to-violet-700 shadow-lg md:p-4'>
        <div className='grid grid-cols-10'>
          <Link to='/' className='col-span-4 text-center text-4xl'>
            <div className='text-primary-light'>Generical Fintech</div>
          </Link>
          <Link
            to='/products'
            className='flex items-center text-center text-lg text-white transition hover:text-fuchsia-300'
          >
            <div>Prodotti</div>
          </Link>
          <Link className='flex items-center text-center text-lg text-white transition duration-300 hover:text-fuchsia-300'>
            <div>Cotattaci</div>
          </Link>
          <div className='flex items-center text-center text-lg text-white transition hover:text-fuchsia-300'>
            <p>Menu</p>
          </div>
          <Link className='flex items-center text-center text-lg text-white transition hover:text-fuchsia-300'>
            <div>Area Riservata</div>
          </Link>
        </div>
      </nav>
    </header>
  )
}
