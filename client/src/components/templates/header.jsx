import { ButtonNav } from "../buttons/bNav";


export function Header() {
    return (
        <nav className="flex justify-between p-[2vh] border-solid border-2">
            <h1>Empresa ABC</h1>
            <ButtonNav href="" text="Libros"/>
            <ButtonNav href="" text="Iniciar Sesion"/>
        </nav>
    )
}