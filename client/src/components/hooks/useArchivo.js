import { useState } from "react"

export const useArchivo = (archivo) => {
    const [archivoURL, setArchivoURL] = useState(null)

    if(archivo) {
        const renderArchivo = new FileReader(); 
        renderArchivo.onload = () => {
            const newArchivo = renderArchivo.result
            setArchivoURL(newArchivo)
        }

        renderArchivo.readAsDataURL(archivo)
    }


    return { archivoURL }
}