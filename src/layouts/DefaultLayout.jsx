import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function DefaultLayout() {
  return (
    <div className='flex min-h-screen flex-col bg-indigo-100'>
      <Header></Header>
      <main className='flex-1'>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  )
}
