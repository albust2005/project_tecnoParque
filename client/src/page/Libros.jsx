import { useState } from "react";
import { ButtonNav } from "../components/buttons/bNav";

export function Libros() { 

    const [select, setSelect] = useState(null);
    
    const categorias = [
        {
            COD: 1,
            tema: "terror"     
        },
        {
            COD: 2,
            tema: "Comedia"     
        },
        {
            COD: 3,
            tema: "Ciencia Ficción"     
        },
        {
            COD: 4,
            tema: "Romance"     
        },
        {
            COD: 5,
            tema: "Criminalistica"     
        }
    ]

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

    return ( 
        <section className="flex flex-col w-[100%]">
            <nav className="flex flex-col p-[2vh] bg-green-400 w-full">
                <div className="mb-[2vh]">
                    <ButtonNav href="/" text="Regresar"/>
                </div>
                <div className="flex justify-around">
                    {
                        categorias.map((categoria) => {
                            return (
                                <div key={categoria.COD} className="bg-gray-200 p-[1vh] rounded-[2vh]">
                                    <button>{categoria.tema}</button>
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
                                <img src={libro.image} alt="" className="w-[20vh]"/>
                                <div>
                                <h3>{libro.titulo}</h3>
                                <p>{libro.descripcion}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}