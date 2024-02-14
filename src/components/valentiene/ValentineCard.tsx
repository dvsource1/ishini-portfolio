'use client'

import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core'

import ArrowImage from '../../assets/dnd/arrow.png'
import { CSS } from '@dnd-kit/utilities'
import { Caveat } from 'next/font/google'
import FinalImage from '../../assets/dnd/final.png'
import Heart from './Heart'
import Image from 'next/image'
import IntermediateImage from '../../assets/dnd/intermediate.png'
import PieceImage from '../../assets/dnd/piece.png'
import StartImage from '../../assets/dnd/start.png'
import { useState } from 'react'

const handWrittenFont = Caveat({ subsets: ['latin'], weight: '400' })

const Droppable = ({ children }: any) => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  })
  const style = {
    color: isOver ? 'green' : undefined,
  }

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  )
}

const Draggable = ({ children }: any) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable',
  })
  const style = {
    transform: CSS.Translate.toString(transform),
  }

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  )
}

const ValentineCard = () => {
  const [isDropped, setIsDropped] = useState(false)
  const [finalImage, setFinalImage] = useState(StartImage)

  function handleDragEnd(event: any) {
    if (event.over && event.over.id === 'droppable') {
      setFinalImage(IntermediateImage)
      setIsDropped(true)
      setTimeout(() => {
        setFinalImage(FinalImage)
      }, 1000)
    }
  }

  return (
    <div className="">
      <DndContext onDragEnd={handleDragEnd}>
        {!isDropped ? (
          <div className="absolute right-10 bottom-20">
            <div
              className={`${handWrittenFont.className} text-4xl text-white absolute right-20 w-40`}
            >
              Fix Me
            </div>
            <div
              className={`${handWrittenFont.className} text-4xl absolute right-20 top-10 w-40`}
            >
              <Image
                className="-scale-y-100"
                src={ArrowImage}
                quality={100}
                alt=""
              />
            </div>
            <Draggable>
              <Image src={PieceImage} quality={100} alt="" />
            </Draggable>
          </div>
        ) : null}
        <div className=""></div>
        <Droppable>
          {isDropped ? (
            <Heart font={handWrittenFont} />
          ) : (
            <Image src={StartImage} quality={100} alt="" />
          )}
        </Droppable>
      </DndContext>
    </div>
  )
}

export default ValentineCard
