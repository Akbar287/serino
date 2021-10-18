import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from './Button'

function Navbar(props) {
  const router = useRouter()
  return (
    <div className={`${props.className ?? props.className} hover:bg-white transition-all duration-500 flex w-full items-center justify-center bg-transparent z-30`} id={`${router.pathname == '/order' ? '' : 'parent'}`}>
      <div className="flex flex-row lg:container items-center justify-center py-6 lg:py-10 2xl:py-16">
        <Link href="/her"><a className={`${router.pathname == '/her' ? 'text-active' : 'text-secondary'} hidden-child block px-4 py-2 lg:py-5 hover:text-primary hover:underline transition-all duration-300 font-20 font-semibold`}>For Her</a></Link>
        <Link href="/" exact className="order-first"><a className="flex flex-row font-bold text-xl"><div className={` hover:text-gray-600 px-4 py-2 lg:py-5 text-2xl logo`}>Serino</div></a></Link>
        <Link href="/him" exact className="order-last"><a className={`${router.pathname == '/him' ? 'text-active' : 'text-secondary'} block px-4 py-2 lg:py-5 hidden-child transition-all duration-300 hover:underline hover:text-primary font-20 font-semibold`}>For Him</a></Link>
          <Button.main onClick={() => router.push('/order')} className={`${router.pathname == '/order' ? 'lg:bg-black lg:text-white hover:text-black hover:bg-white' : 'lg:bg-transparent lg:text-black hover:bg-black hover:text-white'} transition-all duration-300 hidden-child absolute right-2 lg:right-32 lg:px-12 lg:py-4 lg:flex rounded-full lg:border-2 lg:border-black `}>
          <div className="hidden lg:flex lg:relative">
            My Order
          </div>
          <div className="relative flex lg:hidden">
            {
              router.pathname == '/order' ?
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg> :
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
          </div>
          </Button.main>
        
      </div>
    </div>
  )
}

export default Navbar
