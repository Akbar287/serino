import Layout from "../components/Layout";
import Image from "next/image"
import Him from "../public/assets/HimHeader_bg.png"
import {getHimCategory} from "./api/_api"
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
function him() {
  const himProduct = getHimCategory()
  const headerAnimate ={
    initial: {
      y: -100,
      opacity: 0
    },
    visible: {
      y:0,
      opacity:1,
      transition: {
        duration: 2
      }
    }
  }
  const imageAnimate = {
    initial: {
      opacity: 0,
      y: -100
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 3, type: 'spring' }
    }
  }
  return (
    <Layout title="For Him">
        <motion.div variants={headerAnimate} initial="initial" animate="visible" className="height-category relative">
          <Image src={Him} alt="Header Her" className="w-full h-auto" width={1920} height={592} />
          <div className="mb-6 pt-56 z-10 top-0 right-0 left-0 absolute w-full text-center flex flex-col items-center justify-center text-white">
            <h3 className="font-bold font-30">1 Yarn. 7 Styles. 5 Colors</h3>
            <p className="font-semibold font-25">Timeless essentials to be worn every day, with everything</p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8 xl:gap-48 mx-8 lg:mt-16 lg:mb-64 lg:mx-60 2xl:my-60 2xl:mx-72">
          {
            himProduct.map(item => {
              return(
                <Link passHref href={`/product/${item.id}`} key={item.id}>
                  <motion.div variants={imageAnimate} initial="initial" animate="visible" className="cursor-pointer" >
                    <Image src={item?.images[0]?.imageUrl} alt={item.name} width={574} height={759} layout="responsive" />
                    <div className="mt-4 2xl:mt-8">
                      <h3 className="font-semibold text-xl 2xl:text-4xl">{item.name}</h3>
                      <p className="text-base xl:text-xl font-normal">{item.price}</p>
                    </div>
                  </motion.div>
                </Link>
              )
            })
          }
        </div>
    </Layout>
  )
}

export default him
