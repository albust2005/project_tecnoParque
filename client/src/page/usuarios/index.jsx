import { useUserContext } from "../../components/providers/userProvider"
import { Route, Routes } from "react-router-dom";
import { PerfilU } from "./perfil";
import { LibrosU } from "./librosU";
import { MisLibros } from "./misLibros";
import { DescLibros } from "../../components/templates/descLibro";
import { Carrito } from "./carrito";

export function IndexU() { 
    return(
        <>
            <Routes>
                <Route path="/" element={<IndexPage/>}></Route>
                <Route path="/perfil" element={<PerfilU/>}></Route>
                <Route path="/libros" element={<LibrosU/>}></Route>
                <Route path="/misLibros" element={<MisLibros/>}></Route>
                <Route path="/libros/descLibros/:COD" element={<DescLibros/>}></Route>
                {/* <Route path="/carrito" element={<Carrito/>}></Route> */}
            </Routes>
        </>
    )
}

function IndexPage() {

    const { sesionUser } = useUserContext();

    return (
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
    )
}