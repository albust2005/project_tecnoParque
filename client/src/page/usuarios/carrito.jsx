import { useCarritoUserContext } from "../../components/providers/carritoProvider"

export function CarritoItem({ image, titulo, costo, removeToCart }) {
    return (
        <article className="bg-white flex flex-col p-4 gap-2 rounded-md">
            <div className="min-h-28 bg-black">
                <img src={image} alt="" />
            </div>
            <div>
                <h1 className="text-xl">{titulo}</h1>
                <h1>Costo: {costo}</h1>
            </div>
            <div className="w-full flex flex-row-reverse gap-2">
                <button>
                    comprar
                </button>
                <button
                    onClick={removeToCart}
                >
                    eliminar
                </button>
            </div>
        </article>
    )
}



export function Carrito() {
    const { librosCart, removeToCart } = useCarritoUserContext()

    return (
        <section className="absolute top-24 flex flex-col gap-2 right-0 h-full min-w-96 bg-slate-400">
            <h1 className="text-2xl text-center pt-3">Libros a pagar</h1>
            <div className="px-3 flex flex-col gap-3">
                {
                    librosCart.length === 0 ?
                        <h1 className="text-xl text-wrap text-center">No haz agregado ningun libro</h1>
                        :
                        (
                            librosCart.map(libro => (
                                <CarritoItem
                                    key={libro.COD}
                                    image={libro.image}
                                    titulo={libro.titulo}
                                    costo={libro.costo}
                                    removeToCart={() => removeToCart(libro)}
                                >
                                </CarritoItem>
                            ))
                        )
                }
            </div>
            <div className="text-center">
                <button className="bg-white p-2 rounded-md">
                    Comprar Todos
                </button>
            </div>
        </section >
    )
}