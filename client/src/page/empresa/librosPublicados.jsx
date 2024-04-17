import { useLibrosContext } from "../../components/providers/librosProvider"

export function LibrosPublicados() {
    const { libros } = useLibrosContext()


    return (
        <section className="w-full flex flex-col items-center mt-20 gap-6 font-serif">
            <div>
                <h1 className="font-bold text-5xl">Tus libros</h1>
            </div>
            {
                libros?.length === 0
                    ?
                    <h1>Aun no haz publicado ningun libro</h1>
                    :
                    <section className="mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-1000">
                        {
                            libros?.map(libro => (
                                <div key={libro.id} className="w-full rounded-md bg-[#576A5B] text-white">
                                    <div>
                                        <img src="../src/assets/img/libros.jpg" className="rounded-t-md max-h-96 w-full object-fill" alt="" />
                                    </div>
                                    <div className="p-3 flex flex-col gap-2 ">
                                        <div>
                                            <h1 className="font-semibold text-wrap text-xl">{libro.titulo}</h1>
                                            <p className="text-lg">{libro.descripcion}</p>
                                            <p className="font-semibold text-xl">Costo</p>
                                            <p>{libro.costo}</p>
                                        </div>
                                        <div className="flex flex-row-reverse gap-3 text-[#576A5B] w-full">
                                            <button className="bg-white px-2 min-h-4 rounded-sm border-2 border-transparent
                                            hover:bg-transparent hover:border-white hover:text-white">
                                                Editar
                                            </button>
                                            <button className="bg-neutral-100 px-2 min-h-4 rounded-sm border-2 border-transparent
                                            hover:bg-transparent hover:border-white hover:text-white">
                                                Eliminar
                                            </button>
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