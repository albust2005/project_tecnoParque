import { useParams } from "react-router-dom"
import { useLibrosUser } from "../hooks/useLibrosUser";
import { ButtonNav } from "../buttons/bNav";
import { useUserContext } from "../providers/userProvider";
// import { useCarritoUserContext, useCarritoUserCrudContext } from "../providers/carritoProvider";

import { useState } from 'react'

export function DescLibros() {
    // const { addLibroSeleccionado } = useCarritoUserCrudContext()
    const { sesionUser } = useUserContext()

    const { COD } = useParams();
    console.log(COD)
    const { libros } = useLibrosUser();
    const libro = libros.find((libro) => libro.COD == COD)

    const [archivoURL, setArchivoURL] = useState(null)

    const addArchivo = (archivo) => {
        if (archivo) {
            const url = URL.createObjectURL(archivo); 
            setArchivoURL(url);
            return url; 
        }
        return null;
    }

    const handleClick = () => {
        const rutaArchivo = "../../../../docs/1713927107411-ESTRUCTURA DOCUMENTAL PROYECTO (1).pdf";
        const archivo = new File([rutaArchivo], 'nombre_del_archivo.pdf'); 
        addArchivo(archivo);
    };

    return (
        <section className="flex flex-col items-center font-serif m-[2vh]">
            {
                !sesionUser && (
                    <><ButtonNav text="Regresar" href="/"></ButtonNav></>
                )
            }
            {
                sesionUser?.Rol === "Cliente" && (
                    <><ButtonNav text="Regresar" href="/usuarios/libros"></ButtonNav></>
                )
            }
            <div className="flex m-[2vh] w-[60%] h-auto bg-red-300">
                <div className="flex flex-col items-center justify-center w-[50%] h-[40vh] m-[2vh]">
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-3xl m-[2vh]">{libro?.titulo}</h1>
                        <h2 className="text-xl my-[2vh]">Precio: ${libro?.costo}</h2>
                    </div>
                    <div className="flex justify-center">
                        <h3 className="text-sm text-white mb-[3vh] w-[90%] text-center">
                            {libro?.descripcion}
                        </h3>
                    </div>
                    <div>
                        {/* {
                            libro?.costo == 0
                                ? <button onClick={() => archivo("../../../../docs/1713927107411-ESTRUCTURA DOCUMENTAL PROYECTO (1).pdf")}><a href={archivoURL} download className="no-underline">Descarga El libro</a></button>
                                : <button onClick={() => archivo(libro.archivo)}><a href={archivoURL} download className="no-underline">Descarga El libro</a></button>
                        } */}

                        <button onClick={handleClick}>Descargar El libro</button>
                        {archivoURL && <a href={archivoURL} download className="no-underline">Descargar El libro</a>}
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-[50%] h-[40vh]">
                    <div>
                        <img src={libro?.image} alt="" className="w-[30vh] h-[35vh] object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}