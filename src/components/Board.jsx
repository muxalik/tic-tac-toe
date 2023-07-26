import React, { useState } from 'react'
import Line from './Line'
import Circle from './Circle'
import Cell from './Cell'

const Board = ({ history, player, handleCellClick, animatedCells }) => {
    const [currentCell, setCurrentCell] = useState()
    let delay = 0

    const handleCellHover = index => {
        if (index in history) {
            setCurrentCell(null)
            return false
        }

        setCurrentCell(index)
    }

    const handleCellLeave = index => {
        if (index in history) {
            setCurrentCell(null)
            return false
        }

        currentCell === index && setCurrentCell(index)
    }

    return (
        <ul className='grid grid-cols-[35%_30%_35%] grid-rows-[35%_30%_35%] w-full rounded-[32px] aspect-square shadow-board relative z-10'>
            <li key={`outer-cell-1`} className="pl-[7%] pt-[20%] sm:pt-[10%] sm:pl-[5%] shadow-boardCell rounded-[8px] rounded-tl-[32px] w-full h-full bg-secondary grid grid-cols-4 grid-rows-4 ">
                <div className="h-full flex flex-col gap-[10%] items-center col-span-1 row-[1/5] place-content-start">
                    <Circle />
                    <Line />
                </div>
                <h2 className='block col-span-3 row-[/1] text-primary text-[16px] font-extrabold tracking-[14px] uppercase text-center mt-[-20%] sm:mt-0'>Tic</h2>
            </li>
            <li key={`outer-cell-2`} className="shadow-boardCell rounded-[8px] w-full h-full bg-secondary grid grid-cols-4 grid-rows-4 pt-[12%]">
                <h2 className='block col-span-4 row-span-1 text-primary text-[16px] font-extrabold tracking-[14px] uppercase text-center mt-[-8px] sm:mt-0'>Tac</h2>
            </li>
            <li key={`outer-cell-3`} className="shadow-boardCell rounded-[8px] rounded-tr-[32px] w-full h-full bg-secondary grid grid-cols-4 grid-rows-4 pr-[7%] pt-[20%] sm:pt-[10%] sm:pr-[5%]">
                <h2 className='block col-span-3 row-[1/4] text-primary text-[16px] font-extrabold tracking-[14px] uppercase text-center mt-[-20%] sm:mt-0'>Toe</h2>
                <div className="h-full flex flex-col gap-[10%] items-center col-span-1 row-[1/5] place-content-start">
                    <Circle />
                    <Line />
                </div>
            </li>

            <li key={`outer-cell-4`} className="shadow-boardCell rounded-[8px] w-full h-full bg-secondary grid grid-cols-4 grid-rows-4" />
            <li key={`outer-cell-5`} className="shadow-boardCell rounded-[8px] w-full h-full bg-secondary grid grid-cols-4 grid-rows-4" />
            <li key={`outer-cell-6`} className="shadow-boardCell rounded-[8px] w-full h-full bg-secondary grid grid-cols-4 grid-rows-4" />

            <li key={`outer-cell-7`} className="shadow-boardCell rounded-[8px] rounded-bl-[32px] w-full h-full bg-secondary grid grid-cols-4 grid-rows-4 pl-[7%] pb-[20%] sm:pb-[10%] sm:pl-[5%]">
                <div className="h-full flex flex-col gap-[10%] items-center col-span-1 row-[1/5] place-content-end">
                    <Line inverse />
                    <Circle />
                </div>
                <h3 className='block col-[2/4] row-[4/4] text-primary text-[10px] sm:text-[16px] font-extrabold tracking-[7px] uppercase text-center self-end mb-[-20%] sm:mb-0'>2023</h3>
            </li>
            <li key={`outer-cell-8`} className="shadow-boardCell rounded-[8px] w-full h-full bg-secondary grid grid-cols-4 grid-rows-4" />
            <li key={`outer-cell-9`} className="shadow-boardCell rounded-[8px] rounded-br-[32px] w-full h-full bg-secondary grid grid-cols-4 grid-rows-4 pr-[7%] pb-[20%] sm:pb-[10%] sm:pr-[5%]">
                <h3 className='block col-[1/4] row-[4/4] text-primary text-[10px] sm:text-[12px] font-extrabold tracking-[5px] uppercase text-center self-end pl-5 mb-[-13%] sm:mb-0'>muxalik</h3>
                <div className="h-full flex flex-col gap-[10%] items-center col-span-1 row-[1/5] place-content-end">
                    <Line inverse />
                    <Circle />
                </div>
            </li>

            <ul className='w-[81%] h-[81%] bg-cellsBorder shadow-cells absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[32px] p-[10px] grid grid-cols-3 grid-rows-3' onPointerLeave={() => setCurrentCell(null)}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(index => (
                    <Cell
                        showShadow={currentCell === index && !(index in history)}
                        index={index}
                        handleClick={handleCellClick}
                        handleHover={handleCellHover}
                        handleLeave={handleCellLeave}
                        player={history[index] || player}
                        isActive={index in history}
                        showAnimation={animatedCells.includes(index)}
                        delay={delay++ * 0.1}
                    />
                ))}
            </ul>
        </ul>
    )
}

export default Board