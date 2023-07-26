import React from 'react'

const Line = ({ inverse }) => {
    return (
        <div className={`w-[2px] bg-primary h-1/3 rounded-[8px] relative before:absolute before:w-[8px] before:h-[8px] before:rotate-45 before:bg-primary before:top-[-3px] before:left-[-3px] after:absolute after:bottom-[-10px] after:w-full after:h-[4px] after:bg-primary after:rounded-[8px] ${inverse ? 'after:bottom-auto after:top-[-10px] before:top-auto before:bottom-[-3px]' : ''}`} />
    )
}

export default Line