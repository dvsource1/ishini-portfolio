import Confetti from 'react-confetti'
import FinalImage from '../../assets/dnd/final.png'
import Image from 'next/image'
import IntermediateImage from '../../assets/dnd/intermediate.png'
import { motion } from 'framer-motion'
import useWindowSize from 'react-use/lib/useWindowSize'

const Heart = ({ font }: any) => {
  const { width, height } = useWindowSize()
  return (
    <div className={font.className}>
      <Confetti
        width={width * 0.9}
        height={height}
        numberOfPieces={200}
        colors={['#FF69B4', '#FF1493', '#DC143C', '#F08080', '#CD5C5C']}
        drawShape={(ctx) => {
          ctx.beginPath()
          ctx.moveTo(12.5, 5)
          ctx.bezierCurveTo(12.5, 4.25, 11.25, 3.125, 6.25, 3.125)
          ctx.bezierCurveTo(2.5, 3.125, 2.5, 7.8125, 2.5, 7.8125)
          ctx.bezierCurveTo(2.5, 10, 5, 12.75, 12.5, 15)
          ctx.bezierCurveTo(20, 12.75, 22.5, 10, 22.5, 7.8125)
          ctx.bezierCurveTo(22.5, 7.8125, 22.5, 3.125, 18.75, 3.125)
          ctx.bezierCurveTo(15.625, 3.125, 12.5, 4.25, 12.5, 5)
          ctx.fill()
          ctx.closePath()
        }}
      />
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
        transition={{ delay: 0.2, type: 'spring', stiffness: 260 }}
      >
        <Image src={FinalImage} quality={100} alt="" />
      </motion.div>
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 z-[70] text-6xl w-full text-center"
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
