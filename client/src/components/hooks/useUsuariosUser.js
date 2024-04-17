import axios from "axios";
import { useEffect, useState } from "react";

export const useUsuariosUser = () => {
    const [usuarios, setUsuarios] = useState([])

    const obtenerUsuarios = async () => {
        try {
            const response = await axios.get("http://localhost:9000/user/usuarios")
            setUsuarios(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        obtenerUsuarios()
    },[])

    const mappedUsuarios = usuarios?.map(usuario => ({
        ID: usuario.ID,
        nombre_c: usuario.nombre_c,
        numero_tarjeta: usuario.numero_tarjeta,
        image: usuario.image,
        username: usuario.username,
        contrasena: usuario.contrasena,
        correo: usuario.correo
    }))

    return { usuarios: mappedUsuarios }
}