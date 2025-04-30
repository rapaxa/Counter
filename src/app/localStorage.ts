// utils/localStorage.ts

export const loadState = (): any | undefined => {
    try {
        const serializedState = localStorage.getItem('counterValue')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        console.warn("loadState error:", err)
        return undefined
    }
}

export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('counterValue', serializedState)
    } catch (err) {
        console.warn("saveState error:", err)
    }
}
