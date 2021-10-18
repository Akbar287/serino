import Layout from "../components/Layout";
import Image from "next/image"
import {data} from "./api/_api"
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
export default function Home() {
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
    <Layout title="Landing Page">
      <AnimatePresence exitBeforeEnter key={`landing`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-36 items-center justify-item-center mx-8 py-20 lg:mx-32 lg:py-64">
        {
          data.data.items.map(item => {
            return (
              <Link passHref href={`/product/${item.id}`} key={item.id}>
                <motion.div variants={imageAnimate} initial="initial" animate="visible" className="cursor-pointer">
                  <Image src={item.images[0].imageUrl} alt={item.name} className="w-32 h-64 hover:scale-100 transition-all duration-500" layout="responsive" width={682} height={939} />
                </motion.div>
              </Link>
            )
          })
        }
      </div>
      </AnimatePresence>
    </Layout>
  )
}
