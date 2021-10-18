import {useState} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
function Description(props) {
  const [measure, setMeasure] = useState('cm')
  const leftDesc = {
    initial: {
      opacity: 0,
      rotate: 10
    },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 3,
        type: 'spring'
      }
    }
  }
  const rightDesc = {
    initial: {
      opacity: 0,
      rotate: -10
    },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 3,
        type: 'spring'
      }
    }
  }
  const fade = {
    initial: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 5,
        type: 'spring'
      }
    }
  }
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="bg-black text-white flex flex-col lg:flex-row w-full items-center justify-items-center p-10 lg:p-32">
        <motion.div variants={leftDesc} initial="initial" animate="visible" className="w-full lg:w-1/2">
          <h3 className="font-semibold text-2xl lg:text-4xl">A Closer Look</h3>
          <ul className="custom-ul text-base lg:text-xl list-outside list-disc lh-35">
            {
              props?.data?.features.map(feature => {
                return (<li className="text-white" key={feature?.id}>{feature?.feature}</li>)
              })
            }
          </ul>
          <div className="mt-8">
            {
              props?.data?.composition.map(comp => {
                return (<p className="font-20 font-normal lh-35" key={comp?.id}>{comp?.name}</p>)
              })
            }
          </div>
        </motion.div>
        <motion.div variants={rightDesc} initial="initial" animate="visible" className="w-full lg:w-1/2">
          <div className="justify-center mt-8 lg:mt-0 lg:justify-end flex flex-row">
            <a onClick={() => setMeasure('cm')} className={`${measure == 'cm' ? 'text-white' : 'color-footer-contact' } font-20 font-semibold cursor-pointer mr-12`}>Centimeter</a>
            <a onClick={() => setMeasure('in')} className={`${measure == 'in' ? 'text-white' : 'color-footer-contact' } font-20 font-semibold cursor-pointer`}>Inchies</a>
          </div>
          <div className="flex mt-3 lg:ml-24">
            <table className="w-full text-white">
              <thead>
                <tr className="border-gray-300 border-b-2">
                  <th className="text-left">Size</th>
                  {
                    props?.data?.sizes.map(item => {
                      return (
                        <th className="text-base lg:text-xl py-1 lg:py-2 xl:py-3 text-left font-semibold" key={item.id}>{item.symbol}</th>
                      )
                    })
                  }
                </tr>
              </thead>
              <tbody>
                  {
                    props?.data?.measurements.map((data, index) => {
                      return(
                        <tr key={index}>
                          { data.map((col, indexCol) => {
                            return (
                              <motion.td variant={fade} initial="initial" animate="visible" className="text-base lg:text-xl py-1 font-normal" key={indexCol}>
                                {
                                  (col?.name == null) ? (measure == 'cm') ? col.centimeter : col.inchi : col.name
                                }
                              </motion.td>
                            )
                          }) }
                        </tr>
                      )
                    })
                  }
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default Description
