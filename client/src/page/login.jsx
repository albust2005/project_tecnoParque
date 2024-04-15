// Elementos de Estado
import { useState } from "react";


// Componentes de los formularios de registro e ingreso
import { Registro } from "./registro";
import { InicioSesion } from "./inicioSesion";

import { Link } from "react-router-dom";

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
        <div>
            <div>
                <Link to="/">
                    <button>Regresar</button>
                </Link>
            </div>
            <nav>
                <button onClick={Inicio}>
                    Iniciar Sesion
                </button>
                <button onClick={Registros}>
                    Registrar
                </button>
            </nav>
            <div>
                {formRender}
            </div>
        </div>
    )
}