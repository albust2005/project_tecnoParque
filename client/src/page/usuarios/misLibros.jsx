import { useLibrosContext } from "../../components/providers/librosProvider"

export function MisLibros() {

    const librosE = [ "21345157", "24518786", "65958575" ]

    const { libros } = useLibrosContext();

    const librosS = librosE.map((li) => (libros.find(libro => libro.COD == li)))

    console.log(librosS)

    return (
        <section className="w-full flex flex-col items-center gap-6 p-[2vh]">
            <h1 className="font-bold text-5xl">Mis libros</h1>
            {
                librosS?.length === 0
                ? <h1 className="font-bold text-3xl">Aun no haz reservado ningun libro</h1>
                :
                <section className="mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[1000px]">
                    {
                        librosS?.map(libro => {
                            return (
                                <div key={libro?.COD} className="w-[40vh] rounded-md bg-black text-white">
                                    <div>
                                        <img src={libro?.image} className="rounded-t-md max-h-[30vh] w-full object-cover object-bottom" alt="" />
                                    </div>
                                    <div className="p-3 flex flex-col gap-2">
                                        <div className="min-h-40">
                                            <h1 className="font-semibold text-wrap">{libro?.titulo}</h1>
                                            <p className="h-[19vh] overflow-hidden">{libro?.descripcion}</p>
                                            <p>costo: {libro?.costo}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </section>
            }
        </section>
    )
}