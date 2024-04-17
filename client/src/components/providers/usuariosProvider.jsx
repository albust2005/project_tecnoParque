import { createContext, useContext } from "react";
import { useUsuariosUser } from "../hooks/useUsuariosUser";

const usuarioContext = createContext()

export const useUsuarioContext = () => {
    return useContext(usuarioContext)
}

export function UsuarioProvider ({ children }) {
    const { usuarios } = useUsuariosUser()

    return (
        <usuarioContext.Provider value={{usuarios}}>
            { children }
        </usuarioContext.Provider>
    )
}