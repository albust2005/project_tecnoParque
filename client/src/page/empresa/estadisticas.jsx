import { useState } from "react"
import { useLibrosContext } from "../../components/providers/librosProvider"

export function Estadisticas() {

    const { libros } = useLibrosContext()

    return (
        <section className="flex flex-col p-[2vh] w-full items-center">
            <div className="flex m-[2vh] px-[4vh] py-[2vh] bg-[#576A5B] rounded-sm w-1/2 text-white justify-center font-serif text-2xl">
                <h1 className="mr-[2vh]">Se ha conseguido un total de descargas de:</h1>
                <h2>0</h2>
            </div>
            <div className=" flex flex-col w-[90%] items-center"> 
                {
                    libros?.length === 0
                        ?
                        <h1>Aun no haz publicado ningun libro</h1>
                        :
                        <section className="mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-1000">
                            {
                                libros?.map(libro => (
                                    <div key={libro?.COD} className="w-full rounded-md bg-[#576A5B] text-white">
                                        <div>
                                            <img src={libro?.image} className="rounded-t-md max-h-96 w-full object-fill" alt="" />
                                        </div>
                                        <div className="p-3 flex flex-col gap-2 ">
                                            <div>
                                                <h1 className="font-semibold text-wrap text-xl">{libro?.titulo}</h1>
                                                <h1 className="font-semibold text-wrap text-xl">Descargas:</h1>
                                                <p className="text-lg">0</p>
                                                <p className="font-semibold text-xl">Costo</p>
                                                <p>{libro?.costo}</p>
                                            </div>
                                            {/* <div className="flex flex-row-reverse gap-3 text-[#576A5B] w-full">
                                                <button className="bg-white px-2 min-h-4 rounded-sm border-2 border-transparent
                                                hover:bg-transparent hover:border-white hover:text-white">
                                                    Editar
                                                </button>
                                                <button className="bg-neutral-100 px-2 min-h-4 rounded-sm border-2 border-transparent
                                                hover:bg-transparent hover:border-white hover:text-white">
                                                    Eliminar
                                                </button>
                                            </div> */}
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