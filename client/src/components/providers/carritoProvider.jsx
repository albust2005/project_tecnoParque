import { createContext, useContext, useState } from "react";
import { useToastify } from "../hooks/useToastify";
import { useComprarLibros } from "../hooks/useComprarLibro.js";

import axios from 'axios';


const carritoUserContext = createContext()
export const useCarritoUserContext = () => useContext(carritoUserContext)

export function CarritoUseProvider({ children }) {
    const [pay, setPay] = useState(0)
    const [cart, setCart] = useState(false)
    const [libros, setLibros] = useState([])
    const { showToastMessage } = useToastify()
    const { comprarLibro } = useComprarLibros()

    const showCart = () => {
        setCart(!cart)
    }

    const addToCart = libro => {
        const { COD } = libro
        const libroInCart = libros.findIndex(item => item.COD === COD)

        if (libroInCart >= 0) {
            showToastMessage('este libro ya ha sido añadido')

            return
        } else {
            const newTotal = pay + Number(libro.costo);
            setPay(newTotal)
            console.log(pay)
        }

        console.log(pay)

        setLibros(prevLibro =>
            [
                ...prevLibro,
                {
                    ...libro
                }
            ]
        )
    }

    const removeToCart = libro => {
        const { COD } = libro
        setLibros(libros.filter(item => item.COD !== COD))
        const newTotal = pay - Number(libro.costo)
        setPay(newTotal)
    }

    return (
        <carritoUserContext.Provider value={{
            librosCart: libros,
            cart,
            showCart,
            addToCart, 
            removeToCart,
            comprarLibro,
            pay
        }}>
            {children}
        </carritoUserContext.Provider>
    )
}