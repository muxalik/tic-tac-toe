import React from 'react'
import { motion } from 'framer-motion'
import { scaleHoverAnimation } from '../constants/motion'

const Button = ({ title, handleClick, styles }) => {
    return (
        <motion.button
            {...scaleHoverAnimation}
            className={`px-[16px] py-[8px] text-primary rounded-[8px] border-0 bg-secondary uppercase text-[20px] font-bold tracking-[6px] shadow-btn ${styles}`}
            onClick={handleClick}
        >
            {title}
        </motion.button>
    )
}

export default Button