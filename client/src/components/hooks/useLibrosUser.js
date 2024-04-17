import axios from "axios"
import { useEffect, useState } from "react"

export const useLibrosUser = () =>{
    const [libros, setLibros] = useState([])

    const obtenerLibros = async () =>{
        try {
            const response = await axios.get("http://localhost:9000/user/libros")
            setLibros(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        obtenerLibros()
    },[])

    const mappedLibros = libros?.map(libro =>({
        COD: libro.COD,
        titulo: libro.titulo,
        descripcion: libro.descripcion,
        costo: libro.costo,
        archivo: libro.archivo,
        image: libro.image,
        COD_tema: libro.COD_tema,
        COD_empresa: libro.COD_empresa,
    }))


    return { libros: mappedLibros}
}