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
        <div className="flex flex-col items-center m-[3vh] h-[50vh] p-[2vh]">
            <div>
                <ButtonNav href="/" text="Regresar"/>
            </div>
            <nav className="flex my-[3vh] w-[90%] justify-center">
                <button 
                    onClick={Inicio}
                    className="m-[2vh] bg-emerald-300 p-[1vh] rounded-[1vh] text-white hover:bg-transparent hover:text-emerald-300 border-solid border-2 hover:border-emerald-300"
                >
                    Iniciar Sesion
                </button>
                <button 
                    onClick={Registros}
                    className="m-[2vh] bg-emerald-300 p-[1vh] rounded-[1vh] text-white hover:bg-transparent hover:text-emerald-300 border-solid border-2 hover:border-emerald-300"
                >
                    Registrar
                </button>
            </nav>
            {formRender}
        </div>
    )
}