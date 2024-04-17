import { Route, Routes } from "react-router-dom"
import { LibrosPublicados } from "./librosPublicados"
import { PerfilE } from "./perfilE"
import { Publicar } from "./publicar"
import { Estadisticas } from "./estadisticas"

import { useUserContext } from "../../components/providers/userProvider"

export function IndexE() {
    return (
        <>
            <Routes>
                <Route path="/" element={<IndexEPage/>}></Route>
                <Route path="/perfil" element={<PerfilE/>}></Route>
                <Route path="/publicar" element={<Publicar/>}></Route>
                <Route path="/libros" element={<LibrosPublicados/>}></Route>
                <Route path="/estadisticas" element={<Estadisticas/>}></Route>
            </Routes>
        </>
    )
}

function IndexEPage() {

    const { sesionUser } = useUserContext();

    return (
        <section>
            <section>
            <div className="flex flex-col items-center w-full mt-[3%]">
                <h1 className="font-serif text-6xl">
                    Bienvenido {sesionUser.username}
                </h1>
                <p className="font-serif mt-[3%]">
                    “Un libro debe ser el hacha que rompa el mar helado que hay dentro de nosotros”. Franz Kafka
                </p>
                <p className="font-serif mt-[3%]">
                    “Si no te gusta leer, no has encontrado el libro correcto”. J.K. Rowling
                </p>
                <p className="font-serif mt-[3%]">
                    No es cierto que tengamos solo una vida: si leemos podemos vivir tantas y de tantos tipos como queramos”. Samuel I. Hayakawa
                </p>
            </div>
        </section>
        </section>
    )
}