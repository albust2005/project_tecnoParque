import { useState } from "react";
import { ButtonNav } from "../components/buttons/bNav";
import { useTemaContext } from "../components/providers/temaProvider";
import { useLibrosContext } from "../components/providers/librosProvider";

export function Libros() { 

    //const [select, setSelect] = useState(null);

    const { temas }  = useTemaContext();
    const { libros } = useLibrosContext();

    console.log(libros)

    return ( 
        <section className="flex flex-col w-[100%]">
            <nav className="flex flex-col p-[2vh] bg-green-400 w-full">
                <div className="mb-[2vh]">
                    <ButtonNav href="/" text="Regresar"/>
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
                    libros?.map((libro, Index) => {
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