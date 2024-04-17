import { useLibrosContext, useLibrosControllerContext } from "../../components/providers/librosProvider"

export function LibrosPublicados() {
    const { libros } = useLibrosContext()
    const { eliminarLibro } = useLibrosControllerContext()

    return (
        <section className="w-full flex flex-col items-center mt-20 gap-6">
            <div>
                <h1 className="font-bold text-5xl">Tus libros</h1>
            </div>
            {
                libros?.length === 0
                    ?
                    <h1>Aun no haz publicado ningun libro</h1>
                    :
                    <section className="mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[1000px]">
                        {
                            libros?.map(libro => (
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
                                            <button className="bg-neutral-100 px-2 min-h-4 rounded-sm">Editar</button>
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