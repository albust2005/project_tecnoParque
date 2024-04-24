import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useToastify } from "./useToastify"


export const useComprarLibros = () => {
    const { showToastMessage } = useToastify()
    const navigate = useNavigate()

    const comprarLibro = async () => {

        const response = await axios.post('http://localhost:9000/payment/createOrder', {})

        const data = await response.data
        console.log(data)
        window.location.href = data.links[1].href
    }

    return { comprarLibro }
}