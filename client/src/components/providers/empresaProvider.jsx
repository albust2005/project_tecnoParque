import { createContext, useContext } from "react";
import { useEmpresasUser } from "../hooks/useEmpresasUser";

const empresaContext = createContext()

export const useEmpresaContext = () => {
    return useContext(empresaContext)
}

export function EmpresaProvider ({ children }) {
    const { empresas } = useEmpresasUser()

    return (
        <empresaContext.Provider value={{empresas}}>
            {children}
        </empresaContext.Provider>
    )
}