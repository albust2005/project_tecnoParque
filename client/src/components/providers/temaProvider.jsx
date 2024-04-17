import { createContext, useContext } from "react";
import { useTema } from "../hooks/useTema";

const temaContext = createContext()

export function useTemaContext() {
    return useContext(temaContext)
}

export function TemaProvider({ children }) {
    const { temas } = useTema()

    return (
        <temaContext.Provider value={{temas}}>
            { children }
        </temaContext.Provider>
    )
}