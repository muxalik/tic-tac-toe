import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'

const Banner = ({ id, isActive, image, score, total }) => {
    return (
        <AnimatePresence>
            <motion.div
                className={`aspect-[116/300] w-[30%] rounded-bl-[40px] rounded-br-[40px] flex flex-col justify-end pb-[10px] relative z-[1]`}>
                <motion.div
                    className={` h-full w-full absolute top-0 rounded-bl-[40px] rounded-br-[40px] ${isActive ? 'bg-skyblue' : ''}`}
                />
                {isActive ? (
                    <motion.img key={`image-${id}`} src={image} alt="Player" className='absolute w-[190%] top-1/2 left-1/2 -translate-x-1/2 mt-[-20px] -translate-y-1/2 max-w-[1000px] select-none' />
                ) : (
                    <motion.div key={`empty-${id}`} className='w-full aspect-square shadow-scoreDefault rounded-full absolute mt-[-30px] top-1/3' />
                )}
                <span className='mt-[20px] text-lightGray text-[32px] font-light text-center relative flex flex-row items-center w-max left-1/2 -translate-x-1/2'>
                    <span key={`current-${id}`} className='text-darkGray text-[48px] font-bold tracking-[0px]'>{score}</span>
                    <span key={`total-${id}`}>/{total}</span>
                </span>
            </motion.div>
        </AnimatePresence>
    )
}

export default Banner