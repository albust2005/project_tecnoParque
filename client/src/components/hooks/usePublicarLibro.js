import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useToastify } from './useToastify'
import { useImageURL } from "./useImageURL"

export const usePublicarLibro = () => {
    const { showToastMessage } = useToastify()
    const { imageURL, handleImage } = useImageURL()

    const navigate = useNavigate()

    const publicarLibro = async (data) => {
        try {
            const { titulo, ISBN, descripcion, costo, image, cod_tema } = data
            const response = await axios.post("http://localhost:9000/empresa/publicar", {
                COD: ISBN,
                titulo: titulo,
                descripcion: descripcion,
                costo: costo,
                archivo: "",
                image: image,
                COD_tema: cod_tema,
                COD_empresa: 1
            })

            console.log(response)
            alert("Libro creado correctamente")
            navigate("/empresa/libros")
        } catch (error) {
            console.log(error.message)
            console.log(error)
            showToastMessage("Revisa tus datos")
        }
    }

    return { publicarLibro , handleImage }
} 