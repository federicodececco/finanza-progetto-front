import { Link } from 'react-router'

export default function Header() {
  return (
    <header>
      {/* navbar */}

      <nav>
        <Link to='/'>
          <div>Home</div>
        </Link>
        <Link to='/products'>
          <div>Prodotti</div>
        </Link>
      </nav>
    </header>
  )
}
