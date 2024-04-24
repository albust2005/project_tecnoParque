import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useToastify } from './useToastify'
import { useImageURL } from "./useImageURL"

export const usePublicarLibro = () => {
    const { showToastMessage } = useToastify()

    const navigate = useNavigate()

    const publicarLibro = async (data) => {

        try {

            const { titulo, ISBN, descripcion, costo, image, archivo, cod_tema } = data
            console.log(data)
            console.log(archivo[0])
            
            const formData = new FormData();
            formData.append("COD", ISBN);
            formData.append("titulo", titulo);
            formData.append("descripcion", descripcion);
            formData.append("costo", costo);
            formData.append("archivo", archivo[0]);
            formData.append("image", image);
            formData.append("COD_tema", cod_tema);
            formData.append("COD_empresa", 1);

            console.log(formData)
            console.log(formData.get('COD'))
            console.log(formData.get('titulo'))
            console.log(formData.get('descripcion'))
            console.log(formData.get('costo'))
            console.log(formData.get('archivo'))
            console.log(formData.get('image'))
            console.log(formData.get('COD_tema'))
            console.log(formData.get('COD_empresa'))
            
            const response = await axios.post('http://localhost:9000/empresa/publicar', formData)
            console.log(response)

            alert("Libro creado correctamente")
            navigate("/empresa/libros")

        } catch (error) {
            console.log(error.message)
            console.log(error)
            showToastMessage("Revisa tus datos")
        }
    }

    return { publicarLibro }
} 