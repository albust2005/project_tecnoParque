import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { useChangeLogin } from '../../page/login';

export const useCreateUser = (URI) => {
    const { Inicios } = useChangeLogin()
    console.log(URI)

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
            alert("Inicia Sesion")
            console.log(data)
            window.location.reload();
        }catch (error){
            console.log(error.message)
            console.log(error)
            alert('Revisa tus datos')
        }
    };

    return { createUser }
}