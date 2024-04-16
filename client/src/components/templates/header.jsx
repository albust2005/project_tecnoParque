import { ButtonNav } from "../buttons/bNav";


export function Header() {
    return (
        <nav className="flex justify-between p-[2vh] border-solid border-2 items-center">
            <h1 className="font-serif text-xl">Empresa ABC</h1>
            <ButtonNav href="/libros" text="Libros"/>
            <ButtonNav href="/login" text="Iniciar Sesion"/>
        </nav>
    )
}