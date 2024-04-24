import { Link } from "react-router-dom";
import { useState } from "react";
import { useLibrosContext } from "../../components/providers/librosProvider";

export function Carrito() {

    const librosE = [ "21345157", "24518786", "65958575" ]
    const { libros } = useLibrosContext();
    const librosS = librosE.map((li) => (libros.find(libro => libro.COD == li)))
    console.log(librosS)

    return (
        <section className="">
            <h1>Libros a pagar</h1> 
            <div>
                <button>Eliminar</button>
                <button>Pagar</button>
            </div>
            <div>
                
            </div>
        </section>
    )
}