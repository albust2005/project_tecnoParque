import { Route, Routes } from "react-router-dom"
import { LibrosPublicados } from "./librosPublicados"
import { PerfilE } from "./perfilE"
import { Publicar } from "./publicar"
import { Estadisticas } from "./estadisticas"

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

    return (
        <section>
            <h1>Index Empresa</h1>
        </section>
    )
}