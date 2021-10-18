import Link from "next/link"
import { useRecoilValue } from "recoil"
import CartState from "../store/CartState"
import Image from "next/image"

function Question({modalCheckout, setModalCheckout}) {
  const cartState = useRecoilValue(CartState)
  let i = 0, priceQ = 0
  if(cartState.length > 0) {
    cartState?.map(item => {
      priceQ ? parseInt(item.price.split('. ').pop().replaceAll('.', '')) : 0
      i += ( (parseInt(item.price.split('. ').pop().replaceAll('.', '')) * item.count)  )
    })
    i = i.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.').split('.00')[0]
  }
  
  return (
    (cartState.length > 0) && (
    <div className={`fixed bottom-0 justify-items-center items-center flex w-full mb-12 mr-12`}>
      <div
        className={`${cartState.length > 0 ? 'visible' : 'invisible'} flex left-0 relative bg-black justify-between items-center my-0 py-5 mx-auto px-5 text-left rounded-xl w-full lg:w-1/3 cursor-pointer`} onClick={()=>{ setModalCheckout(true); document.body.style.overflow = "hidden"; }}
      >
        <div className="bg-white rounded-full w-16 h-16 bg-cover bg-center inline-block relative">
          <Image src={cartState[0].image} className="w-16 h-16 rounded-full bg-contain" width={64} height={64} layout="responsive" />
        </div>
        <div className="ml-6 text-white flex-grow">
          <h3 className="font-semibold text-2xl">My Order</h3>
          <p className="font-normal text-xl">Rp. {i}</p>
        </div>
        <div className="bg-gray-600 relative w-14 h-14 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <div className="bg-blue-500 text-white absolute right-0 top-0 rounded-full flex w-8 h-8 items-center justify-center lg:-mr-2 lg:-mt-2">
            {cartState.length}
          </div>
        </div>
      </div>
      <Link href="https://api.whatsapp.com/send/?phone=6281288748757&text=Saya+ingin+berkonsultasi+sebelum+membeli+Pakaian">
        <a target="_blank"  className="right-0 mr-6 absolute">
      <div className=" text-white right-0 bg-whatsapp rounded-full w-16 h-16 flex items-center justify-center hover:shadow-lg transition-all duration-300 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      </div></a></Link>
    </div>
    )
  )
}

export default Question
