import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import {getItem} from "../api/_api"
import Description from '../../components/Description'
import { useState } from 'react'
import Notification from '../../components/Notification'
import Button from '../../components/Button'
import { useRecoilState } from 'recoil'
import CartStates from '../../store/CartState'
import { motion } from 'framer-motion'

const Product =() => {
  const router = useRouter();
  const { id } = router.query;
  const item = (getItem(id)[0]);
  const [colorState, setColorState] = useState(null)
  const [sizeState, setSizeState] = useState(null)
  const [showNotification, setShowNotification] = useState(false)
  const [count, setCount] = useState(0)
  const [cartState, setCartState] = useRecoilState(CartStates)

  const removeItemAtIndex = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
  const addCart = (item, count, color, size, price, image, name) => {
    if(color == null || size == null || count == 0) return;
    let index = cartState.findIndex(data => (data.id == item))
    if(index != -1) {
      let newCart = removeItemAtIndex(cartState, index);
      setCartState(newCart)
    }
    setCartState((oldCart) => [
      ...oldCart,
      {
        id: item,
        name: name,
        count: count,
        color: size,
        size: color,
        price: price,
        image: image,
      },
    ]);
    setShowNotification(true)
    setSizeState(null)
    setColorState(null)
  };

  const animateRight = {
    initial: {
      y:-100,
      opacity: 0
    },
    visible: {
      y:0,
      opacity: 1,
      transition: {
        duration: 10,
        type: 'spring',
        stiffness: 300
      }
    }
  }

  const animatePicture ={
    initial: {
      opacity: 0,
      x: -100
    },
    visible: {
      opacity: 1,
      x:0,
      transition: {
        duration: 2,
      }
    }
  }

  return (
    <Layout title={item?.name}>
      <Notification showNotification={showNotification} setShowNotification={setShowNotification} status="success" message={`${item?.name} order has been added to the cart. Please complete the order within 24 Hours !`} setCount={setCount} />
      <div className="w-full flex flex-col lg:flex-row">
        <motion.div variants={animatePicture} initial="initial" animate="visible" className="w-full lg:w-1/2 order-last lg:order-none block">
          <p className="text-center text-base font-semibold block lg:hidden">Foto</p>
          {
            item?.images?.map(image=>{
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={image?.imageUrl} alt={image?.name} className="w-full px-10 py-4 lg:px-0 lg:py-0" key={image.id} />
              )
            })
          }
        </motion.div>
        <motion.div variants={animateRight} initial="initial" animate="visible" className="w-full lg:w-1/2 right-0 pt-24 px-10 pb-6 lg:pt-80 lg:px-32 sticky">
          <div className="text-black mb-20">
            <h1 className="font-semibold font-35 mb-18">{item?.name}</h1>
            <p className="font-normal text-xl">{item?.price}</p>
          </div>
          <div className="">
            <div className="flex flex-row items-center justify-between border-b-1">
              <p className="text-xl font-normal capitalize pb-2">{colorState ? colorState : 'Color'}</p>
              <div className="flex flex-row">
                {
                  item?.colors?.map(color => {
                    return(<div className={`${colorState == color?.color ? 'border-1' : ''} bg-transparent rounded-full flex items-center justify-center w-8 h-8 ml-8 cursor-pointer`} key={color?.id}>
                      <div onClick={() => setColorState(color?.color)} className={`color-${color?.color} rounded-full w-4 h-4`}></div>
                    </div>)
                  })
                }
              </div>
            </div>
            <div className="flex flex-row items-center justify-between border-b-1 mt-16">
              <p className="text-xl font-normal pb-2">Size</p>
              <div className="flex flex-row">
                {
                  item?.sizes?.map(size => {
                    return(<div key={size?.id} className="flex ml-8">
                      <p onClick={() => setSizeState(size?.symbol)} className={`${sizeState == size?.symbol ? 'underline text-black' : 'text-secondary'} font-semibold cursor-pointer text-xl`}>{size?.symbol}</p>
                    </div>)
                  })
                }
              </div>
            </div>
            <div className=" mt-16">
              <p className="text-xl font-normal">Details</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between mt-16">
              <div className=" relative rounded-md shadow-sm w-48 py-4 flex items-center">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <div className="w-8 h-8 cursor-pointer text-black flex items-center" onClick={() => {
                    if(count != 0) setCount(parseInt(count) - 1)
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <input type="number" min="0" name="price" onChange={(e) => setCount(e.target.value)} id="price" className="block bg-transparent text-center w-full px-12 sm:text-sm border-1 rounded-md py-4" value={count || 0} />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <div className="w-8 h-8 cursor-pointer text-black flex items-center" onClick={() => setCount(parseInt(count) + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="">
                <Button.toCart onClick={() => addCart(item.id, count, sizeState, colorState, item.price, item.images[0].imageUrl, item.name)} className={`${(sizeState != null && colorState!=null && count != 0) ? 'bg-black cursor-pointer' : 'cursor-default color-button-disable text-white'}`}>ADD TO CART</Button.toCart>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Description data={item} />
    </Layout>
  )
}

export default Product
