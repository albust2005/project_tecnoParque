import { Link } from "react-router-dom"
import { useLibrosContext, useLibrosControllerContext } from "../../components/providers/librosProvider"
import { useTemaContext } from "../../components/providers/temaProvider";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export function LibrosPublicados() {
    const { temas }  = useTemaContext();
    const { libros } = useLibrosContext();

    const [ librosL, setLibrosL ] = useState(libros) 

    const filterTema = (Tema) => {
        if (Tema === "All"){
            setLibrosL(libros)
            return
        }

        const COD = temas.find(tema => tema.tema == Tema)
        const filteredLibros = libros.filter(libro => libro.COD_tema === COD.COD)
        setLibrosL(filteredLibros)
    }


    const { eliminarLibro } = useLibrosControllerContext()

    return (
        <section className="w-full flex flex-col items-center gap-6">
            <nav className="flex flex-col p-[2vh] bg-[#576A5B] w-full">
                <Link to="/usuarios">
                    <FontAwesomeIcon icon={faArrowLeft} style={{color: "#fff"}} size="lg"/>
                </Link>
                <div className="flex justify-around">
                    <div className="bg-gray-200 p-[1vh] rounded-[2vh]">
                            <button onClick={() => filterTema("All")}>All</button>
                    </div>
                    {
                        temas?.map((tema) => {
                            return (
                                <div key={tema.COD} className="bg-gray-200 p-[1vh] rounded-[2vh]">
                                    <button onClick={() => filterTema(tema.tema)}>{tema.tema}</button>
                                </div>
                            )
                        })
                    }
                </div>
            </nav>
            <div>
                <h1 className="font-bold text-5xl">Tus libros</h1>
            </div>
            {
                librosL?.length === 0
                    ?
                    <h1>Aun no haz publicado ningun libro</h1>
                    :
                    <section className="mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[1000px]">
                        {
                            librosL?.map(libro => (
                                <div key={libro.COD} className="w-full rounded-md bg-black text-white">
                                    <div>
                                        <img src="../src/assets/img/libros.jpg" className="rounded-t-md max-h-96 w-full object-cover" alt="" />
                                    </div>
                                    <div className="p-3 flex flex-col gap-2">
                                        <div className="min-h-40">
                                            <h1 className="font-semibold text-wrap">{libro.titulo}</h1>
                                            <p className="">{libro.descripcion}</p>
                                            <p>costo: {libro.costo}</p>
                                        </div>
                                        <div className="flex flex-row-reverse gap-3 text-black">
                                            <Link
                                                to={`/empresa/libros/editar/${libro.COD}`}
                                                className="bg-neutral-100 px-2 min-h-4 rounded-sm">
                                                Editar
                                            </Link>
                                            <button onClick={() => eliminarLibro(libro.COD)} className="bg-neutral-100 px-2 min-h-4 rounded-sm">Eliminar</button>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </section>

            }
        </section>
    )
}