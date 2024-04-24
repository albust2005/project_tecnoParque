import { ButtonNav } from "../../components/buttons/bNav";
import { useTemaContext } from "../../components/providers/temaProvider";
import { useLibrosContext } from "../../components/providers/librosProvider";
import { useState, useEffect } from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCarritoUserContext } from "../../components/providers/carritoProvider";


export function LibrosU() {

    const { temas } = useTemaContext();
    const { libros } = useLibrosContext();
    const { addToCart } = useCarritoUserContext()

    const [librosL, setLibrosL] = useState([]);
    const [filtroEjecutado, setFiltroEjecutado] = useState(false);

    const filterTema = (Tema = "All") => {
        if (Tema === "All") {
            setLibrosL([...libros]);
            setFiltroEjecutado(false);
            return;
        }

        const COD = temas.find(tema => tema.tema === Tema);
        const filteredLibros = libros.filter(libro => libro.COD_tema === COD.COD);
        setLibrosL(filteredLibros);
        setFiltroEjecutado(true);
    };

    useEffect(() => {
        if (!filtroEjecutado) {
            setLibrosL([...libros]);
        }
    }, [filtroEjecutado, libros]);


    return (
        <section className="flex flex-col w-[100%]">
            <nav className="flex flex-col p-[2vh] bg-[#576A5B] w-full">
                <div className="flex justify-around gap-4">
                    <Link to="/usuarios">
                        <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#fff" }} size="lg" />
                    </Link>
                    <div className="bg-gray-200 w-full text-center rounded-md">
                        <button className="w-full" onClick={() => filterTema("All")}>Todos</button>
                    </div>
                    {
                        temas?.map((tema, Index) => {
                            return (
                                <div key={Index} className="bg-gray-200 w-full text-center rounded-md">
                                    <button className="w-full" onClick={() => filterTema(tema.tema)}>{tema.tema}</button>
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
                        <h1>No se han publicado ningun libro</h1>
                        :
                        <section className="mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[1000px]">
                            {
                                librosL?.map(libro => (
                                    <div key={libro.COD} className="w-full rounded-md bg-black text-white">
                                        <div>
                                            <img src={libro.image} className="rounded-t-md max-h-[30vh] w-full object-cover object-bottom" alt="" />
                                        </div>
                                        <div className="p-5 flex flex-col gap-2">
                                            <div className="min-h-[15vh]">
                                                <h1 className="font-semibold text-wrap">{libro.titulo}</h1>
                                                <p className="">{libro.descripcion}</p>
                                                <p>costo: ${libro.costo}</p>
                                            </div>
                                        </div>
                                        <div className="w-full flex justify-between items-center px-5 pb-5">
                                            <ButtonNav text="Ver mas" href={`/usuarios/libros/descLibros/${libro.COD}`}></ButtonNav>
                                            {
                                                libro.costo == 0 
                                                ? <></>
                                                :
                                                <button
                                                    onClick={() => addToCart(libro)}
                                                    className="hover:scale-125 transition-all">
                                                    <FontAwesomeIcon
                                                        icon={faCartPlus}
                                                    ></FontAwesomeIcon>
                                                </button>
                                            }
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