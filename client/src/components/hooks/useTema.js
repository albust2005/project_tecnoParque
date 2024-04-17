import axios from "axios"
import { useEffect, useState } from "react"

export const useTema = () =>{
    const [temas, setTema] = useState([])

    const obtenerTemas = async () => {
        try{
            const response = await axios.get("http://localhost:9000/user/temas")
            setTema(response.data)
        } catch (error) {
            console.log(error)
        } 
    }

    useEffect(() => {
        obtenerTemas()
    }, [])

    const mappedTemas = temas?.map((tema) => ({
        COD: tema.COD,
        tema: tema.tema,
        image: tema.image
    }))

    return { temas: mappedTemas }
}