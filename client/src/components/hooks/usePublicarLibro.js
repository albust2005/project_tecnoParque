import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useToastify } from './useToastify'

export const usePublicarLibro = () => {
    const { showToastMessage } = useToastify()

    const navigate = useNavigate()

    const publicarLibro = async (data) => {
        try {
            const { titulo, ISBN, descripcion, costo, cod_tema } = data
            const response = await axios.post("http://localhost:9000/empresa/publicar", {
                COD: ISBN,
                titulo: titulo,
                descripcion: descripcion,
                costo: costo,
                archivo: "",
                image: "",
                COD_tema: cod_tema,
                COD_empresa: 1
            })

            console.log(response)
            navigate("/")

        } catch (error) {
            console.log(error.message)
            console.log(error)
            showToastMessage("Revisa tus datos")
        }
    }

    return { publicarLibro }
} 