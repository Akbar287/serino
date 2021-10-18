import Layout from "../../components/Layout"
import { AnimatePresence, motion } from "framer-motion"
import CartOrder from "../../components/CartOrder"

function order() {
  const animateTitle = {
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
    <Layout title="My Order">
      <AnimatePresence exitBeforeEnter key={`order`}>
      <motion.div variants={animateTitle} initial="initial" animate="visible" className="min-h-screen pt-24 lg:pt-52 justify-center w-full">
        <div className="w-full flex justify-center text-center">
          <div className="text-2xl text-center font-semibold">My Order</div>
        </div>
        <CartOrder />
      </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default order
