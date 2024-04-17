import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const useLoginUser = (URI) => {
    const [ sesionUser, setSesionUser ] = useState(() => {
        const user = localStorage.getItem('user')
        return user ? JSON.parse(user) : null
    })  

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(sesionUser))
    }, [sesionUser])

    const navigate = useNavigate()
    const location = useLocation()

    //Iniciar Sesion - Usuario
    const loginUser = async (data) => {
        try {
            const { username, contrasena, Rol } = data
            console.log(URI)

            if(Rol == "Cliente") {
                const respuesta = await axios.post(URI, {
                    username: username,
                    contrasena: contrasena
                })

                alert(`Bienvenido ${username}`)
                setSesionUser(data)
                navigate('/usuarios')
            }else{
                console.log("Sesion de empresa")
            }
        }catch (error) {
            if (error.response) {
                alert('Revisa tu usuario o contraseña')
            }else if (error.request){
                console.log('No se recibió respuesta del servidor');
            } else {
                alert(error.message)
            }
        }
    }

    const logout = () => {
        localStorage.removeItem('user')

        alert("Sesion cerrada correctamente")
        setSesionUser(null)
        navigate('/')
    } 

    return { sesionUser, loginUser, logout }
}