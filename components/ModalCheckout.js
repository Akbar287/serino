import Button from './Button'
import Image from 'next/image'
import Address from './Address'
import CartState from "../store/CartState"
import bca from "../public/assets/bca.png"
import { useState, useEffect } from "react"
import PaymentState from "../store/PaymentState"
import AddressState from '../store/AddressState'
import sicepat from "../public/assets/sicepat.png"
import mandiri from "../public/assets/mandiri.png"
import { useRecoilValue, useRecoilState } from 'recoil'
import { useRouter } from 'next/router'

function ModalCheckout({ modalCheckout, setModalCheckout}) {
  const [cart, setCart] = useRecoilState(CartState)
  const addressState = useRecoilValue(AddressState)
  const [paymentState, setPaymentState] = useRecoilState(PaymentState)
  const router = useRouter()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [method, setMethod] = useState(0)
  const [address,setAddress] = useState('')
  const [orderStep, setOrderStep] = useState(0)
  const [fullAdress, setFullAddress] = useState('')
  const [paymentMethod, setPaymentMethod] = useState(0)
  const [showAddress, setShowAddress] = useState(false)
  const date = new Date()
  const created_at = (date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear())

  const setPaymentStateFunction = async (param) => {
    if(cart.length > 0) await setPaymentState((oldState) => [
      ...oldState,
      {
        no_order: '0212'+Math.floor(Math.random()*10),
        name,
        phone,
        address,
        fullAdress,
        status: 1,
        paymentMethod,
        method,
        total_price: i,
        cart,
        created_at
      }
    ])
    await setCart([])
    await localStorage.setItem('data_serino', JSON.stringify(paymentState))
    document.body.style.overflow = "";
    if(param) router.push('/order')
  }

  let i = 0, priceQ = 0
  if(cart.length > 0) {
    cart?.map(item => {
      priceQ ? parseInt(item.price.split('. ').pop().replaceAll('.', '')) : 0
      i += ( (parseInt(item.price.split('. ').pop().replaceAll('.', '')) * item.count)  )
    })
    i = i.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.').split('.00')[0]
  }

  useEffect(() => {
    const fetchDataAddress = () => {
      if(addressState.length > 0)
        setAddress(`${addressState[0].kota.nama}, ${addressState[0].kecamatan.nama}`)
    }
    fetchDataAddress()
  }, [addressState])

  return (
    <div className={`${modalCheckout ? 'block': 'hidden'} transition-all duration-300 flex backdrop-filter backdrop-brightness-75 fixed top-0 h-full w-full items-center justify-center z-40`}>
      <Address showAddress={showAddress} setShowAddress={setShowAddress} />
      <div className="h-auto w-1/3 rounded-xl bg-white">
        <div className="py-4 px-8 flex items-center border-b border-gray-200">
          {
            orderStep == 0 ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            ) : (
              <div className="cursor-pointer" onClick={() => setOrderStep(orderStep - 1)}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg></div>
            )
          }
          <div className="text-2xl font-semibold pl-4">
            {
              orderStep == 0 ? 'My Order' : orderStep == 1 ? 'Shipping Information' : orderStep == 2 ? 'Shipping Method' : 'Payment Method'
            }
          </div>
        </div>
        <div className={`${orderStep == 0 ? 'block' : 'hidden'} py-4 text-xl font-normal px-8 border-b border-gray-400`}>
          {
            cart.map(item => {
              return (
                <div className="flex items-center justify-around" key={item.id}>
                  <div className="rounded-lg w-20 h-20 bg-contain">
                    <Image src={item.image} alt={`product-${item.id}`} width={85} height={85} layout="responsive" className="rounded-lg w-20 h-20 bg-contain" />
                  </div>
                  <div className="ml-6 text-gray-600 flex-grow">
                    <h3 className="font-semibold text-2xl">{item?.name}</h3>
                    <p className="font-normal text-xl">{item?.size}</p>
                    <p className="font-normal text-xl">{item?.price}</p>
                  </div>
                  <div className="">{item?.count}</div>
                </div>
              )
            })
          }
        </div>
        <div className={`${orderStep == 1 ? 'block' : 'hidden'} py-4 text-xl font-normal px-8 border-b border-gray-400`}>
          <div className="items-center mb-6">
            <input type="text" placeholder="Recipient’s Name" className="w-full h-16 px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-300 rounded-xl focus:shadow-lg text-gray-800 transition-all duration-300" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="items-center mb-6">
            <input type="text" placeholder="Recipient's Mobile Number" className="w-full h-16 px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-300 rounded-xl focus:shadow-lg text-gray-800 transition-all duration-300" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="items-center flex mb-6 relative">
            <input type="text" placeholder="Recipient Address" className="w-full h-16 px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-300 rounded-xl focus:shadow-lg text-gray-800 transition-all duration-300" value={address} onChange={(e)=> setAddress(e.target.value)} />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 cursor-pointer absolute mt-4 mr-3 top-0 right-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setShowAddress(true)}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="items-center mb-6">
            <input type="text" placeholder="Full Address of Recipient" className="w-full h-16 px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-300 rounded-xl focus:shadow-lg text-gray-800 transition-all duration-300" value={fullAdress} onChange={(e) => setFullAddress(e.target.value)} />
          </div>
        </div>
        <div className={`${orderStep == 2 ? 'block' : 'hidden'} py-4 text-xl font-normal px-8 `}>
          <div className="flex items-center justify-between py-6">
            <div className="text-2xl font-normal">Total package weight:</div>
            <div className="text-2xl font-semibold">250g</div>
          </div>
          <div className="py-6 border-b border-gray-300 cursor-pointer" onClick={() => setMethod(1)}>
            <div className="flex items-center justify-start ">
              <div className={`${method == 1 ? 'border-blue-500' : 'border-gray-500'} border rounded-full w-6 h-6 bg-transparent`}>
                {
                  method == 1 ?
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg> : ''
                }
              </div>
              <div className="relative w-14 h-14 mx-7">
                <Image src={sicepat} alt={`kurir`} width={57} height={57} layout="responsive" />
              </div>
              <div className="">
                <div className="text-xl text-black">Rp. 10.000</div>
                <div className="text-xl text-gray-300">(REG) 1-4 days</div>
              </div>
            </div>
            {
              method == 1 ? 
              <Button.primary className={`w-full my-3 py-8 items-center flex justify-center text-xl font-normal bg-main-color text-white transition-all duration-300`} onClick={() => setOrderStep(orderStep + 1)}>Choose This method</Button.primary>
              : ''
            }
          </div>
          <div className="py-6 border-b border-gray-300 cursor-pointer" onClick={() => setMethod(2)}>
            <div className="flex items-center justify-start ">
              <div className={`${method == 2 ? 'border-blue-500' : 'border-gray-500'} border rounded-full w-6 h-6 bg-transparent`}>
                {
                  method == 2 ?
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg> : ''
                }
              </div>
              <div className="relative w-14 h-14 mx-7">
                <Image src={sicepat} alt={`kurir`} width={57} height={57} layout="responsive" />
              </div>
              <div className="">
                <div className="text-xl text-black">Rp. 13.000</div>
                <div className="text-xl text-gray-300">(REG) 1-2 days</div>
              </div>
            </div>
            {
              method == 2 ? 
              <Button.primary className={`w-full my-3 py-8 items-center flex justify-center text-xl font-normal bg-main-color text-white transition-all duration-300`} onClick={() => setOrderStep(orderStep + 1)}>Choose This method</Button.primary>
              : ''
            }
          </div>
        </div>
        <div className={`${orderStep == 3 ? 'block' : 'hidden'} py-4 text-xl font-normal px-8`}>
          <div className="flex items-center justify-between py-6">
            <div className="text-xl font-normal">Total Order Price:</div>
            <div className="text-xl font-semibold">Rp. {i}</div>
          </div>
          <div className={`rounded-xl border flex items-center justify-around ${paymentMethod == 1 ? 'border-blue-300 shadow' : 'border-gray-300'} cursor-pointer p-3`} onClick={() => {setPaymentMethod(1); setPaymentStateFunction(); }}>
            <div className="relative w-14 h-14">
              <Image src={bca} alt={`bca`} width={57} height={57} layout="responsive" />
            </div>
            <div className="">
              <div className="text-xl text-black">BCA (Automatic confirmation)</div>
              <div className="text-xl text-gray-400">VA ● Only accept from BCA</div>
            </div>
          </div>
          {
            paymentMethod == 1 ? 
            <Button.primary className={`w-full my-3 py-8 items-center flex justify-center text-xl font-normal bg-main-color text-white transition-all duration-300`} onClick={() => setPaymentStateFunction(1)}>Choose This method</Button.primary>
            : ''
          } 
          <div className={`rounded-xl mt-6 border flex items-center justify-around ${paymentMethod == 2 ? 'border-blue-300 shadow' : 'border-gray-300'} cursor-pointer p-3`} onClick={() => {setPaymentMethod(2); setPaymentStateFunction(); }}>
            <div className="relative w-14 h-14">
              <Image src={mandiri} alt={`mandiri`} width={57} height={57} layout="responsive" />
            </div>
            <div className="">
              <div className="text-xl text-black">Mandiri (Automatic confirmation)</div>
              <div className="text-xl text-gray-400">VA ● Only accept from Mandiri</div>
            </div>
          </div>
          {
            paymentMethod == 2 ? 
            <Button.primary className={`w-full my-3 py-8 items-center flex justify-center text-xl font-normal bg-main-color text-white transition-all duration-300`} onClick={() => setPaymentStateFunction(2)}>Choose This method</Button.primary>
            : ''
          } 
        </div>
        <div className={`${orderStep == 0 ? 'block' : 'hidden'} py-4 px-8 text-xl font-normal flex justify-between items-center`}>
          <div>Total Product Price ({cart.length} item)</div>
          <div>Rp. {i}</div>
        </div>
        <div className="py-4 px-8">
          <Button.primary className={`${orderStep == 0 ? 'block' : 'hidden'} w-full my-3 py-8 items-center flex justify-center text-xl font-normal bg-white border-blue-200 border  transition-all duration-300`} onClick={() => {setModalCheckout(false); document.body.style.overflow = "";}}>Continue Shopping</Button.primary>
          <div className={`${orderStep == 1 ? 'block' : 'hidden'} text-lg font-normal`}>I have read and agree to the Terms & Conditions</div>
          <Button.primary className={`${orderStep == 2 ? 'hidden' : orderStep == 3 ? 'hidden' : 'block'} w-full my-3 py-8 items-center flex justify-center text-xl font-normal ${orderStep == 1 ? (name && phone && address && fullAdress) ? 'bg-main-color text-white' : 'bg-gray-500 text-gray-100 cursor-default' : 'bg-main-color text-white'} transition-all duration-300`} onClick={() => { orderStep == 1 ? (name && phone && address && fullAdress) ? setOrderStep(orderStep + 1) : null : setOrderStep(orderStep + 1)}}>{orderStep == 0 ? 'Order Now' : 'Agree & Continue'}</Button.primary>
        </div>
      </div>
    </div>
  )
}

export default ModalCheckout
