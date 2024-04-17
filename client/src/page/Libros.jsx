import { useState } from "react";
import { ButtonNav } from "../components/buttons/bNav";
import { useTemaContext } from "../components/providers/temaProvider";
import { useLibrosContext } from "../components/providers/librosProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export function Libros() { 

    //const [select, setSelect] = useState(null);

    const { temas }  = useTemaContext();
    const { libros } = useLibrosContext();

    console.log(libros)

    return ( 
        <section className="flex flex-col w-[100%] font-serif">
            <nav className="flex flex-col p-[2vh] bg-[#576A5B] w-full">
                <Link to="/">
                    <FontAwesomeIcon icon={faArrowLeft} style={{color: "#fff"}} size="lg"/>
                </Link>
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
                    libros?.map((libro, Index) => {
                        return (
                            <div key={Index} className="bg-[#576A5B] p-[2vh] w-[4   0vh] m-[2vh] text-white">
                                <img src={libro.image} alt="" className="w-[20vh]"/>
                                <div>
                                <h3 className="text-3xl">{libro.titulo}</h3>
                                <p className="text-lg">{libro.descripcion}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}