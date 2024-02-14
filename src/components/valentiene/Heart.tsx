import FinalImage from '../../assets/dnd/final.png'
import Image from 'next/image'
import IntermediateImage from '../../assets/dnd/intermediate.png'
import { motion } from 'framer-motion'
import { set } from 'react-hook-form'

const Heart = ({ font }: any) => {
  return (
    <div className={font.className}>
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
        animate={{ opacity: 0, width: 280 }}
        initial={{ opacity: 100, width: 280 }}
        transition={{ delay: 0 }}
      >
        <Image src={IntermediateImage} quality={100} alt="" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60]"
        animate={{ opacity: 50, width: 280 }}
        initial={{ opacity: 0, width: 200 }}
        transition={{ delay: 0.2, repeat: Infinity, repeatDelay: 0.4 }}
      >
        <Image src={FinalImage} quality={100} alt="" />
      </motion.div>
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 z-[70] text-3xl w-full text-center"
        animate={{ opacity: 50 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5 }}
      >
        See
      </motion.div>
      <motion.div
        className="absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-2/4 z-[70] text-4xl w-full text-center"
        animate={{ opacity: 50 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1 }}
      >
        You Completes Me
      </motion.div>
      <motion.div
        className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-3/4 z-[70] text-5xl w-full text-center"
        animate={{ opacity: 50 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 2 }}
      >
        {"Happy Valentine's Day!!!"}
        <br />
        {'-- Nangi Baba --'}
      </motion.div>
    </div>
  )
}

export default Heart
