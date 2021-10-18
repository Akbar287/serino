import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import { AnimatePresence } from 'framer-motion'
import Question from './Question'
import { useState } from 'react'
import ModalCheckout from './ModalCheckout'
function Layout(props) {
  const [modalCheckout, setModalCheckout] = useState(false)
  return (
    <AnimatePresence exitBeforeEnter>
      <main>
        <Head>
          <title>{`${props.title ?? props.title} - Serino`}</title>
        </Head>
        <Navbar className="fixed"/>
        <div>
          {props.children}
        </div>
        <ModalCheckout modalCheckout={modalCheckout} setModalCheckout={setModalCheckout} />
        <Question modalCheckout={modalCheckout} setModalCheckout={setModalCheckout} />
        <Footer />
      </main>
    </AnimatePresence>
  )
}

export default Layout
