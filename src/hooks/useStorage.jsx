import { useState } from "react"

const useStorage = (key, def) => {
    const value = JSON.parse(localStorage.getItem(key))
    const [item, setItem] = useState(value || def)

    const saveItem = value => {
        localStorage.setItem(key, JSON.stringify(value))
        setItem(value)
    }

    return [item, saveItem]
}

export default useStorage