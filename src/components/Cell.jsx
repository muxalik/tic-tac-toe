import { AnimatePresence, motion } from 'framer-motion'
import React, { memo } from 'react'
import { cellHoverAnimation, opacityAnimation } from '../constants/motion'

const Cell = ({ index, handleClick, handleHover, handleLeave, player, isActive, showShadow, showAnimation, delay }) => {
    return (
        <li
            key={`cell-${index}`}
            className={`cell rounded-[4px] shadow-cell select-none relative bg-cell`}
            onPointerOver={() => handleHover(index)}
            onPointerLeave={() => handleLeave(index)}
            onClick={() => handleClick(index)}
        >
            <AnimatePresence>
                {showAnimation && (
                    <motion.div
                        key={`cell-overaly-${index}`}
                        {...opacityAnimation(0.5, delay)}
                        className={`cell-bg absolute inset-0 rounded-[4px] shadow-cell ${player === 'planet' ? 'bg-art' : 'bg-skyblue'}`}
                    />
                )}
                {showShadow && (player === 'planet' ? (
                    <CellImage image='./planet-shadow.png' id={`planet-shadow-${index}`} z={10} />
                ) : (
                    <CellImage image='./star-shadow.png' id={`star-shadow-${index}`} z={10} />
                ))}
                {isActive && (player === 'planet' ? (
                    <CellImage image='./planet-cell.png' id={`planet-cell-${index}`} z={20} />
                ) : (
                    <CellImage image='./star-cell.png' id={`star-cell-${index}`} z={20} />
                ))}
                {!isActive && (
                    <motion.img
                        key={`empty-${index}`}
                        src='./empty.png'
                        alt="Empty"
                        className='absolute cursor-pointer z-5' {...cellHoverAnimation}
                    />
                )}
            </AnimatePresence>
        </li>
    )
}

const CellImage = ({ id, key, image, z }) => {
    return (
        <motion.img
            key={id}
            src={image}
            alt={key}
            className={`absolute cursor-pointer z-${z}`} {...cellHoverAnimation}
        />
    )
}

export default memo(Cell)