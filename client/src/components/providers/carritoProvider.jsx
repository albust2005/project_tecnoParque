import { createContext, useContext, useState } from "react";
import { useToastify } from "../hooks/useToastify";

const carritoUserContext = createContext()
export const useCarritoUserContext = () => useContext(carritoUserContext)

export function CarritoUseProvider({ children }) {
    const [cart, setCart] = useState(false)
    const [libros, setLibros] = useState([])
    const { showToastMessage } = useToastify()

    const showCart = () => {
        setCart(!cart)
    }

    const addToCart = libro => {
        const { COD } = libro
        const libroInCart = libros.findIndex(item => item.COD === COD)

        if (libroInCart >= 0) {
            showToastMessage('este libro ya ha sido añadido')

            return
        }

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
    }

    return (
        <carritoUserContext.Provider value={{
            librosCart: libros,
            cart,
            showCart,
            addToCart, 
            removeToCart
        }}>
            {children}
        </carritoUserContext.Provider>
    )
}