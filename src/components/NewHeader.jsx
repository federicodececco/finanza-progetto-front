import { useState, useEffect } from 'react'
import { Link } from 'react-router'
export default function NewHeader() {
  const [show, setShow] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    const currentScrollY = window.scrollY
    if (currentScrollY < lastScrollY) {
      // hide navbar
      setShow(false)
    } else {
      // show navbar
      setShow(true)
    }
    if (currentScrollY <= 100) {
      setShow(false)
    }
    // store last scroll
    setLastScrollY(currentScrollY)
  }
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)

    // cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  return (
    <div
      className={`navbar active fixed top-0 z-100 bg-gradient-to-r from-indigo-700 to-violet-700 shadow-sm ${show && 'hidden'}`}
    >
      <div className='navbar-start'>
        <div className='dropdown'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost hover:bg-indigo-700 lg:hidden'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 bg-gradient-to-r from-indigo-700 to-violet-700 p-2 shadow'
          >
            <li>
              <a>Chi siamo</a>
            </li>
            <li>
              <a>Soluzioni</a>
              <ul className='p-2'>
                <li>
                  <Link to='/products'>Prodotti</Link>
                </li>
                <li>
                  <Link>Categorie</Link>
                </li>
              </ul>
            </li>
            <li>
              <a>Contattaci</a>
            </li>
          </ul>
        </div>
        <a className='btn btn-ghost text-xl hover:bg-violet-700' href='/'>
          GENERICAL FINTECH
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a>Chi siamo</a>
          </li>
          <li>
            <details>
              <summary>Soluzioni</summary>
              <ul className='bg-gradient-to-r from-indigo-700 to-violet-700 p-2'>
                <li>
                  <Link to='/products'>Prodotti</Link>
                </li>

                <li>
                  <Link>Categorie</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Contattaci</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <a
          className='btn bg-violet-700 text-white hover:bg-blue-600/50'
          href={`${import.meta.env.VITE_BE_URL}/login`}
        >
          Log In
        </a>
      </div>
    </div>
  )
}
