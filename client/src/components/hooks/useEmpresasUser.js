import axios from "axios";
import { useEffect, useState } from "react";

export const useEmpresasUser = () => {
    const [empresas, setEmpresas] = useState([])

    const obtenerEmpresas = async () => {
        try {
            const response = await axios.get("http://localhost:9000/empresa/empresas")
            setEmpresas(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        obtenerEmpresas()
    },[])

    const mappedEmpresas = empresas?.map(empresa => ({
        COD: empresa.COD,
        nombre: empresa.nombre,
        descripcion: empresa.descripcion,
        correo: empresa.correo,
        image: empresa.image,
        username: empresa.username,
        contrasena: empresa.contrasena
    }))

    return { empresas: mappedEmpresas }
}