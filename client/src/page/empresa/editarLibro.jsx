import { useForm } from 'react-hook-form';
import { useTemaContext } from '../../components/providers/temaProvider';
import { useLibrosContext, useLibrosControllerContext } from '../../components/providers/librosProvider';
import { useParams } from 'react-router-dom';


const useFoundLibro = () => {
    const { COD } = useParams()
    console.log(COD)

    const { libros } = useLibrosContext()

    const libroSeleccionado = libros?.find(libro => libro.COD == COD)

    return { libro: libroSeleccionado }
}

export function EditarLibro() {
    const { temas } = useTemaContext()
    const { editarLibro } = useLibrosControllerContext()

    const { libro } = useFoundLibro()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <section className='mt-12 mb-12 w-full h-full flex flex-col items-center justify-center text-white font-serif'>
            <form
                className='bg-[#576A5B] p-[3vh] rounded-sm w-1/2'
                onSubmit={handleSubmit(editarLibro)}
            >
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl mb-[2vh] font-semibold">Editar Libro</h1>
                    <div className="flex flex-col w-[80%] mb-[2vh]">
                        <label className="font-serif text-xl">
                            Titulo
                        </label>
                        <input
                            type="text"
                            className="rounded-[1vh] p-[1vh] bg-transparent border-b-2 border-white focus:outline-none"
                            defaultValue={libro?.titulo}
                            {...register("titulo", {
                                required: {
                                    value: true,
                                    message: "Escribe el titulo del libro",
                                },
                            })}
                        />
                        {errors.titulo && (<span>{errors.titulo.message}</span>)}
                    </div>

                    <div className="flex flex-col w-[80%] mb-[2vh]">
                        <label className="font-serif text-xl">
                            ISBN
                        </label>
                        <input
                            type="text"
                            defaultValue={libro?.COD}
                            className="rounded-[1vh] p-[1vh] bg-transparent border-b-2 border-white focus:outline-none"
                            {...register("ISBN", {
                                required: {
                                    value: true,
                                    message: "Escribir el ISBN del libro",
                                },
                            })}
                        />
                        {errors.ISBN && (<span>{errors.ISBN.message}</span>)}
                    </div>

                    <div className="flex flex-col w-[80%] mb-[2vh]">
                        <label className="font-serif text-xl">
                            Descripcion
                        </label>
                        <textarea
                            type="text"
                            defaultValue={libro?.descripcion}
                            style={{
                                resize: 'none',
                                maxHeight: '300px',
                                formSizing: 'content'
                            }}
                            className="rounded-[1vh] p-[1vh] bg-transparent border-b-2 border-white focus:outline-none"
                            {...register("descripcion", {
                                required: {
                                    value: true,
                                    message: "Escribir la descripcion del libro",
                                },
                            })}
                        />
                        {errors.descripcion && (<span>{errors.descripcion.message}</span>)}
                    </div>


                    <div className="flex flex-col w-[80%] mb-[2vh]">
                        <label className="font-serif text-xl">
                            Costo
                        </label>
                        <input
                            type="text"
                            className="rounded-[1vh] p-[1vh] bg-transparent border-b-2 border-white focus:outline-none"
                            defaultValue={libro?.costo}
                            {...register("costo", {
                                required: {
                                    value: true,
                                    message: "Escribir el costo del libro",
                                },
                            })}
                        />
                        {errors.ISBN && (<span>{errors.ISBN.message}</span>)}
                    </div>

                    <div className="flex flex-col w-[80%] mb-[2vh]">
                        <label className="font-serif text-xl">Tema</label>
                        <select
                            name="cod_tema"
                            {...register("cod_tema", {
                                required: {
                                    value: true,
                                    message: "elije el tema del libro"
                                }
                            })}
                            className="rounded-[1vh] p-[1vh] bg-transparent border-b-2 border-white focus:outline-none"
                        >
                            <option value="tema" disabled className="text-black">Tema</option>
                            {
                                temas?.map(tema => (
                                    <option key={tema.COD} value={tema.COD} className="text-black">{tema.tema}</option>
                                ))
                            }
                        </select>
                    </div>

                    
                    <button className="m-[1vh] p-1 bg-[#F5F5DC] w-[80%] rounded-sm text-[#576A5B] border-solid border-2 
          border-transparent hover:bg-transparent hover:text-white hover:border-white text-xl">
                        editar
                    </button>
                </div>
            </form>
        </section>
    )
}