import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLoginUser = (URI) => {
    const [ sesionUser, setSesionUser ] = useState(() => {
        const user = localStorage.getItem('user')
        return user ? JSON.parse(user) : null
    })  

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(sesionUser))
    }, [sesionUser])

    const navigate = useNavigate()

    //Iniciar Sesion - Usuario
    const loginUser = async (data) => {
        try {
            const { username, contrasena, Rol } = data

            if(Rol == "Cliente") {
                const respuesta = await axios.post(URI, {
                    username: username,
                    contrasena: contrasena
                })

                console.log(respuesta)
                alert(`Bienvenido ${username}`)
                setSesionUser(data)
                navigate('/usuarios')
            }else{
                if (Rol == "Empresa") {
                    const respuesta = await axios.post("http://localhost:9000/login/empresa", {
                        username: username,
                        contrasena: contrasena
                    })

                    console.log(respuesta)
                    alert(`Bienvenido ${username}`)
                    setSesionUser(data)
                    navigate('/empresa')
                }
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