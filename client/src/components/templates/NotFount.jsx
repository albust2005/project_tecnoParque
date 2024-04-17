import { Link } from "react-router-dom";

export function NotFount() {
    return (
        <div className="w-full h-[70vh] flex flex-col justify-center items-center gap-3">
            <h1 className="text-4xl">No se encontro esta ruta</h1>
            <Link
                to="/"
                className="text-3xl bg-black text-white p-2 rounded-md transition-all hover:bg-zinc-800">
                vuelve al inicio
            </Link>
        </div>
    )
}