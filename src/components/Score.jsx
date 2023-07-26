import React from 'react'
import { motion } from 'framer-motion'

import Banner from './Banner'
import { scaleHoverAnimation } from '../constants/motion'

const Score = ({ player, score, handleScoreRefresh }) => {
    return (
        <div className='flex justify-between items-center w-1/2 flex-row'>
            <Banner
                id='planet'
                isActive={player === 'planet'}
                image='./planet.png'
                score={score?.planet || 0}
                total={score?.planet + score?.star || 0}
            />
            <div className='flex flex-col justify-center h-full w-[60px] items-center relative'>
                <motion.div
                    {...scaleHoverAnimation}
                    key='vs'
                    className='w-full rounded-[50%] aspect-square p-[3px] shadow-circleBorder bg-primary self-center mt-[-50px] select-none'
                >
                    <motion.button
                        onClick={handleScoreRefresh}
                        className='shadow-circle rounded-[50%] h-full w-full relative'
                    >
                        <img src="./restart.svg" alt="Restart" className='absolute w-[90%] h-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer' />
                    </motion.button>
                </motion.div>
                <span className='absolute w-full left-0 right-0 bottom-[12%] text-center text-lightGray text-[24px] font-bold tracking-[5px]'>VS</span>
            </div>
            <Banner
                id='star'
                isActive={player === 'star'}
                image='./star.png'
                score={score?.star || 0}
                total={score?.planet + score?.star || 0}
            />
        </div>
    )
}

export default Score