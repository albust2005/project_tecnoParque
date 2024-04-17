// Elementos de Estado
import { useState } from "react";


// Componentes de los formularios de registro e ingreso
import { Registro } from "./registro";
import { InicioSesion } from "./inicioSesion";

import { Link } from "react-router-dom";
import { ButtonNav } from "../components/buttons/bNav";

export function useChangeLogin() {
    const [form, setForm] = useState("Iniciar");

    const formRender = form === "Iniciar" ? <InicioSesion></InicioSesion> : <Registro></Registro>;

    const Inicio = () => {
        setForm((prevform) => (prevform === "Iniciar" ? "Iniciar" : "Iniciar"));
    }

    const Registros = () => {
        setForm((prevform) => (prevform === "Registrar" ? "Registrar" : "Registrar"));
    }

    return { Inicio, Registros , formRender }
}

export function Login() {
    const { Inicio, Registros, formRender } = useChangeLogin()
    
    return (
        <div className="flex flex-col items-center  h-[50vh] p-[2vh]">
        
            <nav className="flex mb-1 w-1/2 justify-center font-serif text-xl">
                <button 
                    onClick={Inicio}
                    className="m-[2vh] bg-[#576A5B] p-[1vh] rounded-sm text-white hover:bg-transparent hover:text-[#576A5B] 
                    border-solid border-2 border-transparent hover:border-[#576A5B] w-full"
                >
                    Iniciar Sesion
                </button>
                <button 
                    onClick={Registros}
                    className="m-[2vh] bg-[#576A5B] p-[1vh] rounded-sm text-white hover:bg-transparent hover:text-[#576A5B] 
                    border-solid border-2 border-transparent hover:border-[#576A5B] w-full"
                >
                    Registrar
                </button>
            </nav>
            
            {formRender}
        </div>
    )
}