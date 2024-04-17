
import { ButtonNav } from "../../components/buttons/bNav";
import { useLibrosUser } from "../../components/hooks/useLibrosUser";
import { useTema } from "../../components/hooks/useTema";


export function LibrosU() {

    const { temas } = useTema();

    const { libros } = useLibrosUser(); 

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
                    libros.map((libro, Index) => {
                        return (
                            <div key={Index} className="bg-gray-200 p-[2vh] w-[30vh] m-[2vh]">
                                <img src="../../../src/assets/img/libros.jpg" alt="" className="w-[20vh] h-[25vh] object-cover"/>
                                <div>
                                    <h3>{libro.titulo}</h3>
                                    <ButtonNav text="Ver mas" href={`/usuarios/libros/descLibros/${libro.COD}`}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}