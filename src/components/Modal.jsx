import React from 'react'
import { motion } from 'framer-motion'

import Button from './Button'
import { opacityAnimation } from '../constants/motion'

const Modal = ({ winner, handleRestart, handleNext }) => {
    const title = winner.charAt(0).toUpperCase() + winner.slice(1)

    return (
        <>
            <motion.div
                {...opacityAnimation()}
                className={`fixed inset-0 z-[50] modal-${winner}`}
            />
            <motion.div
                {...opacityAnimation(0.5, .1)}
                className={`fixed inset-0 z-[100] flex justify-center items-center`}>
                <motion.div className='w-full relative z-[150]'>
                    <motion.div className='bg-[url("./modal-outer-2.svg")] w-1/4 bg-cover absolute top-[-34px] bottom-[-34px] left-1/2 -translate-x-1/2' />
                    <motion.div className='bg-[url("./modal-outer.svg")] absolute bg-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-center bg-no-repeat w-[44%] h-[110%]' />
                    <motion.div className={`modal-${winner}-bg p-[30px] w-full h-[371px]`}>
                        <motion.div className='w-full p-[28px] relative h-full flex justify-center flex-col'>
                            <motion.img src={`./${winner}.png`} alt={title} className='block absolute left-1/2 -translate-x-1/2 -top-[180px]' />
                            <motion.h2 className=' text-darkGray text-center text-[72px] font-extrabold uppercase tracking-[12px] mt-[50px] mb-[25px]'>{title} wins</motion.h2>
                            <motion.div className='flex justify-center items-center gap-[25px]'>
                                <Button
                                    title='Next round'
                                    handleClick={handleNext}
                                />
                                <Button
                                    title='Restart'
                                    handleClick={handleRestart}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Modal