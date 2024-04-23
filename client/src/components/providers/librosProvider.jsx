import { createContext, useContext } from "react";
import { useLibrosUser } from "../hooks/useLibrosUser";
import { usePublicarLibro } from "../hooks/usePublicarLibro";
import { useNavigate } from "react-router-dom";

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
    const { publicarLibro, handleImage } = usePublicarLibro()
    const navigate = useNavigate()

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

    const editarLibro =  async (data) =>{
        try {
            console.log(data)
            const { titulo, ISBN, descripcion, costo, cod_tema } = data

            const response = await axios.put("http://localhost:9000/empresa/editar/",{
                COD: ISBN,
                titulo: titulo,
                descripcion: descripcion,
                costo: costo,
                archivo: "",
                image: "",
                COD_tema: cod_tema,
                COD_empresa: "1",
            })

            console.log(response)
            alert("Libro editado correctamente")
            navigate("/empresa/libros")
        } catch (error) {
            console.log(error)
        }
    } 

    return (
        <libroContext.Provider value={{ libros }}>
            <libroControllerContext.Provider value={{ publicarLibro, eliminarLibro, editarLibro, handleImage }}>
                {children}
            </libroControllerContext.Provider>
        </libroContext.Provider>
    )
}