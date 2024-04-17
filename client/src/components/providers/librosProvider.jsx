import { createContext, useContext } from "react";
import { useLibrosUser } from "../hooks/useLibrosUser";
import { usePublicarLibro } from "../hooks/usePublicarLibro";

const libroContext = createContext()
const libroControllerContext = createContext()

export const useLibrosContext = () => {
    return useContext(libroContext)
}

export const useLibrosControllerContext = () => {
    return useContext(libroControllerContext)
}
export function LibroProvider({ children }) {
    const { libros } = useLibrosUser()
    const { publicarLibro } = usePublicarLibro()


    return (
        <libroContext.Provider value={{ libros }}>
            <libroControllerContext.Provider value={{ publicarLibro }}>
                {children}
            </libroControllerContext.Provider>
        </libroContext.Provider>
    )
}