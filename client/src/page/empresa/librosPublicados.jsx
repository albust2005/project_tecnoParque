import { useLibrosContext } from "../../components/providers/librosProvider"

export function LibrosPublicados() {
    const { libros } = useLibrosContext()


    return (
        <section>
            <h1>Tus libros</h1>
            {
                libros?.length === 0
                    ?
                    <h1>Aun no haz publicado ningun libro</h1>
                    :
                    libros?.map(libro =>(
                        <div key={libro.id}>
                            <h1>{libro.titulo}</h1>
                        </div>
                    ))
            }
        </section>
    )
}