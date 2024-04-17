import axios from 'axios';
import { useToastify } from './useToastify'

export const useCreateUser = (URI) => {
    const { showToastMessage } = useToastify()
    //funcion para registrar un nuevo usuario
    const createUser = async (data) => {
        try {
            const { ID, nombre_c, numero_tarjeta, correo, username, contrasena } = data
            const respuesta = await axios.post(URI, {
                ID: ID,
                nombre_c: nombre_c,
                numero_tarjeta: numero_tarjeta,
                correo: correo,
                username: username,
                contrasena: contrasena
            })
            showToastMessage("Inicia Sesión")
            console.log(data)
            window.location.reload();
        }catch (error){
            console.log(error.message)
            console.log(error)
            showToastMessage("Revisa tus datos")
        }
    };

    return { createUser }
}