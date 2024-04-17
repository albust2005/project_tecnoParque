import { createContext, useContext } from "react";
import { useTema } from "../hooks/useTema";

const temaContext = createContext()

export function useTemaContext() {
    return useContext(temaContext)
}

export function TemaProvider({ children }) {
    const { tema } = useTema()

    return (
        <TemaProvider value={tema}>
            { children }
        </TemaProvider>
    )
}