import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NewHeader from '../components/NewHeader'
export default function DefaultLayout() {
  return (
    <div className='relative flex flex-col bg-indigo-100'>
      <NewHeader></NewHeader>
      <main className='flex-1'>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  )
}
