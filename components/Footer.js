import { AnimatePresence, motion } from "framer-motion";
function Footer() {
  const footerAnimate = {
    initial: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        variants={footerAnimate}
        initial="initial"
        animate="visible"
        className={`bg-black text-white z-20`}
      >
        <div className="flex flex-col w-full lg:flex-row lg:container items-center md:items-end justify-start md:justify-between py-4 md:py-18 px-4">
          <div className="flex flex-col">
            <div className="font-semibold text-xl lg:text-2xl color-footer-contact mb-2 md:mb-5">
              Contact us
            </div>
            <div className="flex flex-col md:flex-row">
              <a className="font-normal text-xl lg:text-2xl underline">
                hello@serino@studio
              </a>
              <div className="font-normal text-xl lg:text-2xl ml-0 md:ml-16">
                Instagram
              </div>
            </div>
          </div>
          <div className="text-base my-4 text lg:my-0 lg:text-2xl font-normal">
            &copy; 2021 Serino Studio
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Footer;
