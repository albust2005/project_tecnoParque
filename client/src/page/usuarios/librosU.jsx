import { useState } from "react";
import { useTemaContext } from "../../components/providers/temaProvider";
import { Link } from "react-router-dom";

import { ButtonNav } from "../../components/buttons/bNav";

export function LibrosU() {

    const [select, setSelect] = useState(null);

    const temas = useTemaContext();

    const Libros = [
        {
            titulo: "El amor y otros demonios",
            descripcion: "Libro triste",
            image: "../../src/assets/img/libros.jpg",
            categoria: 1
        },
        {
            titulo: "El amor y otros demonios",
            descripcion: "Libro triste",
            image: "../../src/assets/img/libros.jpg",
            categoria: 2
        },
        {
            titulo: "El amor y otros demonios",
            descripcion: "Libro triste",
            image: "../../src/assets/img/libros.jpg",
            categoria: 3
        },
        {
            titulo: "El amor y otros demonios",
            descripcion: "Libro triste",
            image: "../../src/assets/img/libros.jpg",
            categoria: 4
        },
        {
            titulo: "El amor y otros demonios",
            descripcion: "Libro triste",
            image: "../../src/assets/img/libros.jpg",
            categoria: 5
        },
        {
            titulo: "El amor y otros demonios",
            descripcion: "Libro triste",
            image: "../../src/assets/img/libros.jpg",
            categoria: 3
        },
        {
            titulo: "El amor y otros demonios",
            descripcion: "Libro triste",
            image: "../../src/assets/img/libros.jpg",
            categoria: 5
        },
        {
            titulo: "El amor y otros demonios",
            descripcion: "Libro triste",
            image: "../../src/assets/img/libros.jpg",
            categoria: 4
        }
    ]

    const mandar = () => {
        return (
          <ModalSol
            // estado={estadoModal1}
            // cambiarEstado={cambiarEstadoModal1}
            // NIT={nit}
          />
        );
      };

    return ( 
        <section className="flex flex-col w-[100%]">
            <nav className="flex flex-col p-[2vh] bg-green-400 w-full">
                <div className="mb-[2vh]">
                    <ButtonNav href="/usuarios" text="Regresar"/>
                </div>
                <div className="flex justify-around">
                    {
                        temas?.map((tema) => {
                            return (
                                <div key={tema.COD} className="bg-gray-200 p-[1vh] rounded-[2vh]">
                                    <button>{tema.tema}</button>
                                </div>
                            )
                        })
                    }
                </div>
            </nav>
            <div className="w-[90%] container grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 ml-[20vh]">
                {
                    Libros.map((libro, Index) => {
                        return (
                            <div key={Index} className="bg-gray-200 p-[2vh] w-[30vh] m-[2vh]">
                                <Link>
                                    <img src={libro.image} alt="" className="w-[20vh]"/>
                                    <div>
                                    <h3>{libro.titulo}</h3>
                                    <button >Ver Mas</button>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}