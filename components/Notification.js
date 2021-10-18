import { AnimatePresence, motion } from 'framer-motion'
function Notification({ showNotification, setShowNotification, status, message, setCount }) {

  const backdrop = {
    visible: {opacity: 1},
    hidden: {opacity: 0}
  }
  return (
      (showNotification) && (
        <AnimatePresence exitBeforeEnter>
          <motion.div className="backdrop flex flex-col items-start pt-20 pb-10 lg:pt-52 lg:pb-20" variants={backdrop} animate="visible" initial="hidden" exit="hidden">
            <div className={`${(status != 'success') ? 'border-red-400' : 'border-green-400' } flex flex-col lg:flex-row justify-between items-center my-0 border-l-4 mx-auto py-5 px-5 bg-white text-left rounded w-1/2`}>
              <p className="text-gray-500">{message}</p>
              <p className="cursor-pointer" onClick={() => {setShowNotification(false); setCount(0) }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-4 lg:mt-0 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      )
  )
}

export default Notification
