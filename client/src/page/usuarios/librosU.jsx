import { ButtonNav } from "../../components/buttons/bNav";
import { useTemaContext } from "../../components/providers/temaProvider";
import { useLibrosContext } from "../../components/providers/librosProvider";
import { useState } from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export function LibrosU() {

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

    return ( 
        <section className="flex flex-col w-[100%]">
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
            <div className="w-full flex flex-col items-center mt-20 gap-6">
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
                                        <div className="p-[2vh] flex flex-col gap-2">
                                            <div className="min-h-[15vh]">
                                                <h1 className="font-semibold text-wrap">{libro.titulo}</h1>
                                                <p className="">{libro.descripcion}</p>
                                                <p>costo: ${libro.costo}</p>
                                            </div>
                                        </div>
                                        <div className="py-[2vh]">
                                            <ButtonNav text="Ver mas" href={`/usuarios/libros/descLibros/${libro.COD}`}></ButtonNav>
                                        </div>
                                    </div>
                                ))
                            }
                        </section>

                }
            </div>
        </section>
    )
}