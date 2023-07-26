import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import Button from './components/Button'
import Board from './components/Board'
import Score from './components/Score'
import Modal from './components/Modal'
import useStorage from './hooks/useStorage'

const App = () => {
    const [player, setPlayer] = useState()
    const [history, setHistory] = useStorage('history', {})
    const [isFinished, setIsFinished] = useState(false)
    const [score, setScore] = useStorage('score', {})
    const [animatedCells, setAnimatedCells] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if (isGameFinished()) {
            setIsFinished(true), setTimeout(() => {
                setShowModal(true)
            }, 1300)

            return
        }

        setPlayer(() => player === 'planet' ? 'star' : 'planet')
    }, [history])

    const handleRestart = () => {
        setHistory({})
        setIsFinished(false)
        setScore({})
        setShowModal(false)
        setAnimatedCells([])
    }

    const handleCellClick = index => {
        if (index in history) {
            return false
        }

        if (!isFinished) {
            setHistory({ ...history, [index]: player })
        }
    }

    const checkWin = (ch, pos1, pos2, pos3, cells) => {
        if (ch && cells[pos1] === ch && cells[pos2] === ch && cells[pos3] === ch) {
            setAnimatedCells([pos1, pos2, pos3])
            return true
        }

        return false
    };

    const isGameFinished = () => {
        const cells = Array(9).fill(undefined).map((cell, index) => {
            return history.hasOwnProperty(index) ? history[index] : undefined
        })

        // Check rows 
        if (checkWin(cells[0], 0, 1, 2, cells) ||
            checkWin(cells[3], 3, 4, 5, cells) ||
            checkWin(cells[6], 6, 7, 8, cells)) {
            return true;
        }

        // Check columns
        if (checkWin(cells[0], 0, 3, 6, cells) ||
            checkWin(cells[1], 1, 4, 7, cells) ||
            checkWin(cells[2], 2, 5, 8, cells)) {
            return true;
        }

        // Check diagonals
        if (checkWin(cells[0], 0, 4, 8, cells) ||
            checkWin(cells[2], 2, 4, 6, cells)) {
            return true;
        }
    }

    const handleNext = () => {
        setScore({
            ...score,
            [player]: (score[player] || 0) + 1
        })

        setHistory({})
        setIsFinished(false)
        setPlayer(player === 'planet' ? 'star' : 'planet')
        setAnimatedCells([])
        setShowModal(false)
    }
    
    return (
        <div className='app bg-beague relative z-5'>
            <div className="h-full w-full p-[30px] max-w-[710px] mx-auto flex flex-col items-center justify-center">
                <Button
                    title='Restart'
                    handleClick={handleRestart}
                    styles='mb-[35px]'
                />
                <Board
                    history={history}
                    player={player}
                    handleCellClick={handleCellClick}
                    animatedCells={animatedCells}
                />
                <Score
                    player={player}
                    score={score}
                    handleScoreRefresh={() => setScore({})}
                />
                <AnimatePresence>
                    {showModal && (
                        <Modal
                            winner={player}
                            handleRestart={handleRestart}
                            handleNext={handleNext}
                        />
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default App