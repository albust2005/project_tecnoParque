import { createContext, useContext } from "react";
import { useLibrosUser } from "../hooks/useLibrosUser";
import { usePublicarLibro } from "../hooks/usePublicarLibro";

import axios from "axios";

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

    const eliminarLibro = async (COD) =>{
        try {
            const response = await axios.delete(`http://localhost:9000/empresa/eliminar/${COD}`)
            console.log(response)

            alert("Libro eliminado correctamente")
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <libroContext.Provider value={{ libros }}>
            <libroControllerContext.Provider value={{ publicarLibro, eliminarLibro }}>
                {children}
            </libroControllerContext.Provider>
        </libroContext.Provider>
    )
}