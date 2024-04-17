import { createContext, useContext } from "react";
import { useLibrosUser } from "../hooks/useLibrosUser";

const libroContext = createContext()


export const useLibrosContext = () =>{
    return useContext(libroContext)
}


export function LibroProvider ({children}){
    const { libros } = useLibrosUser()
    
    return (
        <libroContext.Provider value={{libros}}>
            {children}
        </libroContext.Provider>
    )
}