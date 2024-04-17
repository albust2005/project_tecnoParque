import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLibrosContext } from "./librosProvider";
import { useUserContext } from "./userProvider";
import { useUsuarioContext } from "./usuariosProvider";


const carritoUserContext = createContext()
const carritoUserCrudContext = createContext()

export const useCarritoUserContext = () => useContext(carritoUserContext)
export const useCarritoUserCrudContext = () => useContext(carritoUserCrudContext)

export function CarritoUseProvider({ children }) {
    const navigate = useNavigate()
    const { sesionUser } = useUserContext()
    const { usuarios } = useUsuarioContext()

    const ID_user = usuarios.find((usuario) => usuario.username == sesionUser.username ? usuario.ID : null) 

    const { libros } = useLibrosContext()
    const [ libroSeleccionado , setLibroSeleccionado ] = useState([])
    const [ carritoItem, setCarritoItem ] = useState([])
    const [ valor, setValor ] = useState(0)

    const createCarrito = () => {
        const newItem = {
            COD: Date.now(),
            ID_usuario: ID_user,
            fecha: Date.now(),
            valor: valor
        }

        console.log(newItem)
        setCarritoItem([...carritoItem, newItem])

        navigate('/usuarios/carrito')
    }

    const addLibroSeleccionado = async (id) => {
        const libroExistente = libroSeleccionado.find(libro => libro.ID === id);
        if (libroExistente) {
            alert('Este libro ya ha sido selecionado!');
            navigate(`/usuario/carrito`)
            return;
        }

        const nuevoLibroSeleccionado = await libros.find(libro => libro.id === id)
        setValor( valor + nuevoLibroSeleccionado.costo )
        setLibroSeleccionado([...libroSeleccionado, nuevoLibroSeleccionado])

        alert('Libro agregado correctamente')
        navigate(`/usuario/carrito`)
    }

    return (
        <carritoUserContext.Provider value={{libroSeleccionado: libroSeleccionado, carritoItem: carritoItem}}>
            <carritoUserCrudContext.Provider value={{ addLibroSeleccionado, createCarrito}}>
                { children }
            </carritoUserCrudContext.Provider>
        </carritoUserContext.Provider>
    )
}